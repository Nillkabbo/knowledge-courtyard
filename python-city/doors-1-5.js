// ════════════════════════════════════════════════════════════
// THE PYTHON CITY — DOORS 1-5 (FOUNDATION GUILDS)
// 1. Potter: Variables & Types    2. Canal: Control Flow
// 3. Kitchen: Functions           4. Storehouse: Data Structures
// 5. Calligrapher: Strings
// ════════════════════════════════════════════════════════════
const doors = [];

// ── GUILD 1: POTTER'S HOUSE — VARIABLES & TYPES ──
doors.push({
  num:1, icon:"🏺", color:"#2dd4bf", name:"মাটির পাত্র",
  subtitle:"The Potter's House", tech:"Variables & Data Types",
  spirit:"মিসকাহ — clay/shaping, from Quran 23:12 (We created man from clay)",
  secret:"Variable = বাক্স যার ভেতরে মান থাকে। কিন্তু Python-এ বাক্সের 'ধরন' নেই — এক বাক্সে সংখ্যা, পরে লেখা, পরে তালিকা। Dynamic typing = নমনীয়তা, কিন্তু সতর্কতা দরকার।",
  recall:{
    q:"Python-এ int, float, str, bool — এই ৪টার পার্থক্য কী?",
    qen:"What's the difference between int, float, str, and bool in Python?",
    a:"int = পূর্ণসংখ্যা (42), float = দশমিক (3.14), str = লেখা ('hello'), bool = সত্য/মিথ্যা (True/False)। Python-এ type দ্বারা নির্ধারিত হয় মান দ্বারা, বাক্স দ্বারা নয়।",
    aen:"int = integer (42), float = decimal (3.14), str = text ('hello'), bool = true/false. Python determines type by value, not by the variable."
  },
  story:`
<p class="scene-setting">প্রথম গিল্ড। কুমারের ঘর। মাটির গন্ধ, চাকার আওয়াজ, ভেজা মাটির স্পর্শ। উস্তাদ ফাতেমা বসে আছেন — হাতে কাদামাটি, চোখে ধৈর্য। তার সামনে অগুনতি পাত্র — কোনোটা পানি ধরে, কোনোটা ভাত, কোনোটা শুধু শোভা। "প্রতিটা পাত্র একটা কাজের জন্য," তিনি বলেন। "Python-এ এটাকে বলে variable।"</p>
<p class="scene-setting en">First guild. The Potter's house. Smell of clay, sound of the wheel, touch of wet earth. Master Fatima sits — clay in hands, patience in eyes. Before her, countless vessels — some hold water, some rice, some just beauty. "Each vessel is for a purpose," she says. "In Python, we call this a variable."</p>

<div class="dialogue">সমস্যা: তোমার একটা দোকান আছে। প্রতিটা পণ্যের নাম, দাম, স্টক — সব মনে রাখতে হবে। খাতায় লিখবে? ১০০টা পণ্যে? মাথা ফেটে যাবে। Python variable দিয়ে প্রতিটা পণ্যের তথ্য একটা নামে রাখো। দাম = ৫০, নাম = "চিনি", স্টক = True।</div>
<div class="dialogue en">Problem: You have a shop. Each product's name, price, stock — all must be remembered. Write in a ledger? 100 products? Head will explode. Python variables store each piece of data under a name.</div>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>ভুলের গল্প:</strong> ফাতেমা বললেন — এক শিক্ষানবিশ পাত্রে পানি রাখলো, তারপর ভাত ঢাললো — পাত্র নষ্ট। Python-এ: তুমি x = 42 দিলে, তারপর x = "hello" দিলে — ভুল নয়! Python বাক্সের ধরন বদলায়। এটাই dynamic typing। কিন্তু সতর্ক না হলে — একই variable এ সংখ্যা ও লেখা — bug খুঁজে পাওয়া কঠিন।</div></div>

<div class="code-block"># guild1_inventory.py — Potter's Problem
# Master Fatima: "Each vessel has a purpose. Each variable has a type."

# ── THE PROBLEM: Track shop inventory ──
# Product: name, price, in_stock

# ❌ BAD: No variables — everything hardcoded
print("Product: Sugar")
print("Price: 50 taka")
print("In stock: Yes")
# Change price? Find every print statement. Nightmare.

# ✅ GOOD: Variables — change once, updates everywhere
product_name = "Sugar"    # str (text)
product_price = 50        # int (whole number)
weight_kg = 1.5           # float (decimal)
in_stock = True           # bool (True/False)
stock_count = 200         # int

print(f"Product: {product_name}")
print(f"Price: {product_price} taka")
print(f"Weight: {weight_kg} kg")
print(f"In stock: {in_stock}")
print(f"Count: {stock_count} units")

# Python is dynamically typed — box changes type!
x = 42          # x is int
x = "hello"     # now x is str — Python allows this!
x = [1, 2, 3]   # now x is list
# Flexible, but be careful — this causes bugs if misused.

# ── TYPE CHECKING: Know what you're working with ──
price = 50
name = "Sugar"
print(type(price))  # <class 'int'>
print(type(name))   # <class 'str'>

# ── TYPE CONVERSION: Sometimes you need to change type ──
price_str = "50"         # user input is always str
price_int = int(price_str)  # convert to int for math
print(price_int + 10)    # 60 — works!
# print(price_str + 10)  # ERROR — can't add str + int

# ── MULTIPLE ASSIGNMENT: Python's elegant way ──
name, price, stock = "Salt", 30, True  # assign 3 at once
print(f"{name}: {price} taka, stock={stock}")</div>

<div class="diagram">
  <div class="diag-title">Variable = পাত্র — প্রতিটায় একটা মান</div>
  <svg viewBox="0 0 560 240" xmlns="http://www.w3.org/2000/svg">
    <text x="280" y="20" text-anchor="middle" fill="#34d399" font-size="11" font-weight="bold">Python Variables — Named Containers</text>
    <!-- int -->
    <ellipse cx="100" cy="90" rx="45" ry="40" fill="rgba(45,212,191,0.08)" stroke="#2dd4bf" stroke-width="2"/>
    <text x="100" y="80" text-anchor="middle" fill="#2dd4bf" font-size="14" font-weight="bold">42</text>
    <text x="100" y="100" text-anchor="middle" fill="#9a93b8" font-size="8">int</text>
    <text x="100" y="150" text-anchor="middle" fill="#34d399" font-size="9" font-family="monospace">age = 42</text>
    <text x="100" y="165" text-anchor="middle" fill="#9a93b8" font-size="7">পূর্ণসংখ্যা</text>
    <!-- float -->
    <ellipse cx="220" cy="90" rx="45" ry="40" fill="rgba(52,211,153,0.08)" stroke="#34d399" stroke-width="2"/>
    <text x="220" y="80" text-anchor="middle" fill="#34d399" font-size="14" font-weight="bold">3.14</text>
    <text x="220" y="100" text-anchor="middle" fill="#9a93b8" font-size="8">float</text>
    <text x="220" y="150" text-anchor="middle" fill="#34d399" font-size="9" font-family="monospace">pi = 3.14</text>
    <text x="220" y="165" text-anchor="middle" fill="#9a93b8" font-size="7">দশমিক</text>
    <!-- str -->
    <ellipse cx="340" cy="90" rx="45" ry="40" fill="rgba(251,191,36,0.08)" stroke="#fbbf24" stroke-width="2"/>
    <text x="340" y="80" text-anchor="middle" fill="#fbbf24" font-size="12" font-weight="bold">"hi"</text>
    <text x="340" y="100" text-anchor="middle" fill="#9a93b8" font-size="8">str</text>
    <text x="340" y="150" text-anchor="middle" fill="#34d399" font-size="9" font-family="monospace">name = "Bob"</text>
    <text x="340" y="165" text-anchor="middle" fill="#9a93b8" font-size="7">লেখা</text>
    <!-- bool -->
    <ellipse cx="460" cy="90" rx="45" ry="40" fill="rgba(240,98,146,0.08)" stroke="#f06292" stroke-width="2"/>
    <text x="460" y="80" text-anchor="middle" fill="#f06292" font-size="12" font-weight="bold">True</text>
    <text x="460" y="100" text-anchor="middle" fill="#9a93b8" font-size="8">bool</text>
    <text x="460" y="150" text-anchor="middle" fill="#34d399" font-size="9" font-family="monospace">active = True</text>
    <text x="460" y="165" text-anchor="middle" fill="#9a93b8" font-size="7">সত্য/মিথ্যা</text>
    <!-- Dynamic typing -->
    <rect x="40" y="195" width="480" height="35" rx="6" fill="rgba(45,212,191,0.06)" stroke="rgba(45,212,191,0.2)" stroke-width="1"/>
    <text x="280" y="213" text-anchor="middle" fill="#34d399" font-size="8" font-weight="bold">Dynamic Typing: x = 42 → x = "hi" → x = [1,2] — বাক্সের ধরন বদলায়</text>
    <text x="280" y="225" text-anchor="middle" fill="#9a93b8" font-size="7">flexible, but type(x) দিয়ে যাচাই করো</text>
  </svg>
  <div class="diag-cap">Variable = নামযুক্ত পাত্র। int (সংখ্যা), float (দশমিক), str (লেখা), bool (সত্য/মিথ্যা)। Python-এ ধরন বদলায় — dynamic typing।</div>
</div>

<div class="dialogue">মিসকাহ — মাটি, কাদা। কুরআনে আল্লাহ বলেন — আমরা মানুষকে সৃষ্টি করেছি মাটি থেকে (২৩:১২)। মাটি নমনীয় — যেকোনো আকার নেয়। Python variable-ও নমনীয় — যেকোনো ধরন নেয়। কিন্তু কুমারের হাত দরকার — মাটি একা পাত্র হয় না। তোমার হাত দরকার — variable একা প্রোগ্রাম হয় না।</div>
<div class="dialogue en">Miskah — clay, mud. Allah says — We created man from clay (23:12). Clay is flexible — takes any shape. Python variables are flexible — take any type. But clay needs a potter's hands — alone it is not a vessel. You need hands — a variable alone is not a program.</div>

<div class="secret-box">🏺 Variable = নামযুক্ত পাত্র। int, float, str, bool। Dynamic typing = নমনীয়, কিন্তু type() দিয়ে যাচাই করো।</div>
`,
  senior:{
    title:"Variables & Types — Senior Notes",
    body:`<p><strong>Python-এর ৪টি প্রাথমিক type:</strong></p>
<table class="kv-table">
<tr><th>Type</th><th>উদাহরণ</th><th>ব্যবহার</th></tr>
<tr><td class="hl">int</td><td>42, -7, 0</td><td>গণনা, ইনডেক্স</td></tr>
<tr><td class="hl">float</td><td>3.14, -0.5</td><td>দশমিক, বৈজ্ঞানিক</td></tr>
<tr><td class="hl">str</td><td>"hello", 'world'</td><td>লেখা, বার্তা</td></tr>
<tr><td class="hl">bool</td><td>True, False</td><td>শর্ত, ফ্ল্যাগ</td></tr>
</table>
<p><strong>Python 3 f-string:</strong> <code>f"Name: {name}, Price: {price}"</code> — সবচেয়ে পরিষ্কার way।</p>
<p><strong>Cross-ref:</strong> Book 52 (Code Craftsman) Door 1-এ meaningful names দেখবে। Book 40 (Software Engineering) Door 3-এ type systems দেখবে।</p>`
  }
});

