// ════════════════════════════════════════
// অবিচ্ছেয্য কারিগর — DOORS 6-10
// Irreplaceable Engineer: Communication → Timeless Value
// ════════════════════════════════════════

// ══ DOOR 6: COMMUNICATION ══
doors.push({
  num:6, icon:"📝", color:"#fb923c", name:"বাক্যের কারিগর",
  subtitle:"The Communication Multiplier", tech:"Explaining Complex Ideas Simply",
  spirit:"বায়ান — স্পষ্ট বাক্য, প্রকাশ",
  secret:"১০x ইঞ্জিনিয়ার একা কাজ করে না — দল নিয়ে কাজ করে। দল নিয়ে কাজ = যোগাযোগ। যে স্পষ্ট বলে, সে ১০ জনকে এক দিকে চালায়। যে অস্পষ্ট বলে, সে একা দ্রুত, দল ধীর। বায়ান — স্পষ্ট বাক্যের নূর। যে স্পষ্ট বলে, সে আলো।",
  recall:{
    q:"ষষ্ঠ দরজায় কারিগর কেন তোমাকে বললেন গল্প বলতে?",
    qen:"Why were you told to tell a story?",
    a:"কারণ ১০x ইঞ্জিনিয়ার একা কাজ করে না — দল নিয়ে। দল = যোগাযোগ। স্পষ্ট বাক্য = ১০ জনকে এক দিকে। অস্পষ্ট = একা দ্রুত, দল ধীর। বায়ান — স্পষ্ট বাক্যের নূর।",
    aen:"Because a 10x engineer doesn't work alone — leads a team. Team = communication. Clear words = 10 people aligned. Unclear = fast alone, slow team. Bayan — light of clear speech."
  },
  story:`<p class="scene-setting">ষষ্ঠ দরজা। একটা কারখানার মেঝে। দশজন কারিগর একটা জিনিস বানাচ্ছে। কিন্তু প্রত্যেকে ভিন্ন ভিন্ন পিছন বুঝছে। কেউ বলছে গোল, কেউ চৌকো, কেউ ত্রিভুজ। কারিগর ইউসুফ এক জায়গায় দাঁড়িয়ে একটা ছবি আঁকলেন — সবাই দেখল। হঠাৎ সবাই একমত। একটা ছবি = দশজনের একতা। "এটাই communication," ইউসুফ বললেন। "স্পষ্ট বাক্য = সবাই এক দিকে।"</p>
<p class="scene-setting en">The sixth door. A factory floor. Ten craftsmen building one thing. But each understands a different blueprint. One says circle, one square, one triangle. Craftsman Yusuf draws one picture — everyone sees. Suddenly everyone agrees. One picture = ten people aligned. "This is communication," Yusuf said. "Clear words = everyone in one direction."</p>

<div class="dialogue">Problem finding বলেছিলেন — সমস্যা খুঁজো। কিন্তু আমি বলি — সমস্যা খুঁজলেও দলকে বোঝাতে না পারলে কিছু হবে না। যোগাযোগ ছাড়া তুমি একা। একা প্রতিভা সীমিত। দল প্রতিভা অসীম। স্পষ্ট বাক্য = ১০x multiplier। যে স্পষ্ট বলে, সে দল নির্দেশ দেয়। যে অস্পষ্ট বলে, সে বিভ্রান্তি ছড়ায়।</div>
<div class="dialogue en">"Problem finding said — find problems. But I say — even if you find problems, without communicating them to the team, nothing happens. Without communication, you're alone. Solo talent is limited. Team talent is infinite. Clear speech = 10x multiplier. One who speaks clearly, directs the team. One who speaks unclearly, spreads confusion."</div>

<div class="callout info"><span class="co-icon">✖️</span><div><strong>যোগাযোগ = #১ senior skill:</strong> senior-এর কাজ বেশি কোড লেখা নয় — টিমের output গুণ করা। IC = নিজের কোড = ১x। ভালো যোগাযোগকারী senior = টিম output = ৫-১০x। খারাপ যোগাযোগকারী = নিজের কোড + টিম confusion = <strong>০.৫x (negative multiplier!)</strong> — misalignment, rework, conflict।</div></div>

<table class="kv-table"><tr><th>স্তর</th><th>কাকে</th><th>কীভাবে</th></tr>
<tr><td class="hl">১. Peers</td><td>অন্য engineer</td><td>code review, design doc — shared technical understanding</td></tr>
<tr><td class="hl">২. Stakeholders</td><td>PM, business</td><td>tech → business impact ("সপ্তাহে ৫ ঘণ্টা বাঁচায়", GraphQL migration নয়)</td></tr>
<tr><td class="hl">৩. Non-technical</td><td>user, exec</td><td>tech → human value ("৫s নয়, ১s-এ load হবে")</td></tr></table>

<table class="kv-table"><tr><th>ডকুমেন্ট</th><th>উদ্দেশ্য</th></tr>
<tr><td class="hl">Design doc (RFC/ADR)</td><td>বানানোর আগে align — সপ্তাহের rework রোধ</td></tr>
<tr><td class="hl">README</td><td>নতুন dev-দের ঘণ্টায় onboard, সপ্তাহে নয়</td></tr>
<tr><td class="hl">Postmortem</td><td>ব্যর্থতা থেকে শেখা — পুনরাবৃত্তি রোধ</td></tr>
<tr><td class="hl">Decision log</td><td>X কেন ঠিক হলো — বারবার তর্ক রোধ</td></tr></table>

<div class="callout tip"><span class="co-icon">🗣️</span><div><strong>Great communication-এর ৫ প্যাটার্ন:</strong> ① <strong>Conclusion আগে</strong> — প্রথম বাক্যই উত্তর, journey নয়। ② <strong>Analogy</strong> non-technical-দের জন্য ("index হলো library catalog")। ③ <strong>সংখ্যায় বলো</strong> — "pretty fast" নয়, "৪.২s → ০.৮s, ৫x"। ④ <strong>Write once, read many</strong> — ২ ঘণ্টার doc ১৫ জন পড়ে; meeting-এর চেয়ে ৫x efficient। ⑤ <strong>Disagree gracefully</strong> — "That's wrong" নয়, "আমি ভিন্নভাবে দেখি, আমার উদ্বেগ..."।</div></div>

<div class="callout info"><span class="co-icon">🧠</span><div><strong>Feynman test:</strong> non-technical কাউকে সরলভাবে বোঝাতে না পারলে তুমি নিজেই পুরোপুরি বোঝোনি। শেষ প্রজেক্টটা দাদিকে বোঝাও — বুঝলে তুমি বুঝেছ; confused হলে তুমি jargon-এর পেছনে লুকিয়ে আছ।</div></div>

<div class="dialogue">বায়ান — clear speech, expression, manifestation। কুরআনে আল্লাহ বলেন — "তিনি মানুষকে শিখিয়েছেন বায়ান — স্পষ্ট বাক্য।" (৫৫:৩-৪)। বায়ান হলো আল্লাহর নিয়ামত — স্পষ্টভাবে প্রকাশ করার ক্ষমতা। যোগাযোগ-ও বায়ান — জটিল ধারণা স্পষ্টভাবে প্রকাশ। যে বায়ান করে, সে আলো — অন্ধকার দূর করে। যে বায়ান করতে পারে না, সে জ্ঞান ধরে রাখে অন্ধকারে। জ্ঞান + বায়ান = নূর। জ্ঞান - বায়ান = বন্দি জ্ঞান।</div>
<div class="dialogue en">"Bayan — clear speech, expression, manifestation. Allah says — 'He taught man bayan — clear speech.' (55:3-4). Bayan is Allah's gift — the ability to express clearly. Communication too is bayan — expressing complex ideas clearly. One who has bayan, is light — removes darkness. One who can't express, holds knowledge in darkness. Knowledge + bayan = light. Knowledge - bayan = imprisoned knowledge."</div>

<div class="svg-diagram">
<svg viewBox="0 0 560 340" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto">
  <defs>
    <linearGradient id="d6-bg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#0d1f17"/><stop offset="1" stop-color="#050f0a"/></linearGradient>
  </defs>
  <rect x="0" y="0" width="560" height="340" rx="12" fill="url(#d6-bg)" stroke="rgba(34,197,94,.15)" stroke-width="1"/>
  <text x="280" y="28" text-anchor="middle" fill="#86efac" font-size="13" font-weight="900" font-family="sans-serif">সিস্টেম চিন্তা — Feedback Loops</text>
  <circle cx="150" cy="180" r="95" fill="none" stroke="#22c55e" stroke-width="2" opacity=".6"/>
  <rect x="60" y="95" width="90" height="34" rx="6" fill="rgba(34,197,94,.12)" stroke="#22c55e" stroke-width="1.5"/>
  <text x="105" y="116" text-anchor="middle" fill="#86efac" font-size="9" font-weight="700">ভালো কোড</text>
  <rect x="155" y="140" width="90" height="34" rx="6" fill="rgba(34,197,94,.12)" stroke="#22c55e" stroke-width="1.5"/>
  <text x="200" y="161" text-anchor="middle" fill="#86efac" font-size="9" font-weight="700">দ্রুত feature</text>
  <rect x="60" y="185" width="90" height="34" rx="6" fill="rgba(34,197,94,.12)" stroke="#22c55e" stroke-width="1.5"/>
  <text x="105" y="206" text-anchor="middle" fill="#86efac" font-size="9" font-weight="700">খুশি user</text>
  <rect x="155" y="230" width="90" height="34" rx="6" fill="rgba(34,197,94,.12)" stroke="#22c55e" stroke-width="1.5"/>
  <text x="200" y="251" text-anchor="middle" fill="#86efac" font-size="9" font-weight="700">বেশি revenue</text>
  <path d="M 150 129 L 155 140" stroke="#22c55e" stroke-width="1.5" marker-end="url(#d6-a1)"/>
  <path d="M 200 174 L 150 185" stroke="#22c55e" stroke-width="1.5" marker-end="url(#d6-a1)"/>
  <path d="M 150 219 L 155 230" stroke="#22c55e" stroke-width="1.5" marker-end="url(#d6-a1)"/>
  <path d="M 200 264 Q 105 280 90 112" stroke="#22c55e" stroke-width="1.5" marker-end="url(#d6-a1)" fill="none"/>
  <text x="105" y="305" text-anchor="middle" fill="#22c55e" font-size="10" font-weight="700">Reinforcing (+) বৃদ্ধি</text>
  <defs><marker id="d6-a1" markerWidth="7" markerHeight="7" refX="3.5" refY="3.5" orient="auto"><path d="M0,0 L7,3.5 L0,7 Z" fill="#22c55e"/></marker></defs>
  <circle cx="410" cy="180" r="95" fill="none" stroke="#ff6b35" stroke-width="2" opacity=".6"/>
  <rect x="355" y="95" width="90" height="34" rx="6" fill="rgba(255,107,53,.12)" stroke="#ff6b35" stroke-width="1.5"/>
  <text x="400" y="116" text-anchor="middle" fill="#fdba74" font-size="9" font-weight="700">bug বাড়ে</text>
  <rect x="445" y="140" width="90" height="34" rx="6" fill="rgba(255,107,53,.12)" stroke="#ff6b35" stroke-width="1.5"/>
  <text x="490" y="161" text-anchor="middle" fill="#fdba74" font-size="9" font-weight="700">velocity কমে</text>
  <rect x="355" y="185" width="90" height="34" rx="6" fill="rgba(255,107,53,.12)" stroke="#ff6b35" stroke-width="1.5"/>
  <text x="400" y="206" text-anchor="middle" fill="#fdba74" font-size="9" font-weight="700">test skip</text>
  <rect x="445" y="230" width="90" height="34" rx="6" fill="rgba(255,107,53,.12)" stroke="#ff6b35" stroke-width="1.5"/>
  <text x="490" y="251" text-anchor="middle" fill="#fdba74" font-size="9" font-weight="700">আরও bug</text>
  <path d="M 445 129 L 445 140" stroke="#ff6b35" stroke-width="1.5" marker-end="url(#d6-a2)"/>
  <path d="M 490 174 L 445 185" stroke="#ff6b35" stroke-width="1.5" marker-end="url(#d6-a2)"/>
  <path d="M 445 219 L 445 230" stroke="#ff6b35" stroke-width="1.5" marker-end="url(#d6-a2)"/>
  <path d="M 490 264 Q 400 280 370 112" stroke="#ff6b35" stroke-width="1.5" marker-end="url(#d6-a2)" fill="none"/>
  <text x="410" y="305" text-anchor="middle" fill="#ff6b35" font-size="10" font-weight="700">Balancing (-) death spiral</text>
  <defs><marker id="d6-a2" markerWidth="7" markerHeight="7" refX="3.5" refY="3.5" orient="auto"><path d="M0,0 L7,3.5 L0,7 Z" fill="#ff6b35"/></marker></defs>
</svg>
</div>
<div class="svg-caption">চিত্র: সিস্টেম চিন্তা — reinforcing loop (বৃদ্ধি, সবুজ) ও balancing/death-spiral loop (ক্ষয়, লাল)। প্রতিটা সিদ্ধান্ত কোন লুপে ঢেউ তৈরি করে? কদর — সংযোগ দেখা।</div>

<div class="code-block">— সিস্টেম ম্যাপিং টেমপ্লেট (System Mapping) —

  যেকোনো সিদ্ধান্তের আগে কাগজে আঁকো:

  ── নোড (Components) ──
    [কোড] --> [feature] --> [user behavior]
       |                                    |
       +<------- [revenue] <-----[retention]+

  ── প্রশ্ন ──
  ১. প্রথম প্রভাব কী? (immediate)
  ২. তারপর কী? (second-order)
  ৩. তারপর কী? (third-order)
  ৪. বাধা (bottleneck) কোথায়?
  ৫. কোন লুপ তৈরি করছি?
     reinforcing (+) নাকি death-spiral (-)?

  ── উদাহরণ: Redis যোগ ──
  Redis → API দ্রুত
    → user বেশি করে
      → DB load বাড়ে
        → consistency issue
          → race condition
            → velocity কমে
              → প্রতিযোগী এগিয়ে যায়

  নিয়ম: "And THEN what?" — সিনিয়রের
         ডিফল্ট প্রশ্ন। প্রতিটা সমাধান
         নতুন সমস্যার বীজ বহন করে।
</div>`,
  senior:{
    title:"Communication Upgrade — This Sprint",
    body:`<p><strong>১.</strong> Write a design doc for your next feature BEFORE coding. ১ page max। Lead with conclusion, then alternatives, then decision।</p><p><strong>২.</strong> Practice the Feynman Test: explain your current project to a non-tech friend in ২ minutes। If they're confused, simplify more।</p><p><strong>৩.</strong> In code reviews: lead with the solution, not the journey। First sentence = the answer।</p><p><strong>৪.</strong> Quantify: replace vague words with numbers। Not faster — ৫x faster। Not many users — ২,৪০০ users।</p><p><strong>৫.</strong> Write more, meet less। A ২-hour doc replaces a ১০-person meeting।</p>`
  }
});

