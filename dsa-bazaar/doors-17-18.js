// ════════════════════════════════════════
// DSA BAZAAR — DOORS 17-18
// 17. Strings & Pattern Matching (KMP, Rabin-Karp)
// 18. Bit Manipulation (AND/OR/XOR, shifts, Bloom)
// ════════════════════════════════════════

// ── DOOR 17: STRINGS & PATTERN MATCHING ──
doors.push({
  num:17, icon:"📖", color:"#00bcd4", name:"নকল-নির্দেশকের গ্রন্থাগার",
  subtitle:"The Concord Maker's Library", tech:"Strings & Pattern Matching (KMP, Rabin-Karp)",
  secret:"স্ট্রিং হলো অক্ষরের অ্যারে, কিন্তু প্যাটার্ন খোঁজা আলাদা শিল্প। Naive O(n·m), KMP O(n+m) — failure function দিয়ে পেছনে ফেরা কমায়।",
  recall:{
    q:"নকল-নির্দেশক হাজার পাতায় একটা শব্দ কীভাবে দ্রুত খুঁজে পান — প্রতিটা অক্ষর ধরে নয়?",
    qen:"How does the concord maker find one word in thousands of pages fast — not letter by letter?",
    a:"প্যাটার্ন থেকে আগেই একটা 'স্মৃতি টেবিল' বানান — failure function। মিল না হলে শুরু থেকে নয়, টেবিল দেখে যতটা দরকার পিছিয়ে যান। KMP — O(n+m)। অথবা hash ব্যবহার করে স্লাইডিং — Rabin-Karp।",
    aen:"First build a 'memory table' from the pattern — the failure function. On mismatch, don't restart — consult the table and step back only as much as needed. KMP — O(n+m). Or hash with sliding — Rabin-Karp."
  },
  story:`
<p class="scene-setting">সপ্তদশ দোকান। নকল-নির্দেশকের গ্রন্থাগার। হাতে লেখা পুরনো পাণ্ডুলিপি, কালির সুবাস, পাতার খসখস। শায়খ তাহির দাঁড়িয়ে আছেন — সামনে হাজার পাতার কুরআনের অনুলিপি। তাঁর কাজ একটা — প্রতিটা শব্দ কোন পাতায় কোথায় আছে, তার একটা সূচি (concordance) বানানো। "একটা শব্দ খুঁজছি," তিনি বলেন, "অথচ হাজার পাতা। অক্ষরে অক্ষরে খুঁজলে আজীবন লাগবে। বুদ্ধি লাগে — প্যাটার্ন খোঁজার বুদ্ধি।"</p>
<p class="scene-setting en">The seventeenth shop. The Concord Maker's library. Handwritten old manuscripts, scent of ink, rustle of pages. Shaykh Tahir stands — before him, copies of the Quran across thousands of pages. His task — to build a concordance of where each word appears. 'I seek one word,' he says, 'yet there are thousands of pages. Letter by letter would take a lifetime. Wit is needed — the wit of pattern-finding.'"</p>

<div class="dialogue">অলিগলির পথিক শিখিয়েছিলেন — পছন্দ করো, এগোও, মৃত প্রান্তে ফিরো। কিন্তু আমি বলি — স্ট্রিং-এ মিল না হলে ফিরে আসতে হয়, কিন্তু কোথায় ফিরবে? শুরুতে নয় — যতটা দরকার, ততটাই। সেই 'কোথায় ফিরবে' আগেই জানলে কাজ অর্ধেক।</div>
<div class="dialogue en">"The alley explorer taught — choose, advance, retreat at dead ends. But I say — on a string mismatch you must retreat, but to where? Not to the start — only as far as needed. Knowing 'where to retreat' in advance halves the work."</div>

<div class="diagram">
  <div class="diag-title">Naive বনাম KMP — মিল না হলে কোথায় ফিরবে</div>
  <svg viewBox="0 0 560 200" xmlns="http://www.w3.org/2000/svg">
    <text class="lbl-sm" x="20" y="22" fill="#ff6b35">Naive — মিল না হলে ১ ধাপ পিছিয়ে শুরু থেকেই</text>
    <text class="lbl-sm" x="30" y="50">টেক্সট:</text>
    ${'ABABDABACD'.split('').map((c,i)=>`<rect class="cell" x="${80+i*30}" y="38" width="26" height="22" rx="3"/><text class="lbl-sm" x="${93+i*30}" y="53">${c}</text>`).join('')}
    <text class="lbl-sm" x="30" y="80">প্যাটার্ন:</text>
    ${'ABAC'.split('').map((c,i)=>`<rect class="cell-hot" x="${80+i*30}" y="68" width="26" height="22" rx="3"/><text class="lbl-sm" x="${93+i*30}" y="83">${c}</text>`).join('')}
    <text class="lbl-sm" x="280" y="108" text-anchor="middle" fill="#ff6b35">B≠C (৪র্থ ঘরে) → প্যাটার্ন ১ ধাপ ডানে → আবার পুরো তুলনা। O(n·m)।</text>

    <line class="edge" x1="280" y1="120" x2="280" y2="130"/>

    <text class="lbl-sm" x="20" y="155" fill="#52c41a">KMP — failure function দেখে যতটা দরকার ফেরা</text>
    <text class="lbl-sm" x="30" y="180">প্যাটার্ন:</text>
    ${'ABAC'.split('').map((c,i)=>`<rect class="cell-good" x="${80+i*30}" y="168" width="26" height="22" rx="3" style="fill:rgba(82,196,26,.2)"/><text class="lbl-sm" x="${93+i*30}" y="183">${c}</text>`).join('')}
    <text class="lbl-sm" x="210" y="183" fill="#52c41a">LPS = [0,0,1,0] → A পর্যন্ত মিল ছিল, সেখান থেকেই চালাও</text>
  </svg>
  <div class="diag-cap">naive প্রতিবার শুরু থেকে, KMP প্যাটার্নের ভেতরের পুনরাবৃত্তি জেনে স্মার্ট ফেরে।</div>
</div>

<div class="dialogue">KMP — Knuth-Morris-Pratt। দুটো ধাপ। প্রথমে প্যাটার্ন থেকে একটা failure function বানাও (LPS — longest prefix-suffix)। এটা বলে — এই অবস্থানে মিল না হলে কত পিছিয়ে ফিরবে। তারপর টেক্সট একবারই চলো, মিল না হলে failure function দেখে ফেরো। O(n+m) — নিশ্চিত রৈখিক।</div>
<div class="dialogue en">"KMP — Knuth-Morris-Pratt. Two steps. First, build a failure function from the pattern (LPS — longest prefix-suffix). It says — on mismatch here, retreat by how much. Then walk the text once; on mismatch consult the failure function. O(n+m) — guaranteed linear."</div>

<div class="dialogue">Rabin-Karp — আরেক পথ। প্যাটার্নের একটা hash বানাও (Door 6 — তালা নির্মাতার কথা মনে আছে?)। তারপর টেক্সটের উপর একটা window সরাও (Door 13 — sliding window)। প্রতিটা window-এর hash গণনা করো — কিন্তু পুরো নয়, শুধু পুরোনো অক্ষর বাদ, নতুন অক্ষর যোগ। rolling hash। মিল হলে অক্ষরে অক্ষরে যাচাই। গড়ে O(n+m), worst O(n·m) (collision হলে)।</div>
<div class="dialogue en">"Rabin-Karp — another path. Build a hash of the pattern (Door 6 — remember the locksmith?). Then slide a window over the text (Door 13 — sliding window). Compute each window's hash — but not from scratch: drop the old char, add the new. Rolling hash. On hash match, verify char by char. Average O(n+m), worst O(n·m) (if collisions)."</div>

<div class="code-block">Naive বনাম KMP — পাশাপাশি:

# NAIVE — O(n·m) worst case
def naive_search(text, pattern):
    n, m = len(text), len(pattern)
    for i in range(n - m + 1):
        match = True
        for j in range(m):
            if text[i+j] != pattern[j]:
                match = False; break
        if match:
            return i
    return -1

# KMP — O(n+m) guaranteed
def kmp_search(text, pattern):
    lps = build_lps(pattern)   # failure function
    i = j = 0
    while i < len(text):
        if text[i] == pattern[j]:
            i += 1; j += 1
            if j == len(pattern):
                return i - j       # found!
        else:
            if j > 0:
                j = lps[j-1]       # ← smart retreat
            else:
                i += 1
    return -1

def build_lps(p):
    """Longest Prefix-Suffix table"""
    lps = [0] * len(p)
    length = 0
    for i in range(1, len(p)):
        while length > 0 and p[i] != p[length]:
            length = lps[length-1]
        if p[i] == p[length]:
            length += 1
            lps[i] = length
    return lps

kmp_search("ABABDABACDABACDABAC", "ABAC")  # → 5</div>

<div class="dialogue">তুমি AI ইঞ্জিনিয়ার। Pattern matching সবখানে। Tokenization — BPE (Byte Pair Encoding) merges, Aho-Corasick multi-pattern (KMP-এর বহু-প্যাটার্ন রূপ)। Fuzzy search — ইউজার "recieve" লিখলে "receive" খুঁজি (DP edit distance — Door 15)। Plagiarism / dedup — rolling hash দিয়ে ডকুমেন্ট ফিঙ্গারপ্রিন্ট। Regex engine — NFA/DFA সব pattern matching-এর উপর দাঁড়িয়ে।</div>
<div class="dialogue en">"You're an AI engineer. Pattern matching is everywhere. Tokenization — BPE merges, Aho-Corasick multi-pattern (KMP's multi-pattern form). Fuzzy search — user types 'recieve', find 'receive' (DP edit distance — Door 15). Plagiarism / dedup — rolling hash for document fingerprints. Regex engines — NFA/DFA all rest on pattern matching."</div>

<div class="dialogue">নকল — হস্তান্তর, বর্ণনা। ইসলামী ঐতিত্যে নকল একটা গভীর ধারণা — জ্ঞানের হস্তান্তর, হাদিসের সনদ (chain of transmission)। প্রতিটা শব্দ যেখানে আছে তার সঠিক অবস্থান — concordance — সেই নকলের ভিত্তি। ভুল অবস্থান ভুল নকল। KMP ও Rabin-Karp সেই নকলকে নিখুঁত করে — দ্রুত, সঠিক, নির্ভরযোগ্য অনুসন্ধান।</div>
<div class="dialogue en">"Naql — transmission, narration. In the Islamic tradition, naql is a deep concept — the transmission of knowledge, the chain (isnad) of hadith. The precise location of each word — the concordance — is the foundation of that transmission. A wrong location is a wrong transmission. KMP and Rabin-Karp make that transmission precise — fast, accurate, reliable search."</div>`,
  senior:{
    title:"কোন অ্যালগরিদম কখন — Senior Choice",
    body:`
    <p><strong>নিজে না লিখে:</strong> Python <code>str.find()</code>, <code>in</code> operator — ছোট স্ট্রিং-এ Boyer-Moore-Horspool ঘরানার skip-table, বড় স্ট্রিং-এ Crochemore-Perrin Two-Way অ্যালগরিদম (KMP-এর মতোই worst-case O(n) নিশ্চিত করে) — সবই C-তে optimized। ৯৯% ক্ষেত্রে এটাই যথেষ্ট।</p>
    <p><strong>KMP কখন:</strong> নিশ্চিত O(n+m) দরকার, বারবার একই প্যাটার্ন, বা শেখা/ইন্টারভিউ।</p>
    <p><strong>Rabin-Karp কখন:</strong> একসাথে অনেক প্যাটার্ন (multi-pattern), বা ডকুমেন্ট ফিঙ্গারপ্রিন্ট (rolling hash dedup)।</p>
    <p><strong>Aho-Corasick কখন:</strong> হাজার প্যাটার্ন একসাথে খুঁজছি (spam filter, sensitive-word detection)। KMP-এর বহু-প্যাটার্ন সাধারণীকরণ।</p>
    <p><strong>স্ট্রিং = অক্ষরের অ্যারে:</strong> কিন্তু immutable (Python)। বারবার পরিবর্তন করলে <code>''.join(parts)</code> ব্যবহার করো, <code>s += c</code> নয় (O(n²))।</p>`
  },
  exercise:{
    hint:"Naive ও KMP পাশাপাশি লেখো — comparisons গোনো!",
    starterCode:`# নকল-নির্দেশকের গ্রন্থাগার — Naive vs KMP
comparisons_naive = 0
comparisons_kmp = 0

def naive_search(text, pattern):
    global comparisons_naive
    comparisons_naive = 0
    n, m = len(text), len(pattern)
    for i in range(n - m + 1):
        for j in range(m):
            comparisons_naive += 1
            if text[i+j] != pattern[j]:
                break
        else:
            return i
    return -1

def build_lps(p):
    lps = [0] * len(p)
    length = 0
    for i in range(1, len(p)):
        while length > 0 and p[i] != p[length]:
            length = lps[length-1]
        if p[i] == p[length]:
            length += 1
            lps[i] = length
    return lps

def kmp_search(text, pattern):
    global comparisons_kmp
    comparisons_kmp = 0
    lps = build_lps(pattern)
    i = j = 0
    while i < len(text):
        comparisons_kmp += 1
        if text[i] == pattern[j]:
            i += 1; j += 1
            if j == len(pattern):
                return i - j
        else:
            if j > 0:
                j = lps[j-1]
            else:
                i += 1
    return -1

# খারাপ কেস — বারবার প্রায় মিল, কিন্তু শেষে ব্যর্থ
text = "A" * 30 + "B"
pattern = "A" * 5 + "B"

print(f"naive position: {naive_search(text, pattern)}, comparisons: {comparisons_naive}")
print(f"KMP   position: {kmp_search(text, pattern)}, comparisons: {comparisons_kmp}")
print(f"\\nKMP কত গুণ কম তুলনা? {comparisons_naive/max(1,comparisons_kmp):.1f}x")

# সাধারণ কেস
text2 = "ABABDABACDABACDABAC"
print(f"\\n'ABAC' in text2:")
print(f"  naive: {naive_search(text2, 'ABAC')}, comparisons: {comparisons_naive}")
print(f"  KMP:   {kmp_search(text2, 'ABAC')}, comparisons: {comparisons_kmp}")
`
  }
});

