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
<p class="scene-setting">প্রথম গিল্ড। কুমারের ঘর। মাটির গন্ধ, চাকার আওয়াজ, ভেজা মাটির স্পর্শ। উস্তাদ ফাতেমা বসে আছেন — হাতে কাদামাটি, চোখে ধৈর্য। তার সামনে অগুনতি পাত্র — কোনোটা পানি ধরে, কোনোটা ভাত, কোনোটা শুধু শোভা। "প্রতিটা পাত্র একটা কাজের জন্য," তিনি বলেন। "Python-এ এটাকে বলে variable। চলো একটা একটা করে শিখি।"</p>
<p class="scene-setting en">First guild. The Potter's house. Smell of clay, sound of the wheel, touch of wet earth. Master Fatima sits — clay in hands, patience in eyes. Before her, countless vessels — some hold water, some rice, some just beauty. "Each vessel is for a purpose," she says. "In Python, we call this a variable. Let's learn one step at a time."</p>

<div class="dialogue">আগে একটা প্রশ্ন: কম্পিউটার কীভাবে কথা বলে? উত্তর: print() দিয়ে। এটাই Python-এর সবচেয়ে প্রথম জিনিস — স্ক্রিনে কিছু দেখানো।</div>
<div class="dialogue en">First question: how does a computer "speak"? Answer: with print(). This is the very first thing in Python — showing something on screen.</div>

<div class="code-block"># ── STEP 1: Your first Python program ──
# print() shows text on screen. Quotes "" mean "this is text".
# The # symbol makes a COMMENT — Python ignores it. For humans only.

print("Hello, World!")     # shows: Hello, World!
print("Python City!")       # shows: Python City!

# You can print numbers too (no quotes needed for numbers)
print(42)                   # shows: 42
print(3.14)                 # shows: 3.14</div>

<div class="dialogue">এখন সমস্যা: ফাতেমা বললেন — তোমার একটা দোকান আছে। চিনির দাম ৫০ টাকা। স্টক আছে। এই তথ্য কম্পিউটারে কীভাবে রাখবে? print("50") লিখলে শুধু স্ক্রিনে দেখায় — কম্পিউটার মনে রাখে না। মনে রাখার জন্য দরকার variable — একটা নামযুক্ত বাক্স।</div>
<div class="dialogue en">Now the problem: Fatima says — you have a shop. Sugar costs 50 taka. In stock. How to store this in the computer? print("50") just shows it — the computer doesn't remember. To remember, you need a variable — a named box.</div>

<div class="code-block"># ── STEP 2: What is a variable? ──
# A variable is a NAMED BOX that stores a value.
# You give it a name, put something inside, use it later.

# Create a variable: name = value
# The = sign means "put this value into this box"

product_name = "Sugar"     # box named "product_name", holds "Sugar"
price = 50                 # box named "price", holds 50
in_stock = True            # box named "in_stock", holds True

# Now Python REMEMBERS these. Use the name to get the value:
print(product_name)        # shows: Sugar
print(price)               # shows: 50
print(in_stock)            # shows: True

# The magic: change the variable ONCE, it updates EVERYWHERE
price = 55                 # price changed from 50 to 55
print(f"New price: {price}")  # shows: New price: 55</div>

<div class="dialogue">ফাতেমা বললেন — লক্ষ্য করো। <code>=</code> চিহ্ন মানে "সমান" নয়। এর মানে "বাক্সে রাখো"। price = 50 মানে: price নামের বাক্সে 50 রাখো। বাংলায়: price-এর মান 50 করো। এটাই assignment।</div>
<div class="dialogue en">Fatima says — notice. The = sign does not mean "equals." It means "put into the box." price = 50 means: put 50 into the box named price. This is called assignment.</div>

<div class="code-block"># ── STEP 3: f-string — putting variables inside text ──
# f"..." is a "format string". Put variable names inside { }.
# Python replaces {name} with the variable's value.

name = "Fatima"
age = 25
city = "Dhaka"

# WITHOUT f-string (hard to read):
print("Name: " + name + ", Age: " + str(age) + ", City: " + city)

# WITH f-string (clean, readable):
print(f"Name: {name}, Age: {age}, City: {city}")
# Shows: Name: Fatima, Age: 25, City: Dhaka

# f-string with math inside:
print(f"Next year: {age + 1}")  # Shows: Next year: 26
print(f"Double price: {price * 2}")  # Shows: Double price: 110</div>

<div class="dialogue">এখন ৪ ধরনের বাক্স আছে — int, float, str, bool। প্রতিটার নির্দিষ্ট কাজ। ভুল বাক্সে ভুল জিনিস রাখলে সমস্যা।</div>
<div class="dialogue en">Now there are 4 types of boxes — int, float, str, bool. Each has a specific purpose. Wrong box, wrong item = problem.</div>

<div class="code-block"># ── STEP 4: The 4 data types ──
# Python has 4 basic types. The TYPE is decided by the VALUE.

# 1. int = whole number (পূর্ণসংখ্যা)
count = 200              # int — counting items
temperature = -5         # int — can be negative
zero = 0                 # int — zero is int

# 2. float = decimal number (দশমিক)
pi = 3.14159             # float — precise math
weight = 1.5             # float — half kilo
price_usd = 0.85         # float — currency

# 3. str = text string (লেখা)
greeting = "Hello"       # str — use double quotes
name = 'Fatima'          # str — or single quotes
sentence = 'She said "hi"'    # str — use outer single quotes to include double

# 4. bool = True or False (সত্য/মিথ্যা)
is_open = True           # bool — shop is open
has_stock = False        # bool — no stock
is_admin = True          # bool — user is admin

# ── How to know what type a variable is? ──
print(type(count))       # <class 'int'>
print(type(pi))          # <class 'float'>
print(type(name))        # <class 'str'>
print(type(is_open))     # <class 'bool'</div>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>ভুলের গল্প:</strong> ফাতেমা বললেন — এক শিক্ষানবিশ <code>"50"</code> (string) ও <code>50</code> (int) একই ভাবলো। কিন্তু Python-এ এরা আলাদা! <code>"50" + 10</code> = ERROR (str ও int যোগ হয় না)। <code>50 + 10</code> = 60 (int যোগ হয়)। Quotes মানে লেখা, quotes ছাড়া মানে সংখ্যা। এই পার্থক্য না বুঝলে পুরো জীবন bug।</div></div>

<div class="code-block"># ── STEP 5: Type conversion — changing one type to another ──
# Sometimes data comes as the wrong type. Convert it.

# User input is ALWAYS a string (even if they type a number):
user_input = "150"           # came from input() — it's str!
# print(user_input + 10)     # ERROR: can't add str + int

# Convert str to int:
price = int(user_input)      # "150" → 150 (now it's int)
print(price + 10)            # 160 — works!

# Convert int to str:
age = 25
age_text = str(age)          # 25 → "25" (now it's str)
print("Age: " + age_text)    # Age: 25

# Convert str to float:
weight_text = "65.5"
weight = float(weight_text)  # "65.5" → 65.5
print(weight * 2)            # 131.0

# Convert to bool (0/empty = False, everything else = True):
print(bool(0))    # False
print(bool(42))   # True
print(bool(""))   # False (empty string)
print(bool("hi")) # True</div>

<div class="code-block"># ── STEP 6: Variable naming rules ──
# Python has rules for variable names. Break them = error.

# ✅ GOOD names (clear, descriptive, snake_case):
student_name = "Fatima"     # words separated by underscore
total_price = 1500          # descriptive
is_logged_in = True         # boolean starts with is_/has_
API_KEY = "abc123"          # constants in UPPER_CASE

