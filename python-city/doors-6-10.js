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
<p class="scene-setting">সপ্তম গিল্ড। চিকিৎসকের ক্লিনিক। ভেষজের গন্ধ, পরিষ্কার বিছানা, নীরবতা। চিকিৎসক লায়লা একজন রোগী দেখছেন। "প্রথমে রোগ চিনো," তিনি বলেন। "তারপর ওষুধ দাও। কিন্তু যদি রোগ না চিনো — সব রোগে একই ওষুধ? রোগী মারা যাবে। except-ও তেমনি — নির্দিষ্ট error ধরো, bare except নয়।"</p>
<p class="scene-setting en">Seventh guild. The Healer's clinic. Smell of herbs, clean sheets, silence. Doctor Layla examines a patient. "First identify the disease," she says. "Then give medicine. But if you can't identify — same medicine for everything? The patient dies. Except is the same — catch specific errors, not bare except."</p>

<div class="dialogue">সমস্যা: তুমি একটা API থেকে ডেটা আনছো। কিন্তু — network down, JSON ভুল, server 500, timeout। প্রতিটা error-এ আলাদা মোকাবিলা দরকার। bare except দিলে সব গিলে যাবে — কোনটা ঘটেছে বোঝা যাবে না। নির্দিষ্ট except দিলে — প্রতিটা error-এ সঠিক প্রতিক্রিয়া।</div>
<div class="dialogue en">Problem: Fetching data from an API. But — network down, JSON invalid, server 500, timeout. Each error needs different handling. Bare except swallows all — you can't tell what happened. Specific except — correct response per error.</div>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>ভুলের গল্প:</strong> লায়লা বললেন — একটা production system-ে bare except ছিল। ৩ দিন ধরে database connection fail করছিল, কিন্তু except সেটা গিলে ফেললো। কেউ জানতো না। ৩ দিনের ডেটা হারালো। নির্দিষ্ট except ConnectionError দিলে — সঙ্গে alert আসতো। bare except = নীরব মৃত্যু।</div></div>

<div class="code-block"># guild7_errors.py — Healer's Clinic
# Doctor Layla: "Identify the disease. Then prescribe."

# ── THE PROBLEM: Handle API errors gracefully ──
import json

# ❌ BAD: Bare except — swallows ALL errors
def fetch_data_bad(url):
    try:
        response = make_request(url)
        return json.loads(response)
    except:
        return None  # What error? Network? JSON? Permission? Nobody knows.

# ✅ GOOD: Specific exceptions — each disease, each cure
def fetch_data_good(url):
    try:
        response = make_request(url)
        data = json.loads(response)
        return data

    except json.JSONDecodeError as e:
        # JSON was invalid — log and re-raise
        print(f"Bad JSON from {url}: {e}")
        raise ValueError(f"Invalid JSON: {e}")

    except ConnectionError:
        # Network down — retry with backoff
        print("Network error — retrying...")
        return retry_request(url, max_attempts=3)

    except TimeoutError:
        # Server too slow — use cached data
        print("Timeout — using cache")
        return load_from_cache(url)

    except Exception as e:
        # Unknown error — DON'T swallow, log and raise
        print(f"Unexpected error: {type(e).__name__}: {e}")
        raise  # re-raise — caller must know

    finally:
        # ALWAYS runs — cleanup (close connections, etc.)
        print("Cleanup: closing resources")

# ── RAISING EXCEPTIONS: Report problems ──
def withdraw(account, amount):
    """Raise specific errors for specific problems."""
    if amount &lt;= 0:
        raise ValueError(f"Amount must be positive, got {amount}")
    if amount &gt; account.balance:
        raise ValueError(f"Insufficient funds: {account.balance}")
    account.balance -= amount
    return account.balance

# ── CUSTOM EXCEPTIONS: Self-documenting ──
class TaskError(Exception):
    """Base error for task operations."""
    pass

class TaskNotFoundError(TaskError):
    """Raised when a task ID doesn't exist."""
    pass

class TaskAlreadyDoneError(TaskError):
    """Raised when completing an already-done task."""
    pass

