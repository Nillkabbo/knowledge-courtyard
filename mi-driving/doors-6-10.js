// ════════════════════════════════════════
// মিশিগান ড্রাইভিং গাইড — DOORS 6-10
// Michigan Driving Guide: Safe Driving → Road Test
// ════════════════════════════════════════

// ══ DOOR 6: SAFE DRIVING PRACTICES ══
doors.push({
  num:6, icon:"📏", color:"#22c55e", name:"নিরাপদ চালনার কৌশল",
  subtitle:"Safe Driving Techniques", tech:"Following Distance, Blind Spots, Passing, Merging",
  secret:"3-second rule: সামনের গাড়ি একটা নির্দিষ্ট পয়েন্ট পার হওয়ার পর তুমি গোনো — one-thousand-one, two, three। ৩ সেকেন্ডের আগে তুমি সেই পয়েন্টে পৌঁছালে তুমি খুব কাছে। বৃষ্টিতে ৪ সেকেন্ড, বরফে ৬+ সেকেন্ড। ব্লাইন্ড স্পটে সবসময় কাঁধ ঘুরিয়ে দেখো — mirror একা যথেষ্ট নয়।",
  recall:{
    q:"কেন instructor বললেন 3-second rule শুধু dry weather এর জন্য?",
    qen:"Why did the instructor say the 3-second rule is only for dry weather?",
    a:"কারণ বৃষ্টিতে, বরফে, কুয়াশায় ব্রেক দূরত্ব বাড়ে। Dry weather-এ ৩ সেকেন্ড। বৃষ্টিতে ৪। বরফে ৬+। কারণ পিচ্ছিল রাস্তায় ব্রেক করতে সময় বেশি লাগে। ৩ সেকেন্ড শুধু dry, daylight, clear রাস্তার জন্য।",
    aen:"Because rain, snow, fog increase braking distance. Dry weather = 3 seconds. Rain = 4. Snow = 6+. Slippery roads need more braking time. 3 seconds is only for dry, daylight, clear roads."
  },
  story:`
<p class="scene-setting">ষষ্ঠ অধ্যায়। তুমি গাড়িতে বসে আছো। পাশে instructor — হাতে stopwatch, চোখে সড়ক। সামনে একটা গাড়ি চলছে। "দেখো," instructor বললেন, "ওই গাড়ি ওই পোলের পাশে পৌঁছাল। এখন গোনো — one-thousand-one, one-thousand-two, one-thousand-three। তুমি আগে পৌঁছালে তুমি খুব কাছে।"</p>
<p class="scene-setting en">The sixth chapter. You sit in a car. Beside you: instructor — stopwatch in hand, eyes on road. Ahead: a car driving. "Look," the instructor said, "that car reached that pole. Now count — one-thousand-one, one-thousand-two, one-thousand-three. If you reach it earlier, you're too close."</p>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>ভুলের গল্প — Winter Black Ice:</strong> Hit black ice on US-23 — spun into oncoming traffic. Fix: assume invisible ice below 32F.</div></div>


<div class="code-block"># ── STEP 1: Safe driving techniques — SEE system ──
# Defensive driving mastery.

# THE SEE SYSTEM (Smith System, used by professional drivers):
# S - SEARCH: Scan 20-30 seconds ahead, check mirrors every 5-8 sec
# E - EVALUATE: Predict what could happen (that car might change lanes)
# E - EXECUTE: Take action early (slow down, create space, plan escape)

# PYTHON (defensive driving system):
def see_system(speed_mph, traffic="moderate", weather="clear"):
    """Apply the SEE defensive driving system."""
    # 1. SEARCH — what to look for:
    search_targets = [
        "20-30 seconds ahead (upcoming hazards)",
        "Mirrors every 5-8 seconds",
        "Intersections: left-right-left before entering",
        "Blind spots before lane changes",
        "Road surface (potholes, debris, ice)",
    ]

    # 2. EVALUATE — potential hazards:
    hazards = [
        "Car drifting in lane (distracted driver?)",
        "Child near road (might run into street)",
        "Ball rolling into road (child following?)",
        "Tailgating truck (brake early, increase space)",
        "Blind curve (oncoming car in your lane?)",
    ]

    # 3. EXECUTE — actions to take:
    # Following distance adjusts for conditions:
    base_seconds = 3
    if weather in ("rain", "snow"): base_seconds += 1
    if weather == "ice": base_seconds += 3
    if traffic == "heavy": base_seconds += 1
    if speed_mph > 55: base_seconds += 1

    # Following distance in feet (at speed):
    feet_per_second = speed_mph * 1.467
    safe_distance = int(feet_per_second * base_seconds)

    return {
        "search": search_targets,
        "evaluate": hazards[:3],  # top 3
        "execute": f"Maintain {base_seconds}s following distance ({safe_distance} ft)",
        "speed_adjust": f"Reduce speed if any hazard identified",
    }

result = see_system(55, "moderate", "rain")
print("SEE DEFENSIVE DRIVING SYSTEM:")
print("\n1. SEARCH:")
for s in result["search"]:
    print(f"  → {s}")
print("\n2. EVALUATE (top hazards):")
for h in result["evaluate"]:
    print(f"  ⚠️ {h}")
print(f"\n3. EXECUTE:")
print(f"  → {result['execute']}")
print(f"  → {result['speed_adjust']}")

# SPACE CUSHION (6 zones around your car):
zones = [
    "FRONT: 3+ second following distance",
    "REAR: If tailgated, increase front distance",
    "LEFT-FRONT: Watch blind spot before lane change",
    "RIGHT-FRONT: Watch for merging traffic",
    "LEFT-REAR: Check mirror before moving left",
    "RIGHT-REAR: Check mirror before moving right",
]
print("\nSPACE CUSHION (keep zones clear):")
for zone in zones:
    print(f"  🛡️ {zone}")

# DEFENSIVE DRIVING RULE: Assume others will make mistakes
# and be prepared to react. Better to yield than crash.</div>

<div class="code-block"># ── STEP 2: Lane change technique and following distance ──
# How to change lanes and maintain safe distance.

# LANE CHANGE PROCEDURE (SMOG):
# S - SIGNAL (turn signal, early)
# M - MIRROR (check rear-view and side mirror)
# O - OVER SHOULDER (check blind spot)
# G - GO (smoothly, don't jerk the wheel)

lane_change_steps = [
    "1. CHECK traffic ahead (is it safe to change?)",
    "2. SIGNAL (turn signal, at least 100 feet before change)",
    "3. CHECK mirrors (is car in adjacent lane?)",
    "4. CHECK blind spot (quick over-shoulder glance)",
    "5. CHANGE LANES (smooth, gradual move)",
    "6. CANCEL signal (most cars auto-cancel)",
    "7. ADJUST speed to match new lane flow",
]

print("LANE CHANGE PROCEDURE (SMOG):")
for step in lane_change_steps:
    print(f"  {step}")

# FOLLOWING DISTANCE (3-second rule):
# → Pick a fixed object ahead (sign, pole, shadow)
# → When car ahead passes it, count: "one-thousand-one, one-thousand-two, one-thousand-three"
# → If you reach the object before 3: TOO CLOSE

# PYTHON (following distance calculator):
def following_distance(speed_mph, conditions="clear"):
    """Calculate safe following distance for conditions."""
    base_seconds = 3.0

    adjustments = {
        "clear": 0,
        "rain": 1.0,
        "wet_road": 1.0,
        "snow": 2.0,
        "ice": 4.0,
        "fog": 3.0,
        "night": 1.0,
        "heavy_traffic": 1.0,
        "tailgated": 2.0,
        "large_vehicle_ahead": 2.0,
    }

    extra = adjustments.get(conditions, 0)
    total_seconds = base_seconds + extra
    feet_per_second = speed_mph * 1.467
    distance_feet = int(total_seconds * feet_per_second)
    car_lengths = int(distance_feet / 15)  # average car = 15 feet

    print(f"  Speed: {speed_mph} mph | Condition: {conditions}")
    print(f"  Following distance: {total_seconds:.0f} seconds")
    print(f"  = {distance_feet} feet ({car_lengths} car lengths)")

    return distance_feet

print("\nFOLLOWING DISTANCE CALCULATOR:")
following_distance(55, "clear")
following_distance(70, "rain")
following_distance(45, "ice")
following_distance(25, "snow")
following_distance(70, "tailgated")

# 2-SECOND RULE (minimum, good conditions only):
# 3-SECOND RULE (standard, any conditions)
# 4+ SECOND RULE (bad weather, night, tailgated)
# NEVER tailgate — it's the #1 cause of rear-end crashes</div>
  ✦ পেছনে: tailgater থাকলে সামনের gap বাড়াও
  ✦ সবসময় একটা ESCAPE ROUTE ভাবো —
    "এখনই সামনের গাড়ি থামলে আমি কোথায় যাব?"

  💡 জায়গা = সময়। সময় = সিদ্ধান্তের সুযোগ।
     Space cushion-ই defensive driving-এর মুদ্রা।

# — — — — — — — — — — — — — — — — — — — — — —
📏 FOLLOWING DISTANCE (3-SECOND RULE)
# — — — — — — — — — — — — — — — — — — — — — —

  Dry, clear, daylight: ৩ সেকেন্ড
  Rain/wet road: ৪ সেকেন্ড
  Snow/ice: ৬+ সেকেন্ড
  Night: ৪+ সেকেন্ড
  Truck/bus behind: আরও বেশি

  কীভাবে গণনা করবে:
  ১. সামনের গাড়ি একটা fixed point (pole, sign) 
     পার হলে গোনো শুরু
  ২. "one-thousand-one, one-thousand-two, 
     one-thousand-three"
  ৩. তুমি সেই point পার হওয়ার আগে গোনা শেষ হলে 
     = নিরাপদ দূরত্ব

# — — — — — — — — — — — — — — — — — — — — — —
👁️ BLIND SPOTS (অন্ধ এলাকা)
# — — — — — — — — — — — — — — — — — — — — — —

  Mirror-এ যা দেখা যায় না = blind spot
  → সব গাড়ির পাশে blind spot আছে

  নিয়ম:
  ✦ Mirror দেখো (rear-view + side)
  ✦ তারপর কাঁধ ঘুরিয়ে দেখো (shoulder check)
  ❌ Mirror alone যথেষ্ট নয়!
  ❌ লেন পরিবর্তনে shoulder check MUST

  BGE Mirror (Blindspot Glare Elimination):
  → Side mirror বাইরের দিকে ঘুরাও
  → Blind spot কমে

# — — — — — — — — — — — — — — — — — — — — — —
🛣️ PASSING (অতিক্রম করা)
# — — — — — — — — — — — — — — — — — — — — — —

  পাস করার আগে:
  ১. সামনের রাস্তা পরিষ্কার — অন্য গাড়ি নেই
  ২. ডানে যথেষ্ট জায়গা
  ৩. Mirror + shoulder check
  ৪. বাম signal দাও
  ৫. বাম লেনে যাও
  ৬. পাস করো
  ৭. সামনের গাড়ি rear-view এ দেখা গেলে
  ৮. ডান signal দাও, ডান লেনে ফিরে যাও

  ⚠️ কোথায় পাস নিষেধ:
  ✗ হীরা সলিড লাইন এলাকায়
  ✗ Hilltop বা curve-এ (visibility নেই)
  ✗ Intersection কাছে
  ✗ Railroad crossing কাছে

  🔵 PASSING ON THE RIGHT (ডান দিক দিয়ে পাস):
  সাধারণত নিষেধ, তবে এই ক্ষেত্রে আইনি:
  ✦ সামনের গাড়ি left turn-এর জন্য signal দিয়ে
    অপেক্ষা করছে
  ✦ Multi-lane one-way রাস্তায়
  ✦ একাধিক লেনের রাস্তায় যেখানে ডান লেনে চলা বৈধ
  ❌ Shoulder-এ নেমে পাস করা সবসময় নিষেধ

# — — — — — — — — — — — — — — — — — — — — — —
🔀 MERGING (হাইওয়েতে যুক্ত হওয়া)
# — — — — — — — — — — — — — — — — — — — — — —

  ১. On-ramp-এ accelerate করো (highway speed-এ)
  ২. Mirror + shoulder check
  ৩. Gap খুঁজো — সামনের গাড়ি পেছনে
  ৪. Signal দাও
  ৫. Smoothly লেনে ঢুকো
  ৬. Highway speed-এ চালাও

  ⚠️ হাইওয়েতে ধীরে ঢুকো না — বিপজ্জনক!

# — — — — — — — — — — — — — — — — — — — — — —
🌙 NIGHT DRIVING
# — — — — — — — — — — — — — — — — — — — — — —

  ✦ Headlight on (sunset থেকে sunrise)
  ✦ High beam (dark road, no oncoming)
  ✦ Low beam (oncoming গাড়ি ৫০০ft কাছে)
  ✦ High beam → low beam করো oncoming দেখলে
  ✦ Speed কমাও — night visibility কম
  ✦ ৪+ second following distance

# — — — — — — — — — — — — — — — — — — — — — —
💡 HEADLIGHT + WIPER LAW (Michigan)
# — — — — — — — — — — — — — — — — — — — — — —

  ✦ Michigan LAW: wipers ON = headlights ON
    → বৃষ্টি, তুষার, কুয়াশা — wipers চালু থাকলে 
      headlights ও চালু রাখো
    → শুধু parking lights যথেষ্ট নয়
    → Daytime running lights (DRL) যথেষ্ট নয় — 
      full headlights ON করো
  ✦ Visibility 500 ft এর কম হলে headlights ON
  ✦ Sunset to sunrise: headlights mandatory

# — — — — — — — — — — — — — — — — — — — — — —
💧 STEERING & BRAKING TECHNIQUES
# — — — — — — — — — — — — — — — — — — — — — —

  ✦ 9-and-3 hand position (steering wheel)
  ✦ Push-pull steering (smooth)
  ✦ Cover brake technique (foot brake উপরে)
  ✦ Threshold braking (firm, smooth — ABS-এ)
  ✦ ABS: চাপ ধরে রাখো, পাম্প করো না</div>

<div class="rt-image">
<svg viewBox="0 0 460 240" width="100%" style="max-width:490px">
<rect x="0" y="0" width="460" height="240" fill="#111" rx="8"/>
<text x="230" y="20" text-anchor="middle" fill="#f1c40f" font-size="12" font-weight="900">🛣️ PASSING — Two-lane রাস্তায় নিরাপদ ওভারটেক</text>
<!-- two-lane road -->
<rect x="0" y="60" width="460" height="120" fill="#2a2a2a"/>
<!-- dashed yellow center (passing allowed) -->
<line x1="0" y1="120" x2="460" y2="120" stroke="#f1c40f" stroke-width="3" stroke-dasharray="16,13" opacity=".8"/>
<text x="60" y="114" fill="#f1c40f" font-size="10" font-weight="700">ড্যাশড হলুদ = পাস বৈধ</text>
<!-- oncoming lane label -->
<text x="404" y="80" text-anchor="middle" fill="#666" font-size="10">← oncoming lane (ফাঁকা? নিশ্চিত হও!)</text>
<!-- slow vehicle ahead -->
<g transform="translate(300,138)">
<rect x="0" y="0" width="56" height="28" rx="6" fill="#8e6e3a"/>
<rect x="42" y="-8" width="14" height="12" rx="2" fill="#6b5329"/>
<circle cx="12" cy="30" r="7" fill="#000"/><circle cx="44" cy="30" r="7" fill="#000"/>
<polygon points="28,-16 36,-2 20,-2" fill="#e67e22" stroke="#c0392b" stroke-width="1.5"/>
</g>
<text x="328" y="188" text-anchor="middle" fill="#e8a838" font-size="7.5" font-weight="700">ধীর tractor — orange triangle</text>
<!-- your car path: passing arc -->
<path d="M 40 152 L 120 152 Q 160 152 180 120 Q 200 90 240 90 Q 280 90 305 112 Q 325 130 360 138" fill="none" stroke="#2ecc71" stroke-width="3" stroke-dasharray="7,5" marker-end="url(#psA)"/>
<defs><marker id="psA" markerWidth="7" markerHeight="7" refX="5" refY="3.5" orient="auto"><polygon points="0,0 7,3.5 0,7" fill="#2ecc71"/></marker></defs>
<!-- your car at start -->
<g transform="translate(20,140)">
<rect x="0" y="0" width="48" height="24" rx="7" fill="#2ecc71"/>
<rect x="8" y="4" width="32" height="10" rx="3" fill="#0e4429"/>
<circle cx="11" cy="26" r="6" fill="#000"/><circle cx="37" cy="26" r="6" fill="#000"/>
</g>
<!-- ghost car mid-pass -->
<g transform="translate(216,78)" opacity=".55">
<rect x="0" y="0" width="48" height="24" rx="7" fill="#2ecc71"/>
</g>
<!-- step labels -->
<text x="70" y="212" text-anchor="middle" fill="#7bed9f" font-size="8" font-weight="700">১-৩: রাস্তা clear?</text>
<text x="70" y="223" text-anchor="middle" fill="#7bed9f" font-size="7.5">mirror + shoulder + signal ⬅</text>
<text x="200" y="212" text-anchor="middle" fill="#7bed9f" font-size="8" font-weight="700">৪-৫: বাম লেনে —</text>
<text x="200" y="223" text-anchor="middle" fill="#7bed9f" font-size="7.5">দ্রুত কিন্তু limit-এর মধ্যে</text>
<text x="330" y="212" text-anchor="middle" fill="#7bed9f" font-size="8" font-weight="700">৬-৮: mirror-এ tractor দেখা গেলে</text>
<text x="330" y="223" text-anchor="middle" fill="#7bed9f" font-size="7.5">signal ➡ ফিরে যাও — cut নয়!</text>
<!-- danger note -->
<text x="230" y="48" text-anchor="middle" fill="#ff8a80" font-size="8" font-weight="700">⚠️ Hilltop/curve/সলিড হলুদে কখনো নয় — oncoming না দেখা = পাস নিষেধ</text>
</svg>
<div class="rt-caption">পুরো maneuver এক ছবিতে: check → signal → পাস → mirror-এ পুরো গাড়ি দেখা গেলে ফিরে আসা। তাড়াহুড়োয় ফিরলে (cut) tractor-কে brake করতে হয় — সেটাই fail</div>
</div>

<div class="rt-image">
<svg viewBox="0 0 460 230" width="100%" style="max-width:480px">
<!-- sky/bg -->
<rect x="0" y="0" width="460" height="230" fill="#111" rx="8"/>
<text x="230" y="22" text-anchor="middle" fill="#f1c40f" font-size="12" font-weight="900">📏 3-SECOND RULE</text>
<!-- FRAME 1 -->
<text x="14" y="46" fill="#888" font-size="9" font-weight="700">মুহূর্ত ১ — সামনের গাড়ি পোল পার হলো → গোনা শুরু</text>
<rect x="14" y="52" width="432" height="44" fill="#2a2a2a" rx="4"/>
<line x1="14" y1="74" x2="446" y2="74" stroke="#f1c40f" stroke-width="2" stroke-dasharray="14,10" opacity=".6"/>
<rect x="208" y="46" width="5" height="56" fill="#8a6d3b"/><circle cx="210" cy="44" r="6" fill="#c62828"/>
<text x="210" y="112" text-anchor="middle" fill="#8a6d3b" font-size="8">POLE</text>
<!-- lead car just past pole -->
<rect x="224" y="58" width="44" height="18" rx="5" fill="#3498db"/><circle cx="234" cy="78" r="4" fill="#000"/><circle cx="258" cy="78" r="4" fill="#000"/>
<text x="246" y="71" text-anchor="middle" fill="#fff" font-size="8" font-weight="700">সামনের</text>
<!-- your car far behind -->
<rect x="44" y="58" width="44" height="18" rx="5" fill="#2ecc71"/><circle cx="54" cy="78" r="4" fill="#000"/><circle cx="78" cy="78" r="4" fill="#000"/>
<text x="66" y="71" text-anchor="middle" fill="#063" font-size="8" font-weight="900">তুমি</text>
<text x="330" y="68" fill="#f1c40f" font-size="9" font-weight="700">⏱ "one-thousand-one…"</text>
<!-- FRAME 2 -->
<text x="14" y="132" fill="#888" font-size="9" font-weight="700">মুহূর্ত ২ — ঠিক ৩ সেকেন্ড পরে তুমি পোলে পৌঁছালে = নিরাপদ দূরত্ব</text>
<rect x="14" y="138" width="432" height="44" fill="#2a2a2a" rx="4"/>
<line x1="14" y1="160" x2="446" y2="160" stroke="#f1c40f" stroke-width="2" stroke-dasharray="14,10" opacity=".6"/>
<rect x="208" y="132" width="5" height="56" fill="#8a6d3b"/><circle cx="210" cy="130" r="6" fill="#c62828"/>
<!-- lead car far right -->
<rect x="380" y="144" width="44" height="18" rx="5" fill="#3498db"/><circle cx="390" cy="164" r="4" fill="#000"/><circle cx="414" cy="164" r="4" fill="#000"/>
<!-- your car at pole -->
<rect x="160" y="144" width="44" height="18" rx="5" fill="#2ecc71"/><circle cx="170" cy="164" r="4" fill="#000"/><circle cx="194" cy="164" r="4" fill="#000"/>
<text x="182" y="157" text-anchor="middle" fill="#063" font-size="8" font-weight="900">তুমি</text>
<text x="240" y="200" fill="#2ecc71" font-size="9" font-weight="700">✅ "…one-thousand-three" — এখন পোলে = ৩ সেকেন্ড দূরত্ব</text>
<text x="14" y="218" fill="#e74c3c" font-size="9" font-weight="700">❌ ৩ সেকেন্ডের আগে পোলে পৌঁছালে = খুব কাছে! ধীরে করো।</text>
</svg>
<div class="rt-caption">সামনের গাড়ি একটা fixed point পার হলে গোনো — তুমি সেই point-এ ৩ সেকেন্ডের আগে পৌঁছালে দূরত্ব বাড়াও</div>
</div>

<div class="diagram-box"><div class="dia-title">📏 CONDITION অনুযায়ী দূরত্ব</div>
  ☀️ Dry/clear: ৩ সেকেন্ড | 🌧️ Rain/night: ৪ | ❄️ Snow/ice: ৬+</div>

<div class="rt-image">
<svg viewBox="0 0 340 280" width="100%" style="max-width:380px">
<rect x="0" y="0" width="340" height="280" fill="#111" rx="8"/>
<text x="170" y="22" text-anchor="middle" fill="#f1c40f" font-size="12" font-weight="900">👁️ BLIND SPOT — Mirror যা দেখে না</text>
<!-- 3-lane road -->
<rect x="30" y="34" width="280" height="236" fill="#2a2a2a" rx="4"/>
<line x1="123" y1="34" x2="123" y2="270" stroke="#eee" stroke-width="2" stroke-dasharray="12,10" opacity=".5"/>
<line x1="217" y1="34" x2="217" y2="270" stroke="#eee" stroke-width="2" stroke-dasharray="12,10" opacity=".5"/>
<!-- mirror vision: rear cone (green) -->
<polygon points="170,150 120,268 220,268" fill="#2ecc71" opacity=".14"/>
<text x="170" y="255" text-anchor="middle" fill="#2ecc71" font-size="8" font-weight="700">rear-view mirror দেখে</text>
<!-- side mirror cones -->
<polygon points="148,140 34,180 34,236" fill="#2ecc71" opacity=".14"/>
<polygon points="192,140 306,180 306,236" fill="#2ecc71" opacity=".14"/>
<!-- blind spots (red) -->
<polygon points="146,150 34,140 34,178 148,168" fill="#e74c3c" opacity=".3"/>
<polygon points="194,150 306,140 306,178 192,168" fill="#e74c3c" opacity=".3"/>
<text x="70" y="158" fill="#ff8a80" font-size="9" font-weight="900" transform="rotate(-4 70 158)">BLIND SPOT</text>
<text x="222" y="158" fill="#ff8a80" font-size="9" font-weight="900" transform="rotate(4 222 158)">BLIND SPOT</text>
<!-- your car center lane -->
<rect x="150" y="110" width="40" height="72" rx="9" fill="#2ecc71"/>
<rect x="156" y="122" width="28" height="14" rx="3" fill="#0a3"/>
<rect x="156" y="158" width="28" height="12" rx="3" fill="#0a3"/>
<circle cx="147" cy="132" r="3" fill="#ccc"/><circle cx="193" cy="132" r="3" fill="#ccc"/>
<text x="170" y="100" text-anchor="middle" fill="#2ecc71" font-size="9" font-weight="900">তোমার গাড়ি</text>
<!-- hidden cars in blind spots -->
<rect x="58" y="138" width="34" height="58" rx="8" fill="#e74c3c" opacity=".85"/>
<text x="75" y="212" text-anchor="middle" fill="#ff8a80" font-size="8" font-weight="700">লুকানো গাড়ি!</text>
<rect x="248" y="138" width="34" height="58" rx="8" fill="#e74c3c" opacity=".85"/>
<text x="265" y="212" text-anchor="middle" fill="#ff8a80" font-size="8" font-weight="700">লুকানো গাড়ি!</text>
</svg>
<div class="rt-caption">🟢 সবুজ = mirror-এ দেখা যায় | 🔴 লাল = blind spot — শুধু কাঁধ ঘুরিয়ে (shoulder check) দেখা যায়</div>
</div>

<div class="code-block">Lane change করার সঠিক ক্রম:
  1️⃣ Signal দাও
  2️⃣ Mirror দেখো (rear-view + side)
  3️⃣ Shoulder check (কাঁধ ঘুরিয়ে)
  4️⃣ নিরাপদ হলে → move
  ❌ Mirror alone কখনোই যথেষ্ট নয়</div>

<div class="scenario-box">
<div class="scn-label">🎭 COMPLEX SCENARIO — Highway Merge</div>
<div class="scn-question">❓ তুমি expressway-এ ঢুকছ। On-ramp-এ তুমি ৩৫ mph-এ চালাচ্ছ। Highway traffic ৭০ mph। কী ভুল করছ?</div>
<div class="scn-answer">✅ তুমি ধীরে চালাচ্ছ — বিপজ্জনক! On-ramp-এ তোমার highway speed (৬৫ mph) এ অ্যাক্সেলারেট করা উচিত।</div>
<div class="scn-explain">Merge করার সময় ধীরে চালালে — highway traffic-কে suddenly brake করতে হয়। সঠিক: on-ramp-এ accelerate করে highway speed-এ match করো, তারপর smoothly merge।</div>
</div>

<div class="code-block">EXAM PATTERN QUESTIONS — Safe Driving:

❓ Dry weather-এ minimum following distance?
✅ ৩ সেকেন্ড।

❓ বৃষ্টিতে following distance কত?
✅ ৪ সেকেন্ড।

❓ বরফে/snow-এ following distance?
✅ ৬+ সেকেন্ড।

❓ Blind spot চেক করার সঠিক উপায়?
✅ Mirror দেখো, তারপর shoulder check 
   (কাঁধ ঘুরিয়ে দেখো)। Mirror alone যথেষ্ট নয়।

❓ Passing করার আগে কী করবে?
✅ রাস্তা পরিষ্কার দেখো, mirror + shoulder check, 
   signal দাও, পাস করো, নিরাপদে ফিরে যাও।

❓ কোথায় passing নিষেধ?
✅ Solid line এলাকায়, hilltop, curve,
   intersection কাছে।

❓ ডান দিক দিয়ে পাস কখন আইনি?
✅ সামনের গাড়ি left turn-এর জন্য signal/অপেক্ষা
   করলে, বা multi-lane/one-way রাস্তায়।

❓ হাইওয়েতে merge করার সঠিক গতি?
✅ Highway speed — ধীরে ঢুকো না।

❓ Night driving-এ oncoming গাড়ি দেখলে 
   beam কী করবে?
✅ High beam থেকে low beam-এ যাও।

❓ ABS brake-এ কীভাবে brake করবে?
✅ চাপ ধরে রাখো — pump করো না।

❓ Steering wheel hand position?
✅ 9-and-3।</div>

<div class="scenario-box">
<div class="scn-label">🎭 REAL ROAD SCENARIO — পেছনে Tailgater</div>
<div class="scn-question">❓ M-59-এ তুমি limit-এ চালাচ্ছ। পেছনের pickup truck তোমার bumper-এর প্রায় গায়ে লেগে আছে। বিরক্ত লাগছে। Brake চেপে "শিক্ষা" দেবে?</div>
<div class="scn-answer">✅ কখনো না! Brake-check করা বিপজ্জনক ও বেআইনি। বরং সামনের গাড়ির সাথে দূরত্ব বাড়াও (৪+ সেকেন্ড) এবং সুযোগমতো ডান লেনে সরে তাকে যেতে দাও।</div>
<div class="scn-explain">Tailgater তোমার সমস্যা নয় — যতক্ষণ না সে তোমাকে ধাক্কা দেয়। সামনে বেশি জায়গা রাখলে তোমাকে কখনো হঠাৎ brake করতে হবে না, ফলে সে-ও ধাক্কা দেবে না। Ego রাস্তায় আনবে না — সরে যাও, ভুলে যাও।</div>
</div>

<div class="scenario-box">
<div class="scn-label">🎭 REAL ROAD SCENARIO — রাতের গ্রামের রাস্তা</div>
<div class="scn-question">❓ রাত ১১টা, উত্তর Michigan-এর একটা অন্ধকার two-lane রাস্তা। তুমি high beam-এ চালাচ্ছ। সামনে oncoming গাড়ির headlight দেখা গেল, প্রায় ৮০০ ফুট দূরে। কখন low beam করবে?</div>
<div class="scn-answer">✅ এখনই — oncoming গাড়ি ৫০০ ফুটের মধ্যে আসার আগে low beam। আর সামনের কোনো গাড়ির পেছনে থাকলে ২০০-৩০০ ফুট আগে।</div>
<div class="scn-explain">High beam-এ oncoming driver ৩-৪ সেকেন্ডের জন্য প্রায় অন্ধ হয়ে যায় — two-lane রাস্তায় সেটাই head-on crash-এর রেসিপি। আর নিজে glare খেলে? রাস্তার ডান কিনারার সাদা লাইনে চোখ রাখো, আলোর দিকে তাকিও না।</div>
</div>

<div class="code-block">🇬🇧 ENGLISH SUMMARY — Chapter 6: Safe Driving

  SEE system: Search (eyes 20-30 sec ahead,
  mirrors every 5-8 sec) → Evaluate (what could
  happen?) → Execute (act early). Space cushion:
  keep all six zones around your car open, never
  linger beside another vehicle, always know your
  escape route.

  Following distance: 3 seconds dry, 4 in rain
  or at night, 6+ on snow/ice. Count from when
  the lead car passes a fixed point.

  Blind spots: mirrors are never enough — always
  shoulder check before lane changes. Lane change
  order: Signal → Mirrors → Shoulder check → Move.

  Passing: only where dashed lines allow, never
  on hills/curves/near intersections or railroad
  crossings. Passing on the right is legal only
  when the car ahead is turning left or on
  multi-lane/one-way roads. Return only when you
  see the passed vehicle in your mirror.

  Merging: accelerate on the ramp to match
  highway speed — never crawl in. Night: high
  beams down within 500 ft of oncoming traffic,
  200-300 ft behind another car. MICHIGAN LAW:
  wipers on = headlights on (DRLs don't count).
  Hands at 9-and-3; with ABS, brake firmly and
  hold — never pump.</div>

<div class="secret-box">📏 3-second rule (dry), 4 (rain), 6+ (snow)। Blind spot: mirror + shoulder check MUST। Passing: solid line = নিষেধ। Merge: highway speed-এ ঢুকো। Night: high → low beam oncoming দেখলে। ABS: চাপ ধরে রাখো।</div>`
});

