// ════════════════════════════════════════
// পরীক্ষার ময়দান — DOORS 5-8
// Interview Prep: System Design → Closing
// ════════════════════════════════════════

// ══ DOOR 5: SYSTEM DESIGN INTERVIEW ══
doors.push({
  num:5, icon:"🏗️", color:"#36d6e7", name:"স্থপতির নীলনকশা",
  subtitle:"The Architect's Blueprint", tech:"System Design Interview",
  spirit:"নগর নির্মাণ — ভিত্তি থেকে গম্বুজ",
  secret:"সিস্টেম ডিজাইন ইন্টারভিউতে সঠিক উত্তর নেই — সঠিক প্রশ্ন আছে। প্রথমে বুঝো, তারপর বানাও। কখনো একসাথে সব নয় — ধাপে ধাপে।",
  recall:{
    q:"স্থপতি কেন একসাথে পুরো বাড়ি বানান না, প্রথমে নীলনকশা?",
    qen:"Why doesn't the architect build the whole house at once, but starts with a blueprint?",
    a:"কারণ নীলনকশা ছাড়া নির্মাণ = বিশৃঙ্খলা। System design interview-ও তেমনি — প্রথমে requirements বুঝো, তারপর high-level design, তারপর deep dive। একসাথে সব নয়।",
    aen:"Because building without blueprint = chaos. System design interview too — first understand requirements, then high-level design, then deep dive. Not everything at once."
  },
  story:`
<p class="scene-setting">পঞ্চম পরীক্ষা। একটা বিশাল নীলনকশার টেবিল। দেয়ালে স্থপতির চিত্র, পাশে কম্পাস, মানচিত্র। স্থপতি রুকন দাঁড়িয়ে আছেন — শান্ত, পরিমিত, হাতে পেন্সিল। "একটা URL shortener বানাও," তিনি বললেন। তুমি কোড লিখতে গেলে। তিনি থামিয়ে দিলেন। "আগে বুঝো। তারপর বানাও।"</p>
<p class="scene-setting en">The fifth trial. A vast blueprint table. Architectural drawings on walls, compass and map beside. Architect Rukn stands — calm, measured, pencil in hand. "Build a URL shortener," he said. You started writing code. He stopped you. "Understand first. Then build."</p>

<div class="dialogue">ধাঁধা নিপুণ বলেছিলেন — প্যাটার্ন শেখো। কিন্তু আমি বলি — সিস্টেম ডিজাইন আলাদা। এখানে কোড লেখা নয় — বড় ছবি আঁকা। একটা সম্পূর্ণ সিস্টেম — কীভাবে টুকরোগুলো যুক্ত। সঠিক উত্তর নেই — সঠিক প্রশ্ন আছে।</div>
<div class="dialogue en">"The puzzle master said — learn patterns. But I say — system design is different. Here you don't write code — you draw the big picture. A complete system — how pieces connect. There's no right answer — there are right questions."</div>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>ভুলের গল্প — Silence During Coding:</strong> Coded in silence for 10 minutes — no signal to interviewer. Fix: narrate thought process.</div></div>


<div class="code-block">System Design Interview — ৫ ধাপ:

১. CLARIFY (৫ মিনিট)
   "কী কী দরকার?"
   • Read-heavy না write-heavy?
   • কত ইউজার? (scale)
   • Latency? Consistency?
   → অনুমান করো না — জিজ্ঞেস করো

২. HIGH-LEVEL DESIGN (১০ মিনিট)
   বড় বাক্সে আঁকো:
   Client → API Gateway → Load Balancer
   → Servers → Database → Cache
   → সব সংযুক্ত করো

৩. DEEP DIVE (১৫ মিনিট)
   একটা অংশে গভীরে যাও:
   • Database schema কী?
   • API endpoints কী কী?
   • Cache strategy কী?
   → ইন্টারভিউয়ার যা জিজ্ঞেস করেন

৪. BOTTLENECK (৫ মিনিট)
   "কোথায় ভাঙবে?"
   • Single point of failure?
   • DB too slow?
   → Trade-off আলোচনা করো

৫. WRAP UP
   সংক্ষিপ্ত সারাংশ দাও</div>

<div class="compare">
<div class="cmp-card cmp-bad"><div class="cmp-label">❌ খারাপ উত্তর</div>সাথে সাথে কোড/নাম লেখা শুরু। "আমি Redis ব্যবহার করব।" — কেন? কত ডেটা? কী scale? অনুমান। ইন্টারভিউয়ার বিরক্ত।</div>
<div class="cmp-card cmp-good"><div class="cmp-label">✅ ভালো উত্তর</div>"আগে কয়েকটা প্রশ্ন: দৈনিক কত URL? Read:Write ratio কী? Cache দরকার?" — বুঝে তারপর ডিজাইন। ধাপে ধাপে। ইন্টারভিউয়ার মুগ্ধ।</div>
</div>

<div class="dialogue">স্থপতির কাজ ইট বসানো নয় — নীলনকশা তৈরি করা। কোথায় দরজা, কোথায় জানালা, কোথায় পিলার। সব আগে থেকে। System design interview-ও তেমনি — কোড লেখা নয়, কাঠামো আঁকা। কোথায় database, কোথায় cache, কোথায় queue। নীলনকশা আগে — নির্মাণ পরে।</div>
<div class="dialogue en">"The architect's job isn't laying bricks — it's creating blueprints. Where the door, window, pillar. All planned in advance. System design interview too — not writing code, drawing structure. Where database, cache, queue. Blueprint first — construction later."</div>`,
  senior:{
    title:"প্রস্তুতি — ৫টা ক্লাসিক সমস্যা",
    body:`<p>এই ৫টা প্র্যাকটিস করো:</p><p><strong>১. URL Shortener</strong> (Bitly) — hash, redirect, scale</p><p><strong>২. Chat System</strong> (WhatsApp) — real-time, WebSocket, message storage</p><p><strong>৩. News Feed</strong> (Facebook) — timeline, ranking, fan-out</p><p><strong>৪. Rate Limiter</strong> — token bucket, distributed</p><p><strong>৫. Search Autocomplete</strong> — trie, cache, ranking</p><p>প্রতিটা পেপারে আঁকো। বক্স বক্স। সংযোগ। বটনেক।</p>`
  }
});

