// doors-35-36.js — The Ledger Craftsman (LedgerPilot deep-dive)


doors.push({
  num: 35,
  icon: "🌅",
  color: "#34d399",
  name: "নতুন কারিগরের প্রথম সপ্তাহ",
  subtitle: "The New Craftsman's First Week — Capstone Walkthrough",
  tech: "Day-by-day onboarding: setup → read → trace → tiny fix → first feature (everything converges)",
  spirit: "রিহলা — riḥlah (the journey of seeking knowledge: travel, sit, serve)",
  secret: "প্রথম সপ্তাহে ভাঙার নয়, চেনার — দিন ৫-এ তোমার প্রথম ফিচার একুশটি দরজার প্রতিটি ছুঁবে।",
  recall: {
    q: "প্রথম সপ্তাহে কোন কাজটা করা নিষেধ?",
    qen: "What must you NOT do in week one?",
    a: "বড় রিফ্যাক্টর/নতুন ডিপেন্ডেন্সি/settings-ছোঁয়া — নিষেধ-তালিকা সক্রিয়; চেনো-তারপর-ছোঁও।",
    aen: "Big refactors, new dependencies, settings edits — the forbidden list is active; know first, touch second."
  },
  story: `<p class="scene-setting">নতুন কারিগর শহরে এসে সোজা কাজে নামতে চায় — সবাই চায়। রহিমা খাতুন তাকে থামিয়ে এক পাথরের বেঞ্চে
  বসান: <strong>"সাত দিন। তারপর তোমার দোকান।"</strong> দিন-১: শহর ঘুরো (রান করাও, লগইন করো, পাঁচ রোলে ঢুকো)। দিন-২:
  দলিলঘর পড়ো — অভিধান, সনদ, আগের বইখানা (এই বই!)। দিন-৩: <strong>একটা সুতো টানো</strong> — "Approve" বাটন থেকে
  ব্যাংক পর্যন্ত, নিজ হাতে ফাইল খুলে। দিন-৪: একটা ছোট ভাঙা জিনিস সারাও — পরীক্ষা-আগে। দিন-৫: <strong>তোমার প্রথম
  ফিচার</strong> — ছোট, কিন্তু পূর্ণ: ব্রাঞ্চ থেকে handoff পর্যন্ত। দিন-৬: অন্যের কাছে বসো — সাই-এর পাশে এক ঘণ্টা।
  দিন-৭: নিজের দোকানের নকশা আঁকো। সপ্তাহ শেষে রহিমা জিজ্ঞেস করবেন একটাই — <strong>"একুশটি দরজার কতগুলো তোমার
  নিজের হাতে খোলা?"</strong></p>
  <p class="scene-setting en">A new craftsman arrives eager to build — everyone is. Rahima Khatun stops him at
  a stone bench: <strong>"Seven days. Then your shop."</strong> Day-1: walk the city (run it, log in, enter as
  all five roles). Day-2: read the document-houses — the glossary, the charters, this very book. Day-3:
  <strong>pull one thread</strong> — the "Approve" button to the bank, opening files with your own hands.
  Day-4: mend one small broken thing — test-first. Day-5: <strong>your first feature</strong> — small, but
  whole: branch to handoff. Day-6: sit beside another — an hour at Sai's side. Day-7: sketch your own shop.
  At week's end Rahima asks one thing — <strong>"how many of the twenty-one doors have you opened with your
  own hands?"</strong></p>
  <div class="code-block">প্রথম সপ্তাহ — দিনে দিনে (এই বইয়ের দরজা-ম্যাপসহ)

দিন ১ — শহর চালাও (দরজা ১, ২১)
  git clone · venv · pip install -r requirements/{base,dev}.txt
  cd frontend && npm install
  docker-compose -f docker-compose.dev.yml up -d   # mysql+redis
  (লোকাল-env: DB 3307 · Redis 6379 — দরজা ২০)
  python manage.py migrate && createsuperuser
  ./deploy.sh dev-reload     # বা দুই টার্মিনাল
  → লগইন; quick-login দিয়ে ৫ রোলে ঢুকো;
    দশটি দোকান ঘুরো (দরজা ৩৬-এর মানচিত্র)

দিন ২ — দলিল পড়ো (দরজা ১, ২, ১৮, ১৯)
  CONTEXT.md (অভিধান — দিনে ২ বার মুখস্থ স্তরে না,
  চেনার স্তরে) · .claude/PROJECT_CONTEXT.md (gotcha-১০)
  · AGENT_PROTOCOL.md (DoR/DoD/handoff) · STATE.md
  · .planning/PATTERNS.md + SKILLS-GUIDE.md
  ট্রেস করো কাগজে: Company → Client → InvoiceLine →
  XeroInvoice (দরজা ২→৪→৯)

দিন ৩ — এক সুতো টানো (দরজা ৩৬-এর ক্লিক-যাত্রা, নিজে)
  BatchDetailView.vue-তে approve বাটন
  → useMutationAction (দরজা ১৮)
  → invoiceService.transition → apiClient
  → urls.py → views/saves.py → permission (দরজা ১৩)
  → services/fsm.py (দরজা ৫) → handoffs.py + emit (দরজা ১৭)
  প্রতিটি ফাইল নিজে খোলো; লাইন চিহ্নিত করো।
  তারপর আয়না-সুতো: serializers.py → api.generated.ts
  (দরজা ১৬) আর ম্যানিফেস্ট-সুতো: registry → manifest (দরজা ১৭)

দিন ৪ — ছোট ভাঙা সারাও (দরজা ২৫)
  কোনো 'good first issue'-মাফিক বা নিজে পাওয়া ছোট বাগ
  ① ব্যর্থ-পরীক্ষা লেখো (🔴) ② সারো (🟢) ③ রিফ্যাক্ট (🔵)
  গেট: ruff+pytest · lint+type+test+build (দরজা ২৩)
  STATE.md রিজেন শিখো এখানেই — প্রথমবারই অভ্যাস করো
  কমিট: fix(<scope>): ... — PR → development

দিন ৫ — প্রথম ফিচার (দরজা ৩১-এর রেসিপি, পূর্ণ)
  ছোট বেছে নাও: একটা ফিল্ড + একটা বাটন মাত্র
  ⓪ চুক্তি কাগজে ① BE ৮-ধাপ ② গেট ③ FE ৮-ধাপ
  ④ গেট ⑤ STATE.md + handoff YAML
  এখন গুনে দেখো: এই এক দিনে তুমি ছুঁয়েছ
  দরজা ৫, ১১, ১২, ১৩, ১৬, ১৭, ১৯, ২০, ২২ — ন-টি!

দিন ৬ — পাশে বসো (দরজা ৩৬-এর কর্মসূত্র)
  সাই/ভিকি/ওয়েন-এর প্রতিবেশী এক ঘণ্টা (স্ক্রিন-শেয়ার
  বা রেকর্ডিং) — টুল নয়, কাজের ছন্দ দেখো:
  কোন পর্দায় কতক্ষণ, কোথায় ইতস্তত, কোথায় ফিরে-ফিরে
  যায়। সেই ইতস্তত-জায়গাই তোমার প্রথম বড় উন্নয়নের ঠিকানা।

দিন ৭ — নকশা আঁকো
  নিজের দোকান/উন্নয়নের প্রস্তাব: এক পাতা —
  কাজের আকৃতি (দরজা ২৩) · কোন কারখানা · কারা ঢুকবে ·
  কোন প্যাটার্ন · কোন পরীক্ষা
  রহিমার তিন প্রশ্নের উত্তর লিখিত আনো

নিষেধ-তালিকা (সপ্তাহজুড়ে সক্রিয়):
  বড় রিফ্যাক্টর ✗ · নতুন ডিপেন্ডেন্সি ✗ · settings-ছোঁয়া ✗
  · csrf_exempt ✗ · ধ্বংসাত্মক মাইগ্রেশন ✗ · main/production-পুশ ✗
  · "সুবিধার জন্য" ModelViewSet ✗ (দরজা ২৫)</div>
  <div class="verse">রিহলা — জ্ঞানার্থীর সফর: "যে জ্ঞান খুঁজতে রওনা হয়, সে আল্লাহর পথে রওনা হয়" (মুসলিম ২৬৯৯, অর্থে)। সাহাবিরা জ্ঞানের জন্য মাসের পথ হাঁটতেন — এক বৈঠকের জন্য। রহিমার সাত দিন সেই রিহলার খণ্ড-রূপ: চালাও → পড়ো → টানো → সারাও → গড়ো → দেখো → আঁকো। যে প্রথম দিনেই গড়তে বসে, সে হাতুড়ি চেনে না — শুধু শব্দ চেনে।</div>
  <div class="diagram">
    <div class="diag-title">Seven Days, Twenty-One Doors — Capstone Convergence</div>
    <svg viewBox="0 0 560 340" xmlns="http://www.w3.org/2000/svg">
      <defs><marker id="arrowW26" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto"><path d="M0,0 L0,6 L9,3 z" fill="#5eead4"/></marker></defs>
      <rect x="15" y="12" width="160" height="42" rx="8" fill="rgba(45,212,191,0.10)" stroke="#2dd4bf" stroke-width="1.4"/>
      <text x="95" y="30" text-anchor="middle" fill="#5eead4" font-size="8.5" font-weight="700">দিন ১ · শহর চালাও</text>
      <text x="95" y="44" text-anchor="middle" fill="#94a3b8" font-size="8">setup · ৫-রোল লগইন</text>
      <rect x="15" y="62" width="160" height="42" rx="8" fill="rgba(45,212,191,0.08)" stroke="#2dd4bf" stroke-width="1.3"/>
      <text x="95" y="80" text-anchor="middle" fill="#5eead4" font-size="8.5" font-weight="700">দিন ২ · দলিল পড়ো</text>
      <text x="95" y="94" text-anchor="middle" fill="#94a3b8" font-size="8">অভিধান · সনদ · STATE</text>
      <rect x="15" y="112" width="160" height="42" rx="8" fill="rgba(45,212,191,0.08)" stroke="#2dd4bf" stroke-width="1.3"/>
      <text x="95" y="130" text-anchor="middle" fill="#5eead4" font-size="8.5" font-weight="700">দিন ৩ · সুতো টানো</text>
      <text x="95" y="144" text-anchor="middle" fill="#94a3b8" font-size="8">Approve→ব্যাংক নিজ হাতে</text>
      <rect x="15" y="162" width="160" height="42" rx="8" fill="rgba(251,191,36,0.10)" stroke="#fbbf24" stroke-width="1.4"/>
      <text x="95" y="180" text-anchor="middle" fill="#fcd34d" font-size="8.5" font-weight="700">দিন ৪ · ভাঙা সারাও</text>
      <text x="95" y="194" text-anchor="middle" fill="#94a3b8" font-size="8">🔴→🟢→🔵 প্রথম PR</text>
      <rect x="15" y="212" width="160" height="42" rx="8" fill="rgba(52,211,153,0.12)" stroke="#34d399" stroke-width="1.7"/>
      <text x="95" y="230" text-anchor="middle" fill="#6ee7b7" font-size="8.5" font-weight="700">দিন ৫ · প্রথম ফিচার ★</text>
      <text x="95" y="244" text-anchor="middle" fill="#94a3b8" font-size="8">রেসিপি পূর্ণ — ন-দরজা ছোঁয়</text>
      <rect x="15" y="262" width="160" height="42" rx="8" fill="rgba(129,140,248,0.08)" stroke="#818cf8" stroke-width="1.3"/>
      <text x="95" y="280" text-anchor="middle" fill="#a5b4fc" font-size="8.5" font-weight="700">দিন ৬ · পাশে বসো</text>
      <text x="95" y="294" text-anchor="middle" fill="#94a3b8" font-size="8">অপারেটরের ছন্দ দেখো</text>
      <rect x="15" y="312" width="160" height="26" rx="8" fill="rgba(129,140,248,0.08)" stroke="#818cf8" stroke-width="1.3"/>
      <text x="95" y="329" text-anchor="middle" fill="#a5b4fc" font-size="8" font-weight="600">দিন ৭ · নকশা আঁকো</text>
      <rect x="215" y="60" width="330" height="262" rx="12" fill="rgba(52,211,153,0.05)" stroke="#34d399" stroke-width="1.4"/>
      <text x="380" y="86" text-anchor="middle" fill="#6ee7b7" font-size="10" font-weight="700">দিন-৫-এর এক ফিচার যে দরজাগুলো ছোঁয়</text>
      <text x="380" y="112" text-anchor="middle" fill="#5eead4" font-size="8.5">৫ FSM · ১১ চক-কালি · ১২ তালা · ১৩ পাহারা</text>
      <text x="380" y="130" text-anchor="middle" fill="#5eead4" font-size="8.5">১৪ বাঁশি (হলে) · ১৫ বাহি (হলে)</text>
      <text x="380" y="148" text-anchor="middle" fill="#5eead4" font-size="8.5">১৬ আয়না · ১৭ মানচিত্র · ১৯ সনদ · ২০ দরবার</text>
      <text x="380" y="166" text-anchor="middle" fill="#64748b" font-size="8">(১ আমানত-নীতি সব দরজার নিচে বহমান)</text>
      <rect x="240" y="190" width="280" height="110" rx="10" fill="rgba(251,191,36,0.07)" stroke="#fbbf24" stroke-width="1.2"/>
      <text x="380" y="214" text-anchor="middle" fill="#fcd34d" font-size="9" font-weight="700">রহিমার সপ্তাহ-শেষের এক প্রশ্ন:</text>
      <text x="380" y="236" text-anchor="middle" fill="#cbd5e1" font-size="9.5">"একুশটি দরজার কতগুলো</text>
      <text x="380" y="254" text-anchor="middle" fill="#cbd5e1" font-size="9.5">তোমার নিজের হাতে খোলা?"</text>
      <text x="380" y="282" text-anchor="middle" fill="#94a3b8" font-size="8">উত্তর ১৩-এর কম হলদিন যাও ফিরে — দিন-৩ আরেকবার, আরও ধীরে</text>
      <line x1="175" y1="33" x2="213" y2="80" stroke="#5eead4" stroke-width="1.2" stroke-dasharray="4 3" marker-end="url(#arrowW26)"/>
      <line x1="175" y1="83" x2="213" y2="110" stroke="#5eead4" stroke-width="1.2" stroke-dasharray="4 3" marker-end="url(#arrowW26)"/>
      <line x1="175" y1="133" x2="213" y2="140" stroke="#5eead4" stroke-width="1.2" stroke-dasharray="4 3" marker-end="url(#arrowW26)"/>
      <line x1="175" y1="183" x2="213" y2="175" stroke="#fbbf24" stroke-width="1.2" stroke-dasharray="4 3" marker-end="url(#arrowW26)"/>
      <line x1="175" y1="233" x2="238" y2="233" stroke="#34d399" stroke-width="2" marker-end="url(#arrowW26)"/>
      <line x1="175" y1="283" x2="213" y2="250" stroke="#818cf8" stroke-width="1" stroke-dasharray="3 3" marker-end="url(#arrowW26)"/>
      <text x="380" y="348" text-anchor="middle" fill="#64748b" font-size="8.5">সাত দিনের সারণি: চালাও পড়ো টানো সারাও গড়ো দেখো আঁকো</text>
    </svg>
    <div class="diag-cap">সপ্তাহের সাত দিন বাঁ-কলামে; দিন-৫-এর এক ফিচার ডানে ন-দরজা ছোঁয় — বইটা এমনিতেই ক্যাপস্টোন।</div>
  </div>
  <div class="callout tip"><span class="co-icon">🔌</span><div><strong>দিন-৩-এর সুতো-টানার কৌশল:</strong> প্রতিটি ফাইল খুলে নিজের লাইন-নম্বর খাতায় লেখো (view: কোন লাইনে permission, কোন লাইনে service-কল)। এই খাতাটাই পরে তোমার দ্রুত-নেভিগেশন মানচিত্র — grep-রেসিপিগুলোর (AGENT_PROTOCOL) জীবন্ত সংস্করণ।</div></div>
  <div class="secret-box">🌅 চালাও → পড়ো → টানো → সারাও → গড়ো → দেখো → আঁকো — সাত দিন চেনার, তারপর ভাঙার-গড়ার। / Run, read, trace, mend, build, watch, sketch: seven days of knowing before breaking.</div>`,
  senior: {
    title: "Onboarding Capstone",
    body: `<p>দিন-১: সেটআপ+৫-রোল লগইন+দোকান-ঘোরা (env: DB 3307/Redis 6379)। দিন-২: CONTEXT/PROJECT_CONTEXT/AGENT_PROTOCOL/STATE/PATTERNS/SKILLS-GUIDE + কাগজে সত্তা-ট্রেস। দিন-৩: Approve→ব্যাংক সুতো নিজ-হাতে (ভিউ→কম্পোজেবল→সার্ভিস→url→view→permission→fsm→emit; তারপর আয়না+ম্যানিফেস্ট সুতো)। দিন-৪: TDD ছোট-বাগ PR + STATE.md-অভ্যাস। দিন-৫: রেসিপি-পূর্ণ প্রথম ফিচার (ন-দরজা স্পর্শ)। দিন-৬: অপারেটর-পাশে-বসা (ইতস্তত-স্পট নোট)। দিন-৭: এক-পাতার প্রস্তাব (আকৃতি/কারখানা/রোল/প্যাটার্ন/পরীক্ষা)। নিষেধ-তালিকা সপ্তাহজুড়ে। মেট্রিক: নিজ-হাতে-খোলা দরজা ≥ ১৩।</p>`
  }
});

