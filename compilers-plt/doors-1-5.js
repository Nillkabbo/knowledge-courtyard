const doors = [];

doors.push({
  num: 1,
  icon: "📝",
  color: "#f97316",
  name: "শব্দ ভাঙার শিল্প",
  subtitle: "The Art of Breaking Words",
  tech: "Lexical Analysis (Lexer/Tokenizer) — regular expressions, DFA, token types, flex/lexer generators",
  spirit: "কালাম — কলম, অক্ষর থেকে অর্থের সৃষ্টি",
  secret: "Lexer = একটি DFA। প্রতিটি character পড়ে, state change করে, token তৈরি করে। x = 3 + 4 হয়ে যায়: ID(x) ASSIGN NUM(3) PLUS NUM(4)। অক্ষর থেকে শব্দ।",
  recall: {
    q: " Lexer ও Parser-এর পার্থক্য কী? Token কী?",
    qen: "What is the difference between a lexer and a parser? What is a token?",
    a: "Lexer = অক্ষর থেকে token (ID, NUM, OP)। Parser = token থেকে AST (গাছ)। Token = শ্রেণীবদ্ধ অক্ষর গোষ্ঠী।",
    aen: "Lexer = characters to tokens (ID, NUM, OP). Parser = tokens to AST (tree). Token = categorized group of characters."
  },
  story: `<p class="scene-setting">তুমি একটি বিদেশি ভাষা পড়ছ। প্রথমে তোমাকে শব্দ চেনো — কোথায় একটা শব্দ শেষ, কোথায় শুরু। <code>x = 3 + 4</code> — কম্পিউটার এটাকে দেখে অক্ষর হিসেবে: x, স্পেস, =, স্পেস, 3... Lexer এই অক্ষর stream-কে meaningful token-এ ভাগ করে। এটাই compilation-এর প্রথম ধাপ — শব্দ ভাঙা।</p>
<p class="scene-setting en">You read a foreign language. First you recognize words — where one ends, another begins. <code>x = 3 + 4</code> — the computer sees characters: x, space, =, space, 3... The lexer divides this character stream into meaningful tokens. This is compilation's first step — breaking words.</p>

<div class="dialogue"><strong>শব্দ-ভাঙন-কারিগর দাউদ:</strong> আমি প্রতিটি অক্ষর পড়ি। একটি Deterministic Finite Automaton — DFA — আমার মস্তিষ্ক। x দেখলাম → identifier শুরু। = দেখলাম → assign operator। ৩ দেখলাম → number। প্রতিটি token-এর একটি type ও value আছে: {type: ID, value: "x"}। এই token-গুলো পরের দরজার কাছে যাবে — parser-এর কাছে। আমি শুধু শব্দ চিনি — বাক্য বুঝি না।</div>
<div class="dialogue en"><strong>Word-Breaking Artisan Dawud:</strong> I read each character. A Deterministic Finite Automaton — DFA — is my brain. x → identifier starts. = → assign operator. 3 → number. Each token has a type and value: {type: ID, value: "x"}. These tokens go to the next door — the parser. I only recognize words — I don't understand sentences.</div>

<div class="code-block"># ── STEP 1: Lexical analysis (lexer) ──
# Converting source code text into tokens.

lexer_intro = """
LEXICAL ANALYSIS (LEXING/SCANNING):

The FIRST phase of a compiler.
  Input:  source code (raw text/characters)
  Output: stream of TOKENS

WHAT IS A TOKEN?
  A token is a meaningful unit: keyword, identifier, number, operator, string.

  Examples:
    "x = 42 + y" → [ID(x), ASSIGN(=), NUMBER(42), PLUS(+), ID(y)]

TOKEN TYPES:
  → Keywords: if, else, while, for, def, class
  → Identifiers: variable/function names
  → Literals: numbers (42, 3.14), strings ("hello")
  → Operators: +, -, *, /, ==, !=
  → Delimiters: (, ), {, }, [, ], ;
  → Whitespace: usually skipped
  → Comments: usually skipped

IMPLEMENTATION:
  → Use REGULAR EXPRESSIONS (DFA internally!)
  → Each token type = one regex
  → Longest match wins (e.g., "==" not two "=")
  → Tools: lex/flex (C), ANTLR (Java), re (Python)

PYTHON (simple lexer):
  import re

  TOKEN_SPEC = [
      ('NUMBER',   r'\\d+'),
      ('ASSIGN',   r'='),
      ('PLUS',     r'\\+'),
      ('MINUS',    r'-'),
      ('ID',       r'[a-zA-Z_]\\w*'),
      ('WS',       r'\\s+'),
  ]

  def lexer(code):
      tokens = []
      for mo in re.finditer('|'.join(f'(?P<{n}>{p})' for n,p in TOKEN_SPEC), code):
          kind = mo.lastgroup
          value = mo.group()
          if kind != 'WS':  # skip whitespace
              tokens.append((kind, value))
      return tokens

  print(lexer("x = 3 + 4"))
  # [('ID', 'x'), ('ASSIGN', '='), ('NUMBER', '3'), ('PLUS', '+'), ('NUMBER', '4')]
"""

print(lexer_intro)</div>

<div class="code-block"># ── STEP 2: Parsing ──
# Building a tree structure from tokens.

parsing = """
PARSING (SYNTAX ANALYSIS):

The SECOND phase of a compiler.
  Input:  token stream (from lexer)
  Output: ABSTRACT SYNTAX TREE (AST)

WHAT IS AN AST?
  A tree representing the STRUCTURE of the code.
  → Leaves: tokens (numbers, identifiers)
  → Internal nodes: operations (+, =, if, while)

  Example: "x = 3 + 4"
    Assign
    ├── ID: x
    └── Add
        ├── Num: 3
        └── Num: 4

GRAMMAR (CFG):
  Rules define valid syntax.
  → assign → ID = expr
  → expr → expr + term | expr - term | term
  → term → NUMBER | ID | ( expr )

TOP-DOWN vs BOTTOM-UP:
  Top-Down (LL):
    → Start from start symbol, expand to match input
    → Recursive descent (common in hand-written parsers)
    → Predictive (peek ahead)
    → Used by: ANTLR, many hand-written parsers

  Bottom-Up (LR):
    → Start from input, reduce to start symbol
    → Shift-reduce: push tokens, reduce when rule matches
    → More powerful (handles left recursion)
    → Used by: Yacc/Bison (LALR)

PYTHON (recursive descent parser):
  def parse_assign(tokens):
      # assign → ID = expr
      name = tokens.pop(0)  # expect ID
      assert tokens.pop(0)[0] == 'ASSIGN'  # expect =
      expr = parse_expr(tokens)
      return ('Assign', name[1], expr)

  def parse_expr(tokens):
      # expr → term ('+' term)*
      result = parse_term(tokens)
      while tokens and tokens[0][0] == 'PLUS':
          tokens.pop(0)  # consume +
          right = parse_term(tokens)
          result = ('Add', result, right)
      return result

  def parse_term(tokens):
      tok = tokens.pop(0)
      if tok[0] == 'NUMBER':
          return ('Num', int(tok[1]))
      elif tok[0] == 'ID':
          return ('Var', tok[1])

  tokens = lexer("x = 3 + 4")
  ast = parse_assign(tokens)
  print(ast)
  # ('Assign', 'x', ('Add', ('Num', 3), ('Num', 4)))
"""

print(parsing)</div>

<div class="code-block"># ── STEP 3: Semantic analysis ──
# Checking meaning (types, scope, declarations).

semantic = """
SEMANTIC ANALYSIS:

After parsing, the AST is syntactically valid.
But does it MAKE SENSE?

CHECKS:
  1. TYPE CHECKING:
     → int + string → ERROR (type mismatch)
     → calling non-function → ERROR

  2. SCOPE RESOLUTION:
     → Is this variable declared?
     → Is it in scope?
     → Python: LEGB rule (Local, Enclosing, Global, Built-in)

  3. VARIABLE BINDING:
     → Link each use to its declaration
     → Detect undefined variables

  4. FUNCTION SIGNATURES:
     → Correct number of arguments?
     → Return type matches?

SYMBOL TABLE:
  Maps names to their declarations.
  → name → type, scope, location
  → Stack of scopes (enter/exit blocks)

  Example:
    {x: int, y: float}  # current scope

TYPE INFERENCE:
  Some languages infer types automatically (Haskell, ML, Rust).
  → Hindley-Milner algorithm
  → No annotations needed

PYTHON (semantic analysis example):
  def check_types(ast, symbol_table):
      op = ast[0]
      if op == 'Num':
          return 'int'
      elif op == 'Var':
          return symbol_table.get(ast[1], 'undefined')
      elif op == 'Add':
          left = check_types(ast[1], symbol_table)
          right = check_types(ast[2], symbol_table)
          if left == 'int' and right == 'int':
              return 'int'
          else:
              raise TypeError(f"Cannot add {left} and {right}")
      elif op == 'Assign':
          var_type = check_types(ast[2], symbol_table)
          symbol_table[ast[1]] = var_type
          return None

  symbol_table = {}
  check_types(('Assign', 'x', ('Add', ('Num', 3), ('Num', 4))), symbol_table)
  print(symbol_table)  # {'x': 'int'}
"""

print(semantic)</div>

<div class="code-block"># ── STEP 4: Intermediate representation (IR) ──
# Machine-independent code.

ir = """
INTERMEDIATE REPRESENTATION (IR):

After semantic analysis, translate AST to IR.
  → IR is like assembly but machine-independent
  → Enables optimizations before targeting specific CPU

COMMON IR FORMATS:
  1. THREE-ADDRESS CODE (TAC):
     t1 = 3 + 4
     x = t1
     → At most 3 operands per instruction
     → Used by LLVM, many compilers

  2. STACK MACHINE (bytecode):
     PUSH 3
     PUSH 4
     ADD
     STORE x
     → Used by: Python (CPython bytecode), Java (JVM), WebAssembly

  3. SSA (STATIC SINGLE ASSIGNMENT):
     Each variable assigned exactly ONCE.
     → Enables powerful optimizations
     → Used by: LLVM, GCC (internal), modern compilers

SSA (STATIC SINGLE ASSIGNMENT):
  Before (non-SSA):
    x = 1
    y = 2
    x = y + 3  ← x assigned TWICE

  After (SSA):
    x1 = 1
    y1 = 2
    x2 = y1 + 3  ← unique name

  Φ (PHI) FUNCTIONS:
    Handle merging at branches:
    if cond:
        x1 = 1
    else:
        x2 = 2
    x3 = φ(x1, x2)  ← picks based on branch taken

WHY SSA?
  → Each value defined once → easier to optimize
  → Data flow analysis is straightforward
  → Dead code elimination trivial
  → Constant propagation easy

PYTHON (CPython bytecode):
  import dis

  def f(x):
      return x + 1

  dis.dis(f)
  # Shows bytecode instructions:
  # LOAD_FAST  0 (x)
  # LOAD_CONST 1 (1)
  # BINARY_ADD
  # RETURN_VALUE
"""

print(ir)</div>

<div class="code-block"># ── STEP 5: Compiler optimizations ──
# Making code faster.

optimizations = """
COMPILER OPTIMIZATIONS:

Make the program faster WITHOUT changing behavior.

1. CONSTANT FOLDING:
   x = 3 + 4  →  x = 7
   → Compute constants at compile time

2. CONSTANT PROPAGATION:
   x = 5
   y = x + 2  →  y = 7

3. DEAD CODE ELIMINATION:
   x = 1
   x = 2  ← x=1 is dead (never used)
   → Remove "x = 1"

4. COMMON SUBEXPRESSION ELIMINATION:
   a = b * c
   d = b * c  ← same computation
   → d = a (reuse result)

5. LOOP OPTIMIZATIONS:
   → LOOP UNROLLING: reduce loop overhead
     for i in range(4): ...
     → unrolled: 4 copies of body
   → LOOP INVARIANT CODE MOTION:
     Move invariant computation OUT of loop
   → STRENGTH REDUCTION:
     x * 2 → x << 1 (shift instead of multiply)

6. INLINING:
   Replace function call with function body
   → Eliminates call overhead
   → Enables further optimization
   → But: increases code size

7. TAIL CALL OPTIMIZATION:
   Convert tail recursion to iteration
   → Prevents stack overflow
   → Required for functional languages

8. AUTO-VECTORIZATION:
   Convert scalar operations to SIMD
   → for i in range(n): a[i] += b[i]
   → Vector add (4 elements at once)

PYTHON (Python dis for optimization demonstration):
  # Python doesn't optimize as aggressively as C
  # But JIT compilers (PyPy, Numba) do:

  # Constant folding (Python does this):
  import dis
  dis.dis(compile('x = 3 + 4', '<string>', 'exec'))
  # Shows: LOAD_CONST 7 (already folded!)

  # But NOT constant propagation:
  dis.dis(compile('x = 5; y = x + 2', '<string>', 'exec'))
  # Still loads x, adds 2 at runtime

LLVM OPTIMIZATION PASSES:
  → -O0: no optimization (fast compilation)
  → -O1: basic optimizations
  → -O2: standard optimizations (most projects)
  → -O3: aggressive (may increase code size)
  → -Os: optimize for size
  → -Ofast: fastest (may break IEEE 754)
"""

print(optimizations)</div>

<div class="code-block"># ── STEP 6: Compilation best practices ──
# Building and optimizing compilers.

best_practices = [
    "Lexer: regex per token type, longest match wins",
    "Parser: recursive descent (LL) or shift-reduce (LR)",
    "AST: tree representing program structure",
    "Semantic: type check, scope resolve, symbol table",
    "IR: machine-independent (TAC, SSA, bytecode)",
    "SSA: single assignment enables powerful optimization",
    "Optimization: constant fold, dead code, loop unroll",
    "Inlining eliminates call overhead (but increases size)",
    "LLVM: modular, reusable optimization passes",
    "JIT: compile at runtime for profiling-guided optimization",
    "GC: mark-sweep, copying, generational",
    "Register allocation: graph coloring (Chaitin)",
    "PEP 8 for Python, clang-format for C/C++",
    "Profile before optimizing (Amdahl's law)",
    "Read 'Dragon Book' (Aho et al.) for compiler theory",
]

print("COMPILATION BEST PRACTICES:")
for practice in best_practices:
    print(f"  ☐ {practice}")

# SUMMARY TABLE:
# ┌──────────────────┬──────────────────────────────────┐
# │ Phase            │ Input → Output                  │
# ├──────────────────┼──────────────────────────────────┤
# │ Lexer            │ Source text → Tokens            │
# │ Parser           │ Tokens → AST                    │
# │ Semantic         │ AST → Checked AST               │
# │ IR Generation    │ AST → IR (TAC/SSA)              │
# │ Optimization     │ IR → Optimized IR               │
# │ Code Generation  │ IR → Target assembly            │
# │ Linking          │ Object files → Executable       │
# └──────────────────┴──────────────────────────────────┘</div>

<div class="callout info"><span class="co-icon">📐</span><div><strong>Token প্রকার:</strong><br>
<strong>ID</strong> — identifier (variable/function name)<br>
<strong>NUM</strong> — number (integer/float)<br>
<strong>KEYWORD</strong> — if, while, return, def<br>
<strong>OP</strong> — operator (+, -, *, =, ==)<br>
<strong>STRING</strong> — "hello world"<br>
<strong>COMMENT</strong> — # মন্তব্য (lexer বাদ দেয়)</div></div>

<div class="verse">اقْرَأْ بِاسْمِ رَبِّكَ الَّذِي خَلَقَ</div>
<div style="font-size:.85rem;color:var(--ink-dim);text-align:center;margin-bottom:1rem">"পড়ো তোমার প্রতিপালকের নামে যিনি সৃষ্টি করেছেন।" — কুরআন ৯৬:১</div>

<p class="scene-setting">কালাম — কলম। আল্লাহ প্রথম নির্দেশ দিলেন "পড়ো"। Lexer-ও সেটাই করে — পড়ে। প্রতিটি অক্ষর পড়ে, শ্রেণীবদ্ধ করে। অক্ষর থেকে শব্দ, শব্দ থেকে অর্থের যাত্রা শুরু। কলম থেকে সৃষ্টি — কোড থেকে প্রোগ্রাম।</p>
<p class="scene-setting en">Qalam — pen. Allah's first command was "Read." The lexer does the same — reads. Every character read, categorized. From characters to words, the journey of meaning begins. From pen to creation — from code to program.</p>

<div class="callout tip"><span class="co-icon">🔗</span><div><strong>Book ৪৮ (Discrete Math) Door ১ (Logic):</strong> DFA = সত্য সারণির রূপ! Lexer একটি finite automaton। Book ৪১ (Theory of Computation) Door ১: DFA/NFA formal definition।</div></div>

<div class="svg-diagram">
<svg viewBox="0 0 580 250" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto">
<rect width="580" height="250" fill="#0f172a"/>
<defs><marker id="arrCP1" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 z" fill="#fbbf24"/></marker></defs>
<text x="290" y="22" text-anchor="middle" fill="#fcd34d" font-size="12" font-weight="bold">Lexer DFA — x = 3 + 4</text>
<circle cx="55" cy="130" r="20" fill="#451a0a" stroke="#fbbf24" stroke-width="2"/>
<text x="55" y="134" text-anchor="middle" fill="#fcd34d" font-size="9">S0</text>
<circle cx="235" cy="60" r="24" fill="#451a0a" stroke="#22c55e" stroke-width="2"/>
<circle cx="235" cy="60" r="19" fill="none" stroke="#22c55e" stroke-width="1.5"/>
<text x="235" y="58" text-anchor="middle" fill="#4ade80" font-size="9">ID</text>
<text x="235" y="68" text-anchor="middle" fill="#4ade80" font-size="10">accept</text>
<circle cx="235" cy="200" r="24" fill="#451a0a" stroke="#22d3ee" stroke-width="2"/>
<circle cx="235" cy="200" r="19" fill="none" stroke="#22d3ee" stroke-width="1.5"/>
<text x="235" y="198" text-anchor="middle" fill="#7dd3fc" font-size="9">NUM</text>
<text x="235" y="208" text-anchor="middle" fill="#7dd3fc" font-size="10">accept</text>
<circle cx="430" cy="130" r="24" fill="#451a0a" stroke="#22c55e" stroke-width="2"/>
<circle cx="430" cy="130" r="19" fill="none" stroke="#22c55e" stroke-width="1.5"/>
<text x="430" y="128" text-anchor="middle" fill="#4ade80" font-size="9">OP</text>
<text x="430" y="138" text-anchor="middle" fill="#4ade80" font-size="10">accept</text>
<line x1="72" y1="118" x2="211" y2="70" stroke="#fbbf24" stroke-width="1.5" marker-end="url(#arrCP1)"/>
<text x="125" y="82" fill="#fcd34d" font-size="8">letter</text>
<line x1="72" y1="142" x2="211" y2="190" stroke="#fbbf24" stroke-width="1.5" marker-end="url(#arrCP1)"/>
<text x="118" y="180" fill="#fcd34d" font-size="8">digit</text>
<line x1="75" y1="130" x2="406" y2="130" stroke="#fbbf24" stroke-width="1.5" marker-end="url(#arrCP1)"/>
<text x="220" y="123" text-anchor="middle" fill="#fcd34d" font-size="8">= + -</text>
<path d="M 218 43 Q 235 14 252 43" fill="none" stroke="#4ade80" stroke-width="1.5" marker-end="url(#arrCP1)"/>
<text x="235" y="13" text-anchor="middle" fill="#4ade80" font-size="10">letter/digit</text>
<path d="M 218 217 Q 235 245 252 217" fill="none" stroke="#7dd3fc" stroke-width="1.5" marker-end="url(#arrCP1)"/>
<text x="235" y="247" text-anchor="middle" fill="#7dd3fc" font-size="10">digit</text>
</svg>
</div>
<div class="svg-caption">DFA: প্রতিটি অক্ষর পড়ে state বদলায়, token তৈরি হয় — ID (সবুজ), NUM (নীল), OP (সবুজ)।</div>

<div class="secret-box">📝 <strong>Lexer = অক্ষর থেকে token। DFA দিয়ে।</strong> প্রথম ধাপ। কিন্তু token-এর পর — সেগুলো কীভাবে সাজাবে? বাক্য কীভাবে বুঝবে? সেই কাজ — parser। পরের দরজায়।</div>`,
  senior: {
    title: "Lexer এক নজরে",
    body: `<table class="kv-table"><tr><th>ধারণা</th><th>বিবরণ</th></tr>
<tr><td class="hl">Token</td><td>শ্রেণীবদ্ধ অক্ষর গোষ্ঠী</td></tr>
<tr><td class="hl">DFA</td><td>Deterministic Finite Automaton</td></tr>
<tr><td class="hl">Regex</td><td>Token pattern definition</td></tr>
<tr><td class="hl">flex</td><td>C lexer generator</td></tr>
<tr><td class="hl">Whitespace</td><td>Skip — বাদ দেওয়া হয়</td></tr>
<tr><td class="hl">Maximal Munch</td><td>সবচেয়ে লম্বা match নাও</td></tr></table>`
  }
});

