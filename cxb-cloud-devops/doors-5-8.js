// doors-5-8.js — Cloud X Berry Series Book 7: The Sky Forge
// Doors 5-8 (continued from doors-1-4.js — no const redeclaration)

doors.push({
  num: 5,
  icon: "📜",
  color: "#fb7185",
  name: "কোডে লেখা রাজ্য ও এক আদেশে শত সার্ভার",
  subtitle: "Terraform in 5 Minutes + What is Ansible?",
  tech: "IaC (HCL, declarative), provider/resource/state; Ansible inventory/playbook/module, agentless (SSH/WinRM), desired state",
  spirit: "কিতাবত — রাজ্যের হিসাব লিখিতভাবে",
  secret: "Terraform মেঘের রাজ্য লেখে কোডে — কী চাও লেখো (declarative), state-মিলিয়ে সে বানায়-বদলায়-ভাঙে; আর Ansible শত সার্ভারে এক আদেশ — inventory বলে কোথায়, playbook বলে কী, module করে কাজ, agent লাগে না।",
  recall: {
    q: "Infrastructure as Code-এর মূল লাভ তিনটা? Ansible agentless হওয়ার অর্থ কী?",
    qen: "Three core benefits of IaC? What does Ansible being agentless mean?",
    a: "IaC লাভ: ১) Git-এ রাখা যায় — টিম-রিভিউ, পরিবর্তনের ইতিহাস; ২) পুনর্ব্যবহার — একই কনফিগে test+prod সহ যত খুশি environment; ৩) নির্ভরযোগ্য পুনরাবৃত্তি — ম্যানুয়াল ক্লিকের ভুল নেই। Terraform: HCL-এ declarative (ফল লেখো, ধাপ নয়); provider (AWS/Azure/GCP/K8s-সংযোগ), resource (VM/DB/network-একক), state (কোন আসল রিসোর্স কার) — চালালে config বনাম state বনাম বাস্তবতা মিলিয়ে তৈরি/আপডেট/ডিলিট ঠিক করে। Ansible agentless: টার্গেট মেশিনে কোনো agent ইনস্টল লাগে না — Linux-এ SSH, Windows-এ WinRM, ক্লাউডে API দিয়ে কাজ চালায়; তাই সেটআপ সরল।",
    aen: "IaC: reviewable in Git, reusable across environments, reliably repeatable. Terraform: declarative HCL; provider=platform link, resource=infrastructure unit, state=what exists. Ansible agentless: no agent on targets — SSH/WinRM/API drive the work, so setup stays simple."
  },
  story: `<p class="scene-setting">মেঘে একটা অ্যাপ ছাড়তে লাগবে network, কয়েকটা সার্ভার, ডেটাবেস, স্টোরেজ, সিকিউরিটি-রুল। একবার কনসোলে ক্লিক করে বানানো গেল — কিন্তু তারপর? Testing-এর জন্য একই সেটআপ, production-এ আরেকটা, নতুন ইঞ্জিনিয়ার এলে প্রশ্ন: এই সব কীভাবে কনফিগার করা? প্রথম ভিডিওর উত্তর: কোড দিয়ে লেখো — Terraform। দ্বিতীয়টা সার্ভারের ভেতরের গল্প: ১০০টা ওয়েব-সার্ভারে nginx লাগাতে হবে — Ansible।</p>
<p class="scene-setting en">Launching an app needs network, servers, database, storage, rules. Clicking once is fine — but then the same for testing, for production, and the new engineer asking how it was all configured. Video one: write it as code — Terraform. Video two goes inside the servers: nginx on a hundred machines — Ansible.</p>
<div class="code-block">TERRAFORM — অবকাঠামো যখন কোড (IaC):

কেন: ম্যানুয়াল-সেটআপ পুনরাবৃত্তি-কঠিন,
  বোঝা-কঠিন, রিভিউ-অসম্ভব
কোডে লিখলে: Git-এ রাখো → টিম-রিভিউ →
  ইতিহাস-ট্র্যাক → যত খুশি environment-এ
  আবার ব্যবহার

ভাষা: HCL; ধরন: DECLARATIVE —
  ফল লেখো (একটা VM, একটা DB চাই),
  ধাপ নয়; Terraform নিজে ঠিক করে
  কী বানাতে/বদলাতে/ভাঙতে হবে।

তিন স্তম্ভ:
  PROVIDER — প্ল্যাটফর্ম-সংযোগ: AWS/Azure/
    GCP/K8s/GitHub/Datadog... Terraform নিজে
    কিছু হোস্ট করে না; API-তে অনুরোধ পাঠায়
  RESOURCE — ইনফ্রার একক: একটা VM, একটা
    DB, network, storage bucket, DNS record
  STATE — খতিয়ান: কোন আসল রিসোর্স কোন
    config-এর; চালালে তিন তুলনা —
    config ↔ state ↔ বাস্তবতা → ঠিক ততটাই
    বদল, বেশি নয়</div>
<div class="code-block">ANSIBLE — এক আদেশে শত সার্ভার:

কল্পনা: ১০০টা ওয়েব-সার্ভার, সবগুলোতে
nginx লাগাতে হবে — হাতে করলে ১০০ বার
একই কাজ; Ansible-এ একবার লিখো, বাকিটা সে।

তিনটি চরিত্র:
  INVENTORY — কোথায়: টার্গেট-হোস্টের তালিকা,
    দলে সাজানো (webservers, dbservers, dev, prod)
  PLAYBOOK (YAML) — কী: কোন দলে, কোন
    কাঙ্ক্ষিত-অবস্থা, কোন কোন কাজ
  MODULE — কীভাবে: প্যাকেজ-ইনস্টল, সার্ভিস-
    ব্যবস্থাপনা, ফাইল-কপি, ইউজার-তৈরির
    মতো বাস্তব অপারেশন

DESIRED STATE-চিন্তা:
  নয়: এই কমান্ড চালাও
  বরং: nginx ইনস্টল-করা-থাকা নিশ্চিত করো

AGENTLESS — সবচেয়ে বড় সুবিধা:
  টার্গেট-মেশিনে কোনো agent লাগে না!
  Linux → SSH, Windows → WinRM,
  ক্লাউড/অন্য সিস্টেম → API
  তাই ব্যবস্থাপনা-সেটআপ অতি-সরল</div>
<div class="callout tip"><span class="co-icon">📜</span><div><strong>দরজার সংযোগ:</strong> Terraform বানায় রাজ্য (মেঘে VM/DB/network), Ansible গোছায় ভেতর (সেই মেশিনগুলোতে প্যাকেজ-কনফিগ); K8s (দরজা ৪) চালায় কন্টেইনার-বহর — <strong>তিনজন মিলে মেঘের পূর্ণ শাসন: বানাও, গোছাও, চালাও।</strong> আর দুজনেই declarative — ফল বলো, পথ তারা খোঁজে; K8s-এর সেই সুর এখানেও।</div></div>
<div class="secret-box">📜 মেঘের নকশা কোডে, সার্ভারের নিয়ম কোডে — রাজ্য লিখিত হলে পুনরাবৃত্তি মুহূর্তের কাজ; একবার লেখো, শতবার চালাও।</div>`,
  senior: {
    title: "Terraform + Ansible — দ্রুত গাইড",
    body: "<p><strong>Terraform (IaC):</strong> HCL-declarative; provider (প্ল্যাটফর্ম-সংযোগ) + resource (ইনফ্রা-একক) + state (খতিয়ান); Git-রিভিউ/পুনর্ব্যবহার/নির্ভরযোগ্য-পুনরাবৃত্তি। <strong>Ansible (config-mgmt):</strong> inventory (কোথায়) + playbook-YAML (কী; desired-state) + module (কাজ); agentless — SSH/WinRM/API, সেটআপ-সরল। <strong>ভাগ:</strong> Terraform=রাজ্য-বানানো, Ansible=ভেতর-গোছানো; দুটোই declarative।</p>"
  }
});

