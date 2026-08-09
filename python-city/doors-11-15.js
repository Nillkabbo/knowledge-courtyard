// ════════════════════════════════════════════════════════════
// THE PYTHON CITY — DOORS 11-15 (MASTER GUILDS)
// 11. Engraver: Decorators    12. Gatekeeper: Context Managers
// 13. Infinite Loom: Generators    14. Alchemist: Functional
// 15. Caravan Route: Concurrency
// ════════════════════════════════════════════════════════════

// ── GUILD 11: ENGRAVER'S SEAL — DECORATORS ──
doors.push({
  num:11, icon:"🔖", color:"#2dd4bf", name:"খোদাইয়ের সিল",
  subtitle:"The Engraver's Seal", tech:"Decorators — Wrapping Functions",
  spirit:"খাতাম — seal/stamp, from Quran 36:33 (the sign We sealed)",
  secret:"Decorator = এক function যা অন্য function-কে wrap করে। আচরণ যোগ করো subclass ছাড়া। @log, @cache, @auth — সব জায়গায়। @ = syntactic sugar for wrapper।",
  recall:{
    q:"@decorator কীভাবে কাজ করে? @functools.wraps কেন দরকার?",
    qen:"How does @decorator work? Why use functools.wraps?",
    a:"@decorator = এক function যা অন্য function-কে গ্রহণ করে, নতুন function ফেরত দেয়। @cache লেখা = cache(func) কল করার সমান। @functools.wraps নাম ও docstring সংরক্ষণ করে — নাহলে debug অসম্ভব।",
    aen:"@decorator = a function that takes another function, returns a new one. @cache = cache(func). @functools.wraps preserves name/docstring."
  },
  story:`
<p class="scene-setting">একাদশ গিল্ড। খোদাইয়ের কারখানা। ধাতব গন্ধ, হাতুড়ির শব্দ, মুদ্রার ঝনঝন। খোদাইকারী তামিম একটা সিল দেখালেন — উপরে নকশা খোদাই করা। "এই সিল যেকোনো কাগজে চাপলে একই নকশা বসে," তিনি বলেন। "Decorator ঠিক তেমনি — এক pattern, যেকোনো function-এ চাপলে একই আচরণ যোগ হয়। Logging, caching, authentication — এক সিল, অনেক function। চলো একটা একটা করে শিখি।"</p>
<p class="scene-setting en">Eleventh guild. The Engraver's workshop. Smell of metal, sound of hammers, clinking of coins. Engraver Tamim shows a seal — a design carved on top. "Press this seal on any paper — same design appears," he says. "A decorator is the same — one pattern, pressed on any function, adds the same behavior. Logging, caching, authentication — one seal, many functions. Let's learn step by step."</p>

<div class="dialogue">প্রথম প্রশ্ন: তুমি ৩০টা function লিখেছ। প্রতিটায় logging দরকার — কখন শুরু, কখন শেষ, কত সময় লাগলো। ৩০ বার একই কোড কপি? না। Decorator একবার লেখো, যেকোনো function-এ @ দিয়ে লাগাও। এটাই decorator-এর শক্তি।</div>
<div class="dialogue en">First question: you wrote 30 functions. Each needs logging. Copy the same code 30 times? No. Write a decorator once, apply it to any function with @. This is the power of decorators.</div>

<div class="code-block"># ── STEP 1: Functions are objects ──
# In Python, functions are OBJECTS. You can pass them around.

def greet():
    return "Hello!"

# A function is just a value — store it in a variable:
say_hello = greet
print(say_hello())  # Hello!

# Pass a function as an argument to another function:
def call_twice(func):
    """Call any function twice."""
    func()
    func()

call_twice(print)  # prints nothing twice (print returns None)

# Return a function from another function:
def make_greeter(name):
    """Create and return a NEW function."""
    def greeter():
        return f"Hello, {name}!"
    return greeter

greet_fatima = make_greeter("Fatima")
print(greet_fatima())  # Hello, Fatima!

# This is the foundation of decorators:
# functions that take functions and return functions.</div>

<div class="code-block"># ── STEP 2: Your first decorator (without @) ──
# A decorator is a function that TAKES a function and RETURNS
# a new function that adds behavior.

def shout(func):
    """Decorator: makes the result UPPERCASE."""
    def wrapper():
        result = func()
        return result.upper()
    return wrapper

def greet():
    return "hello world"

# Apply the decorator MANUALLY:
greet = shout(greet)    # greet is now the WRAPPER
print(greet())          # HELLO WORLD

# Step by step:
# 1. shout() takes greet as argument
# 2. shout() creates wrapper() that calls greet() and uppercases result
# 3. shout() returns wrapper
# 4. Now greet() actually calls wrapper() → "HELLO WORLD"</div>

<div class="code-block"># ── STEP 3: The @ syntax — cleaner way ──
# @decorator above a function = same as func = decorator(func)

# These two are IDENTICAL:

# Way 1 (manual):
def greet():
    return "hello"
greet = shout(greet)

# Way 2 (@ syntax — cleaner):
@shout
def greet():
    return "hello"

print(greet())  # HELLO WORLD

# @ just means: "apply this decorator to the function below"
# @shout = greet = shout(greet)

# You can stack multiple decorators:
@shout
@shout    # double uppercase (no visible effect, but shows stacking)
def greet():
    return "hi"

# Order matters! Applied bottom-to-top.</div>

<div class="code-block"># ── STEP 4: Decorators with arguments ──
# Real functions take arguments. The wrapper must pass them through.

# WITHOUT arguments (simple):
def emphasize(func):
    def wrapper():
        result = func()
        return result + "!!!"
    return wrapper

@emphasize
def greet():
    return "Hello"

print(greet())  # Hello!!!

# WITH arguments — use *args and **kwargs:
def log(func):
    """Decorator that logs function calls."""
    def wrapper(*args, **kwargs):
        print(f"Calling {func.__name__}({args})")
        result = func(*args, **kwargs)    # pass args to original
        print(f"Result: {result}")
        return result
    return wrapper

@log
def add(a, b):
    return a + b

@log
def greet(name, greeting="Hello"):
    return f"{greeting}, {name}!"

print(add(3, 5))
# Calling add((3, 5))
# Result: 8
# 8

print(greet("Fatima", greeting="Hi"))
# Calling greet(('Fatima',), {'greeting': 'Hi'})
# Result: Hi, Fatima!
# Hi, Fatima!</div>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>ভুলের গল্প:</strong> তামিম বললেন — এক শিক্ষানবিশ decorator বানালো functools.wraps ছাড়া। ফলে function-এর __name__ হয়ে গেলো "wrapper" — সব function-এর নাম একই! Stack trace পড়ে কোন function-এ error হয়েছে বোঝা গেলো না। ৩ ঘণ্টা debug। @functools.wraps = নাম সংরক্ষণ, বাধ্যতামূলক।</div></div>

<div class="code-block"># ── STEP 5: @functools.wraps — why you NEED it ──
# Without @wraps, the decorated function loses its identity.

import functools

# ❌ BAD — without @wraps:
def bad_log(func):
    def wrapper(*args, **kwargs):
        return func(*args, **kwargs)
    return wrapper

@bad_log
def my_function():
    """My awesome function."""
    return "result"

print(my_function.__name__)    # wrapper (!!! not my_function)
print(my_function.__doc__)     # None (!!! lost the docstring)

# ✅ GOOD — with @functools.wraps:
def good_log(func):
    @functools.wraps(func)     # preserves __name__, __doc__, etc.
    def wrapper(*args, **kwargs):
        return func(*args, **kwargs)
    return wrapper

@good_log
def my_function():
    """My awesome function."""
    return "result"

print(my_function.__name__)    # my_function ✓
print(my_function.__doc__)     # My awesome function. ✓

# RULE: ALWAYS use @functools.wraps in your decorators!</div>

<div class="code-block"># ── STEP 6: A real decorator — timer ──
# Measure how long any function takes to run.

import functools
import time

def timer(func):
    """Measure execution time of any function."""
    @functools.wraps(func)
    def wrapper(*args, **kwargs):
        start = time.time()
        result = func(*args, **kwargs)
        elapsed = time.time() - start
        print(f"[TIMER] {func.__name__} took {elapsed:.4f}s")
        return result
    return wrapper

@timer
def slow_function():
    time.sleep(1)
    return "Done"

@timer
def calculate_sum(n):
    return sum(range(n))

print(slow_function())
# [TIMER] slow_function took 1.0012s
# Done

print(calculate_sum(1000000))
# [TIMER] calculate_sum took 0.0523s
# 499999500000

# One decorator, ANY function. That's the power!</div>

<div class="code-block"># ── STEP 7: Logging decorator ──
# Log every function call — who called what with what arguments.

import functools

def log(func):
    """Log all calls to this function."""
    @functools.wraps(func)
    def wrapper(*args, **kwargs):
        # Format the arguments nicely:
        all_args = []
        if args:
            all_args.extend(str(a) for a in args)
        if kwargs:
            all_args.extend(f"{k}={v}" for k, v in kwargs.items())
        arg_str = ", ".join(all_args)

        print(f"[LOG] {func.__name__}({arg_str})")
        try:
            result = func(*args, **kwargs)
            print(f"[LOG] {func.__name__} -> {result}")
            return result
        except Exception as e:
            print(f"[LOG] {func.__name__} FAILED: {e}")
            raise

    return wrapper

@log
def add(a, b):
    return a + b

@log
def divide(a, b):
    return a / b

add(3, 5)
# [LOG] add(3, 5)
# [LOG] add -> 8

divide(10, 0)
# [LOG] divide(10, 0)
# [LOG] divide FAILED: division by zero</div>

<div class="code-block"># ── STEP 8: Cache decorator — memoization ──
# Store results so you don't recompute. HUGE speedup.

import functools

def memoize(func):
    """Cache results — never compute the same input twice."""
    _cache = {}

    @functools.wraps(func)
    def wrapper(*args):
        if args not in _cache:
            _cache[args] = func(*args)
        return _cache[args]

    return wrapper

# Fibonacci WITHOUT cache — incredibly slow for large n:
def fib_slow(n):
    if n <= 1:
        return n
    return fib_slow(n - 1) + fib_slow(n - 2)
# fib_slow(35) takes ~5 seconds!

# Fibonacci WITH cache — instant:
@memoize
def fib(n):
    if n <= 1:
        return n
    return fib(n - 1) + fib(n - 2)

print(fib(100))  # Instant! 354224848179261915075

# Python has a BUILT-IN cache decorator:
from functools import lru_cache

@lru_cache(maxsize=128)
def expensive_calc(n):
    # imagine this takes 1 second each call
    return n ** 2

# First call computes, second call returns cached:
print(expensive_calc(10))  # computed
print(expensive_calc(10))  # cached (instant)
print(expensive_calc.cache_info())  # hits, misses, size</div>

<div class="code-block"># ── STEP 9: Decorator with arguments ──
# Sometimes the decorator itself needs arguments.
# Example: @retry(max_attempts=5)

import functools
import time

def retry(max_attempts=3, delay=1.0):
    """Factory that creates a retry decorator."""
    def decorator(func):
        @functools.wraps(func)
        def wrapper(*args, **kwargs):
            for attempt in range(max_attempts):
                try:
                    return func(*args, **kwargs)
                except Exception as e:
                    if attempt == max_attempts - 1:
                        raise   # last attempt — let it fail
                    wait = delay * (2 ** attempt)  # exponential backoff
                    print(f"Attempt {attempt+1} failed. Retrying in {wait}s...")
                    time.sleep(wait)
        return wrapper
    return decorator

@retry(max_attempts=5, delay=0.5)
def unreliable_api_call():
    # This might fail a few times before succeeding
    import random
    if random.random() < 0.5:
        raise ConnectionError("Network error")
    return "Success!"

# Why three levels?
# retry(max_attempts=5) → returns a decorator
# decorator(func)       → returns a wrapper
# wrapper(*args)        → runs the actual function with retry logic</div>

<div class="code-block"># ── STEP 10: Real-world decorators you will see ──
# You've been using decorators without knowing it!

# Flask web framework:
# @app.route("/users")        ← registers URL route
# def get_users(): ...

# Django:
# @login_required             ← only logged-in users can access
# def dashboard(request): ...

# pytest:
# @pytest.mark.parametrize("input,expected", [(1,1), (2,4)])
# def test_square(input, expected): ...

# Python built-ins:
# @property                   ← method acts like an attribute
# @staticmethod               ← method doesn't need self
# @classmethod                ← method gets class, not instance
# @dataclass                  ← auto-generates __init__, __repr__
# @functools.lru_cache        ← auto-memoization
# @functools.wraps            ← preserves function identity

# SUMMARY:
# ┌──────────────────────────┬──────────────────────────────┐
# │ Decorator                │ What it does                 │
# ├──────────────────────────┼──────────────────────────────┤
# │ @timer (custom)          │ measures execution time      │
# │ @log (custom)            │ logs all calls               │
# │ @memoize/@lru_cache      │ caches results              │
# │ @retry (custom)          │ retries on failure           │
# │ @property                │ method → attribute           │
# │ @dataclass               │ auto __init__/__repr__       │
# │ @app.route (Flask)       │ registers URL route          │
# └──────────────────────────┴──────────────────────────────┘

# Golden rule: ALWAYS use @functools.wraps in custom decorators!</div>

<div class="diagram">
  <div class="diag-title">Decorator = সিল — function-এ আচরণ চাপো</div>
  <svg viewBox="0 0 560 240" xmlns="http://www.w3.org/2000/svg">
    <!-- Original function -->
    <rect x="20" y="20" width="180" height="70" rx="8" fill="rgba(52,211,153,0.06)" stroke="#34d399" stroke-width="2"/>
    <text x="110" y="40" text-anchor="middle" fill="#34d399" font-size="9" font-weight="bold">Original Function</text>
    <text x="110" y="58" text-anchor="middle" fill="#9a93b8" font-size="7" font-family="monospace">def fetch(uid):</text>
    <text x="110" y="72" text-anchor="middle" fill="#9a93b8" font-size="7" font-family="monospace">    return db.get(uid)</text>
    <!-- Arrow -->
    <line x1="200" y1="55" x2="240" y2="55" stroke="#fbbf24" stroke-width="2"/>
    <text x="220" y="48" text-anchor="middle" fill="#fbbf24" font-size="8" font-weight="bold">@log</text>
    <text x="220" y="75" text-anchor="middle" fill="#9a93b8" font-size="6">(wrap)</text>
    <!-- Decorated -->
    <rect x="250" y="15" width="290" height="80" rx="8" fill="rgba(251,191,36,0.06)" stroke="#fbbf24" stroke-width="2"/>
    <text x="395" y="35" text-anchor="middle" fill="#fbbf24" font-size="9" font-weight="bold">Decorated (wrapped) Function</text>
    <text x="395" y="52" text-anchor="middle" fill="#9a93b8" font-size="7" font-family="monospace">[LOG] Calling fetch((42,))</text>
    <text x="395" y="66" text-anchor="middle" fill="#34d399" font-size="7" font-family="monospace">→ original fetch(uid) runs</text>
    <text x="395" y="80" text-anchor="middle" fill="#9a93b8" font-size="7" font-family="monospace">[LOG] fetch returned in 0.001s</text>
    <!-- Common decorators -->
    <rect x="20" y="115" width="520" height="50" rx="6" fill="rgba(45,212,191,0.06)" stroke="rgba(45,212,191,0.2)" stroke-width="1"/>
    <text x="280" y="133" text-anchor="middle" fill="#34d399" font-size="8" font-weight="bold">Common Decorators</text>
    <text x="280" y="148" text-anchor="middle" fill="#9a93b8" font-size="7">@log · @cache/@lru_cache · @retry · @auth · @app.route · @property · @dataclass</text>
    <text x="280" y="158" text-anchor="middle" fill="#9a93b8" font-size="7">এক pattern → অনেক function → একই আচরণ</text>
    <!-- functools.wraps -->
    <rect x="20" y="180" width="520" height="45" rx="6" fill="rgba(240,98,146,0.04)" stroke="rgba(240,98,146,0.15)" stroke-width="1"/>
    <text x="280" y="198" text-anchor="middle" fill="#f06292" font-size="8" font-weight="bold">⚠️ @functools.wraps(func) = বাধ্যতামূলক!</text>
    <text x="280" y="213" text-anchor="middle" fill="#9a93b8" font-size="7">নাহলে __name__ = "wrapper" — debug নরক</text>
  </svg>
  <div class="diag-cap">@decorator = function wrap। @log/@cache/@retry এক pattern, অনেক function। @functools.wraps বাধ্যতামূলক।</div>
</div>

<div class="dialogue">খাতাম — সিল, মোহর। কুরআনে আল্লাহ বলেন — মৃত ভূমিতে আমরা সিল মেরেছি যা জীবিত হয় (৩৬:৩৩)। খাতাম হলো এক pattern, অনেক জায়গায় চাপা। Decorator হলো খাতাম — এক pattern (@log), অনেক function-এ চাপা। সিল ছাড়া কাগজে নকশা নেই, decorator ছাড়া function-ে আচরণ নেই।</div>
<div class="dialogue en">Khatam — seal, stamp. Allah says — We sealed the dead earth that it may revive (36:33). Khatam is one pattern, pressed on many surfaces. A decorator is khatam — one pattern (@log), pressed on many functions. Without a seal, paper has no design; without a decorator, a function has no behavior layer.</div>

<div class="secret-box">🔖 @decorator = function wrap। @log/@cache/@retry এক pattern, অনেক function। @functools.wraps বাধ্যতামূলক।</div>
`,
  senior:{
    title:"Decorators — Senior Notes",
    body:`<table class="kv-table">
<tr><th>Decorator</th><th>কাজ</th></tr>
<tr><td class="hl">@functools.lru_cache</td><td>auto-memoize</td></tr>
<tr><td class="hl">@property</td><td>method → attribute access</td></tr>
<tr><td class="hl">@staticmethod/@classmethod</td><td>class-level methods</td></tr>
<tr><td class="hl">@dataclass</td><td>auto __init__, __repr__</td></tr>
<tr><td class="hl">@app.route("/path")</td><td>Flask web route</td></tr>
</table>
<p><strong>Cross-ref:</strong> Book 52 (Code Craftsman) Door 18-এ decorator pattern + trade-offs দেখবে। Book 44 (Data Engineering)-এ caching pipeline দেখবে।</p>`
  }
});