// ── GUILD 2: CANAL — CONTROL FLOW ──
doors.push({
  num:2, icon:"🌊", color:"#2dd4bf", name:"নহরের স্রোত",
  subtitle:"The Canal", tech:"Control Flow (if/elif/else, loops)",
  spirit:"জারি — flowing, from Quran 21:30 (We made from water every living thing)",
  secret:"Control flow = স্রোতের দিক নিয়ন্ত্রণ। if/elif/else = শাখা প্রশ্ন (কোন পথে যাবে পানি)। for/while = চক্র (বারবার ঘোরে)। প্রোগ্রাম = স্রোত নিয়ন্ত্রণ।",
  recall:{
    q:"if/elif/else ও for/while-এর পার্থক্য কী? কখন কোনটা?",
    qen:"Difference between if/elif/else and for/while? When to use which?",
    a:"if/elif/else = একবার সিদ্ধান্ত — কোন শাখায় যাবে। for = নির্দিষ্ট সংখ্যক বার ঘুরবে। while = শর্ত সত্য থাকলে ঘুরবে। for = তালিকা আছে, while = শর্ত আছে।",
    aen:"if/elif/else = one-time decision. for = loop fixed times. while = loop while condition is true."
  },
  story:`
<p class="scene-setting">দ্বিতীয় গিল্ড। নহরের কাছে। পানির শব্দ, ভেজা ঘাসের গন্ধ, শীতল বাতাস। নহরের রক্ষক ইদ্রিস দাঁড়িয়ে — হাতে কাঠের দরজা, যা পানির স্রোত বন্ধ করে বা ছাড়ে। "পানি সবসময় এক দিকে যায় না," তিনি বলেন। "কখনো ডানে, কখনো বামে, কখনো আটকে যায়। কোডও তেমনি — control flow দিয়ে দিক নির্ধারণ করো।"</p>
<p class="scene-setting en">Second guild. By the canal. Sound of water, smell of wet grass, cool breeze. Canal keeper Idris stands — a wooden gate in hand, stopping or releasing the water's flow. "Water doesn't always go one way," he says. "Sometimes right, sometimes left, sometimes blocked. Code is the same — use control flow to direct it."</p>

<div class="dialogue">সমস্যা: তোমার ৫০০টা কাজের তালিকা। প্রতিটা কাজের priority — ১ (জরুরি) থেকে ৫ (পরে)। এখন কাজগুলো গুরুত্ব অনুযায়ী সাজাতে হবে। হাতে করবে? ৫০০টা? মাস লাগবে। Python-এ control flow দিয়ে — if/elif/else ও for loop — সেকেন্ডে সাজাও।</div>
<div class="dialogue en">Problem: You have 500 tasks. Each has priority 1 (urgent) to 5 (later). Sort by importance. By hand? 500? Takes a month. Python control flow — if/elif/else and for loop — sorts in seconds.</div>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>ভুলের গল্প:</strong> ইদ্রিস বললেন — এক শিক্ষানবিশ while True: লিখলো — infinite loop। কখনো বন্ধ হবে না। কম্পিউটার hang করে ফেললো। কারণ exit condition ছিল না। while লেখার আগে ভাবো — কখন থামবে? নাহলে চিরকাল চলবে।</div></div>

<div class="code-block"># guild2_tasks.py — Canal Problem
# Master Idris: "Direct the flow. if = branch, for = cycle, while = until."

# ── THE PROBLEM: Sort 500 tasks by priority ──
tasks = [
    {"name": "Fix login bug", "priority": 1},
    {"name": "Update docs", "priority": 3},
    {"name": "Security patch", "priority": 1},
    {"name": "Refactor API", "priority": 4},
    {"name": "Buy coffee", "priority": 5},
]

# ── if/elif/else: Branch decisions ──
def priority_label(priority):
    """Returns urgency label based on priority number."""
    if priority == 1:
        return "🔥 URGENT"
    elif priority == 2:
        return "⚠️ HIGH"
    elif priority == 3:
        return "📋 MEDIUM"
    elif priority == 4:
        return "📅 LOW"
    else:
        return "🐌 LATER"

# ── for loop: Cycle through each task ──
for task in tasks:
    label = priority_label(task["priority"])
    print(f"{label}: {task['name']}")

# Output:
#   🔥 URGENT: Fix login bug
#   📋 MEDIUM: Update docs
#   🔥 URGENT: Security patch
#   📅 LOW: Refactor API
#   🐌 LATER: Buy coffee

# ── while loop: Repeat UNTIL condition changes ──
# Use when you don't know how many iterations
attempts = 0
while attempts &lt; 3:
    print(f"Attempt {attempts + 1}")
    attempts += 1  # CRITICAL: must change condition!
# Output: Attempt 1, 2, 3

# ── break and continue: Flow control within loops ──
# break = exit loop immediately
# continue = skip this iteration, go to next
for task in tasks:
    if task["priority"] == 5:
        continue  # skip low-priority tasks
    if task["name"] == "Security patch":
        print(f"🚨 Found critical: {task['name']}")
        break  # stop searching
    print(f"Checking: {task['name']}")

# ── REAL SCENARIO: Sort all tasks by priority ──
sorted_tasks = sorted(tasks, key=lambda t: t["priority"])
print("\nSorted by priority:")
for task in sorted_tasks:
    print(f"  {task['priority']}: {task['name']}")</div>

<div class="diagram">
  <div class="diag-title">Control Flow — স্রোতের শাখা ও চক্র</div>
  <svg viewBox="0 0 560 280" xmlns="http://www.w3.org/2000/svg">
    <defs><marker id="arrC" markerWidth="6" markerHeight="6" refX="4" refY="3" orient="auto"><path d="M0,0 L4,3 L0,6" fill="#2dd4bf"/></marker></defs>
    <!-- Start -->
    <rect x="220" y="15" width="120" height="30" rx="6" fill="rgba(45,212,191,0.1)" stroke="#2dd4bf" stroke-width="2"/>
    <text x="280" y="34" text-anchor="middle" fill="#2dd4bf" font-size="9" font-weight="bold">Start</text>
    <line x1="280" y1="45" x2="280" y2="60" stroke="#2dd4bf" stroke-width="1.5" marker-end="url(#arrC)"/>
    <!-- if diamond -->
    <polygon points="280,65 350,100 280,135 210,100" fill="rgba(251,191,36,0.08)" stroke="#fbbf24" stroke-width="2"/>
    <text x="280" y="98" text-anchor="middle" fill="#fbbf24" font-size="9" font-weight="bold">if priority == 1?</text>
    <text x="280" y="112" text-anchor="middle" fill="#9a93b8" font-size="7">branch</text>
    <!-- Yes branch -->
    <line x1="210" y1="100" x2="140" y2="100" stroke="#52c41a" stroke-width="1.5" marker-end="url(#arrC)"/>
    <text x="175" y="93" text-anchor="middle" fill="#52c41a" font-size="8" font-weight="bold">Yes</text>
    <rect x="60" y="85" width="80" height="30" rx="5" fill="rgba(82,196,26,0.08)" stroke="#52c41a" stroke-width="1.5"/>
    <text x="100" y="104" text-anchor="middle" fill="#52c41a" font-size="8" font-family="monospace">URGENT</text>
    <!-- No branch -->
    <line x1="350" y1="100" x2="420" y2="100" stroke="#f06292" stroke-width="1.5" marker-end="url(#arrC)"/>
    <text x="385" y="93" text-anchor="middle" fill="#f06292" font-size="8" font-weight="bold">No</text>
    <rect x="420" y="85" width="100" height="30" rx="5" fill="rgba(240,98,146,0.08)" stroke="#f06292" stroke-width="1.5"/>
    <text x="470" y="104" text-anchor="middle" fill="#f06292" font-size="8" font-family="monospace">elif priority==2</text>
    <!-- Loop -->
    <text x="280" y="160" text-anchor="middle" fill="#34d399" font-size="9" font-weight="bold">Loops (চক্র)</text>
    <rect x="40" y="175" width="220" height="50" rx="8" fill="rgba(45,212,191,0.06)" stroke="#2dd4bf" stroke-width="1.5"/>
    <text x="150" y="193" text-anchor="middle" fill="#2dd4bf" font-size="9" font-weight="bold">for item in list:</text>
    <text x="150" y="208" text-anchor="middle" fill="#9a93b8" font-size="7">নির্দিষ্ট সংখ্যক — তালিকা আছে</text>
    <text x="150" y="220" text-anchor="middle" fill="#9a93b8" font-size="7">for i in range(10):</text>
    <rect x="300" y="175" width="220" height="50" rx="8" fill="rgba(167,139,250,0.06)" stroke="#a78bfa" stroke-width="1.5"/>
    <text x="410" y="193" text-anchor="middle" fill="#a78bfa" font-size="9" font-weight="bold">while condition:</text>
    <text x="410" y="208" text-anchor="middle" fill="#9a93b8" font-size="7">শর্ত সত্য থাকলে — শর্ত আছে</text>
    <text x="410" y="220" text-anchor="middle" fill="#9a93b8" font-size="7">while attempts &lt; 3:</text>
    <!-- Warning -->
    <rect x="40" y="240" width="480" height="30" rx="6" fill="rgba(240,98,146,0.06)" stroke="rgba(240,98,146,0.2)" stroke-width="1"/>
    <text x="280" y="258" text-anchor="middle" fill="#f06292" font-size="8" font-weight="bold">⚠️ while-এ exit condition আবশ্যক — নাহলে infinite loop!</text>
  </svg>
  <div class="diag-cap">if/elif/else = শাখা (কোন পথে)। for = নির্দিষ্ট চক্র। while = শর্ত চক্র। break = থামো, continue = এড়াও।</div>
</div>

<div class="dialogue">জারি — প্রবাহিত, স্রোতের মতো। কুরআনে আল্লাহ বলেন — প্রতিটা জীবকে আমরা পানি থেকে সৃষ্টি করেছি (২১:৩০)। পানি প্রবাহিত — শাখা নেয়, চক্র করে, বাধা পায়। কোডও প্রবাহিত — control flow ছাড়া কোড এক লাইনে চলে, কিন্তু স্রোতের মতো শাখা নিতে পারে না। শাখা ও চক্রই প্রোগ্রামকে শক্তিশালী করে।</div>
<div class="dialogue en">Jari — flowing, like a stream. Allah says — We made from water every living thing (21:30). Water flows — branches, cycles, meets obstacles. Code also flows — without control flow, code runs in one line, but cannot branch like a stream. Branching and cycling make programs powerful.</div>

<div class="secret-box">🌊 if/elif/else = শাখা। for = নির্দিষ্ট চক্র। while = শর্ত চক্র। break = থামো, continue = এড়াও। Exit condition আবশ্যক!</div>
`,
  senior:{
    title:"Control Flow — Senior Notes",
    body:`<p><strong>৩টি flow structure:</strong></p>
<table class="kv-table">
<tr><th>Structure</th><th>কখন</th><th>উদাহরণ</th></tr>
<tr><td class="hl">if/elif/else</td><td>একবার সিদ্ধান্ত</td><td>if score &gt;= 90: grade = 'A'</td></tr>
<tr><td class="hl">for</td><td>তালিকায় চলো</td><td>for item in items: process(item)</td></tr>
<tr><td class="hl">while</td><td>শর্ত সত্য পর্যন্ত</td><td>while retries &gt; 0: retry()</td></tr>
</table>
<p><strong>Python trick:</strong> <code>for i, item in enumerate(list):</code> — index ও value একসাথে। <code>for a, b in zip(list1, list2):</code> — দুই তালিকা একসাথে।</p>
<p><strong>Cross-ref:</strong> Book 52 (Code Craftsman) Door 11-এ guard clauses ও nesting দেখবে। Book 2 (DSA Bazaar)-এ algorithmic loops দেখবে।</p>`
  }
});

