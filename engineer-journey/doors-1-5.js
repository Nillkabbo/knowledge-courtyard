// ════════════════════════════════════════
// COURT OF THE GRAND MUHANDIS — DOORS 1-5
// Foundation Phase: From Coder to Engineer
// ════════════════════════════════════════
const doors = [];

// ════════════════════════════════════════
// DOOR 1: FIRST PRINCIPLES THINKING
// ════════════════════════════════════════
doors.push({
  num:1, icon:"🪨", color:"#e8704a", name:"ভিত্তিপ্রস্তরের কক্ষ",
  subtitle:"The Foundation Stone Chamber", tech:"First Principles Thinking",
  spirit:"ইকরা — মূল থেকে পড়ো",
  secret:"সিনিয়র কপি করে না — ভেঙে মৌলিক সত্যে পৌঁছায়। তারপর সেখান থেকে গড়ে।",
  recall:{
    q:"কারিগর কেন কপি করে বাড়ি বানান না, প্রথমে মাটি খুঁড়ে ভিত্তি বসান?",
    qen:"Why does the master builder excavate to bedrock rather than copying a neighbor's house?",
    a:"কারণ ভিত্তি ছাড়া কপি করা কাঠামো প্রথম ভূমিকম্পে ধসে পড়ে। First principles মানে সমস্যাকে ভেঙে এমন সত্যে পৌঁছানো যা আর ভাঙা যায় না — তারপর সেখান থেকে গড়া।",
    aen:"Because without a foundation, copied structures collapse in the first earthquake. First principles means breaking the problem down to undeniable truths — then building from there."
  },
  story:`
<p class="scene-setting">প্রথম কক্ষ। একটা বিশাল পাথরের হল। মেঝেতে খোদাই, দেয়ালে পুরনো নীলনকশা। মুহান্দিস রহিম দাঁড়িয়ে আছেন — বয়স্ক, হাতে একটা ছোট হাতুড়ি, পাশে একটা অসম্পূর্ণ ভিত্তি। তিনি বাড়ি বানাচ্ছেন না — তিনি মাটি খুঁড়ছেন। গভীরে। যতক্ষণ না শক্ত পাথরে হাতুড়ি ঠোকে।</p>
<p class="scene-setting en">The first chamber. A vast stone hall. Etchings on the floor, ancient blueprints on the walls. Muhandis Rahim stands — elderly, a small hammer in his hand, beside an incomplete foundation. He's not building a house — he's digging. Deep. Until the hammer hits solid rock.</p>

<div class="dialogue">তুমি এখন শিক্ষানবিশ। তোমার প্রথম প্রশ্ন হবে — "কীভাবে বানাবো?" কিন্তু সেটা ভুল প্রশ্ন। সঠিক প্রশ্ন হলো — "এটা কী?"</div>
<div class="dialogue en">"You are now an apprentice. Your first question will be — 'How do I build it?' But that's the wrong question. The right question is — 'What IS this?'"</div>

<p>তিনি একটা উদাহরণ দিলেন। "ধরো, তোমাকে বলা হলো — একটা 'search feature' বানাও। কিন্তু search কী? ইউজার যা চায় তা খুঁজে বের করা। কিন্তু কী দিয়ে খুঁজবে? শব্দ দিয়ে? অর্থ দিয়ে? ছবি দিয়ে? কত ডেটা? কত দ্রুত দরকার? প্রতিটা প্রশ্ন ভাঙছে — সমস্যাকে আরও গভীরে নিয়ে যাচ্ছে।"</p>
<p class="en">He gave an example. "Suppose you're told — build a 'search feature.' But what IS search? Finding what the user wants. But finding by what? Words? Meaning? Images? How much data? How fast? Each question breaks it — takes the problem deeper."</p>

<div class="junior-vs-senior">
<div class="jvs-card jvs-junior">
<div class="jvs-label">👶 শিক্ষানবিশ</div>
"আগের প্রজেক্টে Elasticsearch ব্যবহার হয়েছিল, আমিও সেটা কপি করি।"<br><br>
<ul><li>প্রশ্ন না করে সমাধান কপি</li><li>Framework পছন্দ আগে, সমস্যা বোঝা পরে</li><li>"কেন" জিজ্ঞেস করে না</li></ul>
</div>
<div class="jvs-card jvs-senior">
<div class="jvs-label">🏛️ মহাকারিগর</div>
"Search-এর মৌলিক সত্য কী? ইউজারের অভিপ্রায় → ডেটার মিল → র‍্যাঙ্কিং। এই তিন স্তর থেকে গড়ি।"<br><br>
<ul><li>সমস্যা ভাঙে, সমাধান কপি করে না</li><li>সমস্যা বোঝে আগে, tool পরে</li><li>"কেন" বারবার জিজ্ঞেস করে</li></ul>
</div>
</div>

<div class="dialogue">একে বলে 5 Whys। প্রতিটা উত্তরে আবার কেন জিজ্ঞেস করো। পাঁচবার করলে তুমি মৌলিক সত্যে পৌঁছাবে। "কেন এই feature দরকার?" → "ইউজার দ্রুত প্রোডাক্ট খুঁজতে চায়।" → "কেন দ্রুত?" → "কারণ ধীর হলে চলে যায়।" → "কেন চলে যায়?" → "কারণ প্রতিযোগী দ্রুত।" → এখন বুঝলে — সমস্যা search নয়, সমস্যা retention। আর সমাধান হয়তো search নয়, হয়তো personalization।</div>
<div class="dialogue en">"This is called the 5 Whys. Ask 'why' at each answer. Five times and you reach fundamental truth. 'Why this feature?' → 'User wants to find products fast.' → 'Why fast?' → 'Because slow means they leave.' → 'Why leave?' → 'Because competitors are faster.' → Now you understand — the problem isn't search, it's retention. And the solution might not be search — maybe personalization."</div>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>ভুলের গল্প — Burnout from Overwork:</strong> Junior dev worked 80-hour weeks for 3 months — hit complete burnout, quit. Fix: sustainable pace beats hero crunch.</div></div>


<div class="diagram">
<div class="diag-title">৫ কেন — খুঁড়ে বেডরকে পৌঁছানো / The 5 Whys — Digging to Bedrock</div>
<svg viewBox="0 0 560 256" xmlns="http://www.w3.org/2000/svg">
  <rect class="node" x="130" y="6" width="300" height="32" rx="6"/>
  <text class="lbl" x="280" y="23">"একটা Search Feature বানাও"</text>
  <line class="edge edge-teal" x1="280" y1="38" x2="280" y2="54"/>
  <polygon class="arrowhead-teal" points="280,58 275,50 285,50"/>

  <rect class="node" x="130" y="58" width="300" height="32" rx="6"/>
  <text class="lbl-sm" x="280" y="75">কেন? — ইউজার দ্রুত খুঁজে পেতে চায়</text>
  <line class="edge edge-teal" x1="280" y1="90" x2="280" y2="106"/>
  <polygon class="arrowhead-teal" points="280,110 275,102 285,102"/>

  <rect class="node" x="130" y="110" width="300" height="32" rx="6"/>
  <text class="lbl-sm" x="280" y="127">কেন দ্রুত? — ধীর হলে ইউজার চলে যায়</text>
  <line class="edge edge-teal" x1="280" y1="142" x2="280" y2="158"/>
  <polygon class="arrowhead-teal" points="280,162 275,154 285,154"/>

  <rect class="node" x="130" y="162" width="300" height="32" rx="6"/>
  <text class="lbl-sm" x="280" y="179">কেন চলে যায়? — প্রতিযোগী দ্রুততর</text>
  <line class="edge edge-fire" x1="280" y1="194" x2="280" y2="210"/>
  <polygon class="arrowhead-fire" points="280,214 275,206 285,206"/>

  <rect class="node-fire" x="100" y="214" width="360" height="36" rx="8"/>
  <text class="lbl-fire" x="280" y="233">বেডরক সত্য: সমস্যা "Retention" — "Search" নয়</text>
</svg>
<div class="diag-cap">প্রতিটা "কেন" এক ধাপ গভীরে নেয় — উপসর্গ থেকে মূল সত্যে। / Each "why" digs one layer deeper — from surface symptom to fundamental truth.</div>
</div>

<div class="code-block"># First Principles in Code: API Design

# ❌ Junior: "আগের প্রজেক্টে এভাবে ছিল"
class UserAPI:
    def get_all_users(self, include_deleted, 
                      force_refresh, legacy_mode, 
                      debug_output, skip_cache):
        # ৬টা parameter — কেউ জানে না কোনটা কী
        pass

# ✅ Senior: মৌলিক প্রশ্ন — "ইউজার কী চায়?"
# উত্তর: ইউজারের list চায়, কিছু filter সহ
class UserAPI:
    def list_users(self, filters: UserFilters) -> list[User]:
        """Returns active users matching filters."""
        pass
    
    def get_user(self, user_id: str) -> User:
        """Returns a single user by ID."""
        pass
# ২টা method, স্পষ্ট। কারণ সমস্যা ভাঙা হয়েছে।</div>

<div class="dialogue">ইকরা — পড়ো। কুরআনের প্রথম শব্দ। কিন্তু ইকরা শুধু বই পড়া নয় — এটা বোঝা, গভীরে যাওয়া, মূলে পৌঁছানো। প্রতিটা সমস্যা একটা আয়াতের মতো — সতহে পড়লে অর্থ হয় না, গভীরে গেলে সত্য খোলে। First principles হলো ইকরা-র কোডে প্রয়োগ — পড়ো, ভাঙো, বুঝো, তারপর গড়ো।</div>
<div class="dialogue en">"Iqra — Read. The Quran's first word. But Iqra isn't just reading books — it's understanding, going deep, reaching the core. Every problem is like an ayah — surface reading gives no meaning, depth reveals truth. First principles is Iqra applied to code — read, break, understand, then build."</div>`,
  senior:{
    title:"প্র্যাকটিস — প্রতিটা টাস্কে 3 প্রশ্ন",
    body:`
    <p>প্রতিটা কাজ শুরু করার আগে থামো। তিনটা প্রশ্ন করো:</p>
    <p><strong>১. এটা আসলে কী সমস্যা?</strong> (What IS the problem?)</p>
    <p><strong>২. কেন এটা দরকার?</strong> (Why does this matter?)</p>
    <p><strong>৩. সবচেয়ে সহজ সমাধান কী?</strong> (What's the simplest solution?)</p>
    <p>এই তিন প্রশ্ন ছাড়া কোড লিখলে তুমি শিক্ষানবিশ। এই তিন প্রশ্ন স্বভাবে আসলে তুমি ইঞ্জিনিয়ার।</p>`
  },
  expert:{
    title:"First Principles-এর সীমা — কখন থামবে",
    body:`
    <p><strong>Chesterton's Fence:</strong> কিছু ভাঙার আগে জিজ্ঞেস করো — এটা কেন বানানো হয়েছিল? First principles মানে পুরনো সিদ্ধান্ত অন্ধভাবে উপড়ে ফেলা নয়। আগে বোঝো কেন বেড়াটা বসানো হয়েছিল, তারপর সিদ্ধান্ত নাও — রাখবে নাকি ভাঙবে।</p>
    <p><strong>Time-box করো:</strong> ৫ Whys অসীম নয়। ৩-৫ বারেই বেডরকে পৌঁছাও, নাহলে analysis paralysis। এক্সপার্ট জানেন কখন খোঁড়া বন্ধ করে গড়া শুরু করতে হয় — সিদ্ধান্তহীনতাও একটা ব্যয়।</p>
    <p><strong>স্কেল বদলায় প্রশ্নকে:</strong> এক ফাংশনে first principles মানে API ডিজাইন প্রশ্ন করা। পুরো আর্কিটেকচারে এর মানে — "আমাদের কি আদৌ মাইক্রোসার্ভিস দরকার?" এমনকি টিম গঠনও প্রশ্নবিদ্ধ হতে পারে (Conway's Law — সিস্টেমের গঠন টিমের যোগাযোগ কাঠামোর প্রতিচ্ছবি)।</p>
    <p><strong>বড় ঝুঁকি — সব কিছু reinvent করার লোভ:</strong> এক্সপার্ট জানেন — প্রতিটা চাকা নিজে বানানো নয়, বরং কোন চাকা কেনা উচিত তা বোঝা। First principles চিন্তার হাতিয়ার — সবসময় বিল্ড-ফ্রম-স্ক্র্যাচ-এর অজুহাত নয়।</p>`
  }
});

