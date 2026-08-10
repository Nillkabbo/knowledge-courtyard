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

<div class="code-block"># ── STEP 1: What is encryption? ──
# ENCRYPTION: scramble data so only authorized people can read it.
# DECRYPTION: unscramble it back to original.

# PLAINTEXT → [ENCRYPT with key] → CIPHERTEXT → [DECRYPT with key] → PLAINTEXT

# TWO TYPES OF ENCRYPTION:
encryption_types = {
    "Symmetric": {
        "how": "Same key for encrypt AND decrypt",
        "example": "AES (Advanced Encryption Standard)",
        "speed": "Very fast (~978 GB/s)",
        "problem": "How to share the key securely?",
    },
    "Asymmetric": {
        "how": "Public key encrypts, private key decrypts",
        "example": "RSA (Rivest-Shamir-Adleman)",
        "speed": "Slow (~1000 signs/sec)",
        "problem": "Too slow for large data",
    },
}

print("ENCRYPTION TYPES:")
for etype, info in encryption_types.items():
    print(f"\n  {etype}:")
    for key, value in info.items():
        print(f"    {key}: {value}")

# THE HYBRID APPROACH (used by TLS/HTTPS):
# 1. Use ASYMMETRIC (RSA) to securely share a SYMMETRIC key (AES)
# 2. Use SYMMETRIC (AES) for all actual data transfer (fast!)
# Best of both worlds: secure key exchange + fast data transfer.</div>

<div class="code-block"># ── STEP 2: Symmetric encryption with AES ──
# AES is the STANDARD symmetric encryption (used by HTTPS, VPNs, militaries).

from cryptography.fernet import Fernet
import os

# Generate a key:
key = Fernet.generate_key()
print(f"Key: {key.decode()}")

# Create cipher:
cipher = Fernet(key)

# Encrypt:
message = "This is a secret message"
encrypted = cipher.encrypt(message.encode())
print(f"Encrypted: {encrypted}")

# Decrypt:
decrypted = cipher.decrypt(encrypted).decode()
print(f"Decrypted: {decrypted}")  # "This is a secret message"

# OPENSSL EQUIVALENT:
openssl_cmds = """
# AES-256 encryption:
$ openssl enc -aes-256-cbc -salt -in secret.txt -out secret.enc
# enter aes-256-cbc password: ********

# AES-256 decryption:
$ openssl enc -aes-256-cbc -d -in secret.enc -out secret.txt
"""

print(openssl_cmds)

# AES KEY SIZES:
# AES-128: 128-bit key (secure, fast)
# AES-256: 256-bit key (very secure, slightly slower)
# Both are unbreakable with current technology.

# AES MODES:
# CBC (Cipher Block Chaining): each block depends on previous (secure)
# GCM (Galois/Counter Mode): parallel processing + authentication (best)</div>

<div class="code-block"># ── STEP 3: Asymmetric encryption with RSA ──
# RSA uses TWO keys: PUBLIC (share with everyone) and PRIVATE (keep secret).

from cryptography.hazmat.primitives.asymmetric import rsa, padding
from cryptography.hazmat.primitives import hashes

# Generate key pair:
private_key = rsa.generate_private_key(public_exponent=65537, key_size=2048)
public_key = private_key.public_key()

# ENCRYPT with PUBLIC key (anyone can encrypt):
message = b"Secret message for the key owner"
ciphertext = public_key.encrypt(
    message,
    padding.OAEP(
        mgf=padding.MGF1(algorithm=hashes.SHA256()),
        algorithm=hashes.SHA256(),
        label=None
    )
)
print(f"Encrypted: {ciphertext.hex()[:60]}...")

# DECRYPT with PRIVATE key (only owner can decrypt):
plaintext = private_key.decrypt(
    ciphertext,
    padding.OAEP(
        mgf=padding.MGF1(algorithm=hashes.SHA256()),
        algorithm=hashes.SHA256(),
        label=None
    )
)
print(f"Decrypted: {plaintext.decode()}")

# OPENSSL EQUIVALENT:
openssl_rsa = """
# Generate RSA key pair:
$ openssl genrsa -out private.pem 2048
$ openssl rsa -in private.pem -pubout -out public.pem

# Encrypt with public key:
$ openssl rsautl -encrypt -pubin -inkey public.pem \\
    -in message.txt -out message.enc

# Decrypt with private key:
$ openssl rsautl -decrypt -inkey private.pem \\
    -in message.enc -out message.txt
"""

print(openssl_rsa)

# WHY RSA IS SLOW:
# RSA uses huge numbers (2048-bit). Each operation involves
# modular exponentiation with numbers hundreds of digits long.
# That's why we only use RSA for small data (like AES keys).</div>

<div class="code-block"># ── STEP 4: Digital signatures ──
# Signatures prove WHO sent a message and that it WASN'T MODIFIED.
# It's the ENCRYPT → DECRYPT in reverse!

from cryptography.hazmat.primitives.asymmetric import rsa, padding
from cryptography.hazmat.primitives import hashes

# Generate key pair:
private_key = rsa.generate_private_key(public_exponent=65537, key_size=2048)
public_key = private_key.public_key()

# SIGN with PRIVATE key (only owner can sign):
message = b"Important contract"
signature = private_key.sign(
    message,
    padding.PSS(
        mgf=padding.MGF1(hashes.SHA256()),
        salt_length=padding.PSS.MAX_LENGTH
    ),
    hashes.SHA256()
)
print(f"Signature: {signature.hex()[:60]}...")

# VERIFY with PUBLIC key (anyone can verify):
try:
    public_key.verify(
        signature,
        message,
        padding.PSS(
            mgf=padding.MGF1(hashes.SHA256()),
            salt_length=padding.PSS.MAX_LENGTH
        ),
        hashes.SHA256()
    )
    print("✅ Signature is VALID — message is authentic")
except Exception:
    print("❌ Signature is INVALID — message was tampered!")

# SIGNATURE vs ENCRYPTION:
# Encryption: encrypt with PUBLIC, decrypt with PRIVATE (confidentiality)
# Signature: sign with PRIVATE, verify with PUBLIC (authenticity)

# REAL-WORLD USES:
uses = [
    "HTTPS certificates (prove website identity)",
    "Git commits (prove who wrote the code)",
    "Software updates (prove the download is authentic)",
    "Email (PGP/SMIME)",
    "Blockchain transactions",
]

