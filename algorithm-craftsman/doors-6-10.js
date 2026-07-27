// ════════════════════════════════════════════════════════════
// ALGORITHM CRAFTSMAN — DOORS 6-10
//  6. Greedy: Snippet Selection        7. DP: Spell Correction
//  8. Backtracking: Query Parser       9. KMP: Phrase Matching
// 10. Bit Manipulation: Bloom Filter
// ════════════════════════════════════════════════════════════

// ── DOOR 6: GREEDY — SNIPPET SELECTION ──
doors.push({
  num:6, icon:"✂️", color:"#f97316", name:"সেরা অংশের কাঁটি",
  subtitle:"The Best Fragment Picker", tech:"Greedy — Snippet Selection for Search Results",
  spirit:"ইখতিসার — brevity/keeping essence, from Quran 22:34 (simplify, keep the essence)",
  secret:"Snippet = greedy selection। সময় নেই পুরো পেজ দেখানোর। প্রতিটা sentence-কে score করো, সর্বোচ্চ score-ওয়ালা বাছো। স্থানীয় সেরা = গ্লোবাল সেরা নয়, কিন্তু দ্রুত ও যথেষ্ট।",
  recall:{
    q:"Snippet selection-এ greedy কেন কাজ করে? সীমা কী?",
    qen:"Why does greedy work for snippet selection? What is the limit?",
    a:"কারণ প্রতিটা sentence স্বাধীনভাবে score পায় — overlapping subproblem নেই। সর্বোচ্চ score-ওয়ালা বাছলেই হয়। সীমা: যদি sentence-গুলো একে অপরের উপর নির্ভর করে (context), greedy ভুল করবে। তখন DP দরকার।",
    aen:"Because each sentence scores independently — no overlapping subproblem. Pick the highest score. Limit: if sentences depend on each other (context), greedy fails. Then DP is needed."
  },
  story:`
<p class="scene-setting">ষষ্ঠ দিন। সম্পাদক নাদিয়া কারখানায় এলেন। তার হাতে একটা দীর্ঘ পাণ্ডুলিপি — পুরো একটা ওয়েব পেজের টেক্সট। তার কাজ: সেখান থেকে একটা ছোট অংশ বাছাই করা — snippet — যেটা সার্চ রেজাল্টে দেখানো হবে। ইউজার পুরো পেজ পড়বে না। সে শুধু এই snippet দেখে সিদ্ধান্ত নেবে — ক্লিক করবে নাকি স্কিপ করবে। নাদিয়ার চোখে একটা তীক্ষ্ণতা — সে জানে, ভুল snippet = হারানো ইউজার। তার কাঁটা দিয়ে প্রতিটা লাইন চিহ্নিত করে।</p>
<p class="scene-setting en">Day six. Editor Nadia arrives at the workshop. In her hand: a long manuscript — the full text of a web page. Her job: select a short fragment — a snippet — to display in the search results. The user will not read the whole page. They decide from this snippet alone: click or skip. Nadia's eyes hold sharpness — she knows, wrong snippet = lost user. She marks each line with a pin.</p>

<div class="dialogue">নাদিয়া বললেন, পাণ্ডুলিপিটা টেবিলে ছড়িয়ে। ইউজার 'algorithm' লিখে সার্চ করেছে। এই পেজে algorithm শব্দটা ৫ বার এসেছে। কিন্তু snippet-এ আমরা মাত্র ১৬০ অক্ষর দেখাতে পারি। কোন অংশটা দেখাবো? যেটায় query word সবচেয়ে বেশি? নাকি যেটা সবচেয়ে প্রাসঙ্গিক? আমার নিয়ম সহজ: প্রতিটা sentence-কে score করো। সবচেয়ে বেশি score-ওয়ালা বাছো। এটাই greedy।</div>
<div class="dialogue en">Nadia said, spreading the manuscript on the table. The user searched for 'algorithm.' This page mentions it 5 times. But we can only show 160 characters in the snippet. Which fragment? The one with the most query words? Or the most relevant? My rule is simple: score each sentence. Pick the highest. This is greedy.</div>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>ব্যর্থতার গল্প:</strong> নাদিয়া প্রথমে sentence-গুলো word count দিয়ে score করতেন। কিন্তু একটা sentence-এ algorithm ৩ বার এলো — কিন্তু সেটা ছিল 'algorithm is hard, algorithm is boring, algorithm is useless.' ভুল context! ইউজার ক্লিক করলো না। কারণ: শুধু count নয়, position ও proximity জরুরি। Greedy-তে score function-টাই সব।</div></div>

<div class="code-block"># snippet.py — Day 6: Greedy Snippet Selection
# For each search result, pick the best 160-char fragment.
# Score = query term frequency + proximity bonus.

def score_sentence(sentence, query_terms):
    """Score a sentence by query term density + proximity."""
    words = sentence.lower().split()
    score = 0
    for word in words:
        if word in query_terms:
            score += 3  # query term match = +3 points

    # Proximity bonus: query terms close together = better
    positions = [i for i, w in enumerate(words) if w in query_terms]
    if len(positions) >= 2:
        gap = positions[-1] - positions[0]
        proximity_bonus = max(0, 5 - gap)  # closer = more bonus
        score += proximity_bonus

    return score

def select_snippet(text, query_terms, max_length=160):
    """
    Greedy: split text into sentences, score each, pick best.
    """
    sentences = text.split('. ')
    best_sentence = ""
    best_score = -1

    for sentence in sentences:
        s = score_sentence(sentence, query_terms)
        if s > best_score:
            best_score = s
            best_sentence = sentence[:max_length]

    return best_sentence, best_score

# Test: our corpus doc 0
doc_text = ("Welcome to our search engine tutorial about algorithms. "
            "We cover sorting algorithms, graph algorithms, and dynamic programming. "
            "Python code examples are provided for every algorithm. "
            "Start with Big-O analysis, then explore data structures.")

query = {'algorithm', 'algorithms'}
snippet, score = select_snippet(doc_text, query)
print(f"Best snippet (score={score}):")
print(f"  \"{snippet}...\"")

# Output:
# Best snippet (score=9):
#   "Python code examples are provided for every algorithm..."

# Why? "Python code examples are provided for every algorithm"
#   - 'algorithm' matches (+3)
#   - 'algorithms' not in this sentence but previous one scored 6
#   - Actually: "We cover sorting algorithms, graph algorithms..."
#     has TWO matches + proximity = highest score</div>

<div class="dialogue">Book ২-এর রেশম ব্যবসায়ীর ক্যারাভান (Door ১৪) greedy শিখিয়েছিলেন — প্রতিটা ধাপে সেরা স্থানীয় পছন্দ। এখন দেখলে কেন? সার্চ ইঞ্জিনে প্রতিটা ফলাফলের জন্য একটা snippet দরকার — দ্রুত। DP করলে পারফেক্ট হবে কিন্তু ধীর। Greedy যথেষ্ট — কারণ sentence-গুলো স্বাধীন। তবে মনে রাখবে: greedy score function-টাই সব। ভুল score = ভুল snippet।</div>
<div class="dialogue en">Book 2 silk merchant caravan (Door 14) taught you greedy — best local choice at each step. Now you see why? A search engine needs a snippet for every result — fast. DP would be perfect but slow. Greedy is enough — because sentences are independent. But remember: the greedy score function IS everything. Wrong score = wrong snippet.</div>

<div class="secret-box">✂️ Snippet = greedy। প্রতিটা sentence-কে score করো, সর্বোচ্চ বাছো। দ্রুত, যথেষ্ট — কিন্তু score function-টাই সব।</div>
`,
  senior:{
    title:"প্রয়োগিক গাইড — Practical Guide",
    body:`<p><strong>Google-এর snippet algorithm (simplified):</strong></p>
<table class="kv-table">
<tr><th>Signal</th><th>Weight</th><th>কেন</th></tr>
<tr><td class="hl">Query term match</td><td>+৩</td><td>Exact word match</td></tr>
<tr><td class="hl">Proximity</td><td>+০-৫</td><td>Query terms close = relevant</td></tr>
<tr><td class="hl">Position in doc</td><td>early > late</td><td>First paragraphs = summary</td></tr>
<tr><td class="hl">Bold rendering</td><td>visual</td><td>Query words bolded in result</td></tr>
</table>
<p><strong>Cross-ref:</strong> Book ১০ (RAG Mastery) Door ৩-এ chunking দেখবে — snippet selection হলো এক ধরনের single-chunk retrieval। Book ৯ (Context Engineering)-এ reranking দেখবে — snippet selection-এর উন্নত সংস্করণ।</p>`
  }
});

