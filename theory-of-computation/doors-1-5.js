const doors = [];

doors.push({
  num: 1,
  icon: "🔤",
  color: "#6366f1",
  name: "নির্দিষ্ট যন্ত্র",
  subtitle: "Finite Automata & Regular Languages",
  tech: "DFA, NFA, and Regular Languages — Kleene (1956)",
  spirit: "ওযু — নির্দিষ্ট ধাপ, নির্দিষ্ট ক্রম, পবিত্রতা পুনরাবৃত্তিতে",
  secret: "সবচেয়ে সরল যন্ত্রও অসীম ধরনের প্যাটার্ন চিনতে পারে — যদি তার নিয়ম স্পষ্ট থাকে।",
  recall: {
    q: "DFA এবং NFA-এর ক্ষমতা কি একই?",
    qen: "Do DFA and NFA have the same computational power?",
    a: "হ্যাঁ — প্রতিটি NFA-কে সমান ক্ষমতার DFA-তে রূপান্তর করা যায় (subset construction)।",
    aen: "Yes — every NFA can be converted to an equivalent DFA via subset construction (Rabin & Scott, 1959)."
  },
  story: `<p class="scene-setting">তুমি একটা কারখানায় ঢুকেছ। বাতাসে তেল আর ধাতব গন্ধ। দেয়ালে সারি সারি গিয়ার। একটা ছোট যন্ত্র টেবিলে বসে আছে — পিতলের দেহ, পাঁচটা বোতাম, একটা প্যাটার্ন স্ক্রিন। যন্ত্রটার নাম: প্যাটার্ন-চেকার। তুমি যখন একটা শব্দ টাইপ করো, সে তাকে ধাপে ধাপে দেখে — প্রতিটা অক্ষরে একটা নির্দিষ্ট বোতাম চাপে। শেষে সবুজ বাতি জ্বললে — গৃহীত। লাল বাতি — প্রত্যাখ্যাত। এই যন্ত্রটা মাত্র পাঁচটা অবস্থান জানে। কিন্তু অসীম শব্দ চিনতে পারে।</p>
<p class="scene-setting en">You enter a workshop. Oil and metal in the air. Rows of gears on the walls. On a table sits a small machine — brass body, five buttons, a pattern screen. Its name: Pattern-Checker. You type a word; it reads letter by letter — each letter presses a specific button. Green light: accepted. Red light: rejected. This machine knows only five states. Yet it recognizes infinitely many words.</p>

<div class="dialogue"><strong>ক্লিনি:</strong> তুমি ভাবো — এই যন্ত্র সীমিত। পাঁচটা অবস্থান মাত্র। কিন্তু আমি তোমাকে দেখাবো — সীমিত অবস্থান দিয়ে অসীম প্যাটার্ন চেনা যায়। চলো, আমরা একটা কাজ করি। তুমি যেকোনো শব্দ লেখো — শুধু a আর b দিয়ে। আমার যন্ত্র বলবে — শব্দটা ab দিয়ে শেষ হয় কি না।</div>
<div class="dialogue en"><strong>Kleene:</strong> You think this machine is limited. Five states only. But I'll show you — finite states can recognize infinite patterns. Write any word — using only a and b. My machine will tell you: does it end in ab?</div>

<div class="dialogue"><strong>তুমি:</strong> খুব সহজ। আমি লিখলাম — bbab। শেষ ab দিয়ে। সবুজ বাতি!</div>
<div class="dialogue en"><strong>You:</strong> Easy. I write — bbab. Ends in ab. Green light!</div>

<div class="dialogue"><strong>ক্লিনি:</strong> এখন aaaa লেখো। শেষ ab নয়। লাল বাতি। কিন্তু লক্ষ্য করো — আমার যন্ত্র কোনো শব্দ মনে রাখে না। সে শুধু জানে — আমি এখন কোন অবস্থানে আছি। এটাই সসীম অটোমেটনের শক্তি — স্মৃতি নেই, শুধু অবস্থান আছে।</div>
<div class="dialogue en"><strong>Kleene:</strong> Now write aaaa. Doesn't end in ab. Red light. But notice — my machine remembers nothing. It only knows: which state am I in right now? This is the power of finite automata — no memory, only states.</div>

<p class="scene-setting">ক্লিনি একটা খাতা খোলে। তাতে গোল গোল চিহ্ন — তাদের মধ্যে তীর চিহ্ন। তিনি বলেন — এই চিত্রটাই Deterministic Finite Automaton বা DFA। প্রতিটি বৃত্ত একটি অবস্থান (state)। প্রতিটি তীর একটি রূপান্তর (transition)। একটি অবস্থান থেকে একটি নির্দিষ্ট ইনপুটে ঠিক একটি তীর বের হয় — এই কারণে deterministic। কোনো দ্বিধা নেই।</p>
<p class="scene-setting en">Kleene opens a notebook. Circles with arrows between them. He says — this diagram is a Deterministic Finite Automaton, a DFA. Each circle is a state. Each arrow is a transition. From each state, for each input symbol, exactly one arrow leaves — hence deterministic. No ambiguity.</p>

<div class="code-block">
<strong>DFA আনুষ্ঠানিক সংজ্ঞা (Formal Definition):</strong>

একটি DFA হলো ৫-টুপল (5-tuple): (Q, Σ, δ, q₀, F)

• Q = সসীম অবস্থানের সেট (finite set of states)
• Σ = ইনপুট বর্ণমালা (input alphabet)
• δ: Q * Σ → Q = রূপান্তর ফাংশন (transition function)
• q₀ ∈ Q = প্রারম্ভিক অবস্থান (start state)
• F ⊆ Q = গ্রহণযোগ্য অবস্থান (accept states)

উদাহরণ: "ab দিয়ে শেষ হয়" — এই ভাষাটির DFA:
States: {q₀, q₁, q₂}
q₀ = প্রারম্ভিক (শুরু বা শেষ অক্ষর a)
q₁ = শেষ অক্ষর a দেখেছি
q₂ = শেষ অক্ষর b দেখেছি (ACCEPT)
δ(q₀,a)=q₁, δ(q₀,b)=q₀
δ(q₁,a)=q₁, δ(q₁,b)=q₂
δ(q₂,a)=q₁, δ(q₂,b)=q₀
F = {q₂}
</div>

<div class="dialogue"><strong>তুমি:</strong> কিন্তু এই যন্ত্র কি {aⁿbⁿ | n ≥ 0} চিনতে পারে? অর্থাৎ সমান সংখ্যক a এবং b?</div>
<div class="dialogue en"><strong>You:</strong> But can this machine recognize {aⁿbⁿ | n ≥ 0}? Equal numbers of a and b?</div>

<div class="dialogue"><strong>ক্লিনি:</strong> (দীর্ঘশ্বাস) না। এটাই সসীম অটোমেটনের সীমা। সে a কতবার এসেছিল গুনতে পারে না — কারণ তার স্মৃতি নেই। {a⁨bⁿ} চেনার জন্য স্ট্যাক দরকার — অর্থাৎ একটা গণনাকারী। এটা নিয়ে আমার ছাত্র নোয়াম চমস্কি কাজ করেছে — তুমি তৃতীয় দরজায় তার সাথে দেখা পাবে।</div>
<div class="dialogue en"><strong>Kleene:</strong> (sighs) No. This is the limit of finite automata. It cannot count how many a's appeared — because it has no memory. {aⁿbⁿ} requires a stack — a counter. My student Noam Chomsky worked on this — you'll meet him in Door 3.</div>

<div class="verse">
<strong>সসীম অটোমেটনের দুই রূপ:</strong><br>
১. DFA (Deterministic): প্রতি অবস্থানে প্রতি ইনপুটে ঠিক একটি রূপান্তর।<br>
২. NFA (Nondeterministic): একই অবস্থানে একাধিক রূপান্তর বা ε (শূন্য ইনপুট) রূপান্তর থাকতে পারে।<br><br>
Rabin ও Scott (১৯৫৯) প্রমাণ করেন — NFA এবং DFA একই ক্ষমতার। প্রতিটি NFA-কে DFA-তে রূপান্তর করা যায় (subset construction)। কিন্তু সবচেয়ে খারাপ ক্ষেত্রে n-অবস্থানের NFA থেকে ২ⁿ অবস্থানের DFA দরকার হতে পারে — exponential blowup।
</div>

<div class="svg-diagram">
<svg viewBox="0 0 580 250" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto">
<defs><marker id="arrTC1" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto"><path d="M0,0 L0,6 L7,3 z" fill="#22d3ee"/></marker></defs>
<text x="290" y="25" text-anchor="middle" fill="#7dd3fc" font-size="12" font-weight="700">DFA: ab দিয়ে শেষ হওয়া ভাষা</text>
<line x1="55" y1="135" x2="82" y2="135" stroke="#4ade80" stroke-width="2" marker-end="url(#arrTC1)"/>
<circle cx="110" cy="135" r="28" fill="#1e3a5f" stroke="#22d3ee" stroke-width="2"/>
<text x="110" y="140" text-anchor="middle" fill="#7dd3fc" font-size="13" font-weight="700">q0</text>
<circle cx="290" cy="135" r="28" fill="#1e3a5f" stroke="#22d3ee" stroke-width="2"/>
<text x="290" y="140" text-anchor="middle" fill="#7dd3fc" font-size="13" font-weight="700">q1</text>
<circle cx="470" cy="135" r="28" fill="#1e3a5f" stroke="#4ade80" stroke-width="2"/>
<circle cx="470" cy="135" r="22" fill="none" stroke="#4ade80" stroke-width="2"/>
<text x="470" y="140" text-anchor="middle" fill="#4ade80" font-size="13" font-weight="700">q2</text>
<path d="M138,125 Q200,85 262,125" fill="none" stroke="#22d3ee" stroke-width="1.5" marker-end="url(#arrTC1)"/>
<text x="200" y="80" text-anchor="middle" fill="#fcd34d" font-size="11">a</text>
<path d="M318,125 Q390,85 442,125" fill="none" stroke="#22d3ee" stroke-width="1.5" marker-end="url(#arrTC1)"/>
<text x="380" y="80" text-anchor="middle" fill="#fcd34d" font-size="11">b</text>
<path d="M95,107 Q72,80 95,107" fill="none" stroke="#22d3ee" stroke-width="1.5" marker-end="url(#arrTC1)"/>
<text x="63" y="75" text-anchor="middle" fill="#fcd34d" font-size="10">b</text>
<path d="M275,107 Q252,80 275,107" fill="none" stroke="#22d3ee" stroke-width="1.5" marker-end="url(#arrTC1)"/>
<text x="243" y="75" text-anchor="middle" fill="#fcd34d" font-size="10">a</text>
<path d="M442,150 Q380,200 318,150" fill="none" stroke="#fca5a5" stroke-width="1" stroke-dasharray="4,3" marker-end="url(#arrTC1)"/>
<text x="380" y="210" text-anchor="middle" fill="#fca5a5" font-size="10">a</text>
<path d="M262,150 Q190,200 138,150" fill="none" stroke="#fca5a5" stroke-width="1" stroke-dasharray="4,3" marker-end="url(#arrTC1)"/>
<text x="200" y="210" text-anchor="middle" fill="#fca5a5" font-size="10">b</text>
<text x="110" y="185" text-anchor="middle" fill="#4ade80" font-size="9">শুরু</text>
<text x="470" y="185" text-anchor="middle" fill="#4ade80" font-size="9">গ্রহণ</text>
</svg>
</div>
<div class="svg-caption">DFA: তিনটি অবস্থান দিয়ে ab দিয়ে শেষ হওয়া ভাষা চেনা। প্রতিটি অবস্থানে প্রতিটি ইনপুটে ঠিক একটি রূপান্তর।</div>

<div class="secret-box">
<strong>🔑 গোপন সত্য:</strong> সসীম অবস্থান + নির্দিষ্ট নিয়ম = অসীম প্যাটার্ন চেনা।<br>
<em>Finite states + fixed rules = recognizing infinite patterns.</em>
<hr>
<div style="text-align:center;font-size:.82rem">
<strong>Kleene Star (ক্লিনি তারকা):</strong> কোনো ভাষা L-এর জন্য L* = শূন্য বা ততোধিক L-এর সংযোগ। যেমন {a}* = {ε, a, aa, aaa, ...}<br>
Stephen Cole Kleene (১৯০৯-১৯৯৪) — হার্টফোর্ড, কানেকটিকাটে জন্ম, প্রিন্সটনে গবেষণা। "Representation of Events in Nerve Nets and Finite Automata" (১৯৫১ RAND memo, ১৯৫৬-এ Automata Studies-এ পুনঃপ্রকাশিত)।
</div>
</div>`,
  senior: {
    title: "DFA/NFA প্র্যাকটিস গাইড",
    body: `<p><strong>১. DFA বানাও:</strong> "০ দিয়ে শেষ হয় এমন বাইনারি স্ট্রিং" — দুইটা state লাগবে।</p>
<p><strong>২. Regex ↔ NFA ↔ DFA:</strong> প্রতিটি regular expression কে NFA বানানো যায় (Thompson construction), তারপর DFA-তে।</p>
<p><strong>৩. বাস্তব ব্যবহার:</strong> লেক্সিক্যাল অ্যানালাইজার (lex/flex), টেক্সট সার্চ (grep), প্রোটোকল ভ্যালিডেটর।</p>
<p><strong>৪. সীমা মনে রাখো:</strong> DFA গণনা করতে পারে না। ব্র্যাকেট ম্যাচিং? না। প্যালিনড্রোম? না। এগুলোর জন্য স্ট্যাক দরকার (Door 3)।</p>`
  }
});