doors.push({
  num: 36,
  icon: "🐪",
  color: "#fbbf24",
  name: "এক ক্লিকের পূর্ণ যাত্রা",
  subtitle: "The Whole Caravan — One Click, Ten Layers",
  tech: "Vertical thread: the Approve click traced button → bank, unifying all 9 doors",
  spirit: "মীজান — mīzān (the scale that weighs all things together)",
  secret: "ন-জন কারিগর ন-রকম তালা — এক ক্লিকে সব একসাথে ঘুরে; ইঞ্জিন একটাই: নামধারী মানুষের সিদ্ধান্ত, দরজার পথে।",
  recall: {
    q: "এই বইয়ের ৯টি দরজার নিচে থাকা এক ইঞ্জিন কী?",
    qen: "What single engine runs beneath all 9 previous doors?",
    a: "সব প্যাটার্নই এক নীতির রূপ: বিপজ্জনক কাজ নামধারী মানুষের হাতে, নির্ধারিত পথে, সাক্ষ্যসহ।",
    aen: "One principle: dangerous work flows through a named human, a fixed path, and a written record."
  },
  story: `<p class="scene-setting">ভোরের আলোয় পুরো শহর জেগে উঠল। ভিকি চায়ের কাপ রেখে <strong>"Approve"</strong> চাপলেন — আর তুমি,
  এই মুহূর্তে, ১০টি দরজার ন-জন কারিগরকে একসাথে কাজ করতে দেখলে। হালিমা (দরজা ১) খাতা খুললেন — ব্যাচ #৮৯,
  IN_REVIEW। বশীর (দরজা ২) দলিল চেপে ধরলেন — select_for_update; পথ মিলল, approve → APPROVED; কালিতে নাম-সময়।
  মুহসিন (দরজা ৩) এবার নিজের দোয়াত খুলবেন — কারণ এই ব্যাচ পরে Xero-য় যাবে, আর সেখানে চক আগে। রুবিনা আপা
  (দরজা ৪) বাটনে তালা দিলেন — দ্বিতীয় ক্লিক নিঃশব্দে মুছে গেল। জামাল (দরজা ৫) খাতা মেলালেন — ভিকির গিল্ডে
  approve-এর সিল আছে, ঢোকা যাবে। সালিম (দরজা ৬) বাঁশি বাজালেন — সাই-র ঘণ্টায় খবর: "ব্যাচ #৮৯ অনুমোদিত,
  খোলা ক্রেডিট আছে, ক্রেডিট-লেজারে যাও।" আতিক (দরজা ৭) পাশের টেবিলে বসে আছেন — সাই যদি কোনো রিজেক্টেড
  সারি জোর করে আনে, তবেই তাঁর বাহি খুলবে। জাফর (দরজা ৮) আয়না ঝকঝক করলেন — serializer যা বলছে, TS টাইপ
  হুবহু তা-ই ফেরাচ্ছে। সেলিম (দরজা ৯) মানচিত্রে চাপ দিলেন — /invoices/batch/89 রুট সবুজ।</p>
  <p class="scene-setting en">Dawn. Vicki sets down her tea and clicks <strong>Approve</strong> — and you watch
  all nine craftsmen work at once. Halima opens the register: batch #89, IN_REVIEW. Bashir presses the document
  flat — the row lock; the path exists; approve → APPROVED, name and time in ink. Muhsin will open his own
  inkwell later — this batch goes to Xero, and there chalk comes first. Rehana latches the button — the second
  click dies silently. Jamal matches his ledger — Vicki's guild holds the approve seal. Salim blows his flute —
  Sai's bell: "Batch #89 approved, open credits exist, go to the credit ledger." Atiq sits ready for any
  force-imported row Sai drags in. Jafar polishes the mirror — the TS type returns exactly what the serializer
  speaks. Selim taps the map — the route glows green.</p>
  <div class="dialogue">তুমি জিজ্ঞেস করো — "এত তালা, এত খাতা, এত পাহারাদার — শেষে কি একটা approve-ই দাঁড়ায়?"
  <br>ন-জনে একসাথে বলেন — "<strong>হ্যাঁ — আর ঠিক এটাই কাজ</strong>। টাকা চলে যায় এক ক্লিকে; আমরা ন-জন শুধু
  নিশ্চিত করি সেই ক্লিকটা সঠিক মানুষের, সঠিক পথে, সাক্ষ্যসহ — আর ভুল হলে ফেরার রাস্তা থাকে।"</div>
  <div class="code-block">এক ক্লিকের পূর্ণ স্ট্যাক-ট্রেস (বাটন → ব্যাংক)

[1] বাটন (Approve) — features/invoices/views/BatchDetailView.vue
    :disabled="approve.running"                    # দরজা ৪: রুবিনার তালা
[2] useMutationAction.run(save_id)                 # দরজা ৪: guard → await → toast
    mutate: invoiceService.transition(id,'approve')
[3] apiClient (CSRF + session) → POST /api/invoices/saved/89/transition/
    {action: 'approve'}                            # দরজা ৮: খাম = চুক্তি
[4] permission_classes = [IsInvoiceReviewerOrDataProcessor]   # দরজা ৫: জামাল
    (ভিকি + সাই + অ্যাডমিন — সেগ্রিগেশন-রিলাক্সেশন ২০২৬-০৫-১৩)
[5] transition_invoice_save(89,'approve',…)        # দরজা ২: বশীর
    select_for_update → can_transition_to → ৪-মাঠ + অডিট লাইন
[6] emit(BatchApproved(invoice), actor)            # দরজা ৬: সালিম
    dedup → recipients(সাই) → ts_notifications → ঘণ্টা
    (খোলা ক্রেডিট থাকলে target_url = ক্রেডিট-লেজার — deep-link চুক্তি)
[7] Response 200 → reviewed_by=ভিকি, review_notes += "[…] IN_REVIEW → APPROVED by vicki@ojo"
[8] FE: toast ✓ → onSuccess → refetch — commit-try-এর বাইরে      # দরজা ৩-এর আত্মীয়
[9] পরে: সাই mark_exported → EXPORTED → plan/commit push → Xero → NACHA → ব্যাংক
    প্রতিটি ধাপে একই ন-জন: গেট(৫) · পথ(২) · চক(৩) · তালা(৪) · ঘণ্টা(৬)
    · বাহি(৭) · আয়না(৮) · মানচিত্র(৯) · আমানত(১)

ের পর যা একই রাখে সবটা (Move 9 — ইঞ্জিন):
  প্রতিটি প্যাটার্ন = "বিপজ্জনক কাজ নামধারী মানুষের হাতে,
  নির্ধারিত পথে (FSM/dry-run/লক), সাক্ষ্যসহ (অডিট/নোটিফিকেশন)"
  ফলাফল: Xero-তে এক অক্ষরও যায় না মানুষের সিদ্ধান্ত ছাড়া (ADR-0009),
  আর প্রতিটি অক্ষরের পেছনে একটি নাম পাওয়া যায়।</div>
  <div class="verse">মীজান — "আর আকাশকে তিনি উঁচু করেছেন এবং তুলাদণ্ড স্থাপন করেছেন, যেন তোমরা ওজনে সীমালঙ্ঘন না কর। তুলাদণ্ড সহকারে সঠিকভাবে ওজন করো, ওজনে কম করো না" (কুরআন ৫৫:৭-৯)। ন-জন কারিগর এক তুলাদণ্ডের ন-টি চূড়া: আমানত (১) · কিতাবত (২) · ইস্তিখারাহ (৩) · একাগ্রতা (৪) · রাখওয়ারি (৫) · তাবলিগ (৬) · শুয়াহাদাত (৭) · সাক্ষ্যের সত্যতা (৮) · কিবলা (৯)। একা কেউ যথেষ্ট নয়; একসাথে এরাই মীজান — টাকার শহরের ন্যায়ের তুলাদণ্ড।</div>
  <div class="diagram">
    <div class="diag-title">One Click, Ten Layers — the Vertical Thread</div>
    <svg viewBox="0 0 560 420" xmlns="http://www.w3.org/2000/svg">
      <defs><marker id="arrowT10" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto"><path d="M0,0 L0,6 L9,3 z" fill="#5eead4"/></marker></defs>
      <rect x="30" y="15" width="500" height="34" rx="8" fill="rgba(251,191,36,0.14)" stroke="#fbbf24" stroke-width="2"/>
      <text x="280" y="37" text-anchor="middle" fill="#fcd34d" font-size="11" font-weight="700">🖱️ ভিকি ক্লিক করেন: Approve — ব্যাচ #৮৯</text>
      <rect x="110" y="62" width="340" height="30" rx="7" fill="rgba(100,116,139,0.12)" stroke="#94a3b8" stroke-width="1.2"/>
      <text x="280" y="81" text-anchor="middle" fill="#cbd5e1" font-size="8.5">[4] useMutationAction — তালা 🔒 · guard: দ্বিতীয় ক্লিক no-op</text>
      <rect x="110" y="101" width="340" height="30" rx="7" fill="rgba(129,140,248,0.10)" stroke="#818cf8" stroke-width="1.2"/>
      <text x="280" y="120" text-anchor="middle" fill="#a5b4fc" font-size="8.5">[3] apiClient → POST /api/invoices/saved/89/transition/ {action:'approve'}</text>
      <rect x="110" y="140" width="340" height="30" rx="7" fill="rgba(45,212,191,0.10)" stroke="#2dd4bf" stroke-width="1.2"/>
      <text x="280" y="159" text-anchor="middle" fill="#5eead4" font-size="8.5">[5] IsInvoiceReviewerOrDataProcessor — জামালের খাতা ✓</text>
      <rect x="110" y="179" width="340" height="30" rx="7" fill="rgba(45,212,191,0.14)" stroke="#2dd4bf" stroke-width="1.6"/>
      <text x="280" y="198" text-anchor="middle" fill="#5eead4" font-size="8.5" font-weight="600">[2] transition_invoice_save — লক · পথ · অডিট-লাইন · APPROVED</text>
      <rect x="110" y="218" width="340" height="30" rx="7" fill="rgba(248,113,113,0.08)" stroke="#f87171" stroke-width="1.2"/>
      <text x="280" y="237" text-anchor="middle" fill="#f87171" font-size="8.5">[6] emit(BatchApproved) → সাই-এর ঘণ্টা 🔔 → deep-link ক্রেডিট-লেজার</text>
      <rect x="110" y="257" width="340" height="30" rx="7" fill="rgba(100,116,139,0.12)" stroke="#94a3b8" stroke-width="1.2"/>
      <text x="280" y="276" text-anchor="middle" fill="#cbd5e1" font-size="8.5">[8] 200 ← {reviewed_by: vicki, notes: "IN_REVIEW → APPROVED by vicki@ojo"}</text>
      <rect x="110" y="296" width="340" height="30" rx="7" fill="rgba(52,211,153,0.12)" stroke="#34d399" stroke-width="1.4"/>
      <text x="280" y="315" text-anchor="middle" fill="#6ee7b7" font-size="8.5">[8b] toast ✓ + refetch — commit-try-এর বাইরে (আয়না অক্ষত)</text>
      <rect x="60" y="336" width="440" height="30" rx="7" fill="rgba(251,191,36,0.08)" stroke="#fbbf24" stroke-width="1.2" stroke-dasharray="5 3"/>
      <text x="280" y="355" text-anchor="middle" fill="#fcd34d" font-size="8">পরে, আলাদা ক্লিকে: mark_exported → চক-কালি push → Xero → NACHA → ব্যাংক 🏦</text>
      <line x1="280" y1="49" x2="280" y2="60" stroke="#5eead4" stroke-width="1.6" marker-end="url(#arrowT10)"/>
      <line x1="280" y1="92" x2="280" y2="99" stroke="#5eead4" stroke-width="1.6" marker-end="url(#arrowT10)"/>
      <line x1="280" y1="131" x2="280" y2="138" stroke="#5eead4" stroke-width="1.6" marker-end="url(#arrowT10)"/>
      <line x1="280" y1="170" x2="280" y2="177" stroke="#5eead4" stroke-width="1.6" marker-end="url(#arrowT10)"/>
      <line x1="280" y1="209" x2="280" y2="216" stroke="#5eead4" stroke-width="1.6" marker-end="url(#arrowT10)"/>
      <line x1="280" y1="248" x2="280" y2="255" stroke="#5eead4" stroke-width="1.6" marker-end="url(#arrowT10)"/>
      <line x1="280" y1="287" x2="280" y2="294" stroke="#5eead4" stroke-width="1.6" marker-end="url(#arrowT10)"/>
      <line x1="280" y1="326" x2="280" y2="333" stroke="#fbbf24" stroke-width="1.4" stroke-dasharray="4 3" marker-end="url(#arrowT10)"/>
      <text x="280" y="392" text-anchor="middle" fill="#fbbf24" font-size="9.5" font-weight="700">⚖️ মীজান: ন-টি দরজা, এক ইঞ্জিন — নামধারী মানুষ · নির্ধারিত পথ · সাক্ষ্য</text>
      <text x="280" y="408" text-anchor="middle" fill="#64748b" font-size="8.5">হালিমা থেকে মুবারক — সবাই এক ক্লিকে জেগে ওঠেন</text>
    </svg>
    <div class="diag-cap">বোতাম থেকে ব্যাংক — প্রতিটি স্তরে একই ন-জন। ইঞ্জিন উন্মোচিত: মানুষের সিদ্ধান্ত, দরজার পথে, সাক্ষ্যসহ।</div>
  </div>
  <div class="checklist">
    <li>নতুন লেখা-পথ (Xero/ব্যাংক)? — চক-কালি জোড়া (plan/commit) + confirm শুধু preview থেকে</li>
    <li>নতুন সত্তার অবস্থা? — FSM সার্ভিস: ACTION ম্যাপ + টাইপড এক্সসেপশন + অডিট লাইন</li>
    <li>নতুন বাটন? — useMutationAction; ডাবল-ক্লিক ভাবো আগে</li>
    <li>নতুন endpoint? — permission ক্লাস + প্রতিটি রোলের টেস্ট + @extend_schema + wire-contract পিন</li>
    <li>serializer বদলাচ্ছে? — grep consumer → টাইপ → ভিউ একই PR + handoff YAML</li>
    <li>নোটিফিকেশন? — নিজ অ্যাপের handoffs.py + emit; কপি ব্যাকএন্ডে</li>
    <li>রিজেক্ট-ওভাররাইড? — ForceImportOperation; 404/409 গুলিয়ো না</li>
    <li>নতুন পেজ? — FE কম্পোনেন্ট + key আগে, BE ম্যানিফেস্ট পরে</li>
    <li>raw SQL? — schema-pin টেস্ট বাধ্যতামূলক</li>
    <li>apps/ বা tests/ ছুঁলে? — STATE.md রিজেন, একই PR-এ</li>
  </div>
  <div class="secret-box">⚖️ ন-টি দরজা, এক মীজান — নামধারী মানুষের সিদ্ধান্ত, নির্ধারিত পথে, সাক্ষ্যসহ; Xero-তে এক অক্ষরও নয় তা ছাড়া। / Nine doors, one scale: a named human, a fixed path, a written record — nothing reaches Xero otherwise.</div>`,
  senior: {
    title: "The Unifying Engine — Cross-Door Synthesis",
    body: `<p>ন-জন কারিগরের পাঠ এক বাক্যে: <strong>বিপজ্জনক কাজ নামধারী মানুষের হাতে, নির্ধারিত পথে, সাক্ষ্যসহ।</strong> হালিমা→আমানত (read-heavy, ৩ ম্যানুয়াল push) · বশীর→FSM সিম (৪ অনুরূপ, bulk+suppress) · মুহসিন→plan/commit জোড়া (৩ পৃষ্ঠ) · রুবিনা→useMutationAction (guard/onSuccess-বাইরে) · জামাল→দুই-অক্ষ (wired বনাম code-owned) · সালিম→emit+HandoffEvent (best-effort, একমুখী নির্ভরতা) · আতিক→ForceImportOperation (অডিট-আগে, None-বিচ্ছেদ) · জাফর→serializer সত্য (dump_api_types CI) · সেলিম→ম্যানিফেস্ট+ফ্রোজেন রেজিস্ট্রি (key সেতু)। পরবর্তী পাঠ: PATTERNS.md (১০ প্যাটার্নের ফাইল-ম্যাপ), SKILLS-GUIDE.md (কোন কাজে কোন skill), AGENT_PROTOCOL.md (DoR/DoD+handoff)।</p>`
  }
});
