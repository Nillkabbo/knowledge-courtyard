const doors = [];

doors.push({
  num: 1,
  icon: "🏗️",
  color: "#38bdf8",
  name: "সাত তলার ভবন",
  subtitle: "The Seven-Story Building",
  tech: "OSI Model (ISO 1984) + TCP/IP Model (Cerf-Kahn 1974) — layered network architecture",
  spirit: "তাবাকা — স্তরে স্তরে গঠন, প্রতিটি স্তর আগের উপর নির্মিত",
  secret: "নেটওয়ার্ক = একটি সাত তলার ভবন। প্রতিটি তলে একটি নির্দিষ্ট কাজ। তুমি শুধু তোমার তল নিয়ে চিন্তা করো, উপরের বা নিচের তল প্রোটোকল সামলাবে।",
  recall: {
    q: " OSI মডেলে কয়টি স্তর আছে?",
    qen: "How many layers does the OSI model have?",
    a: "৭টি — Application, Presentation, Session, Transport, Network, Data Link, Physical।",
    aen: "7 — Application, Presentation, Session, Transport, Network, Data Link, Physical."
  },
  story: `<p class="scene-setting">তুমি একটি সাত তলার ভবনে দাঁড়িয়ে আছো। সপ্তম তলে একটি বার্তা লেখা হয়েছে। সেই বার্তাটি ষষ্ঠ তলে যায় — সেখানে একটি খামে ভরা হয়। পঞ্চম তলে একটি সেশন শুরু হয়। চতুর্থ তলে বার্তাটি ছোট ছোট টুকরোয় ভাগ করা হয়। তৃতীয় তলে প্রতিটি টুকরোর উপর ঠিকানা লেখা হয়। দ্বিতীয় তলে একটি ফ্রেমে ভরা হয়। প্রথম তলে — তারের ভেতর দিয়ে বৈদ্যুতিক সংকেত হিসেবে পাঠানো হয়।</p>
<p class="scene-setting en">You're standing in a seven-story building. On the seventh floor, a message is written. It goes to the sixth floor — put in an envelope. On the fifth, a session begins. On the fourth, the message is split into pieces. On the third, each piece gets an address. On the second, it's framed. On the first — it's sent as electrical signals through a wire.</p>

<div class="callout info"><span class="co-icon">🏢</span><div><strong>OSI মডেলের ৭টি স্তর (উপর থেকে নিচে):</strong><br>
<strong>৭. Application:</strong> ব্যবহারকারীর ইন্টারফেস — HTTP, FTP, SMTP<br>
<strong>৬. Presentation:</strong> এনক্রিপশন, কম্প্রেশন, ফরম্যাট — TLS, JPEG, JSON<br>
<strong>৫. Session:</strong> সংযোগ ব্যবস্থাপনা — সেশন খোলা/বন্ধ<br>
<strong>৪. Transport:</strong> নির্ভরযোগ্য পরিবহন — TCP, UDP<br>
<strong>৩. Network:</strong> ঠিকানা ও রাউটিং — IP<br>
<strong>২. Data Link:</strong> ফ্রেম, MAC ঠিকানা — Ethernet, Wi-Fi<br>
<strong>১. Physical:</strong> তার, সংকেত, বিট — কেবল, ফাইবার, রেডিও</div></div>

<div class="diagram">
<div class="diag-title">OSI vs TCP/IP — স্তর মিলন</div>
<svg viewBox="0 0 560 360" xmlns="http://www.w3.org/2000/svg">
<!-- Layer 7: Application -->
<rect x="20" y="30" width="370" height="38" rx="6" fill="rgba(82,196,26,.12)" stroke="#52c41a" stroke-width="1.5"/>
<circle cx="42" cy="49" r="12" fill="#52c41a"/>
<text x="42" y="49" fill="#060d16" font-size="13" font-weight="800" text-anchor="middle" dominant-baseline="central">7</text>
<text x="65" y="49" fill="#e8e6f0" font-size="13" font-weight="600" dominant-baseline="central">Application</text>
<text x="200" y="49" fill="#9290a8" font-size="11" dominant-baseline="central">HTTP · DNS · SMTP</text>
<!-- Layer 6: Presentation -->
<rect x="20" y="72" width="370" height="38" rx="6" fill="rgba(179,127,235,.12)" stroke="#b37feb" stroke-width="1.5"/>
<circle cx="42" cy="91" r="12" fill="#b37feb"/>
<text x="42" y="91" fill="#060d16" font-size="13" font-weight="800" text-anchor="middle" dominant-baseline="central">6</text>
<text x="65" y="91" fill="#e8e6f0" font-size="13" font-weight="600" dominant-baseline="central">Presentation</text>
<text x="200" y="91" fill="#9290a8" font-size="11" dominant-baseline="central">TLS · JPEG · JSON</text>
<!-- Layer 5: Session -->
<rect x="20" y="114" width="370" height="38" rx="6" fill="rgba(91,158,255,.12)" stroke="#5b9eff" stroke-width="1.5"/>
<circle cx="42" cy="133" r="12" fill="#5b9eff"/>
<text x="42" y="133" fill="#060d16" font-size="13" font-weight="800" text-anchor="middle" dominant-baseline="central">5</text>
<text x="65" y="133" fill="#e8e6f0" font-size="13" font-weight="600" dominant-baseline="central">Session</text>
<text x="200" y="133" fill="#9290a8" font-size="11" dominant-baseline="central">RPC · NetBIOS</text>
<!-- Layer 4: Transport -->
<rect x="20" y="156" width="370" height="38" rx="6" fill="rgba(56,189,248,.12)" stroke="#38bdf8" stroke-width="1.5"/>
<circle cx="42" cy="175" r="12" fill="#38bdf8"/>
<text x="42" y="175" fill="#060d16" font-size="13" font-weight="800" text-anchor="middle" dominant-baseline="central">4</text>
<text x="65" y="175" fill="#e8e6f0" font-size="13" font-weight="600" dominant-baseline="central">Transport</text>
<text x="200" y="175" fill="#9290a8" font-size="11" dominant-baseline="central">TCP · UDP</text>
<!-- Layer 3: Network -->
<rect x="20" y="198" width="370" height="38" rx="6" fill="rgba(61,214,196,.12)" stroke="#3dd6c4" stroke-width="1.5"/>
<circle cx="42" cy="217" r="12" fill="#3dd6c4"/>
<text x="42" y="217" fill="#060d16" font-size="13" font-weight="800" text-anchor="middle" dominant-baseline="central">3</text>
<text x="65" y="217" fill="#e8e6f0" font-size="13" font-weight="600" dominant-baseline="central">Network</text>
<text x="200" y="217" fill="#9290a8" font-size="11" dominant-baseline="central">IP · ICMP · Routing</text>
<!-- Layer 2: Data Link -->
<rect x="20" y="240" width="370" height="38" rx="6" fill="rgba(251,191,36,.12)" stroke="#fbbf24" stroke-width="1.5"/>
<circle cx="42" cy="259" r="12" fill="#fbbf24"/>
<text x="42" y="259" fill="#060d16" font-size="13" font-weight="800" text-anchor="middle" dominant-baseline="central">2</text>
<text x="65" y="259" fill="#e8e6f0" font-size="13" font-weight="600" dominant-baseline="central">Data Link</text>
<text x="200" y="259" fill="#9290a8" font-size="11" dominant-baseline="central">Ethernet · MAC · ARP</text>
<!-- Layer 1: Physical -->
<rect x="20" y="282" width="370" height="38" rx="6" fill="rgba(255,107,53,.12)" stroke="#ff6b35" stroke-width="1.5"/>
<circle cx="42" cy="301" r="12" fill="#ff6b35"/>
<text x="42" y="301" fill="#060d16" font-size="13" font-weight="800" text-anchor="middle" dominant-baseline="central">1</text>
<text x="65" y="301" fill="#e8e6f0" font-size="13" font-weight="600" dominant-baseline="central">Physical</text>
<text x="200" y="301" fill="#9290a8" font-size="11" dominant-baseline="central">Cable · Fiber · Radio</text>
<!-- TCP/IP Mapping (right side) -->
<rect x="410" y="30" width="130" height="122" rx="8" fill="rgba(82,196,26,.06)" stroke="#52c41a" stroke-width="1.5" stroke-dasharray="4,3"/>
<text x="475" y="85" fill="#52c41a" font-size="12" font-weight="700" text-anchor="middle" dominant-baseline="central">Application</text>
<text x="475" y="100" fill="#52c41a" font-size="10" text-anchor="middle" dominant-baseline="central">(TCP/IP L4)</text>
<rect x="410" y="156" width="130" height="38" rx="8" fill="rgba(56,189,248,.06)" stroke="#38bdf8" stroke-width="1.5" stroke-dasharray="4,3"/>
<text x="475" y="175" fill="#38bdf8" font-size="12" font-weight="700" text-anchor="middle" dominant-baseline="central">Transport</text>
<rect x="410" y="198" width="130" height="38" rx="8" fill="rgba(61,214,196,.06)" stroke="#3dd6c4" stroke-width="1.5" stroke-dasharray="4,3"/>
<text x="475" y="217" fill="#3dd6c4" font-size="12" font-weight="700" text-anchor="middle" dominant-baseline="central">Internet</text>
<rect x="410" y="240" width="130" height="80" rx="8" fill="rgba(255,107,53,.06)" stroke="#ff6b35" stroke-width="1.5" stroke-dasharray="4,3"/>
<text x="475" y="272" fill="#ff6b35" font-size="12" font-weight="700" text-anchor="middle" dominant-baseline="central">Network</text>
<text x="475" y="287" fill="#ff6b35" font-size="12" font-weight="700" text-anchor="middle" dominant-baseline="central">Access</text>
</svg>
<div class="diag-cap">বামে: OSI ৭-স্তর · ডানে: TCP/IP ৪-স্তর মিলন · বার্তা উপর থেকে নিচে যায় (encapsulation)</div>
</div>

<div class="dialogue"><strong>তুমি:</strong> এত স্তর কেন? এক স্তরে কাজ শেষ করলেই তো হয়?</div>
<div class="dialogue"><strong>স্থপতি আদম:</strong> ভাবো তুমি একটি বাড়ি বানাচ্ছো। ভিত্তি, দেয়াল, ছাদ, বৈদ্যুতিক, প্লাম্বিং, রং — সব একসাথে করলে কী হবে? একটি সমস্যা হলে কোনটি ঠিক করবে? স্তর থাকলে প্রতিটি স্তর আলাদাভাবে কাজ করে। Wi-Fi বদলালে HTTP বদলাতে হবে না। এটাই abstraction-এর শক্তি।</div>
<div class="dialogue en"><strong>You:</strong> Why so many layers? Why not do everything in one layer?<br><strong>Architect Adam:</strong> Imagine building a house. Foundation, walls, roof, electrical, plumbing, paint — do it all at once? If one breaks, which to fix? With layers, each works independently. Change Wi-Fi without changing HTTP. This is the power of abstraction.</div>

<p class="scene-setting">কিন্তু একটি সত্য — OSI মডেলটি একটি তাত্ত্বিক কাঠামো। বাস্তবে ইন্টারনেট চলে TCP/IP মডেলে — মাত্র ৪টি স্তর। ১৯৭৪ সালে Vint Cerf এবং Bob Kahn এটি ডিজাইন করেছিলেন।</p>
<p class="scene-setting en">But a truth — the OSI model is a theoretical framework. In practice, the internet runs on the TCP/IP model — only 4 layers. In 1974, Vint Cerf and Bob Kahn designed it.</p>

<div class="callout info"><span class="co-icon">📐</span><div><strong>TCP/IP মডেলের ৪টি স্তর:</strong><br>
<strong>৪. Application:</strong> OSI-এর ৭+৬+৫ একত্রিত — HTTP, DNS, SMTP<br>
<strong>৩. Transport:</strong> TCP, UDP<br>
<strong>২. Internet:</strong> IP — OSI-এর Network স্তর<br>
<strong>১. Network Access:</strong> OSI-এর ২+১ একত্রিত — Ethernet, Wi-Fi</div></div>

<div class="compare">
<div class="cmp-card cmp-bad"><div class="cmp-label">ওপেন কিন্তু জটিল</div>OSI — ৭ স্তর। তাত্ত্বিকভাবে সম্পূর্ণ কিন্তু বাস্তবে কয়েকটি স্তর খালি থাকে। শেখানো হয় কিন্তু ব্যবহার কম হয়।</div>
<div class="cmp-card cmp-good"><div class="cmp-label">✅ সরল এবং বাস্তব</div>TCP/IP — ৪ স্তর। বাস্তব ইন্টারনেট এটিতে চলে। সরল, প্র্যাকটিক্যাল, প্রমাণিত।</div>
</div>

<div class="verse">الَّذِي خَلَقَ سَبْعَ سَمَاوَاتٍ طِبَاقًا</div>
<div style="font-size:.85rem;color:var(--ink-dim);text-align:center;margin-bottom:1rem">"যিনি সৃষ্টি করেছেন সাতটি আসমান স্তরে স্তরে।" — কুরআন ৬৭:৩</div>

<p class="scene-setting">এই আয়াতে সাতটি আসমানের কথা বলা হয়েছে — স্তরে স্তরে। নেটওয়ার্কের OSI মডেলেও সাতটি স্তর — প্রতিটি আলাদা কাজ করে, কিন্তু সব মিলে একটি সম্পূর্ণ ব্যবস্থা। প্রতিটি স্তর উপরের স্তরকে সহায়তা করে, নিচের স্তরের উপর নির্ভর করে।</p>

<div class="callout tip"><span class="co-icon">🔗</span><div><strong>Book ৪ (সিস্টেম ডিজাইন):</strong> API Gateway, Load Balancer, Microservices — এগুলো Application স্তরের ধারণা। Book ৩৫ (ডিস্ট্রিবিউটেড সিস্টেমস): Consensus, CAP — এগুলো Transport ও Network স্তরের উপর নির্ভর করে।</div></div>

<div class="code-block"># ── STEP 1: What is the OSI model? ──
# The OSI model describes networking in 7 ABSTRACTION LAYERS.
# Each layer has a specific job and talks to layers above/below.

osi_layers = {
    7: {"name": "Application", "job": "User-facing protocols", "examples": "HTTP, DNS, SMTP, FTP"},
    6: {"name": "Presentation", "job": "Format, encrypt, compress", "examples": "TLS, JPEG, JSON"},
    5: {"name": "Session", "job": "Manage connections", "examples": "RPC, NetBIOS"},
    4: {"name": "Transport", "job": "Reliable delivery", "examples": "TCP, UDP"},
    3: {"name": "Network", "job": "Route between networks", "examples": "IP, ICMP"},
    2: {"name": "Data Link", "job": "Frame delivery on local network", "examples": "Ethernet, Wi-Fi, ARP"},
    1: {"name": "Physical", "job": "Electrical/optical signals", "examples": "Cables, fiber, radio"},
}

print("THE 7 OSI LAYERS:")
for num in sorted(osi_layers.keys(), reverse=True):
    layer = osi_layers[num]
    print(f"  Layer {num}: {layer['name']:15} - {layer['job']}")
    print(f"           Protocols: {layer['examples']}")

# MNEMONIC (7 → 1): "All People Seem To Need Data Processing"
# Application, Presentation, Session, Transport, Network, Data Link, Physical</div>

<div class="code-block"># ── STEP 2: TCP/IP model (simpler, practical) ──
# The TCP/IP model is what the ACTUAL internet uses (4 layers).

tcp_ip = """
TCP/IP MODEL (4 layers — practical, what the internet actually uses):

Layer 4: Application  (= OSI 7+6+5: HTTP, DNS, SMTP, TLS)
  → User-facing protocols, all in one layer

Layer 3: Transport  (= OSI 4: TCP, UDP)
  → Reliable (TCP) or fast (UDP) delivery

Layer 2: Internet  (= OSI 3: IP, ICMP)
  → Route packets between networks (IP addresses)

Layer 1: Network Access  (= OSI 2+1: Ethernet, Wi-Fi)
  → Physical delivery (MAC addresses, cables)

WHY TCP/IP IS SIMPLER:
  → OSI is theoretical (never fully implemented)
  → TCP/IP is practical (runs the entire internet)
  → Most engineers think in TCP/IP terms
  → But OSI is useful for LEARNING (clearer separation)
"""

print(tcp_ip)

# HOW LAYERS WORK TOGETHER (encapsulation):
encapsulation = """
ENCAPSULATION (data going DOWN the layers):

User sends HTTP request:
  Layer 7: HTTP data "[GET /page HTTP/1.1]"
  Layer 4: TCP header added (port 80, sequence number)
  Layer 3: IP header added (source IP, dest IP)
  Layer 2: Ethernet header added (source MAC, dest MAC)
  Layer 1: Electrical signals on the wire

Each layer adds its own HEADER (metadata).
The receiver strips headers going UP the layers.
Like nesting envelopes inside envelopes.
"""

print(encapsulation)</div>

<div class="code-block"># ── STEP 3: Seeing layers in practice (curl) ──
# When you run curl, ALL 7 layers work together.

# SEE THE LAYERS:
curl_examples = """
# Application layer (HTTP):
$ curl -I https://google.com
HTTP/2 200                          ← Layer 7 (Application)
content-type: text/html             ← Layer 6 (Presentation — format)
date: Sun, 26 Jul 2026 14:30:00     ← Layer 5 (Session — state info)

# Transport layer (TCP):
$ curl -v https://google.com 2>&1 | grep "Connected"
* Connected to google.com (142.250.80.46) port 443  ← Layer 4 (TCP)

# Network layer (IP):
$ dig google.com
google.com.    300    IN    A    142.250.80.46      ← Layer 3 (IP address)

# Data link layer (MAC):
$ arp -a | grep 142.250.80.46
? (142.250.80.46) at ab:cd:ef:01:23:45              ← Layer 2 (MAC address)

# Physical layer:
  → Electrical signals on Ethernet cable            ← Layer 1 (Physical)
"""

print(curl_examples)

# PYTHON: Making an HTTP request (all layers handled automatically):
python_request = """
import requests

# This single line triggers ALL 7 layers:
response = requests.get("https://google.com")
print(response.status_code)  # 200 (Layer 7)

# What happens internally:
# 1. DNS lookup: google.com → 142.250.80.46 (Layer 7)
# 2. TCP handshake: SYN → SYN-ACK → ACK (Layer 4)
# 3. TLS handshake: certificate exchange (Layer 6)
# 4. IP routing: packets route to Google (Layer 3)
# 5. Ethernet/Wi-Fi: frames on local network (Layer 2)
# 6. Physical: signals on cable/radio (Layer 1)
# 7. HTTP request/response (Layer 7)
"""

print(python_request)</div>

<div class="code-block"># ── STEP 4: Key networking protocols ──
# The most important protocols at each layer.

protocols = {
    "HTTP/HTTPS (L7)": {
        "purpose": "Web browsing, API calls",
        "port": "80 (HTTP), 443 (HTTPS)",
        "what_it_does": "Request-response protocol for web content",
    },
    "DNS (L7)": {
        "purpose": "Domain name → IP address translation",
        "port": "53",
        "what_it_does": "google.com → 142.250.80.46",
    },
    "SMTP/IMAP (L7)": {
        "purpose": "Email sending (SMTP) and receiving (IMAP)",
        "port": "25/587 (SMTP), 143/993 (IMAP)",
        "what_it_does": "Email delivery and access",
    },
    "SSH (L7)": {
        "purpose": "Secure remote terminal access",
        "port": "22",
        "what_it_does": "Encrypted remote command execution",
    },
    "TCP (L4)": {
        "purpose": "Reliable, ordered data delivery",
        "port": "Various",
        "what_it_does": "Handshake, acknowledgments, retransmission",
    },
    "UDP (L4)": {
        "purpose": "Fast, unreliable data delivery",
        "port": "Various",
        "what_it_does": "No handshake, no guarantee (streaming, gaming)",
    },
    "IP (L3)": {
        "purpose": "Route packets between networks",
        "port": "N/A",
        "what_it_does": "IP addressing (IPv4/IPv6), routing",
    },
    "ARP (L2)": {
        "purpose": "IP address → MAC address translation",
        "port": "N/A",
        "what_it_does": "Find the physical device for an IP",
    },
}

print("KEY NETWORKING PROTOCOLS:")
for protocol, info in protocols.items():
    print(f"\n  {protocol}")
    for key, value in info.items():
        print(f"    {key}: {value}")</div>

<div class="code-block"># ── STEP 5: TCP vs UDP (the transport choice) ──
# Two ways to deliver data: reliable (TCP) or fast (UDP).

tcp_vs_udp = {
    "TCP (Transmission Control Protocol)": {
        "reliability": "Reliable (guaranteed delivery)",
        "order": "Ordered (packets arrive in sequence)",
        "connection": "Connection-oriented (handshake first)",
        "speed": "Slower (overhead for reliability)",
        "use_cases": ["Web (HTTP)", "Email (SMTP)", "File transfer (FTP)", "Database queries"],
        "how": "SYN → SYN-ACK → ACK → data → ACK → FIN",
    },
    "UDP (User Datagram Protocol)": {
        "reliability": "Unreliable (no guarantee)",
        "order": "Unordered (packets may arrive out of order)",
        "connection": "Connectionless (just send!)",
        "speed": "Fast (no overhead)",
        "use_cases": ["DNS queries", "Video streaming", "Online gaming", "VoIP (WhatsApp calls)"],
        "how": "Just send the packet, hope it arrives",
    },
}

print("TCP vs UDP:")
for protocol, info in tcp_vs_udp.items():
    print(f"\n  {protocol}")
    for key, value in info.items():
        if isinstance(value, list):
            print(f"    {key}: {', '.join(value)}")
        else:
            print(f"    {key}: {value}")

# WHEN TO USE WHICH:
print("\n\nWHEN TO USE TCP vs UDP:")
print("  Web browsing, API calls, email → TCP (need reliability)")
print("  Video streaming, gaming, VoIP → UDP (need speed, can tolerate loss)")
print("  DNS → UDP (small query, fast response)")
print("  Database connections → TCP (data integrity critical)")</div>

<div class="code-block"># ── STEP 6: Network troubleshooting tools ──
# Essential tools for diagnosing network problems.

tools = {
    "ping": {
        "layer": "Layer 3 (Network)",
        "command": "ping google.com",
        "what_it_does": "Tests if a host is reachable (ICMP echo)",
        "diagnoses": "Basic connectivity, latency",
    },
    "traceroute": {
        "layer": "Layer 3 (Network)",
        "command": "traceroute google.com",
        "what_it_does": "Shows each router (hop) to destination",
        "diagnoses": "Where packets are being lost",
    },
    "dig / nslookup": {
        "layer": "Layer 7 (DNS)",
        "command": "dig google.com",
        "what_it_does": "DNS lookup (domain → IP)",
        "diagnoses": "DNS resolution problems",
    },
    "curl": {
        "layer": "Layer 7 (Application)",
        "command": "curl -I -v https://google.com",
        "what_it_does": "HTTP request with verbose output",
        "diagnoses": "HTTP errors, TLS issues, headers",
    },
    "netstat / ss": {
        "layer": "Layer 4 (Transport)",
        "command": "ss -tlnp",
        "what_it_does": "Shows active connections and listening ports",
        "diagnoses": "Port conflicts, connection states",
    },
    "tcpdump": {
        "layer": "All layers",
        "command": "tcpdump -i eth0 port 80",
        "what_it_does": "Captures and displays raw packets",
        "diagnoses": "Deep protocol-level debugging",
    },
    "nmap": {
        "layer": "Layers 3-4",
        "command": "nmap -sS target.com",
        "what_it_does": "Port scanning and service detection",
        "diagnoses": "Security auditing, open ports",
    },
}

print("NETWORK TROUBLESHOOTING TOOLS:")
for tool, info in tools.items():
    print(f"\n  {tool} ({info['layer']})")
    print(f"    Command: {info['command']}")
    print(f"    Does: {info['what_it_does']}")
    print(f"    Diagnoses: {info['diagnoses']}")

# TROUBLESHOOTING METHODOLOGY:
methodology = """
DEBUGGING METHODOLOGY (bottom-up or top-down):

BOTTOM-UP (Physical → Application):
  1. Is the cable plugged in? (Layer 1)
  2. Is the link up? ip link show (Layer 2)
  3. Can I ping the gateway? ping 192.168.1.1 (Layer 3)
  4. Can I ping 8.8.8.8? (Layer 3, internet)
  5. Can I resolve DNS? dig google.com (Layer 7)
  6. Can I reach the web server? curl -I https://google.com (Layer 7)

TOP-DOWN (Application → Physical):
  1. Does the app work? Try it.
  2. HTTP errors? curl -v
  3. DNS resolves? dig
  4. Can ping? ping
  5. Physical link? ip link

Most network problems are DNS or firewall. Start there.
"""

print(methodology)</div>

<div class="callout tip"><span class="co-icon">💡</span><div><strong>বাস্তবে দেখো:</strong> <code>curl -I</code> চালালে তুমি Application স্তরের উত্তর দেখো। কিন্তু ভেতরে ৭টি স্তর কাজ করেছে — DNS lookup (L7), TCP handshake (L4), IP routing (L3), Ethernet frame (L2), তারের সংকেত (L1)। তুমি শুধু শীর্ষ দেখো, ভিত্তি অদৃশ্য।</div></div>

<div class="secret-box">🏗️ <strong>নেটওয়ার্ক = সাত তলার ভবন।</strong> তুমি সপ্তম তল থেকে বার্তা পাঠাও, প্রথম তল থেকে বৈদ্যুতিক সংকেত যায়। প্রতিটি তলের নিজস্ব কাজ, নিজস্ব ভাষা। এটাই abstraction — উপরের তল জানেই না নিচে কী হচ্ছে। কিন্তু এই ভবনের ভিত্তি কী? তার এবং সংকেত। সেই যাত্রা শুরু হবে পরের দরজায়।</div>`,
  senior: {
    title: "OSI + TCP/IP এক নজরে",
    body: `<table class="kv-table"><tr><th>OSI স্তর</th><th>TCP/IP স্তর</th><th>প্রোটোকল</th></tr>
<tr><td class="hl">7. Application</td><td rowspan="3">Application</td><td>HTTP, DNS, SMTP, FTP</td></tr>
<tr><td class="hl">6. Presentation</td><td>TLS, JPEG, JSON</td></tr>
<tr><td class="hl">5. Session</td><td>RPC, NetBIOS</td></tr>
<tr><td class="hl">4. Transport</td><td>Transport</td><td>TCP, UDP</td></tr>
<tr><td class="hl">3. Network</td><td>Internet</td><td>IP, ICMP</td></tr>
<tr><td class="hl">2. Data Link</td><td rowspan="2">Network Access</td><td>Ethernet, Wi-Fi, ARP</td></tr>
<tr><td class="hl">1. Physical</td><td>Cables, Fiber, Radio</td></tr></table>
<p style="margin-top:.8rem"><strong>মনে রাখার কৌশল:</strong> <em>All People Seem To Need Data Processing</em> (7→1)</p>`
  }
});