# Usage:
def complete_task(task_id):
    task = find_task(task_id)
    if task is None:
        raise TaskNotFoundError(f"No task with ID {task_id}")
    if task.status == "done":
        raise TaskAlreadyDoneError(f"Task {task_id} already done")
    task.status = "done"

# ── THE GOLDEN RULES ──
# 1. Be specific: except ValueError, NOT except:
# 2. Don't swallow: log and re-raise if you can't handle
# 3. Use finally for cleanup (always runs)
# 4. Create custom exceptions for your domain
# 5. Fail fast — better to crash loudly than silently corrupt</div>

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
<p class="scene-setting">অষ্টম গিল্ড। গিল্ড পরিষদের কক্ষ। বড় টেবিল, চারপাশে চেয়ার, দেয়ালে প্রতিটা গিল্ডের পতাকা। পরিষদের প্রধান ইউসুফ বললেন — "একা এক গিল্ডে সব কাজ করা যায় না। প্রতিটা গিল্ডের নিজস্ব দক্ষতা। এক গিল্ড অন্যের কাজ ব্যবহার করে। Python-এ এটাই module — এক file-এর কোড, অন্য file থেকে import করো।"</p>
<p class="scene-setting en">Eighth guild. The Council Chamber. Large table, chairs around it, each guild's banner on the walls. Council head Yusuf said — "One guild cannot do all work alone. Each guild has its own skill. One guild uses another's work. In Python, this is a module — code in one file, imported from another."</p>

<div class="dialogue">সমস্যা: তোমার project ৫০০০ লাইনের এক file-এ। একটা bug খুঁজতে পুরো file পড়তে হয়। নতুন feature যোগ করতে গেলে conflict। সমাধান: ভাগ করো — database.py, auth.py, api.py, utils.py। প্রতিটা এক module। import করে ব্যবহার করো।</div>
<div class="dialogue en">Problem: Your project is 5,000 lines in one file. Finding a bug means reading everything. Adding a feature causes conflicts. Solution: split — database.py, auth.py, api.py, utils.py. Each a module. Import and use.</div>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>ভুলের গল্প:</strong> ইউসুফ বললেন — এক টিম from utils import * দিলো। সব function একসাথে এলো। নাম দ্বন্দ্ব — utils-এর clean() ও অন্য clean() একই নামে। কোনটা কোনটা বোঝা গেলো না। import * নিষিদ্ধ — নির্দিষ্ট import করো: from utils import clean_email।</div></div>

<div class="code-block"># guild8_modules.py — Guild Council
# Council Head Yusuf: "Each guild has its skill. Import what you need."

# ── THE PROBLEM: 5000 lines in one file → split into modules ──

# ── PROJECT STRUCTURE ──
# my_project/
#   main.py           ← entry point
#   database.py       ← DB operations
#   auth.py           ← authentication
#   api.py            ← HTTP endpoints
#   utils/
#     __init__.py     ← marks folder as package
#     strings.py      ← string helpers
#     dates.py        ← date helpers
#     validators.py   ← validation helpers

# ── database.py ──
# def save(task):
#     db.session.add(task)
#     db.session.commit()

# def find_by_id(task_id):
#     return db.query(Task).get(task_id)

# ── IMPORTING: 3 ways ──

# Way 1: import whole module
import database
task = database.find_by_id(42)
database.save(task)

# Way 2: import specific functions (PREFERRED)
from database import save, find_by_id
task = find_by_id(42)
save(task)

# Way 3: import with alias (for long names)
import database as db
task = db.find_by_id(42)

# ❌ BAD: import * (star import — pollutes namespace)
# from database import *  # brings ALL names — collision risk!

# ── PACKAGES: Folder of modules ──
# utils/ is a package (folder with __init__.py)
from utils.strings import clean_email, format_name
from utils.dates import format_date, days_until
from utils.validators import is_valid_email

email = clean_email("  Fatima@Mail.COM  ")
valid = is_valid_email(email)
print(f"Email: {email}, Valid: {valid}")

