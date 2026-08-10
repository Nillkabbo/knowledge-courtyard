doors.push({
  num: 6,
  icon: "💬",
  color: "#38bdf8",
  name: "ভাষার নিয়ম",
  subtitle: "The Language of the Web",
  tech: "HTTP/HTTPS — Berners-Lee 1989 (HTTP), Fielding 2000 (REST), HTTP/2 (2015), HTTP/3 (2022), TLS handshakes",
  spirit: "কালাম — বাক্য, যোগাযোগের ভাষা ও নিয়ম",
  secret: "HTTP = ক্লায়েন্ট ও সার্ভারের কথোপকথন। ক্লায়েন্ট জিজ্ঞেস করে (request), সার্ভার উত্তর দেয় (response)। প্রতিটি কথায় method ও status আছে।",
  recall: {
    q: " HTTP status code ২০০, ৪০৪, ৫০০ কী বোঝায়?",
    qen: "What do HTTP status codes 200, 404, 500 mean?",
    a: "২০০ = OK (সফল), ৪০৪ = Not Found (পাওয়া যায়নি), ৫০০ = Internal Server Error (সার্ভার সমস্যা)।",
    aen: "200 = OK (success), 404 = Not Found, 500 = Internal Server Error."
  },
  story: `<p class="scene-setting">তুমি একটি রেস্তোরাঁয় গেছো। ওয়েটারের কাছে মেনু চাও। ওয়েটার মেনু দেয়। তুমি অর্ডার দাও — "একটি বিরিয়ানি।" ওয়েটার রান্নাঘরে যায়, খাবার নিয়ে আসে। তুমি খাও। এটাই HTTP — একটি request এবং একটি response।</p>
<p class="scene-setting en">You go to a restaurant. Ask the waiter for a menu. Waiter gives it. You order — "one biryani." Waiter goes to the kitchen, brings food. You eat. This is HTTP — a request and a response.</p>

<div class="callout info"><span class="co-icon">📐</span><div><strong>HTTP Request গঠন:</strong><br>
<strong>METHOD</strong> URL HTTP/১.১<br>
Headers: Host, User-Agent, Content-Type, Authorization<br>
Body (POST/PUT-এর জন্য): ডেটা</div></div>

<div class="callout info"><span class="co-icon">📋</span><div><strong>HTTP Methods:</strong><br>
<strong>GET:</strong> পড়ো — "এই পেজটি দাও" (পরিবর্তন করে না, safe)<br>
<strong>POST:</strong> তৈরি করো — "নতুন অ্যাকাউন্ট তৈরি করো"<br>
<strong>PUT:</strong> পুরো বদলাও — "পুরো প্রোফাইল আপডেট করো"<br>
<strong>PATCH:</strong> আংশিক বদলাও — "শুধু নাম বদলাও"<br>
<strong>DELETE:</strong> মুছে ফেলো</div></div>

<div class="callout info"><span class="co-icon">📊</span><div><strong>HTTP Status Codes:</strong><br>
<strong>১xx:</strong> Informational<br>
<strong>২xx:</strong> Success — ২০০ OK, ২০১ Created, ২০৪ No Content<br>
<strong>৩xx:</strong> Redirect — ৩০১ Permanent, ৩০২ Temporary<br>
<strong>৪xx:</strong> Client Error — ৪০০ Bad Request, ৪০১ Unauthorized, ৪০৩ Forbidden, ৪০৪ Not Found, ৪২৯ Too Many Requests<br>
<strong>৫xx:</strong> Server Error — ৫০০ Internal, ৫০২ Bad Gateway, ৫০৩ Service Unavailable</div></div>

<div class="diagram">
<div class="diag-title">HTTP Request/Response Cycle</div>
<svg viewBox="0 0 560 300" xmlns="http://www.w3.org/2000/svg">
<defs>
  <marker id="arrCyan6" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><path d="M0,0 L0,8 L8,4 z" fill="#3dd6c4"/></marker>
  <marker id="arrAmber6" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><path d="M0,0 L0,8 L8,4 z" fill="#fbbf24"/></marker>
</defs>
<!-- Client -->
<rect x="20" y="100" width="110" height="55" rx="10" fill="rgba(255,107,53,.15)" stroke="#ff6b35" stroke-width="2"/>
<text x="75" y="122" fill="#ff6b35" font-size="12" font-weight="700" text-anchor="middle">Browser</text>
<text x="75" y="140" fill="#9290a8" font-size="9" text-anchor="middle">(Client)</text>
<!-- Server -->
<rect x="430" y="100" width="110" height="55" rx="10" fill="rgba(82,196,26,.15)" stroke="#52c41a" stroke-width="2"/>
<text x="485" y="122" fill="#52c41a" font-size="12" font-weight="700" text-anchor="middle">Server</text>
<text x="485" y="140" fill="#9290a8" font-size="9" text-anchor="middle">(Backend)</text>
<!-- Request arrow -->
<line x1="130" y1="120" x2="425" y2="120" stroke="#3dd6c4" stroke-width="2.5" marker-end="url(#arrCyan6)"/>
<rect x="170" y="75" width="220" height="35" rx="6" fill="rgba(61,214,196,.08)" stroke="#3dd6c4" stroke-width="1"/>
<text x="280" y="90" fill="#3dd6c4" font-size="10" font-family="monospace" text-anchor="middle">GET /users/42 HTTP/1.1</text>
<text x="280" y="103" fill="#9290a8" font-size="8" text-anchor="middle">Host: api.example.com</text>
<!-- Response arrow -->
<line x1="430" y1="140" x2="135" y2="140" stroke="#fbbf24" stroke-width="2.5" marker-end="url(#arrAmber6)"/>
<rect x="170" y="150" width="220" height="35" rx="6" fill="rgba(251,191,36,.08)" stroke="#fbbf24" stroke-width="1"/>
<text x="280" y="165" fill="#fbbf24" font-size="10" font-family="monospace" text-anchor="middle">HTTP/1.1 200 OK</text>
<text x="280" y="178" fill="#9290a8" font-size="8" text-anchor="middle">Content-Type: application/json</text>
<!-- Status code legend -->
<text x="280" y="215" fill="#9290a8" font-size="10" font-weight="600" text-anchor="middle">Status Code Map</text>
<rect x="40" y="230" width="90" height="28" rx="6" fill="rgba(82,196,26,.12)" stroke="#52c41a" stroke-width="1"/>
<text x="85" y="244" fill="#52c41a" font-size="9" font-weight="700" text-anchor="middle">2xx Success</text>
<text x="85" y="254" fill="#9290a8" font-size="8" text-anchor="middle">200 · 201</text>
<rect x="145" y="230" width="90" height="28" rx="6" fill="rgba(251,191,36,.12)" stroke="#fbbf24" stroke-width="1"/>
<text x="190" y="244" fill="#fbbf24" font-size="9" font-weight="700" text-anchor="middle">3xx Redirect</text>
<text x="190" y="254" fill="#9290a8" font-size="8" text-anchor="middle">301 · 302</text>
<rect x="250" y="230" width="90" height="28" rx="6" fill="rgba(255,107,53,.12)" stroke="#ff6b35" stroke-width="1"/>
<text x="295" y="244" fill="#ff6b35" font-size="9" font-weight="700" text-anchor="middle">4xx Client</text>
<text x="295" y="254" fill="#9290a8" font-size="8" text-anchor="middle">404 · 403</text>
<rect x="355" y="230" width="90" height="28" rx="6" fill="rgba(179,127,235,.12)" stroke="#b37feb" stroke-width="1"/>
<text x="400" y="244" fill="#b37feb" font-size="9" font-weight="700" text-anchor="middle">5xx Server</text>
<text x="400" y="254" fill="#9290a8" font-size="8" text-anchor="middle">500 · 503</text>
<text x="450" y="275" fill="#9290a8" font-size="8" text-anchor="middle">প্রতিটি request স্বাধীন (stateless)</text>
</svg>
<div class="diag-cap">Request: METHOD + URL + Headers · Response: Status + Headers + Body · প্রতিটি কথোপকথন স্বাধীন</div>
</div>

<div class="code-block">— একটি HTTP Request দেখো (কাঁচা) —
GET /users/42 HTTP/1.1              ← Method + URL + Version
Host: api.example.com               ← কোন সার্ভার
User-Agent: Mozilla/5.0             ← কে জিজ্ঞেস করছে
Accept: application/json            ← কী ফরম্যাট চায়
Authorization: Bearer eyJhb...      ← পরিচয় প্রমাণ
                                    ← ফাঁকা লাইন = হেডার শেষ

— সার্ভারের উত্তর —
HTTP/1.1 200 OK                    ← Status line
Content-Type: application/json      ← বডি কী ফরম্যাট
Content-Length: 47                  ← বডির সাইজ
Cache-Control: max-age=3600         ← Cache নির্দেশ
                                    ← ফাঁকা লাইন
{"id":42,"name":"Tania","role":"admin"}  ← Body</div>

<div class="code-block">— curl: সবচেয়ে শক্তিশালী HTTP টুল —
$ curl -v https://api.example.com/users/42

> GET /users/42 HTTP/2             ← তুমি পাঠাও (>)
> Host: api.example.com
> User-Agent: curl/8.0
>
< HTTP/2 200                       ← সার্ভার উত্তর (<)
< content-type: application/json
< content-length: 47
<
{"id":42,"name":"Tania","role":"admin"}

— > মানে তোমার request,  < মানে সার্ভারের response —
— বাস্তবে এটি HTTP/2 বা HTTP/3 — কিন্তু ফরম্যাট একই —</div>

<p class="scene-setting">১৯৮৯ সালে Tim Berners-Lee CERN-এ ওয়ার্ল্ড ওয়াইড ওয়েব আবিষ্কার করেছিলেন। HTTP ছিল তার সবচেয়ে সহজ প্রোটোকল — শুধু GET ছিল। কোনো version নম্বর নেই, কোনো header নেই। শুধু — "এই পেজটি দাও।" আজ HTTP/৩ — QUIC protocol, UDP-র উপর নির্মিত, দ্রুত, নিরাপদ।</p>
<p class="scene-setting en">In 1989, Tim Berners-Lee invented the World Wide Web at CERN. HTTP was its simplest protocol — only GET existed. No version number, no headers. Just — "give me this page." Today HTTP/3 — QUIC protocol, built on UDP, fast, secure.</p>

<div class="callout info"><span class="co-icon">🔒</span><div><strong>HTTPS = HTTP + TLS:</strong><br>
HTTP প্লেইন টেক্সটে যায় — কেউ মাঝপথে পড়তে পারে। HTTPS এনক্রিপ্ট করে।<br>
<strong>TLS Handshake:</strong> ক্লায়েন্ট ও সার্ভার একটি secret key তৈরি করে — public-key cryptography দিয়ে। তারপর সব কথোপকথন সেই key দিয়ে এনক্রিপ্ট হয়।<br>
<strong>Certificate:</strong> সার্ভার একটি digital certificate দেখায় — "আমি সত্যিই google.com।" Certificate Authority (CA) এটি যাচাই করে।</div></div>

<div class="callout info"><span class="co-icon">🔄</span><div><strong>REST (Fielding ২০০০):</strong> Roy Fielding-এর PhD thesis-এ প্রস্তাবিত। ৫টি নীতি:<br>
১. Client-Server — আলাদা<br>
২. Stateless — প্রতিটি request স্বাধীন, সার্ভার কিছু মনে রাখে না<br>
৩. Cacheable — response গুলো cache করা যায়<br>
৪. Uniform Interface — স্ট্যান্ডার্ড ফরম্যাট<br>
৫. Layered System — middleware, proxy, gateway</div></div>

<div class="verse">خَلَقَ الْإِنسَانَ ۝ عَلَّمَهُ الْبَيَانَ</div>
<div style="font-size:.85rem;color:var(--ink-dim);text-align:center;margin-bottom:1rem">"তিনি মানুষকে সৃষ্টি করেছেন। তাকে শিখিয়েছেন স্পষ্ট ভাষা।" — কুরআন ৫৫:৩-৪</div>

<p class="scene-setting">এই আয়াতে ভাষার কথা বলা হয়েছে — মানুষকে স্পষ্ট ভাষা শেখানো হয়েছে। HTTP-ও সেই ভাষা — কম্পিউটারের স্পষ্ট ভাষা। ক্লায়েন্ট ও সার্ভার এই ভাষায় কথা বলে। REST হলো সেই ভাষার ব্যাকরণ। HTTPS হলো সেই ভাষার এনক্রিপশন — কেউ মাঝপথে শুনতে না পারে।</p>

<div class="callout tip"><span class="co-icon">🔗</span><div><strong>Book ৪ (সিস্টেম ডিজাইন) Door ১৪:</strong> API Gateway ও Book ৪ Door ৪: Load Balancer — এগুলো HTTP-এর উপর কাজ করে। Book ১৩ (LLM Security): TLS ও certificate — নিরাপত্তার ভিত্তি।</div></div>

<div class="secret-box">💬 <strong>HTTP = ওয়েবের ভাষা।</strong> GET, POST, PUT, DELETE — চারটি ক্রিয়া। ২০০, ৪০৪, ৫০০ — তিনটি উত্তর। HTTPS সেই ভাষাকে এনক্রিপ্ট করে। REST হলো সেই ভাষার নিয়ম। কিন্তু প্রতিবার নতুন করে সংযোগ করতে হয় — ধীর। কী হবে যদি সংযোগ খোলা থাকে? সেই সমাধান আসবে পরের দরজায়।</div>`,
  senior: {
    title: "HTTP/HTTPS + REST এক নজরে",
    body: `<table class="kv-table"><tr><th>ধারণা</th><th>বিবরণ</th></tr>
<tr><td class="hl">HTTP</td><td>Berners-Lee ১৯৮৯ — request-response protocol</td></tr>
<tr><td class="hl">Methods</td><td>GET (পড়া), POST (তৈরি), PUT (পুরো বদল), PATCH (আংশিক), DELETE</td></tr>
<tr><td class="hl">Status 2xx</td><td>সফল — ২০০, ২০১, ২০৪</td></tr>
<tr><td class="hl">Status 4xx</td><td>ক্লায়েন্ট ভুল — ৪০০, ৪০১, ৪০৩, ৪০৪, ৪২৯</td></tr>
<tr><td class="hl">Status 5xx</td><td>সার্ভার ভুল — ৫০০, ৫০২, ৫০৩</td></tr>
<tr><td class="hl">HTTPS</td><td>HTTP + TLS encryption — certificate authority যাচাই</td></tr>
<tr><td class="hl">REST</td><td>Fielding ২০০০ — stateless, cacheable, uniform interface</td></tr>
<tr><td class="hl">HTTP/২</td><td>২০১৫ — multiplexing, header compression, server push</td></tr>
<tr><td class="hl">HTTP/৩</td><td>২০২২ — QUIC/UDP, দ্রুত, connection migration</td></tr></table>`
  }
});