# ❌ BAD names (will cause errors or confusion):
# 2name = "Bob"      # ERROR: can't start with number
# my-name = "Bob"    # ERROR: hyphen not allowed
# my name = "Bob"    # ERROR: space not allowed
# class = "Math"     # ERROR: 'class' is a Python keyword

# ── Python keywords you CANNOT use as variable names ──
# False, True, None, and, as, assert, break, class, continue,
# def, del, elif, else, except, finally, for, from, global,
# if, import, in, is, lambda, not, or, pass, raise, return,
# try, while, with, yield

# ── Case sensitivity: age ≠ Age ≠ AGE ──
age = 25          # lowercase
Age = 30          # different variable!
AGE = 40          # yet another!
print(age, Age, AGE)  # 25 30 40 — three different boxes</div>

<div class="code-block"># ── STEP 7: Taking user input ──
# input() pauses the program, waits for user to type, returns str.

# Ask the user for their name:
# name = input("What is your name? ")
# If user types "Fatima", name = "Fatima"
# print(f"Hello, {name}!")  # Hello, Fatima!

# Ask for a number (must convert from str!):
# age_text = input("How old are you? ")
# age = int(age_text)  # convert to int
# print(f"Next year you'll be {age + 1}")

# A complete mini-program — shop calculator:
# product = input("Product name: ")
# price_text = input("Price per unit: ")
# qty_text = input("Quantity: ")
#
# price = float(price_text)
# qty = int(qty_text)
# total = price * qty
#
# print(f"--- Receipt ---")
# print(f"{product}: {qty} x {price} = {total} taka")</div>

<div class="code-block"># ── STEP 8: Reassignment — changing the value ──
# Variables are NOT permanent. Change them anytime.

score = 0                    # start at 0
print(f"Score: {score}")     # Score: 0

score = 10                   # change to 10
print(f"Score: {score}")     # Score: 10

# You can use the OLD value to calculate the NEW value:
score = score + 5            # old score (10) + 5 = 15
print(f"Score: {score}")     # Score: 15

# Shortcut operators:
score += 10                  # same as score = score + 10
score -= 5                   # same as score = score - 5
score *= 2                   # same as score = score * 2
print(f"Final score: {score}")

# ── Multiple assignment: assign several at once ──
name, price, stock = "Salt", 30, True
print(f"{name}: {price} taka, in stock: {stock}")

# Swap two variables (Python makes this easy!):
a, b = 10, 20
print(f"Before: a={a}, b={b}")   # Before: a=10, b=20
a, b = b, a                      # swap!
print(f"After: a={a}, b={b}")    # After: a=20, b=10

# ── Dynamic typing: Python boxes change type ──
x = 42          # x is int
print(type(x))  # <class 'int'>
x = "hello"     # now x is str — Python allows this!
print(type(x))  # <class 'str'>
x = [1, 2, 3]   # now x is list
print(type(x))  # <class 'list'>
# Flexible! But be careful — mixing types in one variable causes bugs.</div>

<div class="diagram">
  <div class="diag-title">Variable = পাত্র — প্রতিটায় একটা মান</div>
  <svg viewBox="0 0 560 260" xmlns="http://www.w3.org/2000/svg">
    <text x="280" y="20" text-anchor="middle" fill="#34d399" font-size="11" font-weight="bold">Python Variables — Named Containers</text>
    <!-- int -->
    <ellipse cx="100" cy="90" rx="45" ry="40" fill="rgba(45,212,191,0.08)" stroke="#2dd4bf" stroke-width="2"/>
    <text x="100" y="80" text-anchor="middle" fill="#2dd4bf" font-size="14" font-weight="bold">42</text>
    <text x="100" y="100" text-anchor="middle" fill="#9a93b8" font-size="8">int</text>
    <text x="100" y="150" text-anchor="middle" fill="#34d399" font-size="9" font-family="monospace">age = 42</text>
    <text x="100" y="165" text-anchor="middle" fill="#9a93b8" font-size="7">পূর্ণসংখ্যা (whole)</text>
    <!-- float -->
    <ellipse cx="220" cy="90" rx="45" ry="40" fill="rgba(52,211,153,0.08)" stroke="#34d399" stroke-width="2"/>
    <text x="220" y="80" text-anchor="middle" fill="#34d399" font-size="14" font-weight="bold">3.14</text>
    <text x="220" y="100" text-anchor="middle" fill="#9a93b8" font-size="8">float</text>
    <text x="220" y="150" text-anchor="middle" fill="#34d399" font-size="9" font-family="monospace">pi = 3.14</text>
    <text x="220" y="165" text-anchor="middle" fill="#9a93b8" font-size="7">দশমিক (decimal)</text>
    <!-- str -->
    <ellipse cx="340" cy="90" rx="45" ry="40" fill="rgba(251,191,36,0.08)" stroke="#fbbf24" stroke-width="2"/>
    <text x="340" y="80" text-anchor="middle" fill="#fbbf24" font-size="12" font-weight="bold">"hi"</text>
    <text x="340" y="100" text-anchor="middle" fill="#9a93b8" font-size="8">str</text>
    <text x="340" y="150" text-anchor="middle" fill="#34d399" font-size="9" font-family="monospace">name = "Bob"</text>
    <text x="340" y="165" text-anchor="middle" fill="#9a93b8" font-size="7">লেখা (text)</text>
    <!-- bool -->
    <ellipse cx="460" cy="90" rx="45" ry="40" fill="rgba(240,98,146,0.08)" stroke="#f06292" stroke-width="2"/>
    <text x="460" y="80" text-anchor="middle" fill="#f06292" font-size="12" font-weight="bold">True</text>
    <text x="460" y="100" text-anchor="middle" fill="#9a93b8" font-size="8">bool</text>
    <text x="460" y="150" text-anchor="middle" fill="#34d399" font-size="9" font-family="monospace">active = True</text>
    <text x="460" y="165" text-anchor="middle" fill="#9a93b8" font-size="7">সত্য/মিথ্যা</text>
    <!-- assignment -->
    <rect x="40" y="185" width="480" height="30" rx="6" fill="rgba(251,191,36,0.06)" stroke="#fbbf24" stroke-width="1"/>
    <text x="280" y="203" text-anchor="middle" fill="#fbbf24" font-size="8" font-weight="bold">name = value → "বাক্সে মান রাখো" (= means assign, NOT equals)</text>
    <!-- Dynamic typing -->
    <rect x="40" y="225" width="480" height="30" rx="6" fill="rgba(45,212,191,0.06)" stroke="rgba(45,212,191,0.2)" stroke-width="1"/>
    <text x="280" y="243" text-anchor="middle" fill="#34d399" font-size="8" font-weight="bold">Dynamic Typing: x = 42 → x = "hi" → x = [1,2] — বাক্সের ধরন বদলায়</text>
  </svg>
  <div class="diag-cap">Variable = নামযুক্ত পাত্র। int (সংখ্যা), float (দশমিক), str (লেখা), bool (সত্য/মিথ্যা)। = মানে "রাখো", সমান নয়।</div>
</div>

