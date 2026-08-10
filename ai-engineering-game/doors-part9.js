// DOORS DATA — Part 9 (Door 18: Builder's Quay Phase)
// Phase 4: The Builder's Quay — practical skills for building real AI applications
// Uses global `doors` array from doors-part1.js

doors.push({
  num:18, icon:"🌾", color:"#d4a574", name:"মোড়লের গোলা",
  subtitle:"The Miller's Granary", tech:"Data Preparation & Chunking", spirit:"যাকাতুল ফিতর — পরিমিত শস্য",
  secret:"কাঁচা শস্য সরাসরি নয়। পরিষ্কার করো, মাপমতো কাটো। বড় টুকরো অর্থহীন, ছোট টুকরো বিচ্ছিন্ন।",
  recall:{
    q:"মোড়ল কেন সব শস্য এক বস্তায় না রেখে আলাদা চালনিত চালেন?",
    qen:"Why does the miller sift grains through different sieves instead of putting them all in one bag?",
    a:"কারণ এক বস্তায় মিশ্র শস্য দিলে প্রতিটা টুকরোর সাইজ ভিন্ন — কোনোটা অর্ধেক, কোনোটা গুঁড়ো, কোনোটা পুরো। মানুষ খেতে পারে না। চালনিতে মাপমতো কাটলে প্রতিটা টুকরো সমান — সহজে সংরক্ষণ ও ব্যবহার। Chunking-ও তেমনি — সমান, অর্থপূর্ণ টুকরো।",
    aen:"Because mixing grains in one bag gives irregular pieces — some half, some powder, some whole. People can't eat it. Sifting through measured sieves gives even pieces — easy to store and use. Chunking is the same — even, meaningful pieces."
  },
  story:`
<p class="scene-setting">আঠারোতম দরজা। তুমি সমুদ্র থেকে উঠে একটা ঘাটে পৌঁছেছ। ঘাটের পাশে একটা বিশাল গোলা — শস্যভাণ্ডার। ভেতরে শুকনো খড়ের গন্ধ, কাঠের পাটাতি, দেয়ালে সারিবদ্ধ চালনি — বড়, মাঝারি, সূক্ষ্ম। মোড়ল শফিক বসে আছেন — ময়লা কাপড়ের পাটি, আটায় সাদা হওয়া হাত, চোখ প্রতিটা দানায় নিবদ্ধ। তাঁর সামনে একটা বিশাল বস্তা — কাঁচা শস্যে ভরা। কিন্তু তিনি বস্তাটা গ্রাহকের হাতে দিচ্ছেন না। কাঁচা শস্য সরাসরি খাওয়া যায় না।</p>
<p class="scene-setting en">The eighteenth door. You've climbed from the sea to a quay. Beside it: a vast granary. Inside: the smell of dry hay, wooden sieves, rows of screens on the walls — large, medium, fine. Modol Shafiq sits — a flour-dusted apron, hands white with grain-dust, eyes fixed on every kernel. Before him: a massive sack — raw, unprocessed grain. But he doesn't hand the sack to the customer. Raw grain isn't edible as-is.</p>

<p>তুমি কাছে গেলে। "শফিক চাচা, আপনি বস্তাটা দিচ্ছেন না কেন? শস্য তো প্রস্তুত।"</p>
<p class="en">You stepped closer. "Uncle Shafiq, why don't you hand over the sack? The grain is ready."</p>

<div class="dialogue">প্রস্তুত? এই দ্যাখো।" তিনি বস্তা খুললেন। ভেতরে — শস্য, আবার কাঠের টুকরো, আবার ছোট পাথর, আবার শুকনো পাতা, আবার মাটির দলা। "এটা কি খাওয়া যায়? না। এটা কাঁচা। কাঁচামাল। আমার কাজ হলো এটাকে প্রস্তুত করা — পরিষ্কার করা, মাপমতো কাটা, সংরক্ষণ করা। তারপর মানুষ খেতে পারে।</div>
<div class="dialogue en">"Ready? Look." He opened the sack. Inside — grain, but also wood splinters, small stones, dry leaves, clumps of dirt. "Can you eat this? No. This is raw. Raw material. My job is to prepare it — clean it, cut it to size, store it. Then people can eat."</div>

<p>তুমি ভাবলে — এটা তো সহজ। কিন্তু শফিক চাচা দেখালেন তাঁর চালনিগুলো।</p>
<p class="en">You thought — simple enough. But Shafiq showed his sieves.</p>

<div class="dialogue">এই চালনিগুলো আমার জীবন। এক চালনি নয় — তিন ধরনের। বড় চালনি: পাথর, কাঠ, বড় আবর্জনা বাদ। মাঝারি চালনি: শস্য ভাঙা শুরু, পাতা বাদ। সূক্ষ্ম চালনি: মাটি, ধুলো বাদ। প্রতিটা ধাপে শস্য পরিষ্কার হয়। শেষে যা থাকে — সেটা খাওয়ার যোগ্য।</div>
<div class="dialogue en">"These sieves are my life. Not one sieve — three kinds. Large sieve: removes stones, wood, big debris. Medium sieve: grain begins to break, leaves removed. Fine sieve: dirt, dust removed. At each step the grain gets cleaner. What remains — that's fit to eat."</div>

<div class="dialogue">বিচারপতি বলেছিলেন — গোডাউনে সাক্ষ্য আছে, কিন্তু সাক্ষ্য কাঁচা থাকলে কাজ হয় না। আমি বলি — গোডাউনের আগে আমার ঘর। আমি কাঁচা ডেটাকে প্রস্তুত করি। তারপর গোডাউনে যায়। RAG-এর গোডাউনে কাঁচা PDF, কাঁচা ওয়েবপেজ, কাঁচা CSV ফেলে দিলে — মডেল কী করবে? সে তো মানুষ নয় যে বুঝে বের করবে। তাকে পরিষ্কার, মাপমতো টুকরো দিতে হয়।</div>
<div class="dialogue en">"The judge said — the warehouse holds evidence, but raw evidence is useless. I say — before the warehouse, there's my room. I prepare the raw data. Then it goes to the warehouse. If you dump raw PDFs, raw web pages, raw CSVs into a RAG system — what will the model do? It's not human. It can't figure things out. You must give it clean, measured pieces."</div>

<div class="diagram"><svg viewBox="0 0 560 160" xmlns="http://www.w3.org/2000/svg"><rect x="20" y="30" width="140" height="50" rx="8" fill="rgba(45,212,191,.08)" stroke="#2dd4bf" stroke-width="1.5"/><text x="90" y="50" text-anchor="middle" fill="#2dd4bf" font-size="10" font-weight="bold">RAW DATA</text><text x="90" y="68" text-anchor="middle" fill="#9a93b8" font-size="9">documents</text><defs><marker id="ar18" markerWidth="6" markerHeight="6" refX="4" refY="3" orient="auto"><path d="M0,0 L4,3 L0,6" fill="#34d399"/></marker></defs><line x1="160" y1="55" x2="200" y2="55" stroke="#34d399" stroke-width="2" marker-end="url(#ar18)"/><rect x="205" y="30" width="140" height="50" rx="8" fill="rgba(82,196,26,.08)" stroke="#52c41a" stroke-width="1.5"/><text x="275" y="50" text-anchor="middle" fill="#52c41a" font-size="10" font-weight="bold">CHUNK</text><text x="275" y="68" text-anchor="middle" fill="#9a93b8" font-size="9">200-500 tok</text><line x1="345" y1="55" x2="385" y2="55" stroke="#34d399" stroke-width="2" marker-end="url(#ar18)"/><rect x="390" y="30" width="140" height="50" rx="8" fill="rgba(167,139,250,.08)" stroke="#a78bfa" stroke-width="1.5"/><text x="460" y="50" text-anchor="middle" fill="#a78bfa" font-size="10" font-weight="bold">INDEX</text><text x="460" y="68" text-anchor="middle" fill="#9a93b8" font-size="9">vector DB</text><text x="280" y="110" text-anchor="middle" fill="#fbbf24" font-size="10" font-weight="bold">Chunk size + overlap = quality</text><text x="280" y="135" text-anchor="middle" fill="#9a93b8" font-size="9">Too large = diluted signal</text></svg></div>

<div class="code-block">তিন ধাপ — Three Steps of Data Preparation:

১. পার্সিং (Parsing) — কাঁচা ফাইল পড়ো
   PDF → টেক্সট বের করো (PyMuPDF, marker-pdf)
   ওয়েবপেজ → HTML থেকে টেক্সট (BeautifulSoup)
   CSV → সারি ও কলাম
   ছবি → OCR (টেক্সট চিনে নাও)

২. পরিষ্কার (Cleaning) — আবর্জনা বাদ দাও
   • খালি পৃষ্ঠা, হেডার/ফুটার সরাও
   • ডুপ্লিকেট অংশ বাদ দাও
   • এনকোডিং ঠিক করো (Bengali অক্ষর ভাঙা গেলে)
   • অর্থহীন অংশ বাদ দাও

৩. চালনি (Chunking) — মাপমতো টুকরো
   বড় ডকুমেন্ট ছোট ছোট অংশে ভাগ করো।
   প্রতিটা অংশ = একটা chunk।
   এই chunk-গুলোই গোডাউনে যায়।</div>

<p>তারপর শফিক চাচা সবচেয়ে গুরুত্বপূর্ণ অংশে এলেন — চালনির সাইজ।</p>
<p class="en">Then Shafiq came to the most important part — the sieve size.</p>

<div class="dialogue">এখন শোনো। চালনির সাইজ ভুল হলে সব নষ্ট। খুব বড় চালনি — পাথর পাশ কাটায়, শস্যের সাথে মিশে যায়। খুব ছোট চালনি — শস্য গুঁড়ো হয়ে যায়, কেউ খেতে পারে না। সঠিক সাইজ দরকার। Chunking-এও একই।</div>
<div class="dialogue en">"Now listen. Wrong sieve size ruins everything. Too large a sieve — stones pass through, mix with grain. Too small a sieve — grain turns to powder, inedible. You need the right size. Chunking is the same."</div>

<div class="code-block">চার কৌশল — Four Chunking Strategies:

১. নির্দিষ্ট আকার (Fixed-Size)
   প্রতিটা chunk ৫০০ টোকেন। যান্ত্রিক।
   ✓ সহজ, দ্রুত
   ✗ বাক্য ভাঙে, অর্থ হারায়
   → শুরুর জন্য ঠিক, কিন্তু নিখুঁত নয়

২. বাক্য/অনুচ্ছেদ (Sentence-Based)
   প্রতিটা chunk = ৩-৫ বাক্য বা এক অনুচ্ছেদ।
   ✓ অর্থ সংরক্ষিত থাকে
   ✗ আকার অনিয়মিত
   → সাধারণ ব্যবহারে ভালো

৩. পুনরাবৃত্ত (Recursive)
   আগে অনুচ্ছেদে ভাগ → বড় হলে বাক্যে → আরও বড় হলে শব্দে।
   ✓ স্বয়ংক্রিয়, নমনীয়
   → LangChain-এর RecursiveCharacterTextSplitter

৪. অর্থগত (Semantic)
   প্রতিটা chunk একটা সম্পূর্ণ ধারণা — embedding দিয়ে মাপা।
   ✓ সবচেয়ে নিখুঁত
   ✗ ধীর, জটিল
   → উন্নত RAG এর জন্য</div>

<p>তুমি জিজ্ঞেস করলে: "ভুল সাইজ হলে কী হয়?"</p>
<p class="en">You asked: "What happens with the wrong size?"</p>

<div class="dialogue">ভুল সাইজ হলে সব ভাঙে। খুব বড় chunk — মডেল পড়তে গিয়ে প্রসঙ্গ হারায়। কারণ context window নির্দিষ্ট মাপের। রাষ্ট্রদূত বলেছিলেন। খুব ছোট chunk — অর্থ বিচ্ছিন্ন হয়ে যায়। "আজ বৃষ্টি হবে" এক chunk, "কিন্তু ছাতা আনতে ভুলে গেছি" আরেক chunk — দুটো আলাদা হলে অর্থ ভাঙে। সঠিক সাইজে একসাথে রাখলে পূর্ণ অর্থ।</div>
<div class="dialogue en">"Wrong size breaks everything. Too large a chunk — the model loses context while reading. Because the context window has a fixed size. The ambassador said that. Too small a chunk — meaning gets disconnected. 'It will rain today' as one chunk, 'but I forgot my umbrella' as another — separate, the meaning breaks. The right size keeps them together for full meaning."</div>

<p>তারপর শফিক চাচা একটা ভুলের কথা বললেন। মুখ নামিয়ে।</p>
<p class="en">Then Shafiq spoke of a mistake. Face lowered.</p>

<div class="dialogue">দুই বছর আগে একজন আমাকে একটা বিশাল আইনি দলিল দিল — ২০০ পৃষ্ঠা। আমি তাড়াহুড়ো করে নির্দিষ্ট সাইজে কেটে দিলাম। প্রতিটা ১০০০ টোকেন। কিন্তু ধারা ৫-এর উল্লেখ ছিল ধারা ৩-এর পাতায়। কাটার সময় সম্পর্ক ভেঙে গেল। ব্যবহারকারী জিজ্ঞেস করল — ধারা ৫ কী? মডেল ধারা ৩-এর সাথে সম্পর্ক জানে না। ভুল উত্তর। কারণ আমার চালনি ভুল ছিল।</div>
<div class="dialogue en">"Two years ago someone gave me a massive legal document — 200 pages. I rushed and cut it at fixed size — 1000 tokens each. But Section 5 was referenced on Section 3's page. Cutting broke the relationship. The user asked — what's Section 5? The model didn't know its connection to Section 3. Wrong answer. Because my sieve was wrong."</div>

<div class="dialogue">সমাধান কী? Overlap। আমি প্রতিটা chunk-এর শেষে পরের chunk-এর শুরুর কিছু অংশ রাখি। যেন সম্পর্ক ভাঙে না। দুই chunk-এর মাঝে ৫০-১০০ টোকেন overlap। বাক্য শেষ না হলে পরের chunk-এ শুরুতে থাকে।</div>
<div class="dialogue en">"The solution? Overlap. I keep some of the next chunk at the end of each chunk. So the relationship doesn't break. 50-100 tokens of overlap between chunks. If a sentence isn't finished, it starts the next chunk."</div>

<div class="code-block">Overlap ছাড়া:
  Chunk 1: "ধারা ৩ বলে — কর দিতে হবে। ধারা ৫ অনুযায়ী"
  Chunk 2: "ছাড় পাওয়া যায়।"
  → সম্পর্ক ভাঙা। মডেল বুঝতে পারে না।

Overlap সহ:
  Chunk 1: "ধারা ৩ বলে — কর দিতে হবে। ধারা ৫ অনুযায়ী"
  Chunk 2: "ধারা ৫ অনুযায়ী ছাড় পাওয়া যায়।"
  → সম্পর্ক টিকে আছে। মডেল বোঝে।</div>

<div class="dialogue">কোষাধ্যক্ষ বলেছিলেন — প্রতিটা টোকেনে দাম। আমি বলি — প্রতিটা chunk-এ মান। খুব বড় chunk মানে বেশি টোকেন, বেশি খরচ, কম নির্ভুলতা। খুব ছোট মানে অর্থ হারায়। সঠিক মাপ — সেটাই শিল্প। আমি মোড়ল — আমার কাজ শুধু শস্য কাটা নয়। আমার কাজ হলো প্রতিটা টুকরোর মান নিশ্চিত করা।</div>
<div class="dialogue en">"The treasurer said — every token costs. I say — every chunk has quality. Too large a chunk means more tokens, more cost, less precision. Too small means lost meaning. The right measure — that's the art. I'm the miller — my job isn't just cutting grain. My job is ensuring each piece's quality."</div>

<div class="dialogue">যাকাতুল ফিতর — ঈদের আগে প্রতিটা মুসলিম পরিমিত শস্য দান করেন। কাঁচা নয় — পরিমাপ করা, পরিষ্কার, নির্দিষ্ট পরিমাণ। এক সা' গম, বা এক সা' খেজুর। পরিমিত। কাঁচা শস্য দিলে গ্রহণ হয় না। আমার কাজও তেমনি — কাঁচা ডেটা নয়, পরিমিত chunk। পরিষ্কার, মাপমতো, অর্থপূর্ণ। এটাই RAG-এর ভিত্তি।</div>
<div class="dialogue en">"Zakat al-Fitr — before Eid, every Muslim gives measured grain. Not raw — measured, clean, specific quantity. One sa' of wheat, or one sa' of dates. Proportioned. Raw grain isn't accepted. My work is the same — not raw data, but measured chunks. Clean, sized, meaningful. This is the foundation of RAG."</div>

<div class="callout warn" data-door="18"><span class="co-icon">⚠️</span><div><strong>বাস্তব বিপদ:</strong> একটা টিম web scrape করে ১০০K page দিয়ে training করলো। ৩০% spam/duplicate। Model spam শিখলো। Data quality > quantity।</div></div>

<div class="secret-box"><div class="label">দরজা ১৮ — রহস্য</div><div class="text">🌾 কাঁচা শস্য সরাসরি নয়। পরিষ্কার করো, মাপমতো কাটো।<br><small>বড় chunk প্রসঙ্গ হারায়, ছোট chunk অর্থ হারায়। Overlap রাখো। Metadata যোগ করো। এটাই RAG-এর ভিত্তি।</small></div></div>`
});
