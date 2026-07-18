// ════════════════════════════════════════
// DSA BAZAAR — DOORS 9-11
// Linked List · Stack/Queue · Union-Find
// ════════════════════════════════════════

// ── DOOR 9: LINKED LIST ──
doors.push({
  num:9, icon:"📿", color:"#36d6e7", name:"মুক্তোর মালার কারখানা",
  subtitle:"The Pearl Necklace Maker", tech:"Linked Lists (Singly, Doubly)",
  secret:"Array = একসাথে সাজানো বাক্স। Linked list = এক একটা node, প্রতিটা পরেরটার ঠিকানা জানে। ঢোকাতে/বাদ দিতে O(1) — কিন্তু খুঁজতে O(n)।",
  recall:{
    q:"মুক্তোর মালা কেন মাঝখানে একটা মুক্তো ঢোকাতে পুরো মালা ভাঙতে হয় না?",
    qen:"Why can the pearl necklace maker insert a pearl in the middle without breaking the whole necklace?",
    a:"কারণ প্রতিটা মুক্তো শুধু তার পরের মুক্তোর সুতো ধরে। মাঝে একটা যোগ করতে — আগের সুতো ছেড়ে, নতুন মুক্তোর সুতো দুই পাশে জোড়ো। Array-তে সব সরাতে হয়, linked list-এ শুধু pointer বদলাও।",
    aen:"Because each pearl holds only the thread to the next. To insert in the middle — release the previous thread, tie the new pearl to both sides. In an array everything shifts; in a linked list, only pointers change."
  },
  story:`
<p class="scene-setting">নবম দোকান। মুক্তোর মালার কারখানা। মৃদু শব্দ — সুতো গলানো, মুক্তো গাঁথা। কারিগর নুসরাত একটা লম্বা মালা ধরে আছেন — প্রতিটা মুক্তো আলাদা, কিন্তু সুতো দিয়ে যুক্ত। "তালি নির্মাতা এক সারিতে সাজায়," তিনি বললেন। "আমি গাঁথি — এক একটা, প্রতিটা পরেরটার দিকে তাকায়।"</p>
<p class="scene-setting en">The ninth shop. The pearl necklace workshop. Soft sounds — threading, stringing pearls. Craftswoman Nusrat holds a long necklace — each pearl separate, but joined by thread. "The tile maker arranges in a row," she said. "I string — one by one, each looking to the next."</p>

<div class="dialogue">টালি নির্মাতা বলেছিলেন — array, সব একসাথে মেমরিতে। কিন্তু আমি বলি — সব কি একসাথে থাকে? মাঝে ঢোকাতে হলে পুরো সারি সরাতে হয়। আমার মালায়? একটা pointer বদলাও — নতুন মুক্তো বসে গেছে। ঢোকাতে O(1), বাদ দিতে O(1)।</div>
<div class="dialogue en">"The tile maker said — array, all together in memory. But I say — must everything sit together? To insert in the middle, the whole row shifts. In my necklace? Change one pointer — the new pearl sits in place. Insert O(1), delete O(1)."</div>

<div class="dialogue">কিন্তু দাম আছে। তালি নির্মাতা যেকোনো বাক্সে সরাসরি যেতে পারেন — index দিলেই, O(1)। আমি? প্রথম মুক্তো থেকে শুরু, এক এক করে পরেরটায় যেতে হয় — শততম মুক্তো চাইলে ১০০ ধাপ। O(n)। সবছাই দাম আছে।</div>
<div class="dialogue en">"But there's a price. The tile maker jumps to any box directly — give an index, O(1). Me? Start from the first pearl, step to the next one by one — the 100th pearl costs 100 steps. O(n). Everything has a price."</div>

<div class="code-block">Linked List — Three Variants:

১. SINGLY LINKED LIST
   প্রতিটা node শুধু পরেরটার pointer ধরে।

   [A] → [B] → [C] → [D] → None
    head                    tail

   • insert at head: O(1) — নতুন node, তার next = পুরোনো head
   • delete at head: O(1) — head = head.next
   • search/access: O(n) — শুরু থেকে হাঁটো
   • insert at tail: O(1) যদি tail pointer রাখো, নাহলে O(n)

২. DOUBLY LINKED LIST
   প্রতিটা node দুই pointer ধরে — prev ও next।

   None ← [A] ⇄ [B] ⇄ [C] ⇄ [D] → None

   • backward traversal পাবে (সিঙ্গলিতে নেই)
   • delete কোনো node: O(1) যদি node-এর reference থাকো
     (singl-এ আগের node খুঁজতে O(n))
   • বেশি মেমরি (প্রতিটায় ২টা pointer)
   → LRU cache, browser history, text editor undo

৩. CIRCULAR LINKED LIST
   শেষ node প্রথম node-এ ফিরে যায়।

   [A] → [B] → [C] → [D] ┐
    ↑                     │
    └─────────────────────┘

   → round-robin scheduling, music playlist repeat

ARRAY vs LINKED LIST — কখন কোনটা?

  ┌──────────────────┬─────────────┬─────────────┐
  │ Operation        │ Array       │ Linked List │
  ├──────────────────┼─────────────┼─────────────┤
  │ access (index)   │ O(1) ✅     │ O(n) ❌     │
  │ insert head      │ O(n) ❌     │ O(1) ✅     │
  │ insert tail      │ O(1)* ✅    │ O(1)* ✅    │
  │ insert middle    │ O(n)        │ O(1)**      │
  │ search           │ O(n)        │ O(n)        │
  │ memory overhead  │ low         │ high (ptr)  │
  │ cache locality   │ ভালো ✅     │ খারাপ ❌    │
  └──────────────────┴─────────────┴─────────────┘
  * amortized / tail pointer সহ  ** node-এর reference থাকলে

WHY CACHE LOCALITY MATTERS (the hidden cost):
  Array: সব পাশাপাশি মেমরিতে → CPU cache একসাথে এক block load করে
  Linked list: node গুলো ছড়ানো → প্রতিটা cache miss → 100x ধীরে
  → তাত্ত্বিকভাবে একই complexity, বাস্তবে array প্রায় সবসময় দ্রুত
  → আধুনিক truth: array (বা Python list) দিয়ে শুরু করো।
    linked list শুধু যখন সত্যিই head/tail insert প্রধান কাজ।

WHERE AI/ML USES LINKED LISTS:
  • LRU cache (doubly linked list + hash map = O(1) eviction)
  • Deque implementation (Python collections.deque = doubly linked list of blocks)
  • Adjacency list এর জন্য graph neighbors (কিন্তু array-ও চলে)
  • Symbolic computation graphs (chain rule-এর জন্য পিছনে হাঁটা লাগে)
  • Tensor padding / variable-length sequences (RNN time steps)</div>

<div class="dialogue">সিলসিলা — শৃঙ্খল, সংযোগ। কুরআনে আল্লাহ বলেন — "তোমরা আল্লাহর রশি দৃঢ়ভাবে ধরো, সবাই একসাথে।" (৩:১০৩)। রশি না থাকলে মুক্তো ছড়িয়ে যায় — কিন্তু সংযুক্ত থাকলে এক মালা। Linked list-ও তেমনি — প্রতিটা node একটা pointer দিয়ে যুক্ত, ভাঙলে পুরো শৃঙ্খল ছিন্ন।</div>
<div class="dialogue en">"Silsila — chain, connection. Allah says — 'Hold fast to the rope of Allah, all together.' (3:103). Without the thread, pearls scatter — but joined, they form one necklace. The linked list too — each node connected by a pointer; break one, the whole chain severs."</div>`,
  senior:{
    title:"When to ACTUALLY Use a Linked List",
    body:`
    <p><strong>৯০% ক্ষেত্রে:</strong> Python list (dynamic array) ব্যবহার করো। Cache locality-তে array জিতে যায়।</p>
    <p><strong>Linked list বেছে যখন:</strong> (১) প্রধান কাজ head/tail insert/delete, (২) তুমি জানো node-এর reference (search ছাড়া delete), (৩) LRU cache বানাচ্ছ।</p>
    <p><strong>Python trick:</strong> <code>collections.deque</code> — doubly linked list of blocks, O(1) দুই পাশে। list-এর চেয়ে ভালো queue/stack।</p>
    <p><strong>Interview tip:</strong> Two-pointer technique — slow + fast pointer। Cycle detect (Floyd), middle find, kth-from-end। এটাই linked list-এর সবচেয়ে common প্যাটার্ন।</p>`
  },
  exercise:{
    hint:"একটা singly linked list বানাও — head-এ insert আর print করার ফাংশন!",
    starterCode:`# মুক্তোর মালা — Singly Linked List
# প্রতিটা node পরেরটার pointer ধরে

class Node:
    def __init__(self, value):
        self.value = value
        self.next = None   # পরের মুক্তোর ঠিকানা

class LinkedList:
    def __init__(self):
        self.head = None
    
    def insert_head(self, value):
        """head-এ নতুন node যোগ করো — O(1)"""
        new_node = Node(value)
        new_node.next = self.head
        self.head = new_node
    
    def print_list(self):
        """পুরো মালা দেখাও"""
        current = self.head
        values = []
        while current:
            values.append(str(current.value))
            current = current.next
        print(" → ".join(values) + " → None")
    
    def search(self, value):
        """value আছে কি? O(n)"""
        current = self.head
        while current:
            if current.value == value:
                return True
            current = current.next
        return False

# পরীক্ষা করি!
necklace = LinkedList()
for pearl in ["C", "B", "A"]:   # head-ে যোগ, তাই উল্টো হবে
    necklace.insert_head(pearl)

necklace.print_list()              # A → B → C → None
print("B আছে?", necklace.search("B"))   # True
print("Z আছে?", necklace.search("Z"))   # False

# TODO: insert_tail ফাংশন লেখো
# (শেষে যোগ করতে গেলে পুরো list হাঁটতে হবে — O(n))
`
  }
});