// ── DOOR 18: BIT MANIPULATION ──
doors.push({
  num:18, icon:"🃏", color:"#607d8b", name:"পরচুলা-নকশা তাঁতির কারখানা",
  subtitle:"The Pattern-Card Weaver's Loom", tech:"Bit Manipulation (AND, OR, XOR, shifts)",
  secret:"বিট = সবচেয়ে ছোট সত্য — ০ বা ১। AND/OR/XOR/shift দিয়ে দ্রুত গণনা, মেমোরি সাশ্রয়, ফ্ল্যাগ ব্যবস্থাপনা। Bloom filter-এর ভিত্তি।",
  recall:{
    q:"পরচুলা-নকশা তাঁতি কেন প্রতিটা সুতোর জন্য আলাদা কার্ড ব্যবহার করেন, রঙের বই নয়?",
    qen:"Why does the pattern-card weaver use a card per thread, not a colour book?",
    a:"কারণ প্রতিটা সুতোর দুটো অবস্থা — উপরে বা নিচে। একটা গর্ত = উপরে, গর্ত নেই = নিচে। একটা কার্ড একটা বাইনারি নকশা। এখান থেকে বিট — সবচেয়ে ছোট তথ্য, ০ বা ১। দ্রুত, সংক্ষিপ্ত, শক্তিশালী।",
    aen:"Because each thread has two states — up or down. A hole = up, no hole = down. A card is a binary pattern. From this comes the bit — the smallest information, 0 or 1. Fast, compact, powerful."
  },
  story:`
<p class="scene-setting">অষ্টাদশ দোকান। শেষ দোকান। পরচুলা-নকশা তাঁতির কারখানা। একটা অদ্ভুত তাঁত — প্রতিটা সুতোর উপর দিয়ে ছিদ্রান্ত কাঠের কার্ড চলে। প্রতিটা কার্ডে গর্ত আছে কোথাও কোথাও — গর্ত পড়লে সুতো উপরে, না হলে নিচে। এই কার্ডগুলো নকশা বহন করে — বাইনারিতে। বেগম আয়িশা কাজ করছেন — "প্রতিটা সুতোর দুটো অবস্থা," তিনি বলেন। "উপরে বা নিচে। এটাই Jacquard তাঁত — বাইনারি কম্পিউটিং-এর পূর্বপুরুষ। প্রতিটা কার্ড একটা বিট নকশা।"</p>
<p class="scene-setting en">The eighteenth shop. The last shop. The pattern-card weaver's loom. A strange loom — punched wooden cards pass over each thread. Each card has holes here and there — at a hole the thread rises, otherwise it stays low. These cards carry a pattern — in binary. Begum Aisha works — 'Each thread has two states,' she says. 'Up or down. This is the Jacquard loom — ancestor of binary computing. Each card is a bit-pattern.'"</p>

<div class="dialogue">নকল-নির্দেশক শিখিয়েছিলেন — অক্ষরে অক্ষরে প্যাটার্ন খুঁজি। কিন্তু আমি বলি — সবচেয়ে গভীরে, প্রতিটা সংখ্যা একটা বিট নকশা। ০ আর ১। দুটো অবস্থা — উপরে বা নিচে, সত্য বা মিথ্যা, খোলা বা বন্ধ। এই দুই থেকে সব গঠিত — সংখ্যা, টেক্সট, ছবি, মডেল। বিট নিয়ে কাজ করাই bit manipulation।</div>
<div class="dialogue en">"The concord maker taught — find patterns letter by letter. But I say — at the deepest level, every number is a bit-pattern. 0 and 1. Two states — up or down, true or false, open or closed. From these two, everything is built — numbers, text, images, models. Working with bits is bit manipulation."</div>

<div class="diagram">
  <div class="diag-title">বিট অপারেশন — AND, OR, XOR</div>
  <svg viewBox="0 0 560 200" xmlns="http://www.w3.org/2000/svg">
    <!-- three truth tables side by side -->
    ${[
      {op:'AND &', x:30, fill:'#52c41a', rows:[[1,1,1],[1,0,0],[0,1,0],[0,0,0]]},
      {op:'OR  |', x:210, fill:'#36d6e7', rows:[[1,1,1],[1,0,1],[0,1,1],[0,0,0]]},
      {op:'XOR ^', x:390, fill:'#ff6b35', rows:[[1,1,0],[1,0,1],[0,1,1],[0,0,0]]}
    ].map(t=>`
      <text class="lbl-sm" x="${t.x+60}" y="25" fill="${t.fill}" style="font-size:13px">${t.op}</text>
      <text class="lbl-sm" x="${t.x+20}" y="48">a</text>
      <text class="lbl-sm" x="${t.x+55}" y="48">b</text>
      <text class="lbl-sm" x="${t.x+90}" y="48">→</text>
      ${t.rows.map((r,i)=>`
        ${r.map((bit,j)=>`
        <circle class="${bit?'bit-on':'bit-off'}" cx="${t.x+25+j*35}" cy="${70+i*28}" r="10"/>
        <text class="lbl-sm" x="${t.x+25+j*35}" y="${73+i*28}">${bit}</text>
        `).join('')}
      `).join('')}
    `).join('')}
    <text class="lbl-sm" x="280" y="190" text-anchor="middle">XOR বিশেষ — a^a=0, a^0=a। এই দুটো গুণেই XOR ম্যাজিক করে (swap, single-number, dedup)।</text>
  </svg>
</div>

<div class="code-block">বিট অপারেশন — দ্রুততার হাতিয়ার:

  AND  &    উভয় ১ হলে ১        flags চেক, mask
  OR   |    যেকোনো ১ হলে ১       flags সেট
  XOR  ^    ভিন্ন হলে ১          toggle, swap, dedup
  NOT  ~    উল্টাও                 বিপরীত
  <<   n    বামে সরাও (×2ⁿ)       দ্রুত গুণ
  >>   n    ডানে সরাও (÷2ⁿ)       দ্রুত ভাগ

PYTHON — শক্তিশালী বিট টুল:
  bin(13)              # → '0b1101'
  13 & 6               # → 4   (AND)
  13 | 6               # → 15  (OR)
  13 ^ 6               # → 11  (XOR)
  1 << 4               # → 16  (2⁴)
  13 >> 2              # → 3   (13 ÷ 4)
  13 & 1               # → 1   (বিজোড়?)
  (13).bit_count()     # → 3   (কতগুলো 1-bit; 13. বলে লিখলে SyntaxError হবে!)

XOR ম্যাজিক — দুটো বৈশিষ্ট্য:
  • a ^ a = 0   (কোনোটার সাথে নিজেকে XOR = ০)
  • a ^ 0 = a   (শূন্যের সাথে XOR = নিজেই)

# ১. Swap বিনা temp — এর:
  a ^= b; b ^= a; a ^= b

# ২. একটা সংখ্যা খুঁজো যা একবারই আছে (বাকি দুবার):
  def single_number(nums):
      result = 0
      for n in nums:
          result ^= n      # জোড়া বাতিল, একটা বেঁচে যায়
      return result
  single_number([4, 1, 2, 1, 2])  # → 4

# ৩. ক্ষমতা দুটো কি?
  def is_power_of_two(n):
      return n > 0 and (n & (n-1)) == 0
  # n=8 (1000), n-1=7 (0111) → AND = 0 ✓

# ৪. বিট গণনা (popcount):
  def count_bits(n):
      count = 0
      while n:
          count += n & 1
          n >>= 1
      return count</div>

<div class="dialogue">Bloom filter — বিট দিয়ে তৈরি একটা অদ্ভুত কাঠামো। একটা বড় বিট-অ্যারে। প্রতিটা উপাদানে কয়েকটা hash (Door 6!) বানাও, সেই অবস্থানগুলো ১ করে দাও। খুঁজতে? আবার hash বানাও, সব অবস্থান ১ কি না দেখো। সব ১ হলে "সম্ভবত আছে"। কোনোটা ০ হলে "নিশ্চিত নেই"। কখনো মিথ্যা হ্যাঁ বলতে পারে, মিথ্যা না বলে না। দ্রুত, সস্তা, probabilistic।</div>
<div class="dialogue en">"Bloom filter — a strange structure made of bits. A large bit-array. For each element, make a few hashes (Door 6!), set those positions to 1. To look up? Hash again, check if all positions are 1. All 1 → 'probably present'. Any 0 → 'definitely absent'. May say yes falsely, never says no falsely. Fast, cheap, probabilistic."</div>

<div class="dialogue">তুমি AI ইঞ্জিনিয়ার। বিট লুকিয়ে আছে সবখানে। Bloom filter — RAG-এ cached query dedup, বিশাল URL seen-set। Quantization — মডেল weight কে ৮/৪-বিটে চাপা (vLLM)। Bit flags — এক int-এ অনেক boolean (permissions, config)। Hashing internals — XOR, prime mixing। Packed embeddings — এক int-ে একাধিক ছোট মান। দ্রুত, সংক্ষিপ্ত, কম মেমোরি।</div>
<div class="dialogue en">"You're an AI engineer. Bits hide everywhere. Bloom filter — cached query dedup in RAG, massive URL seen-set. Quantization — compress model weights to 8/4-bit (vLLM). Bit flags — many booleans in one int (permissions, config). Hashing internals — XOR, prime mixing. Packed embeddings — multiple small values in one int. Fast, compact, less memory."</div>

<div class="dialogue">মাথানী — জোড়া, পুনরাবৃত্তি। কুরআনকে আল্লাহ "কিতাব মাথানী" বলেছেন (৩৯:২৩) — যার অর্থ বিতর্কিত, কিন্তু অনেকে ব্যাখ্যা করেন "জোড়ায় জোড়ায় অবতীর্ণ", বা "পুনরাবৃত্তিময়"। সত্য জোড়ায় জোড়ায় আসে — আকিদা ও আমল, দুনিয়া ও আখিরাত, সওয়াব ও শাস্তি। বিটও তেমনি — ০ ও ১, জোড় অবস্থা, যার পুনরাবৃত্তি থেকে অসংখ্য নকশা গঠিত। দুই থেকে অসংখ্য — সেই তাওহীদের ছায়া, এক থেকে বহু।</div>
<div class="dialogue en">"Mathani — paired, repeated. Allah called the Quran 'Kitaban Mathani' (39:23) — its meaning debated, but often read as 'sent in pairs' or 'oft-repeated'. Truth comes in pairs — creed and deed, this world and the next, reward and punishment. The bit too — 0 and 1, paired states, whose repetition forms countless patterns. From two, the countless — the shadow of tawhid, from One, the many."</div>

<div class="dialogue">আঠারোটা দোকান পেরিয়েছ। জ্যোতির্বিদ মাপতে শিখিয়েছিলেন, আরবেস্ক খোদাইকারী ছোট করে ডাকতে। টালি নির্মাতা সারিবদ্ধ করেছিলেন, মুক্তোর মালা গেঁথেছিলেন, কাফেলা প্রধান ক্রম দিয়েছিলেন। তালা নির্মাতা চাবি দিয়ে খুঁজতে শিখিয়েছিলেন, মসলা ব্যবসায়ী সেরাটা উপরে রেখেছিলেন, বংশবিদ শাখায় খুঁজেছিলেন। তাঁতি জাল বুনেছিলেন, গোত্রপতি গোত্র গেঁথেছিলেন, গ্রন্থাগারিক সাজিয়ে দ্রুত খুঁজেছিলেন। পাথর বিভাজক ভাগ করে জয় করেছিলেন, ক্যালিগ্রাফার দুই হাতে এগিয়েছিলেন, রেশম ব্যবসায়ী মুহূর্তের সেরা ধরেছিলেন। মালি ধাপে ধাপে গড়েছিলেন, অলিগলির পথিক ফিরে এসেছিলেন, নকল-নির্দেশক প্যাটার্ন খুঁজেছিলেন। আর আমি — আমি সবচেয়ে ছোট থেকে সবচেয়ে বড় গড়েছি। আঠারোটা কৌশল — এক একটা দৃষ্টিভঙ্গি। সিনিয়র ইঞ্জিনিয়ার তিনিই যিনি জানেন কোন সমস্যায় কোন দৃষ্টি লাগবে।</div>
<div class="dialogue en">"Eighteen shops you've passed. The astrolabe maker taught to measure, the arabesque carver to call on smaller. The tile maker arranged in rows, the pearl maker strung, the caravan master gave order. The locksmith taught to search by key, the spice merchant kept the best on top, the genealogist searched through branches. The weaver wove the web, the clan elder built clans, the librarian sorted and searched fast. The stone splitter divided and conquered, the calligrapher advanced with two hands, the silk merchant seized the moment's best. The gardener built step by step, the alley explorer returned, the concord maker found patterns. And I — I built the vast from the smallest. Eighteen techniques — eighteen perspectives. A senior engineer is one who knows which perspective each problem needs."</div>

<div class="dialogue">বেগম আয়িশা তাঁতের দিকে তাকিয়ে শেষ কার্ডটা বসান। "নকশা শেষ হলে তাঁতি থামে না — নতুন সুতো টানে, নতুন কার্ড কাটে। তুমিও তাই। আঠারো দোকান শেষ, কিন্তু শেখা এইমাত্র শুরু হলো। প্রতিটা প্রোডাকশন bug, প্রতিটা নতুন মডেল, প্রতিটা স্কেলিং সমস্যা — নতুন কার্ড, নতুন নকশা। বাজার বন্ধ হয় না, শুধু দরজা খোলে। যাও এখন — বাজারের বাইরে তোমার নিজের কারখানা গড়ো।"</div>
<div class="dialogue en">Begum Aisha looks at the loom and sets the last card. "When one pattern ends, the weaver doesn't stop — she draws a new thread, cuts a new card. So it is with you. Eighteen shops are done, but the learning has only just begun. Every production bug, every new model, every scaling problem — a new card, a new pattern. The bazaar never closes; it only opens new doors. Go now — build your own workshop beyond the bazaar."</div>`,
  senior:{
    title:"Bit Manipulation — Production Patterns",
    body:`
    <p><strong>পঠনযোগ্যতা:</strong> bitwise কোড পড়তে কঠিন। production-এ সবসময় মন্তব্য (comment) রাখো কী করছে।</p>
    <p><strong>Python নির্দিষ্ট:</strong> <code>int.bit_count()</code> (Python 3.10+) — popcount এর জন্য নিজে না লিখে এটাই ব্যবহার করো। <code>int.bit_length()</code> — কত বিট দরকার।</p>
    <p><strong>Flags pattern:</strong> একাধিক boolean কে এক int-এ প্যাক করো — <code>PERMISSION_READ = 1&lt;&lt;0</code>, <code>WRITE = 1&lt;&lt;1</code> ইত্যাদি। মেমোরি সাশ্রয়ী, দ্রুত চেক।</p>
    <p><strong>Bloom filter লাইব্রেরি:</strong> <code>pybloom_live</code> বা <code>bloom-filter2</code>। নিজে না লিখে — tested implementation ব্যবহার করো।</p>
    <p><strong>সতর্কতা:</strong> নেতিবাচক সংখ্যার right-shift ভাষাভেদে আলাদা (logical vs arithmetic)। Python-এ <code>&gt;&gt;</code> সবসময় arithmetic (যেমন <code>-8 &gt;&gt; 1 == -4</code>), কিন্তু C/Java-তে unsigned/signed অনুযায়ী আলাদা আচরণ করে — নতুন ভাষায় গেলে সর্বদা নিজে টেস্ট করে নিশ্চিত হও।</p>`
  },
  exercise:{
    hint:"XOR ম্যাজিক — single number, swap, power-of-two চেখো!",
    starterCode:`# পরচুলা-নকশা তাঁতির কারখানা — Bit Manipulation

# ১. XOR — single number (বাকি সব দুবার, একটা একবার)
def single_number(nums):
    result = 0
    for n in nums:
        result ^= n
    return result

print("single_number([4,1,2,1,2]):", single_number([4, 1, 2, 1, 2]))  # → 4

# ২. দুটো সংখ্যা swap বিনা temp-এ
def xor_swap(a, b):
    a ^= b; b ^= a; a ^= b
    return a, b

print("xor_swap(7, 3):", xor_swap(7, 3))  # → (3, 7)

# ৩. পাওয়ার অফ টু কি?
def is_power_of_two(n):
    return n > 0 and (n & (n-1)) == 0

for n in [1, 2, 8, 16, 100]:
    print(f"{n} পাওয়ার অফ টু? {is_power_of_two(n)}")

# ৪. বিট গণনা (popcount)
def count_bits(n):
    count = 0
    while n:
        count += n & 1
        n >>= 1
    return count

print(f"\\n13-এ কয়টা 1-bit? {count_bits(13)}")   # 1101 → ৩টা
print(f"Python এর নিজস্ব: {(13).bit_count()}")    # Python 3.10+

# ৫. বাম shift = দ্রুত গুণ
print(f"\\n1 << 4 = {1 << 4}   (= 2^4)")
print(f"5 << 3 = {5 << 3}    (= 5 × 8)")

# BONUS: একটা সাধারণ Bloom filter
class SimpleBloom:
    def __init__(self, size=64):
        self.size = size
        self.bits = 0
    def _h1(self, s): return hash(s) % self.size
    def _h2(self, s): return (hash(s) * 7) % self.size
    def add(self, s):
        self.bits |= (1 << self._h1(s)) | (1 << self._h2(s))
    def might_contain(self, s):
        mask = (1 << self._h1(s)) | (1 << self._h2(s))
        return (self.bits & mask) == mask

bf = SimpleBloom()
bf.add("hello"); bf.add("world")
print(f"\\n'hello' সম্ভবত আছে? {bf.might_contain('hello')}")  # True
print(f"'xyz' সম্ভবত আছে? {bf.might_contain('xyz')}")      # False (সম্ভবত)
`
  }
});
