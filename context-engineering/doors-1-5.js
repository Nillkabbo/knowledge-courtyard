// ════════════════════════════════════════
// দৃষ্টির ক্যানভাস — DOORS 1-5
// Context Engineering: Window → Retrieval
// ════════════════════════════════════════
const doors = [];

// ══ DOOR 1: CONTEXT WINDOW ECONOMICS ══
doors.push({
  num:1, icon:"📜", color:"#2dd4bf", name:"ক্যানভাস ব্যবস্থাপকের টেবিল",
  subtitle:"The Canvas Manager's Table", tech:"Context Window Economics",
  spirit:"পরিমাণ — সীমিত স্থানের মিযান",
  secret:"Context window একটা ক্যানভাস — প্রতিটি টোকেন একটা রঙের দাগ। বড় ক্যানভাস = বেশি জায়গা, কিন্তু attention পাতলা হয়। ছোট ক্যানভাস = কম জায়গা, কিন্তু focus তীক্ষ্ণ। সঠিক পরিমাণ = সঠিক বোঝা।",
  recall:{
    q:"ক্যানভাস ব্যবস্থাপক কেন সব রং একসাথে ব্যবহার করেন না?",
    qen:"Why doesn't the canvas manager use all colors at once?",
    a:"কারণ অনেক রঙ একসাথে = বিশৃঙ্খলা। Context window-ও তেমনি — প্রতিটি টোকেন একটা রঙ। বেশি টোকেন = attention পাতলা। কম টোকেন = focus তীক্ষ্ণ। পরিমাণ গুরুত্বপূর্ণ।",
    aen:"Because too many colors at once = chaos. Context window too — each token is a color. More tokens = diluted attention. Fewer = sharp focus. Proportion matters."
  },
  story:`
<p class="scene-setting">প্রথম দৃষ্টি। একটা বড় টেবিল — উপরে নানা রঙের কালি, তুলি, পাতা। ক্যানভাস ব্যবস্থাপক রাইহান একটা ছোট ক্যানভাস ধরে আছেন। "বড় ক্যানভাস চাও?" তিনি জিজ্ঞেস করলেন। "হ্যাঁ!" তুমি বললে। তিনি একটা বিশাল ক্যানভাস খুললেন — দেয়াল সমান। "এখন একটা ছোট ছবি আঁকো।" তুমি আঁকলে। কিন্তু বড় ক্যানভাসে ছোট ছবি হারিয়ে গেল।</p>
<p class="scene-setting en">The first sight. A large table — various colored inks, brushes, paper. Canvas manager Raihan holds a small canvas. "Want a bigger canvas?" he asked. "Yes!" you said. He unrolled a massive canvas — wall-sized. "Now paint a small picture." You did. But on the huge canvas, the small picture got lost.</p>

<div class="dialogue">LLM Anatomy বইয়ে তুমি শিখেছ — attention কীভাবে কাজ করে। এখন আমি বলি — attention কোথায় কাজ করে? Context window-তে। এটাই তোমার ক্যানভাস। বড় হলে ভালো? সবসময় নয়। বড় ক্যানভাসে ছোট ছবি হারিয়ে যায়। বড় context-এ গুরুত্বপূর্ণ তথ্য হারিয়ে যায়।</div>
<div class="dialogue en">"In the LLM Anatomy book you learned how attention works. Now I say — where does attention work? In the context window. This is your canvas. Bigger is better? Not always. Small pictures get lost on big canvases. Important information gets lost in big contexts."</div>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>ভুলের গল্প — Context Window Wasted:</strong> Filled 100K context with irrelevant history — model ignored the question. Fix: curate aggressively.</div></div>


<div class="code-block"># ── STEP 1: What is a context window? ──
# The context window is the MAXIMUM text an LLM can process at once.

window_sizes = {
    "GPT-4o": {"tokens": 128_000, "words": "~96,000", "cost": "$2.50/M in, $10/M out"},
    "Claude 3.5 Sonnet": {"tokens": 200_000, "words": "~150,000", "cost": "$3/M in, $15/M out"},
    "Gemini 1.5 Pro": {"tokens": 1_000_000, "words": "~750,000", "cost": "$1.25/M in, $5/M out"},
    "Llama 3.1 405B": {"tokens": 128_000, "words": "~96,000", "cost": "self-hosted"},
}

print("CONTEXT WINDOW SIZES:")
for model, info in window_sizes.items():
    print(f"\n  {model}")
    for key, value in info.items():
        print(f"    {key}: {value}")

# WHAT FITS IN 128K TOKENS?
examples = """
128K tokens = approximately:
  → 300 pages of text
  → 1 full novel (like "Pride and Prejudice")
  → 500 typical web pages
  → 100 research papers (abstracts)
  → 10,000 lines of code
  → 2 hours of conversation transcript
"""
print(examples)

# WHAT DOESN'T FIT?
limitations = """
Still NOT enough for:
  → Entire codebase (millions of lines)
  → Entire book library
  → Every document in your company
  → All of Wikipedia (4B+ words)

That's why we need RAG (retrieve relevant parts, not everything).
"""
print(limitations)</div>

<div class="code-block"># ── STEP 2: Context window economics ──
# Every token costs money. Bigger context = more cost.

economics = """
TOKEN COSTS (2024-2025):

GPT-4o:
  Input:  $2.50 / million tokens
  Output: $10.00 / million tokens

Claude 3.5 Sonnet:
  Input:  $3.00 / million tokens
  Output: $15.00 / million tokens

Gemini 1.5 Pro:
  Input:  $1.25 / million tokens
  Output: $5.00 / million tokens

COST OF FULL CONTEXT WINDOW:
  128K tokens * $2.50/M input = $0.32 per call
  → 1,000 calls = $320
  → 100,000 calls = $32,000/month (!)

WHY CONTEXT MANAGEMENT MATTERS:
  → Fewer tokens = lower cost
  → Smaller context = faster response
  → Relevant context = better answers
  → Irrelevant context = wasted money + worse answers

COST OPTIMIZATION:
  → Don't send full documents (use RAG)
  → Compress conversation history
  → Cache system prompts (prompt caching)
  → Use smaller models for simple tasks
"""

print(economics)

# PYTHON: Counting tokens and estimating cost:
python_cost = """
import tiktoken

def count_tokens(text, model="gpt-4o"):
    encoder = tiktoken.encoding_for_model(model)
    return len(encoder.encode(text))

def estimate_cost(input_tokens, output_tokens, model="gpt-4o"):
    rates = {
        "gpt-4o": {"in": 2.50, "out": 10.00},
        "claude-3.5": {"in": 3.00, "out": 15.00},
        "gemini-1.5": {"in": 1.25, "out": 5.00},
    }
    r = rates.get(model, rates["gpt-4o"])
    cost = (input_tokens * r["in"] + output_tokens * r["out"]) / 1_000_000
    return cost

# Example: 50K token document + 500 token question:
text = "Your long document here..."
input_tokens = count_tokens(text) + 500  # doc + question
output_tokens = 1000  # expected response

cost = estimate_cost(input_tokens, output_tokens)
print(f"Tokens in: {input_tokens}, out: {output_tokens}")
print(f"Cost per call: " + str(round(cost, 4)))
print(f"Cost per 1000 calls: " + str(round(cost * 1000, 2)))
"""

print(python_cost)</div>

<div class="code-block"># ── STEP 3: Attention dilution and "lost in the middle" ──
# More context doesn't always mean better answers.

attention = """
THE ATTENTION DILUTION PROBLEM:

100 tokens → attention is SHARP
  → Every token gets full attention
  → High accuracy

10,000 tokens → attention is MODERATE
  → Some tokens get less attention
  → Slight degradation

100,000 tokens → attention is THIN
  → "Lost in the middle" effect
  → Middle tokens get overlooked
  → Information retrieval degrades

THE U-CURVE (Liu et al., 2023):

Position in context → accuracy:
  Beginning:  ████████████████  90% correct
  Middle:     ████░░░░░░░░░░██  50% correct
  End:        ████████████████  85% correct

→ LLMs remember the START and END well
→ They FORGET information in the MIDDLE

IMPLICATIONS:
  → Put critical info at START or END of context
  → Don't bury important facts in the middle
  → Shorter, focused context often outperforms long context
  → "Less is more" for LLM accuracy
"""

print(attention)

# WHERE TO PLACE INFORMATION:
placement = """
CONTEXT STRUCTURE (optimal):

1. SYSTEM PROMPT (start) — most attention
   → Rules, instructions, role definition
   → "You are a coding assistant. Answer only from context."

2. RETRIEVED DOCUMENTS (middle) — least attention
   → Supporting evidence, background
   → OK if partially ignored

3. CRITICAL INSTRUCTIONS (near end) — high attention
   → "Answer based ONLY on the documents above"
   → Re-emphasize the most important rule

4. USER QUESTION (very end) — most attention
   → The actual question to answer

STRUCTURE:
  [System: You are a RAG assistant]
  [Context: Retrieved documents...]
  [Instructions: Answer ONLY from context above]
  [Question: What is X?]
"""

print(placement)</div>

<div class="code-block"># ── STEP 4: Context budget allocation ──
# Allocate your context window strategically.

budget = """
CONTEXT BUDGET FORMULA:
  Total Window = System Prompt
               + Few-Shot Examples
               + Retrieved Documents
               + Conversation History
               + User Query
               + Output Space (reserved for response)

EXAMPLE (128K window):
  System Prompt:      500 tokens
  Few-Shot Examples:  2,000 tokens
  Retrieved Docs:    50,000 tokens
  Conversation:      10,000 tokens
  User Query:          100 tokens
  Output Space:    163,400 tokens (wait, that's too much)

CORRECTED (reserve output space):
  Output Space:     65,400 tokens
  ─────────────────────────────
  Total:           128,000 tokens

BUDGET RULES:
  → System Prompt: <1K tokens (keep concise)
  → Few-Shot: 0-3K tokens (only if needed)
  → Retrieved Docs: 10-50K tokens (the main payload)
  → Conversation: 5-20K (compress old messages)
  → User Query: <1K (just the question)
  → Output Space: 20-50K (reserve for response)

NEVER fill the entire window with input.
ALWAYS reserve 20-30% for output.
"""

print(budget)

# PYTHON: Context budget calculator:
budget_code = """
class ContextBudget:
    def __init__(self, model="gpt-4o"):
        self.limits = {"gpt-4o": 128_000, "claude-3.5": 200_000, "gemini": 1_000_000}
        self.max = self.limits.get(model, 128_000)

    def allocate(self, system, fewshot, docs, conversation, query, output_ratio=0.3):
        used = system + fewshot + docs + conversation + query
        output_space = int(self.max * output_ratio)
        available = self.max - output_space

        if used > available:
            # Need to compress:
            overflow = used - available
            print(f"⚠️  Over budget by {overflow} tokens!")
            print(f"  Compress docs or conversation by {overflow} tokens")
            return False

        print(f"✅ Budget OK:")
        print(f"  Used: {used}/{available} input tokens ({used/available*100:.1f}%)")
        print(f"  Output: {output_space} tokens reserved")
        print(f"  Free: {available - used} tokens")
        return True

# Usage:
budget = ContextBudget("gpt-4o")
budget.allocate(
    system=500,
    fewshot=2000,
    docs=50000,
    conversation=10000,
    query=100,
)
"""

print(budget_code)</div>

<div class="code-block"># ── STEP 5: Prompt caching (cost optimization) ──
# Cache repeated parts of context to save money and time.

prompt_caching = """
PROMPT CACHING (Anthropic, OpenAI, Google):

If you send the SAME system prompt + context every time:
  → API caches it (stores the processed tokens)
  → Subsequent calls with same prefix are CHEAPER
  → 50-90% cost reduction for repeated context

HOW IT WORKS:
  Call 1: [System prompt 10K tokens] + [Question]
    → Processes all 10K tokens
    → Caches the result
    → Cost: full price ($0.03)

  Call 2: [Same system prompt 10K] + [Different question]
    → Uses cached processing
    → Only processes the new question
    → Cost: 10% of full price ($0.003)

USE CASES:
  → RAG: same system prompt, different questions
  → Chatbots: same persona, different conversations
  → Code analysis: same codebase, different queries
  → Document Q&A: same document, multiple questions

CLAUDE PROMPT CACHING:
  response = client.messages.create(
      model="claude-3-5-sonnet-20241022",
      system=[
          {
              "type": "text",
              "text": "You are a RAG assistant. " + large_context,
              "cache_control": {"type": "ephemeral"}  # ← CACHE THIS
          }
      ],
      messages=[{"role": "user", "content": question}]
  )

  # First call: full price
  # Subsequent calls (within 5 min): 10% price for cached part
"""

print(prompt_caching)

# WHEN TO USE PROMPT CACHING:
use_caching = {
    "Same system prompt repeatedly": "Save 50-90% on system prompt cost",
    "Large static context (codebase, manual)": "Cache the reference, vary the question",
    "Multi-turn conversations": "Cache conversation prefix, add new message",
    "Batch processing same document": "Cache doc, ask many questions",
}

print("WHEN TO USE PROMPT CACHING:")
for case, benefit in use_caching.items():
    print(f"  {case}: {benefit}")</div>

<div class="code-block"># ── STEP 6: Context window best practices ──
# Maximize accuracy while minimizing cost.

best_practices = [
    "Don't send entire documents — use RAG to retrieve relevant parts",
    "Put critical instructions at START (system prompt) and END (before question)",
    "Reserve 20-30% of context window for output",
    "Use prompt caching for repeated system prompts (50-90% savings)",
    "Compress conversation history (summarize old messages)",
    "Fewer high-quality examples beat many mediocre ones",
    "Monitor token usage and costs per request",
    "Use smaller models (GPT-4o-mini) for simple tasks within context",
    "Remove irrelevant retrieved docs (re-rank and filter)",
    "Structure context: System → Context → Instructions → Question",
    "Test different context sizes (more context ≠ better accuracy)",
    "Use the U-curve to your advantage (important info at edges)",
    "Set max_tokens to prevent output overflow",
    "Log token counts to identify cost-heavy requests",
    "Consider model switching: small model for short context, large for long",
]

print("CONTEXT WINDOW BEST PRACTICES:")
for practice in best_practices:
    print(f"  ☐ {practice}")

# CONTEXT WINDOW DECISION GUIDE:
decision = """
DECISION: "Should I use long context or RAG?"

Long context (just dump everything):
  ✅ Simpler (no retrieval pipeline)
  ✅ Good for <100K tokens
  ✅ No "missed retrieval" problem
  ❌ Expensive (pay for every token)
  ❌ Attention dilution on large context
  ❌ Rate limits (128K tokens per call)

RAG (retrieve relevant parts):
  ✅ Cheaper (only send relevant tokens)
  ✅ Scales to millions of documents
  ✅ Better accuracy (focused context)
  ❌ More complex (embedding, retrieval, re-ranking)
  ❌ Can miss relevant documents

RULE OF THUMB:
  < 50K tokens → Long context (simpler)
  50K-500K → Depends (test both)
  > 500K → RAG (long context too expensive/diluted)
"""

print(decision)

# SUMMARY:
# ┌──────────────────┬──────────────────────────────────┐
# │ Concept          │ Key Point                       │
# ├──────────────────┼──────────────────────────────────┤
# │ Context window   │ Max tokens LLM can process      │
# │ Token cost       │ $1-15 per million tokens        │
# │ Attention dilute │ More context = less focus       │
# │ U-curve          │ Start+End > Middle              │
# │ Budget           │ Reserve 30% for output          │
# │ Prompt caching   │ Save 50-90% on repeated context │
# │ Placement        │ Critical info at edges          │
# │ Long vs RAG      │ <50K long, >500K RAG           │
# └──────────────────┴──────────────────────────────────┘</div>

<div class="svg-diagram">
<svg viewBox="0 0 580 250" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto">
  <rect x="0" y="0" width="580" height="250" fill="#0a1f1a" rx="10"/>
  <text x="290" y="28" text-anchor="middle" fill="#e8e6f0" font-size="13" font-weight="bold">📜 ১২৮K উইন্ডোর বাজেট বণ্টন</text>
  <rect x="40" y="120" width="10" height="44" fill="#1e3a5f" stroke="#5b9eff" stroke-width="1"/>
  <rect x="50" y="120" width="195" height="44" fill="#0d3b34" stroke="#2dd4bf" stroke-width="1"/>
  <rect x="245" y="120" width="40" height="44" fill="#2a1a3e" stroke="#b37feb" stroke-width="1"/>
  <rect x="285" y="120" width="255" height="44" fill="#3b2a05" stroke="#fbbf24" stroke-width="1"/>
  <text x="45" y="180" text-anchor="middle" fill="#5b9eff" font-size="10">সিস্টেম</text>
  <text x="147" y="180" text-anchor="middle" fill="#5eead4" font-size="9">RAG ডক্স ৩৯%</text>
  <text x="265" y="180" text-anchor="middle" fill="#c084fc" font-size="8">কথা ৮%</text>
  <text x="412" y="180" text-anchor="middle" fill="#fcd34d" font-size="9">আউটপুট ৫১%</text>
  <text x="290" y="210" text-anchor="middle" fill="#9290a8" font-size="8">⬓ প্রতিটা অংশের বাজেট সচেতনভাবে নির্ধারণ করো — পরিমাণই বোঝার মিজান</text>
</svg>
</div>
<div class="svg-caption">চিত্র: কন্টেক্সট উইন্ডো একটা ক্যানভাস — বড় হলে attention পাতলা, সঠিক বণ্টনেই ফোকাস</div>

<div class="dialogue">পরিমাণ — measure, proportion. কুরআনে আল্লাহ বলেন — "সবকিছু আমরা একটা নির্ধারিত পরিমাণে সৃষ্টি করেছি।" (৫৪:৪৯)। Context window সেই নির্ধারিত পরিমাণ। অসীম নয়। প্রতিটি টোকেন একটি সম্পদ। যে পরিমাণ বোঝে, সে সঠিকভাবে বণ্টন করে। যে বুঝে না, সে সব ঢেলে দেয় — আর গুরুত্বপূর্ণ তথ্য হারিয়ে যায়।</div>
<div class="dialogue en">"Qadar — measure, proportion. Allah says — 'We created all things in a determined measure.' (54:49). The context window is that determined measure. Not infinite. Each token is a resource. One who understands proportion, distributes correctly. One who doesn't, dumps everything — and important information gets lost."</div>`,
  senior:{
    title:"Context Budget — প্রতিটা কলে হিসাব করো",
    body:`<p><strong>প্রোডাকশনে:</strong> প্রতিটা API কলে context budget ট্র্যাক করো।</p><p><strong>System prompt:</strong> ৫০০-১০০০ tokens। স্থির।</p><p><strong>RAG docs:</strong> ৫০-৭০% window। পরিবর্তনশীল।</p><p><strong>Conversation:</strong> ১০-২০%। পুরোনো কথা সারাংশ করো।</p><p><strong>Output:</strong> অন্তত ২০-৩০% রাখো। বেশি output = বেশি খরচ।</p><p><strong>Naming convention:</strong> প্রতিটা টুকরোর টোকেন সংখ্যা লগ করো।</p>`
  }
});

