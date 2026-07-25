// ═══════════════════════════════════════════
// DOOR 6 — The Secure Introduction (TLS 1.3)
// ═══════════════════════════════════════════
doors.push({
  num: 6,
  icon: "🤝",
  color: "#0ea5e9",
  tagline: "নিরাপদ পরিচয় — The Secure Introduction",
  name: "The Secure Introduction",
  secret: "TLS 1.3 = 1-RTT handshake। ClientHello এ key share পাঠায়। Forward secrecy mandatory। Certificate encrypted।",
  story: `<p class="scene-setting">তুমি https:// দিয়ে একটা সাইট খোলো। Browser আর server এর মধ্যে একটা গোপন আলোচনা হয় — TLS handshake। TLS 1.2 এ ২ রাউন্ড লাগতো। TLS 1.3 এ মাত্র ১ রাউন্ড! Client প্রথম message এই key share পাঠিয়ে দেয়। আর certificate encrypted — কেউ দেখতে পায় না তুমি কোন সাইটে যাচ্ছ। Forward secrecy mandatory — ভবিষ্যতে key চুরি হলেও অতীত সুরক্ষিত।</p>

<div class="svg-diagram">
<svg viewBox="0 0 580 340" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto">
  <defs><marker id="arrTLS" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="#0ea5e9"/></marker>
  <marker id="arrTLS2" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="#22c55e"/></marker></defs>
  <text x="290" y="25" text-anchor="middle" fill="#e2e8f0" font-size="13" font-weight="900">🤝 TLS 1.3 Handshake: 1-RTT Revolution</text>

  <!-- TLS 1.2 (top, slow) -->
  <rect x="20" y="45" width="540" height="70" rx="8" fill="#450a0a" stroke="#dc2626" stroke-width="1.5"/>
  <text x="290" y="65" text-anchor="middle" fill="#f87171" font-size="10" font-weight="700">TLS 1.2 — 2 Round Trips (Slow)</text>
  <text x="60" y="85" text-anchor="middle" fill="#fca5a5" font-size="8">Client→ "Hi"</text>
  <line x1="100" y1="82" x2="160" y2="82" stroke="#dc2626" stroke-width="1" marker-end="url(#arrTLS)"/>
  <text x="220" y="85" text-anchor="middle" fill="#fca5a5" font-size="8">Server→ "Hi back"</text>
  <line x1="280" y1="82" x2="340" y2="82" stroke="#dc2626" stroke-width="1" marker-end="url(#arrTLS)"/>
  <text x="400" y="85" text-anchor="middle" fill="#fca5a5" font-size="8">Client→ key</text>
  <line x1="430" y1="82" x2="470" y2="82" stroke="#dc2626" stroke-width="1" marker-end="url(#arrTLS)"/>
  <text x="510" y="85" text-anchor="middle" fill="#fca5a5" font-size="8">→ "Go!"</text>
  <text x="290" y="105" text-anchor="middle" fill="#dc2626" font-size="8">❌ Certificate in PLAIN TEXT ❌ No forward secrecy ❌</text>

  <!-- TLS 1.3 (bottom, fast) -->
  <rect x="20" y="130" width="540" height="200" rx="8" fill="#052e16" stroke="#22c55e" stroke-width="2"/>
  <text x="290" y="152" text-anchor="middle" fill="#4ade80" font-size="11" font-weight="700">TLS 1.3 — 1 Round Trip (Fast + Secure)</text>

  <!-- Step 1 -->
  <rect x="40" y="168" width="200" height="35" rx="5" fill="#0f172a" stroke="#0ea5e9" stroke-width="1.5"/>
  <text x="140" y="183" text-anchor="middle" fill="#7dd3fc" font-size="8" font-weight="700">1. ClientHello</text>
  <text x="140" y="195" text-anchor="middle" fill="#bae6fd" font-size="7">TLS version + ciphers + KEY SHARE</text>
  <line x1="240" y1="185" x2="280" y2="185" stroke="#0ea5e9" stroke-width="2" marker-end="url(#arrTLS)"/>

  <!-- Step 2 -->
  <rect x="280" y="168" width="260" height="35" rx="5" fill="#0f172a" stroke="#22c55e" stroke-width="1.5"/>
  <text x="410" y="183" text-anchor="middle" fill="#86efac" font-size="8" font-weight="700">2. ServerHello + Cert + "Done"</text>
  <text x="410" y="195" text-anchor="middle" fill="#4ade80" font-size="7">Cipher + KEY SHARE + 🔒ENCRYPTED🔒</text>
  <line x1="280" y1="185" x2="240" y2="185" stroke="#22c55e" stroke-width="2" marker-end="url(#arrTLS2)"/>

  <!-- Step 3 -->
  <rect x="120" y="213" width="340" height="28" rx="5" fill="#0f172a" stroke="#fbbf24" stroke-width="1"/>
  <text x="290" y="231" text-anchor="middle" fill="#fbbf24" font-size="8">3. Client → "Done" → ENCRYPTED DATA! 🔐</text>

  <!-- Features -->
  <text x="290" y="262" text-anchor="middle" fill="#4ade80" font-size="9" font-weight="600">✅ Forward Secrecy (ECDHE mandatory)</text>
  <text x="290" y="278" text-anchor="middle" fill="#4ade80" font-size="9" font-weight="600">✅ Certificate ENCRYPTED (privacy!)</text>
  <text x="290" y="294" text-anchor="middle" fill="#4ade80" font-size="9" font-weight="600">✅ Removed: RSA key transport, CBC, RC4, SHA-1</text>
  <text x="290" y="315" text-anchor="middle" fill="#64748b" font-size="8" font-style="italic">5 AEAD cipher suites only: AES-128-GCM, AES-256-GCM, ChaCha20-Poly1305...</text>
</svg>
</div>
<div class="svg-caption">চিত্র: TLS 1.3 = 1-RTT। ClientHello এ key share, ServerHello এ সব encrypted। Forward secrecy mandatory। Certificate encrypted — privacy!</div>

<div class="dialogue"><strong>টিএলএস ইঞ্জিনিয়ার:</strong> TLS 1.3 একটা বিপ্লব। পুরোনো TLS 1.2 এ ২ রাউন্ড লাগতো, certificate প্লেইন টেক্সটে যেতো, RSA key exchange এ forward secrecy ছিল না। TLS 1.3 সব বদলে দিয়েছে। Client প্রথম message এই key share পাঠিয়ে দেয় — speculative। Server উত্তর দেয় cipher + key + certificate + "done" — সব encrypted। ১ রাউন্ডেই শেষ! Forward secrecy mandatory — প্রতি session এ ephemeral ECDHE key। ভবিষ্যতে private key চুরি হলেও অতীত session সুরক্ষিত। CBC, RC4, SHA-1 — সব বাদ। শুধু AEAD: AES-GCM আর ChaCha20-Poly1305।</div>`,
  recall: [
    { q: "TLS 1.3 কেন TLS 1.2 এর চেয়ে দ্রুত?", a: "TLS 1.3 এ 1-RTT (1 round trip)। Client ClientHello এ key share পাঠায়। TLS 1.2 এ 2-RTT লাগতো।" },
    { q: "Forward Secrecy কেন TLS 1.3 এ mandatory?", a: "Ephemeral key (ECDHE) প্রতি session এ নতুন। ভবিষ্যতে private key চুরি হলেও অতীত session ডিক্রিপ্ট করা যায় না। RSA key transport বাদ দেওয়া হয়েছে।" },
  ]
});