doors.push({
  num: 2,
  icon: "🔌",
  color: "#38bdf8",
  name: "তারের রাজ্যে",
  subtitle: "Into the Wires",
  tech: "Physical Layer + Data Link — cables, fiber, radio, Ethernet (Metcalfe 1973), MAC addressing, CSMA/CD, switches",
  spirit: "আয়ত — নিদর্শন, দৃশ্যমান সংকেত থেকে অদৃশ্য অর্থ",
  secret: "Physical স্তর = ১ এবং ০ কে তারের ভেতর দিয়ে পাঠানো। Data Link = কার থেকে কার কাছে যাচ্ছে (MAC ঠিকানা)।",
  recall: {
    q: " MAC ঠিকানা এবং IP ঠিকানার পার্থক্য কী?",
    qen: "What's the difference between MAC and IP addresses?",
    a: "MAC হার্ডওয়্যারে পাওয়া (NIC-তে লেখা), IP লজিক্যাল (নেটওয়ার্কে দেওয়া)। MAC বদলায় না, IP বদলায়।",
    aen: "MAC is hardware (burned into NIC), IP is logical (assigned). MAC doesn't change, IP can."
  },
  story: `<p class="scene-setting">তুমি একটি কেবল ধরে আছো। তামার তার। এর ভেতর দিয়ে বিদ্যুৎ প্রবাহিত হয়। কিন্তু বিদ্যুৎ কীভাবে ডেটা হয়? উত্তর: সংকেত। উচ্চ ভোল্টেজ = ১, নিম্ন ভোল্টেজ = ০। এই ১ এবং ০-এর স্রোতই হলো সমস্ত ডেটার ভিত্তি — ছবি, ভিডিও, টেক্সট, সবকিছু।</p>
<p class="scene-setting en">You're holding a cable. Copper wire. Electricity flows through it. But how does electricity become data? Answer: signals. High voltage = 1, low voltage = 0. This stream of 1s and 0s is the foundation of all data — images, video, text, everything.</p>

<div class="callout info"><span class="co-icon">📡</span><div><strong>মাধ্যমের প্রকারভেদ:</strong><br>
<strong>তামার তার (Twisted Pair):</strong> সস্তা, সহজ — CAT6, সর্বোচ্চ ১০ Gbps, ~১০০m পর্যন্ত<br>
<strong>কো-এক্সিয়াল:</strong> কেবল TV — ব্রডব্যান্ড ইন্টারনেট<br>
<strong>ফাইবার অপটিক:</strong> আলোর স্রোত — ১০০ Gbps+, কয়েক কিলোমিটার, কোনো ইলেকট্রোম্যাগনেটিক ব্যাঘাত নেই<br>
<strong>রেডিও (Wireless):</strong> Wi-Fi, 4G/5G, স্যাটেলাইট — আলোর চেয়ে ধীর কিন্তু তার ছাড়া</div></div>

<p class="scene-setting">১৯৭৩ সাল। Xerox PARC। Bob Metcalfe একটি সমস্যায় আছেন — অফিসের কম্পিউটারগুলোকে যুক্ত করতে হবে। তিনি একটি সহজ সমাধান ভাবলেন: একটি শেয়ার্ড কেবল। সব কম্পিউটার একই কেবলে যুক্ত। কেউ বার্তা পাঠাতে চাইলে আগে শোনে — কেউ কথা বলছে কি না? যদি না বলছে, তবে সে পাঠায়। যদি দুজন একসাথে পাঠায় — collision! উভয়ে থামে, অপেক্ষা করে, আবার চেষ্টা করে।</p>
<p class="scene-setting en">1973. Xerox PARC. Bob Metcalfe has a problem — connect office computers. He thought of a simple solution: a shared cable. All computers on one cable. Before sending, listen — is anyone talking? If not, send. If two send at once — collision! Both stop, wait, retry.</p>

<div class="callout info"><span class="co-icon">📐</span><div><strong>Ethernet + CSMA/CD (Carrier Sense Multiple Access with Collision Detection):</strong><br>
১. শোনো — কেউ পাঠাচ্ছে কি না (Carrier Sense)<br>
২. নিরব হলে পাঠাও<br>
৩. দুজন একসাথে পাঠালে — collision detect<br>
৪. উভয়ে থামো, random time অপেক্ষা করো (backoff)<br>
৫. আবার চেষ্টা করো</div></div>

<div class="callout info"><span class="co-icon">🏠</span><div><strong>MAC ঠিকানা (Media Access Control):</strong> প্রতিটি Network Interface Card (NIC)-এ একটি অনন্য ৪৮-বিট ঠিকানা থাকে। যেমন: ৩C:5A:B4:০F:১২:৭D। এটি কারখানায় লেখা হয় — হার্ডওয়্যারে। এটি স্থানীয় নেটওয়ার্কে ফ্রেম সঠিক গন্তব্যে পৌঁছাতে সাহায্য করে।</div></div>

<div class="callout info"><span class="co-icon">🔀</span><div><strong>Switch vs Hub:</strong><br>
<strong>Hub:</strong> আসা ফ্রেম সব পোর্টে পাঠায় — সবাই শোনে, ধীর।<br>
<strong>Switch:</strong> MAC ঠিকানা দেখে শুধু সঠিক পোর্টে পাঠায় — দ্রুত, নিরাপদ। Switch একটি MAC টেবিল রাখে — কোন পোর্টে কোন MAC আছে।</div></div>

<div class="diagram">
<div class="diag-title">Switch বনাম Hub — ফ্রেম ডেলিভারি</div>
<svg viewBox="0 0 560 340" xmlns="http://www.w3.org/2000/svg">
<defs>
  <marker id="arrFire" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><path d="M0,0 L0,8 L8,4 z" fill="#ff6b35"/></marker>
  <marker id="arrTeal" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><path d="M0,0 L0,8 L8,4 z" fill="#3dd6c4"/></marker>
</defs>
<!-- Source PC -->
<rect x="20" y="70" width="100" height="50" rx="8" fill="rgba(255,107,53,.15)" stroke="#ff6b35" stroke-width="2"/>
<text x="70" y="90" fill="#ff6b35" font-size="12" font-weight="700" text-anchor="middle">PC-1</text>
<text x="70" y="107" fill="#9290a8" font-size="10" text-anchor="middle">SRC: A1:B2</text>
<!-- Switch -->
<rect x="180" y="55" width="140" height="80" rx="10" fill="rgba(56,189,248,.12)" stroke="#38bdf8" stroke-width="2"/>
<text x="250" y="78" fill="#38bdf8" font-size="13" font-weight="700" text-anchor="middle">SWITCH</text>
<text x="250" y="95" fill="#9290a8" font-size="10" text-anchor="middle">MAC Table</text>
<text x="250" y="112" fill="#9290a8" font-size="9" text-anchor="middle">P1→A1 · P2→C3 · P3→B4</text>
<!-- Lines from source to switch -->
<line x1="120" y1="95" x2="180" y2="95" stroke="#ff6b35" stroke-width="2.5"/>
<!-- Target PC-3 -->
<rect x="370" y="20" width="100" height="45" rx="8" fill="rgba(82,196,26,.12)" stroke="#52c41a" stroke-width="1.5"/>
<text x="420" y="38" fill="#52c41a" font-size="11" font-weight="700" text-anchor="middle">PC-2</text>
<text x="420" y="53" fill="#9290a8" font-size="10" text-anchor="middle">C3:44</text>
<rect x="370" y="95" width="100" height="45" rx="8" fill="rgba(91,158,255,.12)" stroke="#5b9eff" stroke-width="1.5"/>
<text x="420" y="113" fill="#5b9eff" font-size="11" font-weight="700" text-anchor="middle">PC-3</text>
<text x="420" y="128" fill="#9290a8" font-size="10" text-anchor="middle">B4:22</text>
<rect x="370" y="170" width="100" height="45" rx="8" fill="rgba(179,127,235,.1)" stroke="#b37feb" stroke-width="1.5"/>
<text x="420" y="188" fill="#b37feb" font-size="11" font-weight="700" text-anchor="middle">PC-4</text>
<text x="420" y="203" fill="#9290a8" font-size="10" text-anchor="middle">D5:66</text>
<!-- Correct path: Switch → PC-3 only -->
<line x1="320" y1="95" x2="370" y2="117" stroke="#ff6b35" stroke-width="2.5" marker-end="url(#arrFire)"/>
<text x="345" y="95" fill="#ff6b35" font-size="9" font-weight="700">→ B4:22</text>
<!-- Bottom: Hub comparison -->
<text x="280" y="245" fill="#9290a8" font-size="11" font-weight="600" text-anchor="middle">— HUB (তুলনা) —</text>
<rect x="180" y="255" width="140" height="50" rx="8" fill="rgba(251,191,36,.08)" stroke="#fbbf24" stroke-width="1.5" stroke-dasharray="4,3"/>
<text x="250" y="275" fill="#fbbf24" font-size="12" font-weight="700" text-anchor="middle">HUB</text>
<text x="250" y="290" fill="#9290a8" font-size="9" text-anchor="middle">সব পোর্টে ব্রডকাস্ট</text>
<line x1="320" y1="270" x2="370" y2="40" stroke="#fbbf24" stroke-width="1" stroke-dasharray="3,3"/>
<line x1="320" y1="275" x2="370" y2="115" stroke="#fbbf24" stroke-width="1" stroke-dasharray="3,3"/>
<line x1="320" y1="280" x2="370" y2="190" stroke="#fbbf24" stroke-width="1" stroke-dasharray="3,3"/>
<text x="395" y="320" fill="#9290a8" font-size="9" text-anchor="middle">Hub সবাইকে পাঠায় · Switch শুধু গন্তব্যকে</text>
</svg>
<div class="diag-cap">Switch: MAC টেবিল দেখে শুধু সঠিক পোর্টে পাঠায় · Hub: সব পোর্টে ব্রডকাস্ট করে</div>
</div>

<div class="code-block"># ── STEP 1: Physical layer — cables and signals ──
# Layer 1: Physical signals (electrical, optical, radio).

physical = """
PHYSICAL LAYER MEDIA:
  Twisted pair copper: Ethernet cables (Cat5e/6/6a)
    → Speed: 1 Gbps to 10 Gbps
    → Distance: up to 100m
    → Signal: electrical voltage

  Fiber optic: Glass strands carrying light
    → Speed: 10 Gbps to 400+ Gbps
    → Distance: up to 100km (single-mode)
    → Signal: light pulses (laser)

  Wireless (Wi-Fi): Radio waves
    → Speed: up to 9.6 Gbps (Wi-Fi 7)
    → Distance: up to 100m (depends on environment)
    → Signal: radio frequencies (2.4 GHz, 5 GHz, 6 GHz)

  Coaxial cable: Cable internet
    → Speed: up to 1 Gbps (DOCSIS 3.1)
    → Signal: electrical

SIGNAL ENCODING:
  Data (0s and 1s) → physical signal:
  Copper: 0 = low voltage, 1 = high voltage
  Fiber: 0 = no light, 1 = light pulse
  Wireless: modulated radio waves
"""

print(physical)

# PYTHON: Check network interface:
python_code = """
import netifaces

# List all network interfaces:
for interface in netifaces.interfaces():
    addrs = netifaces.ifaddresses(interface)
    if netifaces.AF_INET in addrs:
        ip = addrs[netifaces.AF_INET][0]['addr']
        print(f"Interface: {interface}, IP: {ip}")
# eth0: 192.168.1.42
# lo: 127.0.0.1
# wlan0: 192.168.1.100
"""

print(python_code)</div>

<div class="code-block"># ── STEP 2: Data Link layer — MAC and Ethernet ──
# Layer 2: Local network delivery using MAC addresses.

# MAC ADDRESS (Media Access Control):
mac_info = """
MAC address = 48-bit hardware address (6 bytes)
  Example: 3C:5A:B4:0F:12:7D

Structure:
  First 3 bytes (OUI): manufacturer ID (IEEE-assigned)
  Last 3 bytes (NIC): device-specific (factory-assigned)

  3C:5A:B4 = Apple (manufacturer)
  0F:12:7D = specific device on assembly line

Properties:
  → Permanently burned into NIC hardware
  → Supposed to be globally unique
  → Can be spoofed (changed in software)
  → Used for LOCAL delivery (same network only)
"""

print(mac_info)

# VIEW YOUR MAC ADDRESS:
mac_commands = """
# Linux:
$ ip addr show eth0
  link/ether 3c:5a:b4:0f:12:7d brd ff:ff:ff:ff:ff:ff

# macOS:
$ ifconfig en0 | grep ether
  ether 3c:5a:b4:0f:12:7d

# Python:
import uuid
mac = uuid.getnode()
print(':'.join(f'{(mac >> i) & 0xff:02x}' for i in range(40, -1, -8)))
# 3c:5a:b4:0f:12:7d
"""

print(mac_commands)

# MAC vs IP:
mac_vs_ip = {
    "MAC address": {
        "layer": "Layer 2 (Data Link)",
        "format": "48-bit (6 bytes): 3C:5A:B4:0F:12:7D",
        "scope": "Local network only (same subnet)",
        "persistence": "Permanent (hardware-burned)",
        "analogy": "Social Security Number (unique identity)",
    },
    "IP address": {
        "layer": "Layer 3 (Network)",
        "format": "32-bit (IPv4): 192.168.1.42",
        "scope": "Global (can reach any network)",
        "persistence": "Dynamic (can change)",
        "analogy": "Postal address (where you are now)",
    },
}

print("MAC vs IP:")
for addr_type, info in mac_vs_ip.items():
    print(f"\n  {addr_type}")
    for key, value in info.items():
        print(f"    {key}: {value}")</div>

<div class="code-block"># ── STEP 3: ARP (Address Resolution Protocol) ──
# ARP translates IP addresses to MAC addresses on local network.

# WHY ARP EXISTS:
why_arp = """
PROBLEM: IP packets need to reach a device.
  → IP address: 192.168.1.1 (router)
  → But Ethernet frames need MAC address, not IP!
  → How do we find the MAC for an IP?

SOLUTION: ARP (Address Resolution Protocol)
  1. "Who has 192.168.1.1? Tell 192.168.1.42"
     → Broadcast to ALL devices on local network
  2. Router responds: "192.168.1.1 is at 00:1a:2b:3c:4d:5e"
  3. Cache this mapping (ARP table) for ~20 minutes
  4. Now send frames directly (no more broadcasting)
"""

print(why_arp)

# VIEW ARP TABLE:
arp_table = """
$ arp -a                          # View ARP cache
? (192.168.1.1)    at 00:1a:2b:3c:4d:5e  on eth0  ← router
? (192.168.1.100)  at ab:cd:ef:01:23:45  on eth0  ← neighbor
? (192.168.1.255)  at ff:ff:ff:ff:ff:ff  on eth0  ← broadcast

# Clear ARP cache:
$ ip -s neigh flush all          # Linux
$ arp -d 192.168.1.1             # Delete specific entry
"""

print(arp_table)

# ARP SPOOFING (security risk):
arp_spoofing = """
ATTACK: ARP Spoofing (ARP Poisoning)

  Attacker sends fake ARP response:
  "192.168.1.1 is at ATTACKER_MAC" (lie!)

  Victim's ARP table is poisoned:
  → Traffic meant for router goes to ATTACKER instead
  → Attacker reads/modifies all traffic (Man-in-the-Middle)

DEFENSE:
  → Dynamic ARP Inspection (DAI) on switches
  → Static ARP entries (hardcoded, can't be spoofed)
  → VPN (encrypts traffic, even if intercepted)
  → HTTPS (TLS prevents reading even if MITM)
"""

print(arp_spoofing)</div>

<div class="code-block"># ── STEP 4: Ethernet and switches ──
# Layer 2 device: SWITCH (connects devices on same network).

switch_vs_hub = """
HUB (obsolete):
  → Receives signal → sends to ALL ports (including sender)
  → Everyone shares bandwidth (collision domain)
  → Like shouting in a room — everyone hears everything

SWITCH (modern):
  → Receives frame → checks destination MAC → sends to correct port only
  → Each port gets full bandwidth (no collisions)
  → Learns MAC addresses automatically (MAC address table)
  → Like a phone switchboard — connects caller to receiver directly

ROUTER (Layer 3):
  → Connects DIFFERENT networks
  → Uses IP addresses (not MAC)
  → Routes traffic between subnets
"""

print(switch_vs_hub)

# HOW SWITCHES LEARN:
switch_learning = """
SWITCH LEARNING PROCESS:

1. Switch starts with empty MAC table
2. Frame arrives on port 3 from MAC ab:cd:ef:01:23:45
   → Switch learns: "MAC ab:cd:ef is on port 3"
3. Another frame to MAC ab:cd:ef?
   → Switch sends directly to port 3 (fast!)
4. Unknown MAC? → Flood to all ports (like a hub)
5. Table is built dynamically (ages out in ~5 minutes)

SWITCH TABLE:
  MAC Address        Port    Age
  ab:cd:ef:01:23:45   3      120s
  00:1a:2b:3c:4d:5e   1      300s  (router)
  fe:dc:ba:98:76:54   7      45s
"""

print(switch_learning)

# ETHERNET FRAME STRUCTURE:
frame = """
ETHERNET FRAME (Layer 2):

| Preamble | Dest MAC | Src MAC | Type | Data (payload) | FCS |
  7 bytes    6 bytes   6 bytes  2B    46-1500 bytes    4B

Dest MAC: who it's for (ff:ff:ff:ff:ff:ff = broadcast)
Src MAC: who sent it
Type: what protocol is inside (0x0800 = IPv4, 0x0806 = ARP)
Data: the actual payload (IP packet, ARP request, etc.)
FCS: Frame Check Sequence (CRC error detection)

MAXIMUM: 1518 bytes (standard Ethernet frame)
JUMBO FRAMES: up to 9000 bytes (data center use)
"""

print(frame)</div>

<div class="code-block"># ── STEP 5: Wi-Fi (wireless networking) ──
# Wi-Fi replaces Ethernet cables with radio waves.

wifi = """
WI-FI STANDARDS:
  Wi-Fi 4 (802.11n):  600 Mbps, 2.4/5 GHz, 2009
  Wi-Fi 5 (802.11ac): 3.5 Gbps, 5 GHz, 2014
  Wi-Fi 6 (802.11ax): 9.6 Gbps, 2.4/5/6 GHz, 2019
  Wi-Fi 7 (802.11be): 46 Gbps, 2.4/5/6 GHz, 2024

WI-FI vs ETHERNET:
  Wi-Fi: convenient, wireless, shared medium (collisions possible)
  Ethernet: faster, more reliable, dedicated medium (no collisions)

WI-FI SECURITY:
  WEP (2000s):  ❌ BROKEN (crackable in minutes)
  WPA (2003):   ⚠️ Weak (TKIP encryption)
  WPA2 (2004):  ✅ Good (AES encryption, standard for years)
  WPA3 (2018):  ✅ Best (SAE handshake, forward secrecy)

WI-FI CONNECTION PROCESS:
  1. Device scans for networks (SSID = network name)
  2. Device sends probe request
  3. Access point responds
  4. Authentication (WPA2/WPA3 password)
  5. Association (join the network)
  6. DHCP: get IP address
  7. Connected!
"""

print(wifi)

# WI-FI SECURITY CODE (Python):
wifi_security = """
# Scanning Wi-Fi networks (requires root/special permissions):
import subprocess

# Linux (nmcli):
result = subprocess.run(['nmcli', 'dev', 'wifi', 'list'], capture_output=True, text=True)
print(result.stdout)
# SSID          SECURITY     SIGNAL  FREQ
# MyNetwork     WPA3         85     5 GHz
# Neighbor      WPA2         42     2.4 GHz
# OpenCafe      --           67     2.4 GHz  ← NO SECURITY (dangerous!)
"""

print(wifi_security)</div>

<div class="code-block"># ── STEP 6: Network interface configuration ──
# How to configure network interfaces on Linux servers.

configuration = """
NETWORK INTERFACE COMMANDS (Linux):

# View interfaces:
$ ip addr show                    # All interfaces + IPs
$ ip link show                    # Link status only
$ ip addr show eth0               # Specific interface

# Configure IP (temporary):
$ ip addr add 192.168.1.100/24 dev eth0    # Add IP
$ ip addr del 192.168.1.100/24 dev eth0    # Remove IP
$ ip link set eth0 up                      # Enable interface
$ ip link set eth0 down                    # Disable interface

# Configure IP (permanent - netplan/Ubuntu):
# /etc/netplan/01-network.yaml:
network:
  version: 2
  ethernets:
    eth0:
      addresses: [192.168.1.100/24]
      gateway4: 192.168.1.1
      nameservers:
        addresses: [8.8.8.8, 1.1.1.1]

# View routing table:
$ ip route show
default via 192.168.1.1 dev eth0          ← default gateway
192.168.1.0/24 dev eth0 proto kernel       ← local subnet

# Test connectivity:
$ ping -c 4 192.168.1.1                   # Ping gateway
$ ping -c 4 8.8.8.8                       # Ping internet
$ ping -c 4 google.com                    # Ping with DNS
"""

print(configuration)

# DJANGO SERVER NETWORKING:
django_networking = """
# Django/Gunicorn server network configuration:

# Gunicorn binds to specific interface:
$ gunicorn myproject.wsgi:application --bind 0.0.0.0:8000
# 0.0.0.0 = all interfaces (accessible from network)
# 127.0.0.1 = localhost only (internal)

# Nginx reverse proxy:
server {
    listen 80;                    # Listen on all interfaces, port 80
    listen [::]:80;               # IPv6
    server_name api.example.com;
    location / {
        proxy_pass http://127.0.0.1:8000;  # Forward to Gunicorn
    }
}

# Firewall (UFW):
$ ufw allow 80/tcp               # Allow HTTP
$ ufw allow 443/tcp               # Allow HTTPS
$ ufw allow 22/tcp                # Allow SSH
$ ufw enable

# Docker networking:
$ docker run -p 8000:8000 myapp   # Map container:8000 to host:8000
$ docker network create mynet     # Create custom network
"""

print(django_networking)

# LAYER 1-2 CHECKLIST:
checklist = [
    "Check physical connection (cable plugged in? link light on?)",
    "Verify IP address assigned (ip addr show)",
    "Check MAC address (ifconfig/ip link)",
    "Test local connectivity (ping gateway)",
    "Verify ARP table (arp -a)",
    "Check switch port (if managed switch)",
    "Verify Wi-Fi signal strength and security",
    "Check for IP conflicts (two devices, same IP)",
    "Verify cable quality (Cat5e minimum for Gigabit)",
    "Test with different cable/port if issues persist",
]

print("LAYER 1-2 TROUBLESHOOTING CHECKLIST:")
for item in checklist:
    print(f"  ☐ {item}")</div>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>ARP Spoofing বিপদ:</strong> কেউ ভুল MAC বললে তোমার ফ্রেম ভুল জায়গায় যায়। এটাকে ARP poisoning বলে — Man-in-the-Middle আক্রমণের ভিত্তি। প্রতিরোধ: Dynamic ARP Inspection (DAI), static ARP entries।</div></div>

<div class="verse">أَلَمْ تَرَوْا أَنَّ اللَّهَ سَخَّرَ لَكُم مَّا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ</div>
<div style="font-size:.85rem;color:var(--ink-dim);text-align:center;margin-bottom:1rem">"তোমরা কি দেখো না যে আল্লাহ আসমান ও পৃথিবীতে যা কিছু আছে তা তোমাদের অধীন করেছেন?" — কুরআন ৩১:২০</div>

<p class="scene-setting">এই আয়াত বলে — আল্লাহ আসমান ও পৃথিবীর সম্পদ মানুষের অধীন করেছেন। তামা, সিলিকন, আলো — এই উপাদানগুলো প্রকৃতিতে আছে। মানুষ সেগুলো দিয়ে তৈরি করেছে তার, ফাইবার, সুইচ — যা সংযোগ সম্ভব করে।</p>

<div class="callout tip"><span class="co-icon">🔗</span><div><strong>Book ৩৫ (ডিস্ট্রিবিউটেড সিস্টেমস) Door ২:</strong> Dijkstra-এর semaphore শিখেছিলে — shared resource access control। CSMA/CD একই সমস্যার নেটওয়ার্ক সংস্করণ: শেয়ার্ড মাধ্যমে কে কবে কথা বলবে?</div></div>

<div class="secret-box">🔌 <strong>Physical স্তর = ভিত্তি।</strong> তারের ভেতর বিদ্যুৎ, ফাইবারের ভেতর আলো, বাতাসে রেডিও তরঙ্গ। ১ এবং ০ — এই দুটি সংখ্যা দিয়ে গড়ে উঠেছে পুরো ইন্টারনেট। আর Data Link স্তর ঠিক করে কোন ১ এবং ০ কার জন্য। কিন্তু এই ফ্রেমগুলো শুধু স্থানীয় নেটওয়ার্কেই থাকে। এক নেটওয়ার্ক থেকে আরেক নেটওয়ার্কে যেতে হলে দরকার একটি সার্বজনীন ঠিকানা। সেই যাত্রা শুরু হবে পরের দরজায়।</div>`,
  senior: {
    title: "Physical + Data Link এক নজরে",
    body: `<table class="kv-table"><tr><th>ধারণা</th><th>বিবরণ</th></tr>
<tr><td class="hl">মাধ্যম</td><td>তামার তার, কো-এক্সিয়াল, ফাইবার, রেডিও</td></tr>
<tr><td class="hl">সংকেত</td><td>ভোল্টেজ (তামার), আলোর পালস (ফাইবার), রেডিও তরঙ্গ (Wi-Fi)</td></tr>
<tr><td class="hl">Ethernet</td><td>Metcalfe ১৯৭৩ — Xerox PARC, শেয়ার্ড কেবল</td></tr>
<tr><td class="hl">CSMA/CD</td><td>শোনো → পাঠাও → collision → থামো → অপেক্ষা → পুনরায়</td></tr>
<tr><td class="hl">MAC ঠিকানা</td><td>৪৮-বিট হার্ডওয়্যার ঠিকানা (NIC-তে লেখা)</td></tr>
<tr><td class="hl">Switch</td><td>MAC টেবিল ব্যবহার করে সঠিক পোর্টে ফ্রেম পাঠায়</td></tr>
<tr><td class="hl">ফ্রেম</td><td>ডেটা + উৎস MAC + গন্তব্য MAC + error check</td></tr></table>`
  }
});