// ══ DOOR 7: SHARING THE ROAD ══
doors.push({
  num:7, icon:"🚴", color:"#06b6d4", name:"রাস্তা ভাগাভাগি",
  subtitle:"Sharing the Road", tech:"Pedestrians, Cyclists, Trucks, Motorcycles, Emergency",
  secret:"রাস্তা শুধু তোমার নয়। পেডেস্ট্রিয়ান, cyclist, truck, motorcycle, emergency vehicle — সবার। ট্রাকের blind spot বড় — যদি তুমি ট্রাকের mirror দেখতে না পাও, ট্রাক driver তোমাকে দেখতে পাচ্ছে না। Motorcyclist ছোট কিন্তু একই অধিকার। 3-foot rule: cyclist পাশ দিয়ে যাওয়ার সময় কমপক্ষে ৩ ফুট দূরত্ব।",
  recall:{
    q:"কেন instructor বললেন ট্রাকের mirror না দেখা মানে অদৃশ্য?",
    qen:"Why did the instructor say not seeing the truck mirror means invisible?",
    a:"কারণ ট্রাকের আশেপাশে বড় blind spot থাকে। যদি তুমি ট্রাকের side mirror-এ driver-এর চোখ দেখতে পাও, তবে সে তোমাকে দেখতে পারে। না দেখতে পেলে — তুমি তার blind spot-এ। ট্রাক driver তোমাকে দেখতে পাচ্ছে না। বিপজ্জনক জায়গা।",
    aen:"Because trucks have large blind spots. If you can see the truck driver's eyes in their side mirror, they can see you. If you can't — you're in their blind spot. The truck driver can't see you. Dangerous place to be."
  },
  story:`
<p class="scene-setting">সপ্তম অধ্যায়। তুমি একটা ব্যস্ত রাস্তায়। পাশ দিয়ে যাচ্ছে — pedestrian, bicycle, motorcycle, truck, bus। প্রত্যেকে আলাদা। Instructor বললেন — "প্রতিটার সাথে আলাদা নিয়ম। একই রাস্তায় সবাই আলাদা। তুমি সবাইকে মানতে হবে।" গাড়ির শব্দ, বাতাস, সাইরেন দূরে।</p>
<p class="scene-setting en">The seventh chapter. You're on a busy road. Passing: pedestrian, bicycle, motorcycle, truck, bus. Each different. The instructor said — "Each has different rules. Same road, everyone different. You must respect all." Vehicle sounds, air, distant siren.</p>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>ভুলের গল্প — Left Turn Accident:</strong> Turned left on solid green — hit oncoming motorcycle. Fault: left-turn driver. Fix: solid green = yield.</div></div>


<div class="code-block"># ── STEP 6: Sharing the road — complete guide ──
# How to drive safely around pedestrians, cyclists, and large vehicles.

# SHARING THE ROAD WITH ALL USERS:

sharing = {
    "PEDESTRIANS": {
        "rules": [
            "ALWAYS yield to pedestrians in crosswalks",
            "Stop if someone is waiting at a crosswalk",
            "Extra caution in school zones (25 mph)",
            "Yield to blind persons (cane or guide dog) ALWAYS",
            "Check for pedestrians before turning",
            "Even jaywalkers — DON'T hit them",
        ],
        "fine": "Failure to yield to pedestrian: $100-500 + points",
    },
    "BICYCLISTS": {
        "rules": [
            "Cyclists have SAME rights as cars (same road, same rules)",
            "Maintain at least 3 FEET clearance when passing",
            "Pass on the LEFT (move to left lane if needed)",
            "Check blind spots — cyclists are hard to see",
            "Cyclists may change lanes to avoid debris",
            "Watch for opening car doors (door zone)",
            "NEVER honk at a cyclist (startles them, causes crashes)",
        ],
        "fine": "Passing too close to cyclist: citation + points",
    },
    "MOTORCYCLES": {
        "rules": [
            "Motorcycles are HARDER to see — check blind spots twice",
            "Allow MORE following distance (they can stop faster than you)",
            "Motorcyclists may shift position within lane (avoiding debris)",
            "NEVER share a lane with a motorcycle (one vehicle per lane)",
            "Their turn signals don't auto-cancel — they may forget to turn it off",
            "Half of motorcycle-car crashes involve cars turning left",
        ],
        "fine": "Causing motorcycle crash: severe penalties",
    },
    "LARGE TRUCKS / BUSES": {
        "rules": [
            "Trucks have HUGE blind spots (NO ZONES): front, both sides, rear",
            "If you can't see the truck's mirrors, the driver can't see you",
            "NEVER tailgate a truck (you're invisible behind it)",
            "Pass on the LEFT (driver's side, smaller blind spot)",
            "Give trucks EXTRA space for wide turns (they swing right to turn left)",
            "Trucks take 40% LONGER to stop than cars",
            "Buses make frequent stops — be patient",
        ],
        "rule": "Don't linger in a truck's blind spot — pass quickly or fall back",
    },
    "EMERGENCY VEHICLES": {
        "rules": [
            "Pull to the RIGHT and stop for sirens/lights",
            "Clear the intersection if you're in it",
            "Stay stopped until the vehicle passes",
            "Keep 500 FEET behind any emergency vehicle",
            "Slow Down / Move Over law: change lanes for stopped emergency vehicles",
            "If you can't move over: slow to 10+ mph below speed limit",
        ],
    },
    "CONSTRUCTION WORKERS": {
        "rules": [
            "Reduce speed in construction zones (fines DOUBLE)",
            "Follow flagger instructions (they have authority over signs/signals)",
            "Change lanes early to give workers space",
            "Keep distance from construction vehicles entering road",
            "Hitting a worker: up to $7,500 fine + 15 years in prison",
        ],
    },
}

for user, info in sharing.items():
    print(f"\n{'='*50}")
    print(f"  SHARING THE ROAD: {user}")
    print(f"{'='*50}")
    for rule in info["rules"]:
        print(f"  → {rule}")
    if "fine" in info:
        print(f"  💰 {info['fine']}")</div>

<div class="sign-gallery">
<div class="sign-item"><svg viewBox="0 0 80 60" width="64"><rect x="10" y="15" width="60" height="3" fill="#f1c40f"/><circle cx="55" cy="16" r="5" fill="#e8a838"/><text x="20" y="12" font-size="8">🖐️</text><line x1="25" y1="16" x2="55" y2="16" stroke="#e8a838" stroke-width="3"/><text x="40" y="40" text-anchor="middle" fill="#999" font-size="10">LEFT TURN</text></svg><div class="sign-label">⬅️ <strong>LEFT</strong><br>বাম হাত সোজা</div></div>
<div class="sign-item"><svg viewBox="0 0 80 60" width="64"><rect x="10" y="15" width="60" height="3" fill="#f1c40f"/><circle cx="55" cy="16" r="5" fill="#e8a838"/><rect x="48" y="3" width="14" height="3" fill="#e8a838"/><text x="55" y="2" text-anchor="middle" font-size="10">⬆️</text><line x1="55" y1="16" x2="55" y2="2" stroke="#e8a838" stroke-width="3"/><text x="40" y="40" text-anchor="middle" fill="#999" font-size="10">RIGHT TURN</text></svg><div class="sign-label">⬆️ <strong>RIGHT</strong><br>বাম হাত উপরে</div></div>
<div class="sign-item"><svg viewBox="0 0 80 60" width="64"><rect x="10" y="15" width="60" height="3" fill="#f1c40f"/><circle cx="55" cy="16" r="5" fill="#e8a838"/><rect x="48" y="28" width="14" height="3" fill="#e8a838"/><line x1="55" y1="16" x2="55" y2="30" stroke="#e8a838" stroke-width="3"/><text x="40" y="50" text-anchor="middle" fill="#999" font-size="10">STOP/SLOW</text></svg><div class="sign-label">⬇️ <strong>STOP</strong><br>বাম হাত নিচে</div></div>
</div>

<div class="code-block">🚴 BICYCLE HAND SIGNALS (cyclist ও examiner দেখে)
# — — — — — — — — — — — — — — — — — — — — — —

  ✦ LEFT TURN: বাম হাত সোজা বাম দিকে
  ✦ RIGHT TURN: বাম হাত উপরে (L আকার)
     → অথবা ডান হাত সোজা ডান দিকে
  ✦ STOP/SLOW: বাম হাত নিচে (উল্টো L)

  💡 তুমি cyclist হলে — এই signal দাও
  💡 তুমি driver হলে — cyclist এর signal চিনো</div>

# — — — — — — — — — — — — — — — — — — — — — —
🏍️ MOTORCYCLISTS
# — — — — — — — — — — — — — — — — — — — — — —

  ✦ Motorcycle ছোট কিন্তু একই অধিকার
  ✦ Motorcycle blind spot-এ সহজে লুকায়
  ✦ বিশেষ সতর্ক থাকো intersection-এ
  ✦ Motorcycle lane position পরিবর্তন করতে পারে
  ✦ বৃষ্টিতে/বরফে motorcycle আরও বেশি vulnerable
  ✦ Headlight on motorcycle-এ সবসময়

# — — — — — — — — — — — — — — — — — — — — — —
🚛 LARGE TRUCKS / BUSES
# — — — — — — — — — — — — — — — — — — — — — —

  ⚠️ NO ZONE (Truck Blind Spot):
  ❌ ট্রাকের ঠিক পেছনে (বড় blind spot)
  ❌ ট্রাকের ডান পাশে (সবচেয়ে বড়!)
  ❌ ট্রাকের বাম পাশে
  ❌ ট্রাকের সামনে খুব কাছে
  ✅ যদি mirror-এ driver দেখতে পাও → সে তোমাকে দেখে
  ❌ Mirror না দেখা → তুমি অদৃশ্য!

  ✦ Truck wide turn করে — জায়গা দাও
  ✦ Truck ব্রেক distance বেশি — cut করো না
  ✦ Truck right turn-এ ডানে সরে যেতে পারে

# — — — — — — — — — — — — — — — — — — — — — —
🚑 EMERGENCY VEHICLES
# — — — — — — — — — — — — — — — — — — — — — —

  ✦ Siren/light দেখলে — ডানে সরে যাও
  ✦ সম্পূর্ণ থামো
  ✦ Intersection পার হও, তারপর ডানে সরে যাও
  ✦ জরুরি গাড়ি পার হলে আবার চলতে পারো

# — — — — — — — — — — — — — — — — — — — — — —
🚜 SLOW-MOVING VEHICLES (Tractor etc.)
# — — — — — — — — — — — — — — — — — — — — — —

  ✦ Orange triangle emblem = slow vehicle
  ✦ Patience রাখো
  ✦ নিরাপদে পাস করো

# — — — — — — — — — — — — — — — — — — — — — —
🐴 HORSE-DRAWN BUGGY (Amish অঞ্চলে)
# — — — — — — — — — — — — — — — — — — — — — —

  Michigan-এর গ্রামীণ এলাকায় (বিশেষত central/
  west) Amish buggy রাস্তায় স্বাভাবিক দৃশ্য:
  ✦ Orange triangle পেছনে — slow vehicle
  ✦ ঘোড়া ভয় পায়! — হর্ন দিও না, ধীরে,
    অনেক জায়গা রেখে পাস করো
  ✦ রাতে বিশেষ সতর্ক — আলো কম থাকে
  ✦ Buggy-র পেছনে পাহাড়/বাঁকে আটকে গেলে
    ধৈর্য — এক মিনিটের দেরি মাত্র

# — — — — — — — — — — — — — — — — — — — — — —
🛵 MOPED / SCOOTER
# — — — — — — — — — — — — — — — — — — — — — —

  ✦ ধীর কিন্তু রাস্তার বৈধ ব্যবহারকারী
  ✦ ডান কিনারা ধরে চলে — পাস করার সময়
    পুরো লেন বদলাও, গা ঘেঁষে নয়
  ✦ হঠাৎ দুলতে পারে (গর্ত/বাতাস) — জায়গা দাও

# — — — — — — — — — — — — — — — — — — — — — —
🚸 SCHOOL CROSSING GUARD
# — — — — — — — — — — — — — — — — — — — — — —

  ✦ হাতে STOP paddle — এটাই আইন
  ✦ Guard রাস্তায় থাকা পর্যন্ত থেমে থাকো —
    বাচ্চারা পার হয়ে গেলেও
  ✦ Flagger-এর মতোই: মানুষ &gt; সাইন/সিগন্যাল</div>

<div class="sign-gallery">
<div class="sign-item"><svg viewBox="0 0 100 100" width="60" height="60"><circle cx="50" cy="50" r="46" fill="#fdd835" stroke="#000" stroke-width="3"/><line x1="14" y1="14" x2="86" y2="86" stroke="#000" stroke-width="3"/><line x1="86" y1="14" x2="14" y2="86" stroke="#000" stroke-width="3"/><text x="50" y="44" text-anchor="middle" font-size="10" font-weight="900" fill="#000">RR</text><text x="50" y="60" text-anchor="middle" font-size="10" font-weight="900" fill="#000">RR</text></svg><div class="sign-label">🟡 <strong>RAILROAD</strong><br>রেল ক্রসিং আগে</div></div>
</div>

<div class="code-block">🚂 RAILROAD CROSSINGS (রেল ক্রসিং)
# — — — — — — — — — — — — — — — — — — — — — —

  Round yellow sign (X shape with RR) = রেল ক্রসিং আসছে

  নিয়ম:
  ✦ Approach-এ গতি কমাও
  ✦ বাম-ডান দেখো (track পরিষ্কার?)
  ✦ Gate নামলে / লাল আলো জ্বললে — থামো
  ✦ Bell শুনলে — থামো
  ✦ Track-এ গাড়ি থামিও না (intersection-এ নয়!)
  ✦ ট্রেন দেখা গেলে — অপেক্ষা করো
  ✦ Multiple track থাকলে — একটা ট্রেন যাওয়ার 
    পরেও দেখো আরেকটা আসছে কিনা

  ⚠️ গেট নেই এমন ক্রসিং — বিশেষ সতর্ক

# — — — — — — — — — — — — — — — — — — — — — —
🚨 MOVE OVER LAW (Michigan)
# — — — — — — — — — — — — — — — — — — — — — —

  ✦ Stopped emergency vehicle (police/fire/ambulance) 
    দেখলে:
    1. বাম/ডান lane change করো (খালি লেনে যাও)
    2. Lane change সম্ভব না হলে — ধীরে চালাও 
       (safe speed-এর নিচে)
  ✦ Tow truck এবং utility vehicle-ও অন্তর্ভুক্ত
  ✦ অমান্য করলে: fine + points</div>

<div class="rt-image">
<svg viewBox="0 0 460 250" width="100%" style="max-width:490px">
<rect x="0" y="0" width="460" height="250" fill="#111" rx="8"/>
<text x="230" y="20" text-anchor="middle" fill="#f1c40f" font-size="12" font-weight="900">🚨 MOVE OVER LAW — I-75-এ থেমে থাকা police (top view)</text>
<!-- 2-lane freeway + shoulder -->
<rect x="0" y="40" width="460" height="56" fill="#2a2a2a"/>
<rect x="0" y="96" width="460" height="56" fill="#2a2a2a"/>
<rect x="0" y="152" width="460" height="8" fill="#fff" opacity=".7"/>
<rect x="0" y="160" width="460" height="52" fill="#222"/>
<line x1="0" y1="96" x2="460" y2="96" stroke="#eee" stroke-width="2" stroke-dasharray="14,11" opacity=".45"/>
<text x="40" y="56" fill="#666" font-size="10">বাম লেন</text>
<text x="40" y="112" fill="#666" font-size="10">ডান লেন</text>
<text x="40" y="176" fill="#888" font-size="10">SHOULDER</text>
<!-- stopped police car on shoulder with flashing lights -->
<g transform="translate(310,168)">
<rect x="0" y="0" width="62" height="28" rx="7" fill="#1a2c4e"/>
<rect x="10" y="4" width="42" height="12" rx="3" fill="#0d1830"/>
<rect x="18" y="-7" width="12" height="7" rx="2" fill="#e74c3c"><animate attributeName="opacity" values="1;.2;1" dur=".8s" repeatCount="indefinite"/></rect>
<rect x="32" y="-7" width="12" height="7" rx="2" fill="#3498db"><animate attributeName="opacity" values=".2;1;.2" dur=".8s" repeatCount="indefinite"/></rect>
<circle cx="14" cy="30" r="6" fill="#000"/><circle cx="48" cy="30" r="6" fill="#000"/>
<text x="31" y="14" text-anchor="middle" fill="#fff" font-size="10" font-weight="900">POLICE</text>
</g>
<!-- pulled-over car ahead of police -->
<g transform="translate(396,170)">
<rect x="0" y="0" width="48" height="24" rx="7" fill="#7f8c8d"/>
<circle cx="11" cy="26" r="6" fill="#000"/><circle cx="37" cy="26" r="6" fill="#000"/>
</g>
<!-- officer figure near cars -->
<text x="388" y="188" font-size="12">👮</text>
<!-- YOUR CAR path: moving from right lane to left lane -->
<path d="M 30 124 L 120 124 Q 160 124 185 96 Q 210 68 250 68 L 440 68" fill="none" stroke="#2ecc71" stroke-width="3" stroke-dasharray="7,5" marker-end="url(#moA)"/>
<defs><marker id="moA" markerWidth="7" markerHeight="7" refX="5" refY="3.5" orient="auto"><polygon points="0,0 7,3.5 0,7" fill="#2ecc71"/></marker></defs>
<g transform="translate(14,112)">
<rect x="0" y="0" width="48" height="24" rx="7" fill="#2ecc71"/>
<rect x="8" y="4" width="32" height="10" rx="3" fill="#0e4429"/>
<circle cx="11" cy="26" r="6" fill="#000"/><circle cx="37" cy="26" r="6" fill="#000"/>
</g>
<text x="150" y="90" text-anchor="middle" fill="#7bed9f" font-size="8" font-weight="700">Option ১: আগেভাগে signal দিয়ে</text>
<text x="150" y="101" text-anchor="middle" fill="#7bed9f" font-size="8" font-weight="700">এক লেন সরে যাও ✅</text>
<!-- Option 2: can't change lane, slow down -->
<g transform="translate(180,112)" opacity=".7">
<rect x="0" y="0" width="48" height="24" rx="7" fill="#f39c12"/>
</g>
<text x="204" y="230" text-anchor="middle" fill="#f8c471" font-size="8" font-weight="700">Option ২: বাম লেন ব্যস্ত? — গতি অনেক কমাও,</text>
<text x="204" y="241" text-anchor="middle" fill="#f8c471" font-size="8" font-weight="700">সতর্কভাবে পার হও ✅</text>
<!-- danger zone marker -->
<rect x="296" y="154" width="164" height="58" fill="#e74c3c" opacity=".12"/>
<text x="342" y="228" text-anchor="middle" fill="#ff8a80" font-size="7.5" font-weight="700">এই zone-এ full speed-এ পার হওয়া =</text>
<text x="342" y="239" text-anchor="middle" fill="#ff8a80" font-size="7.5" font-weight="700">fine + points, আহত করলে felony</text>
</svg>
<div class="rt-caption">Police, ambulance, fire, tow truck, utility — shoulder-এ থেমে থাকা যে-কেউ। প্রথম চেষ্টা: লেন বদলাও; না পারলে: উল্লেখযোগ্যভাবে ধীরে। দুটোর একটা করতেই হবে</div>
</div>

<div class="rt-image">
<svg viewBox="0 0 420 300" width="100%" style="max-width:460px">
<rect x="0" y="0" width="420" height="300" fill="#111" rx="8"/>
<text x="210" y="22" text-anchor="middle" fill="#f1c40f" font-size="12" font-weight="900">🚛 TRUCK "NO ZONE" — Blind Spot Map (top view)</text>
<!-- road: 3 lanes horizontal -->
<rect x="10" y="40" width="400" height="248" fill="#2a2a2a" rx="4"/>
<line x1="10" y1="122" x2="410" y2="122" stroke="#eee" stroke-width="2" stroke-dasharray="14,10" opacity=".4"/>
<line x1="10" y1="204" x2="410" y2="204" stroke="#eee" stroke-width="2" stroke-dasharray="14,10" opacity=".4"/>
<!-- NO ZONES (red) -->
<!-- front zone (right of truck, truck faces right) -->
<rect x="300" y="132" width="72" height="62" fill="#e74c3c" opacity=".3" rx="4"/>
<text x="336" y="160" text-anchor="middle" fill="#ff8a80" font-size="8" font-weight="900">সামনে</text>
<text x="336" y="172" text-anchor="middle" fill="#ff8a80" font-size="10">~20 ft</text>
<!-- rear zone (left, biggest) -->
<rect x="14" y="132" width="116" height="62" fill="#e74c3c" opacity=".38" rx="4"/>
<text x="72" y="158" text-anchor="middle" fill="#ff8a80" font-size="8" font-weight="900">পেছনে — সবচেয়ে বিপজ্জনক</text>
<text x="72" y="172" text-anchor="middle" fill="#ff8a80" font-size="10">~200 ft, driver তোমাকে দেখেই না</text>
<!-- left-side zone (top lane) -->
<rect x="150" y="48" width="120" height="66" fill="#e74c3c" opacity=".26" rx="4"/>
<text x="210" y="78" text-anchor="middle" fill="#ff8a80" font-size="8" font-weight="900">বাম পাশ</text>
<text x="210" y="92" text-anchor="middle" fill="#ff8a80" font-size="10">১ লেন</text>
<!-- right-side zone (bottom lane, biggest side) -->
<rect x="140" y="212" width="180" height="70" fill="#e74c3c" opacity=".38" rx="4"/>
<text x="230" y="242" text-anchor="middle" fill="#ff8a80" font-size="8" font-weight="900">ডান পাশ — সবচেয়ে বড়!</text>
<text x="230" y="256" text-anchor="middle" fill="#ff8a80" font-size="10">২ লেন পর্যন্ত — এখান দিয়ে পাস করো না</text>
<!-- truck (center lane, facing right) -->
<rect x="140" y="134" width="110" height="58" rx="4" fill="#546e7a"/>
<rect x="250" y="138" width="44" height="50" rx="6" fill="#37474f"/>
<rect x="284" y="146" width="8" height="34" rx="2" fill="#90caf9" opacity=".8"/>
<circle cx="160" cy="196" r="6" fill="#000"/><circle cx="200" cy="196" r="6" fill="#000"/><circle cx="236" cy="196" r="6" fill="#000"/><circle cx="272" cy="196" r="6" fill="#000"/>
<text x="195" y="168" text-anchor="middle" fill="#fff" font-size="10" font-weight="900">🚛 TRUCK</text>
<!-- mirror sight lines (green) -->
<line x1="252" y1="138" x2="150" y2="60" stroke="#2ecc71" stroke-width="1.5" stroke-dasharray="4,3" opacity=".7"/>
<line x1="252" y1="188" x2="130" y2="270" stroke="#2ecc71" stroke-width="1.5" stroke-dasharray="4,3" opacity=".7"/>
<circle cx="252" cy="138" r="3" fill="#2ecc71"/><circle cx="252" cy="188" r="3" fill="#2ecc71"/>
<text x="120" y="54" fill="#2ecc71" font-size="10" font-weight="700">mirror sight line</text>
</svg>
<div class="rt-caption">🔴 লাল = NO ZONE (driver তোমাকে দেখে না) | 🟢 সোনার নিয়ম: mirror-এ driver-এর চোখ দেখতে পেলে সে-ও তোমাকে দেখে — না পেলে দ্রুত পার হও বা পিছিয়ে যাও</div>
</div>

<div class="scenario-box">
<div class="scn-label">🎭 COMPLEX SCENARIO — Truck Right Turn</div>
<div class="scn-question">❓ তুমি একটা ট্রাকের ডান পাশে আছ। ট্রাক ডানে মোড় নেওয়ার জন্য বামে সরে গেল (wide turn)। তুমি কী করবে?</div>
<div class="scn-answer">✅ ধীরে করো বা থামো। ট্রাকের ডান দিক দিয়ে যেও না — squeeze হতে পারে।</div>
<div class="scn-explain">ট্রাক wide turn করার সময় বামে সরে যায়, তারপর ডানে ঘোরে। এই সময় ডান দিকে ট্রাক পাস করলে গাড়ি squeeze হতে পারে। ধৈর্য ধরো।</div>
</div>

<div class="scenario-box">
<div class="scn-label">🎭 COMPLEX SCENARIO — Pedestrian at Unmarked Crosswalk</div>
<div class="scn-question">❓ তুমি একটা intersection-এ ডানে মোড় নিচ্ছ। কোনো painted crosswalk নেই। কিন্তু একজন মানুষ রাস্তা পার হতে শুরু করেছে। তুমি কী করবে?</div>
<div class="scn-answer">✅ থামো। পেডেস্ট্রিয়ান সবসময় অগ্রাধিকার — marked বা unmarked crosswalk-এ।</div>
<div class="scn-explain">Michigan law: intersection-এ painted crosswalk না থাকলেও legal crosswalk বলে গণ্য হয়। পেডেস্ট্রিয়ান প্রথম — সবসময়।</div>
</div>

<div class="code-block">EXAM PATTERN QUESTIONS — Sharing the Road:

❓ পেডেস্ট্রিয়ান ক্রসওয়াকে দাঁড়িয়ে থাকলে?
✅ থামো। পেডেস্ট্রিয়ান সবসময় অগ্রাধিকার।

❓ Cyclist পাশ দিয়ে যাওয়ার সময় কত দূরত্ব?
✅ কমপক্ষে ৩ ফুট।

❓ ট্রাকের blind spot (No Zone) কোথায়?
✅ পেছনে, ডান পাশে, বাম পাশে, সামনে খুব কাছে।

❓ ট্রাক driver তোমাকে দেখতে পায় কীভাবে জানবে?
✅ যদি তুমি ট্রাকের side mirror-এ driver-এর 
   চোখ দেখতে পাও — সে তোমাকে দেখতে পায়।

❓ Motorcycle কেন বিশেষ সতর্কতা দরকার?
✅ ছোট, blind spot-এ সহজে লুকায়, 
   vulnerable।

❓ Emergency vehicle সাইরেন শুনলে কী করবে?
✅ ডানে সরে যাও, থামো।

❓ Truck wide turn করার সময় কী করবে?
✅ জায়গা দাও — ডানে সরে যেতে পারে।

❓ Slow-moving vehicle emblem কী?
✅ Orange triangle — slow vehicle (tractor)।</div>

<div class="scenario-box">
<div class="scn-label">🎭 REAL ROAD SCENARIO — সরু রাস্তায় Cyclist</div>
<div class="scn-question">❓ সরু two-lane রাস্তায় সামনে একজন cyclist। ৩ ফুট দূরত্ব রেখে পাস করতে হলে তোমাকে center line-এর ওপারে যেতে হবে, কিন্তু oncoming গাড়ি আসছে। পেছনে গাড়ি হর্ন দিচ্ছে। কী করবে?</div>
<div class="scn-answer">✅ Cyclist-এর পেছনে ধীরে অপেক্ষা করো। Oncoming পরিষ্কার হলে তবে ৩+ ফুট রেখে পাস করো। হর্নের চাপে ঝুঁকি নিও না।</div>
<div class="scn-explain">কয়েক সেকেন্ডের ধৈর্য বনাম একজন মানুষের জীবন — হিসাবটা সহজ। Cyclist-এর গা ঘেঁষে পাস ("close pass") Michigan-এ ticket-যোগ্য এবং cyclist-এর সবচেয়ে বড় মৃত্যুর কারণগুলোর একটা। পেছনের হর্ন তোমার সিদ্ধান্ত নেবে না — তুমি নেবে।</div>
</div>

<div class="scenario-box">
<div class="scn-label">🎭 REAL ROAD SCENARIO — I-75-এ থেমে থাকা Police</div>
<div class="scn-question">❓ I-75-এ ৭০ mph-এ চলছ। সামনে ডান shoulder-এ police cruiser লাইট জ্বালিয়ে দাঁড়িয়ে — একটা গাড়ি থামিয়েছে। তোমার বাম লেন ব্যস্ত, সহজে সরা যাচ্ছে না। কী করবে?</div>
<div class="scn-answer">✅ Move Over Law: সম্ভব হলে এক লেন সরে যাও। সরা সম্ভব না হলে — উল্লেখযোগ্যভাবে গতি কমাও (limit-এর নিচে) এবং সতর্কভাবে পার হও।</div>
<div class="scn-explain">প্রতি বছর আমেরিকায় roadside-এ দাঁড়ানো officer/tow driver গাড়ির ধাক্কায় মারা যায়। Michigan-এ Move Over অমান্য = fine + points, কাউকে আহত করলে felony। এটা police, fire, ambulance, tow truck, utility — সবার জন্য প্রযোজ্য।</div>
</div>

<div class="code-block">🇬🇧 ENGLISH SUMMARY — Chapter 7: Sharing the Road

  Pedestrians: always first — marked or unmarked
  crosswalks; extra care for blind pedestrians
  (cane/guide dog) and school zones.

  Bicyclists: same rights as cars. Pass with at
  least 3 FEET of clearance — wait behind them if
  oncoming traffic prevents it. Know cyclist hand
  signals: left arm straight = left turn; left arm
  up = right turn; left arm down = stop.

  Trucks: the NO-ZONE — huge blind spots behind
  (biggest), on the right side (widest, 2 lanes),
  left side, and close in front. Golden rule: if
  you can't see the driver's mirror, they can't
  see you. Trucks make wide right turns — never
  squeeze down their right side. Motorcycles: same
  rights, hide easily in blind spots, especially
  vulnerable at intersections and in rain.

  Railroad crossings: slow, look both ways; stop
  at gates/lights/bells; after one train passes,
  check for a second on multiple tracks; NEVER
  stop on the tracks. MOVE OVER LAW: for stopped
  emergency vehicles, tow trucks, and utility
  vehicles — change lanes away, or slow well down
  if you can't. Horse-drawn buggies (Amish areas):
  no horn, pass slow and wide. Crossing guards
  and flaggers outrank signs and signals.</div>

<div class="secret-box">🚴 Pedestrian সবসময় প্রথম। Cyclist: ৩ ফুট দূরত্ব। Truck: mirror দেখা = visible, না দেখা = blind spot। Motorcycle: blind spot সতর্ক। Emergency: ডানে সরে যাও, থামো।</div>`
});

