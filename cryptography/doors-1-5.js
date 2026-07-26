const doors = [];

// ═══════════════════════════════════════════
// DOOR 1 — The Twin Locks (Symmetric vs Asymmetric)
// ═══════════════════════════════════════════
doors.push({
  num: 1,
  icon: "🔐",
  color: "#0ea5e9",
  tagline: "দুই তালা — Two Locks",
  name: "The Twin Locks",
  secret: "AES = এক তালার চাবি (দ্রুত)। RSA = দুই চাবি (ধীর)। TLS দুটো একসাথে ব্যবহার করে।",
  story: `<p class="scene-setting">তোমার একটা গচ্ছিত রশিদ পাঠাতে হবে। কিন্তু রাস্তায় চোর। তুমি একটা বাক্সে ভরে তালা দিলে। কিন্তু সমস্যা — চাবি কীভাবে পাঠাবে? চাবি পাঠালেই চোর নেবে। এটাই symmetric encryption এর সমস্যা — AES দ্রুত কিন্তু চাবি share করা কঠিন। সমাধান? Asymmetric — দুই চাবি! একটা পাবলিক (যে কেউ তালা লাগাতে পারে), একটা প্রাইভেট (শুধু তুমি খুলতে পারো)।</p>

<div class="svg-diagram">
<svg viewBox="0 0 580 340" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto">
  <defs><marker id="arrT1" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="#0ea5e9"/></marker></defs>
  <text x="290" y="25" text-anchor="middle" fill="#e2e8f0" font-size="13" font-weight="900">🔐 Hybrid Encryption: AES + RSA = TLS</text>

  <!-- Symmetric (left) -->
  <rect x="20" y="50" width="250" height="130" rx="10" fill="#0f172a" stroke="#22c55e" stroke-width="2"/>
  <text x="145" y="72" text-anchor="middle" fill="#4ade80" font-size="11" font-weight="700">Symmetric (AES)</text>
  <text x="145" y="92" text-anchor="middle" fill="#86efac" font-size="9">এক চাবি দিয়ে তালা আর খোলা</text>
  <rect x="60" y="105" width="60" height="25" rx="4" fill="#1e293b" stroke="#4ade80" stroke-width="1.5"/>
  <text x="90" y="121" text-anchor="middle" fill="#4ade80" font-size="9">🔑 Key</text>
  <text x="145" y="121" text-anchor="middle" fill="#4ade80" font-size="11">⇌</text>
  <rect x="170" y="105" width="60" height="25" rx="4" fill="#1e293b" stroke="#4ade80" stroke-width="1.5"/>
  <text x="200" y="121" text-anchor="middle" fill="#4ade80" font-size="9">🔒 Lock</text>
  <text x="145" y="145" text-anchor="middle" fill="#86efac" font-size="8">⚡ Nanoseconds — VERY FAST</text>
  <text x="145" y="162" text-anchor="middle" fill="#f87171" font-size="8">❌ Key কীভাবে share করবে?</text>

  <!-- Asymmetric (right) -->
  <rect x="310" y="50" width="250" height="130" rx="10" fill="#0f172a" stroke="#f97316" stroke-width="2"/>
  <text x="435" y="72" text-anchor="middle" fill="#fb923c" font-size="11" font-weight="700">Asymmetric (RSA/ECC)</text>
  <text x="435" y="92" text-anchor="middle" fill="#fdba74" font-size="9">পাবলিক চাবি তালা লাগায়, প্রাইভেট খোলে</text>
  <rect x="335" y="105" width="80" height="25" rx="4" fill="#1e293b" stroke="#fb923c" stroke-width="1.5"/>
  <text x="375" y="121" text-anchor="middle" fill="#fb923c" font-size="8">🔓 Public</text>
  <text x="435" y="121" text-anchor="middle" fill="#fb923c" font-size="11">→</text>
  <rect x="455" y="105" width="80" height="25" rx="4" fill="#1e293b" stroke="#fb923c" stroke-width="1.5"/>
  <text x="495" y="121" text-anchor="middle" fill="#fb923c" font-size="8">🔑 Private</text>
  <text x="435" y="145" text-anchor="middle" fill="#fdba74" font-size="8">🐢 Microseconds — SLOW</text>
  <text x="435" y="162" text-anchor="middle" fill="#4ade80" font-size="8">✅ Key share করার দরকার নেই!</text>

  <!-- Hybrid solution -->
  <rect x="80" y="200" width="420" height="120" rx="10" fill="#0c4a6e" stroke="#0ea5e9" stroke-width="2"/>
  <text x="290" y="222" text-anchor="middle" fill="#7dd3fc" font-size="11" font-weight="700">Hybrid = TLS</text>
  <text x="290" y="242" text-anchor="middle" fill="#bae6fd" font-size="9">RSA দিয়ে AES key exchange → তারপর AES দিয়ে সব data encrypt</text>
  <rect x="100" y="255" width="120" height="22" rx="4" fill="#1e293b" stroke="#fb923c" stroke-width="1"/>
  <text x="160" y="270" text-anchor="middle" fill="#fb923c" font-size="8">1. RSA exchange key</text>
  <line x1="220" y1="266" x2="250" y2="266" stroke="#0ea5e9" stroke-width="2" marker-end="url(#arrT1)"/>
  <rect x="255" y="255" width="120" height="22" rx="4" fill="#052e16" stroke="#4ade80" stroke-width="1"/>
  <text x="315" y="270" text-anchor="middle" fill="#4ade80" font-size="8">2. AES encrypt data</text>
  <line x1="375" y1="266" x2="405" y2="266" stroke="#0ea5e9" stroke-width="2" marker-end="url(#arrT1)"/>
  <rect x="410" y="255" width="80" height="22" rx="4" fill="#052e16" stroke="#4ade80" stroke-width="1"/>
  <text x="450" y="270" text-anchor="middle" fill="#4ade80" font-size="8">3. ⚡ Fast!</text>
  <text x="290" y="300" text-anchor="middle" fill="#7dd3fc" font-size="8" font-style="italic">Best of both worlds: RSA's security + AES's speed</text>
</svg>
</div>
<div class="svg-caption">চিত্র: Hybrid encryption। RSA ধীর কিন্তু key share করতে পারে। AES দ্রুত কিন্তু key share করতে পারে না। TLS দুটো একসাথে ব্যবহার করে।</div>

<div class="code-block">
<pre><code># AES (symmetric) — এক চাবিতে lock + unlock, দ্রুত ⚡
$ echo "LedgerPilot-secret" | openssl enc -aes-256-cbc -pbkdf2 -pass pass:mykey -base64
U2FsdGVkX19+q8m4j3bN2wY5T9pVxR1cHsK6fL0aB3E=

$ echo "U2FsdGVkX19+q8m4j3bN2wY5T9pVxR1cHsK6fL0aB3E=" | \
    openssl enc -aes-256-cbc -d -pbkdf2 -pass pass:mykey -base64
LedgerPilot-secret

# RSA (asymmetric) — দুই চাবি, ধীর কিন্তু নিরাপদ key exchange 🔑
$ openssl genrsa -out private.pem 2048   # প্রাইভেট চাবি
$ openssl rsa -in private.pem -pubout -out public.pem   # পাবলিক চাবি
writing RSA key

$ openssl dgst -sha256 -sign private.pem -out msg.sig &lt;(echo "invoice #42")
$ openssl dgst -sha256 -verify public.pem -signature msg.sig &lt;(echo "invoice #42")
Verified OK   # ✅ public key দিয়ে verify, private key দিয়ে sign

# Speed তুলনা: AES কত দ্রুত?
$ openssl speed -evp aes-256-cbc 2&gt;&amp;1 | tail -3
type             16 bytes     64 bytes    256 bytes   1024 bytes
aes-256-cbc     712345.67k   890123.45k  956789.12k  978234.56k   # মেগাবাইট/সেকেন্ড!

# TLS = hybrid (RSA দিয়ে AES key exchange, তারপর AES দিয়ে data)
# বাস্তবে দেখো: https:// সাইটে AES আর RSA দুটোই ব্যবহার হয়
</code></pre>
<span class="code-caption">🔒 AES দ্রুত (symmetric), RSA নিরাপদ key exchange (asymmetric)। TLS দুটো মেলায়।</span>
</div>

<div class="dialogue"><strong>ক্রিপ্টোগ্রাফার:</strong> AES এবং RSA দুটোই দরকার। AES একটা চাবি দিয়ে lock আর unlock করে — দ্রুত nanosecond এ। কিন্তু সমস্যা হল চাবি কীভাবে পাঠাবে? RSA এই সমস্যা সমাধান করে — দুটো চাবি। Public key দিয়ে যে কেউ lock করতে পারে, কিন্তু শুধু private key দিয়ে unlock হয়। ধীর কিন্তু নিরাপদ key exchange। TLS বলে — প্রথমে RSA দিয়ে AES key exchange করো, তারপর AES দিয়ে সব data encrypt করো। দুটোরই সেরা দিক! ECC (Elliptic Curve) হল RSA এর ছোট ভাই — 256-bit ECC = 3072-bit RSA।</div>`,
  recall: [
    { q: "কেন TLS শুধু AES বা শুধু RSA ব্যবহার করে না?", a: "AES দ্রুত কিন্তু key share করা কঠিন। RSA key share করতে পারে কিন্তু ধীর। Hybrid = RSA দিয়ে key exchange, AES দিয়ে data encrypt।" },
    { q: "256-bit ECC key = কোন RSA key?", a: "3072-bit RSA। ECC তে Elliptic Curve Discrete Logarithm Problem ধীরে সমাধান করা যায়, তাই ছোট key এ same security।" },
  ]
});

