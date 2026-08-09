// ════════════════════════════════════════════════════════════
// THE PYTHON CITY — DOORS 6-10 (BUILDER GUILDS)
// 6. Archive: File I/O      7. Healer: Error Handling
// 8. Council: Modules        9. Architect: OOP
// 10. Glass Blower: Comprehensions
// ════════════════════════════════════════════════════════════

// ── GUILD 6: ARCHIVE — FILE I/O ──
doors.push({
  num:6, icon:"📂", color:"#2dd4bf", name:"আর্কাইভের কক্ষ",
  subtitle:"The Archive", tech:"File I/O — Reading & Writing Files",
  spirit:"কিতাব — book/record, from Quran 2:2 (This is the Book about which there is no doubt)",
  secret:"File I/O = তথ্য স্থায়ী করা। প্রোগ্রাম বন্ধ হলে মেমরি মুছে যায় — কিন্তু file-এ লেখা তথ্য থাকে। open(), read(), write(), with statement। বাস্তব জগতে সব ডেটা file-এ।",
  recall:{
    q:"with open() as f কেন ব্যবহার করবে? open() একা কেন খারাপ?",
    qen:"Why use with open()? Why is bare open() bad?",
    a:"with open() = file স্বয়ংক্রিয়ভাবে বন্ধ হয়, ভুল হলেও। open() একা = বন্ধ করতে close() কল করতে হয়, ভুলে গেলে file lock থাকে, memory leak। with = safe।",
    aen:"with open() = auto-closes file even on error. Bare open() = must call close(), if forgotten = file lock, memory leak."
  },
  story:`
<p class="scene-setting">ষষ্ঠ গিল্ড। আর্কাইভের কক্ষ। পুরোনো পাপিরাসের গন্ধ, ধুলোর কণা, কাঠের তাকে হাজার স্ক্রল। আর্কাইভিস্ট আমিনা একটা খোলা স্ক্রল গুটিয়ে রাখছেন। "প্রতিটা স্ক্রল খোলো, পড়ো, তারপর গুটিয়ে রাখো," তিনি বলেন। "খোলা রাখলে ধুলো পড়বে, পানি লাগবে, নষ্ট হবে। Python-এ file-ও তেমনি — খোলো, পড়ো, বন্ধ করো। with statement দিয়ে স্বয়ংক্রিয়ভাবে। চলো একটা একটা করে শিখি।"</p>
<p class="scene-setting en">Sixth guild. The Archive. Smell of old papyrus, dust motes, a thousand scrolls on wooden shelves. Archivist Amina is rolling up an open scroll. "Each scroll: open it, read it, then close it," she says. "Leave it open — dust falls, water spills, it's ruined. Python files are the same — open, read, close. With the 'with' statement, automatic. Let's learn step by step."</p>

<div class="dialogue">প্রথম প্রশ্ন: তোমার প্রোগ্রামে তথ্য আছে — variables, lists, dicts। কিন্তু প্রোগ্রাম বন্ধ হলে কী হয়? সব মুছে যায়। মেমরি পরিষ্কার হয়ে যায়। তথ্য স্থায়ী করতে হলে — file-এ লিখতে হবে। এটাই file I/O।</div>
<div class="dialogue en">First question: your program has data — variables, lists, dicts. But when the program closes, what happens? Everything vanishes. Memory is cleared. To make data permanent, you must write it to a file. This is file I/O.</div>

<div class="code-block"># ── STEP 1: Writing your first file ──
# open() opens a file. write() puts text inside. close() saves it.
# If the file doesn't exist, Python creates it.

# ❌ The OLD way (DON'T do this):
f = open("hello.txt", "w")    # "w" = write mode
f.write("Hello, World!")
f.write("\\nThis is line 2.")
f.close()                      # MUST remember to close!

# The problem: if your program crashes before close(),
# the file stays open and locked. Data may be lost.

# ✅ The SAFE way — with statement (ALWAYS use this!):
with open("hello.txt", "w") as f:
    f.write("Hello, World!")
    f.write("\\nThis is line 2.")
# When the 'with' block ends, Python closes the file AUTOMATICALLY.
# Even if an error happens — the file still closes. Safe!</div>

<div class="code-block"># ── STEP 2: File modes ──
# The mode tells Python WHAT you want to do with the file.

# "w" = WRITE (create new or OVERWRITE existing):
with open("data.txt", "w") as f:
    f.write("This overwrites everything.")
    # ⚠️ If data.txt had content, it's GONE now!

# "a" = APPEND (add to end, keep existing):
with open("log.txt", "a") as f:
    f.write("\\nNew log entry.")   # adds to end, old content safe

# "r" = READ (file must exist):
with open("data.txt", "r") as f:
    content = f.read()
    print(content)   # shows everything in the file

# "r" is the DEFAULT, so you can skip it:
with open("data.txt") as f:
    content = f.read()

# "b" = BINARY (for images, PDFs, non-text files):
# with open("photo.jpg", "rb") as f:    # "rb" = read binary
#     data = f.read()

# ┌────────┬──────────────────────────────────┐
# │ Mode   │ What it does                      │
# ├────────┼──────────────────────────────────┤
# │ "r"    │ Read (file must exist)            │
# │ "w"    │ Write (OVERWRITES! creates if new)│
# │ "a"    │ Append (adds to end)              │
# │ "r+"   │ Read AND write                    │
# │ "b"    │ Binary (add to any mode: rb, wb)  │
# └────────┴──────────────────────────────────┘</div>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>ভুলের গল্প:</strong> আমিনা বললেন — এক শিক্ষানবিশ file খুললো, পড়লো, কিন্তু close() করলো না। প্রোগ্রাম crash করে গেলো। file "locked" — অন্য কেউ খুলতে পারলো না। সারাদিন ধরে locked। with open() দিলে — crash হলেও Python স্বয়ংক্রিয়ভাবে বন্ধ করে। with = নিরাপত্তা।</div></div>

<div class="code-block"># ── STEP 3: Reading files ──
# Three ways to read. Each is useful in different situations.

# 1. .read() — read the ENTIRE file as one string:
with open("data.txt") as f:
    everything = f.read()
    print(everything)

# 2. .readlines() — read into a LIST of lines:
with open("data.txt") as f:
    lines = f.readlines()
    print(lines)  # ['line1\\n', 'line2\\n', 'line3']
    # Each line includes the \\n at the end

# 3. Iterate line by line (BEST for big files!):
with open("data.txt") as f:
    for line in f:
        clean_line = line.strip()  # remove \\n
        print(clean_line)

# Why is line-by-line best? If your file is 10GB,
# .read() loads ALL 10GB into RAM. The for loop
# loads ONE line at a time — uses almost no memory!</div>

<div class="code-block"># ── STEP 4: Writing multiple lines ──
# How to write many lines to a file.

# Method 1: multiple .write() calls:
with open("report.txt", "w") as f:
    f.write("=== REPORT ===\\n")
    f.write("Date: 2024-01-15\\n")
    f.write("Status: Complete\\n")

# Method 2: write a LIST of lines with writelines():
lines = [
    "=== REPORT ===\\n",
    "Date: 2024-01-15\\n",
    "Status: Complete\\n",
]
with open("report.txt", "w") as f:
    f.writelines(lines)   # writes each item (must add \\n yourself)

# Method 3: write from a loop (log file example):
with open("app.log", "w") as f:
    for i in range(5):
        f.write(f"[{i}] Processing item {i}...\\n")

# ⚠️ Don't forget \\n! Without it, everything is on ONE line.</div>

<div class="code-block"># ── STEP 5: JSON — the most common data format ──
# JSON = JavaScript Object Notation.
# It's the STANDARD way to save Python dicts/lists to a file.
# Used EVERYWHERE: APIs, config files, databases, NoSQL.

import json

# Our data (a list of dicts — very common structure):
customers = [
    {"name": "Fatima", "email": "fatima@mail.com", "age": 25},
    {"name": "Ahmed", "email": "ahmed@mail.com", "age": 30},
    {"name": "Sara", "email": "sara@mail.com", "age": 28},
]

# SAVE to JSON file:
with open("customers.json", "w") as f:
    json.dump(customers, f, indent=2)   # indent=2 makes it pretty

# LOAD from JSON file:
with open("customers.json") as f:
    loaded = json.load(f)

print(f"Loaded {len(loaded)} customers")
for c in loaded:
    print(f"  {c['name']}: {c['email']}")

# The JSON file looks like this (human-readable!):
# [
#   {
#     "name": "Fatima",
#     "email": "fatima@mail.com",
#     "age": 25
#   },
#   ...
# ]</div>

<div class="code-block"># ── STEP 6: CSV — spreadsheet data ──
# CSV = Comma-Separated Values. Each row is a line, columns split by commas.
# Used for: data export, Excel, databases, data science.

import csv

# WRITE a CSV file:
with open("tasks.csv", "w", newline="") as f:
    writer = csv.writer(f)
    writer.writerow(["Task", "Priority", "Status"])  # header row
    writer.writerow(["Fix login bug", 1, "pending"])
    writer.writerow(["Write docs", 3, "done"])
    writer.writerow(["Deploy app", 2, "pending"])

# READ a CSV file (as dictionaries — each row = one dict):
with open("tasks.csv") as f:
    reader = csv.DictReader(f)  # uses first row as column names
    for row in reader:
        print(f"  {row['Task']} (Priority: {row['Priority']}) - {row['Status']}")

# The CSV file looks like:
# Task,Priority,Status
# Fix login bug,1,pending
# Write docs,3,done
# Deploy app,2,pending</div>

<div class="code-block"># ── STEP 7: Check if file exists ──
# Before reading a file, check if it exists (avoid FileNotFoundError).

import os
from pathlib import Path

# Method 1: os.path.exists()
if os.path.exists("data.txt"):
    with open("data.txt") as f:
        print(f.read())
else:
    print("File does not exist!")

# Method 2: pathlib (modern, preferred)
filepath = Path("data.txt")
if filepath.exists():
    content = filepath.read_text()   # one-liner read!
    print(content)
else:
    print("File does not exist!")

# pathlib shortcuts (very clean):
# Path("f.txt").read_text()      — read entire file as string
# Path("f.txt").write_text("x")  — write string to file
# Path("f.txt").exists()         — True if file exists
# Path("data/").mkdir()          — create directory</div>

<div class="code-block"># ── STEP 8: A real app — note taker ──
# Combine everything: write, read, append.

from pathlib import Path
from datetime import datetime

NOTES_FILE = Path("mynotes.txt")

def add_note(text):
    """Add a timestamped note to the file."""
    timestamp = datetime.now().strftime("%Y-%m-%d %H:%M")
    with open(NOTES_FILE, "a") as f:   # "a" = append (don't overwrite!)
        f.write(f"[{timestamp}] {text}\\n")
    print(f"Note added.")

def read_notes():
    """Read all notes."""
    if not NOTES_FILE.exists():
        print("No notes yet!")
        return
    print("--- Your Notes ---")
    with open(NOTES_FILE) as f:
        for line in f:
            print(line.rstrip())   # rstrip removes trailing \\n

# Use it:
add_note("Learned Python file I/O")
add_note("Built my first app!")
read_notes()
# --- Your Notes ---
# [2024-01-15 14:30] Learned Python file I/O
# [2024-01-15 14:31] Built my first app!</div>

<div class="code-block"># ── STEP 9: Working with directories ──
# Sometimes you need to work with FOLDERS, not just files.

import os
from pathlib import Path

# List files in a directory:
files = os.listdir(".")   # "." = current directory
print(files)  # ['data.txt', 'notes.txt', 'app.py', ...]

# Modern way with pathlib:
for item in Path(".").iterdir():
    if item.is_file():
        print(f"  File: {item.name}")
    elif item.is_dir():
        print(f"  Folder: {item.name}/")

# Create a directory:
Path("backups").mkdir(exist_ok=True)  # exist_ok = no error if exists

# Find all .txt files:
for txt_file in Path(".").glob("*.txt"):
    print(f"Found: {txt_file}")

# Find all .py files recursively (in subfolders too):
for py_file in Path(".").rglob("*.py"):
    print(f"Python file: {py_file}")

# Join paths (cross-platform — works on Windows, Mac, Linux):
config_path = Path("config") / "settings.json"
# On Windows: config\\settings.json
# On Mac/Linux: config/settings.json</div>

<div class="code-block"># ── STEP 10: File format summary ──
# Different formats for different jobs:

# .txt  → plain text (logs, notes, simple data)
# .json → structured data (dicts, lists) — MOST COMMON
# .csv  → tabular data (spreadsheet-like)
# .yaml → config files (cleaner than JSON for humans)
# .pkl  → Python objects (pickle — save any Python object)
# .xml  → legacy structured data (used in old systems)

# The pickle module saves ANY Python object:
import pickle

my_data = {"scores": [90, 85, 95], "name": "Fatima"}

# Save:
with open("data.pkl", "wb") as f:     # "wb" = write binary
    pickle.dump(my_data, f)

# Load:
with open("data.pkl", "rb") as f:     # "rb" = read binary
    loaded = pickle.load(f)
    print(loaded)  # {'scores': [90, 85, 95], 'name': 'Fatima'}

# ⚠️ WARNING: Only unpickle files YOU created.
# Malicious pickle files can execute arbitrary code!

# ── THE GOLDEN RULES OF FILE I/O ──
# 1. ALWAYS use 'with open()' — never bare open()
# 2. Check if file exists before reading
# 3. Use JSON for structured data, CSV for tables
# 4. Process big files line-by-line (not .read() all at once)
# 5. Use pathlib for modern path handling</div>

<div class="diagram">
  <div class="diag-title">File I/O — খোলো, পড়ো/লেখো, বন্ধ করো</div>
  <svg viewBox="0 0 560 220" xmlns="http://www.w3.org/2000/svg">
    <defs><marker id="arrFA" markerWidth="6" markerHeight="6" refX="4" refY="3" orient="auto"><path d="M0,0 L4,3 L0,6" fill="#34d399"/></marker></defs>
    <!-- Open -->
    <rect x="20" y="20" width="140" height="40" rx="6" fill="rgba(45,212,191,0.1)" stroke="#2dd4bf" stroke-width="2"/>
    <text x="90" y="38" text-anchor="middle" fill="#2dd4bf" font-size="9" font-weight="bold">1. Open</text>
    <text x="90" y="52" text-anchor="middle" fill="#9a93b8" font-size="7" font-family="monospace">with open("f.json","w")</text>
    <line x1="160" y1="40" x2="200" y2="40" stroke="#34d399" stroke-width="2" marker-end="url(#arrFA)"/>
    <!-- Process -->
    <rect x="205" y="15" width="150" height="55" rx="6" fill="rgba(52,211,153,0.08)" stroke="#34d399" stroke-width="2"/>
    <text x="280" y="33" text-anchor="middle" fill="#34d399" font-size="9" font-weight="bold">2. Read / Write</text>
    <text x="280" y="48" text-anchor="middle" fill="#9a93b8" font-size="7" font-family="monospace">f.write(data)</text>
    <text x="280" y="60" text-anchor="middle" fill="#9a93b8" font-size="7" font-family="monospace">json.dump(obj, f)</text>
    <line x1="355" y1="40" x2="395" y2="40" stroke="#34d399" stroke-width="2" marker-end="url(#arrFA)"/>
    <!-- Close -->
    <rect x="400" y="20" width="140" height="40" rx="6" fill="rgba(251,191,36,0.08)" stroke="#fbbf24" stroke-width="2"/>
    <text x="470" y="38" text-anchor="middle" fill="#fbbf24" font-size="9" font-weight="bold">3. Close (auto)</text>
    <text x="470" y="52" text-anchor="middle" fill="#9a93b8" font-size="7" font-family="monospace"># with block ends</text>
    <!-- Formats -->
    <rect x="20" y="90" width="520" height="40" rx="6" fill="rgba(45,212,191,0.06)" stroke="rgba(45,212,191,0.2)" stroke-width="1"/>
    <text x="280" y="108" text-anchor="middle" fill="#34d399" font-size="8" font-weight="bold">File Formats</text>
    <text x="280" y="122" text-anchor="middle" fill="#9a93b8" font-size="7">.json (structured data) · .csv (tabular) · .txt (text) · .yaml (config) · .pkl (Python objects)</text>
    <!-- Modes -->
    <rect x="20" y="145" width="520" height="60" rx="6" fill="rgba(240,98,146,0.04)" stroke="rgba(240,98,146,0.15)" stroke-width="1"/>
    <text x="280" y="163" text-anchor="middle" fill="#f06292" font-size="8" font-weight="bold">Modes: r (read) · w (write, overwrites!) · a (append) · b (binary)</text>
    <text x="280" y="178" text-anchor="middle" fill="#9a93b8" font-size="7">with open() = auto-close। bare open() = file lock risk</text>
    <text x="280" y="192" text-anchor="middle" fill="#9a93b8" font-size="7">json.dump/load = JSON। csv.writer/DictReader = CSV। file.read()/write() = text</text>
  </svg>
  <div class="diag-cap">File I/O = তথ্য স্থায়ী করা। with open() → read/write → auto-close। JSON, CSV, text — সব format।</div>
</div>

<div class="dialogue">কিতাব — বই, লিখিত রেকর্ড। কুরআনে আল্লাহ বলেন — এই সেই কিতাব, যাতে কোনো সন্দেহ নেই (২:২)। কিতাব = স্থায়ী জ্ঞান, মুখে মুখে নয়। File I/O = কিতাব — তথ্যকে লিখিত রূপ দাও, স্থায়ী করো। প্রোগ্রাম বন্ধ হলেও তথ্য থাকে — কিতাবের মতো।</div>
<div class="dialogue en">Kitab — book, written record. Allah says — This is the Book about which there is no doubt (2:2). Kitab = permanent knowledge, not oral. File I/O = kitab — give data a written form, make it permanent. Program closes, data remains — like a book.</div>

<div class="secret-box">📂 with open("file", mode) as f: → read/write → auto-close। JSON, CSV, text। bare open() = file lock risk।</div>
`,
  senior:{
    title:"File I/O — Senior Notes",
    body:`<table class="kv-table">
<tr><th>Task</th><th>Code</th></tr>
<tr><td class="hl">Write JSON</td><td>with open("f.json","w") as f: json.dump(data, f)</td></tr>
<tr><td class="hl">Read JSON</td><td>with open("f.json") as f: data = json.load(f)</td></tr>
<tr><td class="hl">Write CSV</td><td>csv.writer(f).writerow(row)</td></tr>
<tr><td class="hl">Read CSV</td><td>csv.DictReader(f) → dict per row</td></tr>
<tr><td class="hl">Read large file</td><td>for line in f: (line by line, O(1) memory)</td></tr>
</table>
<p><strong>Path handling:</strong> <code>from pathlib import Path</code> — <code>Path("data") / "file.json"</code> — cross-platform। <code>Path.exists()</code>, <code>Path.mkdir()</code>।</p>
<p><strong>Cross-ref:</strong> Book 39 (Databases) পুরো বই persistent storage নিয়ে। Book 44 (Data Engineering)-এ pipeline file handling দেখবে।</p>`
  }
});

