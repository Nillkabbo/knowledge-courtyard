// ════════════════════════════════════════
// কম্পিউটার সায়েন্সের মহাসমুদ্র — DOORS 11-15
// Sea 4: Data (D11) · Sea 5: HCI (D12-D13) · Sea 6: SE/PL (D14-D15)
// ════════════════════════════════════════

// ══ DOOR 11: DATA MINING & BIG DATA ══
doors.push({
  num:11, icon:"📊", color:"#fbbf24", name:"ডেটার পরিশোধন",
  subtitle:"The Data Refinery", tech:"Data Mining & Big Data",
  spirit:"ফিকর — গভীর চিন্তা, ডেটা থেকে অর্থ বের করা",
  secret:"Data mining + big data হলো ডেটার খনির পরবর্তী ধাপ — Lily-র খনি ডেটা ধরে, এখানে সেই ডেটা থেকে সোনা বের হয়। pattern mining, anomaly detection, recommendation, causal inference। Spark, Flink — big data processing। স্থিতিশীল ফান্ডিং, কম প্রতিযোগিতা, প্রতিটা industry-তে demand। causal inference এখন হট — correlation নয়, causation বোঝা।",
  recall:{
    q:"সামির কেন বললেন অপরিশোধিত ডেটা কাদামাটি, পরিশোধিত ডেটা সোনা?",
    qen:"Why did Samir say raw data is mud, refined data is gold?",
    a:"কারণ কাঁচা ডেটা বিশাল কিন্তু অগোছালো — কাদামাটির মতো। পরিশোধন না করলে কিছু বোঝা যায় না। কিন্তু পরিশোধন করলে — pattern, anomaly, prediction — সোনা বের হয়। Netflix জানে তুমি কী দেখবে, Amazon জানে তুমি কী কিনবে — সব এই পরিশোধনের জন্য। big data গবেষণা হলো কাদামাটি থেকে সোনা বের করার শিল্প।",
    aen:"Because raw data is vast but chaotic — like mud. Without refining, nothing is understood. But refined — patterns, anomalies, predictions — gold emerges. Netflix knows what you'll watch, Amazon what you'll buy — all from this refining. Big data research is the art of extracting gold from mud."
  },
  story:`
<p class="scene-setting">একাদশ দরজা। লিলির খনি পেরিয়ে তুমি একটা বিশাল পরিশোধন কারখানায় — কনভেয়রে চলছে কাদামাটি ভর্তি বস্তা। কিন্তু কারখানার অন্য প্রান্তে বস্তা থেকে বের হচ্ছে ঝকঝকে সোনার দানা। মাঝখানে সামির — চশমা নাকে, হাতে একটা pattern মনিটর ও একটা pipeline ডায়াগ্রাম, চোখে বিশ্লেষকের ধৈর্য। লিলি পেছনে হাসছেন — তাঁর খনির ডেটা এখানে সোনা হয়। কাদামাটির ভেজা গন্ধ, মেশিনের গর্জন, সোনার ঝনঝন।</p>
<p class="scene-setting en">The eleventh door. Past Lily's mine, you enter a vast refinery — conveyor belts carrying sacks of mud. But at the other end, gleaming gold grains emerge from the sacks. In the middle stands Samir — glasses on nose, a pattern monitor and a pipeline diagram in hand, an analyst's patience in his eyes. Lily laughs behind — her mine's data becomes gold here. Smell of wet mud, the roar of machines, the clink of gold.</p>

<div class="dialogue">লিলি বললেন, "আমি ডেটা ধরি, সামির সেই ডেটা থেকে সোনা বের করে।" সামির একটা বস্তা খুললেন — ভেতরে কাদামাটি। "এটা raw data — user click, transaction, sensor। কিছু বোঝা যায়? না। কিন্তু আমি এটা পরিশোধন করি — pattern বের করি। এই কাদামাটিতে সোনা লুকানো — কে কী কিনবে, কোন সার্ভার ভাঙবে, কোন রোগীর কী হবে। আমার কাজ হলো সেই সোনা খোঁজা।" তিনি মনিটর দেখালেন — লাখ লাখ data point-এ একটা pattern ফুটে উঠল।</div>
<div class="dialogue en">Lily said, "I hold data, Samir extracts gold from it." Samir opened a sack — mud inside. "This is raw data — user clicks, transactions, sensors. Understandable? No. But I refine it — find patterns. Gold hides in this mud — who will buy what, which server will fail, what happens to which patient. My job is finding that gold." He showed the monitor — across millions of data points, a pattern emerged.</div>

<div class="diagram">
  <div class="diag-title">Big Data Pipeline — কাঁচা ডেটা থেকে insight</div>
  <svg viewBox="0 0 560 230" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <marker id="arrowLeaf11" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><path d="M0,0 L6,4 L0,8" fill="#52c41a"/></marker>
    </defs>
    <text class="lbl-sm" x="280" y="22" fill="#7dd3fc">৫টি স্তর — প্রতিটা একটা research area</text>
    ${[ ['INGEST','Kafka, Flume',40,'cell-hot','#ff6b35'], ['STORE','Lake/Iceberg',150,'cell','#9290a8'], ['PROCESS','Spark, Flink',260,'cell-cyan','#3dd6c4'], ['MINE','pattern, anom',370,'cell-good','#52c41a'], ['ACT','recsys, decision',480,'cell-purple','#b37feb'] ].map(s=>`<rect class="${s[3]}" x="${s[2]-50}" y="55" width="100" height="50" rx="8" style="stroke:${s[4]}"/><text class="lbl-sm" x="${s[2]}" y="78" fill="${s[4]}" style="font-weight:700">${s[0]}</text><text class="lbl-sm" x="${s[2]}" y="94" fill="#9290a8" style="font-size:9px">${s[1]}</text>`).join('')}
    ${[150,260,370,480].map(x=>`<line class="edge-cyan" x1="${x-50}" y1="105" x2="${x-10}" y2="105" marker-end="url(#arrowLeaf11)"/>`).join('')}
    <text class="lbl-sm" x="90" y="135" fill="#ff6b35" style="font-size:9px">million events/sec</text>
    <text class="lbl-sm" x="280" y="150" fill="#5e5c74">প্রতিটা স্তরে চ্যালেঞ্জ — scale, fault tolerance, correctness, latency</text>
    <text class="lbl-sm" x="280" y="175" fill="#52c41a">🔥 causal inference: "কেন" বোঝো — A কি B-র কারণ, নাকি শুধু সম্পর্ক?</text>
    <text class="lbl-sm" x="280" y="195" fill="#5b9eff">streaming: real-time — সবকিছু batch নয়, live pipeline</text>
    <text class="lbl-sm" x="280" y="215" fill="#b37feb">recsys: Netflix/Amazon-এর core — billion-dollar research</text>
  </svg>
  <div class="diag-cap">big data = ৫-স্তর pipeline। প্রতিটা স্তরে depth। causal inference (কেন কিছু ঘটে) এখন সবচেয়ে হট — correlation নয়, causation।</div>
</div>

<div class="code-block">Data Mining & Big Data — গবেষণার শাখাসমূহ:

১. DATA MINING (classic + active)
   - Pattern/frequent itemset, clustering, classification
   - Anomaly detection (fraud, fault, outlier)
   - Graph mining (social, web, biological)

২. RECOMMENDATION SYSTEMS (🔥 billion-dollar)
   - Collaborative filtering, deep recsys, two-tower
   - Sequential, session-based, LLM-based recsys
   - Bandits, RL for recsys (Door 3 crossover)

৩. CAUSAL INFERENCE (🔥🔥 সবচেয়ে হট)
   - "কেন" বোঝা — A কি B-র কারণ?
   - Do-calculus, IV, synthetic control, double ML
   - Causal discovery, counterfactual

৪. BIG DATA SYSTEMS (Door 10 crossover)
   - Spark, Flink, Beam — distributed processing
   - Stream processing, exactly-once, stateful
   - Lakehouse (Iceberg, Delta — Door 10)

৫. TIME SERIES & SPATIAL
   - Forecasting, change-point, seasonality
   - Spatial mining, geo, mobility data

৬. FAIRNESS & RESPONSIBLE MINING
   - Bias in data, fairness-aware mining
   - Privacy-preserving mining (Door 9 crossover)
   - Explainable patterns</div>

<table class="kv-table"><tr><th>উপ-ক্ষেত্র</th><th>বিষয়</th><th>কনফারেন্স</th></tr>
<tr><td class="hl">🔥🔥 Causal</td><td>Do-calculus, IV, double ML, counterfactual</td><td>KDD, AISTATS, NeurIPS</td></tr>
<tr><td class="hl">🔥 Recsys</td><td>Deep recsys, sequential, LLM-based, bandits</td><td>RecSys, KDD, WSDM, WWW</td></tr>
<tr><td class="hl">📊 Mining</td><td>Pattern, anomaly, graph, clustering</td><td>KDD, ICDM, SDM, CIKM</td></tr>
<tr><td class="hl">🌊 Big Data Sys</td><td>Spark, Flink, streaming, lakehouse</td><td>SIGMOD, VLDB, DEEM</td></tr>
<tr><td class="hl">📈 Time/Spatial</td><td>Forecasting, geo, mobility</td><td>KDD, ICDM, SIGSPATIAL</td></tr>
<tr><td class="hl">⚖️ Fairness</td><td>Bias, fairness-aware, privacy-preserving</td><td>FAccT, KDD, AIES</td></tr></table>

<div class="stat-grid">
<div class="stat-card"><div class="sc-num">৫-৮%</div><div class="sc-label">গ্রহণের হার</div></div>
<div class="stat-card"><div class="sc-num">$৩০০M+</div><div class="sc-label">NSF + industry ফান্ডিং</div></div>
<div class="stat-card"><div class="sc-num">$১৫০-৩৫০K</div><div class="sc-label">industry (Netflix, Amazon, Meta, finance)</div></div>
<div class="stat-card"><div class="sc-num">🔥 causal</div><div class="sc-label">সবচেয়ে হট, সর্বোচ্চ academic demand</div></div>
</div>

<div class="compare">
<div class="cmp-card cmp-bad"><div class="cmp-label">❌ ভুল ধারণা</div>"Data mining = শুধু SQL query আর Excel chart। নতুন কিছু নেই।" ভুল। causal inference ("আমার পেপার কি তার কেনাকাটা বাড়িয়েছে?"), deep recsys (billion-parameter), graph neural net, real-time streaming fraud detection — সব active research। correlation নয়, causation — এটাই এখন KDD-র হট test।</div>
<div class="cmp-card cmp-good"><div class="cmp-label">✅ সঠিক ধারণা</div>"Data mining + big data = ডেটা থেকে actionable insight। causal inference এখন সবচেয়ে হট — কারণ industry চায় 'কেন', শুধু 'কী' নয়। recsys = Netflix/Amazon-এর মূল। stable funding, প্রতিটা industry-তে demand। গাণিতিক (statistics) ও engineering দুটোই জোড়া লাগে।"</div>
</div>

<div class="callout info"><span class="co-icon">📈</span><div><strong>২০২৪-২৬-তে যা বড়:</strong> causal inference (double ML, synthetic control — econometrics × ML), LLM-based recsys, graph neural networks, real-time streaming fraud (Flink), responsible mining (fairness, privacy), foundation models for tabular data (TabPFN, ২০২৫)।</div></div>

<div class="callout tip"><span class="co-icon">🧭</span><div><strong>তোমার জন্য কি ঠিক?</strong> ✅ statistics/probability ভালোবাসো · ✅ pattern খোঁজা ভালো লাগে · ✅ industry-impact (finance, e-commerce, health) · ✅ database (Door 10) পরিচিত · 💡 causal inference = সবচেয়ে হট, কম ভিড়, উচ্চ demand।</div></div>

<div class="dialogue">"ডেটা গবেষণার গভীরতা হলো," সামির বললেন, "শুধু pattern খোঁজা নয় — কারণ খোঁজা। correlation বলে 'দুটো একসাথে ঘটে'। causation বলে 'একটা আরেকটার কারণ'। Netflix জানে তুমি A দেখলে B-ও দেখবে — correlation। কিন্তু A কি তোমাকে B দেখায়? সেটা causation। industry এখন causal চায় — কারণ সিদ্ধান্ত নিতে হয়। যে causal বোঝে, সে শুধু ভবিষ্যৎ দেখে না — ভবিষ্যৎ বদলায়।"</div>
<div class="dialogue en">"The depth of data research," Samir said, "isn't just finding patterns — it's finding causes. Correlation says 'two happen together'. Causation says 'one causes the other'. Netflix knows if you watch A you'll watch B — correlation. But does A make you watch B? That's causation. Industry now wants causal — because decisions must be made. One who grasps causation, doesn't just see the future — changes it."</div>

<div class="dialogue">ফিকর — গভীর চিন্তা, প্রতিফলন। কুরআনে আল্লাহ বারবার বলেন: "তোমরা কি চিন্তা করো না?" আসমান, যমীন, নিজের সৃষ্টি — সবকিছুতে ফিকর করতে বলা হয়েছে। data mining হলো ফিকর — ডেটার ভেতরে গভীর চিন্তা করা, pattern নয় অর্থ খোঁজা। causal inference হলো সবচেয়ে গভীর ফিকর — শুধু 'কী ঘটে' নয়, 'কেন ঘটে'। যে ফিকর করে, সে আল্লাহর নিদর্শন দেখে — ডেটাতেও। প্রতিটা pattern একটা আয়াত, প্রতিটা cause একটা হিকমাহ।</div>
<div class="dialogue en">Fikr — deep thought, reflection. Allah repeatedly says: "Do you not think?" In the heavens, earth, one's own creation — fikr is urged in everything. Data mining is fikr — deep thinking within data, seeking meaning not just patterns. Causal inference is the deepest fikr — not just 'what happens' but 'why'. One who does fikr sees Allah's signs — even in data. Each pattern is an ayah, each cause a hikmah.</div>

<div class="secret-box">📊 Data Mining + Big Data: ডেটা থেকে সোনা। স্থিতিশীল ফান্ডিং, কম ভিড় (৫-৮%), প্রতিটা industry-তে demand। হট: causal inference (কেন ঘটে), deep recsys, streaming। database (Door 10) পরিচিত থাকলে সহজ।</div>`,
  senior:{
    title:"Data Mining/Big Data PhD — Senior Path",
    body:`<p><strong>Causal inference = সবচেয়ে হট:</strong> double ML, synthetic control, Do-calculus — econometrics × ML crossover। industry (tech, pharma, policy) এখন causal গবেষক খুঁজছে। "A causes B" প্রমাণ করার method = high-demand skill। Susan Athey, Guido Imbens (২০২১ নোবেল)-এর কাজ পড়ো।</p><p><strong>Recsys with LLMs:</strong> LLM-based recommendation এখন জন্ম নিচ্ছে। একটা GPT-based recsys re-implement করো — RecSys workshop-এ লক্ষ্য। Netflix, Amazon-এর প্রকাশ্য দল এই area-তে hire করে।</p><p><strong>Kaggle দিয়ে portfolio:</strong> একটা Kaggle competition-এ top-10 = concrete credential। দেখায় তুমি real data থেকে insight বের করতে পারো। KDD Cup-এ অংশ নাও।</p><p><strong>Streaming = engineering-heavy:</strong> Flink/Spark-এ একটা real-time fraud/anomaly system বানাও। SIGMOD/VLDB demo track = সহজ entry।</p>`
  }
});