// ══ DOOR 2: LOST IN THE MIDDLE ══
doors.push({
  num:2, icon:"🧩", color:"#5b9eff", name:"মাঝখানের কক্ষ",
  subtitle:"The Middle Chamber", tech:"Lost in the Middle Phenomenon",
  spirit:"মাঝপথের বিভ্রম — অবহেলার ঝুঁকি",
  secret:"LLM শুরু আর শেষ মনে রাখে, মাঝখানে হারিয়ে ফেলে। এটা architecture-এর সীমাবদ্ধতা। গুরুত্বপূর্ণ তথ্য শুরুতে বা শেষে রাখো। মাঝখানে কম গুরুত্বপূর্ণ তথ্য। এটাই positioning strategy।",
  recall:{
    q:"ক্যানভাসে মাঝখানের ছবি কেন মনে রাখা কঠিন?",
    qen:"Why is the middle of the canvas hardest to remember?",
    a:"কারণ চোখ শুরু আর শেষে যায় — মাঝখানে এড়িয়ে যায়। LLM-এর attention-ও তেমনি — primacy (শুরু) আর recency (শেষ) effect। মাঝখানের তথ্য ৫০% পর্যন্ত হারিয়ে যেতে পারে। গুরুত্বপূর্ণ তথ্য প্রান্তে রাখো।",
    aen:"Because eyes go to start and end — skip the middle. LLM attention too — primacy and recency effects. Middle information can lose up to 50%. Put important info at edges."
  },
  story:`
<p class="scene-setting">দ্বিতীয় দৃষ্টি। একটা অদ্ভুত কক্ষ — দেয়ালে ছবি সাজানো, কিন্তু ক্রম অদ্ভুত। প্রথম ছবি উজ্জ্বল, শেষের ছবিও উজ্জ্বল, কিন্তু মাঝখানের ছবিগুলো ফ্যাকাশে। কক্ষরক্ষক নাফিসা বললেন — "মানুষ যেমন শুরু আর শেষ মনে রাখে, মাঝখানে ভুলে যায় — LLM-ও তেমনি। এটাই lost in the middle।"</p>
<p class="scene-setting en">The second sight. A strange room — pictures on walls, but arranged oddly. First picture bright, last bright, but middle ones faded. Keeper Nafisa said — "As people remember beginnings and endings, forget middles — the LLM too. This is lost in the middle."</p>

<div class="dialogue">ক্যানভাস ব্যবস্থাপক বলেছিলেন — পরিমাণ গুরুত্বপূর্ণ। কিন্তু আমি বলি — পরিমাণের চেয়েও গুরুত্বপূর্ণ হলো অবস্থান। কোথায় বসাও। কারণ LLM শুরু আর শেষ দেখে, মাঝখানে হারায়। এটা শুধু তত্ত্ব নয় — গবেষণায় প্রমাণিত।</div>
<div class="dialogue en">"The canvas manager said — proportion matters. But I say — more important than proportion is position. Where you place. Because the LLM sees beginning and end, loses middle. This isn't just theory — proven in research."</div>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>ভুলের গল্প — Lost in the Middle:</strong> Key info in middle of 50K tokens — model missed it. Fix: critical info at START and END.</div></div>


<div class="code-block"># ── STEP 1: The "Lost in the Middle" problem ──
# LLMs remember the start and end of context, but forget the middle.

research = """
RESEARCH: Liu et al. (2023) "Lost in the Middle"

EXPERIMENT:
  → Multi-document QA task
  → Same fact placed at different positions in context
  → Accuracy measured at each position

RESULT (U-shaped curve):

Position        Accuracy
──────────      ────────
1st (start)     72%
2nd             68%
3rd             62%
...             ...
Middle          48% ← WORST!
...             ...
3rd from end    65%
Last            73%

→ 25% accuracy drop from start to middle!
→ Position matters as much as content.
"""

print(research)

# PYTHON: Demonstrating position effect:
position_effect = """
# Test: place the answer at different positions in context
import openai

def test_position(question, answer, filler_docs):
    \"\"\"Test if LLM finds answer based on its position.\"\"\"
    results = {}

    for position in ['start', 'middle', 'end']:
        if position == 'start':
            context = [answer] + filler_docs
        elif position == 'middle':
            mid = len(filler_docs) // 2
            context = filler_docs[:mid] + [answer] + filler_docs[mid:]
        else:
            context = filler_docs + [answer]

        response = client.chat.completions.create(
            model="gpt-4o",
            messages=[
                {"role": "system", "content": "Answer from context."},
                {"role": "user", "content": "\\n".join(context) + "\\n\\nQ: " + question}
            ]
        )
        correct = check_answer(response.choices[0].message.content)
        results[position] = correct

    return results
# Expected: start ~72%, middle ~48%, end ~73%
"""

print(position_effect)</div>

<div class="code-block"># ── STEP 2: Why does "lost in the middle" happen? ──
# Three psychological/attention phenomena explain the U-curve.

reasons = {
    "1. PRIMACY EFFECT (start is strong)": {
        "what": "First tokens influence the ENTIRE sequence",
        "why": "Attention spreads from first tokens to everything after",
        "impact": "Early context shapes the model's 'understanding' of the whole prompt",
        "use": "Put system prompt and rules at the START",
    },
    "2. RECENCY EFFECT (end is strong)": {
        "what": "Last tokens have the most direct influence on output",
        "why": "Output is generated right after the last token",
        "impact": "The last few sentences before the question are most remembered",
        "use": "Put the most important docs and the question at the END",
    },
    "3. ATTENTION DILUTION (middle is weak)": {
        "what": "Middle tokens compete with many neighbors for attention",
        "why": "Each token attends to ALL others (O(n^2) attention)",
        "impact": "With 100K tokens, middle tokens get a tiny fraction of attention",
        "use": "Don't put critical info in the middle of long context",
    },
}

print("WHY 'LOST IN THE MIDDLE' HAPPENS:")
for reason, info in reasons.items():
    print(f"\n  {reason}")
    for key, value in info.items():
        print(f"    {key}: {value}")

# VISUALIZING THE ATTENTION PATTERN:
attention_viz = """
ATTENTION PATTERN across context positions:

Position:     Start ←—————→ Middle ←—————→ End
Attention:    █████████        ██░░░░        █████████
              (high)           (low)         (high)

At 1K tokens:  ████████████████████████████████████  (uniform)
At 10K tokens: ████████░░░░░░░░░░░░░░░░████████     (slight dip)
At 100K tokens:███████░░░░░░░░░░░░░░░░░░░░████████  (deep dip)

More tokens = more dilution in the middle.
This is why short, focused context often beats long context.
"""
print(attention_viz)</div>

<div class="code-block"># ── STEP 3: Positioning strategy for optimal context ──
# Structure your context to exploit the U-curve.

strategy = """
OPTIMAL CONTEXT STRUCTURE:

┌─────────────────────────────────────────────┐
│ TOP (primacy zone — 72% accuracy)          │
│ → System prompt (role, rules)              │
│ → Most important instructions              │
│ → Critical constraints                     │
├─────────────────────────────────────────────┤
│ MIDDLE (danger zone — 48% accuracy)        │
│ → Less critical background context         │
│ → Supporting docs (lower priority)         │
│ → Nice-to-have info                        │
├─────────────────────────────────────────────┤
│ BOTTOM (recency zone — 73% accuracy)       │
│ → MOST important retrieved documents       │
│ → User's actual question                   │
│ → Final instruction/reminder               │
└─────────────────────────────────────────────┘

RANK YOUR RETRIEVED DOCS:
  After re-ranking, put the TOP docs at the BOTTOM of context.
  Put lower-ranked docs in the MIDDLE (it's OK if they're partially missed).
"""

print(strategy)

# PRACTICAL EXAMPLE:
example = """
BAD ORDERING (important docs in middle — LOST):
  [System: "Answer from the documents below"]
  [RAG doc 1: CRITICAL answer]  ← middle, will be lost!
  [RAG doc 2: less important]
  [RAG doc 3: CRITICAL answer]  ← middle, will be lost!
  [User: "What is X?"]

GOOD ORDERING (important docs at end — REMEMBERED):
  [System: "Answer from the documents below"]
  [RAG doc 2: less important]   ← middle, OK to partially miss
  [RAG doc 1: CRITICAL answer]  ← end, will be remembered!
  [RAG doc 3: CRITICAL answer]  ← end, will be remembered!
  [User: "What is X?"]
  [Final: "Base your answer ONLY on the above documents"]

KEY INSIGHT: The ORDER of your retrieved documents matters.
Don't just append them randomly — sort by importance.
Most important LAST.
"""
print(example)</div>

<div class="code-block"># ── STEP 4: Reordering retrieved documents ──
# Implement the positioning strategy in your RAG pipeline.

python_reorder = """
# PYTHON: Reorder retrieved documents for optimal positioning

def reorder_documents(retrieved_docs, user_query):
    \"\"\"Reorder docs: least important in middle, most important at end.\"\"\"

    # Assume docs are already scored by similarity (highest first)
    # Strategy: interleave so the best docs are at the END

    n = len(retrieved_docs)

    # Split into two halves:
    top_half = retrieved_docs[:n//2]      # Higher relevance
    bottom_half = retrieved_docs[n//2:]   # Lower relevance

    # Reverse top half so best doc is LAST:
    top_half_reversed = list(reversed(top_half))

    # Order: [lower relevance (middle)] + [higher relevance reversed (end)]
    reordered = bottom_half + top_half_reversed

    return reordered

# Example:
docs = [
    {"content": "Doc 1 (sim=0.95)", "score": 0.95},
    {"content": "Doc 2 (sim=0.92)", "score": 0.92},
    {"content": "Doc 3 (sim=0.89)", "score": 0.89},
    {"content": "Doc 4 (sim=0.86)", "score": 0.86},
    {"content": "Doc 5 (sim=0.83)", "score": 0.83},
    {"content": "Doc 6 (sim=0.80)", "score": 0.80},
]

reordered = reorder_documents(docs, "What is X?")

# Result order: [4, 5, 6, 3, 2, 1]
# Least important in middle, most important (Doc 1) at the very END
# This puts the highest-relevance doc in the recency zone

print("Reordered for optimal U-curve placement:")
for i, doc in enumerate(reordered):
    zone = "MIDDLE" if i < len(reordered)//2 else "END"
    print(f"  Position {i+1} ({zone}): {doc['content']}")
"""

print(python_reorder)</div>

<div class="code-block"># ── STEP 5: Mitigating lost-in-the-middle ──
# Techniques to reduce the accuracy drop in long context.

mitigations = {
    "1. Keep context SHORT": {
        "how": "Retrieve fewer, more relevant docs (top-3 instead of top-10)",
        "impact": "Less dilution, higher accuracy per document",
    },
    "2. Reorder documents": {
        "how": "Put best docs at START and END, worst in MIDDLE",
        "impact": "Exploits primacy + recency effects",
    },
    "3. Repeat critical info": {
        "how": "Mention key facts at both start AND end of context",
        "impact": "Ensures the fact is in a high-attention zone",
    },
    "4. Use re-ranking": {
        "how": "Cross-encoder re-ranks by actual relevance",
        "impact": "Only the truly most relevant docs are kept",
    },
    "5. Chunk strategically": {
        "how": "Smaller chunks = each one more likely to be fully attended to",
        "impact": "Reduces the 'middle' for each individual chunk",
    },
    "6. Use multiple passes": {
        "how": "Ask the LLM to extract key facts first, then answer",
        "impact": "First pass focuses attention, second pass uses extraction",
    },
    "7. Structured context (XML tags)": {
        "how": "Wrap docs in <doc1>, <doc2> tags for clear boundaries",
        "impact": "Helps model distinguish and locate information",
    },
}

print("MITIGATING LOST-IN-THE-MIDDLE:")
for mitigation, info in mitigations.items():
    print(f"\n  {mitigation}")
    for key, value in info.items():
        print(f"    {key}: {value}")

# XML-STRUCTURED CONTEXT:
xml_context = """
STRUCTURED CONTEXT WITH XML TAGS:

<system>
You are a RAG assistant. Answer from the documents below.
If the answer is not in the documents, say "I don't know."
</system>

<documents>
<doc id="1" relevance="high">
The refund policy allows returns within 30 days.
</doc>
<doc id="2" relevance="medium">
Shipping takes 5-7 business days.
</doc>
<doc id="3" relevance="high">
Digital products are non-refundable after download.
</doc>
</documents>

<instructions>
Answer the question using ONLY the documents above.
Cite the document ID in your answer.
</instructions>

<question>
What is the refund policy?
</question>

XML tags help the model:
  → Clearly identify document boundaries
  → Know which section is which
  → Extract information more reliably
  → Reduces "blending" of different documents
"""
print(xml_context)</div>

<div class="code-block"># ── STEP 6: Measuring and testing position effects ──
# Test your own system for lost-in-the-middle.

testing_code = """
# PYTHON: Test position sensitivity in your RAG system

import openai

client = openai.OpenAI()

def measure_position_effect(documents, question, answer):
    \"\"\"Measure how position affects answer retrieval.\"\"\"
    results = {}

    for position_name, position in [
        ("start", 0),
        ("middle", len(documents) // 2),
        ("end", len(documents) - 1)
    ]:
        # Place the answer doc at the specified position:
        docs = documents.copy()
        answer_doc = docs.pop(0)  # remove from start
        docs.insert(position, answer_doc)  # insert at target position

        context = "\\n\\n".join([d["content"] for d in docs])

        response = client.chat.completions.create(
            model="gpt-4o",
            messages=[
                {"role": "system", "content": "Answer from context only."},
                {"role": "user", "content": context + "\\n\\nQ: " + question}
            ],
            temperature=0
        )

        is_correct = answer.lower() in response.choices[0].message.content.lower()
        results[position_name] = is_correct

    return results

# Run the test:
results = measure_position_effect(
    documents=load_test_docs(),  # 20 docs, answer in doc[0]
    question="What is the company's refund policy?",
    answer="30 days"
)

print("POSITION EFFECT RESULTS:")
for position, correct in results.items():
    status = "✅ FOUND" if correct else "❌ LOST"
    print(f"  {position:8}: {status}")

# If middle = False but start/end = True:
# → Your system has "lost in the middle" problem
# → Implement reordering strategy
"""

print(testing_code)

# KEY TAKEAWAYS:
takeaways = """
KEY TAKEAWAYS:

1. The U-curve is REAL — position affects accuracy by 25%+
2. Start (primacy) and end (recency) get the most attention
3. Middle context is the "danger zone" — info gets lost
4. REORDER your retrieved docs: best at end, worst in middle
5. Keep context SHORT and FOCUSED (less dilution)
6. Use XML tags to structure context (helps model parse)
7. Test your system for position sensitivity
8. "Less is more" — fewer high-quality docs beat many mediocre ones
"""

print(takeaways)

# SUMMARY TABLE:
# ┌──────────────────┬──────────────────────────────────┐
# │ Zone             │ Best Content                     │
# ├──────────────────┼──────────────────────────────────┤
# │ Start (primacy)  │ System prompt, rules, role      │
# │ Middle (danger)  │ Less critical, background docs  │
# │ End (recency)    │ Most relevant docs + question   │
# │ Mitigation       │ Reorder, short context, XML     │
# └──────────────────┴──────────────────────────────────┘</div>

<div class="svg-diagram">
<svg viewBox="0 0 580 250" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto">
  <rect x="0" y="0" width="580" height="250" fill="#0a1f1a" rx="10"/>
  <text x="290" y="28" text-anchor="middle" fill="#e8e6f0" font-size="13" font-weight="bold">🧩 Lost in the Middle — U-Curve</text>
  <line x1="50" y1="200" x2="540" y2="200" stroke="#2a3550" stroke-width="1.5"/>
  <line x1="50" y1="60" x2="50" y2="200" stroke="#2a3550" stroke-width="1.5"/>
  <path d="M 70 95 Q 180 165 290 175 Q 400 165 510 100" fill="none" stroke="#5b9eff" stroke-width="2.5"/>
  <circle cx="75" cy="96" r="5" fill="#52c41a"/>
  <text x="75" y="82" text-anchor="middle" fill="#4ade80" font-size="9" font-weight="bold">৭২%</text>
  <text x="75" y="220" text-anchor="middle" fill="#9290a8" font-size="8">শুরু</text>
  <circle cx="290" cy="175" r="5" fill="#ff6b35"/>
  <text x="290" y="195" text-anchor="middle" fill="#ff8a5b" font-size="9" font-weight="bold">৪৮%</text>
  <text x="290" y="220" text-anchor="middle" fill="#9290a8" font-size="8">মাঝখানে ← খারাপ!</text>
  <circle cx="505" cy="100" r="5" fill="#52c41a"/>
  <text x="505" y="86" text-anchor="middle" fill="#4ade80" font-size="9" font-weight="bold">৭৩%</text>
  <text x="505" y="220" text-anchor="middle" fill="#9290a8" font-size="8">শেষ</text>
  <text x="290" y="240" text-anchor="middle" fill="#5e5c74" font-size="8">⬓ primacy + recency effect — গুরুত্বপূর্ণ তথ্য প্রান্তে রাখো</text>
</svg>
</div>
<div class="svg-caption">চিত্র: U-curve — LLM শুরু ও শেষ মনে রাখে, মাঝখানে হারিয়ে ফেলে</div>

<div class="compare">
<div class="cmp-card cmp-bad"><div class="cmp-label">❌ সব এক জায়গায়</div>১০টা ডকুমেন্ট র্যান্ডম ক্রমে ঢেলে দাও। গুরুত্বপূর্ণ ডকুমেন্ট মাঝখানে পড়েছে? ৫০% সম্ভবতা হারাবে। মডেল ভুল উত্তর দেবে কিন্তু আত্মবিশ্বাসে।</div>
<div class="cmp-card cmp-good"><div class="cmp-label">✅ সচেতন বিন্যাস</div>সব গুরুত্বপূর্ণ ডকুমেন্ট শেষে দাও। কম গুরুত্বপূর্ণ মাঝে। শুরুতে system instruction। মডেল সঠিক উত্তর দেবে। Position একটা engineering decision।</div>
</div>

<div class="dialogue">মাঝপথের বিভ্রম। কুরআনে আল্লাহ বলেন — "মাঝখানের অবস্থা সবচেয়ে কঠিন।" জীবনে মাঝবয়স কঠিন, পড়ার মাঝখানে মনোযোগ কম। LLM-ও তেমনি — মাঝখানে হারায়। কিন্তু যে জানে এই দুর্বলতা, সে কাজে লাগায় — গুরুত্বপূর্ণ তথ্য প্রান্তে রাখে। দুর্বলতা জানাই প্রথম শক্তি।</div>
<div class="dialogue en">"The middle illusion. Life's middle is hard, attention dips mid-reading. The LLM too — loses the middle. But one who knows this weakness, exploits it — puts important info at edges. Knowing the weakness is the first strength."</div>`,
  senior:{
    title:"Position Audit — তোমার প্রম্পট পরীক্ষা",
    body:`<p><strong>পরীক্ষা:</strong> একই ডকুমেন্ট তিন অবস্থানে রাখো (শুরু, মাঝ, শেষ)। উত্তরের নির্ভুলতা তুলনা করো। মাঝখানে সবচেয়ে কম।</p><p><strong>নিয়ম:</strong> RAG-এ retrieved docs relevance অনুযায়ী সাজাও — most relevant শেষে।</p><p><strong>নিয়ম:</strong> System prompt-এ গুরুত্বপূর্ণ নিয়ম দুইবার দাও — শুরুতে এবং শেষে।</p>`
  }
});