// ── GUILD 7: HEALER'S CLINIC — ERROR HANDLING ──
doors.push({
  num:7, icon:"🏥", color:"#34d399", name:"চিকিৎসকের ক্লিনিক",
  subtitle:"The Healer's Clinic", tech:"Error Handling — try/except/finally/raise",
  spirit:"শিফা — healing/cure, from Quran 17:82 (We send down healing and mercy)",
  secret:"try/except = রোগীকে চিকিৎসা। try = ঝুঁকিপূর্ণ কাজ, except = রোগ ধরা, finally = সুস্থ হোক বা না হোক পরিচ্ছন্ন করা। raise = নতুন রোগ রিপোর্ট। bare except নয় — নির্দিষ্ট exception ধরো।",
  recall:{
    q:"try/except/finally এর ৩টি ধাপ কী? bare except কেন খারাপ?",
    qen:"What are the 3 steps of try/except/finally? Why is bare except bad?",
    a:"try = ঝুঁকিপূর্ণ কোড। except = error ধরা ও মোকাবিলা। finally = error হোক বা না হোক, সবসময় চলে (cleanup)। bare except = সব error গিলে ফেলে — debug অসম্ভব। নির্দিষ্ট: except ValueError।",
    aen:"try = risky code. except = catch and handle. finally = always runs (cleanup). Bare except = swallows everything — debug impossible."
  },
  story:`
<p class="scene-setting">সপ্তম গিল্ড। চিকিৎসকের ক্লিনিক। ভেষজের গন্ধ, পরিষ্কার বিছানা, নীরবতা। চিকিৎসক লায়লা একজন রোগী দেখছেন। "প্রথমে রোগ চিনো," তিনি বলেন। "তারপর ওষুধ দাও। কিন্তু যদি রোগ না চিনো — সব রোগে একই ওষুধ? রোগী মারা যাবে। except-ও তেমনি — নির্দিষ্ট error ধরো, bare except নয়। চলো একটা একটা করে শিখি।"</p>
<p class="scene-setting en">Seventh guild. The Healer's clinic. Smell of herbs, clean sheets, silence. Doctor Layla examines a patient. "First identify the disease," she says. "Then give medicine. But if you can't identify — same medicine for everything? The patient dies. Except is the same — catch specific errors, not bare except. Let's learn step by step."</p>

<div class="dialogue">প্রথম প্রশ্ন: তোমার প্রোগ্রাম crash হলে কী হয়? পুরো প্রোগ্রাম থেমে যায়। ব্যবহারকারী error দেখে। কিন্তু এটা এড়ানো যায় — try/except দিয়ে। ভুল ধরো, মোকাবিলা করো, চালিয়ে যাও।</div>
<div class="dialogue en">First question: when your program crashes, what happens? The whole program stops. The user sees an error. But this can be avoided — with try/except. Catch the error, handle it, continue.</div>

<div class="code-block"># ── STEP 1: Without error handling — programs CRASH ──
# What happens when something goes wrong?

# Division by zero:
result = 10 / 0
# Traceback (most recent call last):
#   File "<stdin>", line 1, in <module>
# ZeroDivisionError: division by zero
# Program STOPS. User sees ugly error. Bad experience.

# Reading a file that doesn't exist:
# with open("missing.txt") as f:
#     print(f.read())
# FileNotFoundError: [Errno 2] No such file or directory
# Program STOPS again.

# Converting invalid input:
number = int("hello")
# ValueError: invalid literal for int() with base 10: 'hello'
# Program STOPS.

# The solution: try/except — catch errors BEFORE they crash.</div>

<div class="code-block"># ── STEP 2: try/except — the basics ──
# try: = "try to do this"
# except: = "if it fails, do this instead"

# WITHOUT try/except (program crashes):
# result = 10 / 0   # CRASH!

# WITH try/except (program survives):
try:
    result = 10 / 0
except ZeroDivisionError:
    print("You can't divide by zero!")
    result = None

print(f"Result: {result}")  # Result: None (program continues!)

# How it works:
# 1. Python tries the code in 'try:'
# 2. If an error occurs, Python checks 'except:'
# 3. If the error type matches, the except block runs
# 4. Program continues normally after the try/except

# Another example:
try:
    number = int("hello")
except ValueError:
    print("That's not a valid number!")
    number = 0

print(f"Number: {number}")  # Number: 0</div>

<div class="code-block"># ── STEP 3: Common error types ──
# Python has many built-in error types. Know the common ones.

# ValueError — wrong VALUE type:
int("abc")      # ValueError (can't convert)
int("42")       # OK (valid)

# ZeroDivisionError — dividing by zero:
10 / 0          # ZeroDivisionError

# TypeError — wrong TYPE of operation:
"hello" + 5     # TypeError (can't add str + int)

# IndexError — list index out of range:
[1, 2, 3][10]   # IndexError (only 3 items, index 10 doesn't exist)

# KeyError — dict key doesn't exist:
{"a": 1}["b"]   # KeyError ("b" not in dict)

# FileNotFoundError — file doesn't exist:
open("missing.txt")  # FileNotFoundError

# AttributeError — method doesn't exist:
"hello".fake_method()  # AttributeError

# Each error type tells you WHAT went wrong.
# Catch the SPECIFIC type, not all errors!</div>

<div class="code-block"># ── STEP 4: Catching the error message ──
# Use 'as e' to get the error object with details.

try:
    number = int("hello")
except ValueError as e:
    print(f"Error type: {type(e).__name__}")  # ValueError
    print(f"Error message: {e}")               # invalid literal...
    print(f"Handling: setting to default")
    number = 0

# This is very useful for logging:
try:
    with open("data.txt") as f:
        content = f.read()
except FileNotFoundError as e:
    print(f"[ERROR] Could not open file: {e}")
    content = ""  # fallback to empty

# Catching MULTIPLE error types:
try:
    value = int(input("Enter a number: "))
    result = 10 / value
except ValueError:
    print("Please enter a valid number!")
except ZeroDivisionError:
    print("Can't divide by zero!")</div>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>ভুলের গল্প:</strong> লায়লা বললেন — একটা production system-ে bare except ছিল। ৩ দিন ধরে database connection fail করছিল, কিন্তু except সেটা গিলে ফেললো। কেউ জানতো না। ৩ দিনের ডেটা হারালো। নির্দিষ্ট except ConnectionError দিলে — সঙ্গে alert আসতো। bare except = নীরব মৃত্যু।</div></div>

<div class="code-block"># ── STEP 5: bare except vs specific except ──
# ❌ BAD: bare except catches EVERYTHING (even KeyboardInterrupt!)

try:
    risky_operation()
except:
    print("Something went wrong.")  # What went wrong? Nobody knows!
    # This also catches Ctrl+C (KeyboardInterrupt) — you can't
    # even stop your program with Ctrl+C!

# ✅ GOOD: catch SPECIFIC errors
try:
    risky_operation()
except ValueError as e:
    print(f"Value error: {e}")      # handle value issues
except FileNotFoundError as e:
    print(f"File missing: {e}")     # handle missing files
except Exception as e:
    # Catch-all for UNEXPECTED errors — but LOG it!
    print(f"Unexpected error: {type(e).__name__}: {e}")
    raise  # re-raise — don't swallow silently!

# Rule: catch what you CAN handle. Let the rest propagate.</div>

<div class="code-block"># ── STEP 6: else and finally ──
# else: runs ONLY if NO error occurred (success path)
# finally: runs ALWAYS — error or no error (cleanup)

try:
    number = int("42")  # this will succeed
except ValueError:
    print("Invalid number!")
else:
    # Only runs if try succeeded (no error)
    print(f"Success! Number is {number}")
finally:
    # ALWAYS runs — error or success
    print("Cleanup complete.")

# Output:
# Success! Number is 42
# Cleanup complete.

# When error DOES happen:
try:
    number = int("hello")  # this will fail
except ValueError:
    print("Invalid number!")
else:
    print(f"Success! Number is {number}")  # skipped
finally:
    print("Cleanup complete.")  # still runs!

# Output:
# Invalid number!
# Cleanup complete.

# finally is perfect for closing files, connections, etc.
try:
    f = open("data.txt")
    content = f.read()
except FileNotFoundError:
    content = ""
finally:
    f.close()  # ALWAYS close, even on error</div>

<div class="code-block"># ── STEP 7: raise — creating your own errors ──
# Sometimes YOU need to report an error to the caller.

def withdraw(balance: float, amount: float) -> float:
    """Withdraw money. Raises error if invalid."""
    if amount &lt;= 0:
        raise ValueError(f"Amount must be positive, got {amount}")
    if amount &gt; balance:
        raise ValueError(f"Insufficient funds: balance={balance}, tried={amount}")
    return balance - amount

# The caller must handle the error:
try:
    new_balance = withdraw(100, 150)
except ValueError as e:
    print(f"Withdrawal failed: {e}")
    # Output: Withdrawal failed: Insufficient funds: balance=100, tried=150

# raise without argument — re-raise the current error:
try:
    risky_code()
except Exception as e:
    log_error(e)
    raise  # re-raise — let the caller decide what to do</div>

<div class="code-block"># ── STEP 8: Custom exceptions ──
# Create YOUR OWN error types for your application.
# This makes error handling clear and self-documenting.

# Step 1: Define custom exceptions (inherit from Exception):
class TaskError(Exception):
    """Base error for all task-related problems."""
    pass

class TaskNotFoundError(TaskError):
    """Raised when a task ID doesn't exist."""
    pass

class TaskAlreadyDoneError(TaskError):
    """Raised when trying to complete an already-done task."""
    pass

# Step 2: Raise them in your code:
def complete_task(task_id: int):
    task = find_task(task_id)
    if task is None:
        raise TaskNotFoundError(f"No task with ID {task_id}")
    if task.status == "done":
        raise TaskAlreadyDoneError(f"Task {task_id} already done")
    task.status = "done"

# Step 3: Catch them specifically:
try:
    complete_task(42)
except TaskNotFoundError:
    print("Task doesn't exist — create it first.")
except TaskAlreadyDoneError:
    print("Already done — nothing to do.")
except TaskError as e:
    # Catch-all for unexpected task errors
    print(f"Task error: {e}")</div>

<div class="code-block"># ── STEP 9: Real scenario — safe file reader ──
# A function that reads a file, handling ALL possible errors.

def safe_read_file(filepath: str) -&gt; str:
    """Read a file safely. Returns content or empty string."""
    try:
        with open(filepath) as f:
            return f.read()
    except FileNotFoundError:
        print(f"[WARN] File not found: {filepath}")
        return ""
    except PermissionError:
        print(f"[ERROR] No permission to read: {filepath}")
        return ""
    except Exception as e:
        # Unexpected error — log it, don't swallow
        print(f"[ERROR] Unexpected: {type(e).__name__}: {e}")
        return ""

# This function NEVER crashes. The caller always gets a string.
content = safe_read_file("config.json")
if content:
    print("Config loaded successfully!")

# Another pattern — retry on failure:
import time

def fetch_with_retry(url: str, max_attempts: int = 3) -&gt; dict:
    """Fetch URL with automatic retries."""
    for attempt in range(max_attempts):
        try:
            response = requests.get(url)
            response.raise_for_status()  # raises on 4xx/5xx
            return response.json()
        except Exception as e:
            if attempt &lt; max_attempts - 1:
                wait = 2 ** attempt  # exponential backoff
                print(f"Attempt {attempt+1} failed. Retrying in {wait}s...")
                time.sleep(wait)
            else:
                raise  # all attempts failed — let caller know</div>

<div class="code-block"># ── STEP 10: The golden rules of error handling ──
# Follow these rules and your code will be robust.

# RULE 1: Be SPECIFIC — catch the error type you expect:
# ❌ except:
# ✅ except ValueError:
# ✅ except FileNotFoundError:

# RULE 2: Don't SILENTLY swallow errors:
# ❌ except Exception: pass   (hides bugs!)
# ✅ except Exception as e: log(e); raise  (log and propagate)

# RULE 3: Use finally for CLEANUP:
try:
    f = open("data.txt")
    # ... process ...
finally:
    f.close()  # always runs

# RULE 4: Create CUSTOM exceptions for your domain:
# class MyError(Exception): pass
# Makes error handling clear and self-documenting.

# RULE 5: FAIL FAST — better to crash loudly than silently corrupt data.
# If you can't handle an error, let it propagate (raise).

# RULE 6: Handle errors at the RIGHT level:
# - Low level (functions): raise errors
# - High level (main/UI): catch and show user-friendly message

# Summary of the try/except pattern:
# ┌─────────────────────────────────────────┐
# │  try:        risky code                  │
# │  except E1:  handle error type 1         │
# │  except E2:  handle error type 2         │
# │  else:       runs if NO error (success)  │
# │  finally:    ALWAYS runs (cleanup)       │
# └─────────────────────────────────────────┘</div>

<div class="diagram">
  <div class="diag-title">try/except/finally — রোগ চিনো, ওষুধ দাও</div>
  <svg viewBox="0 0 560 260" xmlns="http://www.w3.org/2000/svg">
    <!-- try -->
    <rect x="200" y="20" width="160" height="35" rx="6" fill="rgba(251,191,36,0.08)" stroke="#fbbf24" stroke-width="2"/>
    <text x="280" y="38" text-anchor="middle" fill="#fbbf24" font-size="9" font-weight="bold">try: (ঝুঁকিপূর্ণ কোড)</text>
    <text x="280" y="50" text-anchor="middle" fill="#9a93b8" font-size="7" font-family="monospace">data = api.get(url)</text>
    <!-- excepts -->
    <text x="280" y="75" text-anchor="middle" fill="#f06292" font-size="8" font-weight="bold">Error হলে ↓</text>
    <rect x="20" y="85" width="160" height="30" rx="5" fill="rgba(240,98,146,0.06)" stroke="#f06292" stroke-width="1"/>
    <text x="100" y="104" text-anchor="middle" fill="#f06292" font-size="7" font-family="monospace">except JSONDecodeError</text>
    <rect x="190" y="85" width="160" height="30" rx="5" fill="rgba(240,98,146,0.06)" stroke="#f06292" stroke-width="1"/>
    <text x="270" y="104" text-anchor="middle" fill="#f06292" font-size="7" font-family="monospace">except ConnectionError</text>
    <rect x="360" y="85" width="180" height="30" rx="5" fill="rgba(240,98,146,0.06)" stroke="#f06292" stroke-width="1"/>
    <text x="450" y="104" text-anchor="middle" fill="#f06292" font-size="7" font-family="monospace">except TimeoutError</text>
    <!-- specific handling -->
    <text x="100" y="130" text-anchor="middle" fill="#9a93b8" font-size="6">log + raise</text>
    <text x="270" y="130" text-anchor="middle" fill="#9a93b8" font-size="6">retry 3x</text>
    <text x="450" y="130" text-anchor="middle" fill="#9a93b8" font-size="6">use cache</text>
    <!-- finally -->
    <rect x="200" y="150" width="160" height="30" rx="6" fill="rgba(45,212,191,0.08)" stroke="#2dd4bf" stroke-width="2"/>
    <text x="280" y="168" text-anchor="middle" fill="#2dd4bf" font-size="9" font-weight="bold">finally: (সবসময় চলে)</text>
    <text x="280" y="178" text-anchor="middle" fill="#9a93b8" font-size="6">cleanup — close files, connections</text>
    <!-- Rules -->
    <rect x="20" y="195" width="520" height="50" rx="6" fill="rgba(240,98,146,0.04)" stroke="rgba(240,98,146,0.15)" stroke-width="1"/>
    <text x="280" y="213" text-anchor="middle" fill="#f06292" font-size="8" font-weight="bold">⚠️ bare except = silent death। নির্দিষ্ট exception ধরো।</text>
    <text x="280" y="227" text-anchor="middle" fill="#9a93b8" font-size="7">except ValueError / except JSONDecodeError / except ConnectionError</text>
    <text x="280" y="239" text-anchor="middle" fill="#9a93b8" font-size="7">handle করতে পারলে handle করো, না পারলে raise করো — swallow কোরো না</text>
  </svg>
  <div class="diag-cap">try (ঝুঁকি) → except (নির্দিষ্ট error ধরো) → finally (cleanup)। bare except = silent death।</div>
</div>

<div class="dialogue">শিফা — আরোগ্য, নিরাময়। কুরআনে আল্লাহ বলেন — আমরা কুরআনকে নাজিল করেছি যা আরোগ্য ও রহমত (১৭:৮২)। শিফা হলো রোগ চিনে সঠিক ওষুধ দেওয়া। error handling হলো শিফা — নির্দিষ্ট error চিনো, সঠিক মোকাবিলা করো। bare except = অজ্ঞ চিকিৎসক, সব রোগে এক ওষুধ।</div>
<div class="dialogue en">Shifa — healing, cure. Allah says — We send down the Quran as healing and mercy (17:82). Shifa is identifying the disease and giving the right medicine. Error handling is shifa — identify the specific error, give the right response. Bare except = ignorant doctor, one medicine for all diseases.</div>

<div class="secret-box">🏥 try/except/finally। নির্দিষ্ট exception ধরো (ValueError, not bare except)। handle বা raise — swallow কোরো না। finally = cleanup।</div>
`,
  senior:{
    title:"Error Handling — Senior Notes",
    body:`<table class="kv-table">
<tr><th>Pattern</th><th>Use Case</th></tr>
<tr><td class="hl">except SpecificError</td><td>নির্দিষ্ট error — correct handling</td></tr>
<tr><td class="hl">except (A, B) as e</td><td>একাধিক error একসাথে</td></tr>
<tr><td class="hl">finally</td><td>সবসময় চলে — file close, connection cleanup</td></tr>
<tr><td class="hl">raise ValueError(msg)</td><td>নতুন error তৈরি</td></tr>
<tr><td class="hl">class MyError(Exception)</td><td>custom exception — self-documenting</td></tr>
</table>
<p><strong>Cross-ref:</strong> Book 52 (Code Craftsman) Door 17-এ error handling principles দেখবে। Book 47 (Testing & QA)-এ exception testing দেখবে।</p>`
  }
});