print("\nDIGITAL SIGNATURE USES:")
for use in uses:
    print(f"  {use}")</div>

<div class="code-block"># ── STEP 5: Diffie-Hellman key exchange ──
# How do two strangers agree on a SHARED SECRET over an INSECURE channel?

# Alice and Bob want to share a key.
# Eve is listening to everything they say.
# They use Diffie-Hellman to create a shared secret Eve can't figure out.

# SIMPLIFIED EXAMPLE (real DH uses huge numbers):
small_example = """
PUBLIC (everyone knows):
  p = 23 (prime number)
  g = 5 (generator)

Alice picks secret: a = 6
  Alice computes: A = g^a mod p = 5^6 mod 23 = 8
  Alice sends A = 8 to Bob (public)

Bob picks secret: b = 15
  Bob computes: B = g^b mod p = 5^15 mod 23 = 19
  Bob sends B = 19 to Alice (public)

SHARED SECRET (computed independently):
  Alice: S = B^a mod p = 19^6 mod 23 = 2
  Bob:   S = A^b mod p = 8^15 mod 23 = 2

Both have S = 2, but Eve only knows A=8 and B=19.
Eve can't compute S without knowing a or b!
"""

print(small_example)

# THE MATH BEHIND IT:
# g^(ab) mod p = g^(ba) mod p (commutative property)
# This is the foundation of secure key exchange.

# In practice, p is a 2048-bit prime. The discrete logarithm problem
# (finding a from g^a mod p) is computationally infeasible.</div>

<div class="code-block"># ── STEP 6: Real-world encryption systems ──
# HOW ENCRYPTION IS USED IN PRACTICE:

# 1. HTTPS/TLS (web browsing):
tls_flow = """
Your browser → Server
1. Server sends certificate (public key, signed by CA)
2. Browser verifies certificate (trusts CA)
3. Key exchange (RSA or ECDH) → shared AES key
4. All traffic encrypted with AES (fast!)
You → HTTPS → Server (encrypted, authenticated)
"""

print("HTTPS/TLS:")
print(tls_flow)

# 2. END-TO-END ENCRYPTION (WhatsApp, Signal):
e2ee = """
1. Each user has a key pair generated on their device
2. Messages encrypted on SENDER's device
3. Only RECIPIENT's device can decrypt
4. Server NEVER sees plaintext (can't decrypt even if subpoenaed)
5. Forward secrecy: new key per message (past messages safe if key leaks)
"""

print("\nEnd-to-End Encryption (WhatsApp/Signal):")
print(e2ee)

# 3. VPN (Virtual Private Network):
vpn = """
Your device → VPN server → Internet
1. Encrypted tunnel (AES-256) between device and VPN
2. ISP can't see what you're browsing (only encrypted traffic)
3. VPN server decrypts and forwards to internet
"""

# ENCRYPTION BEST PRACTICES:
best_practices = [
    "Never roll your own crypto (use established libraries)",
    "Use AES-256 for data encryption",
    "Use RSA-2048+ or Ed25519 for signatures",
    "Use TLS 1.3 for network communication",
    "Rotate keys periodically",
    "Store keys securely (HSM, KMS, not in source code)",
    "Use HTTPS Everywhere (HSTS header)",
    "Encrypt data at rest AND in transit",
    "Hash passwords with bcrypt/argon2 (never MD5/SHA1 for passwords)",
    "Use salt for password hashing",
]

print("ENCRYPTION BEST PRACTICES:")
for practice in best_practices:
    print(f"  ☐ {practice}")

# THE GOLDEN RULE:
# "Don't implement crypto yourself. Use vetted libraries."
# Cryptography is mathematically complex. Tiny implementation errors
# can make your encryption completely insecure.
# Use: Python cryptography, OpenSSL, libsodium — proven, audited, trusted.</div>

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

<div class="code-block"># ── STEP 1: Diffie-Hellman key exchange ──
# How two people create a SHARED SECRET over an INSECURE channel.

# THE SETUP:
p = 23   # public prime (in reality, 2048+ bits)
g = 5    # public generator

# Alice picks a secret number:
a = 6                        # PRIVATE (only Alice knows)
A = pow(g, a, p)             # PUBLIC: A = g^a mod p = 8
print(f"Alice's public value: {A}")

# Bob picks a secret number:
b = 15                       # PRIVATE (only Bob knows)
B = pow(g, b, p)             # PUBLIC: B = g^b mod p = 19
print(f"Bob's public value: {B}")

# They exchange A and B publicly.
# Eve (the eavesdropper) sees: p=23, g=5, A=8, B=19</div>

<div class="code-block"># ── STEP 2: Computing the shared secret ──
# Now each side computes the SAME secret independently:

# Alice uses Bob's public value + her private:
alice_secret = pow(B, a, p)  # B^a mod p
print(f"Alice's computed secret: {alice_secret}")  # 2

# Bob uses Alice's public value + his private:
bob_secret = pow(A, b, p)    # A^b mod p
print(f"Bob's computed secret: {bob_secret}")      # 2

# BOTH GET THE SAME SECRET!
print(f"Secrets match: {alice_secret == bob_secret}")  # True ✅

# WHY IT WORKS (mathematically):
# Alice computes: B^a = (g^b)^a = g^(ba) mod p
# Bob computes:   A^b = (g^a)^b = g^(ab) mod p
# Since ba = ab (multiplication is commutative), they get the same result!</div>

<div class="code-block"># ── STEP 3: Why Eve can't figure out the secret ──
# Eve knows: p=23, g=5, A=8, B=19
# Eve needs: a or b to compute the secret

# To find a: solve g^a ≡ A (mod p) → 5^a ≡ 8 (mod 23)
# This is the DISCRETE LOGARITHM PROBLEM.

# Brute force for small p=23:
for guess in range(1, 23):
    if pow(5, guess, 23) == 8:
        print(f"Eve found a = {guess}")
        break
# Easy for p=23, but...

# IN REALITY: p is a 2048-bit prime (600+ digits)
# Number of possibilities: ~2^2048
# Even with all computers on Earth: ~10^30 years to brute force
# The discrete logarithm problem is believed to be intractable