// ══ DOOR 3: CHUNKING ══
doors.push({
  num:3, icon:"✂️", color:"#ffc857", name:"কাঁটার কক্ষ",
  subtitle:"The Cutter's Chamber", tech:"Chunking Strategies",
  spirit:"বিভাজন — সঠিক টুকরোয় ভাঙা",
  secret:"ডকুমেন্ট না ভাঙলে RAG কাজ করে না। কিন্তু ভুল ভাঙলে আরও খারাপ। খুব ছোট = context হারায়। খুব বড় = noise বাড়ে। সঠিক chunk size, overlap, এবং boundary = সঠিক retrieval।",
  recall:{
    q:"কাঁটার কেন প্রতিটা টুকরো নির্দিষ্ট আকারে কাটেন?",
    qen:"Why does the cutter cut each piece to a specific size?",
    a:"কারণ খুব ছোট টুকরো = অর্থহীন। খুব বড় = পরিচালনা কঠিন। সঠিক আকার = সঠিক ব্যবহার। Chunking-ও তেমনি — ৫১২-১০২৪ টোকেন, ২০% overlap। সঠিক টুকরোয় ভাঙলে retrieval সঠিক হয়।",
    aen:"Because too small = meaningless. Too big = hard to handle. Right size = right use. Chunking too — 512-1024 tokens, 20% overlap. Right pieces make retrieval accurate."
  },
  story:`
<p class="scene-setting">তৃতীয় দৃষ্টি। কাঁটারের কক্ষ। বড় কাগজের রোল, কাঁটি, মাপকাঠি। কাঁটার ফারহান একটা বড় পাণ্ডুলিপি ধরে আছেন। "এটা একসাথে দেওয়া যাবে না," তিনি বললেন। "ভাঙতে হবে। কিন্তু কোথায় কাটব? যেখানে অর্থ শেষ, সেখানে। মাঝখানে নয়।"</p>
<p class="scene-setting en">The third sight. The cutter's room. Large paper rolls, scissors, measuring sticks. Cutter Farhan holds a massive manuscript. "Can't give this whole," he said. "Must cut. But where? Where meaning ends, not mid-sentence."</p>

<div class="dialogue">মাঝখানের কক্ষ বলেছিলেন — অবস্থান গুরুত্বপূর্ণ। কিন্তু আমি বলি — অবস্থানের আগে আসে বিভাজন। কীভাবে ভাঙবে? একটা ৫০০-পৃষ্ঠার ডকুমেন্ট সরাসরি LLM-কে দিলে — হারিয়ে যাবে। ভাঙতে হবে। কিন্তু সঠিকভাবে।</div>
<div class="dialogue en">"The middle chamber said — position matters. But I say — before position comes division. How to break? Give a 500-page doc to the LLM — it'll get lost. Must break it. But correctly."</div>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>ভুলের গল্প — Stale Context:</strong> Context had data from 3 days ago — model answered with outdated info. Fix: timestamp all context.</div></div>


<div class="code-block"># ── STEP 1: Why chunking matters ──
# Chunking = splitting documents into smaller pieces for better retrieval.

why_chunk = """
WHY CHUNK?

Problem: You have a 100-page document. A user asks a specific question.
  → Can't put 100 pages in context (too expensive, attention dilution)
  → Need to find the RELEVANT section only

Solution: Split into smaller chunks, embed each, retrieve the best.

  Document → Chunks → Embed each → Store in vector DB
  Query → Embed → Find best matching chunks → Send to LLM

GOOD CHUNKING = better retrieval = better RAG accuracy
BAD CHUNKING = lost context = wrong answers

The chunk is the atomic unit of RAG.
Get chunking right, and everything else improves.
"""

print(why_chunk)

# CHUNK SIZE TRADE-OFF:
size_tradeoff = """
CHUNK SIZE TRADE-OFF:

Too small (100-200 tokens):
  ❌ Context lost (a sentence fragment)
  ❌ Meaning incomplete
  ✅ Very precise for specific questions

Medium (512-1024 tokens):
  ✅ Best balance (context + precision)
  ✅ A paragraph or two
  ✅ Used by most RAG systems (default)

Large (2048-4096 tokens):
  ✅ Complex reasoning, multi-paragraph context
  ❌ More noise, lower relevance per chunk

Too large (8192+):
  ❌ A whole chapter — too much noise
  ❌ Retrieval precision drops significantly

SWEET SPOT: 512 tokens with 10-20% overlap (most use cases)
"""

print(size_tradeoff)</div>

<div class="code-block"># ── STEP 2: Chunking methods ──
# Different strategies for splitting documents.

methods = {
    "1. FIXED-SIZE CHUNKING (simplest)": {
        "how": "Cut every N tokens",
        "pros": "Simple, fast, deterministic",
        "cons": "May cut mid-sentence/mid-paragraph",
        "best_for": "General use, quick prototyping",
    },
    "2. SENTENCE-BOUNDARY CHUNKING": {
        "how": "Cut at sentence endings (. ! ?)",
        "pros": "Preserves meaning",
        "cons": "Uneven chunk sizes (sentences vary)",
        "best_for": "Legal, medical documents",
    },
    "3. PARAGRAPH-BOUNDARY CHUNKING": {
        "how": "Cut at paragraph breaks",
        "pros": "Complete ideas in each chunk",
        "cons": "Paragraphs can be very large",
        "best_for": "Technical docs, papers, articles",
    },
    "4. SEMANTIC CHUNKING (advanced)": {
        "how": "Cut when meaning changes (embedding similarity drops)",
        "pros": "Most accurate boundaries",
        "cons": "Slow, complex, requires embeddings",
        "best_for": "Research, precision-critical",
    },
    "5. DOCUMENT STRUCTURE CHUNKING": {
        "how": "Cut at markdown headers (H1/H2/H3), HTML tags",
        "pros": "Natural document boundaries",
        "cons": "Requires structured documents",
        "best_for": "Documentation, wikis, technical specs",
    },
}

print("CHUNKING METHODS:")
for method, info in methods.items():
    print(f"\n  {method}")
    for key, value in info.items():
        print(f"    {key}: {value}")

# OVERLAP (why and how):
overlap = """
OVERLAP — preventing information loss at boundaries:

PROBLEM: A fact might span two chunks:
  Chunk 1: "...the revenue was"
  Chunk 2: "$1.5 million in Q3..."
  → Neither chunk has the complete fact!

SOLUTION: Overlap chunks by 10-20%:
  Chunk 1: "...the revenue was $1.5 million in Q3..."
  Chunk 2: "$1.5 million in Q3, up from Q2..."
  → The fact appears in BOTH chunks

GOLDEN RATIO:
  512 token chunk + 102 token overlap (20%)
  → Boundary context preserved
  → Slightly more storage (acceptable)
"""

print(overlap)</div>

<div class="code-block"># ── STEP 3: Implementing chunking in Python ──
# Practical code for each chunking method.

python_chunking = """
# METHOD 1: Fixed-size chunking with LangChain:
from langchain.text_splitter import RecursiveCharacterTextSplitter

splitter = RecursiveCharacterTextSplitter(
    chunk_size=512,
    chunk_overlap=102,  # 20% overlap
    separators=["\\n\\n", "\\n", ". ", " ", ""]
)

chunks = splitter.split_text(long_document)
# Returns list of ~512-char chunks with 102-char overlap


# METHOD 2: Sentence-boundary chunking:
import nltk
from langchain.text_splitter import NLTKTextSplitter

splitter = NLTKTextSplitter(chunk_size=512, chunk_overlap=100)
chunks = splitter.split_text(document)


# METHOD 3: Markdown-aware chunking:
from langchain.text_splitter import MarkdownHeaderTextSplitter

splitter = MarkdownHeaderTextSplitter(
    headers_to_split_on=[
        ("#", "Header 1"),
        ("##", "Header 2"),
        ("###", "Header 3"),
    ]
)
chunks = splitter.split_text(markdown_doc)
# Each chunk retains its header context


# METHOD 4: Semantic chunking (advanced):
from langchain_experimental.text_splitter import SemanticChunker
from langchain_openai import OpenAIEmbeddings

splitter = SemanticChunker(
    OpenAIEmbeddings(),
    breakpoint_threshold_type="percentile",  # cut at similarity drop
    breakpoint_threshold_amount=95,
)
chunks = splitter.split_text(document)
# Cuts when embedding similarity between sentences drops significantly
"""

print(python_chunking)</div>

<div class="code-block"># ── STEP 4: Late Chunking (Jina, 2024) ──
# A revolutionary approach: embed first, then chunk.

late_chunking = """
LATE CHUNKING (Jina AI, September 2024):

TRADITIONAL: Chunk first, embed each chunk alone
  Document → split into chunks → embed each chunk independently
  Problem: "it", "he", "the company" lose their reference
  → "it grew 15%" → which company? embedding is weak

LATE CHUNKING: Embed whole doc first, then extract per-chunk embeddings
  Document → embed entire doc (long-context model)
           → extract token-level embeddings
           → pool tokens into chunks
  → Each chunk retains CONTEXT from the whole document
  → Pronouns resolved automatically ("it" = the company mentioned earlier)

BEFORE (Traditional):
  Doc → [chunk1: "Revenue grew. It was $1.5M."]
  → embed("Revenue grew. It was $1.5M.") → weak embedding ("it" ambiguous)

LATE CHUNKING:
  Doc → embed ENTIRE document with long-context model (8K tokens)
  → extract token embeddings for chunk1
  → chunk1 embedding includes context from rest of doc
  → "it" is properly understood as "the company's revenue"

BENEFITS:
  ✅ Context-aware embeddings (pronouns resolved)
  ✅ Better retrieval accuracy (especially for long docs)
  ✅ Each chunk "remembers" its neighbors

LIMITATIONS:
  ❌ Requires long-context embedding model (Jina v2 8K)
  ❌ More compute (embed whole doc first)
  ❌ Newer technique, less tooling support

PAPER: Gunther et al., Jina AI (2024)
"""

print(late_chunking)</div>

<div class="code-block"># ── STEP 5: Contextual Retrieval (Anthropic, 2024) ──
# Add context prefix to each chunk before embedding.

contextual = """
CONTEXTUAL RETRIEVAL (Anthropic, September 2024):

PROBLEM: A chunk alone lacks context.
  Chunk: "Revenue grew 15% in Q3."
  → Which company? Which year? Which currency?
  → Embedding is weak because context is missing.

SOLUTION: Add a short context prefix to each chunk.

PROCESS:
  1. LLM reads the ENTIRE document
  2. For each chunk, LLM generates a 50-100 token summary
  3. Store: [LLM summary prefix] + [original chunk]

BEFORE:
  Chunk: "Revenue grew 15% in Q3."
  → Weak embedding (ambiguous reference)

AFTER (Contextual Retrieval):
  Chunk: "From Acme Corp's 2024 Q3 Financial Report: Revenue grew 15% in Q3."
  → Strong embedding (clear context)

RESULTS (Anthropic's testing):
  → 67% reduction in retrieval failures!
  → Massive accuracy improvement for RAG

COST:
  → Uses LLM to generate prefixes (expensive?)
  → BUT: with prompt caching, ~$1/M tokens (cheap!)
  → Cache the document, generate many prefixes in one call

LATE CHUNKING vs CONTEXTUAL RETRIEVAL:
  Late Chunking: changes the EMBEDDING MODEL (server-side)
  Contextual Retrieval: adds prefix to CHUNK TEXT
  → They can work TOGETHER for maximum accuracy
"""

print(contextual)

# PYTHON: Implementing Contextual Retrieval:
contextual_code = """
import anthropic

client = anthropic.Anthropic()

def add_context_prefix(document, chunks):
    \"\"\"Add context prefix to each chunk using LLM.\"\"\"

    prompt = f\"\"\"<document>
{document}
</document>

Here is the chunk we want to situate within the whole document:
<chunk>
{chunks[0]}
</chunk>

Please give a short succinct context to situate this chunk
within the overall document for the purposes of improving
search retrieval of the chunk. Answer only with the succinct
context and nothing else.\"\"\"

    response = client.messages.create(
        model="claude-3-5-sonnet-20241022",
        max_tokens=200,
        messages=[{"role": "user", "content": prompt}],
        extra_headers={"anthropic-beta": "prompt-caching-2024-07-31"}
    )

    context = response.content[0].text

    # Store: [context prefix] + [original chunk]
    return f"{context}\\n\\n{chunks[0]}"

# For each chunk, generate and prepend context:
enriched_chunks = [add_context_prefix(doc, [c]) for c in chunks]

# Now embed the enriched chunks (much better retrieval!)
"""

print(contextual_code)</div>

<div class="code-block"># ── STEP 6: Chunking best practices and metadata ──
# Maximize retrieval quality with proper chunking.

# METADATA (tag every chunk):
metadata = """
METADATA — essential for each chunk:

{
    "text": "Revenue grew 15% in Q3...",
    "source": "annual_report_2024.pdf",
    "page": 42,
    "section": "3.2 Financial Results",
    "chunk_id": "ar2024_p42_c03",
    "tokens": 487,
    "created_at": "2024-12-01",
    "author": "Finance Team",
    "tags": ["revenue", "Q3", "financial"],
    "language": "en"
}

WHY METADATA MATTERS:
  → Citation: "Source: annual_report.pdf, page 42"
  → Filtering: "Only search Q3 2024 documents"
  → Debugging: "Which chunk was retrieved?"
  → Versioning: "Get latest version of this section"
  → Access control: "Only show authorized docs"
"""

print(metadata)

# BEST PRACTICES:
best_practices = [
    "Default: 512 tokens with 20% overlap (most use cases)",
    "Use RecursiveCharacterTextSplitter (LangChain default)",
    "Try contextual retrieval for 67% fewer failures",
    "Add metadata to EVERY chunk (source, page, section)",
    "Test chunk size empirically (try 256, 512, 1024)",
    "Preserve document structure (headers, tables, lists)",
    "Handle special formats (code blocks, tables separately)",
    "Use overlap to prevent boundary information loss",
    "Consider parent-child chunking for context",
    "Experiment with semantic chunking for precision tasks",
    "Don't chunk tables or code mid-cell/mid-function",
    "Log chunk statistics (avg size, count, overlap)",
    "Re-chunk when documents are updated",
    "Use late chunking for long documents with pronouns",
    "Compress chunks before embedding if budget constrained",
]

print("CHUNKING BEST PRACTICES:")
for practice in best_practices:
    print(f"  ☐ {practice}")

# CHUNKING DECISION MATRIX:
decision = """
WHEN TO USE WHICH METHOD:

General RAG → Fixed-size 512 tokens + 20% overlap
Legal/Medical → Sentence-boundary (preserve meaning)
Technical docs → Markdown-header-based (structure-aware)
Research papers → Semantic chunking (meaning-based)
Long documents → Late chunking or contextual retrieval
Code → Function/class-based (don't cut mid-function)
Tables → Keep as single chunks (don't split rows)
Conversations → Turn-based (each message = chunk)
"""

print(decision)

# SUMMARY TABLE:
# ┌──────────────────┬──────────────────────────────────┐
# │ Concept          │ Key Point                       │
# ├──────────────────┼──────────────────────────────────┤
# │ Chunk size       │ 512 tokens (sweet spot)         │
# │ Overlap          │ 20% (prevent boundary loss)    │
# │ Fixed-size       │ Simplest, good default         │
# │ Semantic         │ Best accuracy, most complex    │
# │ Late chunking    │ Context-aware embeddings       │
# │ Contextual retr. │ LLM prefix, 67% fewer failures │
# │ Metadata         │ Essential for citation/filter  │
# │ Parent-child     │ Small retrieve, big context    │
# └──────────────────┴──────────────────────────────────┘</div>

<div class="svg-diagram">
<svg viewBox="0 0 580 250" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto">
  <rect x="0" y="0" width="580" height="250" fill="#0a1f1a" rx="10"/>
  <text x="290" y="28" text-anchor="middle" fill="#e8e6f0" font-size="13" font-weight="bold">✂️ চাঙ্কিং — সঠিক টুকরোয় ভাঙা</text>
  <rect x="40" y="60" width="500" height="34" fill="#1a2a1f" stroke="#ffc857" stroke-width="1.5" rx="4"/>
  <text x="290" y="82" text-anchor="middle" fill="#fcd34d" font-size="10">পুরো ডকুমেন্ট (৫০০০ টোকেন)</text>
  <line x1="140" y1="60" x2="140" y2="94" stroke="#ff6b35" stroke-width="2"/>
  <line x1="240" y1="60" x2="240" y2="94" stroke="#ff6b35" stroke-width="2"/>
  <line x1="340" y1="60" x2="340" y2="94" stroke="#ff6b35" stroke-width="2"/>
  <line x1="440" y1="60" x2="440" y2="94" stroke="#ff6b35" stroke-width="2"/>
  <rect x="70" y="120" width="92" height="40" fill="#0d3b34" stroke="#2dd4bf" stroke-width="1.5" rx="6"/>
  <text x="116" y="145" text-anchor="middle" fill="#5eead4" font-size="9">চাঙ্ক ১</text>
  <rect x="170" y="120" width="92" height="40" fill="#0d3b34" stroke="#2dd4bf" stroke-width="1.5" rx="6"/>
  <text x="216" y="145" text-anchor="middle" fill="#5eead4" font-size="9">চাঙ্ক ২</text>
  <rect x="270" y="120" width="92" height="40" fill="#0d3b34" stroke="#2dd4bf" stroke-width="1.5" rx="6"/>
  <text x="316" y="145" text-anchor="middle" fill="#5eead4" font-size="9">চাঙ্ক ৩</text>
  <rect x="370" y="120" width="92" height="40" fill="#0d3b34" stroke="#2dd4bf" stroke-width="1.5" rx="6"/>
  <text x="416" y="145" text-anchor="middle" fill="#5eead4" font-size="9">চাঙ্ক ৪</text>
  <rect x="162" y="120" width="16" height="40" fill="#b37feb" opacity="0.35"/>
  <rect x="262" y="120" width="16" height="40" fill="#b37feb" opacity="0.35"/>
  <rect x="362" y="120" width="16" height="40" fill="#b37feb" opacity="0.35"/>
  <text x="290" y="185" text-anchor="middle" fill="#c084fc" font-size="8" font-weight="bold">⬓ বেগুনি = ২০% overlap</text>
  <text x="290" y="208" text-anchor="middle" fill="#9290a8" font-size="8">৫১২ tok + overlap → context হারায় না, অর্থ সংরক্ষিত</text>
  <text x="290" y="228" text-anchor="middle" fill="#5e5c74" font-size="10"> Late Chunking (Jina) · Contextual Retrieval (Anthropic) = pronoun/context সমাধান</text>
</svg>
</div>
<div class="svg-caption">চিত্র: ডকুমেন্ট ভাঙো সঠিক আকারে, overlap দাও — টুকরো সম্পূর্ণ অর্থ বহন করে</div>

<div class="dialogue">বিভাজন — division, partition। কুরআনে আল্লাহ বলেন — "রমজান মাস, যে মাসে কুরআন নাজিল হয়েছে... পৃথক পৃথক রাতে।" (২:১৮৫)। কুরআন নাজিল হয়েছে খণ্ডে খণ্ডে — ২৩ বছরে, প্রাসঙ্গিক সময়ে। কিন্তু প্রতিটি খণ্ড সম্পূর্ণ অর্থ বহন করে। Chunking-ও তেমনি — সঠিক স্থানে কাটতে হয়, যাতে প্রতিটি টুকরো সম্পূর্ণ অর্থ বহন করে।</div>
<div class="dialogue en">"Vibhajan — division, partition. Allah says — 'Ramadan, the month in which the Quran was revealed... in separate nights.' (2:185). The Quran was revealed in pieces — over 23 years, at relevant times. But each piece carries complete meaning. Chunking too — cut at the right place, so each piece carries complete meaning."</div>`,
  senior:{
    title:"Chunking Audit — তোমার RAG-এ",
    body:`<p><strong>শুরু:</strong> ৫১২ টোকেন + ২০% overlap + sentence boundary। এটাই baseline।</p><p><strong>পরীক্ষা:</strong> একই ডকুমেন্ট তিনভাবে chunk করো (fixed, sentence, paragraph)। retrieval precision তুলনা করো।</p><p><strong>Advanced:</strong> semantic chunking — embedding similarity drop-ে কাটো। LangChain SemanticChunker, LlamaIndex SemanticSplitter।</p><p><strong>Long docs, pronoun সমস্যা (2024+)?</strong> → Late Chunking (Jina) — পুরো doc context-এ রাখে। অথবা Contextual Retrieval (Anthropic) — প্রতিটা chunk-এ short prefix যোগ। 67% failure reduction।</p><p><strong>প্রোডাকশন:</strong> প্রতিটা chunk-এ metadata দাও — source, page, section। citation সহজ হয়।</p>`
  }
});

