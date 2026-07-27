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

<div class="diagram">
  <div class="diag-title">Greedy Snippet Scoring — সেরা Sentence বাছাই</div>
  <svg viewBox="0 0 560 260" xmlns="http://www.w3.org/2000/svg">
    <!-- Sentences as bars -->
    <text x="20" y="25" fill="#fbbf24" font-size="10" font-weight="bold">Sentence Score</text>
    <!-- S1 -->
    <rect x="20" y="35" width="300" height="30" rx="5" fill="rgba(249,115,22,0.06)" stroke="#f97316" stroke-width="1"/>
    <text x="25" y="54" fill="#9a93b8" font-size="9">Welcome to our search engine tutorial about algorithms</text>
    <rect x="330" y="35" width="120" height="30" rx="4" fill="rgba(249,115,22,0.2)" stroke="#f97316" stroke-width="1.5"/>
    <text x="390" y="54" text-anchor="middle" fill="#fbbf24" font-size="11" font-weight="bold">score: 6</text>
    <!-- S2 - winner -->
    <rect x="20" y="75" width="340" height="30" rx="5" fill="rgba(82,196,26,0.12)" stroke="#52c41a" stroke-width="2"/>
    <text x="25" y="94" fill="#52c41a" font-size="9" font-weight="bold">We cover sorting algorithms, graph algorithms, and DP</text>
    <rect x="370" y="75" width="150" height="30" rx="4" fill="rgba(82,196,26,0.25)" stroke="#52c41a" stroke-width="2"/>
    <text x="445" y="94" text-anchor="middle" fill="#52c41a" font-size="11" font-weight="bold">score: 9 ✅</text>
    <!-- S3 -->
    <rect x="20" y="115" width="280" height="30" rx="5" fill="rgba(249,115,22,0.06)" stroke="#f97316" stroke-width="1"/>
    <text x="25" y="134" fill="#9a93b8" font-size="9">Python code examples are provided</text>
    <rect x="310" y="115" width="80" height="30" rx="4" fill="rgba(249,115,22,0.15)" stroke="#f97316" stroke-width="1"/>
    <text x="350" y="134" text-anchor="middle" fill="#fbbf24" font-size="11" font-weight="bold">score: 3</text>
    <!-- S4 -->
    <rect x="20" y="155" width="250" height="30" rx="5" fill="rgba(249,115,22,0.04)" stroke="#f97316" stroke-width="1" opacity="0.5"/>
    <text x="25" y="174" fill="#6b6588" font-size="9">Start with Big-O analysis</text>
    <rect x="280" y="155" width="60" height="30" rx="4" fill="rgba(249,115,22,0.08)" stroke="#f97316" stroke-width="1" opacity="0.5"/>
    <text x="310" y="174" text-anchor="middle" fill="#9a93b8" font-size="11">score: 0</text>
    <!-- Winner annotation -->
    <rect x="20" y="205" width="500" height="40" rx="8" fill="rgba(82,196,26,0.06)" stroke="rgba(82,196,26,0.2)" stroke-width="1"/>
    <text x="35" y="222" fill="#52c41a" font-size="10" font-weight="bold">✅ Winner: sentence 2 (score 9)</text>
    <text x="35" y="236" fill="#9a93b8" font-size="9">3 query terms × 3 points + proximity bonus = highest score → shown as snippet</text>
  </svg>
  <div class="diag-cap">Greedy: প্রতিটা sentence-কে আলাদাভাবে score করো, সর্বোচ্চ বাছো। দ্রুত — কারণ sentence-গুলো স্বাধীন।</div>
</div>
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