doors.push({
  num: 2,
  icon: "🔮",
  color: "#818cf8",
  name: "অনির্ধারিত পথ",
  subtitle: "Nondeterminism — The Power of Choice",
  tech: "NFA, Subset Construction, NFA = DFA Equivalence — Rabin & Scott (1959)",
  spirit: "তাওয়াক্কুল — একাধিক পথ, কিন্তু একটি গন্তব্য",
  secret: "অনির্ধারিততা কোনো অতিরিক্ত ক্ষমতা দেয় না — কিন্তু চিন্তাকে অসীমভাবে সহজ করে।",
  recall: {
    q: "n-অবস্থানের NFA-কে DFA-তে রূপান্তর করলে সর্বোচ্চ কয়টি অবস্থান লাগতে পারে?",
    qen: "What is the maximum number of states needed when converting an n-state NFA to a DFA?",
    a: "২ⁿ — exponential blowup। কিন্তু বাস্তবে প্রায়ই অনেক কম লাগে।",
    aen: "2ⁿ — exponential blowup. But in practice often much fewer are needed."
  },
  story: `<p class="scene-setting">তুমি একটা বিশাল গোলকধাঁধায় দাঁড়িয়ে আছ। প্রতিটি মোড়ে দুই-তিনটি পথ। কোনো পথে সূচক নেই — শুধু তীর। কোন পথ সঠিক? তুমি জানো না। কিন্তু যদি তুমি সব পথ একসাথে চলতে পারো? যেন তুমি ধোঁয়ার মতো ছড়িয়ে পড়ো — একসাথে প্রতিটি সম্ভাব্য দিকে। তাহলে যদি একটি পথও গন্তব্যে পৌঁছায় — তুমি পৌঁছেছ।</p>
<p class="scene-setting en">You stand in a vast maze. Each junction has two or three paths. No signs — just arrows. Which is correct? You don't know. But what if you could walk all paths simultaneously? As if you spread like smoke — in every possible direction at once. Then if even one path reaches the destination — you have arrived.</p>

<div class="dialogue"><strong>মাইকেল রাবিন:</strong> তুমি যখন একটা রাস্তায় দাঁড়িয়ে ভাবো — ডানে যাবো না বামে? — সেটা deterministic জগত। কিন্তু কল্পনা করো — তুমি একই সময়ে দুই পথেই হাঁলে। শুধু একটাতে নয় — দুইতেই। প্রতিটি মোড়ে তুমি আবার দুই-দুইটা হয়ে যাও। এক সময় তুমি শত শত কপি — কিন্তু একটি কপি যদি গন্তব্যে পৌঁছায়, তুমি সফল।</div>
<div class="dialogue en"><strong>Michael Rabin:</strong> When you stand at a fork thinking — left or right? — that's the deterministic world. But imagine — you walk both paths at once. Not one — both. At each junction, you split again. Soon you are hundreds of copies — but if one copy arrives, you've succeeded.</div>

<div class="dialogue"><strong>তুমি:</strong> এটা তো অসম্ভব! একজন মানুষ কীভাবে একই সময়ে শত পথে হাঁটবে?</div>
<div class="dialogue en"><strong>You:</strong> That's impossible! How can one person walk a hundred paths at once?</div>

<div class="dialogue"><strong>রাবিন:</strong> (হাসেন) মানুষ পারে না। কিন্তু গাণিতিক যন্ত্র পারে। আমি এবং ডানা স্কট ১৯৫৯ সালে প্রমাণ করেছি — এই অনির্ধারিত যন্ত্রটি (NFA) ঠিক এতটাই শক্তিশালী যতটা নির্ধারিত যন্ত্রটি (DFA)। কোনো বাড়তি ক্ষমতা নেই — কিন্তু এটা প্যাটার্ন বর্ণনা করা অসংখ্য গুণ সহজ করে দেয়।</div>
<div class="dialogue en"><strong>Rabin:</strong> (laughs) A human can't. But a mathematical machine can. Dana Scott and I proved in 1959 — this nondeterministic machine (NFA) is exactly as powerful as the deterministic one (DFA). No extra power — but it makes describing patterns infinitely easier.</div>

<div class="code-block">
<strong>NFA আনুষ্ঠানিক সংজ্ঞা:</strong>

NFA-ও ৫-টুপল (Q, Σ, δ, q₀, F) — কিন্তু একটি পার্থক্য:
• δ: Q * Σε → P(Q)  [P(Q) = Q-এর power set]

অর্থাৎ একটি অবস্থান থেকে একটি ইনপুটে একাধিক অবস্থানে যাওয়া যায়।
এছাড়া ε (epsilon) রূপান্তর থাকতে পারে — কোনো ইনপুট ছাড়াই অবস্থান পরিবর্তন।

<strong>Subset Construction (NFA → DFA):</strong>
NFA-এর states = {q₀, q₁, q₂}
DFA-এর প্রতিটি state = NFA-এর states-এর একটি subset
যেমন DFA state {q₀,q₁} মানে "NFA এই মুহূর্তে q₀ বা q₁-এ থাকতে পারে"
সর্বোচ্চ DFA states = 2ⁿ (যেখানে n = NFA states)

<strong>উদাহরণ — "তৃতীয় শেষ অক্ষর a" চেক করা:</strong>
NFA: ৪টি states, সহজে বর্ণনা করা যায়।
DFA: ৮টি states লাগবে (২³ = ৮)।
NFA দিয়ে ভাবা সহজ — DFA দিয়ে বাস্তবায়ন দ্রুত।
</div>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>সতর্ক পাঠ:</strong> অনির্ধারিততা (nondeterminism) মানে "এলোমেলো" নয়। NFA দৈবচক্রে (random) পথ বেছে নেয় না — সে সব পথ একসাথে অনুসরণ করে। যদি একটি পথও accept করে, সম্পূর্ণ NFA accept করে। এটা সম্ভাবনার প্রশ্ন নয় — সম্ভাবনার প্রশ্ন নয়, অস্তিত্বের প্রশ্ন।</div></div>

<div class="dialogue"><strong>তুমি:</strong> (ভাবছ) তাহলে NFA যদি DFA-এর সমান শক্তিশালী, তাহলে কেন NFA ব্যবহার করি?</div>
<div class="dialogue en"><strong>You:</strong> (thinking) If NFA is equal in power to DFA, why use NFA?</div>

<div class="dialogue"><strong>রাবিন:</strong> কারণ সহজ। চিন্তা সহজ। "তৃতীয় শেষ অক্ষর a" — এই ভাষাটি NFA দিয়ে ৪টি state-এ হয়। DFA দিয়ে চেষ্টা করো — ৮টি লাগবে। এখন যদি "শততম শেষ অক্ষর a" হয়? NFA: ১০১ states। DFA: ২¹⁰¹ states — মহাবিশ্বের পরমাণুর চেয়ে বেশি! NFA দিয়ে চিন্তা করো, DFA দিয়ে চালাও — এটাই ইঞ্জিনিয়ারিং।</div>
<div class="dialogue en"><strong>Rabin:</strong> Because it's easy. Thinking is easy. "Third-to-last character is a" — NFA does it in 4 states. Try with DFA — 8 states needed. Now if it's "hundredth-to-last character is a"? NFA: 101 states. DFA: 2¹⁰¹ states — more than atoms in the universe! Think with NFA, run with DFA — that's engineering.</div>

<div class="verse">
<strong>Rabin ও Scott-এর ঐতিহাসিক অবদান:</strong><br>
মাইকেল রাবিন (১৯৩১-২০২৬, ব্রেসলাউ/জার্মানি (এখন উরোকলাউ, পোল্যান্ড), পরে ইসরায়েল) এবং ডানা স্কট (জন্ম ১৯৩২, ক্যালিফোর্নিয়া)।<br>
"Finite Automata and Their Decision Problems" (১৯৫৯, IBM Journal of Research and Development)।<br><br>
রাবিন ও স্কট যৌথভাবে ১৯৭৬ সালে Turing Award পান — "nondeterministic machines-এর ধারণা প্রবর্তনের জন্য।" দুজনেই ছিলেন Alonzo Church-এর ছাত্র প্রিন্সটনে।
</div>

<div class="svg-diagram">
<svg viewBox="0 0 580 250" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto">
<defs><marker id="arrTC2" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto"><path d="M0,0 L0,6 L7,3 z" fill="#22d3ee"/></marker></defs>
<text x="145" y="25" text-anchor="middle" fill="#c084fc" font-size="11" font-weight="700">NFA (অনির্ধারিত)</text>
<text x="435" y="25" text-anchor="middle" fill="#4ade80" font-size="11" font-weight="700">DFA (নির্ধারিত)</text>
<line x1="289" y1="35" x2="289" y2="225" stroke="#475569" stroke-width="1" stroke-dasharray="5,5"/>
<circle cx="80" cy="100" r="22" fill="#1e3a5f" stroke="#a855f7" stroke-width="2"/>
<text x="80" y="105" text-anchor="middle" fill="#c084fc" font-size="11">q0</text>
<circle cx="210" cy="70" r="22" fill="#1e3a5f" stroke="#a855f7" stroke-width="2"/>
<text x="210" y="75" text-anchor="middle" fill="#c084fc" font-size="11">q1</text>
<circle cx="210" cy="130" r="22" fill="#1e3a5f" stroke="#a855f7" stroke-width="2"/>
<text x="210" y="135" text-anchor="middle" fill="#c084fc" font-size="11">q2</text>
<path d="M100,90 Q150,75 188,70" fill="none" stroke="#a855f7" stroke-width="1.5" marker-end="url(#arrTC2)"/>
<text x="145" y="70" fill="#fcd34d" font-size="9">a</text>
<path d="M100,110 Q150,125 188,130" fill="none" stroke="#a855f7" stroke-width="1.5" marker-end="url(#arrTC2)"/>
<text x="145" y="140" fill="#fcd34d" font-size="9">a</text>
<text x="145" y="175" text-anchor="middle" fill="#fca5a5" font-size="9">একই ইনপুটে দুই পথ!</text>
<rect x="340" y="55" width="60" height="30" rx="6" fill="#1e3a5f" stroke="#22c55e" stroke-width="2"/>
<text x="370" y="75" text-anchor="middle" fill="#4ade80" font-size="10">{q0}</text>
<rect x="460" y="50" width="60" height="30" rx="6" fill="#1e3a5f" stroke="#22c55e" stroke-width="2"/>
<text x="490" y="70" text-anchor="middle" fill="#4ade80" font-size="9">{q0,q1}</text>
<rect x="460" y="120" width="60" height="30" rx="6" fill="#1e3a5f" stroke="#22c55e" stroke-width="2"/>
<text x="490" y="140" text-anchor="middle" fill="#4ade80" font-size="9">{q0,q2}</text>
<path d="M400,65 Q430,55 460,60" fill="none" stroke="#22c55e" stroke-width="1.5" marker-end="url(#arrTC2)"/>
<text x="430" y="48" fill="#fcd34d" font-size="9">a</text>
<path d="M400,78 Q430,110 460,125" fill="none" stroke="#22c55e" stroke-width="1.5" marker-end="url(#arrTC2)"/>
<text x="410" y="115" fill="#fcd34d" font-size="9">a</text>
<text x="290" y="230" text-anchor="middle" fill="#7dd3fc" font-size="10">Subset Construction: NFA র অবস্থান-সেট = DFA র একটি অবস্থান</text>
</svg>
</div>
<div class="svg-caption">NFA এক ইনপুটে একাধিক পথ নিতে পারে, DFA ঠিক একটি। Subset construction দিয়ে NFA কে DFA তে রূপান্তর।</div>

<div class="secret-box">
<strong>🔑 গোপন সত্য:</strong> অনির্ধারিততা = সহজ চিন্তা, নির্ধারিততা = দ্রুত কাজ।<br>
<em>Nondeterminism = easy thinking, determinism = fast execution.</em>
<hr>
<div style="text-align:center;font-size:.82rem">
তাওয়াক্কুল শিক্ষা দেয় — তুমি সব সম্ভাব্য পথ দেখো, আল্লাহ সঠিকটি নির্বাচন করেন। কিন্তু গণনার জগতে — একটি পথও গন্তব্যে পৌঁছালে যন্ত্র সফল। এটা সম্ভাবনা নয়, অস্তিত্বের প্রশ্ন।
</div>
</div>`,
  senior: {
    title: "NFA প্র্যাকটিস গাইড",
    body: `<p><strong>১. NFA বানাও:</strong> "a বা b দিয়ে শুরু এবং ab দিয়ে শেষ" — NFA দিয়ে ৩ states।</p>
<p><strong>২. Subset construction অনুশীলন:</strong> একটি ৩-state NFA কে DFA-তে রূপান্তর করো। সর্বোচ্চ ৮ states — কিন্তু প্রায়ই ৪-৫টি পৌঁছায়।</p>
<p><strong>৩. ε-rules:</strong> ε রূপান্তর মানে "বিনা ইনপুটে লাফ" — এটা subset construction-এ ε-closure দিয়ে হ্যান্ডেল করা হয়।</p>
<p><strong>৪. সীমা:</strong> NFA-ও DFA-ও গণনা করতে পারে না। {aⁿbⁿ} এখনও অধরা।</p>`
  }
});

