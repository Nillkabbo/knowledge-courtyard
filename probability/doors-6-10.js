doors.push({
  num: 6,
  icon: "🎰",
  color: "#8b5cf6",
  name: "পাশার ক্যাসিনো",
  subtitle: "The Dice Casino",
  tech: "Combinatorial Probability — permutations, combinations, inclusion-exclusion, conditional probability, Bayes application",
  spirit: "কদর — নির্ধারিত পরিমাণ, সম্ভাবনার হিসাব",
  secret: "Probability = favorable / total। P(two 6s) = ১/৩৬। Inclusion-exclusion: P(A∪B) = P(A)+P(B)-P(A∩B)। পাশার ক্যাসিনোতে সব গোনা যায় — কারণ outcomes সসীম।",
  recall: {
    q: " P(A∪B) ও P(A∩B)-এর সূত্র কী?",
    qen: "What are the formulas for P(A∪B) and P(A∩B)?",
    a: "P(A∪B) = P(A)+P(B)-P(A∩B)। Independent: P(A∩B) = P(A)·P(B)। Conditional: P(A|B) = P(A∩B)/P(B)।",
    aen: "P(A∪B) = P(A)+P(B)-P(A∩B). Independent: P(A∩B) = P(A)·P(B). Conditional: P(A|B) = P(A∩B)/P(B)."
  },
  story: `<p class="scene-setting">ওমর (Door ৫) তোমাকে ঝুঁকির সীমা শিখিয়েছেন। এখন সম্ভাবনা গোনা শিখো। একটি ক্যাসিনোতে — পাশা, তাস, রুলেট। প্রতিটি খেলা গাণিতিক। দুটি পাশা মারলে যোগফল ৭ আসার সম্ভাবনা? গোনো — (১,৬), (২,৫), (৩,৪), (৪,৩), (৫,২), (৬,১) = ৬টি। মোট ৩৬। P = ৬/৩৬ = ১/৬। সবচেয়ে সম্ভাব্য যোগফল — ৭!</p>
<p class="scene-setting en">Umar (Door 5) taught you risk boundaries. Now learn to count probability. In a casino — dice, cards, roulette. Each game is mathematical. Two dice, probability of sum 7? Count — (1,6), (2,5), (3,4), (4,3), (5,2), (6,1) = 6. Total 36. P = 6/36 = 1/6. The most likely sum — 7!</p>

<div class="dialogue"><strong>ক্যাসিনো-গণক সাফওয়ান:</strong> তিনটি নিয়ম মনে রাখো। ১. P(event) = favorable/total। ২. Inclusion-exclusion: P(A OR B) = P(A)+P(B)-P(A AND B)। ৩. Conditional: P(A|B) = P(A∩B)/P(B) — B ঘটেছে জেনে A। Independent হলে P(A∩B) = P(A)·P(B)। পাশা independent — একটি পাশা অন্যটিকে প্রভাবিত করে না। কিন্তু তাস নয় — একটি তাস বাদ গেলে পরেরটির সম্ভাবনা বদলায়!</div>
<div class="dialogue en"><strong>Casino Counter Safwan:</strong> Remember three rules. 1. P(event) = favorable/total. 2. Inclusion-exclusion: P(A OR B) = P(A)+P(B)-P(A AND B). 3. Conditional: P(A|B) = P(A∩B)/P(B). Independent means P(A∩B) = P(A)·P(B). Dice are independent — one die doesn't affect another. But cards are not — one card removed changes the next probability!</div>

<div class="code-block">— Python: Combinatorial Probability —

  from itertools import product
  from fractions import Fraction

  # দুটি পাশা — সব 36 outcomes:
  outcomes = list(product(range(1, 7), repeat=2))
  print(f"Total: {len(outcomes)}")  # 36

  # P(sum = 7)?
  favorable = [(a, b) for a, b in outcomes if a + b == 7]
  print(f"P(sum=7) = {Fraction(len(favorable), 36)}")  # 1/6

  # P(sum >= 10)?
  high = [(a, b) for a, b in outcomes if a + b >= 10]
  print(f"P(sum>=10) = {Fraction(len(high), 36)}")  # 1/6

  # Inclusion-exclusion:
  # P(A: sum>=10 OR B: doubles)
  A = {(a,b) for a,b in outcomes if a+b >= 10}
  B = {(a,b) for a,b in outcomes if a == b}
  union = len(A | B) / 36
  formula = (len(A) + len(B) - len(A & B)) / 36
  print(f"P(A∪B) = {union:.4f} = {formula:.4f}")  # match!

  # Conditional: P(A | first die = 3)
  given_3 = [(a, b) for a, b in outcomes if a == 3]
  A_given = [(a, b) for a, b in given_3 if a + b >= 7]
  print(f"P(sum>=7 | first=3) = {len(A_given)}/{len(given_3)}")
  # = 3/6 = 1/2</div>

<div class="callout info"><span class="co-icon">🎰</span><div><strong>সম্ভাবনার নিয়ম:</strong><br>
<strong>P(E) = favorable/total:</strong> সসীম sample space<br>
<strong>P(A∪B) = P(A)+P(B)-P(A∩B):</strong> inclusion-exclusion<br>
<strong>P(A∩B) = P(A)·P(B):</strong> independent events<br>
<strong>P(A|B) = P(A∩B)/P(B):</strong> conditional<br>
<strong>Monty Hall:</strong> switch করো — 2/3 win!</div></div>

<div class="verse">إِنَّا كُلَّ شَيْءٍ خَلَقْنَاهُ بِقَدَرٍ</div>
<div style="font-size:.85rem;color:var(--ink-dim);text-align:center;margin-bottom:1rem">"নিশ্চয়ই আমরা প্রতিটি কিছু সুনির্দিষ্ট পরিমাণে সৃষ্টি করেছি।" — কুরআন ৫৪:৪৯</div>

<p class="scene-setting">কদর — নির্ধারিত পরিমাণ। পাশার প্রতিটি ফল একটি নির্দিষ্ট সম্ভাবনায় আসে — এটাই কদর। গাণিতিকভাবে গোনা যায়, হিসাব করা যায়। ক্যাসিনো এই হিসাবের উপর নির্মিত — house edge নামে একটি সসীম সুবিধা ক্যাসিনোর। দীর্ঘে ক্যাসিনো জেতে — কারণ সম্ভাবনা তার পক্ষে।</p>
<p class="scene-setting en">Qadar — determined measure. Each die outcome comes with a specific probability — this is qadar. It can be counted, calculated. Casinos are built on this math — house edge is a finite advantage for the casino. In the long run, the casino wins — because probability favors it.</p>

<div class="callout tip"><span class="co-icon">🔗</span><div><strong>Book ৪৮ (Discrete Math) Door ৫ (Combinatorics):</strong> P(n,k), C(n,k) — এখানে probability-তে প্রয়োগ! Book ৩৩ (Loom of Reason) Door ৫ (Bayesian): conditional probability = Bayes।</div></div>

<div class="secret-box">🎰 <strong>Probability = favorable/total। Inclusion-exclusion। Conditional।</strong> কিন্তু সব outcomes সসীম নয় — কিছু ঘটনা অসংখ্য। কীভাবে গণনা করবে? সেই উত্তর — Poisson। পরের দরজায়।</div>`,
  senior: {
    title: "Combinatorial Probability এক নজরে",
    body: `<table class="kv-table"><tr><th>নিয়ম</th><th>সূত্র</th></tr>
<tr><td class="hl">P(E)</td><td>favorable / total</td></tr>
<tr><td class="hl">P(A∪B)</td><td>P(A)+P(B)-P(A∩B)</td></tr>
<tr><td class="hl">P(A∩B) independent</td><td>P(A)·P(B)</td></tr>
<tr><td class="hl">P(A|B)</td><td>P(A∩B)/P(B)</td></tr>
<tr><td class="hl">Monty Hall</td><td>switch = 2/3 win</td></tr></table>`
  }
});