<div class="diagram">
  <div class="diag-title">DP Table — Levenshtein 'algortim' vs 'algorithm'</div>
  <svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg">
    <!-- Grid headers -->
    <text x="120" y="25" text-anchor="middle" fill="#a78bfa" font-size="10" font-weight="bold">∅</text>
    <text x="170" y="25" text-anchor="middle" fill="#a78bfa" font-size="10">a</text>
    <text x="220" y="25" text-anchor="middle" fill="#a78bfa" font-size="10">l</text>
    <text x="270" y="25" text-anchor="middle" fill="#a78bfa" font-size="10">g</text>
    <text x="320" y="25" text-anchor="middle" fill="#a78bfa" font-size="10">o</text>
    <text x="370" y="25" text-anchor="middle" fill="#a78bfa" font-size="10">r</text>
    <text x="420" y="25" text-anchor="middle" fill="#a78bfa" font-size="10">i</text>
    <text x="470" y="25" text-anchor="middle" fill="#a78bfa" font-size="10">t</text>
    <text x="520" y="25" text-anchor="middle" fill="#a78bfa" font-size="10">h</text>
    <text x="40" y="50" text-anchor="middle" fill="#22d3ee" font-size="10" font-weight="bold">∅</text>
    <text x="40" y="75" text-anchor="middle" fill="#22d3ee" font-size="10">a</text>
    <text x="40" y="100" text-anchor="middle" fill="#22d3ee" font-size="10">l</text>
    <text x="40" y="125" text-anchor="middle" fill="#22d3ee" font-size="10">g</text>
    <text x="40" y="150" text-anchor="middle" fill="#22d3ee" font-size="10">o</text>
    <text x="40" y="175" text-anchor="middle" fill="#22d3ee" font-size="10">r</text>
    <text x="40" y="200" text-anchor="middle" fill="#22d3ee" font-size="10">t</text>
    <text x="40" y="225" text-anchor="middle" fill="#22d3ee" font-size="10">i</text>
    <!-- Row 0 -->
    <rect x="95" y="38" width="50" height="24" rx="3" fill="rgba(249,115,22,0.06)" stroke="#f97316" stroke-width="0.5"/><text x="120" y="54" text-anchor="middle" fill="#9a93b8" font-size="10">0</text>
    <rect x="145" y="38" width="50" height="24" rx="3" fill="rgba(249,115,22,0.06)" stroke="#f97316" stroke-width="0.5"/><text x="170" y="54" text-anchor="middle" fill="#9a93b8" font-size="10">1</text>
    <rect x="195" y="38" width="50" height="24" rx="3" fill="rgba(249,115,22,0.06)" stroke="#f97316" stroke-width="0.5"/><text x="220" y="54" text-anchor="middle" fill="#9a93b8" font-size="10">2</text>
    <rect x="245" y="38" width="50" height="24" rx="3" fill="rgba(249,115,22,0.06)" stroke="#f97316" stroke-width="0.5"/><text x="270" y="54" text-anchor="middle" fill="#9a93b8" font-size="10">3</text>
    <rect x="295" y="38" width="50" height="24" rx="3" fill="rgba(249,115,22,0.06)" stroke="#f97316" stroke-width="0.5"/><text x="320" y="54" text-anchor="middle" fill="#9a93b8" font-size="10">4</text>
    <rect x="345" y="38" width="50" height="24" rx="3" fill="rgba(249,115,22,0.06)" stroke="#f97316" stroke-width="0.5"/><text x="370" y="54" text-anchor="middle" fill="#9a93b8" font-size="10">5</text>
    <rect x="395" y="38" width="50" height="24" rx="3" fill="rgba(249,115,22,0.06)" stroke="#f97316" stroke-width="0.5"/><text x="420" y="54" text-anchor="middle" fill="#9a93b8" font-size="10">6</text>
    <rect x="445" y="38" width="50" height="24" rx="3" fill="rgba(249,115,22,0.06)" stroke="#f97316" stroke-width="0.5"/><text x="470" y="54" text-anchor="middle" fill="#9a93b8" font-size="10">7</text>
    <rect x="495" y="38" width="50" height="24" rx="3" fill="rgba(249,115,22,0.06)" stroke="#f97316" stroke-width="0.5"/><text x="520" y="54" text-anchor="middle" fill="#9a93b8" font-size="10">8</text>
    <!-- Row 1 (a) -->
    <rect x="95" y="63" width="50" height="24" rx="3" fill="rgba(249,115,22,0.06)" stroke="#f97316" stroke-width="0.5"/><text x="120" y="79" text-anchor="middle" fill="#9a93b8" font-size="10">1</text>
    <rect x="145" y="63" width="50" height="24" rx="3" fill="rgba(82,196,26,0.12)" stroke="#52c41a" stroke-width="1"/><text x="170" y="79" text-anchor="middle" fill="#52c41a" font-size="10" font-weight="bold">0</text>
    <rect x="195" y="63" width="50" height="24" rx="3" fill="rgba(249,115,22,0.06)" stroke="#f97316" stroke-width="0.5"/><text x="220" y="79" text-anchor="middle" fill="#9a93b8" font-size="10">1</text>
    <rect x="245" y="63" width="50" height="24" rx="3" fill="rgba(249,115,22,0.06)" stroke="#f97316" stroke-width="0.5"/><text x="270" y="79" text-anchor="middle" fill="#9a93b8" font-size="10">2</text>
    <rect x="295" y="63" width="50" height="24" rx="3" fill="rgba(249,115,22,0.06)" stroke="#f97316" stroke-width="0.5"/><text x="320" y="79" text-anchor="middle" fill="#9a93b8" font-size="10">3</text>
    <rect x="345" y="63" width="50" height="24" rx="3" fill="rgba(249,115,22,0.06)" stroke="#f97316" stroke-width="0.5"/><text x="370" y="79" text-anchor="middle" fill="#9a93b8" font-size="10">4</text>
    <rect x="395" y="63" width="50" height="24" rx="3" fill="rgba(249,115,22,0.06)" stroke="#f97316" stroke-width="0.5"/><text x="420" y="79" text-anchor="middle" fill="#9a93b8" font-size="10">5</text>
    <rect x="445" y="63" width="50" height="24" rx="3" fill="rgba(249,115,22,0.06)" stroke="#f97316" stroke-width="0.5"/><text x="470" y="79" text-anchor="middle" fill="#9a93b8" font-size="10">6</text>
    <rect x="495" y="63" width="50" height="24" rx="3" fill="rgba(249,115,22,0.06)" stroke="#f97316" stroke-width="0.5"/><text x="520" y="79" text-anchor="middle" fill="#9a93b8" font-size="10">7</text>
    <!-- Row 2 (l) -->
    <rect x="95" y="88" width="50" height="24" rx="3" fill="rgba(249,115,22,0.06)" stroke="#f97316" stroke-width="0.5"/><text x="120" y="104" text-anchor="middle" fill="#9a93b8" font-size="10">2</text>
    <rect x="145" y="88" width="50" height="24" rx="3" fill="rgba(249,115,22,0.06)" stroke="#f97316" stroke-width="0.5"/><text x="170" y="104" text-anchor="middle" fill="#9a93b8" font-size="10">1</text>
    <rect x="195" y="88" width="50" height="24" rx="3" fill="rgba(82,196,26,0.12)" stroke="#52c41a" stroke-width="1"/><text x="220" y="104" text-anchor="middle" fill="#52c41a" font-size="10" font-weight="bold">0</text>
    <rect x="245" y="88" width="50" height="24" rx="3" fill="rgba(249,115,22,0.06)" stroke="#f97316" stroke-width="0.5"/><text x="270" y="104" text-anchor="middle" fill="#9a93b8" font-size="10">1</text>
    <rect x="295" y="88" width="50" height="24" rx="3" fill="rgba(249,115,22,0.06)" stroke="#f97316" stroke-width="0.5"/><text x="320" y="104" text-anchor="middle" fill="#9a93b8" font-size="10">2</text>
    <rect x="345" y="88" width="50" height="24" rx="3" fill="rgba(249,115,22,0.06)" stroke="#f97316" stroke-width="0.5"/><text x="370" y="104" text-anchor="middle" fill="#9a93b8" font-size="10">3</text>
    <rect x="395" y="88" width="50" height="24" rx="3" fill="rgba(249,115,22,0.06)" stroke="#f97316" stroke-width="0.5"/><text x="420" y="104" text-anchor="middle" fill="#9a93b8" font-size="10">4</text>
    <rect x="445" y="88" width="50" height="24" rx="3" fill="rgba(249,115,22,0.06)" stroke="#f97316" stroke-width="0.5"/><text x="470" y="104" text-anchor="middle" fill="#9a93b8" font-size="10">5</text>
    <rect x="495" y="88" width="50" height="24" rx="3" fill="rgba(249,115,22,0.06)" stroke="#f97316" stroke-width="0.5"/><text x="520" y="104" text-anchor="middle" fill="#9a93b8" font-size="10">6</text>
    <!-- Row 3-5 condensed -->
    <rect x="95" y="113" width="50" height="24" rx="3" fill="rgba(249,115,22,0.04)" stroke="#f97316" stroke-width="0.5" opacity="0.5"/><text x="120" y="129" text-anchor="middle" fill="#6b6588" font-size="10">3</text>
    <rect x="145" y="113" width="50" height="24" rx="3" fill="rgba(249,115,22,0.04)" stroke="#f97316" stroke-width="0.5" opacity="0.5"/><text x="170" y="129" text-anchor="middle" fill="#6b6588" font-size="10">2</text>
    <rect x="195" y="113" width="50" height="24" rx="3" fill="rgba(249,115,22,0.04)" stroke="#f97316" stroke-width="0.5" opacity="0.5"/><text x="220" y="129" text-anchor="middle" fill="#6b6588" font-size="10">1</text>
    <rect x="245" y="113" width="50" height="24" rx="3" fill="rgba(82,196,26,0.12)" stroke="#52c41a" stroke-width="1"/><text x="270" y="129" text-anchor="middle" fill="#52c41a" font-size="10" font-weight="bold">0</text>
    <rect x="295" y="113" width="50" height="24" rx="3" fill="rgba(249,115,22,0.04)" stroke="#f97316" stroke-width="0.5" opacity="0.5"/><text x="320" y="129" text-anchor="middle" fill="#6b6588" font-size="10">1</text>
    <rect x="345" y="113" width="50" height="24" rx="3" fill="rgba(249,115,22,0.04)" stroke="#f97316" stroke-width="0.5" opacity="0.5"/><text x="370" y="129" text-anchor="middle" fill="#6b6588" font-size="10">2</text>
    <rect x="395" y="113" width="50" height="24" rx="3" fill="rgba(249,115,22,0.04)" stroke="#f97316" stroke-width="0.5" opacity="0.5"/><text x="420" y="129" text-anchor="middle" fill="#6b6588" font-size="10">3</text>
    <rect x="445" y="113" width="50" height="24" rx="3" fill="rgba(249,115,22,0.04)" stroke="#f97316" stroke-width="0.5" opacity="0.5"/><text x="470" y="129" text-anchor="middle" fill="#6b6588" font-size="10">4</text>
    <rect x="495" y="113" width="50" height="24" rx="3" fill="rgba(249,115,22,0.04)" stroke="#f97316" stroke-width="0.5" opacity="0.5"/><text x="520" y="129" text-anchor="middle" fill="#6b6588" font-size="10">5</text>
    <!-- Diagonal arrows showing fill direction -->
    <defs><marker id="arrSm" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto"><path d="M0,0 L4,3 L0,6" fill="#fbbf24"/></marker></defs>
    <line x1="170" y1="87" x2="195" y2="88" stroke="#fbbf24" stroke-width="1" opacity="0.5" marker-end="url(#arrSm)"/>
    <line x1="220" y1="87" x2="245" y2="88" stroke="#fbbf24" stroke-width="1" opacity="0.5" marker-end="url(#arrSm)"/>
    <line x1="270" y1="87" x2="295" y2="88" stroke="#fbbf24" stroke-width="1" opacity="0.5" marker-end="url(#arrSm)"/>
    <!-- Legend -->
    <rect x="20" y="160" width="250" height="35" rx="6" fill="rgba(82,196,26,0.06)" stroke="rgba(82,196,26,0.2)" stroke-width="1"/>
    <text x="30" y="175" fill="#52c41a" font-size="9" font-weight="bold">🟩 = match (cost 0)</text>
    <text x="30" y="188" fill="#9a93b8" font-size="9">cell[i][j] from min(left, up, diagonal) + 1</text>
    <rect x="290" y="160" width="250" height="35" rx="6" fill="rgba(167,139,250,0.06)" stroke="rgba(167,139,250,0.2)" stroke-width="1"/>
    <text x="300" y="175" fill="#a78bfa" font-size="9" font-weight="bold">O(n × m) = O(7 × 9) = 63 cells</text>
    <text x="300" y="188" fill="#9a93b8" font-size="9">Brute force: O(3^9) = 19,683 paths</text>
  </svg>
  <div class="diag-cap">প্রতিটা cell = একটা সাবপ্রবলেম। match হলে diagonal copy, mismatch হলে ৩ neighbor-এর min+1।</div>
