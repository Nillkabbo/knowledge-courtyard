doors.push({
  num: 6,
  icon: "🤝",
  color: "#dc2626",
  name: "হস্তমর্দনের শিল্প",
  subtitle: "The Art of Handshake",
  tech: "TLS 1.3 Handshake — Rescorla (2018), 1-RTT, 0-RTT, cipher suites, AEAD, key schedule",
  spirit: "মিথাক — চুক্তি, দুই পক্ষের আস্থার সম্পর্ক",
  secret: "TLS 1.3 handshake = চারটি বার্তা। Client Hello → Server Hello + Certificate → Key Exchange → Finished। এক RTT-তে সম্পূর্ণ — আগের TLS 1.2-এর দুই RTT-এর চেয়ে দ্রুত।",
  recall: {
    q: " TLS 1.3-এ হ্যান্ডশেক কত RTT-তে সম্পূর্ণ হয়?",
    qen: "How many RTTs does the TLS 1.3 handshake take?",
    a: "১ RTT। TLS 1.2-এ দুই RTT লাগতো। TLS 1.3 দ্রুত ও নিরাপদ — কম বার্তা, বেশি এনক্রিপশন।",
    aen: "1 RTT. TLS 1.2 needed 2 RTTs. TLS 1.3 is faster and more secure — fewer messages, more encryption."
  },
  story: `<p class="scene-setting">কামরান (Door ১) তোমাকে AES ও RSA শিখিয়েছেন। জাইনাব (Door ২) Diffie-Hellman দিয়েছেন। হামজা (Door ৩) hash দিয়েছেন। ইমরান (Door ৫) সার্টিফিকেট দিয়েছেন। এখন সব মেলাও — একটি সম্পূর্ণ TLS handshake। ক্লায়েন্ট ও সার্ভার এক মিলিসেকেন্ডে এনক্রিপ্টেড সংযোগ স্থাপন করে। কীভাবে? চারটি বার্তায়।</p>
<p class="scene-setting en">Kamran (Door 1) taught AES and RSA. Zainab (Door 2) gave Diffie-Hellman. Hamza (Door 3) gave hashing. Imran (Door 5) gave certificates. Now combine them all — a complete TLS handshake. Client and server establish an encrypted connection in one millisecond. How? Four messages.</p>

<div class="dialogue"><strong>হস্তমর্দন-কারিগর বিলাল:</strong> TLS 1.3 (২০১৮, Eric Rescorla) হল সবচেয়ে দ্রুত ও নিরাপদ handshake। চারটি ধাপ: (১) Client Hello — আমি এই cipher পারি। (২) Server Hello — আমি এটি বেছে নিলাম, এই আমার সার্টিফিকেট। (৩) Key Exchange — Diffie-Hellman দিয়ে গোপন চাবি। (৪) Finished — সব এনক্রিপ্টেড। এক RTT! TLS 1.2-এ দুই RTT লাগতো।</div>
<div class="dialogue en"><strong>Handshake Artisan Bilal:</strong> TLS 1.3 (2018, Eric Rescorla) is the fastest and most secure handshake. Four steps: (1) Client Hello — I can use these ciphers. (2) Server Hello — I choose this, here's my certificate. (3) Key Exchange — Diffie-Hellman for shared secret. (4) Finished — all encrypted. One RTT!</div>

<div class="code-block"># ── STEP 1: What is TLS? ──
# TLS = Transport Layer Security (formerly SSL)
# It's what makes HTTPS secure — encrypts ALL data between browser and server.

# TLS COMBINES EVERYTHING from doors 1-5:
# - Asymmetric encryption (RSA/ECDHE) for key exchange
# - Symmetric encryption (AES) for bulk data
# - Hashing (SHA-256) for integrity
# - Digital signatures for authentication
# - Certificates (PKI) for identity

# WHAT TLS PROVIDES:
tls_guarantees = {
    "Confidentiality": "Nobody can read your data (encryption)",
    "Integrity": "Nobody can modify your data (MAC/HMAC)",
    "Authentication": "Server is who it claims to be (certificates)",
    "Forward Secrecy": "Past sessions safe even if keys leaked (ephemeral DH)",
}

print("TLS GUARANTEES:")
for guarantee, desc in tls_guarantees.items():
    print(f"  {guarantee}: {desc}")

# EVERY TIME YOU SEE HTTPS:
# https://example.com
# The "s" means TLS is active. Without it, all data is in plaintext!</div>

<div class="code-block"># ── STEP 2: The TLS 1.3 handshake ──
# How browser and server establish secure connection.

# TLS 1.3 HANDSHAKE (1 round trip):
handshake = """
CLIENT →→→→→→→→→→→→→→→→→→ SERVER
  ClientHello
    + supported cipher suites
    + key share (ECDHE public key)
    + supported TLS version

CLIENT ←←←←←←←←←←←←←←←←← SERVER
  ServerHello
    + chosen cipher suite
    + key share (server's ECDHE public key)
    + certificate (proves identity)
    + Finished (HMAC of handshake)

CLIENT →→→→→→→→→→→→→→→→→→ SERVER
  Finished (HMAC of handshake, encrypted)

Total: 1 RTT (round trip time)
Both sides now have a shared AES key. All further traffic is encrypted.
"""

print(handshake)

# WHAT HAPPENS IN EACH STEP:
steps = {
    "ClientHello": "Browser says: I support these ciphers, here's my public key",
    "ServerHello": "Server says: let's use this cipher, here's my key + certificate",
    "Certificate verification": "Browser checks certificate against trusted CAs",
    "Key derivation": "Both compute shared AES key using ECDHE",
    "Finished": "Both confirm handshake wasn't tampered with (HMAC)",
}

print("HANDSHAKE STEPS:")
for step, desc in steps.items():
    print(f"  {step}: {desc}")</div>

<div class="code-block"># ── STEP 3: TLS 1.3 vs 1.2 ──
# TLS 1.3 is a MAJOR improvement over 1.2.

comparison = {
    "Handshake": {
        "TLS 1.2": "2 RTT (slower)",
        "TLS 1.3": "1 RTT (faster) + 0-RTT mode for resumed sessions",
    },
    "Key Exchange": {
        "TLS 1.2": "RSA or DHE (RSA has no forward secrecy)",
        "TLS 1.3": "ECDHE only (mandatory forward secrecy)",
    },
    "Cipher Suites": {
        "TLS 1.2": "37+ suites (many weak, confusing)",
        "TLS 1.3": "5 suites only (all strong, AEAD)",
    },
    "Encryption": {
        "TLS 1.2": "CBC mode (vulnerable to padding attacks) or GCM",
        "TLS 1.3": "AEAD only (GCM or ChaCha20-Poly1305)",
    },
    "Hashing": {
        "TLS 1.2": "MD5, SHA-1, SHA-256 (some weak)",
        "TLS 1.3": "SHA-256 or SHA-384 only",
    },
    "Forward Secrecy": {
        "TLS 1.2": "Optional (depends on configuration)",
        "TLS 1.3": "Mandatory (always ECDHE)",
    },
}

print("TLS 1.2 vs 1.3:")
for aspect, versions in comparison.items():
    print(f"\n  {aspect}:")
    for version, desc in versions.items():
        print(f"    {version}: {desc}")

# TLS 1.3 CIPHER SUITES (only 5):
cipher_suites = [
    "TLS_AES_256_GCM_SHA384 (primary, strongest)",
    "TLS_CHACHA20_POLY1305_SHA256 (mobile-optimized)",
    "TLS_AES_128_GCM_SHA256 (fast)",
    "TLS_AES_128_CCM_SHA256 (limited use)",
    "TLS_AES_128_CCM_8_SHA256 (constrained devices)",
]

print("\nTLS 1.3 CIPHER SUITES:")
for suite in cipher_suites:
    print(f"  {suite}")</div>

<div class="code-block"># ── STEP 4: Inspecting TLS with openssl ──
# See exactly what TLS version and cipher a site uses:

openssl_commands = """
# Check TLS version:
$ openssl s_client -connect google.com:443 -tls1_3
Protocol: TLSv1.3
Cipher:   TLS_AES_256_GCM_SHA384

# Check TLS 1.2:
$ openssl s_client -connect google.com:443 -tls1_2
Protocol: TLSv1.2
Cipher:   ECDHE-RSA-AES256-GCM-SHA384

# List all supported cipher suites:
$ openssl ciphers -v 'TLSv1.3'

# Verify certificate chain:
$ openssl s_client -connect google.com:443 -showcerts

# Check if HSTS is enabled:
$ curl -sI https://google.com | grep -i strict
strict-transport-security: max-age=31536000

# Test SSL Labs grade:
# https://www.ssllabs.com/ssltest/ (online tool)
"""

print(openssl_commands)

# CONFIGURING TLS IN NGINX (your servers):
nginx_tls = """
server {
    listen 443 ssl http2;
    server_name api.example.com;

    # TLS 1.3 only (most secure):
    ssl_protocols TLSv1.3;
    ssl_prefer_server_ciphers off;

    # Or TLS 1.2 + 1.3 (broader compatibility):
    ssl_protocols TLSv1.2 TLSv1.3;

    # OCSP stapling:
    ssl_stapling on;
    ssl_stapling_verify on;

    # HSTS (force HTTPS for 1 year):
    add_header Strict-Transport-Security "max-age=31536000" always;
}
"""

print(nginx_tls)</div>

<div class="code-block"># ── STEP 5: HTTPS in your applications ──
# HOW TO ENSURE TLS IN DJANGO/WEB APPS:

# DJANGO SECURITY SETTINGS:
django_security = """
# settings.py — FORCE HTTPS in production:
SECURE_SSL_REDIRECT = True           # redirect HTTP to HTTPS
SECURE_HSTS_SECONDS = 31536000       # HSTS for 1 year
SECURE_HSTS_INCLUDE_SUBDOMAINS = True
SECURE_HSTS_PRELOAD = True           # allow browser preload list
SECURE_CONTENT_TYPE_NOSNIFF = True   # prevent MIME sniffing
SECURE_BROWSER_XSS_FILTER = True
SESSION_COOKIE_SECURE = True         # cookies only over HTTPS
CSRF_COOKIE_SECURE = True            # CSRF cookie over HTTPS

# Behind a reverse proxy (nginx):
SECURE_PROXY_SSL_HEADER = ('HTTP_X_FORWARDED_PROTO', 'https')
"""

print(django_security)

# LET'S ENCRYPT AUTO-RENEWAL:
certbot_setup = """
# Install:
$ apt install certbot python3-certbot-nginx

# Get certificate + auto-configure nginx:
$ sudo certbot --nginx -d api.example.com

# Test renewal:
$ sudo certbot renew --dry-run

# Auto-renew (systemd timer):
$ systemctl enable certbot.timer
$ systemctl start certbot.timer

# Certificates expire every 90 days.
# certbot renew checks and renews automatically.
"""

print(certbot_setup)

# COMMON TLS MISTAKES:
mistakes = {
    "Mixed content": "HTTPS page loads HTTP resources (browser blocks/warns)",
    "Self-signed certs": "Works but browsers show scary warning (use Let's Encrypt!)",
    "Expired cert": "Browser shows 'Your connection is not private' (monitor expiry!)",
    "No HSTS": "First visit can be intercepted (enable HSTS)",
    "Weak ciphers": "TLS 1.0/1.1 are deprecated (force TLS 1.2+)",
}

print("COMMON TLS MISTAKES:")
for mistake, consequence in mistakes.items():
    print(f"  {mistake}: {consequence}")</div>

<div class="code-block"># ── STEP 6: Beyond TLS — application security ──
# TLS secures data IN TRANSIT. But security needs MORE layers.

# DEFENSE IN DEPTH:
defense_layers = {
    "Network (TLS)": "Encrypt data in transit (HTTPS)",
    "Application (validation)": "Input validation, parameterized queries, CSRF",
    "Authentication": "Strong passwords, MFA, session management",
    "Authorization": "RBAC, least privilege, API rate limits",
    "Data at rest": "Database encryption, encrypted backups",
    "Monitoring": "Logs, alerts, intrusion detection",
    "Incident response": "What to do when breached",
}

print("DEFENSE IN DEPTH:")
for layer, desc in defense_layers.items():
    print(f"  {layer}: {desc}")

# SECURITY HEADERS (HTTP):
security_headers = {
    "Strict-Transport-Security": "Force HTTPS (HSTS)",
    "Content-Security-Policy": "Prevent XSS (restrict script sources)",
    "X-Frame-Options": "Prevent clickjacking (no iframes)",
    "X-Content-Type-Options": "Prevent MIME sniffing",
    "Referrer-Policy": "Control referrer header leakage",
    "Permissions-Policy": "Restrict browser features (camera, mic)",
}

print("\nSECURITY HEADERS:")
for header, desc in security_headers.items():
    print(f"  {header}: {desc}")

# TLS SUMMARY:
# ┌──────────────────┬──────────────────────────────────┐
# │ TLS Feature      │ Purpose                         │
# ├──────────────────┼──────────────────────────────────┤
# │ Encryption       │ Confidentiality (nobody reads)   │
# │ HMAC/MAC         │ Integrity (nobody modifies)     │
    # │ Certificates     │ Authentication (identity proof) │
# │ ECDHE            │ Forward secrecy                 │
# │ TLS 1.3          │ Modern, fast, secure            │
# │ Let's Encrypt    │ Free certificates               │
# │ HSTS             │ Force HTTPS in browser          │
# │ OCSP Stapling    │ Real-time revocation            │
# └──────────────────┴──────────────────────────────────┘

# THE BIG PICTURE:
# TLS is the BACKBONE of internet security.
# Every HTTPS connection, every API call, every login — uses TLS.
# Understanding TLS = understanding how the internet keeps data safe.

# FOR YOUR PROJECTS:
# - ALWAYS use HTTPS (Let's Encrypt + certbot)
# - Force HTTPS redirect (no HTTP access)
# - Enable HSTS header
# - Use TLS 1.3 (or at least 1.2)
# - Monitor certificate expiry
# - Set security headers (django-security, CSP)
# - Test with SSL Labs (ssllabs.com/ssltest)
# - Keep libraries updated (TLS bugs get fixed)</div>

<div class="verse">أَوْفُوا بِالْعُقُودِ</div>
<div style="font-size:.85rem;color:var(--ink-dim);text-align:center;margin-bottom:1rem">"তোমরা চুক্তি পূরণ করো।" — কুরআন ৫:১</div>

<p class="scene-setting">মিথাক — চুক্তি। TLS handshake সেই চুক্তির ডিজিটাল রূপ। দুই পক্ষ একে অপরের প্রতি আস্থা স্থাপন করে — cipher নির্বাচন, চাবি আদান, সার্টিফিকেট যাচাই। একবার চুক্তি হলে — সব বার্তা এনক্রিপ্টেড।</p>
<p class="scene-setting en">Mithaq — covenant. The TLS handshake is the digital form of that covenant. Two parties establish mutual trust — cipher selection, key exchange, certificate verification. Once the covenant is made — all messages encrypted.</p>

<div class="callout tip"><span class="co-icon">🔗</span><div><strong>Book ৩৭ (Networks) Door ৯ (TLS):</strong> TLS handshake SVG দেখেছিলে — এখন সেই হ্যান্ডশেকের গাণিতিক ভিত্তি বোঝো। Door ১-৫-এর সব কৌশল এখানে একসাথে।</div></div>

<div class="svg-diagram">
<svg viewBox="0 0 580 280" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto">
  <text x="290" y="25" text-anchor="middle" fill="#e2e8f0" font-size="13" font-weight="900">🤝 TLS 1.3 Handshake: 1-RTT</text>
  <rect x="20" y="50" width="120" height="220" rx="8" fill="#1e3a5f" stroke="#22d3ee" stroke-width="2"/>
  <text x="80" y="72" text-anchor="middle" fill="#67e8f9" font-size="9" font-weight="700">CLIENT</text>
  <rect x="440" y="50" width="120" height="220" rx="8" fill="#450a0a" stroke="#f87171" stroke-width="2"/>
  <text x="500" y="72" text-anchor="middle" fill="#fca5a5" font-size="9" font-weight="700">SERVER</text>
  <line x1="140" y1="100" x2="440" y2="100" stroke="#fbbf24" stroke-width="2" marker-end="url(#arrTLS1)"/>
  <text x="290" y="95" text-anchor="middle" fill="#fcd34d" font-size="10">ClientHello + KeyShare</text>
  <line x1="440" y1="130" x2="140" y2="130" stroke="#22c55e" stroke-width="2" marker-end="url(#arrTLS1)"/>
  <text x="290" y="125" text-anchor="middle" fill="#4ade80" font-size="10">ServerHello + KeyShare + Cert + Finished</text>
  <line x1="140" y1="160" x2="440" y2="160" stroke="#22c55e" stroke-width="1.5" stroke-dasharray="4,3" marker-end="url(#arrTLS1)"/>
  <text x="290" y="155" text-anchor="middle" fill="#4ade80" font-size="10">Client Finished (encrypted)</text>
  <rect x="160" y="190" width="260" height="30" rx="6" fill="#052e16" stroke="#22c55e" stroke-width="1.5"/>
  <text x="290" y="210" text-anchor="middle" fill="#4ade80" font-size="8">Secure channel established!</text>
  <text x="290" y="245" text-anchor="middle" fill="#94a3b8" font-size="10">TLS 1.3: 1-RTT (TLS 1.2 needed 2-RTT)</text>
  <text x="290" y="260" text-anchor="middle" fill="#94a3b8" font-size="10">0-RTT resumption for returning clients</text>
  <defs><marker id="arrTLS1" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="#475569"/></marker></defs>
</svg>
</div>
<div class="svg-caption">চিত্র: TLS 1.3 handshake — মাত্র ১টি round trip! TLS 1.2-এর চেয়ে দ্রুত।</div>

<div class="secret-box">🤝 <strong>TLS = চার বার্তায় সম্পূর্ণ এনক্রিপ্টেড সংযোগ।</strong> AES + DH + Hash + Certificate — সব মিলে এক handshake। কিন্তু handshake-এর পরে — ক্লায়েন্ট কীভাবে প্রমাণ করবে সে যে সে? সেশন বা JWT — পরের দরজায়।</div>`,
  senior: {
    title: "TLS 1.3 Handshake এক নজরে",
    body: `<table class="kv-table"><tr><th>ধাপ</th><th>কী ঘটে</th></tr>
<tr><td class="hl">Client Hello</td><td>cipher list, DH params পাঠায়</td></tr>
<tr><td class="hl">Server Hello</td><td>cipher বাছে, সার্টিফিকেট + DH পাঠায়</td></tr>
<tr><td class="hl">Key Exchange</td><td>ECDHE দিয়ে shared secret</td></tr>
<tr><td class="hl">Finished</td><td>সব এনক্রিপ্টেড — verify hash</td></tr>
<tr><td class="hl">1-RTT</td><td>১ round trip — 1.2-এর চেয়ে দ্রুত</td></tr>
<tr><td class="hl">0-RTT</td><td>পুরোনো সেশনে ০ round trip</td></tr></table>`
  }
});