doors.push({
  num: 2,
  icon: "🌲",
  color: "#f97316",
  name: "গাছ নির্মাণের কারিগর",
  subtitle: "The Tree Builder",
  tech: "Parsing — recursive descent, AST (Abstract Syntax Tree), grammar rules, precedence, yacc/bison, PEG",
  spirit: "শাজারাহ — গাছ, বাক্যের কাঠামো",
  secret: "Parser = token থেকে গাছ। AST (Abstract Syntax Tree)। x = 3 + 4 → Assign(x, Add(3,4))। গাছ দেখে তুমি বুঝো — কোনটা আগে, কোনটা পরে। precedence গাছের আকৃতিতে লুকানো।",
  recall: {
    q: " AST কী? Parser কীভাবে কাজ করে?",
    qen: "What is an AST? How does a parser work?",
    a: "AST = Abstract Syntax Tree — কোডের গাছ কাঠামো। Parser: token stream পড়ে, grammar rule মেনে গাছ তৈরি করে। x=3+4 → Assign(x, Add(3,4))।",
    aen: "AST = Abstract Syntax Tree — code's tree structure. Parser reads token stream, follows grammar rules to build tree. x=3+4 → Assign(x, Add(3,4))."
  },
  story: `<p class="scene-setting">দাউদ (Door ১) তোমাকে token দিয়েছেন। এখন সেই token থেকে বাক্য বুঝতে হবে। <code>x = 3 + 4</code> — এর অর্থ কী? x এর মান ৩, তার সাথে ৪ যোগ? নাকি x এর মান (৩+৪)? অর্থাৎ ৭? Operator precedence বলে — যোগ আগে, assign পরে। এই কাঠামো গাছে লুকানো — Add নিচে, Assign উপরে।</p>
<p class="scene-setting en">Dawud (Door 1) gave you tokens. Now from those tokens, understand the sentence. <code>x = 3 + 4</code> — what does it mean? x's value is 3, then add 4? Or x's value is (3+4)? That is 7? Operator precedence says — addition first, assignment after. This structure is hidden in the tree — Add at bottom, Assign at top.</p>

<div class="dialogue"><strong>গাছ-নির্মাতা বেলাল:</strong> আমি token পাই, গাছ বানাই। পদ্ধতি: recursive descent। প্রতিটি grammar rule একটি ফাংশন। expr() → term() + term()। term() → factor() * factor()। factor() → NUMBER বা ID বা (expr)। এই নিয়মে গাছ স্বয়ংক্রিয়ভাবে তৈরি। Add নিচে — কারণ যোগ আগে হয়। Assign উপরে — কারণ assign শেষে।</div>
<div class="dialogue en"><strong>Tree Builder Bilal:</strong> I receive tokens, build a tree. Method: recursive descent. Each grammar rule is a function. expr() → term() + term(). term() → factor() * factor(). factor() → NUMBER or ID or (expr). The tree forms automatically following these rules. Add at bottom — because addition happens first. Assign at top — because assignment is last.</div>

<div class="code-block"># ── STEP 1: Recursive descent parser (detailed) ──
# Hand-written top-down parser.

rd_parser = """
RECURSIVE DESCENT PARSER:

Each grammar rule → one function.
  expr()   handles expr rule
  term()   handles term rule
  factor() handles factor rule

GRAMMAR:
  expr   → term (('+' | '-') term)*
  term   → factor (('*' | '/') factor)*
  factor → NUMBER | ID | '(' expr ')'

PRECEDENCE:
  → Multiplication binds tighter (deeper in tree)
  → Addition is higher (evaluated later)
  → Parentheses override everything

PYTHON (complete working parser):
  import ast as py_ast

  # Python built-in AST (use ast module):
  code = "x = 3 + 4"
  tree = py_ast.parse(code)
  print(py_ast.dump(tree))
  # Module(body=[Assign(targets=[Name('x')],
  #   value=BinOp(left=Num(3), op=Add(), right=Num(4)))])

  # Hand-written recursive descent:
  class Parser:
      def __init__(self, tokens):
          self.tokens = tokens
          self.pos = 0

      def peek(self):
          return self.tokens[self.pos] if self.pos < len(self.tokens) else None

      def consume(self, expected=None):
          tok = self.tokens[self.pos]
          if expected and tok[0] != expected:
              raise SyntaxError(f"Expected {expected}, got {tok[0]}")
          self.pos += 1
          return tok

      def parse_expr(self):
          left = self.parse_term()
          while self.peek() and self.peek()[0] in ('PLUS', 'MINUS'):
              op = self.consume()[0]
              right = self.parse_term()
              left = (op, left, right)
          return left

      def parse_term(self):
          left = self.parse_factor()
          while self.peek() and self.peek()[0] in ('MUL', 'DIV'):
              op = self.consume()[0]
              right = self.parse_factor()
              left = (op, left, right)
          return left

      def parse_factor(self):
          tok = self.peek()
          if tok[0] == 'NUMBER':
              return self.consume()
          elif tok[0] == 'ID':
              return self.consume()
          elif tok[0] == 'LPAREN':
              self.consume()
              expr = self.parse_expr()
              self.consume('RPAREN')
              return expr

  parser = Parser(lexer("x = 3 * (4 + 5)"))
  result = parser.parse_expr()
  print(result)
"""

print(rd_parser)</div>

<div class="code-block"># ── STEP 2: Parser generators and tools ──
# Automated parser construction.

parser_tools = """
PARSER GENERATORS:

Don't write parsers by hand — generate them!

1. YACC/BISON (C):
  → LALR(1) parser
  → Input: grammar specification
  → Output: C code
  → Used by: GCC (early), PostgreSQL, SQLite

2. ANTLR (Java/C++/Python):
  → LL(*) parser (top-down)
  → Generates lexer + parser
  → Good error messages
  → Used by: Hive, Presto, Spark SQL

3. LARK (Python):
  → Modern parser generator
  → Supports Earley, LALR, contextual lexer
  → Readable grammar syntax
  → Python-native

4. TREE-SITTER (Rust/C):
  → Incremental parsing
  → Used by: GitHub, Neovim, Atom
  → Error recovery (parses broken code)

5. PEG PARSERS (Parsimonious, PyPEG):
  → PEG = Parsing Expression Grammar
  → No separate lexer (scannerless)
  → Always unambiguous (ordered choice)

PYTHON (Lark example):
  from lark import Lark

  grammar = \"\"\"
      start: expr
      expr: term (('+' | '-') term)*
      term: factor (('*' | '/') factor)*
      factor: NUMBER -> number
            | '-' factor
            | '(' expr ')'
      NUMBER: /\\d+/
      %import common.WS
      %ignore WS
  \"\"\"

  parser = Lark(grammar, start='expr')
  tree = parser.parse('3 + 4 * 2')
  print(tree.pretty())
  # expr
  #   term
  #     number  3
  #   +
  #   term
  #     number  4
  #     *
  #     number  2

ERROR HANDLING:
  → Panic mode: skip tokens until synchronization point
  → Error production: common mistakes → helpful messages
  → Recovery: insert/delete tokens to continue
"""

print(parser_tools)</div>

<div class="code-block"># ── STEP 3: Type systems and checking ──
# How compilers verify correctness.

type_systems = """
TYPE SYSTEMS:

STATIC TYPING:
  → Types checked at COMPILE TIME
  → C, C++, Java, Rust, Go, TypeScript
  → Early error detection
  → Better performance (no runtime checks)

DYNAMIC TYPING:
  → Types checked at RUNTIME
  → Python, Ruby, JavaScript, Lisp
  → More flexible
  → Slower (runtime type checking)

GRADUAL TYPING:
  → Mix of static and dynamic
  → Python type hints, TypeScript
  → Best of both worlds

TYPE INFERENCE (Hindley-Milner):
  → Compiler figures out types
  → No annotations needed
  → Used by: Haskell, ML, OCaml, Rust (partial)

  Example (Haskell):
    f x = x + 1
    → Compiler infers: f :: Num a => a -> a

POLYMORPHISM:
  → PARAMETRIC: works for any type (generics)
    List<T> works for List<int>, List<String>
  → AD-HOC: different behavior per type (overloading)
    toString() works for int, String, Object
  → SUBTYPE: inheritance (OOP)
    Dog extends Animal

TYPE SAFETY:
  → "Well-typed programs don't go wrong" (Milner)
  → Type-safe languages prevent: buffer overflow, use-after-free
  → Rust: ownership/borrowing (memory safety without GC)

PYTHON (type hints):
  def greet(name: str) -> str:
      return f"Hello, {name}"

  from typing import List, Optional

  def process(items: List[int]) -> Optional[int]:
      if items:
          return items[0]
      return None

  # mypy checks type hints:
  # $ mypy my_code.py
"""

print(type_systems)</div>

<div class="code-block"># ── STEP 4: SSA and advanced optimizations ──
# Static Single Assignment form.

ssa_opt = """
SSA-BASED OPTIMIZATIONS:

SSA makes many optimizations trivial:

1. CONSTANT PROPAGATION:
   x1 = 5
   y1 = x1 + 2  → y1 = 7 (x1 known to be 5)

2. COPY PROPAGATION:
   x1 = y1
   z1 = x1 + 1  → z1 = y1 + 1 (use original)

3. DEAD CODE ELIMINATION:
   If x1 never used → remove "x1 = ..."
   → In SSA, just check if x1 appears anywhere

4. COMMON SUBEXPRESSION ELIMINATION:
   a1 = b1 * c1
   d1 = b1 * c1  → d1 = a1 (same expression)
   → SSA makes detection easy (same operands)

5. LOOP OPTIMIZATIONS:
   → LOOP INVARIANT CODE MOTION:
     If computation doesn't change in loop → move out
   → INDUCTION VARIABLE SIMPLIFICATION:
     Replace loop counter math with increments
   → LOOP UNROLLING:
     Replicate body to reduce overhead

6. GLOBAL VALUE NUMBERING:
   Assign unique "value number" to each computation
   → Same value number = same result
   → Eliminate redundant computations

7. PARTIAL REDUNDANCY ELIMINATION:
   Remove computations that are partially redundant
   → "The most powerful optimization" (Morel-Renvoise)

PYTHON (CPython optimization limitations):
  # CPython does SOME optimization:
  import dis
  dis.dis(compile('x = 2 + 3', '<str>', 'exec'))
  # Already computed: LOAD_CONST 5

  # But does NOT do:
  # → Inlining (function calls not inlined)
  # → Loop unrolling
  # → Auto-vectorization

  # PyPy/Numba DO these optimizations (JIT compiled)

LLVM OPTIMIZATION PIPELINE:
  → Clang (C/C++/ObjC) → LLVM IR → optimize → assembly
  → LLVM IR is SSA-based
  → 100+ optimization passes
  → Each pass transforms IR
  → Link-Time Optimization (LTO) optimizes across files
"""

print(ssa_opt)</div>

<div class="code-block"># ── STEP 5: Register allocation and code gen ──
# The final phase: machine code.

codegen = """
REGISTER ALLOCATION:

After optimization, map virtual registers to physical registers.

PROBLEM:
  → IR has unlimited "virtual" registers
  → CPU has limited physical registers (16-32)
  → Must decide which values stay in registers vs memory

GRAPH COLORING (Chaitin's algorithm):
  1. Build INTERFERENCE GRAPH:
     → Node = variable
     → Edge = variables alive at same time (can't share register)
  2. Color the graph with k colors (k = # registers)
  3. NP-complete (but heuristics work well)

  → Nodes with same color → same register
  → Can't color → SPILL to memory

LINEAR SCAN (simpler):
  → Sort variables by live range
  → Greedy assignment
  → Used by: LLVM (fast compile), JIT compilers

CODE GENERATION:
  → Map IR operations to machine instructions
  → Handle calling conventions
  → Manage stack frames
  → Generate relocations (for linking)

INSTRUCTION SELECTION:
  → Multiple ways to implement same operation
  → x86: LEA for addition, MOV for copy
  → Pattern matching on IR → best instruction

PEEPHOLE OPTIMIZATION:
  → Local pattern replacement
  → MOV r1, r2; MOV r2, r1 → remove second (redundant)
  → ADD r, 0 → remove (no-op)

LINKING:
  → Combine object files (.o)
  → Resolve symbols (function calls across files)
  → Relocate addresses
  → Static linking: code copied into executable
  → Dynamic linking: resolved at runtime (.so, .dll)

PYTHON (comparing compilation levels):
  # C compilation:
  # gcc -O0 code.c → no optimization
  # gcc -O2 code.c → standard optimization
  # gcc -O3 code.c → aggressive optimization
  # gcc -S code.c → see assembly output

  # Python bytecode (interpreted, not compiled to native):
  import dis
  def add(a, b):
      return a + b
  dis.dis(add)
  # LOAD_FAST, LOAD_FAST, BINARY_ADD, RETURN_VALUE

  # Cython (compiles Python to C):
  # cython --embed module.pyx → C code → gcc → native
"""

print(codegen)</div>

<div class="code-block"># ── STEP 6: Compiler engineering best practices ──
# Building production-quality compilers.

best_practices = [
    "Lexer: use regex, longest match, skip whitespace",
    "Parser: recursive descent or use generator (Lark/Yacc)",
    "AST: immutable, well-typed data structure",
    "Visitor pattern: traverse/transform AST",
    "Symbol table: stack-based scoping",
    "Type checking: early errors > runtime crashes",
    "SSA: enables most modern optimizations",
    "Optimization passes: modular, composable",
    "Profile-guided: optimize hot paths",
    "Register allocation: graph coloring or linear scan",
    "Test extensively: fuzzing, property-based tests",
    "Error messages: helpful, specific, suggest fixes",
    "LLVM: reuse, don't reinvent (Clang, Rust, Swift)",
    "JIT: PyPy, V8, HotSpot for runtime optimization",
    "Read: Dragon Book (Aho), Crafting Interpreters (Nystrom)",
]

print("COMPILER ENGINEERING BEST PRACTICES:")
for practice in best_practices:
    print(f"  ☐ {practice}")

# SUMMARY TABLE:
# ┌──────────────────┬──────────────────────────────────┐
# │ Tool             │ Used For                       │
# ├──────────────────┼──────────────────────────────────┤
# │ flex/lex         │ Lexer generation               │
# │ bison/yacc       │ LALR parser generation          │
# │ ANTLR            │ LL parser, multi-language       │
# │ Lark (Python)    │ Earley/LALR, easy syntax       │
# │ Tree-sitter      │ Incremental, IDE integration   │
# │ LLVM             │ IR, optimization, code gen      │
# │ GCC              │ Full compiler (C/C++/Fortran)   │
# │ dis (Python)     │ Bytecode inspection            │
# └──────────────────┴──────────────────────────────────┘</div>

<div class="verse">وَشَجَرَةً تَخْرُجُ مِن طُورِ سَيْنَاءَ</div>
<div style="font-size:.85rem;color:var(--ink-dim);text-align:center;margin-bottom:1rem">"এবং একটি গাছ যা বের হয় সিনাই পাহাড় থেকে।" — কুরআন ২৩:২০</div>

<p class="scene-setting">শাজারাহ — গাছ। AST সেই গাছের রূপ — বাক্যের কাঠামো। প্রতিটি node একটি অপারেশন, প্রতিটি leaf একটি মান। গাছ দেখে তুমি বুঝো — কোন কাজ আগে, কোনটা পরে। সিনাইয়ের গাছ থেকে জীবন — AST থেকে অর্থ।</p>
<p class="scene-setting en">Shajarah — tree. AST is the form of that tree — the sentence's structure. Each node an operation, each leaf a value. From the tree you understand — which work first, which later. From Sinai's tree comes life — from AST comes meaning.</p>

<div class="callout tip"><span class="co-icon">🔗</span><div><strong>Book ২ (DSA Bazaar) Door ১৩ (Trees):</strong> BST ও tree traversal শিখেছিলে — AST সেই গাছের প্রয়োগ! Book ৪৮ Door ৭ (Graphs): AST = একটি বিশেষ গাছ (acyclic connected)।</div></div>

<div class="svg-diagram">
<svg viewBox="0 0 580 250" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto">
<rect width="580" height="250" fill="#0f172a"/>
<defs><marker id="arrCP2" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 z" fill="#fbbf24"/></marker></defs>
<text x="290" y="22" text-anchor="middle" fill="#fcd34d" font-size="12" font-weight="bold">AST — x = 3 + 4</text>
<rect x="250" y="45" width="80" height="34" rx="6" fill="#451a0a" stroke="#fbbf24" stroke-width="2"/>
<text x="290" y="66" text-anchor="middle" fill="#fcd34d" font-size="10" font-weight="bold">Assign</text>
<rect x="80" y="135" width="70" height="34" rx="6" fill="#451a0a" stroke="#22d3ee" stroke-width="2"/>
<text x="115" y="156" text-anchor="middle" fill="#7dd3fc" font-size="10">x</text>
<rect x="410" y="135" width="80" height="34" rx="6" fill="#451a0a" stroke="#fbbf24" stroke-width="2"/>
<text x="450" y="156" text-anchor="middle" fill="#fcd34d" font-size="10" font-weight="bold">Add</text>
<rect x="350" y="205" width="50" height="30" rx="6" fill="#451a0a" stroke="#22c55e" stroke-width="2"/>
<text x="375" y="224" text-anchor="middle" fill="#4ade80" font-size="10">3</text>
<rect x="500" y="205" width="50" height="30" rx="6" fill="#451a0a" stroke="#22c55e" stroke-width="2"/>
<text x="525" y="224" text-anchor="middle" fill="#4ade80" font-size="10">4</text>
<line x1="270" y1="79" x2="135" y2="135" stroke="#fbbf24" stroke-width="1.5" marker-end="url(#arrCP2)"/>
<line x1="310" y1="79" x2="440" y2="135" stroke="#fbbf24" stroke-width="1.5" marker-end="url(#arrCP2)"/>
<line x1="435" y1="169" x2="385" y2="205" stroke="#fcd34d" stroke-width="1.5" marker-end="url(#arrCP2)"/>
<line x1="465" y1="169" x2="515" y2="205" stroke="#fcd34d" stroke-width="1.5" marker-end="url(#arrCP2)"/>
</svg>
</div>
<div class="svg-caption">AST গাছ: Assign উপরে, Add নিচে — precedence গভীরতায় লুকানো।</div>

<div class="secret-box">🌲 <strong>Parser = token থেকে AST গাছ।</strong> precedence গভীরতায়। কিন্তু গাছ শুধু কাঠামো দেয় — অর্থ যাচাই করে না। x + "hello" গাঠ্যিকভাবে ঠিক কিন্তু অর্থহীন। সেই যাচাই — পরের দরজায়।</div>`,
  senior: {
    title: "Parser এক নজরে",
    body: `<table class="kv-table"><tr><th>ধারণা</th><th>বিবরণ</th></tr>
<tr><td class="hl">AST</td><td>Abstract Syntax Tree</td></tr>
<tr><td class="hl">Recursive Descent</td><td>প্রতিটি rule একটি ফাংশন</td></tr>
<tr><td class="hl">Precedence</td><td>গাছের গভীরতায় লুকানো</td></tr>
<tr><td class="hl">Grammar</td><td>BNF — ভাষার নিয়ম</td></tr>
<tr><td class="hl">yacc/bison</td><td>C parser generator</td></tr>
<tr><td class="hl">PEG</td><td>Parsing Expression Grammar</td></tr></table>`
  }
});