// ═══════════════════════════════════════════
// DOOR 7 — The Coat Check (Session vs JWT)
// ═══════════════════════════════════════════
doors.push({
  num: 7,
  icon: "🎫",
  color: "#fbbf24",
  tagline: "কোট চেক — The Coat Check",
  name: "The Coat Check",
  secret: "Session = কোট চেক টিকিট (সার্ভার মনে রাখে)। JWT = VIP ব্যাজ (stateless, mobile-friendly)।",
  story: `<p class="scene-setting">তুমি LedgerPilot এ লগইন করো। Django session দেয় — একটা টিকিট। সার্ভার মনে রাখে কোন টিকিট কার। প্রতি request এ টিকিট দেখাও, সার্ভার চেক করে। এটা session authentication। কিন্তু Ipractus মোবাইল অ্যাপে JWT বেশি ভালো — stateless, mobile-friendly। JWT হল VIP ব্যাজ — তোমার ID আর role ব্যাজেই লেখা। সার্ভার শুধু signature verify করে। কিন্তু সাবধান — algorithm confusion attack!</p>

<div class="svg-diagram">
<svg viewBox="0 0 580 300" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto">
  <text x="290" y="25" text-anchor="middle" fill="#e2e8f0" font-size="13" font-weight="900">🎫 Session vs JWT: Coat Check vs VIP Badge</text>

  <!-- Session (left) -->
  <rect x="20" y="50" width="250" height="230" rx="10" fill="#0f172a" stroke="#0ea5e9" stroke-width="2"/>
  <text x="145" y="72" text-anchor="middle" fill="#7dd3fc" font-size="11" font-weight="700">Session (LedgerPilot)</text>
  <text x="145" y="90" text-anchor="middle" fill="#38bdf8" font-size="9">🧥 Coat Check Ticket</text>
  <rect x="40" y="105" width="210" height="22" rx="4" fill="#1e293b" stroke="#0ea5e9" stroke-width="1"/>
  <text x="145" y="120" text-anchor="middle" fill="#bae6fd" font-size="8">User gets: random session ID</text>
  <rect x="40" y="135" width="210" height="22" rx="4" fill="#1e293b" stroke="#0ea5e9" stroke-width="1"/>
  <text x="145" y="150" text-anchor="middle" fill="#bae6fd" font-size="8">Server: DB lookup every request</text>
  <text x="145" y="175" text-anchor="middle" fill="#4ade80" font-size="8">✅ Instant revoke (flush session)</text>
  <text x="145" y="192" text-anchor="middle" fill="#4ade80" font-size="8">✅ Financial app safe</text>
  <text x="145" y="209" text-anchor="middle" fill="#f87171" font-size="8">❌ DB lookup every request</text>
  <text x="145" y="226" text-anchor="middle" fill="#f87171" font-size="8">❌ Doesn't scale well</text>
  <text x="145" y="250" text-anchor="middle" fill="#7dd3fc" font-size="8" font-weight="600">Django: request.session</text>
  <text x="145" y="267" text-anchor="middle" fill="#64748b" font-size="7">Server remembers everything</text>

  <!-- JWT (right) -->
  <rect x="310" y="50" width="250" height="230" rx="10" fill="#0f172a" stroke="#f97316" stroke-width="2"/>
  <text x="435" y="72" text-anchor="middle" fill="#fb923c" font-size="11" font-weight="700">JWT (Ipractus Mobile)</text>
  <text x="435" y="90" text-anchor="middle" fill="#fdba74" font-size="9">🏅 VIP Badge</text>
  <rect x="330" y="105" width="210" height="22" rx="4" fill="#1e293b" stroke="#f97316" stroke-width="1"/>
  <text x="435" y="120" text-anchor="middle" fill="#fdba74" font-size="8">Token contains: user_id + roles</text>
  <rect x="330" y="135" width="210" height="22" rx="4" fill="#1e293b" stroke="#f97316" stroke-width="1"/>
  <text x="435" y="150" text-anchor="middle" fill="#fdba74" font-size="8">Server: signature verify only</text>
  <text x="435" y="175" text-anchor="middle" fill="#4ade80" font-size="8">✅ Stateless (no DB lookup)</text>
  <text x="435" y="192" text-anchor="middle" fill="#4ade80" font-size="8">✅ Mobile + multi-device friendly</text>
  <text x="435" y="209" text-anchor="middle" fill="#f87171" font-size="8">❌ Hard to revoke (stateless!)</text>
  <text x="435" y="226" text-anchor="middle" fill="#f87171" font-size="8">❌ Algorithm confusion attack!</text>
  <text x="435" y="250" text-anchor="middle" fill="#fb923c" font-size="8" font-weight="600">Use RS256, NOT HS256!</text>
  <text x="435" y="267" text-anchor="middle" fill="#64748b" font-size="7">Badge is self-contained</text>
</svg>
</div>
<div class="svg-caption">চিত্র: Session = coat check (server remembers, instant revoke)। JWT = VIP badge (stateless, mobile)। LedgerPilot = Session, Ipractus = JWT (RS256)।</div>

<div class="dialogue"><strong>অথেন্টিকেশন ইঞ্জিনিয়ার:</strong> Session আর JWT দুটোই ভালো — পরিস্থিতি ভেদে। LedgerPilot financial app — session সেরা। কারণ instant revoke দরকার। কেউ অন্য ডিভাইস থেকে লগইন করলে আগের session flush। Ipractus মোবাইল অ্যাপ — JWT সেরা। Mobile-friendly, offline-capable। কিন্তু সাবধান! JWT algorithm confusion attack — attacker RS256 কে HS256 এ বদলে দেয়, public key দিয়ে sign করে। সমাধান: শুধু RS256 ব্যবহার করো, short TTL (15 min access, 7 day refresh)।</div>`,
  recall: [
    { q: "LedgerPilot এর জন্য Session নাকি JWT?", a: "Session! Financial app — instant revoke দরকার। Django session = server remembers, flush করলে তাৎক্ষণিক বাতিল।" },
    { q: "JWT algorithm confusion attack কী?", a: "Attacker header এ alg: HS256 বদলে দেয়। Server public key কে HMAC secret ধরে যায়। Attacker public key দিয়ে token forge করে। সমাধান: RS256 only, বা key type যাচাই।" },
  ]
});