doors.push({
  num: 7,
  icon: "🎫",
  color: "#dc2626",
  name: "টোকেনের খেলা",
  subtitle: "The Token Game",
  tech: "JWT vs Session — JSON Web Token (Jones 2015), stateless auth, refresh tokens, OAuth 2.0, algorithm confusion",
  spirit: "বারাআত — অনুমতি, প্রবেশের অধিকার",
  secret: "JWT = স্টেটলেস টোকেন। header.payload.signature। সার্ভার কিছু মনে রাখে না — টোকেন নিজেই পরিচয়। কিন্তু বিপদ — অ্যালগরিদম কনফিউশন, expiry যাচাই না করা।",
  recall: {
    q: " JWT ও Session-এর পার্থক্য কী? JWT-এর তিনটি অংশ কী?",
    qen: "What is the difference between JWT and Session? What are the three parts of JWT?",
    a: "Session = সার্ভারে state। JWT = ক্লায়েন্টে state (স্টেটলেস)। JWT = header.signature। signature = HMAC বা RSA।",
    aen: "Session = server state. JWT = client state (stateless). JWT = header.signature. Signature = HMAC or RSA."
  },
  story: `<p class="scene-setting">বিলাল (Door ৬) তোমাকে TLS handshake শিখিয়েছেন। কিন্তু handshake-এর পরে — ক্লায়েন্ট কীভাবে প্রমাণ করবে সে যে সে? দুটি উপায়: Session বা JWT। Session = সার্ভারে একটি ফাইল, ক্লায়েন্টে cookie। সার্ভার মনে রাখে। JWT = ক্লায়েন্টে সম্পূর্ণ টোকেন। সার্ভার কিছু মনে রাখে না — স্টেটলেস।</p>
<p class="scene-setting en">Bilal (Door 6) taught you TLS handshake. But after handshake — how does the client prove who they are? Two ways: Session or JWT. Session = file on server, cookie on client. Server remembers. JWT = complete token on client. Server remembers nothing — stateless.</p>

<div class="dialogue"><strong>টোকেন-কারিগর রুকাইয়া:</strong> JWT তিনটি অংশে বিভক্ত — header.payload.signature। প্রতিটি base64-এ encoded। শুধু signature গোপন — HMAC বা RSA দিয়ে। কেউ payload বদলালে signature মেলে না। কিন্তু বিপদ: কেউ alg=none দিলে? বা HS256 এর জায়গায় RS256 দিলে? Algorithm confusion attack! সমাধান: সর্বদা algorithm সার্ভারে নির্দিষ্ট করো।</div>
<div class="dialogue en"><strong>Token Artisan Rukayya:</strong> JWT has three parts — header.payload.signature. Each base64 encoded. Only signature is secret — HMAC or RSA. If someone changes payload, signature won't match. But danger: alg=none? Or HS256 instead of RS256? Algorithm confusion attack! Solution: always specify algorithm server-side.</div>

<div class="code-block"># — JWT বাস্তবে দেখো —

  # JWT একটি দীর্ঘ স্ট্রিং:
  eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyIjoiYWxpIn0.abc123...

  # তিনটি অংশ decode করো:
  $ echo "eyJhbGciOiJIUzI1NiJ9" | base64 -d
  {"alg":"HS256"}                    ← header

  $ echo "eyJ1c2VyIjoiYWxpIn0" | base64 -d
  {"user":"ali","exp":1735689600}    ← payload (গোপন নয়!)

  # signature গোপন — HMAC-SHA256(secret, header.payload)
  # কেউ payload বদলালে signature মেলে না

  # Python-এ JWT:
  import jwt
  token = jwt.encode({"user": "ali"}, "secret", algorithm="HS256")
  decoded = jwt.decode(token, "secret", algorithms=["HS256"])
  # {"user": "ali"} ← যাচাই হয়েছে

  # ⚠️ algorithms=["HS256"] — সর্বদা নির্দিষ্ট করো!
  # ❌ algorithms=None → algorithm confusion attack</div>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>JWT বিপদ:</strong><br>
<strong>alg=none:</strong> কেউ অ্যালগরিদম বাদ দিলে — কিছু লাইব্রেরি signature যাচাই করে না!<br>
<strong>HS256 কনফিউশন:</strong> সার্ভার RS256 (RSA) ব্যবহার করে। আক্রমণকারী HS256 দিয়ে public key কে HMAC secret ধরে স্বাক্ষর করে!<br>
<strong>সমাধান:</strong> সর্বদা algorithms সার্ভারে নির্দিষ্ট করো। exp যাচাই করো। refresh token ব্যবহার করো।</div></div>

<div class="verse">وَلَا تَقْفُ مَا لَيْسَ لَكَ بِهِ عِلْمٌ</div>
<div style="font-size:.85rem;color:var(--ink-dim);text-align:center;margin-bottom:1rem">"এবং তুমি তার অনুসরণ করো না যার বিষয়ে তোমার জ্ঞান নেই।" — কুরআন ১৭:৩৬</div>

<p class="scene-setting">বারাআত — অনুমতি। JWT সেই অনুমতির ডিজিটাল রূপ। কিন্তু অনুমতি যাচাই ছাড়া — অন্ধ বিশ্বাস বিপজ্জনক। "যার বিষয়ে জ্ঞান নেই তার অনুসরণ করো না" — JWT-তে এর অর্থ: algorithm যাচাই করো, expiry দেখো, signature পরীক্ষা করো।</p>
<p class="scene-setting en">Bara'ah — permission. JWT is the digital form of that permission. But permission without verification — blind trust is dangerous. "Do not follow what you have no knowledge of" — in JWT this means: verify algorithm, check expiry, test signature.</p>

<div class="callout tip"><span class="co-icon">🔗</span><div><strong>Book ৪০ (Software Engineering) Door ৮ (Security):</strong> OWASP Top 10-এ broken access control #১! JWT ভুল কনফিগারেশন = access control ভাঙা।</div></div>

<div class="svg-diagram">
<svg viewBox="0 0 580 250" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto">
  <text x="290" y="25" text-anchor="middle" fill="#e2e8f0" font-size="13" font-weight="900">🎫 JWT: Three Parts Separated by Dots</text>
  <rect x="20" y="60" width="170" height="80" rx="8" fill="#052e16" stroke="#22c55e" stroke-width="2"/>
  <text x="105" y="82" text-anchor="middle" fill="#4ade80" font-size="8" font-weight="700">HEADER</text>
  <text x="105" y="100" text-anchor="middle" fill="#86efac" font-size="10">{ "alg": "HS256",</text>
  <text x="105" y="112" text-anchor="middle" fill="#86efac" font-size="10">"typ": "JWT" }</text>
  <text x="105" y="130" text-anchor="middle" fill="#94a3b8" font-size="10">base64 encoded</text>
  <rect x="200" y="60" width="170" height="80" rx="8" fill="#1e3a5f" stroke="#22d3ee" stroke-width="2"/>
  <text x="285" y="82" text-anchor="middle" fill="#7dd3fc" font-size="8" font-weight="700">PAYLOAD</text>
  <text x="285" y="100" text-anchor="middle" fill="#bae6fd" font-size="10">{ "sub": "1234",</text>
  <text x="285" y="112" text-anchor="middle" fill="#bae6fd" font-size="10">"role": "admin",</text>
  <text x="285" y="124" text-anchor="middle" fill="#bae6fd" font-size="10">"exp": 1735689600 }</text>
  <text x="285" y="135" text-anchor="middle" fill="#94a3b8" font-size="10">NOT encrypted! just b64</text>
  <rect x="380" y="60" width="180" height="80" rx="8" fill="#450a0a" stroke="#f87171" stroke-width="2"/>
  <text x="470" y="82" text-anchor="middle" fill="#fca5a5" font-size="8" font-weight="700">SIGNATURE</text>
  <text x="470" y="100" text-anchor="middle" fill="#fca5a5" font-size="10">HMAC-SHA256(</text>
  <text x="470" y="112" text-anchor="middle" fill="#fca5a5" font-size="10">base64(header) + "."</text>
  <text x="470" y="124" text-anchor="middle" fill="#fca5a5" font-size="10">+ base64(payload),</text>
  <text x="470" y="136" text-anchor="middle" fill="#f87171" font-size="10">SECRET_KEY )</text>
  <text x="195" y="105" fill="#94a3b8" font-size="8" font-weight="900">.</text>
  <text x="375" y="105" fill="#94a3b8" font-size="8" font-weight="900">.</text>
  <rect x="100" y="170" width="380" height="50" rx="8" fill="#0f172a" stroke="#64748b" stroke-width="1"/>
  <text x="290" y="190" text-anchor="middle" fill="#e2e8f0" font-size="10">Stateless: server stores NOTHING</text>
  <text x="290" y="205" text-anchor="middle" fill="#94a3b8" font-size="10">Token validates via signature check only</text>
</svg>
</div>
<div class="svg-caption">চিত্র: JWT — header.payload.signature। Payload এনক্রিপ্টেড নয়, শুধু signature গোপন।</div>

<div class="secret-box">🎫 <strong>JWT = স্টেটলেস টোকেন। তিন অংশ। signature গোপন।</strong> সার্ভার মনে রাখে না, টোকেন নিজেই পরিচয়। কিন্তু পরিচয় ছাড়াও একটি বিপদ — কেউ ক্ষতিকর ইনপুট পাঠালে? SQL injection, XSS? সেই প্রতিরোধ — পরের দরজায়।</div>`,
  senior: {
    title: "JWT vs Session এক নজরে",
    body: `<table class="kv-table"><tr><th>ধারণা</th><th>বিবরণ</th></tr>
<tr><td class="hl">Session</td><td>সার্ভারে state — স্টেটফুল</td></tr>
<tr><td class="hl">JWT (2015)</td><td>ক্লায়েন্টে — স্টেটলেস</td></tr>
<tr><td class="hl">header.payload.signature</td><td>তিন base64 অংশ</td></tr>
<tr><td class="hl">HS256</td><td>HMAC-SHA256 — symmetric</td></tr>
<tr><td class="hl">RS256</td><td>RSA-SHA256 — asymmetric</td></tr>
<tr><td class="hl">⚠️ alg=none</td><td>Attack — সর্বদা algorithms নির্দিষ্ট করো</td></tr>
<tr><td class="hl">Refresh Token</td><td>দীর্ঘ মেয়াদী — access token রিনিউ</td></tr></table>`
  }
});