doors.push({
  num: 3,
  icon: "📜",
  color: "#a5b4fc",
  name: "স্তরে স্তরে অর্থ",
  subtitle: "Pushdown Automata & Context-Free Grammars",
  tech: "Pushdown Automata, CFG, Chomsky Hierarchy — Chomsky (1956)",
  spirit: "তাফসির — স্তরে স্তরে গভীর অর্থ, বাইরের আবরণের নিচে ভেতরের সত্য",
  secret: "একটা স্ট্যাক — স্মৃতির স্তর — যন্ত্রকে গণনা করতে শেখায়। সসীম অটোমেটন যা পারে না, স্ট্যাক তা পারে।",
  recall: {
    q: "কোন ধরনের যন্ত্র {aⁿbⁿ | n ≥ 0} ভাষাটি চিনতে পারে?",
    qen: "What type of machine can recognize {aⁿbⁿ | n ≥ 0}?",
    a: "Pushdown Automaton (PDA) — এর স্ট্যাক প্রতিটি a-কে গণনা করে রাখে, তারপর b-এর সাথে মেলায়।",
    aen: "Pushdown Automaton (PDA) — its stack counts each a, then matches against b's."
  },
  story: `<p class="scene-setting">তুমি একটা প্রাচীন গ্রন্থাগারে দাঁড়িয়ে আছ। বাতাসে পুরোনো কাগজের গন্ধ। সামনে একটা বিশাল বই — কিন্তু তুমি পড়তে পারো না। কারণ অর্থ সরাসরি নেই — স্তরে স্তরে লুকানো। বাইরের বাক্যের নিচে ভেতরের বাক্য, তার নিচে আরও গভীর অর্থ। একজন বৃদ্ধ কারিগর তোমার পাশে এসে দাঁড়ান। তার হাতে একটা স্ট্যাক — পাতার স্তূপ। তিনি প্রতিটা পাতা একটা করে উপরে রাখেন, আবার উপর থেকে তোলেন। শেষ রাখা পাতা প্রথম তোলা — Last In, First Out।</p>
<p class="scene-setting en">You stand in an ancient library. Old paper in the air. Before you, a massive book — but you cannot read it. The meaning isn't on the surface — it's layered. Beneath the outer sentence, an inner sentence, and beneath that, deeper meaning. An old craftsman stands beside you. In his hand: a stack — a pile of pages. He places each page on top, then removes from the top. Last placed, first removed — Last In, First Out.</p>

<div class="dialogue"><strong>নোয়াম চমস্কি:</strong> তুমি ভাষা শিখেছ কীভাবে? মনে করো — বাচ্চা একটা বাক্য শোনে: "বড় বিড়াল দৌড়ায়।" সে ভাবে না — শব্দগুলো একসাথে। সে ভাঙে — [বড় বিড়াল] [দৌড়ায়]। তারপর [বড়] [বিড়াল]। প্রতিটি বাক্যের একটা কাঠামো আছে — একটা গাছ। বাইরে থেকে ভেতরে, শাখা থেকে পাতায়। এই কাঠামোই Context-Free Grammar।</div>
<div class="dialogue en"><strong>Noam Chomsky:</strong> How did you learn language? Imagine — a child hears: "The big cat runs." They don't hear words together. They break it — [big cat] [runs]. Then [big] [cat]. Every sentence has a structure — a tree. From outside in, branch to leaf. This structure is a Context-Free Grammar.</div>

<div class="code-block">
<strong>Context-Free Grammar (CFG) — আনুষ্ঠানিক সংজ্ঞা:</strong>

একটি CFG হলো ৪-টুপল: (V, Σ, R, S)
• V = ভেরিয়েবলের সসীম সেট (nonterminals)
• Σ = টার্মিনাল বর্ণমালা (terminals — আসল অক্ষর)
• R = নিয়মাবলী (rules): A → w, যেখানে A ∈ V, w ∈ (V ∪ Σ)*
• S ∈ V = প্রারম্ভিক ভেরিয়েবল (start variable)

<strong>উদাহরণ — {aⁿbⁿ | n ≥ 0} এর CFG:</strong>
S → aSb | ε

অর্থাৎ: S হয় aSb হয়ে যেতে পারে (a যোগ হবে বামে, b ডানে)
অথবা ε (শূন্য) হয়ে যেতে পারে।

উদ্গমন (Derivation):
S → aSb → aaSbb → aab (n=2 এর জন্য aab → aabb)

<strong>Parse Tree (বিশ্লেষণ বৃক্ষ):</strong>
        S
       /|\\
      a S b
       /|\\
      a S b
        |
        ε
</div>

<div class="dialogue"><strong>তুমি:</strong> (উত্তেজিত) এটা তো ঠিক ব্র্যাকেট ম্যাচিং! (()) বা ((())) — প্রতিটি খোলার জন্য একটি বন্ধ।</div>
<div class="dialogue en"><strong>You:</strong> (excited) This is exactly bracket matching! (()) or ((())) — each open needs a close.</div>

<div class="dialogue"><strong>চমস্কি:</strong> হ্যাঁ! এবং এটাই প্রোগ্রামিং ভাষার ভিত্তি। প্রতিটি কম্পাইলার একটি CFG দিয়ে শুরু হয়। কিন্তু মনে আছে ক্লিনির কথা? তার সসীম অটোমেটন এটা পারত না — কারণ স্মৃতি ছিল না। আমার যন্ত্রে স্মৃতি আছে — একটা স্ট্যাক।</div>
<div class="dialogue en"><strong>Chomsky:</strong> Yes! And this is the foundation of programming languages. Every compiler starts with a CFG. But remember Kleene? His finite automaton couldn't do this — no memory. My machine has memory — a stack.</div>

<div class="callout info"><span class="co-icon">🎯</span><div><strong>Chomsky Hierarchy (চমস্কি স্তরক্রম):</strong> চমস্কি ১৯৫৬ সালে চার ধরনের গ্রামার সংজ্ঞায়িত করেন — ক্ষমতার ক্রমানুসারে:<br>
<strong>Type 3 — Regular:</strong> DFA/NFA চেনে। স্ট্যাক নেই। {ab দিয়ে শেষ}<br>
<strong>Type 2 — Context-Free:</strong> PDA চেনে। একটি স্ট্যাক। {aⁿbⁿ}<br>
<strong>Type 1 — Context-Sensitive:</strong> LBA চেনে। সীমিত টেপ। {aⁿbⁿcⁿ}<br>
<strong>Type 0 — Recursively Enumerable:</strong> শুধু Turing Machine। {সব গণনাযোগ্য ভাষা}</div></div>

<div class="dialogue"><strong>তুমি:</strong> চমস্কি স্তরক্রম — এটা তো কম্পিউটার সায়েন্সের মানচিত্র!</div>
<div class="dialogue en"><strong>You:</strong> The Chomsky Hierarchy — this is a map of computer science!</div>

<div class="dialogue"><strong>চমস্কি:</strong> (মাথা নাড়েন) হ্যাঁ। কিন্তু মনে রাখো — প্রতিটি স্তরের নিচে একটি যন্ত্র। এবং সেই যন্ত্রের ক্ষমতা তার স্মৃতি দ্বারা সীমাবদ্ধ। Regular = স্মৃতিহীন। Context-Free = এক স্ট্যাক। Context-Sensitive = সীমিত টেপ। Turing = অসীম টেপ। স্মৃতি বাড়ে, ক্ষমতা বাড়ে — কিন্তু সীমাও দেখা দেয়। টuring Machine-এ তুমি পরবর্তী দরজায় যাবে।</div>
<div class="dialogue en"><strong>Chomsky:</strong> (nods) Yes. But remember — beneath each level is a machine. And that machine's power is bounded by its memory. Regular = no memory. Context-Free = one stack. Context-Sensitive = bounded tape. Turing = infinite tape. Memory grows, power grows — but so do the limits. You'll reach the Turing Machine in the next door.</div>

<div class="verse">
<strong>নোয়াম চমস্কি (জন্ম ১৯২৮, ফিলাডেলফিয়া):</strong><br>
MIT-এ ভাষাবিজ্ঞানের অধ্যাপক। "Three Models for the Description of Language" (১৯৫৬, IRE Transactions on Information Theory) — এই paper-এ Chomsky Hierarchy প্রস্তাব করেন।<br>
পরে "Syntactic Structures" (১৯৫৭) গ্রন্থে বিস্তারিত ব্যাখ্যা করেন — এই বই ভাষাবিজ্ঞানে বিপ্লব এনেছিল।<br>
চমস্কি শুধু ভাষাবিদ নন — তিনি রাজনৈতিক ভাষ্যকারও। কিন্তু কম্পিউটার সায়েন্সে তার স্থান অনস্বীকার্য — প্রতিটি কম্পাইলার, প্রতিটি parser, প্রতিটি syntax highlighter তার তত্ত্বের উপর দাঁড়িয়ে আছে।
</div>

<div class="svg-diagram">
<svg viewBox="0 0 580 250" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto">
<text x="290" y="25" text-anchor="middle" fill="#7dd3fc" font-size="12" font-weight="700">Parse Tree: S -&gt; aSb -&gt; aaSbb -&gt; aabb</text>
<circle cx="290" cy="60" r="20" fill="#1e3a5f" stroke="#22d3ee" stroke-width="2"/>
<text x="290" y="65" text-anchor="middle" fill="#7dd3fc" font-size="12" font-weight="700">S</text>
<text x="200" y="100" text-anchor="middle" fill="#fcd34d" font-size="12">a</text>
<circle cx="250" cy="115" r="18" fill="#1e3a5f" stroke="#22d3ee" stroke-width="2"/>
<text x="250" y="120" text-anchor="middle" fill="#7dd3fc" font-size="11">S</text>
<text x="350" y="100" text-anchor="middle" fill="#fcd34d" font-size="12">b</text>
<line x1="278" y1="72" x2="200" y2="92" stroke="#475569" stroke-width="1"/>
<line x1="285" y1="78" x2="250" y2="97" stroke="#475569" stroke-width="1"/>
<line x1="302" y1="72" x2="340" y2="92" stroke="#475569" stroke-width="1"/>
<text x="165" y="155" text-anchor="middle" fill="#fcd34d" font-size="11">a</text>
<circle cx="220" cy="170" r="16" fill="#1e3a5f" stroke="#4ade80" stroke-width="2"/>
<text x="220" y="175" text-anchor="middle" fill="#4ade80" font-size="10">S</text>
<text x="280" y="155" text-anchor="middle" fill="#fcd34d" font-size="11">b</text>
<line x1="234" y1="128" x2="165" y2="145" stroke="#475569" stroke-width="1"/>
<line x1="242" y1="132" x2="220" y2="154" stroke="#475569" stroke-width="1"/>
<line x1="258" y1="128" x2="275" y2="145" stroke="#475569" stroke-width="1"/>
<text x="220" y="210" text-anchor="middle" fill="#fca5a5" font-size="10">epsilon</text>
<line x1="220" y1="186" x2="220" y2="198" stroke="#475569" stroke-width="1" stroke-dasharray="3,2"/>
<text x="420" y="130" fill="#c084fc" font-size="11">Grammar:</text>
<text x="420" y="150" fill="#c084fc" font-size="11">S -&gt; aSb | epsilon</text>
<text x="420" y="175" fill="#7dd3fc" font-size="10">বাইরে থেকে ভেতরে</text>
<text x="420" y="192" fill="#7dd3fc" font-size="10">গাছের মতো কাঠামো</text>
<text x="420" y="210" fill="#4ade80" font-size="10">= Context-Free Grammar</text>
</svg>
</div>
<div class="svg-caption">CFG পার্স বৃক্ষ: S -&gt; aSb -&gt; aSbb -&gt; aabb। বাক্যের কাঠামো গাছের মতো বাইরে থেকে ভেতরে।</div>

<div class="secret-box">
<strong>🔑 গোপন সত্য:</strong> স্ট্যাক = স্মৃতি = নতুন প্যাটার্ন।<br>
<em>Stack = memory = new patterns possible.</em>
<hr>
<div style="text-align:center;font-size:.82rem">
তাফসির শিক্ষা দেয় — প্রতিটি আয়াতের বাইরের অর্থ (জাহির), ভেতরের অর্থ (বাতিন)। CFG-ও তেমন — প্রতিটি বাক্যের বাইরের রূপ, তার নিচে গাছের মতো গভীর কাঠামো। পার্স করো, গভীরে যাও।
</div>
</div>`,
  senior: {
    title: "CFG ও PDA প্র্যাকটিস গাইড",
    body: `<p><strong>১. CFG লেখো:</strong> "ব্যালেন্সড ব্র্যাকেট" — S → (S) | SS | ε</p>
<p><strong>২. Parse tree আঁকো:</strong> একটি বাক্যের derivation গাছ আঁকো — প্রতিটি ধাপে কোন নিয়ম প্রয়োগ হয়েছে।</p>
<p><strong>৩. PDA ডিজাইন:</strong> {aⁿbⁿ}-এর জন্য: প্রতিটি a-তে push করো, প্রতিটি b-তে pop করো। শেষে স্ট্যাক খালি = accept।</p>
<p><strong>৪. বাস্তব ব্যবহার:</strong> কম্পাইলার parser (yacc/bison), JSON/XML validator, HTML DOM tree builder।</p>`
  }
});