// ═══════════════════════════════════════════
// DOOR 8 — The Injection (OWASP Top 10)
// ═══════════════════════════════════════════
doors.push({
  num: 8,
  icon: "💉",
  color: "#ef4444",
  tagline: "ইনজেকশন — The Injection",
  name: "The Injection",
  secret: "SQL injection, XSS, CSRF — সবই injection। Untrusted input কে code হিসেবে execute করা। OWASP Top 10।",
  story: `<p class="scene-setting">OWASP Top 10 2025 — injection এখনো #5 (আগে #1 ছিল)। তিন ধরনের injection সবচেয়ে বিপজ্জনক। SQL injection — search field এ "DROP TABLE" লিখে database ধ্বংস। Blind SQL injection — "if admin password এর প্রথম অক্ষর 'a', ৫ সেকেন্ড wait"। XSS — কারো সাইটে malicious JavaScript ঢুকিয়ে দেওয়া। CSRF — user এর session চুরি করে অনুরোধ পাঠানো। Django ORM SQL injection থেকে রক্ষা করে — কিন্তু raw() ব্যবহার করলে সংবেদনশীল!</p>

<div class="svg-diagram">
<svg viewBox="0 0 580 320" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto">
  <text x="290" y="25" text-anchor="middle" fill="#e2e8f0" font-size="13" font-weight="900">💉 OWASP Top 10: Injection Attacks</text>

  <!-- SQL Injection -->
  <rect x="20" y="50" width="175" height="240" rx="8" fill="#450a0a" stroke="#dc2626" stroke-width="2"/>
  <text x="107" y="72" text-anchor="middle" fill="#f87171" font-size="10" font-weight="700">💉 SQL Injection</text>
  <text x="107" y="92" text-anchor="middle" fill="#fca5a5" font-size="8">Input = code</text>
  <rect x="35" y="105" width="145" height="22" rx="4" fill="#1e293b" stroke="#dc2626" stroke-width="1"/>
  <text x="107" y="120" text-anchor="middle" fill="#fca5a5" font-size="7" font-family="monospace">'; DROP TABLE users; --</text>
  <text x="107" y="145" text-anchor="middle" fill="#fca5a5" font-size="8">Blind: time-based</text>
  <text x="107" y="160" text-anchor="middle" fill="#f87171" font-size="7" font-family="monospace">IF pass[0]='a' WAITFOR 5s</text>
  <text x="107" y="185" text-anchor="middle" fill="#4ade80" font-size="8">✅ Django ORM safe</text>
  <text x="107" y="200" text-anchor="middle" fill="#4ade80" font-size="8">✅ Parameterized query</text>
  <text x="107" y="215" text-anchor="middle" fill="#f87171" font-size="8">❌ raw() with f-string</text>
  <text x="107" y="245" text-anchor="middle" fill="#64748b" font-size="7" font-style="italic">OWASP A05:2025</text>
  <text x="107" y="262" text-anchor="middle" fill="#64748b" font-size="7">100% apps affected</text>
  <text x="107" y="278" text-anchor="middle" fill="#64748b" font-size="7">Most CVEs overall</text>

  <!-- XSS -->
  <rect x="205" y="50" width="175" height="240" rx="8" fill="#451a03" stroke="#f97316" stroke-width="2"/>
  <text x="292" y="72" text-anchor="middle" fill="#fb923c" font-size="10" font-weight="700">📝 XSS</text>
  <text x="292" y="92" text-anchor="middle" fill="#fdba74" font-size="8">Script injection</text>
  <rect x="220" y="105" width="145" height="22" rx="4" fill="#1e293b" stroke="#f97316" stroke-width="1"/>
  <text x="292" y="120" text-anchor="middle" fill="#fdba74" font-size="7" font-family="monospace">&lt;script&gt;steal()&lt;/script&gt;</text>
  <text x="292" y="145" text-anchor="middle" fill="#fdba74" font-size="8">Browser executes</text>
  <text x="292" y="160" text-anchor="middle" fill="#fb923c" font-size="7">Cookie theft, redirect</text>
  <text x="292" y="185" text-anchor="middle" fill="#4ade80" font-size="8">✅ Vue auto-escape</text>
  <text x="292" y="200" text-anchor="middle" fill="#4ade80" font-size="8">✅ CSP nonce header</text>
  <text x="292" y="215" text-anchor="middle" fill="#f87171" font-size="8">❌ v-html (Vue)</text>
  <text x="292" y="245" text-anchor="middle" fill="#64748b" font-size="7" font-style="italic">Stored: DB → all users</text>
  <text x="292" y="262" text-anchor="middle" fill="#64748b" font-size="7">Reflected: URL param</text>
  <text x="292" y="278" text-anchor="middle" fill="#64748b" font-size="7">DOM-based: client-side</text>

  <!-- CSRF -->
  <rect x="390" y="50" width="170" height="240" rx="8" fill="#2e1065" stroke="#a855f7" stroke-width="2"/>
  <text x="475" y="72" text-anchor="middle" fill="#c084fc" font-size="10" font-weight="700">🎭 CSRF</text>
  <text x="475" y="92" text-anchor="middle" fill="#d8b4fe" font-size="8">Forged request</text>
  <rect x="405" y="105" width="140" height="22" rx="4" fill="#1e293b" stroke="#a855f7" stroke-width="1"/>
  <text x="475" y="120" text-anchor="middle" fill="#d8b4fe" font-size="7" font-family="monospace">&lt;img src="transfer?to=hacker"&gt;</text>
  <text x="475" y="145" text-anchor="middle" fill="#d8b4fe" font-size="8">Piggybacks session</text>
  <text x="475" y="160" text-anchor="middle" fill="#c084fc" font-size="7">User logged in → works!</text>
  <text x="475" y="185" text-anchor="middle" fill="#4ade80" font-size="8">✅ Django CSRF middleware</text>
  <text x="475" y="200" text-anchor="middle" fill="#4ade80" font-size="8">✅ SameSite=Strict cookie</text>
  <text x="475" y="215" text-anchor="middle" fill="#4ade80" font-size="8">✅ {% csrf_token %}</text>
  <text x="475" y="245" text-anchor="middle" fill="#64748b" font-size="7" font-style="italic">No data theft directly</text>
  <text x="475" y="262" text-anchor="middle" fill="#64748b" font-size="7">State change only</text>
  <text x="475" y="278" text-anchor="middle" fill="#64748b" font-size="7">→ funds transfer!</text>
</svg>
</div>
<div class="svg-caption">চিত্র: তিন ধরনের injection — SQLi (database destroy), XSS (cookie theft), CSRF (forged request)। Django ORM + CSRF middleware + CSP header = protection।</div>

<div class="dialogue"><strong>ওয়াপ ইঞ্জিনিয়ার:</strong> Injection হল সবচেয়ে সাধারণ attack। মূল কারণ — untrusted input কে code হিসেবে treat করা। SQL injection: search field এ SQL ঢুকিয়ে দেওয়া। Blind SQLi — কোনো output নেই, কিন্তু time-based (WAITFOR) দিয়ে এক এক করে চরিত্র বের করা। XSS — malicious JavaScript inject করা, browser execute করে। CSRF — user এর active session ব্যবহার করে forged request পাঠানো। Django তে সুরক্ষা: ORM parameterized query (SQLi), auto-escaping + CSP (XSS), CSRF middleware + token (CSRF)। কিন্তু raw() বা v-html ব্যবহার করলে সুরক্ষা ভাঙে!</div>`,
  recall: [
    { q: "Blind SQL injection এ data কিভাবে বের করা হয়?", a: "Time-based: IF condition true, WAITFOR DELAY 5s। Response slow হলে true। এক এক করে চরিত্র brute force। Boolean-based: page behavior থেকে true/false অনুমান।" },
    { q: "Django কিভাবে CSRF থেকে রক্ষা করে?", a: "CsrfViewMiddleware স্বয়ংক্রিয়ভাবে প্রতি form এ {% csrf_token %} যোগ করে। POST request এ টোকেন verify করে। SameSite=Strict cookie আর ক্রস-সাইট request ব্লক করে।" },
  ]
});