// ═══════════════════════════════════════════
// DOOR 2 — Paint in Public (Diffie-Hellman)
// ═══════════════════════════════════════════
doors.push({
  num: 2,
  icon: "🎨",
  color: "#f97316",
  tagline: "পাবলিকে রং মেশানো — Paint in Public",
  name: "Paint in Public",
  secret: "Diffie-Hellman: দুজন পাবলিক চ্যানেলে গোপন key বানায়। সবাই শুনছে কিন্তু কেউ পাবে না।",
  story: `<p class="scene-setting">তুমি আর তোমার বন্ধু একটা গোপন রঙ বানাতে চাও। কিন্তু সবাই শুনছে। কীভাবে? প্রথমে দুজন একটা পাবলিক রঙে রাজি হও — হলুদ। তারপর প্রত্যেকে নিজের গোপন রঙ বেছে নাও। হলুদের সাথে মেশাও, পাবলিকে বিনিময় করো। তারপর নিজের গোপন রঙ আবার মেশাও — দুজনের ফলাফল একই! চোর শুধু মধ্যবর্তী রঙ দেখে, আনমিক্স করতে পারে না।</p>

<div class="svg-diagram">
<svg viewBox="0 0 580 320" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto">
  <text x="290" y="25" text-anchor="middle" fill="#e2e8f0" font-size="13" font-weight="900">🎨 Diffie-Hellman: Shared Secret in Public</text>

  <!-- Step 1: Public agreement -->
  <circle cx="290" cy="60" r="18" fill="#fbbf24" stroke="#fcd34d" stroke-width="2"/>
  <text x="290" y="64" text-anchor="middle" fill="#451a03" font-size="8" font-weight="700">Public</text>
  <text x="290" y="92" text-anchor="middle" fill="#fcd34d" font-size="9">Both agree: 🟡 Yellow (public)</text>

  <!-- Alice side -->
  <text x="120" y="120" text-anchor="middle" fill="#f87171" font-size="10" font-weight="700">Alice</text>
  <circle cx="120" cy="140" r="15" fill="#dc2626" stroke="#f87171" stroke-width="2"/>
  <text x="120" y="144" text-anchor="middle" fill="#fee2e2" font-size="7">Secret</text>
  <text x="120" y="170" text-anchor="middle" fill="#fca5a5" font-size="8">🔴 Red (private)</text>

  <text x="120" y="195" text-anchor="middle" fill="#e2e8f0" font-size="9">🟡 + 🔴 = 🟠 Orange-tan</text>
  <rect x="80" y="205" width="80" height="25" rx="4" fill="#7c2d12" stroke="#fb923c" stroke-width="1.5"/>
  <text x="120" y="221" text-anchor="middle" fill="#fdba74" font-size="8">→ Send publicly</text>

  <!-- Bob side -->
  <text x="460" y="120" text-anchor="middle" fill="#60a5fa" font-size="10" font-weight="700">Bob</text>
  <circle cx="460" cy="140" r="15" fill="#2563eb" stroke="#60a5fa" stroke-width="2"/>
  <text x="460" y="144" text-anchor="middle" fill="#dbeafe" font-size="7">Secret</text>
  <text x="460" y="170" text-anchor="middle" fill="#93c5fd" font-size="8">🔵 Cyan (private)</text>

  <text x="460" y="195" text-anchor="middle" fill="#e2e8f0" font-size="9">🟡 + 🔵 = 🩵 Light-blue</text>
  <rect x="420" y="205" width="80" height="25" rx="4" fill="#1e3a8a" stroke="#60a5fa" stroke-width="1.5"/>
  <text x="460" y="221" text-anchor="middle" fill="#93c5fd" font-size="8">← Send publicly</text>

  <!-- Exchange arrows -->
  <line x1="160" y1="217" x2="420" y2="217" stroke="#475569" stroke-width="1.5" stroke-dasharray="4,3"/>
  <text x="290" y="235" text-anchor="middle" fill="#64748b" font-size="8" font-style="italic">Eavesdropper sees: Yellow, Orange-tan, Light-blue</text>

  <!-- Final result -->
  <rect x="80" y="255" width="200" height="50" rx="8" fill="#052e16" stroke="#22c55e" stroke-width="2"/>
  <text x="180" y="275" text-anchor="middle" fill="#4ade80" font-size="9">Alice: 🩵 + 🔴 = 🟤</text>
  <text x="180" y="292" text-anchor="middle" fill="#86efac" font-size="8">Shared secret!</text>

  <rect x="300" y="255" width="200" height="50" rx="8" fill="#052e16" stroke="#22c55e" stroke-width="2"/>
  <text x="400" y="275" text-anchor="middle" fill="#4ade80" font-size="9">Bob: 🟠 + 🔵 = 🟤</text>
  <text x="400" y="292" text-anchor="middle" fill="#86efac" font-size="8">SAME! ✅</text>
</svg>
</div>
<div class="svg-caption">চিত্র: Diffie-Hellman paint analogy। পাবলিক রঙ + গোপন রঙ মেশাও, বিনিময় করো, আবার মেশাও — দুজনের ফলাফল একই। চোর আনমিক্স করতে পারে না।</div>

<div class="code-block">
<pre><code># Diffie-Hellman key exchange বাস্তবে — openssl দিয়ে DH parameters
$ openssl dhparam -out dhparams.pem 2048
Generating DH parameters, 2048 bit long safe prime
......+++
DH parameters appear to be ok.

# প্রতিটা পক্ষ নিজের DH keypair তৈরি করে (Alice আর Bob আলাদা)
$ openssl genpkey -paramfile dhparams.pem -out alice_priv.pem
$ openssl genpkey -paramfile dhparams.pem -out bob_priv.pem

# পাবলিক key বের করো (এটাই পাবলিকে বিনিময় হয় — g^a mod p)
$ openssl pkey -in alice_priv.pem -pubout -out alice_pub.pem
$ openssl pkey -in bob_priv.pem -pubout -out bob_pub.pem

# এখন Alice তার private + Bob এর public মেশাও → shared secret!
# (Bob তার private + Alice এর public দিয়ে একই পাবে — গণিতের জাদু)
# OpenSSL এ এটা সরাসরি derive করা যায়:
$ openssl pkeyutl -derive -inkey alice_priv.pem -peerkey bob_pub.pem | xxd | head -2
00000000: 8a3f 2c71 b9d4 6e08 5a21 7fc4 9b6e d02a  .?,q..n.Z!...n.*
00000010: 1f88 ab53 3c09 e721 6d5a 440b 8c33 f1e2  ...S&lt;..!mZD..3..

# চোর শুধু alice_pub আর bob_pub দেখে — a বা b বের করতে পারে না
# এটাই Discrete Logarithm Problem। TLS 1.3 এ ECDHE (Elliptic Curve DH) mandatory।
$ openssl ecparam -list_curves | grep -E "prime256v1|X25519"
  prime256v1: X9.62/SECG curve over a 256 bit prime field
  X25519     : Curve25519 (RFC 7748)   # ← সবচেয়ে জনপ্রিয় ECDHE curve
</code></pre>
<span class="code-caption">🎨 DH: পাবলিকে গোপন key তৈরি। চোর দেখে কিন্তু আনমিক্স করতে পারে না। TLS 1.3 এ ECDHE mandatory।</span>
</div>

<div class="dialogue"><strong>হোয়াইটফিল্ড ডিফি:</strong> ১৯৭৬ সালে আমি আর মার্টিন হেলম্যান একটা বিপ্লব দেখিয়েছিলাম — দুজন মানুষ পাবলিক চ্যানেলে গোপন key বানাতে পারে। সবাই শুনছে, কেউ পাবে না। গণিতে এটা modular exponentiation। <code>g^a mod p</code> আর <code>g^b mod p</code> পাবলিকে বিনিময়। কিন্তু <code>(g^a)^b = g^(ab) = (g^b)^a</code> — দুজন একই key পায়! চোর <code>g^a</code> আর <code>g^b</code> দেখে কিন্তু <code>a</code> বা <code>b</code> বের করতে পারে না — এটাই Discrete Logarithm Problem। TLS 1.3 এ ephemeral DH (ECDHE) mandatory — প্রতি session এ নতুন key। Forward secrecy!</div>`,
  recall: [
    { q: "Diffie-Hellman এ চোর কেন key পায় না?", a: "কারণ Discrete Logarithm Problem সমাধান করা কঠিন। চোর g^a আর g^b দেখে কিন্তু a বা b বের করতে পারে না। তাই g^(ab) বের করতে পারে না।" },
    { q: "Forward Secrecy কী?", a: "প্রতি session এ নতুন ephemeral key। ভবিষ্যতে private key চুরি হলেও অতীতের session গুলো ডিক্রিপ্ট করা যায় না। TLS 1.3 এ mandatory।" },
  ]
});

