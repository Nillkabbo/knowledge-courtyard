
doors.push({
  num: 19,
  icon: "🏗️",
  color: "#ef4444",
  name: "তাঁত-স্থাপনের আঙিনা",
  subtitle: "The Loom-Courtyard — Project Setup & Tooling",
  tech: "Vite scaffold, TS config, ESLint flat config, Prettier, directory structure (FSD), env vars, dev workflow",
  spirit: "বন্না — binnā (the sound foundation: build once, build level)",
  secret: "নতুন-তাঁত = create-vite → TS → ESLint-flat + Prettier → স্তর-ফোল্ডার (core/shared/app/features/ui) → env-ভাগ; স্ক্যাফোল্ড আগে, শিল্প পরে।",
  recall: {
    q: "সব-কোড src/-এর-গোড়ায় না-রেখে স্তর-ফোল্ডারে ভাগ করার লাভ?",
    qen: "Benefit of layered folders over a flat src/?",
    a: "নির্ভরতার-দিক দেয়ালে-নয়-নিয়মে: core কাউকে-জানে-না, features পরস্পরকে-নয়, ui কাঁচা-নয় — লিন্ট-নিয়মে-জোর; নতুন-কারিগর ফোল্ডার-দেখেই-জানে কোথায়-কী-রাখা-যাবে।",
    aen: "Dependency direction becomes lint-enforced, not convention: core knows nobody, features don't import each other — and folder names teach newcomers the map."
  },
  story: `<p class="scene-setting">উনিশ নম্বর ঘর খোলা-আঙিনা — নতুন-তাঁত-বসানোর-প্রাঙ্গণ। ঠাকুর <strong>মোস্তফা মিয়া</strong> — তাঁর কোমরে স্তর-মাপার-জল-স্তর (level), হাতে
  রাংতার-খড়ি। তাঁর ছয়-ধাপের-অনুষ্ঠান: <strong>"এক — কাঠ আনো</strong> (scaffold: create-vite vue-ts) — দেয়াল-হাড়, বিদ্যুৎ-পাত, পানির-লাইন একসাথে।
  <strong>দুই — মাপ-নথি বাঁধো</strong> (TypeScript strict) — চুল-পরিমাণ-বাঁকা-কাঠ এখনই-ফেরত। <strong>তিন — রেখা-রাংতা</strong> (ESLint+Prettier) — কে-কোথায়-
  ঢুকতে-পারবে তার-সীমানা-দাগ, আর লেখার-আকার। <strong>চার — প্রাঙ্গণ-ভাগ</strong> (স্তর-ফোল্ডার): ভিত্তি-ঘর (core), সাধারণ-ঘর (shared), দরবার (app),
  কারখানাসমূহ (features), সাজ-ঘর (ui)। <strong>পাঁচ — গোপন-কুঠুরি</strong> (.env-ভাগ: উন্নয়ন/উৎপাদন; কখনো-কমিটে-নয়)। <strong>ছয় — প্রথম-বুনন</strong>
  (dev-সার্ভার, HMR-প্রদীপ)।" তিনি LedgerPilot-এর আসল-প্রাঙ্গণ-নকশা মেলে ধরেন — ঠিক-এই-ভাগেই দাঁড়িয়ে ১১৭-ভিউ-এর-তাঁত।</p>
  <p class="scene-setting en">Room nineteen is an open courtyard — where new looms are installed. Foreman
  <strong>Mostafa Mia</strong> — a water-level at his waist, chalk-line in hand. His six-step rite: <strong>"One —
  bring the timber</strong> (scaffold: create-vite vue-ts) — wall-bones, wiring, plumbing at once. <strong>Two —
  bind the measure-book</strong> (TypeScript strict) — hair-bent timber returns now. <strong>Three — snap the
  chalk-lines</strong> (ESLint+Prettier) — who may enter where, and how writing looks. <strong>Four — divide the
  courtyard</strong> (layered folders): foundation-room (core), commons (shared), court (app), workshops (features),
  dress-room (ui). <strong>Five — the secret chamber</strong> (.env split dev/prod; never committed). <strong>Six —
  first weave</strong> (dev server, HMR lamp)." He holds up LedgerPilot's real courtyard-plan — standing on exactly
  this division, a 117-view loom.</p>
  <div class="dialogue">('"ছয় ধাপ না গেলে বাজারে নামো না," মোস্তফা মিয়া ছয়টা খুঁটি পুঁতে দিলেন, "কাঠ-মাপ-রেখা-কাটা-ঘষা-জোড়া — একটা বাদ গেলে পুরো তাঁত নড়ে যায়। আমার প্রথম তাঁত কেনেছিলাম পাঁচ ধাপে; প্রথম বড় কাপড়েই সুতো ধরেনি।"', 'ছয় খুঁটির ছায়া লম্বা হয়ে পড়ে — প্রতিটি ধাপ নিজের ভার বইছে, এটাই দেখায়।')</div><div class="dialogue en">"Six stakes before the market — wood, measure, line, cut, polish, join. My first loom skipped one; the first big cloth never held thread."</div>
  <div class="dialogue">মোস্তফা মিয়া তাঁত-খুঁটি পোঁতার-গর্ত দেখিয়ে জিজ্ঞেস করলেন, "প্রথম-খুঁটি কোনটা — কাপড়, না মাটি?" তুমি বললে, "কাপড় তো মুখ্য!" মোস্তফা মিয়া হাসলেন: "কাপড় আসবে-যাবে, মাটি থাকবে। TS-সেটআপ, ESLint-নিয়ম, Prettier-ছাঁচ, ফোল্ডার-নকশা — এ-ই মাটি। প্রথম-সপ্তাহে বসালে শত-কাপড় এক-ছাঁচে; পরে বসালে প্রতিটি নতুন-কারিগর নিজের-মত বুনবে, তারপর একদিন সব-কাপড়ে আলাদা-আলাদা সুতো টেনে ফেটে যাবে। আর env-গোপন: VITE_-প্রিফিক্সবিহীন কিছু ক্লায়েন্টে নামবেই না, আর .local ফাইল গিট-বাইরে — প্রথম-দিনের শৃঙ্খলা, শেষ-দিনের নয়।"</div>
<div class="dialogue en">Mostafa Mia pointed at the post-hole: "Which is the first post — the cloth, or the soil?" You said: "The cloth is the point!" He smiled: "Cloths come and go; soil stays. TS-setup, ESLint rules, Prettier shape, folder-design — that is the soil. Planted in week one, a hundred cloths share one mold; planted late, every new craftsman weaves their own way — until one day all cloths tear on their different threads. And env-secrets: anything without the VITE_ prefix never reaches the client; .local files stay outside git — first-day discipline, not last-day."</div>
  <div class="compare"><div class="cmp-card cmp-bad"><div class="cmp-label">❌ বুনো-সেটআপ</div>ডিফল্ট-স্কাফোল্ডেই ঢিলে-কোড বসানো — লিন্ট নেই, env-গোপন কমিটে যায়, গঠন বুঝে আসে না।</div><div class="cmp-card cmp-good"><div class="cmp-label">✅ তাঁত-স্থাপনা</div>প্রথম-দিনেই TS+ESLint+Prettier+FSD-কাঠামো — শৃঙ্খলা আগে, কাপড় পরে।</div></div>
  <div class="code-block">তাঁত-স্থাপন — ছয়-ধাপ (নতুন-প্রজেক্ট-প্রথম-দিন)

① কাঠ-আনা (স্ক্যাফোল্ড):
  npm create vite@latest my-app -- --template vue-ts
  cd my-app &amp;&amp; npm install
  · vue-ts-ছাঁচে: Vite 8 + Vue 3.5 + TS 5.8 প্রাক-বাঁধা
  · প্রথম-প্রদীপ: npm run dev → HMR

② মাপ-নথি (tsconfig-শৃঙ্খলা):
  // tsconfig.app.json-মূল-অংশ
  {
    "compilerOptions": {
      "strict": true,            // নতুন-প্রজেক্টে-সবসময়
      "module": "ESNext",
      "moduleResolution": "bundler",
      "noUncheckedIndexedAccess": true,
      "jsx": "preserve",
      "paths": { "@/*": ["./src/*"] }
    }
  }
  · উপনাম @/ → src/ — আপেক্ষিক-'../..'-জঙ্গল-মুক্তি

③ রেখা-রাংতা (ESLint-flat + Prettier):
  // eslint.config.js (নতুন-flat-ধাঁচ)
  import pluginVue from 'eslint-plugin-vue'
  export default [
    …pluginVue.configs['flat/recommended'],
    { rules: {
        'vue/multi-word-component-names': 'off',
        // স্তর-আইন (FSD-জাত):
        'no-restricted-imports': ['error', {
          patterns: [{
            group: ['@/features/*'],
            allowFrom: ['@/features', '@/app'],
            message: 'features পরস্পরকে-দেখে-না'
          }]
        }],
      } }
  ]
  // .prettierrc
  { "semi": false, "singleQuote": true,
    "printWidth": 80 }
  npm i -D eslint prettier eslint-plugin-vue

④ প্রাঙ্গণ-ভাগ (স্তর-ফোল্ডার — FSD-ছায়া):
  src/
    core/      # http-ক্লায়েন্ট, টাইপ, utils, auth-মূল
    shared/    # কম্পোজেবল+উপাদান: যা-সবাই-ভাগে
    app/       # রুটার+গার্ড+স্টোর+ন্যাভ+লেআউট
    features/  # auth/ account/ admin/ … প্রতি-ডোমেইন
    ui/        # primitives: Button/TextInput/Card…
  নির্ভরতার-স্রোত:
    features → shared → core
    features ✗→ features (লিন্ট-থামায়)
    app → সবকিছু-ডেকে-জোড়ে
    ui → কিছুই-জানে-না (কাঁচা-নয়)
  · ভেতরে-প্রতি-ফিচার:
    features/account/{views,components,services,composables,types}

⑤ গোপন-কুঠুরি (env-ভাগ):
  .env.development   → VITE_API_URL=http://localhost:8000
  .env.production    → VITE_API_URL=https://api.ledgerpilot… 
  · পড়া: import.meta.env.VITE_API_URL
  · .gitignore-এ .env*.local; কমিটে-শুধু-নমুনা
    (.env.example)
  ⚠ VITE_উপসর্গ-বিহীন ভেরি-নাম ক্লায়েন্টে-পৌঁছায়-ই-না

⑥ প্রথম-বুনন (দৈনন্দিন-অনুষ্ঠান):
  npm run dev        # HMR-প্রদীপ
  npm run build      # উৎপাদন-বান্ডল dist/
  npm run preview    # বান্ডল-স্বাদ
  npm run lint       # রেখা-রাংতা-যাচাই
  npm run type-check # vue-tsc-মাপ-নথি</div>
  <ul class="checklist">
  <li>npm create vite → vue-ts ছাঁচ</li>
  <li>@ alias — tsconfig + vite.config দুই জায়গায়</li>
  <li>ESLint flat config + prettier</li>
  <li>ভাগ করা ফোল্ডার-আইন: features/shared/app/ui/core</li>
  <li>env-ভাগ: .env.development / .env.production</li>
</ul>
  <div class="callout tip"><span class="co-icon">📚</span><div><strong>আরও পড়া:</strong> Book 43 (Sky Fortress — ১০ দরজা) Vite/বিল্ড-টুলিং আর পরিবেশ-ব্যবস্থাপনার DevOps-দৃষ্টি; আর Book 40 (Codebuilder’s Guild) লিন্ট/ফরম্যাট-নীতির কারিগরি নিয়ম।</div></div>
  <div class="verse">বন্না — মজবুত-ভিত: "তারপর তার ভিত কি আল্লাহর-তাকওয়া ও-সন্তুষ্টির-উপর, না-বা ভাঙা-মাটির-ধারে?" (৯:১০৯) — একই-কাঠ, ভিত-ভেদে-জীবন-মৃত্যু। মোস্তফা মিয়ার ছয়-ধাপ সেই বন্নার-উপাসনা: স্ক্যাফোল্ড-কাঠ, টাইপ-মাপ, লিন্ট-রেখা, স্তর-ভাগ, গোপন-কুঠুরি, প্রথম-প্রদীপ — প্রতিটি-ধাপ পরের-ধাপের-ভিত, কোনোটাই-অবহেলার-নয়। যে-তাঁত তাড়ায়-সরাসরি-বুনতে-বসে, তার-কাপড় সুন্দর-হতে-পারে — কিন্তু তৃতীয়-মাসেই হাড়-ভাঙা-তাঁতে-পুনরায়-মাস্টারি।</div>
  <div class="callout warn"><span class="co-icon">⚠️</span><div><strong>প্রাঙ্গণ-ফাঁদ:</strong> (১) strict:false-এ-শুরু — পরে-চালালে-শত-এররের-জলোচ্ছ্বাস; প্রথম-দিনেই-strict। (২) features পরস্পরে-আমদানি — দ্বিতীয়-ফিচার-বাঁধার-দিনেই-জাল; প্রথম-লিন্ট-নিয়মেই-থামাও। (৩) .env কমিট — গোপন-কুঠুরি চত্বরে-খোলা; .local-প্রথা+নমুনা-কমিট।</div></div>
  <div class="secret-box">🏗️ তাঁত-স্থাপনের-ছয়-ধাপ: কাঠ → মাপ → রেখা → ভাগ → কুঠুরি → প্রদীপ; স্তরের-স্রোত একমুখ, রাংতার-সীমানায়। / Scaffold, stricten, lint, layer, env-split, ignite.</div>
  <div class="diagram">
    <div class="diag-title">Loom Installation — Six Rites, Five Rooms</div>
    <svg viewBox="0 0 560 310" xmlns="http://www.w3.org/2000/svg">
      <defs><marker id="arrowS19" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto"><path d="M0,0 L0,6 L9,3 z" fill="#fbbf24"/></marker></defs>
      <rect x="15" y="14" width="530" height="56" rx="10" fill="rgba(251,191,36,0.08)" stroke="#fbbf24" stroke-width="1.5"/>
      <text x="280" y="35" text-anchor="middle" fill="#fcd34d" font-size="8.5" font-weight="700">🪚 ছয়-ধাপ: scaffold → TS-strict → lint+prettier → স্তর-ভাগ → env-ভাগ → dev</text>
      <text x="280" y="51" text-anchor="middle" fill="#94a3b8" font-size="7">create-vite vue-ts · মাপ-নথি · রেখা-রাংতা · প্রাঙ্গণ · গোপন-কুঠুরি · প্রথম-প্রদীপ (HMR)</text>
      <rect x="15" y="88" width="96" height="88" rx="10" fill="rgba(66,184,131,0.08)" stroke="#6366f1" stroke-width="1.4"/>
      <text x="63" y="109" text-anchor="middle" fill="#a5b4fc" font-size="8" font-weight="700">core/</text>
      <text x="63" y="124" text-anchor="middle" fill="#94a3b8" font-size="6">http · types · utils</text>
      <text x="63" y="138" text-anchor="middle" fill="#64748b" font-size="6">auth-মূল · logger</text>
      <text x="63" y="158" text-anchor="middle" fill="#a5b4fc" font-size="6">কাউকে-জানে-না</text>
      <rect x="126" y="88" width="96" height="88" rx="10" fill="rgba(66,184,131,0.08)" stroke="#6366f1" stroke-width="1.4"/>
      <text x="174" y="109" text-anchor="middle" fill="#a5b4fc" font-size="8" font-weight="700">shared/</text>
      <text x="174" y="124" text-anchor="middle" fill="#94a3b8" font-size="6">কম্পোজেবল-ভিত্তি</text>
      <text x="174" y="138" text-anchor="middle" fill="#64748b" font-size="6">useMutation… · Modal</text>
      <text x="174" y="158" text-anchor="middle" fill="#a5b4fc" font-size="6">সবাই-ভাগে-শুধু</text>
      <rect x="237" y="88" width="96" height="88" rx="10" fill="rgba(129,140,248,0.08)" stroke="#818cf8" stroke-width="1.4"/>
      <text x="285" y="109" text-anchor="middle" fill="#a5b4fc" font-size="8" font-weight="700">app/</text>
      <text x="285" y="124" text-anchor="middle" fill="#94a3b8" font-size="6">router+guards</text>
      <text x="285" y="138" text-anchor="middle" fill="#64748b" font-size="6">স্টোর · ন্যাভ · লেআউট</text>
      <text x="285" y="158" text-anchor="middle" fill="#a5b4fc" font-size="6">সব-সুতো-জোড়ে</text>
      <rect x="348" y="88" width="96" height="88" rx="10" fill="rgba(251,191,36,0.07)" stroke="#fbbf24" stroke-width="1.4"/>
      <text x="396" y="109" text-anchor="middle" fill="#fcd34d" font-size="8" font-weight="700">features/</text>
      <text x="396" y="124" text-anchor="middle" fill="#94a3b8" font-size="6">auth · account · …</text>
      <text x="396" y="138" text-anchor="middle" fill="#64748b" font-size="6">views/services/composables</text>
      <text x="396" y="158" text-anchor="middle" fill="#f87171" font-size="6">পরস্পরে ✗</text>
      <rect x="459" y="88" width="86" height="88" rx="10" fill="rgba(66,184,131,0.08)" stroke="#6366f1" stroke-width="1.4"/>
      <text x="502" y="109" text-anchor="middle" fill="#a5b4fc" font-size="8" font-weight="700">ui/</text>
      <text x="502" y="124" text-anchor="middle" fill="#94a3b8" font-size="6">primitives</text>
      <text x="502" y="138" text-anchor="middle" fill="#64748b" font-size="6">Button · TextInput</text>
      <text x="502" y="158" text-anchor="middle" fill="#a5b4fc" font-size="6">ডোমেইন-অজ্ঞ</text>
      <path d="M63,190 C63,220 396,220 396,178" fill="none" stroke="#fbbf24" stroke-width="1.2" stroke-dasharray="4 3" marker-end="url(#arrowS19)"/>
      <text x="230" y="216" text-anchor="middle" fill="#64748b" font-size="6.5">নির্ভরতার-স্রোত: features → shared → core · app-জোড়ে-সব · ✗-পথ লিন্টে-থামে</text>
      <rect x="15" y="234" width="530" height="52" rx="10" fill="rgba(100,116,139,0.08)" stroke="#94a3b8" stroke-width="1.2"/>
      <text x="280" y="253" text-anchor="middle" fill="#cbd5e1" font-size="7.5" font-weight="600">গোপন-কুঠুরি: .env.development / .env.production — VITE_উপসর্গ · কমিটে-শুধু-নমুনা</text>
      <text x="280" y="268" text-anchor="middle" fill="#94a3b8" font-size="7">দৈনন্দিন: dev (HMR) · build · preview · lint · type-check — পাঁচ-অঙ্গ-অনুষ্ঠান</text>
      <text x="280" y="298" text-anchor="middle" fill="#64748b" font-size="8">তাঁত আগে-স্থির, কাপড় পরে — ভিত তাকওয়ায়, তাড়ায় নয়</text>
    </svg>
    <div class="diag-cap">ছয়-ধাপে-প্রতিষ্ঠিত-পাঁচ-ঘরের-প্রাঙ্গণ: স্রোত-একমুখ, সীমানা-রাংতায়, গোপন-কুঠুরি-প্রথা-মেনে — ১১৭-ভিউ-ও-একই-ভিতে-দাঁড়ায়।</div>
  </div>`,
  senior: {
    title: "Setup Card",
    body: `<p><strong>স্ক্যাফোল্ড</strong>: npm create vite@latest -- --template vue-ts। <strong>TS</strong>: strict + paths @/* + noUncheckedIndexedAccess। <strong>লিন্ট</strong>: eslint.config.js flat + vue/recommended + no-restricted-imports (features-পরস্পরে-নিষেধ); Prettier (semi:false, singleQuote)। <strong>স্তর</strong>: core (কেউ-না) ← shared ← features (পরস্পরে-✗) ← app (জোড়ে); ui-ডোমেইন-অজ্ঞ। <strong>env</strong>: .env.development/.production, VITE_-উপসর্গ, .local-গিট-বাহির। <strong>অনুষ্ঠান</strong>: dev/build/preview/lint/type-check। <strong>ফাঁদ</strong>: env-ভেরিয়েবল <code>VITE_</code>-প্রিফিক্স ছাড়া লেখা (Vite ক্লায়েন্টে পাঠাবেই না); আর ESLint-নিয়ম দলের সম্মতি ছাড়া বন্ধ করা — পরের দিনই স্টাইল-যুদ্ধ।</p>`
  }
});

