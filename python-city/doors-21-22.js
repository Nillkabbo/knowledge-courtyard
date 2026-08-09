// ════════════════════════════════════════════════════════════
// THE PYTHON CITY — DOORS 21-22 (CAPSTONE PROJECT)
// 21. Project: Personal Expense Tracker — Core Build
// 22. Project: Full App — API + Analytics + Automation
// ════════════════════════════════════════════════════════════

// ── GUILD 21: PROJECT — PERSONAL EXPENSE TRACKER (CORE) ──
doors.push({
  num:21, icon:"💰", color:"#fbbf24", name:"কারিগরের প্রজেক্ট",
  subtitle:"The Capstone — Part 1", tech:"Project: Expense Tracker Core (OOP + Files + Errors)",
  spirit:"বান্না — building/construction, from Quran 9:109 (a building founded on piety)",
  secret:"একটা সম্পূর্ণ প্রোজেক্ট = সব গিল্ডের জ্ঞান একসাথে। OOP (model), file I/O (persistence), error handling (robust), comprehensions (analysis)। ২০টি গিল্ডের সব শক্তি এক কোডে।",
  recall:{
    q:"একটা প্রোজেক্ট কীভাবে ভাগ করবে? model, storage, service কেন আলাদা?",
    qen:"How do you structure a project? Why separate model, storage, service?",
    a:"৩ স্তর: Model (Expense class — ডেটা), Storage (file save/load — স্থায়িত্ব), Service (business logic — rules)। আলাদা করলে এক অংশ বদলালে অন্যটা নষ্ট হয় না। Separation of concerns।",
    aen:"3 layers: Model (data), Storage (persistence), Service (logic). Separation of concerns."
  },
  story:`
<p class="scene-setting">একবিংশ গিল্ড। মাস্টার বিল্ডারের নির্মাণ কক্ষ। রাহিলা ফিরে এলেন — হাতে একটা নকশা। একটা Expense Tracker — খরচের হিসাব রাখার অ্যাপ। "২০টি গিল্ড তুমি শিখেছ," তিনি বলেন। "এখন সব এক করে কিছু বানাও। একা একা function — না। একটা সম্পূর্ণ প্রোজেক্ট। model, storage, service — তিন স্তরে ভাগ করো।"</p>
<p class="scene-setting en">Twenty-first guild. Master Builder's construction room. Rahila returns — blueprint in hand. An Expense Tracker — app to track expenses. "20 guilds you learned," she says. "Now combine everything into something real. Not isolated functions — a complete project. Model, storage, service — three layers."</p>

<div class="dialogue">সমস্যা: তুমি মাসের খরচ ট্র্যাক করতে চাও — কোথায় টাকা যাচ্ছে। কিন্তু একটা script নয় — একটা প্রোজেক্ট। Expense class (OOP), JSON file (storage), add/view/delete (service)। দরজা ২১-এ কোর বানাও, দরজা ২২-এ API + analytics + automation যোগ করো।</div>
<div class="dialogue en">Problem: Track monthly expenses — where money goes. Not a script — a project. Expense class (OOP), JSON file (storage), add/view/delete (service). Door 21 builds the core, Door 22 adds API + analytics + automation.</div>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>বাস্তব প্রজেক্টের সত্য:</strong> রাহিলা বললেন — ৮০% শিক্ষানবিশ সব এক file-এ লেখে — UI, database, logic একসাথে। কিন্তু প্রোডাকশন কোড ভাগ করা হয়: Model (ডেটা), Storage (স্থায়িত্ব), Service (নিয়ম), UI/API (ইন্টারফেস)। এক অংশ বদলালে অন্যটা না ছুঁয়ে — এটাই পেশাদার।</div></div>

<div class="code-block"># expense_tracker/models.py — Layer 1: Data Model
# Blueprint for what an Expense IS.

from dataclasses import dataclass, asdict
from datetime import datetime
from typing import Optional


@dataclass
class Expense:
    """A single expense record."""
    id: int
    amount: float
    category: str        # "food", "transport", "rent", etc.
    description: str
    date: str            # ISO format: "2024-01-15"

    @classmethod
    def create(cls, amount: float, category: str,
               description: str, date: Optional[str] = None) -> "Expense":
        """Factory method with validation."""
        if amount &lt;= 0:
            raise ValueError(f"Amount must be positive, got {amount}")
        if not category:
            raise ValueError("Category required")

        # Auto-generate date if not provided
        if date is None:
            date = datetime.now().strftime("%Y-%m-%d")

        return cls(
            id=0,  # will be assigned by storage
            amount=round(amount, 2),
            category=category.lower().strip(),
            description=description.strip(),
            date=date,
        )

    def to_dict(self) -> dict:
        """Serialize for JSON storage."""
        return asdict(self)


# ── Testing the model ──
if __name__ == "__main__":
    # Valid expense
    e1 = Expense.create(500, "food", "Groceries from Shwapno")
    print(e1)  # Expense(id=0, amount=500.0, category='food', ...)

    # Invalid — raises ValueError
    try:
        e2 = Expense.create(-100, "transport", "Bus")
    except ValueError as err:
        print(f"Rejected: {err}")  # Amount must be positive</div>

<div class="code-block"># expense_tracker/storage.py — Layer 2: Persistence
# How data is saved and loaded. Swap JSON for SQL without touching model.

import json
from pathlib import Path
from typing import List


class ExpenseStorage:
    """Handles saving/loading expenses to/from JSON file."""

    def __init__(self, filepath: str = "expenses.json"):
        self.filepath = Path(filepath)
        self._ensure_file_exists()

    def _ensure_file_exists(self) -> None:
        """Create file with empty list if it doesn't exist."""
        if not self.filepath.exists():
            self._write([])

    def _read(self) -> List[dict]:
        """Read all records from file."""
        try:
            with open(self.filepath, "r") as f:
                return json.load(f)
        except (json.JSONDecodeError, FileNotFoundError):
            # Corrupt or missing — start fresh
            self._write([])
            return []

    def _write(self, records: List[dict]) -> None:
        """Write all records to file."""
        with open(self.filepath, "w") as f:
            json.dump(records, f, indent=2)

    def load_all(self) -> List[dict]:
        """Load all expense records."""
        return self._read()

    def save_all(self, records: List[dict]) -> None:
        """Save all expense records."""
        self._write(records)

    def get_next_id(self) -> int:
        """Get the next available ID."""
        records = self._read()
        if not records:
            return 1
        return max(r["id"] for r in records) + 1</div>

<div class="code-block"># expense_tracker/service.py — Layer 3: Business Logic
# The rules: what the app DOES. Uses model + storage.

from typing import List, Dict, Optional
from collections import Counter
from models import Expense
from storage import ExpenseStorage


class ExpenseService:
    """Business logic: add, view, delete, analyze expenses."""

    def __init__(self, storage: ExpenseStorage):
        self.storage = storage

    def add_expense(self, amount: float, category: str,
                    description: str, date: str = None) -> Expense:
        """Create and store a new expense."""
        expense = Expense.create(amount, category, description, date)
        expense.id = self.storage.get_next_id()

        records = self.storage.load_all()
        records.append(expense.to_dict())
        self.storage.save_all(records)

        return expense

    def get_all(self) -&gt; List[Expense]:
        """Load all expenses as Expense objects."""
        records = self.storage.load_all()
        return [Expense(**r) for r in records]

    def get_by_category(self, category: str) -&gt; List[Expense]:
        """Filter expenses by category."""
        return [
            e for e in self.get_all()
            if e.category == category.lower()
        ]

    def delete_expense(self, expense_id: int) -&gt; bool:
        """Delete an expense by ID. Returns True if deleted."""
        records = self.storage.load_all()
        original_len = len(records)
        records = [r for r in records if r["id"] != expense_id]

        if len(records) &lt; original_len:
            self.storage.save_all(records)
            return True
        return False

    # ── Analysis using comprehensions (Guild 10) ──
    def total_spending(self) -&gt; float:
        """Sum of all expenses."""
        return sum(e.amount for e in self.get_all())

    def spending_by_category(self) -&gt; Dict[str, float]:
        """Total spending per category."""
        expenses = self.get_all()
        return {
            cat: sum(e.amount for e in expenses if e.category == cat)
            for cat in {e.category for e in expenses}  # unique categories
        }

    def top_categories(self, n: int = 3) -&gt; List[tuple]:
        """Top N categories by spending."""
        spending = self.spending_by_category()
        return sorted(spending.items(), key=lambda x: x[1], reverse=True)[:n]

    def summary(self) -&gt; str:
        """Human-readable summary."""
        total = self.total_spending()
        top = self.top_categories(3)
        count = len(self.get_all())

        lines = [f"Total spending: {total:,.2f} taka ({count} expenses)"]
        lines.append("Top categories:")
        for cat, amt in top:
            pct = (amt / total * 100) if total else 0
            lines.append(f"  {cat}: {amt:,.2f} ({pct:.1f}%)")
        return "\n".join(lines)


# ── Using the app ──
if __name__ == "__main__":
    storage = ExpenseStorage("my_expenses.json")
    app = ExpenseService(storage)

    # Add expenses
    app.add_expense(500, "food", "Groceries")
    app.add_expense(200, "transport", "Bus pass")
    app.add_expense(15000, "rent", "January rent")
    app.add_expense(300, "food", "Restaurant")

    # View summary
    print(app.summary())
    # Total spending: 16,000.00 taka (4 expenses)
    # Top categories:
    #   rent: 15,000.00 (93.8%)
    #   food: 800.00 (5.0%)
    #   transport: 200.00 (1.2%)</div>

<div class="diagram">
  <div class="diag-title">Project Architecture — ৩ স্তর (Separation of Concerns)</div>
  <svg viewBox="0 0 560 280" xmlns="http://www.w3.org/2000/svg">
    <defs><marker id="arrPA" markerWidth="6" markerHeight="6" refX="4" refY="3" orient="auto"><path d="M0,0 L4,3 L0,6" fill="#34d399"/></marker></defs>
    <!-- Layer 1: Model -->
    <rect x="20" y="20" width="520" height="55" rx="8" fill="rgba(45,212,191,0.1)" stroke="#2dd4bf" stroke-width="2.5"/>
    <text x="280" y="40" text-anchor="middle" fill="#2dd4bf" font-size="10" font-weight="bold">Layer 1: MODEL — models.py</text>
    <text x="280" y="55" text-anchor="middle" fill="#9a93b8" font-size="8">Expense class (dataclass) — amount, category, description, date</text>
    <text x="280" y="67" text-anchor="middle" fill="#9a93b8" font-size="7">OOP (Guild 9) + Validation + Serialization</text>
    <line x1="280" y1="75" x2="280" y2="90" stroke="#34d399" stroke-width="2" marker-end="url(#arrPA)"/>
    <!-- Layer 2: Storage -->
    <rect x="20" y="95" width="520" height="55" rx="8" fill="rgba(167,139,250,0.08)" stroke="#a78bfa" stroke-width="2.5"/>
    <text x="280" y="115" text-anchor="middle" fill="#a78bfa" font-size="10" font-weight="bold">Layer 2: STORAGE — storage.py</text>
    <text x="280" y="130" text-anchor="middle" fill="#9a93b8" font-size="8">ExpenseStorage class — JSON file read/write, ID generation</text>
    <text x="280" y="142" text-anchor="middle" fill="#9a93b8" font-size="7">File I/O (Guild 6) + Error Handling (Guild 7)</text>
    <line x1="280" y1="150" x2="280" y2="165" stroke="#34d399" stroke-width="2" marker-end="url(#arrPA)"/>
    <!-- Layer 3: Service -->
    <rect x="20" y="170" width="520" height="55" rx="8" fill="rgba(82,196,26,0.08)" stroke="#52c41a" stroke-width="2.5"/>
    <text x="280" y="190" text-anchor="middle" fill="#52c41a" font-size="10" font-weight="bold">Layer 3: SERVICE — service.py</text>
    <text x="280" y="205" text-anchor="middle" fill="#9a93b8" font-size="8">ExpenseService class — add, view, delete, analyze</text>
    <text x="280" y="217" text-anchor="middle" fill="#9a93b8" font-size="7">Functions (Guild 3) + Comprehensions (Guild 10) + Counter (Guild 4)</text>
    <!-- Bottom: Why -->
    <rect x="20" y="240" width="520" height="30" rx="6" fill="rgba(251,191,36,0.06)" stroke="#fbbf24" stroke-width="1"/>
    <text x="280" y="258" text-anchor="middle" fill="#fbbf24" font-size="8" font-weight="bold">কেন আলাদা? এক অংশ বদলালে অন্যটা না ছুঁয়ে — Separation of Concerns</text>
  </svg>
  <div class="diag-cap">৩ স্তর: Model (ডেটা) → Storage (স্থায়িত্ব) → Service (নিয়ম)। এক বদলালে অন্য নষ্ট হয় না।</div>
</div>

<div class="dialogue">বান্না — নির্মাণ, ভিত্তি স্থাপন। কুরআনে আল্লাহ বলেন — যে ভবন তৈরি করে আল্লাহর তাকওয়ার উপর (৯:১০৯)। বান্না হলো শক্ত ভিত্তি — মাটি গভীরে, দেয়াল সোজা, ছাদ সুরক্ষিত। প্রোজেক্টও বান্না — model ভিত্তি, storage দেয়াল, service ছাদ। একটা দুর্বল হলে পুরো ভবন ভেঙে পড়ে। Separation of concerns = শক্ত ভিত্তি।</div>
<div class="dialogue en">Banna — building, foundation. Allah says — a building founded on piety (9:109). Banna is a solid foundation — deep earth, straight walls, secure roof. A project is banna — model foundation, storage walls, service roof. If one is weak, the whole structure collapses. Separation of concerns = solid foundation.</div>

<div class="secret-box">💰 প্রোজেক্ট = ৩ স্তর। Model (ডেটা) → Storage (ফাইল) → Service (নিয়ম)। এক বদলালে অন্য নষ্ট না হয়। Separation of Concerns।</div>
`,
  senior:{
    title:"Project Architecture — Senior Notes",
    body:`<table class="kv-table">
<tr><th>Layer</th><th>File</th><th>Responsibility</th><th>Guilds Used</th></tr>
<tr><td class="hl">Model</td><td>models.py</td><td>What an Expense IS</td><td>9 (OOP), 7 (Errors)</td></tr>
<tr><td class="hl">Storage</td><td>storage.py</td><td>Save/load to JSON</td><td>6 (Files), 7 (Errors)</td></tr>
<tr><td class="hl">Service</td><td>service.py</td><td>Add/view/delete/analyze</td><td>3 (Functions), 10 (Comprehensions), 4 (Data Structures)</td></tr>
</table>
<p><strong>Why separate?</strong> JSON → SQL বদলালে শুধু storage.py ছুঁয়ে। Service ও Model অপরিবর্তিত। এটাই professional architecture।</p>
<p><strong>Cross-ref:</strong> Book 52 (Code Craftsman) Door 12 (DDD) — domain layer। Book 40 (Software Engineering) Door 5 (architecture)। Book 4 (System Design) Door 4 (microservices)।</p>`
  }
});