// ── GUILD 12: GATEKEEPER — CONTEXT MANAGERS ──
doors.push({
  num:12, icon:"🚪", color:"#34d399", name:"দরোয়ানের ফটক",
  subtitle:"The Gatekeeper", tech:"Context Managers — with statement, __enter__/__exit__",
  spirit:"আমান — safety/trust, the concept of guaranteed safekeeping",
  secret:"with statement = setup → code → teardown (সবসময়)। File, lock, connection — সব রিসোর্স নিরাপদে বন্ধ। __enter__ + __exit__ দিয়ে নিজের context manager বানাও।",
  recall:{
    q:"with statement কেন ব্যবহার করবে? context manager কী করে?",
    qen:"Why use with statement? What does a context manager do?",
    a:"with = setup ও teardown গ্যারান্টিড। __enter__ (খোলো) → কোড → __exit__ (বন্ধ), error হলেও। File, database connection, lock — সব রিসোর্স নিরাপদে। manually close() করতে হয় না।",
    aen:"with = guaranteed setup + teardown. __enter__ → code → __exit__, even on error. Safe resource management."
  },
  story:`
<p class="scene-setting">দ্বাদশ গিল্ড। দরোয়ানের ফটক। শৃঙ্খলার গন্ধ, লোহার শব্দ, পাহারাদারের দৃষ্টি। দরোয়ান আদম ফটকে দাঁড়িয়ে — প্রতিটা প্রবেশকারীকে নিবন্ধন করেন, বের হওয়ার সময় নাম কাটেন। "একজনও ভেতরে থাকে না বন্ধ হওয়ার পর," তিনি বলেন। "with statement তেমনি — কোড ভেতরে ঢোকে, কাজ হয়, বের হয়। error হলেও সব বন্ধ হয়।"</p>
<p class="scene-setting en">Twelfth guild. The Gatekeeper's gate. Smell of discipline, sound of iron, watchman's gaze. Gatekeeper Adam stands at the gate — each visitor registered on entry, name crossed on exit. "No one stays inside after closing," he says. "The with statement is the same — code enters, works, exits. Even on error, everything closes."</p>

<div class="dialogue">সমস্যা: তুমি একটা database connection খুললে। কাজ শেষ হলে বন্ধ করতে হবে। কিন্তু কোড error দিলে? connection খোলা থাকে — memory leak, lock। with statement দিলে: connection খোলো → কাজ → স্বয়ংক্রিয়ভাবে বন্ধ, error হলেও।</div>
<div class="dialogue en">Problem: Open a database connection. Must close when done. But code errors? Connection stays open — memory leak, lock. with statement: open → work → auto-close, even on error.</div>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>ভুলের গল্প:</strong> আদম বললেন — একটা production app-এ connection pool ১০০-এ সেট করা ছিল। কিন্তু কোড close() কল করতো না — error হলে। ৩ দিনে সব ১০০ connection খোলা হয়ে গেলো। App আটকে গেলো। with statement দিলে — প্রতিটা connection স্বয়ংক্রিয়ভাবে ফিরতো। context manager = নিরাপত্তা গ্যারান্টি।</div></div>

<div class="code-block"># guild12_context.py — Gatekeeper
# Gatekeeper Adam: "Enter, work, exit. Always exit."

# ── THE PROBLEM: Manage resources safely ──

# We already know: with open() for files
with open("data.txt", "w") as f:
    f.write("Hello")
# f is closed here — GUARANTEED, even if write() fails

# ── DATABASE CONNECTION with context manager ──
import sqlite3

# Built-in context managers (these already work)
with sqlite3.connect("app.db") as conn:
    cursor = conn.cursor()
    cursor.execute("CREATE TABLE IF NOT EXISTS users (name TEXT)")
    conn.commit()
# Connection closed here — guaranteed

# ── BUILDING YOUR OWN: class-based ──
class Timer:
    """Context manager that measures execution time."""

    def __enter__(self):
        import time
        self.start = time.time()
        return self  # what 'as' receives

    def __exit__(self, exc_type, exc_value, traceback):
        import time
        self.elapsed = time.time() - self.start
        if exc_type:  # an error occurred
            print(f"Timer: FAILED in {self.elapsed:.3f}s")
        else:
            print(f"Timer: completed in {self.elapsed:.3f}s")
        return False  # don't suppress the error

# Usage:
with Timer() as t:
    total = sum(range(1000000))
# Prints: Timer: completed in 0.045s

# ── BUILDING YOUR OWN: contextlib (simpler) ──
from contextlib import contextmanager
import time

@contextmanager
def database_transaction(conn):
    """Auto-commit or rollback a database transaction."""
    try:
        yield conn  # give the connection to the 'with' block
        conn.commit()   # success → commit
        print("Transaction committed")
    except Exception:
        conn.rollback()  # error → rollback
        print("Transaction rolled back")
        raise

# Usage:
with database_transaction(conn) as db:
    db.execute("INSERT INTO users VALUES ('Fatima')")
    db.execute("INSERT INTO users VALUES ('Ahmed')")
# Both inserts committed together — or both rolled back

# ── FILE LOCK: Prevent concurrent access ──
@contextmanager
def file_lock(lockfile):
    """Prevent other processes from accessing simultaneously."""
    import os
    while os.path.exists(lockfile):
        time.sleep(0.1)  # wait for lock
    open(lockfile, "w").write("locked")

    try:
        yield
    finally:
        os.remove(lockfile)  # release lock

# Usage:
with file_lock("/tmp/process.lock"):
    # Only one process runs this at a time
    process_data()

# ── NESTED CONTEXT MANAGERS ──
with open("input.txt") as infile, open("output.txt", "w") as outfile:
    for line in infile:
        outfile.write(line.upper())
# Both files closed — guaranteed

# ── REAL-WORLD USE CASES ──
# with open(path) as f:           → file auto-close
# with conn:                       → DB transaction
# with lock:                       → thread safety
# with mock.patch(...):            → testing (unittest.mock)
# with cd(path):                   → change directory temporarily
# with suppress(Exception):        → silently ignore specific errors</div>

<div class="diagram">
  <div class="diag-title">Context Manager — Setup → Code → Teardown (guaranteed)</div>
  <svg viewBox="0 0 560 220" xmlns="http://www.w3.org/2000/svg">
    <defs><marker id="arrCM" markerWidth="6" markerHeight="6" refX="4" refY="3" orient="auto"><path d="M0,0 L4,3 L0,6" fill="#34d399"/></marker></defs>
    <!-- enter -->
    <rect x="20" y="20" width="150" height="50" rx="6" fill="rgba(45,212,191,0.1)" stroke="#2dd4bf" stroke-width="2"/>
    <text x="95" y="38" text-anchor="middle" fill="#2dd4bf" font-size="9" font-weight="bold">__enter__</text>
    <text x="95" y="52" text-anchor="middle" fill="#9a93b8" font-size="7">setup: open/lock</text>
    <line x1="170" y1="45" x2="210" y2="45" stroke="#34d399" stroke-width="2" marker-end="url(#arrCM)"/>
    <!-- code block -->
    <rect x="215" y="15" width="150" height="60" rx="6" fill="rgba(52,211,153,0.08)" stroke="#34d399" stroke-width="2"/>
    <text x="290" y="33" text-anchor="middle" fill="#34d399" font-size="9" font-weight="bold">with block</text>
    <text x="290" y="48" text-anchor="middle" fill="#9a93b8" font-size="7" font-family="monospace">f.write(data)</text>
    <text x="290" y="60" text-anchor="middle" fill="#9a93b8" font-size="7" font-family="monospace">db.execute(sql)</text>
    <line x1="365" y1="45" x2="405" y2="45" stroke="#34d399" stroke-width="2" marker-end="url(#arrCM)"/>
    <!-- exit -->
    <rect x="410" y="20" width="130" height="50" rx="6" fill="rgba(251,191,36,0.08)" stroke="#fbbf24" stroke-width="2"/>
    <text x="475" y="38" text-anchor="middle" fill="#fbbf24" font-size="9" font-weight="bold">__exit__</text>
    <text x="475" y="52" text-anchor="middle" fill="#9a93b8" font-size="7">teardown: close</text>
    <!-- Error path -->
    <rect x="215" y="90" width="150" height="30" rx="5" fill="rgba(240,98,146,0.06)" stroke="#f06292" stroke-width="1"/>
    <text x="290" y="108" text-anchor="middle" fill="#f06292" font-size="7">⚠️ error? __exit__ STILL runs</text>
    <line x1="365" y1="100" x2="405" y2="55" stroke="#f06292" stroke-width="1.5" stroke-dasharray="3,2" marker-end="url(#arrCM)"/>
    <!-- Tools -->
    <rect x="20" y="140" width="520" height="65" rx="6" fill="rgba(45,212,191,0.06)" stroke="rgba(45,212,191,0.2)" stroke-width="1"/>
    <text x="280" y="158" text-anchor="middle" fill="#34d399" font-size="8" font-weight="bold">তোমার নিজের Context Manager</text>
    <text x="280" y="173" text-anchor="middle" fill="#9a93b8" font-size="7">class: __enter__ + __exit__ দাও</text>
    <text x="280" y="186" text-anchor="middle" fill="#9a93b8" font-size="7">@contextmanager + yield: সহজ উপায়</text>
    <text x="280" y="198" text-anchor="middle" fill="#9a93b8" font-size="7">with X as y: → y পাও, শেষে স্বয়ংক্রিয় cleanup</text>
  </svg>
  <div class="diag-cap">with = __enter__ → code → __exit__ (error হলেও)। File, DB, lock — সব রিসোর্স নিরাপদ।</div>
</div>

<div class="dialogue">আমান — নিরাপত্তা, বিশ্বাস। দরোয়ান আমান দেয় — প্রতিটা প্রবেশকারী নিরাপদে বের হবে, কেউ আটকে থাকবে না। with statement আমান দেয় — প্রতিটা রিসোর্স নিরাপদে বন্ধ হবে, কিছু খোলা থাকবে না। error হলেও আমান থাকে — __exit__ সবসময় চলে। নিরাপত্তা গ্যারান্টিই context manager-এর শক্তি।</div>
<div class="dialogue en">Aman — safety, trust. The gatekeeper guarantees aman — every visitor exits safely, none remains trapped. The with statement provides aman — every resource closes safely, nothing stays open. Even on error, aman holds — __exit__ always runs. Guaranteed safety is the context manager's power.</div>

<div class="secret-box">🚪 with = __enter__ → code → __exit__ (সবসময়)। File/DB/lock নিরাপদে বন্ধ। @contextmanager + yield = সহজ।</div>
`,
  senior:{
    title:"Context Managers — Senior Notes",
    body:`<table class="kv-table">
<tr><th>Method</th><th>কাজ</th></tr>
<tr><td class="hl">with open(f) as f:</td><td>file auto-close</td></tr>
<tr><td class="hl">with conn:</td><td>DB transaction commit/rollback</td></tr>
<tr><td class="hl">class: __enter__/__exit__</td><td>custom context manager</td></tr>
<tr><td class="hl">@contextmanager + yield</td><td>simpler custom CM</td></tr>
<tr><td class="hl">with suppress(E):</td><td>silently ignore specific errors</td></tr>
</table>
<p><strong>contextlib:</strong> <code>from contextlib import contextmanager, suppress, closing</code> — useful built-in helpers।</p>
<p><strong>Cross-ref:</strong> Book 52 (Code Craftsman) Door 12-এ resource management দেখবে। Book 44 (Data Engineering)-এ pipeline context দেখবে।</p>`
  }
});