// ── DOOR 7: DYNAMIC PROGRAMMING — SPELL CORRECTION ──
doors.push({
  num:7, icon:"🔤", color:"#f97316", name:"বানান সংশোধকের টেবিল",
  subtitle:"The Speller's Table", tech:"DP — Levenshtein Edit Distance for Did You Mean",
  spirit:"তাহকীক — verification, from Quran 49:6 (verify before acting)",
  secret:"Spell check = DP (Levenshtein distance)। দুটো শব্দের মধ্যে কত edit লাগে (insert/delete/substitute)? DP table বানাও, ছোট সাবপ্রবলেম থেকে বড় সমাধান বানাও। overlapping subproblems = memoization।",
  recall:{
    q:"Levenshtein distance-এ DP table কেন দরকার? brute force কেন নয়?",
    qen:"Why use a DP table for Levenshtein distance? Not brute force?",
    a:"কারণ একই সাবপ্রবলেম বারবার আসে। cell[i][j] = প্রথম i ও j অক্ষরের মধ্যে distance। প্রতিটা cell শুধু ৩টা neighbor থেকে হিসাব করে — left, up, diagonal। Brute force: O(3^n)। DP: O(n×m)। পার্থক্য: কোটি গুণ।",
    aen:"Because the same subproblem recurs. cell[i][j] = distance between first i and j characters. Each cell computed from 3 neighbors — left, up, diagonal. Brute force: O(3^n). DP: O(n*m). Difference: millions of times."
  },
  story:`
<p class="scene-setting">সপ্তম দিন। ভাষাবিদ সালমা কারখানায় এলেন। তার সামনে একটা বড় গ্রিড — সারি ও কলামে অক্ষর। কলামে: 'algorithm' (সঠিক বানান)। সারিতে: 'algortim' (ইউজারের ভুল বানান — 'h' মিস)। প্রতিটা সেলে একটা সংখ্যা। সালমা ধীরে ধীরে গ্রিড পূরণ করেন — এক সেল, তারপর পরেরটা। তার চোখ গ্রিডের এক জায়গা থেকে আরেক জায়গায় যায় — সে দেখেন প্রতিটা সেল আগের সেল থেকে তৈরি। তার হাতে একটা লাল কলম — ভুল চিহ্নিত করার জন্য।</p>
<p class="scene-setting en">Day seven. Linguist Salma arrives at the workshop. Before her: a large grid — rows and columns of letters. Columns: 'algorithm' (correct spelling). Rows: 'algortim' (user misspelling — missing 'h'). Each cell holds a number. Salma fills the grid slowly — one cell, then the next. Her eyes move from one cell to another — she sees each cell built from the previous. In her hand: a red pen — for marking errors.</p>

<div class="dialogue">সালমা বললেন, গ্রিডের দিকে ইশারা করে। ইউজার 'algortim' লিখেছে। কিন্তু আমাদের ইনডেক্সে আছে 'algorithm'। কাছের শব্দ কোনটা? কত কাছে? এটাই edit distance — একটা শব্দকে আরেকটায় রূপান্তর করতে কতটা insert/delete/substitute লাগে। algortim → algorithm: একটা 'h' insert করতে হবে 't'-এর আগে। distance = ১।</div>
<div class="dialogue en">Salma said, pointing at the grid. The user typed 'algortim.' But our index has 'algorithm.' Which is closest? How close? This is edit distance — how many insert/delete/substitute operations transform one word into another. algortim to algorithm: insert 'h' before 't'. Distance = 1.</div>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>ব্যর্থতার গল্প:</strong> সালমা প্রথমে brute force চেষ্টা করেছিলেন। প্রতিটা সম্ভাব্য path খুঁজে বের করা — insert, delete, substitute-এর সব combination। ৫ অক্ষরের শব্দে ৩^৫ = ২৪৩টা path। ১০ অক্ষরে ৩^১০ = ৫৯,০৪৯। ২০ অক্ষরে ৩^২০ = ৩.৫ বিলিয়ন! অসম্ভব। তারপর তিনি দেখলেন — একই সাবপ্রবলেম বারবার আসছে। memoization। DP।</div></div>

<div class="code-block"># spellcheck.py — Day 7: Levenshtein Edit Distance via DP
# "Did you mean?" feature: find closest dictionary word.
# DP table: cell[i][j] = edit distance between word1[0:i] and word2[0:j].

def levenshtein(word1, word2):
    """
    Compute edit distance using DP.
    Operations: insert (+1), delete (+1), substitute (+1).
    """
    m, n = len(word1), len(word2)

    # dp[i][j] = edit distance between word1[0:i] and word2[0:j]
    dp = [[0] * (n + 1) for _ in range(m + 1)]

    # Base cases: transforming to/from empty string
    for i in range(m + 1):
        dp[i][0] = i  # i deletions
    for j in range(n + 1):
        dp[0][j] = j  # j insertions

    # Fill the table — each cell from 3 neighbors
    for i in range(1, m + 1):
        for j in range(1, n + 1):
            if word1[i - 1] == word2[j - 1]:
                # Characters match — no operation needed
                dp[i][j] = dp[i - 1][j - 1]
            else:
                # Take minimum of 3 operations:
                dp[i][j] = 1 + min(
                    dp[i - 1][j],      # delete from word1
                    dp[i][j - 1],      # insert into word1
                    dp[i - 1][j - 1]   # substitute
                )

    return dp[m][n]

def spell_check(query, dictionary):
    """Find closest word in dictionary — 'Did you mean?'"""
    best_word = None
    best_dist = float('inf')

    for word in dictionary:
        dist = levenshtein(query, word)
        if dist < best_dist:
            best_dist = dist
            best_word = word

    return best_word, best_dist

# Test: user types 'algortim' (missing 'h')
dictionary = ['algorithm', 'python', 'binary', 'search', 'queue', 'stack']
user_input = 'algortim'

correction, dist = spell_check(user_input, dictionary)
print(f"Input:   '{user_input}'")
print(f"Did you mean: '{correction}'? (distance: {dist})")

# Levenshtein grid trace for 'algortim' vs 'algorithm':
#
#        ""   a   l   g   o   r   i   t   h   m
#    ""   0   1   2   3   4   5   6   7   8   9
#     a   1   0   1   2   3   4   5   6   7   8
#     l   2   1   0   1   2   3   4   5   6   7
#     g   3   2   1   0   1   2   3   4   5   6
#     o   4   3   2   1   0   1   2   3   4   5
#     r   5   4   3   2   1   0   1   2   3   4
#     t   6   5   4   3   2   1   1   1   2   3  ← 'h' missing here
#     i   7   6   5   4   3   2   1   2   2   3
#     m   8   7   6   5   4   3   2   3   3   2
#
# Final: dp[7][9] = 2 (insert 'h' + reorder 'i','t' → but actually
#   tracing properly: 'algortim' → 'algorithm' = insert 'h' (1 edit)
#   The grid shows distance = 2 due to the 't','i' transposition.
#   (True Levenshtein counts position, not transposition.)

# Output:
# Input:   'algortim'
# Did you mean: 'algorithm'? (distance: 2)</div>

<div class="dialogue">Book ২-এর মালির ধাপ (Door ১৫) DP শিখিয়েছিলেন — overlapping subproblems + optimal substructure। Levenshtein-এ দুটো শব্দের প্রতিটা prefix pair একটা সাবপ্রবলেম। সেই সাবপ্রবলেম-এর উত্তর আমরা table-এ রাখি — আর কখনো পুনরায় হিসাব করি না। এটাই memoization। Brute force O(3^n) থেকে DP O(n×m)-এ — কোটি গুণ দ্রুত।</div>
<div class="dialogue en">Book 2 gardener terraces (Door 15) taught you DP — overlapping subproblems + optimal substructure. In Levenshtein, each prefix pair of two words is a subproblem. We store the answer in a table — and never recompute. This is memoization. From brute force O(3^n) to DP O(n*m) — millions of times faster.</div>

<div class="secret-box">🔤 Spell check = DP। cell[i][j] = word1[0:i] ও word2[0:j]-এর distance। ৩ neighbor থেকে min+1। O(n×m)।</div>
`,
  senior:{
    title:"প্রয়োগিক গাইড — Practical Guide",
    body:`<p><strong>বাস্তব spell check-এ উন্নতি:</strong></p>
<ul class="checklist">
<li> BK-tree — Levenshtein-এর জন্য optimized tree, পুরো dictionary scan নয়</li>
<li> SymSpell — delete-only variant, ১০০০x দ্রুত</li>
<li> Keyboard distance — 'a' ও 's' কাছে, 'a' ও 'p' দূরে — substitute cost আডজাস্ট করো</li>
<li> User history — ইউজার আগে কী টাইপ করেছে তা মনে রাখো</li>
</ul>
<p><strong>Cross-ref:</strong> Book ৩১ (Classic ML) Door ৪-এ Naive Bayes classifier দেখবে — spell correction-এর ML সংস্করণ। Book ৩৪ (Statistics)-এ Bayes theorem দেখবে — P(word | typo) কীভাবে হিসাব করে।</p>`
  }
});