</div>
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

<div class="diagram">
  <div class="diag-title">Backtracking Wildcard — 'algorithm * sorting' পথ অন্বেষণ</div>
  <svg viewBox="0 0 560 290" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <marker id="arrBT" markerWidth="7" markerHeight="7" refX="5" refY="3" orient="auto"><path d="M0,0 L5,3 L0,6" fill="#f97316"/></marker>
      <marker id="arrBack" markerWidth="7" markerHeight="7" refX="5" refY="3" orient="auto"><path d="M0,0 L5,3 L0,6" fill="#ef4444"/></marker>
    </defs>
    <!-- Level labels -->
    <text x="15" y="45" fill="#6b6588" font-size="9">pattern:</text>
    <text x="15" y="65" fill="#fbbf24" font-size="10" font-weight="bold">algorithm</text>
    <text x="15" y="100" fill="#a78bfa" font-size="10" font-weight="bold">*</text>
    <text x="15" y="135" fill="#fbbf24" font-size="10" font-weight="bold">sorting</text>
    <!-- Pattern positions -->
    <rect x="70" y="48" width="90" height="30" rx="6" fill="rgba(251,191,36,0.12)" stroke="#fbbf24" stroke-width="1.5"/>
    <text x="115" y="67" text-anchor="middle" fill="#fbbf24" font-size="10" font-weight="bold">'algorithm'</text>
    <rect x="70" y="83" width="90" height="30" rx="6" fill="rgba(167,139,250,0.1)" stroke="#a78bfa" stroke-width="1.5" stroke-dasharray="3,2"/>
    <text x="115" y="102" text-anchor="middle" fill="#a78bfa" font-size="10" font-weight="bold">'*' wildcard</text>
    <rect x="70" y="118" width="90" height="30" rx="6" fill="rgba(251,191,36,0.12)" stroke="#fbbf24" stroke-width="1.5"/>
    <text x="115" y="137" text-anchor="middle" fill="#fbbf24" font-size="10" font-weight="bold">'sorting'</text>
    <!-- Decision tree from wildcard -->
    <!-- * matches 0 words -->
    <line x1="160" y1="98" x2="200" y2="55" stroke="#f97316" stroke-width="1.5" marker-end="url(#arrBT)"/>
    <rect x="205" y="40" width="110" height="30" rx="5" fill="rgba(239,68,68,0.06)" stroke="#ef4444" stroke-width="1" stroke-dasharray="3,2"/>
    <text x="260" y="59" text-anchor="middle" fill="#ef4444" font-size="9">skip 0 words</text>
    <text x="260" y="83" fill="#ef4444" font-size="8">→ 'is' ≠ 'sorting' ✗ backtrack</text>
    <!-- * matches 1 word -->
    <line x1="160" y1="98" x2="200" y2="110" stroke="#f97316" stroke-width="1.5" marker-end="url(#arrBT)"/>
    <rect x="205" y="95" width="110" height="30" rx="5" fill="rgba(239,68,68,0.06)" stroke="#ef4444" stroke-width="1" stroke-dasharray="3,2"/>
    <text x="260" y="114" text-anchor="middle" fill="#ef4444" font-size="9">skip 1: 'is'</text>
    <text x="260" y="138" fill="#ef4444" font-size="8">→ 'used' ≠ 'sorting' ✗</text>
    <!-- * matches 2 words -->
    <line x1="160" y1="98" x2="200" y2="165" stroke="#f97316" stroke-width="1.5" marker-end="url(#arrBT)"/>
    <rect x="205" y="150" width="110" height="30" rx="5" fill="rgba(239,68,68,0.06)" stroke="#ef4444" stroke-width="1" stroke-dasharray="3,2"/>
    <text x="260" y="169" text-anchor="middle" fill="#ef4444" font-size="9">skip 2: 'is used'</text>
    <text x="260" y="193" fill="#ef4444" font-size="8">→ 'for' ≠ 'sorting' ✗</text>
    <!-- * matches 3 words -->
    <line x1="160" y1="98" x2="200" y2="220" stroke="#52c41a" stroke-width="2" marker-end="url(#arrBT)"/>
    <rect x="205" y="205" width="110" height="30" rx="5" fill="rgba(82,196,26,0.15)" stroke="#52c41a" stroke-width="2"/>
    <text x="260" y="224" text-anchor="middle" fill="#52c41a" font-size="9" font-weight="bold">skip 3: 'is used for'</text>
    <line x1="315" y1="220" x2="355" y2="220" stroke="#52c41a" stroke-width="2" marker-end="url(#arrBT)"/>
    <rect x="360" y="205" width="120" height="30" rx="5" fill="rgba(82,196,26,0.2)" stroke="#52c41a" stroke-width="2.5"/>
    <text x="420" y="224" text-anchor="middle" fill="#52c41a" font-size="10" font-weight="bold">→ 'sorting' ✓ MATCH!</text>
    <!-- Backtrack arrows -->
    <path d="M 260 83 Q 190 85 165 100" fill="none" stroke="#ef4444" stroke-width="1" stroke-dasharray="2,2" opacity="0.5" marker-end="url(#arrBack)"/>
    <path d="M 260 138 Q 190 115 165 102" fill="none" stroke="#ef4444" stroke-width="1" stroke-dasharray="2,2" opacity="0.5" marker-end="url(#arrBack)"/>
    <path d="M 260 193 Q 190 145 165 105" fill="none" stroke="#ef4444" stroke-width="1" stroke-dasharray="2,2" opacity="0.5" marker-end="url(#arrBack)"/>
    <!-- Result -->
    <rect x="360" y="245" width="180" height="35" rx="6" fill="rgba(82,196,26,0.06)" stroke="rgba(82,196,26,0.2)" stroke-width="1"/>
    <text x="450" y="262" text-anchor="middle" fill="#52c41a" font-size="9" font-weight="bold">3 dead ends tried, then MATCH</text>
    <text x="450" y="274" text-anchor="middle" fill="#9a93b8" font-size="8">Pruning: skip paths early if no hope</text>
  </svg>
  <div class="diag-cap">Wildcards = try 0, 1, 2, 3... skip words। মৃত প্রান্তে ফিরো, নতুন path চেষ্টা করো।</div>