doors.push({
  num: 20,
  icon: "🧪",
  color: "#ec4899",
  name: "পরীক্ষার-মিনার",
  subtitle: "The Testing Minaret — Vitest, MSW, Playwright",
  tech: "unit tests (mount, props/emitted), MSW network mocking, composable testing, E2E with Playwright, coverage discipline",
  spirit: "ইমতিহান — imtihān (the proving trial)",
  secret: "উপাদান mount+assert, নেটওয়ার্ক MSW-নকলে, কম্পোজেবল নির্জন-প্রদক্ষিণে, E2E ব্রাউজার-পথে — চার-তলা-মিনারে প্রতিটি-দাবি প্রমাণিত।",
  recall: {
    q: "MSW-মক কেন প্রতি-টেস্টে-হাতে-নকল-নয়?",
    qen: "Why shared MSW handlers over per-test stubs?",
    a: "হ্যান্ডার-বই এক-জায়গায় — প্রকৃত-API-আকৃতি এক-সত্যে; টেস্ট শুধু worker.use() দিয়ে চাহিদা-মাত্র-বদলায় (override); আকৃতি-বদলে (BE-ফিল্ড) এক-জায়গায়-ধরা-পড়ে।",
    aen: "One handler-book keeps API shapes true; tests override per-need; shape drift surfaces in one place."
  },
  story: `<p class="scene-setting">বিশ নম্বর ঘর একটা <strong>চার-তলা-মিনার</strong> — প্রতিটি-তলায় এক-রকম-পরীক্ষা। মুয়াযযিন-পরীক্ষক <strong>হাফেজ সবুর</strong> — তাঁর
  গলায়-ছন্দের-মালা, হাতে চার-রঙের-পতাকা। <strong>এক-তলা</strong>: উপাদান-পরীক্ষা — কার্ড-দেয়াল জল-ছুঁড়ে (props) দেখা-হয় ঠিক-কথা-লিখল-কি, ঘণ্টি-বাজাল-কি
  (emitted)। <strong>দুই-তলা</strong>: নেটওয়ার্ক-নকল-ঘর — MSW-বাহকরা সার্ভারের-ছদ্মবেশে বসে; টেস্ট-চাইলে এক-দুই-বাহককে-বদলে (override) বিপদ-দৃশ্য-ঘটায়।
  <strong>তিন-তলা</strong>: কম্পোজেবল-নির্জন-প্রদক্ষিণ — কোনো-দেয়াল-ছাড়া যুক্তি-মাত্র (effectScope-ঘরে) ঘুরিয়ে দেখা। <strong>চার-তলা</strong>: E2E-ছাদ — আসল-ব্রাউজার,
  আসল-ক্লিক, আসল-পথ; ভোরের-আলোয়-পুরো-শহর-হাঁটা। সবুর-সাহেবের-নিয়ম: <strong>"দাবি-উঠলেই-পতাকা-নামাও (টেস্ট-লেখো), নয়-কেউ-বিশ্বাস-করবে-না।"</strong></p>
  <p class="scene-setting en">Room twenty is a <strong>four-storey minaret</strong> — one kind of test per floor.
  Muezzin-examiner <strong>Hafez Sabur</strong> — a rhythm-garland at his throat, four-colored flags in hand.
  <strong>Ground floor</strong>: component tests — splash the card-wall with props, assert it wrote straight and rang
  the bell (emitted). <strong>Second</strong>: the network-mock room — MSW couriers sit disguised as the server; a
  test may swap one or two (override) to stage danger-scenes. <strong>Third</strong>: composable lone-walks — logic
  without walls, spun inside an effectScope-room. <strong>Fourth</strong>: the E2E roof — real browser, real clicks,
  real paths; the whole city walked in dawn light. Sabur's rule: <strong>"when a claim rises, lower a flag (write the
  test) — else none shall believe."</strong></p>
  <div class="dialogue">('"মিনারের চূড়ায় প্রদীপ," ওস্তাদ নাজির বললেন, "আর প্রতিটি তলায় পাহারা। উপরের আলো নিচের অন্ধকার দেখে না — দেখে নিচের পাহারা। আমি একবার শুধু চূড়ার প্রদীপ বিশ্বাস করেছিলাম; নিচের তলার ফাঁক দিয়ে সব জল ঢুকে গিয়েছিল।"', 'পাথরের সিঁড়ির ঠান্ডা তাপমাত্রা হাতে লাগে — উঁচু আলো আর নিচের পাহারা, দুই-ই চাই।')</div><div class="dialogue en">"A lamp at the tower's crown, a guard on every floor. I once trusted only the crown lamp; water entered through a lower gap."</div>
  <div class="dialogue">ওস্তাদ নাজির মিনারের-সিঁড়ি দেখিয়ে জিজ্ঞেস করলেন, "সব-পরীক্ষা চূড়ায় (E2E) নিলে কী হবে?" তুমি বললে, "তাহলে তো সব-কিছু ধরা পড়বে!" নাজির মাথা নাড়লেন: "ধরা পড়বে — ৪৫-মিনিট পর, প্রতিবার। তৃতীয় দিনে কেউ চালাবে না; যে-পরীক্ষা চালানো হয় না সে পাহারা নয়, শোকের-স্মৃতি। ভিত্তিতে unit — মিলিসেকেন্ডে শত-শত; মাঝে MSW-সমন্বয় — সার্ভিস-সত্য যাচাই; চূড়ায় মাত্র কয়েকটা E2E — প্রকৃত-ব্রাউজারে প্রকৃত-যাত্রা। পিরামিড উল্টালে (আইসক্রিম-পিরামিড) সুইট ভারী, ভঙ্গুর, পরিত্যক্ত। উচ্চতা নয় — প্রশস্ত-ভিত্তি মিনারের মর্যাদা।"</div>
<div class="dialogue en">Ustad Nazir showed the minaret stairs: "What if every test sits at the crown (E2E)?" You said: "Everything gets caught!" He shook his head: "Caught — after 45 minutes, every time. By day three nobody runs it; a test unrun is not a guard but a mourning-memory. At the base, units — hundreds in milliseconds; mid-height, MSW coordination — service-truth verified; at the crown, only a few E2E — real journeys in real browsers. Invert the pyramid (ice-cream cone) and the suite turns heavy, brittle, abandoned. Not height — a wide base is the minaret's dignity."</div>
  <div class="compare"><div class="cmp-card cmp-bad"><div class="cmp-label">❌ আইস-ক্রিম-পিরামিড</div>সব-টেস্ট E2E — ধীর, ভঙ্গুর; কেউ চালায় না, বাগ ধরা পড়ে দেরিতে।</div><div class="cmp-card cmp-good"><div class="cmp-label">✅ পিরামিড-মিনার</div>ভিত্তি unit (দ্রুত-সস্তা), মাঝ-স্তর MSW-সমন্বয়, চূড়া কয়েকটা E2E — প্রতিটি স্তর নিজ-দায়ে।</div></div>
  <div class="code-block">পরীক্ষা-শাস্ত্র — চার-তলা (LP-র প্রকৃত-রীতি)

স্থাপন:
  npm i -D vitest @vue/test-utils msw @playwright/test
  // vitest.config.ts
  export default defineConfig({
    test: { environment: 'jsdom',
      setupFiles: ['./src/tests/setup.ts'] } })

① উপাদান-পরীক্ষা (mount+assert):
  // RecentImportsPanel.test.ts-ছায়া (প্রকৃত-LP)
  import { describe, it, expect } from 'vitest'
  import { mount } from '@vue/test-utils'
  import RecentImportsPanel from
    '@/features/timesheets/components/RecentImportsPanel.vue'

  const mockImports = [
    { id: '1', filename: 'week_1.xlsx',
      status: 'completed',
      totalRows: 200, importedRows: 200,
      rejectedRows: 0, … },
    { id: '3', filename: 'bad.xlsx',
      status: 'failed', errorMessage:
      'Invalid date format', … },
  ]

  describe('RecentImportsPanel', () =&gt; {
    it('renders rows when data', () =&gt; {
      const w = mount(RecentImportsPanel, {
        props: { imports: mockImports,
                 loading: false, error: null } })
      expect(w.findAll('tbody tr')).toHaveLength(2)
    })
    it('shows loading state', () =&gt; {
      const w = mount(RecentImportsPanel, {
        props: { imports: null,
                 loading: true, error: null } })
      expect(w.text()).toContain('লোড')
    })
    it('emits retry on click', async () =&gt; {
      const w = mount(RecentImportsPanel, {
        props: { imports: mockImports, … } })
      await w.find('[data-test=retry]')
              .trigger('click')
      expect(w.emitted('retry')).toHaveLength(1)
    })
  })
  · data-test-নাম-বাটনে — স্টাইল-বদলে-টেস্ট-ভাঙে-না

② নেটওয়ার্ক-নকল (MSW-বাহক-বই):
  // src/tests/msw/handlers/auth.ts (প্রকৃত-ছায়া)
  import { http, HttpResponse } from 'msw'
  export const adminUser = { id: 1, email:
    'admin@ledgerpilot.test', role: 'admin', … }
  export const handlers = [
    http.get('*/api/accounts/me/', () =&gt;
      HttpResponse.json(adminUser)),
    http.get('*/api/accounts/csrf/', () =&gt;
      HttpResponse.json({ detail: 'CSRF set' })),
    http.post('*/api/accounts/login/',
      async ({ request }) =&gt; {
        const b = await request.json()
        if (b.password === 'wrong')
          return new HttpResponse(null,
            { status: 400 })
        return HttpResponse.json(
          { user: adminUser })
      }),
  ]
  // setup: server = setupServer(…handlers)
  // টেস্ট-চাহিদা-বদল (override):
  server.use(
    http.get('*/api/accounts/me/',
      () =&gt; new HttpResponse(null,
        { status: 500 })) )   // বিপদ-দৃশ্য
  · আকৃতি-সত্য এক-বইতে; BE-ফিল্ড-বদল এখানেই-জ্বলে

③ কম্পোজেবল-নির্জন-প্রদক্ষিণ:
  // useCounter-জাত যুক্তি-পরীক্ষা
  import { effectScope } from 'vue'
  it('guards re-entry', async () =&gt; {
    const scope = effectScope()
    const api = scope.run(() =&gt;
      useMutationAction({ mutate: slowMock }))!
    void api.run(1)            // প্রথম-চালু
    await api.run(1)           // দ্বিতীয়: no-op
    expect(mutateMock).toHaveBeenCalledTimes(1)
    scope.stop()               // পরিচ্ছন্ন-প্রস্থান
  })

④ E2E-ছাদ (Playwright):
  // e2e/login.spec.ts
  import { test, expect } from '@playwright/test'
  test('wrong password → inline error', async ({
    page }) =&gt; {
    await page.goto('/login')
    await page.fill('[data-test=email]',
      'admin@ledgerpilot.test')
    await page.fill('[data-test=password]', 'wrong')
    await page.click('[data-test=submit]')
    await expect(page.locator('[data-test=form-err]'))
      .toBeVisible()
  })
  · walkthrough_*.spec.ts — প্রতি-ফিচারের-আসল-পথ;
    MSW-বিহীন, স্টেজিং-সত্যে

নীতি-ছক (কোন-দাবি-কোথায়):
  দাবি                          | তলা
  ------------------------------|------------
  প্রপস→রেন্ডার, emit           | ① mount
  এরর-পথ, খালি-অবস্থা          | ① + ② override
  কম্পোজেবল-যুক্তি, গার্ড        | ③ effectScope
  পুরো-ব্যবহারকারী-যাত্রা       | ④ Playwright
  · নিচের-তলায়-সস্তা; উপরে-নামা
    দামি — যত-নিচে-সম্ভব-তত-নিচে</div>
  <div class="stat-grid">
  <div class="stat-card"><div class="sc-num">mount</div><div class="sc-label">তলা-১ · প্রাণ</div></div>
  <ul class="checklist"><li>এক-কম্পোনেন্ট unit-টেস্ট: props-ইনপুট → পর্দা-আউটপুট + emitted-যাচাই</li><li>MSW-হ্যান্ডলার লিখে সার্ভিস-টেস্ট — নেটওয়ার্ক ছাড়াই ৪০০/২০০-পথ</li><li>একটা Playwright-walkthrough — লগইন→তালিকা→বিস্তারিত পথ</li></ul>
  <div class="callout tip"><span class="co-icon">📚</span><div><strong>আরও পড়া:</strong> Book 47 (Shields of Craft — ১০ দরজা) টেস্টিংয়ের পূর্ণ দুর্গ (unit→E2E, coverage, TDD) — এই পরীক্ষার-মিনারের ভিত্তি-গ্রন্থ।</div></div>
  <div class="verse">ইমতিহান — প্রমাণ-পরীক্ষা: "আমি তোমাদের পরীক্ষা করব কল্যাণ ও-অকল্যাণে" নয় বরং সূরা-ধারা (২১:৩৫-এর সার) — ঘোষিত-সত্য পরীক্ষা-ছাড়া-মূল্যহীন। হাফেজ সবুরের-মিনার সেই ইমতিহানের-স্থাপত্য: চার-তলায়-চার-ধরনের-আগুন, প্রতিটি-দাবি নিজ-যোগ্য-তলায়-নামে। যে-কারখানা দাবি-করে-পরীক্ষা-ছাড়া, সে বিক্রয়-করে-বিশ্বাস-নয়-কল্পনা; আর যে-পরীক্ষা সব-উপরের-তলায়-চড়ায়, সে ধীর-হয়ে-সকাল-পর্যন্ত-দেরি-করায় — দুই-ই-ব্যর্থ, ভারসাম্য-মিনারের-শর্ত।</div>
  <div class="callout warn"><span class="co-icon">⚠️</span><div><strong>মিনার-ফাঁদ:</strong> (১) ক্লাস-নাম-নির্ভর-সিলেক্টর (<code>.btn-primary</code>) — রং-বদলালেই-পরীক্ষা-ভাঙে; data-test-ফলক-বাঁধো। (২) প্রতি-টেস্টে-নিজস্ব-fetch-মক — আকৃতি-সত্য-ছড়িয়ে-যায়; MSW-বই+override। (৩) সবকিছু-E2E-তলায় — ধীর-মিনার, কেউ-ওঠে-না; নিচের-তলায়-সর্বাধিক। </div></div>
  <div class="secret-box">🧪 দাবির-তলা-মেনো: mount (props/emitted) → MSW (আকৃতি+বিপদ) → scope (যুক্তি) → E2E (যাত্রা) — data-test-ফলকে, নিচে-যত-পারা-যায়। / Match claim to floor; flag every claim with a test.</div>
  <div class="stat-card"><div class="sc-num">MSW</div><div class="sc-label">তলা-২ · নকল-জাহাজ</div></div>
  <div class="stat-card"><div class="sc-num">E2E</div><div class="sc-label">তলা-৩ · প্রকৃত-পথ</div></div>
  <div class="stat-card"><div class="sc-num">২,৬২২</div><div class="sc-label">LP-টেস্ট · প্রমাণ</div></div>
</div>
  <div class="diagram">
    <div class="diag-title">The Four-Storey Minaret — Claim → Floor</div>
    <svg viewBox="0 0 560 320" xmlns="http://www.w3.org/2000/svg">
      <rect x="190" y="14" width="180" height="250" rx="12" fill="rgba(251,191,36,0.06)" stroke="#fbbf24" stroke-width="1.5"/>
      <rect x="215" y="24" width="130" height="48" rx="8" fill="rgba(248,113,113,0.08)" stroke="#f87171" stroke-width="1.3"/>
      <text x="280" y="44" text-anchor="middle" fill="#f87171" font-size="7.5" font-weight="700">৪) E2E-ছাদ 🌅</text>
      <text x="280" y="57" text-anchor="middle" fill="#94a3b8" font-size="6">Playwright · আসল-ব্রাউজার-পথ</text>
      <text x="280" y="66" text-anchor="middle" fill="#64748b" font-size="6.5">সবচেয়ে-দামি — বিরল-ব্যবহার</text>
      <rect x="215" y="80" width="130" height="48" rx="8" fill="rgba(129,140,248,0.08)" stroke="#818cf8" stroke-width="1.3"/>
      <text x="280" y="100" text-anchor="middle" fill="#a5b4fc" font-size="7.5" font-weight="700">৩) কম্পোজেবল-তলা</text>
      <text x="280" y="113" text-anchor="middle" fill="#94a3b8" font-size="6">effectScope · যুক্তি-নির্জন</text>
      <text x="280" y="122" text-anchor="middle" fill="#64748b" font-size="6.5">গার্ড/ফেজ/এরর-পথ</text>
      <rect x="215" y="136" width="130" height="48" rx="8" fill="rgba(66,184,131,0.08)" stroke="#6366f1" stroke-width="1.3"/>
      <text x="280" y="156" text-anchor="middle" fill="#a5b4fc" font-size="7.5" font-weight="700">২) MSW-নকল-তলা</text>
      <text x="280" y="169" text-anchor="middle" fill="#94a3b8" font-size="6">হ্যান্ডলার-বই + worker.use</text>
      <text x="280" y="178" text-anchor="middle" fill="#64748b" font-size="6.5">আকৃতি-সত্য এক-জায়গায়</text>
      <rect x="215" y="192" width="130" height="48" rx="8" fill="rgba(66,184,131,0.10)" stroke="#6366f1" stroke-width="1.4"/>
      <text x="280" y="212" text-anchor="middle" fill="#a5b4fc" font-size="7.5" font-weight="700">১) mount-ভিত্তি-তলা</text>
      <text x="280" y="225" text-anchor="middle" fill="#94a3b8" font-size="6">props → assert · emitted()</text>
      <text x="280" y="234" text-anchor="middle" fill="#64748b" font-size="6.5">সবচেয়ে-সস্তা — সর্বাধিক</text>
      <rect x="15" y="24" width="160" height="56" rx="9" fill="rgba(100,116,139,0.08)" stroke="#94a3b8" stroke-width="1.2"/>
      <text x="95" y="44" text-anchor="middle" fill="#cbd5e1" font-size="7" font-weight="600">"প্রপস→সারি-সংখ্যা"</text>
      <text x="95" y="57" text-anchor="middle" fill="#94a3b8" font-size="6">→ ১ম-তলা</text>
      <text x="95" y="70" text-anchor="middle" fill="#64748b" font-size="6.5">দাবি-নিচে-যত-পারা-যায়</text>
      <rect x="15" y="92" width="160" height="56" rx="9" fill="rgba(100,116,139,0.08)" stroke="#94a3b8" stroke-width="1.2"/>
      <text x="95" y="112" text-anchor="middle" fill="#cbd5e1" font-size="7" font-weight="600">"সার্ভার-৫০০-এ-এরর-বার্তা"</text>
      <text x="95" y="125" text-anchor="middle" fill="#94a3b8" font-size="6">→ ২য়-তলা (override)</text>
      <text x="95" y="138" text-anchor="middle" fill="#64748b" font-size="6.5">বিপদ-দৃশ্য-নকলে</text>
      <rect x="15" y="160" width="160" height="56" rx="9" fill="rgba(100,116,139,0.08)" stroke="#94a3b8" stroke-width="1.2"/>
      <text x="95" y="180" text-anchor="middle" fill="#cbd5e1" font-size="7" font-weight="600">"রি-এন্ট্র্যান্সি-গার্ড"</text>
      <text x="95" y="193" text-anchor="middle" fill="#94a3b8" font-size="6">→ ৩য়-তলা (scope)</text>
      <text x="95" y="206" text-anchor="middle" fill="#64748b" font-size="6.5">যুক্তি-মাত্র</text>
      <rect x="15" y="228" width="160" height="56" rx="9" fill="rgba(100,116,139,0.08)" stroke="#94a3b8" stroke-width="1.2"/>
      <text x="95" y="248" text-anchor="middle" fill="#cbd5e1" font-size="7" font-weight="600">"ভুল-পাসে-লগইন-ফেরত"</text>
      <text x="95" y="261" text-anchor="middle" fill="#94a3b8" font-size="6">→ ৪র্থ-তলা (E2E)</text>
      <text x="95" y="274" text-anchor="middle" fill="#64748b" font-size="6.5">ব্যবহারকারীর-চোখে</text>
      <rect x="385" y="24" width="160" height="90" rx="9" fill="rgba(66,184,131,0.07)" stroke="#6366f1" stroke-width="1.2"/>
      <text x="465" y="44" text-anchor="middle" fill="#a5b4fc" font-size="7" font-weight="600">MSW-হ্যান্ডলার-বই</text>
      <text x="465" y="58" text-anchor="middle" fill="#94a3b8" font-size="6">auth.ts: me/ · csrf/ · login/</text>
      <text x="465" y="70" text-anchor="middle" fill="#64748b" font-size="6.5">প্রকৃত-আকৃতি-এক-সত্যে</text>
      <text x="465" y="84" text-anchor="middle" fill="#a5b4fc" font-size="6.5">BE-ফিল্ড-বদল → এক-জায়গায়-জ্বলে</text>
      <text x="465" y="98" text-anchor="middle" fill="#64748b" font-size="6.5">server.use() — চাহিদা-override</text>
      <rect x="385" y="126" width="160" height="60" rx="9" fill="rgba(129,140,248,0.07)" stroke="#818cf8" stroke-width="1.2"/>
      <text x="465" y="146" text-anchor="middle" fill="#a5b4fc" font-size="7" font-weight="600">data-test-প্রথা</text>
      <text x="465" y="160" text-anchor="middle" fill="#94a3b8" font-size="6">বাটনে-নাম-ফলক</text>
      <text x="465" y="172" text-anchor="middle" fill="#64748b" font-size="6.5">স্টাইল-বদলে-টেস্ট-অক্ষত</text>
      <text x="280" y="288" text-anchor="middle" fill="#64748b" font-size="8">দাবি-উঠলে-পতাকা-নামে — নিচের-তলায়-যত-পারা-যায়-তত-নিচে</text>
      <text x="280" y="306" text-anchor="middle" fill="#64748b" font-size="7.5">LP-প্রমাণ: ২,৬০০+ কেস এই-চার-তলায়-সাজানো</text>
    </svg>
    <div class="diag-cap">মিনারের-শৃঙ্খলা: প্রতিটি-দাবি নিজ-যোগ্য-তলায়; নিচে-সস্তা-ঘন, উপরে-দামি-বিরল — ভারসাম্যেই-গতি।</div>
  </div>`,
  senior: {
    title: "Testing Card",
    body: `<p><strong>৪-তলা</strong>: ① mount (@vue/test-utils; props→assert; emitted(); data-test-সিলেক্টর) ② MSW (হ্যান্ডলার-বই প্রকৃত-আকৃতি; server.use override-বিপদ) ③ effectScope-কম্পোজেবল (গার্ড/ফেজ) ④ Playwright E2E (ব্যবহারকারী-যাত্রা)। <strong>নীতি</strong>: দাবি-নিচের-তলায়; নিচে-সস্তা। <strong>স্থাপন</strong>: vitest(jsdom)+setup+msw+playwright। <strong>LP-প্রমাণ</strong>: ২,৬০০+ কেস, walkthrough-প্রতি-ফিচার। <strong>ফাঁদ</strong>: মক-ছাড়া নেটওয়ার্ক-টেস্ট (CI-তে রুলেট); আর সব-কিছু E2E-তে নামানো — ধীর-স্যুট মানে কেউ চালায় না, পিরামিড-আকৃতি রক্ষা করো।</p>`
  }
});
