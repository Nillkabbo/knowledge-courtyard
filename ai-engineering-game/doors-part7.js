// DOORS DATA — Part 7 (Doors 14-15: Deep Currents Phase)
// Uses global `doors` array from doors-part1.js

doors.push({
  num:14, icon:"💰", color:"#f5a623", name:"কোষাধ্যক্ষের হিসাবখাতা",
  subtitle:"The Treasurer's Ledger", tech:"Cost & Token Economics", spirit:"মিযান — সবকিছুর মাপ",
  secret:"প্রতিটা টোকেনে দাম। বড় মডেল = সোনা, ছোট = তামা। কাজের সাথে মিলাও। ক্যাশ, ব্যাচ, সংক্ষেপ।",
  recall:{
    q:"কোষাধ্যক্ষ কেন রুটি কেনার জন্য সোনার মুদ্রা খরচ করেন না?",
    qen:"Why doesn't the treasurer spend gold coins to buy bread?",
    a:"কারণ রুটি সস্তা জিনিস — তামার মুদ্রায় হয়। সোনা দিলে অপচয়। কিন্তু চুক্তির জন্য তামা দিলে কেউ গ্রহণ করবে না। ঠিক তেমনি — সহজ কাজে ছোট মডেল, কঠিন কাজে বড় মডেল। মিল না হলে খরচ বাড়ে বা কাজ নষ্ট হয়।",
    aen:"Because bread is cheap — copper suffices. Gold would be waste. But copper won't work for a treaty. Exactly so — simple tasks use small models, hard tasks use large models. Mismatch means waste or failure."
  },
  story:`
<p class="scene-setting">চৌদ্দতম দরজা। সমুদ্রের ধারেই একটা পাথরের কুঠি। ভেতরে হিসাবের খাতা, আবাকাস (abacus), দেয়ালে বিশাল ছক। দিওয়ান ইউসুফ বসে আছেন — নাকের ডগায় চশমা, চোখ সংখ্যায় নিমগ্ন, আঙুলে কালির দাগ। তাঁর সামনে তিন ধরনের মুদ্রার স্তূপ: সোনা (দামি), রূপা (মাঝারি), তামা (সস্তা)। একজন বণিক এসেছে — প্রতিটা কাজে কোন মুদ্রা খরচ করবে সে জিজ্ঞেস করতে।</p>
<p class="scene-setting en">The fourteenth door. A stone treasury by the shore. Inside: ledger books, an abacus, a vast chart on the wall. Diwan Yusuf sits — spectacles at the tip of his nose, eyes buried in numbers, ink-stained fingers. Before him: three piles of coin — gold (expensive), silver (mid), copper (cheap). A merchant has come — asking which coin to spend on which task.</p>

<p>বণিক বলল: "দিওয়ান, আমি প্রতিদিন শত শত প্রশ্নের উত্তর দিতে চাই। কোন মুদ্রা খরচ করব?"</p>
<p class="en">The merchant said: "Diwan, I want to answer hundreds of questions every day. Which coin do I spend?"</p>

<div class="dialogue">কোন কাজ?</div>
<div class="dialogue en">"What kind of work?"</div>

<p>বণিক: "নানা রকম। কখনো সহজ প্রশ্ন — ঠিকানা বের করা। কখনো কঠিন — আইনি দলিল বিশ্লেষণ। কখনো অনুবাদ। কখনো কবিতা।"</p>
<p class="en">Merchant: "All kinds. Sometimes simple — extracting an address. Sometimes hard — analyzing a legal document. Sometimes translation. Sometimes poetry."</p>

<p>দিওয়ান ইউসুফ হাসলেন। "তাহলে তোমার তিন ধরনের মুদ্রা লাগবে।" তিনি একটা বড় ছক এঁকে দিলেন:</p>
<p class="en">Diwan Yusuf smiled. "Then you need three kinds of coin." He drew a large chart:</p>

<div class="diagram"><svg viewBox="0 0 560 160" xmlns="http://www.w3.org/2000/svg"><rect x="20" y="30" width="140" height="50" rx="8" fill="rgba(45,212,191,.08)" stroke="#2dd4bf" stroke-width="1.5"/><text x="90" y="50" text-anchor="middle" fill="#2dd4bf" font-size="10" font-weight="bold">INPUT</text><text x="90" y="68" text-anchor="middle" fill="#9a93b8" font-size="9">tokens in</text><defs><marker id="ar14" markerWidth="6" markerHeight="6" refX="4" refY="3" orient="auto"><path d="M0,0 L4,3 L0,6" fill="#34d399"/></marker></defs><line x1="160" y1="55" x2="200" y2="55" stroke="#34d399" stroke-width="2" marker-end="url(#ar14)"/><rect x="205" y="30" width="140" height="50" rx="8" fill="rgba(82,196,26,.08)" stroke="#52c41a" stroke-width="1.5"/><text x="275" y="50" text-anchor="middle" fill="#52c41a" font-size="10" font-weight="bold">PROCESS</text><text x="275" y="68" text-anchor="middle" fill="#9a93b8" font-size="9">per 1K tokens</text><line x1="345" y1="55" x2="385" y2="55" stroke="#34d399" stroke-width="2" marker-end="url(#ar14)"/><rect x="390" y="30" width="140" height="50" rx="8" fill="rgba(167,139,250,.08)" stroke="#a78bfa" stroke-width="1.5"/><text x="460" y="50" text-anchor="middle" fill="#a78bfa" font-size="10" font-weight="bold">COST</text><text x="460" y="68" text-anchor="middle" fill="#9a93b8" font-size="9">$ per request</text><text x="280" y="110" text-anchor="middle" fill="#fbbf24" font-size="10" font-weight="bold">Monitor cost per request</text><text x="280" y="135" text-anchor="middle" fill="#9a93b8" font-size="9">100K context = 100K billed</text></svg></div>

<div class="code-block"># ── STEP 1: Model selection — gold, silver, copper ──
# Choosing the right model for each task.

# MODEL TIERS (2024-2025):

model_tiers = {
    "GOLD (Frontier: GPT-4o, Claude Sonnet/Opus)": {
        "strength": "Complex reasoning, legal analysis, code generation",
        "weakness": "10-50x more expensive per token",
        "use_for": "5% of tasks (hard reasoning, creative, high-stakes)",
        "cost": "~$10-15 per 1M tokens",
    },
    "SILVER (Mid: GPT-4o-mini, Claude Haiku, Llama-3-70B)": {
        "strength": "General tasks, summarization, translation, simple code",
        "weakness": "Struggles with very complex reasoning",
        "use_for": "30% of tasks (moderate complexity)",
        "cost": "~$0.15-0.30 per 1M tokens",
    },
    "COPPER (Small: Llama-3-8B, Phi-3, Gemma-2B)": {
        "strength": "Classification, extraction, simple Q&A",
        "weakness": "Cannot do deep analysis",
        "use_for": "65% of tasks (routine, high-volume)",
        "cost": "~$0.01-0.05 per 1M tokens (or self-hosted)",
    },
}

for tier, info in model_tiers.items():
    print(f"\n{tier}")
    for key, value in info.items():
        print(f"  {key}: {value}")

# THE COST MISTAKE:
# Using GPT-4 for EVERYTHING → 50x overpaying
# → 65% of tasks need only copper-level models
# → Route requests to the cheapest model that works

# PYTHON (model router):
class ModelRouter:
    """Route requests to the cheapest capable model."""
    def __init__(self):
        self.routes = {
            "classification": "copper",   # Llama-3-8B
            "extraction": "copper",
            "summarization": "silver",    # GPT-4o-mini
            "translation": "silver",
            "simple_code": "silver",
            "complex_reasoning": "gold",  # GPT-4o
            "creative_writing": "gold",
            "legal_analysis": "gold",
        }

    def route(self, task_type):
        tier = self.routes.get(task_type, "silver")
        costs = {"gold": 15.0, "silver": 0.30, "copper": 0.05}
        return {"tier": tier, "cost_per_1M": costs[tier]}

router = ModelRouter()
for task in ["classification", "summarization", "complex_reasoning"]:
    result = router.route(task)
    print(f"  {task} → {result['tier']} (${result['cost_per_1M']}/1M tokens)")

# COST COMPARISON (1M requests, 500 tokens each):
# All GPT-4:     1M * 500 * $15/1M  = $7,500
# Smart routing: 65% copper + 30% silver + 5% gold = ~$200
# → 37x cost reduction with model routing!</div>

<div class="code-block"># ── STEP 2: Cost formula and optimization ──
# Understanding LLM API costs.

# COST FORMULA:
# Cost = (input_tokens * input_price) + (output_tokens * output_price)

# PYTHON (cost calculator):
def calculate_cost(input_tokens, output_tokens, model="gpt-4o"):
    """Calculate API cost for a request."""
    prices = {
        # per 1M tokens: (input, output)
        "gpt-4o":         (2.50, 10.00),
        "gpt-4o-mini":    (0.15, 0.60),
        "claude-sonnet":  (3.00, 15.00),
        "claude-haiku":   (0.25, 1.25),
        "llama-3-70b":    (0.59, 0.79),  # via Groq/Together
        "llama-3-8b":     (0.05, 0.08),  # via Groq
    }

    if model not in prices:
        return f"Unknown model: {model}"

    in_price, out_price = prices[model]
    cost = (input_tokens / 1_000_000 * in_price) + \
           (output_tokens / 1_000_000 * out_price)
    return cost

# Compare costs for a typical request (500 in, 200 out):
print("COST PER REQUEST (500 input + 200 output tokens):")
for model in ["gpt-4o", "gpt-4o-mini", "claude-haiku", "llama-3-8b"]:
    cost = calculate_cost(500, 200, model)
    print(f"  " + model.ljust(20) + ": $" + str(round(cost, 4)))

# MONTHLY COST (10K requests/day):
print("\nMONTHLY COST (10,000 requests/day, 30 days):")
for model in ["gpt-4o", "gpt-4o-mini", "claude-haiku", "llama-3-8b"]:
    daily = calculate_cost(500, 200, model) * 10_000
    monthly = daily * 30
    print(f"  " + model.ljust(20) + ": $" + str(round(monthly, 2)) + "/month")

# THREE COST OPTIMIZATION TECHNIQUES:
optimization = """
1. MODEL ROUTING:
   → Use cheap models for easy tasks (65% of traffic)
   → Save expensive models for hard tasks (5%)
   → 10-50x cost reduction

2. CACHING:
   → Store previous responses (exact match or semantic)
   → Don't call API for questions you've already answered
   → Redis cache: 30-60% of queries are cacheable
   → Semantic cache: embed query → find similar → reuse

3. PROMPT COMPRESSION:
   → Remove unnecessary tokens from prompts
   → Shorter system prompts (cache the common parts)
   → Use prompt templates (reuse, don't repeat)
   → Batch similar requests
"""
print(optimization)</div>

<div class="code-block"># ── STEP 3: Structured output — JSON schema ──
# Forcing LLMs to output parseable data.

# PROBLEM: Free text is unpredictable
# → Parsing LLM output with regex = fragile nightmare
# → Different format every time → breaks your pipeline

# SOLUTION: Structured output (JSON schema / function calling)

# ❌ BAD (free text → parsing nightmare):
bad_prompt = "Extract the user info from this text and list it."

# ✅ GOOD (structured → always parseable):
structured_prompt = """
Extract user information and return as JSON:
{
  "name": "string",
  "email": "string",
  "age": "integer",
  "interests": ["array of strings"]
}

Text: "Hi, I'm Rakib, rakib@example.com, 25 years old.
       I love Python, ML, and hiking."

Return ONLY valid JSON, nothing else.
"""

# PYTHON (structured output with OpenAI):
import json

def extract_structured(text, schema):
    """Use function calling for guaranteed structured output."""
    # Using OpenAI function calling (simplified):
    response = openai_client.chat.completions.create(
        model="gpt-4o-mini",
        messages=[{"role": "user", "content": text}],
        response_format={"type": "json_object"},
        functions=[{
            "name": "extract_user",
            "parameters": schema
        }],
        function_call={"name": "extract_user"}
    )
    return json.loads(response.choices[0].message.function_call.arguments)

# JSON SCHEMA (guaranteed structure):
user_schema = {
    "type": "object",
    "properties": {
        "name": {"type": "string"},
        "email": {"type": "string", "format": "email"},
        "age": {"type": "integer", "minimum": 0, "maximum": 150},
        "interests": {"type": "array", "items": {"type": "string"}}
    },
    "required": ["name", "email"],
}

# PYDANTIC (Python-native schema validation):
from pydantic import BaseModel, EmailStr
from typing import List

class UserInfo(BaseModel):
    name: str
    email: EmailStr
    age: int | None = None
    interests: List[str] = []

# Pydantic guarantees:
# → email is valid format
# → age is integer (or None)
# → interests is list of strings
# → If LLM output doesn't match → validation error → retry

# THREE STRUCTURED OUTPUT METHODS:
methods = {
    "1. JSON MODE": "response_format=json_object (OpenAI)",
    "2. FUNCTION CALLING": "Define function + schema → LLM fills args",
    "3. PYDANTIC + INSTRUCTOR": "Python types → automatic validation + retry",
}
for method, desc in methods.items():
    print(f"  {method}: {desc}")</div>

<p>তুমি দেখলে — ৬৫% কাজে তামা যথেষ্ট। বণিক ভুল করছিল — প্রতিটা কাজে সোনা খরচ করছিল। দাম ৫০ গুণ বেশি।</p>
<p class="en">You saw — 65% of work needs only copper. The merchant was wrong — spending gold on every task. Fifty times the cost.</p>

<p>তারপর দিওয়ান ইউসুফ একটা ভুলের কথা বললেন। মুখ গম্ভীর।</p>
<p class="en">Then Diwan Yusuf spoke of a mistake. Face grave.</p>

<div class="dialogue">পাঁচ বছর আগে আমি রাজকোষে দায়িত্ব নিয়েছিলাম। প্রতিটা খরচে সোনা দিতাম — নিরাপদ ভেবে। ছয় মাসে কোষ শূন্য। কারণ রুটি কেনায় সোনা লাগে না। রাস্তার ঝাড়ুদারকে সোনা দিলে সে আনন্দে নাচে — কিন্তু রাজ্য দেউলিয়া। তারপর আমি শিখলাম — প্রতিটা কাজের একটা নির্দিষ্ট মূল্য আছে। সেই মূল্যের বেশি খরচ করা পাপ।</div>
<div class="dialogue en">"Five years ago I took charge of the royal treasury. I spent gold on every expense — thinking it safe. In six months, the treasury was empty. Because buying bread doesn't require gold. Give the street sweeper gold and he dances with joy — but the kingdom goes bankrupt. Then I learned — every task has a specific price. Spending more than that price is a sin."</div>

<div class="dialogue">রাষ্ট্রদূত বলেছিলেন — context window নির্দিষ্ট মাপের। এখন দেখো — প্রতিটা টোকেন সেই বাক্সে জায়গা নেয়, আর প্রতিটা টোকেনে দাম। ইনপুট টোকেনে দাম, আউটপুট টোকেনে দাম। তুমি যত বেশি context দাও — তত বেশি খরচ। যত বেশি আউটপুট চাও — তত বেশি খরচ। সোনা না তামা — সেটা মডেলের ওপর নির্ভর করে।</div>
<div class="dialogue en">"The ambassador said — the context window has a fixed size. Now see — each token in that box costs money. Input tokens cost, output tokens cost. The more context you give — the more you pay. The more output you want — the more you pay. Gold or copper — that depends on the model."</div>

<div class="code-block">খরচের সূত্র — Cost Formula:

মোট খরচ = (ইনপুট টোকেন * ইনপুট দাম) + (আউটপুট টোকেন * আউটপুট দাম)

উদাহরণ:
  GPT-4: ইনপুট $30 / ১M টোকেন, আউটপুট $60 / ১M
  GPT-4o-mini: ইনপুট $0.15 / ১M, আউটপুট $0.60 / ১M
  
  ১০০০ কল * ৫০০ ইনপুট + ২০০ আউটপুট:
  GPT-4:       $21.00
  GPT-4o-mini:  $0.21  ← ১০০ গুণ সস্তা!</div>

<p>বণিক চোখ কপালে তুললেন। "১০০ গুণ!" দিওয়ান মাথা নাড়লেন। "আর এখানেই শেষ নয়। আরও তিনটা কৌশল আছে।"</p>
<p class="en">The merchant's eyes went wide. "A hundred times!" Diwan nodded. "And it doesn't end here. Three more techniques."</p>

<div class="code-block">তিন কৌশল — Three Techniques:

১. ক্যাশিং (Caching)
   একই প্রশ্ন বারবার? উত্তর মুলতুবি রাখো।
   "আমার কোম্পানির ছুটির নিয়ম কী?"
   → প্রথমবার: মডেল ডাকো। উত্তর সংরক্ষণ।
   → দ্বিতীয়বার: মডেল না ডেকে সংরক্ষিত উত্তর দাও। বিনামূল্যে।

২. ব্যাচিং (Batching)
   ১০০ আলাদা কল নয় — একসাথে ১০০ প্রশ্ন।
   → অর্ধেক দাম। ধীরে আসে, কিন্তু সস্তা।
   → রিয়েল-টাইম দরকার না হলে: ব্যাচ।

৩. প্রম্পট সংক্ষেপ (Prompt Compression)
   ৫০০০ টোকেন নিয়ম-কানুন? ৫০০ টোকেনে ছোট করো।
   গুরুত্বপূর্ণ অংশ রাখো, বাকি বাদ দাও।
   → টোকেন কম, খরচ কম, গতি বেশি।</div>

<p>বদর চাচা রত্ন কাটতেন। দিওয়ান ইউসুফ মুদ্রা গোনেন। তুমি ভাবলে — দুজনের কাজ এক। কম দিয়ে বেশি পাওয়া। সঠিক মাত্রায়।</p>
<p class="en">Badr the jeweler cuts gems. Diwan Yusuf counts coins. You thought — both do the same work. Getting more with less. At the right measure.</p>

<div class="dialogue">কারিগর বলেছিলেন — fine-tuning একবার খরচ, তারপর প্রতিটা কলে সাশ্রয়। আমি বলি — মডেল নির্বাচনও তেমনি। সঠিক মডেল বাছলে প্রতিটা কলে সাশ্রয়। একবার ভাবলে, হাজার কলে লাভ। এটাই টোকেন অর্থনীতি — Token Economics।</div>
<div class="dialogue en">"The blacksmith said — fine-tuning costs once, then saves on every call. I say — model selection is the same. Choose the right model and every call saves money. Think once, profit on a thousand calls. This is Token Economics."</div>

<div class="dialogue">মিযান — সমতা, ভারসাম্য। কুরআনে আছে: "আর আকাশকে তিনি স্থাপন করেছেন এবং স্থাপন করেছেন মিযান — যাতে তোমরা ওজনে সীমালঙ্ঘন না কর।" (৫৫:৭-৮)। সোনা যেখানে দরকার নেই, সেখানে তামা। সীমালঙ্ঘন নয় — পরিমিতি। এটাই কোষাধ্যক্ষের নিয়ম। এটাই AI-এর অর্থনীতি।</div>
<div class="dialogue en">"Mizan — balance, proportion. The Quran says: 'And the sky He has raised, and He has set the Balance — that you not transgress in the balance.' (55:7-8). Where gold isn't needed, use copper. Not excess — proportion. This is the treasurer's law. This is the economics of AI."</div>

<div class="callout warn" data-door="14"><span class="co-icon">⚠️</span><div><strong>বাস্তব বিপদ:</strong> একটা ফ্রি tier app ছাড়া দিলো। ইউজার ১০K token context পাঠাতে লাগলো প্রতি message-এ। এক মাসে $২০,০০০ বিল। Token economics না ভাবলে — ফ্রি = দেউলিয়া।</div></div>

<div class="secret-box"><div class="label">দরজা ১৪ — রহস্য</div><div class="text">💰 প্রতিটা টোকেনে দাম। বড় মডেল = সোনা, ছোট = তামা।<br><small>৬৫% কাজে ছোট মডেল যথেষ্ট। ক্যাশ করো, ব্যাচ করো, সংক্ষেপ করো। ভুল মডেল = ১০০ গুণ অপচয়।</small></div></div>`
});

