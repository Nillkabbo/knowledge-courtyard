const doors = [];

doors.push({
  num: 1,
  icon: "📊",
  color: "#2dd4bf",
  name: "সারির জন্ম",
  subtitle: "The Birth of Tables",
  tech: "Relational Model — Codd (1970), tuples, relations, schemas, primary/foreign keys, mathematical foundation",
  spirit: "কিতাব — সংগঠিত রেকর্ড, প্রতিটি তথ্যের জন্য একটি নির্দিষ্ট স্থান",
  secret: "Relational Model = উপাত্তকে গাণিতিক সম্পর্কে (relation) সাজানো। Codd-এর অন্তর্দৃষ্টি: একটি টেবিল একটি সেট — এবং সেট তত্ত্ব প্রযোজ্য।",
  recall: {
    q: " Relational Model-এ relation কী?",
    qen: "What is a relation in the Relational Model?",
    a: "একটি টেবিল (table) — সারি (tuple/row) এবং কলাম (attribute) দ্বারা গঠিত। গাণিতিকভাবে একটি সেটের সাবসেট।",
    aen: "A table — composed of tuples (rows) and attributes (columns). Mathematically, a subset of a Cartesian product."
  },
  story: `<p class="scene-setting">১৯৭০ সাল। IBM San Jose Research Laboratory। Edgar F. Codd — একজন গণিতজ্ঞ ও কম্পিউটার বিজ্ঞানী — একটি পেপার লিখছেন। তার শিরোনাম: "A Relational Model of Data for Large Shared Data Banks." সেই সময় ডেটা সংরক্ষণ করা হতো hierarchical বা network model-এ — জটিল, অনমনীয়, প্রতিটি কুয়েরির জন্য নির্দিষ্ট পথ জানতে হতো। Codd একটি বিপ্লবী ধারণা দিলেন: ডেটাকে গাণিতিক টেবিল হিসেবে সাজাও। কোনো নির্দিষ্ট পথ নেই — তুমি যা চাও, তা relation থেকে গাণিতিকভাবে বের করে আনো।</p>
<p class="scene-setting en">1970. IBM San Jose Research Laboratory. Edgar F. Codd — a mathematician and computer scientist — is writing a paper. Its title: "A Relational Model of Data for Large Shared Data Banks." At that time, data was stored in hierarchical or network models — complex, rigid, requiring specific paths for each query. Codd gave a revolutionary idea: organize data as mathematical tables. No specific path — extract what you want from the relation mathematically.</p>

<div class="dialogue"><strong>সারি সংগঠক করিম:</strong> Codd একটি গাণিতিক সমীকরণ দেখলেন — ডেটা = relation (সম্পর্ক)। একটি relation হলো একটি সেটের সাবসেট: কয়েকটি attribute-এর Cartesian product-এর অংশ। সহজ ভাষায় — একটি টেবিল। সারি = tuple, কলাম = attribute। প্রতিটি tuple অনন্য (primary key দিয়ে)। টেবিলগুলো পরস্পরের সাথে সম্পর্কিত (foreign key দিয়ে)।</div>
<div class="dialogue en"><strong>Row Organizer Karim:</strong> Codd saw a mathematical equation — data = relation. A relation is a subset of a set: part of the Cartesian product of several attributes. Simply put — a table. Rows = tuples, columns = attributes. Each tuple is unique (via primary key). Tables relate to each other (via foreign keys).</div>

<div class="callout info"><span class="co-icon">📐</span><div><strong>Relational Model-এর গঠন:</strong><br>
<strong>Relation (Table):</strong> একটি নামধারী টেবিল — যেমন "users"<br>
<strong>Attribute (Column):</strong> প্রতিটি কলামের একটি নাম ও type — name: VARCHAR, age: INT<br>
<strong>Tuple (Row):</strong> একটি সম্পূর্ণ রেকর্ড — (১, "Karim", ২৫)<br>
<strong>Domain:</strong> প্রতিটি attribute-এর গ্রহণযোগ্য মান — age: ০-১৫০<br>
<strong>Schema:</strong> পুরো টেবিলের সংজ্ঞা — কোন কলাম, কোন type</div></div>

<div class="callout info"><span class="co-icon">🔑</span><div><strong>Key Concepts:</strong><br>
<strong>Primary Key:</strong> প্রতিটি tuple-কে অনন্যভাবে চিহ্নিত করে — user_id<br>
<strong>Foreign Key:</strong> অন্য টেবিলের primary key-এর reference — order.user_id → users.user_id<br>
<strong>Candidate Key:</strong> যেকোনো attribute যা অনন্য — email-ও একটি candidate key<br>
<strong>Composite Key:</strong> একাধিক কলাম মিলে একটি key — (first_name, last_name, dob)</div></div>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>Codd-এর Turing Award:</strong> ১৯৮১ সালে Codd Turing Award পেয়েছিলেন relational model-এর জন্য। তার ধারণা এত শক্তিশালী ছিল যা প্রতিটি modern database-এর ভিত্তি — MySQL, PostgreSQL, Oracle, SQL Server — সবাই Codd-এর relational model ব্যবহার করে। কিন্তু Codd এটাও বলেছিলেন: relational model-এর একটি সমস্যা আছে — যখন উপাত্ত অসংগতিপূর্ণ (inconsistent)। সেই সমাধান আসবে normalization দিয়ে।</div></div>

<div class="verse">وَعِنْدَهُ مَفَاتِحُ الْغَيْبِ لَا يَعْلَمُهَا إِلَّا هُوَ</div>
<div style="font-size:.85rem;color:var(--ink-dim);text-align:center;margin-bottom:1rem">"এবং তাঁর কাছেই রয়েছে অদৃশ্যের চাবিকাঠি, যা তিনি ছাড়া কেউ জানে না।" — কুরআন ৬:৫৯</div>

<p class="scene-setting">এই আয়াত বলে — আল্লাহর কাছে সব তথ্যের চাবি আছে। একটি relational database-ও তেমন — প্রতিটি তথ্যের একটি চাবি (key) আছে যা দিয়ে সেটি খুঁজে পাওয়া যায়। Primary key হলো সেই চাবি — প্রতিটি সারির অনন্য পরিচয়। Codd-এর অন্তর্দৃষ্টি ছিল: যদি প্রতিটি তথ্যের একটি চাবি থাকে, তাহলে যেকোনো তথ্য গাণিতিকভাবে খুঁজে পাওয়া যায়।</p>

<div class="callout tip"><span class="co-icon">🔗</span><div><strong>Book ৪ (সিস্টেম ডিজাইন) Door ১৬:</strong> Database ও indexing-এর overview শিখেছিলে। এই বই সেই ভিত্তিকে গভীর করে। Book ৩৫ (ডিস্ট্রিবিউটেড): Distributed database — replication, sharding। LedgerPilot: MySQL = relational database, Ipractus: PostgreSQL = relational।</div></div>

<div class="svg-diagram">
<svg viewBox="0 0 580 250" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto">
  <text x="290" y="25" text-anchor="middle" fill="#e2e8f0" font-size="13" font-weight="900">📊 Relational Model: Tables, PK, FK</text>
  <rect x="20" y="50" width="200" height="170" rx="8" fill="#0f172a" stroke="#22d3ee" stroke-width="2"/>
  <text x="120" y="72" text-anchor="middle" fill="#67e8f9" font-size="9" font-weight="700">users (table)</text>
  <rect x="30" y="82" width="180" height="20" rx="3" fill="#1e3a5f" stroke="#22d3ee" stroke-width="1"/>
  <text x="40" y="96" fill="#7dd3fc" font-size="10">id (PK) 🔑</text>
  <text x="100" y="96" fill="#94a3b8" font-size="10">| name</text>
  <text x="170" y="96" fill="#94a3b8" font-size="10">| email</text>
  <rect x="30" y="105" width="180" height="16" rx="2" fill="#052e16" stroke="#22c55e" stroke-width="1"/>
  <text x="40" y="116" fill="#4ade80" font-size="10">1</text>
  <text x="100" y="116" fill="#86efac" font-size="10">| Rakib</text>
  <text x="170" y="116" fill="#86efac" font-size="10">| r@x.com</text>
  <rect x="30" y="122" width="180" height="16" rx="2" fill="#052e16" stroke="#22c55e" stroke-width="1"/>
  <text x="40" y="133" fill="#4ade80" font-size="10">2</text>
  <text x="100" y="133" fill="#86efac" font-size="10">| Sara</text>
  <text x="170" y="133" fill="#86efac" font-size="10">| s@x.com</text>
  <text x="120" y="160" text-anchor="middle" fill="#94a3b8" font-size="10">Primary Key: unique per row</text>
  <text x="120" y="180" text-anchor="middle" fill="#94a3b8" font-size="10">Each column = attribute</text>
  <text x="120" y="200" text-anchor="middle" fill="#94a3b8" font-size="10">Each row = tuple (record)</text>
  <rect x="350" y="50" width="210" height="170" rx="8" fill="#0f172a" stroke="#fbbf24" stroke-width="2"/>
  <text x="455" y="72" text-anchor="middle" fill="#fcd34d" font-size="9" font-weight="700">orders (table)</text>
  <rect x="360" y="82" width="190" height="20" rx="3" fill="#451a0a" stroke="#fbbf24" stroke-width="1"/>
  <text x="370" y="96" fill="#fde68a" font-size="10">id (PK) 🔑</text>
  <text x="420" y="96" fill="#fde68a" font-size="10">| user_id (FK) 🔗</text>
  <text x="520" y="96" fill="#94a3b8" font-size="10">| amt</text>
  <rect x="360" y="105" width="190" height="16" rx="2" fill="#052e16" stroke="#22c55e" stroke-width="1"/>
  <text x="370" y="116" fill="#4ade80" font-size="10">101</text>
  <text x="420" y="116" fill="#4ade80" font-size="10">| 1 (→Rakib)</text>
  <text x="520" y="116" fill="#86efac" font-size="10">| $50</text>
  <rect x="360" y="122" width="190" height="16" rx="2" fill="#052e16" stroke="#22c55e" stroke-width="1"/>
  <text x="370" y="133" fill="#4ade80" font-size="10">102</text>
  <text x="420" y="133" fill="#4ade80" font-size="10">| 2 (→Sara)</text>
  <text x="520" y="133" fill="#86efac" font-size="10">| $30</text>
  <text x="455" y="160" text-anchor="middle" fill="#94a3b8" font-size="10">Foreign Key: links to users.id</text>
  <text x="455" y="180" text-anchor="middle" fill="#94a3b8" font-size="10">Referential integrity</text>
  <text x="455" y="200" text-anchor="middle" fill="#fcd34d" font-size="10">Codd 1970: relational algebra</text>
  <path d="M 120 105 Q 235 60 350 105" fill="none" stroke="#a855f7" stroke-width="2" stroke-dasharray="4,3"/>
  <text x="235" y="55" text-anchor="middle" fill="#c084fc" font-size="10">FK relationship</text>
</svg>
</div>
<div class="svg-caption">চিত্র: Relational model — users ও orders টেবিল PK/FK দিয়ে যুক্ত।</div>

<div class="code-block"># ── STEP 1: What is a database? ──
# A database stores data in an organized way so you can:
# - STORE data efficiently
# - RETRIEVE data quickly
# - UPDATE data safely
# - DELETE data when needed

# CRUD = Create, Read, Update, Delete — the 4 basic operations

# RELATIONAL DATABASE: data organized into TABLES (rows and columns)
# Think of it as Excel spreadsheets, but with relationships between them.

# SQL (Structured Query Language) is how we talk to relational databases.

# POPULAR RELATIONAL DATABASES:
databases = {
    "PostgreSQL": "Most powerful open-source DB, great for complex queries",
    "MySQL": "Most popular open-source DB, great for web apps",
    "SQLite": "Lightweight, file-based, great for mobile/prototyping",
    "Oracle": "Enterprise, expensive, very feature-rich",
    "SQL Server": "Microsoft's enterprise database",
}

print("POPULAR RELATIONAL DATABASES:")
for db, desc in databases.items():
    print(f"  {db}: {desc}")

# YOU USE THESE EVERY DAY:
# - Django + MySQL = LedgerPilot
# - PostgreSQL = Ipractus
# - SQLite = every mobile app, every browser</div>

<div class="code-block"># ── STEP 2: Creating tables ──
# A TABLE is like a spreadsheet. Each table holds one type of data.

sql_create = """
-- Users table (who uses our app):
CREATE TABLE users (
    id SERIAL PRIMARY KEY,          -- auto-incrementing unique ID
    name VARCHAR(100) NOT NULL,     -- name (required, max 100 chars)
    email VARCHAR(255) UNIQUE NOT NULL,  -- email (unique, required)
    age INTEGER CHECK (age >= 0),   -- age (must be non-negative)
    created_at TIMESTAMP DEFAULT NOW()  -- when account was created
);

-- Orders table (what users bought):
CREATE TABLE orders (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id),  -- FK: links to users table
    amount DECIMAL(10, 2),                  -- price (2 decimal places)
    status VARCHAR(20) DEFAULT 'pending',   -- order status
    created_at TIMESTAMP DEFAULT NOW()
);
"""

print(sql_create)

# KEY CONCEPTS:
# - PRIMARY KEY: uniquely identifies each row (usually 'id')
# - FOREIGN KEY: links to another table (creates relationships)
# - NOT NULL: this field is required
# - UNIQUE: no two rows can have the same value
# - DEFAULT: value if not specified
# - CHECK: validates data (age must be >= 0)

# DATA TYPES:
# - INTEGER: whole numbers
# - DECIMAL(10,2): money (10 digits, 2 after decimal)
# - VARCHAR(n): text up to n characters
# - TEXT: unlimited text
# - TIMESTAMP: date and time
# - BOOLEAN: true/false</div>

<div class="code-block"># ── STEP 3: Inserting data (CREATE) ──
sql_insert = """
-- Insert one user:
INSERT INTO users (name, email, age)
VALUES ('Rakib', 'rakib@example.com', 25);

-- Insert multiple users at once:
INSERT INTO users (name, email, age)
VALUES
    ('Sara', 'sara@example.com', 23),
    ('Ahmed', 'ahmed@example.com', 28),
    ('Fatima', 'fatima@example.com', 22);

-- Insert orders (note: user_id references users table):
INSERT INTO orders (user_id, amount, status)
VALUES
    (1, 150.00, 'completed'),
    (1, 45.50, 'completed'),
    (2, 320.00, 'pending'),
    (3, 75.25, 'completed');
"""

print(sql_insert)

# Django ORM equivalent:
django_insert = """
# Create a user:
user = User.objects.create(
    name='Rakib',
    email='rakib@example.com',
    age=25
)

# Create an order linked to the user:
Order.objects.create(
    user=user,
    amount=150.00,
    status='completed'
)
"""

print("Django ORM equivalent:")
print(django_insert)</div>

<div class="code-block"># ── STEP 4: Querying data (READ) ──
sql_select = """
-- Get all users:
SELECT * FROM users;

-- Get specific columns:
SELECT name, email FROM users;

-- Filter with WHERE:
SELECT * FROM users WHERE age >= 25;

-- Sort:
SELECT * FROM users ORDER BY age DESC;

-- Limit results:
SELECT * FROM users LIMIT 10;

-- Aggregate functions:
SELECT COUNT(*) FROM users;                    -- total count
SELECT AVG(age) FROM users;                     -- average age
SELECT SUM(amount) FROM orders;                 -- total revenue
SELECT MIN(amount), MAX(amount) FROM orders;    -- range
"""

print(sql_select)

# Django ORM equivalents:
django_queries = """
User.objects.all()                          # SELECT * FROM users
User.objects.filter(age__gte=25)            # WHERE age >= 25
User.objects.order_by('-age')               # ORDER BY age DESC
User.objects.all()[:10]                     # LIMIT 10
User.objects.count()                        # COUNT(*)
User.objects.aggregate(Avg('age'))          # AVG(age)
"""

print("Django ORM equivalents:")
print(django_queries)</div>

<div class="code-block"># ── STEP 5: JOINs — connecting tables ──
sql_join = """
-- INNER JOIN: only matching rows from both tables
SELECT u.name, o.amount, o.status
FROM users u
INNER JOIN orders o ON u.id = o.user_id
WHERE o.amount > 50;

-- LEFT JOIN: all users, even those without orders
SELECT u.name, COUNT(o.id) as order_count
FROM users u
LEFT JOIN orders o ON u.id = o.user_id
GROUP BY u.name;

-- MULTIPLE TABLES:
SELECT u.name, o.amount, p.product_name
FROM users u
JOIN orders o ON u.id = o.user_id
JOIN products p ON o.product_id = p.id;
"""

print(sql_join)

# Django ORM equivalents:
django_joins = """
# Inner join (filter through relationship):
User.objects.filter(orders__amount__gt=50)

# Left join with aggregation:
from django.db.models import Count
User.objects.annotate(order_count=Count('orders'))

# Multiple joins:
User.objects.filter(
    orders__product__category='electronics'
).distinct()
"""

print("Django ORM equivalents:")
print(django_joins)

# JOIN TYPES:
# ┌──────────────┬──────────────────────────────────┐
# │ JOIN Type    │ What it returns                 │
# ├──────────────┼──────────────────────────────────┤
# │ INNER JOIN   │ Only matching rows             │
# │ LEFT JOIN    │ All left + matching right      │
# │ RIGHT JOIN   │ All right + matching left      │
# │ FULL JOIN    │ All from both tables           │
# │ CROSS JOIN   │ Every combination (cartesian)  │
# └──────────────┴──────────────────────────────────┘</div>

<div class="code-block"># ── STEP 6: Update and Delete ──
sql_update = """
-- UPDATE: modify existing rows
UPDATE users SET age = 26 WHERE id = 1;
UPDATE orders SET status = 'completed' WHERE user_id = 2;

-- DELETE: remove rows (BE CAREFUL!)
DELETE FROM orders WHERE status = 'cancelled';
DELETE FROM users WHERE id = 5;

-- SAFE DELETE pattern (always check first):
-- 1. SELECT first to verify what will be deleted:
SELECT * FROM users WHERE last_login < '2023-01-01';
-- 2. Then delete:
DELETE FROM users WHERE last_login < '2023-01-01';
"""

print(sql_update)

# Django ORM equivalents:
django_update = """
# Update:
User.objects.filter(id=1).update(age=26)
Order.objects.filter(user_id=2).update(status='completed')

# Delete:
Order.objects.filter(status='cancelled').delete()
User.objects.filter(id=5).delete()
"""

print("Django ORM equivalents:")
print(django_update)

# DATABASE BEST PRACTICES:
best_practices = [
    "ALWAYS use WHERE clause with UPDATE/DELETE (no WHERE = all rows!)",
    "Use transactions for multi-step operations",
    "Index columns you frequently filter/join on",
    "Use foreign keys for data integrity",
    "Normalize to avoid data redundancy",
    "Backup regularly (automated!)",
    "Use connection pooling (don't open/close per request)",
    "EXPLAIN your queries to check for performance issues",
    "Never store passwords in plain text (hash them!)",
    "Use migrations for schema changes (never manual ALTER TABLE in prod)",
]

print("DATABASE BEST PRACTICES:")
for practice in best_practices:
    print(f"  ☐ {practice}")</div>

<div class="secret-box">📊 <strong>Relational Model = উপাত্তের গাণিতিক সংগঠন।</strong> টেবিল = relation, সারি = tuple, কলাম = attribute। Primary key অনন্যতা দেয়, foreign key সম্পর্ক তৈরি করে। Codd-এর ১৯৭০ সালের ধারণা আজকের প্রতিটি database-এর ভিত্তি। কিন্তু টেবিল তৈরি করা এক জিনিস — তাতে প্রশ্ন করা আরেক জিনিস। সেই ভাষার নাম SQL। সেই যাত্রা শুরু হবে পরের দরজায়।</div>`,
  senior: {
    title: "Relational Model এক নজরে",
    body: `<table class="kv-table"><tr><th>ধারণা</th><th>বিবরণ</th></tr>
<tr><td class="hl">Relation</td><td>একটি টেবিল — tuples ও attributes দ্বারা গঠিত</td></tr>
<tr><td class="hl">Tuple</td><td>একটি সারি (row) — একটি সম্পূর্ণ রেকর্ড</td></tr>
<tr><td class="hl">Attribute</td><td>একটি কলাম (column) — নামধারী type</td></tr>
<tr><td class="hl">Primary Key</td><td>অনন্য চিহ্নকারী — প্রতিটি tuple-কে আলাদা করে</td></tr>
<tr><td class="hl">Foreign Key</td><td>অন্য টেবিলের reference — সম্পর্ক তৈরি করে</td></tr>
<tr><td class="hl">Schema</td><td>ডাটাবেসের কাঠামো — কোন টেবিল, কোন কলাম</td></tr>
<tr><td class="hl">Codd ১৯৭০</td><td>"A Relational Model of Data" — Turing Award ১৯৮১</td></tr></table>`
  }
});

