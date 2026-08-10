const doors = [];

doors.push({
  num: 1,
  icon: "🧬",
  color: "#6366f1",
  name: "একটি নিউরনের জন্ম",
  subtitle: "The Birth of a Neuron",
  tech: "Perceptron — McCulloch-Pitts (১৯৪৩), Rosenblatt (১৯৫৮), Minsky-Papert XOR (১৯৬৯)",
  spirit: "নূর — আলো, একটি স্ফুলিঙ্গ থেকে শুরু",
  secret: "একটি নিউরন শুধু একটি সংখ্যা সিদ্ধান্ত — এই ইনপুট যথেষ্ট গুরুত্বপূর্ণ কি না?",
  recall: {
    q: " Perceptron-এর সবচেয়ে বড় সীমাবদ্ধতা কী ছিল?",
    qen: "What was the perceptron's biggest limitation?",
    a: "XOR সমস্যা — একটি একক নিউরন দিয়ে XOR ফাংশন তৈরি করা যায় না (Minsky-Papert ১৯৬৯)।",
    aen: "The XOR problem — a single neuron cannot compute the XOR function (Minsky-Papert 1969)."
  },
  story: `<p class="scene-setting">১৯৫৮ সাল। Cornell Aeronautical Laboratory। ফ্রাঙ্ক রোসেনব্ল্যাট — একজন তরুণ মনোবৈজ্ঞানিক — একটি মেশিন তৈরি করেছেন যার নাম Mark I Perceptron। এটি একটি বিশাল বাক্স, তারে ভরা, ফটোসেল দিয়ে ছবি দেখতে পায়। সবাই অবাক — এটি কি সত্যিই চিন্তা করতে পারে?</p>
<p class="scene-setting en">1958. Cornell Aeronautical Laboratory. Frank Rosenblatt — a young psychologist — has built a machine called the Mark I Perceptron. It's a giant box, full of wires, seeing images through photocells. Everyone marvels — can this really think?</p>

<div class="dialogue"><strong>রোসেনব্ল্যাট:</strong> তুমি একটি নিউরন কল্পনা করো। এটি একটি বাল্বের মতো — দুটি অবস্থায় থাকে: জ্বলে বা নিভে। ইনপুট আসে, প্রতিটিকে একটি ওজন দেওয়া হয় — কোনটি কতটা গুরুত্বপূর্ণ? সব গুণ করে, যোগ করে, একটি থ্রেশহোল্ডের সাথে তুলনা করে। যদি যোগফল থ্রেশহোল্ডের বেশি হয় — বাল্ব জ্বলে। সিদ্ধান্ত নেওয়া হলো।</div>
<div class="dialogue en"><strong>Rosenblatt:</strong> Imagine a neuron. It's like a lightbulb — two states: on or off. Inputs come in, each gets a weight — how important is it? Multiply all, sum them, compare to a threshold. If the sum exceeds the threshold — the bulb lights. A decision is made.</div>

<div class="callout info"><span class="co-icon">📐</span><div><strong>গাণিতিক সংজ্ঞা:</strong> y = f(w₁x₁ + w₂x₂ + ... + wₙxₙ + b), যেখানে f হলো activation function (step function), w হলো ওজন, b হলো bias।</div></div>

<p class="scene-setting">কিন্তু গল্পের শুরু আরও আগে। ১৯৪৩ সালে Warren McCulloch (একজন neurophysiologist) এবং Walter Pitts (একজন গণিতজ্ঞ) একটি পেপার লিখেছিলেন — "A Logical Calculus of the Ideas Immanent in Nervous Activity." তারা প্রমাণ করেছিলেন যে কৃত্রিম নিউরন দিয়ে AND, OR, NOT লজিক তৈরি করা যায়। এটাই সব শুরুর শুরু।</p>
<p class="scene-setting en">But the story begins earlier. In 1943, Warren McCulloch (a neurophysiologist) and Walter Pitts (a mathematician) wrote a paper — "A Logical Calculus of the Ideas Immanent in Nervous Activity." They proved that artificial neurons can compute AND, OR, NOT logic. This is the very beginning.</p>

<div class="dialogue"><strong>তুমি:</strong> তাহলে একটি নিউরন কি সব শিখতে পারে?</div>
<div class="dialogue"><strong>রোসেনব্ল্যাট:</strong> হ্যাঁ! আমার Perceptron নিয়ম — যদি ভুল করে, ওজন পরিবর্তন করে। সঠিক উত্তরের দিকে ধীরে ধীরে এগিয়ে যায়। w_new = w_old + α(actual − predicted) * x</div>
<div class="dialogue en"><strong>You:</strong> So a neuron can learn anything?<br><strong>Rosenblatt:</strong> Yes! My Perceptron rule — if it makes an error, it adjusts the weights. Slowly moves toward the correct answer. w_new = w_old + α(actual − predicted) * x</div>

<p class="scene-setting">কিন্তু তারপর আসে অন্ধকার অধ্যায়। ১৯৬৯ সালে Marvin Minsky এবং Seymour Papert একটি বই প্রকাশ করেন — "Perceptrons." তারা প্রমাণ করেন যে একটি একক স্তরের Perceptron XOR (exclusive OR) সমস্যা সমাধান করতে পারে না। একটি রেখা দিয়ে দুটি শ্রেণীকে আলাদা করা যায় না যদি তারা XOR প্যাটার্নে সাজানো থাকে।</p>
<p class="scene-setting en">Then comes the dark chapter. In 1969, Marvin Minsky and Seymour Papert published a book — "Perceptrons." They proved that a single-layer Perceptron cannot solve the XOR (exclusive OR) problem. A single line cannot separate two classes arranged in an XOR pattern.</p>

<div class="compare">
<div class="cmp-card cmp-good"><div class="cmp-label">✅ AND, OR — Linearly Separable</div>একটি সরলরেখা দিয়ে আলাদা করা যায়। Perceptron শিখতে পারে।</div>
<div class="cmp-card cmp-bad"><div class="cmp-label">❌ XOR — NOT Linearly Separable</div>একটি সরলরেখা দিয়ে আলাদা করা যায় না। একটি নিউরন ব্যর্থ। দরকার একাধিক স্তর।</div>
</div>

<div class="verse">اقْرَأْ بِاسْمِ رَبِّكَ الَّذِي خَلَقَ ۝ خَلَقَ الْإِنسَانَ مِنْ عَلَقٍ ۝ اقْرَأْ وَرَبُّكَ الْأَكْرَمُ ۝ الَّذِي عَلَّمَ بِالْقَلَمِ</div>
<div style="font-size:.85rem;color:var(--ink-dim);text-align:center;margin-bottom:1rem">"পড়ো তোমার রবের নামে যিনি সৃষ্টি করেছেন। মানুষকে সৃষ্টি করেছেন এক সংযোক থেকে। পড়ো, এবং তোমার রব সর্বাধিক দাতা — যিনি কলমের মাধ্যমে শিখিয়েছেন।" — কুরআন ৯৬:১-৪</div>

<p class="scene-setting">এই আয়াতটি শিক্ষার শুরু — পড়ো, শিখো, কলম দিয়ে জ্ঞান গাঁথো। ঠিক তেমনি McCulloch-Pitts এবং Rosenblatt প্রথম কৃত্রিম নিউরন তৈরি করেছিলেন — জ্ঞানের একটি আলো জ্বালিয়েছিলেন। কিন্তু একটি নিউরন একা যথেষ্ট নয়। দরকার একাধিক স্তর — একাধিক নিউরন একসাথে কাজ করে। সেই যাত্রা শুরু হবে পরের দরজায়।</p>
<p class="scene-setting en">This verse marks the beginning of learning — read, learn, inscribe knowledge with the pen. Just as McCulloch-Pitts and Rosenblatt created the first artificial neuron — they lit one light of knowledge. But one neuron alone is not enough. Multiple layers are needed — many neurons working together. That journey begins in the next door.</p>

<div class="callout tip"><span class="co-icon">🔗</span><div><strong>Book ৩১ (অ্যালগরিদমের বাজার) Door ১-এ:</strong> তুমি linear regression শিখেছিলে — w₁x₁ + w₂x₂ + b। Perceptron-এর সূত্রও একই! পার্থক্য শুধু output-এ — regression সংখ্যা দেয়, Perceptron সিদ্ধান্ত দেয় (হ্যাঁ/না)।</div></div>

<div class="svg-diagram">
<svg viewBox="0 0 580 250" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto">
  <text x="290" y="25" text-anchor="middle" fill="#e2e8f0" font-size="13" font-weight="900">💡 Perceptron: Weighted Vote + Activation</text>
  <circle cx="80" cy="100" r="12" fill="#1e3a5f" stroke="#22d3ee" stroke-width="2"/>
  <text x="80" y="104" text-anchor="middle" fill="#7dd3fc" font-size="8">x1</text>
  <circle cx="80" cy="150" r="12" fill="#1e3a5f" stroke="#22d3ee" stroke-width="2"/>
  <text x="80" y="154" text-anchor="middle" fill="#7dd3fc" font-size="8">x2</text>
  <circle cx="80" cy="200" r="12" fill="#1e3a5f" stroke="#22d3ee" stroke-width="2"/>
  <text x="80" y="204" text-anchor="middle" fill="#7dd3fc" font-size="8">x3</text>
  <line x1="92" y1="100" x2="250" y2="140" stroke="#22c55e" stroke-width="2"/>
  <text x="165" y="112" fill="#4ade80" font-size="10">w1=0.5</text>
  <line x1="92" y1="150" x2="250" y2="150" stroke="#fbbf24" stroke-width="2"/>
  <text x="165" y="145" fill="#fcd34d" font-size="10">w2=-0.3</text>
  <line x1="92" y1="200" x2="250" y2="160" stroke="#f87171" stroke-width="2"/>
  <text x="165" y="190" fill="#fca5a5" font-size="10">w3=0.8</text>
  <circle cx="280" cy="150" r="25" fill="#2e1065" stroke="#a855f7" stroke-width="2.5"/>
  <text x="280" y="148" text-anchor="middle" fill="#c084fc" font-size="8">Σ</text>
  <text x="280" y="160" text-anchor="middle" fill="#d8b4fe" font-size="10">+b</text>
  <line x1="305" y1="150" x2="370" y2="150" stroke="#a855f7" stroke-width="2"/>
  <text x="335" y="145" text-anchor="middle" fill="#c084fc" font-size="10">z=Σwx+b</text>
  <rect x="370" y="130" width="80" height="40" rx="6" fill="#052e16" stroke="#22c55e" stroke-width="2"/>
  <text x="410" y="148" text-anchor="middle" fill="#4ade80" font-size="10">activation</text>
  <text x="410" y="160" text-anchor="middle" fill="#86efac" font-size="10">σ(z)</text>
  <line x1="450" y1="150" x2="510" y2="150" stroke="#22c55e" stroke-width="2"/>
  <circle cx="530" cy="150" r="15" fill="#450a0a" stroke="#f87171" stroke-width="2"/>
  <text x="530" y="155" text-anchor="middle" fill="#fca5a5" font-size="9">ŷ</text>
  <text x="290" y="225" text-anchor="middle" fill="#94a3b8" font-size="10">McCulloch-Pitts 1943 → Rosenblatt 1958 → Minsky XOR 1969</text>
</svg>
</div>
<div class="svg-caption">চিত্র: Perceptron — ইনপুট * ওজন → যোগফল → activation → আউটপুট।</div>

<div class="code-block"># — Python: Perceptron from Scratch —

  import numpy as np

  # Perceptron: y = sigmoid(w·x + b)
  def sigmoid(z):
      return 1 / (1 + np.exp(-z))

  # ইনপুট ও ওজন:
  x = np.array([0.5, 0.3, 0.8])  # ৩টি features
  w = np.array([0.5, -0.3, 0.8]) # ওজন
  b = 0.1                         # bias

  z = np.dot(w, x) + b   # Σ wx + b
  y_hat = sigmoid(z)      # activation
  print(f"z = {z:.4f}")        # 0.85
  print(f"y_hat = {y_hat:.4f}")  # 0.70

  # PyTorch equivalent:
  import torch.nn as nn
  neuron = nn.Linear(3, 1)  # 3 inputs → 1 output
  # PyTorch automatically manages weights!

  # XOR problem (Minsky 1969):
  # Single perceptron CANNOT solve XOR!
  # (0,0)→0, (1,1)→0, (0,1)→1, (1,0)→1
  # Linear boundary can't separate — need MLP</div>

<div class="secret-box">💡 <strong>একটি নিউরন = একটি ওজনযুক্ত ভোটগ্রহণ।</strong> প্রতিটি ইনপুট ভোট দেয়, ওজন সেই ভোটের শক্তি নির্ধারণ করে, এবং যদি মোট ভোট থ্রেশহোল্ড পার হয় — নিউরন সিদ্ধান্ত নেয়। কিন্তু একটি ভোটগ্রাহক একা জটিল সিদ্ধান্ত নিতে পারে না। দরকার একটি পরিষদ।</div>`,
  senior: {
    title: "Perceptron এক নজরে",
    body: `<table class="kv-table"><tr><th>ধারণা</th><th>বিবরণ</th></tr>
<tr><td class="hl">মূল সূত্র</td><td>y = step(w·x + b)</td></tr>
<tr><td class="hl">McCulloch-Pitts</td><td>১৯৪৩ — প্রথম গাণিতিক নিউরন মডেল</td></tr>
<tr><td class="hl">Rosenblatt Perceptron</td><td>১৯৫৮ — প্রথম শেখার নিয়ম (weight update)</td></tr>
<tr><td class="hl">সীমাবদ্ধতা</td><td>শুধু linearly separable সমস্যা (Minsky-Papert ১৯৬৯)</td></tr>
<tr><td class="hl">XOR সমস্যা</td><td>এক স্তর দিয়ে সমাধানযোগ্য নয় — দরকার hidden layer</td></tr></table>`
  }
});