# ── STANDARD LIBRARY: Python's built-in toolbox ──
import os           # operating system (files, paths)
import sys          # system (exit, argv)
import json         # JSON read/write
import datetime     # dates and times
import collections  # specialized containers
import itertools    # iteration tools
import functools    # higher-order functions
import pathlib      # modern path handling

# ── THIRD-PARTY PACKAGES: pip install ──
# pip install requests pandas numpy flask
import requests     # HTTP client
import pandas as pd # data analysis
import numpy as np  # numerical computing

# ── __name__ == "__main__": Module vs script ──
# In database.py:
if __name__ == "__main__":
    # Only runs when executed directly: python database.py
    # Does NOT run when imported by another file
    print("Running database tests...")
    test_database()

# ── VIRTUAL ENVIRONMENTS: Isolated Python per project ──
# Each project needs different packages. Don't pollute system Python.
#
# Create:    python -m venv .venv
# Activate:  source .venv/bin/activate  (Linux/Mac)
#            .venv\Scripts\activate      (Windows)
# Install:   pip install requests pandas
# Freeze:    pip freeze &gt; requirements.txt
# Deactivate: deactivate
#
# WHY? Project A needs Django 4, Project B needs Django 5.
# Without venv — conflict. With venv — each isolated. Always use venv!

# ── THE GOLDEN RULES ──
# 1. One file = one responsibility (database.py for DB only)
# 2. from X import Y (specific) — not import *
# 3. Use __name__ guard for test code
# 4. pip install for third-party, import for built-in
# 5. __init__.py marks a folder as a package</div>

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
<p class="scene-setting">নবম গিল্ড। স্থপতির স্টুডিও। নকশার কাগজ, মাপকাঠি, কাঠের মডেল। স্থপতি রিয়াদ একটা বাড়ির নকশা দেখাচ্ছেন। "এটা নকশা — একটা কাগজ," তিনি বলেন। "এই নকশা থেকে আমি ১০০টা বাড়ি বানাতে পারি। প্রতিটা বাড়ি আলাদা — কিন্তু নকশা এক। Python-এ এটাই class — একটা নকশা থেকে অনেক object।"</p>
<p class="scene-setting en">Ninth guild. Architect's Studio. Blueprint paper, measuring tools, wooden models. Architect Riyad shows a house blueprint. "This is the blueprint — a piece of paper," he says. "From this blueprint I can build 100 houses. Each house is different — but the blueprint is one. In Python, this is a class — one blueprint, many objects."</p>

<div class="dialogue">সমস্যা: তোমার ১০০ জন কর্মী — প্রতিটার নাম, বেতন, পদবি। প্রতিটার জন্য আলাদা dict? কোনো method (bonus হিসাব) সবার জন্য কপি? না — একটা Employee class বানাও। ১০০টা object, একই method। OOP = বাস্তব জগতকে কোডে মডেল।</div>
<div class="dialogue en">Problem: 100 employees — each with name, salary, title. Separate dict for each? Copy the same method? No — make an Employee class. 100 objects, same method. OOP = modeling the real world in code.</div>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>ভুলের গল্প:</strong> রিয়াদ বললেন — এক শিক্ষানবিশ সবকিছু class বানালো — এমনকি একটা সাধারণ function-ও। এটাই over-engineering। class দরকার যখন: data + behavior একসাথে থাকবে। শুধু function হলে class নয়। "সব কিছু class নয় — যেখানে দরকার সেখানে।"</div></div>

<div class="code-block"># guild9_oop.py — Architect's Studio
# Architect Riyad: "Blueprint once. Build many."

# ── THE PROBLEM: Model 100 employees ──

# ❌ BAD: Dict for each employee — no shared behavior
emp1 = {"name": "Fatima", "salary": 50000, "title": "Engineer"}
emp2 = {"name": "Ahmed", "salary": 60000, "title": "Manager"}
# Bonus calculation? Copy-paste for each? Nightmare.