// ── GUILD 3: RECIPE KITCHEN — FUNCTIONS ──
doors.push({
  num:3, icon:"🍳", color:"#34d399", name:"রন্ধনশিল্পীর রান্নাঘর",
  subtitle:"The Recipe Kitchen", tech:"Functions — def, parameters, return",
  spirit:"সুন্নাহ — tradition/established practice, from the concept of a proven way of doing things",
  secret:"Function = রেসিপি। একবার লেখো, বারবার ব্যবহার করো। Input (উপকরণ) → process (রান্না) → output (পদ)। DRY-এর ভিত্তি — একই কোড কপি কোরো না, function বানাও।",
  recall:{
    q:"Function-এ parameter ও argument-এর পার্থক্য কী? return কেন দরকার?",
    qen:"Difference between parameter and argument? Why use return?",
    a:"Parameter = function-এর সংজ্ঞায় নাম (def cook(item))। Argument = কল করার সময় মান (cook('rice'))। return = ফলাফল ফেরত দেওয়া — ছাড়া function None দেয়, ফলাফল হারায়।",
    aen:"Parameter = name in definition. Argument = value when calling. return = give result back — without it, function returns None."
  },
  story:`
<p class="scene-setting">তৃতীয় গিল্ড। রান্নাঘর। মসলার গন্ধ, হাঁড়ির ভাপ, ছুরির শব্দ। রন্ধনশিল্পী রহিম একটা রেসিপি বই খুলে বসেছেন। "প্রতিটা পদের একটা রেসিপি আছে," তিনি বলেন। "উপকরণ দাও, প্রক্রিয়া হবে, পদ পাবে। একই রেসিপি ১০০ বার — একই ফল। Python-এ এটাই function।"</p>
<p class="scene-setting en">Third guild. The kitchen. Smell of spices, steam from pots, sound of knives. Chef Rahim sits with a recipe book. "Each dish has a recipe," he says. "Give ingredients, process happens, dish comes out. Same recipe 100 times — same result. In Python, this is a function."</p>

<div class="dialogue">সমস্যা: তোমার ৫০টা পণ্যের উপর ২০% কর যোগ করতে হবে। প্রতিটার জন্য আলাদা কোড? ৫০ বার একই হিসাব? না — একটা function বানাও: add_tax(price)। ৫০ বার কল করো। একই কোড, এক জায়গায়। ভুল হলে এক জায়গায় ঠিক করো।</div>
<div class="dialogue en">Problem: Add 20% tax to 50 products. Separate code for each? Same calculation 50 times? No — make one function: add_tax(price). Call it 50 times. Same code, one place. Fix once if wrong.</div>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>ভুলের গল্প:</strong> রহিম বললেন — এক শিক্ষানবিশ ভাত রান্না করলেন কিন্তু পরিবেশন করলেন না — হাঁড়িতেই রেখে দিলেন। function-এও এটা হয় — হিসাব করলেন কিন্তু return দিলেন না। ফলাফল function-এর ভেতরেই পড়ে থাকলো। return ছাড়া function = হাঁড়িতে রান্না, পাতিলে পরিবেশন নয়।</div></div>

<div class="code-block"># guild3_functions.py — Recipe Kitchen
# Chef Rahim: "Write the recipe once. Cook many times."

# ── THE PROBLEM: Add 20% tax to 50 products ──
prices = [50, 100, 25, 200, 75, 150, 30, 80, 90, 60]

# ❌ BAD: Copy the same logic everywhere
total1 = prices[0] * 1.2
total2 = prices[1] * 1.2
total3 = prices[2] * 1.2
# ... 50 times. Change tax rate? Find all 50 lines.

# ✅ GOOD: Function — write once, use anywhere
def add_tax(price, tax_rate=0.20):
    """Add tax to a price. Returns the total."""
    return price * (1 + tax_rate)
#        ^^^^^^ CRITICAL: return gives result back

# Call it 50 times — one line each
for price in prices:
    print(f"  {price} → {add_tax(price):.0f} taka (with tax)")

# ── PARAMETERS vs ARGUMENTS ──
# Parameter = name in definition (price, tax_rate)
# Argument = value when calling (50, 0.20)
expensive = add_tax(500)         # uses default tax_rate=0.20
cheap = add_tax(10, tax_rate=0.10)  # override tax_rate
print(f"Expensive: {expensive}, Cheap: {cheap}")

# ── MULTIPLE RETURNS ──
def analyze_prices(prices):
    """Returns min, max, and average."""
    return min(prices), max(prices), sum(prices) / len(prices)

lowest, highest, average = analyze_prices(prices)
print(f"Low: {lowest}, High: {highest}, Avg: {average:.1f}")

# ── DEFAULT ARGUMENTS ──
def greet(name, greeting="Hello"):
    """greeting has a default — caller can skip it."""
    return f"{greeting}, {name}!"

print(greet("Fatima"))              # Hello, Fatima!
print(greet("Fatima", greeting="Hi"))  # Hi, Fatima!

# ── *args and **kwargs: Flexible parameters ──
def calculate_total(*prices):
    """Accept any number of prices."""
    return sum(prices)

print(calculate_total(10, 20, 30))    # 60
print(calculate_total(10, 20, 30, 40, 50))  # 150

def create_user(**details):
    """Accept any named details."""
    return details

user = create_user(name="Bob", age=25, city="Dhaka")
print(user)  # {'name': 'Bob', 'age': 25, 'city': 'Dhaka'}</div>

<div class="diagram">
  <div class="diag-title">Function = রেসিপি — Input → Process → Output</div>
  <svg viewBox="0 0 560 220" xmlns="http://www.w3.org/2000/svg">
    <defs><marker id="arrF" markerWidth="6" markerHeight="6" refX="4" refY="3" orient="auto"><path d="M0,0 L4,3 L0,6" fill="#34d399"/></marker></defs>
    <!-- Input -->
    <rect x="20" y="60" width="120" height="60" rx="8" fill="rgba(45,212,191,0.08)" stroke="#2dd4bf" stroke-width="2"/>
    <text x="80" y="82" text-anchor="middle" fill="#2dd4bf" font-size="10" font-weight="bold">INPUT</text>
    <text x="80" y="97" text-anchor="middle" fill="#9a93b8" font-size="7">arguments</text>
    <text x="80" y="110" text-anchor="middle" fill="#9a93b8" font-size="7">price=50</text>
    <line x1="140" y1="90" x2="190" y2="90" stroke="#34d399" stroke-width="2" marker-end="url(#arrF)"/>
    <!-- Process -->
    <rect x="195" y="40" width="170" height="100" rx="8" fill="rgba(52,211,153,0.08)" stroke="#34d399" stroke-width="2"/>
    <text x="280" y="62" text-anchor="middle" fill="#34d399" font-size="10" font-weight="bold">FUNCTION (রেসিপি)</text>
    <text x="280" y="80" text-anchor="middle" fill="#9a93b8" font-size="7" font-family="monospace">def add_tax(price):</text>
    <text x="280" y="94" text-anchor="middle" fill="#9a93b8" font-size="7" font-family="monospace">    return price * 1.2</text>
    <text x="280" y="115" text-anchor="middle" fill="#9a93b8" font-size="7">process: হিসাব</text>
    <text x="280" y="128" text-anchor="middle" fill="#9a93b8" font-size="7">এক জায়গায়, বারবার ব্যবহার</text>
    <line x1="365" y1="90" x2="415" y2="90" stroke="#34d399" stroke-width="2" marker-end="url(#arrF)"/>
    <!-- Output -->
    <rect x="420" y="60" width="120" height="60" rx="8" fill="rgba(251,191,36,0.08)" stroke="#fbbf24" stroke-width="2"/>
    <text x="480" y="82" text-anchor="middle" fill="#fbbf24" font-size="10" font-weight="bold">OUTPUT</text>
    <text x="480" y="97" text-anchor="middle" fill="#9a93b8" font-size="7">return value</text>
    <text x="480" y="110" text-anchor="middle" fill="#9a93b8" font-size="7">60</text>
    <!-- Bottom -->
    <rect x="20" y="165" width="520" height="40" rx="6" fill="rgba(45,212,191,0.06)" stroke="rgba(45,212,191,0.2)" stroke-width="1"/>
    <text x="280" y="183" text-anchor="middle" fill="#34d399" font-size="8" font-weight="bold">DRY: Don't Repeat Yourself — একই কোড কপি নয়, function বানাও</text>
    <text x="280" y="195" text-anchor="middle" fill="#9a93b8" font-size="7">parameter = নাম, argument = মান, return = ফলাফল ফেরত</text>
  </svg>
  <div class="diag-cap">Function = input → process → output। একবার লেখো, বারবার ব্যবহার করো। return ছাড়া ফলাফল হারায়।</div>
</div>

<div class="dialogue">সুন্নাহ — প্রতিষ্ঠিত প্রথা, প্রমাণিত পদ্ধতি। রেসিপি হলো সুন্নাহ — প্রমাণিত পদ্ধতি, বারবার একই ফল। function-ও সুন্নাহ — একবার সংজ্ঞায়িত, বারবার একই ফলাফল। যে প্রতিটা কাজের জন্য আলাদা কোড লেখে, সে কারিগর নয় — শ্রমিক। কারিগর পদ্ধতি বানায়।</div>
<div class="dialogue en">Sunnah — established practice, proven method. A recipe is sunnah — proven method, same result every time. A function is also sunnah — defined once, same result repeatedly. One who writes separate code for each task is not a craftsman — they are a laborer. A craftsman builds methods.</div>

<div class="secret-box">🍳 Function = রেসিপি। parameter (নাম) → process → return (ফলাফল)। একবার লেখো, বারবার ব্যবহার করো। DRY।</div>
`,
  senior:{
    title:"Functions — Senior Notes",
    body:`<p><strong>Function-এর ৪টি অংশ:</strong></p>
<table class="kv-table">
<tr><th>অংশ</th><th>উদাহরণ</th></tr>
<tr><td class="hl">Name</td><td>def add_tax(price): — clear, verb-based</td></tr>
<tr><td class="hl">Parameters</td><td>price, tax_rate=0.20 (default)</td></tr>
<tr><td class="hl">Body</td><td>return price * (1 + tax_rate)</td></tr>
<tr><td class="hl">Return</td><td>ফলাফল ফেরত — নাহলে None</td></tr>
</table>
<p><strong>*args, **kwargs:</strong> <code>*args</code> = any number of positional, <code>**kwargs</code> = any number of keyword arguments। Flexible API।</p>
<p><strong>Cross-ref:</strong> Book 52 (Code Craftsman) Door 2-এ small functions দেখবে। Door 4-এ DRY দেখবে।</p>`
  }
});