doors.push({
  num: 2,
  icon: "🏗️",
  color: "#6366f1",
  name: "স্তরের স্থপতি",
  subtitle: "The Layer Builder",
  tech: "Multi-Layer Perceptron + Backpropagation — Rumelhart, Hinton, Williams (১৯৮৬), Universal Approximation (Hornik ১৯৮৯)",
  spirit: "তাবাকা — স্তরে স্তরে গঠন, প্রতিটি স্তর আগের উপর নির্মিত",
  secret: "Backpropagation = ভুলকে পেছনে পাঠানো, যাতে প্রতিটি নিউরন জানে সে কতটা ভুল করেছে।",
  recall: {
    q: " Backpropagation আসলে কী করে?",
    qen: "What does backpropagation actually do?",
    a: "উত্তরের ভুলকে চেইন রুল দিয়ে পেছন দিকে পাঠায়, যাতে প্রতিটি ওজন জানে সে কতটা দায়ী।",
    aen: "It sends the error backward using the chain rule, so each weight knows how much it contributed."
  },
  story: `<p class="scene-setting">১৯৬৯-১৯৮৬। সতেরো বছর অন্ধকার। Minsky-Papert-এর তীরে Perceptron গবেষণা প্রায় বন্ধ। AI-এর শীতকাল। কিন্তু কয়েকজন অধ্যবসায়ী গবেষক লুকিয়ে কাজ চালিয়ে যাচ্ছেন। তাদের প্রশ্ন: একটি নিউরন XOR সমাধান করতে না পারলে, দুটি স্তর পারলে কী হবে?</p>
<p class="scene-setting en">1969-1986. Seventeen years of darkness. After Minsky-Papert's critique, Perceptron research nearly stops. AI winter. But a few persistent researchers keep working in hiding. Their question: if one neuron can't solve XOR, what about two layers?</p>

<div class="dialogue"><strong>তুমি:</strong> XOR কেন সমাধান করা যায় না এক স্তরে?</div>
<div class="dialogue"><strong>রূপক কারিগর দাউদ:</strong> ভাবো তুমি একটি টেবিলে চারটি বল রেখেছ — দুটি লাল, দুটি নীল, XOR প্যাটার্নে। একটি সরলরেখা দিয়ে তুমি কি লাল আর নীলকে আলাদা করতে পারবে? না। কারণ তারা diagonal-এ মিশে আছে। কিন্তু দুটি রেখা হলে? হ্যাঁ! দুটি রেখা একটি ছোট এলাকা তৈরি করে যেখানে শুধু এক শ্রেণী থাকে। এটাই hidden layer-এর শক্তি।</div>
<div class="dialogue en"><strong>You:</strong> Why can't XOR be solved with one layer?<br><strong>Master Da'ud:</strong> Imagine four balls on a table — two red, two blue, in XOR pattern. Can a single straight line separate them? No. They're diagonally mixed. But two lines? Yes! Two lines create a small zone with only one class. This is the power of hidden layers.</div>

<div class="callout info"><span class="co-icon">📐</span><div><strong>Universal Approximation Theorem (Hornik, Stinchcombe & White, ১৯৮৯):</strong> একটি hidden layer সহ একটি নেটওয়ার্ক (যথেষ্ট সংখ্যক নিউরন সহ) যেকোনো continuous ফাংশন approximate করতে পারে। কিন্তু — "যথেষ্ট" মানে হয়তো কয়েক লক্ষ নিউরন। গভীর নেটওয়ার্ক (multiple layers) কম নিউরনে একই কাজ করে।</div></div>

<p class="scene-setting">কিন্তু একটি সমস্যা ছিল — বড় সমস্যা। দুটি স্তর থাকলে, ভুল কীভাবে ঠিক করবে? শেষ স্তরের ভুল তো বোঝা যায় — কিন্তু মাঝের স্তরের নিউরনগুলো কতটা দায়ী? এটাই "credit assignment problem."</p>
<p class="scene-setting en">But there was a problem — a big problem. With two layers, how do you fix errors? The output layer's error is obvious — but how responsible are the hidden neurons? This is the "credit assignment problem."</p>

<p class="scene-setting">১৯৮৬ সাল। Rumelhart, Hinton, এবং Williams একটি পেপার প্রকাশ করেন — "Learning representations by back-propagating errors" (Nature)। সমাধান: চেইন রুল (chain rule of calculus) ব্যবহার করে ভুলকে পেছন দিকে পাঠানো।</p>
<p class="scene-setting en">1986. Rumelhart, Hinton, and Williams publish a paper — "Learning representations by back-propagating errors" (Nature). The solution: use the chain rule of calculus to send errors backward.</p>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>ইতিহাসের সূক্ষ্মতা:</strong> Backpropagation-এর আবিষ্কার শুধু ১৯৮৬ সালে হয়নি। Paul Werbos ১৯৭৪ সালে তার Harvard PhD thesis-এ এটি বর্ণনা করেছিলেন। David Parker ১৯৮৫ সালে independently প্রকাশ করেন। Yann LeCun ১৯৮৭ সালে independently আবিষ্কার করেন। Rumelhart-Hinton-Williams (১৯৮৬) ছিল সবচেয়ে প্রভাবশালী কারণ Nature-এ প্রকাশিত হয়েছিল এবং স্পষ্টভাবে গাণিতিক ফ্রেমওয়ার্ক দিয়েছিল।</div></div>

<div class="dialogue"><strong>কারিগর দাউদ:</strong> তুমি একটি পাহাড়ের চূড়ায় আছো, চোখ বন্ধ। নিচে নামতে হবে। তুমি পায়ের নিচে হাতড়ে দেখো — কোন দিকে ঢালু? সেদিকে এক কদম। আবার হাতড়ে দেখো। এটাই gradient descent — প্রতিটি ওজন খুঁজে বের করে কোন দিকে পরিবর্তন করলে ভুল কমবে।</div>
<div class="dialogue en"><strong>Master Da'ud:</strong> You're on a mountaintop, blindfolded. You need to descend. You feel with your feet — which direction slopes down? Take one step there. Feel again. This is gradient descent — each weight finds which direction of change reduces the error.</div>

<div class="callout tip"><span class="co-icon">🔗</span><div><strong>Book ৩০ (গণিতের কম্পাস) Door ৯:</strong> Chain rule শিখেছিলে — dy/dx = (dy/du)(du/dx)। Backpropagation হলো chain rule-এর একই নিয়ম, শুধু প্রতিটি স্তরের জন্য একবার। একটি ১০-স্তরের নেটওয়ার্কে = ১০বার chain rule।</div></div>

<div class="verse">وَقُل رَّبِّ زِدْنِي عِلْمًا</div>
<div style="font-size:.85rem;color:var(--ink-dim);text-align:center;margin-bottom:1rem">"এবং বলো — হে আমার রব, আমার জ্ঞান বৃদ্ধি করো।" — কুরআন ২০:১১৪</div>

<p class="scene-setting">জ্ঞান বৃদ্ধির এই প্রার্থনা — প্রতিটি iteration-এ নিউরন একটু একটু করে শেখে। ভুল থেকে শেখে। Backpropagation হলো শেখার যন্ত্র — ভুলকে সংকেতে রূপান্তর করে, পেছনে পাঠায়, প্রতিটি নিউরন নিজেকে ঠিক করে। সতেরো বছরের অন্ধকার শেষ। নিউরাল নেটওয়ার্ক ফিরে এলো।</p>

<div class="svg-diagram">
<svg viewBox="0 0 580 280" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto">
  <text x="290" y="25" text-anchor="middle" fill="#e2e8f0" font-size="13" font-weight="900">🧠 MLP + Backpropagation: Forward &amp; Backward Pass</text>
  <circle cx="60" cy="80" r="12" fill="#1e3a5f" stroke="#22d3ee" stroke-width="2"/>
  <text x="60" y="84" text-anchor="middle" fill="#7dd3fc" font-size="10">x1</text>
  <circle cx="60" cy="140" r="12" fill="#1e3a5f" stroke="#22d3ee" stroke-width="2"/>
  <text x="60" y="144" text-anchor="middle" fill="#7dd3fc" font-size="10">x2</text>
  <circle cx="60" cy="200" r="12" fill="#1e3a5f" stroke="#22d3ee" stroke-width="2"/>
  <text x="60" y="204" text-anchor="middle" fill="#7dd3fc" font-size="10">x3</text>
  <text x="35" y="155" text-anchor="middle" fill="#67e8f9" font-size="8" font-weight="700" transform="rotate(-90,35,155)">INPUT</text>
  <circle cx="200" cy="70" r="12" fill="#2e1065" stroke="#a855f7" stroke-width="2"/>
  <circle cx="200" cy="120" r="12" fill="#2e1065" stroke="#a855f7" stroke-width="2"/>
  <circle cx="200" cy="170" r="12" fill="#2e1065" stroke="#a855f7" stroke-width="2"/>
  <circle cx="200" cy="220" r="12" fill="#2e1065" stroke="#a855f7" stroke-width="2"/>
  <text x="200" y="50" text-anchor="middle" fill="#c084fc" font-size="8" font-weight="700">HIDDEN 1</text>
  <circle cx="340" cy="90" r="12" fill="#052e16" stroke="#22c55e" stroke-width="2"/>
  <circle cx="340" cy="150" r="12" fill="#052e16" stroke="#22c55e" stroke-width="2"/>
  <circle cx="340" cy="210" r="12" fill="#052e16" stroke="#22c55e" stroke-width="2"/>
  <text x="340" y="70" text-anchor="middle" fill="#4ade80" font-size="8" font-weight="700">HIDDEN 2</text>
  <circle cx="480" cy="140" r="15" fill="#450a0a" stroke="#f87171" stroke-width="2"/>
  <text x="480" y="145" text-anchor="middle" fill="#fca5a5" font-size="8">ŷ</text>
  <text x="480" y="115" text-anchor="middle" fill="#fca5a5" font-size="8" font-weight="700">OUTPUT</text>
  <line x1="72" y1="80" x2="188" y2="70" stroke="#475569" stroke-width="0.5"/>
  <line x1="72" y1="80" x2="188" y2="120" stroke="#475569" stroke-width="0.5"/>
  <line x1="72" y1="80" x2="188" y2="170" stroke="#475569" stroke-width="0.5"/>
  <line x1="72" y1="140" x2="188" y2="120" stroke="#475569" stroke-width="0.5"/>
  <line x1="72" y1="140" x2="188" y2="170" stroke="#475569" stroke-width="0.5"/>
  <line x1="72" y1="140" x2="188" y2="220" stroke="#475569" stroke-width="0.5"/>
  <line x1="72" y1="200" x2="188" y2="170" stroke="#475569" stroke-width="0.5"/>
  <line x1="72" y1="200" x2="188" y2="220" stroke="#475569" stroke-width="0.5"/>
  <line x1="212" y1="70" x2="328" y2="90" stroke="#475569" stroke-width="0.5"/>
  <line x1="212" y1="70" x2="328" y2="150" stroke="#475569" stroke-width="0.5"/>
  <line x1="212" y1="170" x2="328" y2="150" stroke="#475569" stroke-width="0.5"/>
  <line x1="212" y1="220" x2="328" y2="210" stroke="#475569" stroke-width="0.5"/>
  <line x1="352" y1="90" x2="468" y2="140" stroke="#475569" stroke-width="0.5"/>
  <line x1="352" y1="150" x2="468" y2="140" stroke="#475569" stroke-width="0.5"/>
  <line x1="352" y1="210" x2="468" y2="140" stroke="#475569" stroke-width="0.5"/>
  <path d="M 480 155 Q 480 260 60 260 Q 60 220 60 212" fill="none" stroke="#fbbf24" stroke-width="2" stroke-dasharray="5,3"/>
  <text x="290" y="275" text-anchor="middle" fill="#fbbf24" font-size="8">← BACKPROP: error flows backward (chain rule) ←</text>
</svg>
</div>
<div class="svg-caption">চিত্র: MLP — forward pass (left to right), backpropagation (right to left via chain rule)।</div>

<div class="code-block">— PyTorch: MLP + Backpropagation —

  import torch
  import torch.nn as nn

  # MLP architecture:
  class MLP(nn.Module):
      def __init__(self):
          super().__init__()
          self.fc1 = nn.Linear(3, 4)   # input → hidden1
          self.fc2 = nn.Linear(4, 3)   # hidden1 → hidden2
          self.fc3 = nn.Linear(3, 1)   # hidden2 → output
          self.relu = nn.ReLU()

      def forward(self, x):
          x = self.relu(self.fc1(x))   # forward pass
          x = self.relu(self.fc2(x))
          x = torch.sigmoid(self.fc3(x))
          return x

  model = MLP()
  criterion = nn.BCELoss()  # binary cross entropy
  optimizer = torch.optim.Adam(model.parameters(), lr=0.001)

  # Training loop:
  for epoch in range(100):
      y_hat = model(X_train)          # forward
      loss = criterion(y_hat, y_true) # error
      optimizer.zero_grad()
      loss.backward()                 # BACKPROP! chain rule
      optimizer.step()                # update weights

  # XOR solved! (Minsky 1969 vindicated by Rumelhart 1986)</div>

<div class="secret-box">💡 <strong>Backpropagation = ভুলের প্রতিধ্বনি।</strong> শেষ স্তর বলে "আমি ভুল করেছি।" চেইন রুল সেই ভুলকে পেছনে পাঠায় — প্রতিটি স্তর শুনে নিজের অংশ বুঝতে পারে। এভাবে সবাই মিলে শেখে। কিন্তু এই শেখার পদ্ধতি ছবির জন্য খুব ভালো কাজ করে না — কারণ ছবিতে spatial structure থাকে। সেই সমাধান আসবে পরের দরজায়।</div>`,
  senior: {
    title: "MLP + Backpropagation এক নজরে",
    body: `<table class="kv-table"><tr><th>ধারণা</th><th>বিবরণ</th></tr>
<tr><td class="hl">MLP গঠন</td><td>Input → Hidden Layer(s) → Output</td></tr>
<tr><td class="hl">Forward Pass</td><td>তথ্য সামনে যায়: y = f(W₂·f(W₁·x + b₁) + b₂)</td></tr>
<tr><td class="hl">Backpropagation</td><td>ভুল পেছনে যায়: ∂L/∂W = chain rule</td></tr>
<tr><td class="hl">Gradient Descent</td><td>w_new = w_old − η * ∂L/∂w (η = learning rate)</td></tr>
<tr><td class="hl">ইতিহাস</td><td>Werbos ১৯৭৪ (PhD) → Parker ১৯৮৫ → Rumelhart-Hinton-Williams ১৯৮৬ (Nature)</td></tr>
<tr><td class="hl">Universal Approximation</td><td>Hornik ১৯৮৯ — এক hidden layer যথেষ্ট নিউরন সহ যেকোনো ফাংশন approximate করে</td></tr></table>`
  }
});