// ── GUILD 13: INFINITE LOOM — GENERATORS ──
doors.push({
  num:13, icon:"♾️", color:"#2dd4bf", name:"অনন্ত তাঁত",
  subtitle:"The Infinite Loom", tech:"Generators — yield, lazy evaluation, iterators",
  spirit:"যারি — flowing/continuous, from Quran 21:30 (flowing water)",
  secret:"Generator = lazy function। return নয়, yield। ১০GB ফাইল ১GB RAM-এ পড়ো। এক সময়ে একটা মান — মেমরি কম, গতি বেশি। yield = থামো, মান দাও, আবার চালু হও।",
  recall:{
    q:"yield ও return-এর পার্থক্য কী? কেন generator memory বাঁচায়?",
    qen:"Difference between yield and return? Why do generators save memory?",
    a:"return = শেষ, একটা মান। yield = থামো, মান দাও, পরে আবার শুরু। Generator lazy — সব মান একসাথে তৈরি করে না, এক সময়ে একটা। ১০GB ফাইল: list = ১০GB RAM, generator = O(1) RAM।",
    aen:"return = end, one value. yield = pause, give value, resume later. Generator is lazy — one value at a time. 10GB file: list = 10GB RAM, generator = O(1) RAM."
  },
  story:`
<p class="scene-setting">ত্রয়োদশ গিল্ড। অনন্ত তাঁত। সুতোর শব্দ, কাপড়ের গন্ধ, ছাঁচের নকশা। তাঁতি নুসরাত একটা বিশাল তাঁতে বসে — সুতো আসছে, কাপড় তৈরি হচ্ছে। কিন্তু সুতোর স্তূপ নেই — সুতো একটা একটা করে আসে। "আমি সব সুতো একসাথে চাই না," তিনি বলেন। "একটা সুতো, তারপর আরেকটা। এটাই generator — lazy, এক সময়ে একটা মান।"</p>
<p class="scene-setting en">Thirteenth guild. The Infinite Loom. Sound of threads, smell of fabric, pattern on the loom. Weaver Nusrat sits at a massive loom — thread comes in, fabric is made. But no pile of thread — it comes one at a time. "I don't want all threads at once," she says. "One thread, then another. This is a generator — lazy, one value at a time."</p>

<div class="dialogue">সমস্যা: তোমার ১০ গিগাবাইটের লগ ফাইল। প্রতিটা লাইন পড়তে হবে। list-এ লোড করলে ১০GB RAM দরকার — বেশির ভাগ কম্পিউটারে নেই। Generator দিলে: এক লাইন পড়ো, process করো, পরের লাইন। ১ কিলোবাইট RAM-এ ১০GB ফাইল। yield = মেমরির যাদু।</div>
<div class="dialogue en">Problem: 10GB log file. Must read each line. Load into list: needs 10GB RAM — most computers don't have it. Generator: read one line, process, next line. 10GB file in 1KB RAM. yield = memory magic.</div>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>ভুলের গল্প:</strong> নুসরাত বললেন — একটা data pipeline সব তথ্য list-এ লোড করলো — ৫০ মিলিয়ন রেকর্ড। OOM (Out of Memory) — server crash। Generator দিলে এক রেকর্ড এক সময় — ৫০ মিলিয়ন রেকর্ড ৮GB RAM-এ। list = সব একসাথে, generator = একটা একটা। memory = প্রাণ।</div></div>

<div class="code-block"># guild13_generators.py — Infinite Loom
# Weaver Nusrat: "One thread at a time. yield = pause + give."

import sys

# ── THE PROBLEM: Process 10GB file with 1GB RAM ──

# ❌ BAD: Load everything into a list — OOM risk
# all_lines = open("10gb.log").readlines()  # 10GB in RAM!
# for line in all_lines:
#     process(line)

# ✅ GOOD: Generator — one line at a time, O(1) memory
def read_large_file(path):
    """Yield one line at a time — never loads whole file."""
    with open(path) as f:
        for line in f:
            yield line.strip()

# Process 10GB file with ~0 extra memory
for line in read_large_file("10gb.log"):
    if "ERROR" in line:
        print(line)

# ── yield vs return ──
def get_squares_list(n):
    """return: all values at once."""
    result = []
    for i in range(n):
        result.append(i ** 2)
    return result

def get_squares_gen(n):
    """yield: one value at a time — lazy."""
    for i in range(n):
        yield i ** 2

# Compare memory usage
squares_list = get_squares_list(1000000)
squares_gen = get_squares_gen(1000000)

print(f"List size: {sys.getsizeof(squares_list):,} bytes")   # ~8MB
print(f"Generator size: {sys.getsizeof(squares_gen):,} bytes")  # ~200 bytes!

# ── GENERATOR EXPRESSIONS (we saw these in Guild 10) ──
# Lazy version of list comprehension
squares = (x ** 2 for x in range(1000000))
# Uses ~200 bytes, not ~8MB

# ── INFINITE SEQUENCES: Only possible with generators ──
def fibonacci():
    """Infinite Fibonacci sequence."""
    a, b = 0, 1
    while True:
        yield a
        a, b = b, a + b

# Take first 10 — never computes all infinity
fib = fibonacci()
first_10 = [next(fib) for _ in range(10)]
print(first_10)  # [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]

# ── PIPELINE: Chain generators like Unix pipes ──
def numbers():
    for i in range(100):
        yield i

def evens(source):
    for n in source:
        if n % 2 == 0:
            yield n

def squared(source):
    for n in source:
        yield n ** 2

# Chain: numbers → evens → squared
# Each generator processes one value at a time
pipeline = squared(evens(numbers()))
result = list(pipeline)
print(result)  # [0, 4, 16, 36, 64, ...]

# ── REAL-WORLD: Streaming API responses ──
def stream_api_pages(url):
    """Yield data page by page — never load all pages."""
    page = 1
    while True:
        response = requests.get(url, params={"page": page})
        data = response.json()
        if not data:
            break
        for item in data:
            yield item
        page += 1

# Process 100,000 records from API — one at a time
for record in stream_api_pages("https://api.example.com/records"):
    save_to_db(record)

# ── yield from: Delegate to another generator ──
def flatten(nested):
    """Flatten arbitrarily nested lists."""
    for item in nested:
        if isinstance(item, (list, tuple)):
            yield from flatten(item)  # delegate
        else:
            yield item

nested = [1, [2, 3, [4, 5]], 6, [7]]
flat = list(flatten(nested))
print(flat)  # [1, 2, 3, 4, 5, 6, 7]</div>

<div class="diagram">
  <div class="diag-title">Generator = Lazy Loom — এক সুতো এক সময়</div>
  <svg viewBox="0 0 560 240" xmlns="http://www.w3.org/2000/svg">
    <!-- List: all at once -->
    <rect x="20" y="15" width="250" height="100" rx="8" fill="rgba(240,98,146,0.04)" stroke="#f06292" stroke-width="1.5"/>
    <text x="145" y="33" text-anchor="middle" fill="#f06292" font-size="9" font-weight="bold">list: সব একসাথে</text>
    <text x="145" y="50" text-anchor="middle" fill="#9a93b8" font-size="7">return — সব মান একসাথে</text>
    <rect x="35" y="60" width="20" height="15" fill="rgba(240,98,146,0.15)" stroke="#f06292" stroke-width="1"/>
    <rect x="58" y="60" width="20" height="15" fill="rgba(240,98,146,0.15)" stroke="#f06292" stroke-width="1"/>
    <rect x="81" y="60" width="20" height="15" fill="rgba(240,98,146,0.15)" stroke="#f06292" stroke-width="1"/>
    <rect x="104" y="60" width="20" height="15" fill="rgba(240,98,146,0.15)" stroke="#f06292" stroke-width="1"/>
    <text x="145" y="92" text-anchor="middle" fill="#f06292" font-size="7">১০ লাখ মান = ৮ MB RAM</text>
    <text x="145" y="105" text-anchor="middle" fill="#9a93b8" font-size="6">OOM risk for big data</text>
    <!-- Generator: one at a time -->
    <rect x="290" y="15" width="250" height="100" rx="8" fill="rgba(45,212,191,0.06)" stroke="#2dd4bf" stroke-width="2"/>
    <text x="415" y="33" text-anchor="middle" fill="#2dd4bf" font-size="9" font-weight="bold">generator: একটা একটা</text>
    <text x="415" y="50" text-anchor="middle" fill="#9a93b8" font-size="7">yield — এক সময়ে একটা</text>
    <rect x="380" y="60" width="20" height="15" fill="rgba(45,212,191,0.15)" stroke="#2dd4bf" stroke-width="1"/>
    <text x="405" y="72" fill="#9a93b8" font-size="10">→</text>
    <text x="425" y="72" fill="#9a93b8" font-size="7">next value</text>
    <text x="415" y="92" text-anchor="middle" fill="#2dd4bf" font-size="7">১০ লাখ মান = ২০০ bytes RAM!</text>
    <text x="415" y="105" text-anchor="middle" fill="#9a93b8" font-size="6">10GB file in O(1) memory</text>
    <!-- yield flow -->
    <rect x="20" y="130" width="520" height="50" rx="6" fill="rgba(52,211,153,0.04)" stroke="rgba(52,211,153,0.15)" stroke-width="1"/>
    <text x="280" y="148" text-anchor="middle" fill="#34d399" font-size="8" font-weight="bold">yield = থামো → মান দাও → পরে আবার শুরু</text>
    <text x="280" y="163" text-anchor="middle" fill="#9a93b8" font-size="7">def gen(): yield 1; yield 2; yield 3 → next() দিয়ে একটা একটা</text>
    <!-- Use cases -->
    <rect x="20" y="190" width="520" height="40" rx="6" fill="rgba(251,191,36,0.04)" stroke="rgba(251,191,36,0.15)" stroke-width="1"/>
    <text x="280" y="208" text-anchor="middle" fill="#fbbf24" font-size="8" font-weight="bold">Use cases: 10GB file · infinite sequence · streaming API · pipeline</text>
    <text x="280" y="220" text-anchor="middle" fill="#9a93b8" font-size="7">10GB ফাইল ১GB RAM-এ। list = OOM, generator = magic</text>
  </svg>
  <div class="diag-cap">yield = lazy evaluation। এক সময়ে একটা মান। ১০GB ফাইল O(1) RAM-এ। infinite sequence সম্ভব।</div>
</div>

<div class="dialogue">যারি — প্রবাহমান, একটানা। কুরআনে আল্লাহ বলেন — প্রতিটা জীবকে প্রবাহিত পানি থেকে সৃষ্টি (২১:৩০)। পানি প্রবাহিত — এক ফোঁটা এক সময়, একটানা। Generator হলো যারি — এক মান এক সময়, একটানা প্রবাহ। list = হ্রদ (সব পানি একসাথে)। generator = নদী (এক ফোঁটা এক সময়, অনন্ত)।</div>
<div class="dialogue en">Jari — flowing, continuous. Allah says — We made from flowing water every living thing (21:30). Water flows — one drop at a time, continuous. A generator is jari — one value at a time, continuous flow. list = lake (all water at once). generator = river (one drop at a time, infinite).</div>

<div class="secret-box">♾️ yield = lazy। এক সময়ে একটা মান। ১০GB ফাইল O(1) RAM-এ। infinite sequence সম্ভব। yield from = delegate।</div>
`,
  senior:{
    title:"Generators — Senior Notes",
    body:`<table class="kv-table">
<tr><th>Pattern</th><th>Memory</th><th>Use Case</th></tr>
<tr><td class="hl">[x for x in range(N)]</td><td>O(N)</td><td>Small data, need list</td></tr>
<tr><td class="hl">(x for x in range(N))</td><td>O(1)</td><td>Large data, lazy</td></tr>
<tr><td class="hl">def gen(): yield x</td><td>O(1)</td><td>Custom lazy logic</td></tr>
<tr><td class="hl">yield from gen2()</td><td>O(1)</td><td>Delegate to sub-generator</td></tr>
<tr><td class="hl">open(f) (file object)</td><td>O(1)</td><td>File is already a generator!</td></tr>
</table>
<p><strong>Pipeline:</strong> <code>gen3(gen2(gen1()))</code> — chain generators like Unix pipes। প্রতিটা স্টেজ এক মান এক সময়।</p>
<p><strong>Cross-ref:</strong> Book 44 (Data Engineering) — streaming pipeline পুরো বই। Book 45 (Compilers) — token stream generator।</p>`
  }
});