# ✅ GOOD: Class — blueprint for all employees
class Employee:
    """Blueprint: one design, many instances."""

    # Class attribute — shared by ALL instances
    company = "Python City Inc."

    # Constructor — sets up each new object
    def __init__(self, name, salary, title):
        self.name = name        # instance attribute
        self.salary = salary
        self.title = title
        self.email = name.lower().replace(" ", ".") + "@pycity.com"

    # Instance method — behavior
    def calculate_bonus(self, percentage=0.10):
        """Each employee gets a bonus."""
        return self.salary * percentage

    def promote(self, new_title, raise_amount):
        """Promote this employee."""
        self.title = new_title
        self.salary += raise_amount
        return f"{self.name} promoted to {self.title}"

    # String representation — how object looks when printed
    def __str__(self):
        return f"{self.name} ({self.title}) — {self.salary:,} taka"

# Create objects from the blueprint (instantiate)
emp1 = Employee("Fatima", 50000, "Engineer")
emp2 = Employee("Ahmed", 60000, "Manager")

print(emp1)              # Fatima (Engineer) — 50,000 taka
print(emp1.email)        # fatima@pycity.com
print(emp1.calculate_bonus())  # 5000.0
print(emp1.promote("Senior Engineer", 10000))  # Fatima promoted

# ── INHERITANCE: Specialized classes ──
class Manager(Employee):
    """Manager IS an Employee, with extra powers."""

    def __init__(self, name, salary, department):
        super().__init__(name, salary, "Manager")  # call parent
        self.department = department
        self.team = []

    def add_team_member(self, employee):
        self.team.append(employee)
        return f"{employee.name} added to {self.department}"

    # Override parent method — polymorphism
    def calculate_bonus(self, percentage=0.20):
        """Managers get 20% bonus, not 10%."""
        return self.salary * percentage

mgr = Manager("Sara", 80000, "Engineering")
eng = Employee("Bob", 50000, "Engineer")
mgr.add_team_member(eng)
print(mgr.calculate_bonus())  # 16000 (20% of 80000)

# ── @dataclass: Modern shortcut (Python 3.7+) ──
from dataclasses import dataclass

@dataclass
class Task:
    """Auto-generates __init__, __str__, __repr__."""
    id: int
    title: str
    status: str = "pending"
    priority: int = 3

task = Task(1, "Learn OOP")
print(task)  # Task(id=1, title='Learn OOP', status='pending', priority=3)</div>

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
<p class="scene-setting">দশম গিল্ড। কাঁচ গলানোর কারখানা। উত্তপ্ত চুল্লির গন্ধ, গলিত কাঁচের উজ্জ্বলতা, হাতুড়ির শব্দ। কাঁচ নির্মাতা সালমা একটা সাধারণ কাঁচের গোলক ধরে আছেন। এক নিঃশ্বাসে সেটাকে সুন্দর ফুলদানিতে পরিণত করেন। "৫ ধাপে নয়," তিনি বলেন, "এক নিঃশ্বাসে। Python comprehension ঠিক তেমনি — ৫ লাইনের কাজ এক লাইনে।"</p>
<p class="scene-setting en">Tenth guild. The Glass Blower's workshop. Smell of hot furnace, brightness of molten glass, sound of hammers. Glassmaker Salma holds a simple glass sphere. One breath transforms it into a beautiful vase. "Not in 5 steps," she says, "in one breath. Python comprehensions are the same — 5 lines of work in one line."</p>

<div class="dialogue">সমস্যা: তোমার ১০০০টা সংখ্যা আছে। শুধু জোড় সংখ্যাগুলো বেছো, প্রতিটাকে বর্গ করো, একটা নতুন তালিকায় রাখো। for loop দিলে ৫ লাইন। Comprehension দিলে: [x**2 for x in numbers if x % 2 == 0]। এক লাইন। দ্রুত, সুন্দর, Pythonic।</div>
<div class="dialogue en">Problem: 1,000 numbers. Select only even, square each, store in a new list. For loop: 5 lines. Comprehension: [x**2 for x in numbers if x % 2 == 0]. One line. Fast, beautiful, Pythonic.</div>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>ভুলের গল্প:</strong> সালমা বললেন — এক শিক্ষানবিশ nested comprehension লিখলো — [[x*y for x in range(10)] for y in range(10)]। কাজ করলো, কিন্তু কেউ পড়তে পারলো না। Comprehension সুন্দর, কিন্তু nested = বিপজ্জনক। নিয়ম: ১-২ level comprehension ঠিক, ৩+ = for loop-এ ফিরে যাও। পঠনযোগ্যতা &gt; সংক্ষিপ্ততা।</div></div>

