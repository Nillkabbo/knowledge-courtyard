const doors = [];

doors.push({
  num: 1,
  icon: "🔐",
  color: "#dc2626",
  name: "দুই তালার রহস্য",
  subtitle: "The Twin Locks",
  tech: "Symmetric vs Asymmetric Encryption — AES (Daemen-Rijmen 2001), RSA (Rivest-Shamir-Adleman 1977), TLS hybrid",
  spirit: "হিফযুল আমান — আমানত রক্ষা, প্রতিটি বার্তার নিরাপত্তা",
  secret: "AES = এক চাবির তালা (দ্রুত), RSA = দুই চাবি (নিরাপদ)। TLS দুটো মেলায় — RSA দিয়ে চাবি আদান, AES দিয়ে ডেটা এনক্রিপ্ট।",
  recall: {
    q: " TLS কেন শুধু AES বা শুধু RSA ব্যবহার করে না?",
    qen: "Why doesn't TLS use only AES or only RSA?",
    a: "AES দ্রুত কিন্তু চাবি শেয়ার কঠিন। RSA চাবি শেয়ার পারে কিন্তু ধীর। Hybrid = RSA দিয়ে AES key exchange, তারপর AES দিয়ে data।",
    aen: "AES is fast but key sharing is hard. RSA can share keys but is slow. Hybrid = RSA for key exchange, AES for data."
  },
  story: `<p class="scene-setting">তুমি একটি মূল্যবান রশিদ পাঠাচ্ছো। রাস্তায় চোর। তুমি বাক্সে ভরে তালা দিলে। কিন্তু — চাবি কীভাবে পাঠাবে? চাবি পাঠালেই চোর নেবে। এটাই symmetric encryption-এর সমস্যা। AES দ্রুত — nanosecond-এ এনক্রিপ্ট। কিন্তু চাবি শেয়ার করা দুঃসাধ্য।</p>
<p class="scene-setting en">You send a valuable receipt. Thieves on the road. You lock the box. But — how to send the key? Send it and thieves steal it. This is the symmetric encryption problem. AES is fast — encrypts in nanoseconds. But key sharing is nearly impossible.</p>

<div class="dialogue"><strong>তুমি:</strong> তাহলে উপায় কী? চাবি ছাড়া তালা খোলে না!</div>
<div class="dialogue en"><strong>You:</strong> Then what's the solution? A lock needs a key!</div>

<div class="dialogue"><strong>দুর্গ-রক্ষক কামরান:</strong> ১৯৭৭ সালে MIT-তে তিনজন — Rivest, Shamir, Adleman — একটি বিপ্লবাত্মক ধারণা দিলেন। দুটো চাবি! একটা পাবলিক — যে কেউ তালা লাগাতে পারে। একটা প্রাইভেট — শুধু তুমি খুলতে পারো। যেমন একটা ডাকবাক্স — যে কেউ চিঠি ফেলতে পারে, কিন্তু শুধু তুমি খুলতে পারো। এটাই RSA — asymmetric encryption। ধীর, কিন্তু চাবি শেয়ারের সমস্যা সমাধান হয়। TLS বলে — প্রথমে RSA দিয়ে AES চাবি আদান, তারপর AES দিয়ে সব ডেটা। দুটোরই সেরা দিক।</div>
<div class="dialogue en"><strong>Fortress Keeper Kamran:</strong> In 1977, three at MIT — Rivest, Shamir, Adleman — proposed a revolutionary idea. Two keys! One public — anyone can lock. One private — only you can unlock. Like a mailbox — anyone can drop a letter, only you can open it. This is RSA — asymmetric encryption. Slow, but solves key sharing. TLS: RSA for AES key exchange, then AES for all data.</div>

<div class="callout info"><span class="co-icon">📐</span><div><strong>দুই ধরনের এনক্রিপশন:</strong><br>
<strong>Symmetric (AES):</strong> এক চাবি দিয়ে lock ও unlock। দ্রুত (~GB/s)। সমস্যা: চাবি শেয়ার কীভাবে?<br>
<strong>Asymmetric (RSA):</strong> দুই চাবি। Public = lock, Private = unlock। নিরাপদ চাবি আদান। ধীর (~KB/s)।<br>
<strong>Hybrid (TLS):</strong> RSA দিয়ে AES চাবি পাঠাও → AES দিয়ে ডেটা এনক্রিপ্ট। দুটোরই সেরা!<br>
<strong>ECC:</strong> ২৫৬-bit ECC = ৩০৭২-bit RSA। ছোট চাবি, একই নিরাপত্তা।</div></div>

<div class="code-block">— OpenSSL: AES ও RSA বাস্তবে —
  # AES-256 এনক্রিপ্ট
  $ openssl enc -aes-256-cbc -salt -in secret.txt -out secret.enc
  enter aes-256-cbc password: ********

  # RSA keypair তৈরি
  $ openssl genrsa -out private.pem 2048
  $ openssl rsa -in private.pem -pubout -out public.pem

  # RSA দিয়ে এনক্রিপ্ট (public key দিয়ে)
  $ openssl rsautl -encrypt -pubin -inkey public.pem \
      -in aes_key.txt -out aes_key.enc

  # RSA দিয়ে ডিক্রিপ্ট (private key দিয়ে)
  $ openssl rsautl -decrypt -inkey private.pem -in aes_key.enc

  — AES গতি: ~৯৭৮ GB/s · RSA গতি: ~১০০০ signs/s —
  — TLS: RSA দিয়ে AES চাবি, তারপর AES দিয়ে সব ডেটা —</div>

<div class="verse">إِنَّ اللَّهَ يَأْمُرُكُمْ أَن تُؤَدُّوا الْأَمَانَاتِ إِلَى أَهْلِهَا</div>
<div style="font-size:.85rem;color:var(--ink-dim);text-align:center;margin-bottom:1rem">"নিশ্চয়ই আল্লাহ তোমাদের নির্দেশ দিচ্ছেন আমানত তার অধিকারীর কাছে পৌঁছাতে।" — কুরআন ৪:৫৮</div>

<p class="scene-setting">হিফযুল আমান — আমানত রক্ষা। প্রতিটি এনক্রিপ্টেড বার্তা একটি আমানত। AES সেই আমানতের তালা — দ্রুত, শক্তিশালী। RSA সেই তালার চাবি নিরাপদে পৌঁছানোর উপায়। TLS দুটোকে মেলায় — দ্রুততা ও নিরাপত্তার সমন্বয়। আল্লাহ আমানত রক্ষার নির্দেশ দিয়েছেন — ক্রিপ্টোগ্রাফি সেই নির্দেশের গাণিতিক রূপ।</p>
<p class="scene-setting en">Hifzul Aman — safeguarding trusts. Every encrypted message is a trust. AES is the lock — fast, strong. RSA is the secure delivery of the key. TLS combines both — speed and security. Allah commands safeguarding trusts — cryptography is the mathematical form of that command.</p>

<div class="callout tip"><span class="co-icon">🔗</span><div><strong>Book ৩৭ (Networks) Door ৯ (TLS):</strong> TLS handshake শিখেছিলে — এখন দেখো সেই handshake-এর পেছনে কোন এনক্রিপশন। Book ৪৮ (Discrete Math) Door ৯: Fermat-এর সূত্র — RSA-এর গাণিতিক ভিত্তি।</div></div>

<div class="svg-diagram">
<svg viewBox="0 0 580 250" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto">
  <rect x="0" y="0" width="580" height="250" fill="#0f172a" rx="8"/>
  <text x="290" y="22" text-anchor="middle" fill="#fca5a5" font-size="13" font-weight="bold">Symmetric vs Asymmetric vs Hybrid (TLS)</text>
  <rect x="25" y="45" width="150" height="150" rx="8" fill="#450a0a" stroke="#f87171" stroke-width="2"/>
  <text x="100" y="65" text-anchor="middle" fill="#fca5a5" font-size="11" font-weight="bold">AES (Symmetric)</text>
  <rect x="45" y="80" width="110" height="28" rx="4" fill="#7f1d1d" stroke="#fca5a5" stroke-width="1"/>
  <text x="100" y="98" text-anchor="middle" fill="#fca5a5" font-size="10">1 key: encrypt+decrypt</text>
  <text x="100" y="128" text-anchor="middle" fill="#4ade80" font-size="10">~978 GB/s — FAST</text>
  <text x="100" y="150" text-anchor="middle" fill="#fbbf24" font-size="9">Problem: key sharing</text>
  <text x="100" y="172" text-anchor="middle" fill="#fca5a5" font-size="9">how to send the key?</text>
  <text x="100" y="188" text-anchor="middle" fill="#7dd3fc" font-size="8">2001 · Daemen-Rijmen</text>
  <rect x="215" y="45" width="150" height="150" rx="8" fill="#451a03" stroke="#fbbf24" stroke-width="2"/>
  <text x="290" y="65" text-anchor="middle" fill="#fcd34d" font-size="11" font-weight="bold">RSA (Asymmetric)</text>
  <rect x="230" y="80" width="55" height="24" rx="4" fill="#78350f" stroke="#fcd34d" stroke-width="1"/>
  <text x="257" y="96" text-anchor="middle" fill="#fcd34d" font-size="9">Public</text>
  <rect x="295" y="80" width="55" height="24" rx="4" fill="#78350f" stroke="#fcd34d" stroke-width="1"/>
  <text x="322" y="96" text-anchor="middle" fill="#fcd34d" font-size="9">Private</text>
  <text x="290" y="128" text-anchor="middle" fill="#fbbf24" font-size="10">~1000 signs/s — SLOW</text>
  <text x="290" y="150" text-anchor="middle" fill="#4ade80" font-size="9">Secure key exchange</text>
  <text x="290" y="172" text-anchor="middle" fill="#fca5a5" font-size="9">p * q = n (math trapdoor)</text>
  <text x="290" y="188" text-anchor="middle" fill="#7dd3fc" font-size="8">1977 · Rivest-Shamir-Adleman</text>
  <rect x="405" y="45" width="150" height="150" rx="8" fill="#0c4a6e" stroke="#22d3ee" stroke-width="2"/>
  <text x="480" y="65" text-anchor="middle" fill="#7dd3fc" font-size="11" font-weight="bold">TLS (Hybrid)</text>
  <text x="480" y="92" text-anchor="middle" fill="#7dd3fc" font-size="9">1. RSA exchanges AES key</text>
  <text x="480" y="112" text-anchor="middle" fill="#7dd3fc" font-size="9">2. AES encrypts all data</text>
  <text x="480" y="138" text-anchor="middle" fill="#4ade80" font-size="9">Best of both worlds</text>
  <text x="480" y="160" text-anchor="middle" fill="#c084fc" font-size="9">Speed + Security</text>
  <text x="480" y="182" text-anchor="middle" fill="#fbbf24" font-size="8">ECC: 256-bit = 3072-bit RSA</text>
  <path d="M 175 120 L 215 120" stroke="#fca5a5" stroke-width="2" marker-end="url(#arrCr1a)"/>
  <path d="M 365 120 L 405 120" stroke="#7dd3fc" stroke-width="2" marker-end="url(#arrCr1b)"/>
  <defs>
    <marker id="arrCr1a" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><polygon points="0,0 8,4 0,8" fill="#fca5a5"/></marker>
    <marker id="arrCr1b" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><polygon points="0,0 8,4 0,8" fill="#7dd3fc"/></marker>
  </defs>
</svg>
</div>
<div class="svg-caption">দুই তালার রহস্য — AES এক চাবিতে দ্রুত, RSA দুই চাবিতে নিরাপদ, TLS দুটোকে মেলায়: RSA দিয়ে চাবি আদান, AES দিয়ে ডেটা এনক্রিপ্ট।</div>
<div class="secret-box">🔐 <strong>দুই তালা — AES দ্রুত, RSA নিরাপদ।</strong> TLS দুটো মেলায়। কিন্তু চাবি শেয়ার ছাড়াও একটি সমস্যা আছে — দুজন যদি একসাথে চাবি বানাতে চায়? কেউ চাবি পাঠাবে না — দুজন মিলে বানাবে। সেই জাদু — পরের দরজায়।</div>`,
  senior: {
    title: "Symmetric vs Asymmetric এক নজরে",
    body: `<table class="kv-table"><tr><th>ধারণা</th><th>বিবরণ</th></tr>
<tr><td class="hl">AES (2001)</td><td>Symmetric — এক চাবি, দ্রুত</td></tr>
<tr><td class="hl">RSA (1977)</td><td>Asymmetric — দুই চাবি, নিরাপদ</td></tr>
<tr><td class="hl">TLS Hybrid</td><td>RSA দিয়ে key exchange, AES দিয়ে data</td></tr>
<tr><td class="hl">ECC</td><td>২৫৬-bit = ৩০৭২-bit RSA — ছোট চাবি</td></tr>
<tr><td class="hl">AES গতি</td><td>~৯৭৮ GB/s — hardware accelerated</td></tr>
<tr><td class="hl">RSA গতি</td><td>~১০০০ signs/s — ধীর কিন্তু নিরাপদ</td></tr></table>`
  }
});