// ── GUILD 14: ALCHEMIST — FUNCTIONAL PROGRAMMING ──
doors.push({
  num:14, icon:"⚗️", color:"#34d399", name:"কীমিয়াগারের কক্ষ",
  subtitle:"The Alchemist", tech:"Functional Python — map, filter, reduce, lambda, closures",
  spirit:"তারকীব — composition/transformation, the art of combining elements",
  secret:"Functional programming = data pipeline। map (প্রতিটাকে বদলাও), filter (বেছো), reduce (একত্র করো)। lambda = ছোট anonymous function। side-effect ছাড়া ফাংশন = predictable। comprehension ও map/filter — একই শক্তি।",
  recall:{
    q:"map, filter, reduce কী করে? lambda কখন ব্যবহার?",
    qen:"What do map, filter, reduce do? When to use lambda?",
    a:"map(f, items) = প্রতিটাকে বদলাও। filter(f, items) = শর্ত মিলিয়ে বেছো। reduce(f, items) = সব একত্র করে একটা মান। lambda = এক বার ব্যবহারের ছোট ফাংশন: lambda x: x*2।",
    aen:"map = transform each. filter = select matching. reduce = combine all into one. lambda = small one-time function."
  },
  story:`
<p class="scene-setting">চতুর্দশ গিল্ড। কীমিয়াগারের কক্ষ। রাসায়নিকের গন্ধ, কাঁচের পাত্র, রঙ বদলানো তরল। কীমিয়াবিদ ইমরান একটা সিরিজ পরীক্ষা করছেন — কাঁচের পাত্রে তরল ঢালেন, ছাঁকনি দিয়ে বেছে নেন, গরম করে ঘনীভূত করেন। "তিনটা ধাপ," তিনি বলেন। "বদলাও (map), বেছো (filter), ঘন করো (reduce)। Functional programming ঠিক তেমনি — data pipeline।"</p>
<p class="scene-setting en">Fourteenth guild. The Alchemist's chamber. Smell of chemicals, glass vessels, color-changing liquid. Alchemist Imran runs a series of experiments — pours liquid through vessels, filters select substances, heats to concentrate. "Three steps," he says. "Transform (map), select (filter), concentrate (reduce). Functional programming is the same — a data pipeline."</p>

<div class="dialogue">সমস্যা: তোমার ১০,০০০ লেনদেনের তালিকা। শুধু সম্পূর্ণ লেনদেনগুলো বেছো (filter), প্রতিটার ট্যাক্স যোগ করো (map), মোট আয় বের করো (reduce)। ৩ ধাপে pipeline — প্রতিটা ধাপে ডেটা বদলায়। for loop দিলে ৩০ লাইন, functional দিলে ৩ লাইন।</div>
<div class="dialogue en">Problem: 10,000 transactions. Select only completed (filter), add tax to each (map), calculate total revenue (reduce). 3-step pipeline. For loop: 30 lines. Functional: 3 lines.</div>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>ভুলের গল্প:</strong> ইমরান বললেন — এক শিক্ষানবিশ সব reduce দিয়ে করতে চাইলো — এমনকি সাধারণ যোগেও। কিন্তু reduce জটিল — পড়তে কঠিন। Python-এ sum(), min(), max() built-in আছে — reduce শুধু জটিল aggregation-এ। সহজ কাজে comprehension বা built-in, কঠিন aggregation-এ reduce।</div></div>

<div class="code-block"># guild14_functional.py — Alchemist
# Alchemist Imran: "Transform, filter, concentrate."

from functools import reduce

# ── THE PROBLEM: Process 10,000 transactions ──
transactions = [
    {"id": 1, "amount": 500, "status": "completed"},
    {"id": 2, "amount": 200, "status": "failed"},
    {"id": 3, "amount": 800, "status": "completed"},
    {"id": 4, "amount": 150, "status": "completed"},
    {"id": 5, "amount": 300, "status": "refunded"},
]

# ── MAP: Transform each item ──
# Double each amount (add 100% tax)
amounts = [t["amount"] for t in transactions]
# List comp equivalent (often more Pythonic)
amounts_with_tax = [a * 2 for a in amounts]
# Functional equivalent:
amounts_with_tax_fn = list(map(lambda a: a * 2, amounts))
print(amounts_with_tax)  # [1000, 400, 1600, 300, 600]

# ── FILTER: Select matching items ──
completed = [t for t in transactions if t["status"] == "completed"]
# Functional equivalent:
completed_fn = list(filter(lambda t: t["status"] == "completed", transactions))
print(len(completed))  # 3

# ── REDUCE: Combine all into one value ──
total = reduce(
    lambda acc, t: acc + t["amount"],
    completed,
    0  # initial value
)
print(f"Total revenue: {total}")  # 1450

# ── THE FULL PIPELINE: filter → map → reduce ──
total_revenue = reduce(
    lambda acc, amount: acc + amount,
    map(
        lambda t: t["amount"] * 2,  # add 100% tax
        filter(
            lambda t: t["status"] == "completed",
            transactions
        )
    ),
    0
)
print(f"Total with tax: {total_revenue}")  # 2900

# ── LAMBDA: Anonymous function ──
# Use when: short, one-time, passed as argument
sort_key = lambda t: t["amount"]  # sort by amount
sorted_txns = sorted(transactions, key=sort_key, reverse=True)

# ❌ BAD: Complex lambda — unreadable
# sorted(items, key=lambda x: x.a * x.b - x.c / (x.d + 1))

# ✅ GOOD: Named function for complex logic
def priority_score(task):
    """Clear, testable, documented."""
    return task["urgency"] * task["impact"] - task["effort"]

sorted_tasks = sorted(tasks, key=priority_score)

# ── CLOSURES: Functions that remember ──
def make_multiplier(factor):
    """Returns a function that remembers 'factor'."""
    def multiply(x):
        return x * factor
    return multiply

double = make_multiplier(2)
triple = make_multiplier(3)
print(double(5))  # 10
print(triple(5))  # 15

# ── PARTIAL APPLICATION: Fix some arguments ──
from functools import partial

def log_message(level, message):
    print(f"[{level}] {message}")

info = partial(log_message, "INFO")
error = partial(log_message, "ERROR")

info("Server started")    # [INFO] Server started
error("Database failed")  # [ERROR] Database failed

# ── ANY/ALL: Functional checks ──
all_completed = all(t["status"] == "completed" for t in transactions)
any_failed = any(t["status"] == "failed" for t in transactions)

# ── FUNCTIONAL VS COMPREHENSION ──
# These are equivalent — use whichever is more readable:
# Functional:  list(map(lambda x: x*2, filter(lambda x: x>0, nums)))
# Comprehension: [x*2 for x in nums if x > 0]
# Python community prefers comprehension for simple cases

# ── IMMUTABILITY: Functional core principle ──
from dataclasses import dataclass

@dataclass(frozen=True)  # frozen = immutable
class Point:
    x: float
    y: float

p1 = Point(1.0, 2.0)
# p1.x = 5.0  # ERROR — frozen dataclass can't be modified
p2 = Point(p1.x + 1, p1.y)  # create new instead of modifying</div>

<div class="diagram">
  <div class="diag-title">Functional Pipeline — map → filter → reduce</div>
  <svg viewBox="0 0 560 260" xmlns="http://www.w3.org/2000/svg">
    <defs><marker id="arrFP" markerWidth="6" markerHeight="6" refX="4" refY="3" orient="auto"><path d="M0,0 L4,3 L0,6" fill="#34d399"/></marker></defs>
    <!-- Input -->
    <rect x="10" y="20" width="100" height="50" rx="6" fill="rgba(45,212,191,0.06)" stroke="#2dd4bf" stroke-width="1.5"/>
    <text x="60" y="38" text-anchor="middle" fill="#2dd4bf" font-size="8" font-weight="bold">Input</text>
    <text x="60" y="52" text-anchor="middle" fill="#9a93b8" font-size="6">[1,-2,3,-4,5]</text>
    <text x="60" y="62" text-anchor="middle" fill="#9a93b8" font-size="6">5 items</text>
    <line x1="110" y1="45" x2="140" y2="45" stroke="#34d399" stroke-width="1.5" marker-end="url(#arrFP)"/>
    <!-- filter -->
    <rect x="145" y="20" width="110" height="50" rx="6" fill="rgba(240,98,146,0.06)" stroke="#f06292" stroke-width="1.5"/>
    <text x="200" y="38" text-anchor="middle" fill="#f06292" font-size="8" font-weight="bold">filter</text>
    <text x="200" y="52" text-anchor="middle" fill="#9a93b8" font-size="6">x &gt; 0</text>
    <text x="200" y="62" text-anchor="middle" fill="#9a93b8" font-size="6">→ [1,3,5]</text>
    <line x1="255" y1="45" x2="285" y2="45" stroke="#34d399" stroke-width="1.5" marker-end="url(#arrFP)"/>
    <!-- map -->
    <rect x="290" y="20" width="110" height="50" rx="6" fill="rgba(251,191,36,0.06)" stroke="#fbbf24" stroke-width="1.5"/>
    <text x="345" y="38" text-anchor="middle" fill="#fbbf24" font-size="8" font-weight="bold">map</text>
    <text x="345" y="52" text-anchor="middle" fill="#9a93b8" font-size="6">x * 2</text>
    <text x="345" y="62" text-anchor="middle" fill="#9a93b8" font-size="6">→ [2,6,10]</text>
    <line x1="400" y1="45" x2="430" y2="45" stroke="#34d399" stroke-width="1.5" marker-end="url(#arrFP)"/>
    <!-- reduce -->
    <rect x="435" y="20" width="115" height="50" rx="6" fill="rgba(82,196,26,0.06)" stroke="#52c41a" stroke-width="1.5"/>
    <text x="492" y="38" text-anchor="middle" fill="#52c41a" font-size="8" font-weight="bold">reduce</text>
    <text x="492" y="52" text-anchor="middle" fill="#9a93b8" font-size="6">acc + x</text>
    <text x="492" y="62" text-anchor="middle" fill="#9a93b8" font-size="6">→ 18</text>
    <!-- lambda -->
    <rect x="20" y="100" width="520" height="40" rx="6" fill="rgba(45,212,191,0.06)" stroke="rgba(45,212,191,0.2)" stroke-width="1"/>
    <text x="280" y="118" text-anchor="middle" fill="#34d399" font-size="8" font-weight="bold">lambda = anonymous function (ছোট, একবার ব্যবহার)</text>
    <text x="280" y="132" text-anchor="middle" fill="#9a93b8" font-size="7">lambda x: x * 2  ←→  def f(x): return x * 2</text>
    <!-- Tools -->
    <rect x="20" y="155" width="250" height="90" rx="6" fill="rgba(45,212,191,0.04)" stroke="rgba(45,212,191,0.15)" stroke-width="1"/>
    <text x="145" y="173" text-anchor="middle" fill="#34d399" font-size="8" font-weight="bold">Built-in</text>
    <text x="35" y="190" fill="#9a93b8" font-size="7">sum(), min(), max(), len()</text>
    <text x="35" y="205" fill="#9a93b8" font-size="7">sorted(key=fn)</text>
    <text x="35" y="220" fill="#9a93b8" font-size="7">any(), all()</text>
    <text x="35" y="235" fill="#9a93b8" font-size="7">enumerate(), zip()</text>
    <rect x="290" y="155" width="250" height="90" rx="6" fill="rgba(167,139,250,0.04)" stroke="rgba(167,139,250,0.15)" stroke-width="1"/>
    <text x="415" y="173" text-anchor="middle" fill="#a78bfa" font-size="8" font-weight="bold">functools</text>
    <text x="305" y="190" fill="#9a93b8" font-size="7">reduce(fn, items)</text>
    <text x="305" y="205" fill="#9a93b8" font-size="7">partial(fn, *args)</text>
    <text x="305" y="220" fill="#9a93b8" font-size="7">lru_cache(maxsize=N)</text>
    <text x="305" y="235" fill="#9a93b8" font-size="7">wraps(fn)</text>
  </svg>
  <div class="diag-cap">filter (বেছো) → map (বদলাও) → reduce (একত্র)। lambda = ছোট function। comprehension ও map/filter — একই শক্তি।</div>
</div>

<div class="dialogue">তারকীব — সংযোজন, মিশ্রণ। কীমিয়াগার তারকীব করেন — উপাদান মিশিয়ে নতুন পদার্থ। Functional programming তারকীব — map, filter, reduce মিলিয়ে নতুন ফলাফল। প্রতিটা ফাংশন শুদ্ধ — side-effect ছাড়া, একই input এ একই output। কীমিয়াগারের নিয়ম: প্রতিটা পরীক্ষা পুনরাবৃত্তিযোগ্য — pure function-ও তেমনি।</div>
<div class="dialogue en">Tarkib — composition, combining. The alchemist does tarkib — mixing elements into new substances. Functional programming is tarkib — map, filter, reduce combined into new results. Each function is pure — no side-effects, same input always gives same output. The alchemist's rule: every experiment is repeatable — pure functions are the same.</div>

<div class="secret-box">⚗️ map (বদলাও), filter (বেছো), reduce (একত্র)। lambda = ছোট function। comprehension ও map/filter — একই শক্তি।</div>
`,
  senior:{
    title:"Functional Python — Senior Notes",
    body:`<table class="kv-table">
<tr><th>Tool</th><th>কাজ</th><th>Pythonic Alternative</th></tr>
<tr><td class="hl">map(f, items)</td><td>transform each</td><td>[f(x) for x in items]</td></tr>
<tr><td class="hl">filter(f, items)</td><td>select matching</td><td>[x for x in items if f(x)]</td></tr>
<tr><td class="hl">reduce(f, items)</td><td>combine all</td><td>sum(), min(), max() (built-in)</td></tr>
<tr><td class="hl">lambda x: expr</td><td>anonymous function</td><td>def f(x): return expr</td></tr>
<tr><td class="hl">closure</td><td>function remembering</td><td>def outer(): def inner():</td></tr>
</table>
<p><strong>Pythonic choice:</strong> comprehension &gt; map/filter (most cases)। reduce → built-in sum/min/max (most cases)। functools.partial — দরকারী।</p>
<p><strong>Cross-ref:</strong> Book 52 (Code Craftsman) Door 19-এ higher-order functions দেখবে। Book 44 (Data Engineering)-এ pipeline composition দেখবে।</p>`
  }
});