// ══ DOOR 8: HAZARDS & EMERGENCIES ══
doors.push({
  num:8, icon:"⚠️", color:"#ef4444", name:"বিপদ ও জরুরি অবস্থা",
  subtitle:"Hazards & Emergencies", tech:"Skidding, Winter Driving, Accidents, Breakdowns",
  secret:"Skid হলে — brake করো না, গ্যাস চাপো না। Steering ঘুরাও সেই দিকে যেখানে যেতে চাও। মিশিগান winter: বরফ, তুষার, black ice। ধীরে চালাও, দূরত্ব বাড়াও। Accident হলে — থামো, নিরাপদ জায়গায় যাও, police ডাকো, information বিনিময় করো।",
  recall:{
    q:"Skid হলে কেন brake চাপা ঠিক নয়?",
    qen:"Why is braking wrong when skidding?",
    a:"কারণ পুরনো গাড়িতে (ABS নেই) brake চাপলে চাকা lock হয়ে যায়, skid আরও খারাপ হয়। কিন্তু আধুনিক গাড়িতে (ABS আছে) — brake firmly চেপে ধরে রাখো এবং steering ঘুরাও যেদিকে যেতে চাও। ABS নিজেই wheel pump করে। সব গাড়িতে steering ঘুরানোই মূল কাজ।",
    aen:"In older cars (no ABS), braking locks wheels making skid worse. But in modern cars (with ABS) — press brake firmly and hold while steering in the direction you want to go. ABS pumps the wheels automatically. In all cars, steering toward where you want to go is the key action."
  },
  story:`
<p class="scene-setting">অষ্টম অধ্যায়। জানুয়ারির এক সকাল — Lake Michigan থেকে আসা lake-effect snow-এ রাস্তা সাদা। তুমি একটা বরফে ঢাকা রাস্তায়। গাড়ি একটু পিছলে যাচ্ছে। Instructor বললেন — "ভয় পেও না। brake চাপো না। Steering ঘুরাও যেদিকে যেতে চাও। Michigan-এ শীত পাঁচ মাস — এটা শিখতেই হবে।" বরফের কড়া ঠান্ডা, গাড়ির চাকার শব্দ, হালকা wind।</p>
<p class="scene-setting en">The eighth chapter. A January morning — roads white with lake-effect snow off Lake Michigan. You're on an icy road. The car slips slightly. The instructor said — "Don't panic. Don't hit the brake. Steer where you want to go. Winter lasts five months in Michigan — you must learn this." Bitter cold, tire sounds, light wind.</p>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>ভুলের গল্প — Tailgating on I-75:</strong> Tailgated at 70mph — car ahead braked. 3-car pileup. Fix: 3-second rule at highway speeds.</div></div>


<div class="code-block">HAZARDS & EMERGENCIES — COMPLETE
# — — — — — — — — — — — — — — — — — — — — — —

❄️ WINTER DRIVING (Michigan-এ সবচেয়ে গুরুত্বপূর্ণ)
# — — — — — — — — — — — — — — — — — — — — — —

  ✦ Speed limit এর অনেক কম চালাও
  ✦ 6+ second following distance
  ✦ Smooth steering, smooth brake, smooth gas
  ✦ Black ice: অদৃশ্য বরফ — bridge-এ, 
    overpass-এ, shadow-তে
  ✦ Bridge আগে সতর্ক — আগেই বরফ
  ✦ Snow tire / chain ব্যবহার করো

😴 FATIGUE / DROWSY DRIVING (ক্লান্তি নিয়ে চালানো)
# — — — — — — — — — — — — — — — — — — — — — —

  লক্ষণ: ঘন ঘন হাই তোলা, চোখ ভারী লাগা, লেন থেকে
  drift করা, শেষ কয়েক মাইল মনে না থাকা

  ✦ Drowsy driving reaction time কমায় — অনেকটা
    drunk driving-এর মতোই বিপজ্জনক
  ✦ Long/night drive-এ প্রতি ২ ঘণ্টায় বিরতি নাও
  ❌ Coffee/radio/জানালা খোলা — সাময়িক, আসল সমাধান
    নয়
  ✅ আসল সমাধান: থামো এবং ঘুমাও, বা কাউকে driving
    দাও

🚗 SKIDDING (পিছলে যাওয়া)
# — — — — — — — — — — — — — — — — — — — — — —

  ❓ তোমার গাড়িতে ABS আছে?

  ✅ ABS আছে (২০০৪ পরবর্তী সব গাড়ি):
     ১. Brake firmly চাপো এবং ধরে রাখো (pump নয়!)
     ২. Steering ঘুরাও যেদিকে যেতে চাও
     ৩. ABS vibration/pulsing অনুভব করবে — স্বাভাবিক

  ⚠️ ABS নেই (পুরনো গাড়ি):
     ১. শান্ত থাকো
     ২. Brake চাপো না (চাকা lock হবে)
     ৩. Gas চাপো না
     ৪. Steering ঘুরাও যেদিকে যেতে চাও

  → সব আধুনিক গাড়িতে ABS আছে — brake চেপে 
    ধরে রাখো + steer</div>

<div class="rt-image">
<svg viewBox="0 0 440 250" width="100%" style="max-width:470px">
<rect x="0" y="0" width="440" height="250" fill="#111" rx="8"/>
<text x="220" y="22" text-anchor="middle" fill="#f1c40f" font-size="12" font-weight="900">🚗 SKID RECOVERY — Steer Into the Slide</text>
<!-- LEFT panel: wrong -->
<rect x="14" y="34" width="200" height="182" fill="#2a2a2a" rx="6"/>
<text x="114" y="52" text-anchor="middle" fill="#e74c3c" font-size="11" font-weight="900">❌ ভুল</text>
<line x1="64" y1="60" x2="64" y2="210" stroke="#eee" stroke-width="2" stroke-dasharray="10,8" opacity=".3"/>
<line x1="164" y1="60" x2="164" y2="210" stroke="#eee" stroke-width="2" stroke-dasharray="10,8" opacity=".3"/>
<!-- skidding car, rear sliding right -->
<g transform="rotate(-18 114 150)"><rect x="96" y="118" width="36" height="64" rx="8" fill="#e74c3c"/><rect x="102" y="128" width="24" height="13" rx="3" fill="#8e2020"/></g>
<!-- wrong steer arrow: away from slide -->
<path d="M 90 100 Q 70 84 52 92" fill="none" stroke="#e74c3c" stroke-width="3" marker-end="url(#raX)"/>
<defs><marker id="raX" markerWidth="7" markerHeight="7" refX="5" refY="3.5" orient="auto"><polygon points="0,0 7,3.5 0,7" fill="#e74c3c"/></marker></defs>
<text x="114" y="200" text-anchor="middle" fill="#ff8a80" font-size="8" font-weight="700">উল্টো দিকে steer / হার্ড brake</text>
<text x="114" y="211" text-anchor="middle" fill="#ff8a80" font-size="8" font-weight="900">→ গাড়ি SPIN করবে!</text>
<!-- RIGHT panel: correct -->
<rect x="226" y="34" width="200" height="182" fill="#2a2a2a" rx="6"/>
<text x="326" y="52" text-anchor="middle" fill="#2ecc71" font-size="11" font-weight="900">✅ সঠিক</text>
<line x1="276" y1="60" x2="276" y2="210" stroke="#eee" stroke-width="2" stroke-dasharray="10,8" opacity=".3"/>
<line x1="376" y1="60" x2="376" y2="210" stroke="#eee" stroke-width="2" stroke-dasharray="10,8" opacity=".3"/>
<!-- skidding car -->
<g transform="rotate(-18 326 150)"><rect x="308" y="118" width="36" height="64" rx="8" fill="#2ecc71"/><rect x="314" y="128" width="24" height="13" rx="3" fill="#0a6b3d"/></g>
<!-- slide direction (rear going right) -->
<path d="M 352 178 L 386 190" fill="none" stroke="#f1c40f" stroke-width="2.5" stroke-dasharray="5,4" marker-end="url(#raY)"/>
<defs><marker id="raY" markerWidth="7" markerHeight="7" refX="5" refY="3.5" orient="auto"><polygon points="0,0 7,3.5 0,7" fill="#f1c40f"/></marker></defs>
<text x="398" y="182" fill="#f1c40f" font-size="10" font-weight="700" text-anchor="middle">পেছন</text>
<text x="398" y="192" fill="#f1c40f" font-size="10" font-weight="700" text-anchor="middle">পিছলাচ্ছে</text>
<!-- correct steer arrow: toward slide -->
<path d="M 344 96 Q 366 82 386 92" fill="none" stroke="#2ecc71" stroke-width="3" marker-end="url(#raZ)"/>
<defs><marker id="raZ" markerWidth="7" markerHeight="7" refX="5" refY="3.5" orient="auto"><polygon points="0,0 7,3.5 0,7" fill="#2ecc71"/></marker></defs>
<text x="326" y="200" text-anchor="middle" fill="#7bed9f" font-size="8" font-weight="700">পিছলানোর দিকেই steer করো</text>
<text x="326" y="211" text-anchor="middle" fill="#7bed9f" font-size="8" font-weight="900">→ গাড়ি straight হবে</text>
<!-- footer -->
<text x="220" y="236" text-anchor="middle" fill="#aaa" font-size="9">ABS থাকলে: steady brake pressure ধরে রাখো — পাম্প করো না, ABS নিজেই পাম্প করে</text>
</svg>
<div class="rt-caption">সূত্র: "যেদিকে যেতে চাও, সেদিকে steer" = পেছন যেদিকে পিছলাচ্ছে সেদিকেই wheel ঘোরাও — শান্তভাবে, ঝাঁকি ছাড়া</div>
</div>

<div class="code-block"># ── STEP 4: Emergency handling — hazards ──
# What to do when things go wrong on the road.

# EMERGENCY RESPONSE PROCEDURES:

emergencies = {
    "HYDROPLANING (tires lose contact with road on water)": {
        "do": [
            "Ease off gas pedal SLOWLY",
            "Keep steering STRAIGHT",
            "Wait for tires to regain contact",
        ],
        "dont": [
            "BRAKE (causes spin)",
            "Turn the wheel suddenly",
            "Accelerate",
        ],
        "prevent": "Good tires, reduce speed in rain, 4+ second following distance",
    },
    "BRAKE FAILURE": {
        "do": [
            "Pump the brake pedal (may restore pressure)",
            "Apply parking brake SLOWLY",
            "Downshift to lower gears",
            "Look for escape route (shoulder, uphill)",
        ],
        "dont": ["Panic-steer into traffic"],
        "prevent": "Regular brake maintenance, check brake fluid",
    },
    "TIRE BLOWOUT": {
        "do": [
            "Hold steering wheel FIRMLY",
            "Keep foot on gas momentarily (stabilize)",
            "Ease off gas gradually",
            "Signal and move to shoulder slowly",
        ],
        "dont": ["Brake hard (causes spin)", "Release gas instantly"],
        "prevent": "Check tire pressure monthly, inspect for wear/damage",
    },
    "PAVEMENT DROP-OFF (wheel off road edge)": {
        "do": [
            "DO NOT jerk the wheel back (causes rollover!)",
            "Ease off gas, slow down gradually",
            "Light braking",
            "When slow: turn wheel gradually back onto road at shallow angle",
        ],
        "dont": ["Jerk wheel suddenly (most common cause of fatal rollovers)"],
        "prevent": "Stay alert, don't drift onto shoulder",
    },
    "SKIDDING (loss of traction)": {
        "do": [
            "Turn steering wheel IN the direction of the skid",
            "If rear skids right → steer right",
            "If rear skids left → steer left",
            "Ease off gas/brake",
        ],
        "dont": ["Brake hard", "Steer opposite the skid"],
        "prevent": "Slow down on wet/icy roads, gentle inputs",
    },
    "ACCELERATOR STUCK": {
        "do": [
            "Shift to NEUTRAL",
            "Brake gently",
            "Steer to safe area",
            "Turn off engine when stopped",
        ],
        "dont": ["Turn off engine while moving (loss of power steering/brakes)"],
        "prevent": "Check floor mats (can jam pedal)",
    },
}

for emergency, actions in emergencies.items():
    print(f"\n{emergency}")
    print(f"  ✅ DO:")
    for item in actions["do"]:
        print(f"     → {item}")
    print(f"  ❌ DON'T:")
    for item in actions["dont"]:
        print(f"     ✗ {item}")
    print(f"  🛡️ PREVENT: {actions['prevent']}")

# PYTHON (hydroplaning speed calculator):
def hydroplaning_speed(tire_pressure_psi):
    """Approximate speed at which hydroplaning begins."""
    # Formula: speed = 10.35 * sqrt(tire_pressure)
    speed = 10.35 * (tire_pressure_psi ** 0.5)
    print(f"  Tire pressure: {tire_pressure_psi} psi")
    print(f"  Hydroplaning starts at: {speed:.0f} mph")
    print(f"  ⚠️ Drive WELL below this in heavy rain!")
    return speed

print("\nHYDROPLANING SPEED CALCULATOR:")
hydroplaning_speed(32)  # typical sedan
hydroplaning_speed(35)  # properly inflated
hydroplaning_speed(28)  # underinflated (hydroplanes EARLIER!)</div>
  ৩. Wheel শক্ত ধরে সোজা চলো shoulder-এই
  ৪. গতি কমলে (২৫-৩০) — mirror দেখে ধীরে,
     ছোট angle-এ রাস্তায় ফিরে এসো
  ⚠️ দ্রুত গতিতে হঠাৎ ফেরার চেষ্টা =
     rollover বা oncoming-এ ছিটকে যাওয়া

🚗 STUCK ACCELERATOR (গ্যাস পেডাল আটকে গেছে)
# — — — — — — — — — — — — — — — — — — — — — —

  ১. দুই পায়ের আঙুলে পেডাল তোলার চেষ্টা — না হলে:
  ২. গিয়ার NEUTRAL-এ দাও ← মূল সমাধান
  ৩. Engine গর্জাবে — সমস্যা নেই, চাকায় শক্তি যাচ্ছে না
  ৪. Brake করে রাস্তার বাইরে থামো, engine বন্ধ
  ❌ চলন্ত অবস্থায় ignition বন্ধ কোরো না —
     steering lock হয়ে যেতে পারে

🌊 FLOODED ROAD (পানিতে ডোবা রাস্তা)
# — — — — — — — — — — — — — — — — — — — — — —

  "Turn Around, Don't Drown"
  ✦ ৬ ইঞ্চি চলন্ত পানি = গাড়ির নিয়ন্ত্রণ হারায়
  ✦ ১২ ইঞ্চি = বেশিরভাগ গাড়ি ভেসে যায়
  ✦ গভীরতা দেখে বোঝা যায় না — ঢুকোই না
  ✦ ঘুরে অন্য পথ নাও — সবসময়

☠️ CARBON MONOXIDE (শীতের নীরব ঘাতক)
# — — — — — — — — — — — — — — — — — — — — — —

  ✦ তুষারে আটকে গেলে গাড়িতে বসে heater চালাবে?
    আগে exhaust pipe (পেছনের ধোঁয়ার নল)
    তুষারমুক্ত করো! — নল বন্ধ = CO গাড়ির ভেতরে
  ✦ জানালা সামান্য খোলা রাখো
  ✦ CO-র গন্ধ নেই — মাথাব্যথা/ঘুমঘুম লাগলেই
    engine বন্ধ, বাতাস
  ✦ বন্ধ garage-এ কখনো engine চালু রেখো না

🦌 DEER ON ROAD (Michigan-এ বাস্তব ঝুঁকি!)
# — — — — — — — — — — — — — — — — — — — — — —

  📊 বাস্তবতা: Michigan-এ প্রতি বছর ৫০,০০০+
     deer-vehicle crash হয় — দেশের সর্বোচ্চগুলোর
     একটা
  🕐 Peak: অক্টোবর-নভেম্বর (mating season),
     ভোর ও সন্ধ্যা (dawn/dusk)
  🦌 একটা হরিণ দেখা মানে আরও আছে — হরিণ দলে চলে

  কী করবে:
  ১. Brake firmly করো (সম্ভব হলে)
  ২. ❌ Deer এড়াতে swerve করো না
     (গাছ/oncoming-এ ধাক্কা হরিণের চেয়ে খারাপ)
  ৩. সোজা থাকো, ব্রেক করো
  ৪. Deer crossing সাইন এলাকায় গতি কমাও,
     রাতে high beam (oncoming না থাকলে)

💥 ACCIDENT — কী করবে
# — — — — — — — — — — — — — — — — — — — — — —

  ১. থামো — জায়গা ছেড়ে না
  ২. নিরাপদ হলে গাড়ি সরাও (roadside)
  ৩. Hazard light জ্বালাও
  ৪. Injury হলে 911 ডাকো
  ৫. Information বিনিময়:
     → Name, address, license number
     → Insurance info
     → License plate
  ৬. Police report (নির্দিষ্ট injury/damage হলে)
  ৭. যদি কেউ আহত — থামো সাহায্য করো</div>

<div class="rt-image">
<svg viewBox="0 0 460 230" width="100%" style="max-width:490px">
<rect x="0" y="0" width="460" height="230" fill="#0d1420" rx="8"/>
<text x="230" y="20" text-anchor="middle" fill="#f1c40f" font-size="12" font-weight="900">❄️ BLACK ICE — Bridge কেন আগে জমে (side view)</text>
<!-- cold air arrows above -->
<text x="90" y="44" text-anchor="middle" fill="#74b9ff" font-size="8">❄ ঠান্ডা বাতাস ❄</text>
<text x="340" y="44" text-anchor="middle" fill="#74b9ff" font-size="8">❄ ঠান্ডা বাতাস ❄</text>
<!-- road approach (left, on ground) -->
<rect x="0" y="110" width="150" height="12" fill="#3a3a3a"/>
<!-- ground under road -->
<rect x="0" y="122" width="150" height="108" fill="#4a3826"/>
<text x="75" y="170" text-anchor="middle" fill="#c9a86a" font-size="8" font-weight="700">মাটি — তাপ ধরে রাখে 🌡️</text>
<text x="75" y="183" text-anchor="middle" fill="#c9a86a" font-size="10">রাস্তা গরম থাকে, শুকনো</text>
<!-- heat arrows up from ground -->
<path d="M 40 150 L 40 128" stroke="#e67e22" stroke-width="2" marker-end="url(#biH)"/>
<path d="M 75 150 L 75 128" stroke="#e67e22" stroke-width="2" marker-end="url(#biH)"/>
<path d="M 110 150 L 110 128" stroke="#e67e22" stroke-width="2" marker-end="url(#biH)"/>
<defs><marker id="biH" markerWidth="6" markerHeight="6" refX="4" refY="3" orient="auto"><polygon points="0,0 6,3 0,6" fill="#e67e22"/></marker></defs>
<!-- bridge deck (middle, over water) with ICE -->
<rect x="150" y="110" width="180" height="12" fill="#3a3a3a"/>
<rect x="150" y="108" width="180" height="5" fill="#a8d8ff" opacity=".85"/>
<text x="240" y="102" text-anchor="middle" fill="#a8d8ff" font-size="8.5" font-weight="900">⚠️ অদৃশ্য বরফের ফিল্ম — দেখতে ভেজা রাস্তার মতো</text>
<!-- bridge supports -->
<rect x="165" y="122" width="10" height="60" fill="#555"/>
<rect x="305" y="122" width="10" height="60" fill="#555"/>
<!-- water below bridge -->
<path d="M 150 185 Q 175 178 200 185 Q 225 192 250 185 Q 275 178 300 185 Q 315 190 330 185 L 330 230 L 150 230 Z" fill="#16324a"/>
<text x="240" y="212" text-anchor="middle" fill="#5dade2" font-size="8" font-weight="700">নিচে পানি/বাতাস — কোনো তাপ নেই</text>
<!-- cold arrows hitting bridge from below too -->
<path d="M 200 160 L 200 128" stroke="#74b9ff" stroke-width="2" marker-end="url(#biC)"/>
<path d="M 280 160 L 280 128" stroke="#74b9ff" stroke-width="2" marker-end="url(#biC)"/>
<defs><marker id="biC" markerWidth="6" markerHeight="6" refX="4" refY="3" orient="auto"><polygon points="0,0 6,3 0,6" fill="#74b9ff"/></marker></defs>
<text x="240" y="146" text-anchor="middle" fill="#74b9ff" font-size="7.5" font-weight="700">দুই দিক থেকেই ঠান্ডা = আগে জমে</text>
<!-- road continues right -->
<rect x="330" y="110" width="130" height="12" fill="#3a3a3a"/>
<rect x="330" y="122" width="130" height="108" fill="#4a3826"/>
<!-- car approaching from left -->
<g transform="translate(30,88)">
<rect x="0" y="0" width="52" height="22" rx="7" fill="#2ecc71"/>
<rect x="9" y="3" width="34" height="10" rx="3" fill="#0e4429"/>
<circle cx="12" cy="24" r="6" fill="#000"/><circle cx="40" cy="24" r="6" fill="#000"/>
</g>
<text x="56" y="76" text-anchor="middle" fill="#7bed9f" font-size="8" font-weight="700">Bridge-এ ওঠার আগেই</text>
<text x="56" y="86" text-anchor="middle" fill="#7bed9f" font-size="8" font-weight="700">গতি কমাও — উপরে brake নয়!</text>
<!-- BRIDGE ICES sign -->
<rect x="128" y="52" width="4" height="58" fill="#8a6d3b"/>
<g transform="rotate(45 130 44)"><rect x="116" y="30" width="28" height="28" rx="2" fill="#fdd835" stroke="#222" stroke-width="1.5"/></g>
<text x="130" y="40" text-anchor="middle" fill="#222" font-size="9" font-weight="900">BRIDGE</text>
<text x="130" y="47" text-anchor="middle" fill="#222" font-size="9" font-weight="900">ICES</text>
<text x="130" y="54" text-anchor="middle" fill="#222" font-size="9" font-weight="900">BEFORE</text>
<text x="130" y="61" text-anchor="middle" fill="#222" font-size="9" font-weight="900">ROAD</text>
</svg>
<div class="rt-caption">মাটি insulator — রাস্তাকে গরম রাখে। Bridge-এর নিচে শুধু ঠান্ডা বাতাস/পানি — তাই ৩২°F-এর আশেপাশে রাস্তা শুকনো থাকলেও bridge-এ বরফ। Shadow আর overpass-এও একই ঘটনা</div>
</div>

<div class="scenario-box">
<div class="scn-label">🎭 REAL ROAD SCENARIO — Black Ice on Bridge</div>
<div class="scn-question">❓ ডিসেম্বরের রাত, তুমি ৫৫ mph-এ। রাস্তা শুকনো মনে হচ্ছে। কিন্তু একটা bridge-এ উঠতেই গাড়ি পিছলে গেল। কী হলো?</div>
<div class="scn-answer">✅ Black ice। Bridge-এ আগে বরফ জমে — নিচে ground-এর তাপ নেই। Gas ছাড়ো, brake চেপো না, smooth steering।</div>
<div class="scn-explain">Bridge ও overpass দুই দিক থেকে ঠান্ডা হয়, তাই রাস্তার আগেই freeze করে — সেজন্যই "BRIDGE ICES BEFORE ROAD" সাইন। দেখে শুকনো মনে হলেও ৩২°F-এর আশেপাশে bridge মানেই সন্দেহ। Bridge-এ ওঠার আগেই গতি কমাও — উপরে উঠে brake নয়।</div>
</div>

<div class="scenario-box">
<div class="scn-label">🎭 REAL ROAD SCENARIO — নভেম্বরের সন্ধ্যা, হরিণ</div>
<div class="scn-question">❓ নভেম্বর, সন্ধ্যা ৬টা, M-24-এ ৫৫ mph। হঠাৎ headlight-এ একটা হরিণ — রাস্তা পার হয়ে চলে গেল। যাক, বেঁচে গেছ। গতি বাড়াবে?</div>
<div class="scn-answer">✅ না — উল্টো আরও ধীরে! হরিণ দলে চলে। একটা পার হওয়া মানে পেছনে আরও ২-৩টা আসছে। Brake cover করে ধীরে এগোও।</div>
<div class="scn-explain">Michigan-এ বছরে ৫০,০০০+ deer crash — বেশিরভাগ অক্টোবর-নভেম্বরে, ভোর ও সন্ধ্যায়। "প্রথম হরিণটা তোমাকে সাবধান করে, দ্বিতীয়টা ধাক্কা খায়" — পুরনো Michigan প্রবাদ। আর মনে রাখো: swerve নয়, brake।</div>
</div>

<div class="scenario-box">
<div class="scn-label">🎭 REAL ROAD SCENARIO — গ্রীষ্মের ঝুম বৃষ্টি</div>
<div class="scn-question">❓ জুলাই মাস, US-23-এ হঠাৎ ঝুম বৃষ্টি। রাস্তায় পানির স্রোত। হঠাৎ steering হালকা লাগছে — গাড়ি যেন ভাসছে, steering ঘুরালেও সাড়া নেই। কী হচ্ছে, কী করবে?</div>
<div class="scn-answer">✅ Hydroplaning। Gas ধীরে ছাড়ো, brake চেপো না, steering সোজা রাখো। Tire রাস্তা ফিরে পেলে নিয়ন্ত্রণ ফিরবে।</div>
<div class="scn-explain">বৃষ্টির প্রথম ১০-১৫ মিনিট সবচেয়ে পিচ্ছিল — রাস্তার তেল-ময়লা পানির সাথে মিশে ফিল্ম বানায়। Cruise control বৃষ্টিতে বন্ধ রাখো — hydroplane-এর সময় cruise চালু থাকলে চাকা হঠাৎ spin করতে পারে। পুরনো/ক্ষয়ে যাওয়া tire-এ ঝুঁকি বহুগুণ।</div>
</div>

<div class="scenario-box">
<div class="scn-label">🎭 REAL ROAD SCENARIO — ছোট Accident, Injury নেই</div>
<div class="scn-question">❓ Parking lot থেকে বেরোনোর সময় আরেকটা গাড়ির সাথে হালকা ধাক্কা — কেউ আহত নয়, কিন্তু দুই গাড়িতেই দাগ। অন্য driver বলছে "কিছু হয়নি, যাও।" চলে যাবে?</div>
<div class="scn-answer">✅ না — থামো, তথ্য বিনিময় করো: name, address, license, insurance, plate। ছবি তোলো। Damage $১,০০০+ মনে হলে police report করো।</div>
<div class="scn-explain">Scene ছেড়ে যাওয়া = hit-and-run, "সে-ই তো বলল যাও" কোনো defense নয় — পরে সে-ই দাবি করতে পারে তুমি পালিয়েছ। ফোনে সব ছবি তোলো: দুই গাড়ি, plate, জায়গা। Michigan no-fault মনে রাখো: নিজের insurance-কে জানাও, দেরি করো না।</div>
</div>

<div class="code-block">EXAM PATTERN QUESTIONS — Hazards:

❓ Skid হলে কী করবে?
✅ Brake/gas নয়। Steering ঘুরাও যেদিকে 
   যেতে চাও।

❓ Hydroplaning কী?
✅ Tire জলের উপর ভাসে। ধীরে চালাও, 
   brake না।

❓ Black ice কোথায় থাকে?
✅ Bridge, overpass, shadow — অদৃশ্য বরফ।

❓ Deer রাস্তায় দেখলে কী করবে?
✅ Brake করো, swerve (পাল্টানো) করো না।

❓ Brake failure হলে কী করবে?
✅ Parking brake ধীরে, downshift।

❓ Tire blowout হলে?
✅ Gas ধরে রাখো মুহূর্তে, ধীরে ছাড়ো, 
   steering straight।

❓ Accident হলে প্রথম কী করবে?
✅ থামো, hazard light জ্বালাও, 
   911 (injury হলে), info বিনিময়।

❓ Michigan winter-এ following distance?
✅ ৬+ সেকেন্ড।

❓ Drowsy driving কেন বিপজ্জনক?
✅ Reaction time কমে যায় — অনেকটা drunk driving-এর
   মতো। আসল সমাধান: থামো, বিশ্রাম নাও।

❓ Accident-এর পর scene ছেড়ে গেলে কী হয়?
✅ Hit-and-run — অপরাধ। থামো, info বিনিময়
   করো, প্রয়োজনে police report।</div>

<div class="code-block">🇬🇧 ENGLISH SUMMARY — Chapter 8: Hazards & Emergencies

  Winter: drive well below the limit, 6+ second
  gap, smooth inputs. Black ice forms FIRST on
  bridges, overpasses, and shady spots — slow
  before the bridge, never brake on it. Clear ALL
  snow off the car (windows, roof, lights, plate).

  Skids: steer where you want to go. With ABS —
  brake firmly and HOLD (the pulsing is normal);
  without ABS — no brake, no gas, just steer.
  Hydroplaning: ease off gas, no brake, steer
  straight; first 10-15 min of rain is slickest;
  turn cruise control OFF in rain.

  Wheels off the pavement edge: DON'T yank the
  wheel — ease off gas, slow on the shoulder,
  return at low speed with a shallow angle. Stuck
  accelerator: shift to NEUTRAL, brake, pull off
  (never turn ignition off while moving). Brake
  failure: parking brake gently + downshift. Tire
  blowout: grip wheel, ease off gas, steer
  straight. Flooded road: turn around — 6 inches
  of moving water takes control, 12 floats a car.
  Snowbound: clear the exhaust pipe before running
  the heater (carbon monoxide).

  Deer: 50,000+ Michigan crashes/year, peak
  Oct-Nov at dawn/dusk; they travel in groups —
  BRAKE, never swerve. Crash procedure: stop
  (leaving = hit-and-run), hazards on, move to
  safety, 911 if injured, exchange name/address/
  license/insurance/plate, police report if
  damage exceeds $1,000.</div>

<div class="secret-box">⚠️ Skid = brake নয়, steering ঘুরাও। Winter = ৬+ সেকেন্ড, black ice bridge-এ। Deer = brake, swerve নয়। Accident = থামো, hazard, 911, info বিনিময়।</div>`
});