<div class="dialogue">মিসকাহ — মাটি, কাদা। কুরআনে আল্লাহ বলেন — আমরা মানুষকে সৃষ্টি করেছি মাটি থেকে (২৩:১২)। মাটি নমনীয় — যেকোনো আকার নেয়। Python variable-ও নমনীয় — যেকোনো ধরন নেয়। কিন্তু কুমারের হাত দরকার — মাটি একা পাত্র হয় না। তোমার হাত দরকার — variable একা প্রোগ্রাম হয় না।</div>
<div class="dialogue en">Miskah — clay, mud. Allah says — We created man from clay (23:12). Clay is flexible — takes any shape. Python variables are flexible — take any type. But clay needs a potter's hands — alone it is not a vessel. You need hands — a variable alone is not a program.</div>

<div class="secret-box">🏺 Variable = নামযুক্ত বাক্স। name = value (= মানে "রাখো")। ৪ ধরন: int, float, str, bool। type() দিয়ে যাচাই করো। int("50") দিয়ে রূপান্তর করো।</div>
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
<p class="scene-setting">দ্বিতীয় গিল্ড। নহরের কাছে। পানির শব্দ, ভেজা ঘাসের গন্ধ, শীতল বাতাস। নহরের রক্ষক ইদ্রিস দাঁড়িয়ে — হাতে কাঠের দরজা, যা পানির স্রোত বন্ধ করে বা ছাড়ে। "পানি সবসময় এক দিকে যায় না," তিনি বলেন। "কখনো ডানে, কখনো বামে, কখনো আটকে যায়। কোডও তেমনি — control flow দিয়ে দিক নির্ধারণ করো। চলো একটা একটা করে শিখি।"</p>
<p class="scene-setting en">Second guild. By the canal. Sound of water, smell of wet grass, cool breeze. Canal keeper Idris stands — a wooden gate in hand, stopping or releasing the water's flow. "Water doesn't always go one way," he says. "Sometimes right, sometimes left, sometimes blocked. Code is the same — use control flow to direct it. Let's learn one step at a time."</p>

<div class="dialogue">প্রথম প্রশ্ন: প্রোগ্রাম কি সবসময় উপর থেকে নিচে এক লাইনে চলে? উত্তর: হ্যাঁ — unless তুমি control flow ব্যবহার করো। control flow = স্রোতের দিক নিয়ন্ত্রণ। দুটো হাতিয়ার: শর্ত (if) ও চক্র (loop)।</div>
<div class="dialogue en">First question: does a program always run top-to-bottom in one line? Answer: yes — unless you use control flow. Control flow = directing the stream. Two tools: conditions (if) and loops.</div>

<div class="code-block"># ── STEP 1: The simplest decision — if ──
# if checks a condition. If True → run the indented code.
# If False → skip it.

age = 20

if age &gt;= 18:
    print("You are an adult.")    # runs because 20 >= 18 is True

if age &gt;= 65:
    print("You are a senior.")    # skipped because 20 >= 65 is False

# CRITICAL: the colon : after the condition
# CRITICAL: the INDENTATION (4 spaces or tab) shows what's inside the if
# Python uses indentation, NOT braces like other languages</div>

<div class="dialogue">ইদ্রিস বললেন — লক্ষ্য করো দুটো জিনিস। প্রথম: <code>:</code> কোলন — শর্তের শেষে। দ্বিতীয়: indent — ৪ স্পেস ডানে। Python এই indent দিয়ে বোঝে কোন কোড if-এর ভেতরে আছে। C/Java-তে {} ব্যবহার হয়, Python-ে indent।</div>
<div class="dialogue en">Idris says — notice two things. First: the colon : at the end of the condition. Second: the indent — 4 spaces right. Python uses indentation to know what code is inside the if. C/Java use {}, Python uses indent.</div>

<div class="code-block"># ── STEP 2: Two paths — if / else ──
# Sometimes you want BOTH paths: do this OR do that.

temperature = 15  # degrees Celsius

if temperature &gt; 30:
    print("It's hot! Wear shorts.")
else:
    print("It's not hot. Wear a jacket.")

# temperature is 15, so: "It's not hot. Wear a jacket."

# Try changing temperature to 35:
temperature = 35
if temperature &gt; 30:
    print("It's hot! Wear shorts.")  # runs now!
else:
    print("It's not hot. Wear a jacket.")  # skipped</div>

<div class="code-block"># ── STEP 3: Multiple paths — if / elif / else ──
# elif = "else if" — check another condition.
# Python checks each one top-to-bottom. First match wins.

score = 85

if score &gt;= 90:
    grade = "A"
elif score &gt;= 80:
    grade = "B"        # runs! 85 >= 80 is True
elif score &gt;= 70:
    grade = "C"        # skipped (already matched)
elif score &gt;= 60:
    grade = "D"        # skipped
else:
    grade = "F"        # skipped

print(f"Score {score} = Grade {grade}")  # Score 85 = Grade B

# IMPORTANT: order matters! Most specific/highest first.
# If you wrote score >= 60 first, it would match 85 and stop.</div>

<div class="code-block"># ── STEP 4: Comparison operators ──
# These are the tools for building conditions.

a = 10
b = 20

# ==  equal to (NOT = which is assignment!)
print(a == b)     # False
print(a == 10)    # True

# !=  not equal
print(a != b)     # True

# &gt;  greater than, &lt;  less than
print(a &gt; b)      # False
print(a &lt; b)      # True

# &gt;= greater or equal, &lt;= less or equal
print(a &gt;= 10)   # True
print(b &lt;= 20)   # True

# CRITICAL MISTAKE: = vs ==
# = is assignment:  x = 5  (put 5 in x)
# == is comparison: x == 5 (is x equal to 5?)
# if x = 5:    # ERROR — this is assignment, not comparison
# if x == 5:   # CORRECT — this checks if x is 5</div>

<div class="code-block"># ── STEP 5: Combining conditions — and, or, not ──
# Sometimes you need multiple conditions together.

age = 25
has_license = True

# AND: both must be True
if age &gt;= 18 and has_license:
    print("You can drive.")  # both True — runs!

# OR: at least one must be True
is_raining = False
is_snowing = True
if is_raining or is_snowing:
    print("Bad weather — stay in.")  # is_snowing is True — runs

# NOT: reverses the condition
is_logged_in = False
if not is_logged_in:
    print("Please log in.")  # not False = True — runs!

# Real example: shop discount rules
is_member = True
purchase = 150
if is_member and purchase &gt; 100:
    print("15% discount applied!")
elif is_member:
    print("5% member discount.")
else:
    print("No discount.")</div>

<div class="dialogue">এখন দ্বিতীয় হাতিয়ার — loops। একই কাজ বারবার করতে হলে।</div>
<div class="dialogue en">Now the second tool — loops. When you need to repeat the same work.</div>

<div class="code-block"># ── STEP 6: for loop — go through a list ──
# for = "for each item in this collection, do something"

fruits = ["apple", "banana", "cherry"]

# Basic: loop through each item
for fruit in fruits:
    print(f"I like {fruit}")
# Output:
#   I like apple
#   I like banana
#   I like cherry

# Loop through characters in a string:
for letter in "Hello":
    print(letter)  # H, e, l, l, o (one per line)

# Loop through numbers with range():
for i in range(5):       # 0, 1, 2, 3, 4 (NOT 5!)
    print(f"Number: {i}")

for i in range(2, 6):    # 2, 3, 4, 5 (start, stop)
    print(i)

for i in range(0, 10, 2):  # 0, 2, 4, 6, 8 (start, stop, step)
    print(i)</div>

<div class="code-block"># ── STEP 7: Useful loop tricks — enumerate and zip ──
# enumerate: get both INDEX and VALUE
fruits = ["apple", "banana", "cherry"]
for index, fruit in enumerate(fruits):
    print(f"{index}: {fruit}")
# 0: apple
# 1: banana
# 2: cherry