doors.push({
  num: 8,
  icon: "⚔️",
  color: "#dc2626",
  name: "ইনজেকশনের বিষ",
  subtitle: "The Poison of Injection",
  tech: "OWASP Injection — SQL injection, XSS, CSRF, command injection, parameterized queries, CSP",
  spirit: "ফিতনা — বিপর্যয়, বিশ্বাসঘাতক ইনপুট",
  secret: "Injection = বিশ্বাসঘাতক ইনপুট। সমাধান: কখনো ইনপুটকে কোড হিসেবে ব্যাখ্যা করো না। Parameterized query, escaped output, CSP header — সব ইনপুট শত্রু।",
  recall: {
    q: " SQL injection কী? কীভাবে প্রতিরোধ করা যায়?",
    qen: "What is SQL injection? How to prevent it?",
    a: "অ্যাটাকার SQL কোড ইনপুট করে। ' OR 1=1 -- → সব রো ফেরত। প্রতিরোধ: parameterized query (cursor.execute(sql, params))। কখনো f-string বা string concatenation নয়।",
    aen: "Attacker inputs SQL code. ' OR 1=1 -- → all rows. Prevent: parameterized queries. Never f-string or concatenation."
  },
  story: `<p class="scene-setting">রুকাইয়া (Door ৭) তোমাকে JWT শিখিয়েছেন। কিন্তু পরিচয় ছাড়াও একটি বিপদ — কেউ ক্ষতিকর ইনপুট পাঠালে। "admin' OR 1=1 --" — এই সহজ স্ট্রিং পুরো ডেটাবেস খুলে দিতে পারে! এটাই injection — ইনপুটকে কোড হিসেবে ব্যাখ্যা করা। OWASP Top 10-এ #৩।</p>
<p class="scene-setting en">Rukayya (Door 7) taught you JWT. But beyond identity — a danger: someone sends malicious input. "admin' OR 1=1 --" — this simple string can open the entire database! This is injection — interpreting input as code. OWASP Top 10 #3.</p>

<div class="dialogue"><strong>প্রাচীর-রক্ষক আনাস:</strong> তিন ধরনের injection: SQL (ডেটাবেস), XSS (ব্রাউজার), CSRF (ক্রিয়া)। SQL: raw query তে ইনপুট যোগ করো না — parameterized query ব্যবহার করো। XSS: HTML-এ raw ইনপুট দেখিও না — escape করো। CSRF: প্রতিটি POST-এ token দাও। একটাই নিয়ম: সব ইনপুট শত্রু — যাচাই ছাড়া বিশ্বাস করো না।</div>
<div class="dialogue en"><strong>Wall Guardian Anas:</strong> Three types of injection: SQL (database), XSS (browser), CSRF (action). SQL: never add input to raw query — use parameterized queries. XSS: never show raw input in HTML — escape. CSRF: give token on every POST. One rule: all input is hostile — don't trust without verification.</div>

<div class="code-block">— Injection প্রতিরোধ —

  # ❌ SQL Injection (VULNERABLE!)
  user = request.GET['user']
  cursor.execute(f"SELECT * FROM users WHERE name = '{user}'")
  # Input: admin' OR 1=1 --
  # SQL: SELECT * FROM users WHERE name = 'admin' OR 1=1 --'
  # ফলাফল: সব ইউজার ফেরত!

  # ✅ Parameterized Query (নিরাপদ)
  cursor.execute(
      "SELECT * FROM users WHERE name = %s",
      [user]  # parameterized — কোড থেকে আলাদা
  )

  # ❌ XSS (VULNERABLE!)
  return f"<h1>Hello {user_input}</h1>"
  # Input: <script>steal('cookies')</script>

  # ✅ Escape (Django auto-escapes)
  {{ user_input }}  ← Django template auto-escapes
  # বা mark_safe শুধু যাচাইকৃত কন্টেন্টে

  # ✅ CSP Header (XSS প্রতিরোধ)
  Content-Security-Policy: script-src 'self' 'nonce-abc123'

  # ✅ CSRF Token (Django default)
  {% csrf_token %}  ← প্রতিটি form-এ</div>

<div class="verse">إِنَّ الَّذِينَ يَرْمُونَ الْمُحْصَنَاتِ الْغَافِلَاتِ الْمُؤْمِنَاتِ</div>
<div style="font-size:.85rem;color:var(--ink-dim);text-align:center;margin-bottom:1rem">"নিশ্চয়ই যারা অজ্ঞ নির্দোষ মুমিন নারীদের প্রতি অপবাদ দেয়..." — কুরআন ২৪:২৩</div>

<p class="scene-setting">ফিতনা — বিশৃঙ্খলা, বিশ্বাসঘাতকতা। Injection সেই ফিতনার ডিজিটাল রূপ। বিশ্বাস করা ইনপুটকে বিশ্বাসঘাতক কোডে রূপ দেওয়া। প্রতিরোধ: সব ইনপুট যাচাই করো — শত্রু হিসেবে ধরো। পরামর্শ: কখনো অপবাদ গ্রহণ করো না যাচাই ছাড়া।</p>
<p class="scene-setting en">Fitnah — chaos, betrayal. Injection is the digital form of that fitnah. Transforming trusted input into treacherous code. Prevention: verify all input — treat as hostile. Counsel: never accept accusation without verification.</p>

<div class="callout tip"><span class="co-icon">🔗</span><div><strong>Book ৪০ (Software Engineering) Door ৮ (Security):</strong> OWASP Top 10 সম্পূর্ণ তালিকা। Book ৩৯ (Databases) Door ৪ (SQL): parameterized query শিখেছিলে — এখন দেখো কেন।</div></div>

<div class="svg-diagram">
<svg viewBox="0 0 580 250" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto">
  <text x="290" y="25" text-anchor="middle" fill="#e2e8f0" font-size="13" font-weight="900">⚔️ Injection: SQL, XSS, CSRF</text>
  <rect x="20" y="55" width="160" height="80" rx="8" fill="#450a0a" stroke="#f87171" stroke-width="2"/>
  <text x="100" y="78" text-anchor="middle" fill="#fca5a5" font-size="9" font-weight="700">SQL Injection</text>
  <text x="100" y="98" text-anchor="middle" fill="#fca5a5" font-size="10">input: ' OR 1=1 --</text>
  <text x="100" y="112" text-anchor="middle" fill="#f87171" font-size="10">query: SELECT * WHERE</text>
  <text x="100" y="122" text-anchor="middle" fill="#f87171" font-size="10">name='' OR 1=1 --</text>
  <text x="100" y="140" text-anchor="middle" fill="#22c55e" font-size="10">Fix: parameterized query</text>
  <rect x="210" y="55" width="160" height="80" rx="8" fill="#451a0a" stroke="#fbbf24" stroke-width="2"/>
  <text x="290" y="78" text-anchor="middle" fill="#fcd34d" font-size="9" font-weight="700">XSS</text>
  <text x="290" y="98" text-anchor="middle" fill="#fcd34d" font-size="10">input: &lt;script&gt;steal()&lt;/script&gt;</text>
  <text x="290" y="112" text-anchor="middle" fill="#fbbf24" font-size="10">rendered in browser</text>
  <text x="290" y="122" text-anchor="middle" fill="#fbbf24" font-size="10">cookie stolen!</text>
  <text x="290" y="140" text-anchor="middle" fill="#22c55e" font-size="10">Fix: escape output, CSP</text>
  <rect x="400" y="55" width="160" height="80" rx="8" fill="#1e3a5f" stroke="#22d3ee" stroke-width="2"/>
  <text x="480" y="78" text-anchor="middle" fill="#7dd3fc" font-size="9" font-weight="700">CSRF</text>
  <text x="480" y="98" text-anchor="middle" fill="#7dd3fc" font-size="10">evil site sends POST</text>
  <text x="480" y="112" text-anchor="middle" fill="#22d3ee" font-size="10">browser adds cookie</text>
  <text x="480" y="122" text-anchor="middle" fill="#22d3ee" font-size="10">unauthorized action!</text>
  <text x="480" y="140" text-anchor="middle" fill="#22c55e" font-size="10">Fix: CSRF token</text>
  <rect x="100" y="160" width="380" height="60" rx="8" fill="#052e16" stroke="#22c55e" stroke-width="2"/>
  <text x="290" y="185" text-anchor="middle" fill="#4ade80" font-size="9" font-weight="700">Universal Defense</text>
  <text x="290" y="205" text-anchor="middle" fill="#86efac" font-size="10">Never trust input · Validate · Sanitize · Escape · Parameterize</text>
</svg>
</div>
<div class="svg-caption">চিত্র: SQL injection, XSS, CSRF — তিন রূপ। Fix: validate, escape, parameterize।</div>

<div class="secret-box">⚔️ <strong>Injection = বিশ্বাসঘাতক ইনপুট।</strong> SQL, XSS, CSRF — তিন রূপ। প্রতিরোধ: parameterized query, escaped output, CSRF token, CSP header। কিন্তু সবচেয়ে শক্তিশালী প্রতিরোধ কী? প্রতিটি অনুরোধকে শত্রু হিসেবে দেখা — সেই দর্শন — পরের দরজায়।</div>`,
  senior: {
    title: "Injection Attacks এক নজরে",
    body: `<table class="kv-table"><tr><th>আক্রমণ</th><th>প্রতিরোধ</th></tr>
<tr><td class="hl">SQL Injection</td><td>Parameterized query</td></tr>
<tr><td class="hl">XSS</td><td>Escape output + CSP</td></tr>
<tr><td class="hl">CSRF</td><td>CSRF token</td></tr>
<tr><td class="hl">Command Injection</td><td>Subprocess, not shell=True</td></tr>
<tr><td class="hl">LDAP Injection</td><td>Escape LDAP filter</td></tr>
<tr><td class="hl">Rule</td><td>সব ইনপুট শত্রু — যাচাই করো</td></tr></table>`
  }
});