// ══ DOOR 6: THINKING OUT LOUD ══
doors.push({
  num:6, icon:"🧠", color:"#b37feb", name:"পণ্ডিতের কলম",
  subtitle:"The Scholar's Quill", tech:"Thinking Out Loud",
  spirit:"তাদাব্বুর প্রকাশ্যে — চিন্তা শোনা যায়",
  secret:"চুপ করে কোড লিখলে ইন্টারভিউয়ার কিছু বোঝে না। মুখে চিন্তা করো। ভুল হলেও বলো — সংশোধন করা যায়। নীরবতা = মৃত্যু।",
  recall:{
    q:"পণ্ডিত কেন নীরবে লেখেন না, মুখে ভাবেন?",
    qen:"Why doesn't the scholar write silently, but thinks out loud?",
    a:"কারণ প্রকাশ্যে চিন্তা করলে অন্য বুঝতে পারে — কোথায় যাচ্ছ, কী ভাবছ। ইন্টারভিউয়ারও তেমনি — তুমি চুপ থাকলে জানে না তুমি আটকে গেছ না ভাবছ। মুখে বলো।",
    aen:"Because thinking aloud lets others follow — where you're going, what you're thinking. The interviewer too — if you're silent, they don't know if you're stuck or thinking. Speak up."
  },
  story:`
<p class="scene-setting">ষষ্ঠ পরীক্ষা। একটা শান্ত গ্রন্থাগার। পণ্ডিত আব্দুল্লাহ লিখছেন — কিন্তু নীরবে নয়। তিনি মুখে বলেন যা ভাবেন। "ঠিক আছে, এখানে একটা সমস্যা... হ্যাঁ, এই কারণে... কিন্তু অপেক্ষ করো, এটা কি ঠিক?" তিনি একা — কিন্তু তাঁর চিন্তা শোনা যায়।</p>
<p class="scene-setting en">The sixth trial. A quiet library. Scholar Abdullah writes — but not silently. He speaks what he thinks. "Alright, here's a problem... yes, because of this... but wait, is this right?" He's alone — but his thinking is audible.</p>

<div class="dialogue">স্থপতি বলেছিলেন — নীলনকশা আঁকো। কিন্তু আমি বলি — আঁকার সময় মুখে ব্যাখ্যা করো। কারণ ইন্টারভিউয়ার তোমার মাথার ভেতর দেখতে পান না। তুমি চুপ থাকলে — তাঁরা ভাবেন তুমি আটকে গেছ। তুমি বললে — তাঁরা সাহায্য করতে পারেন।</div>
<div class="dialogue en">"The architect said — draw the blueprint. But I say — explain while drawing. Because interviewers can't see inside your head. If you're silent — they think you're stuck. If you speak — they can help."</div>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>ভুলের গল্প — Gave Up on Hard Problem:</strong> Hit a wall and stopped. Fix: start with brute force, then optimize.</div></div>


<div class="code-block">Thinking Out Loud — What to Say:

সমস্যা পড়ার সময়:
  "ঠিক আছে, আমি প্রশ্নটা বুঝি। 
   আমাকে একটা sorted array দেওয়া হবে 
   এবং আমাকে দুটো সংখ্যা খুঁজতে হবে..."

সমাধান ভাবার সময়:
  "প্রথমে আমি brute force ভাবছি — 
   O(n²)। কিন্তু sorted বলেছে... 
   তাহলে two pointers কাজ করতে পারে!
   O(n) হবে।"

কোড লেখার সময়:
  "এখানে আমি একটা while loop নিচ্ছি...
   left pointer 0 থেকে, right শেষ থেকে...
   যদি sum ছোট হয়, left বাড়াব..."

আটকে গেলে:
  "এখানে আমি একটু ভাবছি... 
   edge case কী হবে যদি array empty?
   হ্যাঁ, আমি None রিটার্ন করব।"

❌ সবচেয়ে খারাপ: ৫ মিনিট চুপ → 
   সম্পূর্ণ কোড লিখে দাও → ভুল → 
   কোনো সুযোগ নেই সংশোধনের।</div>

<div class="dialogue">তাদাব্বুর — গভীর চিন্তা। কিন্তু তাদাব্বুর শুধু ভেতরে নয় — প্রকাশ্যেও। কুরআনে আল্লাহ বলেন — "তোমরা চিন্তা করো না?" চিন্তা প্রকাশ করা = জ্ঞান শেয়ার করা। ইন্টারভিউতে তোমার চিন্তা প্রকাশ করো — মুখে বলো কী ভাবছ। এটা দুর্বলতা নয় — স্বচ্ছতা। ইন্টারভিউয়ার তোমার প্রক্রিয়া দেখতে চান — শুধু ফলাফল নয়।</div>
<div class="dialogue en">"Tadabbur — deep contemplation. But not only internal — also expressed. Allah says — 'Will you not reflect?' Expressing thought = sharing knowledge. In interviews, express your thinking — say what you're thinking. This isn't weakness — it's transparency. Interviewers want to see your process — not just the result."</div>`,
  senior:{
    title:"Practice — মক ইন্টারভিউ",
    body:`<p><strong>একা অনুশীলন:</strong> একটা সমস্যা নাও, মুখে সমাধান করো — যেন কেউ শুনছে। রেকর্ড করো। শুনো।</p><p><strong>বন্ধুর সাথে:</strong> একজন ইন্টারভিউয়ার হয়, একজন প্রার্থী। বদল করো। ফিডব্যাক দাও।</p><p><strong>interviewing.io:</strong> বেনামী মক ইন্টারভিউ — সত্যিকারের FAANG ইঞ্জিনিয়ারদের সাথে।</p><p><strong>নিয়ম:</strong> চুপ ৩০ সেকেন্ডের বেশি নয়। যদি আটকে যাও — "আমি একটু ভাবছি" বলো।</p>`
  }
});