# zip: loop through TWO lists at once
names = ["Fatima", "Ahmed", "Sara"]
ages = [25, 30, 28]
for name, age in zip(names, ages):
    print(f"{name} is {age} years old")

# Nested loops (loop inside loop):
for i in range(3):        # outer loop
    for j in range(3):    # inner loop
        print(f"({i},{j})", end=" ")
    print()  # new line after each row
# (0,0) (0,1) (0,2)
# (1,0) (1,1) (1,2)
# (2,0) (2,1) (2,2)</div>

<div class="code-block"># ── STEP 8: while loop — repeat UNTIL a condition ──
# while = "keep going as long as this condition is True"

# Countdown:
count = 3
while count &gt; 0:
    print(f"Countdown: {count}")
    count -= 1          # CRITICAL: must change the condition!
print("Go!")

# Countdown: 3
# Countdown: 2
# Countdown: 1
# Go!

# ⚠️ WARNING: if you forget to change the condition → INFINITE LOOP!
# count = 3
# while count > 0:
#     print(count)   # count never changes → runs FOREVER!

# while is best when you DON'T know how many times to loop.
# for is best when you DO know (or have a list).</div>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>ভুলের গল্প:</strong> ইদ্রিস বললেন — এক শিক্ষানবিশ <code>while True:</code> লিখলো — infinite loop। কখনো বন্ধ হবে না। কম্পিউটার hang করে ফেললো। কারণ exit condition ছিল না। while লেখার আগে ভাবো — কখন থামবে? নাহলে চিরকাল চলবে।</div></div>

<div class="code-block"># ── STEP 9: break and continue — controlling loops ──
# break = STOP the loop immediately (exit)
# continue = SKIP this item, go to next one

# break: find the first error in a log, then stop
logs = ["OK", "OK", "ERROR", "OK", "ERROR"]
for log in logs:
    if log == "ERROR":
        print(f"Found error! Stopping.")
        break     # exits the loop right now
    print(f"Checked: {log}")
# Checked: OK
# Checked: OK
# Found error! Stopping.

# continue: skip even numbers, only print odd
for i in range(10):
    if i % 2 == 0:     # if even
        continue       # skip to next iteration
    print(f"Odd: {i}")
# Odd: 1
# Odd: 3
# Odd: 5
# Odd: 7
# Odd: 9</div>

<div class="code-block"># ── STEP 10: Real scenario — task priority labels ──
# Combine everything: list + for loop + if/elif/else

tasks = [
    {"name": "Fix login bug", "priority": 1},
    {"name": "Update docs", "priority": 3},
    {"name": "Security patch", "priority": 1},
    {"name": "Refactor API", "priority": 4},
    {"name": "Buy coffee", "priority": 5},
]

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

# Process each task
for task in tasks:
    label = priority_label(task["priority"])
    print(f"{label}: {task['name']}")

# Sort by priority (using sorted + lambda)
sorted_tasks = sorted(tasks, key=lambda t: t["priority"])
print("\\nSorted by priority:")
for task in sorted_tasks:
    print(f"  P{task['priority']}: {task['name']}")</div>

<div class="code-block"># ── BONUS: match/case (Python 3.10+) — modern switch ──
# Cleaner alternative to long if/elif chains.
# Think of it as a switchboard.

def handle_status(status: str) -&gt; str:
    """Pattern matching — cleaner than long if/elif chains."""
    match status:
        case "pending":
            return "Waiting..."
        case "in_progress":
            return "Working..."
        case "completed":
            return "Done!"
        case "failed" | "cancelled":  # match multiple values
            return "Error"
        case _:                        # _ = default (like else)
            return "Unknown"

print(handle_status("completed"))  # Done!</div>

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
<p class="scene-setting">তৃতীয় গিল্ড। রান্নাঘর। মসলার গন্ধ, হাঁড়ির ভাপ, ছুরির শব্দ। রন্ধনশিল্পী রহিম একটা রেসিপি বই খুলে বসেছেন। "প্রতিটা পদের একটা রেসিপি আছে," তিনি বলেন। "উপকরণ দাও, প্রক্রিয়া হবে, পদ পাবে। একই রেসিপি ১০০ বার — একই ফল। Python-এ এটাই function। চলো একটা একটা করে শিখি।"</p>
<p class="scene-setting en">Third guild. The kitchen. Smell of spices, steam from pots, sound of knives. Chef Rahim sits with a recipe book. "Each dish has a recipe," he says. "Give ingredients, process happens, dish comes out. Same recipe 100 times — same result. In Python, this is a function. Let's learn step by step."</p>

<div class="dialogue">প্রথম প্রশ্ন: তুমি একই কোড ৫ জায়গায় কপি করেছ। এখন একটা ভুল ধরলে — ৫ জায়গায় ঠিক করতে হবে। কষ্ট? সমাধান: function। একবার লেখো, অনেক জায়গায় ব্যবহার করো। ভুল এক জায়গায় ঠিক করো।</div>
<div class="dialogue en">First question: you copied the same code in 5 places. Now one bug means fixing all 5. Painful? Solution: function. Write once, use anywhere. Fix once.</div>

<div class="code-block"># ── STEP 1: What is a function? ──
# A function = a named block of code you can REUSE.
# Like a recipe: define once, cook many times.

# Define a function:
def greet():
    """This function says hello."""
    print("Hello, World!")

# Call it (run it) — use parentheses ():
greet()     # shows: Hello, World!
greet()     # shows: Hello, World! again
greet()     # shows: Hello, World! again

# Structure:
# def name():     ← def keyword, name, parentheses, colon
#     """doc"""   ← optional documentation (docstring)
#     code        ← indented body (4 spaces)</div>

<div class="code-block"># ── STEP 2: Parameters — giving input to a function ──
# Parameters let a function accept DIFFERENT values each time.
# Like a recipe that takes different ingredients.

# name is a PARAMETER (a placeholder for the actual value)
def greet(name):
    """Greet someone by name."""
    print(f"Hello, {name}!")

# Now call it with different ARGUMENTS (actual values):
greet("Fatima")     # Hello, Fatima!   ("Fatima" is the argument)
greet("Ahmed")      # Hello, Ahmed!
greet("Sara")       # Hello, Sara!

# Parameter vs Argument:
# def greet(name):    ← name is a PARAMETER (placeholder)
# greet("Fatima")     ← "Fatima" is an ARGUMENT (actual value)</div>

<div class="code-block"># ── STEP 3: return — getting a result BACK ──
# print() shows on screen. return gives the value BACK to the caller.
# The difference is CRITICAL.

# ❌ BAD: print instead of return
def add_bad(a, b):
    print(a + b)         # shows on screen, but caller gets nothing

result = add_bad(3, 5)   # shows: 8
print(result)            # shows: None! (function gave nothing back)

# ✅ GOOD: return gives the value back
def add(a, b):
    return a + b          # gives the result back to the caller

result = add(3, 5)       # result = 8 (the returned value)
print(result)            # shows: 8
print(add(10, 20))       # shows: 30 (use return value directly)

# Use the return value in calculations:
total = add(5, 5) + add(2, 3)
print(f"Total: {total}")  # Total: 15</div>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>ভুলের গল্প:</strong> রহিম বললেন — এক শিক্ষানবিশ ভাত রান্না করলেন কিন্তু পরিবেশন করলেন না — হাঁড়িতেই রেখে দিলেন। function-এও এটা হয় — হিসাব করলেন কিন্তু return দিলেন না। ফলাফল function-এর ভেতরেই পড়ে থাকলো। return ছাড়া function = হাঁড়িতে রান্না, পাতিলে পরিবেশন নয়।</div></div>