// ── GUILD 4: STOREHOUSE — DATA STRUCTURES ──
doors.push({
  num:4, icon:"📦", color:"#2dd4bf", name:"ভাণ্ডার ঘর",
  subtitle:"The Storehouse", tech:"Data Structures (list, tuple, dict, set)",
  spirit:"হিফজ — preservation/organization, from Quran 15:9 (We preserve)",
  secret:"৪টি পাত্র: list (তালিকা, পরিবর্তনযোগ্য), tuple (তালিকা, অপরিবর্তনীয়), dict (নাম-মান জোড়া), set (অদ্বিতীয় সংগ্রহ)। সমস্যা বুঝে সঠিক পাত্র বেছো। list = ক্রম দরকার, dict = নাম দরকার, set = ইউনিক দরকার।",
  recall:{
    q:"কখন list, কখন dict, কখন set ব্যবহার করবে?",
    qen:"When to use list, dict, or set?",
    a:"list = ক্রম ও ডুপ্লিকেট দরকার। dict = নাম-মান জোড়া (key-value) দরকার। set = শুধু ইউনিক উপাদান দরকার, ক্রম নয়। tuple = অপরিবর্তনীয় তালিকা — যেমন coordinates।",
    aen:"list = need order and duplicates. dict = need key-value pairs. set = need unique items, no order. tuple = immutable list — like coordinates."
  },
  story:`
<p class="scene-setting">চতুর্থ গিল্ড। ভাণ্ডার ঘর। শুকনো ঘাসের গন্ধ, বস্তার স্তূপ, কাঠের তাক। ভাণ্ডার রক্ষক করিম তার তাক দেখাচ্ছেন — প্রতিটা তাকে ভিন্ন ধরনের মাল। "এক তাকে চাল, এক তাকে ডাল, এক তাকে মসলা," তিনি বলেন। "প্রতিটা তাকে সঠিক জিনিস। Python-এ ৪ ধরনের তাক — list, tuple, dict, set। সঠিক তাকে সঠিক মাল।"</p>
<p class="scene-setting en">Fourth guild. The storehouse. Smell of dry hay, sacks piled, wooden shelves. Storekeeper Karim shows his shelves — each holding different goods. "One shelf rice, one lentils, one spices," he says. "Each shelf for the right thing. In Python, 4 types of shelves — list, tuple, dict, set. Right shelf for right goods."</p>

<div class="dialogue">সমস্যা: তোমার ১০,০০০ গ্রাহকের তথ্য — নাম, ইমেইল, ফোন, কেনাকাটার ইতিহাস। কোথায় রাখবে? list-এ? ১০,০০০ গ্রাহক খুঁজতে ১০,০০০ বার চেক। dict-এ? নাম দাও, সেকেন্ডে পাও। সঠিক data structure = সঠিক সমাধান।</div>
<div class="dialogue en">Problem: 10,000 customer records — name, email, phone, history. Where to store? List? Search takes 10,000 checks. Dict? Name in, get instantly. Right data structure = right solution.</div>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>ভুলের গল্প:</strong> করিম বললেন — এক শিক্ষানবিশ ১০,০০০ গ্রাহক list-এ রাখলো। গ্রাহক খুঁজতে if দিয়ে পুরো list ঘাঁটলো — ৫০ সেকেন্ড। dict দিলে একই কাজ ০.০০১ সেকেন্ড। ৫০,০০০ গুণ দ্রুত। সঠিক পাত্র ছাড়া কোড চলে, কিন্তু ধীর। সঠিক structure = গতি।</div></div>

<div class="code-block"># guild4_data.py — Storehouse Problem
# Master Karim: "Right shelf for right goods."

# ── THE PROBLEM: Store 10,000 customers efficiently ──

# ── LIST: Ordered, mutable, allows duplicates ──
# Use when: order matters, items can repeat
task_queue = ["fix bug", "write docs", "deploy"]
task_queue.append("review PR")    # add to end
task_queue.insert(0, "urgent!")   # insert at position
task_queue.remove("write docs")   # remove by value
print(task_queue)  # ['urgent!', 'fix bug', 'deploy', 'review PR']

# List operations
prices = [50, 100, 25, 200, 75]
print(f"Count: {len(prices)}")       # 5
print(f"Max: {max(prices)}")         # 200
print(f"Sorted: {sorted(prices)}")   # [25, 50, 75, 100, 200]
print(f"Sum: {sum(prices)}")         # 450

# ── TUPLE: Ordered, IMMUTABLE (cannot change) ──
# Use when: data should not change — coordinates, config
coordinates = (23.8103, 90.4125)  # Dhaka lat/lon
# coordinates[0] = 24.0  # ERROR — can't modify tuple!
rgb_color = (255, 128, 0)  # orange — won't change

# ── DICT: Key-value pairs, fast lookup ──
# Use when: need to look up by name/key
customers = {
    "fatima": {"email": "fatima@mail.com", "phone": "0171..."},
    "ahmed": {"email": "ahmed@mail.com", "phone": "0181..."},
    "sara": {"email": "sara@mail.com", "phone": "0191..."},
}

# Lookup by key — INSTANT (O(1)), no scanning
customer = customers["fatima"]  # direct access!
print(f"Fatima's email: {customer['email']}")

# Add/update
customers["bob"] = {"email": "bob@mail.com", "phone": "0161..."}

# Iterate
for name, info in customers.items():
    print(f"  {name}: {info['email']}")

# ── SET: Unique items only, no order ──
# Use when: need uniqueness, remove duplicates
all_tags = ["python", "code", "python", "ai", "code", "ml"]
unique_tags = set(all_tags)
print(unique_tags)  # {'python', 'code', 'ai', 'ml'}

# Set operations — powerful!
python_devs = {"Alice", "Bob", "Charlie"}
ai_devs = {"Bob", "Charlie", "David"}
both = python_devs &amp; ai_devs      # intersection: {'Bob', 'Charlie'}
either = python_devs | ai_devs    # union: all 4
only_python = python_devs - ai_devs  # difference: {'Alice'}

# ── DECISION GUIDE ──
# Order + mutable?      → list
# Order + immutable?    → tuple
# Key-value lookup?     → dict
# Unique + no order?    → set</div>

<div class="diagram">
  <div class="diag-title">৪ পাত্র — list · tuple · dict · set</div>
  <svg viewBox="0 0 560 260" xmlns="http://www.w3.org/2000/svg">
    <!-- list -->
    <rect x="20" y="20" width="120" height="100" rx="8" fill="rgba(45,212,191,0.08)" stroke="#2dd4bf" stroke-width="2"/>
    <text x="80" y="40" text-anchor="middle" fill="#2dd4bf" font-size="10" font-weight="bold">list</text>
    <text x="80" y="55" text-anchor="middle" fill="#9a93b8" font-size="7">[1, 2, 3]</text>
    <text x="80" y="75" text-anchor="middle" fill="#9a93b8" font-size="7">ক্রম ✓ ডুপ্লিকেট ✓</text>
    <text x="80" y="88" text-anchor="middle" fill="#52c41a" font-size="7" font-weight="bold">পরিবর্তনযোগ্য</text>
    <text x="80" y="105" text-anchor="middle" fill="#9a93b8" font-size="6">task_queue, prices</text>
    <!-- tuple -->
    <rect x="150" y="20" width="120" height="100" rx="8" fill="rgba(167,139,250,0.08)" stroke="#a78bfa" stroke-width="2"/>
    <text x="210" y="40" text-anchor="middle" fill="#a78bfa" font-size="10" font-weight="bold">tuple</text>
    <text x="210" y="55" text-anchor="middle" fill="#9a93b8" font-size="7">(1, 2, 3)</text>
    <text x="210" y="75" text-anchor="middle" fill="#9a93b8" font-size="7">ক্রম ✓ ডুপ্লিকেট ✓</text>
    <text x="210" y="88" text-anchor="middle" fill="#f06292" font-size="7" font-weight="bold">অপরিবর্তনীয়</text>
    <text x="210" y="105" text-anchor="middle" fill="#9a93b8" font-size="6">coordinates, RGB</text>
    <!-- dict -->
    <rect x="280" y="20" width="140" height="100" rx="8" fill="rgba(251,191,36,0.08)" stroke="#fbbf24" stroke-width="2"/>
    <text x="350" y="40" text-anchor="middle" fill="#fbbf24" font-size="10" font-weight="bold">dict</text>
    <text x="350" y="55" text-anchor="middle" fill="#9a93b8" font-size="7">{"key": "value"}</text>
    <text x="350" y="75" text-anchor="middle" fill="#9a93b8" font-size="7">নাম-মান জোড়া</text>
    <text x="350" y="88" text-anchor="middle" fill="#52c41a" font-size="7" font-weight="bold">দ্রুত খোঁজ O(1)</text>
    <text x="350" y="105" text-anchor="middle" fill="#9a93b8" font-size="6">customers, config</text>
    <!-- set -->
    <rect x="430" y="20" width="120" height="100" rx="8" fill="rgba(82,196,26,0.08)" stroke="#52c41a" stroke-width="2"/>
    <text x="490" y="40" text-anchor="middle" fill="#52c41a" font-size="10" font-weight="bold">set</text>
    <text x="490" y="55" text-anchor="middle" fill="#9a93b8" font-size="7">{1, 2, 3}</text>
    <text x="490" y="75" text-anchor="middle" fill="#9a93b8" font-size="7">ইউনিক only</text>
    <text x="490" y="88" text-anchor="middle" fill="#52c41a" font-size="7" font-weight="bold">ডুপ্লিকেট নয়</text>
    <text x="490" y="105" text-anchor="middle" fill="#9a93b8" font-size="6">tags, categories</text>
    <!-- Decision -->
    <rect x="20" y="140" width="530" height="100" rx="8" fill="rgba(45,212,191,0.06)" stroke="rgba(45,212,191,0.2)" stroke-width="1"/>
    <text x="280" y="160" text-anchor="middle" fill="#34d399" font-size="9" font-weight="bold">সঠিক পাত্র কীভাবে বেছবে?</text>
    <text x="40" y="180" fill="#9a93b8" font-size="8">ক্রম ও পরিবর্তন দরকার? → <tspan fill="#2dd4bf" font-weight="bold">list</tspan> [1,2,3]</text>
    <text x="40" y="197" fill="#9a93b8" font-size="8">অপরিবর্তনীয় ক্রম? → <tspan fill="#a78bfa" font-weight="bold">tuple</tspan> (x,y)</text>
    <text x="40" y="214" fill="#9a93b8" font-size="8">নাম দিয়ে খোঁজ? → <tspan fill="#fbbf24" font-weight="bold">dict</tspan> {"name": value}</text>
    <text x="40" y="231" fill="#9a93b8" font-size="8">ইউনিক উপাদান? → <tspan fill="#52c41a" font-weight="bold">set</tspan> {a, b, c}</text>
  </svg>
  <div class="diag-cap">list (ক্রম), tuple (অপরিবর্তনীয়), dict (নাম-মান, দ্রুত খোঁজ), set (ইউনিক)। সমস্যা বুঝে সঠিক পাত্র বেছো।</div>
</div>

<div class="dialogue">হিফজ — সংরক্ষণ, সুরক্ষিত রাখা। কুরআনে আল্লাহ বলেন — নিশ্চয়ই আমরা স্মরণ রক্ষা করি (১৫:৯)। ভাণ্ডার রক্ষকও হিফজ করেন — সঠিক তাকে সঠিক মাল, যাতে দ্রুত পাওয়া যায়। dict = হিফজ-এর সবচেয়ে দ্রুত রূপ — নাম দাও, সঙ্গে পাও। সঠিক structure ছাড়া তথ্য আছে কিন্তু পাওয়া যায় না।</div>
<div class="dialogue en">Hifz — preservation, safekeeping. Allah says — We preserve (15:9). The storekeeper also preserves — right goods on right shelf, so they can be found quickly. Dict = the fastest form of hifz — name in, get instantly. Without the right structure, data exists but cannot be found.</div>

<div class="secret-box">📦 list (ক্রম) · tuple (অপরিবর্তনীয়) · dict (নাম-মান, দ্রুত) · set (ইউনিক)। সমস্যা বুঝে সঠিক পাত্র বেছো।</div>
`,
  senior:{
    title:"Data Structures — Senior Notes",
    body:`<p><strong>৪টি core data structure:</strong></p>
<table class="kv-table">
<tr><th>Structure</th><th>Syntax</th><th>Lookup</th><th>Use Case</th></tr>
<tr><td class="hl">list</td><td>[1, 2, 3]</td><td>O(n) by value</td><td>Ordered queue, stack</td></tr>
<tr><td class="hl">tuple</td><td>(1, 2, 3)</td><td>O(1) by index</td><td>Fixed coordinates, config</td></tr>
<tr><td class="hl">dict</td><td>{"k": "v"}</td><td>O(1) by key</td><td>Lookup table, JSON</td></tr>
<tr><td class="hl">set</td><td>{1, 2, 3}</td><td>O(1) membership</td><td>Unique items, dedup</td></tr>
</table>
<p><strong>Performance:</strong> dict/set lookup = O(1) (instant)। list lookup = O(n) (slow for big data)। ১০,০০০ items-এ dict ১০,০০০ গুণ দ্রুত।</p>
<p><strong>Cross-ref:</strong> Book 2 (DSA Bazaar) — পুরো বই data structures নিয়ে। Book 52 (Code Craftsman) Door 15-এ abstraction barriers দেখবে।</p>`
  }
});