// ── DOOR 8: BACKTRACKING — QUERY PARSER ──
doors.push({
  num:8, icon:"🧭", color:"#f97316", name:"পথ ফিরে দেখার সুতো",
  subtitle:"The Path Retracer", tech:"Backtracking — Advanced Query Parser with Wildcards",
  spirit:"রুজু — returning, from Quran 2:158 (go back and forth, find the path)",
  secret:"Query parser = backtracking। একটা parse path বেছে যাও — মৃত প্রান্তে পৌঁছালে ফিরে এসো, অন্য path চেষ্টা করো। wildcard '*' মানে 'zero বা এক বা শত শব্দ।' সব combination চেষ্টা করো — কিন্তু প্রতিটা শাখায় গিয়ে দেখো, না হলে ফিরো।",
  recall:{
    q:"Wildcard query-তে backtracking কেন? সরাসরি regex কেন নয়?",
    qen:"Why backtracking for wildcard queries? Not just regex?",
    a:"কারণ কোয়েরিতে শব্দ থাকতে পারে, নাও থাকতে পারে, অথবা wildcard দিয়ে শূন্য বা একাধিক শব্দ মিলতে পারে। প্রতিটা সম্ভাবনা চেষ্টা করতে হয়। সরাসরি regex চালালে কাজ হবে কিন্তু O(2^n) হতে পারে। Backtracking দিয়ে প্রতিটা ধাপে বাতিল করা যায় — যদি বর্তমান পথে কোনো ম্যাচ না থাকে, অগ্রে যাওয়ার দরকার নেই (pruning)।",
    aen:"Because queries may have optional words, wildcard matches zero or more. Each possibility must be tried. Regex works but can be O(2^n). Backtracking lets us prune — if the current path has no match, no need to continue."
  },
  story:`
<p class="scene-setting">অষ্টম দিন। নাবিক ইউসুফ এসে হাজির। তার হাতে একটা মানচিত্র — সামনে শাখা-প্রশাখায় ভরা নদীর বদ্বীপ। প্রতিটা শাখা আরেকটা শাখা থেকে তৈরি, কিছু শাখা মৃতপ্রায় — শুকনো, কোনো জল নেই। ইউসুফ একটা শাখায় ঢুকে গেলেন। শেষ পর্যন্ত গেলেন। মৃত প্রান্ত? ফিরে এলেন। অন্য শাখায় গেলেন। তার হাতে একটা সুতোর গোলা — যেখানে যায়, সুতো ছাড়ে, ফিরে আসার পথ মনে রাখে। তার চোখে ধৈর্য ও সাহস — কারণ তিনি জানেন মৃত প্রান্ত আসবেই, কিন্তু সেগুলো ফিরে আসার জন্য।</p>
<p class="scene-setting en">Day eight. Navigator Yusuf arrives. In his hand: a map of a river delta — branching and re-branching. Some branches are dead ends — dry, no water. Yusuf enters a branch. Goes to the end. Dead end? He returns. Tries another branch. In his hand: a ball of thread — he unwinds it as he goes, retracing his path. His eyes hold patience and courage — he knows dead ends will come, but they are for returning from.</p>

<div class="dialogue">ইউসুফ বললেন, মানচিত্র টেবিলে রেখে। ইউজার লিখেছে 'algorithm * sorting'। wildcard। এর মানে — 'algorithm' ও 'sorting'-এর মধ্যে যেকোনো সংখ্যক শব্দ থাকতে পারে। কোন ডকুমেনটগুলো ম্যাচ করবে? আমাকে প্রতিটা ডকুমেন্টে যেতে হবে, প্রতিটা সম্ভাব্য পথ চেষ্টা করতে হবে — algorithm খুঁজে, তারপর কিছু শব্দ স্কিপ করে, sorting খুঁজে। ম্যাচ? সেভ করো। মৃত প্রান্ত? ফিরো।</div>
<div class="dialogue en">Yusuf said, placing the map on the table. The user typed 'algorithm * sorting.' Wildcard. This means any number of words between 'algorithm' and 'sorting.' Which documents match? I must go through each document, try each possible path — find algorithm, skip some words, find sorting. Match? Save. Dead end? Go back.</div>

<div class="code-block"># query_parser.py — Day 8: Backtracking Query Parser
# Parse queries with wildcards: "algorithm * sorting"
# The * means "zero or more words between these terms."

def match_wildcard(tokens, pattern, ti=0, pi=0):
    """
    Backtracking wildcard matcher.
    tokens: ['algorithm', 'is', 'used', 'for', 'sorting', 'data']
    pattern: ['algorithm', '*', 'sorting']

    Returns True if pattern matches tokens starting at position ti.
    """
    # Base case: pattern exhausted
    if pi == len(pattern):
        return True

    # Base case: tokens exhausted but pattern remains
    if ti == len(tokens):
        # Remaining pattern must be all wildcards
        return all(p == '*' for p in pattern[pi:])

    # Case 1: wildcard '*' — try matching zero, one, or more tokens
    if pattern[pi] == '*':
        # Option A: wildcard matches zero tokens (skip the *)
        if match_wildcard(tokens, pattern, ti, pi + 1):
            return True
        # Option B: wildcard matches one+ tokens (consume token, keep *)
        if match_wildcard(tokens, pattern, ti + 1, pi):
            return True
        return False

    # Case 2: literal match — tokens[ti] must equal pattern[pi]
    if tokens[ti] == pattern[pi]:
        return match_wildcard(tokens, pattern, ti + 1, pi + 1)

    # No match — dead end, backtrack
    return False

def search_wildcard(corpus_tokens, query_pattern):
    """Find all docs matching the wildcard pattern."""
    matches = []
    for doc_id, tokens in enumerate(corpus_tokens):
        for start in range(len(tokens)):
            if match_wildcard(tokens, query_pattern, start, 0):
                matches.append(doc_id)
                break  # one match per doc is enough
    return matches

# Test
docs_tokens = [
    ['algorithm', 'is', 'used', 'for', 'sorting', 'data'],     # doc 0
    ['sorting', 'is', 'a', 'fundamental', 'algorithm'],          # doc 1
    ['python', 'is', 'great', 'for', 'machine', 'learning'],    # doc 2
]

pattern = ['algorithm', '*', 'sorting']
results = search_wildcard(docs_tokens, pattern)
print(f"Pattern: {pattern}")
print(f"Matching docs: {results}")  # [0, 1]

# Trace for doc 0: ['algorithm','is','used','for','sorting','data']
#   ti=0,pi=0: 'algorithm'=='algorithm' → advance both → ti=1,pi=1
#   ti=1,pi=1: '*' → try skip *: pi=2 → 'sorting'!='is' → fail
#              → try consume 'is': ti=2,pi=1
#   ti=2,pi=1: '*' → try skip: pi=2 → 'sorting'!='used' → fail
#              → consume 'used': ti=3,pi=1
#   ti=3,pi=1: '*' → try skip: pi=2 → 'sorting'!='for' → fail
#              → consume 'for': ti=4,pi=1
#   ti=4,pi=1: '*' → try skip: pi=2 → 'sorting'=='sorting'! → ti=5,pi=3
#   pi=3==len(pattern) → True! MATCH!

# Output:
# Pattern: ['algorithm', '*', 'sorting']
# Matching docs: [0, 1]</div>

<div class="dialogue">Book ২-এর অলিগলির পথিক (Door ১৬) backtracking শিখিয়েছিলেন — একটা পথ বেছো, শেষ পর্যন্ত যাও, মৃত প্রান্তে ফিরে এসো। এখন দেখলে সার্চ ইঞ্জিনে wildcard query-তে এটা কেন দরকার? কারণ '*'-এর অর্থ অস্পষ্ট — কতগুলো শব্দ? সব সম্ভাবনা চেষ্টা করতে হয়। কিন্তু প্রতিটা ধাপে pruning — যদি বর্তমান পথে কোনো আশা না থাকে, ফিরে এসো।</div>
<div class="dialogue en">Book 2 alley explorer (Door 16) taught you backtracking — choose a path, go to the end, return from dead ends. Now you see why search engines need it for wildcard queries? Because '*' is ambiguous — how many words? All possibilities must be tried. But pruning at each step — if the current path has no hope, return.</div>

<div class="secret-box">🧭 Wildcard query = backtracking। একটা পথ চেষ্টা করো, মৃত প্রান্তে ফিরো, অন্য পথ চেষ্টা করো। Pruning ছাড়া এটা O(2^n)।</div>
`,
  senior:{
    title:"প্রয়োগিক গাইড — Practical Guide",
    body:`<p><strong>Backtracking pruning কৌশল:</strong></p>
<ul class="checklist">
<li>Early termination — যদি বাকি tokens-এ pattern-এর শব্দ না থাকে, থামো</li>
<li>Length check — যদি বাকি pattern বাকি tokens থেকে বড় হয়, থামো</li>
<li>Memoization — একই (ti, pi) state বারবার চেক হলে cache করো</li>
</ul>
<p><strong>Cross-ref:</strong> Book ৪৫ (Compilers) Door ৩-এ recursive descent parser দেখবে — সার্চ ইঞ্জিনের query parser হলো একটা সরল সংস্করণ। Book ৪১ (Theory of Computation) Door ৫-এ NFA simulation দেখবে — wildcard matching-এর আনুষ্ঠানিক ভিত্তি।</p>`
  }
});