// ── GUILD 8: GUILD COUNCIL — MODULES & PACKAGES ──
doors.push({
  num:8, icon:"🏛️", color:"#2dd4bf", name:"গিল্ড পরিষদ",
  subtitle:"The Guild Council", tech:"Modules & Packages — Organizing Code",
  spirit:"জামাআ — assembly/community, from Quran 3:103 (Hold firmly together)",
  secret:"Module = এক file, এক দায়িত্ব। Package = folder-এ একাধিক module। import দিয়ে অন্যের কোড ব্যবহার করো। ৫০ file-এর project-এ সব এক file-ে নয় — ভাগ করো, সংগঠিত করো।",
  recall:{
    q:"module ও package-এর পার্থক্য কী? import-এর ৩টি উপায় কী?",
    qen:"Difference between module and package? 3 ways to import?",
    a:"module = .py file (utils.py)। package = folder-এ __init__.py সহ একাধিক module। import উপায়: 1) import math 2) from math import sqrt 3) import numpy as np (alias)।",
    aen:"module = .py file. package = folder with __init__.py containing modules. Import: import X, from X import Y, import X as alias."
  },
  story:`
<p class="scene-setting">অষ্টম গিল্ড। গিল্ড পরিষদের কক্ষ। বড় টেবিল, চারপাশে চেয়ার, দেয়ালে প্রতিটা গিল্ডের পতাকা। পরিষদের প্রধান ইউসুফ বললেন — "একা এক গিল্ডে সব কাজ করা যায় না। প্রতিটা গিল্ডের নিজস্ব দক্ষতা। এক গিল্ড অন্যের কাজ ব্যবহার করে। Python-ে এটাই module — এক file-এর কোড, অন্য file থেকে import করো। চলো একটা একটা করে শিখি।"</p>
<p class="scene-setting en">Eighth guild. The Council Chamber. Large table, chairs around it, each guild's banner on the walls. Council head Yusuf said — "One guild cannot do all work alone. Each guild has its own skill. One guild uses another's work. In Python, this is a module — code in one file, imported from another. Let's learn step by step."</p>

<div class="dialogue">প্রথম প্রশ্ন: তুমি ১০০০ লাইন কোড এক file-এ লিখেছ। একটা function খুঁজতে পুরো file scroll করতে হয়। কষ্ট? সমাধান: ভাগ করো। প্রতিটা বিষয় আলাদা file-এ। database.py, auth.py, utils.py। import দিয়ে যুক্ত করো। এটাই module।</div>
<div class="dialogue en">First question: you wrote 1000 lines of code in one file. Finding a function means scrolling the whole file. Painful? Solution: split it. Each topic in its own file. database.py, auth.py, utils.py. Connect with import. This is a module.</div>

<div class="code-block"># ── STEP 1: What is a module? ──
# A module is just a .py FILE.
# Any Python file can be imported by another file.
# This lets you REUSE code across files.

# If you have a file called math_helpers.py:
# ================================
# math_helpers.py
# ================================
# def add(a, b):
#     return a + b
#
# def multiply(a, b):
#     return a * b
#
# PI = 3.14159

# You can use it from ANOTHER file (main.py):
# ================================
# main.py (in the same folder)
# ================================
import math_helpers    # import the whole module

result = math_helpers.add(5, 3)       # use module.function_name
area = math_helpers.PI * 5 * 5        # use module.variable
print(result)  # 8
print(area)    # 78.54...

# That's it! import + module_name.function()</div>

<div class="code-block"># ── STEP 2: Three ways to import ──
# Python gives you flexibility. Know all three.

# Way 1: import the WHOLE module:
import math
print(math.sqrt(16))    # 4.0 (module.function)
print(math.pi)          # 3.14159... (module.variable)

# Way 2: import SPECIFIC things (PREFERRED for clarity):
from math import sqrt, pi
print(sqrt(16))         # 4.0 (no module prefix needed)
print(pi)               # 3.14159...

# Way 3: import with ALIAS (for long module names):
import numpy as np      # everyone uses 'np' for numpy
import pandas as pd     # everyone uses 'pd' for pandas
arr = np.array([1, 2, 3])

# Which to use?
# - import X       → when you need many things from the module
# - from X import Y → when you need just 1-2 specific things
# - import X as Y   → when the name is long (numpy → np)</div>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>ভুলের গল্প:</strong> ইউসুফ বললেন — এক টিম <code>from utils import *</code> দিলো। সব function একসাথে এলো। নাম দ্বন্দ্র — utils-এর clean() ও অন্য clean() একই নামে। কোনটা কোনটা বোঝা গেলো না। import * নিষিদ্ধ — নির্দিষ্ট import করো: from utils import clean_email।</div></div>

<div class="code-block"># ── STEP 3: Python's Standard Library — free tools ──
# Python comes with HUNDREDS of built-in modules. No install needed!

import math          # math functions
print(math.sqrt(16))    # 4.0
print(math.ceil(3.2))   # 4 (round up)
print(math.floor(3.8))  # 3 (round down)

import random        # random numbers
print(random.randint(1, 100))   # random integer 1-100
print(random.choice(["a", "b", "c"]))  # random item from list

import datetime      # dates and times
now = datetime.datetime.now()
print(now)               # 2024-01-15 14:30:25.123456
print(now.strftime("%Y-%m-%d"))  # 2024-01-15

import os            # operating system (files, paths)
print(os.getcwd())       # current working directory
print(os.listdir("."))   # list files in current folder

import json          # JSON (we saw this in Door 6)
import csv           # CSV files
import re            # regular expressions (we saw this in Door 5)
import pathlib       # modern file paths

# You don't need to memorize all — just know they exist!
# When you need something, search "python [topic] module".</div>

<div class="code-block"># ── STEP 4: Third-party packages with pip ──
# Python has a HUGE ecosystem of external packages.
# Install them with pip (Python's package manager).

# In your terminal (NOT in Python):
# pip install requests        # HTTP client (for APIs)
# pip install pandas           # data analysis
# pip install numpy            # numerical computing
# pip install flask            # web framework
# pip install pytest           # testing

# Then import in your code:
import requests      # for making HTTP requests
import pandas as pd  # for data analysis
import numpy as np   # for math on arrays

# Check what's installed:
# pip list          → shows all installed packages
# pip show requests → details about a specific package

# ── requirements.txt: sharing dependencies ──
# When you share your project, others need the same packages.
# Save the list:
# pip freeze > requirements.txt    → saves all package versions
# pip install -r requirements.txt  → installs everything from file

# A requirements.txt looks like:
# requests==2.31.0
# pandas==2.1.4
# numpy==1.26.2
# flask==3.0.0</div>

<div class="code-block"># ── STEP 5: Creating your own module ──
# Let's build a real project with multiple files.

# ===================================
# File 1: utils.py (our custom module)
# ===================================
def clean_email(raw: str) -> str:
    """Clean a messy email address."""
    return raw.strip().lower()

def format_name(name: str) -> str:
    """Capitalize each word in a name."""
    return name.strip().title()

def is_valid_email(email: str) -> bool:
    """Check if email has @ and a domain."""
    return "@" in email and "." in email.split("@")[-1]

# ===================================
# File 2: main.py (uses the module)
# ===================================
# from utils import clean_email, format_name, is_valid_email

raw = "  FATIMA@MAIL.COM  "
email = clean_email(raw)
print(email)              # fatima@mail.com
print(is_valid_email(email))  # True

name = format_name("ahmed rahman")
print(name)               # Ahmed Rahman</div>

<div class="code-block"># ── STEP 6: Packages — folders of modules ──
# When your project grows, group related modules into PACKAGES.
# A package is just a FOLDER with an __init__.py file.

# Project structure:
# my_app/
#   main.py               ← entry point
#   utils/                 ← a PACKAGE (folder)
#     __init__.py          ← marks this folder as a package (can be empty)
#     strings.py           ← string helpers
#     dates.py             ← date helpers
#     validators.py        ← validation helpers
#   database/
#     __init__.py
#     models.py            ← data models
#     queries.py           ← database queries

# Import from a package:
from utils.strings import clean_email, format_name
from utils.validators import is_valid_email
from database.models import User

# The dot (.) shows the folder hierarchy:
# utils.strings = utils folder → strings.py file

# __init__.py can be EMPTY — it just tells Python
# "this folder is a package, you can import from it."

# In modern Python (3.3+), __init__.py is optional,
# but it's still a good practice to include it.</div>

<div class="code-block"># ── STEP 7: __name__ == "__main__" ──
# This pattern controls what runs when a file is imported vs run directly.

# In my_module.py:
def greet(name):
    return f"Hello, {name}!"

def test_greet():
    """Test function — only for development."""
    assert greet("Fatima") == "Hello, Fatima!"
    print("All tests passed!")

# This line makes tests run ONLY when you run the file directly:
if __name__ == "__main__":
    # This runs when you type: python my_module.py
    # But does NOT run when another file does: import my_module
    test_greet()

# How it works:
# When you run 'python my_module.py' directly:
#   __name__ is set to "__main__" → the if block runs
# When another file does 'import my_module':
#   __name__ is set to "my_module" → the if block is skipped

# This lets you:
# 1. Put tests in the same file as your code
# 2. Run tests directly without polluting imports
# 3. Have a module that's also a standalone script</div>

<div class="code-block"># ── STEP 8: Virtual environments (venv) ──
# PROBLEM: Project A needs Django 4. Project B needs Django 5.
# If both install globally — CONFLICT!

# SOLUTION: Virtual environments — isolated Python per project.
# Each project has its own packages. No conflicts.

# ── Creating a virtual environment ──
# In your terminal (NOT in Python):

# Step 1: Create the venv (one-time):
# python -m venv .venv

# Step 2: Activate it (every time you work on the project):
# Linux/Mac:   source .venv/bin/activate
# Windows:     .venv\Scripts\activate

# Step 3: Install packages (they go INTO the venv, not globally):
# pip install requests pandas flask

# Step 4: Save dependencies:
# pip freeze > requirements.txt

# Step 5: Deactivate when done:
# deactivate

# ── New machine setup ──
# When someone downloads your project:
# python -m venv .venv              # create venv
# source .venv/bin/activate         # activate
# pip install -r requirements.txt   # install all dependencies
# Ready to run!

# ⚠️ Always add .venv/ to .gitignore — don't commit the venv folder!</div>

<div class="code-block"># ── STEP 9: Real project structure ──
# Here's how a real Python project looks:

# my_project/
# ├── .venv/                    ← virtual environment (gitignored)
# ├── .gitignore                ← files to exclude from git
# ├── requirements.txt          ← package dependencies
# ├── README.md                 ← project documentation
# ├── main.py                   ← entry point
# ├── config.py                 ← configuration
# ├── utils/                    ← utility package
# │   ├── __init__.py
# │   ├── strings.py
# │   └── validators.py
# ├── database/                 ← database package
# │   ├── __init__.py
# │   ├── models.py
# │   └── queries.py
# └── tests/                    ← test package
#     ├── __init__.py
#     ├── test_strings.py
#     └── test_validators.py

# main.py imports from packages:
# from utils.strings import clean_email
# from database.models import User
# from database.queries import find_user

# .gitignore content:
# .venv/
# __pycache__/
# *.pyc
# .env

# This structure scales from 100 lines to 100,000 lines.</div>

<div class="code-block"># ── STEP 10: The golden rules of modules ──
# Follow these and your code stays organized.

# RULE 1: One file = one RESPONSIBILITY
# ❌ Don't put database, email, and API code in one file
# ✅ database.py (DB only), emailer.py (email only), api.py (routes)

# RULE 2: Use SPECIFIC imports
# ❌ from utils import *        (namespace pollution)
# ✅ from utils import clean_email, format_name  (clear)

# RULE 3: Use __name__ guard for test code
if __name__ == "__main__":
    run_tests()  # only runs when file is executed directly

# RULE 4: ALWAYS use virtual environments
# Each project gets its own isolated packages

# RULE 5: Save dependencies to requirements.txt
# pip freeze > requirements.txt
# Others can reproduce your exact setup

# RULE 6: Group related modules into packages (folders)
# utils/ for helpers, database/ for DB, tests/ for tests

# Summary:
# ┌──────────────────┬──────────────────────────────────┐
# │ Term             │ Meaning                          │
# ├──────────────────┼──────────────────────────────────┤
# │ Module           │ A .py file                       │
# │ Package          │ A folder of modules              │
# │ import X         │ Use module X                     │
# │ from X import Y  │ Use specific Y from module X     │
# │ import X as Y    │ Use X with a shorter name Y      │
# │ pip install X    │ Download a third-party package   │
# │ venv             │ Isolated environment per project │
# └──────────────────┴──────────────────────────────────┘</div>

<div class="diagram">
  <div class="diag-title">Project Structure — এক file থেকে অনেক module</div>
  <svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg">
    <!-- Before: monolith -->
    <rect x="20" y="20" width="160" height="80" rx="8" fill="rgba(240,98,146,0.06)" stroke="#f06292" stroke-width="2"/>
    <text x="100" y="40" text-anchor="middle" fill="#f06292" font-size="9" font-weight="bold">❌ Monolith</text>
    <text x="100" y="58" text-anchor="middle" fill="#9a93b8" font-size="8" font-family="monospace">main.py</text>
    <text x="100" y="72" text-anchor="middle" fill="#9a93b8" font-size="7">5000 lines</text>
    <text x="100" y="86" text-anchor="middle" fill="#9a93b8" font-size="7">Everything in one file</text>
    <text x="100" y="100" text-anchor="middle" fill="#f06292" font-size="6">bug খুঁজতে দিন যায়</text>
    <!-- Arrow -->
    <line x1="190" y1="60" x2="240" y2="60" stroke="#34d399" stroke-width="2"/>
    <text x="215" y="53" text-anchor="middle" fill="#34d399" font-size="8" font-weight="bold">split</text>
    <!-- After: modules -->
    <rect x="250" y="20" width="290" height="80" rx="8" fill="rgba(45,212,191,0.06)" stroke="#2dd4bf" stroke-width="2"/>
    <text x="395" y="38" text-anchor="middle" fill="#2dd4bf" font-size="9" font-weight="bold">✅ Modular</text>
    <rect x="260" y="48" width="80" height="20" rx="4" fill="rgba(52,211,153,0.06)" stroke="#34d399" stroke-width="1"/>
    <text x="300" y="62" text-anchor="middle" fill="#34d399" font-size="7" font-family="monospace">main.py</text>
    <rect x="345" y="48" width="80" height="20" rx="4" fill="rgba(52,211,153,0.06)" stroke="#34d399" stroke-width="1"/>
    <text x="385" y="62" text-anchor="middle" fill="#34d399" font-size="7" font-family="monospace">database.py</text>
    <rect x="430" y="48" width="80" height="20" rx="4" fill="rgba(52,211,153,0.06)" stroke="#34d399" stroke-width="1"/>
    <text x="470" y="62" text-anchor="middle" fill="#34d399" font-size="7" font-family="monospace">auth.py</text>
    <rect x="260" y="73" width="80" height="20" rx="4" fill="rgba(52,211,153,0.06)" stroke="#34d399" stroke-width="1"/>
    <text x="300" y="87" text-anchor="middle" fill="#34d399" font-size="7" font-family="monospace">api.py</text>
    <rect x="345" y="73" width="80" height="20" rx="4" fill="rgba(52,211,153,0.06)" stroke="#34d399" stroke-width="1"/>
    <text x="385" y="87" text-anchor="middle" fill="#34d399" font-size="7" font-family="monospace">utils/</text>
    <text x="470" y="87" text-anchor="middle" fill="#9a93b8" font-size="6">each ~200 lines</text>
    <!-- import -->
    <rect x="20" y="120" width="520" height="50" rx="6" fill="rgba(45,212,191,0.06)" stroke="rgba(45,212,191,0.2)" stroke-width="1"/>
    <text x="280" y="138" text-anchor="middle" fill="#34d399" font-size="8" font-weight="bold">import: অন্য module-এর কোড ব্যবহার করো</text>
    <text x="280" y="153" text-anchor="middle" fill="#9a93b8" font-size="7" font-family="monospace">import database · from database import save · import numpy as np</text>
    <text x="280" y="163" text-anchor="middle" fill="#f06292" font-size="6">❌ from X import * — namespace pollution</text>
    <!-- pip -->
    <rect x="20" y="185" width="520" height="50" rx="6" fill="rgba(251,191,36,0.04)" stroke="rgba(251,191,36,0.15)" stroke-width="1"/>
    <text x="280" y="203" text-anchor="middle" fill="#fbbf24" font-size="8" font-weight="bold">pip: Third-party packages</text>
    <text x="280" y="218" text-anchor="middle" fill="#9a93b8" font-size="7">pip install requests pandas numpy flask django fastapi</text>
    <text x="280" y="228" text-anchor="middle" fill="#9a93b8" font-size="7">requirements.txt-এ লেখো → নতুন মেশিনে pip install -r requirements.txt</text>
  </svg>
  <div class="diag-cap">Monolith → modules। এক file = এক দায়িত্ব। from X import Y (specific)। import * নিষিদ্ধ।</div>
</div>

<div class="dialogue">জামাআ — সমাবেশ, একত্র হওয়া। কুরআনে আল্লাহ বলেন — আল্লাহর রজ্জুকে সবাই মজবুতভাবে ধরো (৩:১০৩)। জামাআ হলো একা নয়, একত্র — প্রতিটা অংশ আলাদা কিন্তু সংযুক্ত। Module-ও জামাআ — প্রতিটা file আলাদা, কিন্তু import দিয়ে সংযুক্ত। একা file = দুর্বল। সংগঠিত modules = শক্তিশালী।</div>
<div class="dialogue en">Jamaa — assembly, coming together. Allah says — hold firmly together (3:103). Jamaa is not alone, but together — each part separate yet connected. Modules are jamaa — each file separate, connected by import. One file = weak. Organized modules = strong.</div>

<div class="secret-box">🏛️ module = .py file। package = folder + __init__.py। from X import Y (specific)। import * নিষিদ্ধ। pip install দিয়ে third-party।</div>
`,
  senior:{
    title:"Modules & Packages — Senior Notes",
    body:`<table class="kv-table">
<tr><th>Concept</th><th>Code</th></tr>
<tr><td class="hl">Import module</td><td>import database</td></tr>
<tr><td class="hl">Import function</td><td>from database import save, find_by_id</td></tr>
<tr><td class="hl">Alias</td><td>import numpy as np</td></tr>
<tr><td class="hl">Package</td><td>folder + __init__.py</td></tr>
<tr><td class="hl">Script guard</td><td>if __name__ == "__main__":</td></tr>
</table>
<p><strong>requirements.txt:</strong> প্রতিটা third-party package-এর নাম + version লেখো। নতুন মেশিনে <code>pip install -r requirements.txt</code> — সব ইনস্টল।</p>
<p><strong>Cross-ref:</strong> Book 52 (Code Craftsman) Door 15-এ abstraction barriers দেখবে। Book 40 (Software Engineering)-এ architecture দেখবে।</p>`
  }
});