doors.push({
  num: 7,
  icon: "📦",
  color: "#38bdf8",
  name: "কাছের ভাণ্ডার",
  subtitle: "The Nearby Store",
  tech: "CDN (Content Delivery Network) — Akamai 1998, edge caching, cache strategies, Cache-Control headers, reverse proxy",
  spirit: "হিফয — সংরক্ষণ, কাছে রাখা যাতে দ্রুত পাওয়া যায়",
  secret: "CDN = প্রতিটি শহরে একটি করে গুদাম। পণ্য কাছে থাকলে দ্রুত পৌঁছায়। সার্ভার এক দেশে, ব্যবহারকারী সারা বিশ্বে।",
  recall: {
    q: " CDN কী করে যা একটি সাধারণ সার্ভার পারে না?",
    qen: "What does a CDN do that a regular server cannot?",
    a: "বিশ্বজুড়ে edge server-এ content cache করে — ব্যবহারকারীর সবচেয়ে কাছের সার্ভার থেকে সেবা দেয়, latency কমে।",
    aen: "Caches content at edge servers worldwide — serves from the closest server, reducing latency."
  },
  story: `<p class="scene-setting">তুমি একটি বই কিনতে চাও। দুটি উপায়: প্রথম — প্রকাশকের কাছ থেকে অর্ডার করো। প্রকাশক নিউইয়র্কে, তুমি ঢাকায়। শিপিং ২ সপ্তাহ। দ্বিতীয় — স্থানীয় বইয়ের দোকানে যাও। বইটি আগে থেকেই আছে। তুমি আজই পাও। প্রথমটি = সরাসরি সার্ভার। দ্বিতীয়টি = CDN।</p>
<p class="scene-setting en">You want to buy a book. Two ways: first — order from the publisher. Publisher in New York, you in Dhaka. Shipping 2 weeks. Second — go to a local bookstore. The book is already there. You get it today. First = direct server. Second = CDN.</p>

<div class="dialogue"><strong>ভাণ্ডার রক্ষক তামিম:</strong> ১৯৯৮ সালে Akamai প্রথম CDN তৈরি করেছিল। তাদের ধারণা সহজ কিন্তু শক্তিশালী — content কেবল একটি সার্ভারে না রেখে বিশ্বজুড়ে ছড়িয়ে রাখো। প্রতিটি ব্যবহারকারী তার সবচেয়ে কাছের সার্ভার থেকে সেবা পায়। latency কমে, সার্ভারের লোড কমে, সবাই খুশি।</div>
<div class="dialogue en"><strong>Store Keeper Tamim:</strong> In 1998, Akamai created the first CDN. Their idea was simple but powerful — instead of keeping content on one server, spread it worldwide. Each user gets served from the closest server. Lower latency, lower server load, everyone happy.</div>

<div class="callout info"><span class="co-icon">📦</span><div><strong>CDN কীভাবে কাজ করে:</strong><br>
১. মূল সার্ভার (origin) — ঢাকা<br>
২. Edge servers — নিউইয়র্ক, লন্ডন, টোকিও, সিঙ্গাপুর<br>
৩. ব্যবহারকারী জিজ্ঞেস করে — সবচেয়ে কাছের edge সার্ভারে<br>
৪. Edge-এ cache আছে? দাও। নেই? Origin থেকে আনো, cache করো, দাও।<br>
৫. পরের বার একই অঞ্চলের কেউ চাইলে — cache থেকে দাও।</div></div>

<div class="callout info"><span class="co-icon">⚙️</span><div><strong>Cache-Control Headers:</strong><br>
<strong>Cache-Control: max-age=৩৬০০</strong> — ১ ঘণ্টা cache করো<br>
<strong>Cache-Control: public</strong> — যেকোনো cache করতে পারে (CDN, browser)<br>
<strong>Cache-Control: private</strong> — শুধু browser cache করতে পারে, CDN নয়<br>
<strong>Cache-Control: no-cache</strong> — প্রতিবার যাচাই করো (origin-এ)<br>
<strong>Cache-Control: no-store</strong> — কোনোভাবেই cache করো না</div></div>

<div class="callout info"><span class="co-icon">🔄</span><div><strong>Cache Strategies:</strong><br>
<strong>Cache-Aside:</strong> চাইলে দেখো cache-এ আছে কি না। না থাকলে origin থেকে আনো, cache করো।<br>
<strong>Write-Through:</strong> লেখার সময় cache ও origin দুটোতেই লেখো।<br>
<strong>Write-Behind:</strong> প্রথমে cache-এ লেখো, পরে origin-এ।<br>
<strong>Cache Invalidation:</strong> ডেটা বদলালে cache মুছে দাও — "পুরোনো ডেটা বাতিল।"</div></div>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>Cache Invalidation Problem:</strong> "কম্পিউটার বিজ্ঞানে মাত্র দুটি কঠিন জিনিস — cache invalidation এবং নামকরণ।" — Phil Karlton (Netscape)। ডেটা বদলালে কখন cache মুছবে? খুব আগে মুছলে — অপ্রয়োজনীয় origin কল। খুব দেরিতে মুছলে — পুরোনো ডেটা দেখাবে।</div></div>

<div class="diagram">
<div class="diag-title">CDN Topology — Global Edge Network</div>
<svg viewBox="0 0 560 320" xmlns="http://www.w3.org/2000/svg">
<defs>
  <marker id="arrTeal7" markerWidth="7" markerHeight="7" refX="5" refY="3.5" orient="auto"><path d="M0,0 L0,7 L6,3.5 z" fill="#3dd6c4"/></marker>
</defs>
<!-- Origin server (center) -->
<circle cx="280" cy="160" r="32" fill="rgba(251,191,36,.15)" stroke="#fbbf24" stroke-width="2.5"/>
<text x="280" y="155" fill="#fbbf24" font-size="10" font-weight="700" text-anchor="middle">ORIGIN</text>
<text x="280" y="170" fill="#9290a8" font-size="8" text-anchor="middle">ঢাকা</text>
<!-- Edge servers -->
<rect x="40" y="40" width="90" height="40" rx="8" fill="rgba(56,189,248,.1)" stroke="#38bdf8" stroke-width="1.5"/>
<text x="85" y="55" fill="#38bdf8" font-size="9" font-weight="700" text-anchor="middle">Edge: NYC</text>
<text x="85" y="68" fill="#9290a8" font-size="8" text-anchor="middle">12ms → user</text>
<rect x="210" y="25" width="90" height="40" rx="8" fill="rgba(56,189,248,.1)" stroke="#38bdf8" stroke-width="1.5"/>
<text x="255" y="40" fill="#38bdf8" font-size="9" font-weight="700" text-anchor="middle">Edge: London</text>
<text x="255" y="53" fill="#9290a8" font-size="8" text-anchor="middle">8ms → user</text>
<rect x="380" y="40" width="90" height="40" rx="8" fill="rgba(56,189,248,.1)" stroke="#38bdf8" stroke-width="1.5"/>
<text x="425" y="55" fill="#38bdf8" font-size="9" font-weight="700" text-anchor="middle">Edge: Tokyo</text>
<text x="425" y="68" fill="#9290a8" font-size="8" text-anchor="middle">15ms → user</text>
<rect x="40" y="240" width="90" height="40" rx="8" fill="rgba(56,189,248,.1)" stroke="#38bdf8" stroke-width="1.5"/>
<text x="85" y="255" fill="#38bdf8" font-size="9" font-weight="700" text-anchor="middle">Edge: LA</text>
<text x="85" y="268" fill="#9290a8" font-size="8" text-anchor="middle">10ms → user</text>
<rect x="210" y="250" width="90" height="40" rx="8" fill="rgba(56,189,248,.1)" stroke="#38bdf8" stroke-width="1.5"/>
<text x="255" y="265" fill="#38bdf8" font-size="9" font-weight="700" text-anchor="middle">Edge: SG</text>
<text x="255" y="278" fill="#9290a8" font-size="8" text-anchor="middle">5ms → user</text>
<rect x="380" y="240" width="90" height="40" rx="8" fill="rgba(56,189,248,.1)" stroke="#38bdf8" stroke-width="1.5"/>
<text x="425" y="255" fill="#38bdf8" font-size="9" font-weight="700" text-anchor="middle">Edge: Sydney</text>
<text x="425" y="268" fill="#9290a8" font-size="8" text-anchor="middle">20ms → user</text>
<!-- Lines origin→edges (data replication) -->
<line x1="260" y1="145" x2="125" y2="70" stroke="#fbbf24" stroke-width="1" stroke-dasharray="3,3" opacity=".4"/>
<line x1="280" y1="130" x2="255" y2="65" stroke="#fbbf24" stroke-width="1" stroke-dasharray="3,3" opacity=".4"/>
<line x1="300" y1="145" x2="390" y2="70" stroke="#fbbf24" stroke-width="1" stroke-dasharray="3,3" opacity=".4"/>
<line x1="260" y1="175" x2="125" y2="250" stroke="#fbbf24" stroke-width="1" stroke-dasharray="3,3" opacity=".4"/>
<line x1="280" y1="190" x2="255" y2="250" stroke="#fbbf24" stroke-width="1" stroke-dasharray="3,3" opacity=".4"/>
<line x1="300" y1="175" x2="390" y2="250" stroke="#fbbf24" stroke-width="1" stroke-dasharray="3,3" opacity=".4"/>
<!-- Users -->
<circle cx="170" cy="140" r="8" fill="#52c41a" opacity=".7"/>
<text x="170" y="125" fill="#52c41a" font-size="8" text-anchor="middle">User</text>
<line x1="162" y1="138" x2="130" y2="70" stroke="#3dd6c4" stroke-width="2" marker-end="url(#arrTeal7)"/>
<circle cx="370" cy="180" r="8" fill="#52c41a" opacity=".7"/>
<text x="370" y="200" fill="#52c41a" font-size="8" text-anchor="middle">User</text>
<line x1="362" y1="178" x2="300" y2="250" stroke="#3dd6c4" stroke-width="2" marker-end="url(#arrTeal7)"/>
<!-- Labels -->
<text x="280" y="310" fill="#9290a8" font-size="9" text-anchor="middle">Origin → Edge (replicate) · User → Edge (nearest) · ছাড়া CDN: ২০০ms+</text>
</svg>
<div class="diag-cap">CDN = বিশ্বজুড়ে edge cache · Origin এক, Edge অনেক · User সবচেয়ে কাছের Edge থেকে সেবা পায়</div>
</div>

<div class="code-block">— CDN হেডার পড়ো (curl দিয়ে) —
$ curl -I https://cdn.example.com/image.png

HTTP/2 200
server: cloudflare                     ← কোন CDN?
cf-ray: 8a1b2c3d4e5f-LHR               ← কোন edge? (London)
cf-cache-status: HIT                   ← cache এ আছে?
age: 3600                              ← কত সেকেন্ড ধরে cache-এ
cache-control: public, max-age=86400   ← ১ দিন cache করো
cf-cache-status: HIT                   ← HIT = cache থেকে দিলাম
                                       ← MISS = origin থেকে আনতে হবে

— cf-cache-status মান: —
  HIT    = edge-এ cache ছিল, দ্রুত দিলাম
  MISS   = cache ছিল না, origin থেকে আনলাম
  EXPIRED = TTL শেষ, আবার origin থেকে আনলাম
  BYPASS = cache করতে বারণ করা হয়েছে</div>

<div class="code-block">— Cache-Control হেডার সিনট্যাক্স —
Cache-Control: public, max-age=3600        ← সবাই cache করতে পারে, ১ ঘণ্টা
Cache-Control: private, max-age=600         ← শুধু browser, CDN নয়
Cache-Control: no-cache                     ← প্রতিবার যাচাই করো (origin-এ)
Cache-Control: no-store                     ← কোনোভাবেই cache করো না
Cache-Control: public, max-age=31536000     ← ১ বছর (static assets)

— বাস্তব নিয়ম: —
  HTML        → no-cache (সবসময় তাজা)
  CSS/JS      → max-age=31536000 (১ বছর + fingerprint)
  Images      → max-age=86400 (১ দিন)
  API JSON    → no-store (ব্যক্তিগত ডেটা)</div>

<div class="verse">وَنُنَزِّلُ مِنَ الْقُرْآنِ مَا هُوَ شِفَاءٌ وَرَحْمَةٌ</div>
<div style="font-size:.85rem;color:var(--ink-dim);text-align:center;margin-bottom:1rem">"এবং আমরা কুরআন থেকে যা নাজিল করি তা আরোগ্য ও করুণা।" — কুরআন ১৭:৮২</div>

<p class="scene-setting">এই আয়াতে বলা হয়েছে — আল্লাহ কুরআন নাজিল করেছেন যা আরোগ্য ও করুণা। CDN-এর ধারণাও তেমন — জ্ঞান বা সেবা কেন্দ্রে না রেখে সবার কাছে পৌঁছে দেওয়া। কাছে থাকলে দ্রুত পাওয়া যায় — যেমন কুরআন সবার কাছে, সব সময়।</p>

<div class="callout tip"><span class="co-icon">🔗</span><div><strong>Book ৪ (সিিটেম ডিজাইন) Door ৪:</strong> Caching শিখেছিলে — CDN হলো caching-এর বিশ্বব্যাপী রূপ। Book ১০ (RAG) Door ৩: Vector DB cache — একই নীতি ভিন্ন স্তরে।</div></div>

<div class="secret-box">📦 <strong>CDN = কাছের ভাণ্ডার।</strong> বিশ্বজুড়ে edge server, প্রতিটিতে content-এর কপি। ব্যবহারকারী সবচেয়ে কাছের সার্ভার থেকে সেবা পায়। latency কমে, সার্ভারের লোড কমে। কিন্তু সব content এভাবে cache করা যায় না — রিয়েল-টাইম ডেটার দরকার ভিন্ন সমাধান। সেই সমাধান আসবে পরের দরজায়।</div>`,
  senior: {
    title: "CDN + Caching এক নজরে",
    body: `<table class="kv-table"><tr><th>ধারণা</th><th>বিবরণ</th></tr>
<tr><td class="hl">CDN</td><td>Akamai ১৯৯৮ — edge servers worldwide</td></tr>
<tr><td class="hl">Edge Server</td><td>ব্যবহারকারীর সবচেয়ে কাছের সার্ভার</td></tr>
<tr><td class="hl">Origin Server</td><td>মূল সার্ভার — সব ডেটার উৎস</td></tr>
<tr><td class="hl">Cache-Control</td><td>max-age, public, private, no-cache, no-store</td></tr>
<tr><td class="hl">Cache-Aside</td><td>cache miss → origin → cache → return</td></tr>
<tr><td class="hl">Invalidation</td><td>ডেটা বদলালে cache মুছো — কঠিন সমস্যা</td></tr>
<tr><td class="hl">Providers</td><td>Cloudflare, Akamai, AWS CloudFront, Fastly</td></tr></table>`
  }
});