doors.push({
  num: 7,
  icon: "🔢",
  color: "#8b5cf6",
  name: "ক্ষুদ্র গণনাকারী",
  subtitle: "The Tiny Counter",
  tech: "Poisson Distribution — Poisson 1837, rare events, rate λ, Poisson process, connection to exponential",
  spirit: "লতিফ — সূক্ষ্ম, বিরল কিন্তু নিয়মিত",
  secret: "Poisson: বিরল ঘটনার বিতরণ। P(X=k) = (λ^k · e^(-λ)) / k!। λ = গড় ঘটনা per unit time। কল সেন্টার, ওয়েবসাইট ভিজিটর, mutation — সব Poisson।",
  recall: {
    q: " Poisson distribution কখন ব্যবহার করবে? সূত্র কী?",
    qen: "When to use Poisson distribution? What is the formula?",
    a: "বিরল ঘটনা — প্রতি ঘণ্টায় কয়টি। P(X=k) = λ^k·e^(-λ)/k!। λ = গড় rate। কল সেন্টার, কমিট, দুর্ঘটনা।",
    aen: "Rare events — count per unit time. P(X=k) = λ^k·e^(-λ)/k!. λ = mean rate. Call center, commits, accidents."
  },
  story: `<p class="scene-setting">সাফওয়ান (Door ৬) তোমাকে combinatorial probability শিখিয়েছেন। কিন্তু কিছু ঘটনা সসীম নয় — অসংখ্য। Siméon Poisson ১৮৩৭ সালে একটি সূত্র আবিষ্কার করেন। ধরো একটি কল সেন্টার — প্রতি মিনিটে গড়ে ৩টি কল। কোনো মিনিটে কতটি কল আসবে? ০? ১? ৫? ১০? Poisson বলে — P(X=k) = (৩^k · e^(-৩)) / k!। সব হিসাব করা!</p>
<p class="scene-setting en">Safwan (Door 6) taught you combinatorial probability. But some events are not finite — uncountable. Siméon Poisson in 1837 discovered a formula. Say a call center — average 3 calls per minute. How many calls in a given minute? 0? 1? 5? 10? Poisson says — P(X=k) = (3^k · e^(-3)) / k!. Everything calculable!</p>

<div class="dialogue"><strong>সূক্ষ্ম-গণক হামজা:</strong> Poisson-এর সৌন্দর্য: শুধু একটি প্যারামিটার — λ (rate)। E[X] = λ, Var(X) = λ — গড় ও variance এক! ওয়েবসাইটে প্রতি সেকেন্ডে গড়ে ১০ ভিজিটর? P(X=৫) = ১০^৫·e^(-১০)/৫! ≈ ০.০৩৮। P(X=২০)? খুব কম। কিন্তু সম্ভব! বিরল কিন্তু অসম্ভব নয়। Poisson process: প্রতিটি event independent, exponential inter-arrival time।</div>
<div class="dialogue en"><strong>Subtle Counter Hamza:</strong> Poisson's beauty: one parameter — λ (rate). E[X] = λ, Var(X) = λ — mean and variance equal! Website with average 10 visitors/sec? P(X=5) = 10^5·e^(-10)/5! ≈ 0.038. P(X=20)? Very small. But possible! Rare but not impossible. Poisson process: each event independent, exponential inter-arrival.</div>

<div class="code-block">— Python: Poisson Distribution —

  from scipy.stats import poisson
  import numpy as np

  # কল সেন্টার: λ=3 per minute
  lam = 3

  # P(exactly 0 calls)?
  print(f"P(X=0) = {poisson.pmf(0, lam):.4f}")  # 0.0498
  # P(exactly 3 calls)?
  print(f"P(X=3) = {poisson.pmf(3, lam):.4f}")  # 0.2240
  # P(exactly 6 calls)?
  print(f"P(X=6) = {poisson.pmf(6, lam):.4f}")  # 0.0502

  # P(2 or fewer)?
  print(f"P(X<=2) = {poisson.cdf(2, lam):.4f}")  # 0.423

  # P(more than 5)?
  print(f"P(X>5) = {1-poisson.cdf(5, lam):.4f}")  # 0.084

  # নিজে যাচাই করো:
  samples = np.random.poisson(lam, 100000)
  print(f"Sample mean: {samples.mean():.3f}")   # ~3.0
  print(f"Sample var:  {samples.var():.3f}")    # ~3.0 (E=Var=λ!)

  # Poisson → Normal যখন λ বড়:
  # λ=100 হলে Poisson(100) ≈ Normal(100, 10)
  # এটাই Central Limit Theorem-এর প্রভাব!</div>

<div class="callout info"><span class="co-icon">🔢</span><div><strong>Poisson properties:</strong><br>
<strong>P(X=k) = λ^k·e^(-λ)/k!:</strong> probability of k events<br>
<strong>E[X] = λ:</strong> mean = rate<br>
<strong>Var(X) = λ:</strong> variance = rate (একই!)<br>
<strong>Poisson Process:</strong> events over time, independent<br>
<strong>Exponential link:</strong> inter-arrival time = Exp(λ)<br>
<strong>Examples:</strong> calls, visitors, mutations, accidents</div></div>

<div class="verse">وَلِلَّهِ الْمَشْرِقُ وَالْمَغْرِبُ فَأَيْنَمَا تُوَلُّوا فَثَمَّ وَجْهُ اللَّهِ</div>
<div style="font-size:.85rem;color:var(--ink-dim);text-align:center;margin-bottom:1rem">"আল্লাহর জন্য পূর্ব ও পশ্চিম — তোমরা যেদিকেই ফিরো সেখানে আল্লাহর দিক।" — কুরআন ২:১১৫</div>

<p class="scene-setting">লতিফ — সূক্ষ্ম। Poisson সেই সূক্ষ্মতার রূপ — বিরল ঘটনা যা নিয়মিত। প্রতিটি মুহূর্তে অসংখ্য সম্ভাবনা, কিন্তু গড়ে একটি সূক্ষ্ম নিয়ম। পূর্ব বা পশ্চিম — যেদিকেই তাকাও, সেখানে নিয়ম। বিরল ঘটনাও সেই নিয়মের অধীন।</p>
<p class="scene-setting en">Latif — subtle. Poisson is the form of that subtlety — rare events that are regular. Each moment has infinite possibilities, but on average a subtle pattern. East or west — wherever you look, there is order. Even rare events follow that order.</p>

<div class="callout tip"><span class="co-icon">🔗</span><div><strong>Book ৪৮ (Discrete Math) Door ৬ (Pigeonhole):</strong> counting principle। Book ৪৯ Door ৪ (Memoryless): Poisson process ↔ exponential inter-arrival।</div></div>

<div class="secret-box">🔢 <strong>Poisson = বিরল ঘটনার বিতরণ। λ। E=Var=λ।</strong> কিন্তু ঘটনা শুধু এক মুহূর্তে নয় — সময়ে সময়ে। সেই প্রবাহ — stochastic process। পরের দরজায়।</div>`,
  senior: {
    title: "Poisson Distribution এক নজরে",
    body: `<table class="kv-table"><tr><th>ধারণা</th><th>বিবরণ</th></tr>
<tr><td class="hl">Poisson (1837)</td><td>বিরল event বিতরণ</td></tr>
<tr><td class="hl">P(X=k)</td><td>λ^k·e^(-λ)/k!</td></tr>
<tr><td class="hl">E[X] = Var(X)</td><td>উভয় = λ</td></tr>
<tr><td class="hl">Poisson Process</td><td>events over time</td></tr>
<tr><td class="hl">Exp link</td><td>inter-arrival = Exp(λ)</td></tr></table>`
  }
});