# CLASSICAL vs QUANTUM:
# Classical computers: can't solve (too slow)
# Quantum computers: Shor's algorithm can solve (in theory)
# This is WHY post-quantum crypto exists (lattice-based)</div>

<div class="code-block"># ── STEP 4: Elliptic Curve Diffie-Hellman (ECDH) ──
# Modern systems use ELLIPTIC CURVES instead of modular arithmetic.

# ECC advantages:
# - Same security with MUCH smaller keys
# - Faster computations
# - Less bandwidth

comparison = {
    "RSA/DH (classical)": {
        "security_128bit": "3072-bit key",
        "security_256bit": "15360-bit key",
        "speed": "Slower (huge numbers)",
    },
    "ECC (elliptic curve)": {
        "security_128bit": "256-bit key",
        "security_256bit": "512-bit key",
        "speed": "Faster (smaller numbers)",
    },
}

print("RSA/DH vs ECC:")
for algo, info in comparison.items():
    print(f"\n  {algo}:")
    for key, value in info.items():
        print(f"    {key}: {value}")

# 256-bit ECC = 3072-bit RSA security! 12x smaller keys!

# PYTHON ECDH:
ecdh_code = """
from cryptography.hazmat.primitives.asymmetric import ec

# Generate key pairs on curve:
alice_private = ec.generate_private_key(ec.SECP256R1())
alice_public = alice_private.public_key()

bob_private = ec.generate_private_key(ec.SECP256R1())
bob_public = bob_private.public_key()

# Exchange public keys and compute shared secret:
alice_shared = alice_private.exchange(ec.ECDH(), bob_public)
bob_shared = bob_private.exchange(ec.ECDH(), alice_public)

print(f"Secrets match: {alice_shared == bob_shared}")  # True!
"""

print("PYTHON ECDH:")
print(ecdh_code)</div>

<div class="code-block"># ── STEP 5: Forward secrecy ──
# What if someone records ALL encrypted traffic today,
# and steals the private key TOMORROW?

# WITHOUT forward secrecy:
# If RSA key is stolen → ALL past sessions can be decrypted!
# "Harvest now, decrypt later" attack.

# WITH forward secrecy (ephemeral DH):
# Each session uses TEMPORARY keys (ephemeral)
# Even if long-term key is stolen, past sessions remain secure

# HOW FORWARD SECRECY WORKS:
forward_secrecy = """
Session 1: ephemeral keys a1, b1 → shared secret S1 → discarded
Session 2: ephemeral keys a2, b2 → shared secret S2 → discarded
Session 3: ephemeral keys a3, b3 → shared secret S3 → discarded

If attacker steals long-term private key:
  → Can impersonate in future (MITM)
  → CANNOT decrypt past sessions (a1,b1 were deleted!)
"""

print(forward_secrecy)

# TLS 1.3 REQUIRES forward secrecy:
# TLS 1.2: optional (RSA key exchange = no forward secrecy)
# TLS 1.3: mandatory (ECDHE = always ephemeral keys)
# This is a MAJOR security improvement.

# SIGNAL PROTOCOL (WhatsApp):
# Double Ratchet algorithm:
# - New key for EVERY message
# - Compromising one key doesn't compromise others
# - Past messages remain secure even if current key is stolen</div>

<div class="code-block"># ── STEP 6: Key management in practice ──
# Generating keys is easy. MANAGING keys is the hard part.

# KEY MANAGEMENT CHALLENGES:
challenges = [
    "Key generation: use CSPRNG (cryptographically secure random)",
    "Key storage: HSM (hardware), KMS (cloud), not in source code",
    "Key rotation: replace keys periodically (limit blast radius)",
    "Key revocation: what if a key is compromised?",
    "Key distribution: how to securely share keys?",
    "Key backup: if you lose the key, data is gone forever",
]

print("KEY MANAGEMENT CHALLENGES:")
for challenge in challenges:
    print(f"  ☐ {challenge}")

# CLOUD KMS (Key Management Service):
kms_examples = """
# AWS KMS:
aws kms encrypt --key-id alias/my-key --plaintext file://secret.txt

# Google Cloud KMS:
gcloud kms encrypt --key=my-key --location=global --plaintext-file=secret.txt

# Python (AWS KMS):
import boto3
kms = boto3.client('kms')
response = kms.encrypt(
    KeyId='alias/my-key',
    Plaintext=b'sensitive data'
)
ciphertext = response['CiphertextBlob']
"""

print(kms_examples)

# PERFECT FORWARD SECRECY SUMMARY:
pfs_summary = """
KEY EXCHANGE SECURITY LEVELS:

1. RSA key exchange (no forward secrecy):
   ❌ If private key stolen, ALL past traffic decrypted

2. DHE (Diffie-Hellman Ephemeral):
   ✅ Forward secrecy — past sessions safe
   ⚠️ Slower than ECDHE

3. ECDHE (Elliptic Curve DH Ephemeral):
   ✅ Forward secrecy
   ✅ Fast
   ✅ Small key sizes
   ✅ TLS 1.3 default

4. Post-Quantum (Kyber/ML-KEM):
   ✅ Forward secrecy
   ✅ Quantum-resistant
   ⚠️ Newer (less battle-tested)
"""

print(pfs_summary)