<div class="code-block"># ── STEP 4: Multiple parameters ──
# A function can take multiple inputs, separated by commas.

def introduce(name, age, city):
    """Introduce yourself."""
    return f"My name is {name}, I'm {age}, from {city}."

message = introduce("Fatima", 25, "Dhaka")
print(message)  # My name is Fatima, I'm 25, from Dhaka.

# Order matters! Arguments match parameters position-by-position:
introduce("Bob", 30, "Chittagong")  # name="Bob", age=30, city="Chittagong"

# ── Default parameters: optional arguments ──
# Give a parameter a DEFAULT value. Caller can skip it.
def greet(name, greeting="Hello"):
    """greeting has a default — caller can skip it."""
    return f"{greeting}, {name}!"

print(greet("Fatima"))              # Hello, Fatima! (default greeting)
print(greet("Fatima", greeting="Hi"))  # Hi, Fatima! (override)
print(greet("Ahmed", "Welcome"))    # Welcome, Ahmed! (positional override)</div>

<div class="code-block"># ── STEP 5: The tax problem — DRY in action ──
# THE PROBLEM: Add 20% tax to 50 products.
# Without function: copy-paste the same code 50 times.

prices = [50, 100, 25, 200, 75, 150, 30, 80, 90, 60]

# ❌ BAD: Copy the same logic everywhere
total1 = prices[0] * 1.2
total2 = prices[1] * 1.2
total3 = prices[2] * 1.2
# ... 50 times. Change tax rate? Find all 50 lines. Nightmare.

# ✅ GOOD: Function — write once, use anywhere
def add_tax(price: float, tax_rate: float = 0.20) -> float:
    """Add tax to a price. Returns the total."""
    return price * (1 + tax_rate)

# Call it for ALL prices — one line each:
for price in prices:
    print(f"  {price} -> {add_tax(price):.0f} taka (with tax)")

# Change tax rate for one call:
print(f"Luxury item: {add_tax(500, tax_rate=0.50)}")  # 50% tax!</div>

<div class="code-block"># ── STEP 6: Multiple return values ──
# Python can return MULTIPLE values (as a tuple).

def analyze_scores(scores):
    """Return min, max, and average at once."""
    return min(scores), max(scores), sum(scores) / len(scores)

scores = [75, 90, 60, 85, 100]
lowest, highest, average = analyze_scores(scores)
# Python "unpacks" the three return values into three variables

print(f"Low: {lowest}, High: {highest}, Average: {average:.1f}")
# Low: 60, High: 100, Average: 82.0

# This is called "tuple unpacking" — very Pythonic!</div>

<div class="code-block"># ── STEP 7: Variable arguments — *args ──
# Sometimes you don't know how many arguments will come.
# *args collects them into a tuple.

def calculate_total(*prices):
    """Accept ANY number of prices. Returns total."""
    return sum(prices)

print(calculate_total(10, 20, 30))           # 60
print(calculate_total(10, 20, 30, 40, 50))   # 150
print(calculate_total(5))                     # 5
print(calculate_total())                      # 0

# *args is useful for building flexible APIs:
def make_sentence(*words):
    return " ".join(words)

print(make_sentence("Python", "is", "awesome"))  # Python is awesome</div>

<div class="code-block"># ── STEP 8: Keyword arguments — **kwargs ──
# **kwargs collects named arguments into a dictionary.
# Useful when you don't know what fields the user will provide.

def create_user(**details):
    """Accept any named details about a user."""
    return details

user = create_user(name="Bob", age=25, city="Dhaka")
print(user)
# {'name': 'Bob', 'age': 25, 'city': 'Dhaka'}

user2 = create_user(name="Fatima", role="admin", active=True)
print(user2)
# {'name': 'Fatima', 'role': 'admin', 'active': True}

# *args and **kwargs together:
def log_call(*args, **kwargs):
    print(f"  Positional: {args}")
    print(f"  Keyword: {kwargs}")

log_call(1, 2, 3, name="test", debug=True)
# Positional: (1, 2, 3)
# Keyword: {'name': 'test', 'debug': True}</div>

<div class="code-block"># ── STEP 9: Scope — where variables live ──
# Variables created INSIDE a function are LOCAL — they die when
# the function ends. Variables OUTSIDE are GLOBAL.

message = "I am global"  # GLOBAL — visible everywhere

def my_function():
    message = "I am local"   # LOCAL — only exists inside this function
    print(f"Inside: {message}")  # Inside: I am local

my_function()
print(f"Outside: {message}")  # Outside: I am global (unchanged!)

# ⚠️ Beginners often confuse this:
def add_one(num):
    result = num + 1    # result is LOCAL — only exists inside add_one
    return result

answer = add_one(5)     # answer = 6
# print(result)         # ERROR! result doesn't exist outside the function</div>

<div class="code-block"># ── STEP 10: Type hints (Python 3.5+) ──
# Type hints document WHAT type goes in and comes out.
# Python doesn't enforce them, but they help:
#   - Your IDE shows better autocomplete
#   - Other developers understand your code faster
#   - Tools like mypy can check for type errors

# WITHOUT type hints:
def greet(name):
    return f"Hello, {name}"

# WITH type hints:
def greet(name: str) -> str:
    """name is a string, returns a string."""
    return f"Hello, {name}"

def add_tax(price: float, tax_rate: float = 0.20) -> float:
    """Both inputs are floats, returns a float."""
    return price * (1 + tax_rate)

def find_user(user_id: int) -> dict | None:
    """Returns a dict OR None (if not found)."""
    if user_id in database:
        return database[user_id]
    return None

# Modern Python uses type hints everywhere — FastAPI, dataclasses,
# pydantic all rely on them. Start the habit now!</div>

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
<p class="scene-setting">চতুর্থ গিল্ড। ভাণ্ডার ঘর। শুকনো ঘাসের গন্ধ, বস্তার স্তূপ, কাঠের তাক। ভাণ্ডার রক্ষক করিম তার তাক দেখাচ্ছেন — প্রতিটা তাকে ভিন্ন ধরনের মাল। "এক তাকে চাল, এক তাকে ডাল, এক তাকে মসলা," তিনি বলেন। "প্রতিটা তাকে সঠিক জিনিস। Python-এ ৪ ধরনের তাক — list, tuple, dict, set। সঠিক তাকে সঠিক মাল। চলো একটা একটা করে শিখি।"</p>
<p class="scene-setting en">Fourth guild. The storehouse. Smell of dry hay, sacks piled, wooden shelves. Storekeeper Karim shows his shelves — each holding different goods. "One shelf rice, one lentils, one spices," he says. "Each shelf for the right thing. In Python, 4 types of shelves — list, tuple, dict, set. Right shelf for right goods. Let's learn one at a time."</p>

<div class="dialogue">প্রথম প্রশ্ন: তুমি ৫টা সংখ্যা একসাথে রাখতে চাও। ৫টা variable? কষ্ট। কিন্তু ১০,০০০টা? অসম্ভব। দরকার একটা container — অনেক মান একসাথে রাখার পাত্র। Python-এ ৪ ধরনের container আছে।</div>
<div class="dialogue en">First question: you want to store 5 numbers together. 5 variables? Painful. But 10,000? Impossible. You need a container — a vessel for many values. Python has 4 types.</div>

<div class="code-block"># ── STEP 1: list — the everyday container ──
# A list holds MANY values in ORDER. You can change it anytime.
# Created with square brackets [].