doors.push({
  num: 3,
  icon: "🛣️",
  color: "#38bdf8",
  name: "রাস্তার প্রহরী",
  subtitle: "The Road Guardian",
  tech: "Network Layer — IP Addressing (IPv4, IPv6), Subnetting, Routing (BGP, OSPF), TTL, Traceroute",
  spirit: "তারীক — পথ, গন্তব্যে পৌঁছানোর রাস্তা",
  secret: "IP ঠিকানা = বাড়ির ঠিকানা। রাউটার = মোড়ের সাইনবোর্ড। প্যাকেট প্রতিটি মোড়ে জিজ্ঞেস করে — এর পর কোন দিকে?",
  recall: {
    q: " IPv4 ঠিকানায় কয়টি বিট থাকে?",
    qen: "How many bits are in an IPv4 address?",
    a: "৩২ বিট — প্রায় ৪.৩ বিলিয়ন ঠিকানা। IPv6 তে ১২৮ বিট — ৩.৪*১০³⁸।",
    aen: "32 bits — about 4.3 billion addresses. IPv6 has 128 bits — 3.4*10^38."
  },
  story: `<p class="scene-setting">তুমি একটি চিঠি হাতে দাঁড়িয়ে আছো। চিঠির উপর ঠিকানা: "১৯২.১৬৮.১.১০০"। এটি একটি IP ঠিকানা। কিন্তু এটি কীভাবে গন্তব্যে পৌঁছাবে? রাস্তা কীভাবে খুঁজে পাবে?</p>
<p class="scene-setting en">You're standing with a letter. The address: "192.168.1.100." This is an IP address. But how will it reach the destination? How will it find the road?</p>

<div class="dialogue"><strong>রাস্তার প্রহরী মালেক:</strong> ভাবো তুমি একটি শহরে নতুন। একটি মোড়ে দাঁড়িয়ে আছো। তুমি জিজ্ঞেস করো — "১৯২.১৬৮ সড়কটি কোন দিকে?" একজন দেখায় — "ডানে যাও।" তুমি যাও। পরের মোড়ে আবার জিজ্ঞেস করো। এভাবে এক মোড় থেকে আরেক মোড়ে — গন্তব্যে পৌঁছাও। এটাই routing।</div>
<div class="dialogue en"><strong>Road Guardian Malik:</strong> Imagine you're new in a city. Standing at an intersection. You ask — "Which way to 192.168 Road?" Someone points — "Go right." You go. At the next intersection, you ask again. From one intersection to the next — you arrive. This is routing.</div>

<div class="callout info"><span class="co-icon">📐</span><div><strong>IPv4 ঠিকানা গঠন:</strong> ৩২ বিট, ৪ ভাগে বিভক্ত — যেমন ১৯২.১৬৮.১.১০০<br>
প্রতিটি ভাগ: ০-২৫৫ (৮ বিট)। মোট: ২^৩২ = ৪,২৯৪,৯৬৭,২৯৬ ~= ৪.৩ বিলিয়ন।<br>
<strong>সাবনেট মাস্ক:</strong> কোন অংশ নেটওয়ার্ক, কোন অংশ হোস্ট — যেমন ২৫৫.২৫৫.২৫৫.০ মানে প্রথম ৩ ভাগ নেটওয়ার্ক, শেষ ভাগ হোস্ট।</div></div>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>IPv4 সংকট:</strong> ৪.৩ বিলিয়ন ঠিকানা শেষ হচ্ছে! সমাধান: NAT (Network Address Translation) — একটি পাবলিক IP-তে অনেক প্রাইভেট IP লুকানো। আর IPv6 — ১২৮ বিট, ৩.৪*১০³⁸ ঠিকানা। "প্রতিটি বালুকণায় একটি করে IP দিলেও শেষ হবে না।"</div></div>

<div class="callout info"><span class="co-icon">🗺️</span><div><strong>রাউটিং প্রোটোকল:</strong><br>
<strong>OSPF (Open Shortest Path First):</strong> অভ্যন্তরীণ — Dijkstra-এর shortest path অ্যালগরিদম ব্যবহার করে।<br>
<strong>BGP (Border Gateway Protocol):</strong> ইন্টারনেটের মেরুদণ্ড — আলাদা অটোনোমাস সিস্টেম (AS) এর মধ্যে রাস্তা। BGP ইন্টারনেটকে সংযুক্ত রাখে।<br>
<strong>Routing Table:</strong> প্রতিটি রাউটারে একটি টেবিল — "এই গন্তব্যে যেতে এই পোর্টে যাও।"</div></div>

<div class="callout info"><span class="co-icon">⏱️</span><div><strong>TTL (Time To Live):</strong> প্রতিটি প্যাকেটে একটি কাউন্টার থাকে — সর্বোচ্চ কতটা রাউটার পার হতে পারবে। প্রতিটি রাউটারে ১ কমে। শূন্য হলে প্যাকেট বাতিল। কেন? যাতে প্যাকেট অনন্তকাল ঘুরে না বেড়ায়। সাধারণত TTL = ৬৪।</div></div>

<div class="callout tip"><span class="co-icon">🔍</span><div><strong>Traceroute:</strong> TTL ব্যবহার করে পথ খুঁজে বের করে। প্রথম প্যাকেট TTL=১ — প্রথম রাউটারে বাতিল, সেই রাউটারের ঠিকানা পাওয়া যায়। দ্বিতীয় TTL=২ — দ্বিতীয় রাউটার। এভাবে পুরো পথ ম্যাপ হয়।</div></div>

<div class="diagram">
<div class="diag-title">IP Routing — প্যাকেটের যাত্রা (Traceroute)</div>
<svg viewBox="0 0 560 300" xmlns="http://www.w3.org/2000/svg">
<defs>
  <marker id="arrAmber3" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><path d="M0,0 L0,8 L8,4 z" fill="#fbbf24"/></marker>
</defs>
<!-- Source -->
<rect x="15" y="120" width="90" height="50" rx="8" fill="rgba(255,107,53,.15)" stroke="#ff6b35" stroke-width="2"/>
<text x="60" y="140" fill="#ff6b35" font-size="11" font-weight="700" text-anchor="middle">তোমার PC</text>
<text x="60" y="155" fill="#9290a8" font-size="9" text-anchor="middle">10.0.0.5</text>
<!-- Routers along the path -->
<rect x="140" y="120" width="80" height="50" rx="8" fill="rgba(251,191,36,.12)" stroke="#fbbf24" stroke-width="1.5"/>
<text x="180" y="138" fill="#fbbf24" font-size="10" font-weight="700" text-anchor="middle">Router 1</text>
<text x="180" y="153" fill="#9290a8" font-size="9" text-anchor="middle">ISP Gateway</text>
<rect x="255" y="120" width="80" height="50" rx="8" fill="rgba(251,191,36,.12)" stroke="#fbbf24" stroke-width="1.5"/>
<text x="295" y="138" fill="#fbbf24" font-size="10" font-weight="700" text-anchor="middle">Router 2</text>
<text x="295" y="153" fill="#9290a8" font-size="9" text-anchor="middle">Regional</text>
<rect x="370" y="120" width="80" height="50" rx="8" fill="rgba(251,191,36,.12)" stroke="#fbbf24" stroke-width="1.5"/>
<text x="410" y="138" fill="#fbbf24" font-size="10" font-weight="700" text-anchor="middle">Router 3</text>
<text x="410" y="153" fill="#9290a8" font-size="9" text-anchor="middle">Backbone</text>
<!-- Destination -->
<rect x="480" y="120" width="70" height="50" rx="8" fill="rgba(82,196,26,.15)" stroke="#52c41a" stroke-width="2"/>
<text x="515" y="138" fill="#52c41a" font-size="10" font-weight="700" text-anchor="middle">Server</text>
<text x="515" y="153" fill="#9290a8" font-size="9" text-anchor="middle">142.250</text>
<!-- Path lines -->
<line x1="105" y1="145" x2="140" y2="145" stroke="#fbbf24" stroke-width="2" marker-end="url(#arrAmber3)"/>
<line x1="220" y1="145" x2="255" y2="145" stroke="#fbbf24" stroke-width="2" marker-end="url(#arrAmber3)"/>
<line x1="335" y1="145" x2="370" y2="145" stroke="#fbbf24" stroke-width="2" marker-end="url(#arrAmber3)"/>
<line x1="450" y1="145" x2="480" y2="145" stroke="#fbbf24" stroke-width="2" marker-end="url(#arrAmber3)"/>
<!-- TTL labels above -->
<text x="122" y="110" fill="#ff6b35" font-size="9" font-weight="700" text-anchor="middle">TTL 64→63</text>
<text x="237" y="110" fill="#ff6b35" font-size="9" font-weight="700" text-anchor="middle">→62</text>
<text x="352" y="110" fill="#ff6b35" font-size="9" font-weight="700" text-anchor="middle">→61</text>
<!-- Traceroute output box -->
<text x="280" y="210" fill="#9290a8" font-size="10" font-weight="600" text-anchor="middle">$ traceroute google.com</text>
<rect x="60" y="220" width="440" height="65" rx="8" fill="rgba(7,10,15,.6)" stroke="rgba(56,189,248,.2)" stroke-width="1"/>
<text x="75" y="238" fill="#3dd6c4" font-size="10" font-family="monospace">hop 1  10.0.0.1     1.2ms  ← Router 1 (ISP)</text>
<text x="75" y="252" fill="#3dd6c4" font-size="10" font-family="monospace">hop 2  24.10.5.1    4.8ms  ← Router 2 (Regional)</text>
<text x="75" y="266" fill="#3dd6c4" font-size="10" font-family="monospace">hop 3  72.14.210.1  12ms   ← Router 3 (Backbone)</text>
</svg>
<div class="diag-cap">প্যাকেট প্রতিটি রাউটারে থামে · TTL ১ কমে · শূন্য হলে বাতিল · এটাই traceroute-এর কৌশল</div>
</div>

<div class="code-block"># ── STEP 1: IP addresses (Layer 3) ──
# IP addresses route packets BETWEEN networks (global scope).

# IPv4 ADDRESSES:
ipv4 = """
IPv4: 32-bit address (4 bytes)
  Example: 192.168.1.42

  Each number: 0-255 (1 byte)
  Total addresses: ~4.3 billion (running out!)

IP CLASSES (legacy, now CIDR):
  Class A: 10.0.0.0/8     (16M addresses, private)
  Class B: 172.16.0.0/12   (1M addresses, private)
  Class C: 192.168.0.0/16  (65K addresses, private)

PRIVATE IPs (not routable on internet):
  10.0.0.0/8       (large networks)
  172.16.0.0/12    (medium networks)
  192.168.0.0/16   (home/small office) ← YOUR HOME NETWORK

SPECIAL IPs:
  127.0.0.1        (localhost / loopback)
  0.0.0.0          (all interfaces)
  255.255.255.255  (broadcast)

PUBLIC vs PRIVATE:
  Public: 142.250.80.46 (Google, routable on internet)
  Private: 192.168.1.42 (your laptop, NOT routable)
  → NAT (Network Address Translation) converts private → public
"""

print(ipv4)

# IPv6 (the future):
ipv6 = """
IPv6: 128-bit address (16 bytes)
  Example: 2001:0db8:85a3:0000:0000:8a2e:0370:7334

  Total addresses: 340 undecillion (3.4 × 10^38)
  → Enough for every atom on Earth to have billions of IPs!

  No NAT needed (every device can have public IP)
  Built-in security (IPSec)
  Simplified header (faster routing)

  Adoption: ~40% of internet traffic (2024)
"""

print(ipv6)</div>

<div class="code-block"># ── STEP 2: Subnetting and CIDR ──
# Subnetting divides a network into smaller networks.

# SUBNET MASK:
subnet = """
CIDR NOTATION: 192.168.1.0/24
  /24 means first 24 bits are network, last 8 bits are host
  Subnet mask: 255.255.255.0

  /24 = 256 addresses (254 usable)
  /25 = 128 addresses (126 usable)
  /26 =  64 addresses ( 62 usable)
  /27 =  32 addresses ( 30 usable)
  /28 =  16 addresses ( 14 usable)
  /30 =   4 addresses (  2 usable, point-to-point)

SUBNET CALCULATION:
  Network:   192.168.1.0/24 (256 total addresses)
  Usable:    .1 to .254 (254 hosts)
  Network:   .0 (network address, can't assign)
  Broadcast: .255 (broadcast address, can't assign)
"""

print(subnet)

# SUBNETTING EXAMPLE:
subnetting = """
DIVIDE 192.168.1.0/24 INTO 4 SUBNETS:

Need 2 extra bits (2^2 = 4 subnets)
New mask: /26 (255.255.255.192)

Subnet 1: 192.168.1.0/26    range .0-.63    usable .1-.62
Subnet 2: 192.168.1.64/26   range .64-.127  usable .65-.126
Subnet 3: 192.168.1.128/26  range .128-.191 usable .129-.190
Subnet 4: 192.168.1.192/26  range .192-.255 usable .193-.254

Each subnet: 62 usable hosts
Use case: separate departments, VLANs, DMZ
"""

print(subnetting)

# PYTHON SUBNET CALCULATION:
python_subnet = """
import ipaddress

# Create network:
net = ipaddress.IPv4Network('192.168.1.0/24')
print(f"Network: {net.network_address}")
print(f"Broadcast: {net.broadcast_address}")
print(f"Mask: {net.netmask}")
print(f"Hosts: {list(net.hosts())[:5]}...")  # first 5 hosts

# Divide into subnets:
for subnet in net.subnets(prefixlen_diff=2):
    print(f"Subnet: {subnet} ({subnet.num_addresses} addresses)")

# Check if IP is in network:
print( ipaddress.ip_address('192.168.1.42') in net )  # True
print( ipaddress.ip_address('10.0.0.1') in net )      # False
"""

print(python_subnet)</div>

<div class="code-block"># ── STEP 3: IP routing (how packets travel) ──
# Routing = deciding which path packets take to reach destination.

routing = """
HOW IP ROUTING WORKS:

1. Your laptop sends packet to 142.250.80.46 (Google)
2. Laptop checks: is this on my local network (192.168.1.0/24)?
   → No (142.250 is different network)
3. Send to DEFAULT GATEWAY (192.168.1.1 = your router)
4. Router checks routing table:
   → Do I know this network? Forward to next hop.
5. Each router repeats: check table → forward → check → forward
6. Final router delivers to Google's server

ROUTING TABLE (on your laptop):
$ ip route show
  default via 192.168.1.1 dev eth0         ← send unknown to router
  192.168.1.0/24 dev eth0 proto kernel     ← local network (direct)

  → Default route = "I don't know where this goes, send to gateway"
  → Local route = "This is on my network, deliver directly"
"""

print(routing)

# TRACEROUTE (see the path):
traceroute = """
$ traceroute google.com

 1  192.168.1.1     1.2 ms   ← your router (home)
 2  10.50.12.1      4.5 ms   ← ISP gateway
 3  72.14.215.1     12.1 ms  ← ISP backbone
 4  142.250.190.1   15.3 ms  ← Google's network
 5  142.250.190.46  14.8 ms  ← destination server

HOW TRACEROUTE WORKS:
  Uses TTL (Time To Live) field in IP header:
  Packet 1: TTL=1 → first router decrements to 0 → sends back "time exceeded"
  Packet 2: TTL=2 → second router sends "time exceeded"
  ...revealing each hop along the way

TTL prevents packets from circulating forever.
Each router decrements TTL by 1.
TTL=0 → packet dropped, "time exceeded" sent back.
"""

print(traceroute)</div>

<div class="code-block"># ── STEP 4: NAT (Network Address Translation) ──
# NAT allows private IPs to access the internet.

nat = """
WHY NAT EXISTS:
  → Private IPs (192.168.x.x) can't go on the internet
  → But we only have ONE public IP from ISP
  → NAT translates many private → one public

HOW NAT WORKS:
  1. Laptop (192.168.1.42) sends to Google (142.250.80.46)
  2. Router receives, changes source to PUBLIC IP (203.0.113.5)
  3. Router remembers: "192.168.1.42 sent this"
  4. Google responds to 203.0.113.5
  5. Router translates back: "203.0.113.5 → 192.168.1.42"
  6. Laptop receives response

NAT TABLE (on router):
  Internal IP        Internal Port    External Port    External IP
  192.168.1.42       54321            54321            203.0.113.5
  192.168.1.100      54322            54322            203.0.113.5

PORT FORWARDING (reverse NAT):
  External traffic → specific internal device
  "Port 80 → 192.168.1.50" (web server)
  "Port 22 → 192.168.1.100" (SSH)
"""

print(nat)

# NAT TYPES:
nat_types = {
    "SNAT (Source NAT)": {
        "what": "Change source IP (outgoing traffic)",
        "use": "Masquerade (many private IPs → one public)",
    },
    "DNAT (Destination NAT)": {
        "what": "Change destination IP (incoming traffic)",
        "use": "Port forwarding (external → internal server)",
    },
    "PAT (Port Address Translation)": {
        "what": "SNAT + port numbers (many IPs → one IP, different ports)",
        "use": "Home routers (default behavior)",
    },
}

print("NAT TYPES:")
for nat_type, info in nat_types.items():
    print(f"\n  {nat_type}")
    for key, value in info.items():
        print(f"    {key}: {value}")</div>

<div class="code-block"># ── STEP 5: Ping and connectivity testing ──
# Use ping and traceroute to diagnose network issues.

ping_code = """
# PING: Test if host is reachable
$ ping -c 4 google.com

PING google.com (142.250.190.46): 56 data bytes
64 bytes from 142.250.190.46: icmp_seq=0 ttl=117 time=12.3 ms
64 bytes from 142.250.190.46: icmp_seq=1 ttl=117 time=11.8 ms
64 bytes from 142.250.190.46: icmp_seq=2 ttl=117 time=13.1 ms
64 bytes from 142.250.190.46: icmp_seq=3 ttl=117 time=12.0 ms
--- google.com ping statistics ---
4 packets transmitted, 4 received, 0.0% packet loss
round-trip min/avg/max = 11.8/12.3/13.1 ms

READING PING RESULTS:
  0% loss = healthy connection
  100% loss = no connectivity (firewall? DNS? cable?)
  High latency = slow connection
  Variable latency = unstable connection (jitter)
"""

print(ping_code)

# DIAGNOSTIC FLOW:
diagnostic = """
NETWORK DIAGNOSTIC FLOW:

1. ping 127.0.0.1
   → Tests TCP/IP stack on your machine
   → Fail = OS networking broken

2. ping 192.168.1.42 (your own IP)
   → Tests NIC driver
   → Fail = NIC not configured

3. ping 192.168.1.1 (gateway)
   → Tests local network connectivity
   → Fail = cable, switch, or router issue

4. ping 8.8.8.8 (Google DNS)
   → Tests internet connectivity
   → Fail = ISP or router issue

5. ping google.com
   → Tests DNS resolution + internet
   → Fail = DNS problem (try: ping 8.8.8.8)

6. traceroute google.com
   → Shows WHERE the path breaks
   → Each hop reveals which router drops packets
"""

print(diagnostic)

# PYTHON NETWORK TESTING:
python_test = """
import subprocess
import socket

# DNS lookup:
ip = socket.gethostbyname('google.com')
print(f"google.com → {ip}")  # 142.250.190.46

# Socket connection test:
def test_port(host, port, timeout=5):
    try:
        socket.setdefaulttimeout(timeout)
        s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
        s.connect((host, port))
        s.close()
        return True
    except:
        return False

# Test common ports:
for port, service in [(80, 'HTTP'), (443, 'HTTPS'), (22, 'SSH'), (3306, 'MySQL')]:
    result = test_port('example.com', port)
    print(f"  {service:6} (port {port:4}): {'✅ OPEN' if result else '❌ CLOSED'}")
"""

print(python_test)</div>

<div class="code-block"># ── STEP 6: Firewalls and security ──
# Firewalls control what traffic can enter/leave your network.

firewall = """
FIREWALL RULES (stateful packet filtering):

ALLOW rules:
  → Port 80 (HTTP) from anywhere
  → Port 443 (HTTPS) from anywhere
  → Port 22 (SSH) from specific IPs only

DENY rules (default):
  → Everything else

LINUX: UFW (Uncomplicated Firewall):
  $ ufw default deny incoming        # Block all incoming
  $ ufw default allow outgoing       # Allow all outgoing
  $ ufw allow 80/tcp                 # Allow HTTP
  $ ufw allow 443/tcp                # Allow HTTPS
  $ ufw allow from 203.0.113.5 to any port 22  # SSH from specific IP
  $ ufw enable                       # Activate

DOCKER FIREWALL WARNING:
  Docker BYPASSES UFW!
  → Docker writes iptables rules directly
  → Published ports are accessible even if UFW blocks them
  → Fix: use iptables -A DOCKER-USER (not UFW)

CLOUD SECURITY GROUPS (AWS/GCP/Azure):
  → Cloud-level firewall (outside the VM)
  → More reliable than OS firewall
  → Configure: inbound rules (what can enter)
  → Example: allow 443 from 0.0.0.0/0 (HTTPS from anywhere)
"""

print(firewall)

# FIREWALL BEST PRACTICES:
best_practices = [
    "Default DENY (block everything, allow specific)",
    "Allow only needed ports (principle of least privilege)",
    "Restrict SSH to specific IPs (not open to internet)",
    "Use cloud security groups in addition to OS firewall",
    "Docker: use DOCKER-USER chain, not UFW",
    "Monitor firewall logs for attacks",
    "Rate-limit connections (prevent brute force)",
    "Use fail2ban for repeated failed attempts",
    "Close unused ports (scan with nmap)",
    "Document all firewall rules for the team",
]

print("FIREWALL BEST PRACTICES:")
for practice in best_practices:
    print(f"  ☐ {practice}")

# LAYER 3 SUMMARY:
# ┌──────────────────┬──────────────────────────────────┐
# │ Concept          │ Key Point                       │
# ├──────────────────┼──────────────────────────────────┤
# │ IP address       │ Global address (Layer 3)        │
# │ Private IPs      │ 10.x, 172.16-31.x, 192.168.x   │
# │ CIDR /24         │ Subnet notation                 │
# │ Routing          │ Finding path between networks   │
# │ Default gateway  │ Where to send unknown traffic   │
# │ NAT              │ Private → public IP translation │
# │ TTL              │ Prevents infinite loops         │
# │ Firewall         │ Controls allowed traffic        │
# └──────────────────┴──────────────────────────────────┘</div>

<div class="callout info"><span class="co-icon">📐</span><div><strong>সাবনেটিং — একটি পূর্ণ উদাহরণ:</strong><br>
<strong>প্রশ্ন:</strong> ১৯২.১৬৮.১.০/২৪ নেটওয়ার্ককে ৪টি সমান সাবনেটে ভাগ করো।<br>
<strong>ধাপ ১:</strong> ৪টি সাবনেটের জন্য ২ বিট দরকার (২² = ৪)।<br>
<strong>ধাপ ২:</strong> নতুন মাস্ক: /২৬ (২৫৫.২৫৫.২৫৫.১৯২)<br>
<strong>ধাপ ৩:</strong> প্রতিটি সাবনেটে ৬৪ ঠিকানা (৬২ ব্যবহারযোগ্য)।</div></div>

<div class="code-block">— সাবনেট হিসাব —
নেটওয়ার্ক:   192.168.1.0/24   (মূল — ২৫৪ হোস্ট)
মাস্ক:       255.255.255.0    (/24)

৪ সাবনেটে ভাগ (/26 — ২ বিট ধার):
# ─────────────────────────# ───────────────# ───────────────# 
#  সাবনেট                    #  রেঞ্জ           #  ব্যবহারযোগ্য      # 
# ─────────────────────────# ───────────────# ───────────────# 
#  192.168.1.0/26          #  .0   → .63    #  .1   → .62    # 
#  192.168.1.64/26         #  .64  → .127   #  .65  → .126   # 
#  192.168.1.128/26        #  .128 → .191   #  .129 → .190   # 
#  192.168.1.192/26        #  .192 → .255   #  .193 → .254   # 
# ─────────────────────────# ───────────────# ───────────────# 

— কেন দরকার? ৫০০ জনের অফিসে এক /24 নেটওয়ার্কে —
— চারটি বিভাগ চারটি সাবনেটে — ব্রডকাস্ট কমে, নিরাপত্তা বাড়ে —</div>

<div class="verse">وَجَعَلْنَا فِي الْأَرْضِ رَوَاسِيَ وَفَجَّرْنَا فِيهَا أَنْهَارًا</div>
<div style="font-size:.85rem;color:var(--ink-dim);text-align:center;margin-bottom:1rem">"এবং পৃথিবীতে আমরা স্থাপন করেছি পর্বতমালা এবং সেখানে প্রবাহিত করেছি নদী।" — কুরআন ৫০:৭</div>

<p class="scene-setting">এই আয়াতে পৃথিবীর অবকাঠামোর কথা বলা হয়েছে — পর্বত স্থিতি রাখে, নদী পথ তৈরি করে। নেটওয়ার্কেও তেমন — রাউটার স্থির পয়েন্ট, রাউটিং টেবিল পথ তৈরি করে। প্যাকেট এক রাউটার থেকে আরেকটিতে যায়, নদীর মতো প্রবাহিত হয়।</p>

<div class="callout tip"><span class="co-icon">🔗</span><div><strong>Book ২ (DSA Bazaar) Door ১৫:</strong> Dijkstra-এর shortest path algorithm শিখেছিলে — সেটাই OSPF routing-এ ব্যবহৃত হয়! Book ২ Door ১৪: Graph BFS/DFS — নেটওয়ার্ক topology একটি graph।</div></div>

<div class="secret-box">🛣️ <strong>IP ঠিকানা = বাড়ির ঠিকানা, রাউটার = ডাকপিয়নের পথনির্দেশক।</strong> প্যাকেট প্রতিটি রাউটারে থামে, জিজ্ঞেস করে — এর পর কোন দিকে? TTL নিশ্চিত করে যে প্যাকেট চিরকাল ঘুরবে না। কিন্তু পথ পাওয়া যাবে — কিন্তু প্যাকেট পৌঁছালেই কি কাজ শেষ? না। প্যাকেট হারিয়ে গেলে? ক্রম ভুল হলে? সেই সমাধান আসবে পরের দরজায়।</div>`,
  senior: {
    title: "Network Layer (IP + Routing) এক নজরে",
    body: `<table class="kv-table"><tr><th>ধারণা</th><th>বিবরণ</th></tr>
<tr><td class="hl">IPv4</td><td>৩২ বিট — ৪.৩ বিলিয়ন ঠিকানা (শেষ হচ্ছে)</td></tr>
<tr><td class="hl">IPv6</td><td>১২৮ বিট — ৩.৪*১০³⁸ ঠিকানা (সসীম নয়)</td></tr>
<tr><td class="hl">Subnet Mask</td><td>নেটওয়ার্ক ও হোস্ট অংশ আলাদা করে — ২৫৫.২৫৫.২৫৫.০</td></tr>
<tr><td class="hl">NAT</td><td>এক পাবলিক IP-তে অনেক প্রাইভেট IP লুকানো</td></tr>
<tr><td class="hl">Router</td><td>রাউটিং টেবিল দেখে প্যাকেট সঠিক দিকে পাঠায়</td></tr>
<tr><td class="hl">OSPF</td><td>অভ্যন্তরীণ — Dijkstra shortest path</td></tr>
<tr><td class="hl">BGP</td><td>ইন্টারনেটের মেরুদণ্ড — AS এর মধ্যে রাস্তা</td></tr>
<tr><td class="hl">TTL</td><td>সর্বোচ্চ হপ কাউন্ট — সাধারণত ৬৪</td></tr></table>`
  }
});