doors.push({
  num: 3,
  icon: "🔍",
  color: "#f97316",
  name: "অর্থের যাচাইকারী",
  subtitle: "The Meaning Checker",
  tech: "Semantic Analysis — type checking, scope resolution, symbol table, variable declaration, type errors",
  spirit: "ফাহম — বোঝা, কাঠামোর পর অর্থের যাচাই",
  secret: "Parser কাঠামো দেয়, semantic analysis অর্থ যাচাই করে। x + টেক্সট — গাঠ্যিকভাবে ঠিক কিন্তু type error। Semantic analysis ধরে: int + string অনুমোদিত নয়। প্রতিটি variable declared কিনা, scope ঠিক কিনা — সব যাচাই।",
  recall: {
    q: " Semantic analysis কী যাচাই করে? Type checker কী?",
    qen: "What does semantic analysis verify? What is a type checker?",
    a: "Semantic: variable declared কিনা, scope ঠিক কিনা, type মেলে কিনা। Type checker: int + string → error। Symbol table দিয়ে প্রতিটি variable-এর type ট্র্যাক করে।",
    aen: "Semantic: variable declared, scope correct, types match. Type checker: int + string → error. Symbol table tracks each variable's type."
  },
  story: `<p class="scene-setting">বেলাল (Door ২) তোমাকে AST দিয়েছেন। কিন্তু AST শুধু কাঠামো — অর্থ নয়। <code>x + "hello"</code> — গাছ তৈরি হবে ঠিকঠাক। কিন্তু এর অর্থ কী? সংখ্যা আর টেক্সট যোগ হয় না! এটাই semantic analysis ধরে — অর্থের যাচাই। প্রতিটি variable declared কিনা, type মেলে কিনা, function সঠিক argument পায় কিনা।</p>
<p class="scene-setting en">Bilal (Door 2) gave you AST. But AST is only structure — not meaning. <code>x + "hello"</code> — the tree forms correctly. But what does it mean? You can't add a number and text! Semantic analysis catches this — meaning verification. Is every variable declared? Do types match? Does the function receive correct arguments?</p>

<div class="dialogue"><strong>অর্থ-যাচাইকারী সালমান:</strong> আমার কাছে একটি symbol table আছে — প্রতিটি variable-এর নাম, type, scope লেখা। x কি declared? কোথায়? কোন type? দেখি: x = int। "hello" = string। int + string? আমার নিয়ম বলে — অনুমোদিত নয়! Type error। এটাই আমার কাজ — অর্থ যাচাই। গাঠ্যিকভাবে সব ঠিক হতে পারে, কিন্তু অর্থগতভাবে ভুল থাকতে পারে।</div>
<div class="dialogue en"><strong>Meaning Verifier Salman:</strong> I have a symbol table — each variable's name, type, scope recorded. Is x declared? Where? What type? I check: x = int. "hello" = string. int + string? My rules say — not allowed! Type error. This is my job — meaning verification. Syntactically everything may be fine, but semantically there may be errors.</div>

<div class="code-block"># — Python: Semantic Analysis —

  # Symbol Table
  class SymbolTable:
      def __init__(self):
          self.symbols = {}  # name → {type, scope}

      def declare(self, name, var_type, scope):
          if name in self.symbols:
              raise Error(f"'{name}' already declared!")
          self.symbols[name] = {'type': var_type, 'scope': scope}

      def lookup(self, name):
          if name not in self.symbols:
              raise Error(f"'{name}' not declared!")
          return self.symbols[name]

  # Type Checking:
  def check_binop(left_type, op, right_type):
      if op in ('+',):
          if left_type == 'int' and right_type == 'int':
              return 'int'
          if left_type == 'str' and right_type == 'str':
              return 'str'  # string concatenation
          raise TypeMismatch(
              f"Cannot {op} {left_type} and {right_type}")
      # int + string → TypeMismatch!

  table = SymbolTable()
  table.declare('x', 'int', 'global')
  table.declare('msg', 'str', 'global')

  check_binop('int', '+', 'int')   # OK → int
  check_binop('str', '+', 'str')   # OK → str
  check_binop('int', '+', 'str')   # ❌ TypeMismatch!</div>

<div class="callout info"><span class="co-icon">🔍</span><div><strong>Semantic Analysis যাচাই করে:</strong><br>
<strong>Variable Declaration:</strong> প্রতিটি variable declared কিনা<br>
<strong>Type Matching:</strong> int + int ঠিক, int + string ভুল<br>
<strong>Scope:</strong> local variable কোথায় দেখা যায়<br>
<strong>Function Signature:</strong> সঠিক argument সংখ্যা ও type<br>
<strong>Return Type:</strong> function সঠিক type return করে কিনা</div></div>

<div class="verse">أَفَلَا يَتَدَبَّرُونَ الْقُرْآنَ ۚ وَلَوْ كَانَ مِنْ عِندِ غَيْرِ اللَّهِ لَوَجَدُوا فِيهِ اخْتِلَافًا كَثِيرًا</div>
<div style="font-size:.85rem;color:var(--ink-dim);text-align:center;margin-bottom:1rem">"তবে কি তারা কুরআন নিয়ে গভীরভাবে চিন্তা করে না? যদি এটি আল্লাহর কাছ থেকে না হতো, তবে তাতে অনেক অসঙ্গতি পেত।" — কুরআন ৪:৮২</div>

<p class="scene-setting">ফাহম — গভীর বোঝা। Semantic analysis সেই গভীর বোঝার রূপ — কাঠামোর পর অর্থের যাচাই। "তাদব্বুর" — গভীর চিন্তা। কুরআনে যেমন অসঙ্গতি খুঁজে পাওয়া যায় না, semantic analysis-ও কোডে অসঙ্গতি খুঁজে বের করে — type mismatch, undeclared variable, scope violation।</p>
<p class="scene-setting en">Fahm — deep understanding. Semantic analysis is the form of that deep understanding — verifying meaning after structure. "Tadabbur" — deep reflection. Just as the Quran has no inconsistency, semantic analysis finds inconsistencies in code — type mismatch, undeclared variable, scope violation.</p>

<div class="callout tip"><span class="co-icon">🔗</span><div><strong>Book ৪৮ (Discrete Math) Door ১ (Logic):</strong> type checking = যুক্তি যাচাই। int + string → অসঙ্গতি = contradiction! Book ৪৫ Door ১০: type inference — Hindley-Milner।</div></div>

<div class="svg-diagram">
<svg viewBox="0 0 580 250" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto">
<rect width="580" height="250" fill="#0f172a"/>
<defs><marker id="arrCP3" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 z" fill="#fbbf24"/></marker></defs>
<text x="290" y="22" text-anchor="middle" fill="#fcd34d" font-size="12" font-weight="bold">Symbol Table &amp; Scope</text>
<rect x="30" y="45" width="180" height="160" rx="8" fill="none" stroke="#fbbf24" stroke-width="2" stroke-dasharray="5 3"/>
<text x="120" y="62" text-anchor="middle" fill="#fcd34d" font-size="9">Global Scope</text>
<rect x="50" y="75" width="140" height="22" rx="4" fill="#451a0a" stroke="#fbbf24" stroke-width="1"/>
<text x="120" y="90" text-anchor="middle" fill="#fcd34d" font-size="8">x : int</text>
<rect x="210" y="95" width="170" height="110" rx="8" fill="none" stroke="#22d3ee" stroke-width="2" stroke-dasharray="5 3"/>
<text x="295" y="112" text-anchor="middle" fill="#7dd3fc" font-size="9">Function Scope</text>
<rect x="230" y="125" width="130" height="22" rx="4" fill="#451a0a" stroke="#22d3ee" stroke-width="1"/>
<text x="295" y="140" text-anchor="middle" fill="#7dd3fc" font-size="8">msg : str</text>
<rect x="400" y="135" width="150" height="70" rx="8" fill="none" stroke="#22c55e" stroke-width="2" stroke-dasharray="5 3"/>
<text x="475" y="152" text-anchor="middle" fill="#4ade80" font-size="9">Block Scope</text>
<rect x="420" y="165" width="110" height="22" rx="4" fill="#451a0a" stroke="#22c55e" stroke-width="1"/>
<text x="475" y="180" text-anchor="middle" fill="#4ade80" font-size="8">i : int</text>
<text x="290" y="230" text-anchor="middle" fill="#fbbf24" font-size="9">int + str = Type Error!</text>
</svg>
</div>
<div class="svg-caption">Scope নেস্টেড: Global → Function → Block। প্রতিটি variable-এর type ও scope ট্র্যাক করা হয়।</div>

<div class="secret-box">🔍 <strong>Semantic = অর্থ যাচাই। Type, scope, declaration।</strong> গাঠ্যিকভাবে ঠিক কিন্তু অর্থগতভাবে ভুল ধরে। কিন্তু কোডে একটি সমস্যা আছে — একই variable একাধিক মান ধারণ করতে পারে। সেই সমস্যার সমাধান — SSA। পরের দরজায়।</div>`,
  senior: {
    title: "Semantic Analysis এক নজরে",
    body: `<table class="kv-table"><tr><th>যাচাই</th><th>কী</th></tr>
<tr><td class="hl">Type Check</td><td>int + string → error</td></tr>
<tr><td class="hl">Scope</td><td>variable কোথায় visible</td></tr>
<tr><td class="hl">Declaration</td><td>প্রতিটি var declared কিনা</td></tr>
<tr><td class="hl">Symbol Table</td><td>name → type/scope mapping</td></tr>
<tr><td class="hl">Function Sig</td><td>সঠিক argument সংখ্যা/type</td></tr></table>`
  }
});