doors.push({
  num: 8,
  icon: "⏰",
  color: "#8b5cf6",
  name: "আগমনের ঘড়ি",
  subtitle: "The Arrival Clock",
  tech: "Stochastic Processes — Markov chains (Markov 1906), transition matrix, stationary distribution, random walk",
  spirit: "সিরর — গোপন নিয়ম, state থেকে state যাত্রা",
  secret: "Markov chain: পরবর্তী state শুধু বর্তমানের উপর নির্ভর করে — অতীত নয়! P(X_{n+১}|X_n)। Transition matrix। দীর্ঘে stationary distribution — সাম্যাবস্থা।",
  recall: {
    q: " Markov property কী? Stationary distribution কী?",
    qen: "What is the Markov property? What is a stationary distribution?",
    a: "Markov: পরবর্তী state শুধু বর্তমান উপর — অতীত নয়। Stationary: দীর্ঘ চলার পর probability stable হয়ে যায়। Transition matrix চেক করে।",
    aen: "Markov: next state depends only on present — not past. Stationary: after long run, probability stabilizes. Check via transition matrix."
  },
  story: `<p class="scene-setting">হামজা (Door ৭) তোমাকে Poisson শিখিয়েছেন। এখন সময়ে সময়ে ঘটনা — stochastic process। Andrey Markov ১৯০৬ সালে একটি ধারণা দিলেন — chain। একটি state থেকে পরের state-এ যাত্রা। কিন্তু শর্ত সহজ — পরবর্তী state শুধু বর্তমানের উপর নির্ভর করে, অতীতের উপর নয়। এটাই Markov property। আবহাওয়া, শেয়ার বাজার, PageRank — সব Markov chain!</p>
<p class="scene-setting en">Hamza (Door 7) taught you Poisson. Now events over time — stochastic process. Andrey Markov in 1906 gave a concept — chain. Journey from one state to the next. But a simple condition — the next state depends only on the present, not the past. This is the Markov property. Weather, stock market, PageRank — all Markov chains!</p>

<div class="dialogue"><strong>আগমন-ঘড়িকারী যাকারিয়া:</strong> একটি simple chain — Sunny → Rainy। P(Sunny|Sunny) = ০.৮, P(Rainy|Sunny) = ০.২। P(Rainy|Rainy) = ০.৬, P(Sunny|Rainy) = ০.৪। আজ sunny — কালকে ৮০% sunny। কিন্তু এক সপ্তাহ পর? সব ভুলে গেছে — শুধু transition matrix থাকে। দীর্ঘে stationary distribution — ৬৭% sunny, ৩৩% rainy। Google PageRank এটাই — web page একটি state, link একটি transition। সবচেয়ে visited page = highest stationary।</div>
<div class="dialogue en"><strong>Arrival Clock Keeper Zakariya:</strong> A simple chain — Sunny → Rainy. P(Sunny|Sunny)=0.8, P(Rainy|Sunny)=0.2. P(Rainy|Rainy)=0.6, P(Sunny|Rainy)=0.4. Today sunny — tomorrow 80% sunny. But after a week? Everything forgotten — only the transition matrix remains. Long run — stationary distribution — 67% sunny, 33% rainy. Google PageRank is this — web page is a state, link is a transition. Most visited page = highest stationary.</div>

<div class="code-block">— Python: Markov Chain —

  import numpy as np

  # Transition matrix:
  #        Sunny  Rainy
  # Sunny [ 0.8    0.2 ]
  # Rainy [ 0.4    0.6 ]
  T = np.array([[0.8, 0.2],
                [0.4, 0.6]])

  # আজ Sunny: [1, 0]
  state = np.array([1.0, 0.0])

  # কালকে:
  tomorrow = state @ T
  print(f"Tomorrow: {tomorrow}")  # [0.8, 0.2]

  # এক সপ্তাহ পর (7 steps):
  for _ in range(7):
      state = state @ T
  print(f"After 7 days: {state}")  # approaching [0.67, 0.33]

  # Stationary distribution (100 steps):
  for _ in range(100):
      state = state @ T
  print(f"Stationary: {state}")  # [0.667, 0.333]
  # ২/৩ Sunny, ১/৩ Rainy — চিরকাল!

  # Eigenvalue approach:
  eigenvalues, eigenvectors = np.linalg.eig(T.T)
  stationary = eigenvectors[:, 0] / eigenvectors[:, 0].sum()
  print(f"Eigen: {stationary.real}")  # [0.667, 0.333]</div>

<div class="callout info"><span class="co-icon">⏰</span><div><strong>Stochastic processes:</strong><br>
<strong>Markov Chain (1906):</strong> next state depends only on current<br>
<strong>Transition Matrix:</strong> P(state_j | state_i)<br>
<strong>Stationary Distribution:</strong> long-run probability<br>
<strong>Random Walk:</strong> state +/- 1 each step<br>
<strong>Absorbing State:</strong> once entered, never leaves<br>
<strong>PageRank:</strong> web pages as Markov states</div></div>

<div class="verse">سُنَّةَ اللَّهِ فِي الَّذِينَ خَلَوْا مِن قَبْلُ</div>
<div style="font-size:.85rem;color:var(--ink-dim);text-align:center;margin-bottom:1rem">"আল্লাহর নিয়ম যারা পূর্বে গত হয়েছে।" — কুরআন ৩৩:৬২</div>

<p class="scene-setting">সিরর — গোপন নিয়ম। Markov chain সেই নিয়মের রূপ — state থেকে state নির্দিষ্ট সম্ভাবনায়। অতীত ভুলে গেলেও নিয়ম থাকে। দীর্ঘে একটি stationary অবস্থা — সাম্যাবস্থা। প্রকৃতির নিয়ম স্থির — Markov-এর নিয়মও স্থির। সুন্নাহ — চিরন্তন প্যাটার্ন।</p>
<p class="scene-setting en">Sirr — hidden law. Markov chain is the form of that law — state to state with specific probabilities. Even when the past is forgotten, the rule remains. Long run reaches a stationary state — equilibrium. Nature's laws are stable — Markov's laws are stable. Sunnah — eternal pattern.</p>

<div class="callout tip"><span class="co-icon">🔗</span><div><strong>Book ৩৫ (Distributed Systems) Door ৫ (Consensus):</strong> Markov chain = consensus model। Book ৩০ (Math for ML) Door ৭ (Probability): transition matrix formal definition।</div></div>

<div class="secret-box">⏰ <strong>Markov = state → state, অতীতহীন। Stationary = সাম্যাবস্থা।</strong> কিন্তু জটিল distribution থেকে নমুনা কীভাবে নেবে? সেই উপায় — sampling। পরের দরজায়।</div>`,
  senior: {
    title: "Stochastic Processes এক নজরে",
    body: `<table class="kv-table"><tr><th>ধারণা</th><th>বিবরণ</th></tr>
<tr><td class="hl">Markov (1906)</td><td>next state = f(current only)</td></tr>
<tr><td class="hl">Transition Matrix</td><td>P(j|i)</td></tr>
<tr><td class="hl">Stationary</td><td>long-run stable probability</td></tr>
<tr><td class="hl">Random Walk</td><td>+/- step each iteration</td></tr>
<tr><td class="hl">PageRank</td><td>web = Markov chain</td></tr>
<tr><td class="hl">Absorbing</td><td>trapped state</td></tr></table>`
  }
});