# Create a list:
fruits = ["apple", "banana", "cherry"]
numbers = [10, 20, 30, 40, 50]
mixed = ["hello", 42, True, 3.14]  # can hold any type!

# Access by INDEX (position — starts at 0!):
print(fruits[0])     # apple  (first item, index 0)
print(fruits[1])     # banana (second item, index 1)
print(fruits[-1])    # cherry (last item, negative = from end)

# How many items?
print(len(fruits))   # 3

# Check if something is in the list:
print("apple" in fruits)     # True
print("grape" in fruits)     # False</div>

<div class="code-block"># ── STEP 2: list methods — add, remove, change ──
# Lists are MUTABLE — you can change them after creation.

fruits = ["apple", "banana", "cherry"]

# ADD items:
fruits.append("orange")       # add to end
print(fruits)                 # ['apple', 'banana', 'cherry', 'orange']

fruits.insert(0, "mango")     # insert at position 0
print(fruits)                 # ['mango', 'apple', 'banana', 'cherry', 'orange']

# REMOVE items:
fruits.remove("banana")       # remove by value
print(fruits)                 # ['mango', 'apple', 'cherry', 'orange']

popped = fruits.pop()         # remove last item, return it
print(popped)                 # orange
print(fruits)                 # ['mango', 'apple', 'cherry']

# CHANGE an item:
fruits[0] = "grape"           # replace index 0
print(fruits)                 # ['grape', 'apple', 'cherry']

# SLICING — take a portion:
print(fruits[0:2])            # ['grape', 'apple'] (index 0 and 1, not 2)
print(fruits[:2])             # same — from start to index 1
print(fruits[1:])             # from index 1 to end</div>

<div class="code-block"># ── STEP 3: list operations and built-in functions ──
prices = [50, 100, 25, 200, 75]

# Useful built-in functions:
print(f"Count: {len(prices)}")       # 5 (how many items)
print(f"Max: {max(prices)}")         # 200 (largest)
print(f"Min: {min(prices)}")         # 25 (smallest)
print(f"Sum: {sum(prices)}")         # 450 (total)
print(f"Average: {sum(prices) / len(prices)}")  # 90.0

# Sorting (returns a NEW list — original unchanged):
sorted_prices = sorted(prices)
print(f"Original: {prices}")          # [50, 100, 25, 200, 75]
print(f"Sorted: {sorted_prices}")     # [25, 50, 75, 100, 200]
print(f"Reverse: {sorted(prices, reverse=True)}")  # [200, 100, 75, 50, 25]

# Add two lists together:
list1 = [1, 2, 3]
list2 = [4, 5, 6]
combined = list1 + list2     # [1, 2, 3, 4, 5, 6]

# Repeat a list:
zeros = [0] * 5              # [0, 0, 0, 0, 0]</div>

<div class="code-block"># ── STEP 4: tuple — like list, but LOCKED ──
# A tuple is like a list BUT you CANNOT change it after creation.
# Created with parentheses ().

# Create a tuple:
coordinates = (23.8103, 90.4125)  # Dhaka latitude/longitude
rgb_color = (255, 128, 0)         # orange color (R, G, B)
birth_date = (1998, 7, 15)        # year, month, day

# Access by index (same as list):
print(coordinates[0])    # 23.8103 (latitude)
print(rgb_color[2])      # 0 (blue component)

# BUT you CANNOT change it:
# coordinates[0] = 24.0  # ERROR! tuples are immutable.

# Why use tuples?
# 1. Safety — some data should NEVER change (coordinates, dates)
# 2. Keys — tuples can be dict keys, lists cannot
# 3. Speed — slightly faster than lists

# Tuple unpacking — assign to multiple variables:
lat, lon = coordinates         # lat=23.8103, lon=90.4125
r, g, b = rgb_color            # r=255, g=128, b=0
year, month, day = birth_date  # year=1998, month=7, day=15

# Swap two values using tuple unpacking:
a, b = 10, 20
a, b = b, a    # now a=20, b=10 — magic!</div>

<div class="dialogue">এখন সবচেয়ে গুরুত্বপূর্ণ container — dict। এটাই বাস্তব জগতে সবচেয়ে ব্যবহৃত data structure।</div>
<div class="dialogue en">Now the most important container — dict. This is the most used data structure in real-world code.</div>

<div class="code-block"># ── STEP 5: dict — key-value pairs ──
# A dict stores data as NAME: VALUE pairs.
# Like a real dictionary — you look up a word, get a definition.
# Created with curly braces {}.

# Create a dict:
person = {
    "name": "Fatima",
    "age": 25,
    "city": "Dhaka",
    "is_student": True,
}

# Access by KEY (not by index!):
print(person["name"])         # Fatima
print(person["age"])          # 25

# If key doesn't exist — ERROR. Use .get() for safety:
print(person.get("phone"))         # None (no error!)
print(person.get("phone", "N/A"))  # N/A (default value)

# Add or update:
person["email"] = "fatima@mail.com"    # add new key
person["age"] = 26                      # update existing
print(person)</div>

<div class="code-block"># ── STEP 6: dict methods — loop, add, remove ──
person = {"name": "Fatima", "age": 25, "city": "Dhaka"}

# Loop through keys:
for key in person.keys():
    print(key)          # name, age, city

# Loop through values:
for value in person.values():
    print(value)        # Fatima, 25, Dhaka

# Loop through BOTH (most common!):
for key, value in person.items():
    print(f"  {key}: {value}")
# name: Fatima
# age: 25
# city: Dhaka

# Check if key exists:
if "name" in person:
    print("Name exists!")

# Remove a key:
del person["city"]
print(person)  # {'name': 'Fatima', 'age': 25}

# Nested dicts — dict inside dict (very common in real data):
customers = {
    "fatima": {"email": "fatima@mail.com", "orders": 15},
    "ahmed": {"email": "ahmed@mail.com", "orders": 8},
}
print(customers["fatima"]["email"])     # fatima@mail.com
print(customers["ahmed"]["orders"])     # 8</div>

<div class="code-block"># ── STEP 7: set — unique items only ──
# A set is like a list BUT:
#   - No duplicates (automatically removes them)
#   - No order (items are not in sequence)
# Created with curly braces {} (like dict, but no colons).

# Create a set:
unique_numbers = {1, 2, 3, 3, 3, 4, 4}
print(unique_numbers)     # {1, 2, 3, 4} — duplicates removed!

# Convert a list (with duplicates) to a set:
all_tags = ["python", "code", "python", "ai", "code", "ml"]
unique_tags = set(all_tags)
print(unique_tags)        # {'python', 'code', 'ai', 'ml'}

# Add and remove:
unique_tags.add("django")
unique_tags.remove("ml")   # remove item (error if not found)
unique_tags.discard("xyz") # remove if exists, no error if not

# Why use sets?
# 1. Remove duplicates from a list
# 2. Check membership FAST (faster than list for "in" check)
# 3. Set operations (union, intersection, difference)

# Set operations:
python_devs = {"Alice", "Bob", "Charlie"}
ai_devs = {"Bob", "Charlie", "David"}