# THE BIG PICTURE:
# Diffie-Hellman enables SECURE COMMUNICATION over INSECURE channels.
# Without it, every encrypted connection would need a pre-shared key.
# With it, two strangers can create a shared secret that nobody else knows.
# This is the foundation of ALL modern secure communication:
# HTTPS, VPN, SSH, Signal, WhatsApp — all use DH or ECDH.</div>

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
  <div class="code-block"># ── STEP 1: What is a hash function? ──
  # A HASH function takes ANY input and produces a FIXED-SIZE output.
  # Input: any size → Output: fixed size (e.g., 256 bits for SHA-256)

  # KEY PROPERTIES:
  # 1. DETERMINISTIC: same input → same output (always)
  # 2. FAST: compute quickly
  # 3. ONE-WAY: can't reverse (given hash, can't find input)
  # 4. AVALANCHE: change 1 bit of input → completely different hash
  # 5. COLLISION-RESISTANT: hard to find two inputs with same hash

  import hashlib

  # SHA-256 examples:
  inputs = ["Hello", "hello", "Hello!", "Hello World"]

  for text in inputs:
      h = hashlib.sha256(text.encode()).hexdigest()
      print(f"  sha256('{text:12}') = {h[:32]}...")

  # Notice: "Hello" vs "hello" → completely different hashes (avalanche!)
  # This is why hashes are great for detecting ANY change in data.</div>

  <div class="code-block"># ── STEP 2: Hash algorithms comparison ──
  # Different hash functions for different purposes:

  hash_algos = {
      "MD5": {
          "output": "128 bits",
          "status": "❌ BROKEN (collisions found in 2004)",
          "use": "Legacy only — DO NOT USE for security",
      },
      "SHA-1": {
          "output": "160 bits",
          "status": "❌ BROKEN (SHAttered attack, 2017)",
          "use": "Legacy only — DO NOT USE for security",
      },
      "SHA-256": {
          "output": "256 bits",
          "status": "✅ SECURE",
          "use": "Digital signatures, certificates, blockchain",
      },
      "SHA-3": {
          "output": "256-512 bits",
          "status": "✅ SECURE (newer design)",
          "use": "Future-proof, alternative to SHA-2",
      },
      "BLAKE3": {
          "output": "256 bits",
          "status": "✅ SECURE + VERY FAST",
          "use": "File hashing, high-performance applications",
      },
      "bcrypt/Argon2": {
          "output": "variable",
          "status": "✅ SECURE for passwords",
          "use": "Password hashing (SLOW = feature, not bug)",
      },
  }

  print("HASH ALGORITHMS:")
  for algo, info in hash_algos.items():
      print(f"\n  {algo}:")
      for key, value in info.items():
          print(f"    {key}: {value}")

  # CRITICAL: don't confuse hash types!
  # Fast hashes (SHA-256): for data integrity, signatures
  # Slow hashes (Argon2): for passwords (make brute force expensive)</div>

  <div class="code-block"># ── STEP 3: Hash use cases ──
  # Hashes are EVERYWHERE in computing.

  use_cases = {
      "Data Integrity": {
          "how": "Hash a file before and after transfer. If hashes match → file is intact.",
          "example": "Downloading software: verify SHA-256 hash matches",
      },
      "Password Storage": {
          "how": "Store HASH of password (not plaintext). Verify by hashing input and comparing.",
          "example": "Database stores argon2(password) — even if stolen, passwords safe",
      },
      "Digital Signatures": {
          "how": "Sign the HASH of a document (not the whole document — too slow).",
          "example": "Git commits: SHA-1 of commit data, signed",
      },
      "Blockchain": {
          "how": "Each block contains hash of PREVIOUS block. Tampering changes all hashes.",
          "example": "Bitcoin: SHA-256 forms the chain",
      },
      "Hash Tables": {
          "how": "Hash key to get array index. O(1) lookup.",
          "example": "Python dict, JavaScript Map, database indexes",
      },
      "Content Addressing": {
          "how": "Use hash as identifier. Same content = same hash = same ID.",
          "example": "Git objects, IPFS, Docker image layers",
      },
      "Proof of Work": {
          "how": "Find input whose hash starts with N zeros. Hard to find, easy to verify.",
          "example": "Bitcoin mining: find nonce where SHA-256(block+nonce) < target",
      },
  }

  print("HASH USE CASES:")
  for use_case, info in use_cases.items():
      print(f"\n  {use_case}:")
      for key, value in info.items():
          print(f"    {key}: {value}")</div>

  <div class="code-block"># ── STEP 4: Password hashing done right ──
  # NEVER store passwords as plaintext. NEVER use SHA-256 directly.

  # WHY NOT SHA-256 for passwords?
  # SHA-256 is FAST. Attackers can try billions of passwords per second.
  # We want hashing to be SLOW — so brute force takes years.

  import hashlib
  import time

  # ❌ BAD: SHA-256 is too fast for passwords
  start = time.perf_counter()
  for _ in range(1000000):
      hashlib.sha256(b"password123").hexdigest()
  elapsed = time.perf_counter() - start
  print(f"SHA-256: 1M hashes in {elapsed:.2f}s")
  # Attacker: tries 50M passwords/sec on a GPU!

  # ✅ GOOD: Argon2 is SLOW (by design)
  argon2_code = """
  from argon2 import PasswordHasher

  ph = PasswordHasher(
      time_cost=3,        # 3 iterations (slow)
      memory_cost=65536,  # 64MB memory per hash (memory-hard)
      parallelism=4,      # 4 threads
  )

  # Hash a password:
  hash = ph.hash("mypassword123")
  print(f"Stored hash: {hash}")
  # $argon2id$v=19$m=65536,t=3,p=4$<salt>$<hash>

  # Verify a password:
  try:
      ph.verify(hash, "mypassword123")  # → True (correct)
      ph.verify(hash, "wrongpassword")  # → raises exception
  except:
      print("Wrong password!")
  """

  print("ARGON2 (proper password hashing):")
  print(argon2_code)

  # WHY ARGON2 IS SECURE:
  # 1. SLOW: 3 iterations (vs SHA-256's millions/sec)
  # 2. MEMORY-HARD: requires 64MB per hash (GPU can't parallelize cheaply)
  # 3. SALTED: random salt prevents rainbow table attacks
  # 4. PROVEN: won the Password Hashing Competition (2015)</div>

  <div class="code-block"># ── STEP 5: Salting and rainbow tables ──
  # A SALT is a random value added to the password before hashing.
  # This prevents RAINBOW TABLE attacks.

  # WITHOUT SALT:
  # password "123456" → always same hash
  # Attacker pre-computes hash for common passwords → instant crack

  # WITH SALT:
  # password "123456" + salt "abc123" → hash A
  # password "123456" + salt "xyz789" → hash B
  # Same password, DIFFERENT hashes. Rainbow table useless!

  import hashlib
  import os

  def hash_password_with_salt(password):
      """Hash a password with a random salt."""
      salt = os.urandom(32)  # 32 random bytes
      hash = hashlib.pbkdf2_hmac('sha256', password.encode(), salt, 100000)
      return salt.hex() + ':' + hash.hex()

  def verify_password(password, stored):
      """Verify password against stored hash."""
      salt_hex, hash_hex = stored.split(':')
      salt = bytes.fromhex(salt_hex)
      hash = hashlib.pbkdf2_hmac('sha256', password.encode(), salt, 100000)
      return hash.hex() == hash_hex

  # Usage:
  stored = hash_password_with_salt("mypassword")
  print(f"Stored: {stored[:40]}...")
  print(f"Verify correct: {verify_password('mypassword', stored)}")  # True
  print(f"Verify wrong: {verify_password('wrong', stored)}")        # False

  # DJANGO DOES THIS AUTOMATICALLY:
  django_auth = """
  # Django settings.py:
  PASSWORD_HASHERS = [
      'django.contrib.auth.hashers.Argon2PasswordHasher',  # best
      'django.contrib.auth.hashers.BCryptSHA256PasswordHasher',  # fallback
  ]

  # Usage:
  user.set_password('mypassword123')  # hashes automatically
  user.save()
  user.check_password('mypassword123')  # verifies → True
  """

  print(django_auth)</div>

  <div class="code-block"># ── STEP 6: HMAC and authenticated hashing ──
  # HMAC = Hash-based Message Authentication Code
  # Proves BOTH integrity AND authenticity.

  # Regular hash: proves data wasn't modified (but anyone can compute it)
  # HMAC: proves data wasn't modified AND came from someone with the key

  import hmac
  import hashlib

  # Create HMAC:
  secret_key = b"my_secret_key"
  message = b"Transfer $100 to Alice"

  # HMAC-SHA256:
  mac = hmac.new(secret_key, message, hashlib.sha256).hexdigest()
  print(f"HMAC: {mac}")

  # Verify HMAC (receiver checks):
  expected_mac = hmac.new(secret_key, message, hashlib.sha256).hexdigest()
  if hmac.compare_digest(mac, expected_mac):
      print("✅ Message is authentic and unmodified")
  else:
      print("❌ Message was tampered or wrong sender")

  # WHY USE hmac.compare_digest() instead of == ?
  # Regular == can leak timing information (side-channel attack)
  # compare_digest() takes CONSTANT time regardless of where difference is

  # REAL-WORLD USES OF HMAC:
  hmac_uses = {
      "JWT (JSON Web Tokens)": "HMAC signs the token to prove authenticity",
      "Webhook verification": "GitHub/Stripe sign webhooks with HMAC",
      "API authentication": "AWS signs API requests with HMAC-SHA256",
      "CSRF tokens": "Django signs CSRF tokens with HMAC",
      "Session cookies": "Django signs cookies with HMAC",
  }

  print("HMAC USES:")
  for use, desc in hmac_uses.items():
      print(f"  {use}: {desc}")

  # HASHING SUMMARY:
  # ┌──────────────────┬──────────────────────────────────┐
  # │ Hash Type        │ Use                              │
  # ├──────────────────┼──────────────────────────────────┤
  # │ SHA-256          │ Data integrity, signatures       │
  # │ Argon2/bcrypt    │ Password hashing (slow = good)   │
  # │ HMAC-SHA256      │ Authenticated messages           │
  # │ BLAKE3           │ Fast file hashing                │
  # │ PBKDF2           │ Password derivation (legacy)     │
  # └──────────────────┴──────────────────────────────────┘

  # THE GOLDEN RULES OF HASHING:
  # 1. NEVER store plaintext passwords
  # 2. NEVER use SHA-256 directly for passwords (use Argon2)
  # 3. ALWAYS use salt with password hashing
  # 4. NEVER use MD5 or SHA-1 for security (broken!)
  # 5. Use HMAC when you need authentication + integrity
  # 6. Use hmac.compare_digest() for constant-time comparison</div>

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
<div class="code-block"># ── STEP 1: Why password hashing matters ──
# If your database is breached, passwords in plaintext = instant disaster.
# If passwords are HASHED, the attacker gets useless hashes.