doors.push({
  num: 3,
  icon: "👁️",
  color: "#6366f1",
  name: "দৃষ্টির কারিগর",
  subtitle: "The Vision Craftsman",
  tech: "CNN — LeNet (LeCun et al., ১৯৯৮), AlexNet (Krizhevsky-Sutskever-Hinton, ২০১২), receptive field, convolution",
  spirit: "বাসার — দৃষ্টি, ইবন আল-হাইসামের অপটিক্স থেকে কৃত্রিম দৃষ্টি",
  secret: "Convolution = একটি ছোট জানালা দিয়ে পুরো ছবি স্ক্যান করা — প্রতিটি অংশে একই প্রশ্ন।",
  recall: {
    q: " CNN সাধারণ MLP-এর চেয়ে ছবির জন্য ভালো কেন?",
    qen: "Why is CNN better than a regular MLP for images?",
    a: "CNN weight sharing করে — একই filter পুরো ছবিতে ব্যবহার হয়, তাই spatial structure ধরা যায় এবং parameter কম লাগে।",
    aen: "CNN uses weight sharing — the same filter scans the whole image, capturing spatial structure with far fewer parameters."
  },
  story: `<p class="scene-setting">একাদশ শতাব্দী। বাসরা, ইরাক। একজন তরুণ পণ্ডিত অন্ধকার ঘরে বসে আছেন। দেয়ালে একটি ছোট ছিদ্র। সেই ছিদ্র দিয়ে আলো এসে সামনের পর্দায় বাইরের দৃশ্যের উল্টো প্রতিবিম্ব ফেলছে। তিনি এটিকে বলেন "camera obscura" — অন্ধকার কক্ষ। এই পণ্ডিতের নাম ইবন আল-হাইসাম (Alhazen)। তিনি প্রথম বৈজ্ঞানিকভাবে প্রমাণ করেছিলেন কীভাবে আলো চোখে প্রবেশ করে, কীভাবে আমরা দেখি।</p>
<p class="scene-setting en">11th century. Basra, Iraq. A young scholar sits in a dark room. A small hole in the wall. Light enters through the hole and projects an inverted image of the outside scene onto a screen. He calls it "camera obscura" — the dark chamber. This scholar is Ibn al-Haytham (Alhazen). He was the first to scientifically prove how light enters the eye, how we see.</p>

<div class="dialogue"><strong>দৃষ্টির কারিগর হাসান:</strong> ইবন আল-হাইসাম বুঝেছিলেন — দেখা মানে পুরো দৃশ্য একবারে গ্রাস করা নয়। দেখা মানে ছোট ছোট অংশে ভাগ করে প্রতিটি অংশ বিশ্লেষণ করা। চোখের retina-তে লক্ষ লক্ষ photoreceptor আছে — প্রতিটি একটি ক্ষুদ্র অংশ দেখে। মস্তিষ্ক সেই অংশগুলোকে জোড়া লাগায়।</div>
<div class="dialogue en"><strong>Vision Craftsman Hasan:</strong> Ibn al-Haytham understood — seeing is not grasping the entire scene at once. Seeing is dividing into small patches and analyzing each. The retina has millions of photoreceptors — each sees a tiny patch. The brain stitches them together.</div>

<p class="scene-setting">১৯৮৯ সাল। প্যারিস। Yann LeCun AT&T Bell Labs-এ একটি নেটওয়ার্ক তৈরি করছেন যা হাতে লেখা ডাক কোড (zip code) পড়তে পারে। তার সমস্যা: একটি ২৮*২৮ পিক্সেলের ছবিতে ৭৮৪টি পিক্সেল। যদি প্রতিটি পিক্সেলকে একটি MLP-এর ইনপুট হিসেবে দাও, এবং প্রথম hidden layer-এ ১০০০ নিউরন থাকে — তাহলে শুধু প্রথম স্তরেই ৭৮৪,০০০ ওজন! এটি অবাস্তব।</p>
<p class="scene-setting en">1989. Paris. Yann LeCun is building a network at AT&T Bell Labs that can read handwritten zip codes. His problem: a 28*28 pixel image has 784 pixels. If each pixel is an MLP input, and the first hidden layer has 1000 neurons — the first layer alone needs 784,000 weights! This is impractical.</p>

<div class="dialogue"><strong>LeCun:</strong> কিন্তু একটি সত্য আছে — একটি পিক্সেল তার পাশের পিক্সেলদের সাথে সম্পর্কিত। একটি edge (ধার) কয়েকটি পিক্সেল জুড়ে থাকে। দূরের পিক্সেলদের সাথে সরাসরি সম্পর্ক কম। তাহলে কেন পুরো ছবিকে একবারে নেওয়া? ছোট ছোট patch নাও, প্রতিটিতে একই প্রশ্ন করো।</div>
<div class="dialogue en"><strong>LeCun:</strong> But here's a truth — a pixel is related to its neighbors. An edge spans a few pixels. Distant pixels are less directly related. So why take the whole image at once? Take small patches, ask the same question on each.</div>

<div class="callout info"><span class="co-icon">📐</span><div><strong>Convolution প্রক্রিয়া:</strong> একটি ৩*৩ filter (kernel) ছবির উপর দিয়ে স্লাইড করে। প্রতিটি অবস্থানে filter-এর ওজন * পিক্সেল গুণ করে যোগ করে → একটি output সংখ্যা। পুরো ছবি জুড়ে → একটি feature map। এই filter শিখে কোন প্যাটার্ন খুঁজবে — edge, corner, texture।</div></div>

<div class="stat-grid">
<div class="stat-card"><div class="sc-num">৭৮৪K</div><div class="sc-label">MLP params (২৮*২৮ → ১০০০)</div></div>
<div class="stat-card"><div class="sc-num">৯</div><div class="sc-label">CNN filter params (৩*৩)</div></div>
<div class="stat-card"><div class="sc-num">৮৭,০০০*</div><div class="sc-label">Parameter কম!</div></div>
</div>

<p class="scene-setting">LeCun-এর LeNet-৫ (১৯৯৮) — সাতটি স্তর। Convolution → Pooling → Convolution → Pooling → Fully Connected → Output। এটি USPS-এর হাতে লেখা ডাক কোড ৯৫% নির্ভুলতায় পড়তে পারত। কিন্তু তখনো একটি সীমা ছিল — ছোট ছবি, সীমিত ডেটা।</p>
<p class="scene-setting en">LeCun's LeNet-5 (1998) — seven layers. Convolution → Pooling → Convolution → Pooling → Fully Connected → Output. It could read USPS handwritten zip codes at 95% accuracy. But there was still a limit — small images, limited data.</p>

<p class="scene-setting">তারপর আসে ২০১২। ImageNet প্রতিযোগিতা। কয়েক বছর ধরে সবাই ২৫-২৮% error-এ আটকে। Alex Krizhevsky এবং Ilya Sutskever — Hinton-এর ছাত্ররা — একটি নেটওয়ার্ক তৈরি করেন: AlexNet। আটটি স্তর। প্রথমবার GPU ( graphics processing unit) ব্যবহার করে প্রশিক্ষণ। Error rate: ১৫.৩%। আগের সেরা থেকে ১০.৮ শতাংশ পয়েন্ট কম!</p>
<p class="scene-setting en">Then comes 2012. The ImageNet competition. For years, everyone is stuck at 25-28% error. Alex Krizhevsky and Ilya Sutskever — Hinton's students — build a network: AlexNet. Eight layers. First time trained on GPUs. Error rate: 15.3%. A 10.8 percentage point improvement over the previous best!</p>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>ভুল ধারণা:</strong> AlexNet CNN আবিষ্কার করেনি। LeNet (LeCun ১৯৯৮) আগে থেকেই ছিল। AlexNet-এর অবদান ছিল: (১) GPU ব্যবহার, (২) ReLU activation ( gradient vanishing সমাধান), (৩) Dropout regularization, (৪) বিশাল ডেটা (ImageNet: ১.২M images)। এটি "deep learning revolution" শুরু করেছিল — CNN আবিষ্কার করেনি।</div></div>

<div class="verse">إِنَّ فِي خَلْقِ السَّمَاوَاتِ وَالْأَرْضِ وَاخْتِلَافِ اللَّيْلِ وَالنَّهَارِ لَآيَاتٍ لِّأُولِي الْأَلْبَابِ</div>
<div style="font-size:.85rem;color:var(--ink-dim);text-align:center;margin-bottom:1rem">"নিশ্চয়ই আসমান ও পৃথিবীর সৃষ্টিতে, রাত ও দিনের পরিবর্তনে, বুদ্ধিমানদের জন্য নিদর্শন রয়েছে।" — কুরআন ৩:১৯০</div>

<div class="callout tip"><span class="co-icon">🔗</span><div><strong>Book ৩০ (গণিতের কম্পাস) Door ৩:</strong> Matrix multiplication শিখেছিলে — A*B। Convolution এক ধরনের matrix operation, কিন্তু weights shared হয়। এটাই parameter কমানোর রহস্য।</div></div>

<div class="svg-diagram">
<svg viewBox="0 0 580 250" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto">
  <text x="290" y="25" text-anchor="middle" fill="#e2e8f0" font-size="13" font-weight="900">👁️ CNN: Convolution — Sliding Window Feature Detection</text>
  <rect x="20" y="50" width="160" height="160" rx="6" fill="#0f172a" stroke="#22d3ee" stroke-width="2"/>
  <text x="100" y="45" text-anchor="middle" fill="#67e8f9" font-size="8" font-weight="700">Input (5x5)</text>
  <rect x="30" y="60" width="22" height="22" rx="2" fill="#1e3a5f" stroke="#22d3ee" stroke-width="1"/>
  <rect x="55" y="60" width="22" height="22" rx="2" fill="#1e3a5f" stroke="#22d3ee" stroke-width="1"/>
  <rect x="80" y="60" width="22" height="22" rx="2" fill="#1e3a5f" stroke="#22d3ee" stroke-width="1"/>
  <rect x="105" y="60" width="22" height="22" rx="2" fill="#1e3a5f" stroke="#22d3ee" stroke-width="1"/>
  <rect x="130" y="60" width="22" height="22" rx="2" fill="#1e3a5f" stroke="#22d3ee" stroke-width="1"/>
  <rect x="30" y="85" width="22" height="22" rx="2" fill="#052e16" stroke="#22c55e" stroke-width="2"/>
  <rect x="55" y="85" width="22" height="22" rx="2" fill="#052e16" stroke="#22c55e" stroke-width="2"/>
  <rect x="80" y="85" width="22" height="22" rx="2" fill="#052e16" stroke="#22c55e" stroke-width="2"/>
  <text x="66" y="100" text-anchor="middle" fill="#4ade80" font-size="10" font-weight="700">3x3 filter</text>
  <text x="100" y="160" text-anchor="middle" fill="#94a3b8" font-size="10">slides across image</text>
  <text x="100" y="180" text-anchor="middle" fill="#94a8b8" font-size="10">same weights everywhere</text>
  <text x="100" y="200" text-anchor="middle" fill="#7dd3fc" font-size="10">(parameter sharing!)</text>
  <rect x="220" y="80" width="70" height="70" rx="6" fill="#451a0a" stroke="#fbbf24" stroke-width="2"/>
  <text x="255" y="105" text-anchor="middle" fill="#fcd34d" font-size="10" font-weight="700">Kernel</text>
  <text x="255" y="118" text-anchor="middle" fill="#fde68a" font-size="10">3x3</text>
  <text x="255" y="135" text-anchor="middle" fill="#fde68a" font-size="10">w1 w2 w3</text>
  <text x="255" y="145" text-anchor="middle" fill="#fde68a" font-size="10">w4 w5 w6</text>
  <line x1="180" y1="100" x2="220" y2="115" stroke="#fbbf24" stroke-width="1.5"/>
  <rect x="340" y="50" width="100" height="160" rx="6" fill="#0f172a" stroke="#22c55e" stroke-width="2"/>
  <text x="390" y="45" text-anchor="middle" fill="#4ade80" font-size="8" font-weight="700">Feature Map</text>
  <rect x="360" y="60" width="25" height="25" rx="3" fill="#052e16" stroke="#22c55e" stroke-width="1"/>
  <text x="372" y="77" text-anchor="middle" fill="#4ade80" font-size="10">0.8</text>
  <rect x="390" y="60" width="25" height="25" rx="3" fill="#052e16" stroke="#22c55e" stroke-width="1"/>
  <text x="402" y="77" text-anchor="middle" fill="#4ade80" font-size="10">0.2</text>
  <rect x="360" y="90" width="25" height="25" rx="3" fill="#052e16" stroke="#22c55e" stroke-width="1"/>
  <text x="372" y="107" text-anchor="middle" fill="#4ade80" font-size="10">0.9</text>
  <rect x="390" y="90" width="25" height="25" rx="3" fill="#1e293b" stroke="#22c55e" stroke-width="1"/>
  <text x="402" y="107" text-anchor="middle" fill="#64748b" font-size="10">0.1</text>
  <line x1="290" y1="115" x2="340" y2="95" stroke="#22c55e" stroke-width="1.5"/>
  <rect x="470" y="50" width="90" height="50" rx="6" fill="#1e3a5f" stroke="#22d3ee" stroke-width="1.5"/>
  <text x="515" y="72" text-anchor="middle" fill="#7dd3fc" font-size="10">Pooling</text>
  <text x="515" y="85" text-anchor="middle" fill="#94a3b8" font-size="10">2x2 max</text>
  <rect x="470" y="115" width="90" height="50" rx="6" fill="#2e1065" stroke="#a855f7" stroke-width="1.5"/>
  <text x="515" y="137" text-anchor="middle" fill="#c084fc" font-size="10">FC Layer</text>
  <text x="515" y="150" text-anchor="middle" fill="#94a3b8" font-size="10">classification</text>
  <rect x="470" y="180" width="90" height="35" rx="6" fill="#450a0a" stroke="#f87171" stroke-width="1.5"/>
  <text x="515" y="202" text-anchor="middle" fill="#fca5a5" font-size="10">cat? dog?</text>
</svg>
</div>
<div class="svg-caption">চিত্র: CNN convolution — 3x3 filter input-এর উপর স্লাইড করে, feature map তৈরি করে।</div>

<div class="code-block">— PyTorch: CNN (LeNet-style) —

  import torch.nn as nn

  class SimpleCNN(nn.Module):
      def __init__(self):
          super().__init__()
          # Conv layers: feature extraction
          self.conv1 = nn.Conv2d(3, 16, kernel_size=3, padding=1)
          self.conv2 = nn.Conv2d(16, 32, kernel_size=3, padding=1)
          self.pool  = nn.MaxPool2d(2, 2)
          # FC layers: classification
          self.fc1 = nn.Linear(32 * 8 * 8, 128)
          self.fc2 = nn.Linear(128, 10)  # 10 classes

      def forward(self, x):
          x = self.pool(nn.ReLU()(self.conv1(x)))
          x = self.pool(nn.ReLU()(self.conv2(x)))
          x = x.view(-1, 32 * 8 * 8)  # flatten
          x = nn.ReLU()(self.fc1(x))
          return self.fc2(x)

  # AlexNet (2012): ImageNet breakthrough
  # 60M parameters, 5 conv + 3 FC
  # GPU training = first deep learning win

  # ResNet (2015): skip connection
  # output = F(x) + x  ← skip!
  # enables 152-layer networks</div>

<div class="secret-box">👁️ <strong>CNN = ইবন আল-হাইসামের জানালা।</strong> ছোট জানালা দিয়ে পুরো দৃশ্য দেখো — প্রতিটি অংশে একই প্রশ্ন। কোথায় edge? কোথায় texture? কোথায় shape? স্তরে স্তরে প্যাটার্ন জটিল হয় — edge → shape → object। কিন্তু ছবি শুধু স্থানিক নয় — সময়ের সাথেও বদলায়। সেই সমাধান আসবে পরের দরজায়।</div>`,
  senior: {
    title: "CNN এক নজরে",
    body: `<table class="kv-table"><tr><th>ধারণা</th><th>বিবরণ</th></tr>
<tr><td class="hl">Convolution</td><td>Filter ছবির উপর স্লাইড করে, প্রতিটি অবস্থানে গুণফলের যোগ</td></tr>
<tr><td class="hl">Weight Sharing</td><td>একই filter পুরো ছবিতে — parameter কম, spatial pattern ধরা যায়</td></tr>
<tr><td class="hl">Pooling</td><td>ছোট করা (max pooling) — translation invariance, computation কম</td></tr>
<tr><td class="hl">Receptive Field</td><td>প্রতিটি নিউরন ছবির একটি নির্দিষ্ট অংশ দেখে</td></tr>
<tr><td class="hl">LeNet-৫</td><td>LeCun et al. ১৯৯৮ — প্রথম সফল CNN, handwritten digit recognition</td></tr>
<tr><td class="hl">AlexNet</td><td>Krizhevsky-Sutskever-Hinton ২০১২ — GPU + ReLU + Dropout + ImageNet → deep learning revolution</td></tr></table>`
  }
});