// ═══════════════════════════════════════════
// DOOR 3 — The Blender (Hash Functions)
// ═══════════════════════════════════════════
doors.push({
  num: 3,
  icon: "🌀",
  color: "#a855f7",
  tagline: "ব্লেন্ডার — The Blender",
  name: "The Blender",
  secret: "Hash = একমুখী ব্লেন্ডার। ভেতরে দাও, ফিঙ্গারপ্রিন্ট পাও। উল্টে পাওয়া যায় না।",
  story: `<p class="scene-setting">তুমি একটা CSV ফাইল SHA-256 ব্লেন্ডারে দাও। সে একটা ২৫৬-বিট fingerprint দেয়। একটা কমা বদলালে পুরো fingerprint বদলে যায় — avalanche effect। কিন্তু এটা একমুখী — fingerprint থেকে CSV ফেরত পাওয়া অসম্ভব। কিন্তু মনে রেখো — দ্রুত হওয়াই এটাকে password এর জন্য খারাপ করে তোলে! GPU বিলিয়ন বিলিয়ন hash করতে পারে।</p>

<div class="svg-diagram">
<svg viewBox="0 0 580 280" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto">
  <text x="290" y="25" text-anchor="middle" fill="#e2e8f0" font-size="13" font-weight="900">🌀 SHA-256: One-Way Hash Function</text>

  <!-- Input -->
  <rect x="20" y="50" width="180" height="60" rx="8" fill="#0f172a" stroke="#a855f7" stroke-width="1.5"/>
  <text x="110" y="72" text-anchor="middle" fill="#d8b4fe" font-size="10" font-weight="700">Input (any size)</text>
  <text x="110" y="90" text-anchor="middle" fill="#c084fc" font-size="8" font-family="monospace">"LedgerPilot 2026"</text>
  <text x="110" y="102" text-anchor="middle" fill="#9333ea" font-size="7">Any length → 256 bits</text>

  <!-- Blender -->
  <line x1="200" y1="80" x2="230" y2="80" stroke="#a855f7" stroke-width="2"/>
  <text x="215" y="73" text-anchor="middle" fill="#c084fc" font-size="7">SHA-256</text>
  <rect x="230" y="50" width="120" height="60" rx="8" fill="#2e1065" stroke="#a855f7" stroke-width="2"/>
  <text x="290" y="78" text-anchor="middle" fill="#d8b4fe" font-size="20">🌀</text>
  <text x="290" y="98" text-anchor="middle" fill="#c084fc" font-size="7">64 rounds of mixing</text>

  <!-- Output -->
  <line x1="350" y1="80" x2="380" y2="80" stroke="#a855f7" stroke-width="2"/>
  <rect x="380" y="50" width="180" height="60" rx="8" fill="#0f172a" stroke="#22c55e" stroke-width="1.5"/>
  <text x="470" y="72" text-anchor="middle" fill="#86efac" font-size="10" font-weight="700">Hash (256-bit)</text>
  <text x="470" y="88" text-anchor="middle" fill="#4ade80" font-size="7" font-family="monospace">a3f5b8c1...e9d2</text>
  <text x="470" y="102" text-anchor="middle" fill="#16a34a" font-size="7">Fixed size, always 256 bits</text>

  <!-- Properties -->
  <rect x="20" y="130" width="540" height="130" rx="8" fill="#0f172a" stroke="#334155" stroke-width="1"/>
  <text x="290" y="152" text-anchor="middle" fill="#e2e8f0" font-size="10" font-weight="700">Properties</text>

  <rect x="35" y="165" width="160" height="35" rx="5" fill="#052e16" stroke="#4ade80" stroke-width="1"/>
  <text x="115" y="180" text-anchor="middle" fill="#4ade80" font-size="8">✅ Deterministic</text>
  <text x="115" y="192" text-anchor="middle" fill="#86efac" font-size="7">Same input → same hash</text>

  <rect x="205" y="165" width="160" height="35" rx="5" fill="#7c2d12" stroke="#fb923c" stroke-width="1"/>
  <text x="285" y="180" text-anchor="middle" fill="#fb923c" font-size="8">🚫 One-Way</text>
  <text x="285" y="192" text-anchor="middle" fill="#fdba74" font-size="7">Cannot reverse hash → input</text>

  <rect x="375" y="165" width="160" height="35" rx="5" fill="#2e1065" stroke="#a855f7" stroke-width="1"/>
  <text x="455" y="180" text-anchor="middle" fill="#c084fc" font-size="8">⚡ Avalanche</text>
  <text x="455" y="192" text-anchor="middle" fill="#d8b4fe" font-size="7">1 bit change → 50% bits flip</text>

  <text x="290" y="225" text-anchor="middle" fill="#f87171" font-size="9" font-weight="600">⚠️ SHA-256 is FAST → bad for passwords! Use bcrypt/Argon2 instead.</text>
  <text x="290" y="243" text-anchor="middle" fill="#64748b" font-size="8" font-style="italic">GPU: billions of hashes/sec. Good for integrity, bad for secrets.</text>
</svg>
</div>
<div class="svg-caption">চিত্র: SHA-256 = একমুখী ব্লেন্ডার। Deterministic, one-way, avalanche effect। কিন্তু দ্রুত — password এর জন্য খারাপ।</div>

<div class="code-block">
<pre><code># SHA-256: যেকোনো ইনপুট → ৬৪ হেক্স অক্ষর (২৫৬-বিট)
$ echo -n "LedgerPilot 2026" | shasum -a 256
a3f5b8c1d72e9f04b1a8c5d3e6f7021948b5c7d3e9f01a2b4c5d6e7f8091a2b3  -

# একটা অক্ষর বদলাও → পুরো hash বদলে যায় (avalanche effect! ⚡)
$ echo -n "LedgerPilot 2027" | shasum -a 256    # 2026 → 2027
f7e2a94c1b8d305e6f2a8c4d9b1e7f305a284c6d0e1b3f5947d2a8c6e0f1b325  -

# md5 vs sha256 দৈর্ঘ্য তুলনা (md5 ভাঙা, শুধু checksum এ ব্যবহার)
$ echo -n "hello" | md5sum
b1946ac92492d2347c6235b4d2611184  -
$ echo -n "hello" | shasum -a 256
2cf24dba5fb0a30e26e83b2ac5b9e29e1b161e5c1fa7425e73043362938b9824  -

# File integrity check — ডাউনলোড করা ISO এর হ্যাশ মেলাও
$ shasum -a 256 ubuntu-24.04.iso
9d1f5c2e8a7b3f401e6d5c2b8a9f0314d7e6b5a8c9012345f6e7d8c9b0a1f2e3  ubuntu-24.04.iso
$ echo "9d1f5c2e8a7b3f401e6d5c2b8a9f0314d7e6b5a8c9012345f6e7d8c9b0a1f2e3  ubuntu-24.04.iso" | shasum -a 256 -c -
ubuntu-24.04.iso: OK   # ✅ ফাইল পরিবর্তিত হয়নি

# ⚠️ কিন্তু SHA-256 দ্রুত — password এর জন্য খারাপ! (পরের দরজায় দেখো)
</code></pre>
<span class="code-caption">🌀 Hash = একমুখী fingerprint। এক অক্ষর বদলে পুরো hash বদলায়। File integrity তে সেরা, password এ খারাপ।</span>
</div>

<div class="dialogue"><strong>ক্রিপ্টোগ্রাফার:</strong> Hash function হল একটা blender। যাই ছুঁড়ে দাও, একটা নির্দিষ্ট আকারের output পাও। একই input সবসময় একই output। কিন্তু output থেকে input বের করা অসম্ভব। আর একটা bit বদলালে ৫০% bit বদলে যায় — avalanche। এটা file integrity এর জন্য দারুণ। কিন্তু password এর জন্য? ভুল! কারণ SHA-256 দ্রুত — GPU বিলিয়ন বিলিয়ন hash করে সেকেন্ডে। Password brute force করা সহজ। তাই password এর জন্য ধীর hash দরকার — bcrypt বা Argon2।</div>`,
  recall: [
    { q: "Hash function এর ৩টা property কী কী?", a: "Deterministic (একই input → একই output), One-way (reverse করা যায় না), Avalanche (১ bit change → ৫০% bits flip)।" },
    { q: "SHA-256 password এর জন্য কেন খারাপ?", a: "SHA-256 দ্রুত — GPU বিলিয়ন hash/sec করতে পারে। Password brute force করা সহজ। ধীর hash (bcrypt/Argon2) দরকার যা GPU কে ধীর করে দেয়।" },
  ]
});