doors.push({
  num: 4,
  icon: "🔗",
  color: "#f97316",
  name: "একক সংস্করণ",
  subtitle: "The Single Version",
  tech: "SSA (Static Single Assignment) — Cytron 1991, phi nodes, def-use chains, compiler optimization foundation",
  spirit: "তাওহিদ — একত্ব, প্রতিটি variable-এর একটি মাত্র সংজ্ঞা",
  secret: "SSA: প্রতিটি variable ঠিক একবারই assign হয়। x=1; x=2 হয় x1=1; x2=2। এতে optimization সহজ — প্রতিটি মান আলাদা, কোনো ambiguity নেই। phi node দিয়ে branch merge।",
  recall: {
    q: " SSA কী? কেন দরকার? phi node কী?",
    qen: "What is SSA? Why is it needed? What is a phi node?",
    a: "SSA = Static Single Assignment — প্রতিটি variable একবারই assign। x=1;x=2 → x1=1;x2=2। phi node: branch merge-এ কোন version বেছে নেবে।",
    aen: "SSA = Static Single Assignment — each variable assigned once. x=1;x=2 → x1=1;x2=2. Phi node: at branch merge, chooses which version."
  },
  story: `<p class="scene-setting">সালমান (Door ৩) তোমাকে type checking শিখিয়েছেন। এখন একটি সমস্যা — একই variable একাধিক মান ধারণ করে। <code>x = 1; if (...) { x = 2 }; use(x)</code> — x এর মান কত? ১ নাকি ২? compiler এতে confused। SSA (Cytron ১৯৯১) সমাধান দিল — প্রতিটি assignment আলাদা version। x1=1, x2=2। কোনটা use করবে? phi node বলে দেবে।</p>
<p class="scene-setting en">Salman (Door 3) taught you type checking. Now a problem — the same variable holds multiple values. <code>x = 1; if (...) { x = 2 }; use(x)</code> — what is x's value? 1 or 2? The compiler is confused. SSA (Cytron 1991) solved it — each assignment gets a separate version. x1=1, x2=2. Which to use? Phi node decides.</p>

<div class="dialogue"><strong>একত্ব-কারিগর ইলিয়াস:</strong> SSA-তে প্রতিটি variable ঠিক একবারই assign হয়। এর মানে — প্রতিটি মান অদ্বিতীয়। কোনো ambiguity নেই। এতে optimization সহজ হয়: constant propagation (x1=1 সর্বদা ১), dead code elimination (x2 কেউ use করে না? বাদ দাও)। phi node: if-else merge-এ দুটি version থাকলে, phi(x1, x2) বলে কোনটা বেছে নেবে।</div>
<div class="dialogue en"><strong>Unity Artisan Ilyas:</strong> In SSA, each variable is assigned exactly once. Meaning — each value is unique. No ambiguity. This makes optimization easy: constant propagation (x1=1 is always 1), dead code elimination (nobody uses x2? remove it). Phi node: at if-else merge with two versions, phi(x1, x2) decides which to choose.</div>

<div class="code-block">— SSA: Before vs After —

  # Original code:
  x = 1
  if condition:
      x = 2
  print(x)  # x এর মান কত? ১ নাকি ২?

  # SSA form:
  x1 = 1                    # প্রথম assignment
  if condition:
      x2 = 2                # দ্বিতীয় assignment
  x3 = phi(x1, x2)         # branch merge — কোনটা?
  print(x3)                 # x3 = x1 বা x2, condition উপর নির্ভর

  # SSA optimization: Constant Propagation
  # x1 = 1 (সর্বদা ১) → x1 কোথাও use হলে ১ বসাও
  # Dead Code: x2 কেউ use করে না? বাদ দাও!

  # LLVM IR দেখো (Python dis module):
  # $ python3 -c "import dis; dis.dis(lambda: x=1; x=2; print(x))"
  # প্রতিটি instruction আলাদা — SSA এর প্রভাব</div>

<div class="callout info"><span class="co-icon">🔗</span><div><strong>SSA এর শক্তি:</strong><br>
<strong>Constant Propagation:</strong> x1=1 সর্বদা ১ — সরাসরি বসাও<br>
<strong>Dead Code Elimination:</strong> কেউ use করে না → বাদ দাও<br>
<strong>Common Subexpression:</strong> a+b দুইবার → একবার হিসাব<br>
<strong>Phi Node:</strong> branch merge-এ version নির্বাচন<br>
<strong>LLVM IR:</strong> সব modern compiler SSA ব্যবহার করে</div></div>

<div class="verse">قُلْ هُوَ اللَّهُ أَحَدٌ</div>
<div style="font-size:.85rem;color:var(--ink-dim);text-align:center;margin-bottom:1rem">"বলো, তিনি আল্লাহ, এক।" — কুরআন ১১২:১</div>

<p class="scene-setting">তাওহিদ — একত্ব। SSA সেই একত্বের গাণিতিক রূপ। প্রতিটি variable-এর একটি মাত্র সংজ্ঞা — এক। একত্ব থেকে স্পষ্টতা, স্পষ্টতা থেকে optimization। যেমন তাওহিদ সবকিছুর ভিত্তি — SSA সব compiler optimization-এর ভিত্তি।</p>
<p class="scene-setting en">Tawhid — oneness. SSA is the mathematical form of that oneness. Each variable has one definition — one. From oneness comes clarity, from clarity comes optimization. As tawhid is the foundation of everything — SSA is the foundation of all compiler optimization.</p>

<div class="callout tip"><span class="co-icon">🔗</span><div><strong>Book ৪৮ Door ৪ (Sets):</strong> SSA-তে প্রতিটি version একটি সেটের উপাদান — def-use chain। Book ৪৫ Door ৫: dead code elimination SSA-এর উপর নির্ভর করে।</div></div>

<div class="svg-diagram">
<svg viewBox="0 0 580 250" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto">
<rect width="580" height="250" fill="#0f172a"/>
<defs><marker id="arrCP4" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 z" fill="#fbbf24"/></marker></defs>
<text x="290" y="22" text-anchor="middle" fill="#fcd34d" font-size="12" font-weight="bold">SSA — x1, x2, phi merge</text>
<rect x="40" y="55" width="100" height="36" rx="6" fill="#451a0a" stroke="#22c55e" stroke-width="2"/>
<text x="90" y="72" text-anchor="middle" fill="#4ade80" font-size="9">x1 = 1</text>
<text x="90" y="84" text-anchor="middle" fill="#4ade80" font-size="10">(then)</text>
<rect x="40" y="155" width="100" height="36" rx="6" fill="#451a0a" stroke="#22d3ee" stroke-width="2"/>
<text x="90" y="172" text-anchor="middle" fill="#7dd3fc" font-size="9">x2 = 2</text>
<text x="90" y="184" text-anchor="middle" fill="#7dd3fc" font-size="10">(else)</text>
<rect x="240" y="105" width="120" height="40" rx="6" fill="#451a0a" stroke="#fbbf24" stroke-width="2"/>
<text x="300" y="121" text-anchor="middle" fill="#fcd34d" font-size="9">x3 = phi(x1,x2)</text>
<text x="300" y="134" text-anchor="middle" fill="#fcd34d" font-size="10">branch merge</text>
<rect x="430" y="108" width="120" height="36" rx="6" fill="#451a0a" stroke="#22c55e" stroke-width="2"/>
<text x="490" y="125" text-anchor="middle" fill="#4ade80" font-size="9">print(x3)</text>
<text x="490" y="137" text-anchor="middle" fill="#4ade80" font-size="10">use</text>
<path d="M 140 73 Q 190 90 240 115" fill="none" stroke="#4ade80" stroke-width="1.5" marker-end="url(#arrCP4)"/>
<path d="M 140 173 Q 190 155 240 138" fill="none" stroke="#7dd3fc" stroke-width="1.5" marker-end="url(#arrCP4)"/>
<line x1="360" y1="125" x2="426" y2="125" stroke="#fcd34d" stroke-width="1.5" marker-end="url(#arrCP4)"/>
</svg>
</div>
<div class="svg-caption">SSA: প্রতিটি assignment আলাদা version (x1, x2)। phi node branch-এ কোনটা ব্যবহার হবে ঠিক করে।</div>

<div class="secret-box">🔗 <strong>SSA = এক variable, এক assignment। তাওহিদ।</strong> এতে optimization সহজ। কিন্তু কিছু কোড অদরকারি — dead code। সেই পরিষ্কার করার কাজ — পরের দরজায়।</div>`,
  senior: {
    title: "SSA এক নজরে",
    body: `<table class="kv-table"><tr><th>ধারণা</th><th>বিবরণ</th></tr>
<tr><td class="hl">SSA (Cytron 1991)</td><td>প্রতিটি var একবার assign</td></tr>
<tr><td class="hl">Phi Node</td><td>branch merge-এ version নির্বাচন</td></tr>
<tr><td class="hl">Constant Propagation</td><td>x1=1 সর্বদা ১</td></tr>
<tr><td class="hl">Dead Code Elimination</td><td>অব্যবহৃত assignment বাদ</td></tr>
<tr><td class="hl">LLVM IR</td><td>সব modern compiler SSA ব্যবহার</td></tr></table>`
  }
});