both = python_devs &amp; ai_devs         # intersection: {'Bob', 'Charlie'}
either = python_devs | ai_devs        # union: {'Alice', 'Bob', 'Charlie', 'David'}
only_python = python_devs - ai_devs   # difference: {'Alice'}
print(f"Both: {both}")
print(f"Either: {either}")
print(f"Only Python: {only_python}")</div>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>ভুলের গল্প:</strong> করিম বললেন — এক শিক্ষানবিশ ১০,০০০ গ্রাহক list-এ রাখলো। গ্রাহক খুঁজতে if দিয়ে পুরো list ঘাঁটলো — ৫০ সেকেন্ড। dict দিলে একই কাজ ০.০০১ সেকেন্ড। ৫০,০০০ গুণ দ্রুত। সঠিক পাত্র ছাড়া কোড চলে, কিন্তু ধীর। সঠিক structure = গতি।</div></div>

<div class="code-block"># ── STEP 8: When to use which? (decision guide) ──
# Choosing the right data structure is CRITICAL.
# Wrong choice = slow code. Right choice = fast code.

# ┌──────────────────────┬──────────────────────┐
# │ Need...              │ Use...               │
# ├──────────────────────┼──────────────────────┤
# │ Ordered + changeable │ list []              │
# │ Ordered + locked     │ tuple ()             │
# │ Lookup by name       │ dict {"key": value}  │
# │ Unique items only    │ set {}               │
# └──────────────────────┴──────────────────────┘

# REAL EXAMPLES:
# Shopping cart (order matters, can add/remove) → list
shopping_cart = ["rice", "oil", "salt"]
shopping_cart.append("sugar")

# GPS coordinates (should never change) → tuple
dhaka_location = (23.8103, 90.4125)

# User database (look up by username) → dict
users = {
    "fatima99": {"name": "Fatima", "age": 25},
    "ahmed_21": {"name": "Ahmed", "age": 30},
}

# Unique email list (no duplicates) → set
subscriber_emails = {"a@mail.com", "b@mail.com", "a@mail.com"}
# Result: {'a@mail.com', 'b@mail.com'} — duplicate removed!</div>

<div class="code-block"># ── STEP 9: Iterating through data structures ──
# You'll loop through these ALL the time. Know the patterns.

# List:
fruits = ["apple", "banana", "cherry"]
for fruit in fruits:
    print(fruit)

# With index:
for i, fruit in enumerate(fruits):
    print(f"{i}: {fruit}")

# Dict (iterate key-value pairs):
prices = {"apple": 50, "banana": 30, "cherry": 80}
for fruit, price in prices.items():
    print(f"{fruit}: {price} taka")

# Set:
tags = {"python", "ai", "web"}
for tag in sorted(tags):  # sorted() gives predictable order
    print(tag)

# Nested structure (list of dicts — very common!):
students = [
    {"name": "Fatima", "grade": "A"},
    {"name": "Ahmed", "grade": "B"},
    {"name": "Sara", "grade": "A"},
]
for student in students:
    print(f"{student['name']}: {student['grade']}")</div>

<div class="code-block"># ── STEP 10: Practical — customer database ──
# Combine everything: dict for fast lookup, list for order.

# A customer database using dict (fast lookup by name):
customers = {
    "fatima": {"email": "fatima@mail.com", "phone": "0171...", "orders": 15},
    "ahmed": {"email": "ahmed@mail.com", "phone": "0181...", "orders": 3},
    "sara": {"email": "sara@mail.com", "phone": "0191...", "orders": 25},
}

# Fast lookup — INSTANT (O(1)):
customer = customers["fatima"]
print(f"Fatima has {customer['orders']} orders")

# Add new customer:
customers["bob"] = {"email": "bob@mail.com", "phone": "0161...", "orders": 0}

# Find VIP customers (10+ orders):
vip = [name for name, info in customers.items() if info["orders"] &gt;= 10]
print(f"VIP customers: {vip}")  # ['fatima', 'sara']

# All unique email domains:
domains = {info["email"].split("@")[1] for info in customers.values()}
print(f"Email domains: {domains}")  # {'mail.com'}</div>

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
<p class="scene-setting">পঞ্চম গিল্ড। ক্যালিগ্রাফারের কক্ষ। কালির গন্ধ, কাগজের শব্দ, নিখুঁত হরফ। ক্যালিগ্রাফার জয়নুল একটা মেসি পান্ডুলিপি ধরে আছেন — পাতায় কালি ছড়ানো, শব্দ ভাঙা, অক্ষর উল্টো। "এটা পড়া যায় না," তিনি বলেন। "কিন্তু আমি পরিষ্কার করতে পারি। চলো একটা একটা করে শিখি।" Python-এ string processing দিয়ে আসল বিশ্বের মেসি text পরিষ্কার করো।</p>
<p class="scene-setting en">Fifth guild. Calligrapher's studio. Smell of ink, sound of paper, perfect letterforms. Calligrapher Zainul holds a messy manuscript — ink spilled, words broken, letters reversed. "This is unreadable," he says. "But I can clean it. Let's learn step by step." Python string processing cleans messy real-world text.</p>

<div class="dialogue">প্রথম প্রশ্ন: বাস্তব জগতের ডেটা কেমন? উত্তর: মেসি। ইমেইলে স্পেস, ফোনে ড্যাশ, নামে বড়/ছোট হরফ মিশ্র। ৯০% real-world data আসে text হিসেবে — তাও মেসি। Python string methods দিয়ে পরিষ্কার করো।</div>
<div class="dialogue en">First question: what does real-world data look like? Answer: messy. Emails with spaces, phones with dashes, names with mixed case. 90% of real-world data is text — and messy. Python string methods clean it.</div>

<div class="code-block"># ── STEP 1: What is a string? ──
# A string is TEXT — a sequence of characters.
# Created with quotes (single ' or double "):

name = "Fatima"
greeting = 'Hello'
sentence = "She said 'hi'"   # double outside, single inside
sentence2 = 'He said "bye"'  # single outside, double inside

# Multi-line string with triple quotes:
message = """Dear Student,
Welcome to Python City!
Let's learn together."""

# How long is a string?
print(len(name))     # 6 (F-a-t-i-m-a)

# Strings are IMMUTABLE — you cannot change a character:
# name[0] = "S"  # ERROR! Strings cannot be modified.
# But you can create a NEW string:
new_name = "S" + name[1:]   # "Satima" — new string</div>

<div class="code-block"># ── STEP 2: String indexing and slicing ──
# Access individual characters by index (starts at 0):
text = "Hello, World!"

print(text[0])     # 'H' (first character)
print(text[7])     # 'W' (8th character)
print(text[-1])    # '!' (last character)
print(text[-2])    # 'd' (second-to-last)

# SLICING — take a portion [start:stop] (stop is EXCLUDED):
print(text[0:5])   # 'Hello' (index 0,1,2,3,4 — NOT 5)
print(text[7:])    # 'World!' (from 7 to end)
print(text[:5])    # 'Hello' (from start to 4)
print(text[:])     # 'Hello, World!' (entire string — a copy!)

# SLICING with STEP [start:stop:step]:
print(text[::2])   # 'HloWrd' (every 2nd character)
print(text[::-1])  # '!dlroW ,olleH' (REVERSED — common trick!)

# Slicing works on lists too (remember Door 4):</div>

<div class="code-block"># ── STEP 3: Cleaning text — strip, lower, upper ──
# These are the MOST USED string methods in real code.

# .strip() — remove leading/trailing spaces:
raw = "   hello world   "
clean = raw.strip()
print(f"'{clean}'")    # 'hello world' (spaces gone)

# .lower() — convert to lowercase:
email = "Fatima@Mail.COM"
print(email.lower())    # fatima@mail.com

# .upper() — convert to uppercase:
print(email.upper())    # FATIMA@MAIL.COM

# .title() — capitalize each word:
name = "fatima rahman"
print(name.title())     # Fatima Rahman