doors.push({
  num: 6,
  icon: "🌤️",
  color: "#fb7185",
  name: "রাতের কর্মস্রোত ও ছাড়ার কৌশল",
  subtitle: "Apache Airflow in 8 Minutes + Deployment Strategies",
  tech: "Workflow orchestration (DAG, dependencies, retries/monitoring); big bang / rolling / blue-green / canary deployments",
  spirit: "তাদবির — ক্রম আর কৌশলে ঝুঁকি নিয়ন্ত্রণ",
  secret: "শত ডেটা-কাজ পরস্পরনির্ভর — ক্রম ভাঙলে সব ভাঙে; Airflow সেই ক্রমের অর্কেস্ট্রা (DAG-এ লেখা নির্ভরতা, retry-মনিটরিংসহ)। আর নতুন ভার্সন ছাড়ার চার কৌশল — big bang থেকে canary — সবই এক প্রশ্নের উত্তর: ভাঙলে কতজন পোড়বে?",
  recall: {
    q: "Airflow-এর DAG কী সমস্যার সমাধান? Rolling আর canary ডিপ্লয়ের মূল পার্থক্য?",
    qen: "What problem does an Airflow DAG solve? Rolling vs canary — the core difference?",
    a: "প্রতি রাতে শত ডেটা-জব — pull → clean → enrich → combine → report → dashboard, একটার উপর একটা নির্ভর; একটা ফেল/দেরি করলে পুরো শৃঙ্খল ভাঙে। DAG (Directed Acyclic Graph)-এ নির্ভরতা লেখা থাকে — Airflow সঠিক ক্রমে চালায়, মনিটর করে, ফেল হলে retry করে। Rolling: ১০ সার্ভারের ১-২টা বাদ দিয়ে আপডেট → health-check → ফেরত, দলে দলে এগোয় — ডাউনটাইম প্রায় শূন্য, তবে সংক্ষেপে দুই ভার্সন চলে। Canary: নতুন ভার্সন প্রথমে অল্প কিছু ইউজার/ট্রাফিকেই — সমস্যা হলে বিস্ফোরণ-ব্যাস ছোট, মেপে-মেপে ধাপে ধাপে ১০০%-এ নেওয়া। Big bang (সবাই একসাথে, ঝুঁকিপূর্ণ) আর recreate (পুরনো বন্ধ → নতুন চালু, ডাউনটাইমসহ) নন-ক্রিটিক্যালের জিনিস।",
    aen: "Hundreds of interdependent nightly jobs break when one link fails; a DAG encodes the dependencies and Airflow runs, monitors, retries. Rolling updates servers in health-checked batches; canary exposes the new version to a small slice first, limiting blast radius, then ramps to 100%."
  },
  story: `<p class="scene-setting">প্রথম ভিডিও রাতের শহর দেখায়: কোম্পানির শত ডেটা-জব প্রতি রাতে জাগে — কেউ ডেটা টানে, কেউ পরিষ্কার করে, কেউ রিপোর্ট বানায়; আর একটার ভুল পুরো শৃঙ্খল ভাঙে। দ্বিতীয় ভিডিও দিনের মুহূর্ত: নতুন ভার্সন লাইভ করার সিদ্ধান্ত — কীভাবে ছাড়বে যেন ভাঙলে সবাই না পোড়ে?</p>
<p class="scene-setting en">Video one shows the nightly city: hundreds of data jobs waking in dependency chains, one failure breaking all. Video two is the daytime decision: how to release so a break burns nobody?</p>
<div class="code-block">APACHE AIRFLOW — ডেটা-কর্মস্রোতের অর্কেস্ট্রা:

সমস্যা: ওয়ার্কফ্লো = সংযুক্ত কাজের শৃঙ্খল
  খাবার-ডেলিভারির সকালের ড্যাশবোর্ড:
    order-ডেটা টানো → খারাপ রেকর্ড পরিষ্কার →
    রেস্টুরেন্ট-তথ্য আনো → একত্র করো →
    মেট্রিক হিসাব → রিপোর্ট → ড্যাশবোর্ড
  এক জব ফেল বা দেরি = অসম্পূর্ণ ডেটা =
    ভাঙা ড্যাশবোর্ড

সমাধান: DAG — কাজের মানচিত্র
  DIRECTED ACYCLIC GRAPH: কোন কাজ কোনটার
    আগে, কোনটা কার পরে — তীর দিয়ে লেখা
  Airflow সেই মানচিত্র মেনে চালায়:
    সঠিক ক্রম, নির্ধারিত সময়, মনিটরিং,
    ফেল-হ্যান্ডলিং, স্বয়ংক্রিয় RETRY
  ফলে: রাত শেষে ড্যাশবোর্ড তৈরি —
    কেউ জাগতে হয় না, কেউ হাত ছোঁয় না</div>
<div class="code-block">ডিপ্লয়-কৌশল — ভাঙলে কতজন পোড়ে?

BIG BANG: সবাইকে একসাথে নতুন ভার্সনে
  সহজ, কিন্তু ভাঙলে সব ইউজার একসাথে পোড়ে;
  ছোট অন্তর্বর্তী টুলের জিনিস

RECREATE: পুরনো পুরো বন্ধ → নতুন চালু
  মাঝে ডাউনটাইম; dev/test-এর জন্য

ROLLING: দলে দলে এগোও
  ১০ সার্ভারের ১-২টা ট্রাফিক থেকে বাদ →
  নতুন ভার্সন → health-check → ফেরত;
  সুস্থ হলে পরের দল
  ডাউনটাইম প্রায় শূন্য; K8s-rolling-update,
  LB-সংযুক্ত CI/CD-এর প্রাকৃতিক পথ

BLUE-GREEN: দুই সমান রাজ্য
  Blue (বর্তমান) চলতে থাকে; Green (নতুন)
  পাশে তৈরি; টেস্ট শেষে ট্রাফিক-সুইচ এক
  মুহূর্তে; সমস্যা দেখা দিলে পুরনো-ফেরত

CANARY: খচ্চরে প্রথম পরীক্ষা
  নতুন ভার্সন প্রথমে ৫% ইউজারের কাছে;
  মেট্রিক মেপে দেখো — সুস্থ? ধাপে ধাপে
  ২৫% → ৫০% → ১০০%; অসুস্থ? সঙ্গে সঙ্গে
  ফেরত — বিস্ফোরণ-ব্যাস ক্ষুদ্র রাখা কৌশল</div>
<div class="callout warn"><span class="co-icon">🌤️</span><div><strong>কৌশল-ছাঁকনি:</strong> ইউজার-সংখ্যা ও ঝুঁকি দেখে বাছো — অভ্যন্তরীণ টুল big bang সামলাতে পারে, প্রোডাকশনে rolling/blue-green/canary; আর মনে রাখো System Design-বইয়ের পাঠ: প্রোডাকশনে পরীক্ষাই আসল পরীক্ষা — কৌশল মানে সেই পরীক্ষার খাতা ছোট রাখা।</div></div>
<div class="secret-box">🌤️ নির্ভরতা DAG-এ লেখো, Airflow ক্রম চালাবে; ভার্সন ছাড়ো অংশে অংশে — canary-র খচ্চর আগে, তারপর পুরো কাফেলা।</div>`,
  senior: {
    title: "Airflow + ডিপ্লয়-কৌশল — দ্রুত গাইড",
    body: "<p><strong>Airflow:</strong> workflow-orchestration; DAG=নির্ভরতা-মানচিত্র (directed acyclic); সঠিক-ক্রম+সময়+মনিটর+retry। <strong>কৌশল:</strong> big bang (সব-একসাথে, ঝুঁকিপূর্ণ) / recreate (ডাউনটাইমসহ, dev) / rolling (batch-wise health-check, প্রায়-শূন্য-ডাউনটাইম) / blue-green (সমান-দুই-রাজ্য, ইনস্ট্যান্ট-সুইচ+রোলব্যাক) / canary (৫%→১০০% ধাপে-মেপে, blast-radius-ছোট)। <strong>বাছাই:</strong> ঝুঁকি×ইউজার দেখে।</p>"
  }
});