// ════════════════════════════════════════
// DOOR 2: DECOMPOSITION
// ════════════════════════════════════════
doors.push({
  num:2, icon:"🔨", color:"#52c41a", name:"রাজমিস্ত্রির কক্ষ",
  subtitle:"The Mason's Chamber", tech:"Problem Decomposition",
  spirit:"আয়াত আয়াত — ধাপে ধাপে অবতীর্ণ",
  secret:"বড় সমস্যা ভয়ংকর নয় — ভাঙলে ছোট ছোট সমস্যায় পরিণত হয়। প্রতিটা ছোট সমস্যা সমাধানযোগ্য।",
  recall:{
    q:"রাজমিস্ত্রি কেন পুরো দেয়াল একসাথে তোলেন না, এক ইট করে বসান?",
    qen:"Why does the mason lay one brick at a time instead of building the whole wall at once?",
    a:"কারণ একসাথে করলে কিছুই ঠিক বসে না। প্রতিটা ইট আলাদা — সঠিক জায়গায়, সঠিক ক্রমে। Decomposition: বড়কে ভাঙো ছোটে, প্রতিটা ছোট সমাধান করো, তারপর জোড়ো।",
    aen:"Because doing everything at once means nothing fits properly. Each brick is separate — right place, right order. Decomposition: break big into small, solve each, then assemble."
  },
  story:`
<p class="scene-setting">দ্বিতীয় কক্ষ। একটা নির্মাণাধীন দেয়াল। ইটের গন্ধ, সিমেন্টের ভেজা সুবাস, হাতুড়ির শব্দ। উস্তাদ ইব্রাহিম কাজ করছেন — একটা একটা ইট বসাচ্ছেন। সতর্কতার সাথে। সিমেন্ট মাপা, ইট সোজা করা, ট্যাপ করা, পরেরটা। পুরো দেয়াল একসাথে নয় — এক ইট। তারপর আরেকটা।</p>
<p class="scene-setting en">The second chamber. A wall under construction. Smell of brick, wet cement, sound of hammering. Ustad Ibrahim works — placing one brick at a time. Carefully. Measure cement, align brick, tap, next. Not the whole wall at once — one brick. Then another.</p>

<div class="dialogue">ভিত্তিপ্রস্তর কারিগর বলেছিলেন — মূল সত্যে পৌঁছাও। কিন্তু সত্য পেলেই কি কাজ শেষ? না। এখন সেই সত্য থেকে কাঠামো গড়তে হবে। আর কাঠামো গড়ার একমাত্র উপায় — ভাঙা। বড়কে ছোটে।</div>
<div class="dialogue en">"The foundation craftsman said — reach fundamental truth. But is the work done once you find truth? No. Now you must build structure from that truth. And the only way to build — is to break. Big into small."</div>

<p>তুমি একটা সমস্যা পেলে — "ই-কমার্স সাইট বানাও।" পুরোটা একসাথে করতে গেলে পাগল হয়ে যাবে। কিন্তু ভাঙলে:</p>
<p class="en">You get a problem — "Build an e-commerce site." Doing it all at once drives you mad. But break it:</p>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>ভুলের গল্প — Imposter Syndrome Spiral:</strong> Dev compared self to seniors, felt fake, stopped asking questions, fell behind. Fix: seniors were juniors once. Ask early and often.</div></div>


<div class="code-block">Decomposition — E-commerce:

বড়: "ই-কমার্স বানাও"
        ↓
প্রথম ভাঙা:
  # ── Auth (লগইন/রেজিস্টার)
  # ── Product Catalog (প্রোডাক্ট দেখানো)
  # ── Cart (কেনা)
  # ── Payment (টেকা দেওয়া)
  # ── Order Management (অর্ডার ট্র্যাক)
        ↓
প্রতিটা আবার ভাঙা:
  Auth → register, login, logout, 
         password_reset, session
  Cart → add_item, remove_item, 
         update_qty, calculate_total
        ↓
প্রতিটা ফাংশন = একটা ইট
  প্রতিটা ২০-৫০ লাইন।
  প্রতিটা আলাদায় টেস্টযোগ্য।</div>

<div class="diagram">
<div class="diag-title">Decomposition Tree — বড় থেকে ছোট / Big Into Small</div>
<svg viewBox="0 0 560 200" xmlns="http://www.w3.org/2000/svg">
  <rect class="node-leaf" x="190" y="6" width="180" height="30" rx="6"/>
  <text class="lbl" x="280" y="24">ই-কমার্স সাইট বানাও</text>

  <line class="edge edge-leaf" x1="280" y1="36" x2="64" y2="70"/>
  <line class="edge edge-leaf" x1="280" y1="36" x2="172" y2="70"/>
  <line class="edge edge-leaf" x1="280" y1="36" x2="280" y2="70"/>
  <line class="edge edge-leaf" x1="280" y1="36" x2="388" y2="70"/>
  <line class="edge edge-leaf" x1="280" y1="36" x2="496" y2="70"/>

  <rect class="node" x="14" y="70" width="100" height="30" rx="6"/>
  <text class="lbl-sm" x="64" y="89" style="font-size:11px">Auth</text>
  <rect class="node" x="122" y="70" width="100" height="30" rx="6"/>
  <text class="lbl-sm" x="172" y="89" style="font-size:11px">Catalog</text>
  <rect class="node" x="230" y="70" width="100" height="30" rx="6"/>
  <text class="lbl-sm" x="280" y="89" style="font-size:11px">Cart</text>
  <rect class="node" x="338" y="70" width="100" height="30" rx="6"/>
  <text class="lbl-sm" x="388" y="89" style="font-size:11px">Payment</text>
  <rect class="node" x="446" y="70" width="100" height="30" rx="6"/>
  <text class="lbl-sm" x="496" y="89" style="font-size:11px">Orders</text>

  <line class="edge edge-teal" x1="64" y1="100" x2="40" y2="130"/>
  <line class="edge edge-teal" x1="64" y1="100" x2="88" y2="130"/>
  <rect class="node-teal" x="16" y="130" width="48" height="26" rx="5"/>
  <text class="lbl-sm" x="40" y="147" style="font-size:9px">register</text>
  <rect class="node-teal" x="68" y="130" width="48" height="26" rx="5"/>
  <text class="lbl-sm" x="92" y="147" style="font-size:9px">login</text>
  <text class="lbl-sm" x="64" y="176" style="font-size:9.5px">...আরও ভাঙা যায় (logout, password_reset, session)</text>
</svg>
<div class="diag-cap">প্রতিটা স্তরে আরও ছোট, আরও স্পষ্ট, আরও সমাধানযোগ্য। / Every level: smaller, clearer, more solvable.</div>
</div>

<div class="junior-vs-senior">
<div class="jvs-card jvs-junior">
<div class="jvs-label">👶 শিক্ষানবিশ</div>
পুরো অ্যাপ একটা ফাইলে লেখে। ২০০০ লাইন। কোনোটা আলাদা নয়। বাগ খুঁজতে গিয়ে হারিয়ে যায়।
</div>
<div class="jvs-card jvs-senior">
<div class="jvs-label">🏛️ মহাকারিগর</div>
প্রতিটা অংশ আলাদা ফাংশন। প্রতিটা ফাংশন এক কাজ করে। বাগ খুঁজতে গিয়ে ঠিক জায়গায় যায়।
</div>
</div>

<div class="dialogue">কুরআন কীভাবে নাজিল হয়েছে? একসাথে নয়। আয়াত আয়াত। সূরা সূরা। ২৩ বছরে। প্রতিটা আয়াত একটা পরিস্থিতির উত্তর — সময়ে সময়ে। কুরআনকে ভাঙা হয়েছে মানুষের বোঝার ক্ষমতা অনুযায়ী। Decomposition-ও তেমনি — সমস্যাকে ভাঙো বোঝার ক্ষমতা অনুযায়ী। প্রতিটা অংশ ছোট, স্পষ্ট, সমাধানযোগ্য।</div>
<div class="dialogue en">"How was the Quran revealed? Not all at once. Ayah by ayah. Surah by surah. Over 23 years. Each ayah answered a situation — in time. The Quran was broken down according to human capacity to understand. Decomposition is the same — break the problem according to your capacity to understand. Each piece small, clear, solvable."</div>`,
  senior:{
    title:"Decomposition-এর সোনার নিয়ম",
    body:`
    <p><strong>এক ফাংশন = এক কাজ।</strong> একটা ফাংশন যদি "আর" দিয়ে বর্ণনা করতে হয় ("calculate total AND send email AND log") — সেটা তিনটা ফাংশন।</p>
    <p><strong>নাম দাও যা কাজ বলে।</strong> <code>process_data()</code> না — <code>parse_user_input()</code>, <code>validate_email()</code>, <code>save_to_db()</code>।</p>
    <p><strong>২০-৫০ লাইন নিয়ম:</strong> একটা ফাংশন ৫০ লাইনের বেশি হলে — ভাঙতে হবে। সম্ভবত দুটো কাজ করছে।</p>`
  },
  expert:{
    title:"Decomposition যখন বেশি হয়ে যায় — Coupling vs Cohesion",
    body:`
    <p><strong>Nano-services trap:</strong> অতি-ভাঙা মানে ভালো নয়। ১০টা মাইক্রোসার্ভিস যদি প্রতিটা কলে network hop লাগে আর deploy করতে ৩ ঘণ্টা লাগে — তুমি জটিলতা লুকাওনি, ছড়িয়েছ। সঠিক সীমা: high cohesion (একসাথে থাকা জিনিস একসাথে) + low coupling (আলাদা জিনিস আলাদা)।</p>
    <p><strong>Bounded Context (DDD):</strong> এক্সপার্ট ভাঙে ব্যবসায়িক সীমানা ধরে, ফাংশনের দৈর্ঘ্য ধরে নয়। "Order" শব্দটার অর্থ Sales টিমে আর Shipping টিমে আলাদা — তাই তারা আলাদা module, একই ক্লাস নয়।</p>
    <p><strong>Conway's Law:</strong> "যে সংস্থা সিস্টেম ডিজাইন করে, সেই সিস্টেম সংস্থার যোগাযোগ কাঠামোর প্রতিলিপি হয়ে যায়।" যদি ২ জন টিম একসাথে বসে, তাদের সার্ভিস আলাদা করাও কঠিন হবে — architecture আর team org একসাথে ডিজাইন করো।</p>
    <p><strong>পরিমাপযোগ্য প্রশ্ন:</strong> এই দুই মডিউল কি প্রায়ই একসাথে বদলায়? হ্যাঁ হলে coupling বেশি — একসাথে রাখো বা interface শক্ত করো। না হলে decomposition ঠিক আছে।</p>`
  }
});