// ── DOOR 10: STACK & QUEUE ──
doors.push({
  num:10, icon:"🐪", color:"#f0c75e", name:"কাফেলার সারি",
  subtitle:"The Caravan Line", tech:"Stacks & Queues (LIFO / FIFO)",
  secret:"Stack = স্তূপ পাত্র — শেষে রাখা প্রথম বেরোয় (LIFO)। Queue = কাফেলার সারি — যে আগে এসেছে সে আগে যায় (FIFO)। দুটোই সাধারণ, কিন্তু DFS/BFS-এর মূল।",
  recall:{
    q:"কাফেলার সারিতে কে আগে বেরোয় — যে আগে এসেছে, নাকি যে পরে?",
    qen:"In the caravan line, who leaves first — who came first, or who came last?",
    a:"দুই রকম নিয়ম। Queue-এ (FIFO) — যে আগে এসেছে সে আগে যায়। Stack-এ (LIFO) — যে পরে এসেছে সে আগে বেরে যায়, স্তূপের মতো। কাজ অনুযায়ী নিয়ম বাছো।",
    aen:"Two rules. In a queue (FIFO) — who came first leaves first. In a stack (LIFO) — who came last leaves first, like a pile. Choose the rule per task."
  },
  story:`
<p class="scene-setting">দশম দোকান। কাফেলার সারি। বাইরে উটের কাফেলা — এক সারিতে, একজন পরে একজন। ভেতরে মালের স্তূপ — একটার উপর একটা, সবশেষে রাখা সবার উপরে। কাফেলা প্রধান ওমর বললেন — "দুই জিনিস আছে। সারি — যে আগে এসেছে সে আগে যাবে। স্তূপ — যে শেষে রাখা, সে আগে তোলা।"</p>
<p class="scene-setting en">The tenth shop. The caravan line. Outside, a camel caravan — single file, one after another. Inside, a pile of goods — one on another, the last placed on top. Caravan-master Omar said — "Two things. The line — who came first goes first. The pile — what was placed last is taken first."</p>

<div class="dialogue">তাঁতি বলেছিলেন — সম্পর্ক জালের মতো। মুক্তোর মালা বলেছিলেন — এক সারি। কিন্তু আমি বলি — কখনো ক্রম গুরুত্বপূর্ণ। কে আগে? কে পরে? Stack আর queue — দুটোই ক্রমের নিয়ম। সহজ, কিন্তু এগুলো ছাড়া DFS/BFS বোঝা যায় না।</div>
<div class="dialogue en">"The weaver said — relationships are a web. The pearl maker said — a chain. But I say — sometimes order matters. Who's first? Who's last? Stack and queue — two rules of order. Simple, but without them, DFS and BFS cannot be understood."</div>

<div class="dialogue">Stack — LIFO। Last In, First Out। মালের স্তূপে সবশেষে যা রাখলে, সেটাই প্রথম তুলবে। থালার স্তূপ, বইয়ের স্তূপ, কল স্ট্যাক (function call) — সব LIFO। ফাংশন কল করলে স্ট্যাকে ঢোকে, শেষেরটা প্রথম ফিরে আসে। recursion-ও stack-এ চলে।</div>
<div class="dialogue en">"Stack — LIFO. Last In, First Out. Whatever you place last on the pile, you pick up first. Plate stacks, book stacks, the call stack (function calls) — all LIFO. Call a function, it enters the stack; the last returns first. Recursion runs on a stack too."</div>

<div class="dialogue">Queue — FIFO। First In, First Out। কাফেলার সারিতে যে আগে এসেছে, সে আগে যায়। টিকিটের লাইন, প্রিন্টারের কাজ, মেসেজ কিউ — সব FIFO। AI-এ? task queue — একাধিক inference request সারিতে, এক এক করে প্রসেস।</div>
<div class="dialogue en">"Queue — FIFO. First In, First Out. Whoever came first to the caravan line goes first. Ticket lines, printer jobs, message queues — all FIFO. In AI? Task queues — many inference requests in line, processed one by one."</div>

<div class="code-block">Stacks & Queues — The Two Orders:

STACK (LIFO — Last In, First Out):
  
  push(1)  push(2)  push(3)   pop() → 3
  ┌────┐   ┌────┐   ┌────┐
  │ 1  │   │ 2  │   │ 3  │ ← top
  └────┘   │ 1  │   │ 2  │
           └────┘   │ 1  │
                    └────┘
  
  Operations (all O(1)):
    push(x)  — top-এ যোগ
    pop()    — top থেকে সরাও
    peek()   — top দেখো (সরাও না)
    is_empty()
  
  Python: list দিয়ে — append() + pop()
    stack = []
    stack.append(1); stack.append(2)
    stack.pop()  # → 2

QUEUE (FIFO — First In, First Out):

  enqueue(1) enqueue(2) enqueue(3)  dequeue() → 1
  ┌────┬────┬────┐
  │ 1  │ 2  │ 3  │
  └────┴────┴────┘
   ↑             ↑
  front         back

  Operations (all O(1) with right structure):
    enqueue(x) — back-এ যোগ
    dequeue()  — front থেকে সরাও
    peek()     — front দেখো
  
  Python: collections.deque — দুই পাশে O(1)
    from collections import deque
    q = deque()
    q.append(1); q.append(2)   # enqueue
    q.popleft()                # dequeue → 1
  
  ❌ list.pop(0) → O(n)! পুরো list shift করে
  ✅ deque.popleft() → O(1)

THE TWO GREAT ALGORITHMS — DFS ও BFS:

  DFS (Depth-First Search) — STACK দিয়ে:
    যতটা সম্ভব গভীরে যাও, তারপর ফিরো।
    
    def dfs(graph, start):
        visited = set()
        stack = [start]
        while stack:
            node = stack.pop()        # LIFO
            if node not in visited:
                visited.add(node)
                stack.extend(graph[node] - visited)
        return visited
    
    → maze solving, topological sort, cycle detect

  BFS (Breadth-First Search) — QUEUE দিয়ে:
    প্রতিটা neighbor আগে দেখো, তারপর গভীরে।
    
    from collections import deque
    def bfs(graph, start):
        visited = set([start])
        queue = deque([start])
        while queue:
            node = queue.popleft()    # FIFO
            for neighbor in graph[node]:
                if neighbor not in visited:
                    visited.add(neighbor)
                    queue.append(neighbor)
        return visited
    
    → shortest path (unweighted), level-order, peer discovery

  একই কোড — শুধু stack (LIFO) বদলে queue (FIFO)।
  এটাই DFS ও BFS-এর পার্থক্যের মূল।

WHY IT MATTERS FOR AI:
  • BFS = shortest path in unweighted graph (RAG retrieval, knowledge graph)
  • DFS = topological sort (DAG of computation, build systems, ML pipelines)
  • Stack = autograd backprop chain (reverse-mode auto-diff পিছনে হাঁটে)
  • Queue = inference batching, training data shuffling, RL replay buffer
  • Monotonic stack — next greater element, sliding window max ( Door 8 )</div>

<div class="dialogue">সাফ — সারি, পংক্তি। কুরআনে আল্লাহ বলেন — "নিশ্চয়ই আল্লাহ তাদের ভালোবাসেন যারা সারিবদ্ধ হয়ে লড়ে, যেন ঢালাই করা দেয়াল।" (৬১:৪)। সারি — শৃঙ্খলা। কে আগে, কে পরে — এই শৃঙ্খলা ছাড়া কাফেলা ছড়িয়ে যায়। Stack ও queue — ক্রমের দুই রূপ, দুই নিয়ম। সঠিক নিয়ম বেছে নাও।</div>
<div class="dialogue en">"Saff — row, line. Allah says — 'Allah loves those who fight in ranks, as if a cemented wall.' (61:4). The line — discipline. Who's first, who's next — without this discipline, the caravan scatters. Stack and queue — two forms of order, two rules. Choose the right one."</div>`,
  senior:{
    title:"Stack & Queue — Production Patterns",
    body:`
    <p><strong>Python এ stack:</strong> শুধু <code>list</code> ব্যবহারো — <code>append()</code> + <code>pop()</code>, O(1)।</p>
    <p><strong>Python এ queue:</strong> <code>collections.deque</code> — কখনো <code>list.pop(0)</code> করবে না (O(n))।</p>
    <p><strong>Monotonic stack:</strong> ক্রমবাধক stack — পরবর্তী বড়/ছোট element খুঁজতে। LeetCode-এ প্রিয় প্যাটার্ন।</p>
    <p><strong>Two-stack queue:</strong> interview ক্লাসিক — দুই stack দিয়ে queue বানাও (amortized O(1))।</p>
    <p><strong>AI tip:</strong> backpropagation = reverse-mode autodiff = DFS on computation graph। যখন PyTorch/TensorFlow <code>loss.backward()</code> কল করো — এটা একটা stack-based traversal।</p>`
  },
  exercise:{
    hint:"Stack দিয়ে bracket matching করো — ( { [ ] } ) সঠিক কি না!",
    starterCode:`# কাফেলার সারি — Stack দিয়ে Bracket Matching
# প্রতিটা opening bracket স্ট্যাকে রাখো, closing এলে মেলাও

def is_balanced(expression):
    """( { [ ] } ) সঠিকভাবে মিলেছে কি? stack দিয়ে যাচাই।"""
    stack = []
    matching = {')': '(', '}': '{', ']': '['}
    
    for char in expression:
        if char in "({[":
            stack.append(char)            # opening → push
        elif char in ")}]":
            if not stack:                 # closing কিন্তু stack খালি!
                return False
            top = stack.pop()             # pop করে মেলাও
            if top != matching[char]:
                return False              # mismatch
    
    return len(stack) == 0                # stack খালি হতে হবে

# পরীক্ষা করি!
print(is_balanced("(a + b) * [c - {d / e}]"))   # True
print(is_balanced("(a + b]"))                    # False
print(is_balanced("((()"))                       # False (stack খালি না)
print(is_balanced(")("))                         # False

# TODO: stack দিয়ে একটা string উল্টে দাও
# (প্রতিটা অক্ষর push করো, তারপর pop করে পড়ো)
`
  }
});

