// ════════════════════════════════════════
// DSA BAZAAR — DOORS 5-8
// ════════════════════════════════════════

// ── DOOR 5: TREES (BST, TRIE) ──
doors.push({
  num:5, icon:"📜", color:"#b37feb", name:"বংশবিদের স্ক্রল",
  subtitle:"The Genealogist's Scroll", tech:"Trees (BST, Trie)",
  secret:"Tree = শাখাবিহীন সম্পর্ক। BST = বাঁয়া ছোট, ডানা বড়। Trie = অক্ষর ধরে ধরে শাখা। O(log n) সন্ধান।",
  recall:{
    q:"বংশবিদ হাজার নামের মধ্যে কীভাবে দ্রুত একজনকে খুঁজে পান?",
    qen:"How does the genealogist find one person among thousands quickly?",
    a:"BST-তে প্রতিটা ধাপে অর্ধেক বাদ যায় — বাঁয়া ছোট, ডানা বড়। O(log n)। Trie-তে অক্ষর ধরে নামায় — prefix matching-এ অপ্রতিদ্বন্দ্বী।",
    aen:"In a BST, each step eliminates half — left is smaller, right is larger. O(log n). In a trie, characters branch by letter — unmatched for prefix matching."
  },
  story:`
<p class="scene-setting">পঞ্চম দোকান। বংশবিদের কামরা। পুরনো কাগজের গন্ধ, কালির দাগ, দেয়ালে বিশাল বংশলতিকা — মূল থেকে ডাল, ডাল থেকে শাখা, শাখা থেকে প্রশাখা। শায়খ আব্দুর রহমান বসে আছেন — চশমা নাকের ডগায়, হাতে কলম, সামনে বিস্তৃত বংশতালিকা। প্রতিটা ব্যক্তি একটা node, parent থেকে child বেরোয় — শাখার মতো।</p>
<p class="scene-setting en">The fifth shop. The Genealogist's chamber. Smell of old paper, ink stains, a vast family tree on the wall — root to branch, branch to limb, limb to twig. Shaykh Abdur Rahman sits — spectacles on nose, pen in hand, the lineage spread before him. Each person is a node, parent to child — like branches.</p>

<div class="dialogue">তাঁতি বলেছিলেন — সম্পর্ক একটা জাল। কিন্তু আমি বলি — কখনো সম্পর্ক জাল নয়, বৃক্ষ। একটা মূল থেকে শাখা বেরোয়, প্রতিটা শাখা থেকে আরও। কোনো শাখা বৃত্তে ফিরে যায় না — উপরে উঠে বা নিচে নামে। এটাই tree — cycle নেই।</div>
<div class="dialogue en">"The weaver said — relationships are a web. But I say — sometimes relationships aren't a web, but a tree. From one root, branches grow, each branch splitting further. No branch loops back — it only goes up or down. This is a tree — no cycles."</div>

<div class="dialogue">BST — Binary Search Tree। একটা নিয়ম: বাঁয়া child সবসময় parent-এর চেয়ে ছোট, ডানা child সবসময় বড়। এই নিয়মে যেকোনো নাম খুঁজতে প্রতিটা ধাপে অর্ধেক বাদ যায় — O(log n)। হাজার নামের মধ্যে মাত্র ১০ ধাপে পাওয়া যায়।</div>
<div class="dialogue en">"BST — Binary Search Tree. One rule: left child is always smaller than parent, right child always larger. With this rule, searching eliminates half at each step — O(log n). Among a thousand names, found in just 10 steps."</div>

<div class="dialogue">Trie — আরেক ধরনের বৃক্ষ। কিন্তু এখানে শাখা হলো অক্ষর। "cat" → 'c' → 'a' → 't'। প্রতিটা অক্ষর একটা শাখা। এটা autocomplete-এ অপ্রতিদ্বন্দ্বী। ইউজার টাইপ করছে "ca" — trie বলে দেয় cat, car, card সব সম্ভায় শাখা আছে। Tokenizer-এও — LLM কীভাবে শব্দ ভাঙে? Trie-এর মতো করে।</div>
<div class="dialogue en">"Trie — another kind of tree. But here, branches are letters. 'cat' → 'c' → 'a' → 't'. Each letter is a branch. This is unmatched for autocomplete. User types 'ca' — the trie says cat, car, card — all branches that exist. In tokenizers too — how does an LLM break words? Like a trie."</div>

<div class="dialogue">তুমি AI ইঞ্জিনিয়ার। Tokenization হলো trie-এর ভাষা — BPE (Byte Pair Encoding) মূলত একটা trie traversal। Decision tree, random forest — সব tree-ই। BST-ভিত্তিক index-এ ডেটাবেস search কাজ করে। বংশতালিকা শুধু কাগজে নয় — কোডেও।</div>
<div class="dialogue en">"You're an AI engineer. Tokenization speaks trie — BPE (Byte Pair Encoding) is essentially a trie traversal. Decision trees, random forests — all trees. Database indexes work on BST principles. Family trees aren't just on paper — in code too."</div>

<div class="dialogue">নসল — বংশধর। কুরআনে বংশের গুরুত্ব বারবার এসেছে — প্রতিটা প্রজন্ম আগের প্রজন্মের ধারক। Tree-ও তেমনি — প্রতিটা child তার parent-এর উত্তরাধিকারী। Root থেকে ডাল — একটাই উৎস, কিন্তু অসংখ্য শাখা।</div>
<div class="dialogue en">"Nasl — descendants. The Quran repeatedly emphasizes lineage — each generation carries the previous. The tree is the same — each child inherits from its parent. From root to branch — one source, but countless branches."</div>`,
  senior:{
    title:"Recursive vs Iterative Tree Traversal",
    body:`
    <p><strong>Recursive:</strong> স্বাভাবিক, পড়তে সহজ। কিন্তু deep tree-তে <code>RecursionError</code> (Python ~1000 depth limit)।</p>
    <p><strong>Iterative:</strong> Stack দিয়ে নিজে নিয়ন্ত্রণ করো। বেশি কোড, কিন্তু deep tree-তে নিরাপদ।</p>
    <p><strong>Senior habit:</strong> ছোট tree → recursive (পড়তে সুন্দর)। Production/deep → iterative (safe)। উভয় জানো।</p>`
  },
  exercise:{
    hint:"একটা সাধারণ BST class বানাও — insert আর search!",
    starterCode:`# বংশবিদের স্ক্রল — Binary Search Tree
# একটা সাধারণ BST বানাচ্ছি

class TreeNode:
    def __init__(self, value):
        self.value = value
        self.left = None   # ছোট
        self.right = None  # বড়

class BST:
    def __init__(self):
        self.root = None
    
    def insert(self, value):
        """BST-তে value যোগ করো"""
        if self.root is None:
            self.root = TreeNode(value)
        else:
            self._insert_recursive(self.root, value)
    
    def _insert_recursive(self, node, value):
        if value < node.value:
            if node.left is None:
                node.left = TreeNode(value)
            else:
                self._insert_recursive(node.left, value)
        else:
            if node.right is None:
                node.right = TreeNode(value)
            else:
                self._insert_recursive(node.right, value)
    
    def search(self, value):
        """BST-তে value খুঁজো — O(log n)"""
        return self._search_recursive(self.root, value)
    
    def _search_recursive(self, node, value):
        if node is None:
            return False
        if value == node.value:
            return True
        elif value < node.value:
            return self._search_recursive(node.left, value)
        else:
            return self._search_recursive(node.right, value)
    
    def inorder(self, node=None):
        """ inorder traversal — sorted order! """
        if node is None:
            node = self.root
            if node is None:
                return []
        result = []
        if node.left:
            result.extend(self.inorder(node.left))
        result.append(node.value)
        if node.right:
            result.extend(self.inorder(node.right))
        return result

# পরীক্ষা করি!
tree = BST()
for val in [50, 30, 70, 20, 40, 60, 80]:
    tree.insert(val)

print("BST-তে আছে:", tree.inorder())  # sorted!
print("৪০ আছে?", tree.search(40))      # True
print("৯০ আছে?", tree.search(90))      # False

# TODO: আরও কিছু value insert করো
# তারপর inorder দেখো — sorted হবে!
`
  }
});