doors.push({
  num: 9,
  icon: "🛡️",
  color: "#dc2626",
  name: "দরোয়ানের নিয়ম",
  subtitle: "The Bouncer's Rules",
  tech: "Web Security Defenses — CORS, CSP, rate limiting, WAF, security headers, HSTS",
  spirit: "হিমায়াহ — সুরক্ষা, প্রতিটি দরজায় প্রহরী",
  secret: "একটি অ্যাপ্লিকেশনে একাধিক প্রতিরক্ষা স্তর — CORS, CSP, rate limit, WAF। কোনো একটি ভাঙলে অন্যটি রক্ষা করে। Defense in depth।",
  recall: {
    q: " CORS কী? CSP কী? কেন দরকার?",
    qen: "What is CORS? What is CSP? Why are they needed?",
    a: "CORS = Cross-Origin Resource Sharing — কোন ডোমেইন থেকে API access পাবে। CSP = Content Security Policy — কোন script/style load হবে। XSS প্রতিরোধ।",
    aen: "CORS = which domains can access your API. CSP = which scripts/styles can load. Prevents XSS."
  },
  story: `<p class="scene-setting">আনাস (Door ৮) তোমাকে injection প্রতিরোধ শিখিয়েছেন। কিন্তু প্রতিরোধ শুধু injection-এ নয় — প্রতিটি স্তরে দরকার। CORS বলে কোন ডোমেইন তোমার API ডাকতে পারে। CSP বলে কোন script চলবে। Rate limit বলে কেউ একসাথে কতবার চেষ্টা করতে পারে। HSTS বলে সর্বদা HTTPS ব্যবহার করো। এগুলো দরোয়ান — প্রতিটি দরজায়।</p>
<p class="scene-setting en">Anas (Door 8) taught you injection prevention. But defense is not just injection — needed at every layer. CORS says which domains can call your API. CSP says which scripts run. Rate limit says how many attempts per time. HSTS says always use HTTPS. These are bouncers — at every door.</p>

<div class="dialogue"><strong>দরোয়ান-প্রধান ওমর:</strong> Defense in depth — একাধিক স্তর। কোনো একটি ভাঙলে অন্যটি রক্ষা করে। CORS: শুধু তোমার ডোমেইন থেকে API access। CSP: শুধু trusted script। Rate limit: ১০০ request/মিনিট। WAF: OWASP rules automatically। HSTS: HTTPS বাধ্যতামূলক। প্রতিটি স্তর একটি ঢাল।</div>
<div class="dialogue en"><strong>Chief Bouncer Umar:</strong> Defense in depth — multiple layers. If one breaks, another protects. CORS: only your domain accesses API. CSP: only trusted scripts. Rate limit: 100 req/min. WAF: OWASP rules automatically. HSTS: HTTPS mandatory. Each layer a shield.</div>

<div class="code-block">— Security Headers ও Defenses —

  # CORS (Cross-Origin Resource Sharing)
  Access-Control-Allow-Origin: https://yoursite.com
  Access-Control-Allow-Methods: GET, POST
  Access-Control-Allow-Headers: Content-Type

  # Django CORS:
  CORS_ALLOWED_ORIGINS = ["https://yoursite.com"]

  # CSP (Content Security Policy)
  Content-Security-Policy:
    default-src 'self';
    script-src 'self' 'nonce-abc123';
    style-src 'self';

  # Rate Limiting (Django REST Framework)
  REST_FRAMEWORK = {
      'DEFAULT_THROTTLE_CLASSES': [
          'rest_framework.throttling.AnonRateThrottle',
      ],
      'DEFAULT_THROTTLE_RATES': {
          'anon': '100/day',    # anonymous
          'user': '1000/day',   # authenticated
      }
  }

  # HSTS (Always HTTPS)
  SECURE_HSTS_SECONDS = 31536000  # ১ বছর
  SECURE_SSL_REDIRECT = True

  # Security Checklist:
  # ✅ HTTPS (HSTS)
  # ✅ CORS (whitelist domains)
  # ✅ CSP (whitelist scripts)
  # ✅ Rate limiting
  # ✅ WAF (Cloudflare/AWS WAF)
  # ✅ Input validation</div>

<div class="verse">وَاتَّخَذُوا مِن دُونِ اللَّهِ أَوْلِيَاءَ لَا يَحْفَظُونَهُمْ</div>
<div style="font-size:.85rem;color:var(--ink-dim);text-align:center;margin-bottom:1rem">"তারা আল্লাহকে ছেড়ে অভিভাবক নিয়েছে যারা তাদের রক্ষা করে না।" — কুরআন ৩৬:৩২</div>

<p class="scene-setting">হিমায়াহ — সুরক্ষা। প্রতিটি security header একটি প্রহরী। কিন্তু ভুল প্রহরী নিলে রক্ষা হয় না — "যারা রক্ষা করে না তাদের অভিভাবক বানিও না।" সঠিক defense বাছো — parameterized query, CORS whitelist, CSP nonce।</p>
<p class="scene-setting en">Himayah — protection. Each security header is a guardian. But a wrong guardian won't protect — "do not take as guardians those who cannot protect." Choose correct defense — parameterized queries, CORS whitelist, CSP nonce.</p>

<div class="callout tip"><span class="co-icon">🔗</span><div><strong>Book ৩৭ (Networks) Door ৯ (TLS):</strong> HSTS = HTTPS বাধ্যতামূলক। Book ৪৩ (Cloud DevOps) Door ৬: WAF ও Cloudflare। Book ৪০ (Software Engineering) Door ৮: OWASP Top 10।</div></div>

<div class="svg-diagram">
<svg viewBox="0 0 580 250" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto">
  <text x="290" y="25" text-anchor="middle" fill="#e2e8f0" font-size="13" font-weight="900">🛡️ Defense in Depth: Multiple Security Layers</text>
  <rect x="180" y="50" width="220" height="40" rx="20" fill="#450a0a" stroke="#f87171" stroke-width="2"/>
  <text x="290" y="75" text-anchor="middle" fill="#fca5a5" font-size="8">WAF (Web Application Firewall)</text>
  <rect x="160" y="95" width="260" height="40" rx="20" fill="#451a0a" stroke="#fbbf24" stroke-width="2"/>
  <text x="290" y="120" text-anchor="middle" fill="#fcd34d" font-size="8">Rate Limiting + CORS + CSP</text>
  <rect x="140" y="140" width="300" height="40" rx="20" fill="#1e3a5f" stroke="#22d3ee" stroke-width="2"/>
  <text x="290" y="165" text-anchor="middle" fill="#7dd3fc" font-size="8">Authentication (JWT) + Authorization (RBAC)</text>
  <rect x="120" y="185" width="340" height="40" rx="20" fill="#052e16" stroke="#22c55e" stroke-width="2"/>
  <text x="290" y="210" text-anchor="middle" fill="#4ade80" font-size="8">Input Validation + Parameterized Queries + Encryption</text>
  <text x="290" y="240" text-anchor="middle" fill="#94a3b8" font-size="10">Each layer independent — if one breaks, others hold</text>
</svg>
</div>
<div class="svg-caption">চিত্র: Defense in depth — WAF → Rate limit → Auth → Validation। একটি ভাঙলে অন্যটি রক্ষা।</div>

<div class="secret-box">🛡️ <strong>Defense in depth — প্রতিটি স্তরে প্রহরী।</strong> CORS, CSP, rate limit, WAF, HSTS। কোনো একটি ভাঙলে অন্যটি রক্ষা। কিন্তু সবচেয়ে শক্তিশালী দর্শন — কেউ বিশ্বাসযোগ্য নয়। সেই দর্শন — শেষ দরজায়।</div>`,
  senior: {
    title: "Security Defenses এক নজরে",
    body: `<table class="kv-table"><tr><th>Defense</th><th>কী করে</th></tr>
<tr><td class="hl">CORS</td><td>ডোমেইন whitelist — কে API ডাকে</td></tr>
<tr><td class="hl">CSP</td><td>Script whitelist — XSS প্রতিরোধ</td></tr>
<tr><td class="hl">Rate Limit</td><td>request/মিনিট সীমা</td></tr>
<tr><td class="hl">WAF</td><td>OWASP rules — automated</td></tr>
<tr><td class="hl">HSTS</td><td>HTTPS বাধ্যতামূলক</td></tr>
<tr><td class="hl">Defense in Depth</td><td>একাধিক স্তর — কেউ ভাঙলে অন্য রক্ষা</td></tr></table>`
  }
});

