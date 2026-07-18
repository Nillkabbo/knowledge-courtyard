// ═══════════════════════════════════════════════
// গণিতের নিকোবর — The Architect's Compass
// Book 30 · Doors 1-5
// Mathematical Foundations of Machine Learning
// ═══════════════════════════════════════════════

const doors = [];

// ─── Door 1: দিক নির্দেশকের কক্ষ ──────────────
doors.push({
  num:1, icon:"🧭", color:"#6366f1", name:"দিক নির্দেশকের কক্ষ",
  subtitle:"The Navigator's Chamber", tech:"Vectors & Vector Spaces",
  spirit:"আল-জাবর — ভাঙা টুকরো জোড়া লাগানো",
  secret:"ভেক্টর হলো দিক সহ সংখ্যা — শুধু কতটা নয়, কোন দিকে। মেশিন লার্নিং শুরু হয় এখানে কারণ প্রতিটা ডেটা পয়েন্ট একটা ভেক্টর — একটা দিক স্থানে।",
  recall:{
    q:"ভেক্টর আর স্কেলারের মধ্যে মূল পার্থক্য কী?",
    qen:"What is the fundamental difference between a vector and a scalar?",
    a:"স্কেলার হলো শুধু পরিমাণ (যেমন ৫)। ভেক্টর হলো পরিমাণ সহ দিক (যেমন উত্তরে ৫)। ML-এ প্রতিটা ডেটা পয়েন্ট একটা ভেক্টর — multi-dimensional space-এ একটা তীর।",
    aen:"A scalar is just magnitude (e.g., 5). A vector is magnitude WITH direction (e.g., 5 north). In ML, every data point is a vector — an arrow in multi-dimensional space."
  },
  story:`<p class="scene-setting">৮৩০ খ্রিষ্টাব্দ। বাগদাদের বাইত আল-হিকমা। একটা ঘরে বসে আছেন মুহাম্মাদ ইবনে মুসা আল-খোয়ারিজমি (Muhammad ibn Musa al-Khwarizmi)। তাঁর সামনে পাটিগণিত, জ্যামিতি, এবং নকশা। তিনি এমন একটা প্রশ্ন নিয়ে ভাবছেন যা পরবর্তী ১২০০ বছর ধরে গণিতকে নির্মাণ করবে — কীভাবে অজানা রাশিকে প্রতীক দিয়ে প্রকাশ করা যায়? কীভাবে ভাঙা সমীকরণ জোড়া লাগানো যায়? তিনি একটা বই লেখেন — আল-কিতাব আল-মুখতাসার ফি হিসাব আল-জাবর ওয়াল-মুকাবালা। আল-জাবর মানে ভাঙা টুকরো জোড়া লাগানো। এখান থেকে এসেছে শব্দ — algebra। এবং তাঁর নাম থেকে এসেছে — algorithm।</p>
<p class="scene-setting en">830 CE. Bayt al-Hikma, Baghdad. Muhammad ibn Musa al-Khwarizmi sits in a room with arithmetic, geometry, and astronomical tables. He ponders a question that will build mathematics for the next 1200 years — how to represent unknown quantities with symbols? How to restore broken equations? He writes a book — Al-Kitab al-Mukhtasar fi Hisab al-Jabr wal-Muqabala. Al-Jabr means restoring broken pieces. From this comes the word — algebra. And from his name comes — algorithm.</p>

<div class="dialogue">তুমি বাগদাদের সেই ঘরে দাঁড়িয়ে আছো। আল-খোয়ারিজমি তোমার দিকে তাকান। তাঁর হাতে একটা কম্পাস। তিনি বলেন — দেখো, এই কম্পাস। এটা শুধু দূরত্ব মাপে না। এটা দিক বলে। কম্পাস ছাড়া তুমি হারিয়ে যাবে। গণিতেও তাই। শুধু সংখ্যা জানলে হবে না — তুমি জানতে হবে সেই সংখ্যা কোন দিকে যাচ্ছে। এটাই ভেক্টর।</div>
<div class="dialogue en">"You stand in that Baghdad room. Al-Khwarizmi looks at you. In his hand — a compass. He says — look, this compass. It does not just measure distance. It tells direction. Without a compass, you are lost. In mathematics too. Knowing just a number is not enough — you must know which direction that number points. This is a vector."</div>

<div class="callout info"><span class="co-icon">📐</span><div><strong>ভেক্টরের সংজ্ঞা:</strong> একটা ভেক্টর হলো একটা সংখ্যার তালিকা যেখানে ক্রম গুরুত্বপূর্ণ। গাণিতিকভাবে: <strong>v = [v₁, v₂, ..., vₙ]</strong>। উদাহরণ: একটা বাড়ির বর্ণনা দিতে হলে তুমি বলো — [৩ বেডরুম, ২ বাথরুম, ১৫০০ sq ft]। এটা একটা ৩-মাত্রিক ভেক্টর। ML-এ প্রতিটা ডেটা পয়েন্ট এমন একটা ভেক্টর।</div></div>

<div class="diagram">
  <div class="diag-title">২D ভেক্টর — দিক সহ তীর</div>
  <svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg">
    <defs><marker id="arrowIndigo" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto"><path d="M0,0 L0,6 L9,3 z" fill="#a5b4fc"/></marker></defs>
    <line class="axis" x1="40" y1="210" x2="520" y2="210"/>
    <line class="axis" x1="40" y1="210" x2="40" y2="20"/>
    <text class="axis-label" x="525" y="214">x</text>
    <text class="axis-label" x="36" y="16">y</text>
    <line class="edge-amber" x1="40" y1="210" x2="240" y2="110" marker-end="url(#arrowIndigo)"/>
    <circle class="node" cx="240" cy="110" r="5"/>
    <text class="lbl" x="260" y="100">v = [3, 2]</text>
    <text class="lbl-sm" x="120" y="170">দিক সহ তীর</text>
    <text class="lbl-sm" x="120" y="185">Arrow with direction</text>
    <line class="grid-line" x1="40" y1="210" x2="40" y2="110"/>
    <line class="grid-line" x1="40" y1="110" x2="240" y2="110"/>
    <text class="lbl-sm" x="15" y="160">2</text>
    <text class="lbl-sm" x="135" y="228">3</text>
  </svg>
  <div class="diag-cap">ভেক্টর v = [3, 2] — x-অক্ষে ৩ ঘটকা, y-অক্ষে ২ ঘটকা</div>
</div>

<table class="kv-table"><tr><th>ধরন</th><th>উদাহরণ</th><th>ML-এ ব্যবহার</th></tr>
<tr><td class="hl">স্কেলার (Scalar)</td><td>৫</td><td>learning rate, temperature</td></tr>
<tr><td class="hl">ভেক্টর (Vector)</td><td>[৩, ২]</td><td>word embedding, pixel values</td></tr>
<tr><td class="hl">ম্যাট্রিক্স (Matrix)</td><td>[[১,২],[৩,৪]]</td><td>batches of data, weights</td></tr>
<tr><td class="hl">টেনসর (Tensor)</td><td>n-dimensional</td><td>images (H×W×C), videos</td></tr></table>

<div class="dialogue">আল-খোয়ারিজমি বলেন — এখন বোঝো কেন এটা গুরুত্বপূর্ণ। তুমি Book ১৮ (Embeddings) পড়েছো। সেখানে একটা শব্দকে একটা ভেক্টর দিয়ে প্রকাশ করা হয় — যেমন king = [0.5, -0.2, 0.9, ...]। ৭৬৮টা সংখ্যা। প্রতিটা সংখ্যা একটা দিক। এই ৭৬৮-মাত্রিক স্থানে king আর queen কাছাকাছি থাকে — কারণ তাদের ভেক্টর প্রায় একই দিকে নির্দেশ করে। এটা শুধু সম্ভব কারণ ভেক্টরে দিক আছে। স্কেলার দিয়ে এটা করা অসম্ভব।</div>
<div class="dialogue en">Al-Khwarizmi says — now understand why this matters. You read Book 18 (Embeddings). There, a word is represented as a vector — e.g., king = [0.5, -0.2, 0.9, ...]. 768 numbers. Each number is a direction. In this 768-dimensional space, king and queen are close — because their vectors point in nearly the same direction. This is only possible because vectors have direction. With scalars, impossible.</div>

<div class="callout tip"><span class="co-icon">🔌</span><div><strong>ভেক্টর অপারেশন তিনটি:</strong>
<br>① <strong>যোগ (Addition):</strong> [১,২] + [৩,৪] = [৪,৬] — প্রতিটা উপাদান যোগ। embedding-এ: king - man + woman ≈ queen।
<br>② <strong>স্কেলার গুণ (Scalar Multiplication):</strong> ৩ × [১,২] = [৩,৬] — প্রতিটা উপাদান গুণ। temperature scaling-এ ব্যবহৃত।
<br>③ <strong>ডট গুণন (Dot Product):</strong> [১,২]·[৩,৪] = ১×৩ + ২×৪ = ১১ — কতটা একই দিকে নির্দেশ করছে। attention mechanism-এ ব্যবহৃত!</div></div>

<div class="diagram">
  <div class="diag-title">ডট গুণন — কতটা একই দিক?</div>
  <svg viewBox="0 0 560 230" xmlns="http://www.w3.org/2000/svg">
    <defs><marker id="arrowFire2" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto"><path d="M0,0 L0,6 L9,3 z" fill="#ff6b35"/></marker></defs>
    <defs><marker id="arrowTeal2" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto"><path d="M0,0 L0,6 L9,3 z" fill="#2dd4bf"/></marker></defs>
    <defs><marker id="arrowMoon2" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto"><path d="M0,0 L0,6 L9,3 z" fill="#5b9eff"/></marker></defs>
    <text class="lbl-hot" x="280" y="25">ডট গুণন বড় = একই দিক</text>
    <line class="edge-hot" x1="100" y1="90" x2="220" y2="50" marker-end="url(#arrowFire2)"/>
    <line class="edge-hot" x1="100" y1="90" x2="230" y2="55" marker-end="url(#arrowFire2)"/>
    <text class="lbl-hot" x="160" y="120">v₁·v₂ = বড়</text>
    <text class="lbl-cyan" x="280" y="125">ডট গুণন শূন্য = লম্ববৎ</text>
    <line class="edge-cyan" x1="340" y1="50" x2="460" y2="50" marker-end="url(#arrowTeal2)"/>
    <line class="edge-cyan" x1="400" y1="20" x2="400" y2="120" marker-end="url(#arrowTeal2)"/>
    <text class="lbl-cyan" x="430" y="140">v₁·v₂ = 0</text>
    <text class="lbl-leaf" x="160" y="185">ডট গুণন ঋণাত্মক = বিপরীত</text>
    <line stroke="#52c41a" stroke-width="2" fill="none" x1="100" y1="160" x2="220" y2="160" marker-end="url(#arrowMoon2)"/>
    <line stroke="#52c41a" stroke-width="2" fill="none" x1="100" y1="160" x2="10" y2="160" marker-end="url(#arrowMoon2)" transform="translate(-5,0)"/>
    <text class="lbl-leaf" x="160" y="200">v₁·v₂ &lt; 0</text>
  </svg>
  <div class="diag-cap">Dot product = দুই ভেক্টর কতটা একমুখী। Attention mechanism-এ Q·K = relevance score।</div>
</div>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>সতর্ক পাঠ:</strong> ভেক্টরের মাত্রিকতা (dimensionality) বাস্তবে কল্পনা করা কঠিন। আমরা ২D বা ৩D কল্পনা করতে পারি। কিন্তু ML-এ ভেক্টর সাধারণত ৭৬৮ (BERT) বা ১২,২৮৮ (GPT-3) মাত্রিক। তুমি এগুলো কল্পনা করতে পারবে না — কিন্তু গণিত একই। ডট গুণন, যোগ, দূরত্ব — সব নিয়ম ২D-তে যা, ৭৬৮D-তেও তা-ই।</div></div>

<div class="code-block">— — — Python-এ ভেক্টর অপারেশন — — —

import numpy as np

# ভেক্টর তৈরি
v1 = np.array([3, 2])
v2 = np.array([1, 4])

# যোগ
print(v1 + v2)           # [4, 6]

# স্কেলার গুণ
print(3 * v1)            # [9, 6]

# ডট গুণন — attention-এ ব্যবহৃত
print(np.dot(v1, v2))    # 3*1 + 2*4 = 11

# দূরত্ব (Euclidean) — embedding similarity-তে ব্যবহৃত
print(np.linalg.norm(v1 - v2))  # sqrt((3-1)^2 + (2-4)^2)

# মাত্রিকতা (dimensionality)
word_embedding = np.random.rand(768)  # BERT-এর embedding
print(word_embedding.shape)  # (768,) — ৭৬৮টা দিক</div>

<div class="verse">الْحَمْدُ لِلَّهِ الَّذِي خَلَقَ السَّمَاوَاتِ وَالْأَرْضَ وَجَعَلَ الظُّلُمَاتِ وَالنُّورَ
<div style="font-size:.88rem;color:var(--ink-dim);margin-top:.4rem">"প্রশংসা সেই সত্তার যিনি নভোমণ্ডল ও ভূমণ্ডল সৃষ্টি করেছেন এবং অন্ধকার ও আলো স্থাপন করেছেন।" — কুরআন ৬:১</div>
<div style="font-size:.82rem;color:var(--ink-mute);margin-top:.3rem">Al-Khwarizmi found direction in numbers. Allah created direction in the cosmos itself — darkness and light, each with its own vector.</div>
</div>

<div class="secret-box">🧭 <strong>নিকোবর রহস্য ১:</strong> ভেক্টর হলো দিক সহ সংখ্যা। ML-এ প্রতিটা ডেটা একটা ভেক্টর — multi-dimensional space-এ একটা তীর। দিক ছাড়া সংখ্যা অর্থহীন — কম্পাস ছাড়া নাবিকের মতো।<br><span class="en">A vector is a number with direction. In ML, every data point is a vector — an arrow in multi-dimensional space. A number without direction is meaningless — like a sailor without a compass.</span></div>`,
  senior:{
    title:"কীভাবে ভেক্টর বোঝো — step by step",
    body:`<p><strong>Step ১:</strong> একটা সাধারণ সংখ্যা (স্কেলার) নাও — যেমন তোমার বয়স ২৫। এটার কোনো দিক নেই।</p>
<p><strong>Step ২:</strong> এখন ভাবো — তুমি যদি বলো উত্তরে ২৫ মাইল — এটা ভেক্টর। পরিমাণ আর দিক।</p>
<p><strong>Step ৩:</strong> ML-এ: একটা ছবি হলো ভেক্টর। [২২৪, ২২৪, ৩] = প্রতিটা pixel-এ red, green, blue মান। মোট ১৫০,৫২৮টা সংখ্যা — একটা তীর ১৫০,৫২৮-মাত্রিক স্থানে।</p>
<p><strong>Step ৪:</strong> Word2Vec-এ king = [০.৫, -০.২, ...] (৭৬৮টা সংখ্যা)। এই স্থানে king - man + woman ≈ queen। কারণ ভেক্টর যোগ/বিয়োগ অর্থ বহন করে।</p>
<p><strong>Step ৫:</strong> Dot product (Q·K) = attention mechanism-এ ব্যবহৃত — কোনো query আর key কতটা মিলে তা মাপতে।</p>`
}
});