doors.push({
  num: 4,
  icon: "📦",
  color: "#38bdf8",
  name: "নির্ভরযোগ্য বার্তাবাহক",
  subtitle: "The Reliable Messenger",
  tech: "Transport Layer — TCP (Cerf-Kahn 1974), 3-way handshake, UDP, ports, flow control, congestion control",
  spirit: "আমানত — আস্থা, বার্তা নিরাপদে পৌঁছানোর দায়িত্ব",
  secret: "TCP = নিবন্ধিত ডাক — প্রতিটি প্যাকেটে রসিদ। UDP = সাধারণ ডাক — পাঠাও, পৌঁছালে পৌঁছালো।",
  recall: {
    q: " TCP 3-way handshake-এর তিনটি ধাপ কী?",
    qen: "What are the three steps of TCP 3-way handshake?",
    a: "SYN → SYN-ACK → ACK। ক্লায়েন্ট অনুরোধ পাঠায়, সার্ভার স্বীকার করে, ক্লায়েন্ট নিশ্চিত করে।",
    aen: "SYN → SYN-ACK → ACK. Client requests, server acknowledges, client confirms."
  },
  story: `<p class="scene-setting">তুমি একটি গুরুত্বপূর্ণ দলিল পাঠাচ্ছো। দুটি উপায়: প্রথম — সাধারণ ডাকে পাঠাও। সস্তা, দ্রুত, কিন্তু কোনো নিশ্চয়তা নেই। পৌঁছালে ভালো, না পৌঁছালে জানবেও না। দ্বিতীয় — নিবন্ধিত ডাকে পাঠাও। প্রতিটি ধাপে স্বাক্ষর, রসিদ। দামি, ধীর, কিন্তু নিশ্চিত। প্রথমটি UDP, দ্বিতীয়টি TCP।</p>
<p class="scene-setting en">You're sending an important document. Two ways: first — regular mail. Cheap, fast, but no guarantee. Arrived? Good. Didn't? You won't know. Second — registered mail. Signature at each step, receipt. Expensive, slow, but certain. The first is UDP, the second is TCP.</p>

<div class="callout info"><span class="co-icon">📐</span><div><strong>TCP (Transmission Control Protocol):</strong><br>
<strong>৩-way handshake:</strong> SYN → SYN-ACK → ACK (সংযোগ স্থাপন)<br>
<strong>Sequence Numbers:</strong> প্রতিটি বাইটের একটি ক্রম নম্বর<br>
<strong>Acknowledgment:</strong> "আমি প্যাকেট ১-৫ পেয়েছি, এখন ৬ পাঠাও"<br>
<strong>Retransmission:</strong> রসিদ না পেলে আবার পাঠাও<br>
<strong>Flow Control:</strong> প্রাপক বলে — "আমি ১০০০ বাইট ধারণ করতে পারি, বেশি পাঠিও না" (sliding window)<br>
<strong>Congestion Control:</strong> নেটওয়ার্ক ব্যস্ত হলে গতি কমাও (slow start, AIMD)</div></div>

<div class="diagram">
<div class="diag-title">TCP 3-Way Handshake — সংযোগ স্থাপন</div>
<svg viewBox="0 0 560 280" xmlns="http://www.w3.org/2000/svg">
<defs>
  <marker id="arrCyan4" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><path d="M0,0 L0,8 L8,4 z" fill="#3dd6c4"/></marker>
  <marker id="arrAmber4" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><path d="M0,0 L0,8 L8,4 z" fill="#fbbf24"/></marker>
</defs>
<!-- Client lifeline -->
<rect x="40" y="20" width="120" height="40" rx="8" fill="rgba(255,107,53,.15)" stroke="#ff6b35" stroke-width="2"/>
<text x="100" y="38" fill="#ff6b35" font-size="12" font-weight="700" text-anchor="middle">CLIENT</text>
<text x="100" y="52" fill="#9290a8" font-size="9" text-anchor="middle">seq=x</text>
<line x1="100" y1="60" x2="100" y2="260" stroke="#5e5c74" stroke-width="1" stroke-dasharray="3,4"/>
<!-- Server lifeline -->
<rect x="400" y="20" width="120" height="40" rx="8" fill="rgba(82,196,26,.15)" stroke="#52c41a" stroke-width="2"/>
<text x="460" y="38" fill="#52c41a" font-size="12" font-weight="700" text-anchor="middle">SERVER</text>
<text x="460" y="52" fill="#9290a8" font-size="9" text-anchor="middle">seq=y</text>
<line x1="460" y1="60" x2="460" y2="260" stroke="#5e5c74" stroke-width="1" stroke-dasharray="3,4"/>
<!-- Step 1: SYN -->
<line x1="100" y1="100" x2="395" y2="100" stroke="#3dd6c4" stroke-width="2.5" marker-end="url(#arrCyan4)"/>
<text x="250" y="92" fill="#3dd6c4" font-size="12" font-weight="700" text-anchor="middle">SYN, seq=x</text>
<text x="250" y="112" fill="#9290a8" font-size="9" text-anchor="middle">"আমি সংযোগ চাই"</text>
<!-- Step 2: SYN-ACK -->
<line x1="460" y1="150" x2="105" y2="150" stroke="#fbbf24" stroke-width="2.5" marker-end="url(#arrAmber4)"/>
<text x="250" y="142" fill="#fbbf24" font-size="12" font-weight="700" text-anchor="middle">SYN-ACK, seq=y, ack=x+1</text>
<text x="250" y="162" fill="#9290a8" font-size="9" text-anchor="middle">"ঠিক আছে, আমি প্রস্তুত"</text>
<!-- Step 3: ACK -->
<line x1="100" y1="200" x2="395" y2="200" stroke="#3dd6c4" stroke-width="2.5" marker-end="url(#arrCyan4)"/>
<text x="250" y="192" fill="#3dd6c4" font-size="12" font-weight="700" text-anchor="middle">ACK, ack=y+1</text>
<text x="250" y="212" fill="#9290a8" font-size="9" text-anchor="middle">"নিশ্চিত করলাম, সংযোগ স্থাপিত"</text>
<!-- Connection established banner -->
<rect x="120" y="235" width="320" height="30" rx="15" fill="rgba(82,196,26,.1)" stroke="#52c41a" stroke-width="1.5"/>
<text x="280" y="250" fill="#52c41a" font-size="11" font-weight="700" text-anchor="middle">✓ সংযোগ স্থাপিত — ডেটা আদান-প্রদান শুরু</text>
</svg>
<div class="diag-cap">Step ১: SYN (ক্লায়েন্ট অনুরোধ) · Step ২: SYN-ACK (সার্ভার স্বীকার) · Step ৩: ACK (ক্লায়েন্ট নিশ্চিত)</div>
</div>

<div class="code-block"># ── STEP 1: TCP — reliable, connection-oriented ──
# TCP guarantees data delivery with the 3-way handshake.

tcp_overview = """
TCP (Transmission Control Protocol):

CHARACTERISTICS:
  → Reliable: guarantees delivery (retransmits lost packets)
  → Ordered: packets arrive in correct sequence
  → Connection-oriented: handshake before data
  → Flow control: adjusts speed to receiver capacity
  → Congestion control: backs off on network congestion

3-WAY HANDSHAKE (connection setup):
  1. Client → Server: SYN (synchronize)
     "I want to connect, my sequence number is X"
  2. Server → Client: SYN-ACK
     "OK, my sequence number is Y, I acknowledge X"
  3. Client → Server: ACK
     "Confirmed, I acknowledge Y. Connection established!"

CONNECTION TEARDOWN (4-way):
  1. Client → Server: FIN (I'm done sending)
  2. Server → Client: ACK (I heard you)
  3. Server → Client: FIN (I'm done too)
  4. Client → Server: ACK (confirmed, closing)

This reliability has COST: overhead, latency, complexity.
"""

print(tcp_overview)

# TCP HEADER STRUCTURE (20 bytes minimum):
tcp_header = """
TCP HEADER (20 bytes minimum):

| Source Port (16 bit)      | Dest Port (16 bit)      |
| Sequence Number (32 bit)                            |  ← byte ordering
| Acknowledgment Number (32 bit)                      |  ← "received up to here"
| Data Offset | Flags | Window Size                   |  ← SYN ACK FIN RST PSH
| Checksum    | Urgent Pointer                        |
| Options (optional)                                  |

KEY FIELDS:
  Sequence Number: position of first byte in this segment
  ACK Number: next byte expected from the other side
  Flags: SYN (connect), ACK (acknowledge), FIN (close), RST (reset)
  Window Size: how much buffer the receiver has (flow control)
"""

print(tcp_header)</div>

<div class="code-block"># ── STEP 2: TCP ports and connections ──
# Ports identify WHICH application gets the data.

ports = """
PORTS (0-65535):
  0-1023:     Well-known ports (HTTP=80, HTTPS=443, SSH=22, DNS=53)
  1024-49151: Registered ports (PostgreSQL=5432, Redis=6379, Django=8000)
  49152-65535: Ephemeral ports (client-side, temporary)

COMMON PORTS YOU SHOULD KNOW:
  20/21  FTP      (file transfer)
  22     SSH      (secure shell)
  25     SMTP     (email sending)
  53     DNS      (domain resolution)
  80     HTTP     (web)
  443    HTTPS    (secure web)
  3306   MySQL    (MySQL database)
  5432   PostgreSQL (PostgreSQL database)
  6379   Redis    (cache)
  8000   Django   (development server)
  8080   Alt HTTP (alternative web/proxy)

A TCP CONNECTION = (source IP, source port, dest IP, dest port)
  → This 4-tuple uniquely identifies a connection
  → Server can handle thousands of connections on same port (443)
"""

print(ports)

# VIEW ACTIVE CONNECTIONS:
connections = """
# View active TCP connections:
$ ss -tnp                          # modern (recommended)
$ netstat -tnp                     # legacy

Proto  Local Address          Foreign Address        State
tcp    192.168.1.42:52341     142.250.190.46:443     ESTABLISHED
tcp    192.168.1.42:52342     140.82.112.4:443       TIME_WAIT
tcp    192.168.1.42:52343     151.101.1.69:80        SYN_SENT

TCP STATES:
  LISTEN      → Server waiting for connections
  SYN_SENT    → Client sent SYN, waiting for response
  SYN_RECV    → Server received SYN, sent SYN-ACK
  ESTABLISHED → Connection active, data flowing
  FIN_WAIT    → One side started closing
  TIME_WAIT   → Waiting before final close (2*MSL)
  CLOSE_WAIT  → Other side closed, waiting for local close
"""

print(connections)</div>

<div class="code-block"># ── STEP 3: TCP reliability mechanisms ──
# HOW TCP achieves reliability.

mechanisms = """
1. SEQUENCE NUMBERS:
   Every byte gets a sequence number.
   Receiver can detect: missing, duplicate, or reordered packets.
   → "I received bytes 1-1000, send me 1001 next."

2. ACKNOWLEDGMENTS (ACKs):
   Receiver confirms: "I got bytes up to 5000."
   If sender doesn't get ACK in time → retransmit.

3. RETRANSMISSION:
   If ACK doesn't arrive within timeout → resend the packet.
   Timeout is dynamic (based on network conditions).

4. FLOW CONTROL (sliding window):
   Receiver tells sender: "I can handle N more bytes."
   Sender sends N bytes, then waits for ACK.
   Prevents fast sender from overwhelming slow receiver.

5. CONGESTION CONTROL:
   Start slow, increase speed until packets drop.
   Slow Start → Congestion Avoidance → Fast Retransmit.
   Prevents overwhelming the network.

6. CHECKSUM:
   Every segment has a checksum.
   If data corrupted in transit → receiver detects → discards.
   → Sender doesn't get ACK → retransmits.
"""

print(mechanisms)

# PYTHON SOCKET PROGRAMMING (TCP):
socket_code = """
import socket

# TCP SERVER:
server = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
server.bind(('0.0.0.0', 8000))
server.listen(5)  # max 5 queued connections
print("Server listening on port 8000...")

while True:
    client, addr = server.accept()  # accept connection
    print(f"Connection from {addr}")
    data = client.recv(1024)        # receive data
    client.send(b"Hello from server!")
    client.close()

# TCP CLIENT:
client = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
client.connect(('127.0.0.1', 8000))
client.send(b"Hello from client!")
response = client.recv(1024)
print(f"Server says: {response.decode()}")
client.close()
"""

print(socket_code)</div>

<div class="code-block"># ── STEP 4: UDP — fast, unreliable ──
# UDP skips reliability for SPEED.

udp = """
UDP (User Datagram Protocol):

CHARACTERISTICS:
  → Unreliable: no guarantee of delivery (fire and forget)
  → Unordered: packets may arrive out of order
  → Connectionless: no handshake (just send!)
  → No flow control: sender sends as fast as it wants
  → Lightweight: minimal header (8 bytes vs TCP's 20+)

UDP HEADER (only 8 bytes!):
  | Source Port (16) | Dest Port (16) |
  | Length (16)      | Checksum (16)  |
  That's it! No sequence, no ACK, no window.

WHY UDP IS FASTER:
  → No handshake (just start sending)
  → No ACKs (don't wait for confirmation)
  → No retransmission (lost packets stay lost)
  → No flow control (send as fast as possible)

WHEN TO USE UDP:
  → Video/audio streaming (a few dropped frames are OK)
  → Online gaming (latest position matters, old positions don't)
  → VoIP (WhatsApp/Discord calls — speed > perfect delivery)
  → DNS (small query/response — fast, retry if needed)
  → IoT sensors (continuous data, occasional loss OK)

WHEN TO USE TCP:
  → Web browsing (need every byte of the page)
  → Email (can't lose any content)
  → File transfer (every byte must arrive)
  → Database connections (data integrity critical)
  → API calls (request-response reliability needed)
"""

print(udp)

# PYTHON UDP SOCKET:
udp_code = """
import socket

# UDP SERVER:
server = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)  # DGRAM = UDP
server.bind(('0.0.0.0', 8000))
print("UDP server listening...")

while True:
    data, addr = server.recvfrom(1024)  # receive datagram
    print(f"From {addr}: {data.decode()}")

# UDP CLIENT:
client = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
client.sendto(b"Hello UDP!", ('127.0.0.1', 8000))
# No connect(), no handshake — just send!
"""

print(udp_code)</div>

<div class="code-block"># ── STEP 5: TCP in web applications (Django) ──
# How TCP connects your Django app to users.

web_tcp = """
DJANGO/GUNICORN TCP CONNECTIONS:

1. User's browser opens TCP connection to server
   SYN → SYN-ACK → ACK (handshake)
   Connection: (client_ip:random_port → server_ip:443)

2. TLS handshake (within the TCP connection)
   → Certificate exchange
   → Key agreement
   → Encryption starts

3. HTTP request/response (within TLS, within TCP)
   → GET /api/users/ HTTP/2
   → Response: 200 OK + JSON data

4. Connection keeps alive (HTTP/2 multiplexing)
   → Multiple requests on ONE TCP connection
   → No new handshake for each request

5. Connection closes (when idle too long)
   FIN → ACK → FIN → ACK (teardown)

KEEP-ALIVE:
  → Keep TCP connection open for multiple requests
  → Saves handshake time (200ms per new connection)
  → HTTP/2: connections stay open until page closed
"""

print(web_tcp)

# GUNICORN WORKER CONNECTIONS:
gunicorn = """
# Gunicorn handles multiple TCP connections:
# Each worker process handles N connections concurrently

$ gunicorn myproject.wsgi:application \\
    --workers 4 \\
    --worker-class uvicorn.workers.UvicornWorker \\
    --bind 0.0.0.0:8000

# Connection limits:
# OS max file descriptors (each connection = 1 fd):
$ ulimit -n
65536  ← can handle 65K connections

# NGINX reverse proxy:
# Nginx maintains connection to browser
# Opens separate connection to Gunicorn
# This is called "proxy_pass"
"""

print(gunicorn)

# WEBSOCKETS (persistent TCP connections):
websockets = """
WEBSOCKETS: Full-duplex TCP connection that stays open.

Unlike HTTP (request → response → close):
  WebSocket: connect → stay open → send/receive anytime

Use cases:
  → Chat applications (real-time messages)
  → Live notifications (push to browser)
  → Multiplayer games (real-time state)
  → Collaborative editing (Google Docs)

Django Channels (WebSocket support):
  # consumer.py:
  class ChatConsumer(AsyncWebsocketConsumer):
      async def connect(self):
          await self.accept()  # accept WebSocket
      async def receive(self, text_data):
          await self.send(text_data="Echo: " + text_data)
"""

print(websockets)</div>

<div class="code-block"># ── STEP 6: TCP debugging and troubleshooting ──
# Tools for diagnosing TCP connection issues.

debugging = """
TCP DEBUGGING TOOLS:

# 1. View connections:
$ ss -tnp                    # Active TCP connections
$ ss -tlnp                   # Listening TCP ports

# 2. Capture packets (tcpdump):
$ sudo tcpdump -i eth0 -n 'tcp port 443' -c 6

11:30:01 IP 192.168.1.42.52341 > 142.250.190.46.443: Flags [S],    seq 1234567
11:30:01 IP 142.250.190.46.443 > 192.168.1.42.52341: Flags [S.],   seq 9876543
11:30:01 IP 192.168.1.42.52341 > 142.250.190.46.443: Flags [.],    ack 9876544

# [S]=SYN  [.]=ACK  [P]=PUSH  [F]=FIN  [R]=RST (reset)

# 3. Wireshark (GUI packet analyzer):
# → Deep inspection of every packet
# → Filter by protocol, port, IP
# → Color-coded for easy reading

# 4. Test specific port:
$ nc -zv example.com 443     # Test if port is open
  Connection to example.com 443 port [tcp/https] succeeded!

# 5. Curl verbose (shows TCP + TLS):
$ curl -v https://example.com
  * Connected to example.com (93.184.216.34) port 443
  * TLS handshake
  > GET / HTTP/2
"""

print(debugging)

# COMMON TCP PROBLEMS:
problems = {
    "Connection refused": {
        "meaning": "Server not listening on that port",
        "fix": "Start the service or check port number",
    },
    "Connection timeout": {
        "meaning": "Server unreachable or firewall blocking",
        "fix": "Check firewall, routing, server is running",
    },
    "Connection reset (RST)": {
        "meaning": "Server forcibly closed connection",
        "fix": "Check server logs, application crash",
    },
    "Too many connections": {
        "meaning": "Server at connection limit (backlog full)",
        "fix": "Increase worker count, add load balancer",
    },
    "Slow transfers": {
        "meaning": "Network congestion or packet loss",
        "fix": "Check bandwidth, use CDN, optimize payload",
    },
    "TIME_WAIT exhaustion": {
        "meaning": "Too many closing connections",
        "fix": "Increase port range, enable SO_REUSEADDR",
    },
}

print("COMMON TCP PROBLEMS:")
for problem, info in problems.items():
    print(f"\n  {problem}")
    for key, value in info.items():
        print(f"    {key}: {value}")

# LAYER 4 SUMMARY:
# ┌──────────────────┬──────────────────────────────────┐
# │ Concept          │ Key Point                       │
# ├──────────────────┼──────────────────────────────────┤
# │ TCP              │ Reliable, ordered, handshake    │
# │ UDP              │ Fast, unreliable, no handshake  │
# │ Ports            │ Identify application (80, 443)  │
# │ 3-way handshake  │ SYN → SYN-ACK → ACK             │
# │ Sequence numbers │ Track byte ordering             │
# │ Flow control     │ Receiver limits sender speed    │
# │ Congestion ctrl  │ Back off on packet loss         │
# │ WebSockets       │ Persistent full-duplex TCP      │
# └──────────────────┴──────────────────────────────────┘</div>

<div class="callout info"><span class="co-icon">⚡</span><div><strong>UDP (User Datagram Protocol):</strong><br>
কোনো সংযোগ নেই। কোনো রসিদ নেই। কোনো ক্রম নেই।<br>
শুধু — পাঠাও। দ্রুত। সস্তা।<br>
<strong>ব্যবহার:</strong> ভিডিও স্ট্রিমিং, অনলাইন গেম, VoIP, DNS — যেখানে একটু ডেটা হারিয়ে গেলেও সমস্যা নেই, কিন্তু গতি দরকার।</div></div>

<div class="compare">
<div class="cmp-card cmp-good"><div class="cmp-label">✅ TCP</div>নির্ভরযোগ্য, ক্রম ঠিক, রসিদ আছে। ওয়েব পেজ, ইমেইল, ফাইল ট্রান্সফার। ধীর কিন্তু নিশ্চিত।</div>
<div class="cmp-card cmp-bad"><div class="cmp-label">⚡ UDP</div>দ্রুত, সস্তা, কোনো নিশ্চয়তা নেই। স্ট্রিমিং, গেম, DNS। একটু হারিয়ে গেলেও চলবে।</div>
</div>

<div class="callout info"><span class="co-icon">🚪</span><div><strong>পোর্ট (Ports):</strong> একটি IP ঠিকানা = একটি ভবন। পোর্ট = ভবনের কোন কক্ষে যাবে।<br>
HTTP → পোর্ট ৮০ | HTTPS → পোর্ট ৪৪৩ | SSH → পোর্ট ২২ | DNS → পোর্ট ৫৩<br>
০-১০২৩: ওয়েল-নোন (সিস্টেম) | ১০২৪-৪৯১৫১: রেজিস্টার্ড | ৪৯১৫২-৬৫৫৩৫: ডায়নামিক</div></div>

<div class="verse">إِنَّ اللَّهَ يَأْمُرُكُمْ أَن تُؤَدُّوا الْأَمَانَاتِ إِلَى أَهْلِهَا</div>
<div style="font-size:.85rem;color:var(--ink-dim);text-align:center;margin-bottom:1rem">"নিশ্চয়ই আল্লাহ তোমাদের নির্দেশ দিচ্ছেন আমানত তার অধিকারীর কাছে পৌঁছাতে।" — কুরআন ৪:৫৮</div>

<p class="scene-setting">এই আয়াত আমানত পৌঁছানোর নির্দেশ দেয়। TCP-ও তেমন — এটি একটি আমানতদার বার্তাবাহক। প্রতিটি প্যাকেট একটি আমানত। TCP নিশ্চিত করে যে প্যাকেট সঠিকভাবে, সঠিক ক্রমে, নিরুপায় গন্তব্যে পৌঁছেছে। UDP ক্ষেত্রে — আমানত পাঠানো হলো, কিন্তু দায়িত্ব প্রাপকের।</p>

<div class="callout tip"><span class="co-icon">🔗</span><div><strong>Book ৩৫ (ডিস্ট্রিবিউটেড সিস্টেমস) Door ৫:</strong> 2PC, 3PC, Saga pattern শিখেছিলে — এগুলো TCP-এর reliability-র উপর নির্মিত। Book ৪ (সিস্টেম ডিজাইন): Load balancer, Circuit Breaker — এগুলো Transport স্তরের উপর কাজ করে।</div></div>

<div class="secret-box">📦 <strong>TCP = নিবন্ধিত ডাক, UDP = সাধারণ ডাক।</strong> প্রতিটি প্রোটোকল একটি ট্রেড-অফ — নির্ভরযোগ্যতা নাকি গতি। TCP জিনিস পৌঁছায় নিশ্চিত করে, UDP দ্রুত পাঠায়। কোনটি ব্যবহার করবে তা নির্ভর করে তুমি কী পাঠাচ্ছো তার উপর। কিন্তু তুমি "google.com" লিখে এন্টার চাপলে — কে বলে গুগলের সার্ভার কোথায় আছে? সেই সমাধান আসবে পরের দরজায়।</div>`,
  senior: {
    title: "Transport Layer (TCP + UDP) এক নজরে",
    body: `<table class="kv-table"><tr><th>ধারণা</th><th>বিবরণ</th></tr>
<tr><td class="hl">TCP</td><td>নির্ভরযোগ্য, সংযোগ-ভিত্তিক, ক্রম ঠিক</td></tr>
<tr><td class="hl">UDP</td><td>দ্রুত, সংযোগহীন, কোনো নিশ্চয়তা নেই</td></tr>
<tr><td class="hl">3-way Handshake</td><td>SYN → SYN-ACK → ACK</td></tr>
<tr><td class="hl">Sequence + ACK</td><td>প্রতিটি বাইটের ক্রম, রসিদ</td></tr>
<tr><td class="hl">Sliding Window</td><td>flow control — প্রাপক ধারণক্ষমতা জানায়</td></tr>
<tr><td class="hl">Congestion Control</td><td>slow start → AIMD → নেটওয়ার্ক সুরক্ষা</td></tr>
<tr><td class="hl">Ports</td><td>০-৬৫৫৩৫ — HTTP:৮০, HTTPS:৪৪৩, DNS:৫৩, SSH:২২</td></tr></table>`
  }
});