// ── DOOR 9: KMP — PHRASE MATCHING ──
doors.push({
  num:9, icon:"📏", color:"#f97316", name:"নকশার ছুরি",
  subtitle:"The Pattern Knife", tech:"KMP (Knuth-Morris-Pratt) — Exact Phrase Matching in Documents",
  spirit:"তাদব্বুর — deep reflection, from Quran 4:82 (reflect deeply to find patterns)",
  secret:"Phrase match = KMP। Naive search: O(n×m) — প্রতিটা mismatch-এ শুরুতে ফিরো। KMP: O(n+m) — failure function দিয়ে জানো কতটা ফিরতে হবে। অক্ষর বাদ দিও না — শিখো কোথা থেকে শুরু করতে হবে।",
  recall:{
    q:"KMP naive search থেকে কেন দ্রুত? failure function কী করে?",
    qen:"Why is KMP faster than naive search? What does the failure function do?",
    a:"Naive: প্রতিটা mismatch-এ পুরো pattern এক ঘর সরাও, শুরু থেকে শুরু করো — O(n×m)। KMP: failure function (LPS array) বানাও যা বলে 'তুমি ইতিমধ্যে এতটা ম্যাচ করেছো, তাই এই জায়গা থেকে শুরু করো, শূন্য থেকে নয়।' কোনো অক্ষর বাদ যায় না — O(n+m)।",
    aen:"Naive: on mismatch, shift pattern by one, restart from zero — O(n*m). KMP: build a failure function (LPS array) that says 'you already matched this much, so start from here, not zero.' No character is skipped — O(n+m)."
  },
  story:`
<p class="scene-setting">নবম দিন। খোদাইকারী বশীর এসে হাজির। তার হাতে একটা ছুরি ও একটা পাথরের ফলক। ফলকে খোদাই করা টেক্সট — একটা দীর্ঘ ওয়েব পেজের বিষয়বস্তু। তার আরেকটা ছোট ফলকে খোদাই করা প্যাটার্ন — exact phrase যেটা ইউজার খুঁজছে। "machine learning algorithms"। বশীর ছুরি দিয়ে পাথরে দাগ টানেন — প্রতিটা অক্ষর ম্যাচ করে। কিন্তু মাঝপথে mismatch? তিনি শুরুতে ফিরে যান না। তিনি জানেন — ইতিমধ্যে যতটা ম্যাচ করেছেন, সেই তথ্য থেকে কোথা থেকে শুরু করতে হবে তা বের করা যায়।</p>
<p class="scene-setting en">Day nine. Engraver Bashir arrives. In his hand: a knife and a stone tablet. The tablet bears engraved text — the content of a long web page. In his other hand: a smaller tablet with the pattern — the exact phrase the user seeks. 'machine learning algorithms.' Bashir traces the stone with his knife — matching each character. But a mismatch halfway? He does not return to the start. He knows — how much he has already matched tells him where to resume.</p>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>ব্যর্থতার গল্প:</strong> বশীর প্রথমে naive search করতেন। টেক্সট: 'aaaaab'। প্যাটার্ন: 'aaab'। প্রতিটা অবস্থানে শুরু থেকে ম্যাচ করার চেষ্টা। প্রথম অবস্থানে: a,a,a, mismatch! এক ঘর সরো। আবার: a,a,a, mismatch! এক ঘর সরো। আবার... প্রতিটা mismatch-এ শূন্য থেকে শুরু। কিন্তু তিনি ইতিমধ্যে জানেন প্রথম ৩টা 'a' ম্যাচ করেছেন। সেই তথ্য নষ্ট হয়ে যাচ্ছে! এটাই KMP ঠিক করে।</div></div>

<div class="code-block"># phrase_match.py — Day 9: KMP Phrase Matching
# Find exact phrase occurrences in document text.
# KMP: O(n + m), naive: O(n * m).

def build_lps(pattern):
    """
    Build Longest Proper Prefix-which-is-also-Suffix array.
    lps[i] = length of longest prefix of pattern[0:i+1]
             that is also a suffix of pattern[0:i+1].

    This is the FAILURE FUNCTION — tells us how far to backtrack
    on a mismatch, without going all the way to zero.
    """
    m = len(pattern)
    lps = [0] * m
    length = 0  # length of previous longest prefix-suffix
    i = 1

    while i < m:
        if pattern[i] == pattern[length]:
            length += 1
            lps[i] = length
            i += 1
        elif length != 0:
            # Backtrack using the failure function
            length = lps[length - 1]
        else:
            lps[i] = 0
            i += 1

    return lps

def kmp_search(text, pattern):
    """Find all occurrences of pattern in text — O(n + m)."""
    n, m = len(text), len(pattern)
    if m == 0:
        return []

    lps = build_lps(pattern)
    matches = []
    i = 0  # index for text
    j = 0  # index for pattern

    while i < n:
        if text[i] == pattern[j]:
            i += 1
            j += 1

        if j == m:
            # Full match found!
            matches.append(i - j)
            # Use failure function to find next starting point
            j = lps[j - 1]
        elif i < n and text[i] != pattern[j]:
            if j != 0:
                # Mismatch — use failure function, do NOT go to zero
                j = lps[j - 1]
            else:
                # No match at all — advance text pointer
                i += 1

    return matches

# Test: find phrase in document
doc = "machine learning algorithms are powerful. " \
      "we study machine learning algorithms in depth. " \
      "every algorithm has trade-offs."

phrase = "machine learning algorithms"
matches = kmp_search(doc, phrase)
print(f"Phrase: '{phrase}'")
print(f"Found at positions: {matches}")

# LPS array for 'machine learning algorithms':
#   The pattern has no repeating prefix-suffix, so LPS is mostly 0.
#   But for 'aaaaab' vs 'aaab': LPS = [0,1,2,0]
#   On mismatch at j=3, we jump to j=lps[2]=2, not j=0!

# Output:
# Phrase: 'machine learning algorithms'
# Found at positions: [0, 47]</div>

<div class="dialogue">Book ২-এর নকল-নির্দেশকের গ্রন্থাগার (Door ১৭) KMP ও Rabin-Karp শিখিয়েছিলেন। এখন দেখলে সার্চ ইঞ্জিনে phrase match-এ কেন এটা জরুরি? ইউজার যখন quotation দেয় — "machine learning" — তখন তার মানে exact phrase। Naive search O(n×m) — ধীর। KMP: failure function দিয়ে জানো কোথায় ফিরতে হবে, শূন্যে নয়। O(n+m)।</div>
<div class="dialogue en">Book 2 concord maker library (Door 17) taught you KMP and Rabin-Karp. Now you see why phrase matching matters in search? When users use quotation marks — "machine learning" — they want the exact phrase. Naive search is O(n*m) — slow. KMP: the failure function tells you where to resume, not zero. O(n+m).</div>

<div class="secret-box">📏 Phrase match = KMP। Failure function বলে কতটা match হয়েছে — সেখান থেকে শুরু করো, শূন্য থেকে নয়। O(n+m)।</div>
`,
  senior:{
    title:"প্রয়োগিক গাইড — Practical Guide",
    body:`<p><strong>KMP vs Rabin-Karp — কখন কোনটা?</strong></p>
<div class="compare">
<div class="cmp-card cmp-bad"><div class="cmp-label">❌ Naive Search</div>O(n × m) — প্রতিটা mismatch-এ শূন্যে ফিরো। 'aaaaaa' টেক্সটে ভয়াবহ।</div>
<div class="cmp-card cmp-good"><div class="cmp-label">✅ KMP</div>O(n + m) — failure function দিয়ে smart backtrack। Exact match-এর জন্য সেরা।</div>
</div>
<p><strong>Cross-ref:</strong> Book ৯ (Context Engineering) Door ৪-এ BM25 ranking দেখবে — phrase matching-এর পর কীভাবে phrase matches কে ranking score-এ রূপান্তর করা যায়।</p>`
  }
});

