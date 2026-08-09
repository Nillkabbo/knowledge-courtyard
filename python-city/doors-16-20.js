// ════════════════════════════════════════════════════════════
// THE PYTHON CITY — DOORS 16-20 (REAL WORLD GUILDS)
// 16. Census Bureau: Data Analysis    17. Spice Route: Web Scraping
// 18. Embassy: Building APIs          19. Clockmaker: Automation
// 20. Master Builder: Synthesis + How to Think
// ════════════════════════════════════════════════════════════

// ── GUILD 16: CENSUS BUREAU — DATA ANALYSIS ──
doors.push({
  num:16, icon:"📊", color:"#2dd4bf", name:"আদমশুমারি দপ্তর",
  subtitle:"The Census Bureau", tech:"Data Analysis — pandas, numpy, visualization",
  spirit:"হিসাব — accounting/calculation, from Quran 84:8 (will receive account in right hand)",
  secret:"pandas = data ছুরি। DataFrame = স্প্রেডশিট কোডে। read_csv → filter → group → aggregate → visualize। বাস্তব জগতে ৯০% data টেবিল আকারে — pandas দিয়ে analyze করো।",
  recall:{
    q:"pandas DataFrame কী? groupby কী করে?",
    qen:"What is a pandas DataFrame? What does groupby do?",
    a:"DataFrame = 2D টেবিল (row + column), স্প্রেডশিটের মতো। groupby = এক কলাম দিয়ে গ্রুপ করো, তারপর aggregate (sum, mean, count)। যেমন: শহর অনুযায়ী মোট বিক্রি।",
    aen:"DataFrame = 2D table (like spreadsheet). groupby = group by a column, then aggregate (sum/mean/count)."
  },
  story:`
<p class="scene-setting">ষোড়শ গিল্ড। আদমশুমারি দপ্তর। কাগজের স্তূপ, হিসাবের শব্দ, বড় বড় টেবিল। পরিসংখ্যানবিদ সাবিনা একটা বিশাল স্প্রেডশিট দেখালেন — হাজার হাজার row, কয়েক ডজন column। "এই তথ্য থেকে insight বের করতে হবে," তিনি বলেন। "কোন শহরে সবচেয়ে বেশি বিক্রি? কোন মাসে চাহিদা বেশি? pandas দিয়ে সেকেন্ডে উত্তর। চলো একটা একটা করে শিখি।"</p>
<p class="scene-setting en">Sixteenth guild. The Census Bureau. Piles of paper, sound of calculations, large tables. Statistician Sabina shows a massive spreadsheet — thousands of rows, dozens of columns. "We must extract insight from this data," she says. "Which city has the most sales? Which month has highest demand? With pandas, answers in seconds. Let's learn step by step."</p>

<div class="dialogue">প্রথম প্রশ্ন: তোমার ৫০,০০০ লেনদেনের CSV। Excel-এ খুললে hang হয়ে যায়। pandas দিলে সেকেন্ডে লোড, সেকেন্ডে analyze। DataFrame = স্প্রেডশিট কোডে। read → filter → group → visualize।</div>
<div class="dialogue en">First question: 50,000 transaction CSV. Excel hangs trying to open it. pandas loads it in seconds, analyzes in seconds. DataFrame = spreadsheet in code. read → filter → group → visualize.</div>

<div class="code-block"># ── STEP 1: What is pandas? ──
# pandas is Python's data analysis library.
# Think of it as Excel, but in code — much faster and more powerful.

# Install (run in terminal):
# pip install pandas matplotlib

# Import:
import pandas as pd

# The core object is a DataFrame — a 2D table (like a spreadsheet).
# Each column has a name, each row has an index.

# Create a DataFrame from a dictionary:
data = {
    "name": ["Fatima", "Ahmed", "Sara", "Bob"],
    "age": [25, 30, 28, 35],
    "city": ["Dhaka", "Chittagong", "Dhaka", "Sylhet"],
    "salary": [50000, 60000, 55000, 70000],
}

df = pd.DataFrame(data)
print(df)
#      name  age       city  salary
# 0  Fatima   25     Dhaka   50000
# 1   Ahmed   30  Chittagong 60000
# 2    Sara   28     Dhaka   55000
# 3     Bob   35    Sylhet   70000

# Each COLUMN is a "Series" (like a list with an index):
print(df["name"])      # the name column
print(type(df))        # <class 'pandas.DataFrame'>
print(type(df["name"]))  # <class 'pandas.Series'></div>

<div class="code-block"># ── STEP 2: Loading data from files ──
# In the real world, you load data from CSV, Excel, or databases.

import pandas as pd

# From CSV (most common):
df = pd.read_csv("transactions.csv")

# From Excel:
# df = pd.read_excel("data.xlsx", sheet_name="Sheet1")

# From JSON:
# df = pd.read_json("data.json")

# See what you loaded:
print(df.head())      # first 5 rows
print(df.tail())      # last 5 rows
print(df.shape)       # (50000, 6) — rows, columns
print(df.columns)     # column names
print(df.dtypes)      # data types of each column
print(df.info())      # summary: types, non-null counts, memory

# Quick statistics:
print(df.describe())
#        amount       tax
# count  50000   50000
# mean    1250    250
# std      850    170
# min      50     10
# 25%     500    100
# 50%    1000    200
# 75%    1800    360
# max   15000   3000</div>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>ভুলের গল্প:</strong> সাবিনা বললেন — এক বিশ্লেষক ৫০,০০০ row Excel-ে খুললেন। Excel hang — কম্পিউটার ফ্রিজ। pandas দিলে ৫০,০০০ row সেকেন্ডের মধ্যে। ৫০ লাখ row? Excel অসম্ভব, pandas সেকেন্ডে। সঠিক tool ছাড়া data = বোঝা, সঠিক tool দিলে = সম্পদ।</div></div>

<div class="code-block"># ── STEP 3: Selecting and filtering ──
# Select columns, filter rows — like SQL WHERE.

import pandas as pd

df = pd.read_csv("transactions.csv")

# SELECT specific columns:
amounts = df["amount"]               # one column
subset = df[["city", "amount"]]      # multiple columns

# FILTER rows with conditions:
# Completed transactions over 1000:
big_orders = df[(df["status"] == "completed") &amp; (df["amount"] &gt; 1000)]

# Only Dhaka orders:
dhaka = df[df["city"] == "Dhaka"]

# Multiple conditions (AND):
result = df[(df["city"] == "Dhaka") &amp; (df["amount"] &gt; 500)]

# Multiple conditions (OR):
result = df[(df["city"] == "Dhaka") | (df["city"] == "Sylhet")]

# isin — check if value is in a list:
big_cities = df[df["city"].isin(["Dhaka", "Chittagong", "Sylhet"])]

# String contains:
emails = df[df["email"].str.contains("@gmail")]

# Sort by a column:
sorted_df = df.sort_values("amount", ascending=False)  # highest first

# Select first N rows:
top_10 = df.nlargest(10, "amount")   # 10 biggest amounts
bottom_5 = df.nsmallest(5, "amount")  # 5 smallest</div>

<div class="code-block"># ── STEP 4: groupby — aggregate by category ──
# groupby splits data into groups, applies a function, combines results.
# Like SQL GROUP BY or Excel pivot table.

import pandas as pd

df = pd.read_csv("transactions.csv")

# Total sales per city:
sales_by_city = df.groupby("city")["amount"].sum()
print(sales_by_city.sort_values(ascending=False))
# city
# Dhaka         2500000
# Chittagong    1200000
# Sylhet         800000

# Average order per month:
monthly_avg = df.groupby("month")["amount"].mean()

# Count orders per product:
product_counts = df["product"].value_counts()

# Multiple aggregations at once:
summary = df.groupby("city")["amount"].agg(["sum", "mean", "count"])
print(summary)
#              sum    mean  count
# city
# Dhaka    2500000  1250.0   2000
# Sylhet    800000  1000.0    800

# groupby multiple columns:
city_product = df.groupby(["city", "product"])["amount"].sum()
# Sales for each product in each city</div>

<div class="code-block"># ── STEP 5: Creating new columns ──
# Add calculated columns — like Excel formulas.

import pandas as pd

df = pd.read_csv("transactions.csv")

# Simple math:
df["tax"] = df["amount"] * 0.20           # 20% tax
df["total"] = df["amount"] + df["tax"]    # amount + tax

# Conditional column with np.where:
import numpy as np
df["category"] = np.where(df["amount"] &gt; 1000, "large", "small")

# Bin values into categories:
df["size"] = pd.cut(
    df["amount"],
    bins=[0, 100, 1000, float("inf")],
    labels=["small", "medium", "large"]
)
# 0-100 → small, 100-1000 → medium, 1000+ → large

# Date column operations:
df["date"] = pd.to_datetime(df["date"])
df["month"] = df["date"].dt.month        # extract month number
df["day_of_week"] = df["date"].dt.day_name()  # Monday, Tuesday...
df["year_month"] = df["date"].dt.to_period("M")  # 2024-01

# String operations:
df["email_domain"] = df["email"].str.split("@").str[-1]
df["name_upper"] = df["name"].str.upper()</div>

<div class="code-block"># ── STEP 6: Merging DataFrames (SQL JOIN) ──
# Combine data from multiple tables — like SQL JOIN.

import pandas as pd

orders = pd.DataFrame({
    "order_id": [1, 2, 3],
    "customer_id": [101, 102, 101],
    "amount": [500, 300, 800],
})

customers = pd.DataFrame({
    "customer_id": [101, 102, 103],
    "name": ["Fatima", "Ahmed", "Sara"],
    "city": ["Dhaka", "Chittagong", "Sylhet"],
})

# INNER JOIN (most common — only matching rows):
merged = orders.merge(customers, on="customer_id")
print(merged)
#    order_id  customer_id  amount    name       city
# 0         1          101     500  Fatima      Dhaka
# 1         2          102     300   Ahmed  Chittagong
# 2         3          101     800  Fatima      Dhaka

# LEFT JOIN (keep all left rows, fill missing right):
left = orders.merge(customers, on="customer_id", how="left")

# RIGHT JOIN (keep all right rows):
right = orders.merge(customers, on="customer_id", how="right")

# OUTER JOIN (keep everything):
outer = orders.merge(customers, on="customer_id", how="outer")

# When column names differ:
# merged = df1.merge(df2, left_on="id", right_on="user_id")</div>

<div class="code-block"># ── STEP 7: Time series analysis ──
# pandas excels at date/time data.

import pandas as pd

df = pd.read_csv("sales.csv")
df["date"] = pd.to_datetime(df["date"])

# Set date as index (essential for time series):
df = df.set_index("date")

# Resample — group by time period:
monthly = df.resample("ME")["amount"].sum()    # ME = month end
weekly = df.resample("W")["amount"].mean()     # weekly average
yearly = df.resample("YE")["amount"].sum()     # yearly total

# Rolling average — smooth out fluctuations:
df["7day_avg"] = df["amount"].rolling(7).mean()    # 7-day average
df["30day_avg"] = df["amount"].rolling(30).mean()  # 30-day average

# Percentage change:
df["pct_change"] = df["amount"].pct_change() * 100  # % change

# Shift — compare to previous period:
df["prev_month"] = df["amount"].shift(1)  # previous row's value
df["growth"] = df["amount"] - df["prev_month"]

# Date range — generate dates:
dates = pd.date_range("2024-01-01", "2024-12-31", freq="D")  # daily</div>

<div class="code-block"># ── STEP 8: Visualization ──
# pandas + matplotlib = quick charts.

import pandas as pd
import matplotlib.pyplot as plt

df = pd.read_csv("transactions.csv")

# Bar chart — sales by city:
sales_by_city = df.groupby("city")["amount"].sum()
sales_by_city.plot(kind="bar", color="#2dd4bf", figsize=(8, 5))
plt.title("Total Sales by City")
plt.ylabel("Revenue (taka)")
plt.tight_layout()
plt.savefig("sales_by_city.png")
plt.close()

# Line chart — monthly trend:
df["date"] = pd.to_datetime(df["date"])
monthly = df.set_index("date").resample("ME")["amount"].sum()
monthly.plot(kind="line", color="#34d399", linewidth=2, marker="o")
plt.title("Monthly Revenue Trend")
plt.ylabel("Revenue")
plt.savefig("monthly_trend.png")
plt.close()

# Histogram — distribution of order amounts:
df["amount"].plot(kind="hist", bins=50, color="#2dd4bf", edgecolor="white")
plt.title("Distribution of Order Amounts")
plt.xlabel("Amount")
plt.savefig("amount_distribution.png")
plt.close()

# Scatter plot — relationship between two variables:
df.plot(kind="scatter", x="quantity", y="amount", color="#34d399")
plt.title("Quantity vs Amount")
plt.savefig("scatter.png")
plt.close()</div>

<div class="code-block"># ── STEP 9: Pivot tables ──
# 2D aggregation — rows × columns, like Excel pivot table.

import pandas as pd

df = pd.read_csv("transactions.csv")

# City × Month revenue matrix:
pivot = df.pivot_table(
    values="amount",       # what to aggregate
    index="city",          # rows
    columns="month",       # columns
    aggfunc="sum",         # how to aggregate
    fill_value=0,          # replace NaN with 0
)
print(pivot)
# month       Jan   Feb   Mar
# city
# Dhaka     200K  250K  180K
# Chittagong 100K  120K   90K
# Sylhet     80K   70K   60K

# Multiple aggregations:
pivot2 = df.pivot_table(
    values="amount",
    index="city",
    columns="product",
    aggfunc=["sum", "mean"],
)

# Cross-tab — count combinations:
cross = pd.crosstab(df["city"], df["product"])
# How many of each product sold in each city</div>

<div class="code-block"># ── STEP 10: Full analysis pipeline ──
# A complete real-world data analysis in one pipeline.

import pandas as pd

df = pd.read_csv("transactions.csv")

# THE POWER: 5 lines that replace 500 in Excel:
insight = (
    df[df["status"] == "completed"]          # filter
    .groupby("city")["amount"]               # group
    .agg(["sum", "mean", "count"])           # aggregate
    .sort_values("sum", ascending=False)     # sort
)
print(insight)
#               sum    mean  count
# city
# Dhaka     2500000  1250.0   2000
# Sylhet     800000  1000.0    800

# Export results:
insight.to_csv("sales_summary.csv")

# To Excel with multiple sheets:
with pd.ExcelWriter("report.xlsx") as writer:
    insight.to_excel(writer, sheet_name="Summary")
    df.describe().to_excel(writer, sheet_name="Statistics")

# QUICK REFERENCE:
# ┌──────────────────────┬────────────────────────────────┐
# │ Task                 │ Code                           │
# ├──────────────────────┼────────────────────────────────┤
# │ Load CSV             │ pd.read_csv("f.csv")           │
# │ See first rows       │ df.head()                      │
# │ Filter rows          │ df[df["x"] > 0]                │
# │ Select columns       │ df[["col1", "col2"]]           │
# │ Group + aggregate    │ df.groupby("x")["y"].sum()     │
# │ Create column        │ df["new"] = df["x"] * 2        │
# │ Sort                 │ df.sort_values("x")            │
# │ Merge two tables     │ df1.merge(df2, on="id")        │
# │ Pivot table          │ df.pivot_table(...)            │
# │ Export to CSV        │ df.to_csv("out.csv")           │
# │ Chart                │ df.plot(kind="bar")            │
# └──────────────────────┴────────────────────────────────┘</div>

<div class="diagram">
  <div class="diag-title">pandas Pipeline — CSV → Insight</div>
  <svg viewBox="0 0 560 230" xmlns="http://www.w3.org/2000/svg">
    <defs><marker id="arrPD" markerWidth="6" markerHeight="6" refX="4" refY="3" orient="auto"><path d="M0,0 L4,3 L0,6" fill="#34d399"/></marker></defs>
    <!-- CSV -->
    <rect x="10" y="20" width="100" height="50" rx="6" fill="rgba(251,191,36,0.06)" stroke="#fbbf24" stroke-width="1.5"/>
    <text x="60" y="38" text-anchor="middle" fill="#fbbf24" font-size="8" font-weight="bold">CSV/Excel</text>
    <text x="60" y="52" text-anchor="middle" fill="#9a93b8" font-size="6">50K rows</text>
    <text x="60" y="62" text-anchor="middle" fill="#9a93b8" font-size="6">raw data</text>
    <line x1="110" y1="45" x2="140" y2="45" stroke="#34d399" stroke-width="1.5" marker-end="url(#arrPD)"/>
    <!-- DataFrame -->
    <rect x="145" y="20" width="100" height="50" rx="6" fill="rgba(45,212,191,0.08)" stroke="#2dd4bf" stroke-width="2"/>
    <text x="195" y="38" text-anchor="middle" fill="#2dd4bf" font-size="8" font-weight="bold">DataFrame</text>
    <text x="195" y="52" text-anchor="middle" fill="#9a93b8" font-size="6">read_csv()</text>
    <text x="195" y="62" text-anchor="middle" fill="#9a93b8" font-size="6">in-memory table</text>
    <line x1="245" y1="45" x2="275" y2="45" stroke="#34d399" stroke-width="1.5" marker-end="url(#arrPD)"/>
    <!-- Transform -->
    <rect x="280" y="20" width="100" height="50" rx="6" fill="rgba(82,196,26,0.06)" stroke="#52c41a" stroke-width="1.5"/>
    <text x="330" y="38" text-anchor="middle" fill="#52c41a" font-size="8" font-weight="bold">Transform</text>
    <text x="330" y="52" text-anchor="middle" fill="#9a93b8" font-size="6">filter/group</text>
    <text x="330" y="62" text-anchor="middle" fill="#9a93b8" font-size="6">pivot/merge</text>
    <line x1="380" y1="45" x2="410" y2="45" stroke="#34d399" stroke-width="1.5" marker-end="url(#arrPD)"/>
    <!-- Insight -->
    <rect x="415" y="20" width="135" height="50" rx="6" fill="rgba(167,139,250,0.08)" stroke="#a78bfa" stroke-width="2"/>
    <text x="482" y="38" text-anchor="middle" fill="#a78bfa" font-size="8" font-weight="bold">Insight + Chart</text>
    <text x="482" y="52" text-anchor="middle" fill="#9a93b8" font-size="6">plot / export</text>
    <text x="482" y="62" text-anchor="middle" fill="#9a93b8" font-size="6">decision</text>
    <!-- Operations -->
    <rect x="10" y="90" width="540" height="60" rx="6" fill="rgba(45,212,191,0.06)" stroke="rgba(45,212,191,0.2)" stroke-width="1"/>
    <text x="280" y="108" text-anchor="middle" fill="#34d399" font-size="8" font-weight="bold">Key Operations</text>
    <text x="280" y="124" text-anchor="middle" fill="#9a93b8" font-size="7">read_csv · filter · groupby · pivot_table · merge · resample</text>
    <text x="280" y="138" text-anchor="middle" fill="#9a93b8" font-size="7">agg(sum/mean/count) · sort_values · cut/bins · rolling</text>
    <!-- numpy -->
    <rect x="10" y="165" width="540" height="50" rx="6" fill="rgba(251,191,36,0.04)" stroke="rgba(251,191,36,0.15)" stroke-width="1"/>
    <text x="280" y="183" text-anchor="middle" fill="#fbbf24" font-size="8" font-weight="bold">numpy = numerical engine (pandas-এর নিচে)</text>
    <text x="280" y="198" text-anchor="middle" fill="#9a93b8" font-size="7">np.array · np.mean/std · vectorized ops (100x faster than loops)</text>
    <text x="280" y="210" text-anchor="middle" fill="#9a93b8" font-size="7">matplotlib: df.plot(kind="bar/line") → chart সেকেন্ডে</text>
  </svg>
  <div class="diag-cap">pandas = data pipeline। read_csv → filter → groupby → pivot → plot → insight। Excel-এর শতগুণ শক্তি।</div>
</div>

<div class="dialogue">হিসাব — হিসাব, গণনা। কুরআনে আল্লাহ বলেন — যে ডান হাতে হিসাব পাবে (৮৪:৮)। হিসাব হলো প্রতিটা ক্রিয়ার সঠিক মূল্যায়ন। Data analysis হলো হিসাব — প্রতিটা সংখ্যার অর্থ খোঁজা। যে তথ্য বুঝে সিদ্ধান্ত নেয়, সে অন্ধ অনুমানে নয় — প্রমাণে চলে।</div>
<div class="dialogue en">Hisab — accounting, calculation. Allah says — whoever receives their account in the right hand (84:8). Hisab is evaluating each action correctly. Data analysis is hisab — finding meaning in each number. One who decides based on data walks by evidence, not blind assumption.</div>

<div class="secret-box">📊 pandas: read_csv → filter → groupby → pivot → plot। DataFrame = কোডে স্প্রেডশিট। ৫০K row সেকেন্ডে। numpy = numerical engine।</div>
`,
  senior:{
    title:"Data Analysis — Senior Notes",
    body:`<table class="kv-table">
<tr><th>Task</th><th>Code</th></tr>
<tr><td class="hl">Load</td><td>df = pd.read_csv("file.csv")</td></tr>
<tr><td class="hl">Filter</td><td>df[(df.x &gt; 5) &amp; (df.y == "a")]</td></tr>
<tr><td class="hl">Group + Aggregate</td><td>df.groupby("city")["amount"].sum()</td></tr>
<tr><td class="hl">Pivot</td><td>df.pivot_table(values, index, columns, aggfunc)</td></tr>
<tr><td class="hl">Merge</td><td>df1.merge(df2, on="id")</td></tr>
<tr><td class="hl">Time series</td><td>df.resample("M")["col"].sum()</td></tr>
<tr><td class="hl">Plot</td><td>df.plot(kind="bar")</td></tr>
</table>
<p><strong>Cross-ref:</strong> Book 29 (Math for ML) Door 14-16-এ numpy দেখবে। Book 8 (LLM Anatomy)-এ tensor operations দেখবে। Book 44 (Data Engineering) পুরো বই।</p>`
  }
});