// ── GUILD 9: ARCHITECT'S STUDIO — OOP ──
doors.push({
  num:9, icon:"🏗️", color:"#34d399", name:"স্থপতির স্টুডিও",
  subtitle:"The Architect's Studio", tech:"OOP — Classes, Objects, Inheritance",
  spirit:"খলিফাহ — steward/representative, from Quran 2:30 (I will create a vicegerent on earth)",
  secret:"Class = নকশা (blueprint)। Object = বাস্তব সৃষ্টি (instance)। একটা Task class থেকে হাজার task object। Encapsulation (লুকাও), Inheritance (উত্তরাধিকার), Polymorphism (বহুরূপ)। OOP = বাস্তব জগতকে কোডে মডেল করা।",
  recall:{
    q:"class ও object-এর পার্থক্য কী? __init__ কী করে?",
    qen:"Difference between class and object? What does __init__ do?",
    a:"class = নকশা (blueprint)। object = নকশা থেকে তৈরি বাস্তব (instance)। __init__ = constructor — object তৈরির সময় প্রথম কাজ, attribute সেট করে। class Task: → task1 = Task(title='Buy milk')।",
    aen:"class = blueprint. object = instance from blueprint. __init__ = constructor — sets attributes when object is created."
  },
  story:`
<p class="scene-setting">নবম গিল্ড। স্থপতির স্টুডিও। নকশার কাগজ, মাপকাঠি, কাঠের মডেল। স্থপতি রিয়াদ একটা বাড়ির নকশা দেখাচ্ছেন। "এটা নকশা — একটা কাগজ," তিনি বলেন। "এই নকশা থেকে আমি ১০০টা বাড়ি বানাতে পারি। প্রতিটা বাড়ি আলাদা — কিন্তু নকশা এক। Python-এ এটাই class — একটা নকশা থেকে অনেক object। চলো একটা একটা করে শিখি।"</p>
<p class="scene-setting en">Ninth guild. Architect's Studio. Blueprint paper, measuring tools, wooden models. Architect Riyad shows a house blueprint. "This is the blueprint — a piece of paper," he says. "From this blueprint I can build 100 houses. Each house is different — but the blueprint is one. In Python, this is a class — one blueprint, many objects. Let's learn step by step."</p>

<div class="dialogue">প্রথম প্রশ্ন: তুমি ১০০ জন কর্মীর তথ্য dict-এ রেখেছ। প্রতিটার bonus হিসাব আলাদা আলাদা function দিয়ে করছ। ১০০টা dict + ১০০ বার function call। কষ্ট? সমাধান: Employee class। এক নকশা, ১০০ object, একই method।</div>
<div class="dialogue en">First question: you stored 100 employees in dicts. Calculating bonus with separate functions. 100 dicts + 100 function calls. Painful? Solution: Employee class. One blueprint, 100 objects, one method.</div>

<div class="code-block"># ── STEP 1: The problem — why classes exist ──
# Without classes: you use dicts for everything.

# Two employees as dicts:
emp1 = {"name": "Fatima", "salary": 50000, "title": "Engineer"}
emp2 = {"name": "Ahmed", "salary": 60000, "title": "Manager"}

# Calculate bonus? Need a SEPARATE function:
def calculate_bonus(employee, rate=0.10):
    return employee["salary"] * rate

print(calculate_bonus(emp1))  # 5000.0
print(calculate_bonus(emp2))  # 6000.0

# Problem: the DATA (dict) and BEHAVIOR (function) are SEPARATE.
# If you add a new field, you must update every function.
# Class solves this: DATA + BEHAVIOR together in one unit.</div>

<div class="code-block"># ── STEP 2: Your first class ──
# A class is a BLUEPRINT. It defines:
#   - What data an object holds (attributes)
#   - What an object can DO (methods)

# Define the simplest class:
class Dog:
    """A simple dog class."""

# Create objects (instances) from the blueprint:
dog1 = Dog()
dog2 = Dog()

print(type(dog1))  # <class '__main__.Dog'>
print(dog1 == dog2)  # False (different objects)

# Right now, all dogs are empty. Let's add data.</div>

<div class="code-block"># ── STEP 3: __init__ — the constructor ──
# __init__ is a SPECIAL method that runs when you create an object.
# It sets up the object's initial data (attributes).

class Dog:
    """A dog with a name and age."""

    def __init__(self, name, age):    # self = the object being created
        self.name = name              # set attribute 'name'
        self.age = age                # set attribute 'age'

# Create dogs — pass values to __init__:
dog1 = Dog("Rex", 3)     # __init__ runs with name="Rex", age=3
dog2 = Dog("Buddy", 5)   # __init__ runs with name="Buddy", age=5

# Access attributes with dot notation:
print(dog1.name)    # Rex
print(dog1.age)     # 3
print(dog2.name)    # Buddy

# What is 'self'?
# self = the SPECIFIC object being created/used.
# dog1.name means: "the 'name' attribute of dog1"
# Think of it as: "THIS object's name"

# You can change attributes:
dog1.age = 4    # Rex had a birthday
print(dog1.age)  # 4</div>

<div class="code-block"># ── STEP 4: Methods — what objects DO ──
# Methods are functions INSIDE a class.
# They always have 'self' as the first parameter.

class Dog:
    def __init__(self, name, age):
        self.name = name
        self.age = age
        self.tricks = []    # each dog starts with no tricks

    def bark(self):
        """The dog barks."""
        return f"{self.name} says: Woof!"

    def learn_trick(self, trick):
        """Add a trick to this dog's repertoire."""
        self.tricks.append(trick)
        return f"{self.name} learned {trick}!"

    def show_tricks(self):
        """Show all tricks this dog knows."""
        if self.tricks:
            return f"{self.name} knows: {', '.join(self.tricks)}"
        return f"{self.name} doesn't know any tricks yet."

# Use it:
rex = Dog("Rex", 3)
print(rex.bark())              # Rex says: Woof!
print(rex.learn_trick("sit"))  # Rex learned sit!
print(rex.learn_trick("roll")) # Rex learned roll!
print(rex.show_tricks())       # Rex knows: sit, roll</div>

<div class="code-block"># ── STEP 5: Employee class — the real example ──
# Now let's solve the original problem: 100 employees.

class Employee:
    """Blueprint for employees. Data + behavior together."""

    # Class attribute — shared by ALL employees:
    company = "Python City Inc."

    def __init__(self, name: str, salary: float, title: str):
        # Instance attributes — each employee has their own:
        self.name = name
        self.salary = salary
        self.title = title
        self.email = name.lower().replace(" ", ".") + "@pycity.com"

    def calculate_bonus(self, rate: float = 0.10) -> float:
        """How much bonus does this employee get?"""
        return self.salary * rate

    def promote(self, new_title: str, raise_amount: float):
        """Give this employee a promotion."""
        self.title = new_title
        self.salary += raise_amount

    def __str__(self):
        """How the object looks when printed."""
        return f"{self.name} ({self.title}) - {self.salary:,} taka"

# Create employees — each is independent:
emp1 = Employee("Fatima", 50000, "Engineer")
emp2 = Employee("Ahmed", 60000, "Manager")
emp3 = Employee("Sara", 80000, "Director")

print(emp1)                     # Fatima (Engineer) - 50,000 taka
print(emp1.email)               # fatima@pycity.com
print(emp1.calculate_bonus())   # 5000.0
emp1.promote("Senior Engineer", 10000)
print(emp1)                     # Fatima (Senior Engineer) - 60,000 taka

# Class attribute (shared):
print(emp1.company)  # Python City Inc.
print(emp2.company)  # Python City Inc. (same for all)</div>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>ভুলের গল্প:</strong> রিয়াদ বললেন — এক শিক্ষানবিশ সবকিছু class বানালো — এমনকি একটা সাধারণ function-ও। এটাই over-engineering। class দরকার যখন: data + behavior একসাথে থাকবে। শুধু function হলে class নয়। "সব কিছু class নয় — যেখানে দরকার সেখানে।"</div></div>

<div class="code-block"># ── STEP 6: Special methods (dunder methods) ──
# Methods with __ __ are "special" — Python calls them automatically.
# The most common ones:

class Product:
    def __init__(self, name, price):
        self.name = name
        self.price = price

    def __str__(self):
        """Called by print() and str(). Human-readable."""
        return f"{self.name}: {self.price} taka"

    def __repr__(self):
        """Called by repr() and in lists. Developer-readable."""
        return f"Product(name='{self.name}', price={self.price})"

    def __eq__(self, other):
        """Called by ==. Compare two products."""
        return self.name == other.name and self.price == other.price

p1 = Product("Pen", 20)
p2 = Product("Pen", 20)
p3 = Product("Notebook", 50)

print(p1)           # Pen: 20 taka (uses __str__)
print(repr(p1))     # Product(name='Pen', price=20) (uses __repr__)
print(p1 == p2)     # True (uses __eq__)
print(p1 == p3)     # False

# Other dunder methods:
# __len__()  → called by len(obj)
# __lt__()   → called by obj1 < obj2
# __add__()  → called by obj1 + obj2
# __getitem__() → called by obj[key]</div>

<div class="code-block"># ── STEP 7: Inheritance — extending a class ──
# Inheritance = a NEW class gets everything from an EXISTING class.
# Parent (base) → Child (derived). Child gets parent's attributes + methods.

# Parent class:
class Animal:
    def __init__(self, name, sound):
        self.name = name
        self.sound = sound

    def speak(self):
        return f"{self.name} says {self.sound}!"

# Child class — inherits from Animal:
class Cat(Animal):                    # Cat IS an Animal
    def __init__(self, name):
        super().__init__(name, "Meow")   # call parent's __init__
        self.lives = 9                    # cats have 9 lives!

    def be_grumpy(self):
        return f"{self.name} ignores you."

# Child class 2:
class Dog(Animal):
    def __init__(self, name):
        super().__init__(name, "Woof")
        self.tricks = []

    def learn_trick(self, trick):
        self.tricks.append(trick)

# Use them:
cat = Cat("Whiskers")
dog = Dog("Rex")

print(cat.speak())      # Whiskers says Meow! (inherited from Animal)
print(cat.lives)        # 9 (Cat-specific)
print(cat.be_grumpy())  # Whiskers ignores you.

print(dog.speak())      # Rex says Woof! (inherited)
dog.learn_trick("sit")  # Dog-specific method
print(dog.tricks)       # ['sit']

# 'super()' = call the parent class's method.
# In Cat.__init__, super().__init__(name, "Meow")
# calls Animal.__init__ with name and sound="Meow".</div>

<div class="code-block"># ── STEP 8: Overriding and polymorphism ──
# A child class can CHANGE a parent's method — this is "overriding".
# Different objects can respond to the same method differently — "polymorphism".

class Animal:
    def __init__(self, name):
        self.name = name

    def speak(self):
        return "Some generic sound"

class Dog(Animal):
    def speak(self):           # override parent's speak()
        return f"{self.name}: Woof!"

class Cat(Animal):
    def speak(self):           # override parent's speak()
        return f"{self.name}: Meow!"

class Duck(Animal):
    def speak(self):           # override parent's speak()
        return f"{self.name}: Quack!"

# Polymorphism — same method name, different behavior:
animals = [Dog("Rex"), Cat("Whiskers"), Duck("Donald")]
for animal in animals:
    print(animal.speak())
# Rex: Woof!
# Whiskers: Meow!
# Donald: Quack!

# The SAME method (speak) behaves DIFFERENTLY for each animal.
# This is polymorphism — "many forms" of the same method.

# Employee example — override calculate_bonus:
class Manager(Employee):
    """Managers get 20% bonus instead of 10%."""
    def calculate_bonus(self, rate=0.20):   # override!
        return self.salary * rate</div>

<div class="code-block"># ── STEP 9: @dataclass — the modern shortcut ──
# If your class ONLY holds data (no complex methods),
# use @dataclass. It auto-generates __init__, __str__, __repr__.

from dataclasses import dataclass

# WITHOUT @dataclass (6 lines):
class Task:
    def __init__(self, id, title, status="pending", priority=3):
        self.id = id
        self.title = title
        self.status = status
        self.priority = priority

# WITH @dataclass (4 lines, same result!):
@dataclass
class TaskDC:
    """Auto-generates __init__, __str__, __repr__, __eq__."""
    id: int                    # type hint required
    title: str
    status: str = "pending"    # default value
    priority: int = 3          # default value

task = TaskDC(1, "Learn OOP")
print(task)
# TaskDC(id=1, title='Learn OOP', status='pending', priority=3)

task2 = TaskDC(2, "Build app", priority=1)
print(task2)
# TaskDC(id=2, title='Build app', status='pending', priority=1)

# @dataclass is perfect for:
# - Data containers (configs, records, DTOs)
# - When you don't need complex methods
# - Fast, clean, readable code</div>

<div class="code-block"># ── STEP 10: When to use classes vs functions ──
# OOP is powerful but NOT always needed. Choose wisely.

# USE A CLASS when:
# ✅ Data + behavior go together (Employee has salary + calculate_bonus)
# ✅ You need many instances of the same thing (100 employees)
# ✅ You need inheritance (Manager is-a Employee)
# ✅ State needs to be maintained (bank account balance over time)

# USE A FUNCTION when:
# ✅ Simple operations (add, sort, format)
# ✅ No state needed (pure input → output)
# ✅ One-off calculations

# Example — use FUNCTION for simple math:
def circle_area(radius):
    return 3.14159 * radius ** 2
# No need for a Circle class just for this.

# Example — use CLASS for a bank account:
class BankAccount:
    def __init__(self, owner, balance=0):
        self.owner = owner
        self.balance = balance
        self.transactions = []

    def deposit(self, amount):
        self.balance += amount
        self.transactions.append(f"+{amount}")

    def withdraw(self, amount):
        if amount &gt; self.balance:
            raise ValueError("Insufficient funds")
        self.balance -= amount
        self.transactions.append(f"-{amount}")

    def statement(self):
        return f"{self.owner}: {self.balance} taka"

# Use:
account = BankAccount("Fatima", 1000)
account.deposit(500)
account.withdraw(200)
print(account.statement())  # Fatima: 1300 taka

# OOP = modeling the REAL WORLD in code.
# Think: "What THINGS exist in my problem? What do they DO?"</div>

<div class="diagram">
  <div class="diag-title">Class → Object — নকশা থেকে সৃষ্টি</div>
  <svg viewBox="0 0 560 260" xmlns="http://www.w3.org/2000/svg">
    <!-- Blueprint -->
    <rect x="20" y="20" width="180" height="120" rx="8" fill="rgba(45,212,191,0.1)" stroke="#2dd4bf" stroke-width="2.5"/>
    <text x="110" y="40" text-anchor="middle" fill="#2dd4bf" font-size="11" font-weight="bold">CLASS</text>
    <text x="110" y="55" text-anchor="middle" fill="#9a93b8" font-size="7">(নকশা / Blueprint)</text>
    <text x="35" y="75" fill="#34d399" font-size="7" font-family="monospace">class Employee:</text>
    <text x="35" y="90" fill="#9a93b8" font-size="7" font-family="monospace">  name</text>
    <text x="35" y="102" fill="#9a93b8" font-size="7" font-family="monospace">  salary</text>
    <text x="35" y="114" fill="#9a93b8" font-size="7" font-family="monospace">  title</text>
    <text x="35" y="126" fill="#9a93b8" font-size="7" font-family="monospace">  bonus()</text>
    <text x="35" y="138" fill="#9a93b8" font-size="7" font-family="monospace">  promote()</text>
    <!-- Arrows -->
    <line x1="200" y1="50" x2="260" y2="30" stroke="#34d399" stroke-width="1.5"/>
    <line x1="200" y1="80" x2="260" y2="80" stroke="#34d399" stroke-width="1.5"/>
    <line x1="200" y1="110" x2="260" y2="130" stroke="#34d399" stroke-width="1.5"/>
    <!-- Objects -->
    <rect x="260" y="15" width="130" height="40" rx="6" fill="rgba(82,196,26,0.08)" stroke="#52c41a" stroke-width="1.5"/>
    <text x="325" y="30" text-anchor="middle" fill="#52c41a" font-size="8" font-weight="bold">OBJECT 1</text>
    <text x="325" y="44" text-anchor="middle" fill="#9a93b8" font-size="7">Fatima, 50k, Engineer</text>
    <rect x="260" y="65" width="130" height="40" rx="6" fill="rgba(82,196,26,0.08)" stroke="#52c41a" stroke-width="1.5"/>
    <text x="325" y="80" text-anchor="middle" fill="#52c41a" font-size="8" font-weight="bold">OBJECT 2</text>
    <text x="325" y="94" text-anchor="middle" fill="#9a93b8" font-size="7">Ahmed, 60k, Manager</text>
    <rect x="260" y="115" width="130" height="40" rx="6" fill="rgba(82,196,26,0.08)" stroke="#52c41a" stroke-width="1.5"/>
    <text x="325" y="130" text-anchor="middle" fill="#52c41a" font-size="8" font-weight="bold">OBJECT 3</text>
    <text x="325" y="144" text-anchor="middle" fill="#9a93b8" font-size="7">Sara, 80k, Director</text>
    <!-- Inheritance -->
    <rect x="410" y="40" width="130" height="100" rx="8" fill="rgba(167,139,250,0.08)" stroke="#a78bfa" stroke-width="2"/>
    <text x="475" y="58" text-anchor="middle" fill="#a78bfa" font-size="9" font-weight="bold">INHERITANCE</text>
    <text x="475" y="75" text-anchor="middle" fill="#9a93b8" font-size="7">Manager(Employee)</text>
    <text x="475" y="90" text-anchor="middle" fill="#9a93b8" font-size="6">inherit: name, salary</text>
    <text x="475" y="103" text-anchor="middle" fill="#9a93b8" font-size="6">add: department, team</text>
    <text x="475" y="116" text-anchor="middle" fill="#9a93b8" font-size="6">override: bonus()</text>
    <text x="475" y="132" text-anchor="middle" fill="#a78bfa" font-size="6" font-weight="bold">= Specialized version</text>
    <!-- Bottom -->
    <rect x="20" y="165" width="520" height="80" rx="6" fill="rgba(45,212,191,0.06)" stroke="rgba(45,212,191,0.2)" stroke-width="1"/>
    <text x="280" y="183" text-anchor="middle" fill="#34d399" font-size="8" font-weight="bold">OOP এর ৪ স্তম্ভ</text>
    <text x="120" y="203" text-anchor="middle" fill="#9a93b8" font-size="7">Encapsulation</text>
    <text x="120" y="215" text-anchor="middle" fill="#9a93b8" font-size="6">data লুকাও</text>
    <text x="260" y="203" text-anchor="middle" fill="#9a93b8" font-size="7">Inheritance</text>
    <text x="260" y="215" text-anchor="middle" fill="#9a93b8" font-size="6">গুণ উত্তরাধিকার</text>
    <text x="400" y="203" text-anchor="middle" fill="#9a93b8" font-size="7">Polymorphism</text>
    <text x="400" y="215" text-anchor="middle" fill="#9a93b8" font-size="6">বহুরূপ</text>
    <text x="480" y="203" text-anchor="middle" fill="#9a93b8" font-size="7">Abstraction</text>
    <text x="480" y="215" text-anchor="middle" fill="#9a93b8" font-size="6">interface</text>
    <text x="280" y="235" text-anchor="middle" fill="#fbbf24" font-size="7">@dataclass = shortcut (Python 3.7+)</text>
  </svg>
  <div class="diag-cap">Class = নকশা, Object = সৃষ্টি। Inheritance = বিশেষায়িত সংস্করণ। @dataclass = shortcut।</div>
</div>

<div class="dialogue">খলিফাহ — প্রতিনিধি, স্থানীয় শাসক। কুরআনে আল্লাহ বলেন — আমি পৃথিবীতে একজন প্রতিনিধি সৃষ্টি করবো (২:৩০)। খলিফাহ হলো নকশা থেকে সৃষ্টি — এক আদিম নকশা, অনেক প্রতিনিধি। class থেকে object সৃষ্টি — এক blueprint, অনেক instance। প্রতিটা instance আলাদা, কিন্তু একই গঠন।</div>
<div class="dialogue en">Khalifah — representative, steward. Allah says — I will create a vicegerent on earth (2:30). Khalifah is creation from blueprint — one original design, many representatives. Objects are created from classes — one blueprint, many instances. Each instance is unique, yet shares the same structure.</div>

<div class="secret-box">🏗️ class = নকশা, object = সৃষ্টি। __init__ = constructor। Inheritance = বিশেষায়িত। @dataclass = shortcut। data + behavior একসাথে হলে class।</div>
`,
  senior:{
    title:"OOP — Senior Notes",
    body:`<table class="kv-table">
<tr><th>Concept</th><th>Code</th></tr>
<tr><td class="hl">Class</td><td>class Employee: ...</td></tr>
<tr><td class="hl">Constructor</td><td>def __init__(self, name): self.name = name</td></tr>
<tr><td class="hl">Method</td><td>def bonus(self): return self.salary * 0.10</td></tr>
<tr><td class="hl">Inheritance</td><td>class Manager(Employee):</td></tr>
<tr><td class="hl">Super call</td><td>super().__init__(name, salary)</td></tr>
<tr><td class="hl">Dataclass</td><td>@dataclass class Task: id: int; title: str</td></tr>
</table>
<p><strong>Cross-ref:</strong> Book 52 (Code Craftsman) Door 9 (OOP patterns), Door 21 (SOLID)। Book 2 (DSA Bazaar)-এ Linked List, Tree class দেখবে।</p>`
  }
});