// ══ DOOR 4: RETRIEVAL ══
doors.push({
  num:4, icon:"🔍", color:"#52c41a", name:"অনুসন্ধানীর গ্রন্থাগার",
  subtitle:"The Searcher's Library", tech:"Retrieval Methods Deep Dive",
  spirit:"তালাশ — সঠিক তথ্য খোঁজা",
  secret:"শুধু embedding similarity দিয়ে retrieval করলে ৬০-৭০% সঠিক। BM25 + dense = ৮৫%+। Hybrid retrieval হলো সোনালী মান। Vector search একা যথেষ্ট নয় — keyword search লাগে।",
  recall:{
    q:"গ্রন্থাগারিক কেন শুধু একটা তালিকা নয়, দুটো ব্যবহার করেন?",
    qen:"Why does the librarian use two indexes, not one?",
    a:"কারণ একটা তালিকা দিয়ে সব বই পাওয়া যায় না। Dense search = অর্থ অনুযায়ী। Sparse/BM25 = keyword অনুযায়ী। দুটো মিলে = সব বই পাওয়া যায়। Hybrid retrieval।",
    aen:"Because one index can't find all books. Dense = by meaning. Sparse/BM25 = by keyword. Together = all books found. Hybrid retrieval."
  },
  story:`
<p class="scene-setting">চতুর্থ দৃষ্টি। একটা বিশাল গ্রন্থাগার। দুটো তালিকা — একটা বিষয় অনুযায়ী, একটা কীওয়ার্ড অনুযায়ী। গ্রন্থাগারিক সাবিহা বললেন — "শুধু বিষয় দিয়ে খুঁজলে কিছু বই মিস হয়। শুধু keyword দিয়ে খুঁজলে আরও মিস হয়। দুটো মিলে — সব পাওয়া যায়।"</p>
<p class="scene-setting en">The fourth sight. A vast library. Two indexes — one by subject, one by keyword. Librarian Sabiha said — "Searching by subject alone misses some books. By keyword alone misses more. Together — everything is found."</p>

<div class="dialogue">কাঁটার বলেছিলেন — সঠিক টুকরোয় ভাঙো। কিন্তু আমি বলি — ভাঙলে কী হবে যদি সঠিক টুকরো খুঁজে না পাও? Retrieval। এটাই RAG-এর হৃদপিণ্ড। ভুল টুকরো পেলে মডেল ভুল উত্তর দেবে — আত্মবিশ্বাসে।</div>
<div class="dialogue en">"The cutter said — break into right pieces. But I say — what good are pieces if you can't find the right one? Retrieval. This is RAG's heart. Wrong piece found, model gives wrong answer — confidently."</div>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>ভুলের গল্প — Context Bloat from Tools:</strong> Each tool call added 2K tokens — context grew to 200K. Fix: summarize tool outputs.</div></div>


<div class="code-block">Retrieval Methods — Finding the Right Piece:

৩ ধরনের Search:

১. DENSE (Semantic/Vector) SEARCH
  Query → embedding → cosine similarity 
  → top-k chunks
  
  ✅ অর্থ বোঝে — "machine learning" query 
     finds "ML", "artificial intelligence"
  ❌ নির্দিষ্ট keyword মিস করে — 
     "GPT-4" query doesn't find exact "GPT-4"
  ❌ proper nouns, IDs, codes-এ দুর্বল
  
  Models: OpenAI ada-002, BGE, E5, Cohere

২. SPARSE (Keyword/BM25) SEARCH
  Query → tokenized → TF-IDF scoring
  → top-k chunks
  
  ✅ নির্দিষ্ট keyword খুঁজে পায় — 
     "GPT-4" finds exact "GPT-4"
  ✅ proper nouns, code, IDs-এ শক্তিশালী
  ❌ অর্থ বোঝে না — "ML" query misses 
     "machine learning"
  
  Engines: Elasticsearch, Lucene, BM25

৩. HYBRID SEARCH (Production Standard)
  Dense + Sparse → merge scores → top-k
  
  ✅ অর্থ ও keyword দুটোই ধরে
  ✅ ৮৫-৯৫% retrieval accuracy
  ✅ Production RAG-এ standard
  
  Implementation:
    → Dense top-50 + Sparse top-50
    → Reciprocal Rank Fusion (RRF) merge
    → Final top-5

VECTOR DATABASES:
  Pinecone     → managed, easy, $$
  Weaviate     → open-source, hybrid built-in
  Qdrant       → fast, Rust-based, open
  Milvus       → scale, enterprise
  Chroma       → simple, local, prototyping
  pgvector     → PostgreSQL extension, simple

EMBEDDING OPTIMIZATION:

  Query Embedding ≠ Document Embedding
  
  কিছু model-এ আলাদা query/passage encoder:
    • BGE: query prefix "Represent this 
      sentence for searching relevant passages:"
    • E5: "query:" vs "passage:" prefix
    • Cohere: separate embed-english-v3 
      with search_type parameter

  → সঠিক prefix ব্যবহার করো — 
    naive embedding থেকে ১০-২০% উন্নতি

MULTI-VECTOR RETRIEVAL:
  একটা ডকুমেন্টের একাধিক representation:
    • Summary embedding (short)
    • Full text embedding (detailed)  
    • Section embeddings (granular)
  → বিভিন্ন query type-এ ভালো কভারেজ</div>

<div class="svg-diagram">
<svg viewBox="0 0 580 250" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto">
  <rect x="0" y="0" width="580" height="250" fill="#0a1f1a" rx="10"/>
  <text x="290" y="28" text-anchor="middle" fill="#e8e6f0" font-size="13" font-weight="bold">🔍 Hybrid Retrieval — Dense + Sparse</text>
  <circle cx="80" cy="130" r="20" fill="#1e3a5f" stroke="#5b9eff" stroke-width="2"/>
  <text x="80" y="135" text-anchor="middle" fill="#7dd3fc" font-size="9">কোয়েরি</text>
  <rect x="140" y="70" width="120" height="44" fill="#0d3b34" stroke="#2dd4bf" stroke-width="2" rx="6"/>
  <text x="200" y="90" text-anchor="middle" fill="#5eead4" font-size="9" font-weight="bold">Dense</text>
  <text x="200" y="104" text-anchor="middle" fill="#5eead4" font-size="10">vector / অর্থ</text>
  <rect x="140" y="146" width="120" height="44" fill="#3b2a05" stroke="#fbbf24" stroke-width="2" rx="6"/>
  <text x="200" y="166" text-anchor="middle" fill="#fcd34d" font-size="9" font-weight="bold">Sparse</text>
  <text x="200" y="180" text-anchor="middle" fill="#fcd34d" font-size="10">BM25 / keyword</text>
  <line x1="100" y1="120" x2="138" y2="92" stroke="#2dd4bf" stroke-width="1.5"/>
  <line x1="100" y1="140" x2="138" y2="168" stroke="#fbbf24" stroke-width="1.5"/>
  <rect x="310" y="100" width="100" height="60" fill="#1a2a3e" stroke="#b37feb" stroke-width="2" rx="6"/>
  <text x="360" y="125" text-anchor="middle" fill="#c084fc" font-size="9" font-weight="bold">RRF</text>
  <text x="360" y="142" text-anchor="middle" fill="#c084fc" font-size="10">rank fusion</text>
  <line x1="260" y1="92" x2="308" y2="118" stroke="#7dd3fc" stroke-width="1.5" marker-end="url(#arrCtx4)"/>
  <line x1="260" y1="168" x2="308" y2="142" stroke="#7dd3fc" stroke-width="1.5" marker-end="url(#arrCtx4)"/>
  <defs>
    <marker id="arrCtx4" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
      <path d="M0,0 L8,4 L0,8 Z" fill="#7dd3fc"/>
    </marker>
  </defs>
  <rect x="450" y="100" width="100" height="60" fill="#0d3b34" stroke="#52c41a" stroke-width="2" rx="6"/>
  <text x="500" y="125" text-anchor="middle" fill="#4ade80" font-size="9" font-weight="bold">top-5</text>
  <text x="500" y="142" text-anchor="middle" fill="#4ade80" font-size="10">৮৫-৯৫%</text>
  <line x1="410" y1="130" x2="448" y2="130" stroke="#7dd3fc" stroke-width="1.5" marker-end="url(#arrCtx4)"/>
  <text x="290" y="220" text-anchor="middle" fill="#9290a8" font-size="8">⬓ Dense-only ৬৫% · Hybrid ৮৫%+ — দুটো পথ মিলে = সম্পূর্ণ তালাশ</text>
</svg>
</div>
<div class="svg-caption">চিত্র: Hybrid retrieval — অর্থ (dense) ও keyword (sparse) মিলে RRF দিয়ে top-5</div>

<div class="compare">
<div class="cmp-card cmp-bad"><div class="cmp-label">❌ Dense-only</div>শুধু vector search। "BERT architecture" query করলে "transformer neural network" পাবে (অর্থ মিল), কিন্তু "BERT" নামের exact paper মিস করবে। ৬০-৭০% accuracy।</div>
<div class="cmp-card cmp-good"><div class="cmp-label">✅ Hybrid</div>Dense + Sparse। "BERT architecture" query — অর্থ মিল (transformer papers) এবং exact keyword (BERT paper)। ৮৫-৯৫% accuracy। এটাই production standard।</div>
</div>

<div class="dialogue">তালাশ — search, seeking। কুরআনে আল্লাহ বলেন — "যারা আমার সন্ধানে চলে, আমি তাদের পথ দেখাই।" রিট্রিভাল হলো জ্ঞানের তালাশ। একটা পথ দিয়ে সব জ্ঞান পাওয়া যায় না — দুটো পথ লাগে। Dense (অর্থ) এবং Sparse (শব্দ)। দুটো মিলে = সম্পূর্ণ তালাশ।</div>
<div class="dialogue en">"Talash — search, seeking. Allah says — 'Those who seek Me, I guide them.' Retrieval is seeking knowledge. One path doesn't find all — two are needed. Dense (meaning) and Sparse (words). Together = complete search."</div>`,
  senior:{
    title:"Retrieval Pipeline — Production Setup",
    body:`<p><strong>Stack:</strong> Qdrant/Weaviate (hybrid) + BGE-large (dense) + BM25 (sparse) + RRF fusion।</p><p><strong>top-k:</strong> প্রথমে top-20 retrieve করো, তারপর reranker দিয়ে top-5 বাছো।</p><p><strong>Filtering:</strong> metadata filter দাও — source, date, category অনুযায়ী।</p><p><strong>Cache:</strong> একই query একাধিক বার? embedding cache করো। Redis।</p>`
  }
});