// ── DOOR 11: UNION-FIND (DISJOINT SET) ──
doors.push({
  num:11, icon:"🏛️", color:"#fb923c", name:"গোত্রপতির পরিষদ",
  subtitle:"The Clan Elder's Council", tech:"Union-Find (Disjoint Set Union)",
  secret:"হাজার উপাদান — কে কোন গোত্রে? গোত্র এক হলে (union) আবার ভাঙতে পারবে না। Union-Find — union ও find, দুটোই প্রায় O(1) (path compression সহ)।",
  recall:{
    q:"গোত্রপতি কীভাবে হাজার মানুষের মধ্যে দুজন একই গোত্রের কি না সাথে সাথে বলেন?",
    qen:"How does the clan elder instantly tell if two among thousands belong to the same clan?",
    a:"প্রতিটা মানুষ শুধু তার গোত্রপতির নাম জানে। গোত্রপতি পর্যন্ত পৌঁছাও — একই গোত্রপতি হলে একই গোত্র। union করলে এক গোত্রপতি অন্যের অধীনে যান। find আর union — প্রায় O(1)।",
    aen:"Each person knows only their clan elder's name. Reach the elder — same elder means same clan. On union, one elder goes under the other. Find and union — nearly O(1)."
  },
  story:`
<p class="scene-setting">একাদশ দোকান। গোত্রপতির পরিষদ। বড় গোল টেবিল, চারপাশে প্রবীণ গোত্রপতিরা। দেয়ালে গোত্রের নকশা — ছোট ছোট বৃত্ত, কয়েকটা এক বৃত্তে যুক্ত, কয়েকটা আলাদা। "জাল নয়," গোত্রপতি শাফিক বললেন, "বৃক্ষও নয়। গোত্র। প্রতিটা গোত্র একটা সেট — কেউ দুই গোত্রে থাকে না, গোত্র এক হলে আলাদা হয় না।"</p>
<p class="scene-setting en">The eleventh shop. The clan elder's council. A large round table, senior elders around it. On the wall, clan diagrams — small circles, several joined into one, some separate. "Not a web," Elder Shafiq said, "not a tree either. A clan. Each clan is a set — no one belongs to two, once joined they don't separate."</p>

<div class="dialogue">তাঁতি বলেছিলেন — জাল। বংশবিদ বলেছিলেন — বৃক্ষ। কিন্তু আমি বলি — এক চতুর্থ ধরন আছে। গোত্র। প্রতিটা মানুষ একটা গোত্রে থাকে। দুই গোত্র মিলে গেলে এক গোত্র হয় — আর কখনো আলাদা নয়। এটাই disjoint set — union শুধু একমুখী, বিচ্ছেদ নেই।</div>
<div class="dialogue en">"The weaver said — web. The genealogist said — tree. But I say — there's a fourth kind. A clan. Each person belongs to one clan. Two clans merge into one — never to separate again. This is the disjoint set — union only goes one way, no split."</div>

<div class="dialogue">প্রশ্ন দুটো — দুজন কি একই গোত্রের? আর দুই গোত্র কীভাবে এক করবে? find ও union। find — একজন থেকে তার গোত্রপতি পর্যন্ত পৌঁছাও। union — এক গোত্রপতি অন্যের অধীনে যান। সহজ — কিন্তু path compression ও union by rank ছাড়া ধীরে হবে।</div>
<div class="dialogue en">"Two questions — are two people of the same clan? And how to merge two clans? Find and union. Find — reach from a person to their elder. Union — one elder goes under another. Simple — but slow without path compression and union by rank."</div>

<div class="code-block">Union-Find (Disjoint Set Union) — The Clan Structure:

THE NAIVE VERSION (concept first):
  
  parent = [0, 1, 2, 3, 4]   # প্রতিটা নিজেই গোত্রপতি (শুরুতে)
  
  find(x): x-এর গোত্রপতি খুঁজে আনো
    → parent[x] == x হলে x-ই গোত্রপতি
    → নাহলে parent[x] পর্যন্ত পৌঁছাও (recursive)
  
  union(x, y): দুই গোত্র এক করো
    → rootX = find(x), rootY = find(y)
    → parent[rootX] = rootY   # এক গোত্রপতি অন্যের অধীনে

  Problem: tree লম্বা হলে find = O(n)। হাজার union পরে ধীরে।

TWO OPTIMIZATIONS — প্রায় O(1) (আসলে inverse Ackermann α):

১. PATH COMPRESSION (find-এ):
   গোত্রপতি খুঁজে পাওয়ার পর, পথের সব নোডকে সরাসরি 
   গোত্রপতির সাথে যুক্ত করে দাও। পরের বার দ্রুত।
   
   find(x):
     if parent[x] != x:
       parent[x] = find(parent[x])   # ← path compression
     return parent[x]
   
   আগে: A → B → C → D (root)
   পরে: A → D, B → D, C → D   (flat!)

২. UNION BY RANK (union-এ):
   ছোট tree বড় tree-এর নিচে যোগ করো।
   গভীরতা বাড়ে না।
   
   union(x, y):
     rootX, rootY = find(x), find(y)
     if rank[rootX] < rank[rootY]:
       parent[rootX] = rootY
     elif rank[rootX] > rank[rootY]:
       parent[rootY] = rootX
     else:
       parent[rootY] = rootX
       rank[rootX] += 1

  দুটো একসাথে → amortized O(α(n)) ≈ O(1) (α ≤ 4 for n < 10^600)

PYTHON IMPLEMENTATION:

  class UnionFind:
      def __init__(self, n):
          self.parent = list(range(n))
          self.rank = [0] * n
      
      def find(self, x):
          if self.parent[x] != x:
              self.parent[x] = self.find(self.parent[x])
          return self.parent[x]
      
      def union(self, x, y):
          px, py = self.find(x), self.find(y)
          if px == py:
              return False          # একই সেটে ছিল — কিছু হয়নি
          if self.rank[px] < self.rank[py]:
              px, py = py, px
          self.parent[py] = px
          if self.rank[px] == self.rank[py]:
              self.rank[px] += 1
          return True               # নতুন union হলো

WHEN TO USE UNION-FIND:

  ✅ Connected components (graph-এ কয়টা দ্বীপ?)
  ✅ Cycle detection (undirected graph-এ সাইকেল আছে?)
  ✅ Kruskal's MST (Minimum Spanning Tree)
  ✅ Dynamic connectivity (edge যোগ হচ্ছে ধীরে ধীরে)
  ✅ Image segmentation (পিক্সেল গোত্রে ভাগ)
  ✅ Clustering (HAC-এর single-linkage variant)
  ✅ Percolation theory (কোন সাইট থেকে কোনটায় পথ আছে?)

WHERE AI/ML MEETS UNION-FIND:
  • Agglomerative clustering — দুই cluster merge (union!)
  • Image segmentation — পিক্সেল similarity-তে union
  • Graph neural net preprocessing — connected components
  • Entity resolution — একই entity কি না (record linkage)
  • Incremental graph queries — edge একটা একটা যোগ হচ্ছে

WHY "NO SPLIT":
  Union-Find শুধু জোড়ে — বিচ্ছেদ করতে পারে না।
  যদি edge মুছতে হয় → Dynamic connectivity (আরও জটিল)।
  বা offline — সব edge পেছন থেকে প্রশ্ন সাজাও (offline reverse trick)।</div>

<div class="dialogue">জামাত — দল, সম্প্রদায়। ইসলামে জামাতের গুরুত্ব অপরিসীম — "একজন আরেকজনের ভাই," "এক জামাতে থাকো।" গোত্র একবার যুক্ত হলে আলাদা হয় না — সম্প্রদায়ের বাঁধন শক্ত। Union-Find-এর সৌন্দর্য — একবার union, চিরস্থায়ী। find শুধু জিজ্ঞেস করে — তুমি কার সাথে যুক্ত?</div>
<div class="dialogue en">"Jamaat — group, community. In Islam, the community's importance is boundless — 'one is brother to another,' 'stay in the group.' Once clans join, they don't separate — the bond of community is strong. The beauty of union-find — once unioned, forever. Find only asks — who are you connected to?"</div>`,
  senior:{
    title:"Union-Find in Practice",
    body:`
    <p><strong>Two optimizations সবসময় একসাথে:</strong> path compression + union by rank। একটা ছাড়লেই ধীরে যায়।</p>
    <p><strong>Number of islands</strong> (LeetCode 200): grid একটা একটা cell দেখো — '1' হলে union neighbors সাথে। শেষে কয়টা root বাকি = কয়টা দ্বীপ।</p>
    <p><strong>Cycle detect:</strong> edge একটা একটা যোগ করো। যদি <code>union()</code> <code>False</code> ফেরত দেয় — মানে দুই প্রান্ত আগেই এক সেটে ছিল → cycle!</p>
    <p><strong>Offline trick:</strong> যদি edge মুছতে হয় — সব operation পেছনের দিক থেকে প্রসেস করো (delete → union হয়ে যায়)। Union-find সহজে reverse হয় না, কিন্তু offline প্রশ্ন হ্যান্ডেল করতে পারে।</p>`
  },
  exercise:{
    hint:"UnionFind class বানাও — path compression সহ। তারপর cycle detect করো!",
    starterCode:`# গোত্রপতির পরিষদ — Union-Find with Path Compression
# দুই অপ্টিমাইজেশন: path compression + union by rank

class UnionFind:
    def __init__(self, n):
        self.parent = list(range(n))   # শুরুতে প্রতিটা নিজেই রুট
        self.rank = [0] * n
    
    def find(self, x):
        """x-এর গোত্রপতি (root) খুঁজে আনো — path compression সহ"""
        if self.parent[x] != x:
            self.parent[x] = self.find(self.parent[x])  # compress!
        return self.parent[x]
    
    def union(self, x, y):
        """দুই গোত্র এক করো — union by rank সহ"""
        px, py = self.find(x), self.find(y)
        if px == py:
            return False                  # একই গোত্রে ছিল
        if self.rank[px] < self.rank[py]:
            px, py = py, px
        self.parent[py] = px
        if self.rank[px] == self.rank[py]:
            self.rank[px] += 1
        return True                       # নতুন union

# পরীক্ষা: cycle detect একটা undirected graph-এ
def has_cycle(n, edges):
    """edges = [(0,1), (1,2), ...]. cycle আছে কি?"""
    uf = UnionFind(n)
    for u, v in edges:
        if not uf.union(u, v):            # একই গোত্রে ছিল → cycle!
            return True
    return False

# গ্রাফ: 0-1-2-0 (cycle আছে)
print(has_cycle(3, [(0,1), (1,2), (0,2)]))   # True (0 আর 2 আগেই যুক্ত ছিল)

# গ্রাফ: 0-1-2 (tree, cycle নেই)
print(has_cycle(3, [(0,1), (1,2)]))           # False

# TODO: UnionFind ব্যবহার করে "number of connected components" বের করো
# (শেষে কয়টা distinct root বাকি তার সংখ্যা)
`
  }
});