// ── GUILD 10: GLASS BLOWER — COMPREHENSIONS ──
doors.push({
  num:10, icon:"🔮", color:"#2dd4bf", name:"কাঁচ গলানোর কারখানা",
  subtitle:"The Glass Blower", tech:"Comprehensions — Elegant Data Transformation",
  spirit:"ইখতিসার — brevity/conciseness, from Quran 22:34 (simplification preserving essence)",
  secret:"List/dict/set comprehension = এক লাইনে তালিকা তৈরি। ৫ লাইন for loop → ১ লাইন comprehension। সুন্দর, দ্রুত, Pythonic। [x*2 for x in items if x &gt; 0] — transform + filter একসাথে।",
  recall:{
    q:"List comprehension দিয়ে [1,2,3,4]-এর প্রতিটার বর্গ বানাও। for loop দিয়ে কত লাইন, comprehension দিয়ে কত?",
    qen:"Square each element of [1,2,3,4] using list comprehension. How many lines vs for loop?",
    a:"Comprehension: squares = [x**2 for x in [1,2,3,4]] → [1,4,9,16]। ১ লাইন। for loop: ৪ লাইন (list create, loop, square, append)। Comprehension = elegant + fast।",
    aen:"Comprehension: [x**2 for x in [1,2,3,4]] → 1 line. For loop: 4 lines."
  },
  story:`
<p class="scene-setting">দশম গিল্ড। কাঁচ গলানোর কারখানা। উত্তপ্ত চুল্লির গন্ধ, গলিত কাঁচের উজ্জ্বলতা, হাতুড়ির শব্দ। কাঁচ নির্মাতা সালমা একটা সাধারণ কাঁচের গোলক ধরে আছেন। এক নিঃশ্বাসে সেটাকে সুন্দর ফুলদানিতে পরিণত করেন। "৫ ধাপে নয়," তিনি বলেন, "এক নিঃশ্বাসে। Python comprehension ঠিক তেমনি — ৫ লাইনের কাজ এক লাইনে। চলো একটা একটা করে শিখি।"</p>
<p class="scene-setting en">Tenth guild. The Glass Blower's workshop. Smell of hot furnace, brightness of molten glass, sound of hammers. Glassmaker Salma holds a simple glass sphere. One breath transforms it into a beautiful vase. "Not in 5 steps," she says, "in one breath. Python comprehensions are the same — 5 lines of work in one line. Let's learn step by step."</p>

<div class="dialogue">প্রথম প্রশ্ন: তুমি ১০০০টা সংখ্যা থেকে জোড়গুলো বেছে তাদের বর্গ করছ। for loop দিলে ৫ লাইন। কিন্তু Python-এ একটা সংক্ষিপ্ত উপায় আছে — comprehension। এক লাইনে একই কাজ। সুন্দর, দ্রুত, Pythonic।</div>
<div class="dialogue en">First question: you have 1000 numbers and you want to filter even ones and square them. For loop takes 5 lines. But Python has a shortcut — comprehension. Same work in one line. Beautiful, fast, Pythonic.</div>

<div class="code-block"># ── STEP 1: The problem — 5 lines that can be 1 ──
# Task: take a list, transform each item, create a new list.

numbers = [1, 2, 3, 4, 5]

# The LONG way (for loop):
doubles = []                    # Step 1: create empty list
for n in numbers:               # Step 2: loop through each
    doubles.append(n * 2)       # Step 3: transform + append
print(doubles)                  # [2, 4, 6, 8, 10]

# The SHORT way (list comprehension):
doubles = [n * 2 for n in numbers]
print(doubles)                  # [2, 4, 6, 8, 10]

# Same result! But 3 lines became 1. Cleaner and faster.</div>

<div class="code-block"># ── STEP 2: Anatomy of a comprehension ──
# Learn the PARTS so you can read any comprehension.

result = [n * 2 for n in numbers if n > 2]
#         ^^^^^   ^  ^  ^^^^^^^    ^^^^^^
#         |       |  |  |          |
#         |       |  |  source     condition (optional)
#         |       |  item variable
#         transform (what to do)

# Read it as English:
# "Put (n * 2) in the list, for each n in numbers, if n > 2"

# Without condition (simple transform):
squares = [x ** 2 for x in range(1, 6)]
print(squares)  # [1, 4, 9, 16, 25]

# Without transform (just filter):
evens = [x for x in range(10) if x % 2 == 0]
print(evens)  # [0, 2, 4, 6, 8]

# Both transform AND filter:
even_squares = [x ** 2 for x in range(10) if x % 2 == 0]
print(even_squares)  # [0, 4, 16, 36, 64]</div>

<div class="code-block"># ── STEP 3: List comprehension examples ──
# Practice with different transforms.

# Uppercase all words:
words = ["hello", "world", "python"]
upper = [w.upper() for w in words]
print(upper)  # ['HELLO', 'WORLD', 'PYTHON']

# Get lengths of words:
lengths = [len(w) for w in words]
print(lengths)  # [5, 5, 6]

# Add 1 to each number:
nums = [10, 20, 30]
plus_one = [n + 1 for n in nums]
print(plus_one)  # [11, 21, 31]

# Only positive numbers:
mixed = [-3, 5, -1, 8, -2, 0, 4]
positives = [n for n in mixed if n > 0]
print(positives)  # [5, 8, 4]

# Strings longer than 3 characters:
words = ["hi", "cat", "hello", "ok", "world"]
long_words = [w for w in words if len(w) > 3]
print(long_words)  # ['hello', 'world']</div>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>ভুলের গল্প:</strong> সালমা বললেন — এক শিক্ষানবিশ nested comprehension লিখলো — [[x*y for x in range(10)] for y in range(10)]। কাজ করলো, কিন্তু কেউ পড়তে পারলো না। Comprehension সুন্দর, কিন্তু nested = বিপজ্জনক। নিয়ম: ১-২ level comprehension ঠিক, ৩+ = for loop-এ ফিরে যাও। পঠনযোগ্যতা > সংক্ষিপ্ততা।</div></div>

<div class="code-block"># ── STEP 4: Dict comprehension ──
# Same idea, but creates a DICT instead of a list.
# Use {key: value for item in source}

# Word → length mapping:
words = ["apple", "banana", "cherry"]
word_lengths = {word: len(word) for word in words}
print(word_lengths)
# {'apple': 5, 'banana': 6, 'cherry': 6}

# Reverse a dictionary:
original = {"a": 1, "b": 2, "c": 3}
reversed_dict = {v: k for k, v in original.items()}
print(reversed_dict)
# {1: 'a', 2: 'b', 3: 'c'}

# Prices with 20% tax added:
prices = {"apple": 50, "banana": 30, "cherry": 80}
with_tax = {item: round(price * 1.2) for item, price in prices.items()}
print(with_tax)
# {'apple': 60, 'banana': 36, 'cherry': 96}

# Filter: only items above 40:
expensive = {k: v for k, v in prices.items() if v > 40}
print(expensive)
# {'apple': 50, 'cherry': 80}</div>

<div class="code-block"># ── STEP 5: Set comprehension ──
# Creates a SET (unique items only).
# Use {item for item in source} — no colon!

# Unique first letters of names:
names = ["Alice", "Bob", "Charlie", "Anna", "Brian"]
first_letters = {name[0] for name in names}
print(first_letters)  # {'A', 'B', 'C'} (unique!)

# Remove duplicates from a list:
numbers = [1, 2, 2, 3, 3, 3, 4, 4, 5]
unique = {n for n in numbers}
print(unique)  # {1, 2, 3, 4, 5}

# Word lengths (unique):
sentence = "the cat sat on the mat"
word_lengths = {len(word) for word in sentence.split()}
print(word_lengths)  # {3, 2, 5} (unique lengths)</div>

<div class="code-block"># ── STEP 6: Conditional expression — transform differently ──
# Sometimes you want DIFFERENT transforms for different conditions.
# Use: value_if_true if condition else value_if_false

# Label even/odd:
labels = ["even" if x % 2 == 0 else "odd" for x in range(5)]
print(labels)  # ['even', 'odd', 'even', 'odd', 'even']

# Pass/Fail based on score:
scores = [45, 80, 92, 55, 30]
results = ["Pass" if s >= 60 else "Fail" for s in scores]
print(results)  # ['Fail', 'Pass', 'Pass', 'Fail', 'Fail']

# Positive/Negative/Zero:
nums = [-3, 5, 0, -1, 8]
signs = ["positive" if n > 0 else "negative" if n < 0 else "zero" for n in nums]
print(signs)  # ['negative', 'positive', 'zero', 'negative', 'positive']
# Note: nested ternary gets ugly. Use for loop if complex.</div>

<div class="code-block"># ── STEP 7: Nested comprehension (use carefully) ──
# You CAN nest comprehensions, but readability drops fast.

# 2D — multiplication table (OK, readable):
table = [[x * y for y in range(1, 4)] for x in range(1, 4)]
print(table)
# [[1, 2, 3], [2, 4, 6], [3, 6, 9]]

# Flatten a 2D list:
matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
flat = [num for row in matrix for num in row]
print(flat)  # [1, 2, 3, 4, 5, 6, 7, 8, 9]

# RULE OF THUMB:
# - 1 level comprehension: ALWAYS use it
# - 2 levels: SOMETIMES (if simple)
# - 3+ levels: NEVER — use a for loop instead
# Readability > Brevity

# This is UNREADABLE — don't do it:
# result = [[x*y+z for z in range(3) if z>x] for y in range(3) for x in range(3)]
# Use a regular for loop for complex logic.</div>

<div class="code-block"># ── STEP 8: Generator expression — memory-efficient ──
# A generator expression looks like a comprehension but uses ()
# instead of []. It does NOT create a list — it's LAZY.

# List comprehension — creates full list in memory:
squares_list = [x ** 2 for x in range(1000000)]
# This uses ~8MB of memory!

# Generator expression — computes one at a time:
squares_gen = (x ** 2 for x in range(1000000))
# This uses ~200 bytes! 40000x less memory.

# You can't index a generator, but you can iterate:
for sq in squares_gen:
    if sq > 100:
        break
    print(sq)  # 0, 1, 4, 9, 16, 25, 36, 49, 64, 81, 100

# BEST USE: pass to functions like sum(), max(), min():
total = sum(x ** 2 for x in range(1000000))
print(f"Sum of first million squares: {total:,}")

# Comparison:
# sum([x**2 for x in range(1000000)])  → creates list (8MB)
# sum(x**2 for x in range(1000000))    → no list (200 bytes)
# Always use () inside sum/max/min!</div>

<div class="code-block"># ── STEP 9: Real scenario — process customer data ──
# Comprehensions shine with real data structures.

customers = [
    {"name": "Fatima", "orders": 15, "city": "Dhaka"},
    {"name": "Ahmed", "orders": 3, "city": "Chittagong"},
    {"name": "Sara", "orders": 25, "city": "Dhaka"},
    {"name": "Bob", "orders": 0, "city": "Sylhet"},
]

# 1. VIP customers (Dhaka + 10+ orders):
vip = [c["name"] for c in customers
       if c["city"] == "Dhaka" and c["orders"] >= 10]
print(f"VIP: {vip}")  # ['Fatima', 'Sara']

# 2. All customer names:
names = [c["name"] for c in customers]
print(names)  # ['Fatima', 'Ahmed', 'Sara', 'Bob']

# 3. Name → orders mapping:
orders_map = {c["name"]: c["orders"] for c in customers}
print(orders_map)
# {'Fatima': 15, 'Ahmed': 3, 'Sara': 25, 'Bob': 0}

# 4. Unique cities:
cities = {c["city"] for c in customers}
print(cities)  # {'Dhaka', 'Chittagong', 'Sylhet'}

# 5. Total orders:
total_orders = sum(c["orders"] for c in customers)
print(f"Total orders: {total_orders}")  # 43

# 6. Customers with no orders:
inactive = [c["name"] for c in customers if c["orders"] == 0]
print(f"Inactive: {inactive}")  # ['Bob']</div>

<div class="code-block"># ── STEP 10: When to use comprehension vs for loop ──
# Comprehensions are powerful but NOT always the right choice.

# USE COMPREHENSION when:
# - Simple transform or filter (1-2 conditions)
# - Creating a new list/dict/set from existing data
# - The logic fits in one readable line

# USE FOR LOOP when:
# - Multiple statements per iteration
# - Complex logic with many conditions
# - Side effects (printing, modifying external state)
# - The comprehension would be unreadable

# GOOD comprehension:
squares = [x ** 2 for x in range(10)]
# Clear, one line, obvious.

# BAD comprehension (too complex — use for loop):
# result = [{"name": c["name"], "status": "VIP" if c["orders"]>10 else "regular"}
#           for c in customers if c["city"] in TARGET_CITIES]

# SAME code as for loop (clearer):
result = []
for c in customers:
    if c["city"] in TARGET_CITIES:
        status = "VIP" if c["orders"] > 10 else "regular"
        result.append({"name": c["name"], "status": status})

# RULE: If a beginner can't read it in 5 seconds, use a for loop.

# Summary:
# ┌──────────────────────┬────────────────────────────────┐
# │ Type                 │ Syntax                         │
# ├──────────────────────┼────────────────────────────────┤
# │ List comprehension   │ [x for x in items]             │
# │ Dict comprehension   │ {k: v for k, v in items}       │
# │ Set comprehension    │ {x for x in items}             │
# │ Generator expression │ (x for x in items)             │
# └──────────────────────┴────────────────────────────────┘</div>

<div class="diagram">
  <div class="diag-title">Comprehension — ৫ লাইন → ১ লাইন</div>
  <svg viewBox="0 0 560 220" xmlns="http://www.w3.org/2000/svg">
    <!-- Before: for loop -->
    <rect x="20" y="20" width="250" height="100" rx="8" fill="rgba(240,98,146,0.04)" stroke="#f06292" stroke-width="1.5"/>
    <text x="145" y="38" text-anchor="middle" fill="#f06292" font-size="9" font-weight="bold">❌ For loop (৫ লাইন)</text>
    <text x="35" y="58" fill="#9a93b8" font-size="7" font-family="monospace">result = []</text>
    <text x="35" y="73" fill="#9a93b8" font-size="7" font-family="monospace">for n in numbers:</text>
    <text x="35" y="88" fill="#9a93b8" font-size="7" font-family="monospace">    if n % 2 == 0:</text>
    <text x="35" y="103" fill="#9a93b8" font-size="7" font-family="monospace">        result.append(n**2)</text>
    <!-- Arrow -->
    <line x1="275" y1="70" x2="325" y2="70" stroke="#34d399" stroke-width="2"/>
    <text x="300" y="63" text-anchor="middle" fill="#34d399" font-size="8" font-weight="bold">→</text>
    <!-- After: comprehension -->
    <rect x="330" y="20" width="210" height="100" rx="8" fill="rgba(45,212,191,0.08)" stroke="#2dd4bf" stroke-width="2"/>
    <text x="435" y="38" text-anchor="middle" fill="#2dd4bf" font-size="9" font-weight="bold">✅ Comprehension (১ লাইন)</text>
    <text x="435" y="62" text-anchor="middle" fill="#34d399" font-size="8" font-family="monospace">result = [</text>
    <text x="435" y="77" text-anchor="middle" fill="#34d399" font-size="8" font-family="monospace">n**2 for n in numbers</text>
    <text x="435" y="92" text-anchor="middle" fill="#34d399" font-size="8" font-family="monospace">if n % 2 == 0</text>
    <text x="435" y="107" text-anchor="middle" fill="#34d399" font-size="8" font-family="monospace">]</text>
    <!-- Anatomy -->
    <rect x="20" y="135" width="520" height="70" rx="6" fill="rgba(45,212,191,0.06)" stroke="rgba(45,212,191,0.2)" stroke-width="1"/>
    <text x="280" y="153" text-anchor="middle" fill="#34d399" font-size="8" font-weight="bold">[TRANSFORM for ITEM in SOURCE if CONDITION]</text>
    <text x="110" y="173" text-anchor="middle" fill="#fbbf24" font-size="7">n**2 = what to do</text>
    <text x="280" y="173" text-anchor="middle" fill="#2dd4bf" font-size="7">for n in numbers = source</text>
    <text x="450" y="173" text-anchor="middle" fill="#f06292" font-size="7">if even = filter</text>
    <text x="280" y="192" text-anchor="middle" fill="#9a93b8" font-size="7">list [] · dict {} · set {} · generator ()</text>
    <text x="280" y="202" text-anchor="middle" fill="#9a93b8" font-size="7">nested ৩+ = for loop ব্যবহার করো (readability)</text>
  </svg>
  <div class="diag-cap">[transform for item in source if condition]। ৫ লাইন → ১ লাইন। list, dict, set, generator।</div>
</div>

<div class="dialogue">ইখতিসার — সংক্ষিপ্ততা, সারমর্ম রেখে সংক্ষিপ্ত করা। কুরআনে আল্লাহ বলেন — সংক্ষিপ্ত করা আল্লাহর নিয়ামত (২২:৩৪)। কাঁচ গলানোও ইখতিসার — বিশাল কাঁচের স্তূপ থেকে একটা সুন্দর ফুলদানি। Comprehension হলো ইখতিসার — ৫ লাইনের কাজ এক লাইনে, সৌন্দর্য বজায় রেখে।</div>
<div class="dialogue en">Ikhtisar — brevity, conciseness while preserving essence. Allah says — simplification is a blessing (22:34). Glassblowing is also ikhtisar — a massive pile into one beautiful vase. Comprehension is ikhtisar — 5 lines of work in one, preserving beauty.</div>

<div class="secret-box">🔮 [transform for item in source if condition]। ৫ লাইন → ১ লাইন। list, dict, set, generator। nested ৩+ = for loop।</div>
`,
  senior:{
    title:"Comprehensions — Senior Notes",
    body:`<table class="kv-table">
<tr><th>Type</th><th>Syntax</th><th>Returns</th></tr>
<tr><td class="hl">List</td><td>[x for x in items]</td><td>list</td></tr>
<tr><td class="hl">Dict</td><td>{k: v for k, v in items}</td><td>dict</td></tr>
<tr><td class="hl">Set</td><td>{x for x in items}</td><td>set (unique)</td></tr>
<tr><td class="hl">Generator</td><td>(x for x in items)</td><td>lazy iterator (memory efficient!)</td></tr>
</table>
<p><strong>Performance:</strong> Comprehension ~২০% দ্রুত for loop-এর চেয়ে। Generator = O(1) memory।</p>
<p><strong>Cross-ref:</strong> Book 52 (Code Craftsman) Door 19 (Higher-Order Functions)। map/filter/reduce ও comprehension — একই শক্তি, ভিন্ন syntax।</p>`
  }
});