// ══ DOOR 12: INTERACTION & ACCESSIBILITY ══
doors.push({
  num:12, icon:"👋", color:"#c084fc", name:"স্পর্শের সেতু",
  subtitle:"The Bridge of Touch", tech:"Interaction & Accessibility",
  spirit:"রহম — করুণা, অন্যের কষ্ট বোঝা",
  secret:"HCI হলো CS-এর সবচেয়ে কম প্রতিযোগিতার (৮-১২%) ডোমেইন — কিন্তু সবচেয়ে বেশি মানব-প্রভাব। কোড নয়, মানুষ নিয়ে কাজ — user study, interview, qualitative। প্রতিটা ইন্টারফেস, প্রতিটা accessibility feature মানুষের জীবন বদলায়। তুমি Ipractus বানিয়েছ — UI তোমার পরিচিত। এখানে সেই UI-কে সবার জন্য, বিশেষত প্রতিবন্ধী ও বৃদ্ধদের জন্য, খোলা করা হয়।",
  recall:{
    q:"আয়েশা কেন বললেন সেতু শুধু দুই পাড় যোগ করে না, মানুষকে যোগ করে?",
    qen:"Why did Ayesha say a bridge doesn't just connect two banks, it connects people?",
    a:"কারণ একটা সেতু শুধু দুটো জায়গাকে যোগ করে না — দুটো দুনিয়াকে। HCI হলো সেই সেতু — কম্পিউটার আর মানুষের মাঝে। যে সেতু বানায়, সে মানুষকে প্রযুক্তির দুনিয়ায় নিয়ে যায়। কিন্তু সেতু যদি অ্যাক্সেসিবল না হয় — অন্ধ, প্রতিবন্ধী, বৃদ্ধ পার হতে পারবে না। accessibility = সবার জন্য সেতু। এটাই রহম — কারও কষ্ট না বুঝলে সেতু অসম্পূর্ণ।",
    aen:"Because a bridge doesn't just connect two places — it connects two worlds. HCI is that bridge — between computer and human. One who builds the bridge brings people into the digital world. But if the bridge isn't accessible — the blind, disabled, elderly can't cross. Accessibility = a bridge for everyone. This is rahm — without understanding someone's struggle, the bridge is incomplete."
  },
  story:`
<p class="scene-setting">দ্বাদশ দরজা। সামিরের পরিশোধন কারখানা পেরিয়ে তুমি একটা নদীর উপর সুন্দর সেতুতে — কিন্তু একটু অদ্ভুত। সেতুর এক পাশে সিঁড়ি, অন্য পাশে র‍্যাম্প। কোথাও tactile paving (উঁচু দাগ, অন্ধদের জন্য), কোথাও audio signal। সেতুতে হাঁটছে বিভিন্ন মানুষ — একজন হাতে সাদা ছড়ি, একজন হুইলচেয়ারে, একজন বৃদ্ধ। সেতুর মাঝখানে বসে আছেন আয়েশা — হাতে একটা ক্লে-মডেল (UI prototype), চোখে সহানুভূতি, মুখে কোমল হাসি। তাঁর পাশে ছড়ানো paper prototype, color sample, user-testing note। নদীর শব্দ, কাগজের খসখস, হালকা বাতাস।</p>
<p class="scene-setting en">The twelfth door. Past Samir's refinery, you reach a beautiful bridge over a river — but slightly strange. Stairs on one side, a ramp on the other. Tactile paving (raised lines, for the blind) here, audio signal there. Various people walk — one with a white cane, one in a wheelchair, an elderly person. At the bridge's center sits Ayesha — a clay-model (UI prototype) in hand, empathy in eyes, gentle smile on face. Beside her: paper prototypes, color samples, user-testing notes. River sound, paper rustle, light breeze.</p>

<div class="dialogue">সামির পেছন থেকে বললেন, "আমি ডেটা থেকে insight বের করি, কিন্তু সেই insight কার কাছে পৌঁছায়?" আয়েশা হাসলেন। "আমার কাছে।" তিনি সেতুর দিকে তাকালেন। "এই সেতু — এটাই HCI। কম্পিউটার এক দুনিয়া, মানুষ আরেক দুনিয়া। এই দুই দুনিয়ার মাঝে সেতু — সেটাই interaction। কিন্তু সেতু যদি সবার জন্য না হয়?" তিনি হুইলচেয়ারের মানুষটিকে দেখালেন — সিঁড়ি দিয়ে উঠতে পারছে না। "অ্যাক্সেসিবিলিটি — সবার জন্য সেতু। অন্ধ, বধির, প্রতিবন্ধী, বৃদ্ধ — সবার জন্য।"</div>
<div class="dialogue en">Samir said from behind, "I extract insight from data, but to whom does that insight reach?" Ayesha smiled. "To me." She looked at the bridge. "This bridge — that's HCI. Computer is one world, human is another. The bridge between them — that's interaction. But what if the bridge isn't for everyone?" She showed the person in the wheelchair — unable to climb the stairs. "Accessibility — a bridge for everyone. The blind, deaf, disabled, elderly — for all."</div>

<div class="diagram">
  <div class="diag-title">HCI — কোড নয়, মানুষ নিয়ে গবেষণা</div>
  <svg viewBox="0 0 560 230" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <marker id="arrowPurple12" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><path d="M0,0 L6,4 L0,8" fill="#b37feb"/></marker>
      <marker id="arrowCyan12" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><path d="M0,0 L6,4 L0,8" fill="#3dd6c4"/></marker>
    </defs>
    <text class="lbl-sm" x="100" y="40" fill="#b37feb">QUALITATIVE</text>
    <text class="lbl-sm" x="380" y="40" fill="#3dd6c4">QUANTITATIVE</text>
    <!-- Qual methods -->
    ${[ ['Interview','user-এর কথা শোনো',55], ['Observation','কী করে দেখো',55], ['Think-aloud','করতে করতে বলো',55] ].map((s,i)=>`<rect class="cell-purple" x="30" y="${60+i*32}" width="150" height="26" rx="5"/><text class="lbl-sm" x="${105}" y="${76+i*32}" fill="#b37feb">${s[0]}</text>`).join('')}
    <!-- Quant methods -->
    ${[ ['A/B test','দুটো design তুলনা',380], ['Eye-tracking','কোথায় তাকায়',380], ['Logs/metrics','click, time, error',380] ].map((s,i)=>`<rect class="cell-cyan" x="290" y="${60+i*32}" width="160" height="26" rx="5"/><text class="lbl-sm" x="${370}" y="${76+i*32}" fill="#3dd6c4">${s[0]}</text>`).join('')}
    <!-- converge to insight -->
    <line class="edge-amber" x1="180" y1="110" x2="270" y2="150" style="stroke:#b37feb"/>
    <line class="edge-amber" x1="290" y1="110" x2="270" y2="150" style="stroke:#3dd6c4"/>
    <rect class="cell-good" x="210" y="145" width="140" height="34" rx="8"/>
    <text class="lbl" x="280" y="167" fill="#52c41a">INSIGHT → DESIGN</text>
    <text class="lbl-sm" x="280" y="205" fill="#5e5c74">HCI = দুই method মিলিয়ে — সংখ্যা বলে 'কত', কথা বলে 'কেন'</text>
    <text class="lbl-sm" x="280" y="222" fill="#5e5c74">accessibility = এই insight সব মানুষের জন্য প্রয়োগ — বিশেষভাবে প্রতিবন্ধী/বৃদ্ধ</text>
  </svg>
  <div class="diag-cap">HCI একা quantitative নয়, একা qualitative নয় — দুটো মিলে। সংখ্যা বলে 'কত মানুষ ভুল করল', interview বলে 'কেন ভুল করল'। accessibility = এই গবেষণা সব মানুষের জন্য খোলা রাখা।</div>
</div>

<div class="code-block">Interaction & Accessibility — গবেষণার শাখাসমূহ:

১. INTERACTION TECHNIQUES
   - Touch, gesture, voice, gaze, haptic
   - AR/VR interaction (Door 13)
   - Tangible, mid-air, brain-computer (Door 13)

২. ACCESSIBILITY (🔥 সবচেয়ে প্রভাবশালী)
   - Screen readers, magnification, switch access
   - Motor impairment (keyboard, voice control)
   - Cognitive (reading, attention, autism)
   - Aging — older adults, dementia

৩. CSCW (Computer-Supported Cooperative Work)
   - Collaboration tools, remote work, Figma/Docs
   - Social computing, online communities
   - Hybrid/remote work (post-COVID)

৪. UBIQUITOUS & MOBILE
   - IoT interaction, wearables, smart home
   - Context-aware, location-based
   - Mobile UX, cross-device

৫. ACCESSIBLE AI (🔥 crossover)
   - AI for accessibility (auto-caption, sign language)
   - Accessibility of AI (screen-reader + LLM)
   - Inclusive design with LLMs

৬. HCI METHODS & THEORY
   - Design methods, participatory design
   - Human performance modeling
   - Critical HCI, post-colonial, feminist HCI</div>

<table class="kv-table"><tr><th>উপ-ক্ষেত্র</th><th>বিষয়</th><th>কনফারেন্স</th></tr>
<tr><td class="hl">♿ Accessibility</td><td>Screen reader, motor, cognitive, aging</td><td>ASSETS, CHI, W4A, TACCESS</td></tr>
<tr><td class="hl">👋 Interaction</td><td>Touch, gesture, voice, gaze, haptic</td><td>CHI, UIST, TEI, ISS</td></tr>
<tr><td class="hl">👥 CSCW</td><td>Collab tools, social, remote work</td><td>CSCW, CHI, GROUP</td></tr>
<tr><td class="hl">📱 UbiComp</td><td>IoT, wearables, mobile, context-aware</td><td>UbiComp, MobiCom, CHI</td></tr>
<tr><td class="hl">🔥 Accessible AI</td><td>AI for access, access of AI, inclusive LLM</td><td>ASSETS, CHI, AIES</td></tr>
<tr><td class="hl">🧠 Methods/Theory</td><td>Participatory, human perf, critical HCI</td><td>CHI, DIS, CSCW</td></tr></table>

<div class="stat-grid">
<div class="stat-card"><div class="sc-num">৮-১২%</div><div class="sc-label">গ্রহণের হার (সবচেয়ে কম প্রতিযোগিতা)</div></div>
<div class="stat-card"><div class="sc-num">$২০০M+</div><div class="sc-label">NSF HCI ফান্ডিং</div></div>
<div class="stat-card"><div class="sc-num">$১২০-২৮০K</div><div class="sc-label">UX researcher বেতন</div></div>
<div class="stat-card"><div class="sc-num">সর্বোচ্চ</div><div class="sc-label">মানব-প্রভাব</div></div>
</div>

<div class="compare">
<div class="cmp-card cmp-bad"><div class="cmp-label">❌ ভুল ধারণা</div>"HCI = শুধু UI design, সুন্দর button বানানো। গবেষণা নয়, শিল্প।" ভুল। HCI হলো মানুষ কীভাবে প্রযুক্তি বোঝে ও ব্যবহার করে তার বিজ্ঞান — user study, statistics, cognitive modeling, behavioral experiment। Fitts' law, Hick's law — এগুলো সরাসরি বিজ্ঞান। accessibility research একটা গোটা field — অন্ধ মানুষ কীভাবে screen reader ব্যবহার করে, সেটা গবেষণা।</div>
<div class="cmp-card cmp-good"><div class="cmp-label">✅ সঠিক ধারণা</div>"HCI হলো কম্পিউটার + মানুষের intersection — বিজ্ঞান ও শিল্প দুটোই। qualitative + quantitative method দরকার। সবচেয়ে কম প্রতিযোগিতা, সবচেয়ে বেশি মানব-প্রভাব। accessibility = প্রতিটা মানুষের জন্য প্রযুক্তি খোলা করা — ন্যায্যতা, ইনসাফ। তোমার UI অভিজ্ঞতা (Ipractus) এখানে সোনা।"</div>
</div>

<div class="callout info"><span class="co-icon">📈</span><div><strong>২০২৪-২৬-তে যা বড়:</strong> accessible AI (LLM auto-caption, sign language gen, screen reader + LLM), AI agents accessibility, aging-in-place tech (dementia support), XR accessibility, participatory AI design, accessible coding tools (Copilot for blind devs)।</div></div>

<div class="callout tip"><span class="co-icon">🧭</span><div><strong>তোমার জন্য কি ঠিক?</strong> ✅✅ হ্যাঁ — তুমি Ipractus (React Native) বানিয়েছ, UI পরিচিত। কম প্রতিযোগিতা (৮-১২%), সর্বোচ্চ মানব-প্রভাব। ✅ মানুষ বোঝো · ✅ design + psychology আগ্রহ · ⚠️ শুধু কোডিং নয় — qualitative skill দরকার · 💡 accessibility = সবচেয়ে গুরুত্বপূর্ণ sub-field, কম ভিড়।</div></div>

<div class="dialogue">"HCI-এর একটা বিশেষত্ব আছে," আয়েশা বললেন। "অন্যান্য ডোমেইনে তুমি শুধু কোড দিয়ে কাজ করো। HCI-তে তুমি মানুষকে নিয়ে কাজ করো। user study — মানুষকে দেখো, কথা বলো, বোঝো। এর জন্য qualitative research skill দরকার — interview, observation, thematic analysis। কিন্তু এই কারণেই HCI গবেষণা সবচেয়ে প্রভাবশালী — তুমি সরাসরি মানুষের জীবন স্পর্শ করো। তুমি Ipractus বানিয়েছ — মানুষ কীভাবে সেটা ব্যবহার করবে, সেটা ভেবেছ। এই চিন্তাই HCI।"</div>
<div class="dialogue en">"HCI has a uniqueness," Ayesha said. "In other domains you work only with code. In HCI, you work with people. User studies — watch people, talk to them, understand them. This needs qualitative skills — interview, observation, thematic analysis. But this is exactly why HCI research is most impactful — you directly touch people's lives. You built Ipractus — you thought about how people use it. That thinking is HCI."</div>

<div class="dialogue">রহম — করুণা, অন্যের কষ্ট বোঝা। আল্লাহ বলেন: "আমি তোমাদের মাঝে রহমত বানিয়েছি।" HCI গবেষণা হলো রহম — অন্যের কষ্ট বোঝা। অন্ধ মানুষ কীভাবে কম্পিউটার ব্যবহার করে? প্রতিবন্ধী মানুষ কীভাবে অ্যাক্সেস করে? বৃদ্ধ মানুষ কীভাবে প্রযুক্তি ব্যবহার করে? এই প্রশ্ন করা = রহম। যে রহম করে, সে মানুষের জীবন সহজ করে। accessibility গবেষণা হলো প্রতিটা মানুষের জন্য প্রযুক্তি খোলা করা। এটা ন্যায্যতা, এটা ইনসাফ। যে ইনসাফ করে, সে আল্লাহর প্রিয়।</div>
<div class="dialogue en">Rahm — compassion, understanding others' pain. Allah says: "We have placed mercy among you." HCI research is rahm — understanding others' pain. How does a blind person use a computer? How does a disabled person access it? How does an elderly person use technology? Asking these questions = rahm. One who is compassionate, makes people's lives easier. Accessibility research is opening technology for every person. This is equity, this is justice. One who does justice, is beloved to Allah.</div>

<div class="secret-box">👋 HCI: সবচেয়ে কম প্রতিযোগিতা (৮-১২%), সবচেয়ে বেশি human impact। কোড + qualitative (user study)। accessibility = সবার জন্য প্রযুক্তি। তোমার Ipractus UI অভিজ্ঞতা সোনা।</div>`,
  senior:{
    title:"HCI/Accessibility PhD — Senior Path",
    body:`<p><strong>সবচেয়ে কম প্রতিযোগিতা:</strong> ৮-১২% admit rate, AI-এর চেয়ে ৩-৪ গুণ বেশি সুযোগ। তোমার UI অভিজ্ঞতা (Ipractus) এখানে direct relevance — বিরল combination।</p><p><strong>Accessibility = সবচেয়ে গুরুত্বপূর্ণ:</strong> ASSETS conference (specialized), CHI accessibility track। একটা real accessibility study (যেমন "বাংলা screen reader usability") — concrete, impactful, citable। প্রতিবন্ধী community-র সাথে কাজ = deep meaning।</p><p><strong>Qualitative skill শিখো:</strong> semi-structured interview, thematic analysis (Braun &amp; Clarke), grounded theory। একটা ৫-user study একটা ৫০০-user survey-এর চেয়ে বেশি insight দিতে পারে। UX research book — 'Just Enough Research'।</p><p><strong>Accessible AI crossover:</strong> LLM দিয়ে accessibility (auto-caption, sign language, image description for blind) — এখন হট। তোমার AI আগ্রহ + HCI = এই niche। ASSETS/CHI-তে প্রথম দিকের পেপার = বড় impact।</p>`
  }
});