doors.push({
  num: 2,
  icon: "💻",
  color: "#2dd4bf",
  name: "ভাষার স্থপতি",
  subtitle: "The Language Architect",
  tech: "SQL (Chamberlin-Boyce 1974, SEQUEL), CRUD operations, JOINs (inner, left, right, full), GROUP BY, subqueries, aggregates",
  spirit: "কালাম — বাক্য, ডাটাবেসের সাথে কথোপকথনের ভাষা",
  secret: "SQL = ডাটাবেসের সাথে কথা বলার ভাষা। তুমি যা চাও, তা বলো — SQL তা খুঁজে বের করে।",
  recall: {
    q: " INNER JOIN এবং LEFT JOIN-এর পার্থক্য কী?",
    qen: "What is the difference between INNER JOIN and LEFT JOIN?",
    a: "INNER JOIN = শুধু মিল আছে এমন সারি। LEFT JOIN = বাঁ টেবিলের সব সারি + ডানের মিল। মিল না থাকলে NULL।",
    aen: "INNER JOIN = only matching rows. LEFT JOIN = all left rows + matching right. No match = NULL."
  },
  story: `<p class="scene-setting">তুমি একটি গ্রন্থাগারিকের সামনে দাঁড়িয়ে আছো। তুমি বলো — "আমাকে ২০২৩ সালে লেখা সব বই দাও, লেখকের নাম সহ, যাদের দাম ৫০০ টাকার কম।" গ্রন্থাগারিক যদি এই ভাষা বোঝেন, তিনি সেকেন্ডে বই আনবেন। SQL হলো সেই ভাষা — ডাটাবেসের গ্রন্থাগারিকের সাথে কথা বলার ভাষা।</p>
<p class="scene-setting en">You're standing before a librarian. You say — "Give me all books written in 2023, with author names, priced under 500." If the librarian understands this language, they'll bring books in seconds. SQL is that language — the language for talking to the database librarian.</p>

<div class="callout info"><span class="co-icon">💻</span><div><strong>SQL CRUD Operations:</strong><br>
<strong>CREATE:</strong> INSERT INTO users (name, age) VALUES ('Karim', ২৫)<br>
<strong>READ:</strong> SELECT * FROM users WHERE age > ১৮<br>
<strong>UPDATE:</strong> UPDATE users SET age = ২৬ WHERE id = ১<br>
<strong>DELETE:</strong> DELETE FROM users WHERE id = ১</div></div>

<div class="callout info"><span class="co-icon">🔀</span><div><strong>JOIN Types:</strong><br>
<strong>INNER JOIN:</strong> শুধু মিল আছে এমন সারি — users JOIN orders ON users.id = orders.user_id<br>
<strong>LEFT JOIN:</strong> বাঁ টেবিলের সব + ডানে মিল — মিল না থাকলে NULL<br>
<strong>RIGHT JOIN:</strong> ডান টেবিলের সব + বাঁয়ে মিল<br>
<strong>FULL OUTER JOIN:</strong> উভয় টেবিলের সব সারি</div></div>

<div class="callout info"><span class="co-icon">📊</span><div><strong>Aggregation & Grouping:</strong><br>
<strong>COUNT(), SUM(), AVG(), MIN(), MAX():</strong> একাধিক সারি থেকে একটি সারাংশ<br>
<strong>GROUP BY:</strong> একটি কলাম অনুসারে গোষ্ঠী করো — GROUP BY department<br>
<strong>HAVING:</strong> GROUP BY-এর পরে filter — HAVING COUNT(*) > ৫<br>
<strong>DISTINCT:</strong> অনন্য মান — SELECT DISTINCT city FROM users</div></div>

<div class="callout info"><span class="co-icon">🔧</span><div><strong>Subqueries:</strong> একটি query-র ভেতরে আরেকটি query।<br>
SELECT name FROM users WHERE id IN (SELECT user_id FROM orders WHERE total > ১০০০)</div></div>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>ইতিহাস:</strong> SQL তৈরি হয়েছিল ১৯৭৪ সালে Donald Chamberlin এবং Raymond Boyce দ্বারা IBM-এ। প্রথম নাম ছিল SEQUEL। পরে ট্রেডমার্ক সমস্যায় SQL হয়। আজ SQL একটি ANSI/ISO স্ট্যান্ডার্ড — কিন্তু প্রতিটি database (MySQL, PostgreSQL, Oracle) নিজস্ব dialect যোগ করে।</div></div>

<div class="verse">عَلَّمَهُ الْبَيَانَ</div>
<div style="font-size:.85rem;color:var(--ink-dim);text-align:center;margin-bottom:1rem">"তিনি তাকে শিখিয়েছেন স্পষ্ট ভাষা।" — কুরআন ৫৫:৪</div>

<p class="scene-setting">এই আয়াত স্পষ্ট ভাষার কথা বলে। SQL হলো ডাটাবেসের সাথে স্পষ্ট ভাষায় কথা বলার মাধ্যম। তুমি যা চাও সঠিকভাবে বলো — SQL সেটি ডাটাবেস থেকে বের করে আনে। এটাই declarative ভাষার শক্তি — তুমি কী চাও বলো, কীভাবে পাবে সেটা ডাটাবেস সামলাবে।</p>

<div class="callout tip"><span class="co-icon">🔗</span><div><strong>LedgerPilot:</strong> তুমি প্রতিদিন Django ORM ব্যবহার করছো — সেটি আসলে SQL generate করে। User.objects.filter(age__gt=১৮) → SELECT * FROM users WHERE age > ১৮। Book ৪ (সিস্টেম ডিজাইন): Database queries — performance depends on indexing।</div></div>

<div class="svg-diagram">
<svg viewBox="0 0 580 250" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto">
  <text x="290" y="25" text-anchor="middle" fill="#e2e8f0" font-size="13" font-weight="900">💻 SQL Query: JOIN + GROUP BY প্রবাহ</text>
  <rect x="20" y="55" width="160" height="80" rx="8" fill="#0f172a" stroke="#22d3ee" stroke-width="2"/>
  <text x="100" y="78" text-anchor="middle" fill="#67e8f9" font-size="9" font-weight="700">users</text>
  <text x="100" y="98" text-anchor="middle" fill="#94a3b8" font-size="10">id | name | dept</text>
  <text x="100" y="115" text-anchor="middle" fill="#86efac" font-size="10">1 | Rakib | Eng</text>
  <text x="100" y="128" text-anchor="middle" fill="#86efac" font-size="10">2 | Sara | Sales</text>
  <rect x="220" y="55" width="160" height="80" rx="8" fill="#0f172a" stroke="#fbbf24" stroke-width="2"/>
  <text x="300" y="78" text-anchor="middle" fill="#fcd34d" font-size="9" font-weight="700">orders</text>
  <text x="300" y="98" text-anchor="middle" fill="#94a3b8" font-size="10">id | uid | amount</text>
  <text x="300" y="115" text-anchor="middle" fill="#fde68a" font-size="10">10 | 1 | $50</text>
  <text x="300" y="128" text-anchor="middle" fill="#fde68a" font-size="10">11 | 2 | $30</text>
  <defs><marker id="arrD2a" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="#a855f7"/></marker></defs>
  <line x1="180" y1="95" x2="218" y2="95" stroke="#a855f7" stroke-width="2" marker-end="url(#arrD2a)"/>
  <text x="199" y="88" text-anchor="middle" fill="#c084fc" font-size="10">JOIN</text>
  <rect x="200" y="165" width="180" height="70" rx="8" fill="#0f172a" stroke="#22c55e" stroke-width="2"/>
  <text x="290" y="185" text-anchor="middle" fill="#4ade80" font-size="9" font-weight="700">GROUP BY dept</text>
  <text x="290" y="205" text-anchor="middle" fill="#86efac" font-size="10">Eng | SUM=$50</text>
  <text x="290" y="220" text-anchor="middle" fill="#86efac" font-size="10">Sales | SUM=$30</text>
  <defs><marker id="arrD2b" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="#f87171"/></marker></defs>
  <line x1="300" y1="135" x2="290" y2="163" stroke="#f87171" stroke-width="2" stroke-dasharray="4,3" marker-end="url(#arrD2b)"/>
  <text x="400" y="100" fill="#94a3b8" font-size="10">SELECT কোথা থেকে</text>
  <text x="400" y="115" fill="#94a3b8" font-size="10">কী আনবে নির্দিষ্ট করে</text>
</svg>
</div>
<div class="svg-caption">চিত্র: SQL JOIN দুই টেবিলকে যুক্ত করে, GROUP BY সারাংশ তৈরি করে।</div>

<div class="code-block"># — SQL: SELECT + JOIN + GROUP BY —

  -- টেবিল যোগ + গোষ্ঠীভুক্ত সারাংশ
  SELECT u.dept,
         COUNT(o.id) AS order_count,
         SUM(o.amount) AS total_sales
  FROM users u
  LEFT JOIN orders o ON u.id = o.uid
  WHERE o.created_at >= '2025-01-01'
  GROUP BY u.dept
  HAVING SUM(o.amount) > 100
  ORDER BY total_sales DESC;

  -- Subquery উদাহরণ:
  SELECT name FROM users
  WHERE id IN (
      SELECT uid FROM orders
      WHERE amount > (SELECT AVG(amount) FROM orders)
  );</div>

<div class="secret-box">💻 <strong>SQL = ডাটাবেসের ভাষা।</strong> SELECT পড়ো, INSERT লেখো, UPDATE বদলাও, DELETE মুছো। JOIN দিয়ে টেবিল যোগ করো, GROUP BY দিয়ে সারাংশ তৈরি করো। কিন্তু যখন মিলিয়ন মিলিয়ন সারি থাকে — SELECT * কতটা ধীর? সেই সমাধান আসবে পরের দরজায় — indexing।</div>`,
  senior: {
    title: "SQL এক নজরে",
    body: `<table class="kv-table"><tr><th>ধারণা</th><th>বিবরণ</th></tr>
<tr><td class="hl">SELECT</td><td>ডেটা পড়ো — WHERE, ORDER BY, LIMIT</td></tr>
<tr><td class="hl">INSERT</td><td>নতুন সারি যোগ</td></tr>
<tr><td class="hl">UPDATE</td><td>বিদ্যমান সারি পরিবর্তন</td></tr>
<tr><td class="hl">DELETE</td><td>সারি মুছো</td></tr>
<tr><td class="hl">INNER JOIN</td><td>শুধু মিল আছে এমন সারি</td></tr>
<tr><td class="hl">LEFT JOIN</td><td>বাঁ টেবিলের সব + ডানে মিল</td></tr>
<tr><td class="hl">GROUP BY</td><td>কলাম অনুসারে গোষ্ঠী + aggregate</td></tr>
<tr><td class="hl">Subquery</td><td>query-র ভেতরে query</td></tr></table>`
  }
});