doors.push({
  num: 4,
  icon: "⚙️",
  color: "#6366f1",
  name: "সার্বজনীন যন্ত্র",
  subtitle: "Turing Machines — The Universal Machine",
  tech: "Turing Machine, Church-Turing Thesis — Turing (1936), Church (1936)",
  spirit: "আল-খারিজমি — ধাপে ধাপে প্রক্রিয়া, অ্যালগরিদমের জন্ম",
  secret: "একটি টেপ, একটি হেড, কয়েকটি নিয়ম — এটাই মহাবিশ্বের সব গণনার ভিত্তি।",
  recall: {
    q: "Turing Machine-এর ৭-টুপল কী কী?",
    qen: "What are the 7 components of a Turing Machine's formal definition?",
    a: "(Q, Σ, Γ, δ, q₀, q_accept, q_reject) — states, input alphabet, tape alphabet, transition, start, accept, reject।",
    aen: "(Q, Σ, Γ, δ, q₀, q_accept, q_reject) — states, input alphabet, tape alphabet, transition function, start state, accept state, reject state."
  },
  story: `<p class="scene-setting">তুমি একটা সুবিশাল কক্ষে দাঁড়িয়ে আছ। মেঝে কাঁচের — নিচে একটা অসীম টেপ চলছে। টেপে ছোট ছোট চৌকোণ — প্রতিটিতে একটি চিহ্ন। টেপের উপর একটা হেড — পড়ে, লেখে, সরে। হেড শুধু একটা ঘর দেখে। কিন্তু সে যেকোনো দিকে যেতে পারে — বামে, ডানে। এবং টেপ কখনো শেষ হয় না। এই টেপ হলো স্মৃতি — অসীম স্মৃতি। ক্লিনির যন্ত্রে স্মৃতি ছিল না। চমস্কির যন্ত্রে স্মৃতি ছিল একটা স্ট্যাক। এই যন্ত্রে স্মৃতি অসীম।</p>
<p class="scene-setting en">You stand in a vast room. The floor is glass — below, an infinite tape stretches. The tape has small squares — each with a symbol. Above the tape, a head — reads, writes, moves. The head sees only one cell at a time. But it can move in either direction — left, right. And the tape never ends. This tape is memory — infinite memory. Kleene's machine had no memory. Chomsky's had one stack. This machine has infinite memory.</p>

<div class="dialogue"><strong>অ্যালান টুরিং:</strong> (শান্ত কণ্ঠে) আমি একটা প্রশ্ন ভেবেছিলাম — ১৯৩৬ সালে। প্রশ্নটা ছিল: কোনো গাণিতিক সমস্যা কি যন্ত্র দিয়ে সমাধান করা যায়? Hilbert-এর Entscheidungsproblem — সিদ্ধান্ত সমস্যা। আমি ভাবলাম — সবচেয়ে সরল যন্ত্র কী হতে পারে যে যেকোনো গণনা করতে পারে? একটা টেপ। একটা হেড। কিছু নিয়ম। ব্যস।</div>
<div class="dialogue en"><strong>Alan Turing:</strong> (quiet voice) I thought about a question — in 1936. The question was: can a mathematical problem be solved by a machine? Hilbert's Entscheidungsproblem — the decision problem. I wondered — what is the simplest machine that can perform any computation? A tape. A head. Some rules. That's it.</div>

<div class="code-block">
<strong>Turing Machine — আনুষ্ঠানিক সংজ্ঞা (৭-টুপল):</strong>

M = (Q, Σ, Γ, δ, q₀, q_accept, q_reject)

• Q = সসীম অবস্থানের সেট (states)
• Σ = ইনপুট বর্ণমালা (input alphabet, ␣ ∉ Σ)
• Γ = টেপ বর্ণমালা (tape alphabet, ␣ ∈ Γ, Σ ⊆ Γ)
• δ: Q * Γ → Q * Γ * {L, R} = রূপান্তর ফাংশন
    (বর্তমান অবস্থান + পড়া চিহ্ন → নতুন অবস্থান + লেখা চিহ্ন + দিক)
• q₀ ∈ Q = প্রারম্ভিক অবস্থান (start state)
• q_accept ∈ Q = গ্রহণ অবস্থান (accept state)
• q_reject ∈ Q = প্রত্যাখ্যান অবস্থান (reject state)

<strong>টেপের প্রতিটি ধাপে:</strong>
১. হেড বর্তমান ঘর পড়ে
২. রূপান্তর ফাংশন অনুযায়ী: নতুন চিহ্ন লেখে, নতুন অবস্থানে যায়, বামে বা ডানে সরে
৩. q_accept বা q_reject-এ পৌঁছালে থামে

<strong>Church-Turing Thesis:</strong>
যেকোনো গণনা যে একটি Turing Machine দিয়ে করা যায়, তা যেকোনো "যুক্তিযুক্ত" গণনা মডেল দিয়েও করা যায়।
এটা একটা thesis — উপপাদ্য নয়। কারণ "যুক্তিযুক্ত গণনা" আনুষ্ঠানিকভাবে সংজ্ঞায়িত নয়।
কিন্তু এখন পর্যন্ত কোনো মডেলই Turing Machine-এর চেয়ে বেশি শক্তিশালী নয়।
</div>

<div class="dialogue"><strong>তুমি:</strong> (অবাক) কিন্তু এই যন্ত্র তো অসম্ভব সরল! কোনো ক্যালকুলেটর, কোনো কম্পিউটার — কিছুই নেই। শুধু পড়ো, লেখো, সরো। এই দিয়ে কি সত্যিই সব কাজ হয়?</div>
<div class="dialogue en"><strong>You:</strong> (amazed) But this machine is absurdly simple! No calculator, no computer — nothing. Just read, write, move. Can it really do everything?</div>

<div class="dialogue"><strong>টুরিং:</strong> হ্যাঁ। এবং এটাই সবচেয়ে গভীর সত্য। এই সরল যন্ত্র যা পারে, তা তোমার হাতের সবচেয়ে শক্তিশালী সুপারকম্পিউটারও পারে — শুধু সময় বেশি লাগবে। এই যন্ত্র যা পারে না, তা মহাবিশ্বের কোনো যন্ত্র পারবে না — অন্তত Church-Turing Thesis অনুযায়ী।</div>
<div class="dialogue en"><strong>Turing:</strong> Yes. And this is the deepest truth. What this simple machine can do, your most powerful supercomputer can do — just slower. What this machine cannot do, no machine in the universe can do — at least according to the Church-Turing Thesis.</div>

<div class="callout tip"><span class="co-icon">🔌</span><div><strong>টিপ:</strong> Turing Machine এবং Church-এর Lambda Calculus একই সময়ে, একে অপরের অজ্ঞাতে, একই ফলাফলে পৌঁছেছিল। Church (১৯৩৬) "An Unsolvable Problem of Elementary Number Theory" প্রকাশ করেন — Turing (১৯৩৬) "On Computable Numbers" প্রকাশ করেন। দুজনেই দেখান — Hilbert-এর Entscheidungsproblem-এর উত্তর হলো "না" — কিছু সমস্যা গণনার বাইরে।</div></div>

<div class="dialogue"><strong>তুমি:</strong> (ফিসফিস) সবচেয়ে শক্তিশালী যন্ত্র — সবচেয়ে সরল?</div>
<div class="dialogue en"><strong>You:</strong> (whispering) The most powerful machine — is the simplest?</div>

<div class="dialogue"><strong>টুরিং:</strong> (হাসেন) এটাই গণিতের সৌন্দর্য। কিন্তু মনে রাখো — সরলতা মানে দুর্বলতা নয়। এই যন্ত্র এত শক্তিশালী যে নিজেকেও অনুকরণ করতে পারে। একটা Turing Machine অন্য Turing Machine-কে অনুকরণ করতে পারে — যদি তার বর্ণনা টেপে দেওয়া হয়। একে বলে Universal Turing Machine — এটাই আধুনিক কম্পিউটারের আদি রূপ। তোমার ল্যাপটপ একটি Universal Turing Machine — শুধু দ্রুত।</div>
<div class="dialogue en"><strong>Turing:</strong> (laughs) That's the beauty of mathematics. But remember — simplicity doesn't mean weakness. This machine is so powerful it can simulate itself. One Turing Machine can simulate another — if its description is on the tape. This is called a Universal Turing Machine — the primal form of the modern computer. Your laptop is a Universal Turing Machine — just faster.</div>

<div class="verse">
<strong>অ্যালান ম্যাথিসন টুরিং (১৯১২-১৯৫৪):</strong><br>
লন্ডনে জন্ম। কেমব্রিজ় বিশ্ববিদ্যালয়ে গবেষণা।<br>
"On Computable Numbers, with an Application to the Entscheidungsproblem" (১৯৩৬, Proceedings of the London Mathematical Society)।<br><br>
এই paper-এ Turing Machine এবং halting problem উভয়ই উপস্থাপন করা হয়েছিল।<br>
দ্বিতীয় বিশ্বযুদ্ধে ব্রিটেনের Bletchley Park-এ Enigma কোড ভাঙার নেতৃত্ব দেন।<br>
১৯৫৪ সালে মাত্র ৪১ বছর বয়সে মৃত্যু — সায়ানাইড বিষক্রিয়া।<br>
১৯৬৬ সালে তার সম্মানে Turing Award প্রবর্তন — "কম্পিউটিংয়ের নোবেল"।
</div>

<div class="svg-diagram">
<svg viewBox="0 0 580 250" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto">
<defs><marker id="arrTC4" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto"><path d="M0,0 L0,6 L7,3 z" fill="#22d3ee"/></marker></defs>
<text x="290" y="25" text-anchor="middle" fill="#7dd3fc" font-size="12" font-weight="700">Turing Machine: টেপ + হেড + নিয়ম</text>
<rect x="20" y="80" width="50" height="50" fill="#1e3a5f" stroke="#475569" stroke-width="1.5"/>
<text x="45" y="112" text-anchor="middle" fill="#64748b" font-size="14">...</text>
<rect x="70" y="80" width="50" height="50" fill="#1e3a5f" stroke="#22d3ee" stroke-width="2"/>
<text x="95" y="112" text-anchor="middle" fill="#7dd3fc" font-size="16" font-weight="700">1</text>
<rect x="120" y="80" width="50" height="50" fill="#1e3a5f" stroke="#22d3ee" stroke-width="2"/>
<text x="145" y="112" text-anchor="middle" fill="#7dd3fc" font-size="16" font-weight="700">0</text>
<rect x="170" y="80" width="50" height="50" fill="#1e3a5f" stroke="#fbbf24" stroke-width="2.5"/>
<text x="195" y="112" text-anchor="middle" fill="#fcd34d" font-size="16" font-weight="700">1</text>
<rect x="220" y="80" width="50" height="50" fill="#1e3a5f" stroke="#22d3ee" stroke-width="2"/>
<text x="245" y="112" text-anchor="middle" fill="#7dd3fc" font-size="16" font-weight="700">B</text>
<rect x="270" y="80" width="50" height="50" fill="#1e3a5f" stroke="#22d3ee" stroke-width="2"/>
<text x="295" y="112" text-anchor="middle" fill="#7dd3fc" font-size="16" font-weight="700">B</text>
<rect x="320" y="80" width="50" height="50" fill="#1e3a5f" stroke="#475569" stroke-width="1.5"/>
<text x="345" y="112" text-anchor="middle" fill="#64748b" font-size="14">...</text>
<path d="M195,60 L195,75" fill="none" stroke="#fbbf24" stroke-width="3" marker-end="url(#arrTC4)"/>
<text x="195" y="50" text-anchor="middle" fill="#fcd34d" font-size="11" font-weight="700">HEAD</text>
<rect x="120" y="155" width="120" height="40" rx="8" fill="#1e3a5f" stroke="#a855f7" stroke-width="2"/>
<text x="180" y="172" text-anchor="middle" fill="#c084fc" font-size="11" font-weight="700">state: q_read</text>
<text x="180" y="187" text-anchor="middle" fill="#c084fc" font-size="9">হেড পড়ছে, লিখছে, সরছে</text>
<path d="M180,155 L180,140 L195,130" fill="none" stroke="#a855f7" stroke-width="1.5" stroke-dasharray="3,2"/>
<text x="400" y="100" fill="#7dd3fc" font-size="11">delta(q,a) = (q', b, R)</text>
<text x="400" y="120" fill="#7dd3fc" font-size="11">পড়ো a, লেখো b, ডানে যাও</text>
<text x="400" y="150" fill="#4ade80" font-size="11">টেপ = অসীম স্মৃতি</text>
<text x="400" y="170" fill="#4ade80" font-size="11">সব গণনা সম্ভব!</text>
</svg>
</div>
<div class="svg-caption">টুরিং মেশিন: অসীম টেপ, একটি হেড, রূপান্তর নিয়ম। পড়ো, লেখো, সরো — এটাই সব গণনার ভিত্তি।</div>

<div class="secret-box">
<strong>🔑 গোপন সত্য:</strong> সরলতা + অসীম স্মৃতি = সার্বজনীন গণনা।<br>
<em>Simplicity + infinite memory = universal computation.</em>
<hr>
<div style="text-align:center;font-size:.82rem">
আল-খারিজমি (আনুমানিক ৭৮০-৮৫০) পারস্যে বীজগণিতের নিয়ম লিখেছিলেন — ধাপে ধাপে সমস্যা সমাধান। "অ্যালগরিদম" শব্দটি তার নাম থেকে। Turing Machine হলো সেই ধাপে ধাপে প্রক্রিয়ার সবচেয়ে নির্লিপ্ত রূপ — কোনো অতিরিক্ত ক্ষমতা নেই, কোনো ঘাটতি নেই।
</div>
</div>`,
  senior: {
    title: "Turing Machine প্র্যাকটিস গাইড",
    body: `<p><strong>১. TM ডিজাইন:</strong> "aⁿbⁿ চেক করো" — প্রতিটি a-কে X করো, ডানে যাও, একটি b-কে Y করো, ফিরে যাও।</p>
<p><strong>২. একাধিক টেপ:</strong> multi-tape TM এবং single-tape TM একই ক্ষমতার। multi-tape দ্রুত, কিন্তু ক্ষমতায় সমান।</p>
<p><strong>৩. Church-Turing Thesis মনে রাখো:</strong> এটি উপপাদ্য নয় — এটি একটি বিশ্বাস/থিসিস। কোয়ান্টাম কম্পিউটিং কি এটিকে চ্যালেঞ্জ করে? সর্বাধিক মতে না — কোয়ান্টাম দ্রুত, কিন্তু একই সমস্যা সমাধান করে।</p>
<p><strong>৪. বাস্তব সমতুল্য:</strong> তোমার ল্যাপটপের CPU = Universal Turing Machine। যেকোনো প্রোগ্রাম = Turing Machine এর বর্ণনা।</p>`
  }
});