// ── GUILD 17: SPICE ROUTE — WEB SCRAPING ──
doors.push({
  num:17, icon:"🌶️", color:"#34d399", name:"মসলা পথ",
  subtitle:"The Spice Route", tech:"Web Scraping — requests, BeautifulSoup, APIs",
  spirit:"তলাশ — search/seeking, from Quran 93:7 (He found you lost and guided you)",
  secret:"Web scraping = ইন্টারনেট থেকে তথ্য সংগ্রহ। requests (HTTP), BeautifulSoup (HTML parse), API (structured data)। যেকোনো ওয়েবসাইটের তথ্য কোডে আনো — price, news, weather, product। কিন্তু robots.txt ও rate limit মেনে চলো।",
  recall:{
    q:"requests + BeautifulSoup দিয়ে কীভাবে webpage scrape করবে?",
    qen:"How do you scrape a webpage with requests + BeautifulSoup?",
    a:"requests.get(url) → HTML পাও। BeautifulSoup(html, 'html.parser') → parse করো। soup.find_all('tag', class='x') → উপাদান বেছো। .text → লেখা পাও। সবসময় robots.txt ও ToS মেনে চলো।",
    aen:"requests.get(url) → get HTML. BeautifulSoup(html) → parse. soup.find_all() → extract elements. Respect robots.txt."
  },
  story:`
<p class="scene-setting">সপ্তদশ গিল্ড। মসলা পথ। শুকনো মসলার গন্ধ, বস্তার স্তূপ, ব্যবসায়ীদের কোলাহল। ব্যবসায়ী জাকির দূর দেশ থেকে মসলা এনে সাজাচ্ছেন। "তথ্যও মসলার মতো," তিনি বলেন। "ইন্টারনেটে ছড়িয়ে আছে — price, news, weather, review। সেগুলো সংগ্রহ করতে হবে। requests দিয়ে আনো, BeautifulSoup দিয়ে ছাঁকো। চলো একটা একটা করে শিখি।"</p>
<p class="scene-setting en">Seventeenth guild. The Spice Route. Smell of dried spices, piles of sacks, noise of merchants. Merchant Zakir arranges spices brought from distant lands. "Data is like spices," he says. "Scattered across the internet — prices, news, weather, reviews. Collect them. Fetch with requests, filter with BeautifulSoup. Let's learn step by step."</p>

<div class="dialogue">প্রথম প্রশ্ন: তুমি ১০টা কম্পিউটারের দাম জানতে চাও। এক এক করে সাইট খুলবে? Web scraping দিলে কোড স্বয়ং সব সাইট থেকে দাম সংগ্রহ করবে। অথবা API থাকলে আরও সহজ — structured JSON সরাসরি।</div>
<div class="dialogue en">First question: you want prices from 10 stores. Open each manually? Web scraping lets your code collect prices from all sites automatically. Or if an API exists — even easier, structured JSON directly.</div>

<div class="code-block"># ── STEP 1: What is web scraping? ──
# Websites show data (prices, news, weather) in your browser.
# Web scraping = programmatically collecting that data.

# Two ways to get data from the web:

# 1. API (PREFERRED) — the website GIVES you structured data (JSON)
#    Example: weather API returns {"temp": 25, "city": "Dhaka"}

# 2. SCRAPING (FALLBACK) — you download the HTML page and parse it
#    Example: download a product page, extract the price from HTML

# Install the tools (in terminal):
# pip install requests beautifulsoup4

# requests — fetch web pages (sends HTTP requests)
# BeautifulSoup — parse HTML (extract data from it)

import requests
from bs4 import BeautifulSoup

# The basic scraping workflow:
# 1. Fetch the page with requests.get()
# 2. Parse the HTML with BeautifulSoup()
# 3. Extract data with .find() / .find_all() / .select()
# 4. Save the data</div>

<div class="code-block"># ── STEP 2: Fetching a web page ──
# requests.get() downloads a web page — like your browser does.

import requests

# Simple GET request:
response = requests.get("https://httpbin.org/get")
print(response.status_code)  # 200 (OK)
print(response.text[:200])   # first 200 characters of the response

# Always check the status code:
if response.status_code == 200:
    print("Success!")
elif response.status_code == 404:
    print("Page not found")
elif response.status_code == 500:
    print("Server error")

# Set a User-Agent — some sites block requests without one:
headers = {
    "User-Agent": "Mozilla/5.0 (educational scraper; contact@example.com)"
}
response = requests.get("https://example.com", headers=headers)

# Get the raw HTML:
html = response.text
print(html[:500])  # see the HTML structure</div>

<div class="code-block"># ── STEP 3: Parsing HTML with BeautifulSoup ──
# BeautifulSoup turns raw HTML into a searchable tree.

from bs4 import BeautifulSoup

# Sample HTML:
html = """
&lt;html&gt;
&lt;body&gt;
    &lt;h1&gt;Welcome to the Shop&lt;/h1&gt;
    &lt;div class="product"&gt;
        &lt;h3 class="title"&gt;Laptop X&lt;/h3&gt;
        &lt;span class="price"&gt;50,000 taka&lt;/span&gt;
        &lt;a href="/laptop-x"&gt;Details&lt;/a&gt;
    &lt;/div&gt;
    &lt;div class="product"&gt;
        &lt;h3 class="title"&gt;Phone Y&lt;/h3&gt;
        &lt;span class="price"&gt;25,000 taka&lt;/span&gt;
        &lt;a href="/phone-y"&gt;Details&lt;/a&gt;
    &lt;/div&gt;
&lt;/body&gt;
&lt;/html&gt;
"""

# Parse the HTML:
soup = BeautifulSoup(html, "html.parser")

# Find the page title:
title = soup.find("h1").text
print(title)  # Welcome to the Shop

# Find ALL products:
products = soup.find_all("div", class_="product")
print(f"Found {len(products)} products")  # Found 2 products</div>

<div class="code-block"># ── STEP 4: Extracting data — find and find_all ──
# BeautifulSoup gives you powerful search tools.

soup = BeautifulSoup(html, "html.parser")

# find() — returns the FIRST matching element:
first_title = soup.find("h3", class_="title")
print(first_title.text)  # Laptop X

# find_all() — returns ALL matching elements (a list):
all_titles = soup.find_all("h3", class_="title")
for title in all_titles:
    print(title.text)
# Laptop X
# Phone Y

# Get text from an element:
price = soup.find("span", class_="price").text
print(price.strip())  # 50,000 taka

# Get an attribute (href, src, etc.):
link = soup.find("a")["href"]
print(link)  # /laptop-x

# Extract ALL products into a list of dicts:
products = []
for product in soup.find_all("div", class_="product"):
    products.append({
        "name": product.find("h3", class_="title").text,
        "price": product.find("span", class_="price").text.strip(),
        "link": product.find("a")["href"],
    })

print(products)
# [{'name': 'Laptop X', 'price': '50,000 taka', 'link': '/laptop-x'},
#  {'name': 'Phone Y', 'price': '25,000 taka', 'link': '/phone-y'}]</div>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>ভুলের গল্প:</strong> জাকির বললেন — এক শিক্ষানবিশ একটা সাইটে ১০,০০০ request পাঠালো সেকেন্ডে। সাইট crash — IP ban। সবসময়: ১) robots.txt পড়ো ২) rate limit রাখো (time.sleep) ৩) User-Agent দাও ৪) ToS মেনে চলো। API থাকলে সেটাই best — scraping শেষ উপায়।</div></div>

<div class="code-block"># ── STEP 5: CSS selectors — more powerful extraction ──
# CSS selectors let you target elements precisely.

soup = BeautifulSoup(html, "html.parser")

# select_one() — first match using CSS selector:
price = soup.select_one(".product .price").text
print(price)  # 50,000 taka

# select() — all matches:
all_links = soup.select("div.product a")
for link in all_links:
    print(link["href"])

# CSS selector examples:
# "div"             → all &lt;div&gt; elements
# ".product"        → all elements with class="product"
# "#main-title"     → element with id="main-title"
# "div.product a"   → &lt;a&gt; inside &lt;div class="product"&gt;
# "h3.title"        → &lt;h3 class="title"&gt;
# "div &gt; p"          → &lt;p&gt; directly inside &lt;div&gt;
# "input[type=text]" → &lt;input type="text"&gt;

# Find by ID:
title = soup.find(id="main-title")
# Equivalent CSS:
title = soup.select_one("#main-title")

# Find by attribute:
links = soup.find_all("a", href=True)  # only &lt;a&gt; tags that have href</div>

<div class="code-block"># ── STEP 6: Real website scraping ──
# A complete scraping example on a real page.

import requests
from bs4 import BeautifulSoup
import time

# Always set a polite User-Agent:
headers = {
    "User-Agent": "Mozilla/5.0 (educational scraper; contact@example.com)"
}

def scrape_products(url):
    """Scrape product names and prices from a page."""
    # 1. Fetch the page:
    response = requests.get(url, headers=headers)

    if response.status_code != 200:
        print(f"Error: {response.status_code}")
        return []

    # 2. Parse the HTML:
    soup = BeautifulSoup(response.text, "html.parser")

    # 3. Extract products:
    products = []
    for item in soup.select(".product-card"):
        name_el = item.select_one(".product-title")
        price_el = item.select_one(".product-price")

        if name_el and price_el:
            products.append({
                "name": name_el.text.strip(),
                "price": price_el.text.strip(),
            })

    return products

# 4. Use the function:
url = "https://shop.example.com/products"
products = scrape_products(url)
for p in products:
    print(f"  {p['name']}: {p['price']}")

# NOTE: Every website has different HTML structure.
# You MUST inspect the page (right-click → Inspect in browser)
# to find the right CSS selectors.</div>

<div class="code-block"># ── STEP 7: Using APIs — the better way ──
# If a website offers an API, USE IT. No HTML parsing needed.

import requests

# Many sites offer free APIs:
# Weather:    openweathermap.org/api
# News:       newsapi.org
# GitHub:     api.github.com
# JSONPlaceholder: jsonplaceholder.typicode.com (for practice)

# Simple API call:
response = requests.get("https://api.github.com/users/torvalds")
data = response.json()  # structured data — no parsing!

print(data["name"])        # Linus Torvalds
print(data["followers"])   # 200000+
print(data["public_repos"])  # 10+

# API with parameters:
response = requests.get(
    "https://api.github.com/users/torvalds/repos",
    params={
        "sort": "updated",
        "per_page": 5,
    }
)
repos = response.json()
for repo in repos:
    print(f"  {repo['name']}: {repo['description']}")

# API with authentication:
# headers = {"Authorization": "Bearer YOUR_API_KEY"}
# response = requests.get(url, headers=headers)

# Why APIs are better than scraping:
# 1. Structured JSON (no HTML parsing)
# 2. Stable (won't break when site redesigns)
# 3. Legal (officially provided)
# 4. Faster (less data to transfer)</div>

<div class="code-block"># ── STEP 8: Pagination — getting ALL pages ──
# Most APIs and websites split data across multiple pages.

import requests
import time

all_products = []
page = 1

while True:
    # Fetch one page:
    response = requests.get(
        "https://api.example.com/products",
        params={"page": page, "limit": 50},
    )
    data = response.json()

    # Check if there are no more results:
    if not data["products"]:
        break  # no more pages

    # Add this page's products:
    all_products.extend(data["products"])
    print(f"Page {page}: got {len(data['products'])} products")

    # Go to next page:
    page += 1

    # BE POLITE — wait between requests:
    time.sleep(0.5)

print(f"Total collected: {len(all_products)} products")

# For web scraping pagination:
# Look for "Next" button link and follow it until no more pages.</div>

<div class="code-block"># ── STEP 9: Saving scraped data ──
# Once you've collected data, save it for later use.

import csv
import json
from datetime import datetime

products = [
    {"name": "Laptop", "price": "50,000", "store": "A"},
    {"name": "Phone", "price": "25,000", "store": "B"},
]

# Save to CSV:
with open("products.csv", "w", newline="") as f:
    writer = csv.DictWriter(f, fieldnames=["name", "price", "store"])
    writer.writeheader()
    writer.writerows(products)

# Save to JSON:
with open("products.json", "w") as f:
    json.dump(products, f, indent=2)

# Save to pandas DataFrame:
import pandas as pd
df = pd.DataFrame(products)
df.to_csv("products_pandas.csv", index=False)
df.to_excel("products.xlsx", index=False)

# Add timestamp for tracking:
timestamp = datetime.now().strftime("%Y-%m-%d %H:%M")
for p in products:
    p["scraped_at"] = timestamp</div>

<div class="code-block"># ── STEP 10: The golden rules of scraping ──
# Follow these rules or risk getting banned (or sued).

# RULE 1: Check for an API FIRST
# If the site has an API, use it. Always preferred.
# Look for: "developer.mozilla.org", "/api", documentation pages

# RULE 2: Read robots.txt
# tells you what you're allowed to scrape:
# example.com/robots.txt
# User-agent: *
# Disallow: /private/
# Respect it — it's the site's rules.

# RULE 3: Rate limit your requests
import time
time.sleep(1)  # wait 1 second between requests
# NEVER send thousands of requests per second — that's a DDoS attack.

# RULE 4: Set a User-Agent
headers = {"User-Agent": "MyApp/1.0 (contact@example.com)"}
# Don't pretend to be a browser — identify yourself.

# RULE 5: Cache results — don't re-scrape the same page
# Save scraped data to a file. Next time, read from file.

# RULE 6: Handle errors gracefully
try:
    response = requests.get(url, timeout=10)
    response.raise_for_status()
except requests.RequestException as e:
    print(f"Failed: {e}")

# RULE 7: Check Terms of Service
# Some sites prohibit scraping. Respect it.

# SUMMARY:
# ┌────────────────────┬───────────────────────────────────┐
# │ Tool               │ Purpose                           │
# ├────────────────────┼───────────────────────────────────┤
# │ requests           │ fetch web pages / API calls       │
# │ BeautifulSoup      │ parse and extract from HTML       │
# │ .json()            │ parse API response                │
# │ time.sleep(1)      │ be polite — don't hammer servers  │
# │ pandas             │ save and analyze scraped data     │
# └────────────────────┴───────────────────────────────────┘</div>

<div class="diagram">
  <div class="diag-title">Web Data Collection — API (best) ও Scraping (fallback)</div>
  <svg viewBox="0 0 560 240" xmlns="http://www.w3.org/2000/svg">
    <!-- API -->
    <rect x="20" y="20" width="250" height="100" rx="8" fill="rgba(82,196,26,0.08)" stroke="#52c41a" stroke-width="2"/>
    <text x="145" y="40" text-anchor="middle" fill="#52c41a" font-size="10" font-weight="bold">API ⭐ (preferred)</text>
    <text x="145" y="58" text-anchor="middle" fill="#9a93b8" font-size="7">structured JSON</text>
    <text x="145" y="72" text-anchor="middle" fill="#9a93b8" font-size="7" font-family="monospace">requests.get(url).json()</text>
    <text x="145" y="90" text-anchor="middle" fill="#9a93b8" font-size="7">✓ legal · stable · fast</text>
    <text x="145" y="102" text-anchor="middle" fill="#9a93b8" font-size="7">✓ no HTML parsing</text>
    <text x="145" y="114" text-anchor="middle" fill="#52c41a" font-size="7">always check API first!</text>
    <!-- Scraping -->
    <rect x="290" y="20" width="250" height="100" rx="8" fill="rgba(240,98,146,0.06)" stroke="#f06292" stroke-width="1.5"/>
    <text x="415" y="40" text-anchor="middle" fill="#f06292" font-size="10" font-weight="bold">Scraping (fallback)</text>
    <text x="415" y="58" text-anchor="middle" fill="#9a93b8" font-size="7">parse HTML</text>
    <text x="415" y="72" text-anchor="middle" fill="#9a93b8" font-size="7" font-family="monospace">requests + BeautifulSoup</text>
    <text x="415" y="90" text-anchor="middle" fill="#9a93b8" font-size="7">⚠ fragile (site changes)</text>
    <text x="415" y="102" text-anchor="middle" fill="#9a93b8" font-size="7">⚠ check robots.txt + ToS</text>
    <text x="415" y="114" text-anchor="middle" fill="#f06292" font-size="7">use only when no API</text>
    <!-- Pipeline -->
    <rect x="20" y="140" width="520" height="85" rx="6" fill="rgba(45,212,191,0.06)" stroke="rgba(45,212,191,0.2)" stroke-width="1"/>
    <text x="280" y="158" text-anchor="middle" fill="#34d399" font-size="8" font-weight="bold">Collection Pipeline</text>
    <text x="280" y="175" text-anchor="middle" fill="#9a93b8" font-size="7">1. Fetch (requests.get) → 2. Parse (BeautifulSoup / JSON)</text>
    <text x="280" y="190" text-anchor="middle" fill="#9a93b8" font-size="7">3. Extract (find_all / dict keys) → 4. Clean (strip/parse)</text>
    <text x="280" y="205" text-anchor="middle" fill="#9a93b8" font-size="7">5. Save (CSV/JSON/DB) → 6. Schedule (cron/celery)</text>
    <text x="280" y="218" text-anchor="middle" fill="#f06292" font-size="7">⚠️ BE POLITE: time.sleep(1), User-Agent, robots.txt</text>
  </svg>
  <div class="diag-cap">API first (structured)। না থাকলে scraping (BeautifulSoup)। robots.txt মেনে চলো, rate limit রাখো।</div>
</div>

<div class="dialogue">তলাশ — অনুসন্ধান, খোঁজা। কুরআনে আল্লাহ বলেন — তিনি তোমাকে পেয়েছেন পথহারা, পথ দেখিয়েছেন (৯৩:৭)। তলাশ হলো ছড়িয়ে থাকা তথ্য খুঁজে বের করা। Web scraping হলো তলাশ — ইন্টারনেটের বিশাল মহাসাগর থেকে নির্দিষ্ট তথ্য খুঁজে বের করা। কিন্তু সততার সাথে — robots.txt মেনে, rate limit রেখে।</div>
<div class="dialogue en">Talash — search, seeking. Allah says — He found you lost and guided you (93:7). Talash is finding scattered information. Web scraping is talash — finding specific data in the vast ocean of the internet. But with honesty — respecting robots.txt, keeping rate limits.</div>

<div class="secret-box">🌶️ API first (structured)। না থাকলে scraping (BeautifulSoup)। robots.txt মেনে চলো, time.sleep(1), User-Agent দাও।</div>
`,
  senior:{
    title:"Web Scraping — Senior Notes",
    body:`<table class="kv-table">
<tr><th>Tool</th><th>Use Case</th></tr>
<tr><td class="hl">requests</td><td>HTTP GET/POST</td></tr>
<tr><td class="hl">BeautifulSoup</td><td>HTML parsing (simple sites)</td></tr>
<tr><td class="hl">API (JSON)</td><td>Always preferred when available</td></tr>
<tr><td class="hl">Selenium/Playwright</td><td>JavaScript-rendered sites</td></tr>
<tr><td class="hl">Scrapy</td><td>Large-scale crawling framework</td></tr>
</table>
<p><strong>Ethics:</strong> ১) robots.txt পড়ো ২) rate limit (1 req/sec) ৩) User-Agent ৪) ToS মেনে চলো ৫) API থাকলে সেটাই।</p>
<p><strong>Cross-ref:</strong> Book 44 (Data Engineering) Door 3-4-এ collection pipeline দেখবে। Book 17 (LLM Data Pipeline)-এ document ingestion দেখবে।</p>`
  }
});