doors.push({
  num: 9,
  icon: "💃",
  color: "#8b5cf6",
  name: "নমুনার নৃত্য",
  subtitle: "The Sampling Dance",
  tech: "Monte Carlo & MCMC — Metropolis-Hastings, Gibbs sampling, rejection sampling, importance sampling",
  spirit: "তালাক — খোঁজ, এলোমেলো পদক্ষেপে সত্য",
  secret: "Monte Carlo: এলোমেলো নমুনা দিয়ে অন্তর মাপো। π হিসাও — বৃত্তে দানা ছড়াও! MCMC: জটিল distribution থেকে নমুনা — Metropolis-Hastings। এলোমেলো পদক্ষেপে সত্যের কাছে যাও।",
  recall: {
    q: " Monte Carlo method কী? MCMC কখন ব্যবহার করবে?",
    qen: "What is the Monte Carlo method? When to use MCMC?",
    a: "Monte Carlo: এলোমেলো নমুনা দিয়ে সমাকলন অনুমান। MCMC: জটিল distribution থেকে নমুনা — direct অসম্ভব হলে। Metropolis-Hastings।",
    aen: "Monte Carlo: estimate integrals via random sampling. MCMC: sample from complex distributions when direct sampling is impossible. Metropolis-Hastings."
  },
  story: `<p class="scene-setting">যাকারিয়া (Door ৮) তোমাকে Markov chain শিখিয়েছেন। এখন একটি জাদু — এলোমেলো পদক্ষেপে সত্য খোঁজা। Monte Carlo: একটি বৃত্তে দানা ছড়াও। কত দানা বৃত্তের ভেতরে? সেই অনুপাত দিয়ে π হিসাও! এটাই Monte Carlo — এলোমেলো নমুনা দিয়ে গাণিতিক অনুমান। Stanislaw Ulam ১৯৪৬ সালে এটা আবিষ্কার করেন — solitaire খেলার সময়!</p>
<p class="scene-setting en">Zakariya (Door 8) taught you Markov chains. Now a magic — finding truth through random steps. Monte Carlo: scatter grains on a circle. How many inside? Use that ratio to calculate π! This is Monte Carlo — mathematical estimation through random sampling. Stanislaw Ulam discovered this in 1946 — while playing solitaire!</p>

<div class="dialogue"><strong>নৃত্য-পরিচালক আয়েশা:</strong> Monte Carlo সহজ — এলোমেলো নমুনা নাও, গড় করো। কিন্তু জটিল distribution থেকে নমুনা কীভাবে? MCMC — Markov Chain Monte Carlo। Metropolis-Hastings: একটি পদক্ষেপ প্রস্তাব করো। ভালো হলে গ্রহণ করো, খারাপ হলে সম্ভাবনার উপর গ্রহণ। দীর্ঘে এই chain সেই distribution থেকে নমুনা দেয়। Gibbs: এক সময় এক variable পদক্ষেপ। Bayesian inference-এ এটা অপরিহার্য!</div>
<div class="dialogue en"><strong>Dance Director Ayesha:</strong> Monte Carlo is simple — take random samples, average. But how to sample from complex distributions? MCMC — Markov Chain Monte Carlo. Metropolis-Hastings: propose a step. If good, accept; if bad, accept probabilistically. Long run, this chain samples from that distribution. Gibbs: one variable at a time. Essential in Bayesian inference!</div>

<div class="code-block">— Python: Monte Carlo π ও MCMC —

  import numpy as np

  # Monte Carlo: π হিসাও
  n = 1000000
  x = np.random.uniform(-1, 1, n)
  y = np.random.uniform(-1, 1, n)
  inside = np.sum(x**2 + y**2 <= 1)
  pi_estimate = 4 * inside / n
  print(f"π ≈ {pi_estimate:.4f}")  # ~3.1416

  # Metropolis-Hastings MCMC:
  # Target: Normal(0, 1)
  target = lambda x: np.exp(-x**2 / 2) / np.sqrt(2*np.pi)

  samples = []
  x_current = 0.0  # start
  for _ in range(100000):
      x_proposed = x_current + np.random.normal(0, 1)
      ratio = target(x_proposed) / target(x_current)
      if np.random.random() < ratio:
          x_current = x_proposed  # accept
      samples.append(x_current)

  print(f"Sample mean: {np.mean(samples):.3f}")  # ~0.0
  print(f"Sample std:  {np.std(samples):.3f}")    # ~1.0
  # এটা Normal(0,1) থেকে নমুনা! ✅

  # Monte Carlo integration:
  # ∫₀¹ x² dx ≈ mean of x² for random x in [0,1]
  result = np.mean(np.random.uniform(0, 1, 100000)**2)
  print(f"∫₀¹ x² dx ≈ {result:.4f}")  # ~0.3333</div>

<div class="callout info"><span class="co-icon">💃</span><div><strong>Sampling methods:</strong><br>
<strong>Monte Carlo (Ulam 1946):</strong> random sampling → estimate<br>
<strong>π estimation:</strong> বৃত্তে দানা ছড়াও<br>
<strong>Metropolis-Hastings:</strong> propose → accept/reject<br>
<strong>Gibbs Sampling:</strong> one variable at a time<br>
<strong>Rejection Sampling:</strong> envelope function<br>
<strong>Importance Sampling:</strong> weight by probability</div></div>

<div class="verse">وَالَّذِينَ جَاهَدُوا فِينَا لَنَهْدِيَنَّهُمْ سُبُلَنَا</div>
<div style="font-size:.85rem;color:var(--ink-dim);text-align:center;margin-bottom:1rem">"এবং যারা আমাদের পথে চেষ্টা করে — আমরা অবশ্যই তাদের আমাদের পথ দেখাব।" — কুরআন ২৯:৬৯</div>

<p class="scene-setting">তালাক — খোঁজ, অন্বেষণ। Monte Carlo সেই খোঁজের রূপ — এলোমেলো পদক্ষেপে সত্য অন্বেষণ। প্রতিটি নমুনা একটি চেষ্টা। দীর্ঘে সত্য প্রকাশ। যারা চেষ্টা করে তাদের পথ দেখানো হয় — এলোমেলো পদক্ষেপেও গন্তব্যে পৌঁছানো যায়।</p>
<p class="scene-setting en">Talaq — search, exploration. Monte Carlo is the form of that search — exploring truth through random steps. Each sample an attempt. Over the long run, truth emerges. Those who strive are shown the path — even random steps can reach the destination.</p>

<div class="callout tip"><span class="co-icon">🔗</span><div><strong>Book ৩৪ (Statistics) Door ৫ (Estimation):</strong> sampling ও confidence interval। Book ৩৬ (DL Arch) Door ৫ (Diffusion): diffusion model = MCMC variant!</div></div>

<div class="secret-box">💃 <strong>Monte Carlo = এলোমেলো নমুনা। MCMC = জটিল distribution থেকে নমুনা।</strong> এখন নয়টি দরজা পেরিয়েছো — শেষ দরজায় সব মেলাও।</div>`,
  senior: {
    title: "Sampling Methods এক নজরে",
    body: `<table class="kv-table"><tr><th>পদ্ধতি</th><th>বিবরণ</th></tr>
<tr><td class="hl">Monte Carlo</td><td>random sampling → estimate</td></tr>
<tr><td class="hl">Metropolis-Hastings</td><td>propose → accept/reject</td></tr>
<tr><td class="hl">Gibbs</td><td>one variable at a time</td></tr>
<tr><td class="hl">Rejection</td><td>envelope function</td></tr>
<tr><td class="hl">Importance</td><td>weight by probability</td></tr></table>`
  }
});