// ══ DOOR 7: SALARY NEGOTIATION ══
doors.push({
  num:7, icon:"💎", color:"#52c41a", name:"বণিকের দাঁড়িপাল্লা",
  subtitle:"The Merchant's Scales", tech:"Salary Negotiation",
  spirit:"মিযান — ন্যায্য মূল্য, ভারসাম্য",
  secret:"প্রথম অফার কখনো সেরা নয়। সবসময় দরদাম করো। কিন্তু সম্মানের সাথে। সংখ্যা নয় — total compensation দেখো। নীরবতা = শক্তি।",
  recall:{
    q:"বণিক কেন প্রথম দামে রাজি হন না?",
    qen:"Why doesn't the merchant accept the first price?",
    a:"কারণ প্রথম দাম সবসময় কম। দরদাম করলে ১০-২০% বাড়ে। কিন্তু অভদ্রতা নয় — সম্মানের সাথে। ডেটা দাও, যুক্তি দাও, অপেক্ষা করো।",
    aen:"Because the first price is always low. Negotiating adds 10-20%. But not rudely — with respect. Give data, give reasoning, wait."
  },
  story:`
<p class="scene-setting">সপ্তম পরীক্ষা। একটা বাজার। বণিক সালমান দাঁড়িপাল্লা নিয়ে বসে আছেন — বয়স্ক, চশমা পরে, হাসিমুখ। সামনে একটা রত্ন। "কত?" তুমি জিজ্ঞেস করলে। "১০০," তিনি বললেন। তুমি রাজি হতে গেলে। তিনি হাসলেন। "প্রথম দামে রাজি হলে, সঠিক মূল্য পাবে না।"</p>
<p class="scene-setting en">The seventh trial. A marketplace. Merchant Salman sits with a scale — elderly, bespectacled, smiling. A gem before him. "How much?" you asked. "100," he said. You were about to agree. He smiled. "If you accept the first price, you won't get the right value."</p>

<div class="dialogue">পণ্ডিত বলেছিলেন — চিন্তা প্রকাশ করো। কিন্তু আমি বলি — চুপ থাকাও শক্তি। যখন অফার আসে — উত্তেজিত হয়ো না। "ধন্যবাদ, আমি ভাবছি।" তারপর দরদাম। প্রথম অফার সবসময় কম। সবসময়।</div>
<div class="dialogue en">"The scholar said — express your thinking. But I say — silence is also power. When the offer comes — don't get excited. 'Thank you, let me think.' Then negotiate. The first offer is always low. Always."</div>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>ভুলের গল্প — No Edge Cases:</strong> Solved happy path — forgot empty, null, negative. Fix: handle edge cases explicitly.</div></div>


<div class="code-block">Salary Negotiation — Step by Step:

১. RESEARCH (আগে থেকে)
   • levels.fyi → কোম্পানির স্ট্যান্ডার্ড (US/global tech)
   • Glassdoor → এলাকার গড়
   • বন্ধু/নেটওয়ার্ক → বাস্তব সংখ্যা
   
   অঞ্চলভিত্তিক উৎস:
   • US/EU tech: levels.fyi, Glassdoor
   • বাংলাদেশ: glassdoor.com.bd, LinkedIn Salary,
     local tech groups (BD Tech community)
   • ভারত: AmbitionBox, Payscale India, levels.fyi
   • গালফ/মধ্যপ্রাচ্য: GulfTalent, Bayt, Naukri Gulf
   → জানো তোমার মূল্য — তোমার অঞ্চলের ডেটা দিয়ে

২. TOTAL COMPENSATION (শুধু base নয়)
   Base Salary + Bonus + Equity/Stock
   + Signing Bonus + Benefits
   → equity কেউ ভুলে যায় — সেটাই সবচেয়ে বড় (US/EU tech-এ)

   ⚠️ কিন্তু কাঠামো অঞ্চলভিত্তিক ভিন্ন!
   
   US/EU tech (FAANG-style):
     Base + Annual Bonus + RSU/Options + Signing
     → equity বড় অংশ (৩০-৫০%)
     → প্রতি বছর refresh grant
     → ৪-বছর vesting cliff
   
   বাংলাদেশ / দক্ষিণ এশিয়া:
     Base + Annual Bonus (১-৩ মাস) + PF/Gratuity
     → equity বিরল (শুধু startup-এ)
     → দরদাম মূলত base + bonus-এ
     → কখনো কখনো আবাসন/যাতায়াত allowance
   
   গালফ (UAE/Saudi/Qatar):
     All-inclusive package — Base + Housing + Transport
     → equity নেই (প্রায় সব ক্ষেত্রে)
     → tax-free salary (বড় সুবিধা!)
     → দরদাম সাধারণত শুধু base-এ
     → end-of-service gratuity (দীর্ঘ সেবার জন্য)
   
   → তোমার অঞ্চলের কাঠামো জানো।
     সব অঞ্চলে equity কাজ করে না।

৩. FIRST OFFER → সাথে সাথে রাজি হয়ো না
   "ধন্যবাদ! আমি কয়েকদিন ভাবছি।"
   → নীরবতা = শক্তি

৪. COUNTER OFFER
   "আমার research অনুযায়ী, এই role-এ 
   বাজার গড় X। আমি Y আশা করছি।"
   → ডেটা দাও, অনুভূতি নয়

৫. সম্মানজনক
   কখনো আল্টিমেটাম দাও না।
   "আমি আপনাদের টিমে যোগ দিতে চাই — 
   শুধু compensation একটু সামঞ্জস্য হলে।"

৬. হাঁটো না (walk away) — কিন্তু প্রস্তুত থাকো
   সবচেয়ে শক্তিশালী অবস্থান = 
   আরেকটা অফার থাকলে।</div>

<div class="compare">
<div class="cmp-card cmp-bad"><div class="cmp-label">❌ সাথে সাথে রাজি</div>"ওয়াও, ধন্যবাদ! হ্যাঁ!" — প্রথম অফারে রাজি। ১০-২০% কম পেলে। পরে অনুশোচনা — "আরেকটু বললে পারতাম।"</div>
<div class="cmp-card cmp-good"><div class="cmp-label">✅ দরদাম</div>"ধন্যবাদ। বাজার research অনুযায়ী (levels.fyi / AmbitionBox / Bayt — তোমার অঞ্চলের উৎস) এই role-এ গড় X। আমার experience বিবেচনায় Y প্রত্যাশিত।" — ডেটা, সম্মান, নীরবতা। ১০-২০% বেশি পাওয়া সাধারণ (অঞ্চল ভেদে)।</div>
</div>

<div class="dialogue">মিযান — ভারসাম্য, ন্যায্যতা। কুরআনে আল্লাহ বলেন — "দাঁড়িপাল্লায় কম দিও না।" তোমার শ্রমের মূল্য ন্যায্য হওয়া উচিত। কিন্তু অতিরিক্তও নয় — চরম লোভ নয়। মিযান = সঠিক মূল্য। নিজের মূল্য জানো, ডেটা দাও, দরদাম করো — সম্মানের সাথে। এটাই মিযানের প্রয়োগ।</div>
<div class="dialogue en">"Mizan — balance, fairness. Allah says — 'Don't give short measure.' Your labor deserves fair value. But not excess — not extreme greed. Mizan = correct price. Know your value, give data, negotiate — with respect. This is mizan applied."</div>`,
  senior:{
    title:"Negotiation Scripts — কী বলবে",
    body:`<p><strong>প্রথম অফার পেলে:</strong> "Thank you so much, I'm really excited about this role. Let me review the details and get back to you by [day]."</p><p><strong>কাউন্টার দিলে:</strong> "Based on my market research and my experience, I was hoping for [X]. Is there flexibility?" (ডেটা উৎস: levels.fyi US/EU-তে, AmbitionBox ভারতে, Bayt গালফে)</p><p><strong>তারা "no" বললে — US/EU tech-এ:</strong> "I understand. What about signing bonus or additional equity / RSU refresh?"</p><p><strong>তারা "no" বললে — BD/India/Gulf-এ:</strong> "I understand. What about annual bonus, joining bonus, বা housing/transport allowance?" (equity সাধারণত নেই — base/bonus/allowance দরদাম করো)</p><p><strong>নিয়ম:</strong> নাম্বার সবার আগে তুমি বলো না — তাদের বলতে দাও। যদি জোর করে জিজ্ঞেস করে — একটা range দাও।</p>`
  }
});