// ══ DOOR 9: OWI, DRUGS & DISTRACTED DRIVING ══
doors.push({
  num:9, icon:"🍺", color:"#dc2626", name:"নেশা ও অমনোযোগ",
  subtitle:"Impaired & Distracted Driving", tech:"OWI Laws, BAC Limits, Texting Laws",
  secret:"Michigan OWI (Operating While Intoxicated): BAC 0.08+ (21+), 0.02+ (under 21)। Zero Tolerance আন্ডার 21। First offense: license suspension, fine, jail। Texting while driving = primary offense (পুলিশ শুধু এটা দেখে থামাতে পারে)। Hands-free device ছাড়া phone নিষেধ।",
  recall:{
    q:"Michigan-এ BAC limit কত — 21+ আর under 21?",
    qen:"What is Michigan BAC limit for 21+ and under 21?",
    a:"21+ বছরের জন্য BAC 0.08 বা তার বেশি = OWI। Under 21 এর জন্য 0.02 বা তার বেশি = Zero Tolerance violation। মানে under 21 এ প্রায় শূন্য — এক ঢোঁক অ্যালকোহলেও violation। মাদক থাকলে — যেকোনো পরিমাণে OWI।",
    aen:"For 21+, BAC 0.08 or more = OWI. For under 21, 0.02 or more = Zero Tolerance violation. Meaning under 21 — almost zero, one sip is a violation. Any drugs = OWI regardless of amount."
  },
  story:`
<p class="scene-setting">নবম অধ্যায়। তুমি একটা police checkpoint-এ। Police officer — গম্ভীর, badge ঝকমক। তিনি বললেন — "নেশা করে গাড়ি চালানো শুধু অপরাধ নয় — খুন। তোমার এবং অন্যের জীবনের সাথে খেলা। Michigan-এ এর শাস্তি কঠোর।"</p>
<p class="scene-setting en">The ninth chapter. You're at a police checkpoint. A police officer — stern, badge gleaming. He said — "Driving intoxicated isn't just a crime — it's killing. Gambling with your life and others'. Michigan's penalties are severe."</p>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>ভুলের গল্প — Drowsy Driving:</strong> Fell asleep after 12-hour shift — crossed center line. Fix: pull over if you can't remember last mile.</div></div>


<div class="code-block"># ── STEP 3: Michigan OWI (Operating While Intoxicated) laws ──
# The complete guide to drunk/drugged driving penalties.

# MICHIGAN OWI LAWS — BAC LIMITS:
bac_limits = {
    "21+ years": {"legal_limit": 0.08, "offense": "OWI (Operating While Intoxicated)"},
    "21+ (High BAC)": {"legal_limit": 0.17, "offense": "Super Drunk (enhanced penalties)"},
    "Under 21": {"legal_limit": 0.02, "offense": "Zero Tolerance (any alcohol)"},
    "Commercial (CDL)": {"legal_limit": 0.04, "offense": "OWI (lower threshold)"},
    "Any drugs": {"legal_limit": 0.00, "offense": "OWI (marijuana, prescription, illegal)"},
}

print("MICHIGAN OWI BAC LIMITS:")
for category, info in bac_limits.items():
    print(f"  {category}: {info['legal_limit']}+ = {info['offense']}")

# OWI PENALTIES (Michigan):
penalties = {
    "FIRST OFFENSE (BAC 0.08-0.16)": [
        "Up to 93 days in jail",
        "$100-$500 fine",
        "Up to 360 days license suspension",
        "6 points on license",
        "Mandatory $500-$1,000 driver responsibility fee (2 years)",
        "Possible ignition interlock device",
    ],
    "SUPER DRUNK (BAC 0.17+)": [
        "Up to 180 days in jail",
        "$200-$700 fine",
        "45 days NO driving (hard suspension)",
        "Then 320 days restricted (interlock required)",
        "Up to 360 hours community service",
        "Mandatory alcohol treatment (1 year)",
    ],
    "SECOND OFFENSE (within 7 years)": [
        "5 days-1 year in jail",
        "$200-$1,000 fine",
        "Minimum 1 year license suspension",
        "Mandatory alcohol treatment",
        "Vehicle immobilization (90-180 days)",
    ],
    "THIRD OFFENSE (FELONY)": [
        "1-5 years in prison",
        "$500-$5,000 fine",
        "Minimum 5 year license revocation",
        "Felony record (permanent)",
        "Vehicle forfeiture possible",
    ],
}

print("\nOWI PENALTIES:")
for offense, details in penalties.items():
    print(f"\n  {offense}:")
    for d in details:
        print(f"    → {d}")

# PYTHON (BAC estimator — educational only, NOT a guide!):
def estimate_bac(drinks, body_weight_lbs, hours, gender="male"):
    """Rough BAC estimate (Widmark formula). NEVER use to decide if OK to drive!"""
    r = 0.73 if gender == "male" else 0.66  # body water ratio
    # Standard drink = 0.6 oz alcohol
    alcohol_oz = drinks * 0.6
    bac = (alcohol_oz * 5.14 / (body_weight_lbs * r)) - (0.015 * hours)

    if bac < 0:
        bac = 0

    # Legal assessment:
    if bac >= 0.17:
        status = "SUPER DRUNK — felony risk"
    elif bac >= 0.08:
        status = "OWI — ILLEGAL to drive"
    elif bac >= 0.02 and body_weight_lbs < 200:
        status = "Under 21: ZERO TOLERANCE violation"
    else:
        status = "Possibly legal, but DON'T risk it"

    print(f"  {drinks} drinks, {body_weight_lbs} lbs, {hours}h elapsed")
    print(f"  Estimated BAC: {bac:.3f} → {status}")
    print(f"  ⚠️ NEVER use this to decide if you can drive!")
    return bac

print("\nBAC ESTIMATOR (educational only — DO NOT use to drive!):")
estimate_bac(3, 160, 2, "male")
estimate_bac(2, 120, 1, "female")

# THE GOLDEN RULE:
# "If you drink, DON'T drive. Period."
# → One drink per hour is NOT safe for everyone
# → Coffee, cold showers, food do NOT sober you up
# → Only TIME reduces BAC (about 0.015/hour)
# → Uber/Lyft/taxi/friend = always cheaper than a DUI</div>
  ✦ Community service
  ✦ Mandatory alcohol treatment program

  শাস্তি — SECOND OFFENSE (7 বছরের মধ্যে):
  ✦ 5 days to 1 year jail
  ✦ $200-$1000 fine
  ✦ Minimum 30 days suspension
  ✦ Vehicle immobilization

  শাস্তি — THIRD OFFENSE (FELONY):
  ✦ 1-5 years prison
  ✦ $500-$5000 fine
  ✦ License revocation (minimum 5 years)

# — — — — — — — — — — — — — — — — — — — — — —
🧪 ALCOHOL-এর সত্য — পরীক্ষায় আসে, জীবনেও
# — — — — — — — — — — — — — — — — — — — — — —

  ⏱️ একমাত্র TIME শরীর থেকে alcohol সরায়
  — প্রায় ১ standard drink প্রতি ঘণ্টায়

  ভুল ধারণা (সবগুলোই মিথ্যা):
  ❌ কফি খেলে নেশা কাটে → না, জেগে থাকা মাতাল হও
  ❌ ঠান্ডা পানি/গোসল → না
  ❌ খাবার খেলে কাটে → শোষণ ধীর হয়, কাটে না
  ❌ "বিয়ার হালকা, হুইস্কি ভারী" →
     ১ বিয়ার = ১ গ্লাস ওয়াইন = ১ শট — সমান!

  Alcohol প্রথমেই যা কাড়ে (BAC 0.02-0.05):
  → Judgment (বিচারবুদ্ধি) — সবার আগে
  → তারপর reaction, coordination, vision
  💡 মানে: "আমি ঠিক আছি" ভাবার ক্ষমতাটাই
     প্রথমে নষ্ট হয় — সিদ্ধান্ত আগে নাও, খাওয়ার আগে

# — — — — — — — — — — — — — — — — — — — — — —
🚫 IMPLIED CONSENT LAW
# — — — — — — — — — — — — — — — — — — — — — —

  Michigan-এ গাড়ি চালালে তুমি implied consent দিচ্ছ
  → Police breathalyzer চাইলে দিতে বাধ্য
  → Refuse করলে: 1-year license suspension 
    (first refusal)
  → Blood test ও দিতে হয়

# — — — — — — — — — — — — — — — — — — — — — —
🍾 OPEN CONTAINER LAW
# — — — — — — — — — — — — — — — — — — — — — —

  Michigan-এ গাড়ির passenger compartment-এ খোলা
  (open/uncapped/seal ভাঙা) অ্যালকোহল কনটেইনার
  রাখা নিষেধ — driver বা passenger যেই হোক

  ✦ Trunk-এ বা সিল বন্ধ অবস্থায় রাখা ঠিক আছে
  ✦ ব্যতিক্রম: গাড়িতে আলাদা trunk না থাকলে, বা
    limo/chartered bus হলে
  ✦ Violation = civil infraction + points

# — — — — — — — — — — — — — — — — — — — — — —
📱 DISTRACTED DRIVING — TEXTING LAW
# — — — — — — — — — — — — — — — — — — — — — —

  Michigan-এ:
  ✦ 2023 HANDS-FREE LAW: যেকোনো handheld phone 
    use নিষেধ — calling, texting, scrolling, video
  ✦ Hands-free device ছাড়া phone ধরা = অপরাধ
  ✦ $100 fine (first offense)
  ✦ $200 fine (subsequent)
  ✦ GPS ও মাউন্টেড phone ব্যবহার যায় (1 tap)

  Distracted driving types:
  👀 Visual: eyes off road (texting, GPS)
  🤚 Manual: hands off wheel (phone, food)
  🧠 Cognitive: mind off driving (conversation)

# — — — — — — — — — — — — — — — — — — — — — —
🚔 POLICE থামালে কী করবে (Traffic Stop)
# — — — — — — — — — — — — — — — — — — — — — —

  ১. দেখামাত্র signal দাও, ধীরে ডানে/নিরাপদ জায়গায়
     সরে যাও
  ২. সম্পূর্ণ থামাও, হাত steering wheel-এ দৃশ্যমান
     রাখো
  ৩. রাতে হলে interior light জ্বালাও
  ৪. অফিসার না বলা পর্যন্ত গাড়ি থেকে নামো না
  ৫. চাইলে license, registration, insurance দাও
  ৬. শান্ত ও ভদ্র থাকো — হঠাৎ নড়াচড়া নয়
  ৭. আপত্তি থাকলে রাস্তায় তর্ক নয় — কোর্টে challenge
     করো

# — — — — — — — — — — — — — — — — — — — — — —
💊 DRUGS (prescription সহ)
# — — — — — — — — — — — — — — — — — — — — — —

  ✦ Marijuana (legal recreationally) — কিন্তু 
    গাড়ি চালানোর সময় নেশা নিষেধ
  ✦ Prescription drug: side effect থাকলে 
    (drowsy, dizzy) চালানো নিষেধ
  ✦ Over-the-counter: warning label পড়ো
  ✦ Any impairing substance = OWI</div>

<div class="rt-image">
<svg viewBox="0 0 460 220" width="100%" style="max-width:490px">
<rect x="0" y="0" width="460" height="220" fill="#111" rx="8"/>
<text x="230" y="20" text-anchor="middle" fill="#f1c40f" font-size="12" font-weight="900">📱 ৫ সেকেন্ডের text = চোখ বন্ধ করে এক football field</text>
<!-- freeway -->
<rect x="0" y="80" width="460" height="60" fill="#2a2a2a"/>
<line x1="0" y1="110" x2="460" y2="110" stroke="#eee" stroke-width="2" stroke-dasharray="14,11" opacity=".35"/>
<!-- football field overlay under road -->
<rect x="60" y="150" width="360" height="44" fill="#1e4620" rx="4"/>
<line x1="96" y1="150" x2="96" y2="194" stroke="#fff" stroke-width="1" opacity=".4"/>
<line x1="132" y1="150" x2="132" y2="194" stroke="#fff" stroke-width="1" opacity=".4"/>
<line x1="168" y1="150" x2="168" y2="194" stroke="#fff" stroke-width="1" opacity=".4"/>
<line x1="204" y1="150" x2="204" y2="194" stroke="#fff" stroke-width="1" opacity=".4"/>
<line x1="240" y1="150" x2="240" y2="194" stroke="#fff" stroke-width="1" opacity=".4"/>
<line x1="276" y1="150" x2="276" y2="194" stroke="#fff" stroke-width="1" opacity=".4"/>
<line x1="312" y1="150" x2="312" y2="194" stroke="#fff" stroke-width="1" opacity=".4"/>
<line x1="348" y1="150" x2="348" y2="194" stroke="#fff" stroke-width="1" opacity=".4"/>
<line x1="384" y1="150" x2="384" y2="194" stroke="#fff" stroke-width="1" opacity=".4"/>
<text x="240" y="177" text-anchor="middle" fill="#7bed9f" font-size="9" font-weight="900">🏈 ১০০ গজ = ৩০০ ফুট</text>
<!-- car at left with phone -->
<g transform="translate(20,92)">
<rect x="0" y="0" width="52" height="24" rx="7" fill="#e74c3c"/>
<rect x="9" y="4" width="34" height="10" rx="3" fill="#8e2020"/>
<circle cx="12" cy="26" r="6" fill="#000"/><circle cx="40" cy="26" r="6" fill="#000"/>
</g>
<text x="46" y="86" text-anchor="middle" font-size="12">📱</text>
<text x="46" y="70" text-anchor="middle" fill="#ff8a80" font-size="8" font-weight="700">চোখ নামালো…</text>
<!-- blind travel zone -->
<rect x="72" y="82" width="340" height="56" fill="#e74c3c" opacity=".14"/>
<path d="M 80 110 L 400 110" stroke="#e74c3c" stroke-width="2.5" stroke-dasharray="8,6" marker-end="url(#txA)"/>
<defs><marker id="txA" markerWidth="7" markerHeight="7" refX="5" refY="3.5" orient="auto"><polygon points="0,0 7,3.5 0,7" fill="#e74c3c"/></marker></defs>
<!-- ghost car at end -->
<g transform="translate(400,92)" opacity=".5">
<rect x="0" y="0" width="52" height="24" rx="7" fill="#e74c3c"/>
</g>
<text x="240" y="102" text-anchor="middle" fill="#ff8a80" font-size="9" font-weight="900">70 mph * ৫ সেকেন্ড = ৫১৩ ফুট — সম্পূর্ণ অন্ধ</text>
<!-- hazards that could appear -->
<text x="250" y="132" text-anchor="middle" font-size="11">🦌</text>
<text x="330" y="132" text-anchor="middle" font-size="11">🚶</text>
<text x="180" y="132" text-anchor="middle" font-size="11">🛑</text>
<text x="230" y="208 " text-anchor="middle" fill="#888" font-size="8">এই দূরত্বে যা-কিছু আসতে পারে — থেমে থাকা ট্রাফিক, হরিণ, মানুষ — তুমি দেখবেই না</text>
</svg>
<div class="rt-caption">গড় text পড়া/লেখা = চোখ ৫ সেকেন্ড রাস্তার বাইরে। 70 mph-এ সেটা এক football field-এর চেয়েও বেশি পথ — চোখ বেঁধে চালানোর সমান। এজন্যই hands-free law</div>
</div>

<div class="code-block"># ── STEP 5: Michigan no-fault insurance and points system ──
# Essential insurance and license knowledge for the test.

# MICHIGAN NO-FAULT INSURANCE SYSTEM:

insurance = {
    "WHAT IS NO-FAULT?": "Regardless of who caused the accident, each person's OWN insurance pays for their medical/injury costs",
    "REQUIRED COVERAGES": {
        "PIP (Personal Injury Protection)": "Covers medical bills (lifetime, unlimited or tier-selected)",
        "Property Protection": "Covers damage to others' property (up to $1 million)",
        "Residual Liability": "Covers serious injury/death above threshold",
    },
    "PIP COVERAGE TIERS (2020 reform)": {
        "Unlimited": "Full lifetime medical coverage (traditional)",
        "$500,000": "Half million cap",
        "$250,000": "Quarter million cap",
        "$250,000 with exclusion": "Excludes household members",
        "$50,000": "Minimal (Medicaid-eligible only)",
        "Opt-out": "Only if you have Medicare Parts A and B",
    },
    "MINIMUM LIABILITY": {
        "Bodily Injury": "$250K/person, $500K/accident (default, waivable to $50K/$100K)",
        "Property Damage": "$10,000 (other state's property)",
    },
}

print("MICHIGAN NO-FAULT INSURANCE:")
for key, value in insurance.items():
    print(f"\n  {key}:")
    if isinstance(value, dict):
        for k, v in value.items():
            print(f"    {k}: {v}")
    else:
        print(f"    {value}")

# DRIVING WITHOUT INSURANCE = CRIME:
# → Fine: $200-$500
# → License suspension
# → Plate confiscation
# → Vehicle impoundment
# → SR-22 requirement (high-risk insurance for 3 years)

# DRIVER LICENSE POINT SYSTEM:
point_system = {
    "6 points": ["OWI/DUI", "Reckless driving", "Fleeing police", "Manslaughter"],
    "4 points": ["Drag racing", "Impaired driving", "Under 21 with any BAC"],
    "3 points": ["Careless driving", "Disobeying school bus", "Speeding 16-25 over"],
    "2 points": ["Speeding 10-15 over", "Running red light/stop sign", "Illegal passing"],
    "1 point": ["Minor moving violations"],
}

print("\nDRIVER LICENSE POINT SYSTEM:")
for points, violations in point_system.items():
    print(f"  {points}: {', '.join(violations)}")

# PYTHON (license status checker):
def license_status(points, age=25):
    """Determine license status based on points."""
    if age < 21 and points >= 4:
        return "SUSPENDED — under 21 with 4+ points"
    if points >= 12:
        return "SUSPENDED — 12+ points in 2 years"
    if points >= 7:
        return "RESTRICTED — 7-11 points (driver retraining required)"
    if points >= 4:
        return "WARNING — points accumulating, drive carefully"
    return "CLEAN — good driving record"

print("\nLICENSE STATUS CHECKER:")
print(f"  3 points: {license_status(3)}")
print(f"  5 points: {license_status(5)}")
print(f"  8 points: {license_status(8)}")
print(f"  15 points: {license_status(15)}")
print(f"  4 points (age 19): {license_status(4, age=19)}")

# POINTS STAY ON RECORD:
# → 2 years from conviction date
# → After 2 years: points drop off
# → Violation itself stays on record longer
# → Insurance companies check: 3-5 years for rates</div>
  ✦ Points driving record-এ ২ বছর থাকে
  ✦ Points বাড়লে:
    → Insurance premium বাড়ে
    → License suspension হতে পারে

  Common point values:
    → 6 points: OWI, reckless driving, fleeing police
    → 4 points: drag racing, speeding 16+ over limit
    → 3 points: speeding 11-15 over, careless driving
    → 2 points: speeding 10 or less over, open alcohol

  💡 4 points in 2 years = warning letter
  💡 12 points = possible license review/hearing</div>

<div class="code-block">EXAM PATTERN QUESTIONS — OWI/DUI:

❓ Michigan-ে 21+ বছরের জন্য BAC limit?
✅ 0.08 বা তার বেশি।

❓ Under 21 এর জন্য BAC limit?
✅ 0.02 (Zero Tolerance)।

❓ Commercial driver (CDL) এর জন্য?
✅ 0.04।

❓ "Super Drunk" law কী?
✅ BAC 0.17+ = enhanced penalty: 180 দিন পর্যন্ত
   jail, 45 দিন hard suspension + ignition
   interlock।

❓ OWI first offense শাস্তি কী?
✅ 93 days jail, $100-500 fine, license 
   suspension, 6 points।

❓ Implied consent law কী?
✅ গাড়ি চালালে breathalyzer দিতে বাধ্য। 
   Refuse করলে 1-year suspension।

❓ Texting while driving কী ধরনের offense?
✅ Primary offense — police শুধু এটা দেখে 
   থামাতে পারে।

❓ Marijuana legal হলেও গাড়ি চালানোর সময়?
✅ নেশা করে চালানো নিষেধ — OWI।

❓ Distracted driving কত ধরনের?
✅ ৩ ধরন — Visual, Manual, Cognitive।

❓ Michigan no-fault insurance কী?
✅ কে দোষী নির্বিশেষে প্রত্যেকের নিজের 
   insurance নিজের injury খরচ বহণ করে।

❓ License points কত বছর record-এ থাকে?
✅ ২ বছর।

❓ OWI-তে কত points?
✅ ৬ points।

❓ Wipers on হলে কী করতে হবে?
✅ Headlights ও on করতে হবে — Michigan law।

❓ Cyclist বাম হাত উপরে তুললে কী বোঝায়?
✅ Right turn।

❓ Open container law কী বলে?
✅ Passenger compartment-এ খোলা অ্যালকোহল রাখা
   নিষেধ — trunk-এ বা সিল বন্ধ থাকলে ঠিক আছে।

❓ Michigan-এ minimum bodily injury liability
   কত?
✅ Default $250,000/$500,000 (waiver দিয়ে
   $50,000/$100,000)।

❓ Police থামালে প্রথম কী করবে?
✅ Signal দিয়ে ধীরে নিরাপদ জায়গায় সরে যাও, হাত
   দৃশ্যমান রাখো।</div>

<div class="scenario-box">
<div class="scn-label">🎭 REAL ROAD SCENARIO — "এক বিয়ারে কিছু হয় না"</div>
<div class="scn-question">❓ তুমি ১৯। বন্ধুর বাসায় party — কেউ তোমার হাতে বিয়ার ধরিয়ে দিল। "এক ক্যানে কিছুই হয় না, তুই তো ঠিকই চালাতে পারবি।" ৩০ মিনিট পর বাসায় ফিরতে হবে। খাবে?</div>
<div class="scn-answer">✅ না। Under 21 = Zero Tolerance (BAC 0.02)। এক ক্যান বিয়ারেই তুমি 0.02-0.04 এ পৌঁছাতে পারো — মানে license suspension, fine, record।</div>
<div class="scn-explain">"আমি ঠিক আছি" — প্রতিটা OWI arrest-এর আগের বাক্য। বাস্তব সমাধান: চালানোর থাকলে একদম খেও না, খেলে চালিও না। Uber/বন্ধু/parent-কে ফোন — যেটাই হোক, সেটা DUI-এর $10,000+ (fine, insurance, attorney) খরচ আর record-এর চেয়ে সস্তা। Parent-রা প্রায় সবসময় রাগের চেয়ে বেশি খুশি হয় যে তুমি ফোন করেছ।</div>
</div>

<div class="scenario-box">
<div class="scn-label">🎭 REAL ROAD SCENARIO — লাল আলোতে Text</div>
<div class="scn-question">❓ লম্বা লাল আলোতে থেমে আছ। ফোনে message এলো। "গাড়ি তো থেমে আছে" — এক ঝলক reply করবে?</div>
<div class="scn-answer">✅ না। Michigan-এর hands-free law "operating" অবস্থায় প্রযোজ্য — লাল আলোতে থামা অবস্থাও operating। হাতে ফোন = ticket ($100 প্রথমবার)।</div>
<div class="scn-explain">আইনত গাড়ি park করে থামালে তবেই ফোন ধরা বৈধ। বাস্তব কৌশল: চালানোর আগে GPS set করো, ফোন Do Not Disturb While Driving mode-এ দাও, mount-এ রাখো (এক tap-এ কাজ বৈধ)। Text-টা ৫ মিনিট অপেক্ষা করতে পারে — সবসময়।</div>
</div>

<div class="code-block">🇬🇧 ENGLISH SUMMARY — Chapter 9: OWI & Distraction

  BAC limits: 0.08+ = OWI (21+); 0.17+ = "Super
  Drunk" (enhanced penalties: up to 180 days jail,
  45-day hard suspension + ignition interlock);
  under 21 = 0.02 Zero Tolerance; CDL = 0.04; any
  impairing drug = OWI (marijuana is legal but
  driving impaired is not). First OWI: up to 93
  days jail, $100-500, up to 360-day suspension,
  6 points. Implied consent: refusing the
  breathalyzer = automatic 1-year suspension.

  Only TIME removes alcohol (~1 drink/hour).
  Coffee, showers, food — myths. One beer = one
  wine = one shot. Judgment goes FIRST — decide
  before drinking, not after.

  Hands-free law (2023): holding a phone while
  operating = illegal, including at red lights —
  $100 first offense. One tap on a mounted phone
  is OK. Distraction types: visual, manual,
  cognitive. Open container: no open alcohol in
  the passenger compartment — trunk only.

  Pulled over: signal, stop right, hands visible
  on the wheel, interior light at night, stay in
  the car, argue in court not on the roadside.

  Insurance: Michigan is no-fault — your PIP pays
  your medical bills regardless of fault; driving
  uninsured is a crime. Points stay 2 years:
  OWI/reckless = 6, 16+ over = 4, 11-15 over = 3.</div>

<div class="secret-box">🍺 OWI: BAC 0.08+ (21+), 0.02+ (under 21)। Refuse breathalyzer = 1-year suspension। Texting = primary offense। Marijuana legal কিন্তু driving impaired = OWI। Open container passenger compartment-এ নিষেধ। Police থামালে হাত visible রাখো, শান্ত থাকো। নেশা করে চালানো = খুন।</div>`
});

