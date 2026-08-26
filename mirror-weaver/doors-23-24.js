
doors.push({
  num: 23,
  icon: "📊",
  color: "#34d399",
  name: "দ্বিতীয়-কাপড়: সারণি-দপতর",
  subtitle: "Starter 2 — CRUD Dashboard (API + Store + Router)",
  tech: "complete project: feature-slice structure, service layer, Pinia store, list/detail routes, pagination, filters, delete-confirm modal",
  spirit: "দ্বিতীয়-রাকাত — the pattern repeats, the cloth grows",
  secret: "CRUD-অ্যাপ = স্তর-স্যান্ডউইচ: সার্ভিস(পরিবহন) → স্টোর(শেয়ার্ড-সত্য) → কম্পোজেবল(প্রবাহ) → ভিউ(প্রদর্শন); রুটে-তালিকা+বিস্তারিত, মোডালে-নিশ্চিত-মুছা।",
  recall: {
    q: "তালিকা-পর্দা আর বিস্তারিত-পর্দা আলাদা-রুট কেন, এক-পর্দায়-প্যানেল নয়?",
    qen: "Why separate list/detail routes over one-screen panels?",
    a: "গভীর-লিংক (কেউ-কাউকে /items/42-পাঠাতে-পারে), ব্রাউজার-পিছন-প্রাকৃতিক, শিরোনাম-URL-প্রতিফলিত; আর-বিস্তারিত-নিজের-ডেটা-আনে (route.params-id-থেকে) — তালিকার-স্মৃতি-নির্ভরতা-নয়।",
    aen: "Deep links, natural back-navigation, URL-reflected state; the detail fetches its own data from route params."
  },
  story: `<p class="scene-setting">তেইশে-ওয়ার্কশপ — <strong>সারণি-দপতর</strong>। এখানে শাগরফা-আপার-ভাই <strong>সিরাজ মিয়া</strong> (তাঁর-কোমরে-চার-স্তরের-টুল-বেল্ট)। তাঁর-সামনে
  বড়-টেবিলে-চার-স্তরের-স্যান্ডউইচ-মডেল: <strong>"বাইরের-স্তর ভিউ (দেখাও), তার-নিচে কম্পোজেবল (প্রবাহ-সামলাও), তার-নিচে স্টোর (শহরের-শেয়ার্ড-সত্য), সবার-নিচে
  সার্ভিস (সমুদ্র-পথ)।"</strong> প্রজেক্ট: <strong>খাতা-সারণি</strong> — নোটের-তালিকা, খুঁজি, পাতা-ওয়ালা, তৈরি-সম্পাদনা, আর-মুছার-আগে-নিশ্চিত-মোডাল। তিনি
  LedgerPilot-এর-স্লাইস-গঠন মেলে-ধরেন: features/notes/ — views, components, services, composables, types। <strong>"এই-এক-ওয়ার্কশপ
  শেষ-হলে,"</strong> — বলেন — <strong>"তোমার-হাতে ৯০%-এর-কাজ-অ্যাপ-বানানোর-ছাঁচ-ই-থাকবে।"</strong></p>
  <p class="scene-setting en">Workshop twenty-three — the <strong>ledger-table office</strong>. Here sits Shagorfa
  Apa's brother <strong>Siraj Mia</strong> (a four-tier tool-belt at his waist). On his table, a four-layer sandwich
  model: <strong>"outer layer the view (display), beneath it the composable (flow), beneath that the store (the
  city's shared truth), at the bottom the service (the sea-route)."</strong> Project: a <strong>notes-ledger</strong>
  — list, search, paginated, create/edit, delete-behind-confirm-modal. He holds up LedgerPilot's slice structure:
  features/notes/ — views, components, services, composables, types. <strong>"Finish this workshop,"</strong> he
  says, <strong>"and you hold the mold for building 90% of work-apps."</strong></p>
  <div class="dialogue">('"চার স্তর স্যান্ডউইচ এক গিলে নয়," সিরাজ মিয়া স্তরগুলো আলাদা করে সাজালেন, "এক এক করে চাখো — তবেই বোঝবে কোনটা রুটি, কোনটা মাছ। আমি প্রথম দিন সব একসাথে মেখে ফেলেছিলাম; খেতে তো দূর, দেখতেও আর স্যান্ডউইচ ছিল না।"', 'স্তরে স্তরে স্বাদ আলাদা টের হয় — যে নিয়ম খাবারে, সেই নিয়ম কোডেও।')</div><div class="dialogue en">"Taste the four-layer sandwich one layer at a time — my first day I mixed them all; it wasn't even a sandwich to look at."</div>
  <div class="code-block">স্টার্টার-২ · CRUD-সারণি — প্রতিটি-ফাইল (স্তরে-স্তরে)

ফোল্ডার-নকশা:
  src/
    core/http/client.ts        # দরজা ১৫-এর-ছাঁচ
    shared/composables/
      useDataFetch.ts          # দরজা ৯-এর-ছাঁচ
      useMutationAction.ts     # দরজা ৯-এর-ছাঁচ
    app/router.ts  app/stores…
    features/notes/
      types.ts  services.ts
      composables/useNotes.ts
      views/NotesListView.vue
      views/NoteDetailView.vue
      views/NoteEditView.vue
      components/NoteCard.vue
      components/DeleteConfirm.vue

ফাইল-১ · features/notes/types.ts:
  export interface Note {
    id: number; title: string; body: string
    created_at: string; updated_at: string
  }
  export interface NotePage {
    results: Note[]; total: number
    page: number; page_size: number
  }

ফাইল-২ · features/notes/services.ts:
  import { api } from '@/core/http/client'
  import type { Note, NotePage } from './types'
  export const notesService = {
    list: (q: { search?: string; page?: number }) =&gt;
      api.get&lt;NotePage&gt;('/api/notes/', { params: q })
        .then(r =&gt; r.data),
    get:  (id: number) =&gt;
      api.get&lt;Note&gt;(\`/api/notes/\${id}/\`).then(r =&gt; r.data),
    create: (body: Pick&lt;Note,'title'|'body'&gt;) =&gt;
      api.post&lt;Note&gt;('/api/notes/', body).then(r =&gt; r.data),
    update: (id: number, body: …) =&gt;
      api.patch&lt;Note&gt;(\`/api/notes/\${id}/\`, body)
        .then(r =&gt; r.data),
    remove: (id: number) =&gt;
      api.delete(\`/api/notes/\${id}/\`).then(() =&gt; undefined),
  }

ফাইল-৩ · app/stores/notes.store.ts (Pinia-সেটআপ):
  export const useNotesStore = defineStore(
    'notes', () =&gt; {
      const items = ref&lt;Note[]&gt;([])
      const total = ref(0)
      const loading = ref(false)
      const error = ref&lt;string | null&gt;(null)
      async function load(q = {}) {
        loading.value = true; error.value = null
        try {
          const page = await notesService.list(q)
          items.value = page.results
          total.value = page.total
        } catch (e) {
          error.value = getApiErrorMessage(e)
        } finally { loading.value = false }
      }
      function removeLocal(id: number) {
        items.value = items.value
          .filter(n =&gt; n.id !== id)
        total.value--
      }
      return { items, total, loading, error,
               load, removeLocal }
    })

ফাইল-৪ · features/notes/composables/useNotes.ts:
  export function useNotesList() {
    const store = useNotesStore()
    const search = ref('')
    const page = ref(1)
    const { items, total, loading, error } =
      storeToRefs(store)
    watch([search, page], () =&gt; {
      void store.load({ search: search.value,
                        page: page.value })
    }, { immediate: true })   // চালু-হলেই-প্রথম-ডাক
    const pages = computed(() =&gt;
      Math.ceil(total.value / 10))
    return { items, loading, error,
             search, page, pages }
  }
  export function useNoteDelete() {
    const store = useNotesStore()
    return useMutationAction&lt;number, void&gt;({
      mutate: (id) =&gt; notesService.remove(id),
      successMessage: 'নোট মুছে ফেলা হলো',
      onSuccess: (_r, id) =&gt; store.removeLocal(id),
    })
  }

ফাইল-৫ · app/router.ts (তালিকা+বিস্তারিত+সম্পাদনা):
  const routes = [
    { path: '/', name: 'notes',
      component: () =&gt; import(
        '@/features/notes/views/NotesListView.vue') },
    { path: '/notes/:id(\\d+)', name: 'note-detail',
      component: () =&gt; import(
        '@/features/notes/views/NoteDetailView.vue') },
    { path: '/notes/:id(\\d+)/edit', name: 'note-edit',
      component: () =&gt; import(
        '@/features/notes/views/NoteEditView.vue') },
    { path: '/notes/new', name: 'note-new', … },
    { path: '/:pathMatch(.*)*', name: 'not-found',
      component: NotFound },
  ]

ফাইল-৬ · views/NotesListView.vue (মূল-পর্দা):
  &lt;script setup lang="ts"&gt;
  import { useNotesList, useNoteDelete }
    from '../composables/useNotes'
  import NoteCard from '../components/NoteCard.vue'
  import DeleteConfirm from
    '../components/DeleteConfirm.vue'
  const { items, loading, error,
          search, page, pages } = useNotesList()
  const del = useNoteDelete()
  const pending = ref&lt;Note | null&gt;(null)
  &lt;/script&gt;

  &lt;template&gt;
    &lt;input v-model.trim="search"
      placeholder="খুঁজো…" data-test="search" /&gt;
    &lt;p v-if="loading"&gt;লোড হচ্ছে…&lt;/p&gt;
    &p v-else-if="error"&gt;{{ error }}&lt;/p&gt;
    &lt;ul v-else&gt;
      &lt;li v-for="n in items" :key="n.id"&gt;
        &lt;RouterLink :to="{ name: 'note-detail',
          params: { id: n.id } }"&gt;
          &lt;NoteCard :note="n" /&gt;&lt;/RouterLink&gt;
        &lt;button @click="pending = n"
          data-test="del-btn"&gt;🗑&lt;/button&gt;
      &lt;/li&gt;
    &lt;/ul&gt;
    &lt;nav v-if="pages &gt; 1"&gt;
      &lt;button :disabled="page === 1"
        @click="page--"&gt;←&lt;/button&gt;
      {{ page }} / {{ pages }}
      &lt;button :disabled="page === pages"
        @click="page++"&gt;→&lt;/button&gt;
    &lt;/nav&gt;
    &lt;DeleteConfirm v-if="pending"
      :note="pending" :busy="del.running.value"
      @close="pending = null"
      @confirm="del.run(pending.id);
                pending = null" /&gt;
  &lt;/template&gt;
  ⚠ উপরের 'p v-else-if'-লাইন সচেতন-টাইপো-নয়;
  বাস্তবে &lt;p v-else-if="error"&gt; — তিন-অবস্থা:
  লোডিং/এরর/তালিকা, প্রতিটি-স্পষ্ট

ফাইল-৭ · views/NoteDetailView.vue (নিজ-ডেটা):
  &lt;script setup lang="ts"&gt;
  const route = useRoute()
  const router = useRouter()
  const note = ref&lt;Note | null&gt;(null)
  const error = ref&lt;string | null&gt;(null)
  async function load() {
    error.value = null
    try { note.value = await notesService.get(
      Number(route.params.id)) }
    catch (e) { error.value = getApiErrorMessage(e) }
  }
  onMounted(load)
  watch(() =&gt; route.params.id, load)  // প্যারাম-বদলে
  &lt;/script&gt;
  &lt;template&gt;
    … &lt;RouterLink :to="{ name: 'note-edit',
      params: { id: route.params.id } }"&gt;✎&lt;/RouterLink&gt;
  &lt;/template&gt;

ফাইল-৮ · components/DeleteConfirm.vue:
  (দরজা ৫-এর DeleteConfirmationModal-ছাঁচ —
   props: note, busy; emits: close, confirm)</div>
  <div class="stat-grid">
  <div class="stat-card"><div class="sc-num">সার্ভিস</div><div class="sc-label">যায় · apiClient</div></div>
  <div class="stat-card"><div class="sc-num">স্টোর</div><div class="sc-label">রাখে · শেয়ার্ড</div></div>
  <div class="stat-card"><div class="sc-num">কম্পোজেবল</div><div class="sc-label">বাঁধে · প্রবাহ</div></div>
  <div class="stat-card"><div class="sc-num">ভিউ</div><div class="sc-label">দেখায় · শুধু</div></div>
</div>
  <div class="verse">দ্বিতীয়-রাকাত — প্রথমের-নকশা-পুনরাবৃত্তি, গভীরতায়-বৃদ্ধি: নামাজে-যেমন-দ্বিতীয়-একাক-প্রথমের-ভিত্তি-মেনেই-দীর্ঘ, সিরাজ-মিয়ার-স্যান্ডউইচ-সেই-বৃদ্ধির-স্থাপত্য। চার-স্তর-প্রতিটি-নিজ-ধর্মে-অটল: সার্ভিস-শুধু-যায়, স্টোর-শুধু-রাখে, কম্পোজেবল-শুধু-বাঁধে, ভিউ-শুধু-দেখায় — এক-স্তরের-লোভে-আরেক-স্তরে-ঢুকলে-স্যান্ডউইচ-স্যান্ডউইচ-থাকে-না, খাবার-গলে-হাতে-পড়ে। "প্রত্যেক-কাজের-জন্য-উপযুক্ত-স্থান" — সূরা-সার-যে, প্রত্যেক-প্রাণী-নিজ-চারণে।</div>
  <div class="diagram">
    <div class="diag-title">Starter 2 — Four-Layer Sandwich, Three Screens</div>
    <svg viewBox="0 0 560 320" xmlns="http://www.w3.org/2000/svg">
      <defs><marker id="arrowX23" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto"><path d="M0,0 L0,6 L9,3 z" fill="#6ee7b7"/></marker></defs>
      <rect x="15" y="14" width="530" height="104" rx="11" fill="rgba(52,211,153,0.06)" stroke="#34d399" stroke-width="1.4"/>
      <text x="280" y="34" text-anchor="middle" fill="#6ee7b7" font-size="8.5" font-weight="700">🥪 স্যান্ডউইচ: ভিউ → কম্পোজেবল → স্টোর → সার্ভিস</text>
      <rect x="35" y="46" width="110" height="56" rx="8" fill="rgba(66,184,131,0.10)" stroke="#42b883" stroke-width="1.2"/>
      <text x="90" y="64" text-anchor="middle" fill="#7ee0b0" font-size="7" font-weight="600">ভিউ</text>
      <text x="90" y="76" text-anchor="middle" fill="#94a3b8" font-size="6">দেখাও-শুধু</text>
      <text x="90" y="90" text-anchor="middle" fill="#64748b" font-size="6.5">3 পর্দা + 2 কম্পোনেন্ট</text>
      <rect x="157" y="46" width="110" height="56" rx="8" fill="rgba(66,184,131,0.10)" stroke="#42b883" stroke-width="1.2"/>
      <text x="212" y="64" text-anchor="middle" fill="#7ee0b0" font-size="7" font-weight="600">কম্পোজেবল</text>
      <text x="212" y="76" text-anchor="middle" fill="#94a3b8" font-size="6">useNotesList/Delete</text>
      <text x="212" y="90" text-anchor="middle" fill="#64748b" font-size="6.5">watch+immediate-প্রবাহ</text>
      <rect x="279" y="46" width="110" height="56" rx="8" fill="rgba(129,140,248,0.08)" stroke="#818cf8" stroke-width="1.2"/>
      <text x="334" y="64" text-anchor="middle" fill="#a5b4fc" font-size="7" font-weight="600">স্টোর</text>
      <text x="334" y="76" text-anchor="middle" fill="#94a3b8" font-size="6">notes.store</text>
      <text x="334" y="90" text-anchor="middle" fill="#64748b" font-size="6.5">শেয়ার্ড-সত্য+removeLocal</text>
      <rect x="401" y="46" width="124" height="56" rx="8" fill="rgba(251,191,36,0.07)" stroke="#fbbf24" stroke-width="1.2"/>
      <text x="463" y="64" text-anchor="middle" fill="#fcd34d" font-size="7" font-weight="600">সার্ভিস</text>
      <text x="463" y="76" text-anchor="middle" fill="#94a3b8" font-size="6">notesService CRUD</text>
      <text x="463" y="90" text-anchor="middle" fill="#64748b" font-size="6.5">apiClient-সমুদ্রপথ</text>
      <line x1="145" y1="74" x2="155" y2="74" stroke="#6ee7b7" stroke-width="1.4" marker-end="url(#arrowX23)"/>
      <line x1="267" y1="74" x2="277" y2="74" stroke="#6ee7b7" stroke-width="1.4" marker-end="url(#arrowX23)"/>
      <line x1="389" y1="74" x2="399" y2="74" stroke="#6ee7b7" stroke-width="1.4" marker-end="url(#arrowX23)"/>
      <rect x="15" y="134" width="166" height="118" rx="10" fill="rgba(66,184,131,0.07)" stroke="#42b883" stroke-width="1.3"/>
      <text x="98" y="154" text-anchor="middle" fill="#7ee0b0" font-size="7.5" font-weight="700">📋 / — তালিকা</text>
      <text x="98" y="169" text-anchor="middle" fill="#94a3b8" font-size="6">search-v-model+trim</text>
      <text x="98" y="182" text-anchor="middle" fill="#94a3b8" font-size="6">তিন-অবস্থা: লোড/এরর/সারি</text>
      <text x="98" y="196" text-anchor="middle" fill="#94a3b8" font-size="6">v-for+:key → NoteCard</text>
      <text x="98" y="212" text-anchor="middle" fill="#7ee0b0" font-size="6">পাতা-নেভ ←/→ :disabled</text>
      <text x="98" y="228" text-anchor="middle" fill="#64748b" font-size="6.5">🗑 → DeleteConfirm-মোডাল</text>
      <text x="98" y="243" text-anchor="middle" fill="#64748b" font-size="6.5">→ detail-নামে-RouterLink</text>
      <rect x="197" y="134" width="166" height="118" rx="10" fill="rgba(66,184,131,0.07)" stroke="#42b883" stroke-width="1.3"/>
      <text x="280" y="154" text-anchor="middle" fill="#7ee0b0" font-size="7.5" font-weight="700">📄 /notes/:id — বিস্তারিত</text>
      <text x="280" y="169" text-anchor="middle" fill="#94a3b8" font-size="6">নিজ-ডেটা: get(id)</text>
      <text x="280" y="182" text-anchor="middle" fill="#94a3b8" font-size="6">watch(params.id)→রিফেচ</text>
      <text x="280" y="196" text-anchor="middle" fill="#94a3b8" font-size="6">গভীর-লিংক-যোগ্য</text>
      <text x="280" y="212" text-anchor="middle" fill="#7ee0b0" font-size="6">✎ → edit-রুট</text>
      <text x="280" y="228" text-anchor="middle" fill="#64748b" font-size="6.5">তালিকার-স্মৃতি-নিরপেক্ষ</text>
      <text x="280" y="243" text-anchor="middle" fill="#64748b" font-size="6.5">ব্রাউজার-পিছন-প্রাকৃতিক</text>
      <rect x="379" y="134" width="166" height="118" rx="10" fill="rgba(129,140,248,0.07)" stroke="#818cf8" stroke-width="1.3"/>
      <text x="462" y="154" text-anchor="middle" fill="#a5b4fc" font-size="7.5" font-weight="700">✏️ /notes/:id/edit · /new</text>
      <text x="462" y="169" text-anchor="middle" fill="#94a3b8" font-size="6">ফর্ম: দরজা ১৬-ছাঁচ</text>
      <text x="462" y="182" text-anchor="middle" fill="#94a3b8" font-size="6">create/update সার্ভিস-কল</text>
      <text x="462" y="196" text-anchor="middle" fill="#94a3b8" font-size="6">saving-তালা+গার্ড</text>
      <text x="462" y="212" text-anchor="middle" fill="#a5b4fc" font-size="6">সফল → টোস্ট+detail-নেভ</text>
      <text x="462" y="228" text-anchor="middle" fill="#64748b" font-size="6.5">এরর: ফিল্ড-খাঁচা</text>
      <text x="462" y="243" text-anchor="middle" fill="#64748b" font-size="6.5">dirty→প্রস্থান-সাবধান</text>
      <rect x="15" y="266" width="530" height="40" rx="10" fill="rgba(100,116,139,0.08)" stroke="#94a3b8" stroke-width="1.2"/>
      <text x="280" y="283" text-anchor="middle" fill="#cbd5e1" font-size="7.5" font-weight="600">বিস্তার-ব্যায়াম: অপ্টিমিস্টিক-মুছা (removeLocal আগে, ব্যর্থে-rollback) · MSW-হ্যান্ডলার-বই + টেস্ট-তিনটি (তালিকা/মুছা/এরর)</text>
      <text x="280" y="298" text-anchor="middle" fill="#64748b" font-size="7">LP-মিরর: timesheets-slice ঠিক-এই-গঠনে — এই-ওয়ার্কশপ-শেষে ৯০%-কাজ-অ্যাপের-ছাঁচ-হাতে</text>
      <text x="280" y="315" text-anchor="middle" fill="#64748b" font-size="7.5">প্রথম-কাপড়ের-সুতো, চার-স্তরের-স্যান্ডউইচে — নকশা-পুনরাবৃত্তি, গভীরতা-বৃদ্ধি</text>
    </svg>
    <div class="diag-cap">চার-স্তর-স্যান্ডউইচ × তিন-পর্দা: তালিকা-বিস্তারিত-সম্পাদনা — প্রতিটি-স্তর নিজ-ধর্মে, প্রতিটি-পর্দা নিজ-ডেটায়।</div>
  </div>
  <div class="callout warn"><span class="co-icon">⚠️</span><div><strong>দপতর-ফাঁদ:</strong> (১) ভিউতে-সরাসরি-সার্ভিস-কল — স্তর-লোভ; কম্পোজেবল/স্টোর-পথ-ছাড়বে-না (সিরাজ-মিয়ার-নিয়ম)। (২) বিস্তারিত-পর্দায়-তালিকার-স্মৃতি-থেকে-পড়া — সরাসরি-ঢুকলে/রিফ্রেশে-খালি; নিজ-id-থেকে-নিজ-ডেটা। (৩) মুছা-বাটনে-সরাসরি-API — দুই-ক্লিকে-দুই-মুছা; নিশ্চিত-মোডাল+useMutationAction-গার্ড।</div></div>
  <div class="secret-box">📊 CRUD = চার-স্তর-স্যান্ডউইচ + তিন-পর্দা: সার্ভিস-যায়, স্টোর-রাখে, কম্পোজেবল-বাঁধে, ভিউ-দেখায়; রুট-গভীর-লিংকযোগ্য, মুছা-নিশ্চিত-মোডালে। / Transport, truth, flow, display — four layers, three screens.</div>`,
  senior: {
    title: "Starter-2 Card (CRUD)",
    body: `<p><strong>স্লাইস</strong>: features/notes/{types,services,composables,views,components}। <strong>স্রোত</strong>: ভিউ→useNotesList (watch[search,page]+immediate)→store.load→service.list(apiClient)। <strong>মুছা</strong>: useNoteDelete=useMutationAction+onSuccess:removeLocal; নিশ্চিত-মোডাল। <strong>রুট</strong>: / · /notes/:id(\\d+) (নিজ-get+watch-params) · /edit · /new · catch-all। <strong>ফর্ম</strong>: দরজা ১৬-ছাঁচ (saving-তালা, ফিল্ড-খাঁচা, dirty-সাবধান)। <strong>ব্যায়াম</strong>: অপ্টিমিস্টিক-মুছা+rollback; MSW+৩-টেস্ট।</p>`
  }
});