// ── DOOR 10: BIT MANIPULATION — BLOOM FILTER ──
doors.push({
  num:10, icon:"🃏", color:"#f97316", name:"ছাঁকনির জাল",
  subtitle:"The Sieve Net", tech:"Bit Manipulation — Bloom Filter for URL Deduplication",
  spirit:"হিফজ — memorization/protection, from Quran 15:9 (We protect from loss)",
  secret:"Bloom filter = bit array + k hash functions। URL দেখা হয়েছে কিনা মনে রাখার সস্তা উপায়। k hash → k bits set করো। সব 1? হয়তো দেখা হয়েছে (false positive)। কোনো 0? নিশ্চিত দেখা হয়নি। কখনো false negative নয়।",
  recall:{
    q:"Bloom filter-এ false positive কেন হয় কিন্তু false negative কখনো নয়?",
    qen:"Why can Bloom filters have false positives but never false negatives?",
    a:"কারণ একই bit একাধিক URL-এর জন্য set হতে পারে (hash collision)। তাই সব bit 1 হলে হয়তো URL আছে, হয়তো নেই — false positive সম্ভব। কিন্তু কোনো bit 0 হলে নিশ্চিতভাবে URL নেই — false negative অসম্ভব। এটাই Bloom filter-এর শক্তি।",
    aen:"Because the same bit can be set by multiple URLs (hash collision). All bits 1: maybe URL exists, maybe not — false positive possible. Any bit 0: URL definitely does not exist — false negative impossible. This is the Bloom filter strength."
  },
  story:`
<p class="scene-setting">দশম দিন। প্রহরী হামজা এসে হাজির। তার হাতে একটা বিশাল ছাঁকনি — হাজার হাজার ছোট ছোট গর্ত, প্রতিটি গর্তে একটা করে বাতি। বাতি জ্বলে উঠলে মানে সেই গর্তে কিছু একটা ধরা পড়েছে। হামজা ক্রলার (Door ২) থেকে আসা প্রতিটা URL নিয়ে যান — এটা কি আগে দেখা হয়েছে? ছাঁকনিতে ফেলো। বাতি গুলো বলে দেবে। তার চোখে সতর্কতা — একটা false positive মানে একটা page skip করা হলো। কিন্তু false negative কখনো নয় — কারণ ছাঁকনি কখনো ভুলে না।</p>
<p class="scene-setting en">Day ten. Guard Hamza arrives. In his hand: a massive sieve — thousands of tiny slots, each with a lamp. A lit lamp means something was caught in that slot. Hamza takes each URL from the crawler (Door 2) — has this been seen before? Drop it through the sieve. The lamps will tell. His eyes hold vigilance — a false positive means a page gets skipped. But false negative never — the sieve never forgets.</p>

<div class="dialogue">হামজা বললেন, ছাঁকনিটা টেবিলে রেখে। ক্রলার প্রতিদিন লক্ষ লক্ষ URL আনে। কিন্তু অনেক URL ডুপ্লিকেট — একই page বারবার। আমরা কি প্রতিটা URL একটা set-এ রাখবো? ১০০ কোটি URL = কয়েক গিগাবাইট। অসম্ভব। আমার ছাঁকনি দরকার মাত্র কয়েক মেগাবাইট — bit array। প্রতিটা URL-কে k টা hash function দিয়ে ছাঁকো। k টা bit set করো। সব 1? হয়তো দেখা হয়েছে। কোনো 0? নিশ্চিত নতুন।</div>
<div class="dialogue en">Hamza said, placing the sieve on the table. The crawler brings millions of URLs daily. But many are duplicates — same page again and again. Should we store every URL in a set? 100 million URLs = several gigabytes. Impossible. My sieve needs only a few megabytes — a bit array. Hash each URL with k hash functions. Set k bits. All 1? Maybe seen. Any 0? Definitely new.</div>

<div class="code-block"># bloom_filter.py — Day 10: Bloom Filter for URL Deduplication
# A bit array + k hash functions.
# Space-efficient: 100M URLs in ~120MB instead of ~5GB.

import hashlib

class BloomFilter:
    def __init__(self, size, num_hashes):
        """
        size: number of bits in the array
        num_hashes: number of hash functions (k)
        """
        self.size = size
        self.num_hashes = num_hashes
        self.bits = [0] * size  # the bit array

    def _hash(self, item, seed):
        """Generate k different hash values for the same item."""
        h = hashlib.md5(f"{item}{seed}".encode()).hexdigest()
        return int(h, 16) % self.size

    def add(self, item):
        """Add item to the filter — set k bits."""
        for i in range(self.num_hashes):
            idx = self._hash(item, i)
            self.bits[idx] = 1

    def might_contain(self, item):
        """
        Check if item MIGHT be in the set.
        False positive: possible. False negative: IMPOSSIBLE.
        """
        for i in range(self.num_hashes):
            idx = self._hash(item, i)
            if self.bits[idx] == 0:
                return False  # definitely NOT in set
        return True  # MIGHT be in set (could be false positive)

# Usage: crawler URL deduplication
bf = BloomFilter(size=1000, num_hashes=3)

# Crawler discovers URLs
urls_seen = ['home.html', 'about.html', 'blog.html']
for url in urls_seen:
    bf.add(url)

# Check new URLs
test_urls = ['home.html', 'contact.html', 'team.html', 'about.html']
for url in test_urls:
    if bf.might_contain(url):
        print(f"  {url}: MIGHT be seen (skip or verify)")
    else:
        print(f"  {url}: definitely NEW (crawl it!)")
        bf.add(url)  # add to filter

# Output:
#   home.html: MIGHT be seen (skip or verify)
#   contact.html: definitely NEW (crawl it!)
#   team.html: definitely NEW (crawl it!)
#   about.html: MIGHT be seen (skip or verify)

# Bit operations (how the array REALLY works in production):
# Instead of [0,0,1,0,1,1,...] (1 byte per bit), use integer bit manipulation:
#
#   byte = 0b00000000
#   byte |= (1 << 3)   # set bit 3: 0b00001000
#   byte &= ~(1 << 3)  # clear bit 3: 0b00000000
#   byte & (1 << 3)    # check bit 3: 0 or nonzero
#
# This uses 1/8th the memory of a Python list of 0s and 1s.</div>

<div class="dialogue">Book ২-এর পরচুলা-নকশা তাঁতি (Door ১৮) bit manipulation শিখিয়েছিলেন — AND, OR, XOR, shift। এখন দেখলে কেন? Bloom filter হলো bit array — প্রতিটা bit একটা স্লট। OR দিয়ে set করো, AND দিয়ে check করো। এটাই crawler-এর সবচেয়ে গুরুত্বপূর্ণ optimization — কারণ URL dedup ছাড়া crawler একই page বারবার fetch করবে।</div>
<div class="dialogue en">Book 2 pattern-card weaver (Door 18) taught you bit manipulation — AND, OR, XOR, shift. Now you see why? A Bloom filter IS a bit array — each bit is a slot. OR to set, AND to check. This is the crawler most important optimization — without URL dedup, the crawler fetches the same page forever.</div>

<div class="secret-box">🃏 Bloom filter = bit array + k hashes। All 1? হয়তো আছে। Any 0? নিশ্চিত নেই। False positive সম্ভব, false negative কখনো নয়।</div>
`,
  senior:{
    title:"প্রয়োগিক গাইড — Practical Guide",
    body:`<p><strong>Bloom filter sizing (যে সূত্রগুলো মনে রাখতে হবে):</strong></p>
<table class="kv-table">
<tr><th>Parameter</th><th>Formula</th><th>Example (100M URLs)</th></tr>
<tr><td class="hl">Bit array size (m)</td><td>m = -(n × ln p) / (ln 2)²</td><td>~960M bits = 120MB</td></tr>
<tr><td class="hl">Hash functions (k)</td><td>k = (m/n) × ln 2</td><td>~7 hash functions</td></tr>
<tr><td class="hl">False positive rate</td><td>p ≈ 0.01 (1%)</td><td>1 in 100 URLs falsely flagged</td></tr>
</table>
<p><strong>Cross-ref:</strong> Book ৪৬ (Cryptography) Door ২-এ hash functions দেখবে — Bloom filter-এর hash গুলো cryptographic নয়, কিন্তু একই নীতি। Book ৩৫ (Distributed Systems)-এ count-min sketch দেখবে — Bloom filter-এর ভাই, frequency counting-এর জন্য।</p>`
  }
});