// ── DOOR 6: SORTING & BINARY SEARCH ──
doors.push({
  num:6, icon:"📚", color:"#4a9eff", name:"গ্রন্থাগারিকের তালিকা",
  subtitle:"The Librarian's Catalog", tech:"Sorting & Binary Search",
  secret:"সাজানো তালিকায় খোঁজ = O(log n)। অসাজানো = O(n)। সাজানো = ক্ষমতা।",
  recall:{
    q:"গ্রন্থাগারিক হাজার বইয়ের মধ্যে কীভাবে এক সেকেন্ডে খুঁজে পান?",
    qen:"How does the librarian find one book among thousands in one second?",
    a:"বইগুলো সাজানো থাকে — alphabetically বা numerically। Binary search: মাঝে দেখো, অর্ধেক বাদ দাও, আবার মাঝে দেখো। প্রতি ধাপে অর্ধেক কমে। O(log n)।",
    aen:"Books are sorted — alphabetically or numerically. Binary search: check the middle, discard half, check the new middle. Halves each step. O(log n)."
  },
  story:`
<p class="scene-setting">ষষ্ঠ দোকান। একটা প্রাচীন গ্রন্থাগার। কাগজের সুবাস, চামড়ার বাঁধাই, সারিবদ্ধ তাক। কাতিব ইউসুফ দাঁড়িয়ে আছেন — লম্বা, কৃশকায়, চোখে ধৈর্য। তাঁর সামনে হাজার বই — কিন্তু সব সাজানো। Alphabetically। কোনো বই ছড়ানো নেই। প্রতিটা তাকে নির্দিষ্ট অক্ষর।</p>
<p class="scene-setting en">The sixth shop. An ancient library. Scent of paper, leather bindings, ordered shelves. Katib Yusuf stands — tall, lean, patience in his eyes. Before him: thousands of books — but all sorted. Alphabetically. None scattered. Each shelf a specific letter.</p>

<div class="dialogue">বংশবিদ বলেছিলেন — বৃক্ষে খোঁজা যায়, O(log n)-এ। কিন্তু আমি বলি — বৃক্ষ লাগে না যদি তালিকা সাজানো থাকে। Binary search — মাঝে দেখো, অর্ধেক বাদ দাও, আবার মাঝে। প্রতি ধাপে অর্ধেক কমে। হাজার বইয়ের মধ্যে ১০ ধাপে। মিলিয়নে ২০ ধাপে।</div>
<div class="dialogue en">"The genealogist said — trees give O(log n) search. But I say — no tree needed if the list is sorted. Binary search — check the middle, discard half, check again. Halves each step. A thousand books in 10 steps. A million in 20."</div>

<div class="dialogue">কিন্তু শর্ত আছে — তালিকা সাজানো থাকতে হবে। সাজানো না থাকলে? একটা একটা করে দেখতে হবে — O(n)। সাজানো ক্ষমতা — এটাই sorting-এর মূল্য। একবার সাজাও, বারবার দ্রুত খোঁজো।</div>
<div class="dialogue en">"But there's a condition — the list must be sorted. Not sorted? Check one by one — O(n). Sorting is power — this is its price. Sort once, search fast forever."</div>

<div class="dialogue">তুমি AI ইঞ্জিনিয়ার। RAG-এ retrieved documents rank করতে হয় — relevance score অনুযায়ী sort। Hyperparameter tuning-এ range-এ binary search করা যায়। Log analysis — timestamp অনুযায়ী sort করে specific সময়ের event খুঁজি। Sorted data হলো ক্ষমতার ভিত্তি।</div>
<div class="dialogue en">"You're an AI engineer. In RAG, retrieved documents must be ranked — sorted by relevance score. In hyperparameter tuning, binary search across a range. In log analysis — sort by timestamp, then find specific events. Sorted data is the foundation of power."</div>

<div class="code-block">Python Sorting & Binary Search:

# Python's sorted() uses Timsort — O(n log n)
scores = [0.3, 0.9, 0.1, 0.7, 0.5]
sorted_scores = sorted(scores, reverse=True)
# → [0.9, 0.7, 0.5, 0.3, 0.1]

# Sort by key (RAG ranking)
docs = [("doc1", 0.45), ("doc2", 0.92), ("doc3", 0.78)]
ranked = sorted(docs, key=lambda x: x[1], reverse=True)

# Binary Search (bisect module)
import bisect
sorted_list = [1, 3, 5, 7, 9, 11, 13]
idx = bisect.bisect_left(sorted_list, 7)  # → 3
# Found in O(log n)!</div>

<div class="dialogue">কিস্ত — ন্যায়বিচার। আল্লাহ বলেন — "তোমরা ন্যায়ের খাতায় দাঁড়াও।" ন্যায়বিচার মানে প্রতিটা জিনিসকে তার সঠিক স্থানে রাখা। Sorting হলো সেই কিস্তের ছায়া — প্রতিটা উপাদানকে তার স্থানে। Binary search তখনই কাজ করে যখন কিস্ত প্রতিষ্ঠিত — যখন সবকিছু তার জায়গায়।</div>
<div class="dialogue en">"Qist — justice. Allah says — 'Stand firmly for justice.' Justice means placing each thing in its correct position. Sorting is the shadow of qist — each element in its place. Binary search works only when qist is established — when everything is where it belongs."</div>`,
  senior:{
    title:"Python Sorting — Senior Patterns",
    body:`
    <p><code>sorted()</code> নতুন list তৈরি করে। <code>.sort()</code> in-place। Memory-sensitive হলে <code>.sort()</code>।</p>
    <p><strong>Key function:</strong> <code>key=lambda x: (x.priority, x.name)</code> — multi-criteria sort। খুব শক্তিশালী।</p>
    <p><code>operator.itemgetter(1)</code> <code>lambda x: x[1]</code>-এর চেয়ে দ্রুত। Production code-এ ব্যবহার করো।</p>
    <p>Binary search-এর জন্য নিজে লেখো না — <code>bisect</code> module ব্যবহার করো। Tested, optimized, correct।</p>`
  },
  exercise:{
    hint:"Binary search implement করো — তারপর bisect দিয়ে তুলনা করো!",
    starterCode:`# গ্রন্থাগারিকের তালিকা — Binary Search

def binary_search(arr, target):
    """সাজানো তালিকায় target খুঁজি — O(log n)
    তালিকা অবশ্যই সাজানো থাকতে হবে!"""
    left, right = 0, len(arr) - 1
    steps = 0  # কত ধাপ লাগলো গোনার জন্য
    
    while left <= right:
        steps += 1
        mid = (left + right) // 2
        
        if arr[mid] == target:
            return mid, steps  # পেয়েছি!
        elif arr[mid] < target:
            left = mid + 1    # ডান অর্ধেকে যাও
        else:
            right = mid - 1   # বাঁ অর্ধেকে যাও
    
    return -1, steps  # পাওয়া যায়নি

# পরীক্ষা করি — সাজানো তালিকা
sorted_docs = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]

target = 70
index, steps = binary_search(sorted_docs, target)
print(f"{target} খুঁজছি...")
print(f"পাওয়া গেছে index {index}-এ, মাত্র {steps} ধাপে!")

# তুলনা: linear search কত ধাপ?
linear_steps = sorted_docs.index(target) + 1
print(f"Linear search-এ লাগত: {linear_steps} ধাপ")

# Python-এর bisect দিয়ে দেখি
import bisect
bisect_idx = bisect.bisect_left(sorted_docs, target)
print(f"bisect দিয়ে: index {bisect_idx}")

# BONUS: ১০০০টা সংখ্যার মধ্যে খুঁজে দেখো কত ধাপ লাগে!
big_list = list(range(0, 1000, 2))  # ০ থেকে ৯৯৮, জোড় সংখ্যা
idx, steps = binary_search(big_list, 500)
print(f"\n১০০০-এর তালিকায় ৫০০ খুঁজতে ধাপ: {steps}")
`
  }
});

