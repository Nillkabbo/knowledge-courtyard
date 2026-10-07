// doors-1-4.js — Cloud X Berry Series Book 7: The Sky Forge
// Source: Cloud & DevOps playlist (16 videos, 2 per door)
const doors = [];

doors.push({
  num: 1,
  icon: "☁️",
  color: "#fb7185",
  name: "মেঘের জন্মকথা ও ভাড়ার মডেল",
  subtitle: "Cloud Computing Clearly + IaaS vs PaaS vs SaaS vs FaaS vs CaaS",
  tech: "Before/after cloud, virtualization, someone else's computer; responsibility spectrum: on-prem → IaaS → CaaS → PaaS → FaaS → SaaS",
  spirit: "তাওয়াক্কুল হাসান — নিজের বোঝা অর্পণ, দায় বেঁচে নেওয়া",
  secret: "মেঘ জাদু নয় — অন্যের ডেটা-সেন্টারে ভাড়া করা আসল সার্ভার, ভার্চুয়ালাইজেশনে কাটা ভার্চুয়াল স্লাইস; আর সার্ভিস-মডেল মানে দায়িত্বের স্পেকট্রাম — কোথায় থামবে তোমার কাজ, কোথা থেকে শুরু প্রোভাইডারের।",
  recall: {
    q: "ক্লাউডের আগে-পরে কোম্পানির পার্থক্য কী? IaaS থেকে SaaS যাওয়ার সাথে দায়িত্ব কীভাবে বদলায়?",
    qen: "What changed from before-cloud to cloud? How does responsibility shift from IaaS to SaaS?",
    a: "আগে: নিজের সার্ভার — কেনা, OS, নেটওয়ার্ক, স্টোরেজ, বিদ্যুৎ-ঠান্ডা-নিরাপত্তা-ব্যাকআপ সব নিজের; বাড়তি ক্ষমতা মানেই অপেক্ষা। এখন: ইন্টারনেটে ভাড়া — আসল সার্ভার ডেটা-সেন্টারে, তুমি পাও বড় মেশিনের ভার্চুয়াল স্লাইস (virtualization), মিনিটে বাড়াও-কমাও। স্পেকট্রাম: on-prem (সব নিজে) → IaaS (প্রোভাইডার দেয় compute/storage/network, OS-অ্যাপ তোমার — নতুন-বাড়ি, ভেতরের দায়িত্ব তোমার) → CaaS (কন্টেইনার-প্ল্যাটফর্ম তাদের, কন্টেইনার তোমার — ভাড়া-ফ্ল্যাট, ফার্নিচার নিয়ে আসো) → PaaS (শুধু কোড নিয়ে এসো, রানটাইম-ইনফ্রা তাদের — সাজানো ফ্ল্যাট) → FaaS (ইভেন্টে কোড চলে, সার্ভার-চিন্তাই নেই) → SaaS (রেডিমেড সফটওয়্যার — হোটেল)। যত ডানে, তত প্রোভাইডারের দায়, তোমার নিয়ন্ত্রণ তত কম।",
    aen: "Before: buy and run everything yourself. Cloud: rent virtual slices of real servers in someone's data center, scale in minutes. The service models are a responsibility spectrum — on-prem (all yours) through IaaS/CaaS/PaaS/FaaS to SaaS (all theirs); each step right trades control for offloaded burden."
  },
  story: `<p class="scene-setting">প্রথম দরজায় দুটো ভিডিও হাত ধরে এসেছে। প্রথমটা বলে মেঘের জন্মকথা: কোম্পানির নিজের সার্ভারের যুগ-যন্ত্রণা, আর ভাড়া-যুগের মুক্তি। দ্বিতীয়টা সেই ভাড়ার নিয়ম-কানুন: পাঁচ-ছয়টা মডেল, একটাই প্রশ্ন — <strong>কে কী সামলাবে?</strong> শিক্ষকের বাড়ি-রূপক দিয়ে পুরো স্পেকট্রাম এক লাইনে বসে যায়।</p>
<p class="scene-setting en">Two videos enter the first door hand in hand. The first tells the origin story — the pain of owning servers, the freedom of renting. The second lays out the rental contract: five models, one question — who manages what? The teacher's housing analogy puts the whole spectrum in one line.</p>
<div class="code-block">মেঘ-পূর্ব যুগ: নিজের সার্ভারের শাসন
  কিনতে হয় ফিজিক্যাল মেশিন → ইনস্টল OS →
  নেটওয়ার্ক-স্টোরেজ সেটআপ → বিদ্যুৎ, ঠান্ডা,
  নিরাপত্তা, ব্যাকআপ — সব নিজের কাঁধে।
  ইউজার হঠাৎ বাড়লে? ট্রাফিক রাতারাতি বাড়লে?
  স্টোরেজ ভরে গেলে? → অ্যাপ্রুভাল-ক্রয়-
  ডেলিভারি-ইনস্টল... মাসের পর মাস।

মেঘ-যুগ: ভাড়ার স্বাধীনতা
  কম্পিউটিং রিসোর্স ইন্টারনেটে ভাড়া —
  AWS/Azure/GCP-এর ডেটা-সেন্টার থেকে।
  মনে রাখো: সার্ভার আসলই — শুধু তোমার
  অফিসে নয়; আর তুমি সাধারণত ভাড়া নাচ্ছো
  বড় মেশিনের একটা VIRTUAL SLICE।
  VIRTUALIZATION: এক ফিজিক্যাল সার্ভার →
  অনেক ভার্চুয়াল মেশিন, প্রত্যেকে নিজের
  মতো আচরণ করে — এজন্যই মেঘ এত দ্রুত
  ক্ষমতা দিতে পারে।
  (লোকে যাকে বলে: মেঘ মানে অন্য কারো
   কম্পিউটার — ঠিকই বলে, আসল কথা এতটুকুই!)</div>
<div class="diagram">
<div class="diag-title">দায়িত্বের স্পেকট্রাম — শিক্ষকের বাড়ি-রূপক</div>
<svg viewBox="0 0 560 210" xmlns="http://www.w3.org/2000/svg">
  <rect class="cell" x="15" y="15" width="86" height="64" rx="10"/>
  <text class="lbl-sm" x="58" y="38" text-anchor="middle">ON-PREM</text>
  <text class="lbl-sm" x="58" y="56" text-anchor="middle">নিজের বাড়ি</text>
  <text class="lbl-sm" x="58" y="72" text-anchor="middle">সব নিজের</text>
  <rect class="cell-hot" x="111" y="15" width="86" height="64" rx="10"/>
  <text class="lbl-sm" x="154" y="38" text-anchor="middle">IaaS</text>
  <text class="lbl-sm" x="154" y="56" text-anchor="middle">নতুন বাড়ি</text>
  <text class="lbl-sm" x="154" y="72" text-anchor="middle">OS+অ্যাপ তোমার</text>
  <rect class="cell-hot" x="207" y="15" width="86" height="64" rx="10"/>
  <text class="lbl-sm" x="250" y="38" text-anchor="middle">CaaS</text>
  <text class="lbl-sm" x="250" y="56" text-anchor="middle">ভাড়া-ফ্ল্যাট</text>
  <text class="lbl-sm" x="250" y="72" text-anchor="middle">কন্টেইনার তোমার</text>
  <rect class="cell-cyan" x="303" y="15" width="86" height="64" rx="10"/>
  <text class="lbl-sm" x="346" y="38" text-anchor="middle">PaaS</text>
  <text class="lbl-sm" x="346" y="56" text-anchor="middle">সাজানো ফ্ল্যাট</text>
  <text class="lbl-sm" x="346" y="72" text-anchor="middle">শুধু কোড আনো</text>
  <rect class="cell-cyan" x="399" y="15" width="70" height="64" rx="10"/>
  <text class="lbl-sm" x="434" y="38" text-anchor="middle">FaaS</text>
  <text class="lbl-sm" x="434" y="56" text-anchor="middle">রুম-সার্ভিস</text>
  <text class="lbl-sm" x="434" y="72" text-anchor="middle">ইভেন্টে কোড</text>
  <rect class="cell-leaf" x="477" y="15" width="68" height="64" rx="10"/>
  <text class="lbl-sm" x="511" y="38" text-anchor="middle">SaaS</text>
  <text class="lbl-sm" x="511" y="56" text-anchor="middle">হোটেল</text>
  <text class="lbl-sm" x="511" y="72" text-anchor="middle">রেডিমেড</text>
  <line class="edge" x1="101" y1="47" x2="109" y2="47"/>
  <line class="edge" x1="197" y1="47" x2="205" y2="47"/>
  <line class="edge" x1="293" y1="47" x2="301" y2="47"/>
  <line class="edge" x1="389" y1="47" x2="397" y2="47"/>
  <line class="edge" x1="469" y1="47" x2="475" y2="47"/>
  <text class="lbl-sm" x="280" y="120" text-anchor="middle">বাঁ থেকে ডানে: প্রোভাইডারের দায় বাড়ে, তোমার নিয়ন্ত্রণ কমে</text>
  <text class="lbl-sm" x="280" y="145" text-anchor="middle">IaaS: EC2/VM/Compute Engine — স্ট্রাকচার রেডি, ভেতর তোমার</text>
  <text class="lbl-sm" x="280" y="168" text-anchor="middle">CaaS: Fargate/Container Apps/Cloud Run — বিল্ডিং তাদের, ফার্নিচার তোমার</text>
  <text class="lbl-sm" x="280" y="191" text-anchor="middle">PaaS: App Service/App Engine/Heroku — সব রেডি, শুধু ঢুকে বসো</text>
</svg>
<div class="diag-cap">প্রশ্ন একটাই: কে কী সামলাবে? — উত্তরের অবস্থানই মডেলের নাম।</div>
</div>
<div class="secret-box">☁️ মেঘ = অন্যের ডেটা-সেন্টারে ভার্চুয়াল ভাড়া; মডেল = দায়িত্বের মাপকাঠি — যত ডানে, তত সময় তোমার কোডে, তত কম নিয়ন্ত্রণ তোমার হাতে।</div>`,
  senior: {
    title: "ক্লাউড মৌলিক + সার্ভিস-মডেল — দ্রুত গাইড",
    body: "<p><strong>মেঘ:</strong> ইন্টারনেটে ভাড়া-করা compute/storage/DB/নেটওয়ার্ক; আসল সার্ভার প্রোভাইডারের ডেটা-সেন্টারে; virtualization = ১ ফিজিক্যাল → অনেক VM → মুহূর্তে স্কেল। <strong>স্পেকট্রাম:</strong> on-prem(সব-নিজে) → IaaS(OS-অ্যাপ তোমার; EC2) → CaaS(কন্টেইনার তোমার; Fargate/Cloud Run) → PaaS(শুধু কোড; App Engine/Heroku) → FaaS(ইভেন্ট-কোড; Lambda) → SaaS(রেডিমেড; Gmail)। <strong>ছাঁকনি:</strong> কে-কী-সামলাবে → নিয়ন্ত্রণ-বনাম-জিম্মাদারি মিলিয়ে বাছো।</p>"
  }
});