// ══ DOOR 7: BUILDING PRODUCTS PEOPLE WANT ══
doors.push({
  num:7, icon:"🚢", color:"#38bdf8", name:"নৌকার স্থপতি",
  subtitle:"Building Products People Want", tech:"Product Sense for Engineers",
  spirit:"খলক — সৃষ্টি, নির্মাণ",
  secret:"দুনিয়ার সবচেয়ে সুন্দর কোড কেউ ব্যবহার না করলে মূল্যহীন। পণ্য = সমস্যা + সমাধান + মানুষ। সমাধান মাত্র এক-তৃতীয়াংশ। সমস্যা ও মানুষ বাকি দুই-তৃতীয়াংশ। যে শুধু সমাধান বানায়, সে নিঃসঙ্গ। যে সমস্যা ও মানুষ বোঝে, সে নির্মাতা। খলক — উদ্দেশ্য সহ সৃষ্টি।",
  recall:{
    q:"সপ্তম দরজায় নৌকা কেন নদী ছাড়া মূল্যহীন?",
    qen:"Why is a boat worthless without a river?",
    a:"কারণ পণ্য = সমস্যা + সমাধান + মানুষ। সমাধান মাত্র এক-তৃতীয়াংশ। যে শুধু সমাধান বানায়, সে নিঃসঙ্গ। যে সমস্যা ও মানুষ বোঝে, সে নির্মাতা। খলক — উদ্দেশ্য সহ সৃষ্টি।",
    aen:"Because product = problem + solution + people. Solution is only one-third. One who only builds solutions, is lonely. One who understands problems and people, is a creator. Khalq — creation with purpose."
  },
  story:`<p class="scene-setting">সপ্তম দরজা। একটা নদীর ধারে। কারিগর নূহ একটা নৌকা বানিয়েছেন — নিখুঁত, সুন্দর, শক্তিশালী। কিন্তু নৌকাটা স্থলভাগে পড়ে আছে। নদী থেকে অনেক দূর। তুমি ভাবলে — কী সুন্দর নৌকা! কিন্তু নূহ দুঃখিত। "নৌকা সুন্দর, কিন্তু নদী ছাড়া মূল্যহীন। আমি নৌকা বানিয়েছি, কিন্তু ভুলে গেছি — নৌকা কোথায় চলবে।" এটাই পণ্য নির্মাণের সবচেয়ে বড় ভুল — সমাধান বানানো, সমস্যা ভুলে যাওয়া।</p>
<p class="scene-setting en">The seventh door. A riverbank. Craftsman Nuh built a boat — perfect, beautiful, strong. But the boat sits on land. Far from the river. You think — what a beautiful boat! But Nuh is sad. "The boat is beautiful, but without a river, worthless. I built the boat, but forgot — where will it sail." This is the biggest product mistake — building solutions, forgetting problems.</p>

<div class="dialogue">যোগাযোগ বলেছিলেন — স্পষ্ট বলো। কিন্তু আমি বলি — স্পষ্ট বললেও ভুল জিনিস বানালে কিছু হবে না। নৌকা সুন্দর, কিন্তু নদী ছাড়া মূল্যহীন। পণ্য = সমস্যা + সমাধান + মানুষ। যে সমাধান বানায় কিন্তু সমস্যা বোঝে না, সে স্থলভাগে নৌকা বানায়। যে তিনটাই বোঝে, সে সমুদ্রে যাত্রা করে।</div>
<div class="dialogue en">"Communication said — speak clearly. But I say — even speaking clearly, if you build the wrong thing, nothing happens. The boat is beautiful, but without a river, worthless. Product = problem + solution + people. One who builds solutions without understanding problems, builds boats on land. One who understands all three, sails the ocean."</div>

<div class="callout info"><span class="co-icon">🧮</span><div><strong>Product equation:</strong> Great Product = Real Problem × Good Solution × Right People। যেকোনো factor শূন্য হলে product শূন্য।</div></div>

<table class="kv-table"><tr><th>Fail mode</th><th>কী</th><th>ব্যর্থতার %</th></tr>
<tr><td class="hl">১. কোনো real problem নেই</td><td>"Cool tech, but who needs it?"</td><td>~৭০%</td></tr>
<tr><td class="hl">২. Bad solution</td><td>"ভালো idea, বাজে execution"</td><td>~২০%</td></tr>
<tr><td class="hl">৩. Wrong people</td><td>"নিজেদের জন্য বানানো, user-এর জন্য নয়"</td><td>~১০%</td></tr></table>

<table class="kv-table"><tr><th>✅ PMF আছে</th><th>❌ PMF নেই</th></tr>
<tr><td>না বললেও user ব্যবহার করে</td><td>তুমি feature push করো, user pull করে না</td></tr>
<tr><td>user অন্যদের refer করে (organic)</td><td>retention কম (একবার try, আর ফেরে না)</td></tr>
<tr><td>down হলে user রেগে যায়</td><td>support ticket &gt; feature request</td></tr>
<tr><td>growth-এ marketing খরচ লাগে না</td><td>প্রতিটা sale-এ ভারী convincing লাগে</td></tr></table>

<div class="callout tip"><span class="co-icon">🔁</span><div><strong>Build-Measure-Learn (Lean Startup):</strong> সবচেয়ে ছোট জিনিস BUILD → MEASURE (কাজ করে?) → LEARN → আবার BUILD। Junior: ৩ মাস বানিয়ে launch করে prayer করে; senior: ১ সপ্তাহে বানিয়ে test → learn → iterate। <strong>MVP</strong> = অর্ধেক-বানানো নয়, একটা hypothesis টেস্ট করার সবচেয়ে ছোট জিনিস।</div></div>

<div class="callout info"><span class="co-icon">❓</span><div><strong>বানানোর আগে ৫ প্রশ্ন:</strong> কী সমস্যা, কার জন্য? · আজ user কীভাবে সমাধান করে? · সবচেয়ে সরল version? · সাফল্য কীভাবে মাপবো? · যদি আমরা ভুল হই? উত্তর না থাকলে — এখনো বানিও না।</div></div>

<table class="kv-table"><tr><th>Kano feature type</th><th>User reaction</th></tr>
<tr><td class="hl">Must-have (login, basic)</td><td>"অবশ্যই থাকবে" → না থাকলে ক্ষোভ</td></tr>
<tr><td class="hl">Performance (speed, quality)</td><td>"দ্রুত/ভালো = ভালো" → linear satisfaction</td></tr>
<tr><td class="hl">Delightful (surprise, AI)</td><td>"WOW, আশা করিনি!" → অসামঞ্জস্য আনন্দ, loyalty ও referral</td></tr></table>

<div class="callout warn"><span class="co-icon">🚫</span><div><strong>Anti-patterns:</strong> building blind ("PM বলল, বানালাম") · feature factory (sprint-এ ১০ feature, ব্যবহার হয় না) · reinventing · perfectionism ("আরও ৬ মাস") · vanity metrics ("১০,০০০ signup!" নয় — "২,০০০ দৈনিক ব্যবহার করে, ৫০০ pay করে")।</div></div>

<div class="dialogue">খলক — creation, making, bringing into existence। কুরআনে আল্লাহ বলেন — "তিনি আসমান ও জমিন সৃষ্টি করেছেন উদ্দেশ্য সহ।" (২১:১৬)। উদ্দেশ্য সহ সৃষ্টি = খলক। পণ্য নির্মাণ-ও খলক — উদ্দেশ্য সহ নির্মাণ। যে উদ্দেশ্য ছাড়া বানায়, সে শিল্পী — সুন্দর, কিন্তু অকেজো। যে উদ্দেশ্য সহ বানায়, সে নির্মাতা — সুন্দর ও কার্যকর। খলক — উদ্দেশ্য সহ সৃষ্টির গুণ।</div>
<div class="dialogue en">"Khalq — creation, making, bringing into existence. Allah says — 'We created the heavens and earth with purpose.' (21:16). Creation with purpose = khalq. Product building too — building with purpose. One who builds without purpose, is an artist — beautiful, but useless. One who builds with purpose, is a creator — beautiful and effective. Khalq — the virtue of purposeful creation."</div>

<div class="svg-diagram">
<svg viewBox="0 0 560 340" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto">
  <defs>
    <linearGradient id="d7-bg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#0d1f17"/><stop offset="1" stop-color="#050f0a"/></linearGradient>
  </defs>
  <rect x="0" y="0" width="560" height="340" rx="12" fill="url(#d7-bg)" stroke="rgba(34,197,94,.15)" stroke-width="1"/>
  <text x="280" y="28" text-anchor="middle" fill="#86efac" font-size="13" font-weight="900" font-family="sans-serif">নৈতিক সিদ্ধান্ত বৃক্ষ — Engineering Ethics</text>
  <rect x="210" y="50" width="140" height="36" rx="8" fill="rgba(34,197,94,.15)" stroke="#22c55e" stroke-width="2"/>
  <text x="280" y="73" text-anchor="middle" fill="#86efac" font-size="11" font-weight="900">প্রযুক্তিগত সিদ্ধান্ত</text>
  <line x1="280" y1="86" x2="110" y2="120" stroke="#5e5c74" stroke-width="1.5"/>
  <line x1="280" y1="86" x2="280" y2="120" stroke="#5e5c74" stroke-width="1.5"/>
  <line x1="280" y1="86" x2="450" y2="120" stroke="#5e5c74" stroke-width="1.5"/>
  <rect x="35" y="120" width="150" height="36" rx="8" fill="rgba(96,165,250,.1)" stroke="#5b9eff" stroke-width="1.5"/>
  <text x="110" y="143" text-anchor="middle" fill="#93c5fd" font-size="10" font-weight="700">দায়বদ্ধতা</text>
  <text x="110" y="172" text-anchor="middle" fill="#9290a8" font-size="8">ভুল হলে কে দায়ী?</text>
  <text x="110" y="184" text-anchor="middle" fill="#9290a8" font-size="8">AI কি দায়ী হতে পারে?</text>
  <text x="110" y="196" text-anchor="middle" fill="#9290a8" font-size="8">audit trail আছে?</text>
  <rect x="205" y="120" width="150" height="36" rx="8" fill="rgba(251,191,36,.1)" stroke="#fbbf24" stroke-width="1.5"/>
  <text x="280" y="143" text-anchor="middle" fill="#fcd34d" font-size="10" font-weight="700">স্বচ্ছতা</text>
  <text x="280" y="172" text-anchor="middle" fill="#9290a8" font-size="8">user কি জানে কী হচ্ছে?</text>
  <text x="280" y="184" text-anchor="middle" fill="#9290a8" font-size="8">data কোথায় যায়?</text>
  <text x="280" y="196" text-anchor="middle" fill="#9290a8" font-size="8">black box নাকি explainable?</text>
  <rect x="375" y="120" width="150" height="36" rx="8" fill="rgba(248,113,113,.1)" stroke="#f87171" stroke-width="1.5"/>
  <text x="450" y="143" text-anchor="middle" fill="#fca5a5" font-size="10" font-weight="700">ক্ষতি প্রতিরোধ</text>
  <text x="450" y="172" text-anchor="middle" fill="#9290a8" font-size="8">কার ক্ষতি হতে পারে?</text>
  <text x="450" y="184" text-anchor="middle" fill="#9290a8" font-size="8">bias, discrimination?</text>
  <text x="450" y="196" text-anchor="middle" fill="#9290a8" font-size="8">addiction, manipulation?</text>
  <line x1="110" y1="210" x2="110" y2="245" stroke="#5e5c74" stroke-width="1"/>
  <line x1="280" y1="210" x2="280" y2="245" stroke="#5e5c74" stroke-width="1"/>
  <line x1="450" y1="210" x2="450" y2="245" stroke="#5e5c74" stroke-width="1"/>
  <rect x="55" y="245" width="110" height="28" rx="6" fill="rgba(82,196,26,.1)" stroke="#52c41a" stroke-width="1"/>
  <text x="110" y="263" text-anchor="middle" fill="#86efac" font-size="9" font-weight="700">ship করো</text>
  <rect x="225" y="245" width="110" height="28" rx="6" fill="rgba(251,191,36,.1)" stroke="#fbbf24" stroke-width="1"/>
  <text x="280" y="263" text-anchor="middle" fill="#fcd34d" font-size="9" font-weight="700">শর্তসাপেক্ষ</text>
  <rect x="395" y="245" width="110" height="28" rx="6" fill="rgba(248,113,113,.1)" stroke="#f87171" stroke-width="1"/>
  <text x="450" y="263" text-anchor="middle" fill="#fca5a5" font-size="9" font-weight="700">থামো / পুনর্বিবেচনা</text>
  <text x="280" y="310" text-anchor="middle" fill="#5e5c74" font-size="9" font-style="italic">খলক — উদ্দেশ্য সহ সৃষ্টি; উদ্দেশ্যে মানুষের কল্যাণ থাকবে</text>
</svg>
</div>
<div class="svg-caption">চিত্র: নৈতিক সিদ্ধান্ত — প্রতিটা প্রযুক্তিগত পছন্তে তিন শাখা: দায়বদ্ধতা, স্বচ্ছতা, ক্ষতি প্রতিরোধ। খলক — উদ্দেশ্য সহ সৃষ্টি।</div>

<div class="code-block">— নৈতিক সিদ্ধান্ত চেকলিস্ট (Ethics Checklist) —

  প্রতিটা ফিচার/সিদ্ধান্তের জন্য:

  ── দায়বদ্ধতা (Accountability) ──
  [ ] ভুল হলে কে দায়ী? ব্যক্তি নাম আছে?
  [ ] সিদ্ধান্তের audit trail / log আছে?
  [ ] AI সিদ্ধান্ত হলে — human override আছে?

  ── স্বচ্ছতা (Transparency) ──
  [ ] user কি জানে তার data কী হচ্ছে?
  [ ] privacy policy সরল, লুকানো নয়?
  [ ] algorithm explainable? black box নয়?

  ── ক্ষতি প্রতিরোধ (Harm Prevention) ──
  [ ] কার ক্ষতি হতে পারে? দুর্বল গোষ্ঠী?
  [ ] bias / discrimination পরীক্ষা করেছ?
  [ ] addiction / manipulation pattern আছে?
  [ ] "না" বলার উপায় আছে? opt-out?

  ── সিদ্ধান্ত ──
  সব হ্যাঁ → ship করো।
  কিছু না → শর্তসাপেক্ষ / পুনর্বিবেচনা।
  ক্ষতির ঝুঁকি → থামো।

  নিয়ম: AI execute করতে পারে, কিন্তু
         দায়বদ্ধতা মানুষের। বিচার আর
         accountability — এটাই irreplaceable।
</div>`,
  senior:{
    title:"Product Sense — Engineer's Guide",
    body:`<p><strong>Before building ANY feature, ask ৫ questions:</strong> What problem? For whom? How solved today? Simplest version? Success metric?</p><p><strong>Talk to users:</strong> ১ per week. Understand their pain. Not surveys — conversations।</p><p><strong>Ship small, learn fast:</strong> ১-week MVP > ৩-month perfect product। Measure, learn, iterate।</p><p><strong>Track REAL metrics:</strong> Not signups — daily active users. Not features shipped — features used।</p><p><strong>Add delight:</strong> One delightful feature per release. Surprise users. Create loyalty, not just satisfaction।</p>`
  }
});