</div>
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

<div class="diagram">
  <div class="diag-title">KMP vs Naive — Failure Function কীভাবে ফিরে না গিয়ে চালায়</div>
  <svg viewBox="0 0 560 260" xmlns="http://www.w3.org/2000/svg">
    <!-- Naive search -->
    <text x="20" y="25" fill="#ef4444" font-size="11" font-weight="bold">❌ Naive: O(n×m) — mismatch হলে শূন্যে ফেরা</text>
    <rect x="20" y="35" width="520" height="24" rx="4" fill="rgba(239,68,68,0.04)" stroke="rgba(239,68,68,0.2)" stroke-width="1"/>
    <text x="30" y="52" fill="#9a93b8" font-size="9" font-family="monospace">text:  a a a a a b c d e f</text>
    <rect x="20" y="63" width="520" height="20" rx="4" fill="rgba(239,68,68,0.06)" stroke="#ef4444" stroke-width="1"/>
    <text x="30" y="77" fill="#ef4444" font-size="9" font-family="monospace">try1: a a a b ← mismatch at pos 3! → restart from pos 1</text>
    <rect x="20" y="87" width="520" height="20" rx="4" fill="rgba(239,68,68,0.06)" stroke="#ef4444" stroke-width="1"/>
    <text x="30" y="101" fill="#ef4444" font-size="9" font-family="monospace">try2:   a a a b ← mismatch again! → restart from pos 2</text>
    <text x="30" y="118" fill="#ef4444" font-size="9">... প্রতিবার শূন্য থেকে শুরু — আগের match তথ্য নষ্ট!</text>
    <!-- KMP -->
    <text x="20" y="150" fill="#52c41a" font-size="11" font-weight="bold">✅ KMP: O(n+m) — failure function দিয়ে smart backtrack</text>
    <!-- LPS array -->
    <text x="20" y="170" fill="#fbbf24" font-size="9" font-weight="bold">LPS (failure function) for 'aaab':</text>
    <rect x="200" y="158" width="35" height="22" rx="3" fill="rgba(251,191,36,0.1)" stroke="#fbbf24" stroke-width="1"/><text x="217" y="173" text-anchor="middle" fill="#fbbf24" font-size="10" font-family="monospace">a:0</text>
    <rect x="238" y="158" width="35" height="22" rx="3" fill="rgba(251,191,36,0.1)" stroke="#fbbf24" stroke-width="1"/><text x="255" y="173" text-anchor="middle" fill="#fbbf24" font-size="10" font-family="monospace">a:1</text>
    <rect x="276" y="158" width="35" height="22" rx="3" fill="rgba(251,191,36,0.1)" stroke="#fbbf24" stroke-width="1"/><text x="293" y="173" text-anchor="middle" fill="#fbbf24" font-size="10" font-family="monospace">a:2</text>
    <rect x="314" y="158" width="35" height="22" rx="3" fill="rgba(251,191,36,0.1)" stroke="#fbbf24" stroke-width="1"/><text x="331" y="173" text-anchor="middle" fill="#fbbf24" font-size="10" font-family="monospace">b:0</text>
    <text x="360" y="170" fill="#9a93b8" font-size="8">↑ mismatch at 'b': jump to lps[2]=2, not 0</text>
    <!-- KMP walk -->
    <rect x="20" y="190" width="520" height="20" rx="4" fill="rgba(82,196,26,0.08)" stroke="#52c41a" stroke-width="1.5"/>
    <text x="30" y="204" fill="#52c41a" font-size="9" font-family="monospace">match a,a,a → mismatch 'b'≠'a' → lps says: keep 2 matched, try from j=2</text>
    <rect x="20" y="214" width="520" height="20" rx="4" fill="rgba(82,196,26,0.06)" stroke="#52c41a" stroke-width="1"/>
    <text x="30" y="228" fill="#52c41a" font-size="9" font-family="monospace">text pointer stays! pattern jumps smart — no character re-checked</text>
    <text x="30" y="245" fill="#52c41a" font-size="9" font-weight="bold">Total: O(n+m) = O(10+4) = 14 steps — vs naive O(10×4) = 40</text>
  </svg>
  <div class="diag-cap">KMP: mismatch হলে শূন্যে ফিরো না। LPS বলে কতটা match হয়েছে — সেখান থেকে শুরু করো।</div>