doors.push({
  num: 2,
  icon: "🧱",
  color: "#fb7185",
  name: "মেঘের ইট ও যাত্রীর মানচিত্র",
  subtitle: "10 Cloud Topics + Top AWS Services + DevOps Roadmap",
  tech: "Compute/containers/serverless/storage/DB/networking/IAM/monitoring/messaging/CDN; AWS top-10 (SQS/CloudFront/Route 53...); roadmap: cloud→Linux→bash→Git→Python→CI/CD→IaC→containers→K8s→monitoring",
  spirit: "খাত্তা — ভিত্তি থেকে উপরে, ধাপ বিয়োগ নয়",
  secret: "শত সার্ভিস মুখস্থ নয় — ১০টা বিল্ডিং-ব্লক প্রায় সব আর্কিটেকচারে; আর রোডম্যাপ একটাই ধারা: ক্লাউড-মৌলিক → লিনাক্স → স্ক্রিপ্ট → গিট → পাইথন → CI/CD → IaC → কন্টেইনার → K8s → মনিটরিং — প্রতি ধাপের শেষে একটা করে মাইলস্টোন-প্রজেক্ট।",
  recall: {
    q: "ক্লাউড-শেখার 'মুখস্থ-সব-সার্ভিস' ভুলটা কী? DevOps রোডম্যাপের প্রথম পাঁচ ধাপ কী কী?",
    qen: "Why is memorizing every service a mistake? First five roadmap steps?",
    a: "AWS-এ ২০০+ সার্ভিস — সব শেখা অসম্ভবও অপ্রয়োজনীয়ও; বরং যে ব্লক সব আর্কিটেকচারে ফিরে আসে সেগুলো শেখো: compute (EC2/VM/Compute), containers (ECS/EKS/AKS/GKE — পেছনে Kubernetes), serverless (Lambda/Functions), object storage (S3/Blob/Cloud Storage), databases (RDS/DynamoDB-জাতীয়, প্রয়োজনভেদে relational/NoSQL), networking, IAM-নিরাপত্তা, মনিটরিং। কনসেপ্ট বুঝলে নাম-বদলে সার্ভিস চেনা যায়। রোডম্যাপ: ১) এক ক্লাউড-প্ল্যাটফর্মের মৌলিক (compute/storage/networking/DB/LB/identity) ২) লিনাক্স কমান্ড-লাইন (প্রসেস, লগ, ট্রাবলশুট) ৩) bash-অটোমেশন (একটা ম্যানুয়াল কাজ স্ক্রিপ্টে) ৪) Git/GitHub (রিপো-ব্রাঞ্চ-মার্জ-রিমোট) ৫) পাইথন (অটোমেশন/API/ফাইল) — তারপর CI/CD, IaC, কন্টেইনার, K8s, মনিটরিং; প্রতি ধাপে milestone-প্রজেক্ট: করে দেখাও, ব্যাখ্যা করতে পারো।",
    aen: "AWS has 200+ services; learn the ten blocks that recur in every architecture instead. Roadmap: one platform's fundamentals → Linux CLI → bash automation → Git/GitHub → Python → CI/CD → IaC → containers → K8s → monitoring, each capped by a milestone project."
  },
  story: `<p class="scene-setting">দ্বিতীয় দরজায় দুই ভিডিও পরস্পরের পূরক: একটা বলে <strong>কী শিখবে</strong> (১০টা কোর টপিক), আরেকটা বলে <strong>কোন ক্রমে</strong> (DevOps রোডম্যাপ)। শিক্ষকের প্রথম সতর্কতাই সবচেয়ে দামি: AWS-Azure-GCP-এর শত শত সার্ভিসের তালিকা মুখস্থ করতে যেও না — কোর বিল্ডিং-ব্লক বুঝলে বাকিগুলো নিজেই চেনা মনে হবে।</p>
<p class="scene-setting en">Two complementary videos: what to learn (ten core topics) and in what order (the DevOps roadmap). The teacher's first warning is the most valuable: don't memorize hundreds of services — understand the core blocks and every service becomes recognizable.</p>
<div class="code-block">মেঘের ১০ ইট (প্রতিটা তিন মেঘেই আছে,
শুধু নাম আলাদা):
  ১. COMPUTE — অ্যাপ চলার জায়গা:
     EC2 / Virtual Machines / Compute Engine
  ২. CONTAINERS — প্যাকেজড অ্যাপ:
     ECS+EKS / AKS / GKE (পেছনে Kubernetes)
  ৩. SERVERLESS — সার্ভার-চিন্তাহীন কোড:
     Lambda / Functions / Cloud Functions
  ৪. OBJECT STORAGE — ফাইল-ভাণ্ডার:
     S3 / Blob / Cloud Storage
  ৫. DATABASES — relational+NoSQL দুই হাত:
     RDS+DynamoDB / Azure SQL+Cosmos / …
     (কোন কাজে কোনটা — সেটাই আসল সিদ্ধান্ত)
  ৬. NETWORKING — VPC/ভার্চুয়াল নেট,
     লোড ব্যালান্সার, DNS
  ৭. IDENTITY & SECURITY — কে কী পারবে
     (IAM-জাতীয়): লক-চাবির কেন্দ্র
  ৮. MONITORING — নজরদারি ও অ্যালার্ট
     (CloudWatch-জাতীয়)
  ৯. MESSAGING — সারি-বার্তা (SQS-জাতীয়),
     সেবা-সেবার আলগা কথা
  ১০. CDN — দুনিয়া-জোড়া দ্রুত বিতরণ
     (CloudFront-জাতীয়)
  → কনসেপ্ট এক, নাম তিন — এক মেঘ বুঝলে
    বাকি দুই মেঘ অনুবাদ-মাত্র।</div>
<div class="code-block">AWS-এর টপ-১০ (২০০+ সার্ভিসের মেঘে যারা আসল কেন্দ্র):
  ১০. SQS — মেসেজ-সারি: সেবা-সেবার অ্যাসিনক্রোনাস
      কথা; order টিপলে inventory/payment/shipping-কে
      সারিতে জানাও — একজন ধীর হলে সিস্টেম থামে না
  ৯. CLOUDFRONT — CDN: দুনিয়া-জোড়া edge থেকে
      ছবি-ভিডিও-কনটেন্ট পাঠানো — latency কমে
  ৮. ROUTE 53 — DNS+: নাম→IP, সাথে health-check
      আর স্মার্ট রাউটিং — এক অঞ্চল নামলে অন্যটায়
  ৭. IAM — কে কী পারবে: প্রতিটা মেঘ-রাজ্যের চাবি-ঘর
  (এবং সারিতে ওপরে: EC2-compute, S3-object storage,
   RDS/DynamoDB-database, Lambda-serverless,
   CloudWatch-মনিটরিং, ELB-লোড ব্যালান্সার —
   সবাই ওপরের ১০ ইটেরই AWS-নাম!)</div>
<div class="code-block">DevOps আসলে কী? (কোর-কনসেপ্টের খতিয়ান)
  টুলের তালিকা নয় — আধুনিক সফটওয়্যার কীভাবে
  বানানো-পৌঁছানো-চালানো হয়, তার সংস্কৃতি:
  CULTURE — দেয়াল ভাঙা: dev কোড লিখে ছুড়ে
    দেয় না ops-এর উঠোনে; শুরু থেকে একসাথে,
    দায় ভাগাঙ্কিত — বিশ্বাস ছাড়া সেরা পাইপলাইনও মরে
  AUTOMATION — ম্যানুয়াল কাজ শত্রু: অটোমেট
    না-পারলে স্কেলও পারবে না
  LINUX+SCRIPTING — প্রোডাকশনের মাটি;
    প্রসেস-লগ-ডিবাগ হাতে-কলমে
  GIT — শুধু কোড নয়: ইনফ্রা+পাইপলাইনও গিটে;
    পরিবর্তনের নিরাপদ পথ
  CI/CD — পুশ হলেই অটো-টেস্ট→বিল্ড→ডিপ্লয়:
    বাগ ধরা পড়ে শুরুতেই
  (আর মনিটরিং+ফিডব্যাক-লুপ: চালানোর পরেও
   চোখ খোলা — সিস্টেম নিজের কথা বলতে দাও)</div>
<div class="code-block">DevOps রোডম্যাপ — ধাপে ধাপে (মাইলস্টোনসহ):

১. ক্লাউড-মৌলিক (এক প্ল্যাটফর্ম, সব নয়!)
   মাইলস্টোন: একটা সাধারণ অ্যাপ মেঘে ডিপ্লয় —
   ব্যাখ্যা করো কোন সার্ভিস, কেন, কীভাবে যুক্ত
২. লিনাক্স — GUI ছাড়া বাঁচতে শেখো:
   কমান্ড, ফাইল-পারমিশন, প্রসেস, সার্ভিস,
   লগ, ট্রাবলশুটিং
   মাইলস্টোন: টার্মিনাল থেকে ক্লাউড-সার্ভারে
   ঢুকে অ্যাপ-লগ-প্রসেস সামলানো
৩. BASH — ম্যানুয়াল কাজের অটোমেশন
   মাইলস্টোন: একটা সেটআপ-কাজ পুরো স্ক্রিপ্টে
৪. GIT/GITHUB — ভার্সন-নিয়ন্ত্রণ, ব্রাঞ্চ-মার্জ
   মাইলস্টোন: প্রজেক্ট+স্ক্রিপ্ট+ডকুমেন্টেশন
   সব GitHub-এ, ঠিকঠাক ভার্সনড
৫. PYTHON — অটোমেশনের দ্বিতীয় হাত
   (সফটওয়্যার-ইঞ্জিনিয়ার হওয়ার নয়,
    কাজের পাইথন)
   মাইলস্টোন: একটা আসল কাজ পাইথনে অটোমেট
৬+. CI/CD → IaC (Terraform) → কন্টেইনার
   (Docker) → Kubernetes → মনিটরিং —
   পরের দরজাগুলো ঠিক এই ধাপগুলোরই গল্প!</div>
<div class="callout tip"><span class="co-icon">🧱</span><div><strong>দরজার সংযোগ:</strong> রোডম্যাপের ধাপ ২ (লিনাক্স) = সিরিজের Book ৩ (The Penguin Terminal), ধাপ ৪ (Git) আজকের দরজা ৮-এ পূর্ণ পাঠ পাবে — <strong>এক মহাদেশের নকশা অন্য মহাদেশে চলে, সেটাই ভালো নকশার পরিচয়।</strong></div></div>
<div class="secret-box">🧱 শত সার্ভিস নয়, দশ ইট; শেখা নয় এলোমেলো — ধাপ-ক্রম + মাইলস্টোন; করে-দেখানোই শেখার প্রমাণ।</div>`,
  senior: {
    title: "১০ টপিক + রোডম্যাপ — দ্রুত গাইড",
    body: "<p><strong>ইট:</strong> compute, containers, serverless, object storage, databases (relational+NoSQL), networking, IAM, monitoring, messaging, CDN — কনসেপ্ট-এক/নাম-তিন। <strong>রোডম্যাপ:</strong> ক্লাউড-মৌলিক(১-প্ল্যাটফর্ম) → লিনাক্স(হাতে-কলমে) → bash → Git → পাইথন → CI/CD → IaC → Docker → K8s → মনিটরিং; প্রতি ধাপে milestone-প্রজেক্ট (ডিপ্লয়-করে-ব্যাখ্যা)। <strong>নিয়ম:</strong> টুল-তালিকা নয় — ক্রম+প্রজেক্ট।</p>"
  }
});