doors.push({
  num: 8,
  icon: "⚡",
  color: "#38bdf8",
  name: "জীবন্ত সংযোগ",
  subtitle: "The Living Connection",
  tech: "WebSocket (Hickson 2011), Server-Sent Events (SSE), long polling, real-time protocols, WebRTC",
  spirit: "সিলসিলা — জীবন্ত শৃঙ্খল, একটানা সংযোগ",
  secret: "WebSocket = ফোন কল চালু রাখা। HTTP = প্রতিবার নতুন কল। চ্যাট, গেম, রিয়েল-টাইম — সবার দরকার খোলা সংযোগ।",
  recall: {
    q: " WebSocket এবং HTTP-এর মূল পার্থক্য কী?",
    qen: "What's the main difference between WebSocket and HTTP?",
    a: "HTTP = request-response (প্রতিবার নতুন সংযোগ)। WebSocket = একটি খোলা সংযোগ, উভয় দিক যেকোনো সময় বার্তা পাঠাতে পারে।",
    aen: "HTTP = request-response (new connection each time). WebSocket = one open connection, both sides can send anytime."
  },
  story: `<p class="scene-setting">তুমি একটি চ্যাটে আছো। তুমি একটি মেসেজ পাঠাও। বন্ধু উত্তর দেয়। তুমি আবার লেখো। এখন ভাবো — যদি প্রতিটি মেসেজের জন্য নতুন করে ফোন কল করতে হতো? বিরক্তিকর! কিন্তু HTTP ঠিক তাই করে — প্রতিটি request-এ নতুন সংযোগ। WebSocket হলো একটি খোলা ফোন লাইন — একবার সংযোগ, তারপর উভয় দিক যখন খুশি কথা বলতে পারে।</p>
<p class="scene-setting en">You're in a chat. You send a message. Friend replies. You write again. Now imagine — if each message required a new phone call? Annoying! But that's what HTTP does — a new connection each request. WebSocket is an open phone line — connect once, then both sides can talk whenever they want.</p>

<div class="dialogue"><strong>জীবন্ত সংযোগ কারিগর জয়নাল:</strong> WebSocket শুরু হয় HTTP দিয়েই — একটি upgrade request। সার্ভার বলে "ঠিক আছে, upgrade করছি।" তারপর সংযোগটি HTTP থেকে WebSocket-এ রূপান্তরিত হয়। একটি খোলা পাইপ — উভয় দিক থেকে যেকোনো সময় ডেটা যেতে পারে। কোনো request-response নেই। কোনো polling নেই।</div>
<div class="dialogue en"><strong>Living Connection Craftsman Jaynal:</strong> WebSocket starts as HTTP — an upgrade request. Server says "OK, upgrading." Then the connection transforms from HTTP to WebSocket. An open pipe — data can flow from both sides anytime. No request-response. No polling.</div>

<div class="callout info"><span class="co-icon">📐</span><div><strong>WebSocket প্রক্রিয়া:</strong><br>
১. ক্লায়েন্ট HTTP request পাঠায় — "Upgrade: websocket"<br>
২. সার্ভার HTTP ১০১ Switching Protocols — "ঠিক আছে"<br>
৩. সংযোগ upgrade হয় — এখন আর HTTP নেই<br>
৪. উভয় দিক frames পাঠাতে পারে — যেকোনো সময়<br>
৫. কেউ close না করা পর্যন্ত খোলা থাকে</div></div>

<div class="compare">
<div class="cmp-card cmp-bad"><div class="cmp-label">❌ HTTP Polling</div>ক্লায়েন্ট প্রতি ৫ সেকেন্ডে জিজ্ঞেস করে — "কিছু নতুন?" সার্ভার বলে — "না।" বারবার। অপচয়, ধীর।</div>
<div class="cmp-card cmp-good"><div class="cmp-label">✅ WebSocket</div>একবার সংযোগ। সার্ভার নতুন কিছু থাকলে নিজে থেকে পাঠায়। ক্লায়েন্টও পাঠাতে পারে। দ্রুত, কম অপচয়।</div>
</div>

<div class="diagram">
<div class="diag-title">HTTP Half-Duplex বনাম WebSocket Full-Duplex</div>
<svg viewBox="0 0 560 340" xmlns="http://www.w3.org/2000/svg">
<defs>
  <marker id="arrFire8" markerWidth="7" markerHeight="7" refX="5" refY="3.5" orient="auto"><path d="M0,0 L0,7 L6,3.5 z" fill="#ff6b35"/></marker>
  <marker id="arrTeal8" markerWidth="7" markerHeight="7" refX="5" refY="3.5" orient="auto"><path d="M0,0 L0,7 L6,3.5 z" fill="#3dd6c4"/></marker>
</defs>
<!-- TOP: HTTP pattern -->
<text x="280" y="20" fill="#ff6b35" font-size="12" font-weight="700" text-anchor="middle">HTTP (Half-Duplex)</text>
<rect x="30" y="30" width="70" height="30" rx="6" fill="rgba(255,107,53,.1)" stroke="#ff6b35" stroke-width="1.5"/>
<text x="65" y="49" fill="#ff6b35" font-size="9" font-weight="700" text-anchor="middle">Client</text>
<rect x="460" y="30" width="70" height="30" rx="6" fill="rgba(255,107,53,.1)" stroke="#ff6b35" stroke-width="1.5"/>
<text x="495" y="49" fill="#ff6b35" font-size="9" font-weight="700" text-anchor="middle">Server</text>
<line x1="100" y1="45" x2="460" y2="45" stroke="#ff6b35" stroke-width="1.5" marker-end="url(#arrFire8)"/>
<text x="280" y="38" fill="#9290a8" font-size="8" text-anchor="middle">Request 1</text>
<line x1="460" y1="65" x2="100" y2="65" stroke="#9290a8" stroke-width="1" stroke-dasharray="3,3" marker-end="url(#arrFire8)"/>
<text x="280" y="78" fill="#9290a8" font-size="8" text-anchor="middle">Response 1</text>
<line x1="100" y1="90" x2="460" y2="90" stroke="#ff6b35" stroke-width="1.5" marker-end="url(#arrFire8)"/>
<text x="280" y="85" fill="#9290a8" font-size="8" text-anchor="middle">Request 2 (new connection!)</text>
<line x1="460" y1="110" x2="100" y2="110" stroke="#9290a8" stroke-width="1" stroke-dasharray="3,3" marker-end="url(#arrFire8)"/>
<text x="280" y="123" fill="#9290a8" font-size="8" text-anchor="middle">Response 2</text>
<!-- Divider -->
<line x1="20" y1="150" x2="540" y2="150" stroke="#5e5c74" stroke-width="1" stroke-dasharray="5,5"/>
<!-- BOTTOM: WebSocket pattern -->
<text x="280" y="172" fill="#3dd6c4" font-size="12" font-weight="700" text-anchor="middle">WebSocket (Full-Duplex)</text>
<rect x="30" y="185" width="70" height="30" rx="6" fill="rgba(61,214,196,.1)" stroke="#3dd6c4" stroke-width="1.5"/>
<text x="65" y="204" fill="#3dd6c4" font-size="9" font-weight="700" text-anchor="middle">Client</text>
<rect x="460" y="185" width="70" height="30" rx="6" fill="rgba(61,214,196,.1)" stroke="#3dd6c4" stroke-width="1.5"/>
<text x="495" y="204" fill="#3dd6c4" font-size="9" font-weight="700" text-anchor="middle">Server</text>
<!-- Upgrade -->
<line x1="100" y1="200" x2="460" y2="200" stroke="#fbbf24" stroke-width="1.5" marker-end="url(#arrTeal8)"/>
<text x="280" y="195" fill="#fbbf24" font-size="8" text-anchor="middle">HTTP Upgrade → 101 Switching</text>
<!-- Open connection bar -->
<rect x="100" y="220" width="360" height="80" rx="8" fill="rgba(61,214,196,.05)" stroke="#3dd6c4" stroke-width="1.5" stroke-dasharray="4,3"/>
<text x="280" y="235" fill="#3dd6c4" font-size="9" font-weight="700" text-anchor="middle">⟵ খোলা সংযোগ — কোনো পুনরায় সংযোগ নেই ⟶</text>
<!-- Bidirectional arrows -->
<line x1="130" y1="255" x2="430" y2="255" stroke="#3dd6c4" stroke-width="2" marker-end="url(#arrTeal8)"/>
<text x="280" y="248" fill="#3dd6c4" font-size="8" text-anchor="middle">Client → Server (anytime)</text>
<line x1="430" y1="275" x2="130" y2="275" stroke="#3dd6c4" stroke-width="2" marker-end="url(#arrTeal8)"/>
<text x="280" y="288" fill="#3dd6c4" font-size="8" text-anchor="middle">Server → Client (anytime)</text>
<!-- Bottom note -->
<text x="280" y="325" fill="#9290a8" font-size="9" text-anchor="middle">HTTP: প্রতিটি request নতুন সংযোগ · WebSocket: একটি খোলা সংযোগ, উভয় দিক স্বাধীন</text>
</svg>
<div class="diag-cap">HTTP = বারবার নতুন কল · WebSocket = এক কল, খোলা রাখো · রিয়েল-টাইম কথোপকথন</div>
</div>

<div class="code-block">— WebSocket ক্লায়েন্ট (JavaScript) —
// ১. সংযোগ খোলো (ws:// বা wss:// encrypted)
const ws = new WebSocket('wss://chat.example.com/ws');

// ২. সংযোগ স্থাপিত হলে
ws.onopen = function() {
  console.log('সংযোগ খোলা!');
  ws.send(JSON.stringify({type: 'join', room: 'general'}));
};

// ৩. সার্ভার থেকে বার্তা এলে
ws.onmessage = function(event) {
  const msg = JSON.parse(event.data);
  console.log(msg.user + ': ' + msg.text);
};

// ৪. বার্তা পাঠাও (যেকোনো সময়!)
ws.send(JSON.stringify({type: 'msg', text: 'হ্যালো!'}));

// ৫. বন্ধ করো
ws.close();

— তুলনা: HTTP তে একই কাজ —
// HTTP polling (খারাপ উপায়)
setInterval(() => {
  fetch('/messages?since=' + lastId)  // প্রতি ৫ সেকেন্ডে
    .then(r => r.json())
    .then(msgs => console.log(msgs));
}, 5000);                              // অপচয়, ধীর</div>

<div class="callout tip"><span class="co-icon">💡</span><div><strong>বাস্তবে:</strong> WhatsApp, Slack, Discord — সবাই WebSocket ব্যবহার করে। যখন কেউ টাইপ করছে (typing indicator) — সেটাও WebSocket frame। কোনো polling নেই, কোনো দেরি নেই। সার্ভার push করে, ক্লায়েন্ট সাথে সাথে দেখে।</div></div>

<div class="callout info"><span class="co-icon">📡</span><div><strong>রিয়েল-টাইম প্রোটোকল পরিবার:</strong><br>
<strong>WebSocket:</strong> দ্বিমুখী (bidirectional) — চ্যাট, গেম, রিয়েল-টাইম ড্যাশবোর্ড<br>
<strong>SSE (Server-Sent Events):</strong> একমুখী — সার্ভার থেকে ক্লায়েন্ট। স্টক প্রাইস, notification, live feed<br>
<strong>WebRTC:</strong> পিয়ার-টু-পিয়ার — ভিডিও কল, ভয়েস। কোনো সার্ভার লাগে না (signaling ছাড়া)<br>
<strong>Long Polling:</strong> পুরোনো fallback — HTTP request খোলা রাখো, সার্ভার উত্তর দিলে আবার খোলো</div></div>

<div class="callout info"><span class="co-icon">🎮</span><div><strong>যেখানে WebSocket দরকার:</strong><br>
চ্যাট অ্যাপ (WhatsApp, Slack)<br>
মাল্টিপ্লেয়ার গেম<br>
রিয়েল-টাইম ড্যাশবোর্ড (analytics)<br>
সহযোগী এডিটর (Google Docs)<br>
লাইভ স্ট্রিমিং কমেন্ট<br>
Cryptocurrency price tickers</div></div>

<div class="verse">وَأَن لَّيْسَ لِلْإِنسَانِ إِلَّا مَا سَعَىٰ</div>
<div style="font-size:.85rem;color:var(--ink-dim);text-align:center;margin-bottom:1rem">"এবং মানুষের জন্য তা ছাড়া আর কিছু নেই যা সে অর্জন করে (চেষ্টা করে)।" — কুরআন ৫৩:৩৯</div>

<p class="scene-setting">এই আয়াত বলে — মানুষ যা চেষ্টা করে তাই পায়। WebSocket-এর দর্শনও তেমন — ক্রমাগত চেষ্টা নয়, একটানা সংযোগ। একবার সংযোগ স্থাপন করো, তারপর নিরবচ্ছিন্ন আদান-প্রদান। এটাই রিয়েল-টাইমের মূল — ক্রমাগত চেষ্টা নয়, স্থায়ী সংযোগ।</p>

<div class="callout tip"><span class="co-icon">🔗</span><div><strong>Book ১২ (AI Agents):</strong> Agent loops — একটানা thinking-acting চক্র। WebSocket হলো সেই চক্রের নেটওয়ার্ক ভিত্তি। Book ৪ (সিস্টেম ডিজাইন): message queue — asynchronous যোগাযোগ।</div></div>

<div class="secret-box">⚡ <strong>WebSocket = খোলা ফোন লাইন।</strong> একবার সংযোগ, তারপর উভয় দিক স্বাধীনভাবে কথা বলে। চ্যাট, গেম, রিয়েল-টাইম — সব রিয়েল-টাইম অ্যাপলিকেশন এর উপর নির্মিত। কিন্তু খোলা সংযোগ মানে নিরাপত্তা ঝুঁকিও বেশি — কে সংযুক্ত হচ্ছে, কী পাঠাচ্ছে? সেই সমাধান আসবে পরের দরজায়।</div>`,
  senior: {
    title: "WebSocket + Real-Time এক নজরে",
    body: `<table class="kv-table"><tr><th>ধারণা</th><th>বিবরণ</th></tr>
<tr><td class="hl">WebSocket</td><td>Hickson ২০১১ (RFC ৬৪৫৫) — full-duplex over TCP</td></tr>
<tr><td class="hl">Upgrade</td><td>HTTP → ১০১ Switching Protocols → WebSocket</td></tr>
<tr><td class="hl">Bidirectional</td><td>উভয় দিক যেকোনো সময় বার্তা পাঠাতে পারে</td></tr>
<tr><td class="hl">SSE</td><td>Server-Sent Events — একমুখী, সার্ভার → ক্লায়েন্ট</td></tr>
<tr><td class="hl">WebRTC</td><td>Peer-to-peer — ভিডিও/অডিও, সার্ভার ছাড়া</td></tr>
<tr><td class="hl">Long Polling</td><td>HTTP fallback — request খোলা রাখো</td></tr>
<tr><td class="hl">ব্যবহার</td><td>চ্যাট, গেম, রিয়েল-টাইম ড্যাশবোর্ড, সহযোগী এডিটর</td></tr></table>`
  }
});