// ── GUILD 18: EMBASSY — BUILDING APIs ──
doors.push({
  num:18, icon:"🏛️", color:"#2dd4bf", name:"দূতাবাস",
  subtitle:"The Embassy", tech:"Building APIs — Flask, FastAPI, REST",
  spirit:"সিলসিলা — chain/connection, from Quran 3:103 (hold firmly to the chain of Allah)",
  secret:"API = তোমার প্রোগ্রামের দরোয়া। বাইরের জগত তোমার ফাংশন ব্যবহার করে। Flask (simple), FastAPI (modern + async)। GET (পড়ো), POST (তৈরি), PUT (বদলাও), DELETE (মুছো)। JSON দিয়ে কথা বলো।",
  recall:{
    q:"GET ও POST-এর পার্থক্য কী? Flask-এ route কীভাবে?",
    qen:"Difference between GET and POST? How to create a route in Flask?",
    a:"GET = তথ্য পড়ো (পেজ খোলা)। POST = তথ্য পাঠাও (ফর্ম জমা)। Flask route: @app.route('/users')। FastAPI: @app.get('/users')। প্রতিটা URL = একটা function।",
    aen:"GET = read data. POST = send data. Flask: @app.route('/path'). Each URL maps to a function."
  },
  story:`
<p class="scene-setting">অষ্টাদশ গিল্ড। দূতাবাস। আনুষ্ঠানিক গন্ধ, সিলের ছাপ, নিয়মের শৃঙ্খলা। রাষ্ট্রদূত ফাহিম প্রতিটা দরজায় একটা নিয়ম স্থাপন করেছেন — কোন দরজায় কী চাইলে কী পাওয়া যায়। "এটাই API," তিনি বলেন। "তোমার প্রোগ্রামের দরজা — বাইরের জগত নির্দিষ্ট নিয়মে তোমার সাথে যোগাযোগ করে। প্রতিটা URL একটা দরজা। চলো একটা একটা করে শিখি।"</p>
<p class="scene-setting en">Eighteenth guild. The Embassy. Formal atmosphere, seal stamps, orderly rules. Ambassador Fahim has established a rule at each door — what to request, what to receive. "This is an API," he says. "Your program's doors — the outside world communicates with you by specific rules. Each URL is a door. Let's learn step by step."</p>

<div class="dialogue">প্রথম প্রশ্ন: তুমি একটা task manager বানিয়েছ। এখন মোবাইল app থেকে task দেখতে, যোগ করতে, মুছতে চাও। কীভাবে? API বানাও — প্রতিটা কাজের জন্য একটা URL। GET /tasks, POST /tasks, DELETE /tasks/5। এটাই REST।</div>
<div class="dialogue en">First question: you built a task manager. Now a mobile app wants to view, add, delete tasks. How? Build an API — one URL per action. GET /tasks, POST /tasks, DELETE /tasks/5. This is REST.</div>

<div class="code-block"># ── STEP 1: What is an API? ──
# API = Application Programming Interface.
# It's a set of URLs that let OTHER programs talk to YOUR program.

# Think of a restaurant:
# - You (client) look at the MENU and order
# - The WAITER (API) takes your order to the kitchen
# - The KITCHEN (your code) prepares the food
# - The waiter brings the food back to you

# In web terms:
# - Client (browser, mobile app) sends a REQUEST to a URL
# - Your API receives it, does something, returns a RESPONSE
# - The response is usually JSON (structured data)

# Example API request and response:
# REQUEST:  GET https://api.example.com/tasks
# RESPONSE: [
#   {"id": 1, "title": "Learn Python", "done": false},
#   {"id": 2, "title": "Build API", "done": false}
# ]

# The client doesn't need to know HOW your code works.
# It just needs to know the URL and what to expect back.

# Two popular Python frameworks for building APIs:
# - Flask: simple, classic, great for learning
# - FastAPI: modern, fast, auto-documentation, type validation</div>

<div class="code-block"># ── STEP 2: HTTP methods — the 4 verbs ──
# Every API request uses an HTTP method (verb).

# GET    — READ data (fetch a page, list tasks)
# POST   — CREATE data (add a new task)
# PUT    — UPDATE data (edit an existing task)
# DELETE — REMOVE data (delete a task)

# The 4 operations map to CRUD:
# C - Create → POST
# R - Read   → GET
# U - Update → PUT
# D - Delete → DELETE

# REST conventions for a Task API:
# GET    /tasks       → get ALL tasks
# GET    /tasks/5     → get task with ID 5
# POST   /tasks       → create a new task
# PUT    /tasks/5     → update task with ID 5
# DELETE /tasks/5     → delete task with ID 5
#               ↑ resource name  ↑ specific ID

# Status codes (the API's way of saying what happened):
# 200 = OK (success)
# 201 = Created (new resource made)
# 400 = Bad Request (client sent bad data)
# 404 = Not Found
# 500 = Server Error (your code broke)</div>

<div class="code-block"># ── STEP 3: Your first Flask app ──
# Flask is the simplest way to build a Python web API.

# Install (in terminal):
# pip install flask

from flask import Flask, jsonify

# Create the app:
app = Flask(__name__)

# Define a route (URL → function):
@app.route("/")
def home():
    return jsonify({"message": "Welcome to my API!"})

@app.route("/hello")
def hello():
    return jsonify({"greeting": "Hello, World!"})

# Run the server:
if __name__ == "__main__":
    app.run(debug=True, port=5000)

# Now visit in your browser:
# http://localhost:5000/       → {"message": "Welcome to my API!"}
# http://localhost:5000/hello  → {"greeting": "Hello, World!"}

# How it works:
# 1. @app.route("/hello") maps the URL "/hello" to the function
# 2. When someone visits /hello, Flask calls hello()
# 3. jsonify() converts the dict to JSON
# 4. The browser receives the JSON response</div>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>ভুলের গল্প:</strong> ফাহিম বললেন — এক ডেভেলপার API বানালো কোনো validation ছাড়া। ইউজার negative price পাঠালো — database corrupt। কোনো auth ছাড়া — যে কেউ যে কারো ডেটা মুছলো। API = ফটক — validation ও auth বাধ্যতামূলক। ভেতরে ঢুকলেই সব চলবে না।</div></div>

<div class="code-block"># ── STEP 4: Building a Task API (GET routes) ──
# Let's build a complete task management API.

from flask import Flask, jsonify, request

app = Flask(__name__)

# In-memory "database" (use real DB in production):
tasks = [
    {"id": 1, "title": "Learn Python", "done": False},
    {"id": 2, "title": "Build API", "done": False},
]

# GET /tasks — return ALL tasks:
@app.route("/tasks", methods=["GET"])
def get_tasks():
    return jsonify(tasks)

# GET /tasks/&lt;id&gt; — return ONE task:
@app.route("/tasks/&lt;int:task_id&gt;", methods=["GET"])
def get_task(task_id):
    # Find the task by ID:
    task = next((t for t in tasks if t["id"] == task_id), None)

    if task is None:
        return jsonify({"error": "Task not found"}), 404

    return jsonify(task)

# Visit:
# http://localhost:5000/tasks     → all tasks
# http://localhost:5000/tasks/1   → {"id": 1, "title": "Learn Python", ...}
# http://localhost:5000/tasks/99  → {"error": "Task not found"} (404)

# Note: &lt;int:task_id&gt; in the URL extracts the number as an integer.
# The value is passed to the function as task_id.</div>

<div class="code-block"># ── STEP 5: POST — creating new tasks ──
# POST receives data from the client and creates something new.

@app.route("/tasks", methods=["POST"])
def create_task():
    # Get JSON data from the request body:
    data = request.get_json()

    # VALIDATION — always validate input!
    if not data or "title" not in data:
        return jsonify({"error": "Title is required"}), 400

    # Create the new task:
    new_task = {
        "id": len(tasks) + 1,
        "title": data["title"],
        "done": False,
    }
    tasks.append(new_task)

    # Return the new task with 201 Created status:
    return jsonify(new_task), 201

# How to test a POST request:
# Using curl (in terminal):
# curl -X POST http://localhost:5000/tasks \
#      -H "Content-Type: application/json" \
#      -d '{"title": "Learn Flask"}'

# Using Python (requests library):
# import requests
# r = requests.post("http://localhost:5000/tasks",
#                   json={"title": "Learn Flask"})
# print(r.json())  # {"id": 3, "title": "Learn Flask", "done": false}

# The client sends JSON → your API validates → creates → responds</div>

<div class="code-block"># ── STEP 6: PUT and DELETE — update and remove ──
# PUT updates an existing resource. DELETE removes it.

# PUT /tasks/&lt;id&gt; — update a task:
@app.route("/tasks/&lt;int:task_id&gt;", methods=["PUT"])
def update_task(task_id):
    task = next((t for t in tasks if t["id"] == task_id), None)
    if task is None:
        return jsonify({"error": "Task not found"}), 404

    data = request.get_json()
    # Update only the fields the client sent:
    task["title"] = data.get("title", task["title"])
    task["done"] = data.get("done", task["done"])

    return jsonify(task)

# DELETE /tasks/&lt;id&gt; — delete a task:
@app.route("/tasks/&lt;int:task_id&gt;", methods=["DELETE"])
def delete_task(task_id):
    global tasks
    # Filter out the task with this ID:
    tasks = [t for t in tasks if t["id"] != task_id]
    return jsonify({"message": f"Task {task_id} deleted"}), 200

# Now you have a COMPLETE CRUD API:
# GET    /tasks       → list all
# POST   /tasks       → create new
# GET    /tasks/&lt;id&gt;  → get one
# PUT    /tasks/&lt;id&gt;  → update one
# DELETE /tasks/&lt;id&gt;  → delete one</div>

<div class="code-block"># ── STEP 7: FastAPI — the modern alternative ──
# FastAPI is newer, faster, and has built-in validation + docs.

# Install (in terminal):
# pip install fastapi uvicorn

from fastapi import FastAPI, HTTPException
from pydantic import BaseModel

app = FastAPI()

# Pydantic model — AUTOMATIC validation:
class TaskCreate(BaseModel):
    title: str
    done: bool = False

class TaskResponse(BaseModel):
    id: int
    title: str
    done: bool

# GET — no decorator methods needed, just type hints:
@app.get("/tasks")
def get_tasks():
    return tasks

# POST — FastAPI validates the body automatically!
@app.post("/tasks", status_code=201)
def create_task(task: TaskCreate):
    # No manual validation needed — Pydantic does it!
    # If title is missing or wrong type → auto 422 error
    new_task = {"id": len(tasks) + 1, **task.model_dump()}
    tasks.append(new_task)
    return new_task

# GET one — with HTTPException for errors:
@app.get("/tasks/{task_id}")
def get_task(task_id: int):
    task = next((t for t in tasks if t["id"] == task_id), None)
    if task is None:
        raise HTTPException(status_code=404, detail="Task not found")
    return task

# Run: uvicorn main:app --reload
# Auto-docs at: http://localhost:8000/docs (Swagger UI)
#              http://localhost:8000/redoc (ReDoc)</div>

<div class="code-block"># ── STEP 8: FastAPI vs Flask ──
# When to use which?

# FLASK:
# ✅ Simple and classic
# ✅ Great for learning
# ✅ Huge ecosystem of extensions
# ✅ Flexible (do things your way)
# ❌ Manual validation (you write all the checks)
# ❌ No auto-documentation
# ❌ Synchronous by default

# FASTAPI:
# ✅ Automatic validation (Pydantic)
# ✅ Auto-generated API docs (/docs)
# ✅ Async support (high performance)
# ✅ Type hints throughout
# ✅ Modern Python (3.7+)
# ❌ Newer (smaller community than Flask)
# ❌ More concepts to learn upfront

# ┌──────────────┬─────────────────────┬─────────────────────────┐
# │ Feature      │ Flask               │ FastAPI                 │
# ├──────────────┼─────────────────────┼─────────────────────────┤
# │ Validation   │ Manual              │ Automatic (Pydantic)    │
# │ API docs     │ Need extension      │ Built-in (/docs)        │
# │ Async        │ Needs extension     │ Built-in                │
# │ Speed        │ Good                │ Excellent               │
# │ Learning     │ Easier              │ Slightly more           │
# │ Best for     │ Learning, simple    │ Production, modern apps │
# └──────────────┴─────────────────────┴─────────────────────────┘</div>

<div class="code-block"># ── STEP 9: Query parameters and path parameters ──
# APIs accept data in three ways: path, query, and body.

from fastapi import FastAPI

app = FastAPI()

# PATH parameter — part of the URL:
@app.get("/tasks/{task_id}")
def get_task(task_id: int):  # task_id comes from the URL
    return {"task_id": task_id}
# GET /tasks/5 → {"task_id": 5}

# QUERY parameter — after ? in the URL:
@app.get("/tasks")
def list_tasks(skip: int = 0, limit: int = 10):
    # /tasks?skip=0&amp;limit=5
    return tasks[skip : skip + limit]
# GET /tasks?skip=10&amp;limit=5 → tasks 11-15

# BODY — JSON data sent with POST/PUT:
@app.post("/tasks")
def create_task(task: TaskCreate):  # Pydantic validates the body
    return task
# POST /tasks with JSON body: {"title": "Learn", "done": false}

# Practical example — search + filter:
@app.get("/tasks/search")
def search_tasks(
    status: str = None,      # ?status=done
    priority: int = None,    # ?priority=3
):
    results = tasks
    if status:
        results = [t for t in results if t.get("status") == status]
    if priority:
        results = [t for t in results if t.get("priority") == priority]
    return results
# GET /tasks/search?status=done&amp;priority=3</div>

<div class="code-block"># ── STEP 10: Complete production-ready API structure ──
# A real API has more than just routes. Here's the full picture.

# ┌─────────────────────────────────────────────────────┐
# │ Production API Checklist                            │
# ├─────────────────────────────────────────────────────┤
# │ ✅ Input validation (Pydantic / manual)             │
# │ ✅ Error handling (try/except, HTTPException)       │
# │ ✅ Authentication (API keys, JWT tokens)            │
# │ ✅ Rate limiting (prevent abuse)                    │
# │ ✅ CORS (allow browser apps to call your API)       │
# │ ✅ Database (not in-memory list!)                   │
# │ ✅ Logging (track requests and errors)              │
# │ ✅ Tests (pytest)                                   │
# │ ✅ API documentation (/docs)                        │
# └─────────────────────────────────────────────────────┘

# Example: adding error handling and CORS to FastAPI:
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(title="Task API", version="1.0")

# Allow browser apps (React, Vue) to call this API:
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # frontend URL
    allow_methods=["*"],
    allow_headers=["*"],
)

# Error handling:
@app.exception_handler(ValueError)
async def value_error_handler(request, exc):
    return {"error": str(exc)}, 400

# SUMMARY:
# ┌──────────────┬───────────────────────────────────┐
# │ Method       │ Purpose                          │
# ├──────────────┼───────────────────────────────────┤
# │ GET          │ Read data (no side effects)       │
# │ POST         │ Create new data                   │
# │ PUT          │ Update existing data              │
# │ DELETE       │ Remove data                       │
# │ Flask        │ Simple, classic framework         │
# │ FastAPI      │ Modern, validated, documented     │
# │ Pydantic     │ Automatic input validation        │
# │ /docs        │ Auto-generated API documentation  │
# └──────────────┴───────────────────────────────────┘</div>

<div class="diagram">
  <div class="diag-title">REST API — ৪টি দরজা: GET · POST · PUT · DELETE</div>
  <svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg">
    <!-- Client -->
    <rect x="10" y="20" width="120" height="50" rx="6" fill="rgba(45,212,191,0.08)" stroke="#2dd4bf" stroke-width="1.5"/>
    <text x="70" y="38" text-anchor="middle" fill="#2dd4bf" font-size="8" font-weight="bold">Client</text>
    <text x="70" y="52" text-anchor="middle" fill="#9a93b8" font-size="6">browser/app</text>
    <line x1="130" y1="45" x2="170" y2="45" stroke="#34d399" stroke-width="2"/>
    <text x="150" y="38" text-anchor="middle" fill="#34d399" font-size="6">HTTP</text>
    <!-- API doors -->
    <rect x="175" y="15" width="375" height="65" rx="8" fill="rgba(251,191,36,0.06)" stroke="#fbbf24" stroke-width="2"/>
    <text x="362" y="32" text-anchor="middle" fill="#fbbf24" font-size="9" font-weight="bold">REST API (Flask / FastAPI)</text>
    <rect x="185" y="42" width="80" height="30" rx="4" fill="rgba(82,196,26,0.08)" stroke="#52c41a" stroke-width="1"/>
    <text x="225" y="56" text-anchor="middle" fill="#52c41a" font-size="7" font-weight="bold">GET</text>
    <text x="225" y="66" text-anchor="middle" fill="#9a93b8" font-size="5">read</text>
    <rect x="270" y="42" width="80" height="30" rx="4" fill="rgba(251,191,36,0.08)" stroke="#fbbf24" stroke-width="1"/>
    <text x="310" y="56" text-anchor="middle" fill="#fbbf24" font-size="7" font-weight="bold">POST</text>
    <text x="310" y="66" text-anchor="middle" fill="#9a93b8" font-size="5">create</text>
    <rect x="355" y="42" width="80" height="30" rx="4" fill="rgba(45,212,191,0.08)" stroke="#2dd4bf" stroke-width="1"/>
    <text x="395" y="56" text-anchor="middle" fill="#2dd4bf" font-size="7" font-weight="bold">PUT</text>
    <text x="395" y="66" text-anchor="middle" fill="#9a93b8" font-size="5">update</text>
    <rect x="440" y="42" width="100" height="30" rx="4" fill="rgba(240,98,146,0.08)" stroke="#f06292" stroke-width="1"/>
    <text x="490" y="56" text-anchor="middle" fill="#f06292" font-size="7" font-weight="bold">DELETE</text>
    <text x="490" y="66" text-anchor="middle" fill="#9a93b8" font-size="5">remove</text>
    <!-- Server -->
    <rect x="195" y="95" width="335" height="40" rx="6" fill="rgba(52,211,153,0.04)" stroke="rgba(52,211,153,0.15)" stroke-width="1"/>
    <text x="362" y="113" text-anchor="middle" fill="#34d399" font-size="7">Flask: @app.route("/tasks") · FastAPI: @app.get("/tasks")</text>
    <text x="362" y="126" text-anchor="middle" fill="#9a93b8" font-size="6">each URL = one function → returns JSON</text>
    <!-- Rules -->
    <rect x="10" y="150" width="540" height="85" rx="6" fill="rgba(240,98,146,0.04)" stroke="rgba(240,98,146,0.15)" stroke-width="1"/>
    <text x="280" y="168" text-anchor="middle" fill="#f06292" font-size="8" font-weight="bold">⚠️ API = ফটক — Validation ও Auth বাধ্যতামূলক</text>
    <text x="280" y="184" text-anchor="middle" fill="#9a93b8" font-size="7">1. Validate input (Pydantic / manual)</text>
    <text x="280" y="197" text-anchor="middle" fill="#9a93b8" font-size="7">2. Authentication (JWT token / API key)</text>
    <text x="280" y="210" text-anchor="middle" fill="#9a93b8" font-size="7">3. Rate limiting (prevent abuse)</text>
    <text x="280" y="223" text-anchor="middle" fill="#9a93b8" font-size="7">4. Proper status codes (200/201/400/404/500)</text>
  </svg>
  <div class="diag-cap">API = URL দরজা। GET (পড়ো), POST (তৈরি), PUT (বদলাও), DELETE (মুছো)। JSON দিয়ে যোগাযোগ। validation + auth বাধ্যতামূলক।</div>
</div>

<div class="dialogue">সিলসিলা — শৃঙ্খল, সংযোগ। কুরআনে আল্লাহ বলেন — আল্লাহর শৃঙ্খলকে শক্তভাবে ধরো (৩:১০৩)। সিলসিলা হলো দুই প্রান্তের সংযোগ — এক দিকে client, এক দিকে server। API হলো সিলসিলা — client ও server-এর মধ্যে সংযোগের শৃঙ্খল। নিয়ম ছাড়া সংযোগ = chaos। API নিয়ম দেয় — কীভাবে, কখন, কী।</div>
<div class="dialogue en">Silsila — chain, connection. Allah says — hold firmly to the chain of Allah (3:103). Silsila is a connection between two ends — client on one side, server on the other. An API is silsila — the chain of connection between client and server. Connection without rules = chaos. An API provides rules — how, when, what.</div>

<div class="secret-box">🏛️ API = URL দরজা। GET/POST/PUT/DELETE। Flask (simple) বা FastAPI (modern+async)। JSON দিয়ে যোগাযোগ। validation + auth বাধ্যতামূলক।</div>
`,
  senior:{
    title:"Building APIs — Senior Notes",
    body:`<table class="kv-table">
<tr><th>Framework</th><th>Best For</th></tr>
<tr><td class="hl">Flask</td><td>Simple APIs, learning, small projects</td></tr>
<tr><td class="hl">FastAPI</td><td>Modern, async, auto-docs, type-safe</td></tr>
<tr><td class="hl">Django REST</td><td>Full-featured, batteries-included</td></tr>
<tr><td class="hl">Express (Node)</td><td>JavaScript ecosystem</td></tr>
</table>
<p><strong>FastAPI advantages:</strong> auto-validation (Pydantic), auto-docs (/docs), async support, type hints। ২০২৪-এ সবচেয়ে জনপ্রিয় Python API framework।</p>
<p><strong>Cross-ref:</strong> Book 4 (System Design) Door 15 (API Gateway), Door 13 (protocols)। Book 52 (Code Craftsman) Door 12 (DDD)।</p>`
  }
});