doors.push({
  num: 3,
  icon: "📦",
  color: "#fb7185",
  name: "বাক্সের বিদ্যা ও দুই দারোগা",
  subtitle: "Docker Finally Makes Sense + Docker vs Podman",
  tech: "Container = app+runtime+deps standardized unit; solves works-on-my-machine; Docker daemon architecture vs Podman daemonless+rootless",
  spirit: "ইখলাস — পরিবেশ অপরিবর্তিত, ফল নির্ভরযোগ্য",
  secret: "কন্টেইনার মানে পিকনিক-ঝুড়ি — অ্যাপ+রানটাইম+ডিপেন্ডেন্সি সব ভেতরে, যেখানে নিয়ে যাও একই আচরণ; আর Docker বনাম Podman-এর তফাত সামনের-অফিস নয় — Docker-এর কেন্দ্রীয় daemon বনাম Podman-এর daemonless-rootless কর্মপদ্ধতি।",
  recall: {
    q: "কন্টেইনার works-on-my-machine সমস্যার সমাধান করে কীভাবে? Docker আর Podman-এর স্থাপত্য-পার্থক্য কী?",
    qen: "How do containers kill the works-on-my-machine problem? Architectural difference between Docker and Podman?",
    a: "কন্টেইনার = স্ট্যান্ডার্ডাইজড ইউনিট: কোড+রানটাইম+লাইব্রেরি সব প্যাক করা — পরিবেশ কখনো বদলায় না, তাই ল্যাপটপ/সার্ভার/ক্লাউড-VM সবখানে একই ফল (শর্ত: হোস্টে রানটাইম আছে)। মনে রাখো: এটা কোডের বাগ ঢাকে না — শুধু পরিবেশ-সমস্যা দূর করে। স্থাপত্য: Docker CLI → কেন্দ্রীয় দীর্ঘ-চলমান daemon → সে কন্টেইনার চালায়; Podman daemonless — CLI নিজেই সামলায়, কেন্দ্রীয় daemon নেই; rootless-ডিজাইনে সাধারণ ইউজার হিসেবে কন্টেইনার চালানো যায় (least-privilege); তবে Docker-ও rootless-মোড পারে — আসল পার্থক্য daemonless-rootless ওয়ার্কফ্লো যেটা Podman-এ ডিফল্ট স্বভাব।",
    aen: "A container packs app+runtime+deps so the environment never changes — same behavior everywhere (given a runtime on the host); it fixes environment problems, not code bugs. Docker routes through a central long-running daemon; Podman is daemonless and rootless-first — no central manager, least-privilege by default (Docker also has rootless mode; the difference is what's the default mindset)."
  },
  story: `<p class="scene-setting">System Design বইয়ের তৃতীয় দরজায় শোনা "it works on my machine"-এর প্রতিষেধক এই দরজায় পূর্ণ রূপ পায়। প্রথম ভিডিও: কন্টেইনার কী আর কেন — পিকনিক-ঝুড়ি আর শিপিং-কন্টেইনারের রূপকে। দ্বিতীয়টা আরও গভীর প্রশ্ন: Docker তো আছেই, তাহলে Podman কেন এলো?</p>
<p class="scene-setting en">The antidote to 'works on my machine' takes full form here. Video one: what a container is, via picnic-basket and shipping-container analogies. Video two asks the deeper question: if Docker exists, why Podman?</p>
<div class="code-block">কন্টেইনার = স্ট্যান্ডার্ডাইজড সফটওয়্যার-ইউনিট
  ভেতরে: অ্যাপ-কোড + রানটাইম (যেমন Node.js)
    + সব দরকারি লাইব্রেরি-টুল
  ফল: পরিবেশ কখনো বদলায় না → প্রতিবার,
    সব জায়গায়, একই আচরণ।

রূপক দুটো (শিক্ষকের চিত্র):
  PICNIC BASKET — খাবার-থালা-হাঁড়ি সব ঝুড়িতে;
    যেখানে গিয়ে বসো, ওখানকার কিছুই লাগে না
  SHIPPING CONTAINER — স্ট্যান্ডার্ড আকার,
    বিচ্ছিন্ন, আত্মনির্ভর; জাহাজ-ট্রাক-ট্রেন
    পার হোক, ভেতরের মাল অপরিবর্তিত

সতর্কতা (কন্টেইনার জাদুকর নয়):
  দূর করে: ENVIRONMENT-সমস্যা
  দূর করে না: কোডের বাগ, সিস্টেম-সমস্যা
  শর্ত: হোস্টে (ল্যাপটপ/সার্ভার/ক্লাউড-VM)
    Docker/রানটাইম ইনস্টল থাকতে হবে</div>
<div class="code-block">তাহলে PODMAN কেন? — পেছনের ঘরে ঢোকো:

DOCKER-এর শাসন-কাঠামো:
  docker run টাইপ করো → CLI অনুরোধ পাঠায়
  কেন্দ্রীয় দীর্ঘ-চলমান DOCKER DAEMON-কে →
  daemon কন্টেইনার বানায়-চালায়-থামায়।
  মডেল: তোমার আদেশ যায় এক কেন্দ্রীয়
  ম্যানেজারের কাছে; সে সব সামলায়।

PODMAN-এর বিপথগামী সিদ্ধান্ত:
  DAEMONLESS — কোনো কেন্দ্রীয় daemon নেই;
    CLI নিজেই কন্টেইনার সামলায়
  ROOTLESS-প্রথম — সাধারণ (non-root) ইউজার
    হিসেবেই কন্টেইনার চালানো যায় →
    shared সার্ভারে least-privilege: দরকার
    নেই সবাইকে হোস্টে বাড়তি ক্ষমতা দিতে

ন্যায়বিচার (শিক্ষকের ভারসাম্য):
  ভুল বোঝাপড়া: Docker=root, Podman=না
  সত্য: Docker-ও rootless-মোড পারে;
  আসল পার্থক্য — daemonless+rootless
  ওয়ার্কফ্লো Podman-এ স্বাভাবিক স্বভাব,
  Docker-এ সচেতন বেছে-নেওয়া পথ।</div>
<div class="secret-box">📦 ঝুড়িতে সব, তাই সব জায়গায় একই ফল — পরিবেশের সমস্যা বাক্সে বন্দ; আর বাক্স-চালানোর দুই দর্শন: কেন্দ্রীয় daemon বনাম daemonless-স্বাধীনতা।</div>`,
  senior: {
    title: "Docker/Podman — দ্রুত গাইড",
    body: "<p><strong>কন্টেইনার:</strong> কোড+রানটাইম+ডিপেন্ডেন্সির স্ট্যান্ডার্ড ইউনিট — environment-সমস্যা নির্মূল (বাগ নয়); হোস্টে রানটাইম লাগবেই। <strong>Docker:</strong> CLI→central daemon→কন্টেইনার-ব্যবস্থাপনা; rootless-মোড আছে। <strong>Podman:</strong> daemonless+rootless-first — কেন্দ্র-নিরপেক্ষ, least-privilege ডিফল্ট। <strong>বাছাই-প্রশ্ন:</strong> কেন্দ্রীয়-ব্যবস্থাপনার পরিচিতি না সর্বনিম্ন-সুযোগের স্বভাব?</p>"
  }
});