doors.push({
  num: 5,
  icon: "🧹",
  color: "#f97316",
  name: "অদৃশ্য পরিচ্ছন্নকারী",
  subtitle: "The Invisible Cleaner",
  tech: "Dead Code Elimination (DCE), constant folding, common subexpression elimination, loop optimization, peephole",
  spirit: "তাহারা — পরিচ্ছন্নতা, অদরকারি দূর করা",
  secret: "Dead code elimination: কেউ use করে না → বাদ দাও। Constant folding: 3+4 → 7 compile time-এ। Common subexpression: a+b দুইবার → একবার। প্রতিটি optimization কোড ছোট ও দ্রুত করে।",
  recall: {
    q: " Dead code elimination কী? Constant folding কী?",
    qen: "What is dead code elimination? What is constant folding?",
    a: "DCE: কেউ use করে না এমন code বাদ দাও। Constant folding: ৩+৪ কম্পাইল সময়ে ৭ করে দাও। CSE: একই হিসাব দুইবার → একবার।",
    aen: "DCE: remove code nobody uses. Constant folding: compute 3+4=7 at compile time. CSE: same calculation twice → once."
  },
  story: `<p class="scene-setting">ইলিয়াস (Door ৪) তোমাকে SSA শিখিয়েছেন। এখন সেই SSA ব্যবহার করে optimization। তোমার কোডে অদরকারি জিনিস আছে — dead code (কেউ call করে না), constant (৩+৪ সর্বদা ৭), redundant (একই হিসাব দুইবার)। এই সব পরিষ্কার করলে কোড ছোট, দ্রুত, efficient।</p>
<p class="scene-setting en">Ilyas (Door 4) taught you SSA. Now use that SSA for optimization. Your code has unnecessary things — dead code (nobody calls), constants (3+4 is always 7), redundant (same calc twice). Cleaning all this makes code smaller, faster, more efficient.</p>

<div class="dialogue"><strong>পরিচ্ছন্নকারী রাহিম:</strong> SSA-এর উপর আমি অনেক optimization করি। Dead code elimination: x1=1 কিন্তু কেউ use করে না? বাদ! Constant folding: ৩*৪ → ১২ compile time-এই হিসাব। Common subexpression: (a+b)*(a+b) → t=a+b; t*t। Loop invariant: if লুপের ভেতরে কিছু পরিবর্তন হয় না, লুপের বাইরে নাও। প্রতিটি optimization কোডকে আরও efficient করে।</div>
<div class="dialogue en"><strong>Cleaner Rahim:</strong> I do many optimizations on SSA. Dead code elimination: x1=1 but nobody uses it? Remove! Constant folding: 3*4 → 12 computed at compile time. Common subexpression: (a+b)*(a+b) → t=a+b; t*t. Loop invariant: if something inside a loop doesn't change, move it outside. Each optimization makes code more efficient.</div>

<div class="code-block">— Compiler Optimizations —

  # Dead Code Elimination (DCE)
  # Before:
  x = 1
  y = 2      # y কেউ use করে না!
  z = x + 3
  # After DCE:
  x = 1
  z = x + 3  # y বাদ!

  # Constant Folding
  # Before: x = 3 * 4 + 2
  # After:  x = 14           # compile time!

  # Common Subexpression Elimination (CSE)
  # Before: a = x + y; b = x + y
  # After:  t = x + y; a = t; b = t

  # Loop Invariant Code Motion
  # Before:
  for i in range(n):
      c = a * b       # a,b লুপে পরিবর্তন হয় না!
      arr[i] = c + i
  # After:
  c = a * b           # লুপের বাইরে!
  for i in range(n):
      arr[i] = c + i

  — gcc optimization levels:
  $ gcc -O0 (no opt) -O1 (basic) -O2 (standard) -O3 (aggressive)
  — -O2: DCE + CSE + constant folding + loop opt</div>

<div class="verse">إِنَّ اللَّهَ يُحِبُّ التَّوَّابِينَ وَيُحِبُّ الْمُتَطَهِّرِينَ</div>
<div style="font-size:.85rem;color:var(--ink-dim);text-align:center;margin-bottom:1rem">"নিশ্চয়ই আল্লাহ তওবাকারীদের ভালোবাসেন এবং পবিত্রকারীদের ভালোবাসেন।" — কুরআন ২:২২২</div>

<p class="scene-setting">তাহারা — পরিচ্ছন্নতা। Dead code elimination সেই পরিচ্ছন্নতার কাজ — অদরকারি দূর করা। যেমন পবিত্রতা শরীরকে সুস্থ রাখে, optimization কোডকে healthy রাখে। অদরকারি দূর করো — যা অবশিষ্ট থাকে, তাই সার।</p>
<p class="scene-setting en">Tahara — cleanliness. Dead code elimination is the work of that cleanliness — removing the unnecessary. As purity keeps the body healthy, optimization keeps code healthy. Remove the unnecessary — what remains is essential.</p>

<div class="callout tip"><span class="co-icon">🔗</span><div><strong>Book ৪৮ Door ৪ (Sets):</strong> def-use chain = সেট অপারেশন। Book ৪৫ Door ৪ (SSA): dead code detection SSA ছাড়া কঠিন।</div></div>

<div class="svg-diagram">
<svg viewBox="0 0 580 250" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto">
<rect width="580" height="250" fill="#0f172a"/>
<defs><marker id="arrCP5" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 z" fill="#fbbf24"/></marker></defs>
<text x="290" y="22" text-anchor="middle" fill="#fcd34d" font-size="12" font-weight="bold">Dead Code Elimination</text>
<rect x="25" y="45" width="220" height="180" rx="8" fill="none" stroke="#fbbf24" stroke-width="1.5"/>
<text x="135" y="62" text-anchor="middle" fill="#fcd34d" font-size="10">Before</text>
<rect x="45" y="78" width="180" height="26" rx="4" fill="#451a0a" stroke="#22c55e" stroke-width="1.5"/>
<text x="135" y="95" text-anchor="middle" fill="#4ade80" font-size="9">x = 1</text>
<rect x="45" y="114" width="180" height="26" rx="4" fill="#451a0a" stroke="#ef4444" stroke-width="1.5" stroke-dasharray="4 2"/>
<text x="135" y="131" text-anchor="middle" fill="#ef4444" font-size="9">y = 2  (unused)</text>
<rect x="45" y="150" width="180" height="26" rx="4" fill="#451a0a" stroke="#22c55e" stroke-width="1.5"/>
<text x="135" y="167" text-anchor="middle" fill="#4ade80" font-size="9">z = x + 3</text>
<text x="135" y="200" text-anchor="middle" fill="#ef4444" font-size="9">3 + 4 = 7 (fold)</text>
<text x="335" y="130" text-anchor="middle" fill="#fcd34d" font-size="20" font-weight="bold">&rarr;</text>
<rect x="335" y="45" width="220" height="180" rx="8" fill="none" stroke="#22c55e" stroke-width="2"/>
<text x="445" y="62" text-anchor="middle" fill="#4ade80" font-size="10">After</text>
<rect x="355" y="92" width="180" height="26" rx="4" fill="#451a0a" stroke="#22c55e" stroke-width="1.5"/>
<text x="445" y="109" text-anchor="middle" fill="#4ade80" font-size="9">x = 1</text>
<rect x="355" y="128" width="180" height="26" rx="4" fill="#451a0a" stroke="#22c55e" stroke-width="1.5"/>
<text x="445" y="145" text-anchor="middle" fill="#4ade80" font-size="9">z = x + 3</text>
<rect x="355" y="164" width="180" height="26" rx="4" fill="#451a0a" stroke="#22c55e" stroke-width="1.5"/>
<text x="445" y="181" text-anchor="middle" fill="#4ade80" font-size="9">w = 7</text>
</svg>
</div>
<div class="svg-caption">DCE: অব্যবহৃত y বাদ, 3+4 compile time-এ 7 — কোড ছোট ও দ্রুত।</div>

<div class="secret-box">🧹 <strong>Optimization = অদরকারি দূর, প্রয়োজনীয় রাখ।</strong> কোড ছোট, দ্রুত, efficient। কিন্তু optimization-এর পর একটি সমস্যা — প্রোগ্রামের ভেতরে সীমিত রেজিস্টার। কোন variable কোথায় রাখবে? সেই সমস্যা — graph coloring। পরের দরজায়।</div>`,
  senior: {
    title: "Optimizations এক নজরে",
    body: `<table class="kv-table"><tr><th>Optimization</th><th>কী করে</th></tr>
<tr><td class="hl">Dead Code Elim</td><td>অব্যবহৃত কোড বাদ</td></tr>
<tr><td class="hl">Constant Folding</td><td>৩+৪ → ৭ compile time-এ</td></tr>
<tr><td class="hl">CSE</td><td>একই হিসাব দুইবার → একবার</td></tr>
<tr><td class="hl">Loop Invariant</td><td>লুপের বাইরে সরাও</td></tr>
<tr><td class="hl">Inlining</td><td>function body সরাসরি বসাও</td></tr>
<tr><td class="hl">-O2 / -O3</td><td>gcc optimization levels</td></tr></table>`
  }
});
