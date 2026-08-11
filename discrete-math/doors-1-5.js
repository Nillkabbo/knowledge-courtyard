const doors = [];

doors.push({
  num: 1,
  icon: "⚖️",
  color: "#8b5cf6",
  name: "সত্যের ভাষা",
  subtitle: "The Language of Truth",
  tech: "Propositional Logic — Aristotle (350 BCE), De Morgan (1847), Boolean algebra, truth tables, implications",
  spirit: "সিদ্ক — সত্য, প্রতিটি যুক্তির ভিত্তি",
  secret: "প্রতিটি if/else একটি যৌক্তিক সমীকরণ। De Morgan-এর নিয়ম: NOT(A AND B) = NOT A OR NOT B। তুমি Django QuerySet-এ প্রতিদিন এটা ব্যবহার করছ — অজান্তেই।",
  recall: {
    q: " De Morgan-এর নিয়ম কী? একটি বাস্তব উদাহরণ দাও।",
    qen: "What is De Morgan's Law? Give a real-world example.",
    a: "NOT(A AND B) = NOT A OR NOT B। Django-তে: exclude(is_staff=True, is_active=True) ≡ filter(Q(is_staff=False) | Q(is_active=False))।",
    aen: "NOT(A AND B) = NOT A OR NOT B. In Django: exclude(a=True, b=True) ≡ filter(Q(a=False) | Q(b=False))."
  },
  story: `<p class="scene-setting">এথেন্স, ৩৫০ খ্রিস্টপূর্ব। একটি ছায়ায় ঢাকা বারান্দায় একজন বৃদ্ধ পায়চারি করছেন। তার দাড়ি সাদা, চোখে তীক্ষ্ণতা — অন্ধকারেও সত্য খুঁজে বের করার মতো। তিনি হলেন অ্যারিস্টটল। তার হাতে একটি মোমবাতি — প্রতীকী, কারণ তিনি যে জিনিস আবিষ্কার করছেন তা আলো: যুক্তির ভাষা। "প্রতিটি বাক্য হয় সত্য হয় মিথ্যা," তিনি বলেন। "মাঝামাঝি কিছু নেই।" এটাই প্রোপোজিশনাল লজিক — সত্যের বীজগণিত।</p>
<p class="scene-setting en">Athens, 350 BCE. A covered colonnade. An old man paces — white beard, sharp eyes that find truth even in darkness. He is Aristotle. In his hand a candle — symbolic, for what he discovers is light itself: the language of logic. "Every statement is either true or false," he declares. "Nothing in between." This is propositional logic — the algebra of truth.</p>

<div class="dialogue"><strong>তুমি:</strong> কিন্তু আমি তো প্রতিদিন if/else লিখি। এটা কি সেই একই জিনিস?</div>
<div class="dialogue en"><strong>You:</strong> But I write if/else every day. Is this the same thing?</div>

<div class="dialogue"><strong>সত্য-রক্ষক ইদ্রিস:</strong> হ্যাঁ — আর তুমি অজান্তেই De Morgan-এর নিয়ম প্রতিদিন প্রয়োগ করছ। তোমার Django QuerySet: exclude(is_staff=True, is_active=True)। এটা মানে NOT(staff AND active)। কিন্তু De Morgan বলেন — এটা একই যে NOT staff OR NOT active। দুই রাস্তা, এক ফল। এটাই লজিকের জাদু — একই সত্যকে দুই রূপে দেখা।</div>
<div class="dialogue en"><strong>Truth Keeper Idris:</strong> Yes — and you unknowingly apply De Morgan's Law every day. Your Django exclude(is_staff=True, is_active=True) means NOT(staff AND active). De Morgan proved this equals NOT staff OR NOT active. Two paths, one truth. This is the magic of logic — the same truth seen in two forms.</div>

<div class="callout info"><span class="co-icon">📐</span><div><strong>প্রোপোজিশনাল লজিকের সত্য সারণি:</strong><br>
<strong>P</strong> → একটি সত্য/মিথ্যা বাক্য<br>
<strong>¬P</strong> → উল্টা (negation): P সত্য হলে ¬P মিথ্যা<br>
<strong>P ∧ Q</strong> → AND: দুটোই সত্য হলেই সত্য<br>
<strong>P ∨ Q</strong> → OR: যেকোনো একটা সত্য হলে সত্য<br>
<strong>P → Q</strong> → IMPLIES: P সত্য হলে Q-ও সত্য হতে হবে</div></div>

<div class="svg-diagram">
<svg viewBox="0 0 580 320" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto">
  <text x="290" y="25" text-anchor="middle" fill="#e2e8f0" font-size="13" font-weight="900">⚖️ De Morgan's Laws: The Hidden Rules of if/else</text>

  <!-- Truth Table -->
  <rect x="20" y="50" width="250" height="190" rx="10" fill="#0f172a" stroke="#8b5cf6" stroke-width="2"/>
  <text x="145" y="72" text-anchor="middle" fill="#a78bfa" font-size="11" font-weight="700">Truth Table</text>
  <rect x="30" y="82" width="40" height="20" rx="3" fill="#1e3a5f" stroke="#8b5cf6" stroke-width="1"/>
  <text x="50" y="96" text-anchor="middle" fill="#a78bfa" font-size="8" font-weight="700">P</text>
  <rect x="72" y="82" width="40" height="20" rx="3" fill="#1e3a5f" stroke="#8b5cf6" stroke-width="1"/>
  <text x="92" y="96" text-anchor="middle" fill="#a78bfa" font-size="8" font-weight="700">Q</text>
  <rect x="114" y="82" width="70" height="20" rx="3" fill="#1e3a5f" stroke="#8b5cf6" stroke-width="1"/>
  <text x="149" y="96" text-anchor="middle" fill="#a78bfa" font-size="10">¬(P∧Q)</text>
  <rect x="186" y="82" width="70" height="20" rx="3" fill="#052e16" stroke="#22c55e" stroke-width="1"/>
  <text x="221" y="96" text-anchor="middle" fill="#4ade80" font-size="10">¬P∨¬Q</text>

  <text x="50" y="115" text-anchor="middle" fill="#cbd5e1" font-size="8">T</text>
  <text x="92" y="115" text-anchor="middle" fill="#cbd5e1" font-size="8">T</text>
  <text x="149" y="115" text-anchor="middle" fill="#cbd5e1" font-size="8">F</text>
  <text x="221" y="115" text-anchor="middle" fill="#4ade80" font-size="8">F ✓</text>
  <text x="50" y="135" text-anchor="middle" fill="#cbd5e1" font-size="8">T</text>
  <text x="92" y="135" text-anchor="middle" fill="#cbd5e1" font-size="8">F</text>
  <text x="149" y="135" text-anchor="middle" fill="#cbd5e1" font-size="8">T</text>
  <text x="221" y="135" text-anchor="middle" fill="#4ade80" font-size="8">T ✓</text>
  <text x="50" y="155" text-anchor="middle" fill="#cbd5e1" font-size="8">F</text>
  <text x="92" y="155" text-anchor="middle" fill="#cbd5e1" font-size="8">T</text>
  <text x="149" y="155" text-anchor="middle" fill="#cbd5e1" font-size="8">T</text>
  <text x="221" y="155" text-anchor="middle" fill="#4ade80" font-size="8">T ✓</text>
  <text x="50" y="175" text-anchor="middle" fill="#cbd5e1" font-size="8">F</text>
  <text x="92" y="175" text-anchor="middle" fill="#cbd5e1" font-size="8">F</text>
  <text x="149" y="175" text-anchor="middle" fill="#cbd5e1" font-size="8">T</text>
  <text x="221" y="175" text-anchor="middle" fill="#4ade80" font-size="8">T ✓</text>

  <text x="145" y="205" text-anchor="middle" fill="#4ade80" font-size="8" font-weight="700">Columns match → Equivalent! ✅</text>
  <text x="145" y="225" text-anchor="middle" fill="#64748b" font-size="10" font-style="italic">All 4 rows: ¬(P∧Q) = ¬P∨¬Q</text>

  <!-- Django Example -->
  <rect x="290" y="50" width="270" height="190" rx="10" fill="#0c4a6e" stroke="#fbbf24" stroke-width="2"/>
  <text x="425" y="72" text-anchor="middle" fill="#fcd34d" font-size="11" font-weight="700">🐍 Django Example</text>
  <rect x="305" y="85" width="240" height="28" rx="4" fill="#1e293b" stroke="#fbbf24" stroke-width="1"/>
  <text x="425" y="103" text-anchor="middle" fill="#fcd34d" font-size="10" font-family="monospace">User.objects.exclude(is_staff=True,</text>
  <rect x="305" y="116" width="240" height="22" rx="4" fill="#1e293b" stroke="#fbbf24" stroke-width="1"/>
  <text x="425" y="131" text-anchor="middle" fill="#fcd34d" font-size="10" font-family="monospace">    is_active=True)</text>
  <text x="425" y="152" text-anchor="middle" fill="#7dd3fc" font-size="10">≡ (De Morgan's!)</text>
  <rect x="305" y="160" width="240" height="22" rx="4" fill="#052e16" stroke="#22c55e" stroke-width="1"/>
  <text x="425" y="175" text-anchor="middle" fill="#4ade80" font-size="10" font-family="monospace">User.objects.filter(</text>
  <rect x="305" y="183" width="240" height="22" rx="4" fill="#052e16" stroke="#22c55e" stroke-width="1"/>
  <text x="425" y="198" text-anchor="middle" fill="#4ade80" font-size="10" font-family="monospace">  Q(is_staff=False) | Q(is_active=False))</text>
  <text x="425" y="222" text-anchor="middle" fill="#4ade80" font-size="10">Same result! De Morgan proven in code ✅</text>

  <rect x="60" y="260" width="460" height="40" rx="8" fill="#0f172a" stroke="#fbbf24" stroke-width="1"/>
  <text x="290" y="280" text-anchor="middle" fill="#fbbf24" font-size="9" font-weight="600">💡 Logic simplification = fewer gates, faster circuits, cleaner code</text>
  <text x="290" y="294" text-anchor="middle" fill="#64748b" font-size="10">In hardware: fewer logic gates = smaller chip, less power, cheaper manufacturing</text>
</svg>
</div>
<div class="svg-caption">চিত্র: De Morgan's Law — truth table প্রমাণ করে ¬(P∧Q) ≡ ¬P∨¬Q। Django QuerySet-এ তুমি অজান্তেই এটা ব্যবহার করছ।</div>

<div class="code-block"># ── STEP 1: Propositional logic — the algebra of truth ──
# Logic is the foundation of all computer science.

logic_basics = """
PROPOSITIONAL LOGIC:

A PROPOSITION is a statement that is either TRUE or FALSE.
  "It is raining" → True or False
  "2 + 2 = 4" → True
  "x > 5" → depends on x (but still True or False for any given x)

LOGICAL OPERATORS:
  AND (∧): True only if BOTH are True
  OR (∨):  True if AT LEAST ONE is True
  NOT (¬): Inverts (True → False, False → True)
  IMPLIES (→): False only when True → False
  XOR (⊕): True when EXACTLY ONE is True (exclusive or)
  IFF (↔): True when BOTH have the SAME value

TRUTH TABLES:
  P    Q    P∧Q   P∨Q   ¬P    P→Q   P⊕Q
  T    T     T     T     F     T     F
  T    F     F     T     F     F     T
  F    T     F     T     T     T     T
  F    F     F     F     T     T     F
"""

print(logic_basics)

# PYTHON: Truth tables:
truth_code = """
# Verify all logical operations:
for P in (True, False):
    for Q in (True, False):
        print(f"P={P!s:5} Q={Q!s:5} | AND={P and Q!s:5} OR={P or Q!s:5} "
              f"NOT P={not P!s:5} IMPLIES={ (not P) or Q!s:5}")

# Python operators map to logic:
# and  = ∧ (logical AND)
# or   = ∨ (logical OR)
# not  = ¬ (logical NOT)
# Python has no built-in XOR for bool, but:
# (P != Q)  = XOR (⊕)
# (P == Q)  = IFF (↔)
"""

print(truth_code)</div>

<div class="code-block"># ── STEP 2: De Morgan's laws ──
# The most important transformation in logic.

de_morgan = """
DE MORGAN'S LAWS (Augustus De Morgan, 1847):

LAW 1: NOT(A AND B) = NOT A OR NOT B
  ¬(P ∧ Q) = ¬P ∨ ¬Q

  Example: "Not (raining AND cold)"
  = "Not raining OR not cold"

LAW 2: NOT(A OR B) = NOT A AND NOT B
  ¬(P ∨ Q) = ¬P ∧ ¬Q

  Example: "Not (raining OR snowing)"
  = "Not raining AND not snowing"

WHY THIS MATTERS IN PROGRAMMING:
  → Boolean simplification (fewer conditions)
  → Circuit optimization (fewer gates)
  → Database queries (Django ORM)

DJANGO ORM EXAMPLE:
  # De Morgan in QuerySet:
  # exclude(is_staff=True, is_active=True)
  # = NOT(is_staff AND is_active)
  # = filter(is_staff=False) | filter(is_active=False)

  # These two are EQUIVALENT:
  User.objects.exclude(is_staff=True, is_active=True)
  User.objects.filter(Q(is_staff=False) | Q(is_active=False))
"""

print(de_morgan)

# PYTHON: Verify De Morgan's laws:
verify_code = """
# Verify De Morgan for ALL truth values:
print("De Morgan's Law 1: NOT(A AND B) = NOT A OR NOT B")
for P in (True, False):
    for Q in (True, False):
        left = not (P and Q)        # NOT(A AND B)
        right = (not P) or (not Q)  # NOT A OR NOT B
        assert left == right, f"FAILED for P={P}, Q={Q}"
print("All cases passed! ✅")

print("\\nDe Morgan's Law 2: NOT(A OR B) = NOT A AND NOT B")
for P in (True, False):
    for Q in (True, False):
        left = not (P or Q)         # NOT(A OR B)
        right = (not P) and (not Q) # NOT A AND NOT B
        assert left == right, f"FAILED for P={P}, Q={Q}"
print("All cases passed! ✅")
"""

print(verify_code)</div>

<div class="code-block"># ── STEP 3: Implication and vacuous truth ──
# The most counterintuitive part of logic.

implication = """
IMPLICATION (P → Q):
  "If P then Q"
  FALSE only when P is True and Q is False
  TRUE in all other cases

TRUTH TABLE:
  P    Q    P→Q
  T    T     T   (True premise, True conclusion → valid)
  T    F     F   (True premise, False conclusion → INVALID!)
  F    T     T   (False premise → vacuously true)
  F    F     T   (False premise → vacuously true)

VACUOUS TRUTH:
  When P is False, P→Q is ALWAYS True.
  "If the sun rises in the west, then I am king" → TRUE!
  (Because the sun does NOT rise in the west, premise is false → vacuously true)

  This seems wrong intuitively, but it's logically correct.
  If the premise never holds, the implication can never be violated.

CONTRAPOSITIVE:
  P → Q is equivalent to ¬Q → ¬P (contrapositive)

  Original: "If it rains, the ground gets wet"
  Contrapositive: "If the ground is NOT wet, it did NOT rain"
  → Same meaning, different form

PYTHON:
  # P → Q in Python:
  implies = (not P) or Q
  # Or equivalently:
  implies = not (P and not Q)  # NOT(P AND NOT Q)
"""

print(implication)</div>

<div class="code-block"># ── STEP 4: Logical equivalences ──
# Transform expressions using proven laws.

equivalences = {
    "De Morgan's Laws": {
        "Law 1": "¬(P ∧ Q) = ¬P ∨ ¬Q",
        "Law 2": "¬(P ∨ Q) = ¬P ∧ ¬Q",
    },
    "Double Negation": "¬(¬P) = P",
    "Contrapositive": "P → Q = ¬Q → ¬P",
    "Distributive": {
        "AND over OR": "P ∧ (Q ∨ R) = (P ∧ Q) ∨ (P ∧ R)",
        "OR over AND": "P ∨ (Q ∧ R) = (P ∨ Q) ∧ (P ∨ R)",
    },
    "Associative": {
        "AND": "(P ∧ Q) ∧ R = P ∧ (Q ∧ R)",
        "OR": "(P ∨ Q) ∨ R = P ∨ (Q ∨ R)",
    },
    "Commutative": {
        "AND": "P ∧ Q = Q ∧ P",
        "OR": "P ∨ Q = Q ∨ P",
    },
    "Identity": {
        "AND": "P ∧ True = P",
        "OR": "P ∨ False = P",
    },
    "Domination": {
        "AND": "P ∧ False = False",
        "OR": "P ∨ True = True",
    },
    "Idempotent": {
        "AND": "P ∧ P = P",
        "OR": "P ∨ P = P",
    },
    "Absorption": {
        "Law 1": "P ∧ (P ∨ Q) = P",
        "Law 2": "P ∨ (P ∧ Q) = P",
    },
}

print("LOGICAL EQUIVALENCES:")
for name, rules in equivalences.items():
    print(f"\\n  {name}:")
    if isinstance(rules, dict):
        for key, value in rules.items():
            print(f"    {key}: {value}")
    else:
        print(f"    {rules}")</div>

<div class="code-block"># ── STEP 5: Logic in circuits and programming ──
# Logic gates are the physical implementation of propositional logic.

applications = """
LOGIC IN CIRCUITS:
  Every logic operation = a physical gate (transistor circuit):
  AND gate: outputs 1 only if both inputs are 1
  OR gate:  outputs 1 if either input is 1
  NOT gate: outputs the opposite (inverter)
  XOR gate: outputs 1 if inputs differ
  NAND gate: NOT AND (universal — can build ANY circuit from NANDs)

  Every CPU is billions of logic gates.
  Every algorithm ultimately = logic gates switching.

LOGIC IN PROGRAMMING:
  if (x > 0 and y > 0):     # AND
  if (x == 0 or y == 0):    # OR
  if not is_valid:           # NOT
  if (a and not b) or c:    # Complex

LOGIC IN DATABASES (SQL/Django):
  WHERE age > 18 AND status = 'active'
  filter(age__gt=18, status='active')        # AND
  filter(Q(age__gt=18) | Q(status='vip'))    # OR
  exclude(is_deleted=True)                    # NOT

LOGIC IN ML/AI:
  Decision trees: each split is a logical condition
  Rule-based systems: if (condition1 AND condition2) then action
  Boolean retrieval: search with AND/OR/NOT operators
"""

print(applications)

# PYTHON: Logic gate simulation:
gates_code = """
# Simulate logic gates:
def AND(a, b): return a and b
def OR(a, b):  return a or b
def NOT(a):    return not a
def XOR(a, b): return a != b
def NAND(a, b): return not (a and b)
def NOR(a, b): return not (a or b)

# Build a half-adder (adds two bits):
def half_adder(a, b):
    sum_bit = XOR(a, b)   # Sum
    carry = AND(a, b)     # Carry
    return sum_bit, carry

# Full adder (adds three bits — for multi-bit addition):
def full_adder(a, b, carry_in):
    sum1, carry1 = half_adder(a, b)
    sum2, carry2 = half_adder(sum1, carry_in)
    carry_out = OR(carry1, carry2)
    return sum2, carry_out

# 4-bit adder (adds two 4-bit numbers):
def four_bit_adder(a_bits, b_bits):
    result = []
    carry = False
    for i in range(3, -1, -1):  # LSB to MSB
        s, carry = full_adder(a_bits[i], b_bits[i], carry)
        result.insert(0, s)
    return result, carry

# Example: 1010 (10) + 0011 (3) = 1101 (13)
print(four_bit_adder([1,0,1,0], [0,0,1,1]))
# ([True, True, False, True], False) → 1101 = 13 ✅
"""

print(gates_code)</div>

<div class="code-block"># ── STEP 6: Logic best practices and pitfalls ──
# Avoid common logical mistakes in programming.

best_practices = [
    "Use De Morgan's to simplify complex negations",
    "Prefer positive conditions (avoid double negatives)",
    "Remember: P → Q is only false when P=T and Q=F",
    "Vacuous truth: False → anything is True",
    "Contrapositive: P → Q = ¬Q → ¬P (useful for proofs)",
    "Short-circuit evaluation: Python stops at first False (AND)",
    "Distribute NOT carefully: ¬(A AND B) = ¬A OR ¬B",
    "XOR for toggles: a != b (exclusive or)",
    "Truth tables verify any logical expression",
    "Database queries map directly to logical operators",
    "Every CPU operation = logic gates switching",
    "NAND is universal (can build any logic from NANDs alone)",
    "Test edge cases: P=False (vacuous truth)",
    "Use parentheses to clarify precedence in complex conditions",
    "Refactor: if not (a and b) → if not a or not b (De Morgan)",
]

print("LOGIC BEST PRACTICES:")
for practice in best_practices:
    print(f"  ☐ {practice}")

# SUMMARY TABLE:
# ┌──────────────────┬──────────────────────────────────┐
# │ Operator         │ Python                          │
# ├──────────────────┼──────────────────────────────────┤
# │ AND (∧)         │ and                             │
# │ OR (∨)          │ or                              │
# │ NOT (¬)         │ not                             │
# │ IMPLIES (→)    │ (not P) or Q                    │
# │ XOR (⊕)        │ P != Q                          │
# │ IFF (↔)        │ P == Q                          │
# │ De Morgan 1     │ not(A and B) = not A or not B   │
# │ De Morgan 2     │ not(A or B) = not A and not B   │
# └──────────────────┴──────────────────────────────────┘</div>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>Implication-এর ফাঁদ:</strong> P → Q (যদি P তবে Q) শুধু তখনই মিথ্যা যখন P সত্য কিন্তু Q মিথ্যা। P মিথ্যা হলে — Q যাই হোক — P → Q সত্য! একে "vacuous truth" বলে। "যদি সূর্য পশ্চিমে ওঠে, তবে আমি রাজা" — সত্য! কারণ সূর্য পশ্চিমে ওঠে না।</div></div>

<div class="verse">قُلِ اللَّهُ يُلْقِي الْحَقَّ وَهُوَ الَّذِي يُفْرِعُهُ</div>
<div style="font-size:.85rem;color:var(--ink-dim);text-align:center;margin-bottom:1rem">"বলো, আল্লাহ সত্য নিক্ষেপ করেন — এবং তিনিই তা প্রতিষ্ঠিত করেন।" — কুরআন ১০:৮২</div>

<p class="scene-setting">সিদ্ক — সত্য। অ্যারিস্টটল যুক্তির ভাষা আবিষ্কার করেছিলেন — কিন্তু সত্য তার আগে থেকেই ছিল। প্রতিটি সত্য সারণি — AND, OR, NOT — একটি প্রতিফলন। De Morgan ১৮৪৭ সালে দেখালেন যে সত্য রূপ বদলায় কিন্তু মান বদলায় না। একই সত্য — দুই রূপে।</p>
<p class="scene-setting en">Sidq — truthfulness. Aristotle discovered the language of logic — but truth existed before. Every truth table — AND, OR, NOT — is a reflection. De Morgan in 1847 showed that truth changes form but not value. The same truth — in two forms.</p>

<div class="callout tip"><span class="co-icon">🔗</span><div><strong>Book ৩৩ (Loom of Reason) Door ১:</strong> মানসিক মডেল শিখেছিলে — সেই মডেলের ভিত্তিই প্রোপোজিশনাল লজিক। Book ৪১ (Clockwork of Thought) Door ১: অটোমেটা — প্রতিটি logic gate একটি finite automaton।</div></div>

<div class="secret-box">⚖️ <strong>লজিক = সত্যের বীজগণিত।</strong> De Morgan: NOT(A AND B) = NOT A OR NOT B। তুমি প্রতিদিন এটা ব্যবহার করছ — Django-তে, if/else-এ, সার্কিটে। কিন্তু সত্য শুধু যুক্তি নয় — একটি জীবন্ত জিনিস। পরের দরজায় — সত্যকে প্রমাণ করার সবচেয়ে শক্তিশালী অস্ত্র: গাণিতিক আরোহ।</div>`,
  senior: {
    title: "Propositional Logic এক নজরে",
    body: `<table class="kv-table"><tr><th>ধারণা</th><th>বিবরণ</th></tr>
<tr><td class="hl">Aristotle (৩৫০ BCE)</td><td>প্রোপোজিশনাল লজিকের জনক</td></tr>
<tr><td class="hl">De Morgan (১৮৪৭)</td><td>¬(P∧Q) = ¬P∨¬Q · ¬(P∨Q) = ¬P∧¬Q</td></tr>
<tr><td class="hl">AND (∧)</td><td>দুটোই সত্য হলেই সত্য</td></tr>
<tr><td class="hl">OR (∨)</td><td>যেকোনো একটা সত্য হলে সত্য</td></tr>
<tr><td class="hl">NOT (¬)</td><td>উল্টে দাও</td></tr>
<tr><td class="hl">IMPLIES (→)</td><td>শুধু P=T, Q=F হলে মিথ্যা</td></tr>
<tr><td class="hl">Vacuous Truth</td><td>P=F হলে P→Q সর্বদা সত্য</td></tr>
<tr><td class="hl">Django QuerySet</td><td>exclude(a,b) ≡ filter(¬a | ¬b) — De Morgan!</td></tr></table>`
  }
});