doors.push({
  num: 3,
  icon: "🗂️",
  color: "#2dd4bf",
  name: "সূচক নির্মাতা",
  subtitle: "The Index Builder",
  tech: "Indexing — B-tree (Bayer-McCreight 1972), Hash index, composite index, covering index, EXPLAIN, query performance",
  spirit: "হিফয — সংরক্ষণ, তাড়াতাড়ি খুঁজে পাওয়ার জন্য সংগঠিত রাখা",
  secret: "Index = একটি বইয়ের সূচিপত্র। পুরো বই না পড়েই একটি নির্দিষ্ট বিষয় খুঁজে পাওয়া যায়। ডাটাবেসেও তেমন — index ছাড়া পুরো টেবিল পড়তে হয় (slow), index দিয়ে সরাসরি পাওয়া যায় (fast)।",
  recall: {
    q: " B-tree index কেন ব্যবহার হয় hash-এর বদলে?",
    qen: "Why use B-tree index instead of hash?",
    a: "B-tree range query সমর্থন করে (age > ১৮), hash শুধু exact match (id = ৫)। B-tree sorted order রাখে।",
    aen: "B-tree supports range queries (age > 18), hash only exact match (id = 5). B-tree maintains sorted order."
  },
  story: `<p class="scene-setting">তুমি একটি ১০০০ পৃষ্ঠার বই পড়ছো। একটি নির্দিষ্ট বিষয় খুঁজছো — "quantum entanglement।" দুটি উপায়: প্রথম — প্রতিটি পৃষ্ঠা ঘেঁটো (full table scan)। ঘণ্টা লাগবে। দ্বিতীয় — সূচিপত্র দেখো, "quantum" → পৃষ্ঠা ৪২৩। সরাসরি সেখানে যাও (index lookup)। সেকেন্ড। এটাই indexing — ডাটাবেসের সূচিপত্র।</p>
<p class="scene-setting en">You're reading a 1000-page book. Looking for a specific topic — "quantum entanglement." Two ways: first — flip through every page (full table scan). Hours. Second — check the index, "quantum" → page 423. Go directly there (index lookup). Seconds. This is indexing — the database's table of contents.</p>

<div class="callout info"><span class="co-icon">🌳</span><div><strong>B-Tree (Bayer-McCreight ১৯৭২):</strong><br>
সবচেয়ে সাধারণ index type। একটি balanced tree — প্রতিটি leaf node একই গভীরে।<br>
<strong>গঠন:</strong> root → internal nodes → leaf nodes (actual data pointers)<br>
<strong>সুবিধা:</strong> O(log n) lookup, range query সমর্থিত (BETWEEN, >, <)<br>
<strong>ব্যবহার:</strong> MySQL InnoDB, PostgreSQL — সব default index B-tree</div></div>

<div class="callout info"><span class="co-icon">#️⃣</span><div><strong>Hash Index:</strong><br>
একটি hash function দিয়ে key-কে একটি bucket-এ রাখে।<br>
<strong>সুবিধা:</strong> O(1) exact match — id = ৫<br>
<strong>অসুবিধা:</strong> range query সমর্থিত নয় — age > ১৮ কাজ করবে না</div></div>

<div class="callout info"><span class="co-icon">📋</span><div><strong>Index Types:</strong><br>
<strong>Primary Index:</strong> primary key-এর উপর — স্বয়ংক্রিয়ভাবে তৈরি<br>
<strong>Unique Index:</strong> অনন্য মান নিশ্চিত — email<br>
<strong>Composite Index:</strong> একাধিক কলাম — (first_name, last_name)<br>
<strong>Covering Index:</strong> query-র সব কলাম index-এ — table access লাগে না<br>
<strong>Partial Index:</strong> শর্ত সাপেক্ষে — WHERE active = true</div></div>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>Index-এর মূল্য:</strong> Index = গতি, কিন্তু storage ও write খরচ। প্রতিটি index অতিরিক্ত সংরক্ষণ নেয়। প্রতিটি INSERT/UPDATE/DELETE-এ index-ও update করতে হয়। খুব বেশি index = slow writes। ভারসাম্য দরকার — প্রতিটি index justify করতে হবে।</div></div>

<div class="callout info"><span class="co-icon">🔍</span><div><strong>EXPLAIN — Query Plan:</strong><br>
EXPLAIN SELECT * FROM users WHERE email = 'test@example.com'<br>
ডাটাবেস বলে — "আমি কীভাবে এই query execute করব।" কোন index ব্যবহার হচ্ছে? Full table scan নাকি index lookup? কতটা সারি স্ক্যান করবে? এটাই query optimization-এর প্রথম পদক্ষেপ।</div></div>

<div class="callout info"><span class="co-icon">📊</span><div><strong>Full Table Scan vs Index Lookup:</strong><br>
<strong>Full Scan:</strong> ১০ লক্ষ সারি পড়ো → ১০০০ms<br>
<strong>Index Lookup:</strong> B-tree traverse → ~৩-৪ ধাপ → ১ms<br>
<strong>১০০০x দ্রুত!</strong></div></div>

<div class="verse">وَفِي ذَٰلِكَ فَلْيَتَنَافَسِ الْمُتَنَافِسُونَ</div>
<div style="font-size:.85rem;color:var(--ink-dim);text-align:center;margin-bottom:1rem">"এবং এতে প্রতিযোগীরা প্রতিযোগিতা করুক।" — কুরআন ৮৩:২৬</div>

<p class="scene-setting">এই আয়াত প্রতিযোগিতার কথা বলে। Indexing-ও একটি প্রতিযোগিতা — read speed বনাম write speed, storage বনাম performance। সঠিক index = দ্রুত query। ভুল index = wasted space ও slow writes। সঠিক ভারসাম্য খুঁজে বের করাই DBA-র কাজ।</p>

<div class="callout tip"><span class="co-icon">🔗</span><div><strong>Book ২ (DSA Bazaar) Door ১৬:</strong> Heap = priority queue — B-tree-এর মতো balanced structure। Book ২ Door ১৫: Binary search — B-tree হলো binary search-এর generalized রূপ। Book ৩৮ (OS) Door ৭: inode = filesystem index।</div></div>

<div class="svg-diagram">
<svg viewBox="0 0 580 250" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto">
  <text x="290" y="25" text-anchor="middle" fill="#e2e8f0" font-size="13" font-weight="900">🗂️ B-Tree Index — O(log n) অনুসন্ধান</text>
  <rect x="260" y="45" width="60" height="35" rx="6" fill="#1e3a5f" stroke="#22d3ee" stroke-width="2"/>
  <text x="290" y="67" text-anchor="middle" fill="#7dd3fc" font-size="9" font-weight="700">50</text>
  <line x1="280" y1="80" x2="200" y2="105" stroke="#475569" stroke-width="2"/>
  <line x1="290" y1="80" x2="290" y2="105" stroke="#475569" stroke-width="2"/>
  <line x1="300" y1="80" x2="380" y2="105" stroke="#475569" stroke-width="2"/>
  <rect x="170" y="105" width="60" height="35" rx="6" fill="#1e3a5f" stroke="#22c55e" stroke-width="2"/>
  <text x="200" y="127" text-anchor="middle" fill="#4ade80" font-size="9" font-weight="700">30</text>
  <rect x="260" y="105" width="60" height="35" rx="6" fill="#1e3a5f" stroke="#fbbf24" stroke-width="2"/>
  <text x="290" y="127" text-anchor="middle" fill="#fcd34d" font-size="9" font-weight="700">50</text>
  <rect x="350" y="105" width="60" height="35" rx="6" fill="#1e3a5f" stroke="#a855f7" stroke-width="2"/>
  <text x="380" y="127" text-anchor="middle" fill="#c084fc" font-size="9" font-weight="700">70</text>
  <line x1="200" y1="140" x2="180" y2="165" stroke="#475569" stroke-width="1.5"/>
  <line x1="200" y1="140" x2="220" y2="165" stroke="#475569" stroke-width="1.5"/>
  <line x1="290" y1="140" x2="270" y2="165" stroke="#475569" stroke-width="1.5"/>
  <line x1="290" y1="140" x2="310" y2="165" stroke="#475569" stroke-width="1.5"/>
  <line x1="380" y1="140" x2="360" y2="165" stroke="#475569" stroke-width="1.5"/>
  <line x1="380" y1="140" x2="400" y2="165" stroke="#475569" stroke-width="1.5"/>
  <rect x="150" y="165" width="55" height="28" rx="4" fill="#052e16" stroke="#22c55e" stroke-width="1"/>
  <text x="177" y="183" text-anchor="middle" fill="#86efac" font-size="10">20 → row</text>
  <rect x="210" y="165" width="55" height="28" rx="4" fill="#052e16" stroke="#22c55e" stroke-width="1"/>
  <text x="237" y="183" text-anchor="middle" fill="#86efac" font-size="10">30 → row</text>
  <rect x="245" y="165" width="55" height="28" rx="4" fill="#052e16" stroke="#fbbf24" stroke-width="1"/>
  <text x="272" y="183" text-anchor="middle" fill="#fde68a" font-size="10">40 → row</text>
  <rect x="305" y="165" width="55" height="28" rx="4" fill="#052e16" stroke="#fbbf24" stroke-width="1"/>
  <text x="332" y="183" text-anchor="middle" fill="#fde68a" font-size="10">50 → row</text>
  <rect x="340" y="165" width="55" height="28" rx="4" fill="#052e16" stroke="#a855f7" stroke-width="1"/>
  <text x="367" y="183" text-anchor="middle" fill="#c084fc" font-size="10">60 → row</text>
  <rect x="400" y="165" width="55" height="28" rx="4" fill="#052e16" stroke="#a855f7" stroke-width="1"/>
  <text x="427" y="183" text-anchor="middle" fill="#c084fc" font-size="10">70 → row</text>
  <text x="290" y="215" text-anchor="middle" fill="#94a3b8" font-size="8">Root → Internal → Leaf (pointer to table row)</text>
  <text x="60" y="60" fill="#f87171" font-size="8" font-weight="700">Hash Index</text>
  <rect x="30" y="70" width="100" height="20" rx="4" fill="#1e3a5f" stroke="#f87171" stroke-width="1.5"/>
  <text x="80" y="84" text-anchor="middle" fill="#fca5a5" font-size="10">hash(key) → bucket</text>
  <text x="80" y="105" text-anchor="middle" fill="#94a3b8" font-size="10">O(1) exact match</text>
  <text x="80" y="118" text-anchor="middle" fill="#f87171" font-size="10">কোনো range নয়</text>
</svg>
</div>
<div class="svg-caption">চিত্র: B-tree ব্যাল্যান্সড কাঠামো — O(log n)-এ অনুসন্ধান। Hash সরাসরি মিল।</div>

<div class="code-block"># — SQL: CREATE INDEX + EXPLAIN ANALYZE —

  -- B-tree index (ডিফল্ট)
  CREATE INDEX idx_user_email ON users(email);

  -- Composite index (বহু-কলাম)
  CREATE INDEX idx_orders_user_date
      ON orders(user_id, created_at DESC);

  -- Hash index (শুধু exact match)
  CREATE INDEX idx_session_hash
      ON sessions(token) USING hash;

  -- Execution plan দেখো:
  EXPLAIN ANALYZE
  SELECT * FROM users WHERE email = 'r@x.com';

  -- আউটপুট:
  -- Index Scan using idx_user_email
  --   (cost=0.29..8.31 rows=1 width=...)
  -- Execution Time: 0.034 ms  # সূচি ছাড়া হতো Seq Scan</div>

<div class="secret-box">🗂️ <strong>Index = সূচিপত্র।</strong> B-tree (range), Hash (exact), Composite (multi-column)। EXPLAIN দিয়ে দেখো ডাটাবেস কীভাবে query execute করছে। কিন্তু index শুধু read দ্রুত করে। যখন একাধিক ব্যবহারকারী একসাথে লেখে? যখন half-complete transaction থাকে? সেই সমাধান আসবে পরের দরজায় — ACID transactions।</div>`,
  senior: {
    title: "Indexing এক নজরে",
    body: `<table class="kv-table"><tr><th>ধারণা</th><th>বিবরণ</th></tr>
<tr><td class="hl">B-Tree</td><td>Bayer-McCreight ১৯৭২ — balanced, O(log n), range query</td></tr>
<tr><td class="hl">Hash Index</td><td>O(1) exact match, কোনো range নয়</td></tr>
<tr><td class="hl">Primary Index</td><td>Primary key — স্বয়ংক্রিয়</td></tr>
<tr><td class="hl">Composite Index</td><td>একাধিক কলাম — (col1, col2)</td></tr>
<tr><td class="hl">Covering Index</td><td>সব query column index-ে — table access নেই</td></tr>
<tr><td class="hl">EXPLAIN</td><td>query execution plan দেখায়</td></tr>
<tr><td class="hl">মূল্য</td><td>storage + slow writes — ভারসাম্য দরকার</td></tr>
<tr><td class="hl">Full Scan → Index</td><td>১০০০ms → ১ms = ১০০০x দ্রুত</td></tr></table>`
  }
});