// ─── Door 2: গিরিহ কারিগরের কর্মশালা ──────────
doors.push({
num:2, icon:"🔷", color:"#a5b4fc", name:"গিরিহ কারিগরের কর্মশালা",
subtitle:"The Girih Artisan's Workshop", tech:"Matrices & Linear Transformations",
spirit:"আল-মুকাবালা — এক পাশ থেকে অন্য পাশে সমীকরণ সরানো",
secret:"ম্যাট্রিক্স হলো একটা রূপান্তর মেশিন — ভেক্টরকে একটা স্থান থেকে অন্য স্থানে নিয়ে যায়। Neural network-এ প্রতিটা layer একটা ম্যাট্রিক্স গুণ। গিরিহ টাইলসের নিয়ম একই — একটা প্যাটার্ন পুরো স্থান বদলে দেয়।",
recall:{
q:"ম্যাট্রিক্স গুণন (matrix multiplication) কেন ML-এ এত গুরুত্বপূর্ণ?",
qen:"Why is matrix multiplication so important in ML?",
a:"কারণ একটা neural network layer হলো একটা ম্যাট্রিক্স গুণ। W·x + b। ম্যাট্রিক্স গুণ দিয়ে হাজার হাজার ভেক্টর একসাথে রূপান্তর করা যায় — এটাই GPU-র শক্তি।",
aen:"Because a neural network layer IS a matrix multiplication: W·x + b. Matrix multiplication transforms thousands of vectors simultaneously — this is why GPUs are powerful for ML."
},
story:`<p class="scene-setting">১৩শ শতাব্দী। ইসফাহানের শুক্রবার মসজিদ। একজন কারিগর — তাঁর নাম মাহমুদ — দেয়ালে গিরিহ (girih) টাইলস বসাচ্ছেন। গিরিহ মানে গিঁট — জ্যামিতিক প্যাটার্ন যা অসীম পর্যন্ত বিস্তৃত হয়। মাহমুদ মাত্র পাঁচটা টাইল ব্যবহার করেন — কিন্তু সেগুলো ঘুরিয়ে, সাজিয়ে অসীম নকশা তৈরি করেন। প্রতিটা টাইল একটা রূপান্তর — একটা প্যাটার্নকে অন্য প্যাটার্নে বদলে দেয়। এই একই নিয়মে ম্যাট্রিক্স কাজ করে।</p>
<p class="scene-setting en">13th century. Friday Mosque of Isfahan. An artisan named Mahmud places girih tiles on a wall. Girih means knot — geometric patterns extending to infinity. Mahmud uses only five tile shapes — but by rotating, arranging them, creates infinite designs. Each tile is a transformation — converting one pattern into another. Matrices work by the same principle.</p>

<div class="dialogue">মাহমুদ তোমাকে ডাকেন। বলেন — দেখো, এই পাঁচটা টাইল। প্রতিটা একটা নিয়ম — ঘোরাও, বড় করো, ছোট করো। টাইল একই, কিন্তু নকশা বদলায়। ম্যাট্রিক্সও একই। একটা ম্যাট্রিক্স একটা ভেক্টরকে নেয়, ঘোরায়, বড় করে, ছোট করে — এবং নতুন ভেক্টর দেয়। এটাই linear transformation।</div>
<div class="dialogue en">Mahmud calls you. He says — look, these five tiles. Each is a rule — rotate, enlarge, shrink. Same tile, different pattern. A matrix does the same. It takes a vector, rotates it, stretches it, shrinks it — and gives a new vector. This is a linear transformation.</div>

<div class="callout info"><span class="co-icon">📐</span><div><strong>ম্যাট্রিক্সের সংজ্ঞা:</strong> ম্যাট্রিক্স হলো সংখ্যার একটা আয়তক্ষেত্র। <strong>m × n</strong> ম্যাট্রিক্সে m সারি (rows) আর n কলাম (columns)। গাণিতিকভাবে: <strong>A ∈ ℝ^(m×n)</strong>। উদাহরণ: একটা ৩×৩ ম্যাট্রিক্স একটা ৩D ভেক্টরকে রূপান্তর করতে পারে।</div></div>

<table class="kv-table"><tr><th>ম্যাট্রিক্স</th><th>আকার</th><th>কী করে</th><th>ML-এ কোথায়</th></tr>
<tr><td class="hl">Identity (I)</td><td>n × n</td><td>কিছু বদলায় না</td><td>baseline</td></tr>
<tr><td class="hl">Weight (W)</td><td>n × m</td><td>ভেক্টরকে রূপান্তর করে</td><td>neural network layers</td></tr>
<tr><td class="hl">Rotation</td><td>2 × 2</td><td>ঘোরায়</td><td>data augmentation</td></tr>
<tr><td class="hl">Scaling</td><td>n × n</td><td>বড়/ছোট করে</td><td>normalization</td></tr>
<tr><td class="hl">Embedding</td><td>V × d</td><td>শব্দ → ভেক্টর</td><td>Word2Vec, BERT</td></tr></table>

<div class="diagram">
<div class="diag-title">ম্যাট্রিক্স গুণন — ২D রূপান্তর</div>
<svg viewBox="0 0 560 240" xmlns="http://www.w3.org/2000/svg">
<defs><marker id="arrowI3" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto"><path d="M0,0 L0,6 L9,3 z" fill="#a5b4fc"/></marker></defs>
<line class="axis" x1="40" y1="200" x2="520" y2="200"/>
<line class="axis" x1="40" y1="200" x2="40" y2="20"/>
<text class="lbl-sm" x="15" y="55">Before</text>
<line stroke="#a5b4fc" stroke-width="2" fill="none" x1="80" y1="170" x2="80" y2="110" marker-end="url(#arrowI3)"/>
<text class="lbl-sm" x="88" y="145">x=[0,1]</text>
<line stroke="#a5b4fc" stroke-width="2" fill="none" x1="80" y1="170" x2="140" y2="170" marker-end="url(#arrowI3)"/>
<text class="lbl-sm" x="100" y="185">x=[1,0]</text>
<text class="lbl-sm" x="280" y="30">Matrix W = [[2,0],[0,1]]</text>
<text class="lbl-sm" x="290" y="50">→ x-অক্ষ দুইগুণ বড়</text>
<text class="arrow" x="260" y="110" style="fill:#ff6b35;font-size:24px">→</text>
<text class="lbl-sm" x="380" y="55">After</text>
<line stroke="#ff6b35" stroke-width="2.5" fill="none" x1="380" y1="170" x2="380" y2="110" marker-end="url(#arrowI3)"/>
<text class="lbl-hot" x="388" y="145">Wx=[0,1]</text>
<line stroke="#ff6b35" stroke-width="2.5" fill="none" x1="380" y1="170" x2="500" y2="170" marker-end="url(#arrowI3)"/>
<text class="lbl-hot" x="410" y="185">Wx=[2,0]</text>
</svg>
<div class="diag-cap">ম্যাট্রিক্স W ভেক্টর x-কে রূপান্তর করে → নতুন ভেক্টর Wx</div>
</div>

<div class="dialogue">মাহমুদ বলেন — এখন বোঝো কেন এটা neural network-এ এত গুরুত্বপূর্ণ। Book ৮ (LLM Anatomy) পড়েছো — transformer-এ প্রতিটা layer একটা ম্যাট্রিক্স গুণ। W·x + b। Input ভেক্টরকে নেয়, weight ম্যাট্রিক্স দিয়ে গুণ করে, আউটপুট ভেক্টর দেয়। শত শত layer — শত শত ম্যাট্রিক্স গুণ। আর এটাই GPU-র কাজ — হাজার হাজার ম্যাট্রিক্স গুণ একসাথে করা।</div>
<div class="dialogue en">Mahmud says — now understand why this is crucial in neural networks. You read Book 8 (LLM Anatomy) — in a transformer, each layer is a matrix multiplication. W·x + b. It takes an input vector, multiplies by a weight matrix, gives output vector. Hundreds of layers — hundreds of matrix multiplications. And this is what GPUs do — thousands of matrix multiplications simultaneously.</div>

<div class="callout tip"><span class="co-icon">🔌</span><div><strong>ম্যাট্রিক্স গুণনের নিয়ম:</strong>
<br>A (m×k) · B (k×n) = C (m×n)
<br>প্রতিটা উপাদান: Cᵢⱼ = Σ(Aᵢₖ × Bₖⱼ)
<br>⚠️ ক্রম গুরুত্বপূর্ণ! A·B ≠ B·A (সাধারণত)
<br>⚠️ ভেতরের dimension মিলতে হবে (k = k)</div></div>

<div class="code-block">— — — Python-এ ম্যাট্রিক্স অপারেশন — — —

import numpy as np

# ম্যাট্রিক্স তৈরি
W = np.array([[2, 0],
          [0, 1]])
x = np.array([1, 2])

# ম্যাট্রিক্স × ভেক্টর = রূপান্তরিত ভেক্টর
result = W @ x  # বা np.dot(W, x)
print(result)   # [2, 2]

# Neural network layer simulation
input_size = 768
output_size = 512
W_nn = np.random.randn(output_size, input_size)  # weight matrix
b_nn = np.random.randn(output_size)               # bias vector
x_input = np.random.randn(input_size)             # input vector

# একটা layer: y = Wx + b
output = W_nn @ x_input + b_nn
print(output.shape)  # (512,) — নতুন ভেক্টর

# Batch processing — GPU power!
batch = np.random.randn(32, input_size)  # 32 inputs
outputs = batch @ W_nn.T + b_nn
print(outputs.shape)  # (32, 512) — 32টা আউটপুট একসাথে</div>

<div class="compare">
<div class="cmp-card cmp-bad"><div class="cmp-label">❌ গিরিহ ছাড়া</div>ভেক্টর একটা জায়গায় দাঁড়িয়ে থাকে। কোনো রূপান্তর নেই। শুধু raw ডেটা — কোনো meaning নেই। একটা flat দেয়াল — নকশা ছাড়া।</div>
<div class="cmp-card cmp-good"><div class="cmp-label">✅ গিরিহ সহ</div>ম্যাট্রিক্স ভেক্টরকে রূপান্তর করে — ঘুরায়, বড় করে, অন্য স্থানে নেয়। প্রতিটা layer নতুন meaning তৈরি করে। দেয়ালে অসীম নকশা।</div>
</div>

<div class="verse">إِنَّا كُلَّ شَيْءٍ خَلَقْنَاهُ بِقَدَرٍ
<div style="font-size:.88rem;color:var(--ink-dim);margin-top:.4rem">"নিশ্চয়ই আমরা প্রতিটি কিছু সৃষ্টি করেছি এক নির্দিষ্ট পরিমাপে।" — কুরআন ৫৪:৪৯</div>
<div style="font-size:.82rem;color:var(--ink-mute);margin-top:.3rem">Every tile in girih has measure. Every matrix transformation has exact dimensions. Creation is structured — not random.</div>
</div>

<div class="secret-box">🔷 <strong>নিকোবর রহস্য ২:</strong> ম্যাট্রিক্স হলো রূপান্তর মেশিন। গিরিহ টাইলসের মতো — একই টাইল, অসীম নকশা। Neural network-এ প্রতিটা layer একটা ম্যাট্রিক্স গুণ। এটাই গণিত যা GPU কে শক্তিশালী করে।<br><span class="en">A matrix is a transformation machine. Like girih tiles — same tile, infinite patterns. Each neural network layer is a matrix multiplication. This is the math that makes GPUs powerful.</span></div>`,
senior:{
title:"ম্যাট্রিক্স চিন্তা — কীভাবে অভ্যাস করো",
body:`<p><strong>Step ১:</strong> ভাবো — একটা Excel spreadsheet হলো ম্যাট্রিক্স। প্রতিটা cell একটা সংখ্যা। Rows আর columns।</p>
<p><strong>Step ২:</strong> একটা ছবি (image) হলো ম্যাট্রিক্স। ২২৪×২২৪ pixels = ২২৪×২২৪×৩ matrix (RGB)।</p>
<p><strong>Step ৩:</strong> Neural network-এ: input vector → weight matrix → output vector। এটাই একটা layer।</p>
<p><strong>Step ৪:</strong> Batch = একাধিক ভেক্টর একসাথে। Batch একটা ম্যাট্রিক্স। ম্যাট্রিক্স গুণ = সব ভেক্টর একসাথে রূপান্তর।</p>
<p><strong>Step ৫:</strong> GPU = হাজার হাজার cores একসাথে ম্যাট্রিক্স গুণ করে। এটাই GPU কে CPU থেকে আলাদা করে।</p>`
  }
});