doors.push({
  num: 5,
  icon: "📖",
  color: "#38bdf8",
  name: "নামের রক্ষক",
  subtitle: "The Name Keeper",
  tech: "DNS (Domain Name System) — Mockapetris 1983, hierarchical resolution, root/TLD/authoritative servers, caching, TTL",
  spirit: "আসমা — নামকরণ, সবকিছুর একটি নাম আর একটি ঠিকানা",
  secret: "DNS = ইন্টারনেটের ফোনবুক। নাম দাও, ঠিকানা পাও। কেউ মুখস্থ করে না ১৪২.২৫০.১৯০.৪৬ — সবাই বলে google.com।",
  recall: {
    q: " DNS resolution-এ কয়টি স্তর থাকে?",
    qen: "How many levels are in DNS resolution?",
    a: "৪টি — Root (.) → TLD (.com) → Authoritative (google.com) → IP। Browser cache → OS cache → Recursive → Root → TLD → Authoritative।",
    aen: "4 — Root (.) → TLD (.com) → Authoritative (google.com) → IP."
  },
  story: `<p class="scene-setting">তুমি একটি বন্ধুকে ফোন করতে চাও। কিন্তু তার নম্বর মনে নেই। তুমি একটি ফোনবুক খোলো — "রহিম" খোঁজো। ফোনবুক বলে: "রহিম — ০১৭xxxxxxxx।" তুমি নম্বর ডায়াল করো। সংযোগ। ঠিক এভাবে DNS কাজ করে। তুমি "google.com" লেখো — DNS বলে: "১৪২.২৫০.১৯০.৪৬।" ব্রাউজার সেই ঠিকানায় যায়।</p>
<p class="scene-setting en">You want to call a friend. Don't remember the number. You open a phonebook — look up "Rahim." Phonebook says: "Rahim — 017xxxxxxxx." You dial. Connected. DNS works exactly like this. You type "google.com" — DNS says: "142.250.190.46." Browser goes there.</p>

<div class="dialogue"><strong>নামের রক্ষক ইদ্রিস:</strong> কিন্তু ফোনবুক একটি বই — DNS একটি বিশাল, বিতরণ করা ডাটাবেস। পুরো বিশ্বে ছড়িয়ে আছে। কোনো একটি সার্ভারে সব নাম রাখা সম্ভব নয় — বিলিয়ন বিলিয়ন নাম! তাই Paul Mockapetris ১৯৮৩ সালে একটি hierarchical ব্যবস্থা তৈরি করেছিলেন।</div>
<div class="dialogue en"><strong>Name Keeper Idris:</strong> But a phonebook is one book — DNS is a massive, distributed database. Spread across the entire world. No single server can hold all names — billions! So Paul Mockapetris in 1983 created a hierarchical system.</div>

<div class="callout info"><span class="co-icon">🌳</span><div><strong>DNS শ্রেণীক্রম (Hierarchy):</strong><br>
<strong>১. Root Servers (.):</strong> বিশ্বে ১৩টি logical root (হাজারো physical instances)। বলে — ".com কোথায়?"<br>
<strong>২. TLD Servers (.com, .org, .bn):</strong> Top-Level Domain। বলে — "google.com কোথায়?"<br>
<strong>৩. Authoritative Servers:</strong> প্রতিটি ডোমেইনের নিজস্ব সার্ভার। বলে — "google.com = ১৪২.২৫০.১৯০.৪৬"<br>
<strong>৪. Recursive Resolvers:</strong> তোমার ISP-এর সার্ভার। তোমার জন্য উপরের তিন স্তরে জিজ্ঞেস করে।</div></div>

<div class="callout info"><span class="co-icon">📝</span><div><strong>DNS Resolution প্রক্রিয়া:</strong><br>
১. তুমি "google.com" টাইপ করো<br>
২. ব্রাউজার cache চেক করে — আছে? ব্যবহার করো।<br>
৩. OS cache চেক করে — আছে? ব্যবহার করো।<br>
৪. Recursive Resolver (ISP) — cache চেক করে।<br>
৫. Root Server → ".com TLD-তে যাও"<br>
৬. TLD Server → "google.com-এর Authoritative-তে যাও"<br>
৭. Authoritative Server → "১৪২.২৫০.১৯০.৪৬"<br>
৮. Resolver তোমাকে দেয়, cache-এ সংরক্ষণ করে (TTL পর্যন্ত)।</div></div>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>DNS Caching + TTL:</strong> প্রতিটি ডোমেইন একটি TTL সেট করে — কত সেকেন্ড এই ঠিকানা cache-এ রাখা যাবে। TTL শেষ হলে আবার জিজ্ঞেস করতে হয়। এটি ট্রাফিক কমায় কিন্তু সমস্যাও তৈরি করে — ঠিকানা বদলালে সবাই তৎক্ষণাৎ জানবে না।</div></div>

<div class="callout info"><span class="co-icon">📋</span><div><strong>DNS Record Types:</strong><br>
<strong>A:</strong> ডোমেইন → IPv4 ঠিকানা<br>
<strong>AAAA:</strong> ডোমেইন → IPv6 ঠিকানা<br>
<strong>CNAME:</strong> একটি নাম → আরেকটি নাম (alias)<br>
<strong>MX:</strong> মেইল সার্ভার ঠিকানা<br>
<strong>TXT:</strong> যাচাইকৃত টেক্সট (SPF, DKIM)<br>
<strong>NS:</strong> এই ডোমেইনের Authoritative সার্ভার কোনটি</div></div>

<div class="diagram">
<div class="diag-title">DNS শ্রেণীক্রম — নাম থেকে ঠিকানা</div>
<svg viewBox="0 0 560 320" xmlns="http://www.w3.org/2000/svg">
<defs>
  <marker id="arrTeal5" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><path d="M0,0 L0,8 L8,4 z" fill="#3dd6c4"/></marker>
</defs>
<!-- Root -->
<circle cx="280" cy="35" r="28" fill="rgba(251,191,36,.15)" stroke="#fbbf24" stroke-width="2"/>
<text x="280" y="32" fill="#fbbf24" font-size="11" font-weight="700" text-anchor="middle">Root</text>
<text x="280" y="46" fill="#9290a8" font-size="9" text-anchor="middle">(".")</text>
<!-- TLD level -->
<circle cx="130" cy="120" r="24" fill="rgba(56,189,248,.12)" stroke="#38bdf8" stroke-width="1.5"/>
<text x="130" y="118" fill="#38bdf8" font-size="10" font-weight="700" text-anchor="middle">.com</text>
<text x="130" y="130" fill="#9290a8" font-size="8" text-anchor="middle">TLD</text>
<circle cx="280" cy="120" r="24" fill="rgba(56,189,248,.12)" stroke="#38bdf8" stroke-width="1.5"/>
<text x="280" y="118" fill="#38bdf8" font-size="10" font-weight="700" text-anchor="middle">.org</text>
<text x="280" y="130" fill="#9290a8" font-size="8" text-anchor="middle">TLD</text>
<circle cx="430" cy="120" r="24" fill="rgba(56,189,248,.12)" stroke="#38bdf8" stroke-width="1.5"/>
<text x="430" y="118" fill="#38bdf8" font-size="10" font-weight="700" text-anchor="middle">.bn</text>
<text x="430" y="130" fill="#9290a8" font-size="8" text-anchor="middle">TLD</text>
<!-- Lines root→TLD -->
<line x1="265" y1="55" x2="145" y2="100" stroke="#5e5c74" stroke-width="1" stroke-dasharray="3,3"/>
<line x1="280" y1="63" x2="280" y2="96" stroke="#5e5c74" stroke-width="1" stroke-dasharray="3,3"/>
<line x1="295" y1="55" x2="415" y2="100" stroke="#5e5c74" stroke-width="1" stroke-dasharray="3,3"/>
<!-- Authoritative level -->
<rect x="75" y="190" width="110" height="40" rx="8" fill="rgba(82,196,26,.12)" stroke="#52c41a" stroke-width="1.5"/>
<text x="130" y="207" fill="#52c41a" font-size="10" font-weight="700" text-anchor="middle">google.com</text>
<text x="130" y="220" fill="#9290a8" font-size="9" text-anchor="middle">142.250.190.46</text>
<rect x="225" y="190" width="110" height="40" rx="8" fill="rgba(82,196,26,.12)" stroke="#52c41a" stroke-width="1.5"/>
<text x="280" y="207" fill="#52c41a" font-size="10" font-weight="700" text-anchor="middle">wikipedia.org</text>
<text x="280" y="220" fill="#9290a8" font-size="9" text-anchor="middle">208.80.154.224</text>
<rect x="375" y="190" width="110" height="40" rx="8" fill="rgba(82,196,26,.12)" stroke="#52c41a" stroke-width="1.5"/>
<text x="430" y="207" fill="#52c41a" font-size="10" font-weight="700" text-anchor="middle">gov.bd</text>
<text x="430" y="220" fill="#9290a8" font-size="9" text-anchor="middle">103.108.74.40</text>
<!-- Lines TLD→Auth -->
<line x1="130" y1="144" x2="130" y2="190" stroke="#5e5c74" stroke-width="1" stroke-dasharray="3,3"/>
<line x1="280" y1="144" x2="280" y2="190" stroke="#5e5c74" stroke-width="1" stroke-dasharray="3,3"/>
<line x1="430" y1="144" x2="430" y2="190" stroke="#5e5c74" stroke-width="1" stroke-dasharray="3,3"/>
<!-- Query flow (bottom) -->
<rect x="30" y="265" width="500" height="45" rx="8" fill="rgba(7,10,15,.6)" stroke="rgba(61,214,196,.2)" stroke-width="1"/>
<text x="280" y="282" fill="#3dd6c4" font-size="10" font-weight="600" text-anchor="middle">"google.com" টাইপ করো → Resolver Root-এ জিজ্ঞেস করে → ".com TLD" দেখায়</text>
<text x="280" y="298" fill="#3dd6c4" font-size="10" text-anchor="middle">→ TLD Authoritative দেখায় → "142.250.190.46" ফলাফল</text>
<!-- Arrows showing query path -->
<line x1="50" y1="210" x2="130" y2="120" stroke="#3dd6c4" stroke-width="1.5" stroke-dasharray="4,2" opacity=".5"/>
</svg>
<div class="diag-cap">Root (১৩টি) → TLD (.com/.org/.bn) → Authoritative (প্রতিটি ডোমেইনের নিজস্ব) · Resolver প্রতিটি স্তরে জিজ্ঞেস করে</div>
</div>

<div class="code-block"># ── STEP 1: What is DNS? ──
# DNS (Domain Name System) translates domain names to IP addresses.

dns = """
DNS = Phone book of the internet.

  google.com → 142.250.190.46

Without DNS, you'd need to memorize IP addresses.
With DNS, you type a name, DNS finds the IP.

HIERARCHY:
  Root DNS servers:     .          (13 logical, globally distributed)
  TLD servers:          .com .org .net .bd (Top Level Domains)
  Authoritative servers: google.com, example.com (per-domain)

RESOLUTION PROCESS (recursive query):
  1. Browser: "What's google.com?" → Local DNS resolver
  2. Resolver asks Root: "Where's .com?" → Root says "ask TLD"
  3. Resolver asks .com TLD: "Where's google.com?" → "ask Google's NS"
  4. Resolver asks Google's NS: "google.com?" → "142.250.190.46"
  5. Resolver caches and returns the IP to browser

This happens in ~10-50ms (with caching).
"""

print(dns)

# DNS RESOLVERS:
resolvers = """
DNS RESOLVERS (who does the lookup for you):

  ISP resolver: Your ISP's DNS (often slow, may track you)
  Google DNS:   8.8.8.8, 8.8.4.4 (fast, free, logs queries)
  Cloudflare:   1.1.1.1 (fast, privacy-focused)
  Quad9:        9.9.9.9 (security, blocks malware)

Set your DNS:
  /etc/resolv.conf:
    nameserver 1.1.1.1
    nameserver 8.8.8.8
"""

print(resolvers)</div>

<div class="code-block"># ── STEP 2: DNS record types ──
# Different record types serve different purposes.

record_types = {
    "A (Address)": {
        "purpose": "Domain → IPv4 address",
        "example": "google.com. 300 IN A 142.250.190.46",
        "use": "Main website address",
    },
    "AAAA (IPv6 Address)": {
        "purpose": "Domain → IPv6 address",
        "example": "google.com. 300 IN AAAA 2607:f8b0:4004:800::200e",
        "use": "IPv6 support",
    },
    "CNAME (Canonical Name)": {
        "purpose": "Domain alias → another domain",
        "example": "www.google.com → google.com",
        "use": "Point subdomain to main domain",
    },
    "MX (Mail Exchange)": {
        "purpose": "Where to send email for this domain",
        "example": "google.com. 3600 IN MX 10 smtp.google.com",
        "use": "Email delivery",
    },
    "NS (Name Server)": {
        "purpose": "Which DNS server is authoritative",
        "example": "google.com. 86400 IN NS ns1.google.com",
        "use": "DNS delegation",
    },
    "TXT (Text)": {
        "purpose": "Arbitrary text records",
        "example": 'google.com. 3600 IN TXT "v=spf1 include:_spf.google.com ~all"',
        "use": "SPF (email auth), domain verification",
    },
    "SOA (Start of Authority)": {
        "purpose": "DNS zone metadata",
        "example": "google.com. 86400 IN SOA ns1.google.com. admin.google.com.",
        "use": "Zone configuration",
    },
    "SRV (Service)": {
        "purpose": "Service location (host + port)",
        "example": "_sip._tcp.example.com. SRV 10 60 5060 sip.example.com.",
        "use": "VoIP, XMPP, Active Directory",
    },
}

print("DNS RECORD TYPES:")
for rtype, info in record_types.items():
    print(f"\n  {rtype}")
    for key, value in info.items():
        print(f"    {key}: {value}")</div>

<div class="code-block"># ── STEP 3: DNS tools (dig, nslookup) ──
# How to inspect DNS records.

dig_examples = """
# Basic lookup:
$ dig google.com

;; QUESTION SECTION:
;google.com.            IN  A

;; ANSWER SECTION:
google.com.     300  IN  A   142.250.190.46    ← TTL: 300 seconds

;; Query time: 12 msec
;; SERVER: 192.168.1.1#53

# Look up specific record types:
$ dig MX google.com      # Mail servers
$ dig NS google.com      # Name servers
$ dig AAAA google.com    # IPv6 address
$ dig TXT google.com     # Text records (SPF, etc.)
$ dig CNAME www.google.com  # Alias

# Simple lookup:
$ nslookup google.com
Server:     192.168.1.1
Name:       google.com
Address:    142.250.190.46

# Use specific DNS server:
$ dig @8.8.8.8 google.com    # Ask Google DNS directly
$ dig @1.1.1.1 google.com    # Ask Cloudflare DNS

# Check DNS propagation:
$ dig +short google.com      # Just the IP, no details
142.250.190.46
"""

print(dig_examples)

# PYTHON DNS LOOKUP:
python_dns = """
import socket

# Simple lookup:
ip = socket.gethostbyname('google.com')
print(f"google.com → {ip}")

# Full DNS info with dnspython:
import dns.resolver

# A record:
answers = dns.resolver.resolve('google.com', 'A')
for rdata in answers:
    print(f"A: {rdata.address}")

# MX record:
mx_records = dns.resolver.resolve('google.com', 'MX')
for rdata in mx_records:
    print(f"MX: {rdata.exchange} (priority {rdata.preference})")

# TXT record:
txt_records = dns.resolver.resolve('google.com', 'TXT')
for rdata in txt_records:
    print(f"TXT: {rdata.strings}")
"""

print(python_dns)</div>

<div class="code-block"># ── STEP 4: DNS caching and TTL ──
# DNS results are CACHED at multiple levels for speed.

caching = """
DNS CACHING LEVELS:

1. BROWSER CACHE (Chrome, Firefox)
   → Caches DNS for ~60 seconds
   → Speeds up revisits to same domain

2. OS CACHE (systemd-resolved, dnsmasq)
   → Caches DNS at OS level
   → All apps share the cache
   → TTL: follows DNS record's TTL

3. RESOLVER CACHE (ISP/Google/Cloudflare)
   → Your DNS resolver caches results
   → TTL: follows DNS record's TTL (300s to 86400s)

4. HIERARCHICAL CACHING (Root, TLD)
   → Each level caches
   → Reduces load on root servers

TTL (Time To Live):
  300 (5 min):    Frequently changing (load balancing, failover)
  3600 (1 hour):  Moderate changes
  86400 (1 day):  Stable, rarely changes (NS records)
  604800 (1 week): Very stable

TRADE-OFF:
  Short TTL = fast updates, more DNS queries (slower first lookup)
  Long TTL = fewer queries, but changes take longer to propagate

FLUSH YOUR DNS CACHE:
  macOS:   sudo dscacheutil -flushcache; sudo killall -HUP mDNSResponder
  Linux:   sudo systemd-resolve --flush-caches
  Chrome:  chrome://net-internals/#dns → "Clear host cache"
"""

print(caching)

# DNS TROUBLESHOOTING:
troubleshooting = """
DNS PROBLEMS (most common networking issue):

SYMPTOM: "I can ping 8.8.8.8 but not google.com"
  → DNS is broken (can reach internet, can't resolve names)

DIAGNOSE:
  1. Is DNS configured?
     $ cat /etc/resolv.conf
     nameserver 192.168.1.1

  2. Can we reach the DNS server?
     $ ping 192.168.1.1

  3. Can we resolve?
     $ dig google.com
     → If no answer, DNS server is broken
     → Try: $ dig @8.8.8.8 google.com (different DNS)

  4. Flush cache:
     $ sudo systemd-resolve --flush-caches

FIXES:
  → Change DNS to 8.8.8.8 or 1.1.1.1
  → Check /etc/resolv.conf
  → Restart network manager
  → Check firewall isn't blocking port 53
"""

print(troubleshooting)</div>

<div class="code-block"># ── STEP 5: DHCP — getting an IP automatically ──
# DHCP assigns IP addresses automatically.

dhcp = """
DHCP (Dynamic Host Configuration Protocol):

When you connect to Wi-Fi, you need an IP address.
DHCP gives you one automatically — no manual configuration.

DORA PROCESS:
  D - Discover: Client broadcasts "I need an IP!"
  O - Offer:    DHCP server offers "Take 192.168.1.42"
  R - Request:  Client says "OK, I'll take that one"
  A - Ack:      Server confirms "It's yours for 24 hours"

WHAT DHCP PROVIDES:
  → IP address (192.168.1.42)
  → Subnet mask (255.255.255.0)
  → Default gateway (192.168.1.1)
  → DNS servers (8.8.8.8, 1.1.1.1)
  → Lease time (24 hours)

LEASE MANAGEMENT:
  → DHCP leases IP for a fixed time (usually 24h)
  → At 50% lease time, client tries to renew
  → At 87.5%, client broadcasts renewal request
  → If no renewal → IP released back to pool
"""

print(dhcp)

# VIEW DHCP INFO:
dhcp_view = """
# Linux: View DHCP lease info:
$ cat /var/lib/dhcp/dhclient.leases

lease {
  interface "eth0";
  fixed-address 192.168.1.42;
  option subnet-mask 255.255.255.0;
  option routers 192.168.1.1;
  option domain-name-servers 8.8.8.8, 1.1.1.1;
  lease-time 86400;  # 24 hours
}

# Renew DHCP lease:
$ sudo dhclient -r eth0    # Release IP
$ sudo dhclient eth0       # Get new IP

# macOS: Renew DHCP:
$ sudo ipconfig set en0 BOOTP
$ sudo ipconfig set en0 DHCP

# Static IP (bypass DHCP):
# /etc/netplan/01-network.yaml:
network:
  ethernets:
    eth0:
      addresses: [192.168.1.100/24]  # static IP
      gateway4: 192.168.1.1
      nameservers: [8.8.8.8, 1.1.1.1]
"""

print(dhcp_view)</div>

<div class="code-block"># ── STEP 6: DNS in production (Django) ──
# How DNS works for YOUR web applications.

production_dns = """
DNS FOR YOUR DJANGO APP:

1. REGISTER A DOMAIN:
   → Buy from registrar (Namecheap, GoDaddy, Cloudflare)
   → e.g., ledgerpilot.com

2. CONFIGURE DNS RECORDS:
   A record:     ledgerpilot.com → 174.138.110.50 (server IP)
   A record:     api.ledgerpilot.com → 174.138.110.50
   CNAME:        www.ledgerpilot.com → ledgerpilot.com
   MX record:    ledgerpilot.com → mail.protonmail.com (email)
   TXT (SPF):    "v=spf1 include:_spf.protonmail.com ~all"
   TXT (verify): "google-site-verification=..."

3. PROPAGATION:
   → DNS changes take time to propagate (TTL-based)
   → Short TTL (300s) before migration = faster propagation
   → Check propagation: whatsmydns.net (global check)

4. CLOUDFLARE (common setup):
   → Nameservers: ns1.cloudflare.com, ns2.cloudflare.com
   → Cloudflare proxies traffic (CDN + DDoS protection)
   → SSL termination at Cloudflare edge

PYTHON: Check your DNS programmatically:
  import dns.resolver

  def check_dns_setup(domain):
      checks = {
          "A": f"Points to server IP",
          "MX": f"Email configured",
          "TXT (SPF)": f"Email authentication",
          "NS": f"Nameservers configured",
      }

      for record_type, desc in checks.items():
          try:
              answers = dns.resolver.resolve(domain, record_type)
              print(f"  ✅ {record_type}: {len(answers)} records")
          except:
              print(f"  ❌ {record_type}: NOT FOUND")
"""

print(production_dns)

# DNS CHECKLIST FOR DEPLOYMENT:
checklist = [
    "Register domain name",
    "Configure A record (domain → server IP)",
    "Configure CNAME (www → domain)",
    "Set up MX records (email)",
    "Set up TXT (SPF for email authentication)",
    "Use short TTL before migration (300s)",
    "Verify propagation with whatsmydns.net",
    "Set up Cloudflare (CDN + security)",
    "Configure reverse DNS (PTR record) with ISP",
    "Test with dig/nslookup from multiple locations",
    "Monitor DNS uptime (alert if DNS fails)",
    "Set DNS TTL to 3600 (1hr) for stability after setup",
]

print("DNS DEPLOYMENT CHECKLIST:")
for item in checklist:
    print(f"  ☐ {item}")

# DNS + DHCP SUMMARY:
# ┌──────────────────┬──────────────────────────────────┐
# │ Concept          │ Key Point                       │
# ├──────────────────┼──────────────────────────────────┤
# │ DNS              │ Domain name → IP address         │
# │ DNS hierarchy    │ Root → TLD → Authoritative      │
# │ A record         │ Domain → IPv4                   │
# │ CNAME            │ Domain alias                    │
# │ MX record        │ Email server                    │
# │ TTL              │ Cache duration (300-86400s)    │
# │ DNS resolvers    │ 8.8.8.8 (Google), 1.1.1.1 (CF) │
# │ DHCP             │ Auto-assign IP addresses        │
# │ DHCP DORA        │ Discover→Offer→Request→Ack      │
# │ DHCP provides    │ IP, mask, gateway, DNS          │
# └──────────────────┴──────────────────────────────────┘</div>

<div class="callout info"><span class="co-icon">🔌</span><div><strong>DHCP DORA Process (Missing Topic!):</strong> তুমি যখন Wi-Fi তে যুক্ত হও, তোমাকে একটি IP ঠিকানা দরকার। এটি DHCP প্রোটোকল দেয় — ৪টি ধাপে।<br>
<strong>D</strong>iscover: ক্লায়েন্ট ব্রডকাস্ট করে — "আমাকে IP দাও!"<br>
<strong>O</strong>ffer: DHCP সার্ভার বলে — "এই নাও ১৯২.১৬৮.১.৪২"<br>
<strong>R</strong>equest: ক্লায়েন্ট বলে — "ঠিক আছে, এটাই নিচ্ছি"<br>
<strong>A</strong>cknowledge: সার্ভার বলে — "নিশ্চিত, এটা তোমার"</div></div>

<div class="code-block">— DHCP DORA প্রক্রিয়া প্যাকেটে —
  ক্লায়েন্ট                       DHCP সার্ভার
     #                                # 
     #  ── DISCOVER (broadcast) ────→ #   "আমাকে IP দাও"
     #                                # 
     #  ←── OFFER (unicast) ────────  #   "এই 192.168.1.42"
     #                                # 
     #  ── REQUEST (broadcast) ────→  #   "এটাই চাই"
     #                                # 
     #  ←── ACK (unicast) ──────────  #   "নিশ্চিত, TTL=86400s"
     #                                # 

— Lease time: সাধারণত ২৪ ঘণ্টা — অর্ধেক হলে রিনিউ করে —
— DNS, gateway, subnet mask সব DHCP দেয় — শুধু IP নয় —</div>

<div class="verse">وَعَلَّمَ آدَمَ الْأَسْمَاءَ كُلَّهَا</div>
<div style="font-size:.85rem;color:var(--ink-dim);text-align:center;margin-bottom:1rem">"এবং তিনি আদমকে শিখিয়েছিলেন সমস্ত নাম।" — কুরআন ২:৩১</div>

<p class="scene-setting">এই আয়াতে আল্লাহ আদমকে সমস্ত নাম শিখিয়েছিলেন — নামকরণ জ্ঞানের ভিত্তি। DNS-ও তেমন — নাম ছাড়া ইন্টারনেট ব্যবহার অসম্ভব। আমরা আইপি ঠিকানা মনে রাখি না, নাম মনে রাখি। DNS সেই নামকে ঠিকানায় অনুবাদ করে। এটিই ইন্টারনেটের প্রথম পদক্ষেপ — নাম থেকে ঠিকানা।</p>

<div class="callout tip"><span class="co-icon">🔗</span><div><strong>Book ৪ (সিস্টেম ডিজাইন):</strong> CDN, Load Balancer, API Gateway — সবই DNS-এর উপর নির্ভর করে। Book ৩৫ (ডিস্ট্রিবিউটেড সিস্টেমস): বিতরণ করা ডাটাবেস — DNS হলো বিশ্বের সবচেয়ে বড় distributed database।</div></div>

<div class="secret-box">📖 <strong>DNS = ইন্টারনেটের ফোনবুক।</strong> নাম দাও, ঠিকানা পাও। শ্রেণীক্রমে প্রশ্ন করে — Root → TLD → Authoritative। প্রতিটি স্তরে cache করে যাতে পরের বার দ্রুত পাওয়া যায়। এখন তুমি জানো ঠিকানা পাওয়া যায় — কিন্তু সেই ঠিকানায় কীভাবে কথা বলবে? কোন ভাষায়? সেই যাত্রা শুরু হবে পরের দরজায়।</div>`,
  senior: {
    title: "DNS এক নজরে",
    body: `<table class="kv-table"><tr><th>ধারণা</th><th>বিবরণ</th></tr>
<tr><td class="hl">DNS</td><td>Mockapetris ১৯৮৩ — Domain Name System</td></tr>
<tr><td class="hl">Hierarchy</td><td>Root (.) → TLD (.com) → Authoritative → IP</td></tr>
<tr><td class="hl">Root Servers</td><td>১৩টি logical, হাজারো physical instances</td></tr>
<tr><td class="hl">Recursive Resolver</td><td>ISP সার্ভার — তোমার জন্য জিজ্ঞেস করে</td></tr>
<tr><td class="hl">Caching</td><td>ব্রাউজার → OS → Resolver — TTL পর্যন্ত</td></tr>
<tr><td class="hl">A Record</td><td>ডোমেইন → IPv4</td></tr>
<tr><td class="hl">CNAME</td><td>alias — এক নাম থেকে আরেক নাম</td></tr>
<tr><td class="hl">MX Record</td><td>মেইল সার্ভার ঠিকানা</td></tr></table>`
  }
});