doors.push({
  num: 2,
  icon: "🁢",
  color: "#8b5cf6",
  name: "ডোমিনোর প্রভাব",
  subtitle: "The Domino Effect",
  tech: "Mathematical Induction — base case + inductive step, strong vs weak induction, structural induction",
  spirit: "আমানত — আস্থা, একটি থেকে অনন্ত পর্যন্ত বিশ্বাসের শৃঙ্খল",
  secret: "ইনডাকশন = ডোমিনো। দুটি প্রমাণ: base case (প্রথমটা পড়ে) + inductive step (প্রতিটি পরেরটাকে ফেলে)। এই দুটো থেকে গাণিতিকভাবে অনুসরণ করে — সব পড়বে।",
  recall: {
    q: " গাণিতিক ইনডাকশনের দুটি ধাপ কী?",
    qen: "What are the two steps of mathematical induction?",
    a: "১. Base case: P(০) সত্য। ২. Inductive step: যদি P(k) সত্য হয়, তবে P(k+১) সত্য। এই দুটো থেকে P(n) সকল n-এর জন্য সত্য।",
    aen: "1. Base case: P(0) is true. 2. Inductive step: if P(k) is true, then P(k+1) is true. Together these prove P(n) for all n."
  },
  story: `<p class="scene-setting">তুমি একটি ঘরে দাঁড়িয়ে আছো। মেঝেতে হাজার ডোমিনো — একটার পর একটা সারিবদ্ধ। তুমি জানো যে প্রথমটা হালকা ধাক্কা দিলে সব পড়বে। কিন্তু কেন? প্রথমটা পড়ে দ্বিতীয়টাকে ধাক্কা দেয়। দ্বিতীয়টা তৃতীয়টাকে। এভাবে — ধাপে ধাপে। এটাই গাণিতিক ইনডাকশন — সীমিত থেকে অসীমের প্রমাণ।</p>
<p class="scene-setting en">You stand in a room. A thousand dominoes line the floor. You know the first push will topple them all. But why? The first falls and pushes the second. The second pushes the third. Step by step — this is mathematical induction — proving the infinite from the finite.</p>

<div class="dialogue"><strong>ডোমিনো কারিগর ইউসুফ:</strong> বলো — ১ থেকে n পর্যন্ত যোগ করলে কত? ১+২+৩+...+n। তুমি হয়তো n(n+১)/২ জানো। কিন্তু প্রমাণ কোথায়? ব্রুট ফোর্স চলবে না — n অসীম হতে পারে। ইনডাকশন দাও: base case — n=১ তে ১(২)/২ = ১ ✓। Inductive step — ধরো k পর্যন্ত সূত্র সত্য। তবে k+১ পর্যন্ত? (k+১)(k+২)/২। k পর্যন্ত যোগফলে (k+১) যোগ করো — সূত্র মিলে যায়! দুটি প্রমাণে — অসীম সত্য।</div>
<div class="dialogue en"><strong>Domino Craftsman Yusuf:</strong> Tell me — what is 1+2+3+...+n? You know the formula n(n+1)/2. But proof? Brute force won't work — n can be infinite. Induction: base case — n=1 gives 1(2)/2 = 1 ✓. Inductive step — assume formula holds for k. Then for k+1? Add (k+1) to the sum — formula matches! Two proofs — infinite truth.</div>

<div class="callout info"><span class="co-icon">🁢</span><div><strong>গাণিতিক ইনডাকশনের কাঠামো:</strong><br>
<strong>থিওরেম:</strong> প্রতিটি ধনাত্মক পূর্ণসংখ্যা n-এর জন্য P(n) সত্য।<br>
<strong>ধাপ ১ — Base Case:</strong> P(১) সত্য প্রমাণ করো।<br>
<strong>ধাপ ২ — Inductive Step:</strong> ধরো P(k) সত্য (inductive hypothesis)। এ থেকে প্রমাণ করো P(k+১) সত্য।<br>
<strong>সিদ্ধান্ত:</strong> ∴ সকল n-এর জন্য P(n) সত্য।</div></div>

<div class="code-block"># ── STEP 1: Proof techniques overview ──
# Different ways to prove mathematical statements.

proof_techniques = """
PROOF TECHNIQUES:

1. DIRECT PROOF:
   Start with known facts → apply logic → reach conclusion.
   "If P then Q" → Assume P → derive Q.

2. PROOF BY CONTRADICTION (Reductio ad absurdum):
   Assume the OPPOSITE → derive a contradiction → original must be true.
   "Prove √2 is irrational" → assume rational → contradiction!

3. PROOF BY INDUCTION:
   Base case + inductive step → true for all natural numbers.
   Like dominoes: knock down first → each knocks the next.

4. PROOF BY CONTRAPOSITION:
   Prove the contrapositive (¬Q → ¬P) instead of (P → Q).
   They're logically equivalent.

5. PROOF BY EXHAUSTION (cases):
   Check ALL possible cases. Works when finite.

6. CONSTRUCTIVE PROOF:
   Build an example that satisfies the statement.
   "There exists an even prime" → 2 is even and prime.

7. NON-CONSTRUCTIVE PROOF:
   Prove existence without finding the example.
   Pigeonhole principle: "At least 2 people in Dhaka have same
   number of hairs" (without finding them).
"""

print(proof_techniques)</div>

<div class="code-block"># ── STEP 2: Mathematical induction ──
# The domino effect — prove for all natural numbers.

induction = """
MATHEMATICAL INDUCTION:

To prove P(n) is true for all n ≥ 1:

STEP 1 — BASE CASE:
  Prove P(1) is true.
  (Knock down the first domino.)

STEP 2 — INDUCTIVE STEP:
  Assume P(k) is true (inductive hypothesis).
  Prove P(k+1) is true.
  (If domino k falls, domino k+1 falls.)

CONCLUSION:
  By induction, P(n) is true for ALL n ≥ 1.
  (All dominoes fall.)

CLASSIC EXAMPLE: Sum of first n natural numbers
  P(n): 1 + 2 + 3 + ... + n = n(n+1)/2

  BASE CASE (n=1):
    Left:  1
    Right: 1(1+1)/2 = 1
    1 = 1 ✓

  INDUCTIVE STEP:
    Assume P(k): 1 + 2 + ... + k = k(k+1)/2
    Prove P(k+1): 1 + 2 + ... + k + (k+1) = (k+1)(k+2)/2

    Left = [k(k+1)/2] + (k+1)     [using P(k)]
         = (k+1)[k/2 + 1]
         = (k+1)(k+2)/2
         = Right ✓

  Therefore, true for all n.
"""

print(induction)

# PYTHON: Verify the formula:
induction_code = """
# Verify: sum(1..n) = n(n+1)/2 for n=1 to 1000
for n in range(1, 1001):
    brute = sum(range(1, n + 1))     # 1 + 2 + ... + n
    formula = n * (n + 1) // 2       # n(n+1)/2
    assert brute == formula, f"FAILED for n={n}"
print("Induction verified for n=1 to 1000 ✅")

# STRONG INDUCTION:
# Instead of just P(k), assume P(1), P(2), ..., P(k) all true.
# Useful for Fibonacci: F(n) = F(n-1) + F(n-2)
# Need both previous values (not just P(k)).
"""

print(induction_code)</div>

<div class="code-block"># ── STEP 3: Proof by contradiction ──
# Assume opposite → find contradiction → original is true.

contradiction = """
PROOF BY CONTRADICTION:

To prove statement S:
  1. Assume ¬S (the opposite)
  2. Derive a contradiction (impossible result)
  3. Therefore, S must be true

CLASSIC: √2 is irrational

  Assume √2 IS rational.
  → √2 = a/b (reduced fraction, gcd(a,b)=1)
  → 2 = a²/b²
  → a² = 2b²
  → a² is even → a is even → a = 2k
  → (2k)² = 2b² → 4k² = 2b² → b² = 2k²
  → b² is even → b is even
  → But a and b both even contradicts gcd(a,b)=1!
  → CONTRADICTION!
  → Therefore, √2 is irrational. ∎

WHEN TO USE CONTRADICTION:
  → Direct proof is hard or unclear
  → The statement is about NON-existence ("no integer solution")
  → The opposite assumption leads to a clear contradiction
"""

print(contradiction)

# PYTHON: Verify √2 irrationality claim:
sqrt2_code = """
# We can't PROVE irrationality computationally, but we can verify:
# √2 cannot be expressed as p/q for small integers.

from math import isclose, sqrt

found_rational = False
for q in range(1, 10000):          # denominator
    for p in range(1, 10000):      # numerator
        if isclose(p / q, sqrt(2), rel_tol=1e-15):
            print(f"Found: {p}/{q} ≈ √2")
            found_rational = True
            break
    if found_rational:
        break

if not found_rational:
    print("No p/q (up to 10000) equals √2 — supports irrationality ✅")
    print(f"√2 ≈ {sqrt(2)}")
"""

print(sqrt2_code)</div>

<div class="code-block"># ── STEP 4: Proof by contrapositive ──
# Prove ¬Q → ¬P instead of P → Q (they're equivalent).

contrapositive_proof = """
PROOF BY CONTRAPOSITION:

P → Q is equivalent to ¬Q → ¬P (contrapositive).

Sometimes the contrapositive is EASIER to prove.

EXAMPLE: "If n² is even, then n is even"

  Direct proof: hard (how to get from n² even to n even?)

  Contrapositive: "If n is odd, then n² is odd"
    n is odd → n = 2k + 1
    n² = (2k+1)² = 4k² + 4k + 1 = 2(2k² + 2k) + 1
    → n² is odd ✓

  Since contrapositive is true, original is true.
  "If n² is even → n is even" ✓

PYTHON: Verify contrapositive:
  # P → Q = ¬Q → ¬P
  for n in range(1, 100):
      P = (n ** 2) % 2 == 0  # n² is even
      Q = n % 2 == 0          # n is even
      implies_pq = (not P) or Q       # P → Q
      implies_contrapos = (not (not Q)) or (not P)  # ¬Q → ¬P
      assert implies_pq == implies_contrapos
"""

print(contrapositive_proof)</div>

<div class="code-block"># ── STEP 5: Common proof mistakes ──
# Avoid these classic errors.

mistakes = """
COMMON PROOF MISTAKES:

1. MISSING BASE CASE:
   Inductive step works, but P(1) is false.
   → "All numbers are equal" — inductive step works, but base case fails.

2. CIRCULAR REASONING:
   Using what you're trying to prove as an assumption.
   → "X is true because X is true" (useless!)

3. BEGGING THE QUESTION:
   Assuming the conclusion in a disguised form.

4. APPEAL TO AUTHORITY:
   "It's true because a famous person said so." (not a proof)

5. FALSE DICHOTOMY:
   Presenting only two options when more exist.

6. AFFIRMING THE CONSEQUENT:
   P → Q and Q → therefore P. WRONG!
   (Rain → wet ground, wet ground → therefore it rained. WRONG: could be a hose.)

7. DENYING THE ANTECEDENT:
   P → Q and ¬P → therefore ¬Q. WRONG!
   (Rain → wet ground, no rain → therefore ground not wet. WRONG.)

8. INDUCTION ON WRONG SET:
   Induction works on natural numbers, not on real numbers.
"""

print(mistakes)

# PYTHON: Spot the fallacy:
fallacies_code = """
# Affirming the consequent: P→Q, Q ⟹ P (WRONG)
# Test: rain → wet ground, ground wet ⟹ it rained?
# Counterexample: sprinkler made ground wet (no rain)

# Denying the antecedent: P→Q, ¬P ⟹ ¬Q (WRONG)
# Test: rain → wet ground, no rain ⟹ ground dry?
# Counterexample: sprinkler made ground wet despite no rain

# Verify with truth table that these are INVALID:
print("Affirming the consequent (INVALID):")
for P in (True, False):
    for Q in (True, False):
        implication = (not P) or Q  # P → Q
        # Fallacy: if P→Q and Q, conclude P
        if implication and Q:
            print(f"  P={P}, Q={Q}: P→Q=True, Q=True, but P={P}")
            if not P:
                print("  → FALLACY! Concluded P but P is False")
                break

print("\\nDenying the antecedent (INVALID):")
for P in (True, False):
    for Q in (True, False):
        implication = (not P) or Q
        if implication and not P:
            print(f"  P={P}, Q={Q}: P→Q=True, ¬P=True, but Q={Q}")
            if Q:
                print("  → FALLACY! Concluded ¬Q but Q is True")
"""

print(fallacies_code)</div>

<div class="code-block"># ── STEP 6: Proofs in computer science ──
# How proof techniques apply to algorithms and data structures.

cs_proofs = """
PROOFS IN COMPUTER SCIENCE:

1. ALGORITHM CORRECTNESS (by induction):
   Prove the algorithm produces correct output.
   → Loop invariants (induction on iteration count)
   → Recursive algorithms (induction on input size)

   Example: Binary search
   Invariant: "If target exists, it's within current search range"
   Base: range is the whole array
   Step: each iteration halves the range, invariant maintained

2. BIG-O ANALYSIS (direct proof):
   Prove T(n) ≤ c·f(n) for large n.
   Direct manipulation of summations and recurrences.

3. HALTING PROBLEM (by contradiction):
   "No program can determine if another program halts."
   → Assume such a program H exists
   → Construct a paradox program D(H)
   → D contradicts itself → H cannot exist

4. PIGEONHOLE PRINCIPLE (counting):
   If n items in m containers and n > m, at least one container has 2+ items.
   Example: "In any group of 367 people, at least 2 share a birthday"
   (366 possible birthdays including Feb 29)

5. GÖDEL'S INCOMPLETENESS (meta-mathematical):
   In any sufficiently complex formal system:
   → There are TRUE statements that CANNOT be proven
   → Mathematics is not complete (mind-blowing!)

6. LOOP INVARIANTS (induction):
   A condition that holds before and after each loop iteration.
   Used to prove loops are correct.

PYTHON: Loop invariant example (binary search):
  def binary_search(arr, target):
      lo, hi = 0, len(arr) - 1

      # INVARIANT: if target in arr, then arr[lo..hi] contains target
      while lo <= hi:
          mid = (lo + hi) // 2
          if arr[mid] == target:
              return mid  # found
          elif arr[mid] < target:
              lo = mid + 1  # invariant maintained (target in right half)
          else:
              hi = mid - 1  # invariant maintained (target in left half)

      return -1  # target not found (invariant: target not in arr)
"""

print(cs_proofs)

# SUMMARY TABLE:
# ┌──────────────────┬──────────────────────────────────┐
# │ Proof Type       │ When to Use                     │
# ├──────────────────┼──────────────────────────────────┤
# │ Direct           │ Straightforward derivation      │
# │ Contradiction    │ Non-existence, irrational       │
# │ Induction        │ Natural numbers, recursion      │
# │ Contrapositive   │ When direct is hard             │
# │ Exhaustion       │ Finite cases                    │
# │ Constructive     │ Existence proofs                │
# │ Pigeonhole       │ Counting, duplicates            │
# │ Loop invariant   │ Algorithm correctness           │
# └──────────────────┴──────────────────────────────────┘</div>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>ফাঁদ — Base Case ভুল:</strong> অনেকে inductive step প্রমাণ করে base case ভুলে যায়। "সকল সংখ্যা সমান" — inductive step কাজ করে কিন্তু base case ভুল! n=১ তে পরীক্ষা না করলে মিথ্যা সত্য হয়ে যায়। Base case = ভিত্তি — ভিত্তি না থাকলে ভবন দাঁড়ায় না।</div></div>

<div class="verse">وَقُلِ اعْمَلُوا فَسَيَرَى اللَّهُ عَمَلَكُمْ</div>
<div style="font-size:.85rem;color:var(--ink-dim);text-align:center;margin-bottom:1rem">"এবং বলো, তোমরা কাজ করো — আল্লাহ তোমাদের কাজ দেখবেন।" — কুরআন ৯:১০৫</div>

<p class="scene-setting">"আমাল" — কাজ, ধাপে ধাপে। ইনডাকশনও তেমন — প্রতিটি ধাপ পূর্ববর্তীর উপর নির্মিত। প্রথম ধাপ নিশ্চিত (base case) — তারপর প্রতিটি ধাপ পরেরটিকে বহন করে (inductive step)। একটি থেকে অনন্ত — আস্থার শৃঙ্খল। আমানত।</p>
<p class="scene-setting en">"Amal" — work, step by step. Induction is the same — each step built on the previous. First step certain (base case) — then each step carries the next (inductive step). One to infinity — a chain of trust. Amanah.</p>

<div class="callout tip"><span class="co-icon">🔗</span><div><strong>Book ২ (DSA Bazaar) Door ৩ (Recursion):</strong> প্রতিটি recursive ফাংশন = ইনডাকশন! Base case = termination। Recursive call = inductive step। factorial(0) = 1 (base), factorial(n) = n * factorial(n-1) (step)। সত্য-রক্ষক ইদ্রিস (Door ১) তোমাকে লজিক দিয়েছেন — এখন ইউসুফ দেখাচ্ছেন সেই লজিক কীভাবে অসীমকে ছুঁয়ে যায়।</div></div>

<div class="svg-diagram">
<svg viewBox="0 0 580 250" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto">
  <defs>
    <marker id="arrDM2" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
      <path d="M0,0 L8,4 L0,8 Z" fill="#a78bfa"/>
    </marker>
  </defs>
  <text x="290" y="22" text-anchor="middle" fill="#e2e8f0" font-size="13" font-weight="900">🁢 গাণিতিক ইনডাকশন: ডোমিনো প্রমাণ</text>
  <rect x="15" y="42" width="130" height="48" rx="8" fill="#052e16" stroke="#22c55e" stroke-width="2"/>
  <text x="80" y="62" text-anchor="middle" fill="#4ade80" font-size="9" font-weight="700">ধাপ ১: Base Case</text>
  <text x="80" y="78" text-anchor="middle" fill="#4ade80" font-size="8">P(1) সত্য প্রমাণ করো</text>
  <line x1="150" y1="66" x2="185" y2="66" stroke="#a78bfa" stroke-width="2" marker-end="url(#arrDM2)"/>
  <rect x="190" y="42" width="160" height="48" rx="8" fill="#1e1b4b" stroke="#8b5cf6" stroke-width="2"/>
  <text x="270" y="62" text-anchor="middle" fill="#a78bfa" font-size="9" font-weight="700">ধাপ ২: Inductive Step</text>
  <text x="270" y="78" text-anchor="middle" fill="#a78bfa" font-size="8">P(k) সত্য → P(k+1) সত্য</text>
  <line x1="355" y1="66" x2="390" y2="66" stroke="#a78bfa" stroke-width="2" marker-end="url(#arrDM2)"/>
  <rect x="395" y="42" width="170" height="48" rx="8" fill="#052e16" stroke="#22c55e" stroke-width="2"/>
  <text x="480" y="62" text-anchor="middle" fill="#4ade80" font-size="9" font-weight="700">∴ সকল n-এর জন্য</text>
  <text x="480" y="78" text-anchor="middle" fill="#4ade80" font-size="8">P(n) সত্য ✓</text>
  <rect x="35" y="120" width="26" height="65" rx="4" fill="#052e16" stroke="#22c55e" stroke-width="2" transform="rotate(12 48 152)"/>
  <text x="48" y="130" text-anchor="middle" fill="#4ade80" font-size="10" transform="rotate(12 48 130)">P(1)</text>
  <rect x="78" y="118" width="26" height="65" rx="4" fill="#1e1b4b" stroke="#8b5cf6" stroke-width="2"/>
  <text x="91" y="128" text-anchor="middle" fill="#a78bfa" font-size="10">P(2)</text>
  <rect x="121" y="118" width="26" height="65" rx="4" fill="#1e1b4b" stroke="#8b5cf6" stroke-width="2"/>
  <text x="134" y="128" text-anchor="middle" fill="#a78bfa" font-size="10">P(3)</text>
  <rect x="164" y="118" width="26" height="65" rx="4" fill="#1e1b4b" stroke="#8b5cf6" stroke-width="2"/>
  <text x="177" y="128" text-anchor="middle" fill="#a78bfa" font-size="10">P(4)</text>
  <text x="210" y="155" text-anchor="middle" fill="#64748b" font-size="14">...</text>
  <rect x="232" y="118" width="26" height="65" rx="4" fill="#1e1b4b" stroke="#8b5cf6" stroke-width="2"/>
  <text x="245" y="128" text-anchor="middle" fill="#a78bfa" font-size="10">P(k)</text>
  <rect x="275" y="118" width="26" height="65" rx="4" fill="#1e1b4b" stroke="#8b5cf6" stroke-width="2"/>
  <text x="288" y="128" text-anchor="middle" fill="#a78bfa" font-size="10">P(k+1)</text>
  <text x="318" y="155" text-anchor="middle" fill="#64748b" font-size="14">...</text>
  <rect x="340" y="118" width="26" height="65" rx="4" fill="#1e1b4b" stroke="#8b5cf6" stroke-width="2"/>
  <text x="353" y="128" text-anchor="middle" fill="#a78bfa" font-size="10">P(n)</text>
  <rect x="400" y="115" width="165" height="75" rx="8" fill="#0f172a" stroke="#fbbf24" stroke-width="1.5"/>
  <text x="482" y="135" text-anchor="middle" fill="#fcd34d" font-size="8" font-weight="700">ক্লাসিক উদাহরণ</text>
  <text x="482" y="153" text-anchor="middle" fill="#e2e8f0" font-size="9">1+2+...+n = n(n+1)/2</text>
  <text x="482" y="170" text-anchor="middle" fill="#cbd5e1" font-size="10">n=1: 1(2)/2 = 1 ✓</text>
  <text x="482" y="183" text-anchor="middle" fill="#cbd5e1" font-size="10">k→k+1: সূত্র মেলে ✓</text>
  <rect x="15" y="208" width="550" height="28" rx="6" fill="#0f172a" stroke="#8b5cf6" stroke-width="1"/>
  <text x="290" y="226" text-anchor="middle" fill="#a78bfa" font-size="8">💡 দুটি ধাপ প্রমাণ করো — অসীম সত্য গাণিতিকভাবে নিশ্চিত! Recursion = induction in code.</text>
</svg>
</div>
<div class="svg-caption">চিত্র: গাণিতিক ইনডাকশন — Base Case (প্রথম ডোমিনো পড়ে) ও Inductive Step (প্রতিটি পরের ডোমিনো ফেলে) থেকে সব ডোমিনো পড়ে। দুটি ধাপে অসীম সত্য প্রমাণ।</div>

<div class="secret-box">🁢 <strong>ইনডাকশন = ডোমিনোর গাণিতিক প্রমাণ।</strong> দুটি ধাপ — ভিত্তি ও ধাপ। এক থেকে অসীম। কিন্তু কী যদি সত্যকে প্রমাণ করার সরাসরি উপায় না থাকে? কী যদি সত্যকে তার বিপরীত থেকে প্রমাণ করতে হয়? সেই যাত্রা — পরের দরজায়।</div>`,
  senior: {
    title: "Mathematical Induction এক নজরে",
    body: `<table class="kv-table"><tr><th>ধারণা</th><th>বিবরণ</th></tr>
<tr><td class="hl">Base Case</td><td>P(১) সত্য — প্রথম ডোমিনো</td></tr>
<tr><td class="hl">Inductive Step</td><td>P(k) → P(k+১) — প্রতিটি পরের ডোমিনো</td></tr>
<tr><td class="hl">Weak Induction</td><td>শুধু P(k) ধরে নাও</td></tr>
<tr><td class="hl">Strong Induction</td><td>P(১) থেকে P(k) সব ধরে নাও</td></tr>
<tr><td class="hl">Structural Induction</td><td>গাছ/recursive structure-এ</td></tr>
<tr><td class="hl">Σi = n(n+১)/২</td><td>ক্লাসিক উদাহরণ</td></tr>
<tr><td class="hl">Recursion</td><td>base case + recursive call = ইনডাকশন</td></tr></table>`
  }
});