doors.push({
  num: 4,
  icon: "🔐",
  color: "#2dd4bf",
  name: "লেনদেন প্রহরী",
  subtitle: "The Transaction Guardian",
  tech: "ACID — Atomicity, Consistency, Isolation, Durability (Haerder-Reuter 1983), COMMIT/ROLLBACK, isolation levels, MVCC, 2PL",
  spirit: "আমানত — আস্থা, লেনদেন নিরাপদে ও সম্পূর্ণভাবে সম্পন্ন",
  secret: "ACID = চারটি প্রতিশ্রুতি। Atomicity: সব বা কিছু না। Consistency: নিয়ম মানা। Isolation: একে অপরের থেকে স্বাধীন। Durability: স্থায়ী।",
  recall: {
    q: " ACID-এর A (Atomicity) কী?",
    qen: "What is the A (Atomicity) in ACID?",
    a: "একটি transaction-এর সব ধাপ সফল হবে, না হবে কিছুই না। অর্ধেক থাকবে না।",
    aen: "All steps of a transaction succeed, or none do. No half-states."
  },
  story: `<p class="scene-setting">তুমি একটি ব্যাংক থেকে টাকা পাঠাচ্ছো — ১০০০ টাকা। দুটি ধাপ: তোমার অ্যাকাউন্ট থেকে ১০০০ কমাও, বন্ধুর অ্যাকাউন্টে ১০০০ বাড়াও। কিন্তু যদি প্রথম ধাপের পরে বিদ্যুৎ যায়? তোমার টাকা কমেছে, বন্ধুর বাড়েনি — টাকা হারিয়ে গেল! এটাই ACID ছাড়া দুঃস্বপ্ন। Atomicity বলে — সব বা কিছু না। যদি সম্পূর্ণ না হয়, পুরোটা বাতিল (rollback)।</p>
<p class="scene-setting en">You're sending money from a bank — 1000 taka. Two steps: deduct 1000 from your account, add 1000 to friend's account. But what if power goes after step one? Your money deducted, friend's not added — money vanished! This is the nightmare without ACID. Atomicity says — all or nothing. If not complete, roll back entirely.</p>

<div class="callout info"><span class="co-icon">🔐</span><div><strong>ACID Properties (Haerder-Reuter ১৯৮৩):</strong><br>
<strong>A — Atomicity:</strong> সব বা কিছু না। COMMIT (সব সফল) বা ROLLBACK (সব বাতিল)। অর্ধেক অবস্থা নেই।<br>
<strong>C — Consistency:</strong> প্রতিটি transaction-এর পরে ডাটাবেস বৈধ অবস্থায় থাকে। constraints, triggers, cascades মানা হয়।<br>
<strong>I — Isolation:</strong> concurrent transactions একে অপরের প্রভাবিত করে না। যেন প্রতিটি একা চলছে।<br>
<strong>D — Durability:</strong> COMMIT হওয়ার পরে কোনো power failure, crash — ডেটা থাকবে। disk-এ write হয়েছে।</div></div>

<div class="callout info"><span class="co-icon">📊</span><div><strong>Isolation Levels ( weakest → strongest):</strong><br>
<strong>Read Uncommitted:</strong> সবচেয়ে দ্রুত কিন্তু নোংরা — অন্যের uncommitted ডেটা দেখা যায় (dirty read)<br>
<strong>Read Committed:</strong> শুধু committed ডেটা — PostgreSQL/SQL Server default<br>
<strong>Repeatable Read:</strong> একই transaction-এ পড়া ডেটা পরিবর্তন হবে না — MySQL default<br>
<strong>Serializable:</strong> সর্বোচ্চ isolation — যেন একটা সময়ে একটা transaction। ধীরতম।</div></div>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>Concurrency Anomalies:</strong><br>
<strong>Dirty Read:</strong> অন্যের uncommitted ডেটা পড়ছো — সে rollback করলে ভুল ডেটা!<br>
<strong>Non-Repeatable Read:</strong> একই সারি দুইবার পড়লে ভিন্ন মান — অন্য পরিবর্তন করেছে<br>
<strong>Phantom Read:</strong> নতুন সারি হঠাৎ দেখা যায় — অন্য INSERT করেছে<br>
<strong>Lost Update:</strong> দুটি transaction একই সারি বদলায় — একটির পরিবর্তন হারায়</div></div>

<div class="callout info"><span class="co-icon">🔄</span><div><strong>MVCC (Multi-Version Concurrency Control):</strong><br>
আধুনিক database-গুলো (PostgreSQL, MySQL InnoDB) MVCC ব্যবহার করে। প্রতিটি transaction ডেটার একটি snapshot দেখে। কেউ লিখছে তবু পড়তে পারো — কারণ পুরোনো version আছে। "readers don't block writers, writers don't block readers।" এটাই PostgreSQL-এর গোপন অস্ত্র।</div></div>

<div class="verse">يَا أَيُّهَا الَّذِينَ آمَنُوا أَوْفُوا بِالْعُقُودِ</div>
<div style="font-size:.85rem;color:var(--ink-dim);text-align:center;margin-bottom:1rem">"হে মুমিনরা, তোমরা চুক্তি পূরণ করো।" — কুরআন ৫:১</div>

<p class="scene-setting">এই আয়াত চুক্তি পূরণের নির্দেশ দেয়। ACID হলো ডাটাবেসের চুক্তি — ব্যবহারকারীর সাথে প্রতিশ্রুতি। "তোমার ডেটা নিরাপদ। যদি সমস্যা হয়, সব বাতিল। যদি সফল হয়, চিরকাল থাকবে।" এই চুক্তি পূরণই ACID-এর কাজ।</p>

<div class="callout tip"><span class="co-icon">🔗</span><div><strong>Book ৩৫ (ডিস্ট্রিবিউটেড) Door ৫:</strong> 2PC, Saga pattern — distributed ACID। Book ৪ (সিস্টেম ডিজাইন): Circuit Breaker — transaction failure recovery। LedgerPilot: Django transactions — transaction.atomic() = ACID wrapper।</div></div>

<div class="svg-diagram">
<svg viewBox="0 0 580 250" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto">
  <text x="290" y="25" text-anchor="middle" fill="#e2e8f0" font-size="13" font-weight="900">🔐 ACID: Transaction Lifecycle</text>
  <rect x="30" y="55" width="90" height="50" rx="8" fill="#1e3a5f" stroke="#22d3ee" stroke-width="2"/>
  <text x="75" y="78" text-anchor="middle" fill="#67e8f9" font-size="9" font-weight="700">BEGIN</text>
  <text x="75" y="95" text-anchor="middle" fill="#94a3b8" font-size="10">লেনদেন শুরু</text>
  <defs><marker id="arrD4a" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="#a855f7"/></marker></defs>
  <line x1="120" y1="80" x2="148" y2="80" stroke="#a855f7" stroke-width="2" marker-end="url(#arrD4a)"/>
  <rect x="150" y="55" width="90" height="50" rx="8" fill="#0f172a" stroke="#fbbf24" stroke-width="2"/>
  <text x="195" y="78" text-anchor="middle" fill="#fcd34d" font-size="9" font-weight="700">UPDATE</text>
  <text x="195" y="95" text-anchor="middle" fill="#94a3b8" font-size="10">balance -= 100</text>
  <defs><marker id="arrD4b" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="#a855f7"/></marker></defs>
  <line x1="240" y1="80" x2="268" y2="80" stroke="#a855f7" stroke-width="2" marker-end="url(#arrD4b)"/>
  <rect x="270" y="55" width="90" height="50" rx="8" fill="#0f172a" stroke="#fbbf24" stroke-width="2"/>
  <text x="315" y="78" text-anchor="middle" fill="#fcd34d" font-size="9" font-weight="700">INSERT</text>
  <text x="315" y="95" text-anchor="middle" fill="#94a3b8" font-size="10">log entry</text>
  <defs><marker id="arrD4c" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="#a855f7"/></marker></defs>
  <line x1="360" y1="80" x2="388" y2="80" stroke="#a855f7" stroke-width="2" marker-end="url(#arrD4c)"/>
  <rect x="390" y="40" width="85" height="40" rx="8" fill="#052e16" stroke="#22c55e" stroke-width="2"/>
  <text x="432" y="58" text-anchor="middle" fill="#4ade80" font-size="9" font-weight="700">COMMIT ✓</text>
  <text x="432" y="72" text-anchor="middle" fill="#86efac" font-size="10">স্থায়ী</text>
  <rect x="390" y="90" width="85" height="40" rx="8" fill="#450a0a" stroke="#f87171" stroke-width="2"/>
  <text x="432" y="108" text-anchor="middle" fill="#fca5a5" font-size="9" font-weight="700">ROLLBACK ✗</text>
  <text x="432" y="122" text-anchor="middle" fill="#fca5a5" font-size="10">বাতিল</text>
  <defs><marker id="arrD4d" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="#f87171"/></marker></defs>
  <line x1="360" y1="95" x2="388" y2="105" stroke="#f87171" stroke-width="2" stroke-dasharray="4,3" marker-end="url(#arrD4d)"/>
  <rect x="50" y="150" width="240" height="80" rx="8" fill="#0f172a" stroke="#a855f7" stroke-width="2"/>
  <text x="170" y="172" text-anchor="middle" fill="#c084fc" font-size="9" font-weight="700">MVCC (Multi-Version Concurrency)</text>
  <text x="170" y="192" text-anchor="middle" fill="#94a3b8" font-size="10">T1 reads old version, T2 writes new version</text>
  <text x="170" y="207" text-anchor="middle" fill="#94a3b8" font-size="10">কেউ block হয় না — snapshot isolation</text>
  <text x="170" y="222" text-anchor="middle" fill="#c084fc" font-size="10">PostgreSQL: xmin/xmax tuples</text>
  <rect x="320" y="150" width="230" height="80" rx="8" fill="#0f172a" stroke="#22c55e" stroke-width="2"/>
  <text x="435" y="172" text-anchor="middle" fill="#4ade80" font-size="9" font-weight="700">WAL (Write-Ahead Log)</text>
  <text x="435" y="192" text-anchor="middle" fill="#94a3b8" font-size="10">প্রথমে log লেখো, তারপর data</text>
  <text x="435" y="207" text-anchor="middle" fill="#94a3b8" font-size="10">crash হলে log থেকে পুনরুদ্ধার</text>
  <text x="435" y="222" text-anchor="middle" fill="#4ade80" font-size="10">Durability নিশ্চিত</text>
</svg>
</div>
<div class="svg-caption">চিত্র: Transaction BEGIN থেকে COMMIT/ROLLBACK — MVCC ও WAL দ্বারা নিরাপত্তা।</div>

<div class="code-block"># — SQL + Python: ACID Transaction —

  -- PostgreSQL: দুই ধাপের স্থানান্তর
  BEGIN;
    UPDATE accounts SET balance = balance - 100
        WHERE user_id = 1;
    UPDATE accounts SET balance = balance + 100
        WHERE user_id = 2;
    INSERT INTO transfers (from_id, to_id, amount)
        VALUES (1, 2, 100);
  COMMIT;  -- সব সফল হলে স্থায়ী
  -- ত্রুটি হলে: ROLLBACK;

  # Django ORM (LedgerPilot উদাহরণ):
  from django.db import transaction

  @transaction.atomic          # ACID wrapper
  def transfer_money(from_id, to_id, amt):
      src = Account.objects.get(id=from_id)
      dst = Account.objects.get(id=to_id)
      src.balance -= amt
      dst.balance += amt
      src.save()
      dst.save()  # exception হলে সব rollback</div>

<div class="secret-box">🔐 <strong>ACID = লেনদেনের চার প্রতিশ্রুতি।</strong> Atomicity (সব বা কিছু না), Consistency (বৈধ অবস্থা), Isolation (স্বাধীন), Durability (চিরস্থায়ী)। MVCC দিয়ে concurrent transactions নিরাপদে চলে। কিন্তু ACID শুধু একটি মেশিনে। একাধিক মেশিনে ACID কঠিন — সেটা distributed transaction। সেই যাত্রা শুরু হবে পরের দরজায়।</div>`,
  senior: {
    title: "ACID Transactions এক নজরে",
    body: `<table class="kv-table"><tr><th>Property</th><th>প্রতিশ্রুতি</th></tr>
<tr><td class="hl">Atomicity</td><td>সব বা কিছু না — COMMIT/ROLLBACK</td></tr>
<tr><td class="hl">Consistency</td><td>constraints মানা — বৈধ অবস্থা</td></tr>
<tr><td class="hl">Isolation</td><td>concurrent transactions স্বাধীন</td></tr>
<tr><td class="hl">Durability</td><td>COMMIT = চিরস্থায়ী — crash-safe</td></tr>
<tr><td class="hl">Read Uncommitted</td><td>দ্রুত, dirty read সম্ভব</td></tr>
<tr><td class="hl">Read Committed</td><td>PostgreSQL/SQL Server default</td></tr>
<tr><td class="hl">Repeatable Read</td><td>MySQL default — stable reads</td></tr>
<tr><td class="hl">Serializable</td><td>সর্বোচ্চ isolation, ধীরতম</td></tr>
<tr><td class="hl">MVCC</td><td>multi-version — readers ও writers একসাথে</td></tr></table>`
  }
});