// ── DOOR 7: DYNAMIC PROGRAMMING ──
doors.push({
  num:7, icon:"🌱", color:"#52c41a", name:"মালির ধাপ",
  subtitle:"The Gardener's Terraces", tech:"Dynamic Programming",
  secret:"DP = overlapping subproblems + optimal substructure। ছোট সমস্যা সমাধান করো, মনে রাখো, বড়টা বানাও।",
  recall:{
    q:"মালি কেন প্রতিটা ধাপে নতুন করে বীজ বোনেন না, আগের ফসল ব্যবহার করেন?",
    qen:"Why doesn't the gardener plant new seeds each terrace, but uses previous harvest?",
    a:"কারণ প্রতিটা ধাপের ফসল আগের ধাপের উপর নির্ভর করে। আগের ফল মনে রাখলে (memoize) বারবার কাজ করতে হয় না। DP = স্মৃতি দিয়ে দক্ষতা।",
    aen:"Because each terrace's harvest depends on the previous. If you remember previous results (memoize), you don't repeat work. DP = efficiency through memory."
  },
  story:`
<p class="scene-setting">সপ্তম দোকান। পাহাড়ের ঢালে ধাপে ধাপে বাগান — terrace farming। মাটির গন্ধ, সেচের শব্দ, সবুজের স্তর। মালি বশির কাজ করছেন — বয়স্ক, পিঠ বাঁকা, কিন্তু প্রতিটা ধাপে নিখুঁত। তাঁর বাগান একটা সিঁড়ির মতো — প্রতিটা ধাপ আগের ধাপের উপর ভর করে দাঁড়িয়ে। উপরের ফসল নিচের ফসলের উপর নির্ভরশীল।</p>
<p class="scene-setting en">The seventh shop. Terraced gardens on a hillside — terrace farming. Smell of soil, sound of irrigation, layers of green. Mali Bashir works — elderly, back bent, but precise at every step. His garden is like a staircase — each terrace rests on the one below. The upper harvest depends on the lower.</p>

<div class="dialogue">গ্রন্থাগারিক বলেছিলেন — সাজানো তালিকায় দ্রুত খোঁজা যায়। কিন্তু আমি বলি — কখনো একবার খোঁজা যথেষ্ট নয়। কখনো প্রতিটা উত্তর আগের উত্তরের উপর দাঁড়ায়। ধাপে ধাপে। একে বলে Dynamic Programming — প্রতিটা ছোট সমস্যা সমাধান করো, মনে রাখো, বড়টা বানাও।</div>
<div class="dialogue en">"The librarian said — sorted lists search fast. But I say — sometimes searching once isn't enough. Sometimes each answer stands on the previous answer. Step by step. This is Dynamic Programming — solve each small problem, remember it, build the big one."</div>

<div class="dialogue">ফাইবোনাচ্চি সংখ্যা জানো? ১, ১, ২, ৩, ৫, ৮, ১৩... প্রতিটা সংখ্যা আগের দুটোর যোগফল। সাধারণ recursion-এ একই সংখ্যা বারবার গণনা হয় — O(2^n)। কিন্তু যদি মনে রাখো? প্রতিটা একবারই গণনা — O(n)। এটাই memoization। মনে রাখা = সময় বাঁচানো।</div>
<div class="dialogue en">"You know Fibonacci numbers? 1, 1, 2, 3, 5, 8, 13... Each is the sum of the previous two. Naive recursion recalculates the same numbers — O(2^n). But if you remember? Each computed once — O(n). This is memoization. Remembering = saving time."</div>

<div class="dialogue">তুমি AI ইঞ্জিনিয়ার। Edit distance — দুটো শব্দ কতটা আলাদা? DP দিয়ে গণনা। এটা fuzzy matching-এ লাগে — ইউজার "recieve" লিখলে "receive" সাজেস্ট করো। Viterbi algorithm — HMM-এ সবচেয়ে সম্ভাব্য অনুক্রম খোঁজা, DP-ই। Reinforcement learning-এ value iteration — DP। Agent memoization — আগের সিদ্ধান্ত মনে রেখে নতুন সিদ্ধান্ত।</div>
<div class="dialogue en">"You're an AI engineer. Edit distance — how different are two words? Computed with DP. This is used in fuzzy matching — user types 'recieve', suggest 'receive'. Viterbi algorithm — finding the most likely sequence in HMMs, that's DP. Value iteration in RL — DP. Agent memoization — remembering past decisions for new ones."</div>

<div class="code-block">Edit Distance (Levenshtein) — DP Classic:

def edit_distance(s1, s2):
    m, n = len(s1), len(s2)
    # dp[i][j] = s1-এর প্রথম i অক্ষরকে 
    #            s2-এর প্রথম j অক্ষরে রূপান্তরের খরচ
    dp = [[0]*(n+1) for _ in range(m+1)]
    
    for i in range(m+1): dp[i][0] = i  # delete all
    for j in range(n+1): dp[0][j] = j  # insert all
    
    for i in range(1, m+1):
        for j in range(1, n+1):
            if s1[i-1] == s2[j-1]:
                dp[i][j] = dp[i-1][j-1]  # no cost
            else:
                dp[i][j] = 1 + min(
                    dp[i-1][j],    # delete
                    dp[i][j-1],    # insert
                    dp[i-1][j-1]   # replace
                )
    return dp[m][n]

edit_distance("cat", "cut")  # → 1 (replace a→u)
edit_distance("sunday", "saturday")  # → 3</div>

<div class="dialogue">দারাজাত — স্তর। কুরআনে আল্লাহ বলেন — "তাদের জন্য রয়েছে স্তরসমূহ।" প্রতিটা স্তর আগের স্তরের চেয়ে উঁচু। কেউ এক লাফে শীর্ষে যায় না — ধাপে ধাপে। DP-ও তেমনি — বড় উত্তর ছোট উত্তরের স্তরে স্তরে গঠন। ধৈর্য আর স্মৃতি দিয়ে।</div>
<div class="dialogue en">"Darajat — degrees/levels. Allah says — 'For them are degrees.' Each level higher than the last. No one leaps to the summit in one jump — step by step. DP is the same — the big answer built from small answers, level by level. With patience and memory."</div>`,
  senior:{
    title:"DP চেনার দুটো লক্ষণ",
    body:`
    <p><strong>1. Overlapping subproblems:</strong> একই ছোট সমস্যা বারবার আসে। Fibonacci-তে <code>fib(3)</code> কয়েকবার গণনা হয়।</p>
    <p><strong>2. Optimal substructure:</strong> বড় সমস্যার সর্বোত্তম সমাধান ছোট সমস্যার সর্বোত্তম সমাধান থেকে গঠিত।</p>
    <p>দুটোই থাকলে DP। একটাও না থাকলে greedy বা brute force।</p>
    <p><strong>Top-down (memoization):</strong> recursive + cache। পড়তে সহজ। <strong>Bottom-up (tabulation):</strong> iterative, small→big। দ্রুত। Production-এ সাধারণত bottom-up।</p>`
  },
  exercise:{
    hint:"Fibonacci দুইভাবে — naive বনাম memoized। পার্থক্য দেখো!",
    starterCode:`# মালির ধাপ — Dynamic Programming
# Fibonacci: naive vs memoized vs bottom-up

import time

# ১. Naive recursion — O(2^n) — ভয়ংকর ধীর!
def fib_naive(n):
    if n <= 1:
        return n
    return fib_naive(n-1) + fib_naive(n-2)

# ২. Memoized (top-down DP) — O(n) — মনে রাখে!
memo = {}
def fib_memo(n):
    if n <= 1:
        return n
    if n in memo:    # আগে গণনা করেছি?
        return memo[n]
    memo[n] = fib_memo(n-1) + fib_memo(n-2)
    return memo[n]

# ৩. Bottom-up (tabulation) — O(n) — সবচেয়ে দ্রুত
def fib_bottom_up(n):
    if n <= 1:
        return n
    dp = [0] * (n + 1)
    dp[1] = 1
    for i in range(2, n + 1):
        dp[i] = dp[i-1] + dp[i-2]
    return dp[n]

# তুলনা করি!
n = 30

t1 = time.time()
result1 = fib_naive(n)
t1 = time.time() - t1

t2 = time.time()
result2 = fib_memo(n)
t2 = time.time() - t2

t3 = time.time()
result3 = fib_bottom_up(n)
t3 = time.time() - t3

print(f"Fibonacci({n}) = {result1}")
print(f"Naive:       {t1:.4f}s  (O(2^n))")
print(f"Memoized:    {t2:.6f}s  (O(n))")
print(f"Bottom-up:   {t3:.6f}s  (O(n))")
print(f"\nMemoized কত গুণ দ্রুত? {t1/t2:.0f}x!")

# BONUS: n=40 চেষ্টা করো — naive কত সময় নেয় দেখো!
`
  }
});