// ── GUILD 22: PROJECT — FULL APP (API + ANALYTICS + AUTOMATION) ──
doors.push({
  num:22, icon:"🚀", color:"#fbbf24", name:"সম্পূর্ণ অ্যাপ",
  subtitle:"The Capstone — Part 2", tech:"Project: API + Analytics + Automation + CLI",
  spirit:"ইনফিতাহ — opening/unfolding, from Quran 94:5-6 (With hardship comes ease)",
  secret:"কোর বানালে এখন শক্তি যোগ করো: REST API (Guild 18), pandas analytics (Guild 16), automation (Guild 19), CLI (argparse)। একই project — ৪টা interface। এটাই real-world software।",
  recall:{
    q:"API, analytics, automation কীভাবে এক project-এ যায়?",
    qen:"How do API, analytics, automation fit in one project?",
    a:"এক service layer — ৪টা interface: REST API (web/mobile), pandas analytics (insight), automation (daily backup), CLI (terminal)। এক logic, অনেক interface। এটাই real software।",
    aen:"One service layer — 4 interfaces: REST API, pandas analytics, automation, CLI. One logic, many interfaces."
  },
  story:`
<p class="scene-setting">বিংশ দ্বিতীয় গিল্ড। শেষ গিল্ড। রাহিলা ফিরে এলেন — এবার হাতে ৪টা দরজার নকশা। "কোর প্রজেক্ট প্রস্তুত," তিনি বলেন। "এখন সেটাকে সম্পূর্ণ অ্যাপে রূপ দাও। এক service — চার interface। API দিয়ে web/mobile, pandas দিয়ে analytics, automation দিয়ে দৈনিক backup, CLI দিয়ে terminal। এক logic, অনেক interface। এটাই real software।"</p>
<p class="scene-setting en">Twenty-second guild. Final guild. Rahila returns — this time with blueprints for 4 doors. "Core project is ready," she says. "Now make it a full app. One service — four interfaces. API for web/mobile, pandas for analytics, automation for daily backup, CLI for terminal. One logic, many interfaces. This is real software."</p>

<div class="dialogue">সমস্যা: Expense Tracker কোর তৈরি (দরজা ২১)। এখন সেটাকে real-world app বানাও: REST API (মোবাইল app থেকে খরচ যোগ), pandas analytics (মাসিক report), automation (দৈনিক backup), CLI (terminal থেকে ব্যবহার)। এক ExpenseService — ৪টা interface। এটাই পেশাদার software architecture।</div>
<div class="dialogue en">Problem: Expense Tracker core built (Door 21). Now make it real-world: REST API (add expense from mobile), pandas analytics (monthly report), automation (daily backup), CLI (use from terminal). One ExpenseService — 4 interfaces. This is professional software architecture.</div>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>Real-world lesson:</strong> রাহিলা বললেন — production software-এ এক logic, অনেক interface। Web, mobile, CLI, API — সব এক service ব্যবহার করে। যদি প্রতিটায় logic কপি করো — এক বদলালে সব ভাঙবে। One source of truth — এক service, অনেক interface।</div></div>

<div class="code-block"># expense_tracker/api.py — Interface 1: REST API (FastAPI)
# Web/mobile apps talk to this.

from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from service import ExpenseService
from storage import ExpenseStorage

app = FastAPI(title="Expense Tracker API")
storage = ExpenseStorage("expenses.json")
service = ExpenseService(storage)


class ExpenseRequest(BaseModel):
    """API input — auto-validated by Pydantic."""
    amount: float
    category: str
    description: str


@app.get("/expenses")
def list_expenses(category: str = None):
    """GET /expenses or GET /expenses?category=food"""
    if category:
        expenses = service.get_by_category(category)
    else:
        expenses = service.get_all()
    return [e.to_dict() for e in expenses]


@app.post("/expenses", status_code=201)
def add_expense(req: ExpenseRequest):
    """POST /expenses — add new expense."""
    try:
        expense = service.add_expense(
            amount=req.amount,
            category=req.category,
            description=req.description,
        )
        return expense.to_dict()
    except ValueError as e:
        raise HTTPException(status_code=400, detail=str(e))


@app.delete("/expenses/{expense_id}")
def delete_expense(expense_id: int):
    """DELETE /expenses/5 — remove expense."""
    if not service.delete_expense(expense_id):
        raise HTTPException(status_code=404, detail="Not found")
    return {"message": "Deleted"}


@app.get("/expenses/summary")
def get_summary():
    """GET /expenses/summary — spending analysis."""
    return {
        "total": service.total_spending(),
        "by_category": service.spending_by_category(),
        "top_3": service.top_categories(3),
        "count": len(service.get_all()),
    }

# Run: uvicorn api:app --reload --port 8000
# Docs: http://localhost:8000/docs (auto-generated!)</div>

<div class="code-block"># expense_tracker/analytics.py — Interface 2: Pandas Analytics
# Data analysis — trends, patterns, insights.

import pandas as pd
from service import ExpenseService
from storage import ExpenseStorage


def generate_report(filepath: str = "expenses.json") -> dict:
    """Generate comprehensive analytics report using pandas."""
    storage = ExpenseStorage(filepath)
    service = ExpenseService(storage)

    # Load into pandas DataFrame (Guild 16)
    records = storage.load_all()
    if not records:
        return {"message": "No data"}

    df = pd.DataFrame(records)
    df["date"] = pd.to_datetime(df["date"])

    # Monthly spending trend
    monthly = df.resample("ME", on="date")["amount"].sum()

    # Category breakdown
    by_category = df.groupby("category")["amount"].agg(["sum", "count"])

    # Average expense
    avg = df["amount"].mean()

    # Highest single expense
    top_expense = df.nlargest(1, "amount").iloc[0]

    return {
        "total": float(df["amount"].sum()),
        "average": float(avg),
        "by_category": by_category.to_dict(),
        "monthly_trend": monthly.to_dict(),
        "biggest_expense": {
            "amount": float(top_expense["amount"]),
            "category": top_expense["category"],
            "description": top_expense["description"],
        },
        "days_tracked": int(df["date"].nunique()),
    }


def export_chart(filepath: str = "expenses.json",
                 output: str = "spending_chart.png"):
    """Generate and save a spending chart."""
    import matplotlib
    matplotlib.use("Agg")  # non-interactive backend
    import matplotlib.pyplot as plt

    storage = ExpenseStorage(filepath)
    df = pd.DataFrame(storage.load_all())

    if df.empty:
        return None

    # Bar chart: spending by category
    spending = df.groupby("category")["amount"].sum().sort_values()
    fig, ax = plt.subplots(figsize=(10, 6))
    spending.plot(kind="barh", ax=ax, color="#2dd4bf")
    ax.set_title("Spending by Category")
    ax.set_xlabel("Amount (taka)")
    plt.tight_layout()
    fig.savefig(output)
    return output


if __name__ == "__main__":
    import json
    report = generate_report()
    print(json.dumps(report, indent=2, default=str))</div>

<div class="code-block"># expense_tracker/automation.py — Interface 3: Automation
# Daily backup + weekly report — runs automatically.

import shutil
import logging
import schedule
import time
from datetime import datetime
from pathlib import Path

# Setup logging (Guild 19)
logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s [%(levelname)s] %(message)s",
    handlers=[
        logging.FileHandler("expense_automation.log"),
        logging.StreamHandler(),
    ],
)
logger = logging.getLogger(__name__)


def daily_backup():
    """Backup the expenses file — runs daily at midnight."""
    source = Path("expenses.json")
    if not source.exists():
        logger.warning("No expenses.json to backup")
        return

    timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
    backup = Path(f"backups/expenses_{timestamp}.json")
    backup.parent.mkdir(exist_ok=True)

    shutil.copy2(source, backup)
    logger.info(f"Backup created: {backup}")


def weekly_report():
    """Generate and save weekly analytics report."""
    from analytics import generate_report
    import json

    report = generate_report()
    filename = f"reports/weekly_{datetime.now():%Y%m%d}.json"
    Path("reports").mkdir(exist_ok=True)

    with open(filename, "w") as f:
        json.dump(report, f, indent=2, default=str)

    logger.info(f"Weekly report saved: {filename}")


def clean_old_backups(keep_days: int = 30):
    """Delete backups older than keep_days."""
    cutoff = time.time() - (keep_days * 86400)
    backups_dir = Path("backups")

    if not backups_dir.exists():
        return

    for f in backups_dir.glob("*.json"):
        if f.stat().st_mtime &lt; cutoff:
            f.unlink()
            logger.info(f"Deleted old backup: {f.name}")


# Schedule tasks
schedule.every().day.at("00:00").do(daily_backup)
schedule.every().monday.at("09:00").do(weekly_report)
schedule.every().day.at("00:05").do(lambda: clean_old_backups(30))

if __name__ == "__main__":
    logger.info("Automation started — waiting for schedule...")
    while True:
        schedule.run_pending()
        time.sleep(60)</div>

<div class="code-block"># expense_tracker/cli.py — Interface 4: Command-Line Tool
# Use from terminal: python cli.py add --amount 500 --category food

import argparse
import sys
from service import ExpenseService
from storage import ExpenseStorage


def main():
    """CLI interface for Expense Tracker."""
    parser = argparse.ArgumentParser(
        description="Personal Expense Tracker"
    )
    subparsers = parser.add_subparsers(dest="command", required=True)

    # add command
    add_parser = subparsers.add_parser("add", help="Add an expense")
    add_parser.add_argument("--amount", type=float, required=True)
    add_parser.add_argument("--category", required=True)
    add_parser.add_argument("--description", required=True)

    # list command
    list_parser = subparsers.add_parser("list", help="List expenses")
    list_parser.add_argument("--category", default=None)

    # summary command
    subparsers.add_parser("summary", help="Show spending summary")

    # delete command
    del_parser = subparsers.add_parser("delete", help="Delete expense")
    del_parser.add_argument("id", type=int)

    args = parser.parse_args()
    storage = ExpenseStorage("expenses.json")
    service = ExpenseService(storage)

    if args.command == "add":
        try:
            expense = service.add_expense(
                args.amount, args.category, args.description
            )
            print(f"Added: #{expense.id} {expense.amount} {expense.category}")
        except ValueError as e:
            print(f"Error: {e}", file=sys.stderr)
            sys.exit(1)

    elif args.command == "list":
        if args.category:
            expenses = service.get_by_category(args.category)
        else:
            expenses = service.get_all()
        for e in expenses:
            print(f"  #{e.id} {e.date} {e.amount:8.2f} {e.category:12s} {e.description}")

    elif args.command == "summary":
        print(service.summary())

    elif args.command == "delete":
        if service.delete_expense(args.id):
            print(f"Deleted #{args.id}")
        else:
            print(f"Not found #{args.id}", file=sys.stderr)
            sys.exit(1)


if __name__ == "__main__":
    main()

# Usage examples:
#   python cli.py add --amount 500 --category food --description "Lunch"
#   python cli.py list --category food
#   python cli.py summary
#   python cli.py delete 5</div>

<div class="diagram">
  <div class="diag-title">এক Service — ৪ Interface (Real Software)</div>
  <svg viewBox="0 0 560 280" xmlns="http://www.w3.org/2000/svg">
    <!-- Center: Service -->
    <rect x="180" y="110" width="200" height="60" rx="10" fill="rgba(45,212,191,0.15)" stroke="#2dd4bf" stroke-width="3"/>
    <text x="280" y="132" text-anchor="middle" fill="#2dd4bf" font-size="11" font-weight="bold">ExpenseService</text>
    <text x="280" y="148" text-anchor="middle" fill="#9a93b8" font-size="7">ONE source of truth</text>
    <text x="280" y="160" text-anchor="middle" fill="#9a93b8" font-size="7">add, view, delete, analyze</text>
    <!-- 4 interfaces -->
    <line x1="280" y1="110" x2="280" y2="75" stroke="#34d399" stroke-width="2"/>
    <rect x="210" y="35" width="140" height="40" rx="8" fill="rgba(167,139,250,0.1)" stroke="#a78bfa" stroke-width="2"/>
    <text x="280" y="52" text-anchor="middle" fill="#a78bfa" font-size="9" font-weight="bold">REST API</text>
    <text x="280" y="65" text-anchor="middle" fill="#9a93b8" font-size="6">FastAPI — web/mobile</text>
    <!-- Analytics -->
    <line x1="180" y1="140" x2="120" y2="140" stroke="#34d399" stroke-width="2"/>
    <rect x="10" y="115" width="110" height="50" rx="8" fill="rgba(82,196,26,0.1)" stroke="#52c41a" stroke-width="2"/>
    <text x="65" y="135" text-anchor="middle" fill="#52c41a" font-size="9" font-weight="bold">Analytics</text>
    <text x="65" y="148" text-anchor="middle" fill="#9a93b8" font-size="6">pandas — report</text>
    <text x="65" y="158" text-anchor="middle" fill="#9a93b8" font-size="6">matplotlib — chart</text>
    <!-- CLI -->
    <line x1="380" y1="140" x2="440" y2="140" stroke="#34d399" stroke-width="2"/>
    <rect x="440" y="115" width="110" height="50" rx="8" fill="rgba(251,191,36,0.1)" stroke="#fbbf24" stroke-width="2"/>
    <text x="495" y="135" text-anchor="middle" fill="#fbbf24" font-size="9" font-weight="bold">CLI</text>
    <text x="495" y="148" text-anchor="middle" fill="#9a93b8" font-size="6">argparse</text>
    <text x="495" y="158" text-anchor="middle" fill="#9a93b8" font-size="6">terminal</text>
    <!-- Automation -->
    <line x1="280" y1="170" x2="280" y2="205" stroke="#34d399" stroke-width="2"/>
    <rect x="210" y="205" width="140" height="40" rx="8" fill="rgba(240,98,146,0.08)" stroke="#f06292" stroke-width="2"/>
    <text x="280" y="222" text-anchor="middle" fill="#f06292" font-size="9" font-weight="bold">Automation</text>
    <text x="280" y="235" text-anchor="middle" fill="#9a93b8" font-size="6">backup + report</text>
    <!-- Bottom -->
    <rect x="10" y="260" width="540" height="20" rx="4" fill="rgba(45,212,191,0.06)" stroke="rgba(45,212,191,0.2)" stroke-width="1"/>
    <text x="280" y="274" text-anchor="middle" fill="#34d399" font-size="7" font-weight="bold">One logic, many interfaces — এটাই real software architecture</text>
  </svg>
  <div class="diag-cap">এক ExpenseService — ৪ interface: API, Analytics, CLI, Automation। এক source of truth, অনেক ব্যবহার।</div>
</div>

<div class="dialogue">ইনফিতাহ — উন্মোচন, খোলা। কুরআনে আল্লাহ বলেন — অবশ্যই কষ্টের সাথে রয়েছে স্বস্তি (৯৪:৫-৬)। ইনফিতাহ হলো সীমাবদ্ধ থেকে বিস্তৃত — এক বীজ থেকে বৃক্ষ। প্রোজেক্টও ইনফিতাহ — এক service থেকে ৪টা interface। এক কোর, অনেক দরজা। কষ্টের সাথে স্বস্তি — কোর বানানো কঠিন, কিন্তু interface যোগ করা সহজ।</div>
<div class="dialogue en">Infitah — opening, unfolding. Allah says — with hardship comes ease (94:5-6). Infitah is expanding from limited to wide — one seed into a tree. A project is infitah — one service into 4 interfaces. One core, many doors. Hardship with ease — building the core is hard, but adding interfaces is easy.</div>

<div class="secret-box">🚀 এক service — ৪ interface (API, Analytics, CLI, Automation)। এক logic, অনেক ব্যবহার। এটাই real software। One source of truth।</div>
`,
  senior:{
    title:"Full App — Project Summary",
    body:`<p><strong>সম্পূর্ণ প্রোজেক্ট structure:</strong></p>
<table class="kv-table">
<tr><th>File</th><th>Layer</th><th>Guilds</th></tr>
<tr><td class="hl">models.py</td><td>Data Model</td><td>9 (OOP), 7 (Errors)</td></tr>
<tr><td class="hl">storage.py</td><td>Persistence</td><td>6 (Files), 7 (Errors)</td></tr>
<tr><td class="hl">service.py</td><td>Business Logic</td><td>3 (Functions), 10 (Comprehensions)</td></tr>
<tr><td class="hl">api.py</td><td>REST Interface</td><td>18 (API), FastAPI, Pydantic</td></tr>
<tr><td class="hl">analytics.py</td><td>Data Analysis</td><td>16 (pandas), matplotlib</td></tr>
<tr><td class="hl">automation.py</td><td>Scheduled Tasks</td><td>19 (Automation), logging</td></tr>
<tr><td class="hl">cli.py</td><td>Terminal Interface</td><td>19 (argparse)</td></tr>
</table>
<p><strong>৭টা file, ৪টা interface, ১টা core।</strong> এটাই real-world Python project। শুরু করো: <code>python cli.py add --amount 500 --category food --description "Lunch"</code>।</p>
<div class="callout warn"><span class="co-icon">🎓</span><div><strong>২২ গিল্ডের সারমর্ম:</strong> তুমি শুধু Python শিখো নাই। তুমি শিখেছ কীভাবে একটা সম্পূর্ণ software বানাতে হয় — model থেকে API, analytics থেকে automation। AI কোড লেখে, কিন্তু architecture তোমার। তুমি কারিগর, AI তোমার হাতিয়ার। এখন যাও — কিছু বানাও।</div></div>
<p><strong>Cross-ref:</strong> Book 52 (Code Craftsman) — ভালো কোড। Book 4 (System Design) — scale। Book 47 (Testing) — test। Book 2 (DSA) — algorithm। পুরো Knowledge Courtyard তোমার সহায়।</p>`
  }
});