doors.push({
  num: 9,
  icon: "🛡️",
  color: "#38bdf8",
  name: "সুরক্ষার কারিগর",
  subtitle: "The Security Craftsman",
  tech: "Network Security — TLS/SSL (Dierks-Rescorla 1999/2008), Firewalls, DDoS protection, VPN, zero-trust, public-key cryptography",
  spirit: "হিফযুল আমান — আমানত রক্ষা, সংযোগের নিরাপত্তা",
  secret: "নেটওয়ার্ক নিরাপত্তা = তিনটি প্রশ্ন — তুমি কে? (authentication), তুমি কী দেখতে পারো? (authorization), তোমার ডেটা কি লুকানো? (encryption)।",
  recall: {
    q: " TLS handshake-এ কী ঘটে?",
    qen: "What happens in a TLS handshake?",
    a: "ক্লায়েন্ট ও সার্ভার একে অপরকে যাচাই করে, একটি shared secret key তৈরি করে, এবং এনক্রিপশন শুরু করে।",
    aen: "Client and server verify each other, agree on a shared secret key, and begin encryption."
  },
  story: `<p class="scene-setting">তুমি একটি গুরুত্বপূর্ণ চিঠি পাঠাচ্ছো। কিন্তু মাঝপথে কেউ পড়তে পারে। কেউ চিঠি চুরি করতে পারে। কেউ নকল চিঠি পাঠাতে পারে। তিনটি ঝুঁকি। তিনটি সমাধান: এনক্রিপশন (পড়তে না পারে), সিগনেচার (নকল ধরা যায়), সার্টিফিকেট (পরিচয় যাচাই)।</p>
<p class="scene-setting en">You're sending an important letter. But someone in the middle can read it. Someone can steal it. Someone can send a fake. Three risks. Three solutions: encryption (can't read), signature (fake detectable), certificate (identity verified).</p>

<div class="callout info"><span class="co-icon">🔒</span><div><strong>TLS (Transport Layer Security):</strong><br>
<strong>TLS Handshake প্রক্রিয়া:</strong><br>
১. Client Hello — "আমি এই cipher suites পারি"<br>
২. Server Hello — "আমি এটি বেছে নিলাম, এই আমার certificate"<br>
৩. Key Exchange — asymmetric cryptography (RSA/ECDHE) দিয়ে shared secret তৈরি<br>
৪. Finished — এখন থেকে symmetric encryption চালু</div></div>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>Asymmetric vs Symmetric:</strong><br>
<strong>Symmetric:</strong> একটি key দিয়ে lock ও unlock। দ্রুত কিন্তু key শেয়ার করা কঠিন।<br>
<strong>Asymmetric:</strong> দুটি key — public (সবাই জানে) ও private (শুধু তুমি)। public দিয়ে lock, private দিয়ে unlock। ধীর কিন্তু নিরাপদ।<br>
<strong>TLS-এর বুদ্ধি:</strong> handshake-এ asymmetric (নিরাপদ key exchange), তারপর symmetric (দ্রুত ডেটা)। সেরা উভয় জগৎ।</div></div>

<div class="diagram">
<div class="diag-title">TLS Handshake — নিরাপদ সংযোগ স্থাপন</div>
<svg viewBox="0 0 560 370" xmlns="http://www.w3.org/2000/svg">
<defs>
  <marker id="arrCyan9" markerWidth="7" markerHeight="7" refX="5" refY="3.5" orient="auto"><path d="M0,0 L0,7 L6,3.5 z" fill="#3dd6c4"/></marker>
  <marker id="arrAmber9" markerWidth="7" markerHeight="7" refX="5" refY="3.5" orient="auto"><path d="M0,0 L0,7 L6,3.5 z" fill="#fbbf24"/></marker>
  <marker id="arrLeaf9" markerWidth="7" markerHeight="7" refX="5" refY="3.5" orient="auto"><path d="M0,0 L0,7 L6,3.5 z" fill="#52c41a"/></marker>
</defs>
<!-- Client -->
<rect x="30" y="15" width="100" height="35" rx="8" fill="rgba(255,107,53,.15)" stroke="#ff6b35" stroke-width="2"/>
<text x="80" y="33" fill="#ff6b35" font-size="11" font-weight="700" text-anchor="middle">CLIENT</text>
<text x="80" y="45" fill="#9290a8" font-size="8" text-anchor="middle">Browser</text>
<line x1="80" y1="50" x2="80" y2="350" stroke="#5e5c74" stroke-width="1" stroke-dasharray="3,4"/>
<!-- Server -->
<rect x="430" y="15" width="100" height="35" rx="8" fill="rgba(82,196,26,.15)" stroke="#52c41a" stroke-width="2"/>
<text x="480" y="33" fill="#52c41a" font-size="11" font-weight="700" text-anchor="middle">SERVER</text>
<text x="480" y="45" fill="#9290a8" font-size="8" text-anchor="middle">HTTPS</text>
<line x1="480" y1="50" x2="480" y2="350" stroke="#5e5c74" stroke-width="1" stroke-dasharray="3,4"/>
<!-- Step 1: Client Hello -->
<line x1="80" y1="75" x2="425" y2="75" stroke="#3dd6c4" stroke-width="2" marker-end="url(#arrCyan9)"/>
<text x="250" y="68" fill="#3dd6c4" font-size="10" font-weight="700" text-anchor="middle">① Client Hello</text>
<text x="250" y="88" fill="#9290a8" font-size="8" text-anchor="middle">"আমি TLS 1.3, AES, ECDHE পারি"</text>
<!-- Step 2: Server Hello + Certificate -->
<line x1="480" y1="120" x2="85" y2="120" stroke="#fbbf24" stroke-width="2" marker-end="url(#arrAmber9)"/>
<text x="250" y="113" fill="#fbbf24" font-size="10" font-weight="700" text-anchor="middle">② Server Hello + Certificate</text>
<text x="250" y="133" fill="#9290a8" font-size="8" text-anchor="middle">"TLS 1.3 OK · আমার certificate (CA সাইন করা)"</text>
<!-- Step 3: Key Exchange -->
<line x1="80" y1="165" x2="425" y2="165" stroke="#3dd6c4" stroke-width="2" marker-end="url(#arrCyan9)"/>
<text x="250" y="158" fill="#3dd6c4" font-size="10" font-weight="700" text-anchor="middle">③ Key Exchange (ECDHE)</text>
<text x="250" y="178" fill="#9290a8" font-size="8" text-anchor="middle">Public key দিয়ে shared secret তৈরি</text>
<!-- Step 4: Finished -->
<rect x="180" y="195" width="200" height="28" rx="10" fill="rgba(82,196,26,.1)" stroke="#52c41a" stroke-width="1.5"/>
<text x="280" y="213" fill="#52c41a" font-size="10" font-weight="700" text-anchor="middle">④ Finished — Handshake Complete</text>
<!-- Transition -->
<line x1="20" y1="240" x2="540" y2="240" stroke="#5e5c74" stroke-width="1" stroke-dasharray="5,5"/>
<text x="280" y="258" fill="#9290a8" font-size="10" font-weight="600" text-anchor="middle">▼ এখন symmetric encryption চালু ▼</text>
<!-- Encrypted data flow -->
<rect x="120" y="270" width="320" height="75" rx="10" fill="rgba(61,214,196,.05)" stroke="#3dd6c4" stroke-width="1.5" stroke-dasharray="4,3"/>
<line x1="80" y1="290" x2="425" y2="290" stroke="#3dd6c4" stroke-width="2.5" marker-end="url(#arrLeaf9)"/>
<text x="250" y="283" fill="#52c41a" font-size="10" font-weight="700" text-anchor="middle">🔐 Encrypted Request</text>
<line x1="480" y1="315" x2="85" y2="315" stroke="#3dd6c4" stroke-width="2.5" marker-end="url(#arrLeaf9)"/>
<text x="250" y="308" fill="#52c41a" font-size="10" font-weight="700" text-anchor="middle">🔐 Encrypted Response</text>
<text x="250" y="335" fill="#9290a8" font-size="8" text-anchor="middle">AES-256 symmetric key দিয়ে সব ডেটা</text>
<text x="280" y="358" fill="#9290a8" font-size="8" text-anchor="middle">Asymmetric (RSA/ECDHE) → handshake · Symmetric (AES) → ডেটা</text>
</svg>
<div class="diag-cap">Handshake: asymmetric দিয়ে key exchange · তারপর: symmetric দিয়ে দ্রুত এনক্রিপশন · MITM অসম্ভব</div>
</div>

<div class="code-block">— OpenSSL: সার্ভারের সার্টিফিকেট পরীক্ষা করো —
$ openssl s_client -connect google.com:443 -servername google.com

CONNECTED(00000003)
---
Certificate chain
 0 s:CN = *.google.com            ← Subject (কার সার্টিফিকেট?)
   i:CN = GTS CA 1C3              ← Issuer (কে সাইন করেছে?)
---
Server certificate
  subject=CN = *.google.com
  notBefore: Jul 14 00:00:00 2026  ← কবে থেকে চালু
  notAfter: Sep  6 23:59:59 2026   ← কবে শেষ (expire!)
---
SSL handshake has read 4127 bytes
---
Protocol  : TLSv1.3              ← কোন TLS version?
Cipher    : TLS_AES_256_GCM_SHA384  ← কোন এনক্রিপশন?

— দেখো: TLS 1.3 + AES-256 = আধুনিক, নিরাপদ —
— TLS 1.0/1.1 = পুরোনো, দুর্বল, deprecated —</div>

<div class="code-block">— সার্টিফিকেট পড়ো (মানুষের ভাষায়) —
$ openssl x509 -in cert.pem -text -noout

Certificate:
    Subject: CN=*.google.com           ← ডোমেইন
    Issuer: CN=GTS CA 1C3              ← Certificate Authority
    Validity:
      Not Before: Jul 14, 2026         ← শুরু
      Not After:  Sep 6, 2026          ← শেষ (৯০ দিন)
    Subject Alternative Names:         ← কোন ডোমেইনগুলো?
      DNS:*.google.com
      DNS:google.com
    Public Key: RSA 2048 bits          ← asymmetric key

— চেইন অফ ট্রাস্ট: —
  তুমি → Browser CA list → GTS CA → google.com
  তোমার browser-এ ১০০+ CA-এর root certificate আগে থেকেই আছে</div>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>সার্টিফিকেট শেষ হলে কী হয়?</strong> HTTPS ভেঙে পড়ে। Browser দেখায় "Your connection is not private"। কারণ সার্টিফিকেট expire হলে পরিচয় আর যাচাই করা যায় না। Let's Encrypt ৯০ দিনের সার্টিফিকেট দেয় — স্বয়ংক্রিয় রিনিউ করতে হয় (certbot)।</div></div>

<div class="callout info"><span class="co-icon">🔥</span><div><strong>Firewall:</strong> একটি দরজাদার। আসা যাওয়া প্রতিটি প্যাকেট চেক করে — এটি কি নিয়ম মানে? নিয়ম ভাঙলে বাতিল।<br>
<strong>Stateful Firewall:</strong> সংযোগের অবস্থা মনে রাখে — এই সংযোগটি আগে থেকে চলছে?<br>
<strong>WAF (Web Application Firewall):</strong> HTTP layer-এ কাজ করে — SQL injection, XSS ধরে।<br>
<strong>Next-Gen Firewall:</strong> DPI (Deep Packet Inspection) — প্যাকেটের ভেতর পর্যন্ত দেখে।</div></div>

<div class="callout info"><span class="co-icon">⚔️</span><div><strong>সাধারণ আক্রমণ:</strong><br>
<strong>DDoS (Distributed Denial of Service):</strong> হাজার হাজার মেশিন থেকে অনুরোধ — সার্ভার ডুবে যায়। Cloudflare/Akamai সামলায়।<br>
<strong>MITM (Man-in-the-Middle):</strong> মাঝপথে কেউ ডেটা ধরে — TLS এটি প্রতিরোধ করে।<br>
<strong>DNS Spoofing:</strong> ভুল IP দিয়ে ভুল সাইটে নিয়ে যাওয়া — DNSSEC সমাধান।<br>
<strong>SQL Injection:</strong> input-এ SQL কোড ঢুকিয়ে ডেটাবেস হ্যাক।</div></div>

<div class="callout info"><span class="co-icon">🔑</span><div><strong>VPN (Virtual Private Network):</strong> একটি এনক্রিপ্টেড টানেল। তোমার ডেটা এই টানেলের ভেতর দিয়ে যায় — কেউ দেখতে পারে না। ISP-ও না। কিন্তু VPN প্রোভাইডার সব দেখতে পারে। বিশ্বাস দরকার।</div></div>

<div class="verse">يَا أَيُّهَا الَّذِينَ آمَنُوا أَوْفُوا بِالْعُقُودِ</div>
<div style="font-size:.85rem;color:var(--ink-dim);text-align:center;margin-bottom:1rem">"হে মুমিনরা, তোমরা চুক্তি পূরণ করো।" — কুরআন ৫:১</div>

<p class="scene-setting">এই আয়াত চুক্তি পূরণের নির্দেশ দেয়। TLS-ও একটি চুক্তি — ক্লায়েন্ট ও সার্ভারের মধ্যে বিশ্বাসের চুক্তি। "আমি যা পাঠাচ্ছি তা শুধু তুমি দেখবে। তুমি যা পাঠাচ্ছ তা শুধু আমি দেখব।" এই চুক্তি পূরণই TLS-এর কাজ।</p>

<div class="callout tip"><span class="co-icon">🔗</span><div><strong>Book ১৩ (LLM Security):</strong> Prompt injection, jailbreak — সেগুলো Application স্তরের আক্রমণ। TLS হলো Transport স্তরের প্রতিরোধ। Book ৩৫ (ডিস্ট্রিবিউটেড সিস্টেমস): Byzantine fault tolerance — দুষ্ট নোড সামলানো।</div></div>

<div class="secret-box">🛡️ <strong>নিরাপত্তা = তিনটি দরজা।</strong> Authentication (তুমি কে), Authorization (তুমি কী পারো), Encryption (তোমার ডেটা লুকানো)। TLS সব স্তরে কাজ করে। Firewall দরজাদার। VPN টানেল। কিন্তু নিরাপত্তা কোনো শেষ নেই — প্রতিটি দিন নতুন আক্রমণ, নতুন প্রতিরোধ। এখন তুমি সব স্তর জানো। সময় এসেছে সব একত্রিত করার — একটি প্যাকেটের সম্পূর্ণ যাত্রা।</div>`,
  senior: {
    title: "Network Security এক নজরে",
    body: `<table class="kv-table"><tr><th>ধারণা</th><th>বিবরণ</th></tr>
<tr><td class="hl">TLS</td><td>Dierks-Rescorla ১৯৯৯/২০০৮ — Transport Layer Security</td></tr>
<tr><td class="hl">Asymmetric Crypto</td><td>Public/Private key pair — RSA, ECDHE</td></tr>
<tr><td class="hl">Symmetric Crypto</td><td>এক key — AES, ChaCha20 — দ্রুত</td></tr>
<tr><td class="hl">Certificate</td><td>CA দ্বারা স্বাক্ষরিত — "আমি সত্যিই google.com"</td></tr>
<tr><td class="hl">Firewall</td><td>নিয়ম ভাঙলে প্যাকেট বাতিল</td></tr>
<tr><td class="hl">DDoS</td><td>বিশাল ট্রাফিক দিয়ে সার্ভার ডুবিয়ে দেওয়া</td></tr>
<tr><td class="hl">VPN</td><td>এনক্রিপ্টেড টানেল — গোপনীয়তা</td></tr>
<tr><td class="hl">Zero Trust</td><td>"কাউকেই বিশ্বাস করো না" — প্রতিটি অনুরোধ যাচাই</td></tr></table>`
  }
});