doors.push({
  num: 2,
  icon: "🎨",
  color: "#dc2626",
  name: "পাবলিকে রঙ মেশানো",
  subtitle: "Paint in Public",
  tech: "Diffie-Hellman Key Exchange — Diffie-Hellman 1976, discrete logarithm, paint analogy, ECDH, forward secrecy",
  spirit: "সিরর — গোপন, পাবলিক চোখের সামনে গোপনীয়তা",
  secret: "Diffie-Hellman: দুজন পাবলিক চ্যানেলে গোপন চাবি বানায়। সবাই শুনছে কিন্তু কেউ পাবে না। রঙ মেশানোর মতো — আনমিক্স করা যায় না।",
  recall: {
    q: " Diffie-Hellman কীভাবে কাজ করে? কেন চোর পাবে না?",
    qen: "How does Diffie-Hellman work? Why can't the eavesdropper get the key?",
    a: "দুজন পাবলিক সংখ্যা (p, g) রাজি হয়। প্রত্যেকে গোপন সংখ্যা (a, b) বেছে নেয়। পাবলিকে g^a ও g^b পাঠায়। গোপন চাবি = g^(ab)। চোর g^a ও g^b দেখে কিন্তু discrete log সমাধান কঠিন।",
    aen: "Two agree on public (p, g). Each picks private (a, b). Exchange g^a and g^b publicly. Shared secret = g^(ab). Eavesdropper sees g^a, g^b but discrete log is hard."
  },
  story: `<p class="scene-setting">১৯৭৬, স্ট্যানফোর্ড। Whitfield Diffie ও Martin Hellman একটি অসম্ভব কল্পনা করছেন। দুজন মানুষ একটি পাবলিক রেডিওতে কথা বলছে — সবাই শুনছে। কিন্তু তারা একটি গোপন চাবি বানাবে যা কেউ পাবে না। কীভাবে? রঙ মেশানোর মতো। হলুদ পাবলিক। প্রত্যেকে গোপন রঙ মেশায়। বিনিময় করে। আবার মেশায়। দুজনের ফল একই — কিন্তু চোর আনমিক্স করতে পারে না!</p>
<p class="scene-setting en">1976, Stanford. Whitfield Diffie and Martin Hellman imagine the impossible. Two people on public radio — everyone listens. Yet they create a secret key no one can get. How? Like mixing paint. Yellow is public. Each adds a secret color. Exchange. Mix again. Both get the same result — but the thief cannot un-mix!</p>

<div class="dialogue"><strong>রঙ-কারিগর জাইনাব:</strong> কামরান (Door ১) তোমাকে AES ও RSA শিখিয়েছেন। কিন্তু একটি সমস্যা — RSA-তে একজন চাবি বানায়, অন্যজন গ্রহণ করে। যদি দুজন একসাথে চাবি বানাতে চায়? কেউ চাবি পাঠাবে না? Diffie-Hellman এর উত্তর: গাণিতিক রঙ। g^a ও g^b পাবলিকে যায়। কিন্তু g^(ab) কেউ হিসাব করতে পারে না — discrete logarithm সমস্যা। একমুখী ফাংশন — সহজে করা যায়, উল্টে কঠিন।</div>
<div class="dialogue en"><strong>Color Artisan Zainab:</strong> Kamran (Door 1) taught you AES and RSA. But one problem — in RSA, one creates the key, the other receives. What if both want to create together? Diffie-Hellman: mathematical paint. g^a and g^b go public. But g^(ab) cannot be computed — discrete log problem. One-way function — easy to do, hard to reverse.</div>

<div class="callout info"><span class="co-icon">🎨</span><div><strong>Diffie-Hellman গাণিতিক প্রক্রিয়া:</strong><br>
<strong>পাবলিক:</strong> p (বড় মৌলিক সংখ্যা), g (generator)<br>
<strong>Alice গোপন:</strong> a → পাবলিকে পাঠায় A = g^a mod p<br>
<strong>Bob গোপন:</strong> b → পাবলিকে পাঠায় B = g^b mod p<br>
<strong>গোপন চাবি:</strong> Alice হিসাব করে B^a = g^(ba), Bob হিসাব করে A^b = g^(ab)<br>
<strong>গাণিতিক সত্য:</strong> g^(ba) = g^(ab) — একই! ✅<br>
<strong>চোরের সমস্যা:</strong> g^a ও g^b জানে, কিন্তু a বা b বের করা = discrete log = অসম্ভব</div></div>

<div class="code-block">— Python: Diffie-Hellman সিমুলেশন —

  # সহজ উদাহরণ (বাস্তবে p হাজার ডিজিট)
  p = 23   # public prime (বাস্তবে 2048-bit)
  g = 5    # public generator

  # Alice-এর গোপন সংখ্যা
  a = 6                    # private!
  A = pow(g, a, p)         # public: g^a mod p = 8

  # Bob-এর গোপন সংখ্যা
  b = 15                   # private!
  B = pow(g, b, p)         # public: g^b mod p = 19

  # Alice ও Bob পাবলিকে A ও B বিনিময় করে
  # এখন প্রত্যেকে গোপন চাবি হিসাব করে:
  alice_secret = pow(B, a, p)  # B^a mod p = 2
  bob_secret   = pow(A, b, p)  # A^b mod p = 2

  print(alice_secret == bob_secret)  # True! ✅
  print(alice_secret)                # 2 — shared secret!

  # চোর p=২৩, g=৫, A=৮, B=১৯ জানে
  # কিন্তু a বা b বের করতে হলে discrete log:
  # g^x ≡ 8 (mod 23) — x কত? brute force লাগে
  # বাস্তব p = ২০৪৮-bit → অসম্ভব!</div>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>Forward Secrecy:</strong> যদি পরে কারো private key চুরি হয়, পুরোনো সেশন ডিক্রিপ্ট হয়ে যায় না — যদি Diffie-Hellman ephemeral (DHE) ব্যবহার করা হয়। প্রতিটি সেশনে নতুন a, b। পুরোনো চাবি আলাদা। TLS 1.3-এ DHE বাধ্যতামূলক।</div></div>

<div class="verse">وَأَسِرُّوا قَوْلَكُمْ أَوِ اجْهَرُوا بِهِ إِنَّهُ عَلِيمٌ بِذَاتِ الصُّدُورِ</div>
<div style="font-size:.85rem;color:var(--ink-dim);text-align:center;margin-bottom:1rem">"তোমরা তোমাদের কথা গোপন রাখো বা প্রকাশ করো — নিশ্চয়ই তিনি অন্তরের বিষয় জানেন।" — কুরআন ৬৭:১৩</div>

<p class="scene-setting">সিরর — গোপনীয়তা। Diffie-Hellman প্রকাশ্যে গোপনীয়তা সৃষ্টি করে। সবাই শুনছে, কেউ বুঝতে পারছে না। একমুখী ফাংশন — রঙ মেশানো সহজ, আনমিক্স অসম্ভব। প্রকৃতিতেও — ডিম ভাঙা সহজ, জোড়া লাগানো অসম্ভব। একমুখী গণিত।</p>
<p class="scene-setting en">Sirr — secrecy. Diffie-Hellman creates secrecy in public. Everyone hears, no one understands. One-way function — mixing paint is easy, un-mixing is impossible. In nature too — breaking an egg is easy, un-breaking is impossible. One-way mathematics.</p>

<div class="callout tip"><span class="co-icon">🔗</span><div><strong>Book ৪৮ (Discrete Math) Door ৯ (Number Theory):</strong> modular arithmetic ও discrete logarithm শিখেছিলে — Diffie-Hellman সেই গাণিতিক ভিত্তির প্রয়োগ! Book ৩৭ Door ৯ (TLS): TLS 1.3-এ DHE বাধ্যতামূলক।</div></div>

<div class="svg-diagram">
<svg viewBox="0 0 580 250" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto">
  <rect x="0" y="0" width="580" height="250" fill="#0f172a" rx="8"/>
  <text x="290" y="22" text-anchor="middle" fill="#fca5a5" font-size="13" font-weight="bold">Diffie-Hellman: Secret from Public Channel</text>
  <rect x="20" y="55" width="120" height="70" rx="8" fill="#450a0a" stroke="#f87171" stroke-width="2"/>
  <text x="80" y="75" text-anchor="middle" fill="#fca5a5" font-size="11" font-weight="bold">Alice</text>
  <text x="80" y="95" text-anchor="middle" fill="#fca5a5" font-size="10">private: a</text>
  <text x="80" y="112" text-anchor="middle" fill="#7dd3fc" font-size="9">sends A = g^a mod p</text>
  <rect x="440" y="55" width="120" height="70" rx="8" fill="#450a0a" stroke="#f87171" stroke-width="2"/>
  <text x="500" y="75" text-anchor="middle" fill="#fca5a5" font-size="11" font-weight="bold">Bob</text>
  <text x="500" y="95" text-anchor="middle" fill="#fca5a5" font-size="10">private: b</text>
  <text x="500" y="112" text-anchor="middle" fill="#7dd3fc" font-size="9">sends B = g^b mod p</text>
  <rect x="220" y="160" width="140" height="40" rx="6" fill="#451a03" stroke="#fbbf24" stroke-width="1" stroke-dasharray="4"/>
  <text x="290" y="178" text-anchor="middle" fill="#fcd34d" font-size="10">Eavesdropper sees:</text>
  <text x="290" y="192" text-anchor="middle" fill="#fcd34d" font-size="9">p, g, A, B — but NOT a or b</text>
  <line x1="140" y1="80" x2="440" y2="80" stroke="#22d3ee" stroke-width="2"/>
  <text x="290" y="74" text-anchor="middle" fill="#7dd3fc" font-size="9">PUBLIC CHANNEL</text>
  <path d="M 200 80 L 140 80" stroke="#7dd3fc" stroke-width="1.5" marker-end="url(#arrCr2a)"/>
  <path d="M 380 80 L 440 80" stroke="#7dd3fc" stroke-width="1.5" marker-end="url(#arrCr2b)"/>
  <rect x="200" y="105" width="180" height="40" rx="6" fill="#052e16" stroke="#22c55e" stroke-width="2"/>
  <text x="290" y="123" text-anchor="middle" fill="#4ade80" font-size="11" font-weight="bold">Shared Secret = g^(ab)</text>
  <text x="290" y="138" text-anchor="middle" fill="#4ade80" font-size="9">Alice: B^a · Bob: A^b · SAME!</text>
  <text x="290" y="222" text-anchor="middle" fill="#c084fc" font-size="10">discrete log: given g^x, finding x is infeasible (one-way)</text>
  <defs>
    <marker id="arrCr2a" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><polygon points="0,0 8,4 0,8" fill="#7dd3fc"/></marker>
    <marker id="arrCr2b" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><polygon points="0,0 8,4 0,8" fill="#7dd3fc"/></marker>
  </defs>
</svg>
</div>
<div class="svg-caption">রঙ মেশানোর মতো — Alice ও Bob পাবলিকে A=g^a ও B=g^b পাঠায়, দুজনেই g^(ab) হিসাব করে। চোর A, B দেখে কিন্তু a বা b বের করতে পারে না — discrete logarithm।</div>
<div class="secret-box">🎨 <strong>Diffie-Hellman = পাবলিকে গোপন চাবি।</strong> রঙ মেশানোর মতো — সহজে মেশাও, আনমিক্স অসম্ভব। কিন্তু চাবি শেয়ার করা ছাড়াও একটি প্রশ্ন — বার্তা পরিবর্তিত হলে কী হবে? কেউ মাঝে বার্তা বদলে দিলে? সেই সুরক্ষা — পরের দরজায়।</div>`,
  senior: {
    title: "Diffie-Hellman এক নজরে",
    body: `<table class="kv-table"><tr><th>ধারণা</th><th>বিবরণ</th></tr>
<tr><td class="hl">Diffie-Hellman (1976)</td><td>পাবলিক চ্যানেলে গোপন চাবি</td></tr>
<tr><td class="hl">One-Way Function</td><td>g^x সহজ, x বের করা কঠিন (discrete log)</td></tr>
<tr><td class="hl">Shared Secret</td><td>g^(ab) — দুজন একই ফল</td></tr>
<tr><td class="hl">ECDH</td><td>Elliptic Curve DH — ছোট চাবি</td></tr>
<tr><td class="hl">Forward Secrecy</td><td>Ephemeral keys — পুরোনো সেশন সুরক্ষিত</td></tr>
<tr><td class="hl">TLS 1.3</td><td>DHE বাধ্যতামূলক</td></tr></table>`
  }
});