doors.push({
  num: 7,
  icon: "🌿",
  color: "#fb7185",
  name: "গিট-নদী ও ঠিকানা-বই",
  subtitle: "Every GitHub Concept in 2 Minutes",
  tech: "Git vs GitHub, commits, branches, push/pull, remote repositories; code hosting + collaboration",
  spirit: "সাবর — পরিবর্তনকে নিরাপদ পথে মেলানো",
  secret: "Git তোমার মেশিনের সময়-যন্ত্র — commit-এ স্ন্যাপশট, branch-এ সমান্তরাল জগৎ; GitHub সেই নদীর মেঘ-ঠিকানা — রিপো সবার কাছে, কোড কখনো হারায় না, দল একসাথে বই।",
  recall: {
    q: "Git আর GitHub-এর সম্পর্ক কী? Branch কী সমস্যার সমাধান করে?",
    qen: "How do Git and GitHub relate? What problem does a branch solve?",
    a: "Git = লোকাল version-control টুল (যেকোনো OS-এ, যেকোনো ভাষায়): commit-এ কোডের স্ন্যাপশট — যেকোনো মুহূর্তের অবস্থা ধরে রাখে, ফেরানো যায়; branch = মূল সংস্করণ অক্ষত রেখে সমান্তরাল পরীক্ষা-পথ — নতুন ফিচার stable-কে না-ছুঁয়ে চলে, শেষে merge। GitHub = Git-এর ওপর নির্মিত ক্লাউড-হোস্টিং: রিমোট রিপোজিটরিতে push/pull — মেশিন ভাঙলেও কোড নিরাপদ, ডিভাইস-বদলে অ্যাক্সেস, আর দলের সহযোগিতার কেন্দ্র (PR, রিভিউ, ইস্যু — রোডম্যাপের ধাপ ৪-এর পূর্ণ রূপ)।",
    aen: "Git is local version control — commits snapshot any moment, branches parallelize experimentation without touching stable. GitHub hosts Git repositories in the cloud — push/pull keep code safe and collaboration centered."
  },
  story: `<p class="scene-setting">দরজা ৭-এর দুই মিনিটের ভিডিওটা সিরিজের অন্যতম ঘন পাঠ: শিক্ষক এক নিঃশ্বাসে জোড়ে দেন পুরো গিট-জগৎ — Git নিজে কী, GitHub তার ওপর কী, আর মাঝে commit-branch-merge-এর নদী। রোডম্যাপের ধাপ ৪ এখানে বসে যায় ঠিক জায়গায়।</p>
<p class="scene-setting en">A dense two-minute video wires the whole Git world together — what Git is, what GitHub adds, and the river of commits, branches, and merges between.</p>
<div class="code-block">GIT — লোকাল টাইম-মেশিন:
  COMMIT = কোডের স্ন্যাপশট: যেকোনো মুহূর্তের
    অবস্থা ধরে রাখা — পেছনে ফেরা,
    তুলনা, পুনরুদ্ধার সব সম্ভব
  BRANCH = সমান্তরাল জগৎ: মূল (stable)
    অক্ষত রেখে নতুন ফিচারের পথ বানাও;
    শেষ হলে MERGE করে ফেরাও —
    পরীক্ষা নিরাপদ, ভুল শোধরানো সহজ
  যেকোনো ভাষা, যেকোনো প্রজেক্ট, লোকালেই চলে

GITHUB — মেঘের ঠিকানা-বই:
  Git-এর ওপর ক্লাউড-প্ল্যাটফর্ম: রিপোজিটরি
  (কোডের ভাণ্ডার) মেঘে থাকে
  PUSH: লোকাল → মেঘ; PULL: মেঘ → লোকাল
  মেশিন ক্র্যাশ? কোড নিরাপদ। নতুন ডিভাইস?
  টানে নাও।
  আর দলের জন্য: একই রিপোতে সবাই —
  ব্রাঞ্চে কাজ, PR-এ রিভিউ, ইস্যুতে আলোচনা
  (DevOps-রোডম্যাপের ধাপ-৪: প্রজেক্ট+স্ক্রিপ্ট+
   কনফিগ+ডকুমেন্টেশন — সব GitHub-এ)</div>
<div class="callout tip"><span class="co-icon">🌿</span><div><strong>সিরিজের আয়না:</strong> এই পুরো বইটাই (আর তোমার Knowledge Courtyard!) GitHub Pages-এ বাস করে — push করলেই দুনিয়া দেখে; Git-নদী শেখা মানে নিজের কাজের স্রোত শেখা।</div></div>
<div class="secret-box">🌿 লোকালে সময়-যন্ত্র (Git), মেঘে ঠিকানা (GitHub) — commit-এ ইতিহাস, branch-এ সাহস, push-এ নিরাপত্তা।</div>`,
  senior: {
    title: "Git/GitHub — দ্রুত গাইড",
    body: "<p><strong>Git:</strong> লোকাল VCS — commit=স্ন্যাপশট (ফেরত/তুলনা), branch=stable-অক্ষত-সমান্তরাল-পথ → merge। <strong>GitHub:</strong> Git-রিপো-হোস্টিং — push/pull-এ ব্যাকআপ+ডিভাইস-স্বাধীনতা+দল-সহযোগিতা (PR/রিভিউ/ইস্যু)। <strong>DevOps-সংযোগ:</strong> IaC+পাইপলাইন+ডকুমেন্টেশন — সবকিছুর আদি-ঠিকানা গিট; রোডম্যাপ-ধাপ-৪-এর কেন্দ্র।</p>"
  }
});