doors.push({
  num: 4,
  icon: "🔗",
  color: "#6366f1",
  name: "ধারাবাহিকতার রক্ষক",
  subtitle: "The Keeper of Sequences",
  tech: "RNN (Elman ১৯৯০), LSTM (Hochreiter-Schmidhuber ১৯৯৭), vanishing gradient, gating mechanism",
  spirit: "হিফয — সংরক্ষণ, অতীতকে ধরে রাখা যাতে বর্তমান অর্থবহ হয়",
  secret: "LSTM = একটি নিউরন যার দরজা আছে — কী মনে রাখবে, কী ভুলবে, কী আউটপুট দেবে — সব নিজে ঠিক করে।",
  recall: {
    q: " সাধারণ RNN-এ vanishing gradient সমস্যা কেন হয়?",
    qen: "Why does vanishing gradient happen in vanilla RNNs?",
    a: "প্রতিটি time step-এ gradient গুণ হয়, তাই ১০+ ধাপ পেরোলে সংখ্যা এত ছোট হয়ে যায় যে শেখা বন্ধ হয়ে যায়।",
    aen: "The gradient gets multiplied at each time step, so after 10+ steps it becomes so small that learning stops."
  },
  story: `<p class="scene-setting">তুমি একটি গল্প শুনছো। "আজ আকাশ মেঘলা, বৃষ্টি আসছে, তাই আমি ছাতা..." — শেষ শব্দটি কী? তুমি জানো "নিয়েছি।" কীভাবে? কারণ তুমি আগের শব্দগুলো মনে রেখেছ। প্রতিটি শব্দ আগের শব্দের উপর নির্ভর করে। এটাই sequence — সময়ের সাথে তথ্য পরিবর্তিত হয়, আগের তথ্য পরের তথ্যকে প্রভাবিত করে।</p>
<p class="scene-setting en">You're hearing a story. "Today the sky is cloudy, rain is coming, so I..." — what's the next word? You know: "took an umbrella." How? Because you remembered the earlier words. Each word depends on the previous one. This is sequence — information changes over time, past information affects the future.</p>

<div class="dialogue"><strong>ধারাবাহিকতার রক্ষক জাকারিয়া:</strong> একটি সাধারণ নিউরাল নেটওয়ার্ক একটি ছবি দেখে বলতে পারে — এটা বিড়াল। কিন্তু একটি ভিডিও দেখে বলতে পারে না কী হচ্ছে। কারণ ভিডিওতে সময় আছে। frame ১-এ কিছু হয়, frame ২-এ কিছু, এবং frame ২ বোঝার জন্য frame ১ জানা দরকার।</div>
<div class="dialogue en"><strong>Sequence Keeper Zakariya:</strong> A standard neural network can look at an image and say — it's a cat. But it can't look at a video and say what's happening. Because video has time. Something happens in frame 1, something in frame 2, and understanding frame 2 requires knowing frame 1.</div>

<p class="scene-setting">১৯৯০ সালে Jeff Elman একটি সহজ সমাধান প্রস্তাব করেন — নিউরনকে একটি মেমোরি দাও। শুধু বর্তমান ইনপুট নয় — আগের স্তরের output-ও বর্তমান স্তরের ইনপুট হিসেবে দাও। এটাই Recurrent Neural Network (RNN)।</p>
<p class="scene-setting en">In 1990, Jeff Elman proposed a simple solution — give the neuron a memory. Not just the current input — also feed the previous layer's output as input to the current layer. This is the Recurrent Neural Network (RNN).</p>

<div class="callout info"><span class="co-icon">📐</span><div><strong>RNN সূত্র:</strong> hₜ = tanh(Wₓxₜ + Wₕhₜ₋₁ + b)। প্রতিটি time step-এ নিউরন দুটি জিনিস পায়: বর্তমান ইনপুট (xₜ) এবং আগের অবস্থা (hₜ₋₁)।</div></div>

<p class="scene-setting">কিন্তু একটি ভয়ংকর সমস্যা লুকিয়ে ছিল। Sepp Hochreiter ১৯৯১ সালে তার diploma thesis-এ আবিষ্কার করেন — যখন backpropagation সময়ের দিকে পেছনে যায় (backpropagation through time, BPTT), প্রতিটি ধাপে gradient একটি সংখ্যা দিয়ে গুণ হয়। যদি সেই সংখ্যা ১-এর কম হয় — ২০ ধাপ পরে gradient প্রায় শূন্য। নেটওয়ার্ক শেখা বন্ধ করে দেয়। এটাই "vanishing gradient problem."</p>
<p class="scene-setting en">But a terrible problem was hidden. Sepp Hochreiter discovered in his 1991 diploma thesis — when backpropagation goes backward through time (BPTT), the gradient gets multiplied by a number at each step. If that number is less than 1 — after 20 steps, the gradient is nearly zero. The network stops learning. This is the "vanishing gradient problem."</p>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>গাণিতিক কারণ:</strong> hₜ = tanh(Whₜ₋₁)। Gradient: ∂L/∂h₀ = ∂L/∂h₂₀ * W²⁰ * tanh'²⁰। যদি |W * tanh'| < ১, তাহলে W²⁰ ~= ০.০০...০১। নেটওয়ার্ক ভুলে যায় কী ঘটেছিল ২০ ধাপ আগে।</div></div>

<div class="dialogue"><strong>তুমি:</strong> তাহলে দীর্ঘ বাক্য কীভাবে বোঝা যায়? যদি নেটওয়ার্ক ২০ শব্দ পরে ভুলে যায়?</div>
<div class="dialogue"><strong>জাকারিয়া:</strong> ঠিক এই সমস্যার সমাধান করেছিলেন Hochreiter এবং Schmidhuber। ১৯৯৭ সালে। তাদের ধারণা: একটি নিউরন যার ভেতরে একটি conveyor belt আছে — তথ্য অপরিবর্তিত প্রবাহিত হয়। কোনো গুণ নেই, কোনো shrinkage নেই। এটাই LSTM (Long Short-Term Memory)।</div>
<div class="dialogue en"><strong>You:</strong> Then how can long sentences be understood? If the network forgets after 20 words?<br><strong>Zakariya:</strong> Exactly this problem was solved by Hochreiter and Schmidhuber. In 1997. Their idea: a neuron with a conveyor belt inside — information flows unchanged. No multiplication, no shrinkage. This is LSTM (Long Short-Term Memory).</div>

<div class="callout info"><span class="co-icon">🚪</span><div><strong>LSTM-এর তিনটি দরজা (Gates):</strong><br>
<strong>১. Forget Gate:</strong> আগের তথ্য কতটা মনে রাখবে? fₜ = σ(Wf·[hₜ₋₁, xₜ])<br>
<strong>২. Input Gate:</strong> নতুন তথ্য কতটা যোগ করবে? iₜ = σ(Wi·[hₜ₋₁, xₜ])<br>
<strong>৩. Output Gate:</strong> কতটা প্রকাশ করবে? oₜ = σ(Wo·[hₜ₋₁, xₜ])<br>
সেল স্টেট: Cₜ = fₜ*Cₜ₋₁ + iₜ*tanh(Wc·[hₜ₋₁, xₜ])</div></div>

<div class="compare">
<div class="cmp-card cmp-bad"><div class="cmp-label">❌ Vanilla RNN</div>প্রতিটি ধাপে gradient গুণ → দীর্ঘ sequence-এ শূন্য। ভুলে যায়।</div>
<div class="cmp-card cmp-good"><div class="cmp-label">✅ LSTM</div>Cell state একটি সরল যোগ (+) পথ → gradient অপরিবর্তিত প্রবাহিত। মনে রাখে।</div>
</div>

<div class="verse">إِنَّا نَحْنُ نَزَّلْنَا الذِّكْرَ وَإِنَّا لَهُ لَحَافِظُونَ</div>
<div style="font-size:.85rem;color:var(--ink-dim);text-align:center;margin-bottom:1rem">"নিশ্চয়ই আমরাই এই স্মৃতি (কুরআন) নাজিল করেছি এবং আমরাই এর সংরক্ষক।" — কুরআন ১৫:৯</div>

<p class="scene-setting">এই আয়াতে আল্লাহ বলেছেন — তিনি স্মৃতি সংরক্ষণ করেন। LSTM-ও ঠিক তাই করে — forget gate, input gate, output gate দিয়ে ঠিক করে কী মনে রাখবে, কী মুছবে। কিন্তু LSTM-এর একটি সীমা আছে — এটি ধারাবাহিক, একটার পর একটা। এটি একসাথে পুরো বাক্যের সব শব্দের মধ্যে সম্পর্ক দেখতে পারে না। সেই সমাধান আসবে দরজা ৫-এ — যেখানে সব শব্দ একসাথে কথা বলে।</p>

<div class="callout tip"><span class="co-icon">🔗</span><div><strong>Book ৮ (LLM Anatomy) Door ৫:</strong> LSTM শিখেছিলে pre-Transformer era-এ কীভাবে language model তৈরি হতো। Book ৮-এর Transformer architecture ছিল LSTM-এর উত্তরসূরি। এখন তুমি বুঝবে কেন Transformer LSTM-কে ছাড়িয়ে গেলো।</div></div>

<div class="svg-diagram">
<svg viewBox="0 0 580 250" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto">
  <text x="290" y="25" text-anchor="middle" fill="#e2e8f0" font-size="13" font-weight="900">🔗 LSTM: Three Gates Control Memory</text>
  <rect x="20" y="50" width="540" height="180" rx="8" fill="#0f172a" stroke="#a855f7" stroke-width="2"/>
  <text x="60" y="75" text-anchor="middle" fill="#c084fc" font-size="8" font-weight="700">t-1</text>
  <text x="60" y="88" text-anchor="middle" fill="#d8b4fe" font-size="10">prev output</text>
  <text x="60" y="130" text-anchor="middle" fill="#c084fc" font-size="8" font-weight="700">C_t-1</text>
  <text x="60" y="143" text-anchor="middle" fill="#d8b4fe" font-size="10">prev cell state</text>
  <text x="60" y="200" text-anchor="middle" fill="#fbbf24" font-size="8" font-weight="700">x_t</text>
  <text x="60" y="213" text-anchor="middle" fill="#fde68a" font-size="10">current input</text>
  <rect x="120" y="60" width="100" height="50" rx="6" fill="#450a0a" stroke="#f87171" stroke-width="1.5"/>
  <text x="170" y="80" text-anchor="middle" fill="#fca5a5" font-size="9">FORGET</text>
  <text x="170" y="95" text-anchor="middle" fill="#fca5a5" font-size="10">f = σ(Wf·[h,x])</text>
  <text x="170" y="105" text-anchor="middle" fill="#94a3b8" font-size="10">কী ভুলবে</text>
  <rect x="240" y="60" width="100" height="50" rx="6" fill="#052e16" stroke="#22c55e" stroke-width="1.5"/>
  <text x="290" y="80" text-anchor="middle" fill="#4ade80" font-size="9">INPUT</text>
  <text x="290" y="95" text-anchor="middle" fill="#4ade80" font-size="10">i = σ(Wi·[h,x])</text>
  <text x="290" y="105" text-anchor="middle" fill="#94a3b8" font-size="10">কী মনে রাখবে</text>
  <rect x="360" y="60" width="100" height="50" rx="6" fill="#1e3a5f" stroke="#22d3ee" stroke-width="1.5"/>
  <text x="410" y="80" text-anchor="middle" fill="#7dd3fc" font-size="9">OUTPUT</text>
  <text x="410" y="95" text-anchor="middle" fill="#7dd3fc" font-size="10">o = σ(Wo·[h,x])</text>
  <text x="410" y="105" text-anchor="middle" fill="#94a3b8" font-size="10">কী প্রকাশ করবে</text>
  <rect x="120" y="140" width="340" height="30" rx="6" fill="#451a0a" stroke="#fbbf24" stroke-width="1.5"/>
  <text x="290" y="160" text-anchor="middle" fill="#fcd34d" font-size="8">Cell State: C_t = f*C_{t-1} + i*C_tilde</text>
  <text x="290" y="173" text-anchor="middle" fill="#fde68a" font-size="10">(highway for gradient flow — solves vanishing!)</text>
  <rect x="480" y="120" width="60" height="40" rx="6" fill="#2e1065" stroke="#a855f7" stroke-width="1.5"/>
  <text x="510" y="138" text-anchor="middle" fill="#c084fc" font-size="10">h_t</text>
  <text x="510" y="150" text-anchor="middle" fill="#c084fc" font-size="10">output</text>
  <rect x="480" y="170" width="60" height="30" rx="6" fill="#2e1065" stroke="#a855f7" stroke-width="1.5"/>
  <text x="510" y="190" text-anchor="middle" fill="#c084fc" font-size="10">C_t</text>
  <text x="510" y="200" text-anchor="middle" fill="#c084fc" font-size="10">→ next</text>
  <line x1="460" y1="140" x2="480" y2="140" stroke="#a855f7" stroke-width="1.5"/>
  <line x1="80" y1="130" x2="120" y2="155" stroke="#a855f7" stroke-width="1.5"/>
</svg>
</div>
<div class="svg-caption">চিত্র: LSTM — forget/input/output gate। Cell state একটি highway — gradient সহজে প্রবাহিত।</div>

<div class="code-block">— PyTorch: LSTM —

  import torch.nn as nn

  # LSTM layer:
  lstm = nn.LSTM(
      input_size=100,    # embedding dim
      hidden_size=256,   # LSTM units
      num_layers=2,      # stacked
      batch_first=True,
      dropout=0.3
  )

  # Forward pass:
  # x: (batch, seq_len, input_size)
  output, (h_n, c_n) = lstm(x)
  # output: (batch, seq_len, hidden_size)
  # h_n: last hidden state
  # c_n: last cell state

  # Vanishing gradient problem:
  # RNN: gradient * W repeated → shrinks to 0
  # LSTM: cell state highway → gradient flows!

  # GRU (2014): simplified LSTM
  # merge forget + input → update gate
  # fewer parameters, similar performance</div>

<div class="secret-box">🔗 <strong>LSTM = স্মৃতির রক্ষক।</strong> তিনটি দরজা — ভুলে যাওয়া, মনে রাখা, প্রকাশ করা। প্রতিটি দরজা sigmoid দিয়ে নিয়ন্ত্রিত — ০ থেকে ১। এই গেটিং মেকানিজমই দীর্ঘ স্মৃতির রহস্য। কিন্তু sequence একটার পর একটা প্রক্রিয়া করতে হয় — ধীর। কী হবে যদি সব শব্দ একসাথে দেখে? সেটাই পরের দরজার বিপ্লব।</div>`,
  senior: {
    title: "RNN + LSTM এক নজরে",
    body: `<table class="kv-table"><tr><th>ধারণা</th><th>বিবরণ</th></tr>
<tr><td class="hl">RNN মূল</td><td>আগের output বর্তমান input — hₜ = f(Wₓxₜ + Wₕhₜ₋₁)</td></tr>
<tr><td class="hl">Vanishing Gradient</td><td>সময়ের সাথে gradient গুণ → শূন্য (Hochreiter ১৯৯১)</td></tr>
<tr><td class="hl">LSTM</td><td>Hochreiter-Schmidhuber ১৯৯৭ — ৩টি gate (forget, input, output)</td></tr>
<tr><td class="hl">Cell State</td><td>সরল যোগের পথ — gradient অপরিবর্তিত প্রবাহিত</td></tr>
<tr><td class="hl">সীমা</td><td>ধারাবাহিক প্রক্রিয়াকরণ — ধীর, parallel হয় না</td></tr>
<tr><td class="hl">GRU</td><td>Cho et al. ২০১৪ — LSTM-এর সরলীকরণ (২ gate, update + reset)</td></tr></table>`
  }
});