doors.push({
  num: 3,
  icon: "#️⃣",
  color: "#dc2626",
  name: "আঙুরের ছাপ",
  subtitle: "The Grape Stamp",
  tech: "Hash Functions — SHA-256, MD5 (deprecated), avalanche effect, file integrity, password hashing, Merkle trees",
  spirit: "খাতিম — সিলমোহর, প্রতিটি বার্তার অদ্বিতীয় পরিচয়",
  secret: "হ্যাশ = একমুখী সিলমোহর। যেকোনো ইনপুট → নির্দিষ্ট আউটপুট। এক বাইট বদলালে সম্পূর্ণ হ্যাশ বদলে যায় — avalanche। পাসওয়ার্ড, ফাইল যাচাই, ব্লকচেইন — সব হ্যাশের উপর।",
  recall: {
    q: " হ্যাশ ফাংশনের চারটি বৈশিষ্ট্য কী? avalanche effect কী?",
    qen: "What are the four properties of hash functions? What is the avalanche effect?",
    a: "১. নির্দিষ্ট দৈর্ঘ্য ২. একমুখী (pre-image) ৩. collision-resistant ৪. avalanche (১ বিট বদল → ৫০% বিট বদল)।",
    aen: "1. Fixed length 2. One-way (pre-image resistant) 3. Collision-resistant 4. Avalanche (1 bit change → 50% bits change)."
  },
  story: `<p class="scene-setting">তুমি একটি দলিল পাঠাচ্ছো। প্রাপক নিশ্চিত হতে চায় — দলিল পরিবর্তিত হয়নি। কীভাবে? তুমি দলিলের একটি সিলমোহর পাঠাও — হ্যাশ। দলিলের প্রতিটি বাইট এই সিলে প্রতিফলিত। একটি বাইট বদলালে সিল সম্পূর্ণ ভিন্ন। এটাই avalanche effect — এক ফোঁটা রঙ পুরো পানি বদলে দেয়।</p>
<p class="scene-setting en">You send a document. The recipient wants assurance — it hasn't changed. How? You send a seal of the document — a hash. Every byte reflected in this seal. One byte changed — completely different seal. This is the avalanche effect — one drop of color changes all the water.</p>

<div class="dialogue"><strong>সিল-কারিগর হামজা:</strong> জাইনাব (Door ২) তোমাকে চাবি শেয়ার শিখিয়েছেন। কিন্তু চাবি ছাড়াও একটি প্রয়োজন — অখণ্ডতা। বার্তা পরিবর্তিত হয়নি কীভাবে নিশ্চিত হবে? SHA-256 — ২৫৬-বিট সিলমোহর। ইনপুট যাই হোক — ১ বাইট বা ১ টেরাবাইট — আউটপুট সর্বদা ৬৪ হেক্স অক্ষর। একমুখী — হ্যাশ থেকে ইনপুট ফেরানো যায় না। Collision-resistant — দুটি ভিন্ন ইনপুটে একই হ্যাশ প্রায় অসম্ভব। এটাই ডিজিটাল আঙুরের ছাপ।</div>
<div class="dialogue en"><strong>Seal Artisan Hamza:</strong> Zainab (Door 2) taught you key sharing. But beyond keys — integrity. How to ensure a message hasn't changed? SHA-256 — a 256-bit seal. Input can be 1 byte or 1 terabyte — output is always 64 hex characters. One-way — cannot reverse. Collision-resistant — two different inputs giving the same hash is nearly impossible.</div>

<div class="code-block">— Hash বাস্তবে দেখো —

  $ echo -n "hello" | sha256sum
  2cf24dba5fb0a30e26e83b2ac5b9e29e1b161e5c1fa7425e73043362938b9824

  $ echo -n "Hello" | sha256sum
  185f8db32271fe25f561a6fc938b2e264306ec304eda518007d1764826381969

  — একটি অক্ষর বদল (h→H) → সম্পূর্ণ ভিন্ন হ্যাশ! —
  — এটাই avalanche effect —

  # পাসওয়ার্ড হ্যাশ (কখনো plaintext সংরক্ষণ করো না!)
  $ python3 -c "import hashlib; print(hashlib.sha256(b'password123').hexdigest())"
  ef92b778bafe771e89245b89ecbc08a44a4e166c06659911881f383d4477e59f

  # বাস্তব পাসওয়ার্ড হ্যাশ: Argon2 (salt + memory-hard)
  $ pip install argon2-cffi
  $ python3 -c "
  from argon2 import PasswordHasher
  ph = PasswordHasher()
  hash = ph.hash('mypassword')
  print(hash)  # $argon2id$v=19$m=65536,t=3,p=4$...
  print(ph.verify(hash, 'mypassword'))  # True
  "</div>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>MD5 ভাঙা হয়েছে!</strong> MD5 collision পাওয়া গেছে (২০০৪, Wang)। SHA-1-ও দুর্বল (২০১৭ SHAttered)। শুধু SHA-256 বা তার উপরের ব্যবহার করো। পাসওয়ার্ডের জন্য SHA সরাসরি ব্যবহার করো না — Argon2 বা bcrypt ব্যবহার করো (salt + slow)।</div></div>

<div class="verse">خَتَمَ اللَّهُ عَلَى قُلُوبِهِمْ</div>
<div style="font-size:.85rem;color:var(--ink-dim);text-align:center;margin-bottom:1rem">"আল্লাহ তাদের হৃদয়ে মোহর দিয়েছেন।" — কুরআন ২:৭</div>

<p class="scene-setting">খাতিম — সিলমোহর। হ্যাশ ফাংশন সেই সিলমোহরের ডিজিটাল রূপ। প্রতিটি বার্তার একটি অদ্বিতীয় সিল। একবার সিল দিলে অপরিবর্তনীয় — এক বাইট বদলালে সিল ভিন্ন। অখণ্ডতার গ্যারান্টি। খাতিম — চিরস্থায়ী পরিচয়।</p>
<p class="scene-setting en">Khatim — seal. Hash functions are the digital form of that seal. Each message gets a unique seal. Once sealed, unchangeable — one byte changed, the seal differs. Guarantee of integrity. Khatim — eternal identity.</p>

<div class="callout tip"><span class="co-icon">🔗</span><div><strong>Book ৪৮ (Discrete Math) Door ৫ (Combinatorics):</strong> hash collision = birthday paradox! ২²⁵⁶ আউটপুট — collision প্রায় অসম্ভব। Book ৩৭ Door ৯ (TLS): সার্টিফিকেট fingerprint = SHA-256 hash।</div></div>

<div class="svg-diagram">
<svg viewBox="0 0 580 250" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto">
  <rect x="0" y="0" width="580" height="250" fill="#0f172a" rx="8"/>
  <text x="290" y="22" text-anchor="middle" fill="#fca5a5" font-size="13" font-weight="bold">Hash Avalanche: 1 Bit Changes Everything</text>
  <rect x="20" y="45" width="120" height="35" rx="4" fill="#450a0a" stroke="#f87171" stroke-width="1.5"/>
  <text x="80" y="67" text-anchor="middle" fill="#fca5a5" font-size="12" font-family="monospace">"hello"</text>
  <rect x="20" y="95" width="120" height="35" rx="4" fill="#450a0a" stroke="#f87171" stroke-width="1.5"/>
  <text x="80" y="117" text-anchor="middle" fill="#fca5a5" font-size="12" font-family="monospace">"Hello"</text>
  <text x="80" y="145" text-anchor="middle" fill="#fbbf24" font-size="9">only h changed to H</text>
  <rect x="190" y="55" width="120" height="70" rx="8" fill="#0c4a6e" stroke="#22d3ee" stroke-width="2"/>
  <text x="250" y="78" text-anchor="middle" fill="#7dd3fc" font-size="12" font-weight="bold">SHA-256</text>
  <text x="250" y="98" text-anchor="middle" fill="#7dd3fc" font-size="9">one-way function</text>
  <text x="250" y="114" text-anchor="middle" fill="#7dd3fc" font-size="9">fixed 256-bit output</text>
  <path d="M 140 62 L 190 80" stroke="#fca5a5" stroke-width="1.5" marker-end="url(#arrCr3a)"/>
  <path d="M 140 112 L 190 100" stroke="#fca5a5" stroke-width="1.5" marker-end="url(#arrCr3a)"/>
  <rect x="345" y="45" width="215" height="35" rx="4" fill="#052e16" stroke="#22c55e" stroke-width="1.5"/>
  <text x="452" y="67" text-anchor="middle" fill="#4ade80" font-size="9" font-family="monospace">2cf24dba5fb0a30e26e8...</text>
  <rect x="345" y="95" width="215" height="35" rx="4" fill="#052e16" stroke="#22c55e" stroke-width="1.5"/>
  <text x="452" y="117" text-anchor="middle" fill="#4ade80" font-size="9" font-family="monospace">185f8db32271fe25f561...</text>
  <path d="M 310 80 L 345 62" stroke="#7dd3fc" stroke-width="1.5" marker-end="url(#arrCr3b)"/>
  <path d="M 310 100 L 345 112" stroke="#7dd3fc" stroke-width="1.5" marker-end="url(#arrCr3b)"/>
  <text x="290" y="160" text-anchor="middle" fill="#c084fc" font-size="11" font-weight="bold">1 input bit change → ~50% output bits change</text>
  <rect x="40" y="175" width="130" height="55" rx="6" fill="#451a03" stroke="#fbbf24" stroke-width="1"/>
  <text x="105" y="194" text-anchor="middle" fill="#fcd34d" font-size="9" font-weight="bold">Properties:</text>
  <text x="105" y="210" text-anchor="middle" fill="#fcd34d" font-size="8">fixed length · one-way</text>
  <text x="105" y="223" text-anchor="middle" fill="#fcd34d" font-size="8">collision-resistant</text>
  <rect x="190" y="175" width="160" height="55" rx="6" fill="#450a0a" stroke="#fca5a5" stroke-width="1"/>
  <text x="270" y="194" text-anchor="middle" fill="#fca5a5" font-size="9" font-weight="bold">Uses:</text>
  <text x="270" y="210" text-anchor="middle" fill="#fca5a5" font-size="8">passwords · file integrity</text>
  <text x="270" y="223" text-anchor="middle" fill="#fca5a5" font-size="8">blockchain · Merkle trees</text>
  <rect x="370" y="175" width="170" height="55" rx="6" fill="#451a03" stroke="#fbbf24" stroke-width="1"/>
  <text x="455" y="194" text-anchor="middle" fill="#fcd34d" font-size="9" font-weight="bold">Broken (avoid):</text>
  <text x="455" y="210" text-anchor="middle" fill="#fca5a5" font-size="8">MD5 (2004) · SHA-1 (2017)</text>
  <text x="455" y="223" text-anchor="middle" fill="#4ade80" font-size="8">use Argon2/bcrypt for passwords</text>
  <defs>
    <marker id="arrCr3a" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><polygon points="0,0 8,4 0,8" fill="#fca5a5"/></marker>
    <marker id="arrCr3b" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><polygon points="0,0 8,4 0,8" fill="#7dd3fc"/></marker>
  </defs>
</svg>
</div>
<div class="svg-caption">আঙুরের ছাপ — SHA-256 একমুখী সিলমোহর। "hello" ও "Hello"-র হ্যাশ সম্পূর্ণ ভিন্ন — এক বিট বদলালে অর্ধেক বিট বদলে যায় (avalanche)। পাসওয়ার্ড, ফাইল যাচাই, ব্লকচেইন — সব এর উপর।</div>
<div class="secret-box">#️⃣ <strong>হ্যাশ = ডিজিটাল সিলমোহর। একমুখী। Avalanche।</strong> পাসওয়ার্ড, ফাইল যাচাই, ব্লকচেইন — সব এর উপর। কিন্তু সিল শুধু অখণ্ডতা দেয়। পরিচয় যাচাই কে দেবে? কেউ দাবি করলে — আমিই পাঠিয়েছি — তা কীভাবে প্রমাণ করবে? সেই উত্তর — পরের দরজায়।</div>`,
  senior: {
    title: "Hash Functions এক নজরে",
    body: `<table class="kv-table"><tr><th>ধারণা</th><th>বিবরণ</th></tr>
<tr><td class="hl">SHA-256</td><td>২৫৬-বিট হ্যাশ — ৬৪ হেক্স অক্ষর</td></tr>
<tr><td class="hl">Avalanche</td><td>১ বিট বদল → ৫০% বিট বদল</td></tr>
<tr><td class="hl">Pre-image</td><td>হ্যাশ থেকে ইনপুট ফেরানো অসম্ভব</td></tr>
<tr><td class="hl">Collision</td><td>দুটি ইনপুটে একই হ্যাশ — প্রায় অসম্ভব</td></tr>
<tr><td class="hl">MD5/SHA-1</td><td>ভাঙা হয়েছে — ব্যবহার করো না</td></tr>
<tr><td class="hl">Argon2/bcrypt</td><td>পাসওয়ার্ড হ্যাশ — salt + slow</td></tr>
<tr><td class="hl">Merkle Tree</td><td>হ্যাশের গাছ — ব্লকচেইনে ব্যবহৃত</td></tr></table>`
  }
});