# .capitalize() — capitalize first letter only:
sentence = "hello world"
print(sentence.capitalize())  # Hello world

# Chaining methods (call one after another):
raw_email = "  Fatima@Mail.COM  "
clean_email = raw_email.strip().lower()
print(clean_email)  # fatima@mail.com</div>

<div class="code-block"># ── STEP 4: Searching inside strings ──
# Check if something is IN a string:
email = "fatima@mail.com"

# 'in' operator — True/False:
print("@" in email)            # True
print(".com" in email)         # True
print("gmail" in email)        # False

# .startswith() and .endswith():
filename = "report.pdf"
print(filename.endswith(".pdf"))    # True
print(filename.endswith(".docx"))   # False
print(filename.startswith("report")) # True

# .find() — get position (index) of substring:
text = "Hello, World!"
pos = text.find("World")
print(pos)  # 7 (starts at index 7)
print(text.find("Python"))  # -1 (not found)

# .count() — how many times something appears:
sentence = "the cat sat on the mat"
print(sentence.count("the"))  # 2
print(sentence.count("a"))    # 3</div>

<div class="code-block"># ── STEP 5: Split and Join ──
# .split() — break a string INTO a list:
csv_line = "Fatima,25,Dhaka,Engineer"
fields = csv_line.split(",")
print(fields)  # ['Fatima', '25', 'Dhaka', 'Engineer']

name, age, city, job = fields   # unpack into variables
print(f"{name} is {age}, lives in {city}, works as {job}")

# Split by whitespace (default):
sentence = "Python is awesome"
words = sentence.split()
print(words)  # ['Python', 'is', 'awesome']

# .join() — combine a list INTO a string:
words = ["Python", "is", "awesome"]
sentence = " ".join(words)     # join with space between
print(sentence)  # Python is awesome

tags = ["python", "ai", "web"]
hashtags = "#".join(tags)
print(hashtags)  # python#ai#web

# Split + Join = powerful text processing pipeline:
csv_data = "apple,banana,cherry"
pipe_separated = "|".join(csv_data.split(","))
print(pipe_separated)  # apple|banana|cherry</div>

<div class="code-block"># ── STEP 6: Replace ──
# .replace(old, new) — substitute text:
text = "I love Java"
new_text = text.replace("Java", "Python")
print(new_text)  # I love Python

# Replace all occurrences:
sentence = "cats and dogs and cats"
print(sentence.replace("cats", "birds"))  # birds and dogs and birds

# Replace spaces with underscores (for filenames):
filename = "My Report Final.pdf"
safe_name = filename.replace(" ", "_")
print(safe_name)  # My_Report_Final.pdf

# Remove something by replacing with empty string:
phone = "+880-171-234-5678"
digits_only = phone.replace("-", "")
print(digits_only)  # +8801712345678</div>

<div class="code-block"># ── STEP 7: f-string formatting ──
# f"..." lets you put variables directly inside a string.
# This is the MOST PYTHONIC way to format strings (Python 3.6+).

name = "Fatima"
age = 25
price = 49.99
items = 3

# WITHOUT f-string (concatenation — ugly and error-prone):
msg1 = "Name: " + name + ", Age: " + str(age)
print(msg1)

# WITH f-string (clean and readable):
msg2 = f"Name: {name}, Age: {age}"
print(msg2)  # Name: Fatima, Age: 25

# f-string with EXPRESSIONS inside {}:
print(f"Total: {price * items}")       # Total: 149.97
print(f"Next year: {age + 1}")          # Next year: 26
print(f"Name upper: {name.upper()}")    # Name upper: FATIMA

# f-string with FORMAT SPECIFIERS:
print(f"Price: {price:.2f}")            # Price: 49.99 (2 decimals)
print(f"Price: {price:,.2f}")           # Price: 1,234.56 (with commas)
print(f"Age: {age:05d}")                # Age: 00025 (pad with zeros)
print(f"Percent: {0.85:.1%}")           # Percent: 85.0%
print(f"Binary: {42:08b}")              # Binary: 00101010

# Multi-line f-string:
report = f"""
--- Report ---
Name: {name}
Age: {age}
Total: {price * items:.2f} taka
"""</div>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>ভুলের গল্প:</strong> জয়নুল বললেন — এক শিক্ষানবিশ + দিয়ে string জোড়ার চেষ্টা করলো। "Hello" + " " + "World" + " " + str(42)। কাজ করলো, কিন্তু ugly। f-string দিলে: f"Hello World {42}"। পরিষ্কার, পঠনযোগ্য, দ্রুত। Python 3.6+ f-string = সবচেয়ে Pythonic।</div></div>

<div class="code-block"># ── STEP 8: Real scenario — clean 1,000 messy emails ──
# Combine everything: strip, lower, split, replace

messy_emails = [
    "  Fatima@Mail.COM  ",
    "ahmed@@gmail.com",
    "  sara@yahoo.com  ",
    "BOB@HOTMAIL.COM",
    "nadia@gmail.com (personal)",
]

def clean_email(raw):
    """Clean a messy email address."""
    email = raw.strip()           # remove spaces
    email = email.lower()         # lowercase
    if "(" in email:              # remove notes like "(personal)"
        email = email.split("(")[0].strip()
    email = email.replace("@@", "@")  # fix double @
    return email

cleaned = [clean_email(e) for e in messy_emails]
for original, clean in zip(messy_emails, cleaned):
    print(f"  '{original.strip()}' -> '{clean}'")
# 'Fatima@Mail.COM' -> 'fatima@mail.com'
# 'ahmed@@gmail.com' -> 'ahmed@gmail.com'
# etc.</div>

<div class="code-block"># ── STEP 9: Useful string methods cheat sheet ──
# Here are the methods you'll use 90% of the time:

text = "  Hello World  "

# Cleaning:
text.strip()        # "Hello World" (remove spaces both sides)
text.lstrip()       # "Hello World  " (left only)
text.rstrip()       # "  Hello World" (right only)

# Case:
text.lower()        # "  hello world  "
text.upper()        # "  HELLO WORLD  "
text.title()        # "  Hello World  "
text.swapcase()     # "  hELLO wORLD  "

# Testing (returns True/False):
"hello".isalpha()   # True (only letters)
"12345".isdigit()   # True (only digits)
"hello123".isalnum() # True (letters + digits)
"   ".isspace()     # True (only whitespace)
"Hello".istitle()   # True (each word capitalized)

# These are great for validation:
user_input = "abc123"
if user_input.isalnum():
    print("Valid username (letters + numbers only)")</div>

<div class="code-block"># ── STEP 10: Regex (advanced pattern matching) ──
# Regular expressions find PATTERNS in text.
# Powerful but complex — use for hard jobs, not simple ones.

import re

# Extract all email addresses from a block of text:
text = "Contact fatima@mail.com or ahmed@gmail.com for info."
emails = re.findall(r'[\w.]+@[\w.]+', text)
print(emails)  # ['fatima@mail.com', 'ahmed@gmail.com']

# Check if a string matches a pattern:
phone = "+8801712345678"
if re.match(r'^\+880\d{11}$', phone):
    print("Valid Bangladesh phone number")

# Replace all digits with X:
masked = re.sub(r'\d', 'X', "My card is 4532-1234-5678-9012")
print(masked)  # My card is XXXX-XXXX-XXXX-XXXX

# When to use regex vs string methods?
# Simple search: use 'in', .find(), .replace()
# Complex pattern (email, phone, URL): use regex
# Rule: if string methods can do it, use them. Regex for hard patterns.</div>

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