<div class="code-block"># guild10_comprehensions.py — Glass Blower
# Glassmaker Salma: "One breath. One line. Beauty."

# ── THE PROBLEM: Transform 1000 numbers ──
import random
numbers = [random.randint(1, 100) for _ in range(1000)]

# ❌ BAD: 5 lines of for loop
squares = []
for n in numbers:
    if n % 2 == 0:
        squares.append(n ** 2)
# Works, but verbose.

# ✅ GOOD: List comprehension — 1 line
even_squares = [n ** 2 for n in numbers if n % 2 == 0]
# transform: n**2, source: numbers, filter: if even

# ── ANATOMY OF A COMPREHENSION ──
# [TRANSFORM for ITEM in SOURCE if CONDITION]
#   ^^^^^^^^^  ^^^^  ^^^^^^  ^^  ^^^^^^^^^
#   what to do  each  where  and  what to keep

# ── LIST COMPREHENSION ──
# Doubles of 1-5
doubles = [x * 2 for x in range(1, 6)]
print(doubles)  # [2, 4, 6, 8, 10]

# Words to uppercase
words = ["hello", "world", "python"]
upper = [w.upper() for w in words]
print(upper)  # ['HELLO', 'WORLD', 'PYTHON']

# ── DICT COMPREHENSION ──
# Word lengths
word_lengths = {word: len(word) for word in words}
print(word_lengths)  # {'hello': 5, 'world': 5, 'python': 6}

# Reverse a dictionary
original = {"a": 1, "b": 2, "c": 3}
reversed_dict = {v: k for k, v in original.items()}
print(reversed_dict)  # {1: 'a', 2: 'b', 3: 'c'}

# ── SET COMPREHENSION ──
# Unique first letters
names = ["Alice", "Bob", "Charlie", "Anna", "Brian"]
first_letters = {name[0] for name in names}
print(first_letters)  # {'A', 'B', 'C'}

# ── CONDITIONAL TRANSFORM ──
# Even → "even", Odd → "odd"
labels = ["even" if x % 2 == 0 else "odd" for x in range(5)]
print(labels)  # ['even', 'odd', 'even', 'odd', 'even']

# ── NESTED COMPREHENSION (use sparingly!) ──
# Multiplication table (OK — only 2 levels)
table = [[x * y for y in range(1, 4)] for x in range(1, 4)]
print(table)  # [[1,2,3], [2,4,6], [3,6,9]]
# 3+ levels? Use for loops. Readability > brevity.

# ── GENERATOR EXPRESSION: Lazy comprehension ──
# () instead of [] — doesn't create list, saves memory
total = sum(x ** 2 for x in range(1000000))
print(f"Sum of squares: {total:,}")
# No list created in memory — computed lazily

# ── REAL SCENARIO: Process customer data ──
customers = [
    {"name": "Fatima", "orders": 15, "city": "Dhaka"},
    {"name": "Ahmed", "orders": 3, "city": "Chittagong"},
    {"name": "Sara", "orders": 25, "city": "Dhaka"},
    {"name": "Bob", "orders": 0, "city": "Sylhet"},
]

# VIP customers: Dhaka + 10+ orders
vip_customers = [
    c["name"] for c in customers
    if c["city"] == "Dhaka" and c["orders"] &gt;= 10
]
print(f"VIP: {vip_customers}")  # ['Fatima', 'Sara']

# Order count by city
orders_by_city = {
    c["city"]: sum(c["orders"] for c in customers if c["city"] == city)
    for city in {c["city"] for c in customers}
}
print(orders_by_city)  # {'Dhaka': 40, 'Chittagong': 3, 'Sylhet': 0}</div>

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