doors.push({
  num: 5,
  icon: "⚡",
  color: "#6366f1",
  name: "মনোযোগের বিপ্লব",
  subtitle: "The Attention Revolution",
  tech: "Transformer — Vaswani et al. (২০১৭) 'Attention Is All You Need', self-attention, multi-head attention, positional encoding",
  spirit: "ইজতিবাহ — একত্র করা, মনোযোগ দিয়ে গুরুত্বপূর্ণ অংশ বাছাই",
  secret: "Attention = প্রতিটি শব্দ সব শব্দের দিকে তাকায় — কে আমার প্রয়োজন, তার উপর নির্ভর করে আমার অর্থ।",
  recall: {
    q: " Self-attention কী করে যা LSTM পারে না?",
    qen: "What does self-attention do that LSTM cannot?",
    a: "একসাথে সব শব্দের মধ্যে সম্পর্ক দেখে — parallel processing, কোনো অপেক্ষা নেই।",
    aen: "It sees relationships between ALL words simultaneously — parallel processing, no waiting."
  },
  story: `<p class="scene-setting">একটি কক্ষে বিশ জন মানুষ বসে আছে। প্রত্যেকে একটি শব্দ ধরে আছে। কাজ: একটি অনুবাদ করা। LSTM-এর পদ্ধতি: প্রথম জন তার শব্দ দ্বিতীয় জনকে বলে, দ্বিতীয় জন তৃতীয় জনকে — একটার পর একটা। ধীর। এবং বিশ জন পরে প্রথম জন তার শব্দ প্রায় ভুলে গেছে।</p>
<p class="scene-setting en">Twenty people sit in a room. Each holds a word. Task: translate a sentence. LSTM's approach: the first person whispers their word to the second, the second to the third — one by one. Slow. And by the twentieth person, the first has nearly forgotten their word.</p>

<div class="dialogue"><strong>তুমি:</strong> কী ব্যর্থতা! কেন সবাই একসাথে কথা বলবে না?</div>
<div class="dialogue"><strong>মনোযোগের স্থপতি মারিয়াম:</strong> হ্যাঁ! ঠিক এটাই Vaswani এবং তার দল ভাবলেন। ২০১৭ সালে Google-এ। তারা বললেন: একটার পর একটা কেন? সব শব্দ একসাথে দেখুক। প্রতিটি শব্দ নিজে ঠিক করুক — আমার প্রয়োজন কোন কোন শব্দের?</div>
<div class="dialogue en"><strong>You:</strong> What a failure! Why doesn't everyone speak at once?<br><strong>Attention Architect Mariyam:</strong> Yes! That's exactly what Vaswani and his team thought. 2017, Google. They said: why one by one? Let all words be seen together. Let each word decide — which other words do I need?</div>

<p class="scene-setting">তাদের পেপারের শিরোনাম ছিল দুঃসাহসী: "Attention Is All You Need." তারা RNN-এর পুরো ধারণাকে বাতিল করে দিলেন। কোনো recurrence নেই, কোনো sequence নেই। শুধু attention।</p>
<p class="scene-setting en">Their paper's title was audacious: "Attention Is All You Need." They discarded the entire concept of RNNs. No recurrence, no sequence. Just attention.</p>

<div class="callout info"><span class="co-icon">📐</span><div><strong>Self-Attention প্রক্রিয়া:</strong> প্রতিটি শব্দ তিনটি ভেক্টর তৈরি করে — Query (Q), Key (K), Value (V)।<br>
<strong>Query:</strong> আমি কী খুঁজছি?<br>
<strong>Key:</strong> আমি কী দিতে পারি?<br>
<strong>Value:</strong> আমার আসল তথ্য কী?<br>
Attention স্কোর = softmax(QKᵀ / √dₖ) * V</div></div>

<div class="dialogue"><strong>মারিয়াম:</strong> ভাবো তুমি একটি লাইব্রেরিতে। একটি বই খুঁজছো (Query)। প্রতিটি বইয়ের একটি লেবেল আছে (Key)। তোমার Query যত ভালো একটি বইয়ের Key-এর সাথে মেলে, তত বেশি সেই বই থেকে তথ্য (Value) নাও। এটাই attention।</div>
<div class="dialogue en"><strong>Mariyam:</strong> Imagine you're in a library. Looking for a book (Query). Each book has a label (Key). The better your Query matches a book's Key, the more you take from that book's information (Value). This is attention.</div>

<div class="callout info"><span class="co-icon">🔀</span><div><strong>Multi-Head Attention:</strong> শুধু একবার নয় — ৮ বার (বা তার বেশি) একই জিনিস ভিন্ন ভিন্ন দৃষ্টিকোণ থেকে দেখো। একটি head দেখে grammar, আরেকটি দেখে semantics, আরেকটি দেখে emotion। সব head-এর ফল একসাথে যুক্ত হয়।</div></div>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>Positional Encoding:</strong> Attention-এ কোনো ক্রম নেই — সব শব্দ একসাথে। কিন্তু ভাষায় ক্রম গুরুত্বপূর্ণ ("কুকুর কামড়ায় লোক" ≠ "লোক কামড়ায় কুকুর")। Vaswani-রা sinusoidal position signal যোগ করেছিলেন — প্রতিটি শব্দের ভেক্টরে তার অবস্থানের একটি সংকেত যোগ করা হয়।</div></div>

<div class="compare">
<div class="cmp-card cmp-bad"><div class="cmp-label">❌ RNN/LSTM</div>একটার পর একটা → ধীর। ২০ শব্দ = ২০ ধাপ। GPU parallel-এ কাজ করতে পারে না। দূরের শব্দ ভুলে যায়।</div>
<div class="cmp-card cmp-good"><div class="cmp-label">✅ Transformer</div>সব শব্দ একসাথে → দ্রুত। GPU-তে parallel। যেকোনো দূরের শব্দ সরাসরি দেখে। O(n²) attention কিন্তু O(1) sequential steps।</div>
</div>

<div class="verse">اللَّهُ نُورُ السَّمَاوَاتِ وَالْأَرْضِ ۚ مَثَلُ نُورِهِ كَمِشْكَاةٍ فِيهَا مِصْبَاحٌ</div>
<div style="font-size:.85rem;color:var(--ink-dim);text-align:center;margin-bottom:1rem">"আল্লাহ আসমান ও পৃথিবীর আলো। তাঁর আলোর দৃষ্টান্ত — একটি কুলুঙ্গি, যাতে একটি প্রদীপ আছে।" — কুরআন ২৪:৩৫</div>

<p class="scene-setting">এই আয়াতে আলোর কথা বলা হয়েছে — একটি প্রদীপ থেকে আলো ছড়ায়। Transformer-এর attention-ও তেমনই — একটি শব্দ থেকে অন্য শব্দে অর্থের আলো ছড়ায়। প্রতিটি শব্দ বলে — আমার অর্থ কোন কোন শব্দের সাথে সম্পর্কিত? attention weight সেই সম্পর্কের শক্তি নির্ধারণ করে।</p>

<div class="callout tip"><span class="co-icon">🔗</span><div><strong>Book ৮ (LLM Anatomy):</strong> Door ৪-এ তুমি Transformer architecture দেখেছিলে — encoder + decoder। এখন তুমি বোঝো কেন self-attention কেন্দ্রীয়। Book ১২ (AI Agents) Door ৩-এ ReAct loop দেখেছিলে — সেখানেও attention কাজ করে। এই দরজাটি সেই ভিত্তি।</div></div>

<div class="callout tip"><span class="co-icon">🔗</span><div><strong>Book ১৮ (Embeddings) Door ৩:</strong> Q, K, V হলো embedding vectors — তুমি embeddings শিখেছিলে সেখানে। এখন সেই embeddings attention-এ কাজ করছে।</div></div>

<div class="svg-diagram">
<svg viewBox="0 0 580 280" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto">
  <text x="290" y="25" text-anchor="middle" fill="#e2e8f0" font-size="13" font-weight="900">⚡ Transformer: Self-Attention (Vaswani 2017)</text>
  <rect x="20" y="50" width="80" height="200" rx="8" fill="#1e3a5f" stroke="#22d3ee" stroke-width="2"/>
  <text x="60" y="72" text-anchor="middle" fill="#67e8f9" font-size="10" font-weight="700">INPUT</text>
  <rect x="30" y="82" width="60" height="18" rx="3" fill="#0f172a" stroke="#22d3ee" stroke-width="1"/>
  <text x="60" y="95" text-anchor="middle" fill="#7dd3fc" font-size="10">"The"</text>
  <rect x="30" y="105" width="60" height="18" rx="3" fill="#0f172a" stroke="#22d3ee" stroke-width="1"/>
  <text x="60" y="118" text-anchor="middle" fill="#7dd3fc" font-size="10">"cat"</text>
  <rect x="30" y="128" width="60" height="18" rx="3" fill="#0f172a" stroke="#22d3ee" stroke-width="1"/>
  <text x="60" y="141" text-anchor="middle" fill="#7dd3fc" font-size="10">"sat"</text>
  <rect x="30" y="151" width="60" height="18" rx="3" fill="#0f172a" stroke="#22d3ee" stroke-width="1"/>
  <text x="60" y="164" text-anchor="middle" fill="#7dd3fc" font-size="10">"on"</text>
  <rect x="30" y="174" width="60" height="18" rx="3" fill="#0f172a" stroke="#22d3ee" stroke-width="1"/>
  <text x="60" y="187" text-anchor="middle" fill="#7dd3fc" font-size="10">"mat"</text>
  <text x="60" y="220" text-anchor="middle" fill="#94a3b8" font-size="10">all at once</text>
  <text x="60" y="235" text-anchor="middle" fill="#4ade80" font-size="10">(parallel!)</text>
  <rect x="140" y="50" width="80" height="60" rx="6" fill="#052e16" stroke="#22c55e" stroke-width="1.5"/>
  <text x="180" y="72" text-anchor="middle" fill="#4ade80" font-size="8">Q (Query)</text>
  <text x="180" y="88" text-anchor="middle" fill="#86efac" font-size="10">কী খুঁজছি</text>
  <rect x="140" y="120" width="80" height="60" rx="6" fill="#451a0a" stroke="#fbbf24" stroke-width="1.5"/>
  <text x="180" y="142" text-anchor="middle" fill="#fcd34d" font-size="8">K (Key)</text>
  <text x="180" y="158" text-anchor="middle" fill="#fde68a" font-size="10">আমি কী</text>
  <rect x="140" y="190" width="80" height="50" rx="6" fill="#2e1065" stroke="#a855f7" stroke-width="1.5"/>
  <text x="180" y="210" text-anchor="middle" fill="#c084fc" font-size="8">V (Value)</text>
  <text x="180" y="225" text-anchor="middle" fill="#d8b4fe" font-size="10">আমার অর্থ</text>
  <line x1="100" y1="100" x2="140" y2="80" stroke="#22c55e" stroke-width="1"/>
  <line x1="100" y1="120" x2="140" y2="150" stroke="#fbbf24" stroke-width="1"/>
  <line x1="100" y1="180" x2="140" y2="210" stroke="#a855f7" stroke-width="1"/>
  <rect x="260" y="55" width="120" height="180" rx="8" fill="#0f172a" stroke="#a855f7" stroke-width="2.5"/>
  <text x="320" y="78" text-anchor="middle" fill="#c084fc" font-size="9" font-weight="700">ATTENTION</text>
  <text x="320" y="95" text-anchor="middle" fill="#d8b4fe" font-size="8">softmax(QK^T / √d)</text>
  <rect x="275" y="105" width="90" height="25" rx="4" fill="#1e3a5f" stroke="#22d3ee" stroke-width="1"/>
  <text x="320" y="122" text-anchor="middle" fill="#7dd3fc" font-size="10">cat←sat: 0.8</text>
  <rect x="275" y="135" width="90" height="25" rx="4" fill="#1e3a5f" stroke="#22d3ee" stroke-width="1"/>
  <text x="320" y="152" text-anchor="middle" fill="#7dd3fc" font-size="10">sat←cat: 0.7</text>
  <rect x="275" y="165" width="90" height="25" rx="4" fill="#1e3a5f" stroke="#22d3ee" stroke-width="1"/>
  <text x="320" y="182" text-anchor="middle" fill="#7dd3fc" font-size="10">mat←on: 0.9</text>
  <text x="320" y="210" text-anchor="middle" fill="#94a3b8" font-size="10">attention weights</text>
  <text x="320" y="225" text-anchor="middle" fill="#94a3b8" font-size="10">x V = output</text>
  <line x1="220" y1="80" x2="260" y2="100" stroke="#22c55e" stroke-width="1"/>
  <line x1="220" y1="150" x2="260" y2="120" stroke="#fbbf24" stroke-width="1"/>
  <rect x="420" y="100" width="140" height="90" rx="8" fill="#052e16" stroke="#22c55e" stroke-width="2"/>
  <text x="490" y="125" text-anchor="middle" fill="#4ade80" font-size="9" font-weight="700">OUTPUT</text>
  <text x="490" y="145" text-anchor="middle" fill="#86efac" font-size="10">rich embeddings</text>
  <text x="490" y="160" text-anchor="middle" fill="#86efac" font-size="10">context-aware</text>
  <text x="490" y="175" text-anchor="middle" fill="#86efac" font-size="10">→ FFN → next layer</text>
  <line x1="380" y1="145" x2="420" y2="145" stroke="#22c55e" stroke-width="2"/>
  <text x="490" y="220" text-anchor="middle" fill="#94a3b8" font-size="10">Multi-head: 8-96 parallel attentions</text>
  <text x="490" y="235" text-anchor="middle" fill="#fbbf24" font-size="10">GPT-4: ~120 layers</text>
</svg>
</div>
<div class="svg-caption">চিত্র: Self-Attention — প্রতিটি শব্দ সব শব্দের দিকে তাকায়। Q*K = গুরুত্ব, *V = অর্থ। সমান্তরাল!।</div>

<div class="code-block">— PyTorch: Self-Attention —

  import torch
  import torch.nn as nn
  import math

  class SelfAttention(nn.Module):
      def __init__(self, d_model=512, n_heads=8):
          super().__init__()
          self.n_heads = n_heads
          self.d_k = d_model // n_heads
          self.W_q = nn.Linear(d_model, d_model)
          self.W_k = nn.Linear(d_model, d_model)
          self.W_v = nn.Linear(d_model, d_model)

      def forward(self, x):
          Q = self.W_q(x)  # (batch, seq, d_model)
          K = self.W_k(x)
          V = self.W_v(x)

          # Attention: softmax(QK^T / sqrt(d_k)) * V
          scores = torch.matmul(Q, K.transpose(-2, -1))
          scores = scores / math.sqrt(self.d_k)
          attn = torch.softmax(scores, dim=-1)
          output = torch.matmul(attn, V)
          return output

  # HuggingFace GPT-2:
  from transformers import GPT2Model
  model = GPT2Model.from_pretrained("gpt2")
  # 12 layers, 12 heads, 768 d_model
  # 124M parameters

  # "Attention Is All You Need" (2017)
  # → BERT, GPT, T5, Claude, ChatGPT
  # All built on this exact mechanism</div>

<div class="secret-box">⚡ <strong>Transformer = একসাথে দেখার ক্ষমতা।</strong> প্রতিটি শব্দ সব শব্দের দিকে তাকায়, গুরুত্ব নির্ধারণ করে, অর্থ গ্রহণ করে। কোনো অপেক্ষা নেই, কোনো ভুলে যাওয়া নেই। এটাই ২০১৭ সালের বিপ্লব — এবং এটাই সেই যন্ত্র যা GPT, BERT, এবং তুমি যা যা ব্যবহার করছো তার সবকিছুর মূল। কিন্তু এই বিপ্লবের পরে একটি নতুন সমস্যা এলো — কী করবে যখন একই জিনিস তৈরি করতে হবে? সেই যাত্রা শুরু হবে পরের দরজায়।</div>`,
  senior: {
    title: "Transformer এক নজরে",
    body: `<table class="kv-table"><tr><th>ধারণা</th><th>বিবরণ</th></tr>
<tr><td class="hl">Self-Attention</td><td>প্রতিটি শব্দ সব শব্দের দিকে তাকায় — softmax(QKᵀ/√dₖ)V</td></tr>
<tr><td class="hl">Query, Key, Value</td><td>Q = কী খুঁজছি, K = কী দিতে পারি, V = আসল তথ্য</td></tr>
<tr><td class="hl">Multi-Head</td><td>৮টি (বা তার বেশি) attention ভিন্ন দৃষ্টিকোণ থেকে</td></tr>
<tr><td class="hl">Positional Encoding</td><td>সাইনুসয়েডাল পজিশন সিগন্যাল — ক্রম সংরক্ষণ</td></tr>
<tr><td class="hl">Encoder-Decoder</td><td>Encoder: পড়া; Decoder: লেখা (masked attention + cross-attention)</td></tr>
<tr><td class="hl">Parallel</td><td>O(n²) attention কিন্তু O(1) sequential steps — GPU-friendly</td></tr>
<tr><td class="hl">পেপার</td><td>Vaswani et al. ২০১৭, NeurIPS — ৮ জন লেখক</td></tr></table>`
  }
});