// ══ DOOR 8: CLOSING & QUESTIONS ══
doors.push({
  num:8, icon:"🤝", color:"#a5b4fc", name:"স্বাগতের দরজা",
  subtitle:"The Gate of Welcome", tech:"Closing & Questions to Ask",
  spirit:"দুআ — সমাপ্তিতে প্রার্থনা, ভবিষ্যৎ চিন্তা",
  secret:"ইন্টারভিউ শেষে তোমার কোনো প্রশ্ন — এটা ফাঁকা সময় নয়। এটা শেষ পরীক্ষা। ভালো প্রশ্ন = আগ্রহ, প্রস্তুতি, বুদ্ধিমত্তা।",
  recall:{
    q:"দরোয়ান কেন শেষে কিছু জানতে চাও কিনা জিজ্ঞেস করেন?",
    qen:"Why does the gatekeeper ask 'Do you want to know anything?' at the end?",
    a:"কারণ যে প্রশ্ন করে না, সে আগ্রহী নয়। ভালো প্রশ্ন = তুমি ভেবে এসেছ, তুমি জানতে চাও, তুমি যোগ দিতে চাও। খারাপ উত্তর: 'কোনো প্রশ্ন নেই।'",
    aen:"Because one who doesn't ask isn't interested. Good questions = you thought ahead, you want to know, you want to join. Bad answer: 'No questions.'"
  },
  story:`
<p class="scene-setting">অষ্টম পরীক্ষা। শেষ পরীক্ষা। নগরের স্বাগত দরজা। দরোয়ান আলী দাঁড়িয়ে আছেন — হাসিমুখ, খোলা দরজা, পেছনে নগরী। "তুমি সব পরীক্ষা পাস করেছ," তিনি বললেন। "এখন তোমার কোনো প্রশ্ন?" তুমি যদি বলো "না" — দরজা বন্ধ হয়। তুমি যদি ভালো প্রশ্ন করো — দরজা খোলা।</p>
<p class="scene-setting en">The eighth trial. The last trial. The city's gate of welcome. Gatekeeper Ali stands — smiling, open gate, the city behind. "You've passed all trials," he said. "Now, any questions?" If you say "no" — the gate closes. If you ask good questions — the gate stays open.</p>

<div class="dialogue">বণিক বলেছিলেন — নিজের মূল্য জানো। কিন্তু আমি বলি — কোম্পানির মূল্যও জানো। এই দরজা শুধু তোমার জন্য নয় — তাদের জন্যও। তুমি কোথায় যাচ্ছ, কাদের সাথে, কী করবে — জানো। ভালো প্রশ্ন = তুমি গবেষণা করেছ।</div>
<div class="dialogue en">"The merchant said — know your value. But I say — know the company's value too. This gate isn't just for you — for them too. Where you're going, with whom, what you'll do — know. Good questions = you researched."</div>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>ভুলের গল্প — Over-Engineered Solution:</strong> 5 design patterns for a simple function. Fix: solve simply first.</div></div>


<div class="code-block">Questions to Ask — ৩ ক্যাটেগরি:

১. TEAM (টিম সম্পর্কে)
   • "টিমে কীভাবে কাজ হয়? Daily standup?"
   • "সিনিয়র থেকে জুনিয়র — মেন্টরশিপ আছে?"
   • "কীভাবে সিদ্ধান্ত নেওয়া হয়? Consensus?"
   → তুমি জানতে চাও কীভাবে কাজ হবে

২. TECH (প্রযুক্তি সম্পর্কে)
   • "সবচেয়ে বড় প্রযুক্তিগত চ্যালেঞ্জ কী?"
   • "টেস্টিং/CI/CD কীভাবে?"
   • "কোড রিভিউ কালচার কেমন?"
   → তুমি ইঞ্জিনিয়ার, টেক জানতে চাও

৩. GROWTH (ভবিষ্যৎ)
   • "৬ মাসে সফল হলে কেমন দেখাবে?"
   • "এখানে ক্যারিয়ার গ্রোথ কেমন?"
   • "শেষ প্রমোশন কার হলো, কেন?"
   → তুমি দীর্ঘমেয়াদী ভাবছ

❌ কখনো বলো না: "কোনো প্রশ্ন নেই।"
❌ কখনো জিজ্ঞেস করো না: "ছুটি কত?" (প্রথমে)
✅ ৩-৫টা প্রশ্ন প্রস্তুত রাখো।</div>

<div class="dialogue">দুআ — সমাপ্তিতে প্রার্থনা। কুরআনে আল্লাহ বলেন — "তোমরা আমার কাছে প্রার্থনা করো, আমি সাড়া দেই।" দুআ হলো সম্পর্ক — তুমি জিজ্ঞেস করো, উত্তর আসে। ইন্টারভিউয়ের শেষে "তোমার কোনো প্রশ্ন?" — এটা দুআ-এর মতো। তুমি আগ্রহ দেখাও, সম্পর্ক গড়ো, ভবিষ্যৎ চিন্তা করো। যে প্রশ্ন করে না — সে আগ্রহী নয়। যে ভালো প্রশ্ন করে — সে প্রস্তুত।</div>
<div class="dialogue en">"Du'a — prayer at the conclusion. Allah says — 'Call upon Me, I respond.' Du'a is relationship — you ask, answer comes. At the end of the interview 'Any questions?' — it's like du'a. You show interest, build relationship, think of the future. One who doesn't ask — isn't interested. One who asks well — is ready."</div>

<div class="dialogue">আটটা পরীক্ষা পেরিয়েছ। নথিপত্রকার বলেছিলেন, রিজিউমি গল্প। ঘোষক বলেছিলেন, নিজেকে সুসজ্জিতভাবে বলো। বিচারক বলেছিলেন, STAR-এ প্রমাণ দাও। ধাঁধা নিপুণ বলেছিলেন, প্যাটার্ন শেখো। স্থপতি বলেছিলেন, নীলনকশা আঁকো। পণ্ডিত বলেছিলেন, মুখে চিন্তা করো। বণিক বলেছিলেন, নিজের মূল্য জানো। আর আমি বলি — ভালো প্রশ্ন দিয়ে শেষ করো। এই আটটার সমন্বয়ই একটা সফল ইন্টারভিউ। শুধু জ্ঞান নয় — পারফরম্যান্স। যাও, ময়দানে নামো। তুমি প্রস্তুত।</div>
<div class="dialogue en">"You've passed eight trials. The scribe said, resume is a story. The herald said, present yourself well. The judge said, give STAR evidence. The puzzle master said, learn patterns. The architect said, draw blueprints. The scholar said, think out loud. The merchant said, know your value. And I say — end with good questions. The synthesis of these eight is a successful interview. Not just knowledge — performance. Go, enter the arena. You are ready."</div>

<div class="verse">"মানুষের জন্য সে ছাড়া কিছু নেই যা সে চেষ্টা করে।"<br>— কুরআন ৫৩:৩৯<br><br>প্রস্তুতি ছাড়া সাফল্য আসে না। চেষ্টা করো — প্রতিটা পরীক্ষায়। প্রতিটা ইন্টারভিউতে। প্রতিটা প্রশ্নে। আল্লাহ চেষ্টাকারীদের ভালোবাসেন।</div>

<div class="secret-box"><div class="label">অষ্টম পরীক্ষা — রহস্য</div><div class="text">🤝 শেষ প্রশ্ন = শেষ পরীক্ষা। ভালো প্রশ্ন = আগ্রহ।<br><small>"কোনো প্রশ্ন নেই" = আগ্রহ নেই। ৩-৫টা প্রশ্ন প্রস্তুত রাখো।</small></div></div>`
});
