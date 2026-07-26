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

<div class="code-block">— Python: সহজ Lexer —

  import re

  TOKEN_SPEC = [
      ('NUMBER',   r'\\d+'),          # ০-৯
      ('ASSIGN',   r'='),             # =
      ('PLUS',     r'\\+'),           # +
      ('MINUS',    r'-'),             # -
      ('ID',       r'[a-zA-Z_]\\w*'), # variable name
      ('WS',       r'\\s+'),          # whitespace (skip)
  ]

  def lexer(code):
      tokens = []
      for mo in re.finditer('|'.join(f'(?P<{n}>{p})' for n,p in TOKEN_SPEC), code):
          kind = mo.lastgroup
          value = mo.group()
          if kind != 'WS':  # whitespace বাদ
              tokens.append((kind, value))
      return tokens

  print(lexer("x = 3 + 4"))
  # [('ID', 'x'), ('ASSIGN', '='), ('NUMBER', '3'),
  #  ('PLUS', '+'), ('NUMBER', '4')]

  — অক্ষর stream → token stream —
  — এটাই lexer-এর কাজ —</div>

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

<div class="code-block">— Python: Recursive Descent Parser —

  import ast as py_ast

  # Python-এর নিজস্ব AST দেখো:
  code = "x = 3 + 4"
  tree = py_ast.parse(code)
  print(py_ast.dump(tree))
  # Module(body=[
  #   Assign(targets=[Name('x')], value=BinOp(
  #     left=Num(3), op=Add(), right=Num(4)
  #   ))
  # ])
  #    Assign (root)
  #     /    \\
  #   x     Add
  #        /   \\
  #       3     4

  # সহজ recursive descent:
  def parse_expr(tokens):
      left = parse_term(tokens)       # প্রথম term
      while peek(tokens) == 'PLUS':
          consume(tokens)             '+' খাও
          right = parse_term(tokens)  # দ্বিতীয় term
          left = ('Add', left, right) # গাছের node
      return left

  # Grammar:
  # expr   → term (('+' | '-') term)*
  # term   → factor (('*' | '/') factor)*
  # factor → NUMBER | ID | '(' expr ')'
  — precedence গাছের গভীরতায় লুকানো —</div>

<div class="verse">وَشَجَرَةً تَخْرُجُ مِن طُورِ سَيْنَاءَ</div>
<div style="font-size:.85rem;color:var(--ink-dim);text-align:center;margin-bottom:1rem">"এবং একটি গাছ যা বের হয় সিনাই পাহাড় থেকে।" — কুরআন ২৩:২০</div>

<p class="scene-setting">শাজারাহ — গাছ। AST সেই গাছের রূপ — বাক্যের কাঠামো। প্রতিটি node একটি অপারেশন, প্রতিটি leaf একটি মান। গাছ দেখে তুমি বুঝো — কোন কাজ আগে, কোনটা পরে। সিনাইয়ের গাছ থেকে জীবন — AST থেকে অর্থ।</p>
<p class="scene-setting en">Shajarah — tree. AST is the form of that tree — the sentence's structure. Each node an operation, each leaf a value. From the tree you understand — which work first, which later. From Sinai's tree comes life — from AST comes meaning.</p>

<div class="callout tip"><span class="co-icon">🔗</span><div><strong>Book ২ (DSA Bazaar) Door ১৩ (Trees):</strong> BST ও tree traversal শিখেছিলে — AST সেই গাছের প্রয়োগ! Book ৪৮ Door ৭ (Graphs): AST = একটি বিশেষ গাছ (acyclic connected)।</div></div>

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

<div class="code-block">— Python: Semantic Analysis —

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