doors.push({
  num: 5,
  icon: "🚧",
  color: "#818cf8",
  name: "নিষিদ্ধ প্রশ্ন",
  subtitle: "The Halting Problem — The Limit of Knowledge",
  tech: "Halting Problem, Undecidability, Diagonalization — Turing (1936)",
  spirit: "কদর — কিছু সীমা পূর্বনির্ধারিত, কিছু দরজা চিরকাল বন্ধ",
  secret: "কিছু প্রশ্নের উত্তর কোনো যন্ত্র দিতে পারে না — এটি গণনার চিরন্তন সীমা।",
  recall: {
    q: "Halting Problem কী এবং কেন এটি অসমাধানযোগ্য?",
    qen: "What is the Halting Problem and why is it unsolvable?",
    a: "একটি প্রোগ্রাম কি থামবে না চিরকাল চলবে — এই প্রশ্ন সাধারণভাবে সমাধান করা অসম্ভব। Turing diagonalization দিয়ে প্রমাণ করেছিলেন।",
    aen: "Whether a program will halt or run forever cannot be solved in general. Turing proved this via diagonalization."
  },
  story: `<p class="scene-setting">তুমি একটা অন্ধকার প্রকোষ্ঠে দাঁড়িয়ে আছ। সামনে একটা দরজা — কিন্তু দরজায় কোনো হাতল নেই। দরজায় লেখা: "এই দরজা খোলে কি? বলতে পারলে খুলব।" তুমি ভাবো — এটা তো সহজ। কিন্তু যতবার তুমি উত্তর দাও, দরজা তোমার উত্তরকে অস্বীকার করে। তুমি বলো "খোলে" — সে বলে "ভুল"। তুমি বলো "খোলে না" — সে বলে "ভুল"। কারণ এই দরজা তোমার উত্তরের উপর নির্ভর করে নিজেকে বদলে ফেলে। এটাই Halting Problem-এর আত্মা।</p>
<p class="scene-setting en">You stand in a dark chamber. Before you, a door — but no handle. Written on the door: "Does this door open? Answer correctly and I shall open." You think — easy. But each time you answer, the door rejects it. You say "opens" — it says "wrong." You say "doesn't open" — it says "wrong." Because this door changes itself based on your answer. This is the soul of the Halting Problem.</p>

<div class="dialogue"><strong>টুরিং:</strong> গত দরজায় আমি তোমাকে দেখিয়েছিলাম সার্বজনীন যন্ত্র। এখন আমি তোমাকে দেখাবো সেই যন্ত্রের সীমা। প্রশ্নটা সরল: একটা প্রোগ্রাম দেওয়া আছে। এটা কি থামবে, নাকি চিরকাল চলবে? তুমি ভাবো — চালালেই তো জানা যায়! কিন্তু যদি চিরকাল চলে? তুমি চিরকাল অপেক্ষা করবে? তখন তুমি কখনো জানবে না — থামবে কি না।</div>
<div class="dialogue en"><strong>Turing:</strong> Last door I showed you the universal machine. Now I show you its limit. The question is simple: given a program, will it halt, or run forever? You think — just run it! But what if it runs forever? You'll wait forever — never knowing whether it would have halted.</div>

<div class="dialogue"><strong>তুমি:</strong> তাহলে কি কোনো উপায় নেই?</div>
<div class="dialogue en"><strong>You:</strong> So there's no way?</div>

<div class="dialogue"><strong>টুরিং:</strong> (গম্ভীর) শুধু নেই না — উপায় থাকতে পারে না। এটি গণনার একটি চিরন্তন সীমা। কোনো যন্ত্র দিয়ে, কোনো পদ্ধতিতে, কোনোদিন এই প্রশ্নের সাধারণ উত্তর পাওয়া যাবে না। আমি প্রমাণ করি ধাঁধা দিয়ে — diagonalization।</div>
<div class="dialogue en"><strong>Turing:</strong> (grave) Not just isn't — there cannot be. This is an eternal limit of computation. No machine, no method, ever, can answer this question in general. I prove it with a paradox — diagonalization.</div>

<div class="code-block">
<strong>Halting Problem — Diagonalization Proof:</strong>

ধরো একটি যন্ত্র H(M, w) আছে যা বলতে পারে:
"Turing Machine M, ইনপুট w-এ থামবে কি না?"

H(M, w) = "হ্যাঁ (halt)" বা "না (loop forever)"

এখন একটা নতুন যন্ত্র বানাই — D(M):
১. D প্রথমে H(M, M) কে ডাকে
২. যদি H বলে "হ্যাঁ (halt)" — D চিরকাল চলে (loop)
৩. যদি H বলে "না (loop)" — D থেমে যায় (halt)

এখন প্রশ্ন: D(D) কী করে?

• যদি D(D) থামে → তাহলে H(D,D) বলেছিল "হ্যাঁ" → D-কে loop করতে হবে → কিন্তু D থামল! অন্তর্বিরোধ।
• যদি D(D) loop করে → তাহলে H(D,D) বলেছিল "না" → D-কে halt করতে হবে → কিন্তু D loop করল! অন্তর্বিরোধ।

উভয় ক্ষেত্রে অন্তর্বিরোধ! তাই H নামক যন্ত্র অস্তিত্বই রাখতে পারে না।

<strong>উপসংহার:</strong> Halting Problem আনুষ্ঠানিকভাবে অসমাধানযোগ্য (undecidable)।
এটি "কঠিন" নয় — "অসম্ভব"। কোনো যন্ত্র, কোনো প্রোগ্রাম, কোনো সময়ে সমাধান করতে পারবে না।
</div>

<div class="dialogue"><strong>তুমি:</strong> (স্তব্ধ) এর মানে... কিছু জিনিস জানাই যায় না?</div>
<div class="dialogue en"><strong>You:</strong> (stunned) This means... some things cannot be known?</div>

<div class="dialogue"><strong>টুরিং:</strong> গণনা দিয়ে — না। এটাই আমার উত্তর Hilbert-কে। Hilbert ভেবেছিলেন প্রতিটি গাণিতিক প্রশ্নের উত্তর যন্ত্র দিয়ে পাওয়া যাবে। আমি দেখালাম — না। Gödel এটা আগেই দেখিয়েছিলেন গণিতের ভাষায় (পরের দরজা)। আমি দেখালাম যন্ত্রের ভাষায়। কিছু সত্য গণনার নাগালের বাইরে।</div>
<div class="dialogue en"><strong>Turing:</strong> By computation — no. This is my answer to Hilbert. He believed every mathematical question could be answered by a machine. I showed — no. Gödel had shown it earlier in the language of mathematics (next door). I showed it in the language of machines. Some truths are beyond the reach of computation.</div>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>সতর্ক পাঠ:</strong> Halting Problem অসমাধানযোগ্য হলেও অনেক নির্দিষ্ট প্রোগ্রামের জন্য আমরা বলতে পারি থামবে কি না। সমস্যাটি হলো একটি সাধারণ যন্ত্র যা যেকোনো প্রোগ্রামের জন্য উত্তর দেবে — সেটাই অসম্ভব। মজার বিষয়: টুরিং নিজে "halting problem" শব্দটি কখনো ব্যবহার করেননি — এই শব্দটি প্রথম ব্যবহার করেন Martin Davis, ১৯৫২ সালে। Rice's Theorem (১৯৫৩) এটাকে আরও প্রসারিত করে: কোনো Turing Machine-এর কোনো অ-তুচ্ছ semantic property (যেমন "এটা কি সঠিক উত্তর দেয়?") নির্ধারণ করাও undecidable।</div></div>

<div class="verse">
<strong>Halting Problem-এর প্রভাব:</strong><br>
এটি শুধু একটি তাত্ত্বিক ফলাফল নয় — এটি প্রতিদিনের সফটওয়্যার ইঞ্জিনিয়ারিংকে প্রভাবিত করে।<br><br>
• কোনো compiler সব প্রোগ্রামের সব বাগ ধরতে পারে না (Rice's Theorem)<br>
• কোনো static analyzer সব dead code খুঁজে পাওয়ার গ্যারান্টি দিতে পারে না<br>
• কোনো IDE সব infinite loop সতর্ক করতে পারে না<br>
• কোনো OS সব deadlock প্রতিরোধ করতে পারে না (Coffman 1971)<br><br>
এই সীমাগুলো "তুমি যথেষ্ট চেষ্টা করোনি" নয় — এগুলো গণনার আইন, পদার্থবিজ্ঞানের নিয়মের মতো।
</div>

<div class="svg-diagram">
<svg viewBox="0 0 580 250" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto">
<defs><marker id="arrTC5" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto"><path d="M0,0 L0,6 L7,3 z" fill="#22d3ee"/></marker>
<marker id="arrTC5r" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto"><path d="M0,0 L0,6 L7,3 z" fill="#f87171"/></marker></defs>
<text x="290" y="25" text-anchor="middle" fill="#7dd3fc" font-size="12" font-weight="700">Halting Problem: Diagonalization</text>
<rect x="40" y="55" width="100" height="45" rx="8" fill="#1e3a5f" stroke="#22d3ee" stroke-width="2"/>
<text x="90" y="73" text-anchor="middle" fill="#7dd3fc" font-size="11" font-weight="700">H(M, w)</text>
<text x="90" y="88" text-anchor="middle" fill="#7dd3fc" font-size="9">থামবে কি?</text>
<rect x="220" y="55" width="100" height="45" rx="8" fill="#1e3a5f" stroke="#a855f7" stroke-width="2"/>
<text x="270" y="73" text-anchor="middle" fill="#c084fc" font-size="11" font-weight="700">D(M)</text>
<text x="270" y="88" text-anchor="middle" fill="#c084fc" font-size="9">H এর উল্টো</text>
<path d="M140,72 L220,72" fill="none" stroke="#22d3ee" stroke-width="1.5" marker-end="url(#arrTC5)"/>
<text x="180" y="65" text-anchor="middle" fill="#fcd34d" font-size="9">H(M,M)</text>
<text x="290" y="130" text-anchor="middle" fill="#fca5a5" font-size="13" font-weight="700">D(D) কী করে?</text>
<rect x="100" y="155" width="160" height="35" rx="6" fill="#1e3a5f" stroke="#f87171" stroke-width="2"/>
<text x="180" y="172" text-anchor="middle" fill="#fca5a5" font-size="10">থামলে -&gt; H বলেছিল থামবে</text>
<text x="180" y="184" text-anchor="middle" fill="#fca5a5" font-size="10">-&gt; D কে loop করতে হবে!</text>
<rect x="320" y="155" width="160" height="35" rx="6" fill="#1e3a5f" stroke="#f87171" stroke-width="2"/>
<text x="400" y="172" text-anchor="middle" fill="#fca5a5" font-size="10">Loop করলে -&gt; H বলেছিল লুপ</text>
<text x="400" y="184" text-anchor="middle" fill="#fca5a5" font-size="10">-&gt; D কে থামতে হবে!</text>
<path d="M270,110 L200,155" fill="none" stroke="#f87171" stroke-width="1.5" stroke-dasharray="4,3" marker-end="url(#arrTC5r)"/>
<path d="M290,110 L380,155" fill="none" stroke="#f87171" stroke-width="1.5" stroke-dasharray="4,3" marker-end="url(#arrTC5r)"/>
<text x="470" y="60" fill="#fca5a5" font-size="13" font-weight="700">CONTRADICTION!</text>
<text x="470" y="78" fill="#fca5a5" font-size="10">H অস্তিত্ব রাখতে পারে না</text>
</svg>
</div>
<div class="svg-caption">Halting Problem: D(D) উভয় ক্ষেত্রে অন্তর্বিরোধ। কোনো যন্ত্র সাধারণভাবে বলতে পারে না প্রোগ্রাম থামবে কি না।</div>

<div class="secret-box">
<strong>🔑 গোপন সত্য:</strong> সবচেয়ে গভীর জ্ঞান — নিজের সীমা জানা।<br>
<em>The deepest knowledge is knowing your own limits.</em>
<hr>
<div style="text-align:center;font-size:.82rem">
কদর (তাকদির) শিক্ষা দেয় — কিছু সীমা আল্লাহ নির্ধারণ করেছেন, মানুষের জ্ঞানের পৌঁছানোর বাইরে। Halting Problem হলো গণনার জগতে সেই সীমা — কোনো যন্ত্র পার দিতে পারবে না। এটি ব্যর্থতা নয় — এটি সত্য। সত্য মেনে নেওয়াই জ্ঞানের সর্বোচ্চ স্তর।
</div>
</div>`,
  senior: {
    title: "Halting Problem প্র্যাকটিস গাইড",
    body: `<p><strong>১. Diagonalization বুঝো:</strong> একই technique Cantor (১৮৯১) ব্যবহার করেছিলেন বাস্তব সংখ্যা গণনাযোগ্য নয় প্রমাণে। Gödel (১৯৩১) ব্যবহার করেছিলেন অসম্পূর্ণতা উপপাদ্যে। Turing (১৯৩৬) ব্যবহার করেছিলেন halting problem-এ।</p>
<p><strong>২. Rice's Theorem (১৯৫৩):</strong> Henry Rice (১৯২০-২০০৩) প্রমাণ করেন — Turing Machine-এর কোনো অ-তুচ্ছ semantic property-ই decidable নয়। অর্থাৎ প্রোগ্রাম যাচাই করা সাধারণভাবে অসম্ভব।</p>
<p><strong>৩. ব্যবহারিক প্রভাব:</strong> এজন্যই static analysis টুলস (ESLint, SonarQube) কখনো "১০০% bug-free" দাবি করতে পারে না। এটি টুলের দুর্বলতা নয় — গণনার সীমা।</p>
<p><strong>৪. সম্পর্কিত undecidable সমস্যা:</strong> Post Correspondence Problem, Wang's Tiling Problem, সাধারণ deadlock detection।</p>`
  }
});