// ════════════════════════════════════════
// DOOR 3: ABSTRACTION
// ════════════════════════════════════════
doors.push({
  num:3, icon:"🎭", color:"#b37feb", name:"পর্দার কক্ষ",
  subtitle:"The Veil Chamber", tech:"Abstraction & Interface Design",
  spirit:"জাহির ও বাতিন — দৃশ্যমান ও গোপন",
  secret:"সিনিয়র সব কিছু দেখায় না। সহজ interface দেয়, জটিলতা লুকায়। ব্যবহারকারী শুধু বোতাম চাপে — ভেতর কী হয় জানে না।",
  recall:{
    q:"পর্দা নির্মাতা কেন ভেতরের যন্ত্র লুকিয়ে রাখেন, শুধু একটা সহজ বোতাম দেখান?",
    qen:"Why does the veil maker hide the inner mechanism and show only a simple button?",
    a:"কারণ ব্যবহারকারী ভেতর বুঝতে চায় না — সে শুধু ফলাফল চায়। Abstraction: জটিলতা লুকাও, সরল ইন্টারফেস দাও। ভেতর বদলালেও বাইরে একই থাকে।",
    aen:"Because the user doesn't want to understand the inside — they want the result. Abstraction: hide complexity, provide simple interface. Even if the inside changes, the outside stays the same."
  },
  story:`
<p class="scene-setting">তৃতীয় কক্ষ। একটা রহস্যময় কক্ষ। দেয়ালে শত শত পর্দা — কেউ স্বচ্ছ, কেউ অস্বচ্ছ, কেউ সম্পূর্ণ ঢাকা। উস্তাদ যাকারিয়া দাঁড়িয়ে আছেন — হাতে একটা সুন্দর পর্দা, পেছনে একটা জটিল যন্ত্র। তিনি পর্দা সরান — ভেতরে দশটা গিয়ার, তিনটা চেইন, পাঁচটা স্প্রিং। তারপর পর্দা ঢেকে দেন — বাইরে শুধু একটা সুন্দর হাতল।</p>
<p class="scene-setting en">The third chamber. A mysterious room. Hundreds of veils on the walls — some transparent, some opaque, some fully covering. Ustad Zakariya stands — a beautiful veil in his hand, a complex mechanism behind. He lifts the veil — inside: ten gears, three chains, five springs. Then he covers it — outside: a simple, elegant handle.</p>

<div class="dialogue">রাজমিস্ত্রি বলেছিলেন — বড়কে ছোটে ভাঙো। কিন্তু আমি বলি — ভাঙলেই যথেষ্ট নয়। সেই ছোট ছোট অংশকে লুকাতে হবে একটা সহজ আবরণের পেছনে। যাতে বাইরের দুনিয়া শুধু হাতল দেখে — গিয়ার নয়।</div>
<div class="dialogue en">"The mason said — break big into small. But I say — breaking isn't enough. Those small pieces must be hidden behind a simple covering. So the outside world sees only the handle — not the gears."</div>

<div class="dialogue">একে বলে abstraction। তুমি একটা API কল করো — <code>user.send_email("hello")</code>। ভেতরে কী হয়? SMTP কানেকশন, TLS হ্যান্ডশেক, DNS রেজল্যুশন, রিট্রাই লজিক, এরর হ্যান্ডলিং — কিন্তু তুমি শুধু এক লাইন লেখো। এটাই ভালো abstraction।</div>
<div class="dialogue en">"This is called abstraction. You call an API — <code>user.send_email("hello")</code>. What happens inside? SMTP connection, TLS handshake, DNS resolution, retry logic, error handling — but you write one line. That's good abstraction."</div>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>ভুলের গল্প — Tutorial Hell Trap:</strong> Dev watched 200 tutorials, built nothing, couldn't pass interviews. Fix: tutorials teach syntax, projects teach thinking.</div></div>


<div class="diagram">
<div class="diag-title">জাহির ও বাতিন — Visible Interface, Hidden Machinery</div>
<svg viewBox="0 0 560 220" xmlns="http://www.w3.org/2000/svg">
  <text class="lbl-sm" x="100" y="55" style="font-size:10.5px">জাহির — Visible</text>
  <rect class="node-purple" x="20" y="85" width="170" height="46" rx="8"/>
  <text class="lbl" x="105" y="103" style="font-size:11px">user.send_email(</text>
  <text class="lbl" x="105" y="118" style="font-size:11px">"hello")</text>

  <line class="edge edge-teal" x1="190" y1="108" x2="232" y2="108"/>
  <polygon class="arrowhead-teal" points="238,108 228,102 228,114"/>
  <line x1="222" y1="10" x2="222" y2="210" stroke="rgba(212,167,71,.4)" stroke-width="2" stroke-dasharray="5,4"/>
  <text class="lbl-sm" x="222" y="18" style="font-size:10px;fill:var(--gold-bright)">পর্দা / Veil</text>

  <rect x="240" y="26" width="300" height="168" rx="10" fill="none" stroke="rgba(179,127,235,.4)" stroke-width="1.5" stroke-dasharray="4,3"/>
  <text class="lbl-sm" x="390" y="44" style="font-size:10.5px;fill:var(--purple)">বাতিন — Hidden Complexity</text>

  <rect class="node" x="258" y="58" width="120" height="34" rx="6"/>
  <text class="lbl-sm" x="318" y="78" style="font-size:9.5px">SMTP Connection</text>
  <rect class="node" x="400" y="58" width="120" height="34" rx="6"/>
  <text class="lbl-sm" x="460" y="78" style="font-size:9.5px">TLS Handshake</text>
  <rect class="node" x="258" y="108" width="120" height="34" rx="6"/>
  <text class="lbl-sm" x="318" y="128" style="font-size:9.5px">DNS Resolution</text>
  <rect class="node" x="400" y="108" width="120" height="34" rx="6"/>
  <text class="lbl-sm" x="460" y="128" style="font-size:9.5px">Retry Logic</text>
  <rect class="node" x="258" y="158" width="262" height="28" rx="6"/>
  <text class="lbl-sm" x="389" y="176" style="font-size:9.5px">Error Handling + Encoding + Timeout</text>
</svg>
<div class="diag-cap">ব্যবহারকারী শুধু বাঁ দিকটা দেখে। ডান দিকের ১০টা যন্ত্র লুকানো। / The user sees only the left. The ten mechanisms on the right stay hidden.</div>
</div>

<div class="junior-vs-senior">
<div class="jvs-card jvs-junior">
<div class="jvs-label">👶 শিক্ষানবিশ</div>
সব কিছু expose করে। ইউজারকে ডেটাবেস, ক্যাশ, রিট্রাই — সব জানতে হয়। API-তে ১৫টা প্যারামিটার।
</div>
<div class="jvs-card jvs-senior">
<div class="jvs-label">🏛️ মহাকারিগর</div>
একটা সহজ interface দেয়। ভেতরে DB, cache, retry — সব লুকানো। API-তে ২-৩টা প্যারামিটার।
</div>
</div>

<div class="code-block"># Abstraction — ভালো বনাম খারাপ

# ❌ Junior: সব বেহিসাবি
class EmailSender:
    def send(self, smtp_host, smtp_port, username, 
             password, tls_version, retry_count, 
             retry_delay, from_addr, to_addr, 
             subject, body, html=False, encoding="utf-8"):
        # ১৩টা প্যারামিটার!
        pass

# ✅ Senior: জটিলতা লুকানো
class EmailSender:
    def __init__(self, config: EmailConfig):
        self._smtp = SMTPConnection(config)  # লুকানো
        self._retry = RetryPolicy(config)     # লুকানো
    
    def send(self, to: str, subject: str, body: str):
        """ইউজার শুধু এত জানে। বাকি সব ভেতরে।"""
        self._smtp.deliver(to, subject, body)
# বাইরে ৩টা প্যারামিটার। ভেতরে ১০টা যন্ত্র।</div>

<div class="dialogue">জাহির ও বাতিন — দৃশ্যমান ও গোপন। ইসলামি জ্ঞানে এই দ্বৈততা সর্বব্যাপী। কুরআনের আয়াতের একটা দৃশ্যমান অর্থ আছে (জাহির) — সবাই পড়ে। আরেকটা গভীর অর্থ আছে (বাতিন) — যা শুধু গবেষক পৌঁছান। API-ও তেমনি — একটা সহজ বাইরের রূপ (জাহির), আর একটা জটিল ভেতরের কাঠামো (বাতিন)। ভালো engineer জানে — কখন জাহির দেখাবেন, কখন বাতিন লুকাবেন।</div>
<div class="dialogue en">"Zahir and Batin — the visible and the hidden. In Islamic knowledge, this duality is everywhere. A Quranic verse has a visible meaning (zahir) — everyone reads. And a deeper meaning (batin) — only scholars reach. An API is the same — a simple outer form (zahir), and a complex inner structure (batin). A good engineer knows — when to show the zahir, when to hide the batin."</div>`,
  senior:{
    title:"Abstraction-এর সোনার সীমা",
    body:`
    <p><strong>ভালো abstraction:</strong> ব্যবহার সহজ, ভেতর বদলানো যায়, বাইরে কিছু ভাঙে না।</p>
    <p><strong>খারাপ abstraction:</strong> খুব সাধারণ (generic) — কিছুই স্পষ্ট নয়। খুব বেশি লেয়ার — ডিবাগ করা নরক।</p>
    <p><strong>নিয়ম:</strong> "সম্ভবত যথেষ্ট" (probably good enough)। ওভার-অ্যাবস্ট্রাক্ট করো না। প্রথমে সহজ করে লেখো — প্রয়োজন হলে অ্যাবস্ট্রাক্ট করো।</p>`
  },
  expert:{
    title:"Leaky Abstractions ও Rule of Three",
    body:`
    <p><strong>Law of Leaky Abstractions (Joel Spolsky):</strong> "সব অর্থপূর্ণ abstraction, কিছুটা হলেও, leaky।" ORM ডেটাবেস লুকায়, কিন্তু N+1 query সমস্যায় হঠাৎ SQL বুঝতে হয়। TCP নেটওয়ার্ক লুকায়, কিন্তু packet loss হলে latency দেখা যায়। এক্সপার্ট abstraction বিশ্বাস করেন, কিন্তু নিচের স্তর সম্পূর্ণ ভুলে যান না — কারণ একদিন leak হবেই।</p>
    <p><strong>Rule of Three:</strong> প্রথমবার লেখো সরাসরি। দ্বিতীয়বার একই প্যাটার্ন দেখলে নোট করো। তৃতীয়বার — তখন abstract করো। আগেভাগে abstract করলে ভুল abstraction হয়, যা পরে ভাঙা কোড লেখার চেয়ে খরচবহুল।</p>
    <p><strong>Interface Segregation:</strong> একটা বিশাল interface অনেক কিছু করা ভালো abstraction নয়। ছোট, নির্দিষ্ট interface (একেকটা একটা কাজ) — client শুধু যা দরকার তা দেখে, বাকি জানার দরকার নেই।</p>
    <p><strong>Distributed systems-এ বিপদ:</strong> নেটওয়ার্ক কলকে local function call-এর মতো দেখানো (RPC illusion) বিপজ্জনক abstraction — কারণ নেটওয়ার্ক fail করতে পারে, local call করে না। ভালো abstraction ব্যর্থতাকে লুকায় না, তাকে handle করার সহজ উপায় দেয়।</p>`
  }
});