// ══ DOOR 13: AR/VR & BCI (placeholder) ══
doors.push({
  num:13, icon:"🥽", color:"#c084fc", name:"অন্য দুনিয়ার দরজা",
  subtitle:"The Other-World Gate", tech:"AR/VR & Brain-Computer Interfaces",
  spirit:"মিসর — অন্য জগতে যাত্রা",
  secret:"AR/VR (virtual environments, mixed reality, spatial) + BCI (EEG, neural prosthetics)।",
  recall:{q:"(প্লেসহোল্ডার)",qen:"(placeholder)",a:"পূর্ণ কন্টেন্ট শীঘ্রই।",aen:"Full content coming soon."},
  story:`<p class="scene-setting">দরজা ১৩ — অন্য দুনিয়ার দরজা। পূর্ণ গভীর ডুব শীঘ্রই।</p><p class="scene-setting en">Door 13 — the Other-World Gate. Full deep dive coming soon.</p>`
});

// ══ DOOR 14: SOFTWARE ENGINEERING (placeholder) ══
doors.push({
  num:14, icon:"⚙️", color:"#64748b", name:"কোডের কারখানা",
  subtitle:"The Code Factory", tech:"Software Engineering",
  spirit:"ইহসান — সুন্দরভাবে কাজ করা",
  secret:"SE — testing, verification, program analysis, DevOps। প্রতিটা ডেভেলপার এটা ব্যবহার করে।",
  recall:{q:"(প্লেসহোল্ডার)",qen:"(placeholder)",a:"পূর্ণ কন্টেন্ট শীঘ্রই।",aen:"Full content coming soon."},
  story:`<p class="scene-setting">দরজা ১৪ — কোডের কারখানা। পূর্ণ গভীর ডুব শীঘ্রই।</p><p class="scene-setting en">Door 14 — the Code Factory. Full deep dive coming soon.</p>`
});

// ══ DOOR 15: PROGRAMMING LANGUAGES & AI4SE (placeholder) ══
doors.push({
  num:15, icon:"🔤", color:"#64748b", name:"ভাষার স্রষ্টা",
  subtitle:"The Language Maker", tech:"Programming Languages & AI4SE 🔥",
  spirit:"বায়ান — স্পষ্ট ভাষা, নির্ভুল প্রকাশ",
  secret:"PL (type systems, compilers, Rust safety) + AI4SE (code gen, bug detection, LLM for code)। হট area।",
  recall:{q:"(প্লেসহোল্ডার)",qen:"(placeholder)",a:"পূর্ণ কন্টেন্ট শীঘ্রই।",aen:"Full content coming soon."},
  story:`<p class="scene-setting">দরজা ১৫ — ভাষার স্রষ্টা। পূর্ণ গভীর ডুব শীঘ্রই।</p><p class="scene-setting en">Door 15 — the Language Maker. Full deep dive coming soon.</p>`
});