// ─── Door 3: কিবলা স্তম্ভ ──────────────────────
doors.push({
  num:3, icon:"🧲", color:"#5b9eff", name:"কিবলা স্তম্ভ",
  subtitle:"The Qibla Pillar", tech:"Eigenvalues & Eigenvectors",
  spirit:"কিবলা — এমন দিক যা রূপান্তরে পরিবর্তন হয় না",
  secret:"আইগেনভেক্টর হলো সেই দিক যা ম্যাট্রিক্স রূপান্তরে বদলায় না — শুধু বড়/ছোট হয়। কিবলার মতো — দিক এক, শুধু দূরত্ব বদলায়। PCA আর PageRank এই নিয়মে কাজ করে।",
  recall:{
    q:"আইগেনভেক্টর কী এবং PCA-তে এর ভূমিকা কী?",
    qen:"What is an eigenvector and what role does it play in PCA?",
    a:"আইগেনভেক্টর হলো এমন দিক যা ম্যাট্রিক্স রূপান্তরে বদলায় না। PCA ডেটার covariance ম্যাট্রিক্সের সবচেয়ে বড় আইগেনভেক্টর খুঁজে পায় — সেটাই প্রধান দিক (principal direction) যেখানে ডেটার সবচেয়ে variance আছে।",
    aen:"An eigenvector is a direction that does not change under matrix transformation. PCA finds the largest eigenvector of the data's covariance matrix — that is the principal direction where data has the most variance."
  },
  story:`<p class="scene-setting">তুমি একটা মসজিদে দাঁড়িয়ে আছো। প্রতিটা মুসল্লি একই দিকে মুখ করে নামাজ পড়ে — কিবলার দিকে। মসজিদের ভেতর সব মানুষ আলাদা জায়গায় দাঁড়িয়ে — কিন্তু সবার দিক এক। তুমি যদি তাদের সারি পাল্টেও দাও, কিবলার দিক বদলায় না। এটাই আইগেনভেক্টর — এমন একটা দিক যা রূপান্তরে পরিবর্তন হয় না। শুধু দূরত্ব বড় বা ছোট হয়।</p>
<p class="scene-setting en">You stand in a mosque. Every worshipper faces the same direction — toward the qibla. Each person stands in a different spot — but all face the same way. Even if you rearrange their rows, the qibla direction does not change. This is an eigenvector — a direction that does not change under transformation. Only the distance scales up or down.</p>

<div class="dialogue">তোমার শিক্ষক এই দরজায় হলেন আবুল-হাসান আল-কালানসারি (Abu'l-Hasan al-Qalanisari) — ১৪শ শতাব্দীর জ্যোতির্বিজ্ঞানী যিনি কিবলার নির্ভুল দিক গণনা করার পদ্ধতি উদ্ভাবন করেন। তাঁর বিশেষত্ব — তাঁর বাঁ হাতে একটা স্থায়ী কালি দাগ, কারণ তিনি প্রতিদিন জ্যোতির্বিজ্ঞানের হিসাব লিখতেন। তিনি বলেন — পৃথিবীর যেকোনো জায়গা থেকে কিবলার দিক এক। কিন্তু মক্কা থেকে দূরত্ব ভিন্ন। এটাই আইগেনভেক্টরের সারমর্ম।</div>
<div class="dialogue en">Your teacher in this door is Abu'l-Hasan al-Qalanisari — a 14th-century astronomer who developed methods to calculate precise qibla directions. His signature: a permanent ink stain on his left hand from daily astronomical calculations. He says — from anywhere on Earth, the qibla direction is one. But the distance from Mecca varies. This is the essence of eigenvectors.</div>

<div class="callout info"><span class="co-icon">📐</span><div><strong>আইগেনভেক্টরের সংজ্ঞা:</strong> একটা ম্যাট্রিক্স A-এর জন্য, আইগেনভেক্টর v এমন একটা ভেক্টর যে:
<br><strong>Av = λv</strong>
<br>যেখানে λ (lambda) হলো আইগেনভ্যালু — একটা স্কেলার। অর্থাৎ, ম্যাট্রিক্স A যখন v-কে রূপান্তর করে, v-এর দিক বদলায় না — শুধু λ গুণে বড়/ছোট হয়।</div></div>

<table class="kv-table"><tr><th>ধারণা</th><th>গণিত</th><th>অর্থ</th></tr>
<tr><td class="hl">Eigenvector (v)</td><td>Av = λv</td><td>দিক যা বদলায় না</td></tr>
<tr><td class="hl">Eigenvalue (λ)</td><td>স্কেলার</td><td>কতগুণ বড়/ছোট হলো</td></tr>
<tr><td class="hl">PCA</td><td>largest λ</td><td>ডেটার প্রধান দিক</td></tr>
<tr><td class="hl">PageRank</td><td>λ = ১ এর eigenvector</td><td>ওয়েব পেজের গুরুত্ব</td></tr>
<tr><td class="hl">Spectral clustering</td><td>multiple eigenvectors</td><td>ডেটা গ্রুপিং</td></tr></table>

<div class="diagram">
  <div class="diag-title">আইগেনভেক্টর — রূপান্তরে অপরিবর্তিত দিক</div>
  <svg viewBox="0 0 560 260" xmlns="http://www.w3.org/2000/svg">
    <defs><marker id="arrowEig" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto"><path d="M0,0 L0,6 L9,3 z" fill="#a5b4fc"/></marker></defs>
    <defs><marker id="arrowEig2" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto"><path d="M0,0 L0,6 L9,3 z" fill="#ff6b35"/></marker></defs>
    <line class="axis" x1="40" y1="220" x2="520" y2="220"/>
    <line class="axis" x1="40" y1="220" x2="40" y2="20"/>
    <text class="lbl-sm" x="120" y="40">রূপান্তরের আগে</text>
    <text class="lbl-amber" x="100" y="135">v₁ (eigenvector)</text>
    <line stroke="#a5b4fc" stroke-width="2.5" fill="none" x1="80" y1="200" x2="80" y2="120" marker-end="url(#arrowEig)"/>
    <text class="lbl-sm" x="90" y="200">দিক: উপরে</text>
    <text class="lbl-hot" x="220" y="120">→</text>
    <text class="lbl-sm" x="140" y="200">Matrix A</text>
    <text class="lbl-sm" x="320" y="40">রূপান্তরের পর</text>
    <text class="lbl-amber" x="340" y="60">λv₁ (একই দিক, বড়)</text>
    <line stroke="#ff6b35" stroke-width="3" fill="none" x1="380" y1="200" x2="380" y2="60" marker-end="url(#arrowEig2)"/>
    <text class="lbl-sm" x="390" y="200">দিক: উপরে (অপরিবর্তিত)</text>
    <text class="lbl-cyan" x="100" y="175">v₂ (সাধারণ)</text>
    <line stroke="#2dd4bf" stroke-width="2" fill="none" x1="120" y1="200" x2="160" y2="170" marker-end="url(#arrowEig)"/>
    <text class="lbl-cyan" x="340" y="170">Av₂ (দিক বদলে গেছে!)</text>
    <line stroke="#52c41a" stroke-width="2.5" fill="none" x1="380" y1="200" x2="460" y2="150" marker-end="url(#arrowEig2)"/>
  </svg>
  <div class="diag-cap">Eigenvector একই দিকে থাকে (শুধু বড় হয়)। সাধারণ ভেক্টর ঘুরে যায়।</div>
</div>

<div class="dialogue">আল-কালানসারি বলেন — ভাবো PCA কে একটা দলের ছবি হিসেবে। ১০০ জন মানুষ একটা room-এ দাঁড়িয়ে। তুমি যদি সবার position দেখো, মনে হবে chaos। কিন্তু যদি সবচেয়ে বড় আইগেনভেক্টর বরাবর দেখো — দেখবে সবাই মূলত একটা লাইনে। সেই লাইন হলো প্রধান দিক। বাকি দিকগুলো noise। PCA এটাই করে — ডেটার প্রধান দিক খুঁজে বের করে, বাকিগুলো ফেলে দেয়। Dimensionality reduction।</div>
<div class="dialogue en">Al-Qalanisari says — imagine PCA as a group photo. 100 people standing in a room. If you look at all positions, it seems like chaos. But if you look along the largest eigenvector — you see everyone is essentially along one line. That line is the principal direction. The rest is noise. PCA does exactly this — finds the principal directions of data, discards the rest. Dimensionality reduction.</div>

<div class="callout tip"><span class="co-icon">🔌</span><div><strong>ML-এ আইগেনভেক্টরের ৩টি ব্যবহার:</strong>
<br>① <strong>PCA (Principal Component Analysis):</strong> ডেটার সবচেয়ে গুরুত্বপূর্ণ দিক খুঁজে বের করা। ৭৬৮D → ৫০D। Book ১৮ (Embeddings) এই পদ্ধতিতে dimensions কমায়।
<br>② <strong>PageRank:</strong> Google-এর মূল অ্যালগরিদম — ওয়েব পেজের link ম্যাট্রিক্সের প্রধান আইগেনভেক্টর = পেজের গুরুত্ব।
<br>③ <strong>Spectral Clustering:</strong> ডেটাকে গ্রুপে ভাগ করা — graph ম্যাট্রিক্সের আইগেনভেক্টর ব্যবহার করে।</div></div>

<div class="code-block">— — — Python-এ Eigenvalue অপারেশন — — —

import numpy as np

# একটা ম্যাট্রিক্স
A = np.array([[4, 2],
              [1, 3]])

# Eigenvalue আর Eigenvector বের করা
eigenvalues, eigenvectors = np.linalg.eig(A)

print("Eigenvalues:", eigenvalues)
# [5.  2.]  — λ₁=5, λ₂=2

print("Eigenvectors:")
print(eigenvectors)
# প্রতিটা column একটা eigenvector

# PCA simulation — dimensionality reduction
data = np.random.randn(100, 10)  # 100 samples, 10 features
cov_matrix = np.cov(data.T)       # covariance matrix
eigvals, eigvecs = np.linalg.eig(cov_matrix)

# সবচেয়ে বড় eigenvalue-র eigenvector = principal component
top_idx = np.argmax(eigvals)
principal_component = eigvecs[:, top_idx]
print("Principal direction shape:", principal_component.shape)

# 10D → 1D reduction
reduced = data @ principal_component
print("Reduced shape:", reduced.shape)  # (100,)</div>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>সতর্ক পাঠ:</strong> সব ম্যাট্রিক্সের আইগেনভেক্টর থাকে না (যদি ম্যাট্রিক্স defective হয়)। আবার কিছু ম্যাট্রিক্সে আইগেনভ্যালু complex সংখ্যা হয়। কিন্তু ML-এ আমরা সাধারণত symmetric ম্যাট্রিক্স নিয়ে কাজ করি — যেগুলোর সব eigenvalue real আর positive। Covariance ম্যাট্রিক্স সবসময় symmetric।</div></div>

<div class="verse">فَأَيْنَمَا تُوَلُّوا فَثَمَ وَجْهُ اللَّهِ
<div style="font-size:.88rem;color:var(--ink-dim);margin-top:.4rem">"তোমরা যেদিকেই ফিরো, সেখানেই আল্লাহর দিক।" — কুরআন ২:১১৫</div>
<div style="font-size:.82rem;color:var(--ink-mute);margin-top:.3rem">The qibla is one direction that persists. The eigenvector is one direction that persists under transformation. Some truths are invariant.</div>
</div>

<div class="secret-box">🧲 <strong>নিকোবর রহস্য ৩:</strong> আইগেনভেক্টর হলো রূপান্তরে অপরিবর্তিত দিক। কিবলার মতো — দিক এক, দূরত্ব বদলায়। PCA ডেটার প্রধান দিক খুঁজে পায় এই নিয়মে।<br><span class="en">An eigenvector is a direction that does not change under transformation. Like the qibla — one direction, varying distances. PCA finds the principal direction of data by this principle.</span></div>`,
  senior:{
    title:"আইগেনভেক্টর চিন্তা — intuition তৈরি",
    body:`<p><strong>Step ১:</strong> একটা পিৎজা ভাবো। পিৎজাকে টান দিলে একটা দিকে বেশি বড় হয় — সেটাই প্রধান eigenvector।</p>
<p><strong>Step ২:</strong> PCA = ডেটার "প্রধান দিক" খোঁজা। যে দিকে ডেটা সবচেয়ে ছড়ানো। বাকি দিকগুলো ফেলে দেওয়া।</p>
<p><strong>Step ৩:</strong> Eigenvalue = কতগুণ বড় হলো। বড় eigenvalue = গুরুত্বপূর্ণ দিক। ছোট eigenvalue = noise।</p>
<p><strong>Step ৪:</strong> PageRank = ওয়েবের প্রধান eigenvector। গুরুত্বপূর্ণ পেজ = বড় eigenvalue।</p>
<p><strong>Step ৫:</strong> Spectral clustering = eigenvector দিয়ে গ্রুপ খুঁজি। Graph-এ community detection।</p>`
  }
});