doors.push({
  num: 10,
  icon: "🌟",
  color: "#8b5cf6",
  name: "সম্ভাবনার মন",
  subtitle: "The Probabilistic Mind",
  tech: "Synthesis — Bayes + Expectation + Normal + Memoryless + Risk + Combinatorics + Poisson + Markov + Sampling",
  spirit: "হিকমাহ — প্রয়োগিক জ্ঞান, সব সম্ভাবনার একত্র দৃষ্টি",
  secret: "নয়টি দরজা, নয়জন শিক্ষক — সম্ভাবনার সম্পূর্ণ জগত। Bayes থেকে Markov, Monte Carlo থেকে concentration। ML, data science, finance, quantum — সব এর উপর নির্ভর।",
  recall: {
    q: " সম্ভাবনা তত্ত্বের ছয়টি মূল ধারণা কী?",
    qen: "What are the six core concepts of probability theory?",
    a: "Bayes (belief update), E[X]/Var (গড়/ছড়ানো), Normal (bell curve), Memoryless (exponential), Markov (state chain), Monte Carlo (sampling)।",
    aen: "Bayes (belief update), E[X]/Var (mean/spread), Normal (bell curve), Memoryless (exponential), Markov (state chain), Monte Carlo (sampling)."
  },
  story: `<p class="scene-setting">তুমি নয়টি দরজা পেরিয়েছো। আলী Bayes, ফাতিমা expectation, ইউসুফ normal, আমিন memoryless, ওমর risk bound, সাফওয়ান combinatorics, হামজা Poisson, যাকারিয়া Markov, আয়েশা sampling। এখন সব মেলাও — সম্ভাবনার সম্পূর্ণ জগত। ML-এ naive Bayes, deep learning-এ dropout = sampling, finance-এ risk = tail, PageRank = Markov। সব সংযুক্ত।</p>
<p class="scene-setting en">You have passed nine doors. Ali Bayes, Fatima expectation, Yusuf normal, Amin memoryless, Umar risk bound, Safwan combinatorics, Hamza Poisson, Zakariya Markov, Ayesha sampling. Now combine them all — the complete world of probability. In ML naive Bayes, in deep learning dropout = sampling, in finance risk = tail, PageRank = Markov. All connected.</p>

<div class="callout info"><span class="co-icon">🌟</span><div><strong>সম্পূর্ণ সম্ভাবনা তত্ত্ব — নয় দরজার সমন্বয়:</strong><br>
<strong>Door ১ — আলী (Bayes):</strong> belief update — prior → posterior<br>
<strong>Door ২ — ফাতিমা (Expectation):</strong> গড়, variance, linearity<br>
<strong>Door ৩ — ইউসুফ (Normal):</strong> bell curve, CLT, 68-95-99.7<br>
<strong>Door ৪ — আমিন (Memoryless):</strong> exponential, geometric<br>
<strong>Door ৫ — ওমর (Risk):</strong> Chebyshev, Chernoff, Black Swan<br>
<strong>Door ৬ — সাফওয়ান (Combinatorial):</strong> inclusion-exclusion, conditional<br>
<strong>Door ৭ — হামজা (Poisson):</strong> rare events, rate λ<br>
<strong>Door ৮ — যাকারিয়া (Markov):</strong> state chain, stationary<br>
<strong>Door ৯ — আয়েশা (Sampling):</strong> Monte Carlo, MCMC</div></div>

<div class="code-block">— Full Pipeline: সম্ভাবনা বাস্তবে —

  # ১. Bayes: spam filter
  P_spam = 0.3  # prior
  # "free money" in email → P(spam|words) update

  # ২. Normal: human height
  # μ=175cm, σ=7 → P(>190) = 1 - Φ(2.14) ≈ 1.6%

  # ৩. Poisson: server requests
  # λ=100/sec → P(>150) = very rare

  # ৪. Markov: user behavior
  # browsing → cart → checkout → purchase
  # transition matrix → conversion rate

  # ৫. Monte Carlo: portfolio risk
  # 10000 scenarios → P(loss > $1M) = 2%

  # ৬. Exponential: server failure
  # MTBF = 10000 hours → P(fail in 1st year)?

  # ML-এ সব সংযুক্ত:
  # Naive Bayes = Door 1
  # Gaussian = Door 3
  # Dropout = Door 9 (sampling)
  # MCMC = Bayesian inference
  # Hidden Markov = Door 8

  — সম্ভাবনা = uncertainty মাপার ভাষা —
  — ML, finance, physics, biology — সব এর উপর —</div>

<div class="stat-grid">
<div class="stat-card"><div class="sc-num">৯</div><div class="sc-label">শিক্ষক</div></div>
<div class="stat-card"><div class="sc-num">৩০০+</div><div class="sc-label">বছরের গবেষণা</div></div>
<div class="stat-card"><div class="sc-num">∞</div><div class="sc-label">প্রয়োগ</div></div>
<div class="stat-card"><div class="sc-num">P</div><div class="sc-label">সম্ভাবনা</div></div>
</div>

<div class="verse">اللَّهُ نُورُ السَّمَاوَاتِ وَالْأَرْضِ</div>
<div style="font-size:.85rem;color:var(--ink-dim);text-align:center;margin-bottom:1rem">"আল্লাহ আসমান ও পৃথিবীর আলো।" — কুরআন ২৪:৩৫</div>

<p class="scene-setting">নূর — আলো। সম্ভাবনা তত্ত্ব হলো সেই আলো যা অনিশ্চয়তার অন্ধকারে দিক দেখায়। বাইরে থেকে একটি ML model বা risk report নিশ্চিত মনে হয় — কিন্তু ভেতরে নয়টি স্তর কাজ করছে। আলীর Bayes বিশ্বাস আপডেট করে, ফাতিমার গড় ভবিষ্যৎ বলে, ইউসুফের ঘণ্টা আকৃতি দেয়, আমিনের স্মৃতিহীনতা সময় মাপে, ওমরের সীমা ঝুঁকি ধরে, সাফওয়ানের গণনা সম্ভাবনা মাপে, হামজার Poisson বিরল ঘটনা ধরে, যাকারিয়ার Markov পথ দেখায়, আয়েশার নৃত্য নমুনা দেয়। সব মিলে — অনিশ্চয়তার ভাষা।</p>
<p class="scene-setting en">Nur — light. Probability theory is the light that shows direction in the darkness of uncertainty. Outside, an ML model or risk report seems certain — but inside, nine layers work. Ali's Bayes updates belief, Fatima's mean predicts, Yusuf's bell shapes, Amin's memorylessness measures time, Umar's bounds catch risk, Safwan's counting measures probability, Hamza's Poisson catches rare events, Zakariya's Markov shows paths, Ayesha's dance samples. Together — the language of uncertainty.</p>

<div class="callout tip"><span class="co-icon">🔗</span><div><strong>সম্পূর্ণ লাইব্রেরি সংযোগ:</strong> Book ৩০ (Math for ML) → probability foundation। Book ৩১ (Classic ML) → naive Bayes, Gaussian mixture। Book ৩৪ (Statistics) → hypothesis testing। Book ৩৬ (DL Arch) → diffusion = sampling। Book ৩৩ (Loom of Reason) → Bayesian reasoning। এই বই সবার ভিত্তি।</div></div>

<div class="checklist">
<li>🔄 Bayes theorem দিয়ে একটি spam filter হিসাও</li>
<li>📊 ১০০০টি random number-এর গড় বের করো</li>
<li>🔔 numpy দিয়া bell curve আঁকো</li>
<li>🎲 একটি exponential simulation চালাও</li>
<li>🛡️ Chebyshev bound যাচাই করো simulation দিয়ে</li>
<li>🎰 দুটি পাশার যোগফল বিতরণ হিসাও</li>
<li>🔢 Poisson(λ=৫) থেকে নমুনা নাও</li>
<li>⏰ একটি ২-state Markov chain simulation করো</li>
<li>💃 Monte Carlo দিয়া π হিসাও</li>
<li>📖 "Introduction to Probability" — Blitzstein পড়ো</li>
</div>

<div class="secret-box">🌟 <strong>সম্ভাবনা = অনিশ্চয়তার ভাষা।</strong> নয়টি দরজা, নয়জন শিক্ষক, একটি দৃষ্টি। Bayes থেকে Markov, ঘণ্টা থেকে নৃত্য। প্রতিটি ML model, প্রতিটি risk analysis, প্রতিটি scientific experiment — সম্ভাবনার উপর নির্মিত। এখন তুমি জানো — শুধু কীভাবে নয়, কেন। কেন Bayes base rate ধরে। কেন ঘণ্টা আকৃতি সর্বব্যাপী। কেন অতীত প্রভাব ফেলে না (memoryless)। কেন বিরল ঘটনা উপেক্ষা করা যায় না। কেন এলোমেলো পদক্ষেপে সত্য পাওয়া যায়। এটাই হিকমাহ — সম্ভাবনার প্রয়োগিক জ্ঞান।</div>`,
  senior: {
    title: "সম্পূর্ণ সম্ভাবনা তত্ত্ব এক নজরে",
    body: `<table class="kv-table"><tr><th>স্তর</th><th>কী</th><th>দরজা</th></tr>
<tr><td class="hl">Bayes</td><td>belief update</td><td>১</td></tr>
<tr><td class="hl">Expectation</td><td>E[X], Var(X), linearity</td><td>২</td></tr>
<tr><td class="hl">Normal</td><td>bell curve, CLT</td><td>৩</td></tr>
<tr><td class="hl">Memoryless</td><td>exponential, geometric</td><td>৪</td></tr>
<tr><td class="hl">Risk Bounds</td><td>Chebyshev, Chernoff, Black Swan</td><td>৫</td></tr>
<tr><td class="hl">Combinatorial</td><td>inclusion-exclusion, conditional</td><td>৬</td></tr>
<tr><td class="hl">Poisson</td><td>rare events, rate λ</td><td>৭</td></tr>
<tr><td class="hl">Markov</td><td>state chain, stationary</td><td>৮</td></tr>
<tr><td class="hl">Sampling</td><td>Monte Carlo, MCMC</td><td>৯</td></tr>
<tr><td class="hl">Synthesis</td><td>সব মিলে — probabilistic mind</td><td>১০</td></tr></table>`
  }
});