doors.push({
  num: 4,
  icon: "🔑",
  color: "#dc2626",
  name: "পাসওয়ার্ডের কারিগর",
  subtitle: "The Password Craftsman",
  tech: "Password Hashing — bcrypt (Provos 1999), Argon2 (Biryukov 2015), salt, rainbow tables, PBKDF2, memory-hard",
  spirit: "আমান — নিরাপত্তা, দুর্বলকে শক্তিশালী করা",
  secret: "পাসওয়ার্ড কখনো plaintext সংরক্ষণ করো না। Hash + salt + slow = নিরাপদ। bcrypt/Argon2 = memory-hard — GPU দিয়েও ধীর।",
  recall: {
    q: " Salt কেন দরকার? bcrypt ও SHA-256-এর পার্থক্য কী?",
    qen: "Why is salt needed? What is the difference between bcrypt and SHA-256?",
    a: "Salt = এলোমেলো মান যা পাসওয়ার্ডে যোগ হয় — rainbow table আক্রমণ প্রতিরোধ। SHA-256 দ্রুত (আক্রমণকারীর জন্য ভালো)। bcrypt ধীর + memory-hard (আক্রমণকারীর জন্য খারাপ)।",
    aen: "Salt = random value added to password — prevents rainbow table attacks. SHA-256 is fast (good for attacker). bcrypt is slow + memory-hard (bad for attacker)."
  },
  story: `<p class="scene-setting">তুমি একটি ওয়েবসাইট বানালে। ইউজার পাসওয়ার্ড দিলো। তুমি কী করবে? যদি plaintext সংরক্ষণ করো — ডেটাবেস চুরি হলে সব পাসওয়ার্ড ফাঁস। LinkedIn ২০১২-এ এটাই করেছিল — ১৬৭ মিলিয়ন পাসওয়ার্ড ফাঁস। সমাধান? Hash করো। কিন্তু সাধারণ hash যথেষ্ট নয় — rainbow table দিয়ে ভাঙা যায়। Salt দরকার — প্রতিটি পাসওয়ার্ডে একটি অদ্বিতীয় এলোমেলো মান।</p>
<p class="scene-setting en">You build a website. Users enter passwords. What do you do? Store plaintext — database stolen, all passwords leaked. LinkedIn did this in 2012 — 167 million passwords leaked. Solution? Hash. But simple hash is not enough — rainbow tables break them. You need salt — a unique random value per password.</p>

<div class="dialogue"><strong>পাসওয়ার্ড-কারিগর সাফওয়ান:</strong> হামজা (Door ৩) তোমাকে hash শিখিয়েছেন। কিন্তু পাসওয়ার্ডে hash যথেষ্ট নয়। কেন? SHA-256 দ্রুত — আক্রমণকারী সেকেন্ডে বিলিয়ন বিলিয়ন অনুমান করতে পারে। bcrypt ধীর — ইচ্ছাকৃতভাবে। একটি পাসওয়ার্ড হ্যাশে ~১০০ms। আক্রমণকারীর জন্য দুঃসাধ্য। Argon2 আরও শক্তিশালী — memory-hard। GPU-তেও ধীর কারণ মেমরি দরকার।</div>
<div class="dialogue en"><strong>Password Artisan Safwan:</strong> Hamza (Door 3) taught you hashing. But hashing is not enough for passwords. Why? SHA-256 is fast — an attacker can guess billions per second. bcrypt is slow — intentionally. One password hash takes ~100ms. Hard for attackers. Argon2 is even stronger — memory-hard. Slow even on GPUs because it needs memory.</div>

<div class="code-block">— Python: পাসওয়ার্ড হ্যাশিং —

  # ❌ ভুল উপায় (plaintext বা SHA-256)
  import hashlib
  hash = hashlib.sha256(b"password123").hexdigest()
  # সমস্যা: দ্রুত, সবার জন্য একই, rainbow table আছে

  # ✅ সঠিক উপায়: bcrypt
  import bcrypt
  password = b"password123"
  salt = bcrypt.gensalt(rounds=12)     # cost factor
  hashed = bcrypt.hashpw(password, salt)
  print(hashed)
  # $2b$12$... (salt ভেতরে, cost=১২)

  # যাচাই:
  bcrypt.checkpw(b"password123", hashed)  # True
  bcrypt.checkpw(b"wrong", hashed)        # False

  # ✅✅ সেরা: Argon2 (memory-hard)
  from argon2 import PasswordHasher
  ph = PasswordHasher(
      time_cost=3,       # ৩ iterations
      memory_cost=65536, # ৬৪ MB RAM
      parallelism=4      # ৪ threads
  )
  hash = ph.hash("password123")
  ph.verify(hash, "password123")  # True

  — Django settings.py:
  PASSWORD_HASHERS = [
      'django.contrib.auth.hashers.Argon2PasswordHasher',
      'django.contrib.auth.hashers.BCryptSHA256PasswordHasher',
  ]</div>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>Rainbow Table আক্রমণ:</strong> আক্রমণকারী পূর্বে লাখ লাখ সাধারণ পাসওয়ার্ডের hash হিসাব করে রাখে। "password123" → hash সবার জন্য একই। Salt এটা ভাঙে — প্রতিটি পাসওয়ার্ডে ভিন্ন salt → ভিন্ন hash → rainbow table কাজ করে না।</div></div>

<div class="verse">وَخُذُوا حِذْرَكُمْ</div>
<div style="font-size:.85rem;color:var(--ink-dim);text-align:center;margin-bottom:1rem">"এবং তোমরা তোমাদের সতর্কতা গ্রহণ করো।" — কুরআন ৪:৭১</div>

<p class="scene-setting">আমান — নিরাপত্তা। পাসওয়ার্ড হ্যাশিং সেই নিরাপত্তার গাণিতিক রূপ। দুর্বল পাসওয়ার্ডকে শক্তিশালী hash-এ রূপান্তর। Salt — অতিরিক্ত সুরক্ষা। ধীর হ্যাশ — আক্রমণকারীর সময় নষ্ট। আল্লাহ সতর্কতার নির্দেশ দিয়েছেন — পাসওয়ার্ড হ্যাশিং সেই সতর্কতার প্রযুক্তিগত রূপ।</p>
<p class="scene-setting en">Aman — security. Password hashing is the mathematical form of that security. Transforming weak passwords into strong hashes. Salt — additional protection. Slow hash — wasting attacker's time. Allah commands vigilance — password hashing is the technical form of that vigilance.</p>

<div class="callout tip"><span class="co-icon">🔗</span><div><strong>Book ৪০ (Software Engineering) Door ৮ (Security):</strong> OWASP Top 10-এ broken authentication আছে — পাসওয়ার্ড হ্যাশিং ছাড়া। Django auth = PBKDF2 default। এখন তুমি জানো কেন Argon2 সেরা।</div></div>

<div class="svg-diagram">
<svg viewBox="0 0 580 250" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto">
  <rect x="0" y="0" width="580" height="250" fill="#0f172a" rx="8"/>
  <text x="290" y="22" text-anchor="middle" fill="#fca5a5" font-size="13" font-weight="bold">Password Hashing: Why Salt + Slow Matters</text>
  <rect x="20" y="45" width="110" height="35" rx="4" fill="#450a0a" stroke="#f87171" stroke-width="1.5"/>
  <text x="75" y="67" text-anchor="middle" fill="#fca5a5" font-size="11" font-family="monospace">"password123"</text>
  <rect x="20" y="90" width="110" height="28" rx="4" fill="#0c4a6e" stroke="#22d3ee" stroke-width="1"/>
  <text x="75" y="108" text-anchor="middle" fill="#7dd3fc" font-size="10">+ random salt</text>
  <path d="M 130 70 L 175 70" stroke="#fca5a5" stroke-width="1.5" marker-end="url(#arrCr4a)"/>
  <rect x="180" y="40" width="220" height="80" rx="8" fill="#7f1d1d" stroke="#f87171" stroke-width="2"/>
  <text x="290" y="62" text-anchor="middle" fill="#fca5a5" font-size="11" font-weight="bold">Hash Function</text>
  <text x="290" y="82" text-anchor="middle" fill="#fca5a5" font-size="9">SHA-256: FAST (bad for passwords)</text>
  <text x="290" y="98" text-anchor="middle" fill="#4ade80" font-size="9">bcrypt: ~100ms (good)</text>
  <text x="290" y="114" text-anchor="middle" fill="#4ade80" font-size="9">Argon2: memory-hard (best)</text>
  <rect x="430" y="45" width="130" height="35" rx="4" fill="#052e16" stroke="#22c55e" stroke-width="1.5"/>
  <text x="495" y="60" text-anchor="middle" fill="#4ade80" font-size="8" font-family="monospace">$2b$12$N9qo8uLO</text>
  <text x="495" y="73" text-anchor="middle" fill="#4ade80" font-size="8" font-family="monospace">ickgxAlCZ2... (stored)</text>
  <path d="M 400 70 L 430 70" stroke="#7dd3fc" stroke-width="1.5" marker-end="url(#arrCr4b)"/>
  <rect x="20" y="145" width="170" height="85" rx="6" fill="#450a0a" stroke="#fca5a5" stroke-width="1.5"/>
  <text x="105" y="165" text-anchor="middle" fill="#fca5a5" font-size="10" font-weight="bold">❌ Without salt</text>
  <text x="105" y="183" text-anchor="middle" fill="#fca5a5" font-size="8">same password →</text>
  <text x="105" y="196" text-anchor="middle" fill="#fca5a5" font-size="8">same hash for everyone</text>
  <text x="105" y="212" text-anchor="middle" fill="#fbbf24" font-size="8">→ rainbow table attack</text>
  <text x="105" y="225" text-anchor="middle" fill="#fbbf24" font-size="8">  (LinkedIn 2012: 167M leaked)</text>
  <rect x="210" y="145" width="170" height="85" rx="6" fill="#052e16" stroke="#22c55e" stroke-width="1.5"/>
  <text x="295" y="165" text-anchor="middle" fill="#4ade80" font-size="10" font-weight="bold">✅ With salt + slow</text>
  <text x="295" y="183" text-anchor="middle" fill="#4ade80" font-size="8">unique salt per password</text>
  <text x="295" y="196" text-anchor="middle" fill="#4ade80" font-size="8">→ different hash each time</text>
  <text x="295" y="212" text-anchor="middle" fill="#7dd3fc" font-size="8">slow function wastes</text>
  <text x="295" y="225" text-anchor="middle" fill="#7dd3fc" font-size="8">attacker's GPU time</text>
  <rect x="400" y="145" width="160" height="85" rx="6" fill="#451a03" stroke="#fbbf24" stroke-width="1.5"/>
  <text x="480" y="165" text-anchor="middle" fill="#fcd34d" font-size="10" font-weight="bold">Speed comparison</text>
  <text x="480" y="183" text-anchor="middle" fill="#fca5a5" font-size="8">SHA-256: 100M/s</text>
  <text x="480" y="196" text-anchor="middle" fill="#fbbf24" font-size="8">bcrypt: ~10/s</text>
  <text x="480" y="209" text-anchor="middle" fill="#4ade80" font-size="8">Argon2: ~5/s (memory)</text>
  <text x="480" y="225" text-anchor="middle" fill="#c084fc" font-size="8">attacker wants fast ❌</text>
  <defs>
    <marker id="arrCr4a" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><polygon points="0,0 8,4 0,8" fill="#fca5a5"/></marker>
    <marker id="arrCr4b" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><polygon points="0,0 8,4 0,8" fill="#7dd3fc"/></marker>
  </defs>
</svg>
</div>
<div class="svg-caption">পাসওয়ার্ডের কারিগর — plaintext বা সাধারণ SHA-256 নয়। Salt দিয়ে প্রতিটি পাসওয়ার্ড অদ্বিতীয় করো, ধীর হ্যাশ (bcrypt/Argon2) দিয়ে আক্রমণকারীর সময় নষ্ট করো।</div>
<div class="secret-box">🔑 <strong>পাসওয়ার্ড = hash + salt + slow।</strong> Plaintext নয়, SHA-256 নয়। bcrypt বা Argon2। এখন তুমি জানো এনক্রিপশন, চাবি আদান, হ্যাশ, পাসওয়ার্ড। কিন্তু সব মিলিয়ে — একটি সার্ভার কীভাবে প্রমাণ করবে সে যে সে? সেই সত্যতা — পরের দরজায়।</div>`,
  senior: {
    title: "Password Hashing এক নজরে",
    body: `<table class="kv-table"><tr><th>ধারণা</th><th>বিবরণ</th></tr>
<tr><td class="hl">bcrypt (1999)</td><td>ধীর hash — cost factor (rounds)</td></tr>
<tr><td class="hl">Argon2 (2015)</td><td>Memory-hard — GPU প্রতিরোধ</td></tr>
<tr><td class="hl">Salt</td><td>এলোমেলো মান — rainbow table প্রতিরোধ</td></tr>
<tr><td class="hl">PBKDF2</td><td>পুরোনো কিন্তু গ্রহণযোগ্য</td></tr>
<tr><td class="hl">Rainbow Table</td><td>পূর্ব-হিসাবকৃত hash টেবিল</td></tr>
<tr><td class="hl">❌ Plaintext</td><td>কখনো নয়!</td></tr>
<tr><td class="hl">❌ SHA-256</td><td>দ্রুত — আক্রমণকারীর জন্য ভালো</td></tr></table>`
  }
});