// ═══════════════════════════════════════════
// DOOR 9 — The Bouncers (CORS, CSP, Rate Limiting)
// ═══════════════════════════════════════════
doors.push({
  num: 9,
  icon: "🛡️",
  color: "#22c55e",
  tagline: "দরজার পাহারাদার — The Bouncers",
  name: "The Bouncers",
  secret: "CORS = এপিআই সীমান্ত পাহারাদার। CSP = স্ক্রিপ্ট পাহারাদার। Rate limit = আবেগ নিয়ন্ত্রণ।",
  story: `<p class="scene-setting">তোমার LedgerPilot এ তিন ধরনের পাহারাদার দরকার। CORS — এপিআই সীমান্তে দাঁড়িয়ে দেখে কোন domain থেকে request আসছে। অনুমোদিত না হলে ব্লক। CSP — পেজে কোন script চলবে তা নিয়ন্ত্রণ করে। nonce বা hash ছাড়া কোন script চলবে না। Rate limiting — কেউ খুব দ্রুত request পাঠালে ব্লক। Token bucket — ১০টা টোকেন, প্রতি request এ একটা খরচ, সময়ে সময়ে রিফিল।</p>

<div class="dialogue"><strong>সিকিউরিটি ইঞ্জিনিয়ার:</strong> CORS হল browser এর same-origin policy relaxation। Default এ browser cross-origin request ব্লক করে। CORS header দিয়ে specific domain allow করো। Preflight request — browser আগে OPTIONS পাঠায়, সার্ভর কোন method/header allow করে তা বলে। CSP হল XSS এর প্রতিষেধক। Content-Security-Policy header দিয়ে শুধু অনুমোদিত script চলবে। nonce — প্রতি পেজে এলোমেলো স্ট্রিং, script এ একই nonce থাকতে হবে। Rate limiting — Redis token bucket। প্রতি IP এর জন্য ১০ টোকেন, প্রতি request এ ১ টোকেন কমে, প্রতি সেকেন্ডে ১ টোকেন যোগ। টোকেন শূন্য হলে ৪২৯ Too Many Requests।</div>`,
  recall: [
    { q: "CORS preflight request কখন হয়?", a: "যখন request 'complex' — POST ছাড়া অন্য method, বা custom header। Browser প্রথমে OPTIONS পাঠায়, সার্ভর allow করে কিনা দেখে। তারপর actual request।" },
    { q: "Token bucket rate limiting কিভাবে কাজ করে?", a: "প্রতি user/IP এর জন্য bucket এ N টোকেন। প্রতি request এ ১ টোকেন খরচ। সময়ে সময়ে টোকেন রিফিল। বালতি খালি হলে request ব্লক (৪২৯)।" },
  ]
});