doors.push({
  num: 5,
  icon: "📐",
  color: "#2dd4bf",
  name: "শুদ্ধতার কারিগর",
  subtitle: "The Purity Craftsman",
  tech: "Normalization — Codd 1971, 1NF, 2NF, 3NF, BCNF (Boyce-Codd), denormalization tradeoffs, functional dependency",
  spirit: "তাযকিয়া — পরিশুদ্ধি, উপাত্ত থেকে অসংগতি ও পুনরাবৃত্তি দূর করা",
  secret: "Normalization = একটি টেবিলকে ভাগ করা যাতে কোনো পুনরাবৃত্তি না থাকে। প্রতিটি তথ্য একবারই সংরক্ষিত।",
  recall: {
    q: " 3NF-এর সংজ্ঞা কী?",
    qen: "What is the definition of 3NF?",
    a: "৩NF: প্রতিটি non-key attribute শুধু primary key-এর উপর নির্ভর করে, অন্য কোনো non-key attribute-এর উপর নয়। No transitive dependency।",
    aen: "3NF: every non-key attribute depends ONLY on the primary key, not on other non-key attributes. No transitive dependency."
  },
  story: `<p class="scene-setting">তোমার একটি টেবিল: (student_id, student_name, course_id, course_name, instructor)। এখানে সমস্যা আছে। "Database 101" কোর্সে ৫০ জন শিক্ষার্থী আছে। প্রতিটি সারিতে "Database 101" এবং "Dr. Ahmed" লেখা আছে — ৫০ বার! যদি Dr. Ahmed-এর নাম বদলাতে হয়, ৫০ সারি update করতে হবে। একটি ভুল হলে inconsistency। এটাই redundancy — একই তথ্য একাধিকবার।</p>
<p class="scene-setting en">You have a table: (student_id, student_name, course_id, course_name, instructor). There's a problem. "Database 101" course has 50 students. Each row has "Database 101" and "Dr. Ahmed" — 50 times! If Dr. Ahmed's name changes, update 50 rows. One mistake = inconsistency. This is redundancy — same information multiple times.</p>

<div class="callout info"><span class="co-icon">📐</span><div><strong>Normal Forms (Codd ১৯৭১):</strong><br>
<strong>1NF (First Normal Form):</strong> প্রতিটি সেল একটি মান (atomic)। কোনো repeating group নেই। list নয়, আলাদা সারি।<br>
<strong>2NF (Second Normal Form):</strong> 1NF + কোনো partial dependency নেই। composite key-এর অংশের উপর নির্ভর নয়।<br>
<strong>3NF (Third Normal Form):</strong> 2NF + কোনো transitive dependency নেই। non-key শুধু primary key-এর উপর নির্ভর করে।<br>
<strong>BCNF (Boyce-Codd Normal Form):</strong> 3NF-এর কঠোর সংস্করণ। প্রতিটি determinant একটি candidate key।</div></div>

<div class="callout info"><span class="co-icon">✂️</span><div><strong>টেবিল ভাগ করা (Decomposition):</strong><br>
আগের টেবিল ভাগ করো:<br>
students (student_id, student_name)<br>
courses (course_id, course_name, instructor)<br>
enrollments (student_id, course_id) — junction table<br>
এখন কোনো redundancy নেই। প্রতিটি তথ্য একবারই সংরক্ষিত। Update সহজ, consistent।</div></div>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>Denormalization (ইচ্ছাকৃত পুনরাবৃত্তি):</strong> কখনো কখনো normalization পর্যাপ্ত নয়। অনেক JOIN = slow query। Read-heavy system-এ ইচ্ছাকৃতভাবে redundancy যোগ করা হয় — denormalization। tradeoff: write complexity বনাম read speed। Data warehouse-গুলো সাধারণত denormalized।</div></div>

<div class="callout info"><span class="co-icon">📊</span><div><strong>Anomaly Types (সমস্যা যা normalization সমাধান করে):</strong><br>
<strong>Insertion Anomaly:</strong> নতুন course insert করতে চাও, কিন্তু কোনো student নেই — student_id NULL? সমস্যা!<br>
<strong>Update Anomaly:</strong> Dr. Ahmed-এর নাম ৫০ জায়গায় — সব update করতে হবে।<br>
<strong>Deletion Anomaly:</strong> শেষ শিক্ষার্থী delete করলে course-ও মুছে যায়!</div></div>

<div class="verse">اللَّهُ نُورُ السَّمَاوَاتِ وَالْأَرْضِ</div>
<div style="font-size:.85rem;color:var(--ink-dim);text-align:center;margin-bottom:1rem">"আল্লাহ আসমান ও পৃথিবীর আলো।" — কুরআন ২৪:৩৫</div>

<p class="scene-setting">এই আয়াত আলোর কথা বলে — স্বচ্ছতা। Normalization-ও তেমন — ডেটাকে স্বচ্ছ ও সুসংগঠিত করে। প্রতিটি তথ্য একটি নির্দিষ্ট স্থানে, কোনো পুনরাবৃত্তি নেই। স্বচ্ছতা ও সঙ্গতি — এটাই normalization-এর লক্ষ্য।</p>

<div class="callout tip"><span class="co-icon">🔗</span><div><strong>Book ৪ (সিস্টেম ডিজাইন):</strong> Database schema design — normalization-এর ব্যবহারিক প্রয়োগ। LedgerPilot: Django models — ForeignKey, ManyToMany = normalized relationships।</div></div>

<div class="svg-diagram">
<svg viewBox="0 0 580 250" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto">
  <text x="290" y="25" text-anchor="middle" fill="#e2e8f0" font-size="13" font-weight="900">📐 Normalization: Redundancy → Purity</text>
  <rect x="20" y="50" width="160" height="170" rx="8" fill="#450a0a" stroke="#f87171" stroke-width="2"/>
  <text x="100" y="72" text-anchor="middle" fill="#fca5a5" font-size="9" font-weight="700">Unnormalized</text>
  <text x="100" y="92" text-anchor="middle" fill="#94a3b8" font-size="10">id | name | orders</text>
  <text x="100" y="108" text-anchor="middle" fill="#fca5a5" font-size="10">1 | Rakib | 50,30,90</text>
  <text x="100" y="122" text-anchor="middle" fill="#fca5a5" font-size="10">2 | Sara | 20</text>
  <text x="100" y="148" text-anchor="middle" fill="#f87171" font-size="10">⚠ repeating group</text>
  <text x="100" y="163" text-anchor="middle" fill="#f87171" font-size="10">⚠ এক কলামে একাধিক মান</text>
  <text x="100" y="183" text-anchor="middle" fill="#94a3b8" font-size="10">dept: Eng, Eng, Eng</text>
  <text x="100" y="198" text-anchor="middle" fill="#f87171" font-size="10">⚠ redundancy</text>
  <defs><marker id="arrD5" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="#a855f7"/></marker></defs>
  <line x1="180" y1="135" x2="228" y2="135" stroke="#a855f7" stroke-width="2" marker-end="url(#arrD5)"/>
  <text x="204" y="128" text-anchor="middle" fill="#c084fc" font-size="10">1NF</text>
  <rect x="230" y="50" width="150" height="170" rx="8" fill="#1e3a5f" stroke="#22d3ee" stroke-width="2"/>
  <text x="305" y="72" text-anchor="middle" fill="#67e8f9" font-size="9" font-weight="700">3NF (Normalized)</text>
  <text x="305" y="92" text-anchor="middle" fill="#7dd3fc" font-size="10">users (table)</text>
  <text x="305" y="108" text-anchor="middle" fill="#86efac" font-size="10">id | name | dept_id</text>
  <text x="305" y="122" text-anchor="middle" fill="#86efac" font-size="10">1 | Rakib | 10</text>
  <text x="305" y="136" text-anchor="middle" fill="#86efac" font-size="10">2 | Sara | 20</text>
  <text x="305" y="158" text-anchor="middle" fill="#7dd3fc" font-size="10">orders (table)</text>
  <text x="305" y="174" text-anchor="middle" fill="#fde68a" font-size="10">id | uid | amt</text>
  <text x="305" y="188" text-anchor="middle" fill="#fde68a" font-size="10">10 | 1 | $50</text>
  <text x="305" y="202" text-anchor="middle" fill="#fde68a" font-size="10">11 | 1 | $30</text>
  <defs><marker id="arrD5b" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="#22c55e"/></marker></defs>
  <line x1="380" y1="135" x2="428" y2="135" stroke="#22c55e" stroke-width="2" marker-end="url(#arrD5b)"/>
  <text x="404" y="128" text-anchor="middle" fill="#4ade80" font-size="10">FK</text>
  <rect x="430" y="50" width="130" height="80" rx="8" fill="#052e16" stroke="#22c55e" stroke-width="2"/>
  <text x="495" y="72" text-anchor="middle" fill="#4ade80" font-size="9" font-weight="700">departments</text>
  <text x="495" y="92" text-anchor="middle" fill="#86efac" font-size="10">id | name</text>
  <text x="495" y="108" text-anchor="middle" fill="#86efac" font-size="10">10 | Eng</text>
  <text x="495" y="122" text-anchor="middle" fill="#86efac" font-size="10">20 | Sales</text>
  <rect x="430" y="150" width="130" height="70" rx="8" fill="#0f172a" stroke="#fbbf24" stroke-width="2"/>
  <text x="495" y="170" text-anchor="middle" fill="#fcd34d" font-size="8" font-weight="700">Normal Forms</text>
  <text x="495" y="186" text-anchor="middle" fill="#fde68a" font-size="10">1NF: atomic values</text>
  <text x="495" y="199" text-anchor="middle" fill="#fde68a" font-size="10">2NF: no partial dep</text>
  <text x="495" y="212" text-anchor="middle" fill="#fde68a" font-size="10">3NF: no transitive</text>
</svg>
</div>
<div class="svg-caption">চিত্র: অসংগঠিত ডেটা থেকে ৩টি স্বাভাবিক টেবিলে রূপান্তর — redundancy দূর।</div>

<div class="code-block"># — SQL: Normalization ধাপে ধাপে —

  -- ❌ অস্বাভাবিক (0NF): এক কলামে একাধিক মান
  CREATE TABLE bad_orders (
      id INT, customer_name TEXT,
      items TEXT  -- "pen, paper, stapler"
  );

  -- ✅ 1NF: প্রতিটি কলাম atomic
  CREATE TABLE orders_1nf (
      order_id INT, item_name TEXT, qty INT
  );

  -- ✅ 3NF: আলাদা টেবিল, FK দিয়ে সম্পর্ক
  CREATE TABLE customers (
      id SERIAL PRIMARY KEY,
      name TEXT NOT NULL,
      dept_id INT REFERENCES departments(id)
  );
  CREATE TABLE orders (
      id SERIAL PRIMARY KEY,
      customer_id INT REFERENCES customers(id),
      total DECIMAL(10,2)
  );
  -- redundancy দূর, consistency নিশ্চিত</div>

<div class="secret-box">📐 <strong>Normalization = উপাত্তের পরিশুদ্ধি।</strong> 1NF → 2NF → 3NF → BCNF। প্রতিটি ধাপে redundancy কমে, consistency বাড়ে। কিন্তু কখনো খুব বেশি normalization = খুব বেশি JOIN = slow query। সেখানে আসে denormalization। কিন্তু relational database সব সমস্যার সমাধান নয়। কিছু ডেটা relational নয় — documents, graphs, key-value। সেই বিকল্প আসবে পরের দরজায় — NoSQL।</div>`,
  senior: {
    title: "Normalization এক নজরে",
    body: `<table class="kv-table"><tr><th>Normal Form</th><th>নিয়ম</th></tr>
<tr><td class="hl">1NF</td><td>atomic values, no repeating groups</td></tr>
<tr><td class="hl">2NF</td><td>1NF + no partial dependency on composite key</td></tr>
<tr><td class="hl">3NF</td><td>2NF + no transitive dependency</td></tr>
<tr><td class="hl">BCNF</td><td>3NF stricter — every determinant is a candidate key</td></tr>
<tr><td class="hl">Redundancy</td><td>একই তথ্য একাধিকবার — update anomaly</td></tr>
<tr><td class="hl">Decomposition</td><td>বড় টেবিল ভাগ করে ছোট টেবিলে</td></tr>
<tr><td class="hl">Denormalization</td><td>ইচ্ছাকৃত redundancy — read speed জন্য</td></tr></table>`
  }
});