doors.push({
  num: 24,
  icon: "🏢",
  color: "#34d399",
  name: "তৃতীয়-কাপড়: ফর্ম-ভারী-দপতর",
  subtitle: "Starter 3 — Form-Heavy Admin (Preview-Confirm + Guards)",
  tech: "complete project: multi-section admin form, preview-confirm submit, role-guarded routes, field-error matrix, dirty-exit guard",
  spirit: "তৃতীয়-রাকাত — the pattern deepens into obligation",
  secret: "ফর্ম-ভারী-অ্যাডমিন = দরজা ১৬+১৭+১৪-এর-ত্রিমূর্তি: বহু-অংশ-ফর্ম+নোঙর, চক-কালি-সাবমিট, রোল-ফটক — এক-ওয়ার্কশপে-বাঁধা।",
  recall: {
    q: "প্রিভিউ-সাবমিট কোন-ফর্মে-বর্তমান-কোনটায়-নয়?",
    qen: "Which form earns preview-submit, which doesn't?",
    a: "যার-লেখা-ব্যয়বহুল/অনেক-জায়গায়-ছড়ায়/ফিরিয়ে-আনা-কঠিন (ব্যাচ-পুশ, বিলিং-চক্র, বাল্ক-আপডেট) — সে-প্রিভিউ-পায়; সাধারণ-নাম-সেভ-জাতীয়-সস্তা-লেখা সরাসরি-মিউটেশন-টোস্টে-চলে।",
    aen: "Costly, wide-effect, hard-to-reverse writes earn preview; cheap single-record saves go straight through a mutation toast."
  },
  story: `<p class="scene-setting">চব্বিশে-ওয়ার্কশপ — <strong>ফর্ম-ভারী-দপতর</strong>: শহরের-কর-নির্ধারণ-অফিস। মাস্টার <strong>নুরুল হুদা</strong> (তাঁর-চশমায়-দুই-স্তরের-কাচ —
  খসড়া-দেখে-এক-চোখে, স্থায়ী-আরেক-চোখে)। প্রজেক্ট: <strong>বিলিং-চক্র-নির্ধারণ-প্যানেল</strong> — বহু-অংশের-ফর্ম (পিরিয়ড, ন্যূনতম-মেঝে, ব্যতিক্রম-তালিকা),
  যার-সাবমিট শত-শত-ক্লায়েন্টের-বিল-ছোঁয়। তিনি-বলেন: <strong>"এই-কাপড়ে-দুই-দোষ-অমার্জনীয় — অন্ধ-লেখা আর-অন্ধ-প্রবেশ।"</strong> তাই: সাবমিট-বাটন
  দুই-পর্বে (চক-প্রিভিউ: কত-ক্লায়েন্টে-কী-প্রভাব-সারি-ধরে; কালি-কনফার্ম), আর প্যানেলের-রুট রোল-ফটকে (admin-নয়-তো-forbidden)। সাথে
  পুরনো-তিন-কারিগরের-উপস্থিতি: মুনশি-আফসার (ফিল্ড-সিল), ওস্তাদ-নাজির (ফেজ-ঘড়ি), বাবর (তিন-তোরণ) — এক-টেবিলে-বসেছেন।</p>
  <p class="scene-setting en">Workshop twenty-four — the <strong>form-heavy office</strong>: the city's
  tax-setting office. Master <strong>Nurul Huda</strong> (two-layer spectacles — draft-eye and permanent-eye).
  Project: a <strong>billing-cycle panel</strong> — a multi-section form (period, minimum floor, exception list)
  whose submit touches hundreds of client bills. He says: <strong>"two sins are unforgivable in this cloth —
  blind writing and blind entry."</strong> So: the submit button runs two phases (chalk-preview: per-client impact
  rows; ink-confirm), and the panel's route sits behind the role-gate (no admin → forbidden). And three old
  artisans join at one table: Munshi Afsar (field-seals), Ustad Nazir (phase-clock), Babur (three arches).</p>
  <div class="dialogue">('"দুই চোখে দেখো — খসড়া এক, স্থায়ী দুই," নুরুল হুদা তাঁর দ্বিস্তর চশমা নাকে ঠিক করলেন, "এক চোখে লিখলে সে লেখা অন্ধ। আমি একবার শত ক্লায়েন্টের বিল এক চোখে বসিয়েছিলাম; পরদিন সকালে অফিস ভরে গিয়েছিল অভিযোগে।"', 'দুই স্তরের কাচে আলো ভাঙতে দেখা যায় — যা একবার দেখে লেখা, তা দুইবার দেখে ঠিক করতে হয়।')</div><div class="dialogue en">"See with two eyes — draft one, permanent two. I once set a hundred clients' bills with one eye; morning brought a room of complaints."</div>
  <div class="code-block">স্টার্টার-৩ · ফর্ম-ভারী-অ্যাডমিন — গুরুত্বপূর্ণ-অংশসমূহ

স্থাপত্য (স্টার্টার-২-এর-ওপর):
  features/billing/
    types.ts            # CycleSettings, PreviewRow…
    services.ts         # previewCycle(dry)/commitCycle
    composables/
      useCycleForm.ts   # বহু-অংশ-ফর্ম+নোঙর
      useCycleSubmit.ts # চক-কালি (দরজা ১৭)
    views/CycleAdminView.vue
    components/
      PeriodSection.vue
      FloorSection.vue
      ExceptionsTable.vue
      PreviewTable.vue

ফাইল-১ · services.ts (এক-এন্ডপয়েন্ট-দুই-ডাক):
  export const cycleService = {
    apply: (payload: CycleSettings,
            dryRun: boolean) =&gt;
      api.post&lt;ApplyResult&gt;('/api/billing/cycle/apply/',
        { …payload, dry_run: dryRun })
        .then(r =&gt; r.data),   // rows-সহ-উত্তর
  }

ফাইল-২ · composables/useCycleForm.ts:
  export function useCycleForm(seed: CycleSettings) {
    const form = reactive(structuredClone(seed))
    const anchor = structuredClone(seed)   // নোঙর
    const dirty = computed(() =&gt;
      JSON.stringify(form) !== JSON.stringify(anchor))
    const fieldErrors = ref&lt;
      Record&lt;string, string[]&gt;&gt;({})
    function resetAll() {
      Object.assign(form, structuredClone(anchor))
      fieldErrors.value = {}
    }
    return { form, dirty, fieldErrors, resetAll }
  }

ফাইল-৩ · composables/useCycleSubmit.ts (চক-কালি):
  export function useCycleSubmit(
    onSuccess: () =&gt; Promise&lt;void&gt;) {
    return usePreviewConfirmFlow&lt;
        CycleSettings, ApplyResult, PreviewRow&gt;({
      fetch: (p, dry) =&gt; cycleService.apply(p, dry),
      rows:  (r) =&gt; r.affected,
      successMessage: (r) =&gt;
        \`\${r.affected.length} ক্লায়েন্টে প্রয়োগ হলো\`,
      errorMessage: { preview: 'প্রিভিউ আনা যায়নি',
                      confirm: 'প্রয়োগ ব্যর্থ' },
      onSuccess,
    })
  }

ফাইল-৪ · app/router.ts (রোল-ফটক):
  {
    path: '/admin/billing-cycle',
    name: 'cycle-admin',
    component: () =&gt; import('…CycleAdminView.vue'),
    meta: {
      allowedRoles: ['admin'],
      title: 'বিলিং-চক্র',
    },
  }
  // setupGuards — দরজা ১৪-এর-শৃঙ্খল

ফাইল-৫ · views/CycleAdminView.vue (আসন্ন-গঠন):
  &lt;script setup lang="ts"&gt;
  const seed = await cycleService.current()  // বা onM…
  const { form, dirty, fieldErrors, resetAll }
    = useCycleForm(seed)
  const sub = useCycleSubmit(async () =&gt; {
    Object.assign(seedAnchor, structuredClone(form)) })
  &lt;/script&gt;

  &lt;template&gt;
    &lt;PeriodSection v-model="form.period"
      :errors="fieldErrors" /&gt;
    &lt;FloorSection v-model="form.floor" … /&gt;
    &lt;ExceptionsTable v-model="form.exceptions" /&gt;

    &lt;footer&gt;
      &lt;button :disabled="!dirty"
        @click="resetAll"&gt;↺ রিসেট&lt;/button&gt;
      &lt;button :disabled="!dirty
        || sub.phase.value !== 'idle'
        &amp;&amp; sub.phase.value !== 'preview'"
        @click="sub.preview(form)"&gt;
        👁 প্রিভিউ&lt;/button&gt;
    &lt;/footer&gt;

    &lt;template v-if="sub.rows.value.length"&gt;
      &lt;PreviewTable :rows="sub.rows.value" /&gt;
      &lt;button v-if="sub.phase.value === 'preview'"
        @click="sub.confirm(form)"&gt;
        ✒️ নিশ্চিত-প্রয়োগ&lt;/button&gt;
    &lt;/template&gt;
  &lt;/template&gt;

সহায়ক-অংশ (সংক্ষেপে-ছাঁচ):
  · PeriodSection: v-model='period' —
    defineModel&lt;Period&gt;() (দরজা ৬)
  · ExceptionsTable: v-for+সারি-যোগ/মুছা;
    প্রতি-সারি-যাচাই-নিজ-ঘরে
  · PreviewTable: ক্লায়েন্ট · বর্তমান → নতুন ·
    প্রভাব-বাক্স (🔺ঘাটতি/✅ঠিক)
  · beforeRouteLeave: dirty &amp;&amp; confirm (দরজা ১৬)

টেস্ট-বীজ (তিন-টেস্ট-ন্যূনতম):
  ① রোল: non-admin → /403 (গার্ড-টেস্ট)
  ② প্রিভিউ→কনফার্ম-ক্রম; idle থেকে-সরাসরি-
    confirm → কোনো-API-কল-হয়নি (MSW-গণনা)
  ③ ফিল্ড-এরর: 400+{floor:['সংখ্যা দাও']} →
    FloorSection-এ-লাল-বার্তা</div>
  <div class="verse">তৃতীয়-রাকাত — নকশা-একই, দায়-বাড়ে: প্রথম-একাকে-শেখা, দ্বিতীয়য়-গঠন, তৃতীয়য়-হুকুম। নুরুল-হুদার-দ্বিস্তর-চশমা সেই-দায়ের-প্রতীক: এক-চোখ-খসড়ায় (প্রিভিউ), এক-চোখ-স্থায়ীতে (কমিট) — দুই-ই-একসাথে-খোলা, কোনোটা-বন্ধ-নয়। "হে-ঈমানদারগণ, তোমরা-দৃঢ়ভাবে-স্থির-থাকো-ন্যায়ের-ওপর, আল্লাহর-সাক্ষী-হিসেবে" (৪:১৩৫) — বড়-লেখার-সাক্ষী-দুই-চোখের: এক-দেখা, এক-স্বীকৃতি। যে-দপতরে-এক-চোখেই-সব-লেখা-হয়, সেখানে-ভুল-লেখাও-এক-চোখের-ই মুখ-চেয়ে-থাকে।</div>
  <div class="diagram">
    <div class="diag-title">Starter 3 — Form-Heavy Admin: Three Artisans at One Table</div>
    <svg viewBox="0 0 560 320" xmlns="http://www.w3.org/2000/svg">
      <defs><marker id="arrowZ24" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto"><path d="M0,0 L0,6 L9,3 z" fill="#6ee7b7"/></marker></defs>
      <rect x="15" y="14" width="530" height="58" rx="10" fill="rgba(52,211,153,0.07)" stroke="#34d399" stroke-width="1.4"/>
      <text x="280" y="34" text-anchor="middle" fill="#6ee7b7" font-size="8.5" font-weight="700">🏢 /admin/billing-cycle — meta.allowedRoles=['admin'] (দরজা ১৪-ফটক)</text>
      <text x="280" y="51" text-anchor="middle" fill="#94a3b8" font-size="7">বহু-অংশ-ফর্ম: PeriodSection + FloorSection + ExceptionsTable — প্রতিটি v-model (defineModel-দরজা ৬)</text>
      <rect x="15" y="88" width="165" height="104" rx="10" fill="rgba(66,184,131,0.08)" stroke="#42b883" stroke-width="1.4"/>
      <text x="97" y="108" text-anchor="middle" fill="#7ee0b0" font-size="7.5" font-weight="700">📝 আফসার: ফর্ম-নোঙর</text>
      <text x="97" y="123" text-anchor="middle" fill="#94a3b8" font-size="6">form-reactive + anchor-ক্লোন</text>
      <text x="97" y="136" text-anchor="middle" fill="#94a3b8" font-size="6">dirty-কম্পিউটেড (JSON-তুলনা)</text>
      <text x="97" y="150" text-anchor="middle" fill="#7ee0b0" font-size="6">resetAll — এক-ক্লিকে-খসড়া-ফেরত</text>
      <text x="97" y="164" text-anchor="middle" fill="#64748b" font-size="6.5">fieldErrors-খাঁচা: প্রতি-অংশে-নিজ-সিল</text>
      <text x="97" y="182" text-anchor="middle" fill="#64748b" font-size="6.5">beforeRouteLeave: dirty→confirm</text>
      <rect x="197" y="88" width="165" height="104" rx="10" fill="rgba(251,191,36,0.08)" stroke="#fbbf24" stroke-width="1.4"/>
      <text x="279" y="108" text-anchor="middle" fill="#fcd34d" font-size="7.5" font-weight="700">🖋️ নাজির: চক-কালি-সাবমিট</text>
      <text x="279" y="123" text-anchor="middle" fill="#94a3b8" font-size="6">useCycleSubmit = দরজা ১৭-ঘড়ি</text>
      <text x="279" y="136" text-anchor="middle" fill="#94a3b8" font-size="6">preview(form) → affected-সারি</text>
      <text x="279" y="150" text-anchor="middle" fill="#fcd34d" font-size="6">confirm শুধু preview-থেকে</text>
      <text x="279" y="164" text-anchor="middle" fill="#64748b" font-size="6.5">সাফল্য-বার্তা: fn(r) — সার্ভার-গণনা</text>
      <text x="279" y="182" text-anchor="middle" fill="#64748b" font-size="6.5">সফলে নোঙর-পুনঃসিঙ্ক (আটকে-খোলা-রোধ)</text>
      <rect x="379" y="88" width="166" height="104" rx="10" fill="rgba(248,113,113,0.06)" stroke="#f87171" stroke-width="1.4"/>
      <text x="462" y="108" text-anchor="middle" fill="#f87171" font-size="7.5" font-weight="700">🛡️ বাবর: রোল-ফটক</text>
      <text x="462" y="123" text-anchor="middle" fill="#94a3b8" font-size="6">allowedRoles: ['admin']</text>
      <text x="462" y="136" text-anchor="middle" fill="#94a3b8" font-size="6">Set-ইউনিয়ন-বিচার (দরজা ১৪)</text>
      <text x="462" y="150" text-anchor="middle" fill="#f87171" font-size="6">অন্য-রোল → forbidden+টোস্ট</text>
      <text x="462" y="164" text-anchor="middle" fill="#64748b" font-size="6.5">শিরোনাম: meta.title</text>
      <text x="462" y="182" text-anchor="middle" fill="#64748b" font-size="6.5">টেস্ট-১: non-admin→/403</text>
      <line x1="180" y1="140" x2="195" y2="140" stroke="#6ee7b7" stroke-width="1.4" marker-end="url(#arrowZ24)"/>
      <line x1="362" y1="140" x2="377" y2="140" stroke="#6ee7b7" stroke-width="1.4" marker-end="url(#arrowZ24)"/>
      <rect x="15" y="208" width="530" height="70" rx="10" fill="rgba(100,116,139,0.08)" stroke="#94a3b8" stroke-width="1.3"/>
      <text x="280" y="228" text-anchor="middle" fill="#cbd5e1" font-size="7.5" font-weight="600">স্ক্রিন-প্রবাহ: বহু-ফর্ম → [👁 প্রিভিউ :disabled="!dirty"] → PreviewTable (প্রতি-ক্লায়েন্ট-প্রভাব) → [✒️ নিশ্চিত-প্রয়োগ]</text>
      <text x="280" y="244" text-anchor="middle" fill="#94a3b8" font-size="7">বাটন-অবস্থা-নিয়ম: প্রিভিউ-বাটন শুধু idle/preview-এ · কনফার্ম-বাটন শুধু preview-এ · রিসেট শুধু dirty-তে</text>
      <text x="280" y="260" text-anchor="middle" fill="#64748b" font-size="6.5">টেস্ট-২: idle→সরাসরি-confirm → MSW-গণনায়-শূন্য-কল · টেস্ট-৩: 400+{floor:[…]} → অংশে-লাল-সিল</text>
      <text x="280" y="298" text-anchor="middle" fill="#64748b" font-size="8">দুই-দোষ-অমার্জনীয় — অন্ধ-লেখা (চক-কালি-রোধ) ও-অন্ধ-প্রবেশ (রোল-ফটক): দ্বিস্তর-চশমার-শপথ</text>
    </svg>
    <div class="diag-cap">তিন-কারিগর-এক-টেবিলে: আফসার-নোঙর+সিল, নাজির-ঘড়ি, বাবর-ফটক — বহু-অংশ-ফর্মের-দপতর দুই-অন্ধতা-মুক্ত।</div>
  </div>
  <div class="callout warn"><span class="co-icon">⚠️</span><div><strong>দপতর-ফাঁদ:</strong> (১) সফল-প্রয়োগের-পরে-নোঙর-সিঙ্ক-না-করা — dirty সত্য-থেকে-যায়, প্রস্থান-সাবধান-প্রশ্ন-আটকে-থাকে। (২) কনফার্ম-বাটন সবসময়-দেখানো — ফেজ-ঘড়ির-পাহারা-থাকলেও দেয়াল-পাহারা (v-if) বাদ-দিও-না; দুই-স্তর। (৩) ব্যতিক্রম-সারির-ভেতরের-যাচাই এক-জায়গায়-না-করে-সাবমিটে-জমিয়ে — সারি-যোগার-সময়েই-সিল, শেষে-নয়।</div></div>
  <div class="secret-box">🏢 ফর্ম-ভারী-অ্যাডমিন: নোঙর+dirty (আফসার), চক-কালি-সাবমিট (নাজির), রোল-ফটক (বাবর) — বহু-অংশ-ফর্মও দুই-অন্ধতা-মুক্ত। / Anchor, preview-clock, role-gate — three artisans, one safe office.</div>`,
  senior: {
    title: "Starter-3 Card (Form-Admin)",
    body: `<p><strong>ফর্ম</strong>: useCycleForm — reactive(structuredClone(seed))+anchor; dirty=JSON-তুলনা; fieldErrors; resetAll; beforeRouteLeave(dirty→confirm)। <strong>সাবমিট</strong>: useCycleSubmit=usePreviewConfirmFlow(cycleService.apply(p,dry), rows=r.affected, successMessage:fn, onSuccess:নোঙর-সিঙ্ক)। <strong>ফটক</strong>: meta.allowedRoles=['admin']। <strong>বাটন-নিয়ম</strong>: প্রিভিউ (idle/preview, :disabled=!dirty) · কনফার্ম (শুধু preview) · রিসেট (dirty)। <strong>টেস্ট</strong>: রোল-৪০৩ · ফেজ-ক্রম+idle-confirm→শূন্য-কল · ফিল্ড-সিল।</p>`
  }
});