doors.push({
  num: 10,
  icon: "🌐",
  color: "#38bdf8",
  name: "সংযোগের গুরু",
  subtitle: "The Synthesis",
  tech: "One Packet's Complete Journey — browser to server, through all 7 layers, DNS → TCP → TLS → HTTP → CDN → server → response",
  spirit: "তাওহিদ — একত্ব, সব স্তর এক সংযোগের অংশ",
  secret: "তুমি যখন google.com টাইপ করো এবং Enter চাপো — ৯টি দরজা একসাথে কাজ করে। ৫০ms-এ সব ঘটে। তুমি কিছুই দেখো না — কিন্তু বিশ্ব স্থির হয়ে যায়।",
  recall: {
    q: " তুমি google.com টাইপ করে Enter চাপলে প্রথমে কী ঘটে?",
    qen: "What happens first when you type google.com and press Enter?",
    a: "DNS lookup — ব্রাউজার cache চেক করে, না থাকলে recursive resolver → Root → TLD → Authoritative থেকে IP ঠিকানা আনে।",
    aen: "DNS lookup — browser checks cache, then recursive resolver → Root → TLD → Authoritative to get the IP address."
  },
  story: `<p class="scene-setting">তুমি ব্রাউজারে "google.com" লিখে Enter চাপলে। মাত্র ৫০ মিলিসেকেন্ড। কিন্তু এই ৫০ms-এ কী ঘটে? চলো, একটি প্যাকেটের সাথে সম্পূর্ণ যাত্রা দেখি।</p>
<p class="scene-setting en">You type "google.com" and press Enter. Only 50 milliseconds. But what happens in these 50ms? Let's follow a packet's complete journey.</p>

<div class="callout info"><span class="co-icon">🚀</span><div><strong>ধাপ ১ — DNS Lookup (দরজা ৫):</strong><br>
ব্রাউজার cache চেক করে — google.com এর IP আছে?<br>
না → OS cache → ISP resolver → Root Server → .com TLD → Authoritative<br>
ফলাফল: google.com = ১৪২.২৫০.১৯০.৪৬<br>
<strong>সময়:</strong> ~১০-২০ms (cache hit হলে <১ms)</div></div>

<div class="callout info"><span class="co-icon">🤝</span><div><strong>ধাপ ২ — TCP Handshake (দরজা ৪):</strong><br>
ব্রাউজার ১৪২.২৫০.১৯০.৪৬:৪৪৩-এ সংযোগ চায়<br>
SYN → SYN-ACK → ACK<br>
একটি TCP সংযোগ স্থাপিত<br>
<strong>সময়:</strong> ~১০ms (১ RTT)</div></div>

<div class="callout info"><span class="co-icon">🔒</span><div><strong>ধাপ ৩ — TLS Handshake (দরজা ৯):</strong><br>
Client Hello → Server Hello + Certificate<br>
Key Exchange → shared secret তৈরি<br>
এখন থেকে সব ডেটা এনক্রিপ্টেড<br>
<strong>সময়:</strong> ~১০-২০ms (১-২ RTT, TLS ১.৩ এ ১ RTT)</div></div>

<div class="callout info"><span class="co-icon">📝</span><div><strong>ধাপ ৪ — HTTP Request (দরজা ৬):</strong><br>
ব্রাউজার পাঠায়: GET / HTTP/২<br>
Host: google.com<br>
User-Agent: Mozilla/...<br>
Accept: text/html<br>
Cookies: ... (আগের login state)</div></div>

<div class="callout info"><span class="co-icon">📦</span><div><strong>ধাপ ৫ — CDN Check (দরজা ৭):</strong><br>
অনুরোধ প্রথমে CDN edge server-এ যায়<br>
Google-এর হোমপেজ cache আছে? → সরাসরি দাও<br>
না থাকলে origin server-এ যায়</div></div>

<div class="callout info"><span class="co-icon">🏠</span><div><strong>ধাপ ৬ — Server Processing:</strong><br>
Google সার্ভার অনুরোধ গ্রহণ করে<br>
Load Balancer → Web Server → Application Server<br>
প্রতিক্রিয়া তৈরি: HTML, CSS, JS, images<br>
HTTP response: ২০০ OK + body</div></div>

<div class="callout info"><span class="co-icon">🔙</span><div><strong>ধাপ ৭ — Response Journey Back:</strong><br>
এনক্রিপ্টেড response → TLS → TCP<br>
ইন্টারনেটের মধ্য দিয়ে → তোমার কম্পিউটার<br>
ব্রাউজার decrypt করে → HTML parse → পেজ রেন্ডার<br>
তুমি দেখো: Google হোমপেজ।<br>
<strong>মোট সময়:</strong> ~৫০-১০০ms। পৃথিবীর এক প্রান্ত থেকে অন্য প্রান্তে।</div></div>

<div class="stat-grid">
<div class="stat-card"><div class="sc-num">৭</div><div class="sc-label">OSI স্তর</div></div>
<div class="stat-card"><div class="sc-num">৩</div><div class="sc-label">Handshake (TCP+TLS)</div></div>
<div class="stat-card"><div class="sc-num">~৫০ms</div><div class="sc-label">মোট সময়</div></div>
<div class="stat-card"><div class="sc-num">∞</div><div class="sc-label">প্যাকেট/সেকেন্ড</div></div>
</div>

<div class="callout info"><span class="co-icon">📡</span><div><strong>একটি প্যাকেটের দৃষ্টিকোণ থেকে:</strong><br>
তুমি (প্যাকেট) তোমার কম্পিউটারের NIC থেকে বের হও → switch → router → ISP → undersea cable → Google-এর data center → load balancer → server। তারপর ফিরে আসো। এই যাত্রায় তুমি ছুঁয়ে যাও: Ethernet frame → IP packet → TCP segment → TLS record → HTTP message। সাত স্তর — এক প্যাকেট।</div></div>

<div class="diagram">
<div class="diag-title">Encapsulation — এক HTTP Request কীভাবে প্যাকেট হয়</div>
<svg viewBox="0 0 560 380" xmlns="http://www.w3.org/2000/svg">
<defs>
  <marker id="arrAmber10" markerWidth="7" markerHeight="7" refX="5" refY="3.5" orient="auto"><path d="M0,0 L0,7 L6,3.5 z" fill="#fbbf24"/></marker>
</defs>
<!-- L7: HTTP Data -->
<rect x="180" y="20" width="200" height="32" rx="5" fill="rgba(82,196,26,.15)" stroke="#52c41a" stroke-width="1.5"/>
<text x="280" y="40" fill="#52c41a" font-size="11" font-weight="700" text-anchor="middle">HTTP: GET / HTTP/2</text>
<text x="100" y="40" fill="#9290a8" font-size="9" text-anchor="middle">Layer 7</text>
<!-- L4: TCP Segment -->
<rect x="130" y="65" width="300" height="42" rx="5" fill="rgba(56,189,248,.08)" stroke="#38bdf8" stroke-width="1.5"/>
<rect x="140" y="72" width="60" height="28" rx="3" fill="rgba(56,189,248,.2)" stroke="#38bdf8" stroke-width="1"/>
<text x="170" y="90" fill="#38bdf8" font-size="8" font-weight="700" text-anchor="middle">TCP Hdr</text>
<rect x="210" y="72" width="210" height="28" rx="3" fill="rgba(82,196,26,.1)" stroke="#52c41a" stroke-width="1" stroke-dasharray="2,2"/>
<text x="315" y="90" fill="#52c41a" font-size="8" text-anchor="middle">HTTP Data (from above)</text>
<text x="90" y="90" fill="#9290a8" font-size="9" text-anchor="middle">Layer 4</text>
<!-- L3: IP Packet -->
<rect x="80" y="120" width="400" height="42" rx="5" fill="rgba(61,214,196,.08)" stroke="#3dd6c4" stroke-width="1.5"/>
<rect x="90" y="127" width="60" height="28" rx="3" fill="rgba(61,214,196,.2)" stroke="#3dd6c4" stroke-width="1"/>
<text x="120" y="145" fill="#3dd6c4" font-size="8" font-weight="700" text-anchor="middle">IP Hdr</text>
<rect x="160" y="127" width="60" height="28" rx="3" fill="rgba(56,189,248,.15)" stroke="#38bdf8" stroke-width="1" stroke-dasharray="2,2"/>
<text x="190" y="145" fill="#38bdf8" font-size="8" text-anchor="middle">TCP</text>
<rect x="230" y="127" width="240" height="28" rx="3" fill="rgba(82,196,26,.08)" stroke="#52c41a" stroke-width="1" stroke-dasharray="2,2"/>
<text x="350" y="145" fill="#52c41a" font-size="8" text-anchor="middle">HTTP Data</text>
<text x="50" y="145" fill="#9290a8" font-size="9" text-anchor="middle">Layer 3</text>
<!-- L2: Ethernet Frame -->
<rect x="30" y="175" width="500" height="42" rx="5" fill="rgba(251,191,36,.08)" stroke="#fbbf24" stroke-width="1.5"/>
<rect x="40" y="182" width="55" height="28" rx="3" fill="rgba(251,191,36,.2)" stroke="#fbbf24" stroke-width="1"/>
<text x="67" y="200" fill="#fbbf24" font-size="10" font-weight="700" text-anchor="middle">Eth Hdr</text>
<rect x="105" y="182" width="55" height="28" rx="3" fill="rgba(61,214,196,.15)" stroke="#3dd6c4" stroke-width="1" stroke-dasharray="2,2"/>
<text x="132" y="200" fill="#3dd6c4" font-size="10" text-anchor="middle">IP</text>
<rect x="170" y="182" width="55" height="28" rx="3" fill="rgba(56,189,248,.12)" stroke="#38bdf8" stroke-width="1" stroke-dasharray="2,2"/>
<text x="197" y="200" fill="#38bdf8" font-size="10" text-anchor="middle">TCP</text>
<rect x="235" y="182" width="230" height="28" rx="3" fill="rgba(82,196,26,.06)" stroke="#52c41a" stroke-width="1" stroke-dasharray="2,2"/>
<text x="350" y="200" fill="#52c41a" font-size="10" text-anchor="middle">HTTP Data</text>
<rect x="475" y="182" width="45" height="28" rx="3" fill="rgba(255,107,53,.15)" stroke="#ff6b35" stroke-width="1"/>
<text x="497" y="200" fill="#ff6b35" font-size="10" font-weight="700" text-anchor="middle">FCS</text>
<text x="280" y="240" fill="#9290a8" font-size="9" text-anchor="middle">প্রতিটি স্তর আগের স্তরকে wrap করে (encapsulate)</text>
<!-- Wire -->
<rect x="30" y="260" width="500" height="32" rx="5" fill="rgba(255,107,53,.08)" stroke="#ff6b35" stroke-width="1.5"/>
<text x="280" y="280" fill="#ff6b35" font-size="10" font-weight="700" text-anchor="middle">⚡ Physical Layer — তারের ভেতর বৈদ্যুতিক সংকেত</text>
<text x="50" y="280" fill="#9290a8" font-size="9" text-anchor="middle">L1</text>
<!-- Arrow -->
<line x1="280" y1="54" x2="280" y2="63" stroke="#fbbf24" stroke-width="1.5" marker-end="url(#arrAmber10)"/>
<line x1="280" y1="110" x2="280" y2="118" stroke="#fbbf24" stroke-width="1.5" marker-end="url(#arrAmber10)"/>
<line x1="280" y1="165" x2="280" y2="173" stroke="#fbbf24" stroke-width="1.5" marker-end="url(#arrAmber10)"/>
<!-- Legend -->
<text x="280" y="320" fill="#9290a8" font-size="9" font-weight="600" text-anchor="middle">↓ প্রতিটি স্তর নিজের header যোগ করে ↓</text>
<text x="280" y="340" fill="#52c41a" font-size="9" text-anchor="middle">Application (HTTP) → Transport (TCP) → Network (IP) → Data Link (Ethernet) → Physical (bits)</text>
<text x="280" y="360" fill="#9290a8" font-size="8" text-anchor="middle">গন্তব্যে পৌঁছে প্রতিটি স্তর তার header খোলে (decapsulation) — উল্টো দিকে</text>
</svg>
<div class="diag-cap">Encapsulation: প্রতিটি স্তর নিজের header যোগ করে · সার্ভারে উল্টোভাবে খোলে · মূল ডেটা অপরিবর্তিত</div>
</div>

<div class="code-block">— সম্পূর্ণ curl -v: সব স্তর একসাথে দেখো —
$ curl -v https://google.com

*   Trying 142.250.190.46:443...                      ← DNS (Door 5)
* Connected to google.com (142.250.190.46) port 443    ← TCP (Door 4)
* ALPN: offers h2, http/1.1                            ← HTTP/2 negotiation
* TLSv1.3 (OUT), TLS handshake, Client hello (1)       ← TLS (Door 9)
* TLSv1.3 (IN), TLS handshake, Server hello (2)
* SSL certificate verify ok.                            ← সার্টিফিকেট ঠিক
> GET / HTTP/2                                          ← HTTP (Door 6)
> Host: google.com
> User-Agent: curl/8.0
> Accept: */*
>
< HTTP/2 200                                           ← সার্ভার উত্তর
< content-type: text/html
< cf-cache-status: HIT                                 ← CDN (Door 7)
<
<!doctype html><html>...                               ← বডি (Door 1: L7)

— এই এক কমান্ডে ৭টি স্তর কাজ করেছে —
— DNS → TCP → TLS → HTTP → CDN → HTML → তোমার স্ক্রিন —</div>

<div class="code-block">— ট্রাবলশুটিং: কোথায় সমস্যা? —
$ curl -v https://example.com  2>&1 | grep -E 'Trying|Connected|TLS|HTTP'

"Trying 93.184.216.34:443..."  → DNS কাজ করছে        ✓
"Connected"                    → TCP সংযোগ সফল        ✓
"TLS handshake"                → TLS সফল               ✓
"HTTP/2 200"                   → HTTP সফল              ✓

— যদি আটকে যায়: —
  "Trying..." তে আটক    → DNS সমস্যা → nslookup চালাও
  "Connected" না         → TCP সমস্যা → ping চালাও
  "TLS handshake" fail  → সার্টিফিকেট সমস্যা → openssl চালাও
  "HTTP 4xx/5xx"        → Server সমস্যা → log দেখো</div>

<div class="verse">اللَّهُ نُورُ السَّمَاوَاتِ وَالْأَرْضِ</div>
<div style="font-size:.85rem;color:var(--ink-dim);text-align:center;margin-bottom:1rem">"আল্লাহ আসমান ও পৃথিবীর আলো।" — কুরআন ২৪:৩৫</div>

<p class="scene-setting">এই আয়াত বলে — আল্লাহ সবকিছুর আলো। নেটওয়ার্কেও একটি আলো আছে — সংযোগের আলো। একটি প্যাকেট তোমার থেকে বেরিয়ে বিশ্ব প্রদক্ষিণ করে ফিরে আসে — ৫০ms-এ। এটি সম্ভব কারণ নয়টি দরজা একসাথে কাজ করে। প্রতিটি স্তর নিজের কাজ করে, অন্যের উপর নির্ভর করে। এটাই সংযোগের স্থাপত্য — একটি সুসংগঠিত ব্যবস্থা যা প্রতিটি মুহূর্তে, প্রতিটি ব্যবহারকারীর জন্য, নিরবচ্ছিন্নভাবে কাজ করে।</p>

<div class="callout tip"><span class="co-icon">🔗</span><div><strong>সম্পূর্ণ লাইব্রেরি সংযোগ:</strong> Book ৪ (সিস্টেম ডিজাইন) — সার্ভার পাশ। Book ৩৫ (ডিস্ট্রিবিউটেড সিস্টেমস) — মাল্টি-মেশিন। Book ২ (DSA) — routing algorithm। Book ১৩ (LLM Security) — application security। Book ২২ (CS Ocean) — OS ও networks overview। Book ৩৬ (DL Architecture) — GPU cluster networking। এই বই সবার নিচে — তার ও সংকেতের ভিত্তি।</div></div>

<div class="checklist">
<li>🔍 <code>nslookup google.com</code> চালাও — DNS দেখো</li>
<li>🔍 <code>traceroute google.com</code> — প্যাকেটের পথ দেখো</li>
<li>🔍 <code>curl -v https://google.com</code> — HTTP handshake দেখো</li>
<li>📊 Chrome DevTools → Network tab — প্রতিটি request-এর timing দেখো</li>
<li>🔒 SSL Labs (ssllabs.com) — যেকোনো সাইটের TLS যাচাই করো</li>
<li>📖 RFC ৭৯১ (IP), RFC ৭৯৩ (TCP), RFC ২৬১৬ (HTTP/১.১) — মূল দলিল পড়ো</li>
</div>

<div class="secret-box">🌐 <strong>সংযোগ = নয়টি দরজার সমষ্টি।</strong> OSI-এর সাত স্তর (দরজা ১) → তার ও সংকেত (দরজা ২) → IP ঠিকানা ও রাউটিং (দরজা ৩) → TCP/UDP পরিবহন (দরজা ৪) → DNS নাম সমাধান (দরজা ৫) → HTTP ভাষা (দরজা ৬) → CDN cache (দরজা ৭) → WebSocket রিয়েল-টাইম (দরজা ৮) → TLS নিরাপত্তা (দরজা ৯)। তুমি এখন জানো প্রতিটি স্তর। যখন তুমি একটি ওয়েবসাইট খোলো, এই নয়টি দরজা একসাথে খোলে — ৫০ms-এ। এটাই ইন্টারনেট — মানুষের তৈরি সবচেয়ে জটিল, সবচেয়ে বড়, সবচেয়ে সুন্দর ব্যবস্থা। এবং তুমি এখন এর প্রতিটি স্তর বোঝো।</div>`,
  senior: {
    title: "One Packet's Complete Journey",
    body: `<table class="kv-table"><tr><th>ধাপ</th><th>কী ঘটে</th><th>স্তর</th></tr>
<tr><td class="hl">১. DNS</td><td>নাম → IP ঠিকানা</td><td>Application</td></tr>
<tr><td class="hl">২. TCP</td><td>৩-way handshake</td><td>Transport</td></tr>
<tr><td class="hl">৩. TLS</td><td>এনক্রিপশন handshake</td><td>Presentation</td></tr>
<tr><td class="hl">৪. HTTP</td><td>GET request পাঠানো</td><td>Application</td></tr>
<tr><td class="hl">৫. CDN</td><td>edge cache চেক</td><td>Application</td></tr>
<tr><td class="hl">৬. Server</td><td>request process → response</td><td>Application</td></tr>
<tr><td class="hl">৭. Back</td><td>response → TLS → TCP → browser</td><td>All</td></tr>
<tr><td class="hl">৮. Render</td><td>HTML parse → display</td><td>Browser</td></tr></table>
<p style="margin-top:1rem"><strong>মোট সময়:</strong> ৫০-১০০ms | <strong>স্তর:</strong> ৭টি OSI | <strong>প্রোটোকল:</strong> DNS, TCP, TLS, HTTP/২</p>`
  }
});