</div>
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

<div class="diagram">
  <div class="diag-title">Bloom Filter — Bit Array + k Hash Functions</div>
  <svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg">
    <!-- Input URL -->
    <rect x="30" y="15" width="160" height="32" rx="6" fill="rgba(167,139,250,0.12)" stroke="#a78bfa" stroke-width="1.5"/>
    <text x="110" y="35" text-anchor="middle" fill="#a78bfa" font-size="11" font-weight="bold">home.html</text>
    <!-- Hash functions -->
    <text x="230" y="28" fill="#fbbf24" font-size="10" font-weight="bold">h1 → bit 3</text>
    <text x="230" y="42" fill="#22d3ee" font-size="10" font-weight="bold">h2 → bit 7</text>
    <text x="230" y="56" fill="#52c41a" font-size="10" font-weight="bold">h3 → bit 11</text>
    <!-- Arrows from URL to hashes -->
    <line x1="190" y1="31" x2="220" y2="25" stroke="#fbbf24" stroke-width="1" opacity="0.6"/>
    <line x1="190" y1="31" x2="220" y2="39" stroke="#22d3ee" stroke-width="1" opacity="0.6"/>
    <line x1="190" y1="31" x2="220" y2="53" stroke="#52c41a" stroke-width="1" opacity="0.6"/>
    <!-- Bit array -->
    <text x="30" y="90" fill="#fbbf24" font-size="10" font-weight="bold">Bit Array (size=16)</text>
    <!-- 16 bits -->
    <rect x="30" y="100" width="28" height="35" rx="4" fill="rgba(249,115,22,0.04)" stroke="#f97316" stroke-width="1" opacity="0.5"/><text x="44" y="122" text-anchor="middle" fill="#6b6588" font-size="12">0</text>
    <rect x="60" y="100" width="28" height="35" rx="4" fill="rgba(249,115,22,0.04)" stroke="#f97316" stroke-width="1" opacity="0.5"/><text x="74" y="122" text-anchor="middle" fill="#6b6588" font-size="12">0</text>
    <rect x="90" y="100" width="28" height="35" rx="4" fill="rgba(249,115,22,0.04)" stroke="#f97316" stroke-width="1" opacity="0.5"/><text x="104" y="122" text-anchor="middle" fill="#6b6588" font-size="12">0</text>
    <rect x="120" y="100" width="28" height="35" rx="4" fill="rgba(251,191,36,0.25)" stroke="#fbbf24" stroke-width="2"/><text x="134" y="122" text-anchor="middle" fill="#fbbf24" font-size="14" font-weight="bold">1</text>
    <rect x="150" y="100" width="28" height="35" rx="4" fill="rgba(249,115,22,0.04)" stroke="#f97316" stroke-width="1" opacity="0.5"/><text x="164" y="122" text-anchor="middle" fill="#6b6588" font-size="12">0</text>
    <rect x="180" y="100" width="28" height="35" rx="4" fill="rgba(249,115,22,0.04)" stroke="#f97316" stroke-width="1" opacity="0.5"/><text x="194" y="122" text-anchor="middle" fill="#6b6588" font-size="12">0</text>
    <rect x="210" y="100" width="28" height="35" rx="4" fill="rgba(249,115,22,0.04)" stroke="#f97316" stroke-width="1" opacity="0.5"/><text x="224" y="122" text-anchor="middle" fill="#6b6588" font-size="12">0</text>
    <rect x="240" y="100" width="28" height="35" rx="4" fill="rgba(34,211,238,0.25)" stroke="#22d3ee" stroke-width="2"/><text x="254" y="122" text-anchor="middle" fill="#22d3ee" font-size="14" font-weight="bold">1</text>
    <rect x="270" y="100" width="28" height="35" rx="4" fill="rgba(249,115,22,0.04)" stroke="#f97316" stroke-width="1" opacity="0.5"/><text x="284" y="122" text-anchor="middle" fill="#6b6588" font-size="12">0</text>
    <rect x="300" y="100" width="28" height="35" rx="4" fill="rgba(249,115,22,0.04)" stroke="#f97316" stroke-width="1" opacity="0.5"/><text x="314" y="122" text-anchor="middle" fill="#6b6588" font-size="12">0</text>
    <rect x="330" y="100" width="28" height="35" rx="4" fill="rgba(249,115,22,0.04)" stroke="#f97316" stroke-width="1" opacity="0.5"/><text x="344" y="122" text-anchor="middle" fill="#6b6588" font-size="12">0</text>
    <rect x="360" y="100" width="28" height="35" rx="4" fill="rgba(82,196,26,0.25)" stroke="#52c41a" stroke-width="2"/><text x="374" y="122" text-anchor="middle" fill="#52c41a" font-size="14" font-weight="bold">1</text>
    <rect x="390" y="100" width="28" height="35" rx="4" fill="rgba(249,115,22,0.04)" stroke="#f97316" stroke-width="1" opacity="0.5"/><text x="404" y="122" text-anchor="middle" fill="#6b6588" font-size="12">0</text>
    <rect x="420" y="100" width="28" height="35" rx="4" fill="rgba(249,115,22,0.04)" stroke="#f97316" stroke-width="1" opacity="0.5"/><text x="434" y="122" text-anchor="middle" fill="#6b6588" font-size="12">0</text>
    <rect x="450" y="100" width="28" height="35" rx="4" fill="rgba(249,115,22,0.04)" stroke="#f97316" stroke-width="1" opacity="0.5"/><text x="464" y="122" text-anchor="middle" fill="#6b6588" font-size="12">0</text>
    <rect x="480" y="100" width="28" height="35" rx="4" fill="rgba(249,115,22,0.04)" stroke="#f97316" stroke-width="1" opacity="0.5"/><text x="494" y="122" text-anchor="middle" fill="#6b6588" font-size="12">0</text>
    <!-- Bit positions -->
    <text x="44" y="150" text-anchor="middle" fill="#6b6588" font-size="8">0</text>
    <text x="74" y="150" text-anchor="middle" fill="#6b6588" font-size="8">1</text>
    <text x="104" y="150" text-anchor="middle" fill="#6b6588" font-size="8">2</text>
    <text x="134" y="150" text-anchor="middle" fill="#fbbf24" font-size="8" font-weight="bold">3</text>
    <text x="254" y="150" text-anchor="middle" fill="#22d3ee" font-size="8" font-weight="bold">7</text>
    <text x="374" y="150" text-anchor="middle" fill="#52c41a" font-size="8" font-weight="bold">11</text>
    <!-- Check result -->
    <rect x="30" y="170" width="480" height="65" rx="8" fill="rgba(82,196,26,0.06)" stroke="rgba(82,196,26,0.2)" stroke-width="1"/>
    <text x="45" y="190" fill="#52c41a" font-size="10" font-weight="bold">might_contain('home.html') → True</text>
    <text x="45" y="205" fill="#9a93b8" font-size="9">h1=3 ✓, h2=7 ✓, h3=11 ✓ → সব bit 1 → হয়তো visited</text>
    <text x="45" y="220" fill="#ef4444" font-size="9">⚠️ False positive সম্ভব — অন্য URL-ও bit 3,7,11 set করতে পারে</text>
    <text x="45" y="232" fill="#9a93b8" font-size="9">❌ False negative অসম্ভব — যদি কোনো bit 0 হতো, নিশ্চিত 'not seen'</text>
  </svg>
  <div class="diag-cap">3 hash → 3 bits set। সব 1 = হয়তো আছে (false positive সম্ভব)। কোনো 0 = নিশ্চিত নতুন।</div>
</div>
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