// ════════════════════════════════════════
// DOOR 4: TRADE-OFFS
// ════════════════════════════════════════
doors.push({
  num:4, icon:"⚖️", color:"#d4a747", name:"দাঁড়িপাল্লার কক্ষ",
  subtitle:"The Balance Scale Chamber", tech:"Trade-offs & Compromise",
  spirit:"মিযান — ন্যায়বিচার, ভারসাম্য",
  secret:"নিখুঁত সমাধান নেই। শুধু সেরা আপস। সিনিয়র জানে — কী বিসর্জন দিচ্ছেন, কী পাচ্ছেন। প্রতিটা সিদ্ধান্ত একটা আপস।",
  recall:{
    q:"কারিগর কেন একই সাথে শক্তিশালী, সস্তা, দ্রুত বানাতে পারেন না?",
    qen:"Why can't the builder make something strong, cheap, and fast all at once?",
    a:"কারণ এগুলো পরস্পরবিরোধী। শক্তিশালী = ব্যয়বহুল। দ্রুত = কম নির্ভুল। সস্তা = কম টেকসই। সিনিয়র জানে — দুটো পাবেন, একটা ছাড়তে হবে। এটাই trade-off।",
    aen:"Because these are contradictory. Strong = expensive. Fast = less precise. Cheap = less durable. The senior knows — you get two, sacrifice one. This is the trade-off."
  },
  story:`
<p class="scene-setting">চতুর্থ কক্ষ। একটা দাঁড়িপাল্লা ঘর। দেয়ালে বিভিন্ন ওজনের পাথর। মাঝখানে একটা বিশাল পুরনো দাঁড়িপাল্লা। কাজী সুলায়মান দাঁড়িয়ে আছেন — হাতে দুটো বাক্স। একটায় "দ্রুত" লেখা, আরেকটায় "নির্ভুল"। তিনি দাঁড়িপাল্লায় একটা রাখেন — অন্যটা ওঠে। একটা নামে — অন্যটা ওঠে। দুটো একসাথে সমান? অসম্ভব।</p>
<p class="scene-setting en">The fourth chamber. A scale room. Stones of various weights on the walls. In the center: a vast, ancient balance scale. Qadi Sulayman stands — two boxes in hand. One labeled "fast," the other "accurate." He places one on the scale — the other rises. One goes down — the other rises. Both equal? Impossible.</p>

<div class="dialogue">পর্দা নির্মাতা বলেছিলেন — জটিলতা লুকাও। কিন্তু আমি বলি — সব লুকানো যায় না। কিছু বিসর্জন দিতে হয়। প্রতিটা সিদ্ধান্তে তুমি একটা পাও, একটা হারাও। যে বলে "আমার সমাধান সব দিক থেকে সেরা" — সে মিথ্যা বলছে, বা সে শিক্ষানবিশ।</div>
<div class="dialogue en">"The veil maker said — hide complexity. But I say — not everything can be hidden. Something must be sacrificed. In every decision you gain one thing, lose another. Whoever says 'my solution is best in every way' — is lying, or is a junior."</div>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>ভুলের গল্প — Skipped Fundamentals:</strong> Dev jumped to React without learning JavaScript — everything was a struggle. Fix: master fundamentals first.</div></div>


<div class="code-block">Software Engineering Trade-offs:

The Iron Triangle:
        SPEED (দ্রুত ডেলিভারি)
           / \\
          /   \\
         /     \\
  QUALITY ---- COST
(নির্ভুলতা)    (সস্তা)

২টা পাবে, ১টা ছাড়তে হবে:
• দ্রুত + সস্তা = নিম্নমান
• দ্রুত + মানোন্নয়ন = ব্যয়বহুল
• সস্তা + মানোন্নয়ন = ধীর

Architecture Trade-offs:
• Monolith vs Microservices
• SQL vs NoSQL
• Consistency vs Availability (CAP theorem)
• Strong typing vs Flexibility
• Caching vs Freshness</div>

<div class="diagram">
<div class="diag-title">The Iron Triangle — দুটো পাবে, একটা ছাড়তে হবে</div>
<svg viewBox="0 0 560 236" xmlns="http://www.w3.org/2000/svg">
  <polygon points="280,22 80,190 480,190" fill="rgba(212,167,71,.04)" stroke="var(--gold-bright)" stroke-width="2"/>
  <circle cx="280" cy="22" r="5" fill="var(--gold-bright)"/>
  <text class="lbl-gold" x="280" y="14">QUALITY (নির্ভুলতা)</text>
  <circle cx="80" cy="190" r="5" fill="var(--gold-bright)"/>
  <text class="lbl-gold" x="80" y="210">SPEED (দ্রুততা)</text>
  <circle cx="480" cy="190" r="5" fill="var(--gold-bright)"/>
  <text class="lbl-gold" x="480" y="210">COST (সাশ্রয়)</text>

  <rect x="118" y="76" width="128" height="34" rx="6" fill="rgba(6,14,12,.85)" stroke="rgba(232,112,74,.3)"/>
  <text class="lbl-fire" x="182" y="90" style="font-size:9.5px">দ্রুত + নির্ভুল</text>
  <text class="lbl-fire" x="182" y="103" style="font-size:9.5px">= ব্যয়বহুল</text>

  <rect x="314" y="76" width="132" height="34" rx="6" fill="rgba(6,14,12,.85)" stroke="rgba(232,112,74,.3)"/>
  <text class="lbl-fire" x="380" y="90" style="font-size:9.5px">নির্ভুল + সস্তা</text>
  <text class="lbl-fire" x="380" y="103" style="font-size:9.5px">= ধীর</text>

  <rect x="206" y="196" width="148" height="34" rx="6" fill="rgba(6,14,12,.85)" stroke="rgba(232,112,74,.3)"/>
  <text class="lbl-fire" x="280" y="210" style="font-size:9.5px">দ্রুত + সস্তা</text>
  <text class="lbl-fire" x="280" y="223" style="font-size:9.5px">= নিম্নমান</text>

  <text class="lbl" x="280" y="140" style="font-size:16px;fill:var(--rose)">✕</text>
  <text class="lbl-sm" x="280" y="158" style="font-size:9px">তিনটাই একসাথে = অসম্ভব</text>
</svg>
<div class="diag-cap">প্রতিটা কোণ একটা মূল্য। কেন্দ্রে দাঁড়ানো যায় না — বেছে নিতে হয়। / Every corner has a price. You can't stand at the center — you must choose.</div>
</div>

<div class="junior-vs-senior">
<div class="jvs-card jvs-junior">
<div class="jvs-label">👶 শিক্ষানবিশ</div>
"Microservices সবচেয়ে ভালো!" — প্রতিটা প্রসঙ্গ না বুঝে একটা উত্তর চায়। "কোন ডেটাবেস সেরা?" — একটাই চায়।
</div>
<div class="jvs-card jvs-senior">
<div class="jvs-label">🏛️ মহাকারিগর</div>
"কোন প্রসঙ্গে? কত ইউজার? কত ডেটা? টিমের দক্ষতা কী?" — প্রশ্ন করে। তারপর বলে — "এই ক্ষেত্রে PostgreSQL, কারণ consistency দরকার। কিন্তু এই ক্ষেত্রে MongoDB, কারণ flexibility দরকার।"
</div>
</div>

<div class="dialogue">মিযান — দাঁড়িপাল্লা, ভারসাম্য, ন্যায়বিচার। কুরআনে আল্লাহ বারবার বলেছেন — "দাঁড়িপাল্লায় ইনসাফ করো।" ন্যায়বিচার মানে এক দিকে ঝুঁকে পড়া নয় — ভারসাম্য রক্ষা করা। Engineering-এও — একটা extreme-এ যাওয়া নয়। প্রতিটা পছন্দে একটা ভারসাম্য। এক দিকে বেশি দিলে অন্য দিকে কম পড়ে। Trade-off হলো মিযানের কোডে প্রয়োগ — ভারসাম্যপূর্ণ সিদ্ধান্ত।</div>
<div class="dialogue en">"Mizan — the scale, balance, justice. Allah says repeatedly in the Quran — 'Establish justice with the scale.' Justice doesn't mean leaning to one side — it means maintaining balance. In engineering too — not going to one extreme. Balance in every choice. Give too much to one side, the other suffers. Trade-off is mizan applied to code — balanced decisions."</div>`,
  senior:{
    title:"Trade-off কথা বলার ভাষা",
    body:`
    <p>সিনিয়র ইঞ্জিনিয়ার যখন সিদ্ধান্ত দেন, তিনি <strong>trade-off ভাষায়</strong> কথা বলেন:</p>
    <p>"আমরা PostgreSQL বেছেছি <em>কারণ</em> consistency আমাদের জন্য গুরুত্বপূর্ণ। এর <em>খরচ</em> — horizontal scaling কঠিন। কিন্তু এই পর্যায়ে আমাদের consistency দরকার, scale নয়।"</p>
    <p>"এভাবে উত্তর দিতে শেখো। শুধু "X ভালো" নয় — "X ভালো <strong>কারণ</strong> Y, কিন্তু Z বিসর্জন।"</p>`
  },
  expert:{
    title:"One-Way vs Two-Way Doors — সিদ্ধান্তের ওজন মাপা",
    body:`
    <p><strong>Reversible vs Irreversible (Amazon-এর ফ্রেমওয়ার্ক):</strong> সব সিদ্ধান্ত সমান ওজনের নয়। "Two-way door" — ভুল হলে ফিরে আসা যায় (যেমন: কোন লাইব্রেরি ব্যবহার করবে) — দ্রুত সিদ্ধান্ত নাও, বেশি আলোচনা না করে। "One-way door" — ফিরে আসা কঠিন/ব্যয়বহুল (যেমন: ডেটাবেস স্কিমা, পাবলিক API কনট্র্যাক্ট) — এখানে ধীরে, ডেটা নিয়ে, একাধিক জনের ইনপুট নিয়ে সিদ্ধান্ত নাও।</p>
    <p><strong>Architecture Decision Records (ADR):</strong> এক্সপার্ট সিদ্ধান্ত লিখে রাখেন — কী বেছেছি, কেন, কী বিকল্প বিবেচনা করেছি, কী trade-off মেনে নিয়েছি। ৬ মাস পর কেউ জিজ্ঞেস করলে "মনে নেই" বলতে হয় না — ADR পড়ে।</p>
    <p><strong>Weighted decision matrix:</strong> একাধিক বিকল্প, একাধিক মাপকাঠি (latency, cost, team familiarity, maintainability) থাকলে — প্রতিটাকে ১-৫ স্কোর দাও, গুরুত্ব অনুযায়ী weight দাও, যোগফল তুলনা করো। এটা আবেগ নয়, সিদ্ধান্তকে স্বচ্ছ করে।</p>
    <p><strong>CAP theorem গভীরে:</strong> distributed system-এ Consistency, Availability, Partition tolerance — এই তিনটার একসাথে সবটা পাওয়া যায় না যখন network partition হয়। বেশিরভাগ আধুনিক সিস্টেম CP বা AP বেছে নেয় সচেতনভাবে, দুর্ঘটনাক্রমে নয়।</p>`
  }
});