// ─── Door 4: সংযোজনবিদের গ্যালারি ─────────────
doors.push({
  num:4, icon:"🎲", color:"#fcd34d", name:"সংযোজনবিদের গ্যালারি",
  subtitle:"The Combinator's Gallery", tech:"Probability & Bayes' Theorem",
  spirit:"আল-কালিল — সব সম্ভাবনা গণনা করা",
  secret:"সম্ভাবনা হলো অনিশ্চয়তার ভাষা। Bayes-এর উপপাদ্য বলে — নতুন প্রমাণ পেলে বিশ্বাস আপডেট করো। ML-এ Naive Bayes, Bayesian optimization, uncertainty estimation — সব এই নিয়মে।",
  recall:{
    q:"Bayes-এর উপপাদ্য কী বলে এবং ML-এ এটি কোথায় ব্যবহৃত হয়?",
    qen:"What does Bayes' theorem say and where is it used in ML?",
    a:"P(A|B) = P(B|A)×P(A) / P(B)। নতুন প্রমাণ B পেলে A-এর সম্ভাবনা আপডেট করো। Naive Bayes classifier, Bayesian hyperparameter optimization, spam filtering — সব এই নিয়মে কাজ করে।",
    aen:"P(A|B) = P(B|A)×P(A) / P(B). When new evidence B arrives, update probability of A. Naive Bayes classifier, Bayesian hyperparameter optimization, spam filtering — all use this principle."
  },
  story:`<p class="scene-setting">৮ম শতাব্দী। বাসরা। একজন মানুষ একটা বিশাল বই লিখছেন — কিতাব আল-আইন (Book of Letters)। তাঁর নাম আল-কালিল ইবনে আহমদ আল-ফারাহিদি (Al-Khalil ibn Ahmad al-Farahidi)। এই বইয়ে তিনি প্রথমবার সংযোজনবিদ্যা (combinatorics) আবিষ্কার করেন — সম্ভাব্য সব সংমিশ্রণ গণনা করার পদ্ধতি। আরবি অক্ষর থেকে কত প্রকার শব্দ তৈরি করা যায়? তিনি permutation আর combination এর সূত্র আবিষ্কার করেন — যা ৮০০ বছর পরে Pascal আর Fermat আবার আবিষ্কার করবেন।</p>
<p class="scene-setting en">8th century. Basra. A man writes a massive book — Kitab al-Ayn (Book of Letters). His name is Al-Khalil ibn Ahmad al-Farahidi. In this book, he discovers combinatorics for the first time — the method of counting all possible combinations. How many words can be formed from Arabic letters? He discovers formulas for permutations and combinations — which Pascal and Fermat will rediscover 800 years later.</p>

<div class="dialogue">আল-কালিল তাঁর পাটিগণিতের উপর বসে আছেন। তাঁর বিশেষত্ব — তিনি অন্ধ ছিলেন। কিন্তু তাঁর আঙুল দিয়ে তিনি কাঠে দাগ কাটতেন — প্রতিটা দাগ একটা সম্ভাবনা। তিনি বলেন — জ্ঞান হলো সম্ভাবনার সংখ্যা। যত বেশি সম্ভাবনা তুমি গণনা করতে পারো, তত গভীর জ্ঞান। কিন্তু গণনা শুধু শুরু — সম্ভাবনা বলে কোনটা ঘটবে। সেই জন্য দরকার Bayes-এর উপপাদ্য।</div>
<div class="dialogue en">Al-Khalil sits with his counting board. His signature — he was blind. But with his fingers, he carved marks on wood — each mark a possibility. He says — knowledge is the count of possibilities. The more possibilities you can enumerate, the deeper the knowledge. But enumeration is just the beginning — probability tells you which will happen. For that, you need Bayes' theorem.</div>

<div class="callout info"><span class="co-icon">📐</span><div><strong>Bayes-এর উপপাদ্য:</strong>
<br><strong>P(A|B) = P(B|A) × P(A) / P(B)</strong>
<br>P(A|B) = প্রমাণ B পাওয়ার পর A ঘটার সম্ভাবনা (posterior)
<br>P(A) = আগের বিশ্বাস (prior)
<br>P(B|A) = A সত্য হলে B পাওয়ার সম্ভাবনা (likelihood)
<br>P(B) = সর্বমোট প্রমাণের সম্ভাবনা (evidence)</div></div>

<table class="kv-table"><tr><th>সম্ভাবনা প্রকার</th><th>সংজ্ঞা</th><th>ML-এ ব্যবহার</th></tr>
<tr><td class="hl">Marginal (P(A))</td><td>একটা ঘটনার সম্ভাবনা</td><td>base rate, class prior</td></tr>
<tr><td class="hl">Joint (P(A,B))</td><td>দুই ঘটনা একসাথে</td><td>joint distribution</td></tr>
<tr><td class="hl">Conditional (P(A|B))</td><td>B ঘটলে A-এর সম্ভাবনা</td><td>Naive Bayes, Bayes filter</td></tr>
<tr><td class="hl">Posterior</td><td>প্রমাণ পরে আপডেটেড সম্ভাবনা</td><td>Bayesian inference</td></tr></table>

<div class="diagram">
  <div class="diag-title">Bayesian Update — নতুন প্রমাণে বিশ্বাস আপডেট</div>
  <svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg">
    <text class="lbl-amber" x="280" y="25" text-anchor="middle">P(spam|email features)</text>
    <rect class="cell" x="60" y="50" width="440" height="40" rx="8" style="fill:rgba(99,102,241,.1)"/>
    <text class="lbl-sm" x="80" y="75">Prior: P(spam) = ০.৩ (৩০%)</text>
    <text class="lbl-hot" x="280" y="115" text-anchor="middle">↓ নতুন প্রমাণ: email has "FREE MONEY"</text>
    <rect class="cell-hot" x="60" y="135" width="440" height="40" rx="8"/>
    <text class="lbl-sm" x="80" y="160">Likelihood: P(spam) × P(words|spam)</text>
    <text class="lbl-hot" x="280" y="200" text-anchor="middle">↓ Bayes Update</text>
    <rect class="cell-good" x="60" y="215" width="440" height="30" rx="8"/>
    <text class="lbl-leaf" x="280" y="235" text-anchor="middle">Posterior: P(spam|email) = ০.৯৪ (৯৪%)</text>
  </svg>
  <div class="diag-cap">একটা email-এ "FREE MONEY" শব্দ পেলে spam সম্ভাবনা ৩০% → ৯৪%</div>
</div>

<div class="dialogue">আল-কালিল বলেন — ভাবো, তুমি Book ১৬ (Evals) পড়েছো। একটা LLM-এর উত্তর কতটা নির্ভরযোগ্য? এটা একটা সম্ভাবনা প্রশ্ন। LLM প্রতিটা token-এর জন্য একটা probability distribution দেয় — P(word₁), P(word₂), ...। Temperature এই distribution নিয়ন্ত্রণ করে। Temperature কম = শুধু সবচেয়ে সম্ভব শব্দ। Temperature বেশি = বৈচিত্র্য বাড়ে। এটাই Book ৯ (Context Engineering)-এ temperature-এর গণিত।</div>
<div class="dialogue en">Al-Khalil says — think, you read Book 16 (Evals). How reliable is an LLM's answer? This is a probability question. An LLM gives a probability distribution for each token — P(word₁), P(word₂), .... Temperature controls this distribution. Low temperature = only most probable words. High temperature = more diversity. This is the math behind temperature in Book 9 (Context Engineering).</div>

<div class="callout tip"><span class="co-icon">🔌</span><div><strong>ML-এ সম্ভাবনার ৪টি ব্যবহার:</strong>
<br>① <strong>Softmax:</strong> raw scores → probability distribution। P(classᵢ) = exp(zᵢ) / Σexp(zⱼ)। প্রতিটা neural network classifier-এর শেষে।
<br>② <strong>Naive Bayes:</strong> spam filter, sentiment analysis। ধরে নেয় features independent। দ্রুত, সহজ, কার্যকর।
<br>③ <strong>Bayesian Optimization:</strong> hyperparameter tuning। Optuna, Hyperopt — এই নিয়মে কাজ করে।
<br>④ <strong>Uncertainty Estimation:</strong> model কতটা নিশ্চিত? Bayesian neural networks এই প্রশ্নের উত্তর দেয়।</div></div>

<div class="code-block">— — — Python-এ Probability & Bayes — — —

import numpy as np

# Bayes-এর উপপাদ্য: Spam filter
# P(spam) = 0.3, P(not spam) = 0.7
# P("FREE" | spam) = 0.8, P("FREE" | not spam) = 0.1
p_spam = 0.3
p_free_given_spam = 0.8
p_free_given_not_spam = 0.1

# P("FREE") = total probability
p_free = p_free_given_spam * p_spam + p_free_given_not_spam * (1 - p_spam)

# Bayes: P(spam | "FREE")
p_spam_given_free = (p_free_given_spam * p_spam) / p_free
print(f"P(spam | FREE) = {p_spam_given_free:.3f}")
# 0.774 — ৭৭% spam!

# Softmax — raw scores to probabilities
def softmax(scores, temperature=1.0):
    scaled = scores / temperature
    exp_scores = np.exp(scaled - np.max(scaled))
    return exp_scores / np.sum(exp_scores)

logits = np.array([2.0, 1.0, 0.5])
print("Low temp (0.5):", softmax(logits, 0.5))   # শুধু সেরা
print("Normal temp (1.0):", softmax(logits, 1.0)) # ভারসাম্য
print("High temp (2.0):", softmax(logits, 2.0))   # বৈচিত্র্যপূর্ণ</div>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>সতর্ক পাঠ:</strong> Naive Bayes-এর "naive" শব্দটা আছে কারণ এটা ধরে নেয় features independent — যা বাস্তবে খুব কম সত্য। একটা email-এ "FREE" আর "MONEY" সম্ভবত independent নয়। কিন্তু অবাক করা বিষয় — Naive Bayes তবুও ভালো কাজ করে। কারণ classification-এ শুধু সবচেয়ে সম্ভব class দরকার, exact probability নয়।</div></div>

<div class="verse">وَمَا تَدْرِي نَفْسٌ مَاذَا تَكْسِبُ غَدًا
<div style="font-size:.88rem;color:var(--ink-dim);margin-top:.4rem">"কোনো আত্মা জানে না আগামীকাল কী অর্জন করবে।" — কুরআন ৩১:৩৪</div>
<div style="font-size:.82rem;color:var(--ink-mute);margin-top:.3rem">The future is uncertain. Probability is the language of uncertainty. Bayes teaches us to update beliefs as evidence arrives — never to be certain, always to learn.</div>
</div>

<div class="secret-box">🎲 <strong>নিকোবর রহস্য ৪:</strong> সম্ভাবনা হলো অনিশ্চয়তার ভাষা। Bayes বলে — নতুন প্রমাণ পেলে বিশ্বাস আপডেট করো। Softmax আর Naive Bayes এই নিয়মে কাজ করে।<br><span class="en">Probability is the language of uncertainty. Bayes says — update beliefs when new evidence arrives. Softmax and Naive Bayes work by this principle.</span></div>`,
  senior:{
    title:"Bayesian চিন্তা — দৈনন্দিন জীবনে",
    body:`<p><strong>Step ১:</strong> প্রতিটা বিশ্বাসের একটা সম্ভাবনা আছে — ১০০% নিশ্চিত কখনোই না। Prior belief থেকে শুরু করো।</p>
<p><strong>Step ২:</strong> নতুন তথ্য পেলে আগের সম্ভাবনা আপডেট করো। এটাই Bayes-এর সারমর্ম।</p>
<p><strong>Step ৩:</strong> Softmax = neural network-এর শেষে scores কে probability তে রূপান্তর। সব scores একসাথে ১.০ হয়।</p>
<p><strong>Step ৪:</strong> Temperature = probability distribution কতটা চূড়ান্ত। কম temp = নির্দিষ্ট, বেশি temp = বৈচিত্র্যপূর্ণ।</p>
<p><strong>Step ৫:</strong> Bayesian optimization = smart hyperparameter tuning। প্রতিটা trial-এ জানে কোন অংশে সেরা প্যারামিটার পাওয়ার সম্ভাবনা বেশি।</p>`
  }
});