# THE PASSWORD STORAGE HIERARCHY (from bad to good):

hierarchy = {
    "❌ Plaintext": {
        "security": "ZERO — anyone with DB access sees all passwords",
        "example": "password = 'password123'",
    },
    "❌ Encrypted (reversible)": {
        "security": "LOW — if encryption key leaks, all passwords exposed",
        "example": "encrypt('password123', key) → ciphertext",
    },
    "⚠️ SHA-256 (fast hash)": {
        "security": "POOR — attacker can try billions/sec",
        "example": "sha256('password123') → hash",
    },
    "✅ bcrypt (slow hash)": {
        "security": "GOOD — attacker can try thousands/sec",
        "example": "bcrypt('password123', salt, cost=12)",
    },
    "✅✅ Argon2 (memory-hard)": {
        "security": "BEST — requires 64MB per attempt (GPU-prohibitve)",
        "example": "argon2id('password123', salt, 64MB, 3 iters)",
    },
}

print("PASSWORD STORAGE HIERARCHY:")
for method, info in hierarchy.items():
    print(f"\n  {method}")
    print(f"    Security: {info['security']}")
    print(f"    Example: {info['example']}")</div>

<div class="code-block"># ── STEP 2: bcrypt in practice ──
# bcrypt: the industry-standard password hash (since 1999).

import bcrypt

# Hash a password:
password = b"password123"
salt = bcrypt.gensalt(rounds=12)    # cost factor (2^12 = 4096 iterations)
hashed = bcrypt.hashpw(password, salt)
print(f"Hashed: {hashed}")
# b'$2b$12$someSalt...someHash...'

# The hash CONTAINS everything needed to verify:
# $2b$ = bcrypt algorithm
# $12$ = cost factor (2^12 iterations)
# next 22 chars = base64-encoded salt
# remaining chars = hash

# Verify password:
is_correct = bcrypt.checkpw(b"password123", hashed)  # True
is_wrong = bcrypt.checkpw(b"wrongpass", hashed)      # False

print(f"Correct password: {is_correct}")
print(f"Wrong password: {is_wrong}")

# COST FACTOR (rounds):
# rounds=10: ~100ms per hash (attacker: ~10/sec)
# rounds=12: ~400ms per hash (attacker: ~2/sec)
# rounds=14: ~1.6s per hash (attacker: ~0.6/sec)
# Increase rounds as hardware gets faster.
# Rule of thumb: hashing should take ~250ms for users.</div>