// ── GUILD 15: CARAVAN ROUTE — CONCURRENCY ──
doors.push({
  num:15, icon:"🐫", color:"#2dd4bf", name:"কাফেলার পথ",
  subtitle:"The Caravan Route", tech:"Concurrency — threading, asyncio, multiprocessing",
  spirit:"সফর — journey/travel together, from the concept of parallel movement",
  secret:"Concurrency = একসাথে একাধিক কাজ। threading (I/O bound), asyncio (single-thread async), multiprocessing (CPU bound)। ১০০ ওয়েবসাইট একসাথে download — sequential ১০০ সেকেন্ড, concurrent ৫ সেকেন্ড।",
  recall:{
    q:"threading, asyncio, multiprocessing — কখন কোনটা?",
    qen:"When to use threading, asyncio, multiprocessing?",
    a:"threading = I/O bound (network, file — GIL releases)। asyncio = single-thread async (efficient I/O)। multiprocessing = CPU bound (heavy math — separate processes, no GIL)। I/O = thread/async, CPU = multiprocessing।",
    aen:"threading = I/O bound (GIL releases on network/file). asyncio = single-thread async I/O. multiprocessing = CPU bound (separate processes, no GIL)."
  },
  story:`
<p class="scene-setting">পঞ্চদশ গিল্ড। কাফেলার পথ। উটের শব্দ, ধুলোর কুয়াশা, বাণিজ্যের গন্ধ। কাফেলা নেতা হাসান দশটা উটের দিকে তাকালেন — প্রতিটা আলাদা শহরে যাচ্ছে। "একটা একটা করে পাঠালে ১০ সপ্তাহ," তিনি বলেন। "একসাথে পাঠালে — ১ সপ্তাহ। এটাই concurrency — একসাথে একাধিক কাজ। Python-এ threading, asyncio, multiprocessing — তিন রাস্তা।"</p>
<p class="scene-setting en">Fifteenth guild. The Caravan Route. Sound of camels, dust haze, smell of trade. Caravan leader Hasan looks at ten camels — each heading to a different city. "Send one at a time — 10 weeks," he says. "Send together — 1 week. This is concurrency — multiple tasks at once. In Python: threading, asyncio, multiprocessing — three roads."</p>

<div class="dialogue">সমস্যা: তুমি ১০০টা ওয়েবসাইট থেকে ডেটা download করছো। একটা একটা করে (sequential) — ১০০ সেকেন্ড (প্রতিটা ১ সেকেন্ড)। একসাথে ১০টা করে (concurrent) — ১০ সেকেন্ড। কিন্তু কোন পদ্ধতি? I/O (download) = threading/asyncio। CPU (math) = multiprocessing।</div>
<div class="dialogue en">Problem: Download data from 100 websites. Sequential — 100 seconds. Concurrent — 10 seconds. But which method? I/O (download) = threading/asyncio. CPU (math) = multiprocessing.</div>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>ভুলের গল্প:</strong> হাসান বললেন — একটা টিম CPU-heavy কাজে threading ব্যবহার করলো। কিন্তু Python GIL (Global Interpreter Lock) — এক সময়ে এক thread-ই CPU ব্যবহার করে। threading দিয়ে CPU math = কোনো লাভ নেই, উল্টে overhead। CPU-heavy = multiprocessing (আলাদা process, GIL bypass)। ভুল পদ্ধতি = ধীর ও বিপজ্জনক।</div></div>

<div class="code-block"># guild15_concurrency.py — Caravan Route
# Caravan Leader Hasan: "Send all at once. Wait together."

import time
import threading
import asyncio
from concurrent.futures import ThreadPoolExecutor, ProcessPoolExecutor

# ── THE PROBLEM: Download 100 URLs ──
import requests

urls = [f"https://api.example.com/page{i}" for i in range(100)]

# ── ❌ SEQUENTIAL: One at a time — 100s ──
def fetch_sequential(urls):
    results = []
    for url in urls:
        resp = requests.get(url)
        results.append(resp.json())
    return results
# Time: 100 * 1s = 100 seconds

# ══════════════════════════════════════
# THREADING: I/O bound (network, file)
# GIL releases during I/O — real concurrency
# ══════════════════════════════════════
def fetch_one(url):
    return requests.get(url).json()

def fetch_threaded(urls, max_workers=10):
    """10 threads — 10 downloads at once."""
    with ThreadPoolExecutor(max_workers=max_workers) as executor:
        results = list(executor.map(fetch_one, urls))
    return results
# Time: 100 / 10 = ~10 seconds (10x faster!)

# ── Manual threading (when you need control) ──
import threading

results = {}
lock = threading.Lock()  # protect shared state

def worker(url):
    data = requests.get(url).json()
    with lock:  # thread-safe access
        results[url] = data

threads = [threading.Thread(target=worker, args=(url,)) for url in urls]
for t in threads:
    t.start()
for t in threads:
    t.join()  # wait for all

# ══════════════════════════════════════
# ASYNCIO: Single-thread async I/O
# Most efficient for thousands of I/O tasks
# ══════════════════════════════════════
import aiohttp

async def fetch_async(session, url):
    async with session.get(url) as resp:
        return await resp.json()

async def fetch_all_async(urls):
    """Single thread, thousands of concurrent requests."""
    async with aiohttp.ClientSession() as session:
        tasks = [fetch_async(session, url) for url in urls]
        return await asyncio.gather(*tasks)

# Run the async event loop
# results = asyncio.run(fetch_all_async(urls))
# Time: ~2 seconds for 100 URLs (most efficient!)

# ── async/await syntax ──
async def greet_after(delay, name):
    await asyncio.sleep(delay)  # non-blocking!
    return f"Hello {name}"

async def main():
    # These run concurrently — not sequential
    results = await asyncio.gather(
        greet_after(1, "Fatima"),
        greet_after(1, "Ahmed"),
        greet_after(1, "Sara"),
    )
    print(results)  # all at ~1s, not ~3s

asyncio.run(main())

# ══════════════════════════════════════
# MULTIPROCESSING: CPU bound (heavy math)
# Separate processes — bypasses GIL
# ══════════════════════════════════════
from multiprocessing import Pool

def heavy_computation(n):
    """CPU-intensive: sum of squares."""
    return sum(i ** 2 for i in range(n))

def parallel_compute(numbers, processes=4):
    """4 processes — real parallel CPU work."""
    with Pool(processes) as pool:
        results = pool.map(heavy_computation, numbers)
    return results

numbers = [10**7, 10**7, 10**7, 10**7]
# Sequential: ~8 seconds (4 * 2s)
# Parallel: ~2 seconds (4 processes, 4 cores)

# ── DECISION GUIDE ──
# ┌─────────────────┬──────────────────┐
# │ Task type       │ Best method       │
# ├─────────────────┼──────────────────┤
# │ Network / file  │ asyncio (best)    │
# │ I/O             │ threading (ok)    │
# │ CPU math        │ multiprocessing   │
# │ Mixed           │ asyncio + ProcessPool │
# └─────────────────┴──────────────────┘</div>

<div class="diagram">
  <div class="diag-title">Concurrency — তিন রাস্তা: threading · asyncio · multiprocessing</div>
  <svg viewBox="0 0 560 270" xmlns="http://www.w3.org/2000/svg">
    <!-- Sequential -->
    <rect x="20" y="15" width="150" height="70" rx="6" fill="rgba(240,98,146,0.04)" stroke="#f06292" stroke-width="1.5"/>
    <text x="95" y="32" text-anchor="middle" fill="#f06292" font-size="8" font-weight="bold">Sequential</text>
    <text x="95" y="48" text-anchor="middle" fill="#9a93b8" font-size="6">task1 → task2 → task3</text>
    <text x="95" y="62" text-anchor="middle" fill="#9a93b8" font-size="6">একটা একটা করে</text>
    <text x="95" y="76" text-anchor="middle" fill="#f06292" font-size="6">100s for 100 tasks</text>
    <!-- Threading -->
    <rect x="190" y="15" width="150" height="70" rx="6" fill="rgba(45,212,191,0.06)" stroke="#2dd4bf" stroke-width="1.5"/>
    <text x="265" y="32" text-anchor="middle" fill="#2dd4bf" font-size="8" font-weight="bold">threading</text>
    <text x="265" y="48" text-anchor="middle" fill="#9a93b8" font-size="6">I/O bound (network)</text>
    <text x="265" y="62" text-anchor="middle" fill="#9a93b8" font-size="6">GIL releases on I/O</text>
    <text x="265" y="76" text-anchor="middle" fill="#2dd4bf" font-size="6">10s (10x faster)</text>
    <!-- asyncio -->
    <rect x="360" y="15" width="180" height="70" rx="6" fill="rgba(82,196,26,0.06)" stroke="#52c41a" stroke-width="2"/>
    <text x="450" y="32" text-anchor="middle" fill="#52c41a" font-size="8" font-weight="bold">asyncio ⭐</text>
    <text x="450" y="48" text-anchor="middle" fill="#9a93b8" font-size="6">I/O bound (thousands)</text>
    <text x="450" y="62" text-anchor="middle" fill="#9a93b8" font-size="6">single-thread async</text>
    <text x="450" y="76" text-anchor="middle" fill="#52c41a" font-size="6">2s (most efficient)</text>
    <!-- multiprocessing -->
    <rect x="120" y="100" width="320" height="70" rx="6" fill="rgba(167,139,250,0.06)" stroke="#a78bfa" stroke-width="1.5"/>
    <text x="280" y="117" text-anchor="middle" fill="#a78bfa" font-size="8" font-weight="bold">multiprocessing</text>
    <text x="280" y="133" text-anchor="middle" fill="#9a93b8" font-size="6">CPU bound (heavy math)</text>
    <text x="280" y="147" text-anchor="middle" fill="#9a93b8" font-size="6">separate process, bypasses GIL</text>
    <text x="280" y="161" text-anchor="middle" fill="#a78bfa" font-size="6">real parallel — 4 cores = 4x speed</text>
    <!-- Decision -->
    <rect x="20" y="185" width="520" height="70" rx="6" fill="rgba(251,191,36,0.04)" stroke="rgba(251,191,36,0.15)" stroke-width="1"/>
    <text x="280" y="203" text-anchor="middle" fill="#fbbf24" font-size="8" font-weight="bold">সিদ্ধান্ত গাইড</text>
    <text x="280" y="220" text-anchor="middle" fill="#9a93b8" font-size="7">🌐 Network/file I/O → asyncio (best) or threading (ok)</text>
    <text x="280" y="235" text-anchor="middle" fill="#9a93b8" font-size="7">🔢 CPU math → multiprocessing (bypasses GIL)</text>
    <text x="280" y="250" text-anchor="middle" fill="#f06292" font-size="7">⚠️ threading দিয়ে CPU math = GIL block, কোনো লাভ নেই</text>
  </svg>
  <div class="diag-cap">I/O → asyncio/threading। CPU → multiprocessing। ভুল পদ্ধতি = ধীর। GIL = Python-এর সীমা, multiprocessing bypass।</div>
</div>

<div class="dialogue">সফর — যাত্রা, একসাথে চলা। কাফেলা সফর করে — অনেক উট একসাথে, আলাদা গন্তব্যে। Concurrency হলো সফর — অনেক কাজ একসাথে, আলাদা thread/process। একা উট = sequential, ধীর। কাফেলা = concurrent, দ্রুত। কিন্তু সঠিক রাস্তা দরকার — I/O ও CPU আলাদা পথ।</div>
<div class="dialogue en">Safar — journey, traveling together. A caravan travels — many camels at once, different destinations. Concurrency is safar — many tasks together, different threads/processes. One camel = sequential, slow. Caravan = concurrent, fast. But the right road is needed — I/O and CPU take different paths.</div>

<div class="secret-box">🐫 I/O → asyncio/threading। CPU → multiprocessing। threading দিয়ে CPU = GIL block। asyncio = single-thread, সবচেয়ে efficient।</div>
`,
  senior:{
    title:"Concurrency — Senior Notes",
    body:`<table class="kv-table">
<tr><th>Method</th><th>Best For</th><th>GIL?</th></tr>
<tr><td class="hl">threading</td><td>I/O (10-100 tasks)</td><td>Yes (releases on I/O)</td></tr>
<tr><td class="hl">asyncio</td><td>I/O (1000+ tasks)</td><td>Yes (single thread, efficient)</td></tr>
<tr><td class="hl">multiprocessing</td><td>CPU math</td><td>No (separate process)</td></tr>
<tr><td class="hl">concurrent.futures</td><td>Both (unified API)</td><td>Thread or Process pool</td></tr>
</table>
<p><strong>GIL:</strong> Global Interpreter Lock — Python-এ এক সময়ে এক thread CPU ব্যবহার করে। I/O-এ release হয়, CPU-তে নয়। multiprocessing = একমাত্র bypass।</p>
<p><strong>Cross-ref:</strong> Book 4 (System Design) Door 2 (load balancing), Door 14 (async queues)। Book 44 (Data Engineering)-এ parallel pipeline দেখবে।</p>`
  }
});