doors.push({
  num: 3,
  icon: "🔍",
  color: "#8b5cf6",
  name: "বিপরীত থেকে সত্য",
  subtitle: "Truth from the Opposite",
  tech: "Proof by Contradiction — Euclid (√2 irrational, ~300 BCE), contrapositive, proof by exhaustion",
  spirit: "বুরহান — প্রমাণ, অসম্ভব থেকে সম্ভব প্রমাণ",
  secret: "অসম্ভব ধরে নাও, তারপর দেখাও যে অসম্ভব। যদি বিপরীত অসম্ভব হয়, তবে মূল সত্য। এটাই কন্ট্রাডিকশন — চিৎ করে সত্যকে ধরা।",
  recall: {
    q: " √২ অমূলদ প্রমাণ করো contradiction দিয়ে।",
    qen: "Prove √2 is irrational using contradiction.",
    a: "ধরো √২ = p/q (মূলদ, সরল ভগ্নাংশ)। তবে p² = ২q² — p² জোড়, তাই p জোড়। p=২k → ৪k²=২q² → q²=২k² — q জোড়। কিন্তু p ও q উভয় জোড় হলে ভগ্নাংশ সরল নয়! অন্তর্বিরোধ।",
    aen: "Assume √2 = p/q (simplified). Then p²=2q² — p is even. p=2k → q²=2k² — q is also even. But both even contradicts simplified fraction! ∴ √2 is irrational."
  },
  story: `<p class="scene-setting">আলেকজান্দ্রিয়া, ৩০০ খ্রিস্টপূর্ব। একটি সাদা চকের উপর একটি সমীকরণ: √২ = p/q। ইউক্লিড জানতেন এটা ভুল। কিন্তু সরাসরি প্রমাণ কঠিন। তার উপায়? ধরে নাও সত্য — তারপর দেখাও এটা অসম্ভব। যদি বিপরীত অসম্ভব হয়, মূল সত্য হতে বাধ্য। এটাই কন্ট্রাডিকশন — অন্ধকার থেকে আলো বের করা।</p>
<p class="scene-setting en">Alexandria, 300 BCE. On white chalk: √2 = p/q. Euclid knew this was false. But direct proof is hard. His method? Assume true — then show it is impossible. If the opposite is impossible, the original must be true. This is contradiction — extracting light from darkness.</p>

<div class="dialogue"><strong>প্রমাণ-কারিগর জাইদ:</strong> ইউসুফ (Door ২) তোমাকে ইনডাকশন দিয়েছেন — ধাপে ধাপে। কিন্তু কিছু সত্য ধাপে প্রমাণ করা যায় না। সেগুলোকে উল্টে ধরতে হয়। √২ অমূলদ — এটা সরাসরি বলা কঠিন। কিন্তু ধরে নাও মূলদ। তাহলে p/q = √২, যেখানে p ও q সহমৌলিক। উভয়কে ২ দিয়ে ভাগ যায় না। কিন্তু গাণিতিকভাবে — উভয়কে ২ দিয়ে ভাগ যায়! অন্তর্বিরোধ। সহমৌলিক কিন্তু ভাগ যায়? অসম্ভব! তাই √২ মূলদ হতে পারে না।</div>
<div class="dialogue en"><strong>Proof Artisan Zaid:</strong> Yusuf (Door 2) gave you induction — step by step. But some truths cannot be proven stepwise. They must be flipped. √2 irrational — hard to say directly. But assume rational: p/q, coprime. Then p²=2q² — p even, q even. Coprime but both even? Impossible! ∴ √2 cannot be rational.</div>

<div class="code-block"># ── STEP 1: The √2 irrational proof (step by step) ──
# One of the most beautiful proofs in mathematics.

sqrt2_proof = """
PROOF: √2 IS IRRATIONAL (by contradiction)

CLAIM: √2 cannot be written as p/q (ratio of two integers).

PROOF:
  Step 1: Assume the OPPOSITE — √2 IS rational.
    → √2 = a/b where a, b are integers with no common factor (gcd=1)

  Step 2: Square both sides.
    → 2 = a²/b²
    → a² = 2b²

  Step 3: a² = 2b² means a² is EVEN.
    → If a² is even, then a is even (proven separately).
    → So a = 2k for some integer k.

  Step 4: Substitute a = 2k.
    → (2k)² = 2b²
    → 4k² = 2b²
    → b² = 2k²

  Step 5: b² = 2k² means b² is EVEN.
    → If b² is even, then b is even.
    → So b = 2m for some integer m.

  Step 6: Both a AND b are even.
    → Both divisible by 2.
    → But we assumed gcd(a,b) = 1 (no common factor)!

  CONTRADICTION! a and b both even means gcd ≥ 2.

  Therefore, √2 CANNOT be rational.
  √2 is irrational. ∎

This proof is ~2500 years old (Pythagoreans, ~500 BCE).
The discoverer (Hippasus) was supposedly drowned for revealing it!
"""

print(sqrt2_proof)</div>

<div class="code-block"># ── STEP 2: Verification and approximation ──
# Python can't prove irrationality, but can verify the claim computationally.

verification = """
COMPUTATIONAL VERIFICATION:

We can't prove irrationality by computer (infinite search space).
But we can verify that no SMALL p/q equals √2.

Also: continued fraction expansion of √2 is INFINITE and NON-REPEATING,
which is a hallmark of irrational numbers.

√2 ≈ 1.4142135623730950488...

CONTINUED FRACTION:
  √2 = 1 + 1/(2 + 1/(2 + 1/(2 + ...)))
  → Infinite non-repeating → irrational
"""

print(verification)

# PYTHON: Search for rational √2:
rational_search = """
from math import isqrt

# Search: does any p/q = √2 for q up to 1,000,000?
def find_rational_sqrt2(max_q=1000000):
    for q in range(1, max_q):
        p = isqrt(2 * q * q)  # nearest integer to √(2q²)
        if p * p == 2 * q * q:  # exact match?
            return p, q         # Found! (never happens)
    return None                 # Not found → irrational

result = find_rational_sqrt2(max_q=100000)
print(f"Search result: {result}")  # None → no rational √2 found

# Best rational approximations (continued fraction convergents):
# 1/1, 3/2, 7/5, 17/12, 41/29, 99/70, 239/169, ...
# These get closer but NEVER equal √2.

convergents = [(1,1), (3,2), (7,5), (17,12), (41,29), (99,70)]
for p, q in convergents:
    print(f"  {p}/{q} = {p/q:.10f}")  # approaches √2 but never equals
# √2 = 1.41421356...
"""

print(rational_search)</div>

<div class="code-block"># ── STEP 3: Why does this proof work? ──
# Understanding the key insight.

insight = """
KEY INSIGHT OF THE PROOF:

The proof hinges on ONE fact:
  "If a² is even, then a is even"

Why is this true? (Proved by contrapositive in Door 2):
  Contrapositive: "If a is odd, then a² is odd"
    a odd → a = 2k+1
    a² = (2k+1)² = 4k² + 4k + 1 = 2(2k²+2k) + 1 → odd ✓

  So: a² even → a even (contrapositive of above) ✓

CHAIN OF LOGIC:
  √2 = a/b (assumption)
  → a² = 2b² (squaring)
  → a² even → a even (key fact)
  → a = 2k
  → 4k² = 2b² → b² = 2k²
  → b² even → b even (same key fact)
  → Both even → gcd ≥ 2 → CONTRADICTS gcd = 1

BEAUTY OF THIS PROOF:
  → Only uses basic arithmetic (no advanced math)
  → Proof by contradiction is elegant
  → Result is profound: not everything is rational
  → Opened the door to irrational numbers, real numbers, infinity

GENERALIZATION:
  Same technique proves √3, √5, √7, ... are ALL irrational.
  (Only perfect squares have rational roots: √4 = 2, √9 = 3, etc.)
"""

print(insight)</div>

<div class="code-block"># ── STEP 4: Other famous irrational numbers ──
# Beyond √2 — the world of irrationals.

irrationals = {
    "√2": {
        "value": "1.41421356...",
        "proof": "Contradiction (this door)",
        "discovered": "~500 BCE (Pythagoreans)",
    },
    "√3": {
        "value": "1.73205081...",
        "proof": "Same technique as √2",
        "discovered": "Ancient Greece",
    },
    "π (pi)": {
        "value": "3.14159265...",
        "proof": "Lambert, 1761 (using continued fractions)",
        "discovered": "Known ancient, proved irrational 1761",
    },
    "e (Euler's number)": {
        "value": "2.71828182...",
        "proof": "Euler, 1737",
        "discovered": "Euler, 1737",
    },
    "φ (golden ratio)": {
        "value": "1.61803398...",
        "proof": "(1+√5)/2, since √5 is irrational",
        "discovered": "Ancient Greeks",
    },
    "ln(2)": {
        "value": "0.69314718...",
        "proof": "Euler",
        "discovered": "18th century",
    },
}

print("FAMOUS IRRATIONAL NUMBERS:")
for num, info in irrationals.items():
    print(f"\\n  {num}")
    for key, value in info.items():
        print(f"    {key}: {value}")

# MIND-BLOWING FACT:
mind_blowing = """
ALMOST ALL numbers are irrational!

Counting:
  Rational numbers: COUNTABLY infinite (can be listed)
  Real numbers: UNCOUNTABLY infinite (cannot be listed)
  → Irrationals: uncountably infinite
  → Rationals: countably infinite

The probability that a random real number is rational = 0.
(Almost surely, a random number is irrational.)

Yet we rarely encounter irrationals in daily life
because we work with rationals (fractions, decimals).
"""
print(mind_blowing)</div>

<div class="code-block"># ── STEP 5: Rational vs irrational in computing ──
# Why this matters for programmers.

computing = """
RATIONAL VS IRRATIONAL IN CODE:

FLOATING POINT:
  Computers store numbers as floating point (IEEE 754).
  → Only rational numbers can be represented exactly.
  → √2, π, e are APPROXIMATED (not exact).

  0.1 + 0.2 ≠ 0.3 in floating point!
  >>> 0.1 + 0.2
  0.30000000000000004

WHY? 0.1 in binary is an infinite repeating fraction:
  0.1 (decimal) = 0.0001100110011... (binary)
  → Truncated → precision loss

PYTHON:
  # Use fractions for exact rational arithmetic:
  from fractions import Fraction

  a = Fraction(1, 10)  # exactly 1/10
  b = Fraction(2, 10)  # exactly 2/10
  print(a + b)          # Fraction(3, 10) — exact!

  # Compare with float:
  print(0.1 + 0.2 == 0.3)        # False (floating point error)
  print(Fraction(1,10) + Fraction(2,10) == Fraction(3,10))  # True

USE SYMBOLIC MATH (sympy):
  import sympy

  sqrt2 = sympy.sqrt(2)
  print(sqrt2 ** 2)  # 2 (exact, not 1.9999...)

WHY IT MATTERS:
  → Financial calculations: use Decimal (exact, not float)
  → Scientific computing: understand precision limits
  → Cryptography: exact integer arithmetic (no floats)
  → Graphics: floating point is "good enough" (but not exact)
"""

print(computing)</div>

<div class="code-block"># ── STEP 6: Proof extensions and best practices ──
# Generalize the technique and apply it.

extensions = """
GENERALIZING THE √2 PROOF:

The same technique proves √n is irrational for any non-perfect-square n.

PROOF SKETCH (√3 is irrational):
  Assume √3 = a/b (reduced)
  → 3 = a²/b² → a² = 3b²
  → a² divisible by 3 → a divisible by 3
  → a = 3k → 9k² = 3b² → b² = 3k²
  → b² divisible by 3 → b divisible by 3
  → Both divisible by 3 → contradicts gcd(a,b)=1
  → √3 is irrational ∎

KEY LEMMA: "If p is prime and p | a², then p | a"
  → Fundamental theorem of arithmetic (unique factorization)
  → If prime p divides a², then p divides a

BEST PRACTICES FOR PROOFS:
  ☐ State the claim clearly
  ☐ Choose the right technique (direct/contradiction/induction)
  ☐ Check base cases (for induction)
  ☐ Look for hidden assumptions
  ☐ Verify with examples (Python)
  ☐ Check edge cases
  ☐ Write clearly (others should understand)
  ☐ QED marker (∎ or Q.E.D.) at the end
  ☐ Peer review (have someone check your proof)
  ☐ Practice — proofs get easier with experience

PROOF TECHNIQUE SELECTION:
  Direct: when derivation is straightforward
  Contradiction: for non-existence, irrationality
  Induction: for natural numbers, recursion
  Contrapositive: when direct is hard
  Cases: when there are few possibilities
"""

print(extensions)

# SUMMARY TABLE:
# ┌──────────────────┬──────────────────────────────────┐
# │ Number           │ Type                            │
# ├──────────────────┼──────────────────────────────────┤
# │ Integers         │ Rational (e.g., 3, -7, 0)      │
# │ Fractions        │ Rational (e.g., 1/2, 3/4)      │
# │ √2, √3, √5      │ Irrational                      │
# │ π, e             │ Irrational (transcendental)     │
# │ φ (golden ratio) │ Irrational                      │
# │ Terminating dec. │ Rational (0.25 = 1/4)          │
# │ Repeating dec.   │ Rational (0.333... = 1/3)      │
# │ Non-repeating    │ Irrational                      │
# └──────────────────┴──────────────────────────────────┘</div>

<div class="callout info"><span class="co-icon">📐</span><div><strong>কন্ট্রাপোজিটিভ (Contrapositive):</strong> "P → Q" প্রমাণ করতে কঠিন? প্রমাণ করো "¬Q → ¬P"। এগুলো সমতুল্য! "যদি বৃষ্টি হয়, রাস্তা ভেজা" প্রমাণ করতে কঠিন? প্রমাণ করো: "রাস্তা শুকনো হলে বৃষ্টি হয়নি।" এটাই contrapositive — সমান কিন্তু সহজ।</div></div>

<div class="verse">بَلْ نَقْذِفُ بِالْحَقِّ عَلَى الْبَاطِلِ فَيَدْمَغُهُ</div>
<div style="font-size:.85rem;color:var(--ink-dim);text-align:center;margin-bottom:1rem">"বরং আমরা সত্যকে মিথ্যার উপর নিক্ষেপ করি, ফলে তা মিথ্যাকে চূর্ণ করে।" — কুরআন ২১:১৮</div>

<p class="scene-setting">"সত্যকে মিথ্যার উপর নিক্ষেপ" — এটাই কন্ট্রাডিকশন! মিথ্যা ধরে নাও, তারপর সত্য দিয়ে তাকে চূর্ণ করো। বুরহান — প্রমাণের শক্তি এখানে। সরাসরি নয়, বরং অন্তর্বিরোধ থেকে। মিথ্যা যে মিথ্যা — তা নিজেই প্রমাণ।</p>

<div class="callout tip"><span class="co-icon">🔗</span><div><strong>Book ৩৩ (Loom of Reason) Door ৫ (Bayesian):</strong> সত্য প্রমাণ করা = belief আপডেট। কন্ট্রাডিকশন একটি শক্তিশালী প্রমাণ কারণ এটা বিশ্বাসকে ১০০%-এ নিয়ে যায়। Book ৪১ Door ৩: টuring machine-এর halting problem-ও contradiction দিয়ে প্রমাণিত!</div></div>

<div class="svg-diagram">
<svg viewBox="0 0 580 250" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto">
  <defs>
    <marker id="arrDM3" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
      <path d="M0,0 L8,4 L0,8 Z" fill="#a78bfa"/>
    </marker>
    <marker id="arrDM3r" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
      <path d="M0,0 L8,4 L0,8 Z" fill="#f87171"/>
    </marker>
    <marker id="arrDM3g" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
      <path d="M0,0 L8,4 L0,8 Z" fill="#22c55e"/>
    </marker>
  </defs>
  <text x="290" y="22" text-anchor="middle" fill="#e2e8f0" font-size="13" font-weight="900">🔍 কন্ট্রাডিকশন: বিপরীত থেকে সত্য</text>
  <rect x="20" y="40" width="150" height="45" rx="8" fill="#1e1b4b" stroke="#8b5cf6" stroke-width="2"/>
  <text x="95" y="58" text-anchor="middle" fill="#a78bfa" font-size="8" font-weight="700">ধরো বিপরীত সত্য</text>
  <text x="95" y="74" text-anchor="middle" fill="#c084fc" font-size="8">√2 = p/q (মূলদ)</text>
  <line x1="95" y1="88" x2="95" y2="110" stroke="#a78bfa" stroke-width="2" marker-end="url(#arrDM3)"/>
  <rect x="20" y="115" width="150" height="45" rx="8" fill="#0f172a" stroke="#fbbf24" stroke-width="2"/>
  <text x="95" y="133" text-anchor="middle" fill="#fcd34d" font-size="8" font-weight="700">গাণিতিক ধাপ</text>
  <text x="95" y="149" text-anchor="middle" fill="#e2e8f0" font-size="8">p² = 2q²</text>
  <line x1="95" y1="163" x2="95" y2="185" stroke="#f87171" stroke-width="2" marker-end="url(#arrDM3r)"/>
  <rect x="15" y="190" width="160" height="45" rx="8" fill="#450a0a" stroke="#f87171" stroke-width="2"/>
  <text x="95" y="208" text-anchor="middle" fill="#fca5a5" font-size="8" font-weight="700">⊥ অন্তর্বিরোধ!</text>
  <text x="95" y="224" text-anchor="middle" fill="#fca5a5" font-size="10">p ও q উভয় জোড় — সহমৌলিক নয়</text>
  <line x1="175" y1="212" x2="220" y2="115" stroke="#22c55e" stroke-width="2" marker-end="url(#arrDM3g)" stroke-dasharray="4,3"/>
  <rect x="225" y="90" width="170" height="50" rx="8" fill="#052e16" stroke="#22c55e" stroke-width="2"/>
  <text x="310" y="110" text-anchor="middle" fill="#4ade80" font-size="9" font-weight="700">∴ মূল সত্য</text>
  <text x="310" y="128" text-anchor="middle" fill="#4ade80" font-size="8">√2 অমূলদ ✓</text>
  <rect x="225" y="155" width="340" height="80" rx="8" fill="#0f172a" stroke="#8b5cf6" stroke-width="1.5"/>
  <text x="395" y="175" text-anchor="middle" fill="#a78bfa" font-size="9" font-weight="700">কন্ট্রাপোজিটিভ: সমতুল্য প্রমাণ</text>
  <text x="395" y="195" text-anchor="middle" fill="#e2e8f0" font-size="8">P → Q প্রমাণ কঠিন?</text>
  <text x="395" y="210" text-anchor="middle" fill="#7dd3fc" font-size="8">প্রমাণ করো: ¬Q → ¬P (সমতুল্য!)</text>
  <text x="395" y="225" text-anchor="middle" fill="#cbd5e1" font-size="10">"রাস্তা শুকনো → বৃষ্টি হয়নি"</text>
  <rect x="410" y="40" width="155" height="40" rx="8" fill="#1e3a5f" stroke="#22d3ee" stroke-width="1.5"/>
  <text x="487" y="58" text-anchor="middle" fill="#7dd3fc" font-size="8" font-weight="700">বিখ্যাত প্রয়োগ</text>
  <text x="487" y="73" text-anchor="middle" fill="#cbd5e1" font-size="10">Turing Halting Problem</text>
</svg>
</div>
<div class="svg-caption">চিত্র: কন্ট্রাডিকশন পদ্ধতি — বিপরীত ধরে নাও, গাণিতিক ধাপে অন্তর্বিরোধ খুঁজে পাও, তাহলে মূল সত্য প্রমাণিত। √2 অমূলদ প্রমাণ এভাবেই করা হয়।</div>

<div class="secret-box">🔍 <strong>কন্ট্রাডিকশন = মিথ্যা থেকে সত্য বের করা।</strong> ধরে নাও বিপরীত → দেখাও অসম্ভব → মূল সত্য। ইউক্লিড এটা √২-এ করেছিলেন, টুরিং halting problem-এ করেছিলেন। এখন তুমি জানো দুটি প্রমাণ — ইনডাকশন ও কন্ট্রাডিকশন। পরের দরজায় — সত্যের সবচেয়ে পরিচিত ভিত্তি: সেট তত্ত্ব।</div>`,
  senior: {
    title: "Proof Techniques এক নজরে",
    body: `<table class="kv-table"><tr><th>কৌশল</th><th>কখন ব্যবহার</th></tr>
<tr><td class="hl">Direct Proof</td><td>সরাসরি — P থেকে Q</td></tr>
<tr><td class="hl">Contradiction</td><td>¬P ধরে নাও → অন্তর্বিরোধ</td></tr>
<tr><td class="hl">Contrapositive</td><td>¬Q → ¬P (সমতুল্য P → Q)</td></tr>
<tr><td class="hl">Exhaustion</td><td>সব কেস চেক করো (finite)</td></tr>
<tr><td class="hl">Euclid √২</td><td>p,q সহমৌলিক কিন্তু উভয় জোড় → contradiction</td></tr></table>`
  }
});