// ── GUILD 19: CLOCKMAKER — AUTOMATION ──
doors.push({
  num:19, icon:"⏰", color:"#34d399", name:"ঘড়ি নির্মাতার কক্ষ",
  subtitle:"The Clockmaker", tech:"Automation — Scripts, Scheduling, CLI Tools",
  spirit:"তাদবির — management/planning, from Quran 8:60 (prepare against them what you can of power)",
  secret:"Automation = বিরক্তিকর কাজ কম্পিউটারকে দাও। file rename, email send, data backup, report generate। schedule দিয়ে স্বয়ংক্রিয়। প্রতিটা বিরক্তিকর কাজ = একটা script। সময় বাঁচাও, ভুল কমাও।",
  recall:{
    q:"cron ও argparse দিয়ে কী করা যায়?",
    qen:"What can you do with cron and argparse?",
    a:"cron (Linux) = schedule করো — প্রতিদিন সকালে script চালু। argparse = CLI tool বানাও — python script.py --file data.csv --verbose। বিরক্তিকর কাজ স্বয়ংক্রিয় করো।",
    aen:"cron = schedule scripts. argparse = build CLI tools. Automate boring repetitive tasks."
  },
  story:`
<p class="scene-setting">ঊনবিংশ গিল্ড। ঘড়ি নির্মাতার কক্ষ। যন্ত্রের টিকটিক শব্দ, পিতলের গন্ধ, ছোট ছোট গিয়ার। ঘড়ি নির্মাতা নাদিয়া একটা জটিল ঘড়ি সাজাচ্ছেন — প্রতিটা গিয়ার নির্দিষ্ট সময়ে নির্দিষ্ট কাজ করে। "একবার সেট করলে," তিনি বলেন, "এই ঘড়ি বছরের পর বছর একই কাজ করবে। Automation তেমনি — একবার script লেখো, তারপর স্বয়ংক্রিয়। প্রতিদিন, প্রতি সপ্তাহে, প্রতি মাসে। চলো একটা একটা করে শিখি।"</p>
<p class="scene-setting en">Nineteenth guild. The Clockmaker's room. Tick-tick of mechanisms, smell of brass, tiny gears. Clockmaker Nadia assembles a complex clock — each gear does a specific task at a specific time. "Set it once," she says, "and this clock runs for years doing the same thing. Automation is the same — write a script once, then it runs automatically. Daily, weekly, monthly. Let's learn step by step."</p>

<div class="dialogue">প্রথম প্রশ্ন: প্রতিদিন সকালে তোমার — database backup, report জেনারেট, email পাঠানো, log cleanup। হাতে ৩০ মিনিট। Automation দিলে একবার script লেখো, প্রতিদিন ৬টায় স্বয়ংক্রিয়। তুমি ঘুমাও, কাজ হয়।</div>
<div class="dialogue en">First question: every morning — database backup, report, email, cleanup. 30 minutes by hand. With automation — write script once, runs at 6 AM daily. You sleep, work gets done.</div>

<div class="code-block"># ── STEP 1: What is automation? ──
# Automation = making the computer do boring, repetitive tasks for you.

# Examples of tasks you can automate:
# - Rename 1000 files following a pattern
# - Download weather data every morning
# - Backup your database every night
# - Send a daily summary email
# - Check a website for changes and notify you
# - Resize all images in a folder
# - Clean up old log files

# The pattern is always the same:
# 1. Identify a repetitive task
# 2. Write a Python script that does it
# 3. Schedule it to run automatically

# A simple automation script:
import os

def rename_files(folder, prefix):
    """Rename all files in a folder with a prefix + number."""
    files = sorted(os.listdir(folder))
    for i, filename in enumerate(files, 1):
        old_path = os.path.join(folder, filename)
        ext = os.path.splitext(filename)[1]  # keep extension
        new_name = f"{prefix}_{i:03d}{ext}"
        new_path = os.path.join(folder, new_name)
        os.rename(old_path, new_path)
        print(f"  {filename} → {new_name}")

rename_files("photos", "vacation")
# photo1.jpg → vacation_001.jpg
# photo2.jpg → vacation_002.jpg
# ... 1000 files renamed in 2 seconds!</div>

<div class="code-block"># ── STEP 2: File automation ──
# Python can manipulate files — rename, move, copy, delete.

import os
import shutil
from pathlib import Path

# List all files in a folder:
files = os.listdir("downloads")
print(files)

# Find files by extension:
pdfs = [f for f in files if f.endswith(".pdf")]
images = [f for f in files if f.endswith((".jpg", ".png", ".gif"))]

# Move files to organized folders:
for img in images:
    src = os.path.join("downloads", img)
    dst = os.path.join("downloads/images", img)
    shutil.move(src, dst)

# Copy a file:
shutil.copy("template.docx", "new_document.docx")

# Delete old files (older than 30 days):
import time
cutoff = time.time() - (30 * 86400)  # 30 days ago in seconds

for filename in os.listdir("temp"):
    filepath = os.path.join("temp", filename)
    if os.path.getmtime(filepath) &lt; cutoff:
        os.remove(filepath)
        print(f"Deleted: {filename}")

# Using pathlib (modern, cleaner):
for file in Path("data").glob("*.csv"):
    print(file.name, file.stat().st_size)</div>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>ভুলের গল্প:</strong> নাদিয়া বললেন — এক শিক্ষানবিশ automation script বানালো কোনো logging ছাড়া। ৩ দিন কাজ করে থামলো — কেউ জানতো না। automation = নিঃশব্দ কর্মী, কিন্তু logging দাও — সফল হলে log, ব্যর্থ হলে alert। নাহলে নীরব ব্যর্থতা = বিপদ।</div></div>

<div class="code-block"># ── STEP 3: Running external programs ──
# subprocess lets you run other programs from Python.

import subprocess

# Run a shell command:
result = subprocess.run(["ls", "-la"], capture_output=True, text=True)
print(result.stdout)  # the output of ls -la

# Run with error checking:
result = subprocess.run(
    ["git", "status"],
    capture_output=True,
    text=True,
    check=True  # raises CalledProcessError on failure
)

# Practical: backup a MySQL database:
def backup_database(db_name, output_file):
    """Backup MySQL database using mysqldump."""
    backup_file = open(output_file, "w")
    try:
        subprocess.run(
            ["mysqldump", "-u", "root", db_name],
            stdout=backup_file,
            check=True
        )
        print(f"Backup saved: {output_file}")
    except subprocess.CalledProcessError as e:
        print(f"Backup FAILED: {e}")
    finally:
        backup_file.close()

backup_database("myapp", "backup.sql")

# Run a Python script from another script:
subprocess.run(["python", "other_script.py", "--arg", "value"])</div>

<div class="code-block"># ── STEP 4: Logging — critical for automation ──
# When scripts run automatically, you NEED to know what happened.

import logging

# Set up logging (do this once at the start of your script):
logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s [%(levelname)s] %(message)s",
    handlers=[
        logging.FileHandler("automation.log"),  # save to file
        logging.StreamHandler(),                 # also print to console
    ]
)
logger = logging.getLogger(__name__)

# Use logging instead of print:
logger.info("Backup started")
logger.info("Backup completed: 500MB saved")
logger.warning("Disk space low: 10% remaining")
logger.error("Backup FAILED: connection refused")

# The log file looks like:
# 2024-01-15 06:00:01 [INFO] Backup started
# 2024-01-15 06:00:15 [INFO] Backup completed: 500MB saved
# 2024-01-15 06:05:00 [INFO] Email sent
# 2024-01-15 06:10:00 [WARNING] Disk space low: 10% remaining

# LOG LEVELS (from least to most severe):
# DEBUG    → detailed info (for debugging)
# INFO     → general info (script started, task done)
# WARNING  → something unexpected (but not fatal)
# ERROR    → something failed
# CRITICAL → something broke badly</div>

<div class="code-block"># ── STEP 5: Sending emails ──
# Automate email sending — daily reports, alerts, notifications.

import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart

def send_email(subject, body, to_email):
    """Send an email notification."""
    # Create the message:
    msg = MIMEMultipart()
    msg["From"] = "bot@myapp.com"
    msg["To"] = to_email
    msg["Subject"] = subject
    msg.attach(MIMEText(body, "plain"))

    # Connect and send:
    with smtplib.SMTP("smtp.gmail.com", 587) as server:
        server.starttls()  # encrypt connection
        server.login("bot@myapp.com", "app_password")
        server.send_message(msg)

    print(f"Email sent: {subject}")

# Send a daily report:
def send_daily_report():
    """Generate and email the daily summary."""
    report = f"""
    Daily Report — {time.strftime('%Y-%m-%d')}
    ===============================

    Total sales:    50,000 taka
    New users:      12
    Active users:   342
    Errors:         0

    Have a great day!
    """
    send_email("Daily Report", report, "team@myapp.com")

# NOTE: Use "app passwords" for Gmail, not your real password.
# Gmail → Settings → Security → 2-Step Verification → App Passwords</div>

<div class="code-block"># ── STEP 6: Scheduling with the schedule library ──
# The schedule library lets you run tasks at specific times.

# pip install schedule

import schedule
import time

# Define tasks:
def backup_job():
    print("Running backup...")
    # backup code here

def report_job():
    print("Sending report...")
    # send report code here

# Schedule tasks:
schedule.every().day.at("06:00").do(backup_job)       # daily at 6 AM
schedule.every().day.at("18:00").do(report_job)       # daily at 6 PM
schedule.every().monday.do(backup_job)                 # every Monday
schedule.every().hour.do(report_job)                   # every hour
schedule.every(10).minutes.do(backup_job)              # every 10 minutes

# Keep the script running:
print("Scheduler started...")
while True:
    schedule.run_pending()    # check if any job is due
    time.sleep(60)            # wait 1 minute, check again

# schedule is great for:
# - Python-based scheduling (cross-platform)
# - Simple time-based tasks
# - Scripts that need to run within Python
# For production, use cron (Linux) or Celery (distributed).</div>

<div class="code-block"># ── STEP 7: Scheduling with cron (Linux/macOS) ──
# cron is the OS-level scheduler — runs even if Python isn't running.

# Edit your crontab (in terminal):
# crontab -e

# Add lines like:
#   0 6 * * * /usr/bin/python3 /opt/scripts/backup.py
#   30 8 * * 1 /usr/bin/python3 /opt/scripts/report.py
#   */15 * * * * /usr/bin/python3 /opt/scripts/check.py

# CRON FORMAT:
#   minute  hour  day  month  weekday  command
#   0       6     *    *      *        python3 backup.py
#   ↑       ↑     ↑    ↑      ↑
#   minute  hour  day  month  Mon=1

# Examples:
#   0 6 * * *        → every day at 6:00 AM
#   30 8 * * 1       → every Monday at 8:30 AM
#   */15 * * * *     → every 15 minutes
#   0 0 1 * *        → first day of every month at midnight
#   0 */6 * * *      → every 6 hours

# View your scheduled jobs:
# crontab -l

# On Windows: use Task Scheduler instead of cron.
# On macOS: you can use cron or launchd.</div>

<div class="code-block"># ── STEP 8: Building CLI tools with argparse ──
# Make your scripts reusable with command-line arguments.

import argparse

def main():
    """Command-line interface for the automation tool."""
    parser = argparse.ArgumentParser(
        description="Python City Automation Suite"
    )

    # Required argument:
    parser.add_argument(
        "--task",
        choices=["backup", "report", "cleanup", "all"],
        required=True,
        help="Which task to run"
    )

    # Optional flag (boolean):
    parser.add_argument(
        "--dry-run",
        action="store_true",
        help="Show what would happen without executing"
    )

    # Optional with value:
    parser.add_argument(
        "--keep-days",
        type=int,
        default=7,
        help="Days of backups to keep (default: 7)"
    )

    # Short form:
    parser.add_argument(
        "--verbose", "-v",
        action="store_true",
        help="Verbose output"
    )

    args = parser.parse_args()

    if args.dry_run:
        print(f"[DRY RUN] Would run: {args.task}")
        return

    if args.task in ("backup", "all"):
        backup_database()
    if args.task in ("cleanup", "all"):
        clean_old_backups(keep_days=args.keep_days)

if __name__ == "__main__":
    main()

# Usage:
#   python automate.py --task backup
#   python automate.py --task all --verbose
#   python automate.py --task cleanup --keep-days 30
#   python automate.py --task report --dry-run</div>

<div class="code-block"># ── STEP 9: A complete automation script ──
# Putting it all together: a production-quality automation script.

import os
import subprocess
import time
import logging
import argparse
from datetime import datetime

# Setup logging:
logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s [%(levelname)s] %(message)s",
    handlers=[
        logging.FileHandler("automation.log"),
        logging.StreamHandler(),
    ]
)
logger = logging.getLogger(__name__)

def backup_database():
    """Daily database backup."""
    timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
    backup_path = f"backups/db_{timestamp}.sql"

    try:
        backup_file = open(backup_path, "w")
        subprocess.run(
            ["mysqldump", "-u", "root", "mydb"],
            stdout=backup_file,
            check=True
        )
        backup_file.close()
        logger.info(f"Backup created: {backup_path}")
    except subprocess.CalledProcessError as e:
        backup_file.close()
        logger.error(f"Backup FAILED: {e}")

def clean_old_backups(keep_days=7):
    """Delete backups older than keep_days."""
    cutoff = time.time() - (keep_days * 86400)
    for filename in os.listdir("backups"):
        filepath = os.path.join("backups", filename)
        if os.path.getmtime(filepath) &lt; cutoff:
            os.remove(filepath)
            logger.info(f"Deleted old backup: {filename}")

# Run with: python automate.py --task all
if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="Automation Suite")
    parser.add_argument("--task", choices=["backup", "cleanup", "all"],
                        required=True)
    args = parser.parse_args()

    logger.info(f"Starting: {args.task}")
    if args.task in ("backup", "all"):
        backup_database()
    if args.task in ("cleanup", "all"):
        clean_old_backups()</div>

<div class="code-block"># ── STEP 10: Automation ideas and golden rules ──
# Real-world automation ideas you can build:

# FILE MANAGEMENT:
# - Rename photos by date taken (EXIF data)
# - Organize downloads folder (sort by extension)
# - Sync local folder to cloud storage
# - Compress old log files

# DATA TASKS:
# - Scrape competitor prices daily → save to CSV
# - Download stock prices → update dashboard
# - Generate monthly invoice PDFs
# - Backup database nightly

# COMMUNICATION:
# - Send daily summary email at 8 AM
# - Post to Slack when deploy is done
# - Send SMS alert when server is down

# QUALITY OF LIFE:
# - Track work hours automatically
# - Generate weekly progress reports
# - Check for broken links on your website

# GOLDEN RULES:
# 1. LOG EVERYTHING — you must know what happened
# 2. HANDLE ERRORS — fail gracefully, alert on failure
# 3. DRY-RUN MODE — test before running for real
# 4. IDEMPOTENT — running twice should be safe
# 5. MONITOR — check that it's still running

# SUMMARY:
# ┌──────────────────┬─────────────────────────────────────┐
# │ Tool             │ Purpose                            │
# ├──────────────────┼─────────────────────────────────────┤
# │ os / shutil      │ file operations                    │
# │ subprocess       │ run external programs              │
# │ logging          │ track what happened                │
# │ smtplib          │ send email notifications           │
# │ schedule         │ Python-based scheduler             │
# │ cron             │ OS-level scheduler (Linux/Mac)     │
# │ argparse         │ build CLI tools                    │
# │ pathlib          │ modern file path handling          │
# └──────────────────┴─────────────────────────────────────┘</div>

<div class="diagram">
  <div class="diag-title">Automation Pipeline — একবার লেখো, চিরকাল চলে</div>
  <svg viewBox="0 0 560 230" xmlns="http://www.w3.org/2000/svg">
    <!-- Trigger -->
    <rect x="10" y="20" width="120" height="50" rx="6" fill="rgba(251,191,36,0.06)" stroke="#fbbf24" stroke-width="1.5"/>
    <text x="70" y="38" text-anchor="middle" fill="#fbbf24" font-size="8" font-weight="bold">Trigger</text>
    <text x="70" y="52" text-anchor="middle" fill="#9a93b8" font-size="6">cron / schedule</text>
    <text x="70" y="62" text-anchor="middle" fill="#9a93b8" font-size="6">manual CLI</text>
    <line x1="130" y1="45" x2="155" y2="45" stroke="#34d399" stroke-width="2"/>
    <!-- Script -->
    <rect x="160" y="15" width="170" height="65" rx="6" fill="rgba(45,212,191,0.08)" stroke="#2dd4bf" stroke-width="2"/>
    <text x="245" y="33" text-anchor="middle" fill="#2dd4bf" font-size="8" font-weight="bold">Python Script</text>
    <text x="245" y="48" text-anchor="middle" fill="#9a93b8" font-size="6">backup() + report()</text>
    <text x="245" y="60" text-anchor="middle" fill="#9a93b8" font-size="6">+ cleanup() + email()</text>
    <text x="245" y="72" text-anchor="middle" fill="#9a93b8" font-size="6">logging at every step</text>
    <line x1="330" y1="45" x2="355" y2="45" stroke="#34d399" stroke-width="2"/>
    <!-- Result -->
    <rect x="360" y="20" width="190" height="50" rx="6" fill="rgba(82,196,26,0.08)" stroke="#52c41a" stroke-width="1.5"/>
    <text x="455" y="38" text-anchor="middle" fill="#52c41a" font-size="8" font-weight="bold">Result + Notify</text>
    <text x="455" y="52" text-anchor="middle" fill="#9a93b8" font-size="6">backup created</text>
    <text x="455" y="62" text-anchor="middle" fill="#9a93b8" font-size="6">email sent / alert on fail</text>
    <!-- Tools -->
    <rect x="10" y="90" width="540" height="55" rx="6" fill="rgba(45,212,191,0.06)" stroke="rgba(45,212,191,0.2)" stroke-width="1"/>
    <text x="280" y="108" text-anchor="middle" fill="#34d399" font-size="8" font-weight="bold">Automation Tools</text>
    <text x="280" y="124" text-anchor="middle" fill="#9a93b8" font-size="7">schedule (Python) · cron (Linux) · Task Scheduler (Windows) · argparse (CLI)</text>
    <text x="280" y="138" text-anchor="middle" fill="#9a93b8" font-size="7">subprocess (run other programs) · smtplib (email) · logging (track results)</text>
    <!-- Rules -->
    <rect x="10" y="155" width="540" height="65" rx="6" fill="rgba(240,98,146,0.04)" stroke="rgba(240,98,146,0.15)" stroke-width="1"/>
    <text x="280" y="173" text-anchor="middle" fill="#f06292" font-size="8" font-weight="bold">⚠️ Automation Golden Rules</text>
    <text x="280" y="188" text-anchor="middle" fill="#9a93b8" font-size="7">1. Logging — সব ধাপ log করো · 2. Error handling — fail হলে alert</text>
    <text x="280" y="201" text-anchor="middle" fill="#9a93b8" font-size="7">3. Dry-run mode — পরীক্ষা করো আগে · 4. Idempotent — দুইবার চালু হলেও নিরাপদ</text>
    <text x="280" y="214" text-anchor="middle" fill="#9a93b8" font-size="7">5. Monitoring — চলছে কি না দেখো</text>
  </svg>
  <div class="diag-cap">automation = বিরক্তিকর কাজ স্বয়ংক্রিয়। schedule + script + logging + alert। একবার লেখো, চিরকাল চলে।</div>
</div>

<div class="dialogue">তাদবির — ব্যবস্থাপনা, পরিকল্পনা। কুরআনে আল্লাহ বলেন — তাদের বিরুদ্ধে যা পারো শক্তি প্রস্তুত রাখো (৮:৬০)। তাদবির হলো আগে থেকে প্রস্তুতি — যাতে সময় এলে সব প্রস্তুত। Automation হলো তাদবির — আগে script লেখো, schedule সেট করো, যাতে সময় এলে সব স্বয়ংক্রিয়। যে তাদবির করে, সে অপ্রস্তুত থাকে না।</div>
<div class="dialogue en">Tadbir — management, planning. Allah says — prepare against them what you can of power (8:60). Tadbir is preparation in advance — so when the time comes, everything is ready. Automation is tadbir — write the script in advance, set the schedule, so when the time comes, everything runs. One who plans is never caught unprepared.</div>

<div class="secret-box">⏰ automation = বিরক্তিকর কাজ স্বয়ংক্রিয়। schedule (Python) বা cron (Linux)। logging + alert বাধ্যতামূলক। একবার লেখো, চিরকাল চলে।</div>
`,
  senior:{
    title:"Automation — Senior Notes",
    body:`<table class="kv-table">
<tr><th>Tool</th><th>Use Case</th></tr>
<tr><td class="hl">schedule</td><td>Python-level scheduling (simple)</td></tr>
<tr><td class="hl">cron</td><td>Linux OS-level scheduling (robust)</td></tr>
<tr><td class="hl">argparse</td><td>Build CLI tools with flags</td></tr>
<tr><td class="hl">subprocess</td><td>Run external commands</td></tr>
<tr><td class="hl">smtplib</td><td>Send email notifications</td></tr>
<tr><td class="hl">logging</td><td>Track what happened (critical!)</td></tr>
<tr><td class="hl">Celery/Airflow</td><td>Large-scale task queues</td></tr>
</table>
<p><strong>Cross-ref:</strong> Book 4 (System Design) Door 14 (async queues)। Book 44 (Data Engineering)-এ pipeline scheduling দেখবে।</p>`
  }
});