// ════════════════════════════════════════
// DOOR 5: DESIGNING FOR FAILURE
// ════════════════════════════════════════
doors.push({
  num:5, icon:"🛡️", color:"#5b9eff", name:"ঝড়ের কক্ষ",
  subtitle:"The Storm Chamber", tech:"Designing for Failure & Resilience",
  spirit:"সবর — ধৈর্য, বিপদে অটল",
  secret:"শিক্ষানবিশ ভাবে — ভাঙবে না। সিনিয়র জানে — ভাঙবেই। প্রশ্ন হলো কখন, কীভাবে। তাই সে ভাঙা ধরেই ডিজাইন করে।",
  recall:{
    q:"ঝড় প্রহরী কেন ছাদ মজবুত করেন না, বরং পানি নিষ্কাশন বানান?",
    qen:"Why does the storm watcher build drainage instead of just strengthening the roof?",
    a:"কারণ ছাদ যতই মজবুত হোক — একদিন ঝড় আসবে যা ভাঙবে। প্রশ্ন হলো — ভাঙার পর কী হবে? পানি বের হবে? কাঠামো দাঁড়াবে? Graceful degradation — কিছু কাজ করবে, সব নয়।",
    aen:"Because no matter how strong the roof — a storm will come that breaks it. The question is — what happens after? Will water drain? Will the structure hold? Graceful degradation — something works, not everything."
  },
  story:`
<p class="scene-setting">পঞ্চম কক্ষ। একটা ঝড়ের সিমুলেশন কক্ষ। দেয়ালে ফাটলের চিহ্ন, ছাদে পানির দাগ, মেঝেতে নিষ্কাশন খাদ। মুহান্দিস ইউসুফ দাঁড়িয়ে আছেন — বৃষ্টির পোশাকে, হাতে একটা ব্লুপ্রিন্ট যেখানে "FAILURE MODES" লেখা। তিনি শুধু কীভাবে বানাবেন তা ভাবছেন না — কীভাবে ভাঙবে তা ভাবছেন।</p>
<p class="scene-setting en">The fifth chamber. A storm simulation room. Crack marks on walls, water stains on ceiling, drainage channels in the floor. Muhandis Yusuf stands — in rain gear, holding a blueprint labeled "FAILURE MODES." He's not just thinking about how to build — but how it will break.</p>

<div class="dialogue">দাঁড়িপাল্লা কারিগর বলেছিলেন — প্রতিটা সিদ্ধান্তে আপস। কিন্তু আমি বলি — সবচেয়ে গুরুত্বপূর্ণ আপস হলো — কতটা নির্ভরযোগ্য বনাম কতটা পুনরুদ্ধারযোগ্য। নির্ভরযোগ্য = কখনো ভাঙে না (অসম্ভব)। পুনরুদ্ধারযোগ্য = ভাঙে কিন্তু দ্রুত সারে (বাস্তব)।</div>
<div class="dialogue en">"The scale master said — every decision has a trade-off. But I say — the most important trade-off is — how reliable vs how recoverable. Reliable = never breaks (impossible). Recoverable = breaks but heals fast (realistic)."</div>

<div class="junior-vs-senior">
<div class="jvs-card jvs-junior">
<div class="jvs-label">👶 শিক্ষানবিশ</div>
"এই কোড ভাঙবে না। আমি সব case handle করেছি।" → প্রথম production ক্র্যাশে পুরো সিস্টেম থেমে যায়। ইউজার error দেখে। কোনো fallback নেই।
</div>
<div class="jvs-card jvs-senior">
<div class="jvs-label">🏛️ মহাকারিগর</div>
"এই কোড একদিন ভাঙবে। প্রশ্ন — ভাঙার পর কী হবে?" → fallback, circuit breaker, retry, graceful degradation। ইউজার বুঝতেও পারে না যে কিছু ভেঙেছিল।
</div>
</div>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>ভুলের গল্প — Not Reading Error Messages:</strong> Dev spent 2 hours debugging — error message said the exact fix. Fix: READ the error. 90% of debugging is reading.</div></div>


<div class="code-block">Resilience Patterns — Production Code:

# ১. Idempotency — একই অনুরোধ দুইবার = একবার
def process_payment(payment_id: str):
    if already_processed(payment_id):
        return cached_result  # double-click safe!
    # ... process

# ২. Circuit Breaker — ভাঙলে থামো, পিটিয়ো না
if service.is_healthy():
    try:
        result = service.call()
    except TimeoutError:
        circuit.break()  # থামো, বারবার চেষ্টা করো না
else:
    result = fallback_cache()  # পুরনো ডেটা দাও

# ৩. Graceful Degradation — সব না হোক, কিছু হোক
def get_recommendations(user_id):
    try:
        return ai_model.predict(user_id)  # AI
    except ModelUnavailable:
        return popular_items()  # fallback: সাধারণ তালিকা

# ৪. Retry with Backoff — ব্যর্থ হলে অপেক্ষা করে আবার
@retry(max_attempts=3, backoff=exponential)
def fetch_data(url):
    return requests.get(url)</div>

<div class="diagram">
<div class="diag-title">Circuit Breaker + Fallback — ভাঙার পর কী হয়</div>
<svg viewBox="0 0 560 216" xmlns="http://www.w3.org/2000/svg">
  <rect class="node-moon" x="20" y="20" width="110" height="36" rx="7"/>
  <text class="lbl" x="75" y="42" style="font-size:11px">Client</text>

  <line class="edge edge-teal" x1="130" y1="38" x2="216" y2="38"/>
  <polygon class="arrowhead-teal" points="222,38 212,32 212,44"/>
  <rect class="node" x="220" y="20" width="150" height="36" rx="7"/>
  <text class="lbl" x="295" y="42" style="font-size:10.5px">Payment Service</text>
  <text class="lbl-fire" x="470" y="42" style="font-size:12px">✕ Timeout!</text>

  <line class="edge edge-fire" x1="295" y1="56" x2="295" y2="86"/>
  <polygon class="arrowhead-fire" points="295,92 289,82 301,82"/>
  <rect class="node-fire" x="220" y="92" width="150" height="36" rx="7"/>
  <text class="lbl-fire" x="295" y="112" style="font-size:9.5px">Circuit Breaker: OPEN</text>

  <line class="edge edge-fire" x1="295" y1="128" x2="295" y2="158"/>
  <polygon class="arrowhead-fire" points="295,164 289,154 301,154"/>
  <rect class="node-leaf" x="210" y="164" width="170" height="36" rx="7"/>
  <text class="lbl-leaf" x="295" y="186" style="font-size:9.5px">Fallback: গতকালের cached দাম</text>

  <path d="M208,182 C110,182 60,120 60,58" fill="none" stroke="var(--leaf)" stroke-width="2" stroke-dasharray="5,4"/>
  <polygon class="arrowhead-leaf" points="60,52 54,62 66,62"/>
  <text class="lbl-sm" x="130" y="160" style="font-size:9px;fill:var(--leaf)">degraded response — ইউজার বুঝতেও পারে না</text>
</svg>
<div class="diag-cap">সার্ভিস ভাঙে, কিন্তু সিস্টেম দাঁড়িয়ে থাকে — কিছু দেয়, যদিও সব নয়। / The service breaks, but the system stands — gives something, even if not everything.</div>
</div>

<div class="dialogue">সবর — ধৈর্য, অটলতা, বিপদে দৃঢ়তা। কুরআনে আল্লাহ বলেন — "ধৈর্যশীলদের সাথে আল্লাহ আছেন।" সবর শুধু সহ্য করা নয় — বিপদে অটল থাকা। ভালো সিস্টেমও তেমনি — যখন সব ভাঙে, যখন ডেটাবেস থামে, যখন API ফেইল করে — তখনও দাঁড়িয়ে থাকে। সবর করে। কিছু দেয়, যদিও সব নয়। Graceful degradation হলো সবর-এর কোডে রূপ — বিপদে অটল, পরিস্থিতি সামলে চলা।</div>
<div class="dialogue en">"Sabr — patience, steadfastness, firmness in adversity. Allah says — 'Allah is with the patient.' Sabr isn't just enduring — it's standing firm in crisis. A good system too — when everything breaks, when the database stops, when APIs fail — it still stands. It perseveres. It gives something, even if not everything. Graceful degradation is sabr in code — standing firm, handling the situation."</div>`,
  senior:{
    title:"Failure Mode চিন্তা — প্রতিটা কম্পোনেন্টে প্রশ্ন",
    body:`
    <p>প্রতিটা external dependency-র জন্য নিজেকে প্রশ্ন করো:</p>
    <p><strong>১. এটা থামলে কী হবে?</strong></p>
    <p><strong>২. ধীর হলে কী হবে?</strong> (timeout)</p>
    <p><strong>৩. ভুল ডেটা দিলে কী হবে?</strong></p>
    <p><strong>৪. আংশিক ডেটা দিলে কী হবে?</strong></p>
    <p>এই চার প্রশ্নের উত্তর = resilience plan। এটাই production engineer-এর চিন্তা।</p>`
  },
  expert:{
    title:"Chaos Engineering ও Error Budgets",
    body:`
    <p><strong>Chaos Engineering:</strong> এক্সপার্টরা অপেক্ষা করেন না ভাঙার জন্য — production-এ (বা staging-এ) ইচ্ছাকৃতভাবে ব্যর্থতা inject করেন (Netflix-এর Chaos Monkey একটা random instance বন্ধ করে দেয়)। যদি সিস্টেম টিকে থাকে — resilience প্রমাণিত। যদি না থাকে — ব্যবহারকারীর আগে নিজেরা শিখলে।</p>
    <p><strong>SLO ও Error Budget:</strong> "৯৯.৯% uptime" মানে বছরে ~৮.৭ ঘণ্টা downtime "বাজেট" আছে। এই বাজেট শেষ হলে — নতুন ফিচার থামিয়ে reliability-তে ফোকাস করা হয়। এটা reliability আর velocity-র মধ্যে ডেটা-চালিত trade-off, অনুভূতি-চালিত নয়।</p>
    <p><strong>Bulkheads ও Blast Radius:</strong> জাহাজের watertight compartment-এর মতো — একটা অংশ ডুবলে পুরো জাহাজ ডোবে না। থ্রেড পুল, connection pool, বা টেন্যান্ট আলাদা রাখো, যাতে একটা customer-এর ভারী লোড অন্য সবাইকে প্রভাবিত না করে।</p>
    <p><strong>Cascading failure:</strong> সবচেয়ে বিপজ্জনক failure একা আসে না — retry storm (সবাই একসাথে retry করলে সার্ভিস আরও চাপে পড়ে) নতুন failure তৈরি করে। Exponential backoff + jitter + circuit breaker একসাথে — শুধু retry যথেষ্ট না।</p>`
  }
});