// ══ DOOR 10: THE ROAD TEST — EXAMINER CHECKLIST ══
doors.push({
  num:10, icon:"🏁", color:"#fbbf24", name:"রোড টেস্ট — শেষ পরীক্ষা",
  subtitle:"The Road Test — Final Exam", tech:"What Examiners Check, Common Fail Points",
  secret:"Road test = তোমার ৫০+ ঘণ্টা প্র্যাকটিসের ফলাফল। Examiner দেখবে: vehicle check, steering control, observation, signaling, stopping, turning, lane position, speed control, parking। সবচেয়ে সাধারণ fail: rolling stop, no blind spot check, no signal, too fast/slow, poor parking। শান্ত থাকো, মন খোলো, প্রতিটি কাজ সচেতনভাবে করো।",
  recall:{
    q:"কেন examiner বললেন rolling stop সবচেয়ে সাধারণ fail?",
    qen:"Why did the examiner say rolling stop is the most common fail?",
    a:"কারণ অনেকে STOP sign-এ পুরোপুরি থামে না — ধীরে চলতে থাকে। Examiner চাকা স্থির হতে দেখে। এটাই সবচেয়ে সাধারণ automatic fail। পাশ করতে হলে — সম্পূর্ণ থামো, ৩ সেকেন্ড গোনো, তারপর যাও।",
    aen:"Because many don't fully stop at STOP signs — they keep rolling slowly. The examiner watches for wheels stopping completely. This is the most common automatic fail. To pass — full stop, count 3 seconds, then go."
  },
  story:`
<p class="scene-setting">দশম অধ্যায়। একটা third-party driver testing business-এর parking lot — কমলা cone সাজানো closed course। তুমি গাড়িতে বসে আছো, dashboard-এ insurance-এর কাগজ। পাশে road test examiner — ক্লিপবোর্ড, pen, গম্ভীর মুখ। "প্রথমে closed course, তারপর রাস্তায়। প্রস্তুত?" তিনি জিজ্ঞেস করলেন। গাড়ির ইঞ্জিন idle, হালকা বাতাস। এই মুহূর্তটা — তোমার সব প্রস্তুতির পরীক্ষা।</p>
<p class="scene-setting en">The tenth chapter. A third-party driver testing business's parking lot — a closed course lined with orange cones. You sit in the car, insurance papers on the dashboard. Beside you: the road test examiner — clipboard, pen, serious face. "Closed course first, then the road. Ready?" he asks. Engine idling, light breeze. This moment — the test of all your preparation.</p>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>ভুলের গল্প — Unregistered Vehicle:</strong> Forgot registration renewal — $150 ticket. Fix: set annual calendar reminder.</div></div>


<div class="code-block">🏢 ROAD TEST REALITY — কোথায়, কীভাবে, কত টাকা
# — — — — — — — — — — — — — — — — — — — — — —

  ⚠️ গুরুত্বপূর্ণ: Michigan-এ road test SOS office-এ
  হয় না! SOS-approved THIRD-PARTY driver testing
  business-এ হয়।

  ✦ SOS website-এ approved tester-দের তালিকা আছে
  ✦ ফি unregulated — জায়গাভেদে ~$50-100
    (weekend/জরুরি booking-এ বেশি হতে পারে)
  ✦ টেস্ট দুই ভাগে:
    PART A: CLOSED-COURSE (off-street) —
      basic control: parking lot-এ forward stop,
      backing, parallel parking, Y-turn
    PART B: ON-ROAD — বাস্তব রাস্তায় ~২০-৩০ মিনিট:
      residential, business, এবং সম্ভব হলে
      expressway driving
  ✦ Part A fail করলে Part B হবে না
  ✦ পাশ করলে examiner দেবে Driving Skills Test
    Certificate → সেটা + TIP/learner license নিয়ে
    SOS office-এ যাও → license issue হবে ($25)

# — — — — — — — — — — — — — — — — — — — — — —
ROAD TEST — EXAMINER CHECKLIST
# — — — — — — — — — — — — — — — — — — — — — —

📋 PART 1: VEHICLE SAFETY CHECK (পরীক্ষা শুরুর আগে)
# — — — — — — — — — — — — — — — — — — — — — —

  Examiner জিজ্ঞেস করবে:
  ✦ Headlight কোথায়?
  ✦ Brake light কোথায়?
  ✦ Turn signal কোথায়?
  ✦ Hazard light কোথায়?
  ✦ Defroster কোথায়?
  ✦ Windshield wiper কোথায়?
  ✦ Horn কোথায়?
  ✦ Parking brake কোথায়?
  ✦ Mirror adjust কীভাবে?

  → না জানলে test শুরুই হবে না!

<div class="rt-image">
<svg viewBox="0 0 460 260" width="100%" style="max-width:490px">
<rect x="0" y="0" width="460" height="260" fill="#111" rx="8"/>
<text x="230" y="20" text-anchor="middle" fill="#f1c40f" font-size="12" font-weight="900">🏢 PART A: CLOSED COURSE — বাস্তবে যেমন দেখতে (top view)</text>
<!-- parking lot -->
<rect x="14" y="32" width="432" height="212" fill="#252525" rx="6"/>
<!-- START box -->
<rect x="28" y="196" width="70" height="36" fill="#1e3a1e" rx="4" stroke="#2ecc71" stroke-width="1.5"/>
<text x="63" y="212" text-anchor="middle" fill="#2ecc71" font-size="8" font-weight="900">START</text>
<text x="63" y="224" text-anchor="middle" fill="#7bed9f" font-size="6.5">seatbelt + control চেক</text>
<!-- your car at start -->
<g transform="translate(40,200)">
<rect x="0" y="0" width="20" height="30" rx="6" fill="#2ecc71"/>
</g>
<!-- 1. forward stop lane with stop line -->
<path d="M 63 196 L 63 90" stroke="#2ecc71" stroke-width="2.5" stroke-dasharray="6,5" marker-end="url(#ccA)"/>
<rect x="44" y="80" width="40" height="6" fill="#fff"/>
<text x="63" y="70 " text-anchor="middle" fill="#fff" font-size="10" font-weight="700">১. FORWARD STOP</text>
<text x="63" y="60" text-anchor="middle" fill="#ccc" font-size="6.5">লাইনের আগে, ঝাঁকি ছাড়া</text>
<!-- 2. backing corridor with cones -->
<path d="M 84 100 L 180 100" stroke="#74b9ff" stroke-width="2.5" stroke-dasharray="6,5" marker-end="url(#ccB)"/>
<circle cx="110" cy="84" r="4" fill="#e67e22"/><circle cx="150" cy="84" r="4" fill="#e67e22"/>
<circle cx="110" cy="116" r="4" fill="#e67e22"/><circle cx="150" cy="116" r="4" fill="#e67e22"/>
<text x="132" y="48" text-anchor="middle" fill="#74b9ff" font-size="10" font-weight="700">২. BACKING (সোজা পেছনে)</text>
<text x="132" y="58" text-anchor="middle" fill="#ccc" font-size="6.5">শরীর ঘুরিয়ে পেছনে তাকাও —</text>
<text x="132" y="67" text-anchor="middle" fill="#ccc" font-size="6.5">শুধু mirror নয়!</text>
<!-- 3. parallel parking box with cones -->
<rect x="220" y="76" width="110" height="48" fill="none" stroke="#f1c40f" stroke-width="2" stroke-dasharray="5,4"/>
<circle cx="220" cy="76" r="4" fill="#e67e22"/><circle cx="330" cy="76" r="4" fill="#e67e22"/>
<circle cx="220" cy="124" r="4" fill="#e67e22"/><circle cx="330" cy="124" r="4" fill="#e67e22"/>
<path d="M 200 100 Q 240 60 275 88 Q 300 108 300 100" fill="none" stroke="#f1c40f" stroke-width="2" stroke-dasharray="5,4" marker-end="url(#ccC)"/>
<text x="275" y="48" text-anchor="middle" fill="#f1c40f" font-size="10" font-weight="700">৩. PARALLEL PARKING</text>
<text x="275" y="58" text-anchor="middle" fill="#ccc" font-size="6.5">cone ছোঁয়া = points কাটা,</text>
<text x="275" y="67" text-anchor="middle" fill="#ccc" font-size="6.5">curb জোরে ধাক্কা = fail হতে পারে</text>
<!-- 4. Y-turn area -->
<rect x="360" y="70" width="70" height="120" fill="#1c1c2e" rx="4"/>
<path d="M 395 180 L 395 140 Q 395 120 380 118 M 380 118 L 408 132 M 408 132 L 395 100" fill="none" stroke="#e056fd" stroke-width="2" stroke-dasharray="5,4" marker-end="url(#ccD)"/>
<text x="395" y="212" text-anchor="middle" fill="#e056fd" font-size="10" font-weight="700">৪. Y-TURN</text>
<text x="395" y="222" text-anchor="middle" fill="#ccc" font-size="6.5">(3-point turn)</text>
<text x="395" y="232" text-anchor="middle" fill="#ccc" font-size="6.5">ঠিক ৩ ধাপে</text>
<defs>
<marker id="ccA" markerWidth="6" markerHeight="6" refX="4" refY="3" orient="auto"><polygon points="0,0 6,3 0,6" fill="#2ecc71"/></marker>
<marker id="ccB" markerWidth="6" markerHeight="6" refX="4" refY="3" orient="auto"><polygon points="0,0 6,3 0,6" fill="#74b9ff"/></marker>
<marker id="ccC" markerWidth="6" markerHeight="6" refX="4" refY="3" orient="auto"><polygon points="0,0 6,3 0,6" fill="#f1c40f"/></marker>
<marker id="ccD" markerWidth="6" markerHeight="6" refX="4" refY="3" orient="auto"><polygon points="0,0 6,3 0,6" fill="#e056fd"/></marker>
</defs>
<!-- examiner -->
<text x="180" y="180" font-size="12">🧑‍💼</text>
<text x="180" y="196" text-anchor="middle" fill="#888" font-size="6.5">examiner বাইরে থেকে</text>
<text x="180" y="205" text-anchor="middle" fill="#888" font-size="6.5">দেখে (Part A-তে)</text>
<text x="230" y="252" text-anchor="middle" fill="#888" font-size="7.5">Part A পাশ করলে তবেই Part B (on-road) — তাই এই চারটা maneuver বাড়ির কাছে খালি lot-এ প্র্যাকটিস করো</text>
</svg>
<div class="rt-caption">চারটা station: forward stop → straight backing → parallel parking (cone box) → Y-turn। কমলা বিন্দু = cone। বেশিরভাগ tester-এর course এরকমই</div>
</div>

<div class="rt-image-grid">
<div class="rt-img-card"><svg viewBox="0 0 100 60" width="100"><rect x="5" y="10" width="90" height="35" rx="8" fill="#1a1a1a" stroke="#444" stroke-width="1"/><ellipse cx="50" cy="27" rx="28" ry="14" fill="#fff59d" opacity=".9"/><ellipse cx="50" cy="27" rx="18" ry="8" fill="#fff" opacity=".5"/><rect x="38" y="45" width="24" height="8" rx="2" fill="#555"/></svg><div class="rt-caption"><strong>Headlight</strong><br>সামনের আলো — on/off জানো</div></div>
<div class="rt-img-card"><svg viewBox="0 0 100 60" width="100"><rect x="5" y="10" width="90" height="40" rx="6" fill="#1a1a1a"/><rect x="30" y="18" width="40" height="24" rx="4" fill="#e74c3c"/><rect x="34" y="22" width="32" height="16" rx="2" fill="#ff6b6b" opacity=".5"/><text x="50" y="58" text-anchor="middle" fill="#999" font-size="10">BRAKE LIGHT</text></svg><div class="rt-caption"><strong>Brake Light</strong><br>লাল আলো — পেছনে</div></div>
<div class="rt-img-card"><svg viewBox="0 0 100 60" width="100"><rect x="5" y="10" width="90" height="40" rx="6" fill="#1a1a1a"/><polygon points="30,30 50,15 50,45" fill="#27ae60"/><polygon points="70,30 50,15 50,45" fill="#27ae60" opacity=".3"/><text x="50" y="58" text-anchor="middle" fill="#999" font-size="10">LEFT SIGNAL</text></svg><div class="rt-caption"><strong>Turn Signal</strong><br>বাম/ডান arrow</div></div>
<div class="rt-img-card"><svg viewBox="0 0 100 60" width="100"><rect x="5" y="10" width="90" height="40" rx="6" fill="#1a1a1a"/><rect x="25" y="18" width="50" height="24" rx="4" fill="#222"/><path d="M 35 22 Q 30 30 35 38 M 45 22 Q 40 30 45 38 M 55 22 Q 50 30 55 38 M 65 22 Q 60 30 65 38" stroke="#5dade2" stroke-width="2" fill="none"/><text x="50" y="58" text-anchor="middle" fill="#999" font-size="10">DEFROSTER</text></svg><div class="rt-caption"><strong>Defroster</strong><br>কুয়াশা মোছা</div></div>
</div>

# — — — — — — — — — — — — — — — — — — — — — —
🚗 PART 2: BASIC DRIVING SKILLS
# — — — — — — — — — — — — — — — — — — — — — —

  📌 STARTING:
  ✦ Seatbelt on
  ✦ Mirror check
  ✦ Signal দাও
  ✦ Shoulder check (blind spot)
  ✦ Smooth start

  📌 STOPPING:
  ✦ Smooth brake (not jerky)
  ✦ STOP line এ থামো
  ✦ STOP sign-এ সম্পূর্ণ থামো (3 sec)
  ✦ Red light-এ সম্পূর্ণ থামো

  📌 TURNING:
  ✦ Signal 100 ফুট আগে (~= 5 car lengths)
  ✦ Correct lane
  ✦ Shoulder check before turn
  ✦ Smooth steering (push-pull)
  ✦ Correct speed
  ✦ Cancel signal after turn

  📌 LANE POSITION:
  ✦ Lane center-এ থাকো
  ✦ Drifting নয়
  ✦ Lane change: signal + mirror + shoulder

<div class="rt-image-grid">
<div class="rt-img-card"><svg viewBox="0 0 100 100" width="90"><circle cx="50" cy="50" r="42" fill="#2c2c2c" stroke="#555" stroke-width="2"/><circle cx="50" cy="50" r="15" fill="#3a3a3a"/><circle cx="50" cy="50" r="8" fill="#222"/><line x1="50" y1="8" x2="50" y2="35" stroke="#e74c3c" stroke-width="3"/><line x1="50" y1="92" x2="50" y2="65" stroke="#e74c3c" stroke-width="3"/><line x1="8" y1="50" x2="35" y2="50" stroke="#27ae60" stroke-width="3"/><line x1="92" y1="50" x2="65" y2="50" stroke="#27ae60" stroke-width="3"/><circle cx="14" cy="14" r="5" fill="#888"/><circle cx="86" cy="14" r="5" fill="#888"/><circle cx="14" cy="86" r="5" fill="#888"/><circle cx="86" cy="86" r="5" fill="#888"/><text x="14" y="44" fill="#27ae60" font-size="8" font-weight="900">9</text><text x="80" y="44" fill="#27ae60" font-size="8" font-weight="900">3</text></svg><div class="rt-caption">✅ <strong>9-and-3 Position</strong><br>examiner এটাই দেখে</div></div>
<div class="rt-img-card"><svg viewBox="0 0 100 80" width="90"><rect x="15" y="30" width="70" height="12" rx="4" fill="#333" stroke="#555" stroke-width="1"/><rect x="70" y="25" width="18" height="22" rx="3" fill="#444"/><polygon points="22,30 12,20 12,40" fill="#27ae60"/><text x="50" y="58" text-anchor="middle" fill="#999" font-size="10">SIGNAL LEVER</text><text x="22" y="16" font-size="10" fill="#27ae60" font-weight="700">UP=LEFT</text></svg><div class="rt-caption"><strong>Turn Signal Lever</strong><br>বাম = ↰, ডান = ↱</div></div>
<div class="rt-img-card"><svg viewBox="0 0 100 70" width="90"><rect x="15" y="15" width="70" height="30" rx="4" fill="#1a1a1a" stroke="#555" stroke-width="2"/><rect x="20" y="20" width="60" height="20" rx="2" fill="#16213e"/><rect x="42" y="22" width="16" height="16" fill="#0f3460" opacity=".5"/><path d="M 30 40 L 25 30 L 35 30 Z" fill="#555"/><text x="50" y="58" text-anchor="middle" fill="#999" font-size="10">REAR-VIEW MIRROR</text></svg><div class="rt-caption"><strong>Rear-view Mirror</strong><br>প্রতি ৫-৮ সেকেন্ডে</div></div>
</div>

# — — — — — — — — — — — — — — — — — — — — — —
🅿️ PART 3: PARKING MANEUVERS
# — — — — — — — — — — — — — — — — — — — — — —

  📌 PARALLEL PARKING:
  ✦ Signal
  ✦ Pull beside front car (2-3 ft gap)
  ✦ Reverse, steering right
  ✦ 45-degree angle
  ✦ Straighten, steering left
  ✦ 1 ft from curb
  ✦ কার্ব hit না

  📌 BACKING / REVERSE:
  ✦ Turn body, look back
  ✦ Right hand on passenger seat
  ✦ Slow speed
  ✦ Straight line

  📌 PERPENDICULAR PARKING:
  ✦ Signal
  ✦ Wide turn
  ✦ Center in spot
  ✦ Wheels straight

  📌 THREE-POINT TURN:
  ✦ Signal right, pull to right side
  ✦ Check traffic both ways
  ✦ Turn left, move forward
  ✦ Reverse, turn wheel right
  ✦ Forward, turn left, proceed

# — — — — — — — — — — — — — — — — — — — — — —
🛣️ PART 4: ON-ROAD DRIVING
# — — — — — — — — — — — — — — — — — — — — — —

  ✦ Stop signs — complete stop
  ✦ Traffic signals — proper response
  ✦ Lane changes — signal + blind spot
  ✦ Intersections — right-of-way
  ✦ Speed control — within limit, safe
  ✦ Following distance — 3+ seconds
  ✦ Curve handling — slow before, smooth
  ✦ Railroad crossing — slow, check
  ✦ Expressway entry/exit (if applicable)</div>

<div class="rt-image">
<svg viewBox="0 0 400 120" width="100%" style="max-width:440px"><rect x="0" y="80" width="400" height="6" fill="#666"/><rect x="0" y="0" width="400" height="80" fill="#0a0a0a"/><text x="5" y="95" fill="#555" font-size="10">CURB</text>
<rect x="60" y="35" width="50" height="25" rx="4" fill="#3498db"/><circle cx="72" cy="62" r="4" fill="#222"/><circle cx="100" cy="62" r="4" fill="#222"/><text x="75" y="50" fill="#fff" font-size="10">CAR1</text>
<rect x="135" y="35" width="50" height="25" rx="4" fill="#e74c3c" transform="rotate(-20 160 47)"/><text x="145" y="50" fill="#fff" font-size="10" transform="rotate(-20 160 47)">STEP 2</text>
<rect x="200" y="35" width="50" height="25" rx="4" fill="#2ecc71"/><circle cx="212" cy="62" r="4" fill="#222"/><circle cx="240" cy="62" r="4" fill="#222"/><text x="205" y="50" fill="#fff" font-size="10">DONE!</text>
<line x1="130" y1="50" x2="170" y2="30" stroke="#f1c40f" stroke-width="2" stroke-dasharray="4,3" marker-end="url(#ar1)"/><defs><marker id="ar1" markerWidth="5" markerHeight="5" refX="4" refY="2.5" orient="auto"><polygon points="0,0 5,2.5 0,5" fill="#f1c40f"/></marker></defs></svg>
<div class="rt-caption">Parallel Parking — 3 steps: pull beside, reverse at 45°, straighten at curb</div>
</div>

<div class="code-block">🅿️ PARALLEL PARKING — KEY POINTS
# — — — — — — — — — — — — — — — — — — — — — —

  STEP 1: Pull beside front car (2-3 ft gap)
  STEP 2: Reverse, turn wheel RIGHT (toward curb)
  STEP 3: 45-degree angle-এ পৌঁছালে straighten
  STEP 4: Turn wheel LEFT, straighten behind front car
  TARGET: কার্ব থেকে ১ ft দূরে
  ❌ Curb hit = automatic point loss!</div>

<div class="rt-image">
<svg viewBox="0 0 400 140" width="100%" style="max-width:440px"><rect x="0" y="60" width="400" height="4" fill="#444"/><rect x="0" y="64" width="400" height="4" fill="#f1c40f" stroke-dasharray="20,15" opacity=".3"/><text x="5" y="55" fill="#555" font-size="10">ROAD</text>
<rect x="150" y="30" width="35" height="18" rx="3" fill="#e74c3c"/><circle cx="160" cy="50" r="3" fill="#222"/><circle cx="178" cy="50" r="3" fill="#222"/>
<path d="M 170 45 Q 120 20 80 50 Q 120 80 170 120" fill="none" stroke="#f1c40f" stroke-width="2" stroke-dasharray="5,3"/><polygon points="165,115 175,115 170,125" fill="#f1c40f"/>
<text x="60" y="20" fill="#e74c3c" font-size="8" font-weight="700">1: FORWARD-LEFT</text><text x="120" y="55" fill="#3498db" font-size="8" font-weight="700">2: REVERSE</text><text x="155" y="135" fill="#2ecc71" font-size="8" font-weight="700">3: FORWARD-GO</text></svg>
<div class="rt-caption">Three-Point Turn (K-turn): forward-left, reverse-right, forward-left proceed</div>
</div>

<div class="code-block">🔄 THREE-POINT TURN — KEY POINTS
# — — — — — — — — — — — — — — — — — — — — — —

  STEP 1: Signal right, pull to right side, check traffic
  STEP 2: Turn LEFT sharply, move forward (left side)
  STEP 3: Reverse, turn wheel RIGHT (back to right)
  STEP 4: Forward, turn LEFT, proceed

  ⚠️ শুধু তিন ধাপ! চার বা পাঁচ ধাপ = points lost</div>

<div class="scenario-box">
<div class="scn-label">🎭 EXAMINER'S PERSPECTIVE — What They Watch For</div>
<div class="scn-question">❓ Examiner silently watching। সে কী দেখছেন যা তুমি ভাবো না?</div>
<div class="scn-answer">✅ Examiner দেখছে: head movement (mirror + shoulder), hand position (9-3), smooth steering, speed consistency, signaling timing।</div>
<div class="scn-explain">অনেক candidate নীরব examiner দেখে ভাবে কিছু দেখছে না। ভুল! Examiner প্রতিটা movement নোট করছে। সব কাজ EXAGGERATE করো — head turn বড় করো, shoulder check স্পষ্ট করো।</div>
</div>

<div class="rt-image">
<svg viewBox="0 0 300 200" width="100%" style="max-width:440px"><rect x="0" y="0" width="300" height="200" fill="#1a1a1a"/>
<rect x="80" y="60" width="140" height="140" fill="#333"/><rect x="85" y="65" width="135" height="135" fill="#3a3a3a"/>
<rect x="95" y="100" width="120" height="100" fill="#2a2a2a"/><line x1="155" y1="100" x2="155" y2="200" stroke="#f1c40f" stroke-width="1" stroke-dasharray="6,4"/>
<rect x="115" y="80" width="20" height="20" fill="#2c2c2c"/><circle cx="125" cy="105" r="4" fill="#e74c3c"/>
<polygon points="200,150 225,150 238,167 225,185 200,185 187,167" fill="#c62828" stroke="#fff" stroke-width="1.5"/><text x="212" y="171" text-anchor="middle" fill="#fff" font-size="10" font-weight="900">STOP</text>
<text x="150" y="195" text-anchor="middle" fill="#666" font-size="10">INTERSECTION — COMPLETE STOP</text></svg>
<div class="rt-caption">STOP sign at intersection — complete stop, 3 seconds, check both ways</div>
</div>

<div class="rt-image-grid">
<div class="rt-img-card"><svg viewBox="0 0 80 80" width="60"><polygon points="24,4 56,4 76,24 76,56 56,76 24,76 4,56 4,24" fill="#c62828" stroke="#fff" stroke-width="3"/><text x="40" y="46" text-anchor="middle" fill="#fff" font-size="11" font-weight="900">STOP</text></svg><div class="rt-caption">STOP — সম্পূর্ণ থামো<br>3 sec minimum</div></div>
<div class="rt-img-card"><svg viewBox="0 0 60 75" width="50"><rect x="2" y="2" width="56" height="71" rx="3" fill="#fff" stroke="#222" stroke-width="1.5"/><text x="30" y="16" text-anchor="middle" fill="#222" font-weight="700" font-size="9">SPEED</text><text x="30" y="24" text-anchor="middle" fill="#222" font-weight="700" font-size="9">LIMIT</text><text x="30" y="52" text-anchor="middle" fill="#222" font-weight="900" font-size="22">25</text></svg><div class="rt-caption">Speed Limit — limit-এর<br>5 mph নিচে রাখো</div></div>
<div class="rt-img-card"><svg viewBox="0 0 120 60" width="100"><rect x="0" y="50" width="120" height="4" fill="#666"/><rect x="0" y="0" width="120" height="50" fill="#0a0a0a"/><rect x="25" y="15" width="40" height="20" rx="3" fill="#27ae60"/><circle cx="35" cy="38" r="3" fill="#222"/><circle cx="55" cy="38" r="3" fill="#222"/><rect x="75" y="15" width="40" height="20" rx="3" fill="#3498db"/><circle cx="85" cy="38" r="3" fill="#222"/><circle cx="105" cy="38" r="3" fill="#222"/><text x="5" y="58" fill="#555" font-size="9">PARALLEL PARKED</text></svg><div class="rt-caption">Parallel parking<br>1 ft from curb</div></div>
<div class="rt-img-card"><svg viewBox="0 0 60 70" width="50"><rect x="5" y="10" width="50" height="50" rx="4" fill="#1a1a1a"/><path d="M 15 15 Q 30 5 45 15 L 45 30 Q 30 25 15 30 Z" fill="#27ae60"/><path d="M 15 35 Q 30 30 45 35 L 45 55 Q 30 50 15 55 Z" fill="#27ae60" opacity=".4"/><line x1="30" y1="15" x2="30" y2="55" stroke="#1a1a1a" stroke-width="2"/><text x="30" y="68" text-anchor="middle" fill="#999" font-size="10">SEATBELT</text></svg><div class="rt-caption">Seatbelt FIRST<br>before anything</div></div>
</div>

<div class="code-block">❌ TOP 10 AUTOMATIC FAIL REASONS:
# — — — — — — — — — — — — — — — — — — — — — —

  ১. ❌ Rolling stop (STOP sign-এ সম্পূর্ণ থামো না)
  ২. ❌ No blind spot check (shoulder check না)
  ৩. ❌ No turn signal (100 ft আগে না)
  ৪. ❌ Speeding (limit পার করা)
  ৫. ❌ Too slow (traffic block করা)
  ৬. ❌ Dangerous lane change (blind spot না)
  ৭. ❌ Curb hit (parallel parking)
  ৮. ❌ Wrong lane (turn ভুল লেনে)
  ৯. ❌ Failure to yield (right-of-way না)
  ১০. ❌ Distracted driving (phone, etc.)

# — — — — — — — — — — — — — — — — — — — — — —
✅ TOP 10 PASS TIPS:
# — — — — — — — — — — — — — — — — — — — — — —

  ১. ✅ Exaggerate everything — head turns, 
     shoulder checks visible করো
  ২. ✅ Signal early (100 ft আগে)
  ৩. ✅ Complete stop (3 sec)
  ৪. ✅ Smooth, no jerky movements
  ৫. ✅ Speed: limit-এর 5 নিচে
  ৬. ✅ Both hands on wheel (9-3)
  ৭. ✅ Mirror check every 5-8 sec
  ৮. ✅ Pedestrian/cyclist priority
  ৯. ✅ Parking practice — parallel, 3-point
  ১০. ✅ শান্ত থাকো — nervous = mistake

# — — — — — — — — — — — — — — — — — — — — — —
📝 WHAT TO BRING:
# — — — — — — — — — — — — — — — — — — — — — —

  ✦ Valid learner license / TIP
  ✦ Vehicle (registration + Michigan no-fault
    insurance-এর proof — কাগজ সাথে রাখো!)
  ✦ Working lights, signals, horn
  ✦ Clean windshield, কোনো dashboard warning
    light জ্বলে থাকলে টেস্ট বাতিল হতে পারে
  ✦ Seatbelts working
  ✦ Test fee (~$50-100 — tester-কে জিজ্ঞেস করো)
  ✦ পাশ করার পরে: certificate → SOS office →
    license ($25)

# — — — — — — — — — — — — — — — — — — — — — —
📊 SCORING কীভাবে হয় + FAIL করলে কী
# — — — — — — — — — — — — — — — — — — — — — —

  ✦ Examiner প্রতি ভুলে points কাটে —
    ছোট ভুল (দেরিতে signal) = কম, বড় ভুল = বেশি
  ✦ AUTOMATIC FAIL (points যা-ই হোক):
    → Examiner-কে brake/wheel ধরতে হলে
    → কোনো traffic law ভাঙলে (rolling stop,
      speeding, failure to yield)
    → বিপজ্জনক পরিস্থিতি তৈরি করলে
  ✦ ছোট ভুলে কেউ fail করে না — জমলে করে

  FAIL করলে:
  ✦ Examiner বলবে কোথায় ভুল — শুনে নোট নাও
  ✦ আবার schedule করো (আবার fee লাগবে)
  ✦ দুর্বল জায়গা practice করে ফেরো —
    অনেকেই ২য় বারে পাশ করে

# — — — — — — — — — — — — — — — — — — — — — —
🌙 আগের রাত + সকালের চেকলিস্ট
# — — — — — — — — — — — — — — — — — — — — — —

  আগের রাতে:
  ✦ ৮ ঘণ্টা ঘুম — ক্লান্ত মস্তিষ্ক ভুল করে
  ✦ Documents একসাথে রাখো (TIP, certificate,
    insurance, registration)
  ✦ গাড়ির light/signal/horn টেস্ট করো
  ✦ টেস্টের রুট এলাকায় একবার practice চালাও

  সকালে:
  ✦ ভালো নাস্তা, পানি
  ✦ ৩০ মিনিট আগে পৌঁছাও
  ✦ ফোন silent — গাড়িতে দূরে রাখো
  ✦ মনে রাখো: examiner চায় তুমি পাশ করো —
    সে শত্রু নয়, নিরাপত্তার দারোয়ান মাত্র</div>

<div class="code-block">EXAM PATTERN QUESTIONS — Road Test:

❓ STOP sign-এ কত সেকেন্ড থামতে হবে?
✅ কমপক্ষে ৩ সেকেন্ড — সম্পূর্ণ।

❓ Turn signal কত আগে দিতে হবে?
✅ কমপক্ষে ১০০ ফুট আগে।

❓ Parallel parking-এ কার্ব থেকে দূরত্ব?
✅ কাছাকাছি ১ ফুটের মধ্যে।

❓ Lane change করার সঠিক পদ্ধতি?
✅ Signal → Mirror → Shoulder check → Move।

❓ 3-point turn কত ধাপে?
✅ ৩ ধাপ — forward-left, reverse-right, 
   forward-left।

❓ Road test-এ সবচেয়ে সাধারণ fail?
✅ Rolling stop (সম্পূর্ণ না থামা)।

❓ Steering wheel hand position?
✅ 9-and-3।

❓ Mirror check কতবার?
✅ প্রতি ৫-৮ সেকেন্ডে।

❓ Michigan road test কোথায় হয়?
✅ SOS office-এ নয় — approved third-party
   testing business-এ। ফি ~$50-100।

❓ Road test-এর দুই ভাগ কী কী?
✅ Part A: closed-course (parking lot maneuvers),
   Part B: on-road। Part A fail = Part B নেই।

❓ পাশ করার পর কী করবে?
✅ Driving Skills Test Certificate নিয়ে SOS
   office-এ যাও — সেখানে license issue হয়।</div>

<div class="scenario-box">
<div class="scn-label">🎭 REAL ROAD SCENARIO — টেস্টের মাঝে ভুল!</div>
<div class="scn-question">❓ রোড টেস্ট চলছে। একটা turn-এ তুমি signal দিতে একটু দেরি করেছ — নিজেই বুঝেছ। মাথায় ঘুরছে "শেষ, fail!" হাত ঘামছে, মনোযোগ ভাঙছে। কী করবে?</div>
<div class="scn-answer">✅ ভুলটা ছেড়ে দাও — সামনের দিকে মনোযোগ দাও। এক-দুইটা ছোট ভুলে কেউ fail করে না; points কাটা যায় মাত্র। Fail হয় বড় ভুলে (rolling stop, no shoulder check) — অথবা এক ভুলের চাপে পরের পাঁচটা ভুল করলে।</div>
<div class="scn-explain">Examiner-রা perfection খোঁজে না — খোঁজে safe, aware driver। ভুলের পর composure ফিরে পাওয়াটাও একটা skill যেটা তারা লক্ষ করে। শ্বাস নাও, mirror check করো, এগিয়ে যাও। টেস্ট শেষ না হওয়া পর্যন্ত কিছুই শেষ না।</div>
</div>

<div class="scenario-box">
<div class="scn-label">🎭 REAL ROAD SCENARIO — Examiner চুপ, নির্দেশ নেই</div>
<div class="scn-question">❓ টেস্টের মাঝে একটা intersection-এ এসেছ। Examiner কিছু বলছে না — কোনো নির্দেশ নেই। সামনে সবুজ আলো। তুমি কি থেমে জিজ্ঞেস করবে "কোন দিকে যাব?"</div>
<div class="scn-answer">✅ না — নির্দেশ না থাকলে সোজা যাও (নিয়ম মেনে)। সবুজ আলোতে অকারণে থামা = fail-যোগ্য ভুল! নির্দেশ দরকার হলে examiner আগেই বলবে।</div>
<div class="scn-explain">Default rule: no instruction = straight ahead, নিয়ম মেনে। চলন্ত অবস্থায় examiner-এর সাথে দীর্ঘ কথাও এড়াও — সেটা cognitive distraction। প্রশ্ন থাকলে থামার নিরাপদ সুযোগে ছোট করে জিজ্ঞেস করো। Examiner-রা confident, decisive driving পছন্দ করে।</div>
</div>

<div class="code-block">🇬🇧 ENGLISH SUMMARY — Chapter 10: The Road Test

  Where: NOT at the SOS — at an approved
  third-party testing business (fees vary,
  ~$50-100). Two parts: Part A closed course
  (forward stop, straight backing, parallel
  parking in a cone box, Y-turn) — fail A and
  there's no Part B; Part B on-road (~20-30 min:
  residential, business, expressway if available).
  Pass → Driving Skills Test Certificate → take
  it to SOS with your permit → license ($25).

  Bring: valid permit/TIP, registered + insured
  vehicle in working order (lights, signals, horn,
  no dash warning lights), proof of insurance.

  Examiner checks: full stops (3 sec, wheels
  still), signals 100 ft before turns, shoulder
  checks on every lane change, mirror checks
  every 5-8 sec, hands at 9-and-3, speed within
  limit (about 5 under is safe), smooth braking,
  lane centering, parallel parking within 1 ft
  of curb, 3-point turn in exactly 3 moves.

  Automatic fails: examiner must grab wheel/brake,
  breaking any law (rolling stop, speeding,
  failure to yield), creating danger. Small errors
  only cost points — recover and move on. Top
  fail: the rolling stop. Top tip: exaggerate
  your head movements so checks are visible.
  If no instruction at an intersection: go
  straight, lawfully. Sleep 8 hours; arrive 30
  min early; the examiner wants you to pass.</div>

<div class="secret-box">🏁 Road test: third-party tester-এ (~$50-100), দুই ভাগ — closed course + on-road। STOP = 3 sec complete, signal = 100 ft, blind spot = shoulder check, speed = limit-5, parking = practice। Top fail = rolling stop। পাশ = certificate → SOS → license। তুমি প্রস্তুত — শান্ত থাকো, সফল হও!</div>`
});