<div class="code-block"># ── STEP 3: Argon2 — the modern champion ──
# Argon2 won the 2015 Password Hashing Competition.
# It's MEMORY-HARD — requires RAM, not just CPU.

from argon2 import PasswordHasher

# Create hasher with parameters:
ph = PasswordHasher(
    time_cost=3,        # 3 iterations
    memory_cost=65536,  # 64MB RAM per hash
    parallelism=4,      # use 4 CPU threads
)

# Hash a password:
hash = ph.hash("password123")
print(f"Argon2 hash: {hash}")
# $argon2id$v=19$m=65536,t=3,p=4$<salt>$<hash>

# Verify:
try:
    ph.verify(hash, "password123")  # True (correct)
    print("Password correct!")
except:
    print("Password wrong!")

# WHY ARGON2 IS BETTER THAN bcrypt:
better_reasons = {
    "Memory-hard": "Requires 64MB RAM per hash. GPUs have limited memory.",
    "Side-channel resistant": "Argon2id variant resists timing attacks",
    "Tunable": "Adjust time, memory, and parallelism independently",
    "Modern": "Designed in 2015 (bcrypt is from 1999)",
}

print("WHY ARGON2 IS BETTER:")
for reason, desc in better_reasons.items():
    print(f"  {reason}: {desc}")

# DJANGO CONFIGURATION:
django_config = """
# settings.py:
PASSWORD_HASHERS = [
    'django.contrib.auth.hashers.Argon2PasswordHasher',     # best
    'django.contrib.auth.hashers.BCryptSHA256PasswordHasher', # fallback
    'django.contrib.auth.hashers.PBKDF2PasswordHasher',     # default (OK)
]

# Install: pip install argon2-cffi bcrypt
# Django auto-detects and uses the first available hasher.
"""

print(django_config)</div>

<div class="code-block"># ── STEP 4: Password attacks and defense ──
# HOW ATTACKERS CRACK PASSWORDS:

attack_methods = {
    "Brute Force": {
        "how": "Try every possible password: aaaa, aaab, aaac...",
        "speed": "Very slow (especially with Argon2)",
        "defense": "Long passwords (12+ chars), slow hash (Argon2)",
    },
    "Dictionary Attack": {
        "how": "Try common words: password, 123456, qwerty...",
        "speed": "Fast for weak passwords",
        "defense": "Don't use common passwords, check against HaveIBeenPwned",
    },
    "Rainbow Tables": {
        "how": "Pre-computed hash table for common passwords",
        "speed": "Instant (if no salt)",
        "defense": "ALWAYS use salt (unique per password)",
    },
    "Credential Stuffing": {
        "how": "Use leaked passwords from other sites",
        "speed": "Very effective (people reuse passwords)",
        "defense": "Never reuse passwords, use password manager",
    },
}

print("PASSWORD ATTACK METHODS:")
for method, info in attack_methods.items():
    print(f"\n  {method}:")
    for key, value in info.items():
        print(f"    {key}: {value}")

# PASSWORD STRENGTH:
# Length matters more than complexity!
# "correct-horse-battery-staple" >> "P@ssw0rd123!"
# Use passphrases: 4+ random words = ~44 bits of entropy

# PASSWORD POLICY (modern NIST guidelines):
nist_guidelines = [
    "Minimum 8 characters (recommend 12+)",
    "NO complexity rules (no forced special chars)",
    "NO mandatory rotation (only rotate if compromised)",
    "Check against breach databases (HaveIBeenPwned)",
    "Allow paste (password managers)",
    "Rate limiting on login attempts",
    "MFA/2FA for sensitive accounts",
]

print("\nMODERN PASSWORD GUIDELINES (NIST):")
for guideline in nist_guidelines:
    print(f"  ☐ {guideline}")</div>

<div class="code-block"># ── STEP 5: Rate limiting and account lockout ──
# Even with good hashing, brute force is possible if no rate limiting.

# DJANGO RATE LIMITING:
django_rate_limit = """
# settings.py:
LOGIN_RATE_LIMIT = 5  # max 5 attempts per 5 minutes

# Using django-axes:
INSTALLED_APPS += ['axes']
MIDDLEWARE += ['axes.middleware.AxesMiddleware']
AUTHENTICATION_BACKENDS = [
    'axes.backends.AxesBackend',         # rate limiting
    'django.contrib.auth.backends.ModelBackend',
]

# settings:
AXES_FAILURE_LIMIT = 5  # max failed attempts
AXES_COOLOFF_TIME = 1   # hours to cool down
AXES_LOCKOUT_PARAMETERS = ['ip_address', 'username']
"""

print(django_rate_limit)

# CUSTOM RATE LIMITING IN DJANGO:
custom_limit = """
from django.core.cache import cache
from django.contrib.auth import authenticate

def login_with_rate_limit(username, password, ip):
    cache_key = f"login_attempts:{ip}:{username}"
    attempts = cache.get(cache_key, 0)

    if attempts >= 5:
        return {"error": "Too many attempts. Try again in 15 minutes."}

    user = authenticate(username=username, password=password)
    if user is None:
        cache.set(cache_key, attempts + 1, timeout=900)  # 15 min
        return {"error": f"Invalid credentials. {5 - attempts - 1} attempts left."}

    cache.delete(cache_key)  # reset on success
    return {"user": user}
"""

print(custom_limit)

# PROGRESSIVE DELAY:
# 1st fail: 0s delay
# 2nd fail: 1s delay
# 3rd fail: 2s delay
# 4th fail: 4s delay
# 5th fail: lockout 15 minutes</div>

<div class="code-block"># ── STEP 6: Multi-factor authentication (MFA) ──
# Passwords alone are NOT enough. Add a SECOND factor.

# THREE FACTORS OF AUTHENTICATION:
factors = {
    "Something you KNOW": "Password, PIN, security question",
    "Something you HAVE": "Phone (SMS/OTP), hardware key (YubiKey), app (Authenticator)",
    "Something you ARE": "Fingerprint, face, voice (biometrics)",
}

print("AUTHENTICATION FACTORS:")
for factor, examples in factors.items():
    print(f"  {factor}: {examples}")

# TOTP (Time-based One-Time Password):
# Used by Google Authenticator, Authy
# 6-digit code that changes every 30 seconds
# Based on shared secret + current time