doors.push({
  num: 5,
  icon: "📜",
  color: "#dc2626",
  name: "পরিচয়ের দলিল",
  subtitle: "The Certificate of Identity",
  tech: "Public Key Infrastructure (PKI) — Certificates, Certificate Authority (CA), X.509, Let's Encrypt, chain of trust",
  spirit: "শাহাদাহ — সাক্ষ্য, পরিচয়ের প্রমাণ",
  secret: "সার্টিফিকেট = পরিচয় পত্র। CA (Certificate Authority) সেই পরিচয় যাচাই করে। ব্রাউজারে ১০০+ CA-এর root সার্টিফিকেট আগে থেকে আছে। Let's Encrypt = বিনামূল্যে সার্টিফিকেট।",
  recall: {
    q: " Certificate Authority (CA) কী? Chain of Trust কীভাবে কাজ করে?",
    qen: "What is a Certificate Authority? How does the chain of trust work?",
    a: "CA = বিশ্বস্ত তৃতীয় পক্ষ যে সার্ভারের পরিচয় যাচাই করে। ব্রাউজার → root CA → intermediate CA → সার্ভার সার্টিফিকেট। প্রতিটি ধাপে স্বাক্ষর।",
    aen: "CA = trusted third party that verifies server identity. Browser → root CA → intermediate CA → server certificate. Each step signed."
  },
  story: `<p class="scene-setting">তুমি google.com-এ গেলে। কীভাবে জানবে এটি সত্যিই গুগল — কেউ নকল করেনি? উত্তর: সার্টিফিকেট। গুগলের সার্টিফিকেট একটি CA দিয়েছে — যাকে তোমার ব্রাউজার বিশ্বাস করে। CA বলে — হ্যাঁ, এই public key সত্যিই google.com-এর। এটাই শাহাদাহ — পরিচয়ের সাক্ষ্য। ব্রাউজারে ১০০+ CA-এর root সার্টিফিকেট পূর্ব-ইনস্টলড।</p>
<p class="scene-setting en">You visit google.com. How do you know it's really Google — not a fake? Answer: certificate. Google's certificate is issued by a CA — trusted by your browser. The CA says — yes, this public key belongs to google.com. This is shahadah — testimony of identity. 100+ CA root certificates pre-installed in browsers.</p>

<div class="dialogue"><strong>দলিল-রক্ষক ইমরান:</strong> সাফওয়ান (Door ৪) তোমাকে পাসওয়ার্ড শিখিয়েছেন। কিন্তু পাসওয়ার্ড শুধু ইউজারের। সার্ভারের পরিচয় কে যাচাই করবে? উত্তর: CA। Let's Encrypt (২০১৫) বিনামূল্যে সার্টিফিকেট দেয় — certbot দিয়ে। সার্টিফিকেটে থাকে: ডোমেইন নাম, public key, মেয়াদ, CA স্বাক্ষর। মেয়াদ শেষ হলে HTTPS ভাঙে — "Your connection is not private"।</div>
<div class="dialogue en"><strong>Document Keeper Imran:</strong> Safwan (Door 4) taught you passwords. But passwords are for users. Who verifies the server's identity? Answer: CA. Let's Encrypt (2015) gives free certificates — via certbot. Certificate contains: domain name, public key, expiry, CA signature. Expired = HTTPS breaks — "Your connection is not private."</div>

<div class="code-block">— OpenSSL: সার্টিফিকেট পরীক্ষা —

  # সার্ভারের সার্টিফিকেট দেখো
  $ openssl s_client -connect google.com:443 -servername google.com

  Certificate chain
   0 s:CN = *.google.com            ← কার সার্টিফিকেট?
     i:CN = GTS CA 1C3              ← কে দিয়েছে?
   1 s:CN = GTS CA 1C3              ← intermediate CA
     i:CN = GTS Root R1             ← root CA

  # সার্টিফিকেটের বিস্তারিত:
  $ openssl x509 -in cert.pem -text -noout

  Subject: CN=*.google.com
  Issuer:  CN=GTS CA 1C3
  Not Before: Jul 14, 2026          ← শুরু
  Not After:  Sep 6, 2026           ← শেষ (৯০ দিন)

  — Let's Encrypt দিয়ে বিনামূল্যে সার্টিফিকেট:
  $ sudo certbot certonly --nginx -d example.com
  $ sudo certbot renew              ← স্বয়ংক্রিয় রিনিউ</div>

<div class="callout info"><span class="co-icon">📜</span><div><strong>Chain of Trust:</strong><br>
তোমার ব্রাউজার → root CA (পূর্ব-ইনস্টলড) → intermediate CA → সার্ভার সার্টিফিকেট। প্রতিটি ধাপে ডিজিটাল স্বাক্ষর। কোনো ধাপ ভাঙলে পুরো শৃঙ্খল অবিশ্বাস্য। এটাই trust — শাহাদাহ-র ডিজিটাল রূপ।</div></div>

<div class="verse">يَا أَيُّهَا الَّذِينَ آمَنُوا إِن جَاءَكُمْ فَاسِقٌ بِنَبَإٍ فَتَبَيَّنُوا</div>
<div style="font-size:.85rem;color:var(--ink-dim);text-align:center;margin-bottom:1rem">"হে মুমিনরা, যদি তোমাদের কাছে কোনো পাপাচারী সংবাদ নিয়ে আসে, তবে যাচাই করে নাও।" — কুরআন ৪৯:৬</div>

<p class="scene-setting">"তাবাইয়ানু" — যাচাই করো। সার্টিফিকেট সেই যাচাইয়ের ডিজিটাল রূপ। ব্রাউজার যাচাই করে — এই সার্ভার সত্যিই যে বলে তাই কি? CA সেই যাচাইয়ের সাক্ষী। শাহাদাহ — সাক্ষ্য। প্রতিটি HTTPS সংযোগ একটি যাচাইয়ের শৃঙ্খল।</p>
<p class="scene-setting en">"Tabayyanu" — verify. Certificates are the digital form of that verification. The browser checks — is this server truly what it claims? The CA is the witness to that verification. Shahadah — testimony. Every HTTPS connection is a chain of verification.</p>

<div class="callout tip"><span class="co-icon">🔗</span><div><strong>Book ৩৭ (Networks) Door ৯ (TLS):</strong> TLS handshake-এ সার্টিফিকেট যাচাই হয়। Book ৪৬ (Cryptography) Door ১: RSA = সার্টিফিকেট স্বাক্ষরের ভিত্তি।</div></div>

<div class="svg-diagram">
<svg viewBox="0 0 580 250" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto">
  <rect x="0" y="0" width="580" height="250" fill="#0f172a" rx="8"/>
  <text x="290" y="22" text-anchor="middle" fill="#fca5a5" font-size="13" font-weight="bold">Chain of Trust: Browser → Root CA → Server</text>
  <rect x="20" y="50" width="110" height="65" rx="8" fill="#0c4a6e" stroke="#22d3ee" stroke-width="2"/>
  <text x="75" y="70" text-anchor="middle" fill="#7dd3fc" font-size="11" font-weight="bold">Browser</text>
  <text x="75" y="88" text-anchor="middle" fill="#7dd3fc" font-size="9">100+ root CAs</text>
  <text x="75" y="103" text-anchor="middle" fill="#7dd3fc" font-size="8">pre-installed</text>
  <rect x="180" y="50" width="110" height="65" rx="8" fill="#451a03" stroke="#fbbf24" stroke-width="2"/>
  <text x="235" y="70" text-anchor="middle" fill="#fcd34d" font-size="11" font-weight="bold">Root CA</text>
  <text x="235" y="88" text-anchor="middle" fill="#fcd34d" font-size="9">self-signed</text>
  <text x="235" y="103" text-anchor="middle" fill="#fcd34d" font-size="8">trust anchor</text>
  <rect x="340" y="50" width="110" height="65" rx="8" fill="#451a03" stroke="#fbbf24" stroke-width="2"/>
  <text x="395" y="70" text-anchor="middle" fill="#fcd34d" font-size="11" font-weight="bold">Intermediate</text>
  <text x="395" y="88" text-anchor="middle" fill="#fcd34d" font-size="9">CA (signed by root)</text>
  <text x="395" y="103" text-anchor="middle" fill="#fcd34d" font-size="8">isolates risk</text>
  <path d="M 130 75 L 180 75" stroke="#7dd3fc" stroke-width="2" marker-end="url(#arrCr5a)"/>
  <path d="M 290 75 L 340 75" stroke="#fcd34d" stroke-width="2" marker-end="url(#arrCr5b)"/>
  <path d="M 450 75 L 500 75" stroke="#fcd34d" stroke-width="2" marker-end="url(#arrCr5b)"/>
  <rect x="500" y="50" width="60" height="65" rx="8" fill="#450a0a" stroke="#f87171" stroke-width="2"/>
  <text x="530" y="75" text-anchor="middle" fill="#fca5a5" font-size="10" font-weight="bold">Server</text>
  <text x="530" y="93" text-anchor="middle" fill="#fca5a5" font-size="8">domain</text>
  <text x="530" y="105" text-anchor="middle" fill="#fca5a5" font-size="8">+ pubkey</text>
  <rect x="20" y="135" width="540" height="50" rx="6" fill="#7f1d1d" stroke="#f87171" stroke-width="1"/>
  <text x="290" y="155" text-anchor="middle" fill="#fca5a5" font-size="10" font-weight="bold">Certificate Contents (X.509)</text>
  <text x="290" y="172" text-anchor="middle" fill="#fca5a5" font-size="9">domain name · public key · expiry date · CA signature · issuer</text>
  <rect x="40" y="200" width="220" height="40" rx="6" fill="#052e16" stroke="#22c55e" stroke-width="1.5"/>
  <text x="150" y="218" text-anchor="middle" fill="#4ade80" font-size="10" font-weight="bold">Let's Encrypt (2015)</text>
  <text x="150" y="232" text-anchor="middle" fill="#4ade80" font-size="9">free certs · certbot · auto-renew</text>
  <rect x="320" y="200" width="220" height="40" rx="6" fill="#451a03" stroke="#fbbf24" stroke-width="1.5"/>
  <text x="430" y="218" text-anchor="middle" fill="#fcd34d" font-size="10" font-weight="bold">Validity: usually 90 days</text>
  <text x="430" y="232" text-anchor="middle" fill="#fbbf24" font-size="9">expired → "connection not private"</text>
  <defs>
    <marker id="arrCr5a" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><polygon points="0,0 8,4 0,8" fill="#7dd3fc"/></marker>
    <marker id="arrCr5b" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><polygon points="0,0 8,4 0,8" fill="#fcd34d"/></marker>
  </defs>
</svg>
</div>
<div class="svg-caption">পরিচয়ের দলিল — ব্রাউজার → root CA → intermediate CA → সার্ভার। প্রতিটি ধাপে ডিজিটাল স্বাক্ষর। মেয়াদ শেষ হলে HTTPS ভাঙে। Let's Encrypt বিনামূল্যে সার্টিফিকেট দেয়।</div>
<div class="secret-box">📜 <strong>সার্টিফিকেট = পরিচয়ের দলিল।</strong> CA যাচাই করে। শৃঙ্খলের প্রতিটি ধাপ স্বাক্ষরিত। মেয়াদ শেষে রিনিউ করো। এখন পাঁচটি দরজা পেরিয়েছো — এনক্রিপশন, চাবি আদান, হ্যাশ, পাসওয়ার্ড, সার্টিফিকেট। পরের অধ্যায়ে — TLS handshake, JWT, OWASP, ও জিরো ট্রাস্ট।</div>`,
  senior: {
    title: "PKI & Certificates এক নজরে",
    body: `<table class="kv-table"><tr><th>ধারণা</th><th>বিবরণ</th></tr>
<tr><td class="hl">CA</td><td>Certificate Authority — বিশ্বস্ত তৃতীয় পক্ষ</td></tr>
<tr><td class="hl">X.509</td><td>সার্টিফিকেট ফরম্যাট স্ট্যান্ডার্ড</td></tr>
<tr><td class="hl">Chain of Trust</td><td>Root → Intermediate → Server</td></tr>
<tr><td class="hl">Let's Encrypt (2015)</td><td>বিনামূল্যে সার্টিফিকেট — certbot</td></tr>
<tr><td class="hl">Validity</td><td>সাধারণত ৯০ দিন — রিনিউ দরকার</td></tr>
<tr><td class="hl">Self-signed</td><td>নিজে নিজেকে স্বাক্ষর — dev only</td></tr></table>`
  }
});
