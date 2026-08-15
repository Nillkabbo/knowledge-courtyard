// ════════════════════════════════════════
// DSA BAZAAR — DOORS 5-8
// 5. Stacks & Queues   6. Hash Maps
// 7. Heaps             8. Trees (BST, Trie)
// ════════════════════════════════════════

// ── DOOR 5: STACK & QUEUE ──
doors.push({
  num:5, icon:"🐪", color:"#f0c75e", name:"কাফেলার সারি",
  subtitle:"The Caravan Line", tech:"Stacks & Queues (LIFO / FIFO)",
  spirit:"সাফ — order/queue, from Quran 37:102 (the orderly caravan of Ibrahim)",
  secret:"Stack = স্তূপ পাত্র — শেষে রাখা প্রথম বেরোয় (LIFO)। Queue = কাফেলার সারি — যে আগে এসেছে সে আগে যায় (FIFO)। দুটোই সাধারণ, কিন্তু DFS/BFS-এর মূল।",
  recall:{
    q:"কাফেলার সারিতে কে আগে বেরোয় — যে আগে এসেছে, নাকি যে পরে?",
    qen:"In the caravan line, who leaves first — who came first, or who came last?",
    a:"দুই রকম নিয়ম। Queue-এ (FIFO) — যে আগে এসেছে সে আগে যায়। Stack-এ (LIFO) — যে পরে এসেছে সে আগে বেরিয়ে যায়, স্তূপের মতো। কাজ অনুযায়ী নিয়ম বাছো।",
    aen:"Two rules. In a queue (FIFO) — who came first leaves first. In a stack (LIFO) — who came last leaves first, like a pile. Choose the rule per task."
  },
  story:`
<p class="scene-setting">পঞ্চম দোকান। কাফেলার সারি। বাইরে উটের কাফেলা — এক সারিতে, একজন পরে একজন। ভেতরে মালের স্তূপ — একটার উপর একটা, সবশেষে রাখা সবার উপরে। কাফেলা প্রধান ওমর বললেন — "দুই জিনিস আছে। সারি — যে আগে এসেছে সে আগে যাবে। স্তূপ — যে শেষে রাখা, সে আগে তোলা।"</p>
<p class="scene-setting en">The fifth shop. The caravan line. Outside, a camel caravan — single file, one after another. Inside, a pile of goods — one on another, the last placed on top. Caravan-master Omar said — "Two things. The line — who came first goes first. The pile — what was placed last is taken first."</p>

<div class="dialogue">মুক্তোর মালা বলেছিলেন — এক সারি, pointer দিয়ে গাঁথা। কিন্তু আমি বলি — কখনো ক্রম গুরুত্বপূর্ণ। কে আগে? কে পরে? Stack আর queue — দুটোই ক্রমের নিয়ম। সহজ, কিন্তু এগুলো ছাড়া DFS/BFS বোঝা যায় না।</div>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>ব্যর্থতার গল্প:</strong> ওমর Python list-এ <code>pop(0)</code> দিয়ে queue বানিয়ে ১,০০,০০০ inference request প্রসেস করতে গিয়েছিলেন। প্রতিটা <code>pop(0)</code> পুরো list এক ঘর সরিয়ে দেয় — O(n)। মোট O(n²), ৩৮ সেকেন্ড ধরে ঝুলে রইল। তারপর <code>collections.deque</code> ব্যবহার করলেন — দুই পাশেই O(1), একই কাজ ০.০৪ সেকেন্ডে। ভুল ডেটা স্ট্রাকচার শতগুণ ধীর করে দেয়।</div></div>
<div class="dialogue en">"The pearl necklace maker said — a chain, threaded by pointers. But I say — sometimes order matters. Who's first? Who's last? Stack and queue — two rules of order. Simple, but without them, DFS and BFS cannot be understood."</div>

<div class="diagram">
  <div class="diag-title">Stack (LIFO) বনাম Queue (FIFO)</div>
  <svg viewBox="0 0 560 220" xmlns="http://www.w3.org/2000/svg">
    <!-- STACK -->
    <text class="lbl-sm" x="140" y="25" fill="#f0c75e" style="font-size:13px">STACK — push/pop top থেকে</text>
    ${[0,1,2].map(i=>`
    <rect class="${i===2?'cell-hot':'cell'}" x="${90}" y="${60+i*36}" width="100" height="30" rx="4"/>
    <text class="lbl-sm" x="140" y="${78+i*36}">${['1','2','3 (top)'][i]}</text>
    `).join('')}
    <text class="lbl-sm" x="140" y="195" fill="#ff6b35">pop() → 3 (শেষে রাখা প্রথম)</text>
    <line class="edge-hot" x1="200" y1="155" x2="220" y2="155"/>

    <!-- QUEUE -->
    <text class="lbl-sm" x="420" y="25" fill="#36d6e7" style="font-size:13px">QUEUE — enqueue back, dequeue front</text>
    ${[0,1,2].map(i=>`
    <rect class="${i===0?'cell-good':'cell-cyan'}" x="${300+i*70}" y="90" width="60" height="36" rx="4" style="${i===0?'fill:rgba(82,196,26,.25);stroke:#52c41a':''}"/>
    <text class="lbl-sm" x="${330+i*70}" y="112">${['1 (front)','2','3 (back)'][i]}</text>
    `).join('')}
    <text class="lbl-sm" x="330" y="150" fill="#52c41a">dequeue() → 1 (আগে এসেছে আগে)</text>
    <line class="edge-cyan" x1="300" y1="140" x2="270" y2="140"/>
    <text class="lbl-sm" x="140" y="208" text-anchor="middle">একই উপাদান — দুই নিয়ম। DFS চাইলে stack, BFS চাইলে queue।</text>
  </svg>
</div>

<div class="dialogue">Stack — LIFO। Last In, First Out। মালের স্তূপে সবশেষে যা রাখলে, সেটাই প্রথম তুলবে। থালার স্তূপ, বইয়ের স্তূপ, কল স্ট্যাক (function call) — সব LIFO। ফাংশন কল করলে স্ট্যাকে ঢোকে, শেষেরটা প্রথম ফিরে আসে। recursion-ও stack-এ চলে (দ্বিতীয় দোকানে দেখেছিলে)।</div>
<div class="dialogue en">"Stack — LIFO. Last In, First Out. Whatever you place last on the pile, you pick up first. Plate stacks, book stacks, the call stack (function calls) — all LIFO. Call a function, it enters the stack; the last returns first. Recursion runs on a stack too (second shop, remember?)."</div>

<div class="dialogue">Queue — FIFO। First In, First Out। কাফেলার সারিতে যে আগে এসেছে, সে আগে যায়। টিকিটের লাইন, প্রিন্টারের কাজ, মেসেজ কিউ — সব FIFO। AI-এ? task queue — একাধিক inference request সারিতে, এক এক করে প্রসেস।</div>
<div class="dialogue en">"Queue — FIFO. First In, First Out. Whoever came first to the caravan line goes first. Ticket lines, printer jobs, message queues — all FIFO. In AI? Task queues — many inference requests in line, processed one by one."</div>

<div class="code-block"># ── STEP 1: What is a stack? (LIFO) ──
# A stack is like a pile of plates.
# You add (push) on TOP, you remove (pop) from TOP.
# Last item IN = first item OUT (LIFO).

# Python list IS a stack — use append() and pop():
stack = []
stack.append("plate1")   # push
stack.append("plate2")
stack.append("plate3")

print(stack)             # ['plate1', 'plate2', 'plate3']
print(stack.pop())       # plate3 — LAST in, FIRST out
print(stack.pop())       # plate2
print(stack)             # ['plate1']

# All stack operations are O(1):
# push (append)    → O(1)
# pop              → O(1)
# peek (stack[-1]) → O(1)
# is_empty         → O(1)

# Where stacks appear in real life:
# - Browser BACK button (current page on top)
# - Undo/Redo in text editors
# - Function call stack (recursion!)
# - Balancing parentheses ({[()]} checker)</div>

<div class="code-block"># ── STEP 2: Practical stack — valid parentheses ──
# Classic interview problem: check if brackets are balanced.

def is_valid_parentheses(s):
    """Check if ()[]{} are properly matched."""
    stack = []
    matching = {")": "(", "]": "[", "}": "{"}

    for char in s:
        if char in "([{":
            stack.append(char)        # push opening bracket
        elif char in ")]}":
            if not stack:              # closing with nothing open
                return False
            if stack.pop() != matching[char]:  # wrong match
                return False

    return len(stack) == 0  # all opened must be closed

print(is_valid_parentheses("()"))        # True
print(is_valid_parentheses("()[]{}"))    # True
print(is_valid_parentheses("(]"))        # False
print(is_valid_parentheses("([)]"))      # False
print(is_valid_parentheses("{[]}"))      # True

# The stack tracks what needs to close.
# Each closing bracket must match the MOST RECENT opening.</div>

<div class="code-block"># ── STEP 3: What is a queue? (FIFO) ──
# A queue is like a line at a store.
# First person IN = first person OUT (FIFO).
# Add at BACK (enqueue), remove from FRONT (dequeue).

# ❌ BAD: Using list as queue — O(n) for front removal!
queue_list = [1, 2, 3]
queue_list.pop(0)  # O(n) — everyone shifts left!

# ✅ GOOD: Use collections.deque — O(1) at both ends:
from collections import deque

queue = deque()
queue.append("customer1")   # enqueue at back
queue.append("customer2")
queue.append("customer3")

print(queue)                # deque(['customer1', 'customer2', 'customer3'])
print(queue.popleft())      # customer1 — FIRST in, FIRST out
print(queue.popleft())      # customer2
print(queue)                # deque(['customer3'])

# All queue operations with deque are O(1):
# enqueue (append)     → O(1)
# dequeue (popleft)    → O(1)
# peek (queue[0])      → O(1)

# Where queues appear:
# - Print queue (first document submitted = first printed)
# - BFS (breadth-first search in graphs)
# - Task scheduling (process queue)
# - Message queues (RabbitMQ, Celery)</div>

<div class="code-block"># ── STEP 4: Stack = DFS, Queue = BFS ──
# The two great graph algorithms differ ONLY in data structure:
# Stack → Depth-First Search (go deep, then backtrack)
# Queue → Breadth-First Search (explore level by level)

# DFS using a stack (go DEEP first):
def dfs(graph, start):
    """Depth-first search — explore as deep as possible."""
    visited = set()
    stack = [start]

    while stack:
        node = stack.pop()        # LIFO — take from top
        if node not in visited:
            visited.add(node)
            print(node, end=" ")
            # Add neighbors (reversed for left-to-right order)
            stack.extend(reversed(graph[node]))

graph = {
    "A": ["B", "C"],
    "B": ["D", "E"],
    "C": ["F"],
    "D": [], "E": [], "F": []
}

dfs(graph, "A")  # A C F B E D (deep first)

# BFS using a queue (explore LEVEL by LEVEL):
def bfs(graph, start):
    """Breadth-first search — explore level by level."""
    from collections import deque
    visited = set()
    queue = deque([start])

    while queue:
        node = queue.popleft()   # FIFO — take from front
        if node not in visited:
            visited.add(node)
            print(node, end=" ")
            queue.extend(graph[node])

bfs(graph, "A")  # A B C D E F (level by level)

# Same algorithm structure — only Stack↔Queue changes!</div>

<div class="code-block"># ── STEP 5: Deque — the Swiss Army knife ──
# deque (double-ended queue) does BOTH stack and queue operations.

from collections import deque

d = deque([1, 2, 3])

# As a STACK (LIFO):
d.append(4)        # [1, 2, 3, 4]
d.pop()            # 4 (from RIGHT)

# As a QUEUE (FIFO):
d.append(5)        # [1, 2, 3, 5]
d.popleft()        # 1 (from LEFT)

# DOUBLE-ENDED (both sides):
d.appendleft(0)    # [0, 2, 3, 5]
d.extend([6, 7])   # [0, 2, 3, 5, 6, 7]
d.extendleft([-1]) # [-1, 0, 2, 3, 5, 6, 7]
d.rotate(1)        # rotate right: [7, -1, 0, 2, 3, 5, 6]
d.rotate(-1)       # rotate left: back to [-1, 0, 2, 3, 5, 6, 7]

# All operations are O(1):
# append, appendleft, pop, popleft — all instant

# WHEN TO USE deque vs list:
# ┌─────────────────────┬───────────┬──────────────┐
# │ Need                │ Use       │ Why          │
# ├─────────────────────┼───────────┼──────────────┤
# │ Random access arr[i]│ list      │ deque is O(n)│
# │ Push/pop from end   │ list      │ both O(1)    │
# │ Push/pop from front │ deque     │ deque O(1)   │
# │ Queue operations    │ deque     │ popleft O(1) │
# │ Iteration           │ list      │ slightly fast│
# └─────────────────────┴───────────┴──────────────┘</div>

<div class="code-block"># ── STEP 6: Real-world stack/queue problems ──
# Problem 1: Reverse a string using a stack:
def reverse_string(text):
    stack = list(text)
    result = ""
    while stack:
        result += stack.pop()
    return result

print(reverse_string("hello"))  # olleh

# Problem 2: Check balanced HTML tags:
def valid_html_tags(html):
    """Check if HTML tags are properly nested."""
    import re
    stack = []
    tags = re.findall(r'<(/?)(\w+)>', html)

    for is_closing, tag in tags:
        if not is_closing:
            stack.append(tag)
        else:
            if not stack or stack.pop() != tag:
                return False
    return len(stack) == 0

print(valid_html_tags("<div><p>hello</p></div>"))  # True
print(valid_html_tags("<div><p>hello</div></p>"))  # False

# Problem 3: Implement a queue using two stacks:
class QueueFromStacks:
    """Queue (FIFO) built from two stacks (LIFO)."""
    def __init__(self):
        self.stack_in = []   # for enqueue
        self.stack_out = []  # for dequeue

    def enqueue(self, x):
        self.stack_in.append(x)

    def dequeue(self):
        if not self.stack_out:
            # Transfer all from in to out (reverses order)
            while self.stack_in:
                self.stack_out.append(self.stack_in.pop())
        return self.stack_out.pop() if self.stack_out else None

q = QueueFromStacks()
q.enqueue(1)
q.enqueue(2)
q.enqueue(3)
print(q.dequeue())  # 1 (FIFO!)

# SUMMARY:
# Stack (LIFO): list append/pop → DFS, undo, parentheses
# Queue (FIFO): deque append/popleft → BFS, scheduling
# Deque: both ends O(1) → stacks + queues combined</div>

<div class="dialogue">কিন্তু দুইটা ভাই আরও আছে — Circular Queue আর Deque। কাফেলার সারিতে যদি সামনের জায়গা খালি হয়ে যায়, কিন্তু পেছনে কেউ ঢোকাতে পারে না কারণ array-র শেষ — তখন কী? জায়গা নষ্ট। Circular Queue এই সমস্যার সমাধান — সারির শেষকে আবার সামনের সাথে জোড়ো দাও। গোল হয়ে যাও। নতুন কেউ খালি জায়গায় ঢুকে পড়ে। OS-এ এটা প্রতিদিন ব্যবহার হয় — process scheduling, CPU time-sharing।</div>
<div class="dialogue en">"But two more siblings exist — Circular Queue and Deque. If the front of the caravan line empties but no one can join the back because the array is full — what then? Wasted space. Circular Queue solves this — connect the end of the line back to the front. Make it circular. New arrivals fill empty spaces. The OS uses this daily — process scheduling, CPU time-sharing."</div>

<div class="diagram">
  <div class="diag-title">Circular Queue — গোল সারি, জায়গা নষ্ট হয় না</div>
  <svg viewBox="0 0 560 220" xmlns="http://www.w3.org/2000/svg">
    <!-- circular queue as a ring of 6 slots -->
    ${[0,1,2,3,4,5].map((fill,i)=>{
      const angle = (i*60 - 90) * Math.PI / 180;
      const cx = 280 + 80 * Math.cos(angle);
      const cy = 110 + 80 * Math.sin(angle);
      const filled = [1,1,0,0,1,0][i];
      return `<rect class="${filled?'cell-good':'cell'}" x="${cx-26}" y="${cy-20}" width="52" height="40" rx="6" style="${filled?'fill:rgba(82,196,26,.2);stroke:#52c41a':''}" transform="rotate(${i*60} ${cx} ${cy})"/>
      <text class="lbl-sm" x="${cx}" y="${cy+5}" text-anchor="middle" fill="${filled?'#52c41a':'#9a93b8'}" transform="rotate(${i*60} ${cx} ${cy})">${['A','B','','','C',''][i]}</text>`;
    }).join('')}
    <!-- front and rear markers -->
    <text class="lbl-sm" x="280" y="18" text-anchor="middle" fill="#f0c14b">front → সামনে (dequeue)</text>
    <line class="edge-hot" x1="280" y1="22" x2="280" y2="10" stroke="#f0c14b"/>
    <text class="lbl-sm" x="395" y="120" fill="#ff6b35">← rear (enqueue)</text>
    <line class="edge-cyan" x1="393" y1="118" x2="408" y2="118" stroke="#ff6b35"/>
    <text class="lbl-sm" x="280" y="200" text-anchor="middle">সারির শেষ সামনের সাথে যুক্ত — খালি জায়গায় নতুন উপাদান ঢোকে। কোনো জায়গা নষ্ট নয়।</text>
  </svg>
  <div class="diag-cap">fixed-size array-তে rear শেষে পৌঁছালে front-এর খালি অংশে wrap around করে। O(1) সব কাজে।</div>
</div>

<div class="dialogue">আর Deque? ডাবল-এন্ডেড কিউ। দুই পাশ দিয়েই ঢোকাও, দুই পাশ দিয়েই বের করো। এত নমনীয় যে একা এটাই stack আর queue — দুটোর কাজ করতে পারে। চাইলে সামনে থেকে বের করো (queue), চাইলে পিছন থেকে বের করো (stack)। Python-এ <code>collections.deque</code> — তুমি এটাই ব্যবহার করো।</div>
<div class="dialogue en">"And Deque? Double-ended queue. Insert and remove from both ends. So flexible it alone does the job of both stack and queue. Remove from front (queue behavior), remove from back (stack behavior). In Python, <code>collections.deque</code> — use this."</div>

<div class="diagram">
  <div class="diag-title">Deque — দুই পাশ দিয়েই ঢোকাও ও বের করো</div>
  <svg viewBox="0 0 560 100" xmlns="http://www.w3.org/2000/svg">
    ${[0,1,2,3].map(i=>`
    <rect class="cell-cyan" x="${140+i*70}" y="30" width="60" height="40" rx="6" style="fill:rgba(54,214,231,.1);stroke:#36d6e7"/>
    <text class="lbl-sm" x="${170+i*70}" y="54">${['A','B','C','D'][i]}</text>
    `).join('')}
    <!-- left arrows -->
    <text class="lbl-sm" x="40" y="40" fill="#ff6b35">appendleft()</text>
    <line class="edge-hot" x1="120" y1="40" x2="138" y2="40"/>
    <text class="lbl-sm" x="40" y="70" fill="#52c41a">popleft()</text>
    <line class="edge-cyan" x1="138" y1="60" x2="120" y2="60"/>
    <!-- right arrows -->
    <text class="lbl-sm" x="400" y="40" fill="#ff6b35">append()</text>
    <line class="edge-hot" x1="400" y1="40" x2="420" y2="40"/>
    <text class="lbl-sm" x="400" y="70" fill="#52c41a">pop()</text>
    <line class="edge-cyan" x1="420" y1="60" x2="400" y2="60"/>
    <text class="lbl-sm" x="280" y="92" text-anchor="middle">দুই পাশ দিয়েই — push/pop, enqueue/dequeue। এটাই সবচেয়ে নমনীয় লিনিয়ার কাঠামো।</text>
  </svg>
  <div class="diag-cap">Sliding window (Door 13) এবং monotonic deque — LeetCode-এ প্রিয় প্যাটার্ন।</div>
</div>

<div class="dialogue">আরও কিছু বাস্তব উদাহরণ দাঁড় করাই। Stack-এর জন্য — ধুয়ে রাখা থালার স্তূপ। সবার উপরে রাখা থালাটা সবার আগে নামবে। ব্রাউজারের Back বাটন — তুমি YouTube → Facebook → Google গিয়েছ, Back চাপলে প্রথমে Facebook এ ফিরবে, তারপর Google এ — উল্টো ক্রমে। আর Ctrl+Z (Undo)? MS Word-এ টাইপ করছ, একটা একটা করে পেছনে ফিরছ — এটাও stack।</div>
<div class="dialogue en">"More real-world examples. Stack — a pile of washed plates. The last plate placed is picked up first. Browser Back button — you went YouTube → Facebook → Google, pressing Back takes you to Facebook first, then Google — reverse order. And Ctrl+Z (Undo)? Typing in MS Word, undoing step by step — that's a stack too."</div>

<div class="dialogue">Queue-এর জন্য — অফিসের প্রিন্টার। ১০টা ডকুমেন্ট প্রিন্ট করতে দিলে, যেটা আগে দেওয়া হয়েছে সেটা আগে প্রিন্ট হয়। কেউ আসে পরে, সে সারিতে পেছনে দাঁড়ায়। ব্যাংকের লাইন, বাস কাউন্টার — সব FIFO। এমনকি হাসপাতালের সাধারণ সারি — যে আগে এসেছে সে আগে চিকিৎসক দেখবে। (তবে জরুরি রোগী? সে আলাদা — Priority Queue, Door 7।)</div>
<div class="dialogue en">"Queue — office printer. 10 documents sent to print, the one sent first prints first. Someone arrives later, joins the back of the line. Bank lines, bus counters — all FIFO. Even hospital general queue — first come, first served. (But emergency patients? Different — Priority Queue, Door 7.)"</div>

<div class="dialogue">তুমি AI ইঞ্জিনিয়ার। Stack = autograd backprop chain (reverse-mode auto-diff পিছনে হাঁটে)। Queue = inference batching, training data shuffling, RL replay buffer। যখন PyTorch/TensorFlow <code>loss.backward()</code> কল করো — এটা একটা stack-based traversal। এই দুই সরল কাঠামো পুরো AI ইঞ্জিনিয়ারিং জুড়ে।</div>
<div class="dialogue en">"You're an AI engineer. Stack = autograd backprop chain (reverse-mode autodiff walks backward). Queue = inference batching, training data shuffling, RL replay buffer. When PyTorch/TensorFlow calls <code>loss.backward()</code> — it's a stack-based traversal. These two simple structures span all of AI engineering."</div>

<div class="dialogue">সাফ — সারি, পংক্তি। কুরআনে আল্লাহ বলেন — "নিশ্চয়ই আল্লাহ তাদের ভালোবাসেন যারা সারিবদ্ধ হয়ে লড়ে, যেন ঢালাই করা দেয়াল।" (৬১:৪)। সারি — শৃঙ্খলা। কে আগে, কে পরে — এই শৃঙ্খলা ছাড়া কাফেলা ছড়িয়ে যায়। Stack ও queue — ক্রমের দুই রূপ, দুই নিয়ম। সঠিক নিয়ম বেছে নাও।</div>
<div class="dialogue en">"Saff — row, line. Allah says — 'Allah loves those who fight in ranks, as if a cemented wall.' (61:4). The line — discipline. Who's first, who's next — without this discipline, the caravan scatters. Stack and queue — two forms of order, two rules. Choose the right one."</div>

<div class="secret-box">🐪 Stack = শেষে রাখা প্রথম বেরোয় (LIFO)। Queue = আগে এসেছে আগে যায় (FIFO)। এই দুই সরল নিয়মই DFS/BFS-এর মূল।</div>`,
  senior:{
    title:"Stack & Queue — Production Patterns",
    body:`
    <p><strong>Python এ stack:</strong> শুধু <code>list</code> ব্যবহারো — <code>append()</code> + <code>pop()</code>, O(1)।</p>
    <p><strong>Python এ queue:</strong> <code>collections.deque</code> — কখনো <code>list.pop(0)</code> করবে না (O(n))।</p>
    <p><strong>Monotonic stack:</strong> ক্রমবাধক stack — পরবর্তী বড়/ছোট element খুঁজতে। LeetCode-এ প্রিয় প্যাটার্ন।</p>
    <p><strong>Two-stack queue:</strong> interview ক্লাসিক — দুই stack দিয়ে queue বানাও (amortized O(1))।</p>
    <p><strong>AI tip:</strong> backpropagation = reverse-mode autodiff = DFS on computation graph।</p>`
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

// ── DOOR 6: HASH MAPS ──
doors.push({
  num:6, icon:"🔑", color:"#52c41a", name:"তালা নির্মাতার ভাণ্ডার",
  subtitle:"The Locksmith's Vault", tech:"Hash Maps / Dictionaries",
  spirit:"মিফতাহ — key, from Quran 39:63 (to Him belong the keys)",
  secret:"Hash map = চাবি → ঠিকানা → ধন। O(1) lookup। Caching-এর ভিত্তি।",
  recall:{
    q:"তালা নির্মাতা কীভাবে এক সেকেন্ডে সঠিক ধন খুঁজে পান?",
    qen:"How does the locksmith find the exact treasure in one second?",
    a:"কারণ চাবির একটা গাণিতিক মান (hash) আছে যা সরাসরি একটা বাক্সে নিয়ে যায়। খুঁজতে হয় না। O(1) lookup।",
    aen:"Because the key has a mathematical value (hash) that directly leads to a box. No searching. O(1) lookup."
  },
  story:`
<p class="scene-setting">ষষ্ঠ দোকান। তালা নির্মাতার ভাণ্ডার। লোহার চাবির ঝনঝন, তেলের গন্ধ, সারিবদ্ধ ধাতব বাক্স। উস্তাদ ইদ্রিস দাঁড়িয়ে আছেন — হাতে একগুচ্ছ চাবি, সামনে শত শত বাক্স। প্রতিটা চাবি একটা নির্দিষ্ট বাক্স খোলে। কোনো খোঁজ নেই — চাবি দিয়েই সরাসরি।</p>
<p class="scene-setting en">The sixth shop. The Locksmith's Vault. Clink of iron keys, smell of oil, rows of metal boxes. Ustad Idris stands — keys in hand, hundreds of boxes before him. Each key opens one specific box. No searching — direct access.</p>

<div class="dialogue">টালি নির্মাতা বলেছিলেন — সারিতে থাকলে সরাসরি পাওয়া যায়, index দিয়ে। কিন্তু আমি বলি — index মনে রাখা কঠিন। আমি চাই নাম দিয়ে খুঁজি। "ইদ্রিসের ধন" বললেই — সরাসরি সেই বাক্সে যাই। কীভাবে? Hash।</div>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>ব্যর্থতার গল্প:</strong> ইদ্রিস linear search দিয়ে ৫ লাখ user-এর মধ্যে email খুঁজতে গিয়েছিলেন। প্রতিটা খোঁজায় গড়ে ২.৫ লাখ তুলনা, ৩ সেকেন্ড। প্রতিদিন হাজার খোঁজা — সার্ভার ক্র্যাশ। তারপর hash map (dict) ব্যবহার করলেন — key থেকে সরাসরি ঠিকানা। O(1) lookup, ০.০০০১ সেকেন্ড। ৩০,০০০ গুণ দ্রুত। একই ডেটা, ভিন্ন পদ্ধতি — আসমান-জমিন পার্থক্য।</div></div>
<div class="dialogue en">"The tile maker said — in a row, you find directly by index. But I say — indices are hard to remember. I want to search by name. Say 'Idris's treasure' — go directly to that box. How? Hashing."</div>

<div class="diagram">
  <div class="diag-title">Hash Function — চাবি থেকে বাক্সে</div>
  <svg viewBox="0 0 560 230" xmlns="http://www.w3.org/2000/svg">
    <!-- keys -->
    <text class="lbl-sm" x="80" y="40" fill="#f0c75e">Keys</text>
    ${['"name"','"age"','"email"'].map((k,i)=>`
    <rect class="cell-cyan" x="40" y="${55+i*45}" width="100" height="32" rx="6" style="fill:rgba(54,214,231,.15);stroke:#36d6e7"/>
    <text class="lbl-sm" x="90" y="${75+i*45}" fill="#36d6e7">${k}</text>
    `).join('')}
    <!-- hash fn -->
    <rect class="node-hot" x="220" y="95" width="120" height="40" rx="8"/>
    <text class="lbl" x="280" y="115">hash()</text>
    <text class="lbl-sm" x="280" y="150" fill="#ff6b35">math transform</text>
    <!-- arrows in -->
    ${[0,1,2].map(i=>`<line class="edge-cyan" x1="140" y1="${71+i*45}" x2="218" y2="110"/>`).join('')}
    <!-- buckets -->
    <text class="lbl-sm" x="460" y="40" fill="#f0c75e">Buckets</text>
    ${[7,2,9].map((b,i)=>`
    <rect class="cell" x="410" y="${55+i*45}" width="80" height="32" rx="6"/>
    <text class="lbl-sm" x="450" y="${75+i*45}">[${b}]</text>
    <line class="edge-hot" x1="340" y1="115" x2="408" y2="${71+i*45}"/>
    `).join('')}
    <text class="lbl-sm" x="280" y="200" text-anchor="middle">"email" → hash → 9 → bucket[9]। O(1), কোনো খোঁজ নেই।</text>
  </svg>
</div>

<div class="dialogue">Hash হলো একটা গাণিতিক ফাংশন — যেকোনো নাম (key) কে একটা সংখ্যায় রূপান্তর করে। সেই সংখ্যাটা বাক্সের ঠিকানা। "user_email" → hash → 47 → বাক্স 47। O(1)। খুঁজতে হয় না। এটাই Python dictionary-র কাজ।</div>
<div class="dialogue en">"Hash is a mathematical function — transforms any name (key) into a number. That number is the box's address. 'user_email' → hash → 47 → box 47. O(1). No searching. This is how Python dictionaries work."</div>

<div class="dialogue">কিন্তু সমস্যা আছে। দুটো ভিন্ন চাবি কখনো একই বাক্সে যেতে পারে — collision। যেমন "abc" আর "cba" হয়তো একই hash দেয়। সমাধান? বাক্সে একটা ছোট list রাখা — একই বাক্সে একাধিক জিনিস থাকতে পারে। সেটাকে বলে chaining।</div>
<div class="dialogue en">"But there's a problem. Two different keys may map to the same box — collision. 'abc' and 'cba' might have the same hash. Solution? Keep a small list in the box — multiple items per box. This is called chaining."</div>

<div class="dialogue">আর ভাবো — একটা ফোনবুক। তুমি "রাফিদ" নামটা লিখলেই তার নম্বর সাথে সাথে পেয়ে যাও। ১০০০টা নাম পড়ে খুঁজতে হয় না। কারণ hash function "রাফিদ" নামটাকে একটা সংখ্যায় রূপান্তর করে — সেই সংখ্যাটা বাক্সের ঠিকানা। O(1)-এ তুমি সেই বাক্সে গেলে — নম্বরটা পাও।</div>
<div class="dialogue en">"And think — a phonebook. You type 'Rafid' and instantly get his number. No scrolling through 1,000 names. Because the hash function converts 'Rafid' into a number — that number is the box's address. O(1) — you go to that box and find the number."</div>

<div class="dialogue">কিন্তু আরেকটা রূপ আছে — Set। ভাবো — একটা VIP ক্লাবের গেস্ট লিস্ট। নিয়ম কঠোর — একই নাম দুইবার থাকতে পারে না। "রাফিদ" একবারই লিস্টে আছে। আবার যদি "রাফিদ" যোগ করতে চাও — নিষেধ। এটাই Set — ডুপ্লিকেট নেই, সব unique। Database-এ একই ইমেইল দুইবার নিবন্ধন? Set দিয়ে যাচাই। ইউজারনেম আগে আছে কি না? Set-এ খুঁজে দেখো — O(1)।</div>
<div class="dialogue en">"But another form exists — Set. Think — a VIP club guest list. Strict rule — no duplicate names. 'Rafid' appears only once. Try adding 'Rafid' again — denied. This is Set — no duplicates, all unique. Someone registering with the same email in a database? Verify with a Set. Username already taken? Check the Set — O(1)."</div>

<div class="diagram">
  <div class="diag-title">Set vs Dict — দুই ভাই</div>
  <svg viewBox="0 0 560 200"mlns="http://www.w3.org/2000/svg">
    <!-- DICT -->
    <text class="lbl-sm" x="140" y="25" fill="#f0c14b">DICT (key → value)</text>
    ${['name→Rafid','age→25','city→Dhaka'].map((kv,i)=>`
    <rect class="cell-cyan" x="50" y="${38+i*32}" width="180" height="26" rx="5" style="fill:rgba(54,214,231,.1);stroke:#36d6e7"/>
    <text class="lbl-sm" x="140" y="${55+i*32}" text-anchor="middle">${kv}</text>
    `).join('')}
    <text class="lbl-sm" x="140" y="135" text-anchor="middle">প্রতিটা key → একটা value</text>

    <!-- SET -->
    <text class="lbl-sm" x="420" y="25" fill="#52c41a">SET (unique values only)</text>
    ${['Rafid','Tanvir','Sadia'].map((v,i)=>`
    <rect class="cell-good" x="330" y="${38+i*32}" width="180" height="26" rx="5" style="fill:rgba(82,196,26,.15);stroke:#52c41a"/>
    <text class="lbl-sm" x="420" y="${55+i*32}" text-anchor="middle">${v}</text>
    `).join('')}
    <text class="lbl-sm" x="420" y="135" text-anchor="middle">শুধু value, key নেই — ডুপ্লিকেট নিষিদ্ধ</text>

    <!-- duplicate rejected -->
    <rect class="cell-hot" x="330" y="170" width="180" height="24" rx="5" style="fill:rgba(255,107,53,.15);stroke:#ff6b35;stroke-dasharray:4,3"/>
    <text class="lbl-sm" x="420" y="186" text-anchor="middle" fill="#ff6b35">❌ Rafid (already exists!)</text>
  </svg>
  <div class="diag-cap">Dict = key-value pair (চাবি → ধন)। Set = শুধু চাবি, value নেই — ডুপ্লিকেট স্বয়ংক্রিয়ভাবে বাদ।</div>
</div>

<div class="dialogue">তুমি AI ইঞ্জিনিয়ার — তুমি dict প্রতিদিন ব্যবহার করো। Caching: API response সেভ করা — key = request, value = response। পরের বার সরাসরি। Deduplication: একই embedding দুইবার সেভ না করা। Feature store: user_id → features। সব O(1) lookup।</div>
<div class="dialogue en">"You're an AI engineer — you use dicts daily. Caching: save API responses — key = request, value = response. Next time, direct hit. Deduplication: don't save the same embedding twice. Feature store: user_id → features. All O(1) lookup."</div>

<div class="code-block"># ── STEP 1: What is a hash map? ──
# A hash map (dict in Python) stores key-value pairs.
# It provides O(1) lookup — INSTANT access by key.

# The secret: a HASH FUNCTION converts the key to a number (index).
# key → hash function → index → direct memory access

# Python dict basics:
ages = {"Fatima": 25, "Ahmed": 30, "Sara": 28}

# O(1) operations:
print(ages["Fatima"])     # 25 — direct access
ages["Bob"] = 35          # O(1) insert
del ages["Ahmed"]         # O(1) delete
print("Sara" in ages)     # True — O(1) check

# Compare with list (O(n) search):
names = ["Fatima", "Ahmed", "Sara"]
"Sara" in names  # O(n) — must scan all

# dict: O(1) — hash function jumps directly!
# This is why dicts are the backbone of caching.</div>

<div class="code-block"># ── STEP 2: Hash map patterns ──
# Pattern 1: CACHING (save expensive results)
cache = {}

def get_embedding(text):
    """Cache embeddings — avoid recomputation."""
    if text in cache:           # O(1) check
        return cache[text]
    emb = model.encode(text)    # expensive!
    cache[text] = emb           # save for next time
    return emb

# Pattern 2: COUNTING (frequency analysis)
from collections import Counter

words = "the cat sat on the mat the cat ran".split()
freq = Counter(words)
print(freq.most_common(2))  # [('the', 3), ('cat', 2)]

# Pattern 3: GROUPING (cluster by key)
from collections import defaultdict

employees = [
    {"name": "Fatima", "dept": "Eng"},
    {"name": "Ahmed", "dept": "Sales"},
    {"name": "Sara", "dept": "Eng"},
]

by_dept = defaultdict(list)
for emp in employees:
    by_dept[emp["dept"]].append(emp["name"])

print(dict(by_dept))
# {'Eng': ['Fatima', 'Sara'], 'Sales': ['Ahmed']}

# Pattern 4: TWO SUM (classic interview)
def two_sum(nums, target):
    """Find indices of two numbers that add to target."""
    seen = {}  # value → index
    for i, num in enumerate(nums):
        complement = target - num
        if complement in seen:
            return [seen[complement], i]
        seen[num] = i
    return None

print(two_sum([2, 7, 11, 15], 9))  # [0, 1] (2+7=9)
# O(n) time with hash map vs O(n²) brute force!</div>

<div class="code-block"># ── STEP 3: defaultdict and Counter ──
# Specialized dicts that solve common problems.

# defaultdict — no more KeyError:
from collections import defaultdict

# Count letters without checking if key exists:
letter_count = defaultdict(int)  # default value = 0
for char in "hello world":
    letter_count[char] += 1       # no KeyError if new!
print(dict(letter_count))  # {'h': 1, 'e': 1, 'l': 3, ...}

# Group items by key:
groups = defaultdict(list)
words = ["apple", "ant", "banana", "berry", "cat"]
for word in words:
    groups[word[0]].append(word)  # group by first letter
print(dict(groups))  # {'a': ['apple', 'ant'], 'b': ['banana', 'berry'], ...}

# Counter — frequency counting made easy:
from collections import Counter

sales = Counter()
sales["apple"] += 1
sales["apple"] += 1
sales["banana"] += 3

print(sales.most_common())     # [('banana', 3), ('apple', 2)]
print(sales.most_common(1))    # [('banana', 3)]
print(sum(sales.values()))     # 5 (total)

# Counter operations:
c1 = Counter(a=3, b=1)
c2 = Counter(a=1, b=2)
print(c1 + c2)  # Counter({'a': 4, 'b': 3})
print(c1 - c2)  # Counter({'a': 2})  (keeps only positive)</div>

<div class="code-block"># ── STEP 4: Set — the hash map's sibling ──
# A set is a hash map with only keys (no values).
# O(1) add, remove, check — same as dict.

# Deduplication — the #1 use case:
numbers = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4]
unique = list(set(numbers))
print(unique)  # [1, 2, 3, 4]

# Fast membership test:
valid_users = {"fatima", "ahmed", "sara"}
print("fatima" in valid_users)  # O(1) — instant!

# vs list membership:
users_list = ["fatima", "ahmed", "sara"]
print("fatima" in users_list)   # O(n) — must scan

# Set operations:
a = {1, 2, 3, 4}
b = {3, 4, 5, 6}

print(a & b)   # {3, 4} — intersection
print(a | b)   # {1, 2, 3, 4, 5, 6} — union
print(a - b)   # {1, 2} — difference
print(a ^ b)   # {1, 2, 5, 6} — symmetric difference

# WHEN TO USE set vs list:
# - Need unique items? → set
# - Need to check membership frequently? → set
# - Need to preserve order? → list
# - Need to access by index? → list</div>

<div class="code-block"># ── STEP 5: How hash maps work internally ──
# Understanding the internals makes you a better engineer.

# A hash map has an internal ARRAY of "buckets".
# When you do dict["key"] = value:
# 1. Python computes hash("key") → a number
# 2. hash % array_size → bucket index
# 3. Store (key, value) at that bucket

# When you do dict["key"]:
# 1. Same hash → same bucket index
# 2. Check if key matches → return value
# All in O(1)!

# COLLISIONS — when two keys hash to the same bucket:
# Python handles this with "open addressing":
# If bucket is taken, try next bucket, then next...

# RESIZING — when dict gets too full:
# Python doubles the internal array and rehashes everything.
# This is why building a dict one item at a time is slower
# than dict.fromkeys() or comprehension for large dicts.

# RULES FOR KEYS:
# - Keys must be HASHABLE (immutable)
# - str, int, float, tuple → OK
# - list, dict, set → NOT hashable (mutable)

# This works:
d = {("x", 1): "point"}  # tuple key is OK

# This FAILS:
# d = {["x", 1]: "point"}  # TypeError: unhashable type: 'list'

# Use frozenset if you need a set as a key:
s = {frozenset({1, 2, 3}): "triple"}</div>

<div class="code-block"># ── STEP 6: OrderedDict and practical patterns ──
# Python 3.7+ dicts maintain insertion order automatically.
# But OrderedDict has extra features.

from collections import OrderedDict

# LRU Cache using OrderedDict:
class LRUCache:
    """Least Recently Used cache — O(1) operations."""
    def __init__(self, capacity):
        self.cache = OrderedDict()
        self.capacity = capacity

    def get(self, key):
        if key not in self.cache:
            return None
        # Move to end (most recently used)
        self.cache.move_to_end(key)
        return self.cache[key]

    def put(self, key, value):
        if key in self.cache:
            self.cache.move_to_end(key)
        self.cache[key] = value
        if len(self.cache) > self.capacity:
            # Remove first (least recently used)
            self.cache.popitem(last=False)

cache = LRUCache(3)
cache.put("a", 1)
cache.put("b", 2)
cache.put("c", 3)
cache.put("d", 4)  # "a" evicted (LRU)
print(cache.get("b"))  # 2

# Or just use functools.lru_cache:
from functools import lru_cache

@lru_cache(maxsize=128)
def expensive_function(x):
    return x ** 2  # results cached automatically

# DICT COMPREHENSION — build dicts concisely:
squares = {x: x**2 for x in range(5)}
print(squares)  # {0: 0, 1: 1, 2: 4, 3: 9, 4: 16}

# MERGING dicts:
d1 = {"a": 1, "b": 2}
d2 = {"b": 3, "c": 4}
merged = {**d1, **d2}  # {'a': 1, 'b': 3, 'c': 4} (d2 wins on conflict)

# SUMMARY:
# ┌────────────────┬────────────────────────────────┐
# │ Tool           │ Best for                      │
# ├────────────────┼────────────────────────────────┤
# │ dict           │ key-value lookup, caching     │
# │ defaultdict    │ avoid KeyError, grouping      │
# │ Counter        │ frequency counting            │
# │ set            │ uniqueness, membership test   │
# │ OrderedDict    │ LRU cache, order matters      │
# │ @lru_cache     │ automatic function caching    │
# └────────────────┴────────────────────────────────┘</div>

<div class="dialogue">মিযান — দাঁড়িপাল্লা। আল্লাহ বলেছেন — "আমরা কায়িম করেছি মিযান।" (৫৫:৭)। প্রতিটা কিছুর একটা নিভুল মান আছে। Hash function সেই মিযানের মতো — প্রতিটা key-কে তার সঠিক স্থানে রাখে। ভুল নেই — যদি hash ভালো হয়।</div>
<div class="dialogue en">"Mizan — the scale. Allah said — 'We established the balance.' (55:7). Everything has a precise measure. The hash function is like that scale — placing each key in its correct position. No error — if the hash is good."</div>

<div class="secret-box">🔑 Hash map = চাবি → ঠিকানা → ধন। O(1) lookup। Caching-এর ভিত্তি।</div>`,
  senior:{
    title:"Dict Internals — Senior Engineer কী জানে",
    body:`
    <p>Python dict তে ভর্তি হলে (load factor > 2/3) resize হয় — O(n) খরচ। তাই বড় dict বানানোর সময় <code>dict.fromkeys()</code> বা pre-size করলে ভালো।</p>
    <p><strong>Key constraint:</strong> key অবশ্যই hashable হতে হবে — immutable (str, int, tuple)। List কখনো key হতে পারে না। <code>frozenset</code> ব্যবহার করো set কে key করতে।</p>
    <p><code>collections.Counter</code>, <code>defaultdict</code>, <code>OrderedDict</code> — এগুলো dict-এর বিশেষ রূপ। সঠিক টুল বেছো।</p>`
  },
  exercise:{
    hint:"dict দিয়ে একটা সাধারণ cache বানাও — AI-এর caching pattern শিখো",
    starterCode:`# তালা নির্মাতার ভাণ্ডার — Hash Map Cache
# একটা সাধারণ cache বানাচ্ছি

cache = {}

def expensive_operation(n):
    """এই ফাংশন 'ভারী' — সিমুলেট করছি"""
    print(f"  গণনা হচ্ছে... computing for {n}")
    return n * n  # সাধারণ গুণ, কিন্তু ভাবো এটা API call

def smart_compute(n):
    if n in cache:
        print(f"  ✅ Cache hit! {n} already computed")
        return cache[n]
    result = expensive_operation(n)
    cache[n] = result
    return result

print("প্রথমবার (cache miss):")
print(smart_compute(5))

print("\\nদ্বিতীয়বার (cache hit):")
print(smart_compute(5))

print("\\nনতুন সংখ্যা (cache miss):")
print(smart_compute(10))

print(f"\\nCache size: {len(cache)} আইটেম")
`
  }
});

// ── DOOR 7: HEAPS / PRIORITY QUEUES ──
doors.push({
  num:7, icon:"🌶️", color:"#faad14", name:"মসলা ব্যবসায়ীর তাক",
  subtitle:"The Spice Merchant's Shelves", tech:"Heaps & Priority Queues",
  spirit:"আওলা — foremost/higher, from Quran 56:10-11 (the foremost are brought near)",
  secret:"Heap = সবসময় সবচেয়ে গুরুত্বপূর্ণ উপরে। Top-K retrieval-এর ভিত্তি।",
  recall:{
    q:"মসলা ব্যবসায়ী কেন সব বাক্স সাজান না, শুধু শীর্ষটা রাখেন?",
    qen:"Why doesn't the spice merchant sort all boxes, just keeps the top one?",
    a:"কারণ সম্পূর্ণ সাজানো O(n log n)। শুধু শীর্ষ রাখা O(log n) প্রতিটা ঢোকায়। Heap সবসময় সবচেয়ে গুরুত্বপূর্ণ উপাদান উপরে রাখে — O(1) দেখা, O(log n) বের করা।",
    aen:"Because full sorting is O(n log n). Keeping just the top costs O(log n) per insert. Heap always keeps the most important element on top — O(1) peek, O(log n) extract."
  },
  story:`
<p class="scene-setting">সপ্তম দোকান। মসলা ব্যবসায়ীর দোকান। শুকনো মরিচের ঝাঁঝ, জায়ফলের উষ্ণতা, জয়ত্রীর তীক্ষ্ণতা। হাজি মুহতার দাঁড়িয়ে আছেন — সামনে কাঠের তাক, প্রতিটা তাকে মসলা, কিন্তু ক্রম অনুযায়ী নয়। শুধু একটা নিয়ম — সবচেয়ে ঝাঁঝালো মসলা সবসময় উপরে। বাকিগুলো যেখরে হোক। কিন্তু উপরেরটা সবসময় সেরা।</p>
<p class="scene-setting en">The seventh shop. The Spice Merchant's stall. The bite of dried chili, warmth of nutmeg, sharpness of mace. Haji Mukhtar stands — wooden shelves before him, spices on each, but not fully sorted. One rule only — the sharpest spice always on top. The rest wherever. But the top is always the best.</p>

<div class="dialogue">তালা নির্মাতা বলেছিলেন — নাম দিয়ে খোঁজা যায়, O(1)-এ। কিন্তু আমি বলি — কখনো নাম লাগে না। কখনো লাগে শুধু সেরাটা। সবচেয়ে ঝাঁঝালো মসলা কোনটা? সব নাম মনে রাখার দরকার নেই — শুধু উপরেরটা নাও।</div>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>ব্যর্থতার গল্প:</strong> মুহতার RAG সিস্টেমে ৫০,০০০ document থেকে সেরা ৫টা খোঁজার জন্য পুরো list sort করতে গিয়েছিলেন — O(n log n) = ৭.৮ লাখ অপারেশন। প্রতিটা query-তে ১.২ সেকেন্ড। তারপর size-5 heap ব্যবহার করলেন — O(n log k) = মাত্র ৮,৫০০ অপারেশন। একই ফলাফল ০.০৩ সেকেন্ডে। সব সাজানো দরকার নেই — শুধু শীর্ষ কয়টা ধরে রাখলেই হয়।</div></div>
<div class="dialogue en">"The locksmith said — find by name in O(1). But I say — sometimes you don't need names. Sometimes you need only the best. Which spice is sharpest? No need to remember all names — just take the top."</div>

<div class="diagram">
  <div class="diag-title">Max-Heap — গাছের আকারে, root-এ সর্বোচ্চ</div>
  <svg viewBox="0 0 560 240" xmlns="http://www.w3.org/2000/svg">
    <!-- level 0 -->
    <rect class="node-hot" x="250" y="20" width="60" height="40" rx="8"/>
    <text class="lbl" x="280" y="42">99</text>
    <!-- level 1 -->
    <rect class="node" x="140" y="90" width="55" height="38" rx="8"/>
    <text class="lbl" x="167.5" y="111">92</text>
    <rect class="node" x="365" y="90" width="55" height="38" rx="8"/>
    <text class="lbl" x="392.5" y="111">78</text>
    <!-- level 2 -->
    <rect class="node-leaf" x="80" y="160" width="50" height="34" rx="8"/>
    <text class="lbl-sm" x="105" y="178">45</text>
    <rect class="node-leaf" x="170" y="160" width="50" height="34" rx="8"/>
    <text class="lbl-sm" x="195" y="178">67</text>
    <rect class="node-leaf" x="330" y="160" width="50" height="34" rx="8"/>
    <text class="lbl-sm" x="355" y="178">33</text>
    <rect class="node-leaf" x="420" y="160" width="50" height="34" rx="8"/>
    <text class="lbl-sm" x="445" y="178">15</text>
    <!-- edges -->
    <line class="edge" x1="280" y1="60" x2="170" y2="90"/>
    <line class="edge" x1="280" y1="60" x2="365" y2="90"/>
    <line class="edge" x1="167.5" y1="128" x2="105" y2="160"/>
    <line class="edge" x1="167.5" y1="128" x2="195" y2="160"/>
    <line class="edge" x1="392.5" y1="128" x2="355" y2="160"/>
    <line class="edge" x1="392.5" y1="128" x2="445" y2="160"/>
    <text class="lbl-sm" x="280" y="225" text-anchor="middle">নিয়ম: parent ≥ child। সম্পূর্ণ সাজানো নয় — শুধু root সবসময় সর্বোচ্চ। peek O(1), pop O(log n)।</text>
  </svg>
</div>

<div class="dialogue">একে বলে heap। একটা বিশেষ গাছের মতো বিন্যাস — parent সবসময় child-এর চেয়ে বড় (বা ছোট)। উপরে সবসময় সর্বোচ্চ (বা সর্বনিম্ন)। সব সাজানো নেই — শুধু এই নিয়ম। কিন্তু এই নিয়মেই সেরাটা O(1)-এ পাওয়া যায়, বের করা O(log n)-এ।</div>
<div class="dialogue en">"This is called a heap. A special tree-like arrangement — parent always greater (or smaller) than children. On top, always the max (or min). Not fully sorted — just this rule. But this rule gives the best in O(1), extraction in O(log n)."</div>

<div class="dialogue">তুমি AI ইঞ্জিনিয়ার — এটা তোমার রোজকার। Vector search-এ তুমি হাজার হাজার embedding থেকে সেরা ৫টা চাও। সব সাজালে O(n log n)। কিন্তু heap দিয়ে — ছোট k-র জন্য শুধু সেই k-টা ধরে রাখো, প্রতিটা O(log k)। মোট O(n log k)। আবার beam search-এ LLM যখন পরবর্তী k টোকেন বিবেচনা করে — heap।</div>
<div class="dialogue en">"You're an AI engineer — this is your daily bread. In vector search, you want the best 5 from thousands of embeddings. Full sort is O(n log n). But with a heap — for small k, keep just those k, each at O(log k). Total O(n log k). And in beam search, when an LLM considers the next k tokens — heap."</div>

<div class="code-block"># ── STEP 1: What is a heap? ──
# A heap is a special tree where the PARENT is always smaller (min-heap)
# or larger (max-heap) than its children.
# The MINIMUM (or MAXIMUM) is always at the ROOT.

# Python's heapq is a MIN-HEAP (smallest on top):
import heapq

# Create a heap from a list:
scores = [0.45, 0.92, 0.15, 0.78, 0.99, 0.33]
heapq.heapify(scores)  # turns list into a heap — O(n)
print(scores)  # [0.15, 0.45, 0.33, 0.78, 0.99, 0.92]
# 0.15 is at root (smallest)

# Always get the smallest — O(log n):
print(heapq.heappop(scores))  # 0.15
print(heapq.heappop(scores))  # 0.33

# Push new item — O(log n):
heapq.heappush(scores, 0.05)  # now 0.05 is smallest

# Key operations:
# heappush(heap, item)  → O(log n)
# heappop(heap)         → O(log n)
# heap[0] (peek)        → O(1)
# heapify(list)         → O(n)</div>

<div class="code-block"># ── STEP 2: Top-K retrieval (the killer use case) ──
# "Find the top 3 most relevant documents"
# This is EVERYWHERE in AI (RAG, search, recommendations).

import heapq

# Top-K largest (best scores):
scores = [0.92, 0.15, 0.78, 0.45, 0.99, 0.33, 0.67]
top3 = heapq.nlargest(3, scores)
print(top3)  # [0.99, 0.92, 0.78]

# Top-K smallest (worst scores):
bot3 = heapq.nsmallest(3, scores)
print(bot3)  # [0.15, 0.33, 0.45]

# With custom key (RAG document retrieval):
docs = [
    ("doc1", 0.95),
    ("doc2", 0.72),
    ("doc3", 0.88),
    ("doc4", 0.45),
]
best_docs = heapq.nlargest(2, docs, key=lambda x: x[1])
print(best_docs)  # [('doc1', 0.95), ('doc3', 0.88)]

# WHY THIS IS EFFICIENT:
# nlargest(k, n_items) uses a heap of size k.
# Time: O(n log k) — much better than sorting O(n log n)
# when k is small (e.g., top 5 from 1 million).</div>

<div class="code-block"># ── STEP 3: Priority queue — process by importance ──
# A priority queue processes items by PRIORITY, not arrival order.
# heapq gives us this for free.

import heapq

# (priority, task) tuples — lower number = higher priority
tasks = []
heapq.heappush(tasks, (3, "write documentation"))
heapq.heappush(tasks, (1, "fix critical bug"))      # highest priority
heapq.heappush(tasks, (2, "review pull request"))
heapq.heappush(tasks, (1, "fix security issue"))     # also urgent

# Process in priority order:
while tasks:
    priority, task = heapq.heappop(tasks)
    print(f"[P{priority}] {task}")

# [P1] fix critical bug
# [P1] fix security issue
# [P2] review pull request
# [P3] write documentation

# Real-world uses:
# - Task schedulers (OS process scheduling)
# - Dijkstra's shortest path algorithm
# - AI: beam search, A* pathfinding
# - Event simulation systems</div>

<div class="code-block"># ── STEP 4: Heap vs sort — when to use which ──
import heapq

# SCENARIO: Stream of numbers, need top-3 at any time.

# ❌ BAD: Sort every time — O(n log n) per query
def top3_sort(stream):
    return sorted(stream, reverse=True)[:3]

# ✅ GOOD: Keep a heap of size 3 — O(log 3) per insert
class TopKTracker:
    """Track top-K items efficiently in a stream."""
    def __init__(self, k):
        self.k = k
        self.heap = []  # min-heap of size k

    def add(self, item):
        if len(self.heap) &lt; self.k:
            heapq.heappush(self.heap, item)
        elif item &gt; self.heap[0]:
            heapq.heapreplace(self.heap, item)  # replace smallest

    def get_top(self):
        return sorted(self.heap, reverse=True)

tracker = TopKTracker(3)
for score in [0.5, 0.9, 0.3, 0.8, 0.95, 0.1, 0.7]:
    tracker.add(score)

print(tracker.get_top())  # [0.95, 0.9, 0.8]

# TopKTracker only keeps 3 items — O(1) space
# vs storing all items and sorting — O(n) space

# WHEN TO USE HEAP vs SORT:
# ┌────────────────────────┬──────────────┬──────────────┐
# │ Need                   │ Use          │ Why          │
# ├────────────────────────┼──────────────┼──────────────┤
# │ Top-K from N items     │ heapq        │ O(n log k)   │
# │ Sort all items once    │ sorted()     │ O(n log n)   │
# │ Streaming top-K        │ heap tracker │ O(log k) add │
# │ Repeated min/max       │ heap         │ O(1) peek    │
# └────────────────────────┴──────────────┴──────────────┘</div>

<div class="code-block"># ── STEP 5: Max-heap trick ──
# Python's heapq is a MIN-heap.
# For a MAX-heap, negate the values:

import heapq

# Max-heap using negation:
max_heap = []
for val in [5, 3, 8, 1, 9, 2]:
    heapq.heappush(max_heap, -val)  # store negated

# Pop largest:
print(-heapq.heappop(max_heap))  # 9 (largest)
print(-heapq.heappop(max_heap))  # 8

# Or use nlargest (simpler for one-time queries):
nums = [5, 3, 8, 1, 9, 2]
print(heapq.nlargest(3, nums))  # [9, 8, 5]</div>

<div class="code-block"># ── STEP 6: Real-world heap applications ──
import heapq

# 1. MERGE K SORTED LISTS (interview classic):
list1 = [1, 3, 5]
list2 = [2, 4, 6]
list3 = [0, 7, 8]
merged = list(heapq.merge(list1, list2, list3))
print(merged)  # [0, 1, 2, 3, 4, 5, 6, 7, 8]

# 2. DIJKSTRA SHORTEST PATH (simplified):
def dijkstra(graph, start):
    """Find shortest paths using a priority queue."""
    distances = {start: 0}
    pq = [(0, start)]  # (distance, node)

    while pq:
        dist, node = heapq.heappop(pq)
        for neighbor, weight in graph.get(node, []):
            new_dist = dist + weight
            if neighbor not in distances or new_dist &lt; distances[neighbor]:
                distances[neighbor] = new_dist
                heapq.heappush(pq, (new_dist, neighbor))

    return distances

# 3. MEDIAN OF STREAM (two heaps):
class MedianFinder:
    """Find median of a number stream using two heaps."""
    def __init__(self):
        self.small = []  # max-heap (negated) for lower half
        self.large = []  # min-heap for upper half

    def add(self, num):
        heapq.heappush(self.small, -num)
        heapq.heappush(self.large, -heapq.heappop(self.small))
        if len(self.large) &gt; len(self.small):
            heapq.heappush(self.small, -heapq.heappop(self.large))

    def median(self):
        if len(self.small) &gt; len(self.large):
            return -self.small[0]
        return (-self.small[0] + self.large[0]) / 2

# SUMMARY:
# heapq = min-heap, root is always smallest
# nlargest/nsmallest = efficient top-K retrieval
# Priority queue = process by importance, not order
# Heap: O(log n) insert/extract, O(1) peek min/max</div>

<div class="dialogue">ভাবো — হাসপাতালের ইমার্জেন্সি রুম। সবাই সারিতে দাঁড়িয়ে না। একজন রোগী এলো — হার্ট অ্যাটাক। জ্বর নিয়ে দাঁড়িয়ে থাকা পাঁচজনকে সরিয়ে সে সামনে চলে গেল। কেন? কারণ priority আলাদা। জীবন বাঁচানোর কাজ সবার আগে। এটাই Priority Queue — সাধারণ queue নয়, গুরুত্ব অনুযায়ী সাজানো। আর এই গুরুত্ব রাখার জন্যই Heap — সবসময় সবচেয়ে জরুরি উপাদান উপরে।</div>
<div class="dialogue en">"Think — a hospital emergency room. Not everyone stands in a line. A patient arrives — heart attack. The five people waiting with fevers step aside, and the heart attack patient goes first. Why? Because priority is different. Saving a life comes before everything. This is a Priority Queue — not a regular queue, but ordered by urgency. And the Heap keeps the most urgent element on top — always."</div>

<div class="diagram">
  <div class="diag-title">Priority Queue — হাসপাতালের ইমার্জেন্সি</div>
  <svg viewBox="0 0 560 200" xmlns="http://www.w3.org/2000/svg">
    <!-- patients arriving with different priority -->
    <text class="lbl-sm" x="60" y="25" fill="#f0c14b">আগমনের ক্রম</text>
    ${[
      {label:'জ্বর (সাধারণ)', pri:3, color:'#36d6e7'},
      {label:'ভাঙা হাত (জরুরি)', pri:2, color:'#f0c14b'},
      {label:'হার্ট অ্যাটাক (জীবনঘাতী)', pri:1, color:'#ff6b35'},
      {label:'মাথাব্যথা (সাধারণ)', pri:3, color:'#36d6e7'},
    ].map((p,i)=>`
    <rect x="30" y="${38+i*32}" width="160" height="26" rx="5" style="fill:rgba(${p.pri===1?'255,107,53':(p.pri===2?'240,193,75':'54,214,231')},.15);stroke:${p.color}"/>
    <text class="lbl-sm" x="110" y="${55+i*32}" text-anchor="middle" fill="${p.color}">${p.label}</text>
    `).join('')}

    <!-- heap processes -->
    <text class="lbl-sm" x="380" y="25" fill="#ff6b35">চিকিৎসার ক্রম (priority)</text>
    ${[
      {label:'১. হার্ট অ্যাটাক', color:'#ff6b35'},
      {label:'২. ভাঙা হাত', color:'#f0c14b'},
      {label:'৩. জ্বর', color:'#36d6e7'},
      {label:'৪. মাথাব্যথা', color:'#36d6e7'},
    ].map((p,i)=>`
    <rect class="${i===0?'cell-hot':'cell'}" x="320" y="${38+i*32}" width="200" height="26" rx="5" style="${i===0?'fill:rgba(255,107,53,.2);stroke:#ff6b35':''}"/>
    <text class="lbl-sm" x="420" y="${55+i*32}" text-anchor="middle" fill="${p.color}">${p.label}</text>
    `).join('')}
    <text class="lbl-sm" x="280" y="185" text-anchor="middle">FIFO নয় — priority অনুযায়ী। Heap সবসময় সর্বোচ্চ গুরুত্ব উপরে রাখে।</text>
  </svg>
  <div class="diag-cap">OS-ও এটাই করে — মাউস মুভমেন্ট প্রাধান্য পায়, ব্যাকগ্রাউন্ড ডাউনলোড পেছনে। Max-Heap: সর্বোচ্চ প্রাধান্য সবসময় root-এ।</div>
</div>

<div class="dialogue">আফদাল — শ্রেষ্ঠ। কুরআনে আল্লাহ বলেন — "তোমরা মানুষের জন্য প্রকাশিত সর্বোত্তম জাতি।" (৩:১১০)। শ্রেষ্ঠ হওয়া শুধু ব্যক্তিগত নয় — দায়িত্ব। Heap-ও তেমনি — সবচেয়ে গুরুত্বপূর্ণকে উপরে রাখে, কিন্তু সেটা দায়িত্ব — সেরাটা আগে দিতে হবে। Priority মানে দায়িত্ব।</div>
<div class="dialogue en">"Afdal — the best. Allah says in the Quran — 'You are the best nation produced for mankind.' (3:110). Being the best isn't just personal — it's responsibility. The heap is the same — it puts the most important on top, but that's a duty — the best must be served first. Priority means responsibility."</div>

<div class="secret-box">🌶️ Heap = সবসময় সবচেয়ে গুরুত্বপূর্ণ উপরে। Top-K retrieval-এর ভিত্তি।</div>`,
  senior:{
    title:"heapq vs sorted — কখন কোনটা? (complexity স্পষ্ট করে)",
    body:`
    <p><strong>Top-K বের করা, ছোট k (যেমন k ≤ ১০০০):</strong> <code>heapq.nlargest(k, data)</code> — ভেতরে একটা size-k heap রাখে, প্রতিটা উপাদানে <code>O(log k)</code>। মোট <strong>O(n log k)</strong>। যখন k ≪ n, এটা <code>O(n log n)</code> full sort-এর চেয়ে অনেক দ্রুত।</p>
    <p><strong>বিকল্প — একবারে heapify করে বারবার pop:</strong> প্রথমে <code>heapq.heapify(data)</code> <strong>O(n)</strong>, তারপর k বার pop প্রতিটা <code>O(log n)</code> — মোট <strong>O(n + k log n)</strong>। এটা তখন ভালো যখন k বড় (n-এর কাছাকাছি)।</p>
    <p><strong>পুরো list সাজানো:</strong> <code>sorted(data)</code> <strong>O(n log n)</strong> — যদি সব দরকার হয়।</p>
    <p><strong>Streaming top-K:</strong> যদি ডেটা একটানা আসে — size-k heap ধরে রাখো। <code>heapq.heappush()</code> / <code>heapq.heappop()</code>।</p>
    <p><strong>Senior trap:</strong> <code>heapq</code> min-heap। Max-heap চাইলে সংখ্যা উল্টো করো (<code>-x</code>) বা key হিসেবে tuple ব্যবহার করো।</p>`
  },
  exercise:{
    hint:"heapq দিয়ে top-K retrieval — RAG-এর মতো!",
    starterCode:`# মসলা ব্যবসায়ীর তাক — Top-K with heapq
import heapq

# ৭টা document-এর relevance scores (RAG scenario)
documents = [
    ("AI Basics", 0.45),
    ("LLM Guide", 0.92),
    ("RAG Tutorial", 0.88),
    ("Cooking Tips", 0.12),
    ("Python Tips", 0.67),
    ("Vector Search", 0.95),
    ("Old News", 0.05),
]

top3 = heapq.nlargest(3, documents, key=lambda x: x[1])
print("সেরা ৩টা document (Top-3):")
for name, score in top3:
    print(f"  {name}: {score}")

worst2 = heapq.nsmallest(2, documents, key=lambda x: x[1])
print("\nসবচেয়ে কম relevant:")
for name, score in worst2:
    print(f"  {name}: {score}")

# BONUS: একটা priority queue বানাও
pq = []
heapq.heappush(pq, (2, "medium priority"))
heapq.heappush(pq, (1, "high priority"))
heapq.heappush(pq, (3, "low priority"))

print("\nPriority Queue (ক্রমানুসারে):")
while pq:
    priority, task = heapq.heappop(pq)
    print(f"  Priority {priority}: {task}")
`
  }
});

// ── DOOR 8: TREES (BST, TRIE) ──
doors.push({
  num:8, icon:"📜", color:"#b37feb", name:"বংশবিদের স্ক্রল",
  subtitle:"The Genealogist's Scroll", tech:"Trees (BST, Trie)",
  spirit:"শাজারা — tree/genealogy, from Quran 14:24-25 (a good word like a good tree)",
  secret:"Tree = শাখাবিহীন সম্পর্ক। BST = বাঁয়া ছোট, ডানা বড়। Trie = অক্ষর ধরে ধরে শাখা। O(log n) সন্ধান।",
  recall:{
    q:"বংশবিদ হাজার নামের মধ্যে কীভাবে দ্রুত একজনকে খুঁজে পান?",
    qen:"How does the genealogist find one person among thousands quickly?",
    a:"BST-তে প্রতিটা ধাপে অর্ধেক বাদ যায় — বাঁয়া ছোট, ডানা বড়। O(log n)। Trie-তে অক্ষর ধরে নামায় — prefix matching-এ অপ্রতিদ্বন্দ্বী।",
    aen:"In a BST, each step eliminates half — left is smaller, right is larger. O(log n). In a trie, characters branch by letter — unmatched for prefix matching."
  },
  story:`
<p class="scene-setting">অষ্টম দোকান। বংশবিদের কামরা। পুরনো কাগজের গন্ধ, কালির দাগ, দেয়ালে বিশাল বংশলতিকা — মূল থেকে ডাল, ডাল থেকে শাখা, শাখা থেকে প্রশাখা। শায়খ আব্দুর রহমান বসে আছেন — চশমা নাকের ডগায়, হাতে কলম, সামনে বিস্তৃত বংশতালিকা। প্রতিটা ব্যক্তি একটা node, parent থেকে child বেরোয় — শাখার মতো।</p>
<p class="scene-setting en">The eighth shop. The Genealogist's chamber. Smell of old paper, ink stains, a vast family tree on the wall — root to branch, branch to limb, limb to twig. Shaykh Abdur Rahman sits — spectacles on nose, pen in hand, the lineage spread before him. Each person is a node, parent to child — like branches.</p>

<div class="dialogue">কাফেলা প্রধান বলেছিলেন — ক্রম গুরুত্বপূর্ণ, কে আগে কে পরে। কিন্তু আমি বলি — কখনো সম্পর্ক শৃঙ্খল নয়, বৃক্ষ। একটা মূল থেকে শাখা বেরোয়, প্রতিটা শাখা থেকে আরও। কোনো শাখা বৃত্তে ফিরে যায় না — উপরে উঠে বা নিচে নামে। এটাই tree — cycle নেই।</div>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>ব্যর্থতার গল্প:</strong> আব্দুর রহমান সাজানো ডেটা (১, ২, ৩, ৪...১০০০) ক্রমানুসারে BST-তে insert করেছিলেন। ফলাফল? প্রতিটা node শুধু ডানে গেছে — একটা linked list হয়ে গেছে। search(1000) এখন O(n) = ১০০০ ধাপ। তারপর self-balancing tree (AVL) ব্যবহার করলেন — প্রতিটা insert-এ স্বয়ংক্রিয় ভারসাম্য, O(log n) থাকে। সাজানো ইনপুট সাধারণ BST-কে ধ্বংস করে — ভারসাম্য বাঁচায়।</div></div>
<div class="dialogue en">"The caravan master said — order matters, who's first who's next. But I say — sometimes relationships aren't a chain, but a tree. From one root, branches grow, each branch splitting further. No branch loops back — it only goes up or down. This is a tree — no cycles."</div>

<div class="diagram">
  <div class="diag-title">Binary Search Tree — বাঁয়া ছোট, ডানা বড়</div>
  <svg viewBox="0 0 560 230" xmlns="http://www.w3.org/2000/svg">
    <rect class="node-hot" x="250" y="15" width="60" height="38" rx="8"/>
    <text class="lbl" x="280" y="36">50</text>
    <rect class="node" x="140" y="80" width="55" height="36" rx="8"/>
    <text class="lbl" x="167.5" y="100">30</text>
    <rect class="node" x="360" y="80" width="55" height="36" rx="8"/>
    <text class="lbl" x="387.5" y="100">70</text>
    <rect class="node-leaf" x="80" y="150" width="48" height="32" rx="8"/>
    <text class="lbl-sm" x="104" y="170">20</text>
    <rect class="node-leaf" x="170" y="150" width="48" height="32" rx="8"/>
    <text class="lbl-sm" x="194" y="170">40</text>
    <rect class="node-leaf" x="320" y="150" width="48" height="32" rx="8"/>
    <text class="lbl-sm" x="344" y="170">60</text>
    <rect class="node-leaf" x="410" y="150" width="48" height="32" rx="8"/>
    <text class="lbl-sm" x="434" y="170">80</text>
    <line class="edge" x1="280" y1="53" x2="170" y2="80"/>
    <line class="edge" x1="280" y1="53" x2="360" y2="80"/>
    <line class="edge" x1="167.5" y1="116" x2="104" y2="150"/>
    <line class="edge" x1="167.5" y1="116" x2="194" y2="150"/>
    <line class="edge" x1="387.5" y1="116" x2="344" y2="150"/>
    <line class="edge" x1="387.5" y1="116" x2="434" y2="150"/>
    <text class="lbl-sm" x="220" y="68" fill="#36d6e7">← smaller</text>
    <text class="lbl-sm" x="305" y="68" fill="#ff6b35">larger →</text>
    <text class="lbl-sm" x="280" y="215" text-anchor="middle">search(40): 50→বাঁয়া→30→ডানা→40 ✓ প্রতি ধাপে অর্ধেক বাদ। O(log n)।</text>
  </svg>
</div>

<div class="dialogue">BST — Binary Search Tree। একটা নিয়ম: বাঁয়া child সবসময় parent-এর চেয়ে ছোট, ডানা child সবসময় বড়। এই নিয়মে যেকোনো নাম খুঁজতে প্রতিটা ধাপে অর্ধেক বাদ যায় — O(log n)। হাজার নামের মধ্যে মাত্র ১০ ধাপে পাওয়া যায়। (জ্যোতির্বিদের কথা মনে আছে — O(log n) দ্রুততার সিঁড়ির দ্বিতীয় ধাপ।)</div>
<div class="dialogue en">"BST — Binary Search Tree. One rule: left child is always smaller than parent, right child always larger. With this rule, searching eliminates half at each step — O(log n). Among a thousand names, found in just 10 steps. (Remember the astrolabe maker — O(log n) is the second rung of the ladder.)"</div>

<div class="code-block"># ── STEP 1: What is a tree? ──
# A tree is a hierarchy of nodes — one ROOT, branches downward.
# Unlike linked lists (linear), trees branch out.

# Key terms:
#   root    — top node (no parent)
#   child   — node below a parent
#   leaf    — node with no children (bottom)
#   height  — longest path from root to leaf

# A BINARY TREE: each node has at most 2 children (left, right)
#
#         50          ← root
#        /  \
#      30    70       ← children of root
#     / \   / \
#   20  40 60  80     ← leaves

class TreeNode:
    """A node in a binary tree."""
    def __init__(self, val):
        self.val = val
        self.left = None    # left child
        self.right = None   # right child

# Build a simple tree:
root = TreeNode(50)
root.left = TreeNode(30)
root.right = TreeNode(70)
root.left.left = TreeNode(20)
root.left.right = TreeNode(40)</div>

<div class="code-block"># ── STEP 2: Binary Search Tree (BST) ──
# BST RULE: left child &lt; parent &lt; right child
# This rule enables O(log n) search — eliminate half each step.

class BST:
    """Binary Search Tree with insert and search."""
    def __init__(self):
        self.root = None

    def insert(self, val):
        if not self.root:
            self.root = TreeNode(val)
        else:
            self._insert(self.root, val)

    def _insert(self, node, val):
        if val &lt; node.val:
            if node.left:
                self._insert(node.left, val)
            else:
                node.left = TreeNode(val)
        else:
            if node.right:
                self._insert(node.right, val)
            else:
                node.right = TreeNode(val)

    def search(self, target):
        """O(log n) if balanced, O(n) if skewed."""
        return self._search(self.root, target)

    def _search(self, node, target):
        if not node:
            return False
        if node.val == target:
            return True
        if target &lt; node.val:
            return self._search(node.left, target)
        return self._search(node.right, target)

# Usage:
bst = BST()
for val in [50, 30, 70, 20, 40, 60, 80]:
    bst.insert(val)

print(bst.search(40))   # True — found in 2 steps
print(bst.search(100))  # False — not in tree</div>

<div class="code-block"># ── STEP 3: Tree traversals ──
# Three ways to visit every node in a tree:

# 1. IN-ORDER: left → root → right (gives SORTED order in BST)
def inorder(node):
    if node:
        inorder(node.left)
        print(node.val, end=" ")
        inorder(node.right)

# 2. PRE-ORDER: root → left → right (copy tree, serialize)
def preorder(node):
    if node:
        print(node.val, end=" ")
        preorder(node.left)
        preorder(node.right)

# 3. POST-ORDER: left → right → root (delete tree, evaluate expression)
def postorder(node):
    if node:
        postorder(node.left)
        postorder(node.right)
        print(node.val, end=" ")

# Using our BST from above:
#         50
#        /  \
#      30    70
#     / \   / \
#   20  40 60  80

inorder(root)    # 20 30 40 50 60 70 80 (sorted!)
preorder(root)   # 50 30 20 40 70 60 80 (root first)
postorder(root)  # 20 40 30 60 80 70 50 (root last)

# BFS (level by level) using a queue:
from collections import deque
def level_order(root):
    if not root:
        return
    queue = deque([root])
    while queue:
        node = queue.popleft()
        print(node.val, end=" ")
        if node.left:
            queue.append(node.left)
        if node.right:
            queue.append(node.right)

level_order(root)  # 50 30 70 20 40 60 80 (level by level)</div>

<div class="code-block"># ── STEP 4: BST pitfalls and balancing ──
# THE BIG PROBLEM: if you insert SORTED data, BST becomes a LINKED LIST!

# Insert 1, 2, 3, 4, 5 in order:
# 1 → 2 → 3 → 4 → 5  (all right children — O(n) search!)

# This is called a SKEWED tree — worst case.
# Fix: SELF-BALANCING trees (AVL, Red-Black)

# Python's sortedcontainers or bisect module gives sorted functionality:
import bisect

sorted_list = []
for val in [50, 30, 70, 20, 40]:
    bisect.insort(sorted_list, val)  # insert maintaining sorted order

print(sorted_list)  # [20, 30, 40, 50, 70]

# Search with bisect — O(log n):
idx = bisect.bisect_left(sorted_list, 40)
print(f"40 found at index {idx}")  # 2

# WHEN TO USE BST vs SORTED LIST vs HASH MAP:
# BST (or bisect): need sorted order + range queries
# Hash map (dict): need O(1) exact lookup
# Sorted list: simple, but insertion is O(n)
# Balanced tree: O(log n) everything, but Python doesn't have built-in</div>

<div class="code-block"># ── STEP 5: Trie (prefix tree) ──
# A trie stores STRINGS by breaking them into characters.
# Each path from root = a word.
# PERFECT for autocomplete, spell-check, prefix matching.

class TrieNode:
    def __init__(self):
        self.children = {}  # char → TrieNode
        self.is_end = False  # marks complete word

class Trie:
    def __init__(self):
        self.root = TrieNode()

    def insert(self, word):
        """Insert a word — O(m) where m = word length."""
        node = self.root
        for char in word:
            if char not in node.children:
                node.children[char] = TrieNode()
            node = node.children[char]
        node.is_end = True

    def search(self, word):
        """Check if exact word exists — O(m)."""
        node = self.root
        for char in word:
            if char not in node.children:
                return False
            node = node.children[char]
        return node.is_end

    def starts_with(self, prefix):
        """Check if any word starts with prefix — O(m)."""
        node = self.root
        for char in prefix:
            if char not in node.children:
                return False
            node = node.children[char]
        return True

# Usage:
trie = Trie()
trie.insert("cat")
trie.insert("car")
trie.insert("card")
trie.insert("care")

print(trie.search("cat"))       # True
print(trie.search("can"))       # False
print(trie.starts_with("ca"))   # True (cat, car, card, care)
print(trie.starts_with("do"))   # False</div>

<div class="code-block"># ── STEP 6: Trees in the real world ──
# Trees are EVERYWHERE in computer science:

# 1. FILE SYSTEM:
#   / (root) → home/ → documents/ → resume.pdf
#   This is a tree! os.walk() traverses it.

# 2. JSON / HTML / XML:
#   Nested objects are trees. Parsing = tree traversal.

# 3. DATABASE INDEX (B-Tree):
#   PostgreSQL/MySQL use B-Trees for indexes.
#   SELECT * WHERE id = 5 → O(log n) via B-Tree index

# 4. DECISION TREES (ML):
#   Random Forest, XGBoost — literally tree-based models.
#   Each split = a tree node.

# 5. SYNTAX TREES (compilers):
#   Code is parsed into an AST (Abstract Syntax Tree).
#   Python's ast module gives you the tree.

# 6. AUTO-COMPLETE (Trie):
#   Search engines, IDE autocomplete, spell check.

# 7. NETWORK ROUTING:
#   Spanning Tree Protocol prevents loops in networks.

# PYTHON-SPECIFIC TREE TOOLS:
# - os.walk() — traverse file system tree
# - ast.parse() — get Python code's AST
# - xml.etree.ElementTree — parse XML trees
# - anytree library — general tree implementation
# - sklearn.tree — decision tree models

# INTERVIEW TIPS — know these tree problems:
# - Maximum depth of binary tree
# - Invert a binary tree
# - Lowest common ancestor
# - Level order traversal (BFS)
# - Validate BST
# - Serialize/deserialize tree</div>

<div class="dialogue">Trie — আরেক ধরনের বৃক্ষ। কিন্তু এখানে শাখা হলো অক্ষর। "cat" → 'c' → 'a' → 't'। প্রতিটা অক্ষর একটা শাখা। এটা autocomplete-এ অপ্রতিদ্বন্দ্বী। ইউজার টাইপ করছে "ca" — trie বলে দেয় cat, car, card সব সম্ভায় শাখা আছে। Tokenizer-এও — LLM কীভাবে শব্দ ভাঙে? Trie-এর মতো করে।</div>
<div class="dialogue en">"Trie — another kind of tree. But here, branches are letters. 'cat' → 'c' → 'a' → 't'. Each letter is a branch. This is unmatched for autocomplete. User types 'ca' — the trie says cat, car, card — all branches that exist. In tokenizers too — how does an LLM break words? Like a trie."</div>

<div class="dialogue">তুমি AI ইঞ্জিনিয়ার। Tokenization হলো trie-এর ভাষা — BPE (Byte Pair Encoding) মূলত একটা trie traversal। Decision tree, random forest — সব tree-ই। ডেটাবেস index-ও এই একই ধারণার সন্তান — যদিও production DB-তে (Postgres, MySQL) সাধারণত pure BST নয়, B-tree/B+-tree ব্যবহার হয় — disk-এ কম I/O লাগে বলে প্রতিটা node-এ বহু key রাখে, শুধু দুটো নয়। বংশতালিকা শুধু কাগজে নয় — কোডেও।</div>
<div class="dialogue en">"You're an AI engineer. Tokenization speaks trie — BPE (Byte Pair Encoding) inference walks a trie/prefix-match structure over merge rules. Decision trees, random forests — all trees. Database indexes are children of the same idea — though production databases (Postgres, MySQL) usually don't use a pure BST but a B-tree/B+-tree, which packs many keys per node instead of two, cutting disk I/O. Family trees aren't just on paper — in code too."</div>

<div class="dialogue">নসল — বংশধর। কুরআনে বংশের গুরুত্ব বারবার এসেছে — প্রতিটা প্রজন্ম আগের প্রজন্মের ধারক। Tree-ও তেমনি — প্রতিটা child তার parent-এর উত্তরাধিকারী। Root থেকে ডাল — একটাই উৎস, কিন্তু অসংখ্য শাখা।</div>
<div class="dialogue en">"Nasl — descendants. The Quran repeatedly emphasizes lineage — each generation carries the previous. The tree is the same — each child inherits from its parent. From root to branch — one source, but countless branches."</div>

<div class="secret-box">📜 Tree = শাখাবিহীন সম্পর্ক। BST = বাঁয়া ছোট, ডানা বড়। Trie = অক্ষর ধরে ধরে শাখা। O(log n) সন্ধান।</div>`,
  senior:{
    title:"Recursive vs Iterative Tree Traversal",
    body:`
    <p><strong>Recursive:</strong> স্বাভাবিক, পড়তে সহজ। কিন্তু deep tree-তে <code>RecursionError</code> (Python ~1000 depth limit)।</p>
    <p><strong>Iterative:</strong> Stack দিয়ে নিজে নিয়ন্ত্রণ করো। বেশি কোড, কিন্তু deep tree-তে নিরাপদ।</p>
    <p><strong>Senior habit:</strong> ছোট tree → recursive (পড়তে সুন্দর)। Production/deep → iterative (safe)। উভয় জানো। (Recursion শেখা হয়ে গেছে Door 2-এ।)</p>
    <p><strong>BST সাবধানতা:</strong> সাজানো ডেটা insert করলে BST একটা linked list হয়ে যায় — O(n) search। সমাধান: self-balancing tree (AVL, Red-Black) — সব সময় O(log n)।</p>`
  },
  exercise:{
    hint:"একটা সাধারণ BST class বানাও — insert আর search!",
    starterCode:`# বংশবিদের স্ক্রল — Binary Search Tree
class TreeNode:
    def __init__(self, value):
        self.value = value
        self.left = None   # ছোট
        self.right = None  # বড়

class BST:
    def __init__(self):
        self.root = None

    def insert(self, value):
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