// ══ DOOR 8: INNOVATION MINDSET ══
doors.push({
  num:8, icon:"💡", color:"#fde047", name:"ক্রস-পলিনেটর",
  subtitle:"The Innovation Mindset", tech:"Connecting Ideas Across Domains",
  spirit:"তাজদিদ — নবীকরণ, পুনরুজ্জীবন",
  secret:"নতুন ধারণা শূন্য থেকে আসে না। নতুন ধারণা = পুরোনো ধারণার নতুন সংযোগ। জীববিজ্ঞান + কম্পিউটার = নিউরাল নেটওয়ার্ক। মানুষ এক জায়গায় গভীর ডুব দেয়, অন্য জায়গায় এলোমেলো ঘোরে। অবিচ্ছেয্য ইঞ্জিনিয়ার গভীরে ডুবে সংযোগ খোঁজে। তাজদিদ — পুরোনোকে নতুন সংযোগে পুনরুজ্জীবিত করা।",
  recall:{
    q:"অষ্টম দরজায় কারিগর কেন মৌমাছি পালন করেন?",
    qen:"Why keep bees?",
    a:"কারণ নতুন ধারণা = পুরোনোর নতুন সংযোগ। মৌমাছি এক ফুল থেকে অন্য ফুলে রেণু নিয়ে যায় — ক্রস-পলিনেশন। ইঞ্জিনিয়ার এক ডোমেইন থেকে অন্যে ধারণা নিয়ে যায় — ইনোভেশন। তাজদিদ — পুরোনোকে নতুন সংযোগে পুনরুজ্জীবিত করা।",
    aen:"Because new ideas = new connections of old ones. Bees carry pollen between flowers — cross-pollination. Engineers carry ideas between domains — innovation. Tajdid — reviving the old through new connections."
  },
  story:`<p class="scene-setting">অষ্টম দরজা। একটা বাগান। কারিগর যাইনব মৌমাছি পালন করেন। তুমি ভাবলে — ইঞ্জিনিয়ার কেন মৌমাছি? যাইনব বললেন — "মৌমাছি এক ফুল থেকে অন্য ফুলে রেণু নিয়ে যায়। দুটো আলাদা ফুল, কিন্তু সংযোগে নতুন ফল। আমিও তেমনি — এক ক্ষেত্র থেকে অন্যে ধারণা নিয়ে যাই। জীববিজ্ঞান + কম্পিউটার = নিউরাল নেটওয়ার্ক। এটাই ইনোভেশন — ক্রস-পলিনেশন।"</p>
<p class="scene-setting en">The eighth door. A garden. Craftswoman Zainab keeps bees. You think — why bees for an engineer? Zainab said — "Bees carry pollen from one flower to another. Two separate flowers, but connection creates new fruit. I too — carry ideas from one field to another. Biology + computers = neural networks. This is innovation — cross-pollination."</p>

<div class="dialogue">পণ্য নির্মাণ বলেছিলেন — উদ্দেশ্য সহ বানাও। কিন্তু আমি বলি — উদ্দেশ্য সহ বানালেও নতুন কিছু না থাকলে তুমি অনুকরণকারী। নতুন কীভাবে আসে? শূন্য থেকে নয়। পুরোনোর নতুন সংযোগ থেকে। এক ডোমেইনের সমাধান অন্য ডোমেইনের সমস্যায় প্রয়োগ। এটাই ইনোভেশন — ক্রস-পলিনেশন।</div>
<div class="dialogue en">"Product building said — build with purpose. But I say — even with purpose, without something new, you're an imitator. How does new come? Not from nothing. From new connections of old things. A solution from one domain applied to a problem in another. This is innovation — cross-pollination."</div>

<div class="callout info"><span class="co-icon">💡</span><div><strong>Steve Jobs (১৯৯৬):</strong> "Creativity is just connecting things... তারা কিছু DO করেনি, তারা কেবল কিছু SAW।" Innovation = অন্যরা যে সংযোগ মিস করে সেটা দেখা — এর জন্য জ্ঞানের <strong>breadth</strong> লাগে, শুধু depth নয়।</div></div>

<div class="callout tip"><span class="co-icon">🇹</span><div><strong>T-shaped engineer:</strong> উপরের বার = broad interest (design, business, psychology, biology, art, history); নিচের stem = deep expertise (তোমার tech stack)। Junior = শুধু stem (specialist)। Senior = পুরু বার + গভীর stem (T-shaped)। Irreplaceable = broad top + একাধিক stem (π-shaped)।</div></div>

<table class="kv-table"><tr><th>সংযোগ</th><th>Innovation</th></tr>
<tr><td class="hl">জীববিজ্ঞান + CS (neurons)</td><td>Neural networks</td></tr>
<tr><td class="hl">ভাষাবিজ্ঞান + CS (Chomsky)</td><td>Context-free grammars</td></tr>
<tr><td class="hl">স্থাপত্য + SW (Alexander)</td><td>Design patterns</td></tr>
<tr><td class="hl">বিবর্তন + SW</td><td>Genetic algorithms</td></tr>
<tr><td class="hl">Toyota manufacturing + SW</td><td>Lean / Agile</td></tr>
<tr><td class="hl">রেস্টুরেন্ট kitchen tickets + SW</td><td>Kanban</td></tr></table>

<div class="callout tip"><span class="co-icon">🐝</span><div><strong>Innovation mindset গড়ার উপায়:</strong> ① রোজ ৩০ মিনিট tech-এর বাইরে পড়ো। ② <strong>Analogy hunt</strong> — "এটা অন্য ডোমেইনে কীসের মতো?" (টিম coordination ~ traffic system?)। ③ Side project ভিন্ন ভাষা/ডোমেইনে। ④ Diverse network — designer, scientist, artist। ⑤ Default প্রশ্ন করো — "উল্টোটা সত্যি হলে?"</div></div>

<div class="callout warn"><span class="co-icon">📉</span><div><strong>Innovator's Dilemma:</strong> ভালো কোম্পানি ব্যর্থ হয় কারণ তারা সবকিছু "ঠিক" করে — বর্তমান customer-দের শোনে (যারা incremental চায়), disruptive innovation উপেক্ষা করে (প্রথমে ছোট মনে হয়)। প্রশ্ন করো: "আমরা আগামীকালের customer-দের সেবা করছি, নাকি গতকালের? পরের curve কোনটা?"</div></div>

<div class="dialogue">তাজদিদ — renewal, revival, restoration। ইসলামী ঐতিহ্যে তাজদিদ হলো পুরোনোকে নতুন রূপে পুনরুজ্জীবিত করা — সারমর্ম ধরে রেখে ফর্ম বদলানো। ইনোভেশন-ও তাজদিদ — পুরোনো ধারণাকে নতুন সংযোগে পুনরুজ্জীবিত করা। যে তাজদিদ করে, সে অতীত থেকে ভবিষ্যৎ বানায়। যে তাজদিদ করে না, সে অতীতে আটকে থাকে বা অতীত ছেড়ে শূন্যে পড়ে।</div>
<div class="dialogue en">"Tajdid — renewal, revival, restoration. In Islamic tradition, tajdid is reviving the old in new form — keeping essence, changing form. Innovation too — reviving old ideas through new connections. One who does tajdid, builds future from past. One who doesn't, gets stuck in the past or falls into the void."</div>

<div class="svg-diagram">
<svg viewBox="0 0 560 340" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto">
  <defs>
    <linearGradient id="d8-bg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#0d1f17"/><stop offset="1" stop-color="#050f0a"/></linearGradient>
  </defs>
  <rect x="0" y="0" width="560" height="340" rx="12" fill="url(#d8-bg)" stroke="rgba(34,197,94,.15)" stroke-width="1"/>
  <text x="280" y="28" text-anchor="middle" fill="#86efac" font-size="13" font-weight="900" font-family="sans-serif">অভিযোজন — Build-Measure-Learn চক্র</text>
  <circle cx="280" cy="180" r="110" fill="none" stroke="#3dd6c4" stroke-width="2" opacity=".3" stroke-dasharray="4 4"/>
  <circle cx="280" cy="80" r="42" fill="rgba(34,197,94,.15)" stroke="#22c55e" stroke-width="2"/>
  <text x="280" y="76" text-anchor="middle" fill="#86efac" font-size="12" font-weight="900">বানাও</text>
  <text x="280" y="92" text-anchor="middle" fill="#86efac" font-size="8">(BUILD)</text>
  <circle cx="390" cy="230" r="42" fill="rgba(96,165,250,.15)" stroke="#5b9eff" stroke-width="2"/>
  <text x="390" y="226" text-anchor="middle" fill="#93c5fd" font-size="11" font-weight="900">মাপো</text>
  <text x="390" y="240" text-anchor="middle" fill="#93c5fd" font-size="8">(MEASURE)</text>
  <circle cx="170" cy="230" r="42" fill="rgba(251,191,36,.15)" stroke="#fbbf24" stroke-width="2"/>
  <text x="170" y="226" text-anchor="middle" fill="#fcd34d" font-size="11" font-weight="900">শেখো</text>
  <text x="170" y="240" text-anchor="middle" fill="#fcd34d" font-size="8">(LEARN)</text>
  <path d="M 310 105 Q 380 130 385 195" stroke="#22c55e" stroke-width="2" fill="none" marker-end="url(#d8-a1)"/>
  <path d="M 345 240 Q 280 270 210 245" stroke="#5b9eff" stroke-width="2" fill="none" marker-end="url(#d8-a1)"/>
  <path d="M 175 195 Q 180 130 250 105" stroke="#fbbf24" stroke-width="2" fill="none" marker-end="url(#d8-a1)"/>
  <defs><marker id="d8-a1" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="#3dd6c4"/></marker></defs>
  <rect x="235" y="165" width="90" height="30" rx="6" fill="rgba(61,214,196,.08)" stroke="#3dd6c4" stroke-width="1" stroke-dasharray="3 2"/>
  <text x="280" y="184" text-anchor="middle" fill="#3dd6c4" font-size="9" font-style="italic">hypothesis</text>
  <text x="280" y="300" text-anchor="middle" fill="#52c41a" font-size="9">সবচেয়ে ছোট জিনিস বানাও</text>
  <text x="455" y="260" text-anchor="middle" fill="#5b9eff" font-size="9">প্রকৃত data মাপো</text>
  <text x="100" y="260" text-anchor="middle" fill="#fbbf24" font-size="9">ফলাফল থেকে শেখো</text>
  <text x="280" y="325" text-anchor="middle" fill="#5e5c74" font-size="9" font-style="italic">প্রতিটা চক্রে গল্প বদলায় — ধীরে নয়, সপ্তাহে</text>
</svg>
</div>
<div class="svg-caption">চিত্র: অভিযোজন — Build-Measure-Learn চক্র। প্রতিটা চক্রে hypothesis পরীক্ষা, ফলাফল থেকে শেখো, আবার বানাও। তাজদিদ — পুরোনোকে নতুন সংযোগে পুনরুজ্জীবিত করা।</div>

<div class="code-block">— অভিযোজন লগ (Adaptation / Iteration Log) —

  ── প্রতিটা চক্রের জন্য ──

  চক্র #: ___   তারিখ: ___

  HYPOTHESIS (অনুমান):
    "আমরা বিশ্বাস করি ___ কারণ ___"

  BUILD (সবচেয়ে ছোট):
    কী বানালাম? ___
    সময়: ___ (লক্ষ্য: ১ সপ্তাহ, ৩ মাস নয়)

  MEASURE (প্রকৃত সংখ্যা):
    conversion: ___ → ___
    retention: ___ → ___
    NPS / feedback: ___

  LEARN (কী শিখলাম):
    অনুমান সঠিক ছিল? হ্যাঁ / না / আংশিক
    অপ্রত্যাশিত কী দেখলাম? ___

  NEXT (পরবর্তী):
    pivot? persevere? kill?
    পরবর্তী hypothesis: ___

  ── নিয়ম ──
  জুনিয়র: ৩ মাস বানিয়ে prayer করে।
  সিনিয়র: ১ সপ্তাহে বানিয়ে test → learn।
  MVP = অর্ধেক-বানানো নয়, একটা
  hypothesis টেস্ট করার সবচেয়ে ছোট জিনিস।
</div>`,
  senior:{
    title:"Innovation Mindset — Practical Steps",
    body:`<p><strong>Read ৩০ min/day outside tech:</strong> Psychology, biology, economics, history. Each field has transferable patterns।</p><p><strong>Analogy hunt:</strong> For every problem, ask: what is this LIKE in another domain? Write ৩ analogies। One will spark innovation।</p><p><strong>Side projects:</strong> Build ONE thing per quarter in a different language/domain. Cross-pollination happens when you work in unfamiliar territory।</p><p><strong>Diverse network:</strong> Talk to ১ person/month outside engineering. Designers, scientists, entrepreneurs। Serendipity happens at intersections।</p><p><strong>Question defaults:</strong> Pick one industry standard this month and ask: what if the opposite were true?</p>`
  }
});