// ─── Door 5: প্যাটার্ন শিকারির মানচিত্র ────────
doors.push({
  num:5, icon:"📊", color:"#2dd4bf", name:"প্যাটার্ন শিকারির মানচিত্র",
  subtitle:"The Pattern Hunter's Map", tech:"Statistics & Distributions",
  spirit:"আল-কিন্দি — noise থেকে signal আলাদা করা",
  secret:"পরিসংখ্যান হলো noise থেকে signal আলাদা করার শিল্প। Mean আর variance ডেটার মূল চেহারা। Normal distribution প্রকৃতির সবচেয়ে সাধারণ প্যাটার্ন। ML-এ normalization, batch norm, weight initialization — সব এই নিয়মে।",
  recall:{
    q:"Normal distribution কেন প্রকৃতিতে এত সাধারণ এবং ML-এ কেন গুরুত্বপূর্ণ?",
    qen:"Why is the normal distribution so common in nature and important in ML?",
    a:"Central Limit Theorem বলে — অনেক স্বাধীন কারণের যোগফল normal distribution তৈরি করে। ML-এ weight initialization, noise modeling, batch normalization — সব normal distribution ধরে নেয়।",
    aen:"The Central Limit Theorem states that the sum of many independent causes creates a normal distribution. In ML, weight initialization, noise modeling, and batch normalization all assume normal distributions."
  },
  story:`<p class="scene-setting">৯ম শতাব্দী। বাগদাদ। আল-কিন্দি (Al-Kindi) — যাঁকে বলা হয় আরবদের প্রথম দার্শনিক — একটা প্রাচীন পাণ্ডুলিপি পড়ছেন। তিনি আরবি ভাষায় অক্ষরের কম্পাঙ্ক (frequency) গণনা করে সংকেতলিপি (cryptography) ভাঙার পদ্ধতি আবিষ্কার করেন। এটাই পৃথিবীর প্রথম frequency analysis। তাঁর বই রিসালা ফি ইসতিখরাজ আল-মুআম্মা (Manuscript on Deciphering Cryptographic Messages) — ১২০০ বছর আগে লেখা, আজও প্রাসঙ্গিক। তাঁর আবিষ্কার — noise থেকে signal আলাদা করা — এটাই পরিসংখ্যানের মূল।</p>
<p class="scene-setting en">9th century. Baghdad. Al-Kindi — called the first Arab philosopher — reads an ancient manuscript. He discovers the method of breaking ciphers by counting letter frequencies in Arabic. This is the world's first frequency analysis. His book Risala fi Istikhraj al-Mu'amma (Manuscript on Deciphering Cryptographic Messages) — written 1200 years ago, still relevant today. His discovery — separating signal from noise — is the heart of statistics.</p>

<div class="dialogue">আল-কিন্দি তাঁর পাণ্ডুলিপির উপর আঙুল চালান। তাঁর বিশেষত্ব — তাঁর ডান চোখের নিচে একটা পুরোনো কালির দাগ, কারণ তিনি ঘন্টার পর ঘন্টা মোমবাতির আলোয় লিখতেন। তিনি বলেন — প্রতিটা ভাষায় কিছু অক্ষর বেশি আসে, কিছু কম। আরবিতে 'আলিফ' আর 'লাম' সবচেয়ে বেশি। এটাই signal — noise থেকে আলাদা। পরিসংখ্যান এটাই করে — ডেটার ভেতর প্যাটার্ন খুঁজে বের করে।</div>
<div class="dialogue en">Al-Kindi runs his finger over his manuscript. His signature — an ink stain under his right eye, from hours of writing by candlelight. He says — in every language, some letters appear more, some less. In Arabic, alif and lam are most frequent. This is signal — separated from noise. Statistics does this — finds patterns inside data.</div>

<div class="callout info"><span class="co-icon">📐</span><div><strong>পরিসংখ্যানের ৩টি স্তম্ভ:</strong>
<br>① <strong>Mean (গড়):</strong> μ = Σxᵢ / n — ডেটার কেন্দ্র
<br>② <strong>Variance (ভেদাংক):</strong> σ² = Σ(xᵢ - μ)² / n — কতটা ছড়ানো
<br>③ <strong>Distribution (বিন্যাস):</strong> ডেটা কীভাবে ছড়ানো — Normal, Uniform, Poisson, etc.</div></div>

<table class="kv-table"><tr><th>Distribution</th><th>আকৃতি</th><th>ML-এ কোথায়</th></tr>
<tr><td class="hl">Normal (Gaussian)</td><td>বেল-আকৃতি</td><td>weight init, noise, batch norm</td></tr>
<tr><td class="hl">Uniform</td><td>সমান</td><td>random init, dropout</td></tr>
<tr><td class="hl">Bernoulli</td><td>০ বা ১</td><td>binary classification, dropout</td></tr>
<tr><td class="hl">Multinomial</td><td>N বিকল্প</td><td>softmax output, text generation</td></tr>
<tr><td class="hl">Exponential</td><td>দ্রুত কমে</td><td>attention decay, survival</td></tr></table>

<div class="diagram">
  <div class="diag-title">Normal Distribution — প্রকৃতির প্যাটার্ন</div>
  <svg viewBox="0 0 560 240" xmlns="http://www.w3.org/2000/svg">
    <defs><linearGradient id="bellGrad" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="rgba(99,102,241,.3)"/><stop offset="100%" stop-color="rgba(99,102,241,.05)"/></linearGradient></defs>
    <line class="axis" x1="40" y1="210" x2="520" y2="210"/>
    <path d="M 40 210 Q 140 210 200 150 Q 260 40 280 40 Q 300 40 360 150 Q 420 210 520 210 Z" fill="url(#bellGrad)" stroke="#6366f1" stroke-width="2"/>
    <line class="grid-line" x1="280" y1="40" x2="280" y2="210" stroke-dasharray="4,3"/>
    <text class="lbl-amber" x="280" y="30" text-anchor="middle">μ (mean)</text>
    <line class="seq-line" x1="200" y1="210" x2="200" y2="150"/>
    <text class="lbl-sm" x="180" y="225">μ-σ</text>
    <line class="seq-line" x1="360" y1="210" x2="360" y2="150"/>
    <text class="lbl-sm" x="345" y="225">μ+σ</text>
    <text class="lbl-sm" x="120" y="200">৬৮%</text>
    <text class="lbl-sm" x="240" y="200">৬৮%</text>
    <text class="lbl-cyan" x="280" y="155" text-anchor="middle">৬৮% ডেটা</text>
    <text class="lbl-cyan" x="280" y="170" text-anchor="middle">μ ± σ এর মধ্যে</text>
  </svg>
  <div class="diag-cap">Normal Distribution: ৬৮% ডেটা mean ± ১ standard deviation এর মধ্যে</div>
</div>

<div class="dialogue">আল-কিন্দি বলেন — এখন বোঝো কেন এটা ML-এ গুরুত্বপূর্ণ। তুমি Book ১৩ (Fine-tuning) পড়েছো। সেখানে weight initialization বলা হয়েছে — Xavier বা He initialization। এগুলো normal distribution থেকে এলোমেলো সংখ্যা নেয়। কেন? কারণ normal distribution প্রকৃতির সবচেয়ে সাধারণ প্যাটার্ন — Central Limit Theorem অনুযায়ী। আর Batch Normalization? সে প্রতিটা layer-এর activation কে normal distribution-এ নিয়ে আসে — mean ০, variance ১। এটাই stable training-এর রহস্য।</div>
<div class="dialogue en">Al-Kindi says — now understand why this is crucial in ML. You read Book 13 (Fine-tuning). There, weight initialization is discussed — Xavier or He initialization. These draw random numbers from a normal distribution. Why? Because the normal distribution is nature's most common pattern — by the Central Limit Theorem. And Batch Normalization? It brings each layer's activations to a normal distribution — mean 0, variance 1. This is the secret of stable training.</div>

<div class="callout tip"><span class="co-icon">🔌</span><div><strong>ML-এ পরিসংখ্যানের ৪টি ব্যবহার:</strong>
<br>① <strong>Normalization:</strong> ডেটাকে mean ০, variance ১ এ নিয়ে আসা। Gradient descent দ্রুত কাজ করে।
<br>② <strong>Batch Norm:</strong> প্রতিটা layer-এ activation distribution stable রাখা। Deep network training সম্ভব করে।
<br>③ <strong>Weight Init:</strong> Xavier (Glorot & Bengio, 2010) বা He (He et al., 2015) — normal distribution থেকে weights।
<br>④ <strong>Hypothesis Testing:</strong> Book ১৬ (Evals)-এ A/B testing। দুই model-এর মধ্যে difference significant কি না?</div></div>

<div class="code-block">— — — Python-এ Statistics — — —

import numpy as np

# ডেটার পরিসংখ্যান
data = np.random.normal(loc=50, scale=10, size=1000)

print(f"Mean: {np.mean(data):.2f}")          # ~৫০
print(f"Std:  {np.std(data):.2f}")            # ~১০
print(f"Min:  {np.min(data):.2f}")
print(f"Max:  {np.max(data):.2f}")

# Normalization (z-score)
normalized = (data - np.mean(data)) / np.std(data)
print(f"After norm - Mean: {np.mean(normalized):.4f}")  # ~০
print(f"After norm - Std:  {np.std(normalized):.4f}")   # ~১

# Batch Normalization simulation
def batch_norm(x, gamma=1, beta=0, eps=1e-5):
    mean = np.mean(x, axis=0)
    var = np.var(x, axis=0)
    x_hat = (x - mean) / np.sqrt(var + eps)
    return gamma * x_hat + beta

activations = np.random.randn(32, 768)  # batch of 32, 768 features
bn_activations = batch_norm(activations)
print(f"BN output mean: {np.mean(bn_activations):.4f}")  # ~০
print(f"BN output std:  {np.std(bn_activations):.4f}")   # ~১</div>

<div class="verse">سُبْحَانَ الَّذِي خَلَقَ الْأَزْوَاجَ كُلَّهَا
<div style="font-size:.88rem;color:var(--ink-dim);margin-top:.4rem">"পবিত্র সেই সত্তা যিনি সব জোড়া সৃষ্টি করেছেন।" — কুরআন ৩৬:৩৬</div>
<div style="font-size:.82rem;color:var(--ink-mute);margin-top:.3rem">Creation comes in pairs — signal and noise, pattern and randomness. Statistics teaches us to separate the two. Al-Kindi separated signal from noise in language. We do the same in data.</div>
</div>

<div class="secret-box">📊 <strong>নিকোবর রহস্য ৫:</strong> পরিসংখ্যান হলো noise থেকে signal আলাদা করার শিল্প। Mean আর variance ডেটার চেহারা। Normal distribution প্রকৃতির সবচেয়ে সাধারণ প্যাটার্ন — এটাই batch norm আর weight init-এর ভিত্তি।<br><span class="en">Statistics is the art of separating signal from noise. Mean and variance are data's face. The normal distribution is nature's most common pattern — this is the basis of batch norm and weight initialization.</span></div>`,
  senior:{
    title:"পরিসংখ্যান চিন্তা — ডেটাকে বোঝা",
    body:`<p><strong>Step ১:</strong> যেকোনো ডেটা দেখলে প্রথমে mean আর std বের করো। ডেটার কেন্দ্র আর ছড়ানো কতটা।</p>
<p><strong>Step ২:</strong> Normalization = ডেটাকে mean ০, std ১ এ নিয়ে আসা। সব feature সমান scale-এ।</p>
<p><strong>Step ৩:</strong> Batch Norm = প্রতিটা layer-এর activation stable রাখা। Deep network ছাড়া এটা সম্ভব না।</p>
<p><strong>Step ৪:</strong> Central Limit Theorem = অনেক কারণের যোগফল normal। তাই normal distribution সর্বব্যাপী।</p>
<p><strong>Step ৫:</strong> A/B testing = দুই model-এর পার্থক্য significant কি noise? p-value দেখো।</p>`
  }
});