// ── GUILD 20: MASTER BUILDER — SYNTHESIS + HOW TO THINK ──
doors.push({
  num:20, icon:"👑", color:"#a5b4fc", name:"মাস্টার বিল্ডারের কক্ষ",
  subtitle:"The Master Builder", tech:"Synthesis + How to Think Like a Programmer",
  spirit:"ইহসান — excellence, from Hadith: 'Allah has prescribed excellence in all things'",
  secret:"১৯টি গিল্দে তুমি Python শিখেছ। কিন্তু সবচেয়ে গুরুত্বপূর্ণ দক্ষতা এখনো বাকি — <strong>কীভাবে ভাবতে হয়</strong>। সমস্যা ভাঙো, ছোট করো, সমাধান পরীক্ষা করো। AI যুগে কোড লেখা সহজ — সঠিক প্রশ্ন করা কঠিন। তুমি কারিগর, AI তোমার হাতিয়ার।",
  recall:{
    q:"একজন programmer হিসেবে সমস্যা সমাধানের ৫টি ধাপ কী?",
    qen:"What are the 5 steps of problem-solving as a programmer?",
    a:"১) বুঝো — সমস্যা কী, input/output কী। ২) ভাঙো — ছোট ছোট অংশে। ৩) ছদ্মকোড — মানুষের ভাষায় logic। ৪) কোড — একটা একটা করে। ৫) পরীক্ষা — edge case, error। তারপর iterate।",
    aen:"1) Understand. 2) Break down. 3) Pseudocode. 4) Code incrementally. 5) Test edge cases."
  },
  story:`
<p class="scene-setting">বিংশ গিল্ড। শেষ গিল্ড। মাস্টার বিল্ডারের কক্ষ। সব গিল্ডের পতাকা, সব মাস্টারের উপস্থিতি। ফাতেমা (মাটি), ইদ্রিস (নহর), রহিম (রান্না), করিম (ভাণ্ডার), জয়নুল (ক্যালিগ্রাফি) — সবাই এসেছেন। মাস্টার বিল্ডার রাহিলা দাঁড়িয়ে — উনিশ জন কারিগরের সামনে। "তোমরা ১৯টি গিল্ড পেরিয়েছ," তিনি বলেন। "এখন শেষ শিক্ষা — সবচেয়ে গুরুত্বপূর্ণ। কীভাবে ভাবতে হয়। চলো একটা একটা করে শিখি।"</p>
<p class="scene-setting en">Twentieth guild. The final guild. Master Builder's chamber. Banners of all guilds, all masters present. Fatima (clay), Idris (canal), Rahim (kitchen), Karim (storehouse), Zainul (calligraphy) — all have come. Master Builder Rahila stands before nineteen craftsmen. "You have passed 19 guilds," she says. "Now the final lesson — the most important. How to think. Let's learn step by step."</p>

<div class="dialogue">তুমি ১৯টি গিল্ডে Python শিখেছ — variables থেকে concurrency পর্যন্ত। কিন্তু সবচেয়ে গুরুত্বপূর্ণ দক্ষতা এখনো বাকি। AI যুগে কোড লেখা সহজ — ChatGPT পারে। কিন্তু কী বানাতে হবে, সমস্যা কীভাবে ভাঙবে — এটা AI পারে না। তুমি কারিগর, AI তোমার হাতিয়ার।</div>
<div class="dialogue en">You learned Python in 19 guilds — from variables to concurrency. But the most important skill remains. In the AI era, writing code is easy — ChatGPT can do it. But what to build, how to break down a problem — AI cannot do this. You are the craftsman, AI is your tool.</div>

<div class="code-block"># ── STEP 1: The problem-solving framework ──
# Every programmer follows the SAME 5-step process:

# 1. UNDERSTAND — What exactly is the problem?
#    - What is the input? What is the output?
#    - What are the constraints?
#    - What are the edge cases?

# 2. BREAK DOWN — Divide into smaller sub-problems
#    - Each sub-problem should be solvable independently
#    - Solve one at a time

# 3. PSEUDOCODE — Write logic in plain English/Bengali
#    - No syntax, just steps
#    - If you can't write pseudocode, you don't understand the problem

# 4. CODE — Implement one piece at a time
#    - Write one function → test it → write the next
#    - Don't write 100 lines without testing

# 5. TEST — Verify with edge cases
#    - Empty input, None, negative numbers, huge data
#    - Does it actually solve the ORIGINAL problem?

# Example problem: "Count word frequencies in a text file"
# We'll work through all 5 steps.</div>

<div class="code-block"># ── STEP 2: UNDERSTAND the problem ──
# Before writing ANY code, answer these questions:

# PROBLEM: Count word frequencies in a text file

# What is the input?
#   → A text file (e.g., "article.txt")

# What is the expected output?
#   → A dictionary: {"word": count}, sorted by frequency

# What are the constraints?
#   → Case-insensitive ("The" and "the" are the same)
#   → Ignore punctuation ("word." and "word" are the same)
#   → Should handle large files efficiently

# What are the edge cases?
#   → Empty file → should return {}
#   → Single word → {"word": 1}
#   → Numbers mixed in → should they count as words?
#   → File doesn't exist → should handle gracefully

# If you can't answer these questions, you're not ready to code.
# This step prevents 80% of bugs.</div>

<div class="code-block"># ── STEP 3: BREAK DOWN and PSEUDOCODE ──
# Divide the problem into small, solvable pieces.

# BREAK DOWN:
# Sub-problem 1: Read a text file
# Sub-problem 2: Clean the text (lowercase, remove punctuation)
# Sub-problem 3: Split into words
# Sub-problem 4: Count each word
# Sub-problem 5: Sort by frequency

# PSEUDOCODE (plain language, no Python syntax):
#
# function word_frequency(filepath):
#     text = read the file
#     text = convert to lowercase
#     text = remove punctuation
#     words = split text by spaces
#     counts = empty dictionary
#     for each word in words:
#         if word in counts:
#             counts[word] = counts[word] + 1
#         else:
#             counts[word] = 1
#     sort counts by value (descending)
#     return the top 10

# Notice: NO Python syntax here. Just logic.
# If this pseudocode makes sense, you understand the problem.
# Now translate each line to Python.</div>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>AI যুগের সত্য:</strong> যে শুধু AI-কে কোড লেখায়, সে কারিগর নয় — অপারেটর। AI ভুল করে — তুমি না বুঝলে ধরতে পারবে না। AI সাহায্য করে, কিন্তু চিন্তা তোমার। প্রশ্ন করতে শেখো — সঠিক প্রশ্নই সঠিক উত্তরের জন্ম দেয়।</div></div>

<div class="code-block"># ── STEP 4: CODE incrementally ──
# Implement ONE sub-problem at a time, test it, then move on.

import re
from collections import Counter

def word_frequency(filepath):
    """Count word frequencies in a text file."""
    # Sub-problem 1: Read file
    with open(filepath) as f:
        text = f.read()

    # Sub-problem 2: Clean text
    text = text.lower()
    text = re.sub(r"[^a-z\s]", "", text)  # keep only letters + spaces

    # Sub-problem 3: Split into words
    words = text.split()

    # Sub-problems 4+5: Count + sort (Counter does both!)
    return Counter(words).most_common(10)

# Test it:
with open("sample.txt", "w") as f:
    f.write("the cat sat on the mat. the cat was happy.")

result = word_frequency("sample.txt")
print(result)
# [('the', 3), ('cat', 2), ('sat', 1), ('on', 1), ...]

# Notice: we didn't write everything at once.
# We solved sub-problem 1, then 2, then 3...
# Each step tested before moving to the next.
# This is INCREMENTAL development.</div>

<div class="code-block"># ── STEP 5: TEST edge cases ──
# Testing is not optional. It's how you know your code actually works.

import re
from collections import Counter

def word_frequency(filepath):
    """Count word frequencies in a text file."""
    try:
        with open(filepath) as f:
            text = f.read()
    except FileNotFoundError:
        return []

    text = text.lower()
    text = re.sub(r"[^a-z\s]", "", text)
    words = text.split()

    if not words:  # empty file
        return []

    return Counter(words).most_common(10)

# Test 1: Normal input
with open("test1.txt", "w") as f:
    f.write("the cat sat on the mat")
assert word_frequency("test1.txt")[0] == ("the", 2)
print("Test 1 passed: normal input")

# Test 2: Empty file
with open("test2.txt", "w") as f:
    f.write("")
assert word_frequency("test2.txt") == []
print("Test 2 passed: empty file")

# Test 3: File doesn't exist
assert word_frequency("nonexistent.txt") == []
print("Test 3 passed: missing file")

# Test 4: Punctuation
with open("test4.txt", "w") as f:
    f.write("Hello! Hello? HELLO.")
result = word_frequency("test4.txt")
assert result[0] == ("hello", 3)  # case + punctuation handled
print("Test 4 passed: punctuation and case")

print("All tests passed!")</div>

<div class="code-block"># ── STEP 6: How to use AI as a programmer ──
# AI (ChatGPT, Claude, Copilot) is your PAIR PROGRAMMER.
# But YOU are the ARCHITECT. Know when to use it and when not to.

# ✅ USE AI FOR:
# - Syntax reminder: "How do I sort a dict by value in Python?"
# - Boilerplate: "Generate a Flask CRUD template"
# - Debugging help: "Why am I getting None from this function?"
# - Learning: "Explain what a decorator does with an example"
# - Code review: "What's wrong with this code?"
# - Exploring options: "What's the best way to read a large CSV?"

# ❌ DON'T USE AI FOR:
# - Understanding the problem (that's YOUR job)
# - Architecture decisions (that's YOUR judgment)
# - Accepting code you don't understand (READ every line)
# - Replacing fundamental knowledge (you must know the basics)

# GOOD prompt (specific, shows understanding):
#   "I need to parse a CSV with 50 columns. Using pandas,
#    how do I select only columns containing 'price' and
#    filter rows where price > 1000?"

# BAD prompt (lazy, no understanding):
#   "Write a program to analyze data"

# THE RULE: If you can't explain what the AI wrote, don't use it.
# You are RESPONSIBLE for every line of code in your project.</div>

<div class="code-block"># ── STEP 7: The craftsman's checklist ──
# Before showing your code to anyone, run through this checklist.

craftsman_checklist = [
    # Correctness:
    "1. Does it solve the actual problem? (not what you assumed)",
    "2. Are edge cases handled? (empty, None, negative, huge input)",
    "3. Is there error handling? (what if file doesn't exist?)",
    "4. Are there tests? (does it actually work?)",

    # Readability:
    "5. Is every variable name clear? (would a stranger understand?)",
    "6. Are functions small and focused? (one function, one job)",
    "7. Are there comments for complex logic?",
    "8. Will I understand this in 6 months?",

    # Quality:
    "9. Is it DRY? (any copy-pasted logic?)",
    "10. Is it Pythonic? (using Python's strengths?)",
    "11. Are types clear? (type hints where needed?)",
    "12. Is it documented? (docstrings on public functions?)",
]

# Print the checklist:
for item in craftsman_checklist:
    print(f"  ✅ {item}")

# Rate your code:
# 12/12 = production-ready
# 8-11  = good, minor improvements needed
# 5-7   = needs work before sharing
# 0-4   = rewrite needed</div>

<div class="code-block"># ── STEP 8: How to learn any new technology ──
# The approach you used in this book works for ANY new tool.

# THE LEARNING CYCLE:
# 1. UNDERSTAND — What problem does this tool solve?
#    Example: "Django solves web development for large apps."

# 2. TRY — Build something tiny with it
#    Example: Make a 1-page website with Django in 30 minutes.

# 3. BUILD — Create a small project (not a tutorial, your OWN idea)
#    Example: A personal blog with Django.

# 4. DEEPEN — Read the documentation, learn advanced features
#    Example: Learn Django's ORM, middleware, signals.

# 5. TEACH — Explain it to someone else (or write a blog post)
#    Teaching reveals gaps in your understanding.

# HOW TO CHOOSE WHAT TO LEARN NEXT:
# What problem do you want to solve?
#   - Web apps?      → Django, Flask, FastAPI
#   - Data science?  → pandas, numpy, scikit-learn
#   - AI/ML?         → PyTorch, TensorFlow, HuggingFace
#   - Automation?    → Selenium, BeautifulSoup, schedule
#   - Mobile?        → Kivy, BeeWare
#   - Games?         → Pygame, Arcade
#   - DevOps?        → Docker, CI/CD, bash scripting

# Don't learn tools randomly. Learn what you NEED for a project.
# Project-driven learning beats tutorial-driven learning every time.</div>

<div class="code-block"># ── STEP 9: Project ideas to practice everything ──
# The best way to learn is by building. Here are project ideas
# that use skills from MULTIPLE guilds:

# BEGINNER PROJECTS (Guilds 1-5):
# 1. Calculator — functions, control flow, user input
# 2. Guess the number game — random, loops, conditionals
# 3. Todo list (CLI) — lists, file I/O, functions
# 4. Word counter — strings, dictionaries, file reading
# 5. Mad libs generator — string formatting, user input

# INTERMEDIATE PROJECTS (Guilds 6-10):
# 6. Expense tracker — OOP, file I/O (JSON), error handling
# 7. Weather app — API calls (requests), JSON parsing
# 8. Password manager — encryption, file I/O, classes
# 9. File organizer — os module, automation
# 10. Quiz app — classes, data structures, file I/O

# ADVANCED PROJECTS (Guilds 11-20):
# 11. Web scraper dashboard — scraping, pandas, Flask API
# 12. Blog API — FastAPI, database, authentication
# 13. Data analysis pipeline — pandas, visualization, automation
# 14. Chat bot — APIs, string processing, comprehensions
# 15. Automated backup system — scheduling, logging, email

# CAPSTONE IDEAS (combine everything):
# 16. E-commerce API (OOP + database + API + auth + tests)
# 17. Stock price analyzer (scraping + pandas + visualization + API)
# 18. Personal finance dashboard (data analysis + automation + web)

# Pick ONE project. Build it. Struggle. Learn. Ship it.</div>

<div class="code-block"># ── STEP 10: The complete journey — 20 guilds united ──
# You started with clay (variables) and reached the stars (concurrency).
# Here's everything you learned, in one view:

# ═══════════════════════════════════════════════════════
# FOUNDATION (Guilds 1-5):
#   1. Variables    — naming, types, f-strings, input
#   2. Control Flow — if/elif/else, for, while, match/case
#   3. Functions    — def, parameters, return, scope, type hints
#   4. Data Structures — list, tuple, dict, set
#   5. Strings      — slicing, methods, f-strings, regex
#
# BUILDING (Guilds 6-10):
#   6. File I/O     — read/write, JSON, CSV, pathlib
#   7. Errors       — try/except, raise, custom exceptions
#   8. Modules      — import, packages, pip, venv
#   9. OOP          — class, inheritance, polymorphism, dataclass
#   10. Comprehensions — list/dict/set/generator expressions
#
# MASTERY (Guilds 11-15):
#   11. Decorators     — @syntax, functools.wraps, @timer, @cache
#   12. Context Managers — with, __enter__/__exit__, @contextmanager
#   13. Generators      — yield, lazy evaluation, pipelines
#   14. Functional      — map, filter, reduce, lambda, closures
#   15. Concurrency     — threading, asyncio, multiprocessing
#
# REAL WORLD (Guilds 16-20):
#   16. Data Analysis   — pandas, groupby, visualization
#   17. Web Scraping    — requests, BeautifulSoup, APIs
#   18. Building APIs   — Flask, FastAPI, REST, CRUD
#   19. Automation      — schedule, cron, argparse, logging
#   20. Thinking        — problem-solving, AI usage, craftsmanship
# ═══════════════════════════════════════════════════════

# You now know more Python than 90% of people who call themselves
# "programmers." But knowledge is not skill. Skill comes from BUILDING.

# Now go build something.
# Not because someone told you to.
# Because you have a problem to solve and the tools to solve it.

# AI কোড লেখে, তুমি ভাবো।
# কারিগর তুমি, হাতিয়ার AI।
# এখন যাও — কিছু বানাও।

# "AI writes code. You think.
#  You are the craftsman. AI is your tool.
#  Now go — build something."</div>

<div class="diagram">
  <div class="diag-title">How to Think Like a Programmer — 5 Steps</div>
  <svg viewBox="0 0 560 280" xmlns="http://www.w3.org/2000/svg">
    <defs><marker id="arrMT" markerWidth="6" markerHeight="6" refX="4" refY="3" orient="auto"><path d="M0,0 L4,3 L0,6" fill="#34d399"/></marker></defs>
    <!-- Step 1 -->
    <rect x="20" y="15" width="520" height="40" rx="6" fill="rgba(45,212,191,0.1)" stroke="#2dd4bf" stroke-width="2"/>
    <text x="40" y="35" fill="#2dd4bf" font-size="10" font-weight="bold">1.</text>
    <text x="60" y="35" fill="#34d399" font-size="9" font-weight="bold">UNDERSTAND</text>
    <text x="170" y="35" fill="#9a93b8" font-size="8">input কী? output কী? edge case কী?</text>
    <text x="60" y="48" fill="#9a93b8" font-size="7">এক লাইন কোড লেখার আগে সমস্যা বুঝো</text>
    <line x1="280" y1="55" x2="280" y2="65" stroke="#34d399" stroke-width="1.5" marker-end="url(#arrMT)"/>
    <!-- Step 2 -->
    <rect x="20" y="70" width="520" height="40" rx="6" fill="rgba(251,191,36,0.08)" stroke="#fbbf24" stroke-width="2"/>
    <text x="40" y="90" fill="#fbbf24" font-size="10" font-weight="bold">2.</text>
    <text x="60" y="90" fill="#34d399" font-size="9" font-weight="bold">BREAK DOWN</text>
    <text x="170" y="90" fill="#9a93b8" font-size="8">বড় সমস্যা → ছোট ছোট অংশ</text>
    <text x="60" y="103" fill="#9a93b8" font-size="7">প্রতিটা অংশ আলাদাভাবে সমাধানযোগ্য</text>
    <line x1="280" y1="110" x2="280" y2="120" stroke="#34d399" stroke-width="1.5" marker-end="url(#arrMT)"/>
    <!-- Step 3 -->
    <rect x="20" y="125" width="520" height="40" rx="6" fill="rgba(167,139,250,0.08)" stroke="#a78bfa" stroke-width="2"/>
    <text x="40" y="145" fill="#a78bfa" font-size="10" font-weight="bold">3.</text>
    <text x="60" y="145" fill="#34d399" font-size="9" font-weight="bold">PSEUDOCODE</text>
    <text x="190" y="145" fill="#9a93b8" font-size="8">মানুষের ভাষায় logic লেখো</text>
    <text x="60" y="158" fill="#9a93b8" font-size="7">code নয়, ধারণা — প্রথমে logic clear করো</text>
    <line x1="280" y1="165" x2="280" y2="175" stroke="#34d399" stroke-width="1.5" marker-end="url(#arrMT)"/>
    <!-- Step 4 -->
    <rect x="20" y="180" width="520" height="40" rx="6" fill="rgba(82,196,26,0.08)" stroke="#52c41a" stroke-width="2"/>
    <text x="40" y="200" fill="#52c41a" font-size="10" font-weight="bold">4.</text>
    <text x="60" y="200" fill="#34d399" font-size="9" font-weight="bold">CODE INCREMENTALLY</text>
    <text x="230" y="200" fill="#9a93b8" font-size="8">এক অংশ, test, পরের অংশ</text>
    <text x="60" y="213" fill="#9a93b8" font-size="7">সব একসাথে নয় — একটা একটা করে</text>
    <line x1="280" y1="220" x2="280" y2="230" stroke="#34d399" stroke-width="1.5" marker-end="url(#arrMT)"/>
    <!-- Step 5 -->
    <rect x="20" y="235" width="520" height="35" rx="6" fill="rgba(240,98,146,0.08)" stroke="#f06292" stroke-width="2"/>
    <text x="40" y="255" fill="#f06292" font-size="10" font-weight="bold">5.</text>
    <text x="60" y="255" fill="#34d399" font-size="9" font-weight="bold">TEST EDGE CASES</text>
    <text x="200" y="255" fill="#9a93b8" font-size="8">empty, None, negative, huge input</text>
  </svg>
  <div class="diag-cap">বুঝো → ভাঙো → ছদ্মকোড → ধাপে ধাপে কোড → পরীক্ষা। AI কোড লেখে, তুমি ভাবো।</div>
</div>

<div class="dialogue">ইহসান — উৎকর্ষ, সুন্দর করা। হাদিসে বলা হয়েছে — আল্লাহ প্রতিটা কাজে উৎকর্ষ লিখেছেন। ইহসান হলো এমনভাবে কোড লেখা যেন তুমি আল্লাহকে দেখছ। শুধু কাজ হলেই নয় — সুন্দরভাবে হোক, পরিষ্কারভাবে হোক, উৎকর্ষের সাথে হোক। ২০টি গিল্ড শেখার পর তুমি শুধু Python জানো না — তুমি জানো কীভাবে ভাবতে হয়, কীভাবে সমস্যা সমাধান করতে হয়, কীভাবে উৎকর্ষের সাথে কাজ করতে হয়। এখন যাও — কিছু বানাও।</div>
<div class="dialogue en">Ihsan — excellence, doing beautifully. The Hadith says — Allah has prescribed excellence in all things. Ihsan is writing code as if you see Allah. Not just that it works — but that it is beautiful, clean, excellent. After 20 guilds you don't just know Python — you know how to think, how to solve problems, how to work with excellence. Now go — build something.</div>

<div class="secret-box">👑 ১) বুঝো ২) ভাঙো ৩) ছদ্মকোড ৪) ধাপে কোড ৫) পরীক্ষা। AI কোড লেখে, তুমি ভাবো। কারিগর তুমি, হাতিয়ার AI। এখন যাও — কিছু বানাও।</div>
`,
  senior:{
    title:"The Complete Journey — 20 Guilds United",
    body:`<p><strong>তুমি যা শিখেছ:</strong></p>
<table class="kv-table">
<tr><th>Phase</th><th>Guilds</th><th>Power</th></tr>
<tr><td class="hl">Foundation</td><td>1-5</td><td>Variables, Flow, Functions, Data, Strings</td></tr>
<tr><td class="hl">Building</td><td>6-10</td><td>Files, Errors, Modules, OOP, Comprehensions</td></tr>
<tr><td class="hl">Mastery</td><td>11-15</td><td>Decorators, Context, Generators, Functional, Concurrency</td></tr>
<tr><td class="hl">Real World</td><td>16-20</td><td>Data Analysis, Scraping, APIs, Automation, Thinking</td></tr>
</table>
<p><strong>পরবর্তী যাত্রা:</strong> এখন কিছু বানাও। একটা project — তোমার নিজের সমস্যা। Python তোমার হাতিয়ার। Book 52 (Code Craftsman)-এ শেখো কীভাবে <em>ভালো</em> কোড লেখতে হয়। Book 2 (DSA Bazaar)-এ শেখো algorithm। Book 4 (System Design)-এ শেখো scale। পুরো Knowledge Courtyard তোমার সহায়।</p>
<div class="callout warn"><span class="co-icon">🤖</span><div><strong>AI Era Truth:</strong> AI কোড লেখে — কিন্তু তুমি ভাবো। সঠিক প্রশ্নই সঠিক উত্তরের জন্ম দেয়। AI হাতিয়ার, তুমি কারিগর। যে ভাবতে জানে, সে AI যুগেও অপরিহার্য।</div></div>
<p><strong>Cross-ref:</strong> Book 52 (Code Craftsman) — ২১টি দরজায় ভালো কোড। Book 2 (DSA Bazaar) — algorithm শক্তি। Book 33 (Critical Thinking) — কীভাবে ভাবতে হয়। Book 5 (Learn Anything) — কীভাবে শিখতে হয়।</p>`
  }
});