// ══ DOOR 9: THE ENTREPRENEUR'S LEAP ══
doors.push({
  num:9, icon:"🌉", color:"#c084fc", name:"সেতুর লাফ",
  subtitle:"The Entrepreneur's Leap", tech:"From Engineer to Builder",
  spirit:"তাওয়াক্কুল — ভরসা, বিশ্বাস",
  secret:"ইঞ্জিনিয়ার ঝুঁকি এড়ায়। উদ্যোক্তা ঝুঁকি নেয়। কিন্তু অবিচ্ছেয্য ইঞ্জিনিয়ার উভয় — গণনাকৃত ঝুঁকি নেয়। ভয় নয়, প্রস্তুতি। অন্ধ লাফ নয়, দেখে লাফ। তাওয়াক্কুল — চেষ্টার পর ফলাফলে ভরসা। দড়ি বেঁধে, তারপর লাফ।",
  recall:{
    q:"নবম দরজায় কারিগর কেন আগে দড়ি বাঁধলেন, তারপর লাফ দিলেন?",
    qen:"Why tie the rope before jumping?",
    a:"কারণ ইঞ্জিনিয়ার ঝুঁকি এড়ায়, উদ্যোক্তা ঝুঁকি নেয়। অবিচ্ছেয্য ইঞ্জিনিয়ার গণনাকৃত ঝুঁকি নেয়। দড়ি বেঁধে লাফ। ভয় নয়, প্রস্তুতি। তাওয়াক্কুল — চেষ্টার পর ফলাফলে ভরসা।",
    aen:"Because engineers avoid risk, entrepreneurs take risk. The irreplaceable takes calculated risk. Tie the rope, then jump. Not fear — preparation. Tawakkul — trust after effort."
  },
  story:`<p class="scene-setting">নবম দরজা। একটা গিরি। উপরে কারিগর তালহা দাঁড়িয়ে। নিচে নদী। সবাই বলছে — লাফ দাও! কিন্তু তালহা দড়ি বাঁধছেন। গিরির উপরে, নিজের কোমরে। তুমি ভাবলে — সে ভীরু। কিন্তু তালহা বললেন — "আমি লাফ দেব। কিন্তু অন্ধ লাফ নয়। দড়ি দিয়ে। প্রস্তুতি ছাড়া লাফ = আত্মহত্যা। প্রস্তুতি সহ লাফ = সাহস।" এটাই উদ্যোক্তার লাফ — গণনাকৃত ঝুঁকি।</p>
<p class="scene-setting en">The ninth door. A cliff. Craftsman Talha stands above. Below, a river. Everyone says — jump! But Talha is tying a rope. To the cliff, to his waist. You think — he's a coward. But Talha said — "I will jump. But not a blind jump. With a rope. Jumping without preparation = suicide. Jumping with preparation = courage." This is the entrepreneur's leap — calculated risk.</p>

<div class="dialogue">ইনোভেশন বলেছিলেন — নতুন সংযোগ খোঁজো। কিন্তু আমি বলি — নতুন সংযোগ খুঁজলেও বাস্তবায়ন না করলে কিছু হবে না। বাস্তবায়ন = ঝুঁকি। ঝুঁকি ছাড়া কিছু নতুন হয় না। কিন্তু অন্ধ ঝুঁকি = বিপদ। গণনাকৃত ঝুঁকি = প্রবৃদ্ধি। উদ্যোক্তার লাফ — প্রস্তুতি সহ ঝুঁকি।</div>
<div class="dialogue en">"Innovation said — find new connections. But I say — even finding connections, without execution, nothing happens. Execution = risk. Without risk, nothing new happens. But blind risk = danger. Calculated risk = growth. The entrepreneur's leap — risk with preparation."</div>

<table class="kv-table"><tr><th>Engineer</th><th>Entrepreneur</th></tr>
<tr><td>জানা জিনিস optimize করে</td><td>অজানা explore করে</td></tr>
<tr><td>ঝুঁকি কমায়</td><td>গণনাকৃত ঝুঁকি নেয়</td></tr>
<tr><td>নিখুঁত solution</td><td>good enough ship করে</td></tr>
<tr><td>ব্যর্থতা এড়ায়</td><td>ব্যর্থতা থেকে শেখে</td></tr>
<tr><td>কোড = product</td><td>business = product</td></tr>
<tr><td>মাসে বেতন পায়</td><td>value তৈরি, তারপর value capture</td></tr></table>

<div class="callout info"><span class="co-icon">🎲</span><div><strong>Calculated risk (জুয়া নয়):</strong> জুয়া = অন্ধ লাফ, ভাগ্যের আশা। Calculated risk = downside (worst case) বোঝো, upside (best case) বোঝো, প্রতিটার probability — যদি downside টিকে থাকার মতো আর upside বড় হয় → LEAP।</div></div>

<div class="callout tip"><span class="co-icon">🪢</span><div><strong>লাফের আগে ৪টা দড়ি বাঁধো:</strong></div></div>
<ul class="checklist">
<li><strong>Financial:</strong> ৬-১২ মাসের runway জমানো — "শূন্য আয়ে ১২ মাস টিকতে পারি।" (মরিয়া হলে খারাপ সিদ্ধান্ত।)</li>
<li><strong>Skill:</strong> বানাতে পারো (depth) + market বোঝো (breadth) + বিক্রি করতে পারো — "ব্যর্থ হলে আমি আরও employable, কম নয়।"</li>
<li><strong>Validation:</strong> user pay করবে বলেছে (শুধু "cool idea" নয়) — waitlist, beta, LOI। "মানুষ চায়, শুধু আমি নই।"</li>
<li><strong>Network:</strong> যারা করেছে এমন mentor + একই পথের peer — "আমি একা নই।"</li>
</ul>

<div class="callout info"><span class="co-icon">🏗️</span><div><strong>Engineer → Founder:</strong> ① Employee (skill/network/savings) → ② Side-project builder (রাত/উইকএন্ডে MVP, validate) → ③ Leap (দড়ি বাঁধা → পূর্ণকালীন, ৬-১২ মাসে PMF; না হলে pivot বা নতুন skill নিয়ে ফেরত) → ④ Builder (PMF পেলে scale)। Engineer-রা ভালো founder হয় (নিজে বানাতে পারে, systems thinking) কিন্তু ব্যর্থ হয় over-build, sales উপেক্ষা, আর user এড়ানোর কারণে।</div></div>

<div class="callout warn"><span class="co-icon">💭</span><div><strong>The great idea myth:</strong> unique idea লাগে না — Google প্রথম search engine নয়, Facebook প্রথম social network নয়, Slack প্রথম chat নয়; সবাই <em>বিদ্যমান জিনিস আরও ভালো</em> করেছে। Idea সস্তা, execution-ই সব। পারফেক্ট idea-র অপেক্ষা কোরো না — real problem খোঁজো, solution বানাও, ship করো। "great idea" বানানোর <em>মধ্য দিয়ে</em> আসে, আগে নয়।</div></div>

<div class="dialogue">তাওয়াক্কুল — trust, reliance, surrender after effort। কুরআনে আল্লাহ বলেন — "যারা আল্লাহর উপর তাওয়াক্কুল করে, তিনি তাদের যথেষ্ট।" (৬৫:৩)। তাওয়াক্কুল অলসতা নয় — প্রস্তুতির পর ফলাফলে ভরসা। দড়ি বাঁধো (চেষ্টা), তারপর লাফ দাও (ঝুঁকি), তারপর ফলাফলে ভরসা (তাওয়াক্কুল)। যে তাওয়াক্কুল করে, সে জানে — চেষ্টা তার, ফল আল্লাহর। এই জ্ঞানে ভয় চলে যায়, সাহস আসে।</div>
<div class="dialogue en">"Tawakkul — trust, reliance, surrender after effort. Allah says — 'Whoever trusts in Allah, He is sufficient for them.' (65:3). Tawakkul is not laziness — it's trust in the outcome AFTER preparation. Tie the rope (effort), then jump (risk), then trust the result (tawakkul). One who has tawakkul knows — effort is theirs, result is Allah's. In this knowledge, fear departs, courage arrives."</div>

<div class="svg-diagram">
<svg viewBox="0 0 560 340" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto">
  <defs>
    <linearGradient id="d9-bg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#0d1f17"/><stop offset="1" stop-color="#050f0a"/></linearGradient>
    <linearGradient id="d9-root" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#3d2817"/><stop offset="1" stop-color="#1a1208"/></linearGradient>
  </defs>
  <rect x="0" y="0" width="560" height="340" rx="12" fill="url(#d9-bg)" stroke="rgba(34,197,94,.15)" stroke-width="1"/>
  <text x="280" y="28" text-anchor="middle" fill="#86efac" font-size="13" font-weight="900" font-family="sans-serif">ঐতিহ্য — দৃশ্যমান ফল, অদৃশ্য শিকড়</text>
  <line x1="20" y1="160" x2="540" y2="160" stroke="#5e5c74" stroke-width="1" stroke-dasharray="3 3"/>
  <text x="480" y="155" fill="#5e5c74" font-size="8">মাটির সীমা</text>
  <ellipse cx="280" cy="70" rx="90" ry="45" fill="rgba(34,197,94,.2)" stroke="#22c55e" stroke-width="1.5"/>
  <text x="280" y="65" text-anchor="middle" fill="#86efac" font-size="10" font-weight="700">ক্যানোপি (দৃশ্যমান)</text>
  <text x="280" y="80" text-anchor="middle" fill="#9290a8" font-size="8">shipped, salary, title</text>
  <rect x="265" y="115" width="30" height="45" fill="url(#d9-root)" stroke="#8b6914" stroke-width="1"/>
  <text x="310" y="140" fill="#fbbf24" font-size="9" font-weight="700">trunk (skill)</text>
  <path d="M 280 160 Q 250 200 200 250 Q 170 280 150 310" stroke="#8b6914" stroke-width="3" fill="none" opacity=".7"/>
  <path d="M 280 160 Q 310 200 360 250 Q 390 280 410 310" stroke="#8b6914" stroke-width="3" fill="none" opacity=".7"/>
  <path d="M 280 160 Q 260 210 230 280 Q 215 300 210 315" stroke="#8b6914" stroke-width="2.5" fill="none" opacity=".6"/>
  <path d="M 280 160 Q 300 210 330 280 Q 345 300 350 315" stroke="#8b6914" stroke-width="2.5" fill="none" opacity=".6"/>
  <path d="M 280 160 L 280 250 L 275 310" stroke="#8b6914" stroke-width="3" fill="none" opacity=".8"/>
  <path d="M 280 160 Q 270 200 245 260" stroke="#8b6914" stroke-width="2" fill="none" opacity=".5"/>
  <path d="M 280 160 Q 295 200 320 260" stroke="#8b6914" stroke-width="2" fill="none" opacity=".5"/>
  <text x="110" y="250" fill="#fbbf24" font-size="8" font-style="italic">mentorship</text>
  <text x="380" y="250" fill="#fbbf24" font-size="8" font-style="italic">culture</text>
  <text x="250" y="295" fill="#fbbf24" font-size="8" font-style="italic">trust</text>
  <text x="310" y="295" fill="#fbbf24" font-size="8" font-style="italic">principles</text>
  <text x="165" y="320" fill="#9290a8" font-size="10">নেতা তৈরি</text>
  <text x="355" y="320" fill="#9290a8" font-size="10">প্রতিষ্ঠান স্মৃতি</text>
  <text x="50" y="200" fill="#fbbf24" font-size="9" font-weight="700">শিকড়</text>
  <text x="50" y="213" fill="#9290a8" font-size="8">(অদৃশ্য)</text>
  <text x="50" y="226" fill="#9290a8" font-size="8">এটাই</text>
  <text x="50" y="239" fill="#9290a8" font-size="8">ঐতিহ্য</text>
</svg>
</div>
<div class="svg-caption">চিত্র: ঐতিহ্য — দৃশ্যমান ফল (shipped, title) নয়, অদৃশ্য শিকড় (mentorship, trust, culture)। যা তুমি রেখে যাও তার চেয়ে যাকে বড় করো তা গুরুত্বপূর্ণ। তাওয়াক্কুল — চেষ্টার পর ফলাফলে ভরসা।</div>

<div class="code-block">— ঐতিহ্য নিরীক্ষা (Legacy Audit) —

  ── দৃশ্যমান (Canopy) — অন্যরা যা দেখে ──
  shipped features: ___
  title / salary: ___
  awards / recognition: ___
  প্রশ্ন: এগুলো ১০ বছর পর কে মনে রাখবে?

  ── অদৃশ্য (Roots) — যা থাকে ──
  কতজনকে mentor করেছ? ___
  কতজন তোমার সিদ্ধান্তে বড় হয়েছে? ___
  culture / standard কি টিকে আছে? ___
  trust capital — কতজন তোমায় বিশ্বাস করে? ___
  institutional knowledge — কেন সিস্টেম এভাবে? ___

  ── প্রশ্ন ──
  যদি তুমি কাল না থাকো:
    কোন ফাঁক সবচেয়ে বড় অনুভব হবে?
    কার জীবনে তুমি পার্থক্য করেছ?
    কোন নীতি তুমি রেখে গেলে?

  ── নিয়ম ──
  ফল পড়ে পচে যায়। শিকড় থেকে নতুন
  গাছ জন্মায়। ঐতিহ্য = তুমি নয়,
  তুমি যাকে বড় করো সে।
  তাওয়াক্কুল — চেষ্টা তোমার, ফল আল্লাহর।
</div>`,
  senior:{
    title:"The Entrepreneur's Preparation",
    body:`<p><strong>Before leaping, tie ৪ ropes:</strong></p><p>১. <strong>Financial:</strong> ৬-১২ months runway saved। Without this, you'll make desperate decisions।</p><p>২. <strong>Skill:</strong> Can you build it AND sell it? If not, find a co-founder who complements you।</p><p>৩. <strong>Validation:</strong> Real users who want it, not just friends saying cool idea। Waitlist, beta signups, pre-orders।</p><p>৪. <strong>Network:</strong> Mentors who've done it, peers on the same journey। You can't do this alone।</p><p><strong>The great idea myth:</strong> Don't wait for a unique idea. Find a real problem. Build a solution. Ship. The idea emerges from building, not before।</p>`
  }
});