# PYTHON TOTP (pyotp):
totp_code = """
import pyotp

# Generate secret (shared between user and server):
secret = pyotp.random_base32()
print(f"Secret: {secret}")  # user adds to authenticator app

# Generate current code:
totp = pyotp.TOTP(secret)
current_code = totp.now()
print(f"Current code: {current_code}")  # e.g., "123456"

# Verify user-entered code:
if totp.verify(current_code):
    print("✅ Valid code")
else:
    print("❌ Invalid or expired code")

# For QR code (to add to authenticator):
uri = totp.provisioning_uri(name="user@example.com", issuer_name="MyApp")
# Generate QR from this URI
"""

print("TOTP CODE:")
print(totp_code)

# AUTHENTICATION BEST PRACTICES:
best_practices = [
    "Store passwords with Argon2 (never plaintext, never SHA-256)",
    "Use unique salt per password",
    "Enforce rate limiting on login",
    "Offer/require MFA for sensitive accounts",
    "Check passwords against breach databases",
    "Use secure session management (Django does this)",
    "HTTPS Everywhere (never send passwords over HTTP)",
    "Don't log passwords (even in error messages!)",
    "Use password managers (don't force password rotation)",
    "Educate users about phishing",
]

print("AUTHENTICATION BEST PRACTICES:")
for practice in best_practices:
    print(f"  ☐ {practice}")

# THE BOTTOM LINE:
# Password security = hashing + salting + rate limiting + MFA.
# Each layer adds defense. No single layer is sufficient.
# Defense in depth — assume each layer will be breached eventually.</div>

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

<div class="code-block"># ── STEP 1: What is PKI? ──
# PKI = Public Key Infrastructure
# The system that lets you TRUST a website's public key.

# THE PROBLEM:
# You connect to "google.com" and get a public key.
# How do you KNOW it's really Google's key?
# Maybe an attacker swapped it (man-in-the-middle attack)?

# THE SOLUTION: CERTIFICATES
# A Certificate Authority (CA) VERIFIES identity and SIGNS the public key.
# Your browser trusts pre-installed CAs (like DigiCert, Let's Encrypt).

# THE CHAIN OF TRUST:
chain = """
Your Browser
  ↓ trusts
Root CA (pre-installed in browser/OS)
  ↓ signs
Intermediate CA
  ↓ signs
Website Certificate (google.com)

Each level signs the next. Break any link → untrusted.
"""

print(chain)

# WHAT'S IN A CERTIFICATE:
cert_fields = {
    "Subject": "Who the cert belongs to (CN=google.com)",
    "Issuer": "Who issued the cert (CA name)",
    "Public Key": "The website's public key",
    "Validity": "Not Before / Not After dates",
    "Signature": "CA's digital signature (proves authenticity)",
    "SAN": "Subject Alternative Names (all domains covered)",
}

print("CERTIFICATE FIELDS:")
for field, desc in cert_fields.items():
    print(f"  {field}: {desc}")</div>

<div class="code-block"># ── STEP 2: Inspecting certificates ──
# See the certificate chain for any HTTPS site:

openssl_commands = """
# View server certificate chain:
$ openssl s_client -connect google.com:443 -servername google.com

Certificate chain
 0 s:CN = *.google.com           ← website cert
   i:CN = GTS CA 1C3             ← issued by intermediate
 1 s:CN = GTS CA 1C3             ← intermediate CA
   i:CN = GTS Root R1            ← issued by root

# View certificate details:
$ openssl x509 -in cert.pem -text -noout

Subject: CN=*.google.com
Issuer:  CN=GTS CA 1C3
Not Before: Jul 14, 2026
Not After:  Sep 6, 2026    ← 90 days (Google rotates quarterly)
Public Key Algorithm: id-ecPublicKey   ← ECC key
Signature Algorithm: ecdsa-with-SHA256

# Verify certificate chain:
$ openssl verify -CAfile root.pem intermediate.pem website.pem
website.pem: OK

# Get certificate fingerprint:
$ openssl x509 -in cert.pem -fingerprint -sha256
SHA256 Fingerprint=AB:CD:EF:...
"""

print(openssl_commands)

# IN PYTHON:
python_cert = """
import ssl
import socket

# Get certificate from a live server:
ctx = ssl.create_default_context()
with ctx.wrap_socket(socket.socket(), server_hostname='google.com') as s:
    s.connect(('google.com', 443))
    cert = s.getpeercert()
    print(f"Subject: {cert['subject']}")
    print(f"Issuer: {cert['issuer']}")
    print(f"Expires: {cert['notAfter']}")
"""

print(python_cert)</div>

<div class="code-block"># ── STEP 3: Let's Encrypt — free certificates ──
# Let's Encrypt provides FREE SSL certificates (automated).

# HOW LET'S ENCRYPT WORKS:
le_process = """
1. Install certbot:
   $ apt install certbot python3-certbot-nginx

2. Get certificate:
   $ sudo certbot --nginx -d example.com -d www.example.com
   - certbot proves you own the domain (ACME challenge)
   - installs certificate in nginx config
   - auto-configures HTTPS redirect

3. Auto-renewal (certificates expire in 90 days):
   $ sudo certbot renew --dry-run  # test
   $ crontab: 0 12 * * * /usr/bin/certbot renew --quiet
   # or systemd timer (recommended)

4. Verify:
   $ curl -I https://example.com
   HTTP/2 200  ← HTTPS working!
"""

print(le_process)

# WHY 90-DAY EXPIRY?
# - Forces automation (no manual renewal)
# - Limits damage if key is compromised
# - Encourages best practices (short-lived certs)
# - Traditional CAs charge $100+/year for 1-2 year certs

# DJANGO + HTTPS (LedgerPilot):
django_https = """
# Nginx config (reverse proxy):
server {
    listen 443 ssl http2;
    server_name api.ledgerpilot.com;

    ssl_certificate /etc/letsencrypt/live/api.ledgerpilot.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/api.ledgerpilot.com/privkey.pem;

    location / {
        proxy_pass http://127.0.0.1:8000;  # Gunicorn
    }
}

# Force HTTPS redirect:
server {
    listen 80;
    server_name api.ledgerpilot.com;
    return 301 https://$server_name$request_uri;
}
"""