// ═══════════════════════════════════════════
// DOOR 4 — The Slow Maze (Password Hashing)
// ═══════════════════════════════════════════
doors.push({
  num: 4,
  icon: "🧂",
  color: "#22c55e",
  tagline: "ধীর গোলকধাঁধা — The Slow Maze",
  name: "The Slow Maze",
  secret: "bcrypt/Argon2 = ধীর + memory-hard। Salt = random seasoning। Rainbow table নস্ট।",
  story: `<p class="scene-setting">SHA-256 দ্রুত — GPU বিলিয়ন hash করে। Password brute force সহজ। সমাধান? ধীর করো! bcrypt এবং Argon2 ইচ্ছে করে ধীর। bcrypt ১৯৯৯ সালে Blowfish cipher থেকে তৈরি। Argon2 ২০১৫ সালে memory-hard — GPU কে RAM এ আটকায়। আর salt — প্রতিটা password এ এলোমেলো seasoning মেশানো হয়। দুজনের একই password হলেও hash আলাদা। Rainbow table নস্ত!</p>

<div class="svg-diagram">
<svg viewBox="0 0 580 320" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto">
  <text x="290" y="25" text-anchor="middle" fill="#e2e8f0" font-size="13" font-weight="900">🧂 Password Hashing: Salt + Slow = Safe</text>

  <!-- SHA-256 (fast, bad) -->
  <rect x="20" y="50" width="250" height="120" rx="10" fill="#450a0a" stroke="#dc2626" stroke-width="2"/>
  <text x="145" y="72" text-anchor="middle" fill="#f87171" font-size="10" font-weight="700">❌ SHA-256 (Fast = Bad)</text>
  <text x="145" y="92" text-anchor="middle" fill="#fca5a5" font-size="8">password → hash in nanoseconds</text>
  <rect x="40" y="105" width="210" height="22" rx="4" fill="#1e293b" stroke="#f87171" stroke-width="1"/>
  <text x="145" y="120" text-anchor="middle" fill="#fca5a5" font-size="8" font-family="monospace">GPU: 100 billion guesses/sec</text>
  <text x="145" y="145" text-anchor="middle" fill="#dc2626" font-size="8">Rainbow table → cracked instantly</text>
  <text x="145" y="160" text-anchor="middle" fill="#64748b" font-size="7" font-style="italic">Even with salt, too fast to resist</text>

  <!-- Argon2 (slow, good) -->
  <rect x="310" y="50" width="250" height="120" rx="10" fill="#052e16" stroke="#22c55e" stroke-width="2"/>
  <text x="435" y="72" text-anchor="middle" fill="#4ade80" font-size="10" font-weight="700">✅ Argon2id (Slow = Safe)</text>
  <text x="435" y="92" text-anchor="middle" fill="#86efac" font-size="8">password → hash in 0.5 seconds</text>
  <rect x="330" y="105" width="210" height="22" rx="4" fill="#1e293b" stroke="#4ade80" stroke-width="1"/>
  <text x="435" y="120" text-anchor="middle" fill="#86efac" font-size="8" font-family="monospace">GPU: only 2 guesses/sec (64MB each!)</text>
  <text x="435" y="145" text-anchor="middle" fill="#22c55e" font-size="8">Memory-hard → GPU VRAM exhausted</text>
  <text x="435" y="160" text-anchor="middle" fill="#64748b" font-size="7" font-style="italic">RFC 9106: 64MB RAM, 3 iterations</text>

  <!-- Salt explanation -->
  <rect x="20" y="190" width="540" height="110" rx="10" fill="#0f172a" stroke="#fbbf24" stroke-width="1.5"/>
  <text x="290" y="212" text-anchor="middle" fill="#fbbf24" font-size="10" font-weight="700">🧂 Salt: Unique Random Seasoning Per User</text>

  <rect x="40" y="225" width="240" height="60" rx="5" fill="#1e293b" stroke="#fbbf24" stroke-width="1"/>
  <text x="160" y="242" text-anchor="middle" fill="#fcd34d" font-size="8">User A: "finance123" + salt_a7f3</text>
  <text x="160" y="258" text-anchor="middle" fill="#fbbf24" font-size="8" font-family="monospace">→ hash = 8b2c...</text>
  <text x="160" y="275" text-anchor="middle" fill="#86efac" font-size="7">Unique hash ✅</text>

  <rect x="300" y="225" width="240" height="60" rx="5" fill="#1e293b" stroke="#fbbf24" stroke-width="1"/>
  <text x="420" y="242" text-anchor="middle" fill="#fcd34d" font-size="8">User B: "finance123" + salt_k9m2</text>
  <text x="420" y="258" text-anchor="middle" fill="#fbbf24" font-size="8" font-family="monospace">→ hash = 3e7f...</text>
  <text x="420" y="275" text-anchor="middle" fill="#86efac" font-size="7">Different hash ✅ Rainbow table dead! 💀</text>
</svg>
</div>
<div class="svg-caption">চিত্র: SHA-256 = দ্রুত (খারাপ)। Argon2id = ধীর + ৬৪ মেগাবাইট RAM (ভালো)। Salt = প্রতি user এর জন্য এলোমেলো seasoning → rainbow table নস্ত।</div>

<div class="code-block">
<pre><code># ❌ SHA-256 password hashing — দ্রুত, brute force সহজ (খারাপ!)
$ echo -n "password123" | shasum -a 256   # GPU: ১০০ বিলিয়ন/সেকেন্ড!
ef92b778bafe771e89245b89ecbc08a44a4e166c06659911881f383d44751e42  -

# ✅ bcrypt — ধীর, cost factor বাড়ালে আরও ধীর (১৯৯৯, Blowfish cipher)
$ htpasswd -nbB -C 12 user "password123"   # Apache এর bcrypt
user:$2y$12$N9qo8uLOickgx2ZMRZoMy.MrqK3a8C2WjFqI5W9xKQD5e/2b3e8qK

#    $2y$ = bcrypt   $12$ = cost factor (2^12 = 4096 rounds)
#    একই password দুবার চালাও — salt এলোমেলো, hash আলাদা হয়!
$ htpasswd -nbB -C 12 user "password123"
user:$2y$12$K3.aB7cD9eF1gH2iJ3kL4mN5oP6qR7sT8uV9wX0yZ1aB2cD3eF4gH5i

# ✅ Argon2id — memory-hard, GPU কে RAM এ আটকায় (২০১৫, RFC 9106)
$ argon2 "mysalt" -id -t 3 -m 16 -p 1 -l 32 &lt;&lt;&lt; "password123"
Type:           Argon2id
Iterations:     3
Memory:         65536 KiB    # ← ৬৪ মেগাবাইট RAM!
Parallelism:    1
Hash:           9c1f3e7a2b4d5c8f1a0e3d6b9c2f5a8d...
Encoded:        $argon2id$v=19$m=65536,t=3,p=1$bXlzYWx0$+Hash...

# Django তে Argon2 চালু করো (LedgerPilot এর জন্য):
# settings.py:
#   PASSWORD_HASHERS = [
#       'django.contrib.auth.hashers.Argon2PasswordHasher',  # ← প্রথমে
#       'django.contrib.auth.hashers.PBKDF2PasswordHasher',   # fallback
#   ]
$ python -c "import argon2; h=argon2.PasswordHasher(); print(h.hash('password123'))"
$argon2id$v=19$m=65536,t=3,p=1$cmFuZG9tc2FsdA$8b2c1d4e5f6a7b8c9d0e1f2a...
0.528s   # ← ধীর! এটাই উদ্দেশ্য। GPU তে মাত্র ২ guess/সেকেন্ড।
</code></pre>
<span class="code-caption">🧂 bcrypt/Argon2 = ধীর + salt। GPU কে ধীর করে দেয়। Salt এর জন্য rainbow table নস্ত।</span>
</div>

<div class="dialogue"><strong>নিলস প্রোভোস:</strong> আমি ১৯৯৯ সালে bcrypt তৈরি করেছিলাম। আইডিয়া সহজ — hash কে ইচ্ছে করে ধীর করো। Blowfish cipher এর key schedule বারবার চালাও। cost factor বাড়ালে আরও ধীর। Argon2 এক ধাপ এগিয়ে — memory-hard। ৬৪ মেগাবাইট RAM দরকার প্রতি hash এ। GPU তে VRAM কম — তাই GPU parallel attack অসম্ভব। Salt হল প্রতিটা password এ এলোমেলো seasoning। দুজন একই password ব্যবহার করলেও তাদের hash আলাদা। Rainbow table — প্রি-কম্পিউটেড hash টেবিল — নস্ত। Django তে Argon2 ব্যবহার করো — settings.py তে Argon2PasswordHasher প্রথমে রাখো।</div>`,
  recall: [
    { q: "Salt কী কাজে লাগে?", a: "প্রতিটা password এ এলোমেলো seasoning। দুজন একই password ব্যবহার করলেও hash আলাদা। Rainbow table (প্রি-কম্পিউটেড hash) নস্ত।" },
    { q: "Argon2 কেন SHA-256 এর চেয়ে ভালো?", a: "Argon2 ধীর (০.৫ সেকেন্ড) আর memory-hard (৬৪ মেগাবাইট RAM)। GPU brute force অসম্ভব। SHA-256 দ্রুত — GPU বিলিয়ন hash/sec।" },
  ]
});