// ══ DOOR 11: THE COMPLETE DRIVE — ALL SCENES ══
doors.push({
  num:11, icon:"🔑", color:"#a78bfa", name:"সম্পূর্ণ যাত্রা",
  subtitle:"The Complete Drive", tech:"Key → Cockpit → Roads → Parking — Every Scene",
  secret:"একটা সম্পূর্ণ যাত্রা: গাড়ির চারপাশ চেক → cockpit setup (seat-mirror-belt) → P+brake+start → dashboard light check → পেছনে তাকিয়ে বের হও → residential ২৫ → intersection নিয়ম → freeway merge → বৃষ্টিতে wipers=lights → পার্ক করে P+brake+lock। প্রতিটা ধাপ আগের দশ অধ্যায়ের জ্ঞান।",
  recall:{
    q:"গাড়িতে ঢুকে engine start করার আগে কোন তিনটা জিনিস ঠিক করবে — ক্রমানুসারে?",
    qen:"Before starting the engine, which three things do you set up — in order?",
    a:"১. Seat — পেডাল পুরো চাপা যায়, wheel থেকে ১০ ইঞ্চি দূরে বুক। ২. Mirrors — rear-view-এ পুরো পেছনের কাচ, side mirror-এ নিজের গাড়ি সামান্য। ৩. Seatbelt — সবার, তারপর brake চেপে P-তে start। Seat আগে কারণ seat বদলালে mirror-ও বদলায়।",
    aen:"1. Seat — pedals fully reachable, chest 10 inches from wheel. 2. Mirrors — full rear window in rear-view, barely your own car in side mirrors. 3. Seatbelt — everyone, then brake pressed, in P, start. Seat first because moving the seat changes the mirrors."
  },
  story:`
<p class="scene-setting">শেষ অধ্যায়। আজ কোনো নতুন নিয়ম নেই — আজ সব নিয়ম একসাথে। Instructor চাবিটা তোমার হাতে দিলেন। "চলো, শুরু থেকে শেষ পর্যন্ত একটা সম্পূর্ণ যাত্রা। গাড়ির দরজা খোলা থেকে পার্ক করা পর্যন্ত — প্রতিটা মুহূর্ত আমি দেখব। প্রতিটা দৃশ্য মনে রেখো — পরীক্ষার দিন এগুলোই ঘটবে।"</p>
<p class="scene-setting en">The final chapter. No new rules today — today, all the rules together. The instructor hands you the key. "A complete drive, start to finish. From opening the door to parking — I'll watch every moment. Remember every scene — these exact moments will happen on test day."</p>

<div class="rt-image">
<svg viewBox="0 0 460 200" width="100%" style="max-width:490px">
<rect x="0" y="0" width="460" height="200" fill="#111" rx="8"/>
<text x="230" y="20" text-anchor="middle" fill="#a78bfa" font-size="12" font-weight="900">দৃশ্য ১ — গাড়িতে ওঠার আগে: WALK-AROUND (৩০ সেকেন্ড)</text>
<!-- driveway -->
<rect x="120" y="40" width="220" height="150" fill="#252525" rx="6"/>
<!-- car top view -->
<rect x="190" y="70" width="80" height="110" rx="16" fill="#a78bfa"/>
<rect x="202" y="88" width="56" height="30" rx="5" fill="#4c3a75"/>
<rect x="202" y="140" width="56" height="22" rx="5" fill="#4c3a75"/>
<circle cx="192" cy="92" r="7" fill="#000"/><circle cx="268" cy="92" r="7" fill="#000"/>
<circle cx="192" cy="158" r="7" fill="#000"/><circle cx="268" cy="158" r="7" fill="#000"/>
<!-- walk path around -->
<path d="M 170 180 Q 150 120 170 70 Q 200 44 260 50 Q 300 58 296 110 Q 294 160 250 186" fill="none" stroke="#2ecc71" stroke-width="2.5" stroke-dasharray="6,5" marker-end="url(#waA)"/>
<defs><marker id="waA" markerWidth="7" markerHeight="7" refX="5" refY="3.5" orient="auto"><polygon points="0,0 7,3.5 0,7" fill="#2ecc71"/></marker></defs>
<text x="152" y="196" fill="#2ecc71" font-size="9" font-weight="900">🚶 শুরু</text>
<!-- check callouts -->
<text x="62" y="70" text-anchor="middle" fill="#f1c40f" font-size="8" font-weight="700">✓ Tire — চাপ ঠিক?</text>
<text x="62" y="82" text-anchor="middle" fill="#ccc" font-size="10">flat/ফাটা নয় তো?</text>
<path d="M 96 74 L 186 90" stroke="#f1c40f" stroke-width="1" stroke-dasharray="3,3" opacity=".6"/>
<text x="62" y="120" text-anchor="middle" fill="#f1c40f" font-size="8" font-weight="700">✓ নিচে leak?</text>
<text x="62" y="132" text-anchor="middle" fill="#ccc" font-size="10">তেল/coolant-এর দাগ</text>
<text x="398" y="70" text-anchor="middle" fill="#f1c40f" font-size="8" font-weight="700">✓ আলো ভাঙা নয় তো?</text>
<path d="M 362 74 L 300 80" stroke="#f1c40f" stroke-width="1" stroke-dasharray="3,3" opacity=".6"/>
<text x="398" y="150" text-anchor="middle" fill="#e74c3c" font-size="8" font-weight="900">✓ পেছনে বাচ্চা/খেলনা?</text>
<text x="398" y="162" text-anchor="middle" fill="#ff8a80" font-size="10">সবচেয়ে জরুরি চেক!</text>
<text x="352" y="184" font-size="11">🧸</text>
<path d="M 362 172 L 330 178" stroke="#e74c3c" stroke-width="1" stroke-dasharray="3,3" opacity=".7"/>
</svg>
<div class="rt-caption">অভ্যাস বানাও: প্রতিবার ওঠার আগে গাড়ির চারদিকে এক চক্কর — tire, আলো, leak, আর গাড়ির পেছনে ছোট বাচ্চা বা খেলনা। Driveway backover মৃত্যুর বড় কারণ ছোটদের</div>
</div>

<div class="rt-image">
<svg viewBox="0 0 460 250" width="100%" style="max-width:490px">
<rect x="0" y="0" width="460" height="250" fill="#111" rx="8"/>
<text x="230" y="20" text-anchor="middle" fill="#a78bfa" font-size="12" font-weight="900">দৃশ্য ২ — COCKPIT SETUP: বসেই চার কাজ, এই ক্রমে</text>
<!-- windshield -->
<path d="M 40 36 L 420 36 L 400 110 L 60 110 Z" fill="#16213e" stroke="#444" stroke-width="2"/>
<!-- rear-view mirror -->
<rect x="196" y="42" width="68" height="22" rx="4" fill="#0b2545" stroke="#888" stroke-width="1.5"/>
<text x="230" y="56" text-anchor="middle" fill="#5dade2" font-size="10">পুরো পেছনের কাচ</text>
<circle cx="230" cy="34" r="3" fill="#666"/>
<text x="310" y="52" fill="#f1c40f" font-size="9" font-weight="900">② Mirror</text>
<path d="M 306 50 L 268 52" stroke="#f1c40f" stroke-width="1.5" stroke-dasharray="3,3"/>
<!-- side mirrors -->
<rect x="18" y="88" width="34" height="24" rx="4" fill="#0b2545" stroke="#888" stroke-width="1.5"/>
<rect x="408" y="88" width="34" height="24" rx="4" fill="#0b2545" stroke="#888" stroke-width="1.5"/>
<text x="35" y="128" text-anchor="middle" fill="#ccc" font-size="6.5">নিজের গাড়ি সামান্য</text>
<text x="425" y="128" text-anchor="middle" fill="#ccc" font-size="6.5">দেখা যাবে — বেশি নয়</text>
<!-- steering wheel + driver -->
<circle cx="160" cy="180" r="52" fill="none" stroke="#555" stroke-width="9"/>
<circle cx="160" cy="180" r="14" fill="#333"/>
<circle cx="112" cy="180" r="8" fill="#ffd8a8"/><circle cx="208" cy="180" r="8" fill="#ffd8a8"/>
<text x="94" y="184" text-anchor="middle" fill="#2ecc71" font-size="10" font-weight="900">9</text>
<text x="228" y="184" text-anchor="middle" fill="#2ecc71" font-size="10" font-weight="900">3</text>
<text x="160" y="246" text-anchor="middle" fill="#f1c40f" font-size="9" font-weight="900">④ হাত 9-and-3 — বুক wheel থেকে ১০ ইঞ্চি</text>
<!-- seat adjustment -->
<rect x="300" y="150" width="56" height="76" rx="8" fill="#3d3d3d"/>
<rect x="300" y="140" width="56" height="18" rx="6" fill="#4a4a4a"/>
<path d="M 328 226 L 328 240 M 316 233 L 340 233" stroke="#f1c40f" stroke-width="2"/>
<text x="328" y="136" text-anchor="middle" fill="#f1c40f" font-size="9" font-weight="900">① Seat আগে!</text>
<text x="392" y="166" fill="#ccc" font-size="10">পেডাল পুরো চাপা যায়,</text>
<text x="392" y="176" fill="#ccc" font-size="10">headrest মাথার মাঝে</text>
<!-- seatbelt -->
<path d="M 302 152 L 356 210" stroke="#e74c3c" stroke-width="6" opacity=".85"/>
<text x="392" y="200" fill="#e74c3c" font-size="9" font-weight="900">③ Belt — সবার</text>
<text x="392" y="212" fill="#ff8a80" font-size="10">কাঁধ ও কোমরে flat,</text>
<text x="392" y="222" fill="#ff8a80" font-size="10">ঘাড়ে নয়</text>
<text x="60" y="240" text-anchor="middle" fill="#888" font-size="10">Seat আগে কেন? —</text>
<text x="60" y="222" text-anchor="middle" fill="#888" font-size="10">seat নড়লে mirror-ও</text>
<text x="60" y="231" text-anchor="middle" fill="#888" font-size="10">নড়ে যায়!</text>
</svg>
<div class="rt-caption">ক্রম মুখস্থ: ① Seat ② Mirror ③ Belt ④ হাত 9-3। Examiner গাড়িতে উঠেই এই চারটা দেখে — গাড়ি চলার আগেই score শুরু!</div>
</div>

<div class="rt-image">
<svg viewBox="0 0 460 210" width="100%" style="max-width:490px">
<rect x="0" y="0" width="460" height="210" fill="#111" rx="8"/>
<text x="230" y="20" text-anchor="middle" fill="#a78bfa" font-size="12" font-weight="900">দৃশ্য ৩ — ENGINE START + DASHBOARD চেক</text>
<!-- dashboard panel -->
<rect x="30" y="34" width="400" height="86" rx="10" fill="#1a1a1a" stroke="#444" stroke-width="2"/>
<!-- gauges -->
<circle cx="100" cy="77" r="30" fill="#222" stroke="#555" stroke-width="2"/>
<text x="100" y="72" text-anchor="middle" fill="#ccc" font-size="10">RPM</text>
<line x1="100" y1="77" x2="84" y2="62" stroke="#e74c3c" stroke-width="2"/>
<circle cx="360" cy="77" r="30" fill="#222" stroke="#555" stroke-width="2"/>
<text x="360" y="72" text-anchor="middle" fill="#ccc" font-size="10">MPH</text>
<line x1="360" y1="77" x2="344" y2="90" stroke="#e74c3c" stroke-width="2"/>
<!-- warning lights row -->
<g font-size="13" text-anchor="middle">
<text x="170" y="66">🔋</text><text x="200" y="66">🛢️</text><text x="230" y="66">🌡️</text><text x="260" y="66">⚙️</text><text x="290" y="66">🛞</text>
</g>
<text x="170" y="82" text-anchor="middle" fill="#888" font-size="5.5">battery</text>
<text x="200" y="82" text-anchor="middle" fill="#888" font-size="5.5">oil</text>
<text x="230" y="82" text-anchor="middle" fill="#888" font-size="5.5">temp</text>
<text x="260" y="82" text-anchor="middle" fill="#888" font-size="5.5">engine</text>
<text x="290" y="82" text-anchor="middle" fill="#888" font-size="5.5">tire/ABS</text>
<text x="230" y="104" text-anchor="middle" fill="#f1c40f" font-size="7.5" font-weight="700">Start-এ সব জ্বলে ২-৩ সেকেন্ডে নিভে যাবে — কোনোটা জ্বলে থাকলে = সমস্যা, যেও না</text>
<!-- start sequence -->
<rect x="30" y="132" width="120" height="64" rx="8" fill="#1e3a1e"/>
<text x="90" y="150" text-anchor="middle" fill="#2ecc71" font-size="9" font-weight="900">① গিয়ার P-তে?</text>
<text x="90" y="164" text-anchor="middle" fill="#7bed9f" font-size="7.5">(P ছাড়া start-ই হয় না</text>
<text x="90" y="175" text-anchor="middle" fill="#7bed9f" font-size="7.5">বেশিরভাগ গাড়িতে)</text>
<rect x="170" y="132" width="120" height="64" rx="8" fill="#1e3a1e"/>
<text x="230" y="150" text-anchor="middle" fill="#2ecc71" font-size="9" font-weight="900">② ডান পা BRAKE-এ</text>
<text x="230" y="164" text-anchor="middle" fill="#7bed9f" font-size="7.5">চেপে ধরো —</text>
<text x="230" y="175" text-anchor="middle" fill="#7bed9f" font-size="7.5">গ্যাসে নয়!</text>
<rect x="310" y="132" width="120" height="64" rx="8" fill="#1e3a1e"/>
<text x="370" y="150" text-anchor="middle" fill="#2ecc71" font-size="9" font-weight="900">③ START</text>
<text x="370" y="164" text-anchor="middle" fill="#7bed9f" font-size="7.5">button/চাবি — তারপর</text>
<text x="370" y="175" text-anchor="middle" fill="#7bed9f" font-size="7.5">dashboard light চেক</text>
</svg>
<div class="rt-caption">P + brake + start = নিরাপদ শুরু। Warning light জ্বলে থাকা গাড়িতে রোড টেস্ট বাতিল হতে পারে — বাসা থেকে বেরোনোর আগেই চেক করো</div>
</div>

<div class="rt-image">
<svg viewBox="0 0 460 190" width="100%" style="max-width:490px">
<rect x="0" y="0" width="460" height="190" fill="#111" rx="8"/>
<text x="230" y="20" text-anchor="middle" fill="#a78bfa" font-size="12" font-weight="900">দৃশ্য ৪ — পা ও গিয়ার: ভুল এখানেই সবচেয়ে বেশি হয়</text>
<!-- pedals panel -->
<rect x="30" y="34" width="180" height="140" rx="8" fill="#1c1c1c" stroke="#444" stroke-width="1.5"/>
<rect x="60" y="70" width="44" height="66" rx="6" fill="#555"/>
<text x="82" y="106" text-anchor="middle" fill="#fff" font-size="8" font-weight="900">BRAKE</text>
<rect x="130" y="60" width="30" height="80" rx="6" fill="#3a3a3a"/>
<text x="145" y="104" text-anchor="middle" fill="#ccc" font-size="10" font-weight="900">GAS</text>
<!-- right foot -->
<ellipse cx="120" cy="158" rx="20" ry="11" fill="#ffd8a8"/>
<path d="M 120 148 L 92 130 M 120 148 L 142 134" stroke="#f1c40f" stroke-width="2" stroke-dasharray="4,3"/>
<text x="120" y="52" text-anchor="middle" fill="#f1c40f" font-size="8" font-weight="700">শুধু ডান পা — দুই পেডালেই!</text>
<text x="120" y="184" text-anchor="middle" fill="#ff8a80" font-size="10">বাম পা মেঝেতে — কখনো brake-এ নয়</text>
<!-- PRNDL panel -->
<rect x="240" y="34" width="190" height="140" rx="8" fill="#1c1c1c" stroke="#444" stroke-width="1.5"/>
<g font-size="11" font-weight="900">
<text x="262" y="60" fill="#fff">P</text><text x="282" y="60" fill="#888" font-size="7.5">Park — থামা+ছাড়ার সময়</text>
<text x="262" y="86" fill="#fff">R</text><text x="282" y="86" fill="#888" font-size="7.5">Reverse — পেছনে (আগে পেছন দেখো!)</text>
<text x="262" y="112" fill="#fff">N</text><text x="282" y="112" fill="#888" font-size="7.5">Neutral — engine-চাকা বিচ্ছিন্ন</text>
<text x="262" y="138" fill="#2ecc71">D</text><text x="282" y="138" fill="#7bed9f" font-size="7.5">Drive — স্বাভাবিক চালনা</text>
<text x="262" y="164" fill="#fff">L</text><text x="282" y="164" fill="#888" font-size="7.5">Low — খাড়া ঢাল/বরফে engine brake</text>
</g>
</svg>
<div class="rt-caption">"ভুল পেডাল" crash-এর কারণ দুই পা ব্যবহার। এক পা = কখনো একসাথে brake+gas নয়। গিয়ার বদলের সময় সবসময় brake চাপা</div>
</div>

<div class="rt-image">
<svg viewBox="0 0 460 220" width="100%" style="max-width:490px">
<rect x="0" y="0" width="460" height="220" fill="#111" rx="8"/>
<text x="230" y="20" text-anchor="middle" fill="#a78bfa" font-size="12" font-weight="900">দৃশ্য ৫ — DRIVEWAY থেকে বের হওয়া (সবচেয়ে অবহেলিত ঝুঁকি)</text>
<!-- house -->
<rect x="40" y="36" width="90" height="60" fill="#3d2f22"/>
<polygon points="35,36 85,14 135,36" fill="#5a4632"/>
<!-- driveway vertical -->
<rect x="150" y="36" width="70" height="120" fill="#252525"/>
<!-- sidewalk -->
<rect x="0" y="156" width="460" height="18" fill="#3a3a3a"/>
<text x="40" y="169" fill="#888" font-size="10">SIDEWALK</text>
<!-- street -->
<rect x="0" y="174" width="460" height="46" fill="#2a2a2a"/>
<line x1="0" y1="197" x2="460" y2="197" stroke="#f1c40f" stroke-width="2" stroke-dasharray="12,10" opacity=".5"/>
<!-- car in driveway facing house (must reverse out) -->
<g transform="translate(163,52)">
<rect x="0" y="0" width="44" height="70" rx="10" fill="#a78bfa"/>
<rect x="7" y="10" width="30" height="18" rx="4" fill="#4c3a75"/>
</g>
<!-- reverse path -->
<path d="M 185 130 L 185 168 Q 185 192 220 192 L 300 192" fill="none" stroke="#2ecc71" stroke-width="2.5" stroke-dasharray="6,5" marker-end="url(#dwA)"/>
<defs><marker id="dwA" markerWidth="7" markerHeight="7" refX="5" refY="3.5" orient="auto"><polygon points="0,0 7,3.5 0,7" fill="#2ecc71"/></marker></defs>
<!-- pedestrian on sidewalk approaching -->
<text x="290" y="170" font-size="13">🚶</text>
<path d="M 282 165 L 230 165" stroke="#e74c3c" stroke-width="1.5" stroke-dasharray="4,3" marker-end="url(#dwB)"/>
<defs><marker id="dwB" markerWidth="6" markerHeight="6" refX="4" refY="3" orient="auto"><polygon points="0,0 6,3 0,6" fill="#e74c3c"/></marker></defs>
<text x="330" y="150" text-anchor="middle" fill="#ff8a80" font-size="7.5" font-weight="700">🚶 sidewalk-এর মানুষ আগে —</text>
<text x="330" y="141" text-anchor="middle" fill="#ff8a80" font-size="7.5" font-weight="700">backing গাড়ি ALWAYS yield!</text>
<!-- look back cue -->
<text x="120" y="120" text-anchor="middle" fill="#f1c40f" font-size="8" font-weight="700">শরীর ঘুরিয়ে পেছনের</text>
<text x="120" y="131" text-anchor="middle" fill="#f1c40f" font-size="8" font-weight="700">কাচ দিয়ে দেখো —</text>
<text x="120" y="142" text-anchor="middle" fill="#f1c40f" font-size="8" font-weight="700">ক্যামেরা শুধু সাহায্য</text>
<!-- oncoming car on street -->
<g transform="translate(380,178)">
<rect x="0" y="0" width="48" height="22" rx="7" fill="#3498db"/>
</g>
<text x="404" y="214" text-anchor="middle" fill="#74b9ff" font-size="10">রাস্তার গাড়িকেও yield</text>
<text x="230" y="212" text-anchor="middle" fill="#888" font-size="7.5">ধীরে — idle গতিতে, brake cover করে। Sidewalk পার হওয়ার আগে আবার থামো-দেখো</text>
</svg>
<div class="rt-caption">Backing out: শরীর ঘুরাও + তিন দিক দেখো + idle গতি। Sidewalk = pedestrian-এর রাস্তা, street = গাড়ির — দুটোতেই তুমি guest</div>
</div>

<div class="rt-image">
<svg viewBox="0 0 460 230" width="100%" style="max-width:490px">
<rect x="0" y="0" width="460" height="230" fill="#111" rx="8"/>
<text x="230" y="20" text-anchor="middle" fill="#a78bfa" font-size="12" font-weight="900">দৃশ্য ৬ — RESIDENTIAL রাস্তা: ২৫ mph-এ SEE প্রয়োগ</text>
<!-- street -->
<rect x="0" y="120" width="460" height="70" fill="#2a2a2a"/>
<!-- sidewalk both sides -->
<rect x="0" y="104" width="460" height="16" fill="#3a3a3a"/>
<rect x="0" y="190" width="460" height="16" fill="#3a3a3a"/>
<!-- parked cars line -->
<g transform="translate(150,108)"><rect x="0" y="0" width="52" height="22" rx="6" fill="#555"/></g>
<g transform="translate(230,108)"><rect x="0" y="0" width="52" height="22" rx="6" fill="#666"/></g>
<!-- ball rolling out between parked cars -->
<circle cx="216" cy="140" r="7" fill="#e74c3c"/>
<path d="M 216 132 L 216 152" stroke="#e74c3c" stroke-width="1.5" stroke-dasharray="3,2" marker-end="url(#rsB)"/>
<defs><marker id="rsB" markerWidth="6" markerHeight="6" refX="4" refY="3" orient="auto"><polygon points="0,0 6,3 0,6" fill="#e74c3c"/></marker></defs>
<text x="216" y="96" text-anchor="middle" fill="#ff8a80" font-size="8" font-weight="900">⚠️ বল = পেছনে বাচ্চা আসছে!</text>
<!-- your car -->
<g transform="translate(40,146)">
<rect x="0" y="0" width="52" height="24" rx="7" fill="#2ecc71"/>
<rect x="9" y="4" width="34" height="10" rx="3" fill="#0e4429"/>
<circle cx="12" cy="26" r="6" fill="#000"/><circle cx="40" cy="26" r="6" fill="#000"/>
</g>
<!-- SEE callouts -->
<text x="66" y="136" text-anchor="middle" fill="#7bed9f" font-size="8" font-weight="900">তুমি — ২৫ mph</text>
<path d="M 100 158 L 200 148" stroke="#2ecc71" stroke-width="1.5" stroke-dasharray="4,3"/>
<text x="120" y="216" text-anchor="middle" fill="#f1c40f" font-size="8" font-weight="700">SEARCH: ২০-৩০ সেকেন্ড</text>
<text x="120" y="226" text-anchor="middle" fill="#ccc" font-size="7.5">সামনে স্ক্যান — বলটা দেখলে</text>
<text x="260" y="216" text-anchor="middle" fill="#f1c40f" font-size="8" font-weight="700">EVALUATE: বল মানে</text>
<text x="260" y="226" text-anchor="middle" fill="#ccc" font-size="7.5">বাচ্চা আসতে পারে</text>
<text x="390" y="216" text-anchor="middle" fill="#f1c40f" font-size="8" font-weight="700">EXECUTE: এখনই brake</text>
<text x="390" y="226" text-anchor="middle" fill="#ccc" font-size="7.5">cover + গতি কমাও</text>
<!-- stop sign ahead -->
<rect x="424" y="70" width="4" height="50" fill="#8a6d3b"/>
<polygon points="416,44 436,44 444,52 444,72 436,80 416,80 408,72 408,52" fill="#c62828" stroke="#fff" stroke-width="1.5"/>
<text x="426" y="66" text-anchor="middle" fill="#fff" font-size="10" font-weight="900">STOP</text>
<text x="396" y="96" text-anchor="middle" fill="#ccc" font-size="10">সামনে STOP — আগে থেকেই ধীরে</text>
</svg>
<div class="rt-caption">Residential মানে: ২৫ mph, parked গাড়ির ফাঁক = লুকানো বিপদ, বল/পোষা প্রাণী = বাচ্চার আগমনী সংকেত। ২৫-এ থামা যায় ~৮৫ ফুটে, ৩৫-এ লাগে ~১৩৬ ফুট</div>
</div>

<div class="rt-image">
<svg viewBox="0 0 460 240" width="100%" style="max-width:490px">
<rect x="0" y="0" width="460" height="240" fill="#111" rx="8"/>
<text x="230" y="20" text-anchor="middle" fill="#a78bfa" font-size="12" font-weight="900">দৃশ্য ৭ — FREEWAY: ramp → merge → cruise → exit</text>
<!-- freeway 2 lanes -->
<rect x="0" y="60" width="460" height="52" fill="#2a2a2a"/>
<rect x="0" y="112" width="460" height="52" fill="#2a2a2a"/>
<line x1="0" y1="112" x2="460" y2="112" stroke="#eee" stroke-width="2" stroke-dasharray="14,11" opacity=".4"/>
<!-- on ramp joining from bottom-left -->
<path d="M 0 232 Q 90 232 140 190 Q 175 164 210 154" fill="none" stroke="#2a2a2a" stroke-width="40"/>
<!-- ramp car accelerating -->
<g transform="translate(60,206)">
<rect x="0" y="0" width="48" height="22" rx="7" fill="#2ecc71" transform="rotate(-18)"/>
</g>
<text x="60" y="196" text-anchor="middle" fill="#7bed9f" font-size="8" font-weight="900">১. Ramp-এ ACCELERATE</text>
<text x="60" y="186" text-anchor="middle" fill="#7bed9f" font-size="10">— highway speed-এ ওঠো</text>
<!-- merge path -->
<path d="M 120 200 Q 180 160 240 138" fill="none" stroke="#2ecc71" stroke-width="2.5" stroke-dasharray="6,5" marker-end="url(#fwA)"/>
<defs><marker id="fwA" markerWidth="7" markerHeight="7" refX="5" refY="3.5" orient="auto"><polygon points="0,0 7,3.5 0,7" fill="#2ecc71"/></marker></defs>
<!-- gap between two traffic cars -->
<g transform="translate(150,122)"><rect x="0" y="0" width="48" height="22" rx="7" fill="#3498db"/></g>
<g transform="translate(300,122)"><rect x="0" y="0" width="48" height="22" rx="7" fill="#3498db"/></g>
<text x="250" y="118" text-anchor="middle" fill="#f1c40f" font-size="8" font-weight="700">২. GAP খুঁজো — signal + shoulder check</text>
<!-- cruising car in right lane -->
<g transform="translate(380,122)" opacity=".0"><rect width="1" height="1"/></g>
<text x="330" y="176" text-anchor="middle" fill="#ccc" font-size="7.5">৩. ডান লেনে cruise — বাম লেন শুধু passing</text>
<!-- exit ramp top right -->
<path d="M 380 60 Q 420 52 460 30" fill="none" stroke="#2a2a2a" stroke-width="34"/>
<text x="404" y="46" text-anchor="middle" fill="#7bed9f" font-size="7.5" font-weight="700">৪. EXIT: আগে ramp-এ ঢোকো,</text>
<text x="404" y="36" text-anchor="middle" fill="#7bed9f" font-size="7.5" font-weight="700">তারপর গতি কমাও</text>
<!-- exit sign -->
<rect x="330" y="34" width="44" height="20" rx="3" fill="#27ae60"/>
<text x="352" y="47" text-anchor="middle" fill="#fff" font-size="8" font-weight="900">EXIT 77</text>
<text x="230" y="228 " text-anchor="middle" fill="#888" font-size="7.5">ভুল exit মিস করলে? — কখনো freeway-তে থেমো না/পেছাবে না। পরের exit নাও, ঘুরে এসো</text>
</svg>
<div class="rt-caption">Merge-এর সূত্র: গতি মেলাও → gap → signal → shoulder check → smooth ঢোকা। Exit-এর সূত্র: আগে ramp, পরে brake — freeway-তে ধীর হওয়া নয়</div>
</div>

<div class="rt-image">
<svg viewBox="0 0 460 150" width="100%" style="max-width:490px">
<rect x="0" y="0" width="460" height="150" fill="#111" rx="8"/>
<text x="230" y="20" text-anchor="middle" fill="#a78bfa" font-size="12" font-weight="900">দৃশ্য ৮ — আবহাওয়া বদলালো: দুটো reflex</text>
<!-- left panel: rain -->
<rect x="20" y="32" width="200" height="100" rx="8" fill="#16213e"/>
<text x="120" y="52" text-anchor="middle" fill="#74b9ff" font-size="9" font-weight="900">🌧️ বৃষ্টি শুরু</text>
<text x="70" y="80" text-anchor="middle" font-size="16">🌀</text>
<text x="70" y="100" text-anchor="middle" fill="#ccc" font-size="10">wipers ON</text>
<text x="120" y="82" text-anchor="middle" fill="#f1c40f" font-size="14" font-weight="900">=</text>
<text x="170" y="80" text-anchor="middle" font-size="16">💡</text>
<text x="170" y="100" text-anchor="middle" fill="#ccc" font-size="10">headlights ON</text>
<text x="120" y="122" text-anchor="middle" fill="#ff8a80" font-size="7.5" font-weight="700">Michigan LAW — DRL যথেষ্ট নয়!</text>
<!-- right panel: distance -->
<rect x="240" y="32" width="200" height="100" rx="8" fill="#1e2a1e"/>
<text x="340" y="52" text-anchor="middle" fill="#7bed9f" font-size="9" font-weight="900">📏 দূরত্ব বাড়াও</text>
<text x="340" y="80" text-anchor="middle" fill="#ccc" font-size="9">শুকনো ৩ → বৃষ্টি ৪ → বরফ ৬+</text>
<text x="340" y="100" text-anchor="middle" fill="#ccc" font-size="7.5">গতিও কমাও — Basic Speed Law:</text>
<text x="340" y="112" text-anchor="middle" fill="#ccc" font-size="7.5">"condition অনুযায়ী নিরাপদ গতি"</text>
</svg>
<div class="rt-caption">আবহাওয়া বদলানো মাত্র দুটো কাজ automatic হওয়া চাই: wipers=lights, আর সামনের gap বড়</div>
</div>

<div class="rt-image">
<svg viewBox="0 0 460 220" width="100%" style="max-width:490px">
<rect x="0" y="0" width="460" height="220" fill="#111" rx="8"/>
<text x="230" y="20" text-anchor="middle" fill="#a78bfa" font-size="12" font-weight="900">দৃশ্য ৯ — গন্তব্যে: পার্ক, secure, নিরাপদে বের হও</text>
<!-- parking spot -->
<rect x="30" y="40" width="150" height="160" fill="#252525" rx="6"/>
<line x1="80" y1="40" x2="80" y2="200" stroke="#fff" stroke-width="2" opacity=".4"/>
<line x1="130" y1="40" x2="130" y2="200" stroke="#fff" stroke-width="2" opacity=".4"/>
<!-- car centered in spot -->
<g transform="translate(86,70)">
<rect x="0" y="0" width="38" height="90" rx="9" fill="#a78bfa"/>
<rect x="6" y="12" width="26" height="22" rx="4" fill="#4c3a75"/>
</g>
<text x="105" y="214" text-anchor="middle" fill="#ccc" font-size="10">দুই লাইনের মাঝে, wheel সোজা</text>
<!-- secure checklist -->
<rect x="200" y="40" width="240" height="106" rx="8" fill="#1c1c1c" stroke="#444" stroke-width="1.5"/>
<text x="320" y="58" text-anchor="middle" fill="#f1c40f" font-size="9" font-weight="900">SECURE — প্রতিবার, এই ক্রমে</text>
<text x="214" y="76" fill="#2ecc71" font-size="8">✓ সম্পূর্ণ থামো → গিয়ার P</text>
<text x="214" y="90" fill="#2ecc71" font-size="8">✓ Parking brake টানো</text>
<text x="214" y="104" fill="#2ecc71" font-size="8">✓ Lights/wipers OFF → engine OFF</text>
<text x="214" y="118" fill="#2ecc71" font-size="8">✓ ভুলো না: ফোন, বাচ্চা, পোষা প্রাণী!</text>
<text x="214" y="132" fill="#2ecc71" font-size="8">✓ চারপাশ দেখে দরজা খোলো → lock</text>
<!-- Dutch reach -->
<rect x="200" y="156" width="240" height="52" rx="8" fill="#1e2a3a"/>
<text x="320" y="174" text-anchor="middle" fill="#74b9ff" font-size="9" font-weight="900">🚴 DUTCH REACH — ডান হাতে দরজা খোলো</text>
<text x="320" y="188" text-anchor="middle" fill="#ccc" font-size="7.5">দূরের হাত ব্যবহারে শরীর ঘোরে — পেছনের cyclist</text>
<text x="320" y="199" text-anchor="middle" fill="#ccc" font-size="7.5">নিজে থেকেই চোখে পড়ে। "Dooring" crash বন্ধ</text>
</svg>
<div class="rt-caption">যাত্রা শেষও একটা skill: P → parking brake → সব OFF → পেছন দেখে Dutch reach-এ দরজা। যেভাবে শুরু করেছিলে (চেক করে), সেভাবেই শেষ</div>
</div>

<div class="rt-image">
<svg viewBox="0 0 460 200" width="100%" style="max-width:490px">
<rect x="0" y="0" width="460" height="200" fill="#111" rx="8"/>
<text x="230" y="20" text-anchor="middle" fill="#a78bfa" font-size="12" font-weight="900">দৃশ্য ১০ — GAS STATION: প্রথমবার তেল ভরা</text>
<!-- pump island -->
<rect x="180" y="40" width="100" height="120" rx="6" fill="#252525"/>
<rect x="210" y="52" width="40" height="70" rx="4" fill="#c62828"/>
<rect x="216" y="58" width="28" height="20" rx="2" fill="#111"/>
<text x="230" y="72" text-anchor="middle" fill="#2ecc71" font-size="10">$3.19</text>
<rect x="246" y="80" width="8" height="30" rx="3" fill="#333"/>
<!-- car at pump, tank side correct -->
<g transform="translate(300,80)">
<rect x="0" y="0" width="110" height="44" rx="10" fill="#2ecc71"/>
<rect x="16" y="6" width="76" height="18" rx="5" fill="#0e4429"/>
<circle cx="22" cy="46" r="10" fill="#000"/><circle cx="88" cy="46" r="10" fill="#000"/>
<rect x="2" y="12" width="8" height="10" rx="2" fill="#f1c40f"/>
</g>
<text x="310" y="70" text-anchor="middle" fill="#f1c40f" font-size="7.5" font-weight="700">tank-এর ঢাকনা pump-এর দিকে</text>
<!-- fuel gauge trick -->
<circle cx="80" cy="90" r="36" fill="#1a1a1a" stroke="#444" stroke-width="2"/>
<text x="80" y="76" text-anchor="middle" fill="#ccc" font-size="10">FUEL</text>
<text x="56" y="102" text-anchor="middle" fill="#e74c3c" font-size="8">E</text>
<text x="104" y="102" text-anchor="middle" fill="#2ecc71" font-size="8">F</text>
<line x1="80" y1="94" x2="66" y2="78" stroke="#e74c3c" stroke-width="2.5"/>
<text x="80" y="112" text-anchor="middle" fill="#f1c40f" font-size="9" font-weight="900">⛽ ◀</text>
<text x="80" y="146" text-anchor="middle" fill="#f1c40f" font-size="7.5" font-weight="700">gauge-এর তীর = tank কোন পাশে!</text>
<text x="80" y="157" text-anchor="middle" fill="#ccc" font-size="10">(প্রতিটা গাড়িতে আছে — দেখো)</text>
<!-- rules -->
<text x="230" y="178" text-anchor="middle" fill="#ff8a80" font-size="8" font-weight="700">Engine OFF ✓ · ফোন pocket-এ ✓ · ধূমপান নিষেধ ✓ · click-এর পর "top off" নয় ✓</text>
<text x="230" y="192" text-anchor="middle" fill="#888" font-size="10">¼ tank-এর নিচে নামার আগেই ভরো — শীতে অর্ধেকের নিচে নামিও না (fuel line জমে)</text>
</svg>
<div class="rt-caption">প্রথম solo কাজগুলোর একটা। Pump-এ ঢোকার আগে fuel gauge-এর ছোট তীরটা দেখো — কোন পাশে tank বলে দেয়। ভুল পাশে দাঁড়ানো নতুন driver-দের ক্লাসিক ভুল</div>
</div>

<div class="rt-image">
<svg viewBox="0 0 460 230" width="100%" style="max-width:490px">
<rect x="0" y="0" width="460" height="230" fill="#111" rx="8"/>
<text x="230" y="20" text-anchor="middle" fill="#a78bfa" font-size="12" font-weight="900">দৃশ্য ১১ — Unprotected বাম মোড়ের অপেক্ষা: চাকা সোজা!</text>
<!-- left panel: wrong (wheels turned) -->
<rect x="18" y="34" width="206" height="168" rx="8" fill="#2a1618"/>
<text x="121" y="52" text-anchor="middle" fill="#e74c3c" font-size="10" font-weight="900">❌ চাকা বামে ঘোরানো</text>
<rect x="60" y="60" width="120" height="130" fill="#2a2a2a"/>
<line x1="120" y1="60" x2="120" y2="190" stroke="#f1c40f" stroke-width="2" opacity=".5"/>
<!-- waiting car wheels turned -->
<g transform="rotate(-14 150 150)"><rect x="136" y="120" width="26" height="50" rx="7" fill="#e74c3c"/></g>
<!-- rear-end impact arrow -->
<path d="M 150 196 L 150 176" stroke="#fff" stroke-width="3" marker-end="url(#ulA)"/>
<text x="150" y="210" text-anchor="middle" fill="#fff" font-size="10">পেছন থেকে ধাক্কা 💥</text>
<!-- pushed into oncoming -->
<path d="M 138 118 Q 120 96 100 84" stroke="#e74c3c" stroke-width="2.5" stroke-dasharray="5,4" marker-end="url(#ulB)"/>
<g transform="translate(70,62)"><rect x="0" y="0" width="26" height="46" rx="7" fill="#3498db"/></g>
<text x="83" y="126" text-anchor="middle" fill="#ff8a80" font-size="10" font-weight="900">oncoming-এর</text>
<text x="83" y="136" text-anchor="middle" fill="#ff8a80" font-size="10" font-weight="900">মুখে ঠেলে দেয়!</text>
<!-- right panel: correct -->
<rect x="236" y="34" width="206" height="168" rx="8" fill="#16241a"/>
<text x="339" y="52" text-anchor="middle" fill="#2ecc71" font-size="10" font-weight="900">✅ চাকা সোজা</text>
<rect x="278" y="60" width="120" height="130" fill="#2a2a2a"/>
<line x1="338" y1="60" x2="338" y2="190" stroke="#f1c40f" stroke-width="2" opacity=".5"/>
<g transform="translate(354,120)"><rect x="0" y="0" width="26" height="50" rx="7" fill="#2ecc71"/></g>
<path d="M 367 196 L 367 176" stroke="#fff" stroke-width="3" marker-end="url(#ulA)"/>
<text x="367" y="210" text-anchor="middle" fill="#fff" font-size="10">একই ধাক্কা 💥</text>
<!-- pushed straight -->
<path d="M 367 116 L 367 76" stroke="#2ecc71" stroke-width="2.5" stroke-dasharray="5,4" marker-end="url(#ulC)"/>
<text x="415" y="100" text-anchor="middle" fill="#7bed9f" font-size="10" font-weight="900">সোজা সামনে —</text>
<text x="415" y="110" text-anchor="middle" fill="#7bed9f" font-size="10" font-weight="900">lane-এই থাকো</text>
<defs>
<marker id="ulA" markerWidth="7" markerHeight="7" refX="5" refY="3.5" orient="auto"><polygon points="0,0 7,3.5 0,7" fill="#fff"/></marker>
<marker id="ulB" markerWidth="7" markerHeight="7" refX="5" refY="3.5" orient="auto"><polygon points="0,0 7,3.5 0,7" fill="#e74c3c"/></marker>
<marker id="ulC" markerWidth="7" markerHeight="7" refX="5" refY="3.5" orient="auto"><polygon points="0,0 7,3.5 0,7" fill="#2ecc71"/></marker>
</defs>
<text x="230" y="222" text-anchor="middle" fill="#f1c40f" font-size="8" font-weight="700">অপেক্ষার নিয়ম: intersection-এ ঢুকে থাকো, signal on, চাকা সোজা, ২-১টা গাড়ির gap-এর জন্য ধৈর্য</text>
</svg>
<div class="rt-caption">জীবন বাঁচানো ছোট্ট অভ্যাস: বাম মোড়ের অপেক্ষায় চাকা সোজা রাখো। ঘোরানো চাকায় পেছনের ধাক্কা তোমাকে সরাসরি oncoming ট্রাফিকের মুখে ঠেলে দেয়</div>
</div>

<div class="rt-image">
<svg viewBox="0 0 460 240" width="100%" style="max-width:490px">
<rect x="0" y="0" width="460" height="240" fill="#111" rx="8"/>
<text x="230" y="20" text-anchor="middle" fill="#a78bfa" font-size="12" font-weight="900">দৃশ্য ১২ — SCHOOL BUS থামলো: কে থামবে, কে যাবে?</text>
<!-- top: undivided road -->
<rect x="20" y="36" width="420" height="80" fill="#2a2a2a" rx="4"/>
<line x1="20" y1="76" x2="440" y2="76" stroke="#f1c40f" stroke-width="2.5" opacity=".7"/>
<text x="60" y="50" fill="#888" font-size="10">সাধারণ রাস্তা (painted line)</text>
<!-- bus -->
<g transform="translate(200,80)">
<rect x="0" y="0" width="90" height="30" rx="6" fill="#f1c40f"/>
<rect x="6" y="5" width="14" height="10" fill="#333"/><rect x="24" y="5" width="14" height="10" fill="#333"/><rect x="42" y="5" width="14" height="10" fill="#333"/>
<circle cx="16" cy="32" r="6" fill="#000"/><circle cx="74" cy="32" r="6" fill="#000"/>
<circle cx="4" cy="-4" r="4" fill="#e74c3c"><animate attributeName="opacity" values="1;.2;1" dur=".7s" repeatCount="indefinite"/></circle>
<circle cx="86" cy="-4" r="4" fill="#e74c3c"><animate attributeName="opacity" values=".2;1;.2" dur=".7s" repeatCount="indefinite"/></circle>
<polygon points="-14,8 -2,8 -2,22 -14,22" fill="#c62828"/><text x="-8" y="18" text-anchor="middle" fill="#fff" font-size="10" font-weight="900">STOP</text>
</g>
<text x="245" y="130" text-anchor="middle" fill="#f1c40f" font-size="7.5" font-weight="700">লাল আলো + STOP arm</text>
<!-- child crossing -->
<text x="180" y="72" font-size="12">🧒</text>
<!-- both directions stopped -->
<g transform="translate(80,84)"><rect x="0" y="0" width="44" height="22" rx="6" fill="#2ecc71"/></g>
<text x="102" y="126" text-anchor="middle" fill="#7bed9f" font-size="8" font-weight="900">তুমি: থামো ✋</text>
<g transform="translate(330,46)"><rect x="0" y="0" width="44" height="22" rx="6" fill="#2ecc71"/></g>
<text x="352" y="42" text-anchor="middle" fill="#7bed9f" font-size="8" font-weight="900">বিপরীত দিক: থামো ✋</text>
<!-- bottom: divided road -->
<rect x="20" y="146" width="420" height="80" fill="#2a2a2a" rx="4"/>
<rect x="20" y="180" width="420" height="12" fill="#1e3a1e"/>
<text x="60" y="160" fill="#888" font-size="10">Divided রাস্তা (concrete/ঘাসের median)</text>
<g transform="translate(200,196)">
<rect x="0" y="0" width="90" height="26" rx="6" fill="#f1c40f"/>
<circle cx="4" cy="-4" r="4" fill="#e74c3c"/>
</g>
<g transform="translate(80,198)"><rect x="0" y="0" width="44" height="20" rx="6" fill="#2ecc71"/></g>
<text x="102" y="236" text-anchor="middle" fill="#7bed9f" font-size="8" font-weight="900">বাসের দিক: থামো ✋</text>
<g transform="translate(330,152)"><rect x="0" y="0" width="44" height="20" rx="6" fill="#3498db"/></g>
<path d="M 326 162 L 296 162" stroke="#3498db" stroke-width="2" marker-end="url(#sbA)"/>
<defs><marker id="sbA" markerWidth="6" markerHeight="6" refX="4" refY="3" orient="auto"><polygon points="0,0 6,3 0,6" fill="#3498db"/></marker></defs>
<text x="352" y="148" text-anchor="middle" fill="#74b9ff" font-size="8" font-weight="900">বিপরীত দিক: যেতে পারে ✓</text>
</svg>
<div class="rt-caption">Painted line = দুই দিকই থামে। Physical median = শুধু বাসের দিক থামে। ভুল করলে $৫০০+ জরিমানা — কিন্তু আসল কারণ: বাসের সামনে-পেছনে যেকোনো মুহূর্তে বাচ্চা</div>
</div>

<div class="rt-image">
<svg viewBox="0 0 460 220" width="100%" style="max-width:490px">
<rect x="0" y="0" width="460" height="220" fill="#111" rx="8"/>
<text x="230" y="20" text-anchor="middle" fill="#a78bfa" font-size="12" font-weight="900">দৃশ্য ১৩ — RAILROAD CROSSING: gate নামছে</text>
<!-- tracks vertical right side -->
<rect x="330" y="30" width="34" height="190" fill="#1c1c1c"/>
<line x1="338" y1="30" x2="338" y2="220" stroke="#777" stroke-width="3"/>
<line x1="356" y1="30" x2="356" y2="220" stroke="#777" stroke-width="3"/>
<g stroke="#555" stroke-width="4">
<line x1="332" y1="46" x2="362" y2="46"/><line x1="332" y1="72" x2="362" y2="72"/><line x1="332" y1="98" x2="362" y2="98"/><line x1="332" y1="124" x2="362" y2="124"/><line x1="332" y1="150" x2="362" y2="150"/><line x1="332" y1="176" x2="362" y2="176"/><line x1="332" y1="202" x2="362" y2="202"/>
</g>
<!-- second track -->
<rect x="376" y="30" width="34" height="190" fill="#1c1c1c"/>
<line x1="384" y1="30" x2="384" y2="220" stroke="#777" stroke-width="3"/>
<line x1="402" y1="30" x2="402" y2="220" stroke="#777" stroke-width="3"/>
<text x="394" y="26" text-anchor="middle" fill="#ff8a80" font-size="10" font-weight="700">২য় track!</text>
<!-- road horizontal -->
<rect x="0" y="120" width="330" height="56" fill="#2a2a2a"/>
<rect x="410" y="120" width="50" height="56" fill="#2a2a2a"/>
<!-- crossbuck + lights + gate -->
<rect x="296" y="60" width="5" height="60" fill="#8a6d3b"/>
<g transform="rotate(45 298 52)"><rect x="278" y="47" width="40" height="9" rx="2" fill="#fff"/></g>
<g transform="rotate(-45 298 52)"><rect x="278" y="47" width="40" height="9" rx="2" fill="#fff"/></g>
<circle cx="288" cy="86" r="6" fill="#e74c3c"><animate attributeName="opacity" values="1;.15;1" dur=".8s" repeatCount="indefinite"/></circle>
<circle cx="308" cy="86" r="6" fill="#e74c3c"><animate attributeName="opacity" values=".15;1;.15" dur=".8s" repeatCount="indefinite"/></circle>
<!-- gate arm coming down across road -->
<g transform="rotate(-24 300 108)"><rect x="200" y="104" width="100" height="7" rx="3" fill="#fff"/><rect x="210" y="104" width="16" height="7" fill="#c62828"/><rect x="242" y="104" width="16" height="7" fill="#c62828"/><rect x="274" y="104" width="16" height="7" fill="#c62828"/></g>
<!-- stopped car at proper distance -->
<g transform="translate(190,132)">
<rect x="0" y="0" width="52" height="24" rx="7" fill="#2ecc71"/>
<rect x="9" y="4" width="34" height="10" rx="3" fill="#0e4429"/>
<circle cx="12" cy="26" r="6" fill="#000"/><circle cx="40" cy="26" r="6" fill="#000"/>
</g>
<text x="216" y="172" text-anchor="middle" fill="#7bed9f" font-size="7.5" font-weight="700">১৫-৫০ ফুট দূরে থামো —</text>
<text x="216" y="182" text-anchor="middle" fill="#7bed9f" font-size="7.5" font-weight="700">gate-এর নিচে কখনো নয়</text>
<!-- train coming -->
<g transform="translate(336,36)">
<rect x="0" y="0" width="22" height="44" rx="5" fill="#c0392b"/>
<circle cx="11" cy="10" r="5" fill="#fff59d"/>
</g>
<text x="290" y="46" text-anchor="middle" fill="#ff8a80" font-size="10" font-weight="700">🚆 ট্রেন — দেখতে যত দূরে,</text>
<text x="290" y="56" text-anchor="middle" fill="#ff8a80" font-size="10" font-weight="700">আসলে তার চেয়ে কাছে ও দ্রুত!</text>
<!-- rules -->
<text x="120" y="202" text-anchor="middle" fill="#f1c40f" font-size="7.5" font-weight="700">এক ট্রেন গেল ≠ নিরাপদ — ২য় track-এ আরেকটা</text>
<text x="120" y="212" text-anchor="middle" fill="#f1c40f" font-size="7.5" font-weight="700">আসতে পারে। Gate পুরো ওঠা পর্যন্ত অপেক্ষা</text>
<text x="120" y="98" text-anchor="middle" fill="#ff8a80" font-size="7.5" font-weight="900">Track-এ আটকে গেলে: সবাই বেরোও, ট্রেনের</text>
<text x="120" y="108" text-anchor="middle" fill="#ff8a80" font-size="7.5" font-weight="900">দিকে কোণাকুণি দৌড়াও (ধ্বংসাবশেষ পেছনে ছোটে)</text>
</svg>
<div class="rt-caption">কখনো gate-এর ফাঁক দিয়ে ঢুকো না, কখনো track-এর উপর থেমো না — সামনের জায়গা নিশ্চিত না হলে crossing-এ ঢুকোই না</div>
</div>

<div class="rt-image">
<svg viewBox="0 0 460 210" width="100%" style="max-width:490px">
<rect x="0" y="0" width="460" height="210" fill="#111" rx="8"/>
<text x="230" y="20" text-anchor="middle" fill="#a78bfa" font-size="12" font-weight="900">দৃশ্য ১৪ — শীতের সকাল: বরফ পরিষ্কার + snowplow</text>
<!-- left: snow covered car -->
<rect x="20" y="34" width="200" height="166" rx="8" fill="#16213e"/>
<g transform="translate(50,90)">
<rect x="0" y="0" width="140" height="50" rx="12" fill="#3d3d3d"/>
<rect x="20" y="8" width="100" height="24" rx="5" fill="#222"/>
<path d="M -4 2 Q 70 -22 144 2 L 144 10 Q 70 -12 -4 10 Z" fill="#e8f4ff"/>
<rect x="18" y="4" width="104" height="10" rx="4" fill="#e8f4ff" opacity=".9"/>
<circle cx="24" cy="52" r="10" fill="#000"/><circle cx="116" cy="52" r="10" fill="#000"/>
</g>
<text x="120" y="62" text-anchor="middle" fill="#a8d8ff" font-size="9" font-weight="900">সব পরিষ্কার করো — শুধু ছোট গর্ত নয়!</text>
<text x="120" y="76" text-anchor="middle" fill="#ccc" font-size="10">windshield ✓ সব জানালা ✓ mirror ✓</text>
<text x="120" y="160" text-anchor="middle" fill="#ccc" font-size="10">lights ✓ plate ✓ ছাদ ✓ (ছাদের বরফ উড়ে</text>
<text x="120" y="171" text-anchor="middle" fill="#ccc" font-size="10">পেছনের গাড়িতে পড়ে — ticket হতে পারে)</text>
<text x="120" y="190" text-anchor="middle" fill="#f1c40f" font-size="7.5" font-weight="700">Defroster আগে চালু করো — ৫ মিনিট আগে বেরোও</text>
<!-- right: snowplow -->
<rect x="240" y="34" width="200" height="166" rx="8" fill="#1a2430"/>
<rect x="250" y="120" width="180" height="40" fill="#2a2a2a"/>
<!-- plow truck -->
<g transform="translate(330,126)">
<rect x="0" y="0" width="60" height="28" rx="5" fill="#e67e22"/>
<polygon points="60,2 82,10 82,24 60,26" fill="#95a5a6"/>
<circle cx="14" cy="30" r="7" fill="#000"/><circle cx="48" cy="30" r="7" fill="#000"/>
<circle cx="8" cy="-5" r="4" fill="#f1c40f"><animate attributeName="opacity" values="1;.2;1" dur="1s" repeatCount="indefinite"/></circle>
</g>
<!-- snow spray -->
<text x="415" y="130" font-size="10" opacity=".8">❄️❄️</text>
<!-- your car behind, keeping distance -->
<g transform="translate(258,130)"><rect x="0" y="0" width="40" height="20" rx="6" fill="#2ecc71"/></g>
<text x="340" y="62" text-anchor="middle" fill="#f8c471" font-size="9" font-weight="900">"Don't crowd the plow!"</text>
<text x="340" y="78" text-anchor="middle" fill="#ccc" font-size="10">plow-এর পেছনে অনেক দূরে থাকো —</text>
<text x="340" y="89" text-anchor="middle" fill="#ccc" font-size="10">সামনে ঘন তুষার-মেঘ, wing দুই পাশে ছড়ানো</text>
<text x="340" y="104" text-anchor="middle" fill="#ff8a80" font-size="7.5" font-weight="700">ডান দিক দিয়ে কখনো পাস কোরো না</text>
<text x="340" y="180" text-anchor="middle" fill="#7bed9f" font-size="7.5" font-weight="700">Plow-এর পেছনের রাস্তা = পরিষ্কার + লবণ দেওয়া —</text>
<text x="340" y="191" text-anchor="middle" fill="#7bed9f" font-size="7.5" font-weight="700">ধৈর্য ধরে পেছনে থাকাই দ্রুততম নিরাপদ পথ</text>
</svg>
<div class="rt-caption">Michigan-এর শীতের দুই ritual: বেরোনোর আগে গাড়ির সব বরফ (peephole driving = বিপজ্জনক + ticket), আর রাস্তায় plow দেখলে — পেছনে, দূরে, ধৈর্যে</div>
</div>

<div class="rt-image">
<svg viewBox="0 0 460 210" width="100%" style="max-width:490px">
<rect x="0" y="0" width="460" height="210" fill="#111" rx="8"/>
<text x="230" y="20" text-anchor="middle" fill="#a78bfa" font-size="12" font-weight="900">দৃশ্য ১৫ — FREEWAY-তে গাড়ি নষ্ট: কী করবে, কোথায় দাঁড়াবে</text>
<!-- freeway -->
<rect x="0" y="40" width="460" height="80" fill="#2a2a2a"/>
<line x1="0" y1="80" x2="460" y2="80" stroke="#eee" stroke-width="2" stroke-dasharray="14,11" opacity=".35"/>
<rect x="0" y="120" width="460" height="8" fill="#fff" opacity=".6"/>
<rect x="0" y="128" width="460" height="60" fill="#222"/>
<!-- traffic passing -->
<g transform="translate(60,50)"><rect x="0" y="0" width="46" height="22" rx="7" fill="#3498db"/></g>
<g transform="translate(220,90)"><rect x="0" y="0" width="46" height="22" rx="7" fill="#95a5a6"/></g>
<!-- broken car far right on shoulder -->
<g transform="translate(290,142)">
<rect x="0" y="0" width="56" height="26" rx="8" fill="#e74c3c"/>
<rect x="10" y="4" width="36" height="11" rx="3" fill="#8e2020"/>
<circle cx="13" cy="28" r="7" fill="#000"/><circle cx="43" cy="28" r="7" fill="#000"/>
<circle cx="4" cy="6" r="3" fill="#f1c40f"><animate attributeName="opacity" values="1;.2;1" dur=".6s" repeatCount="indefinite"/></circle>
<circle cx="52" cy="6" r="3" fill="#f1c40f"><animate attributeName="opacity" values="1;.2;1" dur=".6s" repeatCount="indefinite"/></circle>
<text x="28" y="42" text-anchor="middle" font-size="8">💨</text>
</g>
<text x="318" y="200" text-anchor="middle" fill="#ff8a80" font-size="7.5" font-weight="700">যত ডানে সম্ভব — hazard ⚠ জ্বালাও</text>
<!-- people behind barrier -->
<rect x="380" y="150" width="70" height="6" fill="#666"/>
<text x="412" y="172" font-size="11">🧍🧍</text>
<text x="412" y="186" text-anchor="middle" fill="#7bed9f" font-size="10" font-weight="700">barrier-এর পেছনে,</text>
<text x="412" y="196" text-anchor="middle" fill="#7bed9f" font-size="10" font-weight="700">গাড়ি থেকে দূরে</text>
<!-- exit passenger side arrow -->
<path d="M 342 152 Q 368 148 388 158" fill="none" stroke="#2ecc71" stroke-width="2" stroke-dasharray="4,3" marker-end="url(#bdA)"/>
<defs><marker id="bdA" markerWidth="6" markerHeight="6" refX="4" refY="3" orient="auto"><polygon points="0,0 6,3 0,6" fill="#2ecc71"/></marker></defs>
<text x="368" y="140" text-anchor="middle" fill="#7bed9f" font-size="10" font-weight="700">passenger দিক দিয়ে বেরোও</text>
<!-- steps -->
<text x="118" y="146" text-anchor="middle" fill="#f1c40f" font-size="8" font-weight="700">১. সমস্যা টের পাওয়া মাত্র signal দিয়ে ডানে</text>
<text x="118" y="158" text-anchor="middle" fill="#f1c40f" font-size="8" font-weight="700">২. Hazard লাইট + hood তোলো (সাহায্যের সংকেত)</text>
<text x="118" y="170" text-anchor="middle" fill="#f1c40f" font-size="8" font-weight="700">৩. ট্রাফিকের পাশে দাঁড়িও না — কখনোই</text>
<text x="118" y="182" text-anchor="middle" fill="#f1c40f" font-size="8" font-weight="700">৪. 911/roadside assistance ফোন করো</text>
<text x="230" y="34" text-anchor="middle" fill="#888" font-size="7.5">রাতে হলে: interior light জ্বালাও। গাড়িতে রাখো: flare/triangle, কম্বল, torch, jumper cable</text>
</svg>
<div class="rt-caption">Freeway breakdown-এ সবচেয়ে বড় বিপদ গাড়ি নষ্ট হওয়া নয় — পাশের ৭০ mph ট্রাফিক। গাড়ির ট্রাফিক-পাশে এক সেকেন্ডও দাঁড়িও না</div>
</div>

<div class="rt-image">
<svg viewBox="0 0 460 200" width="100%" style="max-width:490px">
<rect x="0" y="0" width="460" height="200" fill="#111" rx="8"/>
<text x="230" y="20" text-anchor="middle" fill="#a78bfa" font-size="12" font-weight="900">দৃশ্য ১৬ — AGGRESSIVE DRIVER: রাগী চালকের মোকাবিলা</text>
<!-- road -->
<rect x="0" y="60" width="460" height="90" fill="#2a2a2a"/>
<line x1="0" y1="105" x2="460" y2="105" stroke="#eee" stroke-width="2" stroke-dasharray="14,11" opacity=".35"/>
<!-- aggressive car weaving/tailgating -->
<g transform="translate(150,112)">
<rect x="0" y="0" width="50" height="24" rx="7" fill="#e74c3c"/>
<rect x="9" y="4" width="32" height="10" rx="3" fill="#8e2020"/>
</g>
<text x="175" y="152" text-anchor="middle" fill="#ff8a80" font-size="7.5" font-weight="700">গায়ে লেগে, হর্ন, flash, চিৎকার</text>
<path d="M 204 118 Q 220 100 236 118 Q 250 132 264 120" fill="none" stroke="#e74c3c" stroke-width="2" stroke-dasharray="4,3"/>
<!-- your car ahead moving right -->
<g transform="translate(280,70)">
<rect x="0" y="0" width="50" height="24" rx="7" fill="#2ecc71"/>
<rect x="9" y="4" width="32" height="10" rx="3" fill="#0e4429"/>
</g>
<path d="M 300 100 Q 310 118 330 120" fill="none" stroke="#2ecc71" stroke-width="2.5" stroke-dasharray="5,4" marker-end="url(#agA)"/>
<defs><marker id="agA" markerWidth="7" markerHeight="7" refX="5" refY="3.5" orient="auto"><polygon points="0,0 7,3.5 0,7" fill="#2ecc71"/></marker></defs>
<text x="318" y="62" text-anchor="middle" fill="#7bed9f" font-size="8" font-weight="900">তুমি: সরে যাও, যেতে দাও</text>
<!-- rules two columns -->
<text x="115" y="170" text-anchor="middle" fill="#e74c3c" font-size="8" font-weight="900">কোরো না ❌</text>
<text x="115" y="182" text-anchor="middle" fill="#ff8a80" font-size="10">eye contact · অঙ্গভঙ্গি · brake-check</text>
<text x="115" y="192" text-anchor="middle" fill="#ff8a80" font-size="10">গতি-প্রতিযোগিতা · জবাবি হর্ন</text>
<text x="345" y="170" text-anchor="middle" fill="#2ecc71" font-size="8" font-weight="900">করো ✅</text>
<text x="345" y="182" text-anchor="middle" fill="#7bed9f" font-size="10">ডানে সরে যেতে দাও · দূরত্ব বাড়াও · শান্ত শ্বাস</text>
<text x="345" y="192" text-anchor="middle" fill="#7bed9f" font-size="10">পিছু নিলে: বাসায় নয় — police station-এ যাও, 911</text>
<text x="230" y="46" text-anchor="middle" fill="#888" font-size="7.5">মনে রাখো: রাস্তায় "জেতা" বলে কিছু নেই — যে সরে যায় সে-ই জেতে</text>
</svg>
<div class="rt-caption">Road rage-এর একমাত্র জয়: engage না করা। সে তোমাকে চেনে না — এটা ব্যক্তিগত নয়। পিছু নিলে কখনো বাসায় যেও না — জনবহুল জায়গা বা police station</div>
</div>

<div class="rt-image">
<svg viewBox="0 0 460 210" width="100%" style="max-width:490px">
<rect x="0" y="0" width="460" height="210" fill="#111" rx="8"/>
<text x="230" y="20" text-anchor="middle" fill="#a78bfa" font-size="12" font-weight="900">দৃশ্য ১৭ — জ্যামে পেছনে AMBULANCE: করিডোর বানাও</text>
<!-- two lanes stopped traffic -->
<rect x="0" y="40" width="460" height="70" fill="#2a2a2a"/>
<rect x="0" y="110" width="460" height="70" fill="#2a2a2a"/>
<line x1="0" y1="110" x2="460" y2="110" stroke="#eee" stroke-width="2" stroke-dasharray="14,11" opacity=".35"/>
<!-- left lane cars moving LEFT edge -->
<g transform="translate(80,46)"><rect x="0" y="0" width="46" height="22" rx="7" fill="#95a5a6"/></g>
<g transform="translate(180,44)"><rect x="0" y="0" width="46" height="22" rx="7" fill="#3498db"/></g>
<g transform="translate(290,46)"><rect x="0" y="0" width="46" height="22" rx="7" fill="#2ecc71"/></g>
<path d="M 103 70 L 103 56 M 203 68 L 203 54 M 313 70 L 313 56" stroke="#f1c40f" stroke-width="2" marker-end="url(#ecA)"/>
<text x="200" y="36" text-anchor="middle" fill="#f1c40f" font-size="8" font-weight="700">বাম লেন → যতটা সম্ভব বামে চাপো</text>
<!-- right lane cars moving RIGHT edge -->
<g transform="translate(120,152)"><rect x="0" y="0" width="46" height="22" rx="7" fill="#e67e22"/></g>
<g transform="translate(230,154)"><rect x="0" y="0" width="46" height="22" rx="7" fill="#9b59b6"/></g>
<g transform="translate(340,152)"><rect x="0" y="0" width="46" height="22" rx="7" fill="#16a085"/></g>
<path d="M 143 150 L 143 164 M 253 152 L 253 166 M 363 150 L 363 164" stroke="#f1c40f" stroke-width="2" marker-end="url(#ecA)"/>
<defs><marker id="ecA" markerWidth="6" markerHeight="6" refX="4" refY="3" orient="auto"><polygon points="0,0 6,3 0,6" fill="#f1c40f"/></marker></defs>
<text x="253" y="192" text-anchor="middle" fill="#f1c40f" font-size="8" font-weight="700">ডান লেন → যতটা সম্ভব ডানে চাপো</text>
<!-- corridor middle -->
<rect x="0" y="96" width="460" height="28" fill="#2ecc71" opacity=".1"/>
<!-- ambulance coming through middle -->
<g transform="translate(20,98)">
<rect x="0" y="0" width="60" height="26" rx="6" fill="#fff"/>
<rect x="8" y="5" width="20" height="14" fill="#e74c3c"/>
<text x="18" y="16" text-anchor="middle" fill="#fff" font-size="9" font-weight="900">+</text>
<circle cx="52" cy="-3" r="4" fill="#e74c3c"><animate attributeName="opacity" values="1;.2;1" dur=".5s" repeatCount="indefinite"/></circle>
<circle cx="44" cy="-3" r="4" fill="#3498db"><animate attributeName="opacity" values=".2;1;.2" dur=".5s" repeatCount="indefinite"/></circle>
</g>
<path d="M 90 111 L 440 111" stroke="#2ecc71" stroke-width="2.5" stroke-dasharray="7,5" marker-end="url(#ecB)"/>
<defs><marker id="ecB" markerWidth="7" markerHeight="7" refX="5" refY="3.5" orient="auto"><polygon points="0,0 7,3.5 0,7" fill="#2ecc71"/></marker></defs>
<text x="230" y="205" text-anchor="middle" fill="#888" font-size="7.5">জ্যামে সাইরেন শুনলে আগে mirror দেখো কোথা থেকে আসছে — তারপর নিজের লেনের কিনারায় চাপো, থামো</text>
</svg>
<div class="rt-caption">থেমে থাকা জ্যামেও জায়গা করে দেওয়া যায় — বাম লেন বামে, ডান লেন ডানে = মাঝে জরুরি করিডোর। প্রতিটা সেকেন্ড কারো জীবন</div>
</div>

<div class="rt-image">
<svg viewBox="0 0 460 200" width="100%" style="max-width:490px">
<rect x="0" y="0" width="460" height="200" fill="#111" rx="8"/>
<text x="230" y="20" text-anchor="middle" fill="#a78bfa" font-size="12" font-weight="900">দৃশ্য ১৮ — CONSTRUCTION FLAGGER: মানুষই সাইন</text>
<!-- road -->
<rect x="0" y="80" width="460" height="70" fill="#2a2a2a"/>
<!-- cones taper closing right lane -->
<circle cx="240" cy="140" r="5" fill="#e67e22"/><circle cx="280" cy="132" r="5" fill="#e67e22"/><circle cx="320" cy="124" r="5" fill="#e67e22"/><circle cx="360" cy="118" r="5" fill="#e67e22"/><circle cx="400" cy="114" r="5" fill="#e67e22"/>
<!-- work zone -->
<rect x="360" y="122" width="90" height="26" fill="#e67e22" opacity=".15"/>
<text x="412" y="140" text-anchor="middle" font-size="11">🚧👷</text>
<!-- flagger -->
<g transform="translate(200,84)">
<circle cx="0" cy="0" r="8" fill="#ffd8a8"/>
<rect x="-7" y="8" width="14" height="22" rx="4" fill="#e67e22"/>
<rect x="14" y="-24" width="3" height="34" fill="#8a6d3b"/>
<polygon points="4,-30 28,-30 32,-22 28,-14 4,-14 0,-22" fill="#c62828" stroke="#fff" stroke-width="1.5"/>
<text x="16" y="-19" text-anchor="middle" fill="#fff" font-size="6.5" font-weight="900">STOP</text>
</g>
<text x="200" y="66" text-anchor="middle" fill="#f8c471" font-size="8" font-weight="900">Flagger — paddle-এর দুই পাশ:</text>
<text x="200" y="76" text-anchor="middle" fill="#ccc" font-size="10">লাল STOP / কমলা SLOW</text>
<!-- your car stopped -->
<g transform="translate(60,108)">
<rect x="0" y="0" width="52" height="24" rx="7" fill="#2ecc71"/>
<rect x="9" y="4" width="34" height="10" rx="3" fill="#0e4429"/>
<circle cx="12" cy="26" r="6" fill="#000"/><circle cx="40" cy="26" r="6" fill="#000"/>
</g>
<text x="86" y="152" text-anchor="middle" fill="#7bed9f" font-size="8" font-weight="700">Flagger-এর নির্দেশই আইন</text>
<text x="115" y="176" text-anchor="middle" fill="#f1c40f" font-size="7.5" font-weight="700">Flagger যা বলে তা-ই করো — এমনকি signal/সাইনের</text>
<text x="115" y="187" text-anchor="middle" fill="#f1c40f" font-size="7.5" font-weight="700">সাথে না মিললেও। ক্রম: Police > Flagger > Signal > Sign</text>
<text x="345" y="176" text-anchor="middle" fill="#ff8a80" font-size="7.5" font-weight="700">Flagger অমান্য/worker আহত = বড় fine</text>
<text x="345" y="187" text-anchor="middle" fill="#ff8a80" font-size="7.5" font-weight="700">+ jail পর্যন্ত। ধৈর্য — এরা কারো মা-বাবা</text>
</svg>
<div class="rt-caption">অগ্রাধিকারের ক্রম মুখস্থ: মানুষের নির্দেশ (police/flagger) সবসময় বাতি ও সাইনের উপরে। Flagger STOP দেখালে সবুজ বাতিতেও থামো</div>
</div>

<div class="rt-image">
<svg viewBox="0 0 460 220" width="100%" style="max-width:490px">
<rect x="0" y="0" width="460" height="220" fill="#111" rx="8"/>
<text x="230" y="20" text-anchor="middle" fill="#a78bfa" font-size="12" font-weight="900">দৃশ্য ১৯ — PARKING LOT: ছোট গতির বড় বিপদ</text>
<!-- lot -->
<rect x="20" y="34" width="420" height="170" fill="#252525" rx="6"/>
<!-- parking rows top and bottom -->
<g stroke="#fff" stroke-width="1.5" opacity=".4">
<line x1="60" y1="34" x2="60" y2="78"/><line x1="110" y1="34" x2="110" y2="78"/><line x1="160" y1="34" x2="160" y2="78"/><line x1="210" y1="34" x2="210" y2="78"/><line x1="260" y1="34" x2="260" y2="78"/><line x1="310" y1="34" x2="310" y2="78"/><line x1="360" y1="34" x2="360" y2="78"/>
<line x1="60" y1="160" x2="60" y2="204"/><line x1="110" y1="160" x2="110" y2="204"/><line x1="160" y1="160" x2="160" y2="204"/><line x1="210" y1="160" x2="210" y2="204"/><line x1="260" y1="160" x2="260" y2="204"/><line x1="310" y1="160" x2="310" y2="204"/><line x1="360" y1="160" x2="360" y2="204"/>
</g>
<!-- parked cars top row -->
<g transform="translate(66,40)"><rect x="0" y="0" width="38" height="34" rx="6" fill="#555"/></g>
<g transform="translate(116,40)"><rect x="0" y="0" width="38" height="34" rx="6" fill="#666"/></g>
<!-- backing car with reverse lights -->
<g transform="translate(216,40)">
<rect x="0" y="0" width="38" height="34" rx="6" fill="#e74c3c"/>
<rect x="4" y="30" width="8" height="5" rx="2" fill="#fff"/><rect x="26" y="30" width="8" height="5" rx="2" fill="#fff"/>
</g>
<path d="M 235 80 L 235 100" stroke="#e74c3c" stroke-width="2" stroke-dasharray="4,3" marker-end="url(#plA)"/>
<defs><marker id="plA" markerWidth="6" markerHeight="6" refX="4" refY="3" orient="auto"><polygon points="0,0 6,3 0,6" fill="#e74c3c"/></marker></defs>
<text x="235" y="30" text-anchor="middle" fill="#ff8a80" font-size="7.5" font-weight="900">⚠️ সাদা reverse light = বেরোচ্ছে!</text>
<!-- pedestrian with cart -->
<text x="150" y="128" font-size="12">🚶🛒</text>
<!-- kid running -->
<text x="330" y="128" font-size="11">🏃</text>
<text x="330" y="146" text-anchor="middle" fill="#ff8a80" font-size="10">বাচ্চা — গাড়ির ফাঁকে অদৃশ্য</text>
<!-- your car driving lane -->
<g transform="translate(40,106)">
<rect x="0" y="0" width="46" height="22" rx="7" fill="#2ecc71"/>
<rect x="8" y="3" width="30" height="10" rx="3" fill="#0e4429"/>
</g>
<text x="63" y="146" text-anchor="middle" fill="#7bed9f" font-size="7.5" font-weight="700">≤ 10 mph, brake cover</text>
<!-- pull-through spot -->
<g transform="translate(316,166)"><rect x="0" y="0" width="38" height="34" rx="6" fill="#2ecc71" opacity=".35" stroke="#2ecc71" stroke-width="1.5" stroke-dasharray="4,3"/></g>
<path d="M 335 160 L 335 138" stroke="#2ecc71" stroke-width="2" stroke-dasharray="4,3" marker-end="url(#plB)"/>
<defs><marker id="plB" markerWidth="6" markerHeight="6" refX="4" refY="3" orient="auto"><polygon points="0,0 6,3 0,6" fill="#2ecc71"/></marker></defs>
<text x="390" y="214" text-anchor="middle" fill="#7bed9f" font-size="10" font-weight="700">সেরা কৌশল: pull-through/back-in —</text>
<text x="230" y="214" text-anchor="middle" fill="#888" font-size="10"> </text>
<text x="120" y="214" text-anchor="middle" fill="#888" font-size="10">এক-পঞ্চমাংশ crash হয় parking lot-এ</text>
</svg>
<div class="rt-caption">Parking lot-এ সবাই অমনোযোগী — ফোনে, তাড়াহুড়োয়, reverse-এ। তুমি ধীরে (≤10), reverse light-এ চোখ, lane-এর মাঝ দিয়ে হাঁটা মানুষকে জায়গা। বের হওয়ার সুবিধায় pull-through spot নাও</div>
</div>

<div class="rt-image">
<svg viewBox="0 0 460 190" width="100%" style="max-width:490px">
<rect x="0" y="0" width="460" height="190" fill="#111" rx="8"/>
<text x="230" y="20" text-anchor="middle" fill="#a78bfa" font-size="12" font-weight="900">দৃশ্য ২০ — FOG: কুয়াশায় আলোর নিয়ম উল্টো</text>
<!-- left: high beam wrong -->
<rect x="18" y="34" width="206" height="126" rx="8" fill="#1a1a24"/>
<text x="121" y="52" text-anchor="middle" fill="#e74c3c" font-size="9" font-weight="900">❌ HIGH BEAM</text>
<rect x="30" y="60" width="182" height="90" fill="#9aa5b1" opacity=".25" rx="5"/>
<g transform="translate(36,110)"><rect x="0" y="0" width="44" height="22" rx="7" fill="#e74c3c"/></g>
<path d="M 82 114 L 130 100 M 82 122 L 130 136" stroke="#fff59d" stroke-width="3" opacity=".9"/>
<path d="M 132 100 L 100 112 M 132 136 L 100 124" stroke="#fff59d" stroke-width="2" stroke-dasharray="4,3" opacity=".7"/>
<text x="160" y="90 " text-anchor="middle" fill="#ff8a80" font-size="7.5" font-weight="700">আলো কুয়াশায় ধাক্কা খেয়ে</text>
<text x="160" y="100" text-anchor="middle" fill="#ff8a80" font-size="7.5" font-weight="700">চোখে ফেরত — সাদা দেয়াল!</text>
<!-- right: low beam correct -->
<rect x="236" y="34" width="206" height="126" rx="8" fill="#1a1a24"/>
<text x="339" y="52" text-anchor="middle" fill="#2ecc71" font-size="9" font-weight="900">✅ LOW BEAM (+fog light)</text>
<rect x="248" y="60" width="182" height="90" fill="#9aa5b1" opacity=".25" rx="5"/>
<g transform="translate(254,110)"><rect x="0" y="0" width="44" height="22" rx="7" fill="#2ecc71"/></g>
<path d="M 300 122 L 360 138 M 300 118 L 348 126" stroke="#fff59d" stroke-width="3" opacity=".9"/>
<line x1="248" y1="148" x2="430" y2="148" stroke="#fff" stroke-width="3" opacity=".7"/>
<text x="378" y="106" text-anchor="middle" fill="#7bed9f" font-size="7.5" font-weight="700">নিচু আলো কুয়াশার নিচ</text>
<text x="378" y="116" text-anchor="middle" fill="#7bed9f" font-size="7.5" font-weight="700">দিয়ে রাস্তায় পড়ে</text>
<text x="339" y="158" text-anchor="middle" fill="#ccc" font-size="10">ডান কিনারার সাদা লাইন = তোমার guide</text>
<text x="230" y="178" text-anchor="middle" fill="#f1c40f" font-size="8" font-weight="700">খুব ঘন? — রাস্তা থেকে সম্পূর্ণ বাইরে গিয়ে থামো, hazard জ্বালাও। চলন্ত লেনে কখনো থেমো না!</text>
</svg>
<div class="rt-caption">কুয়াশায় instinct বলে "বেশি আলো" — বিজ্ঞান বলে উল্টো। Low beam + ধীর গতি + ডান কিনারার লাইন ধরে। সামনের আলো হঠাৎ দেখা মানে সে অনেক কাছে</div>
</div>

<div class="rt-image">
<svg viewBox="0 0 460 190" width="100%" style="max-width:490px">
<rect x="0" y="0" width="460" height="190" fill="#111" rx="8"/>
<text x="230" y="20" text-anchor="middle" fill="#a78bfa" font-size="12" font-weight="900">দৃশ্য ২১ — POTHOLE SEASON: মিশিগানের বসন্ত</text>
<!-- road -->
<rect x="0" y="70" width="460" height="80" fill="#2a2a2a"/>
<line x1="0" y1="110" x2="460" y2="110" stroke="#f1c40f" stroke-width="2" stroke-dasharray="14,11" opacity=".5"/>
<!-- potholes -->
<ellipse cx="250" cy="130" rx="24" ry="10" fill="#0a0a0a" stroke="#444" stroke-width="2"/>
<ellipse cx="360" cy="92" rx="18" ry="8" fill="#16324a" stroke="#444" stroke-width="2"/>
<text x="360" y="78" text-anchor="middle" fill="#74b9ff" font-size="10" font-weight="700">পানি ভরা = গভীরতা অজানা!</text>
<!-- your car -->
<g transform="translate(50,118)">
<rect x="0" y="0" width="52" height="24" rx="7" fill="#2ecc71"/>
<rect x="9" y="4" width="34" height="10" rx="3" fill="#0e4429"/>
<circle cx="12" cy="26" r="6" fill="#000"/><circle cx="40" cy="26" r="6" fill="#000"/>
</g>
<!-- safe response path: slow, straight over -->
<path d="M 106 130 L 210 130" stroke="#2ecc71" stroke-width="2.5" stroke-dasharray="6,5" marker-end="url(#phA)"/>
<defs><marker id="phA" markerWidth="7" markerHeight="7" refX="5" refY="3.5" orient="auto"><polygon points="0,0 7,3.5 0,7" fill="#2ecc71"/></marker></defs>
<!-- wrong swerve path crossed out -->
<path d="M 140 128 Q 180 96 220 100" stroke="#e74c3c" stroke-width="2" stroke-dasharray="5,4" opacity=".8"/>
<line x1="170" y1="90 " x2="196" y2="116" stroke="#e74c3c" stroke-width="3"/>
<line x1="196" y1="90" x2="170" y2="116" stroke="#e74c3c" stroke-width="3"/>
<text x="150" y="86" text-anchor="middle" fill="#ff8a80" font-size="7.5" font-weight="700">হঠাৎ swerve নয় —</text>
<text x="150" y="96" text-anchor="middle" fill="#ff8a80" font-size="7.5" font-weight="700">পাশের লেনে গাড়ি!</text>
<!-- steps -->
<text x="115" y="166" text-anchor="middle" fill="#f1c40f" font-size="7.5" font-weight="700">১. আগে দেখো (SEE) → ধীরে</text>
<text x="115" y="177" text-anchor="middle" fill="#f1c40f" font-size="7.5" font-weight="700">২. এড়ানো গেলে — mirror দেখে, ধীরে সরো</text>
<text x="345" y="166" text-anchor="middle" fill="#f1c40f" font-size="7.5" font-weight="700">৩. না গেলে — brake ছেড়ে সোজা roll করো</text>
<text x="345" y="177" text-anchor="middle" fill="#f1c40f" font-size="7.5" font-weight="700">(brake চেপে পড়লে আঘাত বেশি হয়)</text>
<text x="230" y="46" text-anchor="middle" fill="#888" font-size="7.5">ফেব্রু-এপ্রিল = freeze-thaw = pothole season। জোরে লাগলে পরে থেমে tire/rim চেক করো</text>
</svg>
<div class="rt-caption">Michigan-এর পঞ্চম ঋতু। নিয়ম: swerve করে পাশের গাড়িতে ধাক্কা &gt; pothole-এর ক্ষতি। ধীরে, সোজা, brake ছেড়ে — আর পানি-ভরা গর্তকে সম্মান করো</div>
</div>

<div class="rt-image">
<svg viewBox="0 0 460 180" width="100%" style="max-width:490px">
<rect x="0" y="0" width="460" height="180" fill="#111" rx="8"/>
<text x="230" y="20" text-anchor="middle" fill="#a78bfa" font-size="12" font-weight="900">দৃশ্য ২২ — FUNERAL PROCESSION: থামো, সম্মান দাও</text>
<!-- road -->
<rect x="0" y="60" width="460" height="90" fill="#2a2a2a"/>
<line x1="0" y1="105" x2="460" y2="105" stroke="#f1c40f" stroke-width="2" stroke-dasharray="14,11" opacity=".4"/>
<!-- procession: hearse + cars with lights & flags -->
<g transform="translate(300,68)">
<rect x="0" y="0" width="64" height="28" rx="7" fill="#1a1a1a" stroke="#555" stroke-width="1.5"/>
<circle cx="58" cy="8" r="3" fill="#fff59d"/>
<text x="30" y="19" text-anchor="middle" fill="#888" font-size="10">HEARSE</text>
</g>
<g transform="translate(210,68)">
<rect x="0" y="0" width="50" height="26" rx="7" fill="#2c3e50"/>
<circle cx="45" cy="7" r="3" fill="#fff59d"/>
<rect x="4" y="-10" width="3" height="12" fill="#8a6d3b"/><polygon points="7,-10 20,-7 7,-3" fill="#9b59b6"/>
</g>
<g transform="translate(130,68)">
<rect x="0" y="0" width="50" height="26" rx="7" fill="#2c3e50"/>
<circle cx="45" cy="7" r="3" fill="#fff59d"/>
<rect x="4" y="-10" width="3" height="12" fill="#8a6d3b"/><polygon points="7,-10 20,-7 7,-3" fill="#9b59b6"/>
</g>
<text x="245" y="48" text-anchor="middle" fill="#bba5e0" font-size="7.5" font-weight="700">headlight জ্বলা + বেগুনি পতাকা = procession</text>
<!-- your car yielding at cross street -->
<g transform="translate(40,114)">
<rect x="0" y="0" width="50" height="24" rx="7" fill="#2ecc71"/>
<rect x="9" y="4" width="32" height="10" rx="3" fill="#0e4429"/>
</g>
<text x="65" y="156" text-anchor="middle" fill="#7bed9f" font-size="8" font-weight="900">তুমি: অপেক্ষা করো</text>
<text x="118" y="168" text-anchor="middle" fill="#f1c40f" font-size="7.5" font-weight="700">সবুজ পেলেও procession-এর মাঝ দিয়ে যেও না</text>
<text x="345" y="160" text-anchor="middle" fill="#ff8a80" font-size="7.5" font-weight="700">✗ লাইন কাটা ✗ মাঝে ঢোকা ✗ পাস করার চেষ্টা</text>
<text x="345" y="171" text-anchor="middle" fill="#ccc" font-size="10">পুরো procession এক গাড়ির মতো — শেষ গাড়ি পার হওয়া পর্যন্ত</text>
</svg>
<div class="rt-caption">Procession lead গাড়ির signal মেনে পুরোটা একসাথে চলে — মাঝের গাড়িগুলো লাল আলোতেও যেতে পারে। তোমার কাজ: চেনা (আলো+পতাকা), অপেক্ষা, সম্মান</div>
</div>

<div class="rt-image">
<svg viewBox="0 0 460 210" width="100%" style="max-width:490px">
<rect x="0" y="0" width="460" height="210" fill="#111" rx="8"/>
<text x="230" y="20" text-anchor="middle" fill="#a78bfa" font-size="12" font-weight="900">দৃশ্য ২৩ — কানাডা BORDER: Ambassador Bridge / Blue Water</text>
<!-- bridge silhouette -->
<path d="M 20 80 Q 130 30 240 80" fill="none" stroke="#3a4a5c" stroke-width="4"/>
<line x1="70" y1="62" x2="70" y2="96" stroke="#3a4a5c" stroke-width="3"/>
<line x1="130" y1="46" x2="130" y2="96" stroke="#3a4a5c" stroke-width="3"/>
<line x1="190" y1="62" x2="190" y2="96" stroke="#3a4a5c" stroke-width="3"/>
<rect x="10" y="96" width="240" height="10" fill="#2a2a2a"/>
<text x="130" y="120" text-anchor="middle" fill="#888" font-size="10">Detroit → Windsor (৫ মিনিটে অন্য দেশ!)</text>
<!-- booth -->
<rect x="300" y="60" width="50" height="60" rx="4" fill="#1c2c3c" stroke="#555" stroke-width="1.5"/>
<rect x="308" y="70" width="34" height="20" rx="2" fill="#0b1622"/>
<text x="325" y="84" text-anchor="middle" font-size="9">🛂</text>
<rect x="350" y="66" width="60" height="6" rx="3" fill="#c62828"/>
<text x="325" y="134" text-anchor="middle" fill="#ccc" font-size="10">booth-এ engine চালু, sunglasses খোলো,</text>
<text x="325" y="144" text-anchor="middle" fill="#ccc" font-size="10">ফোন নামাও, অফিসারের চোখে চোখ</text>
<!-- car queue -->
<g transform="translate(240,96)"><rect x="0" y="0" width="40" height="20" rx="6" fill="#2ecc71"/></g>
<g transform="translate(190,96)"><rect x="0" y="0" width="40" height="20" rx="6" fill="#95a5a6"/></g>
<!-- documents -->
<rect x="30" y="140" width="180" height="60" rx="8" fill="#1e2a1e"/>
<text x="120" y="156" text-anchor="middle" fill="#2ecc71" font-size="8" font-weight="900">📄 যা লাগবে (প্রত্যেক আরোহীর):</text>
<text x="120" y="170" text-anchor="middle" fill="#7bed9f" font-size="7.5">Passport বা Enhanced Driver's License (EDL)</text>
<text x="120" y="182" text-anchor="middle" fill="#7bed9f" font-size="7.5">— Michigan EDL land/sea crossing-এ passport-এর</text>
<text x="120" y="192" text-anchor="middle" fill="#7bed9f" font-size="7.5">বদলে চলে (SOS-এ বানানো যায়)</text>
<rect x="240" y="152" width="200" height="48" rx="8" fill="#2a1e1e"/>
<text x="340" y="168" text-anchor="middle" fill="#ff8a80" font-size="8" font-weight="900">সত্য বলো — সবসময়</text>
<text x="340" y="181" text-anchor="middle" fill="#ffb3ab" font-size="10">কোথায় যাচ্ছ, কতদিন, কী নিয়ে যাচ্ছ — সোজা উত্তর।</text>
<text x="340" y="192" text-anchor="middle" fill="#ffb3ab" font-size="10">ফল/মাংস/অস্ত্র declare করো। মিথ্যা = গাড়ি search + ban</text>
</svg>
<div class="rt-caption">Detroit-এ থাকলে border পার করা রুটিন ব্যাপার। Michigan-এর Enhanced Driver's License (EDL) থাকলে passport ছাড়াই কানাডা — SOS office-এই আবেদন করা যায়</div>
</div>

<div class="rt-image">
<svg viewBox="0 0 460 200" width="100%" style="max-width:490px">
<rect x="0" y="0" width="460" height="200" fill="#111" rx="8"/>
<text x="230" y="20" text-anchor="middle" fill="#a78bfa" font-size="12" font-weight="900">দৃশ্য ২৪ — হরিণ ছাড়াও: কে রাস্তায় নামে, কী করবে</text>
<!-- three panels -->
<rect x="18" y="34" width="136" height="130" rx="8" fill="#1e2a1e"/>
<text x="86" y="52" text-anchor="middle" fill="#7bed9f" font-size="9" font-weight="900">🦃 বড় পাখি/টার্কি</text>
<rect x="28" y="100" width="116" height="26" fill="#2a2a2a" rx="3"/>
<text x="60" y="118" font-size="13">🦃</text>
<text x="100" y="118" font-size="10">🦃🦃</text>
<text x="86" y="142" text-anchor="middle" fill="#ccc" font-size="10">দল বেঁধে রাস্তা পার হয় —</text>
<text x="86" y="152" text-anchor="middle" fill="#ccc" font-size="10">ধীরে থামো, হর্ন দাও, অপেক্ষা</text>
<rect x="162" y="34" width="136" height="130" rx="8" fill="#1e222e"/>
<text x="230" y="52" text-anchor="middle" fill="#74b9ff" font-size="9" font-weight="900">🐿️ ছোট প্রাণী</text>
<rect x="172" y="100" width="116" height="26" fill="#2a2a2a" rx="3"/>
<text x="215" y="118" font-size="10">🐿️</text>
<text x="230" y="142" text-anchor="middle" fill="#ff8a80" font-size="10" font-weight="700">হাইওয়ে গতিতে swerve/হার্ড</text>
<text x="230" y="152" text-anchor="middle" fill="#ff8a80" font-size="10" font-weight="700">brake নয় — course ধরে রাখো</text>
<text x="230" y="161" text-anchor="middle" fill="#888" font-size="6.5">(কষ্টের, কিন্তু মানুষের জীবন আগে)</text>
<rect x="306" y="34" width="136" height="130" rx="8" fill="#2a1e1e"/>
<text x="374" y="52" text-anchor="middle" fill="#f8c471" font-size="9" font-weight="900">🫎 বড় প্রাণী (elk/moose)</text>
<rect x="316" y="100" width="116" height="26" fill="#2a2a2a" rx="3"/>
<text x="365" y="120" font-size="14">🫎</text>
<text x="374" y="142" text-anchor="middle" fill="#ccc" font-size="10">উত্তর Michigan/UP-তে। শরীর</text>
<text x="374" y="152" text-anchor="middle" fill="#ccc" font-size="10">উঁচু — windshield-এ পড়ে।</text>
<text x="374" y="161" text-anchor="middle" fill="#f8c471" font-size="10" font-weight="700">সর্বশক্তিতে brake — থামো</text>
<text x="230" y="182" text-anchor="middle" fill="#f1c40f" font-size="8" font-weight="700">মূল সূত্র: ছোট প্রাণী = সোজা থাকো · বড় প্রাণী = brake · কোনোটাতেই oncoming-এ swerve নয়</text>
<text x="230" y="194" text-anchor="middle" fill="#888" font-size="10">🦢 রাজহাঁস পরিবার রাস্তায়? — Michigan-এর বসন্তের ক্লাসিক। থামো, hazard, ওদের সময় দাও</text>
</svg>
<div class="rt-caption">সিদ্ধান্তের হিসাব সবসময় এক: গাড়ির নিয়ন্ত্রণ হারানো &gt; প্রাণীর সাথে সংঘর্ষ। আকার দেখে সিদ্ধান্ত — ছোট হলে হold course, windshield-উচ্চতার হলে full brake</div>
</div>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>ভুলের গল্প — Backup Collision:</strong> Reversed without checking — ran over bicycle. Fix: always check behind car before backing up.</div></div>


<div class="code-block">🔗 কোন দৃশ্য কোন অধ্যায়ের জ্ঞান?

  — একটি যাত্রা (দৃশ্য ১-৯) —
  দৃশ্য ১ Walk-around       → অধ্যায় ১০ (vehicle check)
  দৃশ্য ২ Cockpit setup     → অধ্যায় ৬ (mirror/blind spot)
  দৃশ্য ৩ Start + dashboard  → অধ্যায় ১০ (test-ready গাড়ি)
  দৃশ্য ৪ পেডাল + PRNDL      → অধ্যায় ৮ (brake control)
  দৃশ্য ৫ Backing out        → অধ্যায় ৭ (pedestrian first)
  দৃশ্য ৬ Residential SEE    → অধ্যায় ৫+৬ (speed + SEE)
  দৃশ্য ৭ Freeway merge      → অধ্যায় ৬ (merge/lane)
  দৃশ্য ৮ Weather reflex     → অধ্যায় ৫+৮ (basic speed law)
  দৃশ্য ৯ Park + secure      → অধ্যায় ৫ (parking) + safety

  — পরিস্থিতির লাইব্রেরি (দৃশ্য ১০-১৯) —
  দৃশ্য ১০ Gas station       → বাস্তব জীবন (প্রথম solo কাজ)
  দৃশ্য ১১ বাম মোড়ের অপেক্ষা → অধ্যায় ৩+৪ (চাকা সোজা!)
  দৃশ্য ১২ School bus        → অধ্যায় ৪ (উভয় দিক থামো)
  দৃশ্য ১৩ Railroad gate     → অধ্যায় ৭ (২য় track সাবধান)
  দৃশ্য ১৪ শীতের সকাল + plow → অধ্যায় ৮ (winter)
  দৃশ্য ১৫ Freeway breakdown → অধ্যায় ৮ (emergency)
  দৃশ্য ১৬ Aggressive driver → অধ্যায় ৬ (defensive mind)
  দৃশ্য ১৭ জ্যামে ambulance   → অধ্যায় ৪ (emergency corridor)
  দৃশ্য ১৮ Flagger           → অধ্যায় ২ (মানুষ > সাইন)
  দৃশ্য ১৯ Parking lot       → অধ্যায় ৫+৭ (ধীরে + pedestrian)
  দৃশ্য ২০ Fog               → অধ্যায় ৬+৮ (low beam!)
  দৃশ্য ২১ Pothole season    → অধ্যায় ৮ (swerve নয়)
  দৃশ্য ২২ Funeral procession → অধ্যায় ৪ (yield + সম্মান)
  দৃশ্য ২৩ কানাডা border      → বাস্তব জীবন (EDL/passport)
  দৃশ্য ২৪ অন্য প্রাণী        → অধ্যায় ৮ (আকার = সিদ্ধান্ত)

  প্রতিটা যাত্রায় এগারোটা অধ্যায়ের সব জ্ঞান একসাথে কাজ করে।</div>

<div class="code-block">🇬🇧 ENGLISH SUMMARY — Chapter 11: The Complete Drive

  One journey (scenes 1-9): walk around the car
  (tires, lights, leaks, children behind) → cockpit
  order: Seat, Mirrors, Belt, hands 9-3 → start in
  P with brake pressed, dash lights must go out →
  one foot for both pedals, PRNDL → back out slow,
  body turned, yield to sidewalk + street →
  residential 25 with SEE (a ball means a child) →
  freeway: match speed, gap, signal, shoulder
  check, exit ramp before braking → weather reflex:
  wipers=lights, bigger gap → park, secure (P,
  parking brake, all off), Dutch reach exit.

  Situation library (scenes 10-24): gas station
  (gauge arrow shows tank side; engine off);
  left-turn wait with WHEELS STRAIGHT; school bus
  (both directions stop unless physical median);
  railroad gates (watch the second track; if
  stalled — out, run at an angle toward the
  train); winter (clear all snow, don't crowd the
  plow); freeway breakdown (far right, exit
  passenger side, behind the barrier); aggressive
  drivers (don't engage; if followed — police
  station, never home); emergency corridor in
  jams (left lane left, right lane right);
  flaggers outrank signals; parking lots (≤10 mph,
  watch reverse lights); fog = LOW beams;
  potholes (slow, straight, don't swerve);
  funeral processions (yield, never cut in);
  Canada border (passport or Michigan EDL, honest
  answers); animals (small = hold course, large =
  brake, never swerve into oncoming).</div>

<div class="secret-box">🔑 সম্পূর্ণ যাত্রা: চারপাশ চেক → Seat-Mirror-Belt → P+brake+start → light চেক → পেছন দেখে বের হও → ২৫-এ SEE → merge গতি মিলিয়ে → wipers=lights → P+brake+lock+Dutch reach। প্রতিটা দৃশ্য অভ্যাস বানাও — অভ্যাসই পরীক্ষায় পাশ করায়, আর জীবন বাঁচায়।</div>`
});