// ═══════════════════════════════════════════
// DOOR 10 — The Zero Trust (Full-Stack Security)
// ═══════════════════════════════════════════
doors.push({
  num: 10,
  icon: "🏰",
  color: "#e8c547",
  tagline: "শূন্য আস্থা — Zero Trust",
  name: "The Zero Trust",
  secret: "Zero trust = 'never trust, always verify'। mTLS, container hardening, least privilege। কোনো implicit trust নেই।",
  story: `<p class="scene-setting">পুরোনো security = "castle and moat" — ভেতরে সব নিরাপদ, বাইরে শত্রু। কিন্তু একবার ভেতরে ঢুকলে সব access! Zero trust বলে — কাউকেই trust করো না, ভেতরে হোক বা বাইরে। প্রতিটা request verify করো। mTLS — প্রতিটা microservice তার certificate দেখায়। Container hardening — read-only filesystem, non-root user, cap_drop ALL। Least privilege — শুধু যতটুকু access দরকার ততটুকু।</p>

<div class="svg-diagram">
<svg viewBox="0 0 580 320" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto">
  <text x="290" y="25" text-anchor="middle" fill="#e2e8f0" font-size="13" font-weight="900">🏰 Zero Trust: Never Trust, Always Verify</text>

  <!-- Old model (top) -->
  <rect x="20" y="50" width="540" height="70" rx="8" fill="#450a0a" stroke="#dc2626" stroke-width="1.5"/>
  <text x="290" y="72" text-anchor="middle" fill="#f87171" font-size="10" font-weight="700">❌ Old: Castle & Moat (Trust Inside)</text>
  <rect x="50" y="85" width="120" height="25" rx="4" fill="#1e293b" stroke="#dc2626" stroke-width="1"/>
  <text x="110" y="102" text-anchor="middle" fill="#fca5a5" font-size="7">🔥 Firewall (perimeter)</text>
  <rect x="190" y="85" width="120" height="25" rx="4" fill="#052e16" stroke="#22c55e" stroke-width="1"/>
  <text x="250" y="102" text-anchor="middle" fill="#86efac" font-size="7">✅ Inside = trusted</text>
  <rect x="330" y="85" width="120" height="25" rx="4" fill="#dc2626" stroke="#f87171" stroke-width="1"/>
  <text x="390" y="102" text-anchor="middle" fill="#fee2e2" font-size="7">💀 Breach = total access</text>
  <rect x="470" y="85" width="80" height="25" rx="4" fill="#7c2d12" stroke="#fb923c" stroke-width="1"/>
  <text x="510" y="102" text-anchor="middle" fill="#fdba74" font-size="7">Lateral movement</text>

  <!-- Zero Trust (bottom) -->
  <rect x="20" y="135" width="540" height="170" rx="8" fill="#052e16" stroke="#22c55e" stroke-width="2"/>
  <text x="290" y="157" text-anchor="middle" fill="#4ade80" font-size="11" font-weight="700">✅ Zero Trust: Verify Everything</text>

  <rect x="40" y="172" width="240" height="35" rx="5" fill="#0f172a" stroke="#22c55e" stroke-width="1"/>
  <text x="160" y="187" text-anchor="middle" fill="#86efac" font-size="8">🔑 mTLS: Both sides show certificate</text>
  <text x="160" y="199" text-anchor="middle" fill="#4ade80" font-size="7">Microservice ↔ Microservice verified</text>

  <rect x="300" y="172" width="240" height="35" rx="5" fill="#0f172a" stroke="#22c55e" stroke-width="1"/>
  <text x="420" y="187" text-anchor="middle" fill="#86efac" font-size="8">🛡️ Container hardening</text>
  <text x="420" y="199" text-anchor="middle" fill="#4ade80" font-size="7">read_only + cap_drop ALL + non-root</text>

  <rect x="40" y="217" width="240" height="35" rx="5" fill="#0f172a" stroke="#22c55e" stroke-width="1"/>
  <text x="160" y="232" text-anchor="middle" fill="#86efac" font-size="8">🔐 Least privilege</text>
  <text x="160" y="244" text-anchor="middle" fill="#4ade80" font-size="7">Only access what you NEED</text>

  <rect x="300" y="217" width="240" height="35" rx="5" fill="#0f172a" stroke="#22c55e" stroke-width="1"/>
  <text x="420" y="232" text-anchor="middle" fill="#86efac" font-size="8">📊 Every request logged</text>
  <text x="420" y="244" text-anchor="middle" fill="#4ade80" font-size="7">Audit trail: who, what, when</text>

  <text x="290" y="275" text-anchor="middle" fill="#fbbf24" font-size="9" font-weight="600">💡 K8s network policies + Istio mTLS = Zero Trust in practice</text>
  <text x="290" y="292" text-anchor="middle" fill="#64748b" font-size="8" font-style="italic">"Trust nothing, verify everything" — even internal traffic</text>
</svg>
</div>
<div class="svg-caption">চিত্র: Castle & Moat (বাইরে শত্রু, ভেতরে বন্ধু) → Zero Trust (সব verify)। mTLS, container hardening, least privilege, logging। K8s + Istio এ implementation।</div>

<div class="dialogue"><strong>সাইবার সিকিউরিটি আর্কিটেক্ট:</strong> Zero trust এর মূল নীতি — "never trust, always verify"। পুরোনো security model এ ভেতরের network কে trust করা হতো। কিন্তু একবার attacker ভেতরে ঢুকলে সব access — lateral movement। Zero trust বলে — প্রতিটা request verify করো, ভেতরে হোক বা বাইরে। mTLS — প্রতিটা microservice তার certificate দেখায়, দুই পক্ষই verify করে। Kubernetes এ Istio service mesh এটা স্বয়ংক্রিয় করে। Container hardening — read-only filesystem (attacker কিছু লিখতে পারে না), cap_drop ALL (সব Linux capability বাদ), non-root user। Least privilege — প্রতিটা service শুধু যতটুকু access দরকার ততটুকু। প্রতিটা request log — audit trail। LedgerPilot এর জন্য: Docker Compose এ read_only + cap_drop, Nginx rate limit, Django CSRF + CSP, MySQL TLS connection, Argo2id password hashing। এটাই full-stack security — প্রতিটা layer এ সুরক্ষা।</div>`,
  recall: [
    { q: "Zero trust এর মূল নীতি কী?", a: "\"Never trust, always verify\"। ভেতরের network কেও trust করো না। প্রতিটা request verify করো। mTLS, least privilege, logging — সব মিলিয়ে zero trust।" },
    { q: "mTLS কী এবং কেন দরকার?", a: "Mutual TLS — client আর server দুজনেই certificate দেখায়। Microservice এ যোগাযোগ নিরাপত্তার জন্য। K8s service mesh (Istio) এটা স্বয়ংক্রিয় করে।" },
  ]
});