// ── GUILD 5: CALLIGRAPHER — STRINGS ──
doors.push({
  num:5, icon:"✍️", color:"#34d399", name:"ক্যালিগ্রাফারের কক্ষ",
  subtitle:"The Calligrapher's Studio", tech:"Strings — text processing, formatting, parsing",
  spirit:"বায়ান — clear speech/expression, from Quran 55:3-4 (He taught clear speech)",
  secret:"String = লেখা। Python-এ string অসংখ্য শক্তি — slice (কাটো), split (ভাঙো), join (জোড়ো), format (সাজাও), regex (খোঁজো)। বাস্তব জগতে তথ্য আসে মেসি text হিসেবে — string processing দিয়ে পরিষ্কার করো।",
  recall:{
    q:"string slicing কী? 'Hello'[1:4] এর ফলাফল কী?",
    qen:"What is string slicing? What does 'Hello'[1:4] return?",
    a:"Slicing = string-এর অংশ কাটা। 'Hello'[1:4] = 'ell' (index 1 থেকে 3 পর্যন্ত, 4 বাদ)। Python-এ [start:stop:step] — শক্তিশালী।",
    aen:"Slicing = cutting part of a string. 'Hello'[1:4] = 'ell' (index 1 to 3, excluding 4). Python: [start:stop:step]."
  },
  story:`
<p class="scene-setting">পঞ্চম গিল্ড। ক্যালিগ্রাফারের কক্ষ। কালির গন্ধ, কাগজের শব্দ, নিখুঁত হরফ। ক্যালিগ্রাফার জয়নুল একটা মেসি পান্ডুলিপি ধরে আছেন — পাতায় কালি ছড়ানো, শব্দ ভাঙা, অক্ষর উল্টো। "এটা পড়া যায় না," তিনি বলেন। "কিন্তু আমি পরিষ্কার করতে পারি।" Python-এ string processing দিয়ে আসল বিশ্বের মেসি text পরিষ্কার করো।</p>
<p class="scene-setting en">Fifth guild. Calligrapher's studio. Smell of ink, sound of paper, perfect letterforms. Calligrapher Zainul holds a messy manuscript — ink spilled, words broken, letters reversed. "This is unreadable," he says. "But I can clean it." Python string processing cleans messy real-world text.</p>

<div class="dialogue">সমস্যা: তুমি ১০০০টা ইমেইল ঠিকানা সংগ্রহ করেছো — কোনোটা বড় হাতে, কোনোটা ছোট, কোনোটায় স্পেস, কোনোটা ভুল। এগুলো পরিষ্কার করতে হবে। হাতে? মাস। Python string methods দিয়ে সেকেন্ডে — lower(), strip(), split(), regex।</div>
<div class="dialogue en">Problem: You collected 1,000 email addresses — some uppercase, some lowercase, some with spaces, some invalid. Clean them. By hand? Months. Python string methods — lower(), strip(), split(), regex — in seconds.</div>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>ভুলের গল্প:</strong> জয়নুল বললেন — এক শিক্ষানবিশ + দিয়ে string জোড়ার চেষ্টা করলো। "Hello" + " " + "World" + " " + str(42)। কাজ করলো, কিন্তু ugly। f-string দিলে: f"Hello World {42}"। পরিষ্কার, পঠনযোগ্য, দ্রুত। Python 3.6+ f-string = সবচেয়ে Pythonic।</div></div>

<div class="code-block"># guild5_strings.py — Calligrapher Problem
# Master Zainul: "Clean the messy text. String is your chisel."

# ── THE PROBLEM: Clean 1,000 messy email addresses ──
messy_emails = [
    "  Fatima@Mail.COM  ",
    "ahmed@@gmail.com",
    "  sara@yahoo.com  ",
    "BOB@HOTMAIL.COM",
    "nadia@gmail.com (personal)",
]

# ── CLEANING: strip, lower, split ──
def clean_email(raw):
    """Clean a messy email address."""
    email = raw.strip()        # remove leading/trailing spaces
    email = email.lower()      # normalize to lowercase
    # Remove parenthetical notes
    if "(" in email:
        email = email.split("(")[0].strip()
    # Fix double @
    email = email.replace("@@", "@")
    return email

cleaned = [clean_email(e) for e in messy_emails]
for e in cleaned:
    print(f"  {e}")
# fatima@mail.com, ahmed@gmail.com, sara@yahoo.com, etc.

# ── SLICING: Cut parts of a string ──
text = "Hello, World!"
print(text[0:5])    # 'Hello' (index 0-4)
print(text[7:])     # 'World!' (index 7 to end)
print(text[:5])     # 'Hello' (start to index 4)
print(text[-1])     # '!' (last character)
print(text[::-1])   # '!dlroW ,olleH' (reversed!)

# ── SPLIT and JOIN ──
csv_line = "Fatima,25,Dhaka,Engineer"
fields = csv_line.split(",")    # ['Fatima', '25', 'Dhaka', 'Engineer']
name, age, city, job = fields

# Join list back into string
tags = ["python", "ai", "ml"]
hashtags = "#".join([""] + tags)  # #python#ai#ml
print(hashtags)

# ── f-STRING: Modern formatting ──
name = "Fatima"
age = 25
price = 49.99

# Old way (ugly)
msg1 = "Name: " + name + ", Age: " + str(age)

# f-string (Pythonic)
msg2 = f"Name: {name}, Age: {age}"
msg3 = f"Price: {price:.2f} taka"  # Price: 49.99 taka
msg4 = f"{name.upper()} is {age} years old"

# ── SEARCHING and CHECKING ──
email = "fatima@mail.com"
print(email.endswith(".com"))      # True
print(email.startswith("fatima"))  # True
print("@" in email)                # True
print(email.find("@"))             # 6 (position of @)

# ── REGEX (advanced pattern matching) ──
import re

# Extract all emails from a messy text
text = "Contact: fatima@mail.com or ahmed@gmail.com"
emails = re.findall(r'[\w.]+@[\w.]+', text)
print(emails)  # ['fatima@mail.com', 'ahmed@gmail.com']

# Validate phone number format
phone = "+8801712345678"
pattern = r'^\+880\d{11}$'
if re.match(pattern, phone):
    print("Valid Bangladesh phone")</div>

<div class="diagram">
  <div class="diag-title">String Processing — মেসি text পরিষ্কার</div>
  <svg viewBox="0 0 560 240" xmlns="http://www.w3.org/2000/svg">
    <!-- Messy input -->
    <rect x="20" y="20" width="220" height="50" rx="6" fill="rgba(240,98,146,0.06)" stroke="#f06292" stroke-width="1.5"/>
    <text x="130" y="38" text-anchor="middle" fill="#f06292" font-size="9" font-weight="bold">মেসি input</text>
    <text x="130" y="55" text-anchor="middle" fill="#9a93b8" font-size="7" font-family="monospace">"  Fatima@Mail.COM  "</text>
    <!-- Arrow -->
    <text x="290" y="42" text-anchor="middle" fill="#34d399" font-size="9" font-weight="bold">clean_email()</text>
    <line x1="245" y1="45" x2="325" y2="45" stroke="#34d399" stroke-width="2"/>
    <!-- Clean output -->
    <rect x="330" y="20" width="210" height="50" rx="6" fill="rgba(82,196,26,0.06)" stroke="#52c41a" stroke-width="1.5"/>
    <text x="435" y="38" text-anchor="middle" fill="#52c41a" font-size="9" font-weight="bold">পরিষ্কার output</text>
    <text x="435" y="55" text-anchor="middle" fill="#9a93b8" font-size="7" font-family="monospace">"fatima@mail.com"</text>
    <!-- Tools -->
    <text x="280" y="100" text-anchor="middle" fill="#34d399" font-size="9" font-weight="bold">String Tools</text>
    <rect x="20" y="115" width="100" height="30" rx="5" fill="rgba(45,212,191,0.06)" stroke="#2dd4bf" stroke-width="1"/>
    <text x="70" y="134" text-anchor="middle" fill="#2dd4bf" font-size="7" font-family="monospace">.strip() .lower()</text>
    <rect x="130" y="115" width="100" height="30" rx="5" fill="rgba(45,212,191,0.06)" stroke="#2dd4bf" stroke-width="1"/>
    <text x="180" y="134" text-anchor="middle" fill="#2dd4bf" font-size="7" font-family="monospace">[0:5] [::-1]</text>
    <rect x="240" y="115" width="100" height="30" rx="5" fill="rgba(45,212,191,0.06)" stroke="#2dd4bf" stroke-width="1"/>
    <text x="290" y="134" text-anchor="middle" fill="#2dd4bf" font-size="7" font-family="monospace">.split() .join()</text>
    <rect x="350" y="115" width="100" height="30" rx="5" fill="rgba(45,212,191,0.06)" stroke="#2dd4bf" stroke-width="1"/>
    <text x="400" y="134" text-anchor="middle" fill="#2dd4bf" font-size="7" font-family="monospace">f"{name}"</text>
    <rect x="460" y="115" width="80" height="30" rx="5" fill="rgba(251,191,36,0.06)" stroke="#fbbf24" stroke-width="1"/>
    <text x="500" y="134" text-anchor="middle" fill="#fbbf24" font-size="7" font-family="monospace">re.match()</text>
    <!-- Real world -->
    <rect x="20" y="165" width="520" height="60" rx="8" fill="rgba(45,212,191,0.06)" stroke="rgba(45,212,191,0.2)" stroke-width="1"/>
    <text x="280" y="185" text-anchor="middle" fill="#34d399" font-size="9" font-weight="bold">বাস্তব জগতে string processing</text>
    <text x="280" y="200" text-anchor="middle" fill="#9a93b8" font-size="7">ইমেইল পরিষ্কার · CSV parse · log file analyze · phone validate · NLP preprocessing</text>
    <text x="280" y="215" text-anchor="middle" fill="#9a93b8" font-size="7">৯০% real-world data আসে text হিসেবে — string skills = survival skill</text>
  </svg>
  <div class="diag-cap">strip/lower/split/join/slice/regex — মেসি text পরিষ্কার করার হাতিয়ার। বাস্তব জগতে ৯০% তথ্য মেসি text।</div>
</div>

<div class="dialogue">বায়ান — স্পষ্ট ভাষা, পরিষ্কার প্রকাশ। কুরআনে আল্লাহ বলেন — তিনি মানুষকে বায়ান শিখিয়েছেন (৫৫:৩-৪)। বায়ান হলো অস্পষ্টকে স্পষ্ট করা। String processing হলো বায়ান — মেসি text কে পরিষ্কার, পঠনযোগ্য, ব্যবহারযোগ্য করা। যে ভালো কোড লেখে, সে ভালো ভাবে কথা বলে।</div>
<div class="dialogue en">Bayan — clear speech, clear expression. Allah says — He taught mankind clear speech (55:3-4). Bayan is making the unclear clear. String processing is bayan — making messy text clean, readable, usable. One who writes good code communicates well.</div>

<div class="secret-box">✍️ String = লেখা। strip/lower/split/join/slice/regex/f-string। বাস্তব জগতে ৯০% তথ্য মেসি text — পরিষ্কার করো।</div>
`,
  senior:{
    title:"Strings — Senior Notes",
    body:`<p><strong>সবচেয়ে ব্যবহৃত string methods:</strong></p>
<table class="kv-table">
<tr><th>Method</th><th>কাজ</th><th>উদাহরণ</th></tr>
<tr><td class="hl">.strip()</td><td>স্পেস ছাঁটো</td><td>" hi ".strip() → "hi"</td></tr>
<tr><td class="hl">.lower()/.upper()</td><td>ছোট/বড় হরফ</td><td>"HI".lower() → "hi"</td></tr>
<tr><td class="hl">.split(sep)</td><td>ভাঙো</td><td>"a,b".split(",") → ["a","b"]</td></tr>
<tr><td class="hl">.join(list)</td><td>জোড়ো</td><td>",".join(["a","b"]) → "a,b"</td></tr>
<tr><td class="hl">.replace(old,new)</td><td>বদলাও</td><td>"hi".replace("h","H") → "Hi"</td></tr>
<tr><td class="hl">.find(sub)</td><td>খোঁজো</td><td>"hello".find("l") → 2</td></tr>
<tr><td class="hl">f"{var}"</td><td>format</td><td>f"Hi {name}"</td></tr>
</table>
<p><strong>Regex:</strong> <code>import re</code> — pattern matching। <code>re.findall()</code>, <code>re.match()</code>, <code>re.sub()</code>। শক্তিশালী কিন্তু জটিল — সহজ কাজে string methods, কঠিন কাজে regex।</p>
<p><strong>Cross-ref:</strong> Book 52 (Code Craftsman) Door 1-এ meaningful names দেখবে। Book 45 (Compilers)-এ tokenization দেখবে — string থেকে token।</p>`
  }
});