doors.push({
  num: 10,
  icon: "🏰",
  color: "#dc2626",
  name: "বিশ্বাসের দুর্গ",
  subtitle: "The Fortress of Zero Trust",
  tech: "Zero Trust Architecture — BeyondCorp (Google 2014), never trust always verify, mTLS, microsegmentation, synthesis",
  spirit: "হিকমাহ — প্রয়োগিক জ্ঞান, সব প্রতিরক্ষার সমন্বয়",
  secret: "Never trust, always verify। কেউ বিশ্বাসযোগ্য নয় — অভ্যন্তরীণ বা বাহ্যিক। প্রতিটি অনুরোধ যাচাই। mTLS, microsegmentation, least privilege। এটাই Zero Trust — Google BeyondCorp (২০১৪) থেকে।",
  recall: {
    q: " Zero Trust Architecture কী? BeyondCorp কী?",
    qen: "What is Zero Trust Architecture? What is BeyondCorp?",
    a: "Never trust, always verify। প্রতিটি অনুরোধ যাচাই — অভ্যন্তরীণ বা বাহ্যিক। BeyondCorp = Google-এর Zero Trust implementation (২০১৪)। VPN নয়, device + user যাচাই।",
    aen: "Never trust, always verify. Every request verified — internal or external. BeyondCorp = Google's Zero Trust implementation (2014). Not VPN — device + user verification."
  },
  story: `<p class="scene-setting">নয়টি দরজা পেরিয়েছো। কামরান এনক্রিপশন, জাইনাব চাবি আদান, হামজা হ্যাশ, সাফওয়ান পাসওয়ার্ড, ইমরান সার্টিফিকেট, বিলাল TLS, রুকাইয়া JWT, আনাস injection, ওমর defense। এখন সব মেলাও — একটি দুর্গ। একটি দুর্গ যেখানে কেউ বিশ্বাসযোগ্য নয়। প্রতিটি দরজায় যাচাই। এটাই Zero Trust।</p>
<p class="scene-setting en">Nine doors passed. Kamran encryption, Zainab key exchange, Hamza hashing, Safwan passwords, Imran certificates, Bilal TLS, Rukayya JWT, Anas injection, Umar defense. Now combine them all — a fortress. A fortress where no one is trusted. Every door verified. This is Zero Trust.</p>

<div class="callout info"><span class="co-icon">🏰</span><div><strong>সম্পূর্ণ ক্রিপ্টোগ্রাফি — নয় দরজার সমন্বয়:</strong><br>
<strong>Door ১ — কামরান (AES/RSA):</strong> ডেটা এনক্রিপ্ট<br>
<strong>Door ২ — জাইনাব (DH):</strong> চাবি আদান<br>
<strong>Door ৩ — হামজা (Hash):</strong> অখণ্ডতা যাচাই<br>
<strong>Door ৪ — সাফওয়ান (Password):</strong> ইউজার যাচাই<br>
<strong>Door ৫ — ইমরান (Certificate):</strong> সার্ভার যাচাই<br>
<strong>Door ৬ — বিলাল (TLS):</strong> সংযোগ সুরক্ষা<br>
<strong>Door ৭ — রুকাইয়া (JWT):</strong> অনুমতি প্রদান<br>
<strong>Door ৮ — আনাস (Injection):</strong> ইনপুট প্রতিরোধ<br>
<strong>Door ৯ — ওমর (Defense):</strong> একাধিক স্তর</div></div>

<div class="code-block">— Zero Trust in Practice (Docker + K8s) —

  # Docker: প্রতিটি container আইসোলেটেড
  docker run --read-only \
    --cap-drop ALL \
    --user 1000:1000 \
    --network none \
    myapp:latest

  # mTLS (mutual TLS) — Istio service mesh
  apiVersion: security.istio.io/v1beta1
  kind: PeerAuthentication
  metadata: {name: default}
  spec:
    mtls: {mode: STRICT}    # প্রতিটি সংযোগ যাচাই

  # Network Policy — শুধু প্রয়োজনীয় সংযোগ
  apiVersion: networking.k8s.io/v1
  kind: NetworkPolicy
  spec:
    podSelector: {matchLabels: {app: api}}
    policyTypes: [Ingress]
    ingress:
    - from:
      - podSelector: {matchLabels: {app: frontend}}
      ports: [{protocol: TCP, port: 8000}]

  # Zero Trust Checklist:
  # ✅ প্রতিটি অনুরোধ যাচাই (device + user)
  # ✅ mTLS সব service-এ
  # ✅ Least privilege (শুধু প্রয়োজনীয় access)
  # ✅ Microsegmentation (ছোট ছোট zone)
  # ✅ Audit logging (প্রতিটি ক্রিয়া লগ)</div>

<div class="stat-grid">
<div class="stat-card"><div class="sc-num">৯</div><div class="sc-label">শিক্ষক</div></div>
<div class="stat-card"><div class="sc-num">৫০+</div><div class="sc-label">বছরের গবেষণা</div></div>
<div class="stat-card"><div class="sc-num">∞</div><div class="sc-label">প্রয়োগ</div></div>
<div class="stat-card"><div class="sc-num">০</div><div class="sc-label">বিশ্বাস</div></div>
</div>

<div class="verse">اللَّهُ نُورُ السَّمَاوَاتِ وَالْأَرْضِ</div>
<div style="font-size:.85rem;color:var(--ink-dim);text-align:center;margin-bottom:1rem">"আল্লাহ আসমান ও পৃথিবীর আলো।" — কুরআন ২৪:৩৫</div>

<p class="scene-setting">নূর — আলো। ক্রিপ্টোগ্রাফি হলো সেই আলো যা অন্ধকারে নিরাপত্তা দেয়। বাইরে থেকে একটি HTTPS সংযোগ সহজ মনে হয় — কিন্তু ভেতরে নয়টি স্তর কাজ করছে। AES এনক্রিপ্ট, DH চাবি আদান, SHA যাচাই, bcrypt পাসওয়ার্ড, CA সার্টিফিকেট, TLS হ্যান্ডশেক, JWT অনুমতি, injection প্রতিরোধ, defense in depth। সব মিলে — একটি দুর্গ। কোথাও কোনো দুর্বলতা নেই। এটাই Zero Trust — সর্বোচ্চ সতর্কতা, সর্বনিম্ন বিশ্বাস।</p>
<p class="scene-setting en">Nur — light. Cryptography is the light that provides security in darkness. Outside, an HTTPS connection seems simple — but inside, nine layers work. AES encrypts, DH exchanges keys, SHA verifies, bcrypt passwords, CA certificates, TLS handshake, JWT authorization, injection prevention, defense in depth. Together — a fortress. No weakness anywhere. This is Zero Trust — maximum vigilance, minimum trust.</p>

<div class="callout tip"><span class="co-icon">🔗</span><div><strong>সম্পূর্ণ লাইব্রেরি সংযোগ:</strong> Book ৩৭ (Networks) Door ৯ (TLS) → handshake। Book ৪৮ (Discrete Math) Door ৯ (Number Theory) → RSA math। Book ৪০ (Software Engineering) Door ৮ (Security) → OWASP। Book ৪৩ (Cloud DevOps) → mTLS, network policy। এই বই সবার নিরাপত্তার ভিত্তি।</div></div>

<div class="checklist">
<li>🔐 <code>openssl enc -aes-256-cbc</code> দিয়ে ফাইল এনক্রিপ্ট করো</li>
<li>🔑 <code>openssl genrsa</code> দিয়ে RSA keypair বানাও</li>
<li>#️⃣ SHA-256 hash দুটি ফাইলের তুলনা করো</li>
<li>📜 <code>openssl s_client</code> দিয়ে একটি সাইটের সার্টিফিকেট দেখো</li>
<li>🎫 JWT decode করো base64-এ</li>
<li>⚔️ Django-তে parameterized query লেখো</li>
<li>🏰 Docker read-only container চালাও</li>
<li>📖 "Real-World Cryptography" — David Wong পড়ো</li>
</div>

<div class="svg-diagram">
<svg viewBox="0 0 580 250" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto">
  <text x="290" y="25" text-anchor="middle" fill="#e2e8f0" font-size="13" font-weight="900">🏰 Zero Trust: Never Trust, Always Verify</text>
  <rect x="180" y="60" width="220" height="50" rx="25" fill="#450a0a" stroke="#f87171" stroke-width="2"/>
  <text x="290" y="82" text-anchor="middle" fill="#fca5a5" font-size="9" font-weight="700">OLD: Castle &amp; Moat</text>
  <text x="290" y="98" text-anchor="middle" fill="#fca5a5" font-size="10">Inside network = trusted ❌</text>
  <text x="200" y="140" fill="#94a3b8" font-size="8">↓ Evolution ↓</text>
  <rect x="120" y="155" width="340" height="70" rx="25" fill="#052e16" stroke="#22c55e" stroke-width="2.5"/>
  <text x="290" y="180" text-anchor="middle" fill="#4ade80" font-size="10" font-weight="700">ZERO TRUST</text>
  <text x="290" y="198" text-anchor="middle" fill="#86efac" font-size="10">Every request verified: Who? What? Where? When?</text>
  <text x="290" y="212" text-anchor="middle" fill="#86efac" font-size="10">mTLS · Identity per service · Micro-segmentation</text>
</svg>
</div>
<div class="svg-caption">চিত্র: Zero Trust — কেউ বিশ্বাসযোগ্য নয়। প্রতিটি অনুরোধ যাচাই।</div>

<div class="secret-box">🏰 <strong>ক্রিপ্টোগ্রাফি = নিরাপত্তার গণিত।</strong> নয়টি দরজা, নয়জন শিক্ষক, একটি দুর্গ। AES থেকে Zero Trust — ৫০ বছরের গবেষণা প্রতিটি HTTPS সংযোগে বেঁচে আছে। এখন তুমি জানো — শুধু কীভাবে নয়, কেন। কেন TLS দুই চাবি ব্যবহার করে। কেন হ্যাশ একমুখী। কেন salt দরকার। কেন সার্টিফিকেট মেয়াদ শেষ হয়। কেন প্রতিটি ইনপুট শত্রু। কেন কেউ বিশ্বাসযোগ্য নয়। এটাই হিকমাহ — নিরাপত্তার প্রয়োগিক জ্ঞান।</div>`,
  senior: {
    title: "সম্পূর্ণ ক্রিপ্টোগ্রাফি এক নজরে",
    body: `<table class="kv-table"><tr><th>স্তর</th><th>কী</th><th>দরজা</th></tr>
<tr><td class="hl">Encryption</td><td>AES + RSA</td><td>১</td></tr>
<tr><td class="hl">Key Exchange</td><td>Diffie-Hellman</td><td>২</td></tr>
<tr><td class="hl">Integrity</td><td>SHA-256 Hash</td><td>৩</td></tr>
<tr><td class="hl">Password</td><td>bcrypt / Argon2</td><td>৪</td></tr>
<tr><td class="hl">Identity</td><td>Certificate + CA</td><td>৫</td></tr>
<tr><td class="hl">Connection</td><td>TLS 1.3 Handshake</td><td>৬</td></tr>
<tr><td class="hl">Authorization</td><td>JWT / Session</td><td>৭</td></tr>
<tr><td class="hl">Input Defense</td><td>SQL/XSS/CSRF prevention</td><td>৮</td></tr>
<tr><td class="hl">Layered Defense</td><td>CORS, CSP, Rate Limit, WAF</td><td>৯</td></tr>
<tr><td class="hl">Zero Trust</td><td>সব মিলে — never trust</td><td>১০</td></tr></table>`
  }
});