doors.push({
  num: 4,
  icon: "🎻",
  color: "#fb7185",
  name: "অর্কেস্ট্রার দলপতি ও রাতের প্রহরী",
  subtitle: "Kubernetes Finally Makes Sense + Jenkins Behind the Scenes",
  tech: "K8s cluster/nodes/declarative desired state/self-healing/scaling; Jenkins automation server, pipeline, CI/CD",
  spirit: "তাকদির — লক্ষ্য বলো, পথ সে খুঁজে নেয়",
  secret: "কয়েকটা কন্টেইনার নিজে হাতে চালানো সহজ, শত সার্ভারে শত কপি অসম্ভব — Kubernetes বলে কাছ-কথা: কাঙ্ক্ষিত অবস্থা বলে দাও (৩ কপি চাই, ব্যর্থ হলে আবার উঠবে), বাকিটা সে মিলিয়ে দেয়; আর Jenkins হলো রাতের প্রহরী — পুশ হলেই পাইপলাইন: টেস্ট-বিল্ড-ডিপ্লয় স্বয়ংক্রিয়।",
  recall: {
    q: "Kubernetes-এর declarative মডেল কী বোঝায়? Jenkins-এর পাইপলাইন CI/CD-র কোন অংশ স্বয়ংক্রিয় করে?",
    qen: "What does Kubernetes' declarative model mean? Which CI/CD parts does a Jenkins pipeline automate?",
    a: "Declarative: তুমি ধাপ-নির্দেশ দাও না — ফল বলো (cart-service সবসময় ৩ কপি, একটা মরলে নতুন উঠবে); K8s ক্লাস্টারের নোডগুলোতে বাস্তবতা কাঙ্ক্ষিত-অবস্থার সাথে মেলাতে থাকে (self-healing, অটো-স্কেল)। ম্যানুয়াল বিকল্প: তিন সার্ভারে লগইন করে এক-এক করে কন্টেইনার চালানো — শত কন্টেইনারে অসম্ভব। Jenkins: ডেভেলপার push করলেই পাইপলাইন চালু — লেটেস্ট কোড টানা, বিল্ড, টেস্ট, প্যাকেজ, ডিপ্লয়; CI = নিয়মিত মার্জ+অটো-বিল্ড/টেস্ট, CD = পাস করলে রিলিজ-প্রস্তুত/অটো-ডিপ্লয় — ম্যানুয়াল ধাপের ভুল (ভুল ব্রাঞ্চ, ভুলে যাওয়া কমান্ড, ভাঙা ফিচার প্রোডাকশনে) দূর হয়।",
    aen: "Declarative: state the outcome (three copies, self-healing, auto-scale) and Kubernetes reconciles reality on the cluster's nodes. Jenkins: on every push a pipeline pulls, builds, tests, packages, deploys — CI is automated build/test on merge, CD is automated release/deploy, removing manual-step mistakes."
  },
  story: `<p class="scene-setting">এক-দুইটা কন্টেইনার চালানো শিশুখেলা — কিন্তু অনলাইন শপে login, search, cart, payment, tracking পাঁচ সেবা, প্রত্যেকটা কন্টেইনারে, শত সার্ভারে শত কপি: কে চালাবে? কে ঠিক করবে? ট্রাফিক বাড়লে কপি বাড়াবে কে? প্রথম ভিডিওর উত্তর: কন্টেইনারের দলপতি — Kubernetes। দ্বিতীয় ভিডিও যায় ডেভেলপারের পাশে: প্রতিদিন দলে-দলে কোড-পুশ — কে যাচাই করবে? রাতের প্রহরী: Jenkins।</p>
<p class="scene-setting en">Running two containers is child's play; hundreds across many servers is impossible without a conductor. Video one: Kubernetes, the container orchestra's leader. Video two stands beside the developer: with pushes landing daily, who verifies? Jenkins, the night watchman.</p>
<div class="code-block">KUBERNETES — কন্টেইনার-অর্কেস্ট্রার:

সমস্যা: শত কন্টেইনার × বহু সার্ভার
  কে কোন সার্ভারে চালাবে? payment ফেল করলে
  কী হবে? ট্রাফিক বাড়লে কপি কে বাড়াবে?
  সেবার মধ্যে যোগাযোগ কীভাবে?

সমাধানের আকার: ক্লাস্টার + নোড
  তুমি দাও মেশিনের দল (ক্লাউড-VM/নিজের
  সার্ভার/মিশ্র) → একসাথে KUBERNETES CLUSTER;
  প্রতিটা মেশিন = NODE।

DECLARATIVE — চির-প্রশ্নের উল্টো উত্তর:
  পুরনো ধাঁচ: ধাপ-নির্দেশ — এই সার্ভারে
    লগইন করো, কন্টেইনার চালাও... ×৩
  K8s-ধাঁচ: ফল বলে দাও —
    cart-service সবসময় ৩ কপি চাই;
    একটা মরলে নতুন উঠবে
  পেছনে K8s সবসময় মিলিয়ে চলে:
    বাস্তবতা = কাঙ্ক্ষিত-অবস্থা
  এখান থেকেই: SELF-HEALING (মরলে জন্ম),
    AUTO-SCALING (চাপে কপি-বৃদ্ধি),
    সার্ভিস-ডিসকভারি (কে কোথায়, সবাই জানে)</div>
<div class="code-block">JENKINS — অটোমেশন-সার্ভার, রাতের প্রহরী:

সমস্যা: দলের সবাই প্রতিদিন পুশ করে —
  বিল্ড ঠিক? টেস্ট পাস? ডিপ্লয় নিরাপদ?
  হাতে করতে গেলে: কেউ কমান্ড ভুলে যাবে,
  কেউ ভুল ব্রাঞ্চ টেস্ট করবে, ভাঙা ফিচার
  প্রোডাকশনে চলে যাবে।

সমাধান: পুশ হলেই পাইপলাইন জাগে —
  লেটেস্ট কোড টানো → বিল্ড → টেস্ট →
  প্যাকেজ → ডিপ্লয়
  (PIPELINE = স্বয়ংক্রিয় ধাপের শৃঙ্খল)

CI ও CD — পাইপলাইনের দুই ফাঁফা:
  CI (CONTINUOUS INTEGRATION): নিয়মিত
    মার্জ + অটো বিল্ড/টেস্ট — বাগ ধরা
    পড়ে শুরুতেই
  CD (DELIVERY/DEPLOYMENT): সব পাস করলে
    রিলিজ-প্রস্তুত, এমনকি অটো-ডিপ্লয়
  আধুনিক ক্লাউড-টুল (GitHub Actions,
  GitLab CI) এসেও Jenkins-এর শিক্ষা কার্যকর —
  পাইপলাইন-চিন্তাই আসল, টুল তার বাহন।</div>
<div class="callout tip"><span class="co-icon">🎻</span><div><strong>দরজার সংযোগ:</strong> Docker (দরজা ৩) বানালো বাক্স, Kubernetes সেই বাক্সের নৌ-বহর চালায়; Jenkins বাক্স-বানানোর কারখানা-চাবি ঘোরায় — পুশ → পাইপলাইন → বাক্স → অর্কেস্ট্রা। <strong>চার দরজা মিলে এক বাক্য: মেঘে ইট, বাক্সে অ্যাপ, দলপতিতে শৃঙ্খলা, প্রহরীতে গতি।</strong></div></div>
<div class="secret-box">🎻 কাঙ্ক্ষিত-অবস্থা বলো, অর্কেস্ট্রা মেলাবে; পুশ করো, প্রহরী বাকি সব করবে — ঘোষণাই শাসন, হাত নয়।</div>`,
  senior: {
    title: "K8s + Jenkins — দ্রুত গাইড",
    body: "<p><strong>K8s:</strong> কন্টেইনার-অর্কেস্ট্রেশন; cluster=nodes-দল; declarative desired-state → reconcile → self-healing/auto-scaling/service-discovery; তিন-কপি-চাই বলাই কনফিগারেশন। <strong>Jenkins:</strong> অটোমেশন-সার্ভার; push→pipeline (pull→build→test→package→deploy); CI=মার্জ+অটো-যাচাই, CD=অটো-রিলিজ/ডিপ্লয়; ম্যানুয়াল-ভুল নির্মূল। <strong>জুটি:</strong> Docker=বাক্স, K8s=নৌ-বহর, Jenkins=কারখানা-চাবি।</p>"
  }
});