// ═══════════════════════════════════════════
// DOOR 5 — The Digital Notary (PKI & Certificates)
// ═══════════════════════════════════════════
doors.push({
  num: 5,
  icon: "📜",
  color: "#fbbf24",
  tagline: "ডিজিটাল নোটারি — The Digital Notary",
  name: "The Digital Notary",
  secret: "Digital signature = private key দিয়ে সিল। CA = নোটারি যে পাবলিক key verify করে। Let's Encrypt = ফ্রি সার্টিফিকেট।",
  story: `<p class="scene-setting">তুমি একটা ইনভয়েস পাঠালে। কিভাবে প্রমাণ করবে এটা তোমার? Digital signature — private key দিয়ে সিল করো। যে কেউ public key দিয়ে verify করতে পারে। কিন্তু কিভাবে জানবে public key সত্যিই তোমার? Certificate Authority (CA) — একজন ডিজিটাল নোটারি। সে তোমার পরিচয় verify করে, X.509 certificate সাইন করে। Browser CA কে trust করে। Let's Encrypt এই সব ফ্রি করে — ACME protocol দিয়ে স্বয়ংক্রিয়।</p>

<div class="code-block">
<pre><code># Self-signed certificate তৈরি — শিখার জন্য (production এ CA দরকার)
$ openssl req -x509 -newkey rsa:2048 -keyout key.pem -out cert.pem \
    -days 365 -nodes -subj "/CN=ledgerpilot.local" \
    -addext "subjectAltName=DNS:ledgerpilot.local,DNS:www.ledgerpilot.local"
..+...+....+...+...   # RSA keypair তৈরি
-----

# Certificate দেখো — এখানেই public key + domain বাঁধা থাকে
$ openssl x509 -in cert.pem -text -noout | grep -E "Subject:|Not After|Public Key"
        Subject: CN=ledgerpilot.local
            Public-Key: (2048 bit)
            Not Before: Jan 15 10:30:00 2025 UTC
            Not After: Jan 15 10:30:00 2026 UTC   # ← ১ বছর পর মেয়াদ শেষ

# Signature verify — CA এর private key দিয়ে sign করা আছে কিনা
$ openssl verify -CAfile cert.pem cert.pem
cert.pem: OK   # self-signed তাই নিজেই verify হয় (শুধু প্র্যাকটিস)

# ✅ Let's Encrypt = ফ্রি CA certificate (ACME protocol)
# DNS-01 challenge দিয়ে domain ownership প্রমাণ করো
$ certbot certonly --manual --preferred-challenges dns -d ledgerpilot.com
Please deploy a DNS TXT record under the name:
_acme-challenge.ledgerpilot.com. with the following value:
X9m2kQ7nR4pL8vB3hY6jF1cZ5wA0tE9s   # ← এই TXT record DNS এ যোগ করো

Press Enter to Continue
... verification successful ...
Certificate obtained: /etc/letsencrypt/live/ledgerpilot.com/fullchain.pem
Expiry: 2025-04-15 (90 দিন, তারপর অটো-রিনিউ)
</code></pre>
<span class="code-caption">📜 Certificate = public key + domain, CA এর signature দিয়ে। Let's Encrypt ফ্রি করে, স্বয়ংক্রিয়।</span>
</div>

<div class="dialogue"><strong>সার্টিফিকেট অথরিটি:</strong> আমি একজন নোটারি। ওয়েবসাইট আমার কাছে আসে, প্রমাণ করে সে আসল। আমি তার public key আর domain একটা certificate এ bind করি, আমার private key দিয়ে sign করি। Browser আমাকে trust করে (root certificate store এ আমার key আছে)। Let's Encrypt এই প্রক্রিয়া স্বয়ংক্রিয় করেছে — ACME protocol। HTTP-01 বা DNS-01 challenge দিয়ে domain verify, তারপর certificate issue। সব ফ্রি, সব স্বয়ংক্রিয়। certbot দিয়ে এক কমান্ডে।</div>`,
  recall: [
    { q: "Digital signature কিভাবে কাজ করে?", a: "Private key দিয়ে data hash করে sign করো। যে কেউ public key দিয়ে verify করতে পারে। Sign থেকে data বদলানো গেলে signature invalid।" },
    { q: "Let's Encrypt এর ACME protocol কী?", a: "Automatic Certificate Management Environment। domain verify (HTTP-01/DNS-01 challenge), certificate issue, renewal — সব স্বয়ংক্রিয়, ফ্রি।" },
  ]
});