print(django_https)</div>

<div class="code-block"># ── STEP 4: Certificate Authorities ──
# CAs are the TRUST ANCHORS of the internet.

# TYPES OF CERTIFICATES:
cert_types = {
    "DV (Domain Validated)": {
        "validation": "Just proves domain ownership",
        "cost": "Free (Let's Encrypt)",
        "time": "Minutes",
        "trust": "Basic",
    },
    "OV (Organization Validated)": {
        "validation": "Verifies organization exists",
        "cost": "$100-300/year",
        "time": "Days",
        "trust": "Medium (shows company name)",
    },
    "EV (Extended Validation)": {
        "validation": "Extensive verification (legal, physical)",
        "cost": "$300-1000/year",
        "time": "Weeks",
        "trust": "Highest (green bar, now deprecated)",
    },
    "Wildcard": {
        "validation": "Covers *.example.com",
        "cost": "$100-500/year",
        "time": "Minutes (with Let's Encrypt)",
        "trust": "Covers unlimited subdomains",
    },
}

print("CERTIFICATE TYPES:")
for cert_type, info in cert_types.items():
    print(f"\n  {cert_type}:")
    for key, value in info.items():
        print(f"    {key}: {value}")

# MAJOR CERTIFICATE AUTHORITIES:
cas = [
    "Let's Encrypt (free, automated, most popular)",
    "DigiCert (enterprise, premium)",
    "Sectigo (formerly Comodo)",
    "GlobalSign",
    "Cloudflare (free with their CDN)",
    "AWS Certificate Manager (free with AWS)",
]

print("MAJOR CERTIFICATE AUTHORITIES:")
for ca in cas:
    print(f"  {ca}")</div>

<div class="code-block"># ── STEP 5: Certificate revocation ──
# What happens when a certificate is COMPROMISED?

# REVOCATION METHODS:
revocation = {
    "CRL (Certificate Revocation List)": {
        "how": "CA publishes list of revoked certificates",
        "problem": "Large list, slow to download, infrequently updated",
        "status": "Legacy (rarely used by browsers)",
    },
    "OCSP (Online Certificate Status Protocol)": {
        "how": "Browser queries CA in real-time: 'is this cert valid?'",
        "problem": "Privacy concern (CA knows which sites you visit), latency",
        "status": "Being phased out",
    },
    "OCSP Stapling": {
        "how": "Server fetches OCSP response and 'staples' it to certificate",
        "problem": "None (best approach)",
        "status": "Modern standard",
    },
    "CRLite (Firefox)": {
        "how": "Bloom filter compressed list of all revoked certs",
        "problem": "None (efficient, private)",
        "status": "Firefox only (for now)",
    },
}

print("REVOCATION METHODS:")
for method, info in revocation.items():
    print(f"\n  {method}:")
    for key, value in info.items():
        print(f"    {key}: {value}")

# WHEN CERTIFICATES GET REVOKED:
reasons = [
    "Private key compromised (stolen)",
    "Certificate issued in error",
    "Domain ownership changed",
    "CA was breached (mass revocation)",
    "Heartbleed (2014): millions of certs reissued",
]

print("\nREVOCATION REASONS:")
for reason in reasons:
    print(f"  {reason}")</div>

<div class="code-block"># ── STEP 6: Modern TLS and certificate management ──
# TLS 1.3 (the modern standard):

tls13_features = {
    "Fewer round trips": "1-RTT handshake (vs 2-RTT for TLS 1.2)",
    "Mandatory forward secrecy": "ECDHE always used (past sessions safe)",
    "Removed weak algorithms": "No RSA key exchange, no CBC mode",
    "0-RTT mode": "Resume sessions with 0 latency (early data)",
    "Encrypted extensions": "More of the handshake is encrypted",
    "Simplified": "Removed legacy features, cleaner protocol",
}

print("TLS 1.3 FEATURES:")
for feature, desc in tls13_features.items():
    print(f"  {feature}: {desc}")

# AUTOMATED CERTIFICATE MANAGEMENT:
auto_mgmt = """
# Let's Encrypt + Certbot (most common):
$ apt install certbot
$ certbot --nginx -d example.com
# Automatically: gets cert, configures nginx, sets up renewal

# cert-manager (Kubernetes):
# Automatically issues and rotates certificates for pods
$ kubectl apply -f https://github.com/cert-manager/cert-manager/releases/

# AWS Certificate Manager:
# Free certificates for AWS services (CloudFront, ALB)
# Automatic renewal, no manual management
"""

print(auto_mgmt)

# CERTIFICATE PINNING (mobile apps):
pinning = """
# Pin the expected certificate/hash in the app:
# - App refuses to accept any other certificate
# - Prevents MITM even if CA is compromised
# - Used by banking apps, Signal, WhatsApp
# - Downside: hard to rotate keys

# Example (Android Network Security Config):
<network-security-config>
  <domain-config>
    <domain includeSubdomains="true">api.myapp.com</domain>
    <pin-set expiration="2026-12-31">
      <pin digest="SHA-256">base64hash...</pin>
    </pin-set>
  </domain-config>
</network-security-config>
"""

print(pinning)

# THE BIG PICTURE:
# PKI is the TRUST FOUNDATION of the internet.
# Without certificates: no HTTPS, no online banking, no e-commerce.
# Every secure connection starts with a certificate proving identity.

# SUMMARY:
# ┌──────────────────┬──────────────────────────────────┐
# │ Concept          │ Role                             │
# ├──────────────────┼──────────────────────────────────┤
# │ Certificate      │ Proves website identity          │
# │ CA               │ Trusted third party (signs certs)│
# │ Chain of Trust   │ Root → Intermediate → Website    │
# │ Let's Encrypt    │ Free, automated certificates     │
# │ TLS 1.3          │ Modern, secure handshake         │
# │ OCSP Stapling    │ Real-time revocation check       │
# │ Cert Pinning     │ Mobile app extra security        │
# └──────────────────┴──────────────────────────────────┘

# For your projects:
# - Use Let's Encrypt (free, automated)
# - Force HTTPS redirect (no HTTP access)
# - Use HSTS header (browser remembers to use HTTPS)
# - Monitor certificate expiry (alert before it expires)
# - Use certbot renew or cert-manager for auto-renewal</div>

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