// ── DOOR 8: TWO POINTERS / SLIDING WINDOW ──
doors.push({
  num:8, icon:"📏", color:"#f06292", name:"ক্যালিগ্রাফারের মাপকাঠি",
  subtitle:"The Calligrapher's Ruler", tech:"Two Pointers & Sliding Window",
  secret:"দুটো pointer দিয়ে এক চলনে O(n)। Nested loop নয় — স্লাইডিং উইন্ডো।",
  recall:{
    q:"ক্যালিগ্রাফার কেন একটানা লেখেন না, একটা মাপকাঠি সরিয়ে সরিয়ে?",
    qen:"Why doesn't the calligrapher write continuously, but slides a ruler?",
    a:"কারণ মাপকাঠি একটা 'উইন্ডো' তৈরি করে — নির্দিষ্ট অংশ দেখা যায়। সরালে নতুন অংশ দেখা যায়। Two pointers = দুটো প্রান্ত, sliding window = একটা চলমান বাক্স। O(n)-এ পুরো স্ট্রিং প্রক্রিয়া করা যায়।",
    aen:"Because the ruler creates a 'window' — a specific portion is visible. Sliding reveals new portions. Two pointers = two ends, sliding window = a moving box. The whole string processed in O(n)."
  },
  story:`
<p class="scene-setting">অষ্টম দোকান। শেষ দোকান। ক্যালিগ্রাফারের কামরা। কালির গন্ধ, নরম কাগজ, জানালার আলো। উস্তাদ নুর কাজ করছেন — হাতে বাঁশের কলম, সামনে একটা বিশাল কাগজে আরবি ক্যালিগ্রাফি। কিন্তু তিনি একটানা লেখেন না। একটা মাপকাঠি রাখেন, তার মধ্যে লেখেন, তারপর মাপকাঠি সরান — পরের অংশ। উইন্ডো সরে যায়, লেখা এগোয়।</p>
<p class="scene-setting en">The eighth shop. The last shop. The Calligrapher's chamber. Smell of ink, soft paper, window light. Ustad Noor works — bamboo pen in hand, a vast sheet of Arabic calligraphy before him. But he doesn't write continuously. He places a ruler, writes within it, then slides the ruler — the next section. The window moves, the writing advances.</p>

<div class="dialogue">মালি বলেছিলেন — ধাপে ধাপে উত্তর বানাও, মনে রাখো। কিন্তু আমি বলি — কখনো মনে রাখা লাগে না। কখনো শুধু দুটো হাত লাগে — একটা শুরুতে, একটা শেষে। দুটো একসাথে চলে — O(n)-এ পুরো কাজ শেষ।</div>
<div class="dialogue en">"The gardener said — build answers step by step, remember. But I say — sometimes memory isn't needed. Sometimes just two hands — one at the start, one at the end. Both move together — the whole work done in O(n)."</div>

<div class="dialogue">Two pointers — দুটো নির্দেশক। একটা শুরু থেকে, একটা শেষ থেকে। অথবা দুটোই শুরু থেকে, কিন্তু আলাদা গতিতে। Sorted array-তে দুটো সংখ্যা খুঁজছো যাদের যোগ = target? বাঁ প্রান্ত আর ডান প্রান্ত ধরো। ছোট? বাঁ সরাও। বড়? ডান সরাও। O(n)। Nested loop নয় — O(n²) নয়।</div>
<div class="dialogue en">"Two pointers — two indicators. One from the start, one from the end. Or both from the start, but different speeds. Finding two numbers that sum to target in a sorted array? Left end and right end. Too small? Move left. Too big? Move right. O(n). Not nested loops — not O(n²)."</div>

<div class="dialogue">Sliding window — একটা চলমান বাক্স। বাক্সের ভেতরে নির্দিষ্ট সংখ্যক উপাদান। বাক্স সরলে — পুরনো বেরোয়, নতুন ঢোকে। Text chunking-এ লাগে — একটা নির্দিষ্ট window-এ টোকেন ধরে, window সরাও। Moving average — গত ৭ দিনের গড়। প্রতিদিন window সরে — পুরনো দিন বেরোয়, নতুন ঢোকে।</div>
<div class="dialogue en">"Sliding window — a moving box. Inside the box: a fixed number of elements. Slide the box — old exits, new enters. Used in text chunking — hold tokens in a fixed window, slide. Moving average — the last 7 days' mean. Each day the window slides — old day exits, new enters."</div>

<div class="dialogue">তুমি AI ইঞ্জিনিয়ার। Token chunking — বড় টেক্সটকে ছোট ছোট অংশে ভাগ করা। প্রতিটা chunk-এ overlap দেওয়া — sliding window। Streaming data — real-time আসা ডেটা প্রক্রিয়া করা। কোনো সময় পুরো ডেটা মেমোরিতে রাখা যায় না — window দিয়ে অংশে অংশে।</div>
<div class="dialogue en">"You're an AI engineer. Token chunking — dividing large text into smaller pieces. Overlap between chunks — sliding window. Streaming data — processing data arriving in real-time. Sometimes the whole dataset can't fit in memory — process by windows."</div>

<div class="code-block">Sliding Window — Token Chunking:

def chunk_text(text, chunk_size=100, overlap=20):
    """টেক্সটকে overlapping chunks-এ ভাগ করি
    chunk_size: প্রতিটা chunk-এ কয় শব্দ
    overlap: কত শব্দ overlap করবে"""
    words = text.split()
    chunks = []
    start = 0
    
    while start < len(words):
        end = start + chunk_size
        chunk = words[start:end]
        chunks.append(' '.join(chunk))
        start += chunk_size - overlap  # overlap!
    
    return chunks

# RAG-এ ব্যবহার:
# বড় ডকুমেন্ট → ছোট overlapping chunks → 
# প্রতিটা chunk embedding → vector DB</div>

<div class="dialogue">তাদাব্বুর — গভীর চিন্তা। কুরআনে আল্লাহ বারবার বলেছেন — "চিন্তা করো না?" তাদাব্বুর মানে একটা অংশে থামা, গভীরে যাওয়া, তারপর পরের অংশে। Sliding window-এর মতো — একটা অংশ দেখো, বুঝো, তারপর সরাও। পুরো কুরআন একবারে নয় — অংশে অংশে। প্রতিটা অংশে থামো, চিন্তা করো, তারপর এগোও।</div>
<div class="dialogue en">"Tadabbur — deep contemplation. Allah repeatedly says in the Quran — 'Will you not reflect?' Tadabbur means pausing at a portion, going deep, then moving to the next. Like a sliding window — see a section, understand, then slide. Not the whole Quran at once — portion by portion. Pause at each, reflect, then advance."</div>

<div class="dialogue">আর এখন — আটটা দোকান পেরিয়েছ। টালি নির্মাতা বলেছিলেন, সারিতে সাজাও। তালা নির্মাতা বলেছিলেন, চাবি দিয়ে খোঁজো। মসলা ব্যবসায়ী বলেছিলেন, সেরাটা উপরে রাখো। তাঁতি বলেছিলেন, সম্পর্কের জাল বুনো। বংশবিদ বলেছিলেন, বৃক্ষের শাখায় খোঁজো। গ্রন্থাগারিক বলেছিলেন, সাজাও তারপর দ্রুত খোঁজো। মালি বলেছিলেন, ধাপে ধাপে বানাও। আর আমি বলি — দুটো হাতে এক চলনে শেষ করো। আটটা কৌশল — এক একটা দৃষ্টিভঙ্গি। সিনিয়র ইঞ্জিনিয়ার তিনিই যিনি জানেন কোন সমস্যায় কোন দৃষ্টি লাগবে।</div>
<div class="dialogue en">"And now — you've passed eight shops. The tile maker said — arrange in rows. The locksmith said — search by key. The spice merchant said — keep the best on top. The weaver said — weave the web of relationships. The genealogist said — search through branches. The librarian said — sort, then search fast. The gardener said — build step by step. And I say — finish in one pass with two hands. Eight techniques — eight perspectives. A senior engineer is one who knows which perspective each problem needs."</div>`,
  senior:{
    title:"Two Pointers চেনার উপায়",
    body:`
    <p><strong>লক্ষণ ১:</strong> Sorted array + pair/triplet খুঁজছো → Two pointers (start + end)।</p>
    <p><strong>লক্ষণ ২:</strong> Contiguous subarray/substring নিয়ে কাজ → Sliding window।</p>
    <p><strong>লক্ষণ ৩:</strong> "Fast and slow" — cycle detection, middle of linked list → দুটো pointer আলাদা গতিতে।</p>
    <p><strong>Senior trap:</strong> Nested loop দেখলে থামো। কি two pointers দিয়ে O(n) করা যায়? এটাই সিনিয়র চিন্তার পার্থক্য — brute force নয়, efficient pattern।</p>`
  },
  exercise:{
    hint:"Sliding window দিয়ে text chunking — RAG-এর মতো!",
    starterCode:`# ক্যালিগ্রাফারের মাপকাঠি — Sliding Window
# Text chunking with overlap — RAG-এর জন্য!

def chunk_text(text, chunk_size=5, overlap=2):
    """টেক্সটকে overlapping chunks-এ ভাগ করি
    
    Args:
        text: ইনপুট টেক্সট
        chunk_size: প্রতিটা chunk-এ কয় শব্দ  
        overlap: কত শব্দ overlap করবে (পরের chunk-এর সাথে)
    
    Returns:
        chunk-এর list
    """
    words = text.split()
    chunks = []
    start = 0
    
    while start < len(words):
        end = start + chunk_size
        chunk = ' '.join(words[start:end])
        chunks.append(chunk)
        
        # পরের chunk-এ যাও — overlap সহ
        step = chunk_size - overlap
        if step <= 0:
            step = 1  # নিরাপত্তা
        start += step
    
    return chunks

# পরীক্ষা করি — একটা AI-related text
sample_text = """
Artificial intelligence transforms how we build software. 
Engineers must understand data structures algorithms and system design. 
RAG combines retrieval and generation for accurate answers. 
Agents use tools to complete multi-step workflows autonomously.
""".strip()

chunks = chunk_text(sample_text, chunk_size=6, overlap=2)

print(f"মোট {len(chunks)} chunk:\n")
for i, chunk in enumerate(chunks):
    print(f"Chunk {i+1}: \"{chunk}\"")
    print()

# TODO: chunk_size আর overlap পরিবর্তন করে দেখো!
# কী হয় যখন overlap=0?
# কী হয় যখন overlap = chunk_size - 1?

# BONUS: Two pointer — sorted array-তে target sum খুঁজি
def two_sum_sorted(arr, target):
    left, right = 0, len(arr) - 1
    while left < right:
        current = arr[left] + arr[right]
        if current == target:
            return (left, right)
        elif current < target:
            left += 1
        else:
            right -= 1
    return None

sorted_nums = [1, 3, 5, 7, 9, 11, 13]
print(f"two_sum_sorted([1,3,5,7,9,11,13], 16) = {two_sum_sorted(sorted_nums, 16)}")
`
  }
});