doors.push({
  num: 4,
  icon: "⊇",
  color: "#8b5cf6",
  name: "সমাহারের জগৎ",
  subtitle: "The World of Sets",
  tech: "Set Theory — Cantor (1874), union/intersection/difference, power set, cardinality, Cantor's diagonal argument",
  spirit: "জামা — সমাবেশ, সবকিছুর একত্র সংগ্রহ",
  secret: "সেট = একটি সংগ্রহ। Union (∪) যোগ করে, intersection (∩) মিল খুঁজে, difference (∖) বিয়োগ করে। কিন্তু সত্যিকারের বিস্ময় — কিছু অসীম অন্য অসীমের চেয়ে বড়। ক্যান্টর এটা প্রমাণ করেছিলেন।",
  recall: {
    q: " পাওয়ার সেট কী? |P(S)| কত?",
    qen: "What is a power set? What is |P(S)|?",
    a: "পাওয়ার সেট = সেটের সব উপসেটের সংগ্রহ। |S| = n হলে |P(S)| = ২ⁿ। যেমন {a,b} এর পাওয়ার সেট: ∅, {a}, {b}, {a,b} — ৪টি।",
    aen: "Power set = collection of all subsets. If |S| = n, then |P(S)| = 2ⁿ. E.g., {a,b} has power set: ∅, {a}, {b}, {a,b} — 4 elements."
  },
  story: `<p class="scene-setting">হ্যালে, জার্মানি, ১৮৭৪। Georg Cantor একটি বিপ্লবাত্মক চিন্তা নিয়ে বসে আছেন। অসীম — কি সব অসীম সমান? তার উত্তর: না! প্রাকৃতিক সংখ্যার সেট ℵ₀ (aleph-null) — কিন্তু বাস্তব সংখ্যার সেট ২^ℵ₀ — বড়! একই অসীম কিন্তু ভিন্ন আকার। গণিতজগত এই আবিষ্কারে কাঁপছে।</p>
<p class="scene-setting en">Halle, Germany, 1874. Georg Cantor contemplates a revolutionary idea. Infinity — are all infinities equal? His answer: No! Natural numbers have cardinality ℵ₀ (aleph-null) — but real numbers have 2^ℵ₀ — larger! Same infinity, different sizes. Mathematics trembles.</p>

<div class="dialogue"><strong>সমাবেশ কারিগর রিয়াদ:</strong> জাইদ (Door ৩) তোমাকে প্রমাণ দিয়েছেন। এখন দেখো প্রমাণের কাঠামো — সেট। একটি সেট একটি বাক্সের মতো। ভেতরে কিছু জিনিস। A = {১,২,৩}। দুটি বাক্সের মিল দেখতে চাও? Intersection: A ∩ B। সব জিনিস একসাথে? Union: A ∪ B। A-তে আছে কিন্তু B-তে নেই? Difference: A ∖ B। কিন্তু সবচেয়ে বিস্ময়কর — একটি সেটের সব উপসেট: পাওয়ার সেট। ৩টি উপাদানের সেটে ৮টি উপসেট। n উপাদানে ২ⁿ। সর্বদা বড়।</div>
<div class="dialogue en"><strong>Assembly Artisan Riyad:</strong> Zaid (Door 3) gave you proofs. Now see the structure of proof — sets. A set is like a box. A = {1,2,3}. Common elements? Intersection. All together? Union. In A but not B? Difference. Most surprising — power set: all subsets. 3 elements → 8 subsets. n elements → 2ⁿ. Always larger.</div>

<div class="code-block"># ── STEP 1: Set theory basics ──
# Sets are the foundation of all mathematics.

set_basics = """
SET THEORY:

A SET is an unordered collection of DISTINCT elements.
  A = {1, 2, 3, 4}
  B = {3, 4, 5, 6}

SET OPERATIONS:
  UNION (∪):        A ∪ B = {1,2,3,4,5,6}  (everything in either)
  INTERSECTION (∩): A ∩ B = {3, 4}          (in both)
  DIFFERENCE (−):   A − B = {1, 2}          (in A but not B)
  SYMMETRIC DIFF (△): A △ B = {1,2,5,6}    (in exactly one)
  COMPLEMENT (A'): Everything NOT in A (relative to universe)

SUBSET (⊆): A ⊆ B means every element of A is in B
PROPER SUBSET (⊂): A ⊂ B means A ⊆ B but A ≠ B

SPECIAL SETS:
  ∅ (empty set): {} — contains nothing
  ℕ: natural numbers {1, 2, 3, ...}
  ℤ: integers {..., -2, -1, 0, 1, 2, ...}
  ℚ: rational numbers (fractions)
  ℝ: real numbers (including irrationals)
  ℂ: complex numbers

POWER SET P(A):
  Set of ALL subsets of A.
  |P(A)| = 2^|A|
  A = {1, 2} → P(A) = {∅, {1}, {2}, {1,2}} → 4 = 2²
"""

print(set_basics)

# PYTHON: Set operations:
set_code = """
A = {1, 2, 3, 4}
B = {3, 4, 5, 6}

print(A | B)    # Union: {1,2,3,4,5,6}
print(A & B)    # Intersection: {3,4}
print(A - B)    # Difference: {1,2}
print(A ^ B)    # Symmetric diff: {1,2,5,6}

# Subset check:
print({1,2} <= A)     # True ({1,2} ⊆ A)
print({1,2} < A)      # True (proper subset)

# Power set:
from itertools import chain, combinations

def powerset(s):
    return list(chain.from_iterable(
        combinations(s, r) for r in range(len(s)+1)))

print(powerset({1, 2}))
# [(), (1,), (2,), (1, 2)] — 4 = 2²
"""

print(set_code)</div>

<div class="code-block"># ── STEP 2: Relations and functions ──
# How elements of sets relate to each other.

relations = """
RELATIONS:

A RELATION R from set A to set B is a SUBSET of A × B (cartesian product).
  A × B = {(a, b) : a ∈ A, b ∈ B}

EXAMPLE:
  A = {1, 2, 3}, B = {a, b}
  A × B = {(1,a), (1,b), (2,a), (2,b), (3,a), (3,b)}
  R = {(1,a), (2,b)} is a relation

PROPERTIES OF RELATIONS (on A × A):
  REFLEXIVE:     (a, a) ∈ R for all a (every element relates to itself)
  SYMMETRIC:     if (a,b) ∈ R then (b,a) ∈ R
  TRANSITIVE:    if (a,b) ∈ R and (b,c) ∈ R then (a,c) ∈ R
  ANTISYMMETRIC: if (a,b) ∈ R and (b,a) ∈ R then a = b

EQUIVALENCE RELATION:
  Reflexive + Symmetric + Transitive
  → Partitions set into equivalence classes
  → Example: "same birthday" (reflexive, symmetric, transitive)

PARTIAL ORDER:
  Reflexive + Antisymmetric + Transitive
  → Ranking/hierarchy (not all elements comparable)
  → Example: ⊆ on sets, ≤ on numbers

FUNCTIONS:
  A special relation where each input maps to EXACTLY ONE output.
  f: A → B means f maps each element of A to exactly one element of B.
  → A = domain, B = codomain
  → f(x) = x² maps ℝ → ℝ
"""

print(relations)

# PYTHON: Relations and functions:
rel_code = """
# Cartesian product:
A = {1, 2, 3}
B = {'a', 'b'}
product = [(a, b) for a in A for b in B]
print(product)
# [(1,'a'), (1,'b'), (2,'a'), (2,'b'), (3,'a'), (3,'b')]

# A relation (subset of A×B):
R = {(1, 'a'), (2, 'b')}

# Check if relation is a function (each input has exactly one output):
def is_function(relation, domain):
    inputs = [pair[0] for pair in relation]
    return all(inputs.count(x) == 1 for x in domain) and set(inputs) == domain

print(is_function(R, A))    # False (3 has no mapping)
print(is_function({(1,'a'), (2,'a'), (3,'b')}, A))  # True

# Equivalence relation example: same remainder mod 3
def same_mod3(a, b):
    return a % 3 == b % 3

# Reflexive: same_mod3(a, a) → always True ✓
# Symmetric: same_mod3(a, b) → same_mod3(b, a) ✓
# Transitive: same_mod3(a,b) and same_mod3(b,c) → same_mod3(a,c) ✓
# → Equivalence relation! Partitions into {0,3,6,...}, {1,4,7,...}, {2,5,8,...}
"""

print(rel_code)</div>

<div class="code-block"># ── STEP 3: Cardinality and infinity ──
# Cantor's revolutionary insight: some infinities are bigger.

cardinality = """
CARDINALITY:

The SIZE of a set.
|A| = number of elements.

FINITE SETS:
  |{1,2,3}| = 3
  |∅| = 0

INFINITE SETS:
  |ℕ| = ℵ₀ (aleph-null, countably infinite)
  |ℤ| = ℵ₀ (integers = same size as naturals!)
  |ℚ| = ℵ₀ (rationals = same size as naturals!)
  |ℝ| = 2^ℵ₀ (reals = UNCOUNTABLY infinite, BIGGER than ℕ)

CANTOR'S DIAGONAL ARGUMENT:
  The reals are UNCOUNTABLE — bigger than the naturals.

  Proof sketch:
  Assume reals are countable (listable).
  List all reals between 0 and 1:
    r1 = 0.d11 d12 d13 ...
    r2 = 0.d21 d22 d23 ...
    r3 = 0.d31 d32 d33 ...
    ...

  Construct a new number r where the nth digit ≠ dnn.
  r differs from r1 in position 1, from r2 in position 2, etc.
  → r is NOT in the list!
  → The list was incomplete → reals are uncountable.

  CONTINUUM HYPOTHESIS:
  Is there an infinity BETWEEN ℵ₀ and 2^ℵ₀?
  → Gödel (1940) + Cohen (1963): cannot be proved or disproved
  → Independent of ZFC set theory!

  Different sizes of infinity! Mind-blowing.
"""

print(cardinality)</div>

<div class="code-block"># ── STEP 4: Russell's paradox and ZFC ──
# When sets break mathematics.

russell = """
RUSSELL'S PARADOX (1901):

"Let R be the set of all sets that do NOT contain themselves."
  → R = {S : S ∉ S}

Question: Does R contain itself?
  If R ∈ R → then by definition R ∉ R. CONTRADICTION!
  If R ∉ R → then by definition R ∈ R. CONTRADICTION!

This broke naive set theory.

ZFC (Zermelo-Fraenkel + Choice):
  Axiomatic set theory that avoids the paradox.
  → Sets can't be "too big" (no set of all sets)
  → Uses axioms to restrict what can be called a set
  → Foundation of modern mathematics

AXIOM OF CHOICE:
  "Given any collection of non-empty sets, you can pick
   one element from each."

  Seems obvious, but has COUNTERINTUITIVE consequences:
  → Banach-Tarski: a sphere can be decomposed and reassembled
    into TWO identical spheres (uses Axiom of Choice!)
  → Well-ordering theorem: every set can be well-ordered
    (but you might not be able to describe the ordering)

GÖDEL'S INCOMPLETENESS THEOREMS (1931):
  1. Any consistent formal system is INCOMPLETE
     (there are true statements that can't be proved)
  2. A system can't prove its own consistency

  → Mathematics has fundamental limits!
  → Not everything true can be proven.
"""

print(russell)</div>

<div class="code-block"># ── STEP 5: Sets in databases and programming ──
# Set theory everywhere in computing.

applications = """
SETS IN PROGRAMMING:

PYTHON SETS:
  A = {1, 2, 3}
  A.add(4)      # {1, 2, 3, 4}
  A.discard(2)  # {1, 3, 4}
  3 in A        # True (O(1) lookup!)
  len(A)        # 3

  → Sets for fast membership testing (O(1) vs O(n) for lists)
  → Remove duplicates: list(set([1,1,2,2,3])) → [1,2,3]

SQL = SET OPERATIONS:
  UNION:        SELECT ... UNION SELECT ...
  INTERSECT:    SELECT ... INTERSECT SELECT ...
  EXCEPT:       SELECT ... EXCEPT SELECT ...

  Each table is a SET of rows.
  Each SELECT is a set operation.

DJANGO ORM (set-like):
  queryset1 | queryset2   # union
  queryset1 & queryset2   # intersection
  queryset1.difference(queryset2)

FUNCTIONAL PROGRAMMING:
  map(f, list): apply function to each element (like a function relation)
  filter(pred, list): subset satisfying predicate
  reduce(f, list): collapse list to single value

VECTOR SPACES (ML):
  Vectors are elements of vector SPACES (sets with structure)
  → Each layer of a neural network is a function: ℝ^n → ℝ^m
  → Set theory underlies all of mathematics
"""

print(applications)

# PYTHON: Practical set usage:
practical_code = """
# Remove duplicates from a list:
names = ['Alice', 'Bob', 'Alice', 'Charlie', 'Bob']
unique = list(set(names))
# ['Alice', 'Bob', 'Charlie'] (order not guaranteed)

# Preserve order + deduplicate:
from collections import OrderedDict
unique_ordered = list(OrderedDict.fromkeys(names))
# ['Alice', 'Bob', 'Charlie'] (order preserved)

# Fast membership testing (set vs list):
big_list = list(range(1000000))
big_set = set(big_list)

import time

# List lookup: O(n) — slow:
start = time.time()
for _ in range(1000):
    _ = 999999 in big_list
print(f"List: {time.time()-start:.3f}s")

# Set lookup: O(1) — fast:
start = time.time()
for _ in range(1000):
    _ = 999999 in big_set
print(f"Set:  {time.time()-start:.3f}s")
# Set is ~1000x faster for membership testing!
"""

print(practical_code)</div>

<div class="code-block"># ── STEP 6: Set theory best practices ──
# Apply set theory effectively.

best_practices = [
    "Use Python sets for O(1) membership testing",
    "Use set operations instead of manual loops",
    "SQL operations mirror set theory (UNION, INTERSECT)",
    "Django Q objects enable set-like queries",
    "Remember: sets are UNORDERED (use dict/list if order matters)",
    "Power set has 2^n elements (exponential — be careful)",
    "Cartesian product A×B has |A|×|B| elements",
    "Functions are special relations (one output per input)",
    "Equivalence relations partition sets into classes",
    "Different infinities: ℕ < ℝ (countable < uncountable)",
    "Use frozenset for immutable, hashable sets",
    "Set comprehensions: {x**2 for x in range(10)}",
    "Symmetric difference: elements in exactly one set",
    "Subset/superset: <= and >= operators",
    "Cartesian product: itertools.product(A, B)",
]

print("SET THEORY BEST PRACTICES:")
for practice in best_practices:
    print(f"  ☐ {practice}")

# SUMMARY TABLE:
# ┌──────────────────┬──────────────────────────────────┐
# │ Operation        │ Python                          │
# ├──────────────────┼──────────────────────────────────┤
# │ Union (∪)       │ A | B                           │
# │ Intersection (∩)│ A & B                           │
# │ Difference (−)  │ A - B                           │
# │ Symmetric diff  │ A ^ B                           │
# │ Subset (⊆)     │ A <= B                          │
# │ Membership (∈) │ x in A (O(1))                   │
# │ Power set       │ 2^|A| elements                  │
# │ Cartesian prod  │ itertools.product(A, B)         │
# └──────────────────┴──────────────────────────────────┘</div>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>রাসেলের প্যারাডক্স (১৯০১):</strong> "সেট যার ভেতরে এমন সব সেট আছে যারা নিজেদের ধারণ করে না।" এই সেট কি নিজেকে ধারণ করে? হ্যাঁ হলে — না। না হলে — হ্যাঁ। অন্তর্বিরোধ! এটা থেকে জন্ম নিল ZFC সেট তত্ত্ব — কঠোর ভিত্তি।</div></div>

<div class="verse">وَإِنَّ لَكُمْ فِي الْأَنْعَامِ لَعِبْرَةً ۖ نُّسْقِيكُم مِّمَّا فِي بُطُونِهِ</div>
<div style="font-size:.85rem;color:var(--ink-dim);text-align:center;margin-bottom:1rem">"এবং তোমাদের জন্য গবাদি পশুতে শিক্ষা রয়েছে — আমরা তাদের পেটে যা আছে তা থেকে তোমাদের পান করাই।" — কুরআন ১৬:৬৬</div>

<p class="scene-setting">জামা — সমাবেশ। প্রতিটি গবাদি পশু একটি সেট — দুধ, মাংস, চামড়ার সমাবেশ। সমাবেশ থেকে নির্যাস। সেট তত্ত্বও তেমন — সংগ্রহ থেকে সত্য বের করা। ক্যান্টর দেখিয়েছিলেন — সংগ্রহের আকার ভিন্ন হতে পারে, এমনকি অসীম হলেও।</p>

<div class="callout tip"><span class="co-icon">🔗</span><div><strong>Book ৩০ (Architect's Compass) Door ২ (Sets):</strong> ভেক্টর ও সেট শিখেছিলে — এখানে সেট-এর গভীর তত্ত্ব। Book ৪১ (Clockwork of Thought) Door ১: ফর্মাল ভাষা = সেট অফ স্ট্রিং। Book ৩৯ (Databases) Door ২: SQL = সেট অপারেশন (UNION, INTERSECT)।</div></div>

<div class="svg-diagram">
<svg viewBox="0 0 580 250" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto">
  <text x="290" y="22" text-anchor="middle" fill="#e2e8f0" font-size="13" font-weight="900">⊇ সেট অপারেশন: ভেন ডায়াগ্রাম</text>
  <circle cx="200" cy="120" r="70" fill="#8b5cf6" fill-opacity="0.15" stroke="#8b5cf6" stroke-width="2.5"/>
  <circle cx="320" cy="120" r="70" fill="#22d3ee" fill-opacity="0.15" stroke="#22d3ee" stroke-width="2.5"/>
  <text x="160" y="90" text-anchor="middle" fill="#a78bfa" font-size="14" font-weight="900">A</text>
  <text x="165" y="105" text-anchor="middle" fill="#a78bfa" font-size="8">{1, 2, 3, 4}</text>
  <text x="360" y="90" text-anchor="middle" fill="#7dd3fc" font-size="14" font-weight="900">B</text>
  <text x="365" y="105" text-anchor="middle" fill="#7dd3fc" font-size="8">{3, 4, 5, 6}</text>
  <text x="260" y="125" text-anchor="middle" fill="#fcd34d" font-size="8" font-weight="700">A ∩ B</text>
  <text x="260" y="140" text-anchor="middle" fill="#fcd34d" font-size="10">{3, 4}</text>
  <rect x="20" y="205" width="115" height="35" rx="6" fill="#1e1b4b" stroke="#8b5cf6" stroke-width="1.5"/>
  <text x="77" y="220" text-anchor="middle" fill="#a78bfa" font-size="10" font-weight="700">A ∪ B (Union)</text>
  <text x="77" y="233" text-anchor="middle" fill="#cbd5e1" font-size="10">{1,2,3,4,5,6}</text>
  <rect x="145" y="205" width="115" height="35" rx="6" fill="#052e16" stroke="#22c55e" stroke-width="1.5"/>
  <text x="202" y="220" text-anchor="middle" fill="#4ade80" font-size="10" font-weight="700">A ∩ B (Intersection)</text>
  <text x="202" y="233" text-anchor="middle" fill="#4ade80" font-size="10">{3, 4}</text>
  <rect x="270" y="205" width="115" height="35" rx="6" fill="#450a0a" stroke="#f87171" stroke-width="1.5"/>
  <text x="327" y="220" text-anchor="middle" fill="#fca5a5" font-size="10" font-weight="700">A ∖ B (Difference)</text>
  <text x="327" y="233" text-anchor="middle" fill="#fca5a5" font-size="10">{1, 2}</text>
  <rect x="395" y="205" width="170" height="35" rx="6" fill="#0c4a6e" stroke="#fbbf24" stroke-width="1.5"/>
  <text x="480" y="220" text-anchor="middle" fill="#fcd34d" font-size="10" font-weight="700">পাওয়ার সেট: |P(S)| = 2ⁿ</text>
  <text x="480" y="233" text-anchor="middle" fill="#cbd5e1" font-size="10">{a,b} → ∅,{a},{b},{a,b} = 4</text>
  <rect x="415" y="45" width="150" height="140" rx="8" fill="#0f172a" stroke="#8b5cf6" stroke-width="1.5"/>
  <text x="490" y="65" text-anchor="middle" fill="#a78bfa" font-size="9" font-weight="700">সমীকরণসমূহ</text>
  <text x="425" y="85" fill="#e2e8f0" font-size="8">|A∪B| = |A|+|B|−|A∩B|</text>
  <text x="425" y="105" fill="#4ade80" font-size="8">= 4 + 4 − 2 = 6</text>
  <text x="425" y="130" fill="#7dd3fc" font-size="8">|A△B| = |A∪B|−|A∩B|</text>
  <text x="425" y="148" fill="#4ade80" font-size="8">= 6 − 2 = 4</text>
  <text x="425" y="170" fill="#fcd34d" font-size="10">SQL: UNION, INTERSECT,</text>
  <text x="425" y="182" fill="#fcd34d" font-size="10">EXCEPT = সেট অপারেশন!</text>
</svg>
</div>
<div class="svg-caption">চিত্র: ভেন ডায়াগ্রামে সেট অপারেশন — Union (যোগ), Intersection (মিল), Difference (পার্থক্য)। পাওয়ার সেট সর্বদা বড়: |P(S)| = 2ⁿ। SQL-এ এগুলো UNION, INTERSECT, EXCEPT।</div>

<div class="secret-box">⊇ <strong>সেট = সংগ্রহের গাণিতিক ভিত্তি।</strong> ∪ যোগ, ∩ মিল, ∖ পার্থক্য। পাওয়ার সেট সর্বদা বড় (২ⁿ)। কিন্তু সংগ্রহ বড়তে গিয়ে একটি প্রশ্ন জন্ম নেয় — কতভাবে সাজানো যায়? সেই উত্তর — পরের দরজায়।</div>`,
  senior: {
    title: "Set Theory এক নজরে",
    body: `<table class="kv-table"><tr><th>ধারণা</th><th>বিবরণ</th></tr>
<tr><td class="hl">Cantor (1874)</td><td>সেট তত্ত্বের জনক</td></tr>
<tr><td class="hl">Union ∪</td><td>A ও B-এর সব উপাদান</td></tr>
<tr><td class="hl">Intersection ∩</td><td>শুধু মিল থাকা উপাদান</td></tr>
<tr><td class="hl">Difference ∖</td><td>A-তে আছে, B-তে নেই</td></tr>
<tr><td class="hl">Power Set P(S)</td><td>সব উপসেট — |P(S)| = ২ⁿ</td></tr>
<tr><td class="hl">ℵ₀ < ২^ℵ₀</td><td>অসীমের ভিন্ন আকার</td></tr>
<tr><td class="hl">Russell Paradox</td><td>সেট যা নিজেকে ধারণ করে না</td></tr></table>`
  }
});