// ══ DOOR 10: THE DEEP-ROOTED TREE ══
doors.push({
  num:10, icon:"🌳", color:"#22c55e", name:"গভীর শিকড়ের বৃক্ষ",
  subtitle:"The Timeless Value Synthesis", tech:"Complete Irreplaceability Architecture",
  spirit:"বাকা — চিরস্থায়িত্ব, স্থায়িত্ব",
  secret:"নয়টি দরজা পেরিয়েছ। ফানা থেকে বাকা। পচনশীল থেকে চিরস্থায়ী। framework থেকে principle। উপরের ডাল নয়, নিচের শিকড়। যে গভীরে শিকড় দেয়, ঝড় তাকে উপড়ে ফেলতে পারে না। বাকা — যা থাকে। তুমি এখন সেই বৃক্ষ।",
  recall:{
    q:"দশম দরজায় কেন গভীর শিকড়ের বৃক্ষ?",
    qen:"Why a deep-rooted tree?",
    a:"কারণ ফানা থেকে বাকা — পচনশীল থেকে চিরস্থায়ী। framework থেকে principle। উপরের ডাল নয়, নিচের শিকড়। যে গভীরে শিকড় দেয়, ঝড় তাকে উপড়ে ফেলতে পারে না। বাকা — যা থাকে।",
    aen:"Because fana to baqa — perishable to permanent. Framework to principle. Not surface branches — deep roots. One who roots deeply, storms can't uproot. Baqa — that which remains."
  },
  story:`<p class="scene-setting">দশম দরজা। শেষ। একটা প্রাচীন বৃক্ষ — শত বছর পুরোনো। ঝড় এসেছে, বন্যার জল এসেছে, খরা এসেছে। কিন্তু বৃক্ষ দাঁড়িয়ে আছে। কারণ শিকড় গভীর। স্থপতি ইদ্রিস বৃক্ষের গোড়ায় হাত রাখলেন। "উপরে তুমি ডাল দেখো," তিনি বললেন। "কিন্তু আমি নিচে শিকড় দেখি। ডাল ভাঙে, শিকড় থাকে। তুমি নয় দরজা পেরিয়েছ — এখন তুমি শিকড়। গভীরে যাও। চিরস্থায়ী হও।"</p>
<p class="scene-setting en">The tenth door. The last. An ancient tree — hundreds of years old. Storms came, floodwaters came, drought came. But the tree stands. Because roots are deep. Architect Idris placed his hand on the tree's base. "Above, you see branches," he said. "But I see roots below. Branches break, roots remain. You've passed nine doors — now you are the root. Go deep. Become permanent."</p>

<div class="dialogue">নয়টি দরজা পেরিয়েছ। পচনশীল উপাদান বলেছিলেন — ফানা। মূল নীতি বলেছিলেন — আকল। সিস্টেম চিন্তা বলেছিলেন — কদর। ব্যবসায়িক মস্তিষ্ক বলেছিলেন — রিযিক। সমস্যা সন্ধান বলেছিলেন — তালাশ। যোগাযোগ বলেছিলেন — বায়ান। পণ্য নির্মাণ বলেছিলেন — খলক। ইনোভেশন বলেছিলেন — তাজদিদ। উদ্যোক্তা বলেছিলেন — তাওয়াক্কুল। এখন — সব একসাথে। ফানা থেকে বাকা।</div>
<div class="dialogue en">"You've passed nine doors. Perishable material said — fana. First principles said — aql. Systems thinking said — qadar. Business brain said — rizq. Problem finding said — talash. Communication said — bayan. Product building said — khalq. Innovation said — tajdid. Entrepreneur said — tawakkul. Now — all together. From fana to baqa."</div>

<table class="kv-table"><tr><th>বৃক্ষের স্তর</th><th>কী</th></tr>
<tr><td class="hl">🌿 Canopy (দৃশ্যমান)</td><td>Title, salary, shipped features, recognition — যা অন্যরা দেখে</td></tr>
<tr><td class="hl">🪵 Trunk (skill)</td><td>Technical depth (দ্বার ২), systems thinking (৩), communication (৬), business brain (৪)</td></tr>
<tr><td class="hl">🌱 Roots (invisible)</td><td>Problem finding (৫), product sense (৭), innovation (৮), entrepreneur mindset (৯), timeless principles (১)</td></tr>
<tr><td class="hl">🟤 Soil (foundation)</td><td>Curiosity, humility, integrity, purpose — যা সবকিছুকে খাওয়ায়</td></tr></table>

<div class="timeline">
<div class="tl-step"><div class="tl-when">বছর ১-২ · Leaf</div><div class="tl-title">🍃 Junior</div><div class="tl-body">tools শেখো, প্রথম প্রজেক্ট, learn-to-learn। Focus: code quality।</div></div>
<div class="tl-step"><div class="tl-when">বছর ৩-৫ · Branch</div><div class="tl-title">🌿 Mid-level</div><div class="tl-body">first principles গভীর, systems দেখা শুরু। Focus: independence।</div></div>
<div class="tl-step"><div class="tl-when">বছর ৫-৮ · Trunk</div><div class="tl-title">🪵 Senior</div><div class="tl-body">systems thinking default, business brain, communication টিমকে গুণ করে। Focus: multiplying others।</div></div>
<div class="tl-step"><div class="tl-when">বছর ৮-১২ · Roots</div><div class="tl-title">🌱 Staff/Principal</div><div class="tl-body">problem finder, cross-domain innovation, product+business intuition। Focus: direction setting।</div></div>
<div class="tl-step"><div class="tl-when">বছর ১২+ · Deep-Rooted Tree</div><div class="tl-title">🌳 Irreplaceable</div><div class="tl-body">শিকড় এত গভীর যে সরালে org ক্ষতিগ্রস্ত; tech+business+innovation-এর unique মিশ্রণ; আরও নেতা তৈরি করে। Focus: legacy।</div></div>
</div>

<div class="callout info"><span class="co-icon">🗝️</span><div><strong>যা কাউকে সত্যিই irreplaceable করে:</strong> ① <strong>Unique combination</strong> — এক জিনিসে সেরা নয়, বহু জিনিসের intersection-এ সেরা। ② <strong>Trust capital</strong> — বছরের পর বছর কথা রাখা, ভুল মানা। ③ <strong>Institutional knowledge</strong> — কেন সিস্টেম এভাবে তা জানা। ④ <strong>Force multiplier</strong> — চারপাশের সবাইকে ভালো করা। ⑤ <strong>Judgment</strong> — skill নয়, wisdom; কখন ship, কী skip — automate করা যায় না।</div></div>

<div class="callout tip"><span class="co-icon">🌳</span><div><strong>The timeless truth:</strong> Tools বদলায়, framework মরে, language বিবর্তিত হয় — কিন্তু problem-solving, systems thinking, communication, curiosity, integrity, business understanding কখনো বদলায় না। <strong>যা কখনো বদলায় না, তাতে বিনিয়োগ করো</strong> — প্রতি বছর আরও মূল্যবান হবে, বেশি tool জানার জন্য নয়, বেশি সত্য বোঝার জন্য। ফানা থেকে বাকা — পাতা থেকে শিকড়।</div></div>

<div class="verse">"তুমি কি দেখনি আল্লাহ কীভাবে উদাহরণ দিয়েছেন? একটি ভালো কালিমা পবিত্র বৃক্ষের মতো — তার শিকড় গভীর, শাখা আসমানে।"<br>— কুরআন ১৪:২৪<br><br>"Have you not seen how Allah presents an example? A good word is like a good tree — its root is firm, its branches in the sky." অবিচ্ছেয্য কারিগর সেই বৃক্ষ — শিকড় গভীর, ডাল উঁচু। ঝড় আসে, বৃক্ষ থাকে। সময় যায়, মূল্য বাড়ে। ফানা থেকে বাকা — অস্থায়ী থেকে চিরস্থায়ী। এটাই অবিচ্ছেয্যতার সারমর্ম।</div>

<div class="svg-diagram">
<svg viewBox="0 0 560 380" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto">
  <defs>
    <linearGradient id="d10-bg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#0d1f17"/><stop offset="1" stop-color="#050f0a"/></linearGradient>
    <linearGradient id="d10-canopy" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="rgba(34,197,94,.3)"/><stop offset="1" stop-color="rgba(34,197,94,.05)"/></linearGradient>
  </defs>
  <rect x="0" y="0" width="560" height="380" rx="12" fill="url(#d10-bg)" stroke="rgba(34,197,94,.15)" stroke-width="1"/>
  <text x="280" y="26" text-anchor="middle" fill="#86efac" font-size="13" font-weight="900" font-family="sans-serif">সমন্বয় — অবিচ্ছেয্যতার স্থাপত্য</text>
  <line x1="20" y1="200" x2="540" y2="200" stroke="#5e5c74" stroke-width="1" stroke-dasharray="3 3"/>
  <ellipse cx="280" cy="80" rx="120" ry="55" fill="url(#d10-canopy)" stroke="#22c55e" stroke-width="1.5"/>
  <text x="280" y="72" text-anchor="middle" fill="#86efac" font-size="10" font-weight="700">🌿 Canopy — দৃশ্যমান</text>
  <text x="280" y="88" text-anchor="middle" fill="#9290a8" font-size="8">title · salary · recognition</text>
  <rect x="270" y="135" width="20" height="65" fill="#3d2817" stroke="#8b6914" stroke-width="1"/>
  <path d="M 280 200 Q 200 230 130 290 L 100 340" stroke="#a3e635" stroke-width="2.5" fill="none" opacity=".7"/>
  <circle cx="100" cy="340" r="6" fill="#a3e635" opacity=".8"/>
  <text x="100" y="358" text-anchor="middle" fill="#a3e635" font-size="8" font-weight="700">মূল নীতি</text>
  <text x="100" y="370" text-anchor="middle" fill="#9290a8" font-size="10">দ্বার ২ · আকল</text>
  <path d="M 280 200 Q 230 250 190 320 L 175 355" stroke="#22d3ee" stroke-width="2.5" fill="none" opacity=".7"/>
  <circle cx="175" cy="355" r="6" fill="#22d3ee" opacity=".8"/>
  <text x="175" y="372" text-anchor="middle" fill="#22d3ee" font-size="8" font-weight="700">সিস্টেম চিন্তা</text>
  <path d="M 280 200 Q 250 260 230 330 L 225 355" stroke="#fbbf24" stroke-width="2.5" fill="none" opacity=".7"/>
  <circle cx="225" cy="355" r="6" fill="#fbbf24" opacity=".8"/>
  <text x="265" y="372" text-anchor="middle" fill="#fbbf24" font-size="8" font-weight="700">ব্যবসায়িক মস্তিষ্ক</text>
  <path d="M 280 200 L 280 280 L 280 350" stroke="#fb923c" stroke-width="2.5" fill="none" opacity=".7"/>
  <circle cx="280" cy="350" r="6" fill="#fb923c" opacity=".8"/>
  <text x="305" y="370" text-anchor="start" fill="#fb923c" font-size="8" font-weight="700">যোগাযোগ</text>
  <path d="M 280 200 Q 310 260 335 330 L 340 355" stroke="#fde047" stroke-width="2.5" fill="none" opacity=".7"/>
  <circle cx="340" cy="355" r="6" fill="#fde047" opacity=".8"/>
  <text x="380" y="372" text-anchor="middle" fill="#fde047" font-size="8" font-weight="700">ইনোভেশন</text>
  <path d="M 280 200 Q 360 230 430 290 L 460 340" stroke="#c084fc" stroke-width="2.5" fill="none" opacity=".7"/>
  <circle cx="460" cy="340" r="6" fill="#c084fc" opacity=".8"/>
  <text x="460" y="358" text-anchor="middle" fill="#c084fc" font-size="8" font-weight="700">উদ্যোক্তা</text>
  <text x="460" y="370" text-anchor="middle" fill="#9290a8" font-size="10">দ্বার ৯ · তাওয়াক্কুল</text>
  <text x="40" y="320" fill="#5e5c74" font-size="8" font-style="italic">শিকড়</text>
  <text x="40" y="332" fill="#5e5c74" font-size="8" font-style="italic">(অদৃশ্য)</text>
  <text x="280" y="195" text-anchor="middle" fill="#86efac" font-size="8" font-weight="700">সমন্বয়</text>
</svg>
</div>
<div class="svg-caption">চিত্র: সমন্বয় — নয়টি দরজার সত্য এক বৃক্ষে একত্রিত। উপরে দৃশ্যমান ফল, নিচে অদৃশ্য শিকড়। বাকা — যা থাকে। ফানা থেকে বাকা।</div>

<div class="code-block">— অবিচ্ছেয্যতা স্ব-মূল্যায়ন (Irreplaceability Self-Assessment) —

  প্রতিটা স্তরে ০-৫ পয়েন্ট দাও:

  ── শিকড় (Roots · অদৃশ্য · সবচেয়ে গুরুত্বপূর্ণ) ──
  মূল নীতি (আকল) ............ ___ / ৫
  সিস্টেম চিন্তা (কদর) ....... ___ / ৫
  সমস্যা সন্ধান (তালাশ) ...... ___ / ৫
  ইনোভেশন (তাজদিদ) ......... ___ / ৫

  ── কাণ্ড (Trunk · skill) ──
  যোগাযোগ (বায়ান) .......... ___ / ৫
  ব্যবসায়িক মস্তিষ্ক (রিযিক) . ___ / ৫
  পণ্য নির্মাণ (খলক) ......... ___ / ৫

  ── ক্যানোপি (Canopy · দৃশ্যমান) ──
  উদ্যোক্তা (তাওয়াক্কুল) ..... ___ / ৫
  কারিগরি দক্ষতা ............. ___ / ৫

  ── মাটি (Soil · foundation) ──
  কৌতূহল · বিনয় · সততা ..... ___ / ৫

  ── ফলাফল ──
  মোট: ___ / ৫০
  ৪০+ = গভীর শিকড়ের বৃক্ষ
  ২৫-৩৯ = কাণ্ড মজবুত, শিকড় গভীর করো
  ২৫- = পাতা, এখনো শিকড় দিচ্ছ

  নিয়ম: যে গভীরে শিকড় দেয়, ঝড় তাকে
         উপড়ে ফেলতে পারে না।
         ফানা থেকে বাকা। তুমি সেই বৃক্ষ।
</div>

<div class="secret-box"><div class="label">দশম দরজা — সমন্বয়</div><div class="text">🌳 অবিচ্ছেয্যতা = Permanent Knowledge + First Principles + Systems Thinking + Business Brain + Problem Finding + Communication + Product Sense + Innovation + Entrepreneurship।<br><small>ফানা থেকে বাকা — পচনশীল থেকে চিরস্থায়ী। গভীরে শিকড় দাও। তুমি সেই বৃক্ষ।</small></div></div>`
});