doors.push({
  num:15, icon:"📐", color:"#26c6da", name:"স্থপতির নকশাখানা",
  subtitle:"The Architect's Blueprint", tech:"Structured Outputs (JSON, Schema, Validation)", spirit:"কাবার মাপ — নির্ধারিত কাঠামো",
  secret:"LLM কথা বলে টেক্সটে, মেশিন চায় কাঠামো। JSON schema = নকশা। যাচাই করো, আবার চেষ্টা করো, বলপূর্বক নিয়ম।",
  recall:{
    q:"স্থপতি কেন সব নির্মাণকর্মীকে একই নকশা দেন, না ছেড়ে দেন নিজেদের মতো করতে?",
    qen:"Why does the architect give all builders the same blueprint instead of letting them improvise?",
    a:"কারণ নকশা ছাড়া প্রতিটা নির্মাণকর্মী আলাদা বানাবে — দেয়াল বেঁকে যাবে, ছাদ না মিলবে। নকশা দিলে সবাই একই কাঠামো মেনে চলে। LLM-ও তেমনি — ফাঁকা ছেড়ে দিলে এলোমেলো, schema দিলে নিখুঁত।",
    aen:"Because without a blueprint, each builder builds differently — walls bend, roofs don't align. Give them a blueprint and everyone follows the same structure. The LLM too — leave it free and it's chaotic, give it a schema and it's precise."
  },
  story:`
<p class="scene-setting">পনেরোতম দরজা। একটা বিশাল নকশাখানা। মেঝেতে ছড়ানো নকশা-কাগজ, দেয়ালে জ্যামিতিক নকশা, কোণায় কম্পাস আর সেট-স্কয়ার। মিমার খালিদ দাঁড়িয়ে আছেন — লম্বা, কোমরে মাপের ফিতা, হাতে তামার কম্পাস, চোখে নিখুঁতির চাহিদা। তাঁর চারপাশে দশজন নির্মাণকর্মী — প্রতিটা দল একটা করে ভবন বানাচ্ছে। কিন্তু তুমি দেখলে — দশটা ভবনের কোনোটাই এক নয়। একটার দরজা ছোট, অন্যটার ছাদ বাঁকা, আরেকটার জানালা নেই। সব ভাঙা।</p>
<p class="scene-setting en">The fifteenth door. A vast blueprint room. Drafting paper on the floor, geometric patterns on the walls, a compass and set-square in the corner. Mimar Khalid stands — tall, a measuring tape at his waist, a brass compass in his hand, perfection in his eyes. Around him: ten builders — each team building a structure. But you see — none of the ten are alike. One has a tiny door, another a crooked roof, another no windows. All broken.</p>

<p>তুমি জিজ্ঞেস করলে: "মিমার ভাই, কী হয়েছে? কেন সব আলাদা?"</p>
<p class="en">You asked: "Brother Mimar, what happened? Why is everything different?"</p>

<div class="dialogue">কারণ আমি বলেছিলাম — সুন্দর কিছু বানাও। আর তারা প্রত্যেকে নিজের মতো সুন্দর বানিয়েছে। একজন গোলাকার দরজা সুন্দর মনে করেছে। আরেকজন ত্রিভুজ জানালা। তৃতীয়জন ছাদ বাদ দিয়েছে — খোলা আকাশ সুন্দর ভেবে। প্রতিটা সৃজনশীল। প্রতিটা ভুল।</div>
<div class="dialogue en">"Because I said — build something beautiful. And each built beautiful in his own way. One thought a round door was beautiful. Another, triangular windows. A third skipped the roof — thinking open sky was beautiful. Each creative. Each wrong."</div>

<p>খালিদ মাথা নাড়লেন। "আমার ভুল। আমি নকশা দিইনি।" তারপর তিনি একটা বিশাল পার্চমেন্ট খুললেন — সেখানে প্রতিটা মাপ নির্দিষ্ট। দরজার উচ্চতা, জানালার সংখ্যা, দেয়ালের পুরুত্ব — কিছুই ছাড় নয়।</p>
<p class="en">Khalid shook his head. "My fault. I gave no blueprint." Then he unrolled a vast parchment — every measurement specified. Door height, window count, wall thickness — no flexibility.</p>

<div class="dialogue">ক্যালিগ্রাফার বলেছিলেন — Format দাও। আমি Format-এর চরম রূপ দেখাই। শুধু ফরম্যাট নয় — কাঠামো। Structure। প্রতিটা দরজার উচ্চতা কত, প্রতিটা জানালার দিক কোন, প্রতিটা দেয়ালের পুরুত্ব কত — সব নির্ধারিত। মুক্তি নয় — নকশা। নকশাতেই সৌন্দর্য।</div>
<div class="dialogue en">"The calligrapher said — give Format. I show the extreme form of Format. Not just format — structure. Every door's height, every window's direction, every wall's thickness — all specified. Not freedom — blueprint. Beauty lives in the blueprint."</div>

<p>খালিদ দশজনকে ডাকলেন। নকশা দিলেন। এক সপ্তাহ পরে — দশটা ভবন, প্রতিটা অভিন্ন। প্রতিটা নিখুঁত। কোনো ভাঙা নেই, কোনো বেঁকা নেই।</p>
<p class="en">Khalid called the ten. Gave the blueprint. A week later — ten structures, each identical. Each perfect. No breaks, no crookedness.</p>

<div class="dialogue">LLM যখন উত্তর দেয় — সে টেক্সট দেয়। মানুষ টেক্সট পড়তে পারে। কিন্তু মেশিন? মেশিন চায় কাঠামো। ডেটাবেস চায় টেবিল। API চায় JSON। তুমি যদি LLM-কে বলো — গ্রাহকের তথ্য দাও — সে এক প্যারাগ্রাফ লিখবে। কিন্তু তোমার সিস্টেম চায়: নাম, ঠিকানা, ফোন — আলাদা ফিল্ডে। এই ফাঁকটাই বিপদ।</div>
<div class="dialogue en">"When the LLM answers — it gives text. Humans can read text. But machines? Machines want structure. Databases want tables. APIs want JSON. If you tell the LLM — give customer information — it writes a paragraph. But your system needs: name, address, phone — in separate fields. This gap is the danger."</div>

<div class="diagram"><svg viewBox="0 0 560 160" xmlns="http://www.w3.org/2000/svg"><rect x="20" y="30" width="140" height="50" rx="8" fill="rgba(45,212,191,.08)" stroke="#2dd4bf" stroke-width="1.5"/><text x="90" y="50" text-anchor="middle" fill="#2dd4bf" font-size="10" font-weight="bold">SCHEMA</text><text x="90" y="68" text-anchor="middle" fill="#9a93b8" font-size="9">define shape</text><defs><marker id="ar15" markerWidth="6" markerHeight="6" refX="4" refY="3" orient="auto"><path d="M0,0 L4,3 L0,6" fill="#34d399"/></marker></defs><line x1="160" y1="55" x2="200" y2="55" stroke="#34d399" stroke-width="2" marker-end="url(#ar15)"/><rect x="205" y="30" width="140" height="50" rx="8" fill="rgba(82,196,26,.08)" stroke="#52c41a" stroke-width="1.5"/><text x="275" y="50" text-anchor="middle" fill="#52c41a" font-size="10" font-weight="bold">LLM</text><text x="275" y="68" text-anchor="middle" fill="#9a93b8" font-size="9">constrained</text><line x1="345" y1="55" x2="385" y2="55" stroke="#34d399" stroke-width="2" marker-end="url(#ar15)"/><rect x="390" y="30" width="140" height="50" rx="8" fill="rgba(167,139,250,.08)" stroke="#a78bfa" stroke-width="1.5"/><text x="460" y="50" text-anchor="middle" fill="#a78bfa" font-size="10" font-weight="bold">JSON</text><text x="460" y="68" text-anchor="middle" fill="#9a93b8" font-size="9">validated</text><text x="280" y="110" text-anchor="middle" fill="#fbbf24" font-size="10" font-weight="bold">Structured output = reliable API</text><text x="280" y="135" text-anchor="middle" fill="#9a93b8" font-size="9">No schema = format drift</text></svg></div>

<div class="code-block">সমস্যা — মুক্ত টেক্সট:

ইউজার: "গ্রাহকের তথ্য দাও"
LLM:   "মোহাম্মদ আলী ঢাকায় থাকেন, ফোন 01712345678।"

তোমার সিস্টেম চায়:
  { name: "...", city: "...", phone: "..." }

→ টেক্সট থেকে ফিল্ড বের করা কঠিন, ভুল হয়।</div>

<div class="dialogue">সমাধান — Structured Output। তুমি LLM-কে একটা নকশা দাও — JSON Schema। ঠিক যেমন আমি নির্মাণকর্মীকে নকশা দি। নকশায় থাকে: কোন ফিল্ড লাগবে, কোন ধরনে ডেটা — স্ট্রিং না সংখ্যা, কোনটা আবশ্যক, কোনটা ঐচ্ছিক। LLM সেই নকশা মেনে উত্তর দেয়।</div>
<div class="dialogue en">"The solution — Structured Output. You give the LLM a blueprint — a JSON Schema. Exactly as I give builders a blueprint. The schema specifies: which fields are needed, what type — string or number, which are required, which optional. The LLM follows the blueprint."</div>

<div class="code-block">সমাধান — JSON Schema:

তুমি দাও:
{
  "name": "string (required)",
  "city": "string (required)",
  "phone": "string (optional)"
}

LLM ফেরত দেয়:
{
  "name": "মোহাম্মদ আলী",
  "city": "ঢাকা",
  "phone": "01712345678"
}

→ মেশিন সরাসরি পড়তে পারে। ভুল নেই।</div>

<p>তুমি ভাবলে — সহজ তো! কিন্তু খালিদ হাসলেন। "সহজ? দেখো এই তিনটা সমস্যা।"</p>
<p class="en">You thought — easy! But Khalid smiled. "Easy? Look at these three problems."</p>

<div class="dialogue">প্রথম: LLM কখনো কাঠামো ভাঙে। JSON তৈরি করতে গিয়ে একটা কোমা ভুল জায়গায় বসায়। সব ভাঙা। দ্বিতীয়: ফিল্ড ভুল ধরনে দেয় — ফোন নম্বরে সংখ্যার জায়গায় টেক্সট। তৃতীয়: আবশ্যক ফিল্ড বাদ দেয়। এই তিন ভুল প্রতিদিন ঘটে।</div>
<div class="dialogue en">"First: the LLM sometimes breaks the structure. Making JSON, it puts a comma in the wrong place. Everything breaks. Second: it gives the wrong type — text where a number belongs for the phone. Third: it skips required fields. These three errors happen every day."</div>

<div class="code-block">তিন প্রতিরোধ — Three Defenses:

১. JSON Mode (নির্ধারিত কাঠামো)
   → API-তে response_format=json দাও
   → মডেল কেবল valid JSON দেয়, কোনো কথা নয়।

২. Pydantic / Schema Validation
   → একটা schema বানাও (কোন ফিল্ড, কোন ধরন)
   → LLM এর উত্তর schema-এর সাথে মেলাও
   → না মিললে: ত্রুটি ধরা পড়ে, প্রত্যাখ্যাত হয়।

৩. Retry with Feedback (পুনঃপ্রচেষ্টা)
   → ভাঙা উত্তর পেলে: ত্রুটিসহ আবার পাঠাও
   → "তোমার phone সংখ্যা হওয়া উচিত, টেক্সট নয়। আবার দাও।"
   → ২-৩ বার চেষ্টায় সাধারণত সঠিক হয়।</div>

<div class="dialogue">চিকিৎসক বলেছিলেন — সিদ্ধান্ত দিতে হয়, কাজ করতে নয়। Structured Output-ও সেই সেতু। LLM সিদ্ধান্ত নেয় কোন তথ্য গুরুত্বপূর্ণ — আর সেই তথ্য কাঠামোবদ্ধ করে মেশিনের হাতে দেয়। মানুষের জন্য টেক্সট, মেশিনের জন্য JSON — দুই দুনিয়ার সেতু।</div>
<div class="dialogue en">"The physician said — the LLM decides, it doesn't execute. Structured Output is that same bridge. The LLM decides which information matters — and delivers it structured for machines. Text for humans, JSON for machines — the bridge between two worlds."</div>

<div class="dialogue">কাবা — নির্ধারিত মাপে তৈরি। উচ্চতা, প্রস্থ, কোণা — সব নির্দিষ্ট। কেউ বলে না — আমি গোলাকার কাবা বানাব। কেউ বলে না — আমি ছাদ বাদ দেব। কাঠামোই পবিত্রতা। ইসলামি স্থাপত্যে girih — জ্যামিতিক নকশা — কাঠামোর মধ্যেই সৌন্দর্য। মুক্তি নয়, নিয়ম। নিয়মেই শান্তি। Structured Output-ও তেমনি — মুক্তি নয়, কাঠামো। কাঠামোতেই নির্ভরযোগ্যতা।</div>
<div class="dialogue en">"The Kaaba — built to precise dimensions. Height, width, corners — all fixed. No one says — I'll build a round Kaaba. No one says — I'll skip the roof. Structure IS sanctity. In Islamic architecture, girih — geometric patterns — beauty lives within structure. Not freedom, but rule. In rule, peace. Structured Output is the same — not freedom, but structure. In structure, reliability."</div>

<div class="callout warn" data-door="15"><span class="co-icon">⚠️</span><div><strong>বাস্তব বিপদ:</strong> একটা API LLM থেকে JSON expect করলো। কিন্তু LLM মাঝে markdown দিলো। Parser crash। Structured output ছাড়া — integration অসম্ভব।</div></div>

<div class="secret-box"><div class="label">দরজা ১৫ — রহস্য</div><div class="text">📐 LLM কথা বলে টেক্সটে, মেশিন চায় কাঠামো।<br><small>JSON schema = নকশা। যাচাই করো (Pydantic), ভাঙলে পুনঃপ্রচেষ্টা করো। মুক্ত টেক্সট নয় — নির্ধারিত কাঠামো।</small></div></div>`
});