doors.push({
  num: 5,
  icon: "🎲",
  color: "#8b5cf6",
  name: "সাজানোর শিল্প",
  subtitle: "The Art of Arrangement",
  tech: "Combinatorics — permutations P(n,k), combinations C(n,k), inclusion-exclusion, birthday paradox, Pascal's triangle",
  spirit: "তাদবির — ব্যবস্থা, কতভাবে সাজানো যায়",
  secret: "সাজানোর দুটি প্রশ্ন — ক্রম গুরুত্বপূর্ণ (permutation P) নাকি নয় (combination C)। P(n,k) = n!/(n-k)!। C(n,k) = n!/(k!(n-k)!)। এই সূত্র প্রতিদিন কাজে লাগে — password সম্ভাবনা থেকে hash collision পর্যন্ত।",
  recall: {
    q: " P(n,k) এবং C(n,k)-এর সূত্র কী? পার্থক্য কী?",
    qen: "What are the formulas for P(n,k) and C(n,k)? What is the difference?",
    a: "P(n,k) = n!/(n-k)! — ক্রম গুরুত্বপূর্ণ। C(n,k) = n!/(k!(n-k)!) — ক্রম গুরুত্বহীন। C = P/k! — কারণ k! ভাবে সাজানো যায়।",
    aen: "P(n,k) = n!/(n-k)! — order matters. C(n,k) = n!/(k!(n-k)!) — order does not matter. C = P / k! because there are k! orderings."
  },
  story: `<p class="scene-setting">তুমি একটি রেস্তোরাঁয়। মেনুতে ৫টি খাবার। তুমি ৩টি বাছছ। কতভাবে? যদি ক্রম গুরুত্বপূর্ণ — P(৫,৩) = ৬০। কিন্তু যদি ক্রম গুরুত্বহীন (শুধু কোন ৩টি বেছেছ) — C(৫,৩) = ১০। একই ৩টি খাবার কতভাবে সাজানো যায়? ৩! = ৬। তাই ৬০ ÷ ৬ = ১০। এটাই কম্বিনেটরিক্স — গোনার শিল্প।</p>
<p class="scene-setting en">At a restaurant. 5 items on the menu. You choose 3. How many ways? If order matters — P(5,3) = 60. If order does not matter — C(5,3) = 10. Same 3 items can be arranged 3! = 6 ways. So 60 ÷ 6 = 10. This is combinatorics — the art of counting.</p>

<div class="dialogue"><strong>ব্যবস্থাপক নাদিয়া:</strong> রিয়াদ (Door ৪) তোমাকে সেট দিয়েছেন। এখন দেখো — সেট থেকে কতভাবে বাছাই করা যায়। জন্মদিনের প্যারাডক্স শুনেছ? ২৩ জন মানুষ এক ঘরে — ৫০% সম্ভাবনা দুজনের জন্মদিন মিলবে! মনে হয় অসম্ভব? C(২৩,২) = ২৫৩ জোড়া — প্রতিটি জোড়ায় ১/৩৬৫ সম্ভাবনা। ২৫৩ জোড়ায় অন্তত একটি মিলবে — ৫০%+। এটাই inclusion-exclusion — সম্ভাবনা যোগ করা।</div>
<div class="dialogue en"><strong>Arranger Nadia:</strong> Riyad (Door 4) gave you sets. Now see — how many ways to choose from a set. Birthday paradox: 23 people in a room — 50% chance two share a birthday! Seems impossible? C(23,2) = 253 pairs — each pair has 1/365 chance. 253 pairs — at least one match likely. This is inclusion-exclusion.</div>

<div class="code-block"># ── STEP 1: Counting principles ──
# The foundation of combinatorics: counting possibilities.

counting = """
COUNTING PRINCIPLES:

1. RULE OF SUM (OR):
   If task A has m ways, task B has n ways (mutually exclusive):
   Total = m + n

   Example: 3 red balls OR 5 blue balls → 3 + 5 = 8 choices

2. RULE OF PRODUCT (AND):
   If task A has m ways, task B has n ways (independent):
   Total = m × n

   Example: 3 shirts AND 4 pants → 3 × 4 = 12 outfits

3. INCLUSION-EXCLUSION:
   |A ∪ B| = |A| + |B| − |A ∩ B|

   Example: 30 take math, 25 take physics, 10 take both
   Total students = 30 + 25 − 10 = 45

4. PIGEONHOLE PRINCIPLE:
   If n items in m containers, n > m → at least one container has 2+ items

   Example: 367 people → at least 2 share a birthday (366 possible days)
"""

print(counting)

# PYTHON: Counting:
count_code = """
# Rule of product — password combinations:
charset = 62  # a-z, A-Z, 0-9
for length in [4, 6, 8, 12, 16]:
    combos = charset ** length
    print(f"{length}-char password: {combos:.2e} combinations")

# 4-char:  1.48e+07  (14 million — crackable instantly)
# 8-char:  2.18e+14  (218 trillion — hours)
# 12-char: 3.23e+21  (3 sextillion — years)
# 16-char: 4.77e+28  (uncrackable)

# Inclusion-exclusion:
math_students = 30
physics_students = 25
both = 10
total = math_students + physics_students - both
print(f"Total: {total}")  # 45
"""

print(count_code)</div>

<div class="code-block"># ── STEP 2: Permutations and combinations ──
# The two fundamental ways to count arrangements.

perm_comb = """
PERMUTATIONS (order matters):

P(n, k) = n! / (n-k)!
  "How many ways to arrange k items from n items (in order)?"

  Example: P(5, 3) = 5! / 2! = 60
  → Arrange 3 people from 5 in a row: 60 ways

  P(n, n) = n! (arrange all n items)
  → P(5, 5) = 5! = 120

COMBINATIONS (order doesn't matter):

C(n, k) = n! / (k! × (n-k)!)
  "How many ways to CHOOSE k items from n (order irrelevant)?"

  Example: C(5, 3) = 5! / (3! × 2!) = 10
  → Choose 3 people from 5 for a team: 10 ways

  C(n, k) = C(n, n-k)  (choosing k to include = choosing n-k to exclude)
  C(n, 0) = 1  (one way to choose nothing)
  C(n, 1) = n  (n ways to choose one)

WHEN TO USE WHICH:
  Permutation: ORDER matters (arranging seats, ranking, passwords)
  Combination: ORDER doesn't matter (teams, subsets, hands of cards)

EXAMPLE:
  "Password from letters ABCDEF" → PERMUTATION (order matters)
  "Lottery numbers" → COMBINATION (order doesn't matter)
  "Race podium" → PERMUTATION (1st, 2nd, 3rd are different)
  "Committee members" → COMBINATION (all equal)
"""

print(perm_comb)

# PYTHON: Permutations and combinations:
pc_code = """
from math import comb, perm, factorial

# Permutations:
print(perm(5, 3))   # 60 — arrange 3 from 5
print(perm(5, 5))   # 120 — 5! = all permutations
print(factorial(5)) # 120

# Combinations:
print(comb(5, 3))   # 10 — choose 3 from 5
print(comb(10, 0))  # 1 — choose nothing
print(comb(52, 5))  # 2598960 — poker hands

# Python itertools for actual generation:
from itertools import permutations, combinations

# All permutations of [1,2,3]:
for p in permutations([1, 2, 3]):
    print(p)
# (1,2,3), (1,3,2), (2,1,3), (2,3,1), (3,1,2), (3,2,1) → 6 = 3!

# All combinations of 2 from [1,2,3,4]:
for c in combinations([1, 2, 3, 4], 2):
    print(c)
# (1,2), (1,3), (1,4), (2,3), (2,4), (3,4) → 6 = C(4,2)
"""

print(pc_code)</div>

<div class="code-block"># ── STEP 3: The Birthday Paradox ──
# A surprising application of combinations.

birthday = """
THE BIRTHDAY PARADOX:

QUESTION: In a room of n people, what's the probability
that at least 2 share a birthday?

INTUITION: You'd think you need ~180 people (half of 365).

REALITY: With just 23 people, there's a 50.7% chance!
With 50 people: 97% chance.
With 70 people: 99.9% chance!

WHY? It's not about matching YOUR birthday.
It's about ANY two people matching — and there are C(n,2) pairs.

C(23, 2) = 253 pairs. Each pair has 1/365 chance of matching.
253 pairs × 1/365 ≈ 69% (rough estimate, actual is 50.7%)

CALCULATION:
  P(no match) = (365/365) × (364/365) × (363/365) × ... × ((365-n+1)/365)
  P(match) = 1 − P(no match)

  n=23: P(match) = 1 − (365! / (365^23 × 342!)) ≈ 0.507

APPLICATIONS:
  → Hash collisions (birthday attack on cryptography)
  → Birthday attack: 64-bit hash → ~2^32 keys for 50% collision
  → DNA matching, fingerprint collisions
  → "How many people until shared characteristic?"
"""

print(birthday)

# PYTHON: Birthday paradox:
birthday_code = """
def birthday_prob(n):
    \"\"\"Probability of at least one shared birthday among n people.\"\"\"
    p_no_match = 1.0
    for i in range(n):
        p_no_match *= (365 - i) / 365
    return 1 - p_no_match

for n in [10, 20, 23, 30, 50, 70, 100]:
    print(f"n={n:3d}: {birthday_prob(n)*100:.1f}% chance of shared birthday")

# Output:
# n= 10: 11.7%
# n= 20: 41.1%
# n= 23: 50.7%  ← only 23 people for 50%!
# n= 30: 70.6%
# n= 50: 97.0%
# n= 70: 99.9%
# n=100: 99.99997%

# Monte Carlo simulation (verify):
import random

def simulate_birthday(n, trials=10000):
    matches = 0
    for _ in range(trials):
        birthdays = [random.randint(1, 365) for _ in range(n)]
        if len(birthdays) != len(set(birthdays)):
            matches += 1
    return matches / trials

print(f"Simulation (n=23): {simulate_birthday(23)*100:.1f}%")
# Should be close to 50.7%
"""

print(birthday_code)</div>

<div class="code-block"># ── STEP 4: Binomial theorem and Pascal's triangle ──
# (a+b)^n expansion and binomial coefficients.

binomial = """
BINOMIAL THEOREM:

(a + b)^n = Σ C(n,k) × a^(n-k) × b^k  for k = 0 to n

EXAMPLES:
  (a + b)^0 = 1
  (a + b)^1 = a + b
  (a + b)^2 = a² + 2ab + b²            coefficients: 1, 2, 1
  (a + b)^3 = a³ + 3a²b + 3ab² + b³   coefficients: 1, 3, 3, 1
  (a + b)^4 = a⁴ + 4a³b + 6a²b² + 4ab³ + b⁴  coefficients: 1, 4, 6, 4, 1

PASCAL'S TRIANGLE:
         1
        1 1
       1 2 1
      1 3 3 1
     1 4 6 4 1
   1 5 10 10 5 1
  1 6 15 20 15 6 1

  → Each number = sum of two above
  → Row n contains C(n, 0), C(n, 1), ..., C(n, n)
  → C(n, k) = C(n-1, k-1) + C(n-1, k)

PROPERTIES:
  C(n, k) = C(n, n-k)  (symmetry)
  C(n, 0) = C(n, n) = 1  (edges)
  Σ C(n, k) for k=0..n = 2^n  (sum of row = power of 2)

APPLICATIONS:
  → Binomial distribution (probability of k successes in n trials)
  → Binomial heap (data structure)
  → Expansion of algebraic expressions
  → Counting subsets
"""

print(binomial)

# PYTHON: Pascal's triangle:
pascal_code = """
# Generate Pascal's triangle:
def pascals_triangle(n):
    triangle = []
    for i in range(n):
        row = [1] * (i + 1)
        for j in range(1, i):
            row[j] = triangle[i-1][j-1] + triangle[i-1][j]
        triangle.append(row)
    return triangle

# Print first 8 rows:
tri = pascals_triangle(8)
for i, row in enumerate(tri):
    print(f"n={i}: {row}")

# Verify: C(n, k) matches triangle:
from math import comb
for n in range(8):
    for k in range(n + 1):
        assert tri[n][k] == comb(n, k)
print("Pascal's triangle matches C(n,k) ✅")

# Binomial expansion: (x + 1)^5
# Coefficients are row 5 of Pascal's triangle: [1, 5, 10, 10, 5, 1]
# x^5 + 5x^4 + 10x^3 + 10x^2 + 5x + 1
"""

print(pascal_code)</div>

<div class="code-block"># ── STEP 5: Combinatorics in algorithms ──
# Where counting appears in computer science.

algo_apps = """
COMBINATORICS IN CS:

1. ALGORITHM COMPLEXITY:
   → Permutations: n! (factorial — very expensive)
   → Combinations: C(n,k) = "n choose k"
   → Subsets: 2^n (power set)
   → These determine algorithm complexity classes

2. GENERATING ALL PERMUTATIONS:
   → Traveling salesman: try all orderings (n! routes)
   → Brute-force: O(n!) — only works for small n
   → n=10: 3,628,800 permutations (feasible)
   → n=20: 2.4×10^18 permutations (infeasible)

3. GENERATING ALL COMBINATIONS:
   → Knapsack: try all subsets
   → C(n, k) determines search space

4. HASH TABLES:
   → Birthday paradox → collision probability
   → 64-bit hash: ~2^32 items for 50% collision
   → SHA-256: astronomically safe

5. CRYPTOGRAPHY:
   → Key space = number of possible keys
   → AES-128: 2^128 ≈ 3.4×10^38 keys (uncrackable)
   → Password strength: C(charset, length) = charset^length

6. PROBABILITY:
   → P(event) = favorable outcomes / total outcomes
   → Poker hands: C(52,5) = 2,598,960 possible hands
   → Royal flush: 4 hands → P = 4/2598960 ≈ 0.00015%

7. COMPRESSORS/ENCODING:
   → Huffman coding uses frequency (counting)
   → Information: bits needed = log2(combinations)
"""

print(algo_apps)

# PYTHON: Combinatorial complexity:
complexity_code = """
from math import comb, factorial

# Compare growth rates:
for n in [5, 10, 15, 20]:
    subsets = 2 ** n
    perms = factorial(n)
    comb_half = comb(n, n // 2)
    print(f"n={n:2d}: 2^n={subsets:>15,}  n!={perms:>18,}  C(n,n/2)={comb_half:>15,}")

# n= 5: 2^n=             32  n!=               120  C(n,n/2)=             10
# n=10: 2^n=          1,024  n!=         3,628,800  C(n,n/2)=            252
# n=15: 2^n=         32,768  n!= 1,307,674,368,000  C(n,n/2)=          6,435
# n=20: 2^n=      1,048,576  n!= 2.43×10^18         C(n,n/2)=         184,756

# LESSON: n! grows MUCH faster than 2^n
# → Permutation-based algorithms are only feasible for small n
# → This is why NP-hard problems (TSP) need heuristics
"""

print(complexity_code)</div>

<div class="code-block"># ── STEP 6: Combinatorics best practices ──
# Apply counting effectively.

best_practices = [
    "Permutation: ORDER matters (arrangements, rankings)",
    "Combination: ORDER doesn't matter (teams, subsets)",
    "P(n,k) = n!/(n-k)! for permutations",
    "C(n,k) = n!/(k!(n-k)!) for combinations",
    "Power set has 2^n elements (subsets)",
    "Birthday paradox: 23 people → 50% shared birthday",
    "Inclusion-exclusion: |A∪B| = |A|+|B|−|A∩B|",
    "Pigeonhole: n items, m containers, n>m → collision",
    "n! grows faster than 2^n (factorial explosion)",
    "Password strength: charset^length",
    "AES-128: 2^128 keys (uncrackable)",
    "Use itertools for actual permutations/combinations",
    "Monte Carlo: simulate when exact calculation is hard",
    "Pascal's triangle: C(n,k) = C(n-1,k-1) + C(n-1,k)",
    "Binomial theorem: (a+b)^n = Σ C(n,k) a^(n-k) b^k",
]

print("COMBINATORICS BEST PRACTICES:")
for practice in best_practices:
    print(f"  ☐ {practice}")

# SUMMARY TABLE:
# ┌──────────────────┬──────────────────────────────────┐
# │ Formula          │ Meaning                         │
# ├──────────────────┼──────────────────────────────────┤
# │ n!               │ All arrangements of n           │
# │ P(n,k) = n!/(n-k)!│ Ordered k from n              │
# │ C(n,k) = n!/k!(n-k)!│ Unordered k from n         │
# │ 2^n              │ All subsets of n items          │
# │ C(n,2)/365       │ Birthday match probability      │
# │ Σ C(n,k) = 2^n   │ Sum of Pascal row               │
# └──────────────────┴──────────────────────────────────┘</div>

<div class="callout info"><span class="co-icon">📐</span><div><strong>Pascal-এর ত্রিভুজ:</strong> প্রতিটি সংখ্যা উপরের দুটির যোগফল। C(n,k) এর মান সরাসরি পড়ো। ১ ৩ ৩ ১ = C(৩,০), C(৩,১), C(৩,২), C(৩,৩)। এটাই (a+b)ⁿ এর সহগ — binomial theorem!</div></div>

<div class="verse">كُلَّ يَوْمٍ هُوَ فِي شَأْنٍ</div>
<div style="font-size:.85rem;color:var(--ink-dim);text-align:center;margin-bottom:1rem">"প্রতিদিন তিনি কোনো না কোনো কাজে আছেন।" — কুরআন ৫৫:২৯</div>

<p class="scene-setting">প্রতিদিন অসংখ্য সম্ভাবনা — তাদবির। কতভাবে সাজানো যায়, কতভাবে বাছা যায়। কম্বিনেটরিক্স সেই সম্ভাবনা গোনার ভাষা। প্রতিটি পছন্দ একটি সম্ভাবনা — এবং প্রতিটি সম্ভাবনা গণনায় ধরা যায়।</p>

<div class="callout tip"><span class="co-icon">🔗</span><div><strong>Book ৪৯ (Probability) Door ১:</strong> সম্ভাবনা হিসাবে কম্বিনেটরিক্স ব্যবহৃত! Book ৪৬ (Cryptography) Door ৩: hash collision = birthday paradox। Book ৪৮ Door ৬: pigeonhole — অসংখ্য জিনিস কম বাক্সে।</div></div>

<div class="svg-diagram">
<svg viewBox="0 0 580 250" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto">
  <text x="290" y="25" text-anchor="middle" fill="#e2e8f0" font-size="13" font-weight="900">🎲 Combinatorics: Permutations vs Combinations</text>
  <rect x="20" y="55" width="250" height="170" rx="8" fill="#0f172a" stroke="#a855f7" stroke-width="2"/>
  <text x="145" y="78" text-anchor="middle" fill="#c084fc" font-size="9" font-weight="700">PERMUTATION (order matters)</text>
  <text x="145" y="100" text-anchor="middle" fill="#d8b4fe" font-size="8">ABC, ACB, BAC, BCA, CAB, CBA</text>
  <text x="145" y="120" text-anchor="middle" fill="#c084fc" font-size="10">P(n,k) = n! / (n-k)!</text>
  <rect x="35" y="135" width="60" height="25" rx="4" fill="#2e1065" stroke="#a855f7" stroke-width="1"/>
  <text x="65" y="152" text-anchor="middle" fill="#c084fc" font-size="10">A B C</text>
  <rect x="100" y="135" width="60" height="25" rx="4" fill="#2e1065" stroke="#a855f7" stroke-width="1"/>
  <text x="130" y="152" text-anchor="middle" fill="#c084fc" font-size="10">A C B</text>
  <rect x="165" y="135" width="60" height="25" rx="4" fill="#2e1065" stroke="#a855f7" stroke-width="1"/>
  <text x="195" y="152" text-anchor="middle" fill="#c084fc" font-size="10">B A C</text>
  <text x="145" y="180" text-anchor="middle" fill="#d8b4fe" font-size="10">3! = 6 arrangements</text>
  <text x="145" y="200" text-anchor="middle" fill="#94a3b8" font-size="10">Password strength: 8 chars</text>
  <text x="145" y="212" text-anchor="middle" fill="#94a3b8" font-size="10">= 62^8 = 218 trillion</text>
  <rect x="300" y="55" width="260" height="170" rx="8" fill="#0f172a" stroke="#22d3ee" stroke-width="2"/>
  <text x="430" y="78" text-anchor="middle" fill="#7dd3fc" font-size="9" font-weight="700">COMBINATION (order irrelevant)</text>
  <text x="430" y="100" text-anchor="middle" fill="#bae6fd" font-size="8">{A,B,C} = same as {C,B,A}</text>
  <text x="430" y="120" text-anchor="middle" fill="#7dd3fc" font-size="10">C(n,k) = n! / (k!(n-k)!)</text>
  <rect x="320" y="135" width="80" height="25" rx="4" fill="#1e3a5f" stroke="#22d3ee" stroke-width="1"/>
  <text x="360" y="152" text-anchor="middle" fill="#7dd3fc" font-size="10">{A,B}</text>
  <rect x="410" y="135" width="80" height="25" rx="4" fill="#1e3a5f" stroke="#22d3ee" stroke-width="1"/>
  <text x="450" y="152" text-anchor="middle" fill="#7dd3fc" font-size="10">{A,C}</text>
  <rect x="500" y="135" width="50" height="25" rx="4" fill="#1e3a5f" stroke="#22d3ee" stroke-width="1"/>
  <text x="525" y="152" text-anchor="middle" fill="#7dd3fc" font-size="10">{B,C}</text>
  <text x="430" y="180" text-anchor="middle" fill="#bae6fd" font-size="10">C(3,2) = 3 unique pairs</text>
  <text x="430" y="200" text-anchor="middle" fill="#94a3b8" font-size="10">Birthday paradox: C(23,2)</text>
  <text x="430" y="212" text-anchor="middle" fill="#94a3b8" font-size="10">= 253 pairs, 50% match</text>
</svg>
</div>
<div class="svg-caption">চিত্র: Permutation (ক্রম গুরুত্বপূর্ণ) vs Combination (ক্রম অগ্রাহ্য)।</div>

<div class="secret-box">🎲 <strong>কম্বিনেটরিক্স = গোনার শিল্প।</strong> P(n,k) = ক্রম সহ, C(n,k) = ক্রম ছাড়া। জন্মদিন প্যারাডক্স, hash collision, password শক্তি — সব এর উপর নির্ভর। এখন প্রথম ৫টি দরজা শেষ — পরের অধ্যায়ে নতুন জগত।</div>`,
  senior: {
    title: "Combinatorics এক নজরে",
    body: `<table class="kv-table"><tr><th>সূত্র</th><th>বিবরণ</th></tr>
<tr><td class="hl">P(n,k) = n!/(n-k)!</td><td>Permutation — ক্রম গুরুত্বপূর্ণ</td></tr>
<tr><td class="hl">C(n,k) = n!/(k!(n-k)!)</td><td>Combination — ক্রম গুরুত্বহীন</td></tr>
<tr><td class="hl">n!</td><td>n এর ফ্যাক্টরিয়াল</td></tr>
<tr><td class="hl">Pascal Triangle</td><td>C(n,k) এর মান — binomial coefficients</td></tr>
<tr><td class="hl">Birthday Paradox</td><td>২৩ জনে ৫০% মিল — C(২৩,২)=২৫৩ জোড়া</td></tr>
<tr><td class="hl">Inclusion-Exclusion</td><td>|A∪B| = |A|+|B|−|A∩B|</td></tr></table>`
  }
});