// ══ DOOR 5: RERANKING ══
doors.push({
  num:5, icon:"🏆", color:"#ff6b35", name:"বিচারকের কক্ষ",
  subtitle:"The Judge's Chamber", tech:"Reranking & Precision",
  spirit:"তারজিহ — প্রাধান্য দেওয়া",
  secret:"Retrieval top-20 এ সঠিক chunk আছে, কিন্তু সম্ভবত #১৫ নম্বরে। Reranker সঠিক chunk-কে #১ এ নিয়ে আসে। Cross-encoder > bi-encoder। Retrieval বিস্তৃত, reranking সূক্ষ্ম। দুটো স্তর = সর্বোচ্চ নির্ভুলতা।",
  recall:{
    q:"বিচারক কেন প্রথম তালিকা বাছাই করেন না, দ্বিতীয়বার যাচাই করেন?",
    qen:"Why does the judge not accept the first list, but reviews again?",
    a:"কারণ প্রথম তালিকা দ্রুত কিন্তু অনুমানমূলক। দ্বিতীয় যাচাই ধীর কিন্তু নির্ভুল। Retrieval = দ্রুত তালিকা। Reranking = সূক্ষ্ম যাচাই। দুটো স্তর = সর্বোচ্চ নির্ভুলতা।",
    aen:"Because the first list is fast but approximate. Second review is slow but precise. Retrieval = fast list. Reranking = fine review. Two stages = maximum accuracy."
  },
  story:`
<p class="scene-setting">পঞ্চম দৃষ্টি। বিচারকের কক্ষ। বিচারক আব্দুল্লাহ সামনে ২০টা নথি পেয়েছেন — retrieval থেকে। কিন্তু তিনি সব গ্রহণ করেন না। তিনি প্রতিটি পড়েন, তুলনা করেন, তারপর সেরা ৫টি বাছেন। "প্রথম তালিকা দ্রুত," তিনি বললেন। "কিন্তু আমার কাজ সূক্ষ্ম। প্রতিটি যাচাই করা।"</p>
<p class="scene-setting en">The fifth sight. The judge's chamber. Judge Abdullah has 20 documents before him — from retrieval. But he doesn't accept all. He reads each, compares, then picks the best 5. "The first list is fast," he said. "But my work is precise. Each verified."</p>

<div class="dialogue">অনুসন্ধানী বলেছিলেন — hybrid retrieval সঠিক। কিন্তু আমি বলি — retrieval শুধু শুরু। top-২০ retrieved-এ সঠিক chunk আছে, কিন্তু সম্ভবত #১৫ নম্বরে। আমার কাজ সেটাকে #১ এ আনা। এটাই reranking। দ্বি-স্তর প্রক্রিয়া — retrieval বিস্তৃত, reranking সূক্ষ্ম।</div>
<div class="dialogue en">"The searcher said — hybrid retrieval is right. But I say — retrieval is just the start. The correct chunk is in top-20, but maybe at #15. My job is to bring it to #1. This is reranking. Two-stage process — retrieval broad, reranking precise."</div>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>ভুলের গল্প — No Context Priority:</strong> All context treated equally — trivial info crowded out critical. Fix: implement context ranking.</div></div>


<div class="code-block">Reranking — Two-Stage Retrieval:

WHY RERANKING IS NEEDED:

  Bi-Encoder (retrieval stage):
    Query → embedding
    Doc → embedding
    Score = cosine(query_emb, doc_emb)
    
    ✅ দ্রুত — pre-computed doc embeddings
    ✅ million docs-এ সার্চ সেকেন্ডে
    ❌ অনুমানমূলক — query ও doc আলাদা encoded
    
  Cross-Encoder (reranking stage):
    [Query, Doc] → together → score
    
    ✅ নির্ভুল — query ও doc একসাথে processed
    ✅ attention query-এর প্রতিটি শব্দ → 
       doc-এর প্রতিটি শব্দের সাথে
    ❌ ধীর — প্রতিটি query-doc pair আলাদা 
       forward pass
  
  সমাধান: দুটো স্তরে ব্যবহার

TWO-STAGE PIPELINE:

  Stage 1: RETRIEVAL (bi-encoder)
    বিশাল corpus → top-20 দ্রুত
    → বিস্তৃত কভারেজ, কম precision
    
         ↓
    
  Stage 2: RERANKING (cross-encoder)  
    top-20 → প্রতিটি query-doc pair score
    → top-5 সূক্ষ্ম
    → উচ্চ precision
    
    → সঠিক chunk #১৫ থেকে #১ এ!

RERANKER MODELS:
  Cohere Rerank 3 → API, সেরা quality
  BGE-Reranker-v2 → open, strong
  Jina Reranker → fast, good
  Cross-encoder MS-MARCO → MiniLM, free

EMPIRICAL IMPACT:
  Retrieval only (top-5):        ৬৫% accuracy
  Retrieval + Reranking (top-5): ৮৫%+ accuracy
  → ২০%+ improvement শুধু reranking থেকে!

LATENCY:
  Retrieval: ~৫০ms (100M docs)
  Reranking: ~১০০ms (20 pairs)
  Total: ~১৫০ms
  → acceptable for production

WHEN TO RERANK:
  ✅ সবসময় যদি precision গুরুত্বপূর্ণ
  ✅ বিশেষ করে ফ্যাক্ট-বেসড QA
  ✅ আইনি, চিকিৎসা, financial RAG
  ❌ সম্ভব না যদি latency অত্যন্ত গুরুত্বপূর্ণ</div>

<div class="svg-diagram">
<svg viewBox="0 0 580 250" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto">
  <defs>
    <marker id="arrCtx5" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
      <path d="M0,0 L8,4 L0,8 Z" fill="#7dd3fc"/>
    </marker>
  </defs>
  <rect x="0" y="0" width="580" height="250" fill="#0a1f1a" rx="10"/>
  <text x="290" y="28" text-anchor="middle" fill="#e8e6f0" font-size="13" font-weight="bold">🏆 Two-Stage: Retrieval → Rerank</text>
  <rect x="30" y="80" width="130" height="70" fill="#1e3a5f" stroke="#5b9eff" stroke-width="2" rx="8"/>
  <text x="95" y="103" text-anchor="middle" fill="#7dd3fc" font-size="9" font-weight="bold">Stage ১</text>
  <text x="95" y="120" text-anchor="middle" fill="#7dd3fc" font-size="8">Bi-encoder</text>
  <text x="95" y="138" text-anchor="middle" fill="#5b9eff" font-size="10">top-20 · দ্রুত</text>
  <rect x="200" y="55" width="160" height="135" fill="#3b2a05" stroke="#fbbf24" stroke-width="2" rx="8"/>
  <text x="280" y="78" text-anchor="middle" fill="#fcd34d" font-size="9" font-weight="bold">Stage ২ — Rerank</text>
  <text x="280" y="93" text-anchor="middle" fill="#fcd34d" font-size="10">Cross-encoder</text>
  <rect x="216" y="105" width="128" height="16" fill="#0d3b34" stroke="#2dd4bf" stroke-width="0.8" rx="3"/>
  <text x="280" y="116" text-anchor="middle" fill="#5eead4" font-size="10">#১৫ ✓ সঠিক</text>
  <rect x="216" y="125" width="128" height="16" fill="#1a1a2e" stroke="#ff6b35" stroke-width="0.8" rx="3"/>
  <text x="280" y="136" text-anchor="middle" fill="#ff8a5b" font-size="10">#৩ · #৭ · #১১ ...</text>
  <rect x="216" y="145" width="128" height="16" fill="#0d3b34" stroke="#52c41a" stroke-width="0.8" rx="3"/>
  <text x="280" y="156" text-anchor="middle" fill="#4ade80" font-size="10">#১ → #১ এ উঠবে</text>
  <text x="280" y="178" text-anchor="middle" fill="#fbbf24" font-size="6.5">প্রতিটি pair যাচাই</text>
  <rect x="400" y="80" width="130" height="70" fill="#0d3b34" stroke="#52c41a" stroke-width="2" rx="8"/>
  <text x="465" y="103" text-anchor="middle" fill="#4ade80" font-size="9" font-weight="bold">top-5</text>
  <text x="465" y="120" text-anchor="middle" fill="#4ade80" font-size="8">নির্ভুল</text>
  <text x="465" y="138" text-anchor="middle" fill="#52c41a" font-size="10">৮৫%+ accuracy</text>
  <line x1="160" y1="115" x2="198" y2="115" stroke="#7dd3fc" stroke-width="1.5" marker-end="url(#arrCtx5)"/>
  <line x1="360" y1="115" x2="398" y2="115" stroke="#7dd3fc" stroke-width="1.5" marker-end="url(#arrCtx5)"/>
  <text x="290" y="220" text-anchor="middle" fill="#9290a8" font-size="8">⬓ Retrieval-only ৬৫% → +Rerank ৮৫%+ (২০%+ উন্নতি)</text>
  <text x="290" y="238" text-anchor="middle" fill="#5e5c74" font-size="10">তারজিহ — সবচেয়ে প্রাসঙ্গিক বাছাই, দ্রুত তালিকা থেকে সূক্ষ্ম যাচাইয়ে</text>
</svg>
</div>
<div class="svg-caption">চিত্র: দ্বি-স্তর পাইপলাইন — retrieval বিস্তৃত (top-20), reranker সঠিক chunk #১ এ আনে</div>

<div class="dialogue">তারজিহ — প্রাধান্য দেওয়া, preference। ইসলামী আইনে তারজিহ হলো — একাধিক মতের মধ্যে সবচেয়ে শক্তিশালী প্রমাণ বাছা। Reranking-ও তেমনি — একাধিক chunk-এর মধ্যে সবচেয়ে প্রাসঙ্গিক বাছা। দ্রুত তালিকা (retrieval) দিয়ে শুরু, সূক্ষ্ম যাচাই (reranking) দিয়ে শেষ। দুটো স্তর = সর্বোচ্চ নির্ভুলতা।</div>
<div class="dialogue en">"Tarjih — giving preference. In Islamic law, tarjih is choosing the strongest evidence among multiple opinions. Reranking too — choosing the most relevant among multiple chunks. Start with a fast list (retrieval), end with fine review (reranking). Two stages = maximum accuracy."</div>`,
  senior:{
    title:"Reranking Stack — Production",
    body:`<p><strong>Cohere Rerank 3:</strong> API, সেরা quality, $২/১K calls।</p><p><strong>BGE-Reranker-v2:</strong> open-source, লোকাল, ফ্রি। HuggingFace থেকে।</p><p><strong>Pipeline:</strong> Hybrid retrieve top-20 → Rerank top-5 → LLM context।</p><p><strong>A/B test:</strong> একই query তে retrieval-only বনাম reranked — accuracy তুলনা করো। ২০%+ উন্নতি দেখবে।</p>`
  }
});