doors.push({
  num: 8,
  icon: "🗺️",
  color: "#fecdd3",
  name: "প্যাকেটের রাজপথ",
  subtitle: "Every Networking Concept in 200 Seconds — পূর্ণ যাত্রার সমাপ্তি",
  tech: "IP/gateway/DNS, packets+routing, OSI recall — cloud's physical truth",
  spirit: "তাফাক্কুর — মেঘের নিচের মাটি ভাবা",
  secret: "মেঘ কতই উঁচুতে ভাসুক — তার প্রতিটা বিট চলে এই রাজপথ দিয়েই: ঠিকানা (IP), দরজা (gateway), অনুবাদক (DNS), খোড়াচ্ছি প্যাকেট আর রাউটারের হপ-হপ সিদ্ধান্ত; DevOps মানে এই পথ চিনে মেঘ চালানো।",
  recall: {
    q: "Gateway আর DNS-এর কাজ দুটো এক বাক্যে বলো। প্যাকেট-ভিত্তিক যাত্রা কেন নির্ভরযোগ্য?",
    qen: "One sentence each for gateway and DNS. Why is packet-based travel reliable?",
    a: "Gateway (সাধারণত রাউটার) = লোকাল নেটওয়ার্কের বাইরের দরজা — বাইরের গন্তব্যে ডেটা ওখান দিয়েই বেরোয়; ঘরের ডিভাইসগুলো প্রাইভেট IP-তে, রাউটার পাবলিক IP-তে সবাইকে প্রতিনিধিত্ব করে। DNS = নাম→IP অনুবাদক (google.com → ঠিকানা)। প্যাকেট-যাত্রা নির্ভরযোগ্য কারণ বার্তা ছোট ছোট প্যাকেটে ভাগ — প্রতিটায় source/destination IP+ডেটার টুকরো; রাউটার destination দেখে next-best-hop বাছে, ট্রাফিক-অবস্থায় পথ আলাদা হতে পারে, সব গিয়ে গন্তব্যে জোড়া লাগে — এক পথ ফেল করলেই সব হারায় না, রিকভারি সহজ।",
    aen: "Gateway (usually the router) is the local network's exit door, representing private devices via one public IP. DNS translates names to IPs. Packet-based travel is reliable because small labeled units can take different routes and reassemble, surviving partial failures."
  },
  story: `<p class="scene-setting">শেষ দরজায় ২০০ সেকেন্ডের এক ঝলক ভিডিও — আর সেই ঝলকেই পুরো সিরিজের বৃত্ত পূর্ণ হয়। মেঘের সব শিল্প — কন্টেইনার, পাইপলাইন, অর্কেস্ট্রা — দাঁড়িয়ে আছে এই দরজার রাজপথের ওপর; System Design-বইয়ের নেটওয়ার্ক-প্রসঙ্গ আর Network Fortress-এর পাঠ এখানে DevOps-এর মাটিতে নেমে আসে।</p>
<p class="scene-setting en">A 200-second flash closes the circle: every cloud industry stands on this road of packets — and the series' earlier network lessons land on DevOps ground.</p>
<div class="code-block">ইন্টারনেটের প্রথম প্রশ্ন: এক কম্পিউটার কীভাবে
দুনিয়ার অন্য প্রান্তের আরেকটার সাথে কথা বলে?

ঠিকানা — IP ADDRESS
  প্রতিটা ডিভাইসের নিজস্ব পরিচয়; ঘরের
  ভেতরের সবাই PRIVATE IP, রাউটার এক
  PUBLIC IP-তে সবাইকে প্রতিনিধিত্ব করে

যোগ — NETWORK INTERFACE (Wi-Fi/Ethernet)
  ঢুকলেই পাও শুধু IP নয়: DEFAULT GATEWAY
  (সাধারণত রাউটার — বাইরে যাওয়ার দরজা)
  + DNS সার্ভারের ঠিকানা

ভাগ — PACKET
  বার্তা যায় না একখণ্ডে; ভাগ হয় ছোট ছোট
  PACKET-এ: source IP + destination IP +
  ডেটার টুকরো — তাই দ্রুত, নির্ভরযোগ্য,
  ফেল থেকে রিকভারি সহজ

পথ — ROUTING
  রাউটার destination IP দেখে ঠিক করে
  NEXT BEST HOP; ট্রাফিক-অবস্থায় পথ
  বদলায় — সব প্যাকেট শেষে গন্তব্যে
  জোড়া বসে, ক্রম ঠিক হয় পুনর্গঠনে

আর এই সবের ওপরে যা চলে — OSI-এর স্তর,
  TLS-এর তালা, HTTP-র ভাষা — আগের বইয়ের
  পুরোনো বন্ধুরা; মেঘ তাদেরই ভাড়া-বাড়ি!</div>
<div class="callout tip"><span class="co-icon">🏁</span><div><strong>সিরিজের সমাপ্তি-বৃত্ত:</strong> Book ৪-এ (Network Fortress) প্যাকেটের জন্মকথা পড়েছিলে, আজ Book ৭-এর শেষে সেই প্যাকেটই মেঘের মাটিতে হাজির — কন্টেইনার থেকে canary, সব কৌশল এই রাজপথেই ছুটে বেড়ায়। <strong>আট দরজা পেরিয়ে তুমি এখন মেঘ-কারখানার পুরো শিল্প-চিত্র পেয়েছো: ইট (সার্ভিস), বাক্স (কন্টেইনার), দলপতি (K8s), প্রহরী (Jenkins), খতিয়ান (Terraform), আদেশ (Ansible), স্রোত (Airflow), কৌশল (canary) — আর সবার নিচে এই রাজপথ।</strong></div></div>
<div class="secret-box">🗺️ মেঘ যত উঁচুতেই ভাসুক, পথ এক-ই: ঠিকানা-দরজা-অনুবাদক-প্যাকেট-হপ; পথ চেনো, মেঘ তোমার।</div>`,
  senior: {
    title: "নেটওয়ার্কিং-ঝলক — দ্রুত গাইড",
    body: "<p><strong>পাঁচ স্তম্ভ:</strong> IP (পরিচয়; ঘরে private, রাউটারে public-প্রতিনিধিত্ব), interface+gateway (বাইরের দরজা)+DNS (নাম→IP), packet (ছোট লেবেলড-ইউনিট — দ্রুত/নির্ভরযোগ্য/রিকভারেবল), routing (destination→next-hop, পথ-বদলান্তেও পুনর্জোড়া)। <strong>DevOps-স্থান:</strong> মেঘের সব শিল্প এই রাজপথের ওপর — VPC/LB/DNS সার্ভিসগুলো এই মূল-ধারণারই ভাড়া-রূপ।</p>"
  }
});
