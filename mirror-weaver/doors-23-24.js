
doors.push({
  num: 23,
  icon: "📊",
  color: "#a78bfa",
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
  <div class="dialogue">সিরাজ মিয়া স্যান্ডউইচের-স্তর ভেঙ়ে জিজ্ঞেস করলেন, "বলো — সব-স্তর এক-ফাইলে গুঁজলে কী দোষ?" তুমি বললে, "ফাইল ছোট হয়?" সিরাজ মিয়া হাসলেন: "ছোট-ফাইল, বিশাল-দোষ। স্তর মানে প্রতিটির-নিজ-রান্নাঘর: সার্ভিস যায় (API), স্টোর রাখে (state), কম্পোজেবল বাঁধে (flow), ভিউ দেখায় (template) — এক-পাত্রে ঢাললে স্বাদ-গন্ধ-রঙ মিশে, কোনটা-কী ছিল কেউ আর ছাড়াতে পারে না। বাগ এলে অপরাধী-খোঁজা অসম্ভব — সবাই সন্দেহভাজন, কেউ প্রমাণিত নয়। আর স্লাইস মানে দপতর: তালিকা-দপতর নিজের-স্তর নিজে-টানে, বিস্তারিত-দপতর নিজের। LedgerPilot-এ ১১৭ পর্দা এভাবেই শান্ত — প্রতিটি টানা-সুতো কোথা থেকে আসে, নাম-সহ জানা।"</div>
<div class="dialogue en">Siraj Mia broke a sandwich layer: "What's the sin of stuffing all layers in one file?" You said: "The file stays small?" He laughed: "Small file, colossal sin. A layer is each one's own kitchen: services travel (API), stores hold (state), composables bind (flow), views show (template) — poured into one pot, taste-smell-color merge, and no one can separate what was what. A bug arrives, and finding the culprit is impossible — everyone suspect, no one proven. And a slice is a department: the list-department pulls its own layers, the detail-department its own. LedgerPilot's 117 screens stay calm this way — every stretched thread known by name and origin."</div>
  <div class="compare"><div class="cmp-card cmp-bad"><div class="cmp-label">❌ ফিচার-নামে বস্তা</div>feature-slice বানিয়ে ভেতরে সব-মিশ্রণ (ভিউ+ফেচ+স্টোর এক-ফাইলে) — স্লাইস নামে পুরনো বিশৃঙ্খলা।</div><div class="cmp-card cmp-good"><div class="cmp-label">✅ স্লাইস-শৃঙ্খলা</div>ভেতরে স্তর-বাঁধা: service→store→composable→views — প্রতিটি স্লাইস ছোট-পূর্ণ দপতর।</div></div>
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
    &lt;p v-else-if="error"&gt;{{ error }}&lt;/p&gt;
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
  <ul class="checklist"><li>CRUD-দপতর শেষ করো: তালিকা+বিস্তারিত+যোগ-সম্পাদনা — স্লাইস-গঠনে</li><li>MSW+৩-টেস্ট: তালিকা-লোড, যোগ-সফল, যোগ-ব্যর্থ — প্রতিটি স্তর স্পর্শ</li><li>অপ্টিমিস্টিক-মুছা+rollback অনুশীলন — ব্যর্থতায় তালিকা ফিরে আসে কি দেখো</li></ul>
  <div class="callout tip"><span class="co-icon">📚</span><div><strong>আরও পড়া:</strong> Book 54 (LedgerPilot Craftsman — ৩৭ দরজা) ঠিক এই স্তর-বিন্যাসের (feature-slice + service + store) প্রোডাকশন-প্রমাণ — দ্বিতীয় কাপড়ের আসল মডেল।</div></div>
  <div class="verse">দ্বিতীয়-রাকাত — প্রথমের-নকশা-পুনরাবৃত্তি, গভীরতায়-বৃদ্ধি: নামাজে-যেমন-দ্বিতীয়-একাক-প্রথমের-ভিত্তি-মেনেই-দীর্ঘ, সিরাজ-মিয়ার-স্যান্ডউইচ-সেই-বৃদ্ধির-স্থাপত্য। চার-স্তর-প্রতিটি-নিজ-ধর্মে-অটল: সার্ভিস-শুধু-যায়, স্টোর-শুধু-রাখে, কম্পোজেবল-শুধু-বাঁধে, ভিউ-শুধু-দেখায় — এক-স্তরের-লোভে-আরেক-স্তরে-ঢুকলে-স্যান্ডউইচ-স্যান্ডউইচ-থাকে-না, খাবার-গলে-হাতে-পড়ে। "প্রত্যেক-কাজের-জন্য-উপযুক্ত-স্থান" — সূরা-সার-যে, প্রত্যেক-প্রাণী-নিজ-চারণে।</div>
  <div class="callout warn"><span class="co-icon">⚠️</span><div><strong>দপতর-ফাঁদ:</strong> (১) ভিউতে-সরাসরি-সার্ভিস-কল — স্তর-লোভ; কম্পোজেবল/স্টোর-পথ-ছাড়বে-না (সিরাজ-মিয়ার-নিয়ম)। (২) বিস্তারিত-পর্দায়-তালিকার-স্মৃতি-থেকে-পড়া — সরাসরি-ঢুকলে/রিফ্রেশে-খালি; নিজ-id-থেকে-নিজ-ডেটা। (৩) মুছা-বাটনে-সরাসরি-API — দুই-ক্লিকে-দুই-মুছা; নিশ্চিত-মোডাল+useMutationAction-গার্ড।</div></div>
  <div class="secret-box">📊 CRUD = চার-স্তর-স্যান্ডউইচ + তিন-পর্দা: সার্ভিস-যায়, স্টোর-রাখে, কম্পোজেবল-বাঁধে, ভিউ-দেখায়; রুট-গভীর-লিংকযোগ্য, মুছা-নিশ্চিত-মোডালে। / Transport, truth, flow, display — four layers, three screens.</div>
  <div class="studio">
    <div class="studio-title">🧵 কারিগরের কার্যশালা — Try in Your IDE</div>
    <div class="studio-note">দরজা ২৩-এর সারণি-দপতর: অধ্যায়ের ৮-ফাইল নিজে-বাঁধো, তারপর চেকলিস্টের-দাবি পূরণ করো — MSW-হ্যান্ডলার-বই (তালিকা+মুছা+৫০০-বিপদ) + তিন-টেস্ট (তালিকা-লোড, মুছা-সফল-সারি-ফেরত, মুছা-ব্যর্থ-rollback) — অপ্টিমিস্টিক-মুছা নিজের-চোখে: সারি আগে-মুছে, ব্যর্থে-জায়গায়-ফেরে। / Door 23's ledger-office: build the chapter's 8 files, then fulfill the checklist — MSW handler-book + three tests proving list-load, optimistic delete with rollback on failure.</div>
    <div class="studio-file"><div class="studio-file-head"><span>src/tests/msw.ts</span><button class="copy-btn" onclick="copyStudio(this)">📋 কপি</button></div><pre><code>import { setupServer } from 'msw/node'
import { http, HttpResponse } from 'msw'

// হ্যান্ডলার-বই: notes-API-আকৃতির-এক-সত্য + মুছা-বিপদ-দৃশ্যের-বীজ
let db = [
  { id: 1, title: 'জুন-বিল', body: '…', created_at: '2026-06-01', updated_at: '2026-06-01' },
  { id: 2, title: 'জুলাই-বিল', body: '…', created_at: '2026-07-01', updated_at: '2026-07-01' },
]
let failNextDelete = false

export function seedNotes(rows: Array&lt;{ id: number; title: string }&gt;) { db = rows as typeof db }
export function breakNextDelete() { failNextDelete = true }   // বিপদ-দৃশ্যের-ছায়া

export const handlers = [
  http.get('*/api/notes/', ({ request }) =&gt; {
    const search = new URL(request.url).searchParams.get('search') ?? ''
    const rows = db.filter(n =&gt; n.title.includes(search))
    return HttpResponse.json({ results: rows, total: rows.length, page: 1, page_size: 10 })
  }),
  http.delete('*/api/notes/:id/', ({ params }) =&gt; {
    if (failNextDelete) { failNextDelete = false; return new HttpResponse(null, { status: 500 }) }
    db = db.filter(n =&gt; n.id !== Number(params.id))
    return new HttpResponse(null, { status: 204 })
  }),
]

export const server = setupServer(...handlers)
// setup.ts-এ: beforeAll listen · afterEach resetHandlers · afterAll close
</code></pre></div>
    <div class="studio-file"><div class="studio-file-head"><span>src/features/notes/composables/useNotes.ts (ছায়া-অংশ)</span><button class="copy-btn" onclick="copyStudio(this)">📋 কপি</button></div><pre><code>import { ref } from 'vue'

// স্টুডিও-পরীক্ষার-ছায়া: আসল-প্রজেক্টে Pinia-store + storeToRefs (pinia.vuejs.org:
// state/getter → storeToRefs, action → সরাসরি)। এখানে খাটো-রূপ —
// অপ্টিমিস্টিক-মুছার-নীতি-প্রমাণে:
export function useOptimisticNotes() {
  const items = ref&lt;Array&lt;{ id: number; title: string }&gt;&gt;([])
  const error = ref&lt;string | null&gt;(null)

  async function load() {
    error.value = null
    const res = await fetch('/api/notes/')
    items.value = (await res.json()).results
  }

  async function remove(id: number) {
    const snapshot = [...items.value]              // ফিরে-আসার-দড়ি
    items.value = items.value.filter(n =&gt; n.id !== id)   // ① আগে-মুছো (আশাবাদী)
    try {
      const res = await fetch('/api/notes/' + id + '/', { method: 'DELETE' })
      if (!res.ok) throw new Error('HTTP ' + res.status)
    } catch {
      items.value = snapshot                        // ② ব্যর্থে-rollback — জায়গায়-ফেরত
      error.value = 'মুছা-ব্যর্থ — সারি ফিরিয়ে-আনা-হলো'
    }
  }

  return { items, error, load, remove }
}
</code></pre></div>
    <div class="studio-file"><div class="studio-file-head"><span>src/features/notes/notes.test.ts</span><button class="copy-btn" onclick="copyStudio(this)">📋 কপি</button></div><pre><code>import { describe, it, expect, beforeAll, afterEach, afterAll } from 'vitest'
import { effectScope } from 'vue'
import { server, seedNotes, breakNextDelete } from '../../../tests/msw'
import { useOptimisticNotes } from './composables/useNotes'

beforeAll(() =&gt; server.listen())
afterEach(() =&gt; server.resetHandlers())
afterAll(() =&gt; server.close())

describe('সারণি-দপতর · চার-স্তর', () =&gt; {
  it('① তালিকা-লোড: হ্যান্ডলার-বই থেকে সারি', async () =&gt; {
    seedNotes([{ id: 1, title: 'জুন-বিল' }, { id: 2, title: 'জুলাই-বিল' }])
    const scope = effectScope()
    const api = scope.run(() =&gt; useOptimisticNotes())!
    await api.load()
    expect(api.items.value).toHaveLength(2)
    scope.stop()
  })

  it('② মুছা-সফল: সারি-ফেরত, এরর-নয়', async () =&gt; {
    seedNotes([{ id: 1, title: 'জুন-বিল' }])
    const scope = effectScope()
    const api = scope.run(() =&gt; useOptimisticNotes())!
    await api.load()
    await api.remove(1)
    expect(api.items.value).toHaveLength(0)      // আশাবাদী-মুছা স্থায়ী-হলো
    expect(api.error.value).toBeNull()
    scope.stop()
  })

  it('③ মুছা-ব্যর্থ: rollback — সারি জায়গায়-ফেরে', async () =&gt; {
    seedNotes([{ id: 1, title: 'জুন-বিল' }])
    breakNextDelete()                             // বিপদ-দৃশ্য: পরের-DELETE-ই ৫০০
    const scope = effectScope()
    const api = scope.run(() =&gt; useOptimisticNotes())!
    await api.load()
    await api.remove(1)
    expect(api.items.value).toHaveLength(1)      // rollback — কাপড় অক্ষত
    expect(api.error.value).toContain('মুছা-ব্যর্থ')
    scope.stop()
  })
})
</code></pre></div>
    <div class="studio-note">পরীক্ষা: (১) npx vitest run — তিন-টেস্ট সবুজ। (২) **স্তর-স্যান্ডউইচ-প্রমাণ:** টেস্ট-২ আর ৩-এর-মাঝে পার্থক্য-দেখো — সফল-পথে আশাবাদী-মুছা স্থায়ী, ব্যর্থ-পথে snapshot-rollback; এই-দুই-লাইনই অপ্টিমিস্টিক-নীতির-সার। (৩) আসল-প্রজেক্টে remove-এর-জায়গায় store.removeLocal + useMutationAction-onSuccess (অধ্যায়ের ফাইল-৩/৪), আর rollback মানে load()-পুনঃডাক বা snapshot-ফেরত — দুই-ই-পথ। (৪) **ভাঙো:** rollback-লাইন মুছো → টেস্ট-③ লাল — ব্যর্থ-মুছায় সারি-হারানো নিজের-চোখে। Context7-নোট: pinia.vuejs.org — state/getter-এর-জন্য storeToRefs (প্রতিক্রিয়া-সংরক্ষণ), action সরাসরি-store-থেকে; mswjs.io — resetHandlers-এ বিপদ-বীজ-ধুয়ে-ফেরে। / Tests: three green; the delta between test 2 and 3 IS the optimistic principle; remove the rollback line and watch 3 cry.</div>
  </div>
  <div class="diagram">
    <div class="diag-title">Starter 2 — Four-Layer Sandwich, Three Screens</div>
    <svg viewBox="0 0 560 320" xmlns="http://www.w3.org/2000/svg">
      <defs><marker id="arrowX23" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto"><path d="M0,0 L0,6 L9,3 z" fill="#6ee7b7"/></marker></defs>
      <rect x="15" y="14" width="530" height="104" rx="11" fill="rgba(52,211,153,0.06)" stroke="#22d3ee" stroke-width="1.4"/>
      <text x="280" y="34" text-anchor="middle" fill="#6ee7b7" font-size="8.5" font-weight="700">🥪 স্যান্ডউইচ: ভিউ → কম্পোজেবল → স্টোর → সার্ভিস</text>
      <rect x="35" y="46" width="110" height="56" rx="8" fill="rgba(66,184,131,0.10)" stroke="#6366f1" stroke-width="1.2"/>
      <text x="90" y="64" text-anchor="middle" fill="#a5b4fc" font-size="7" font-weight="600">ভিউ</text>
      <text x="90" y="76" text-anchor="middle" fill="#94a3b8" font-size="6">দেখাও-শুধু</text>
      <text x="90" y="90" text-anchor="middle" fill="#64748b" font-size="6.5">৩ পর্দা + ২ কম্পোনেন্ট</text>
      <rect x="157" y="46" width="110" height="56" rx="8" fill="rgba(66,184,131,0.10)" stroke="#6366f1" stroke-width="1.2"/>
      <text x="212" y="64" text-anchor="middle" fill="#a5b4fc" font-size="7" font-weight="600">কম্পোজেবল</text>
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
      <rect x="15" y="134" width="166" height="118" rx="10" fill="rgba(66,184,131,0.07)" stroke="#6366f1" stroke-width="1.3"/>
      <text x="98" y="154" text-anchor="middle" fill="#a5b4fc" font-size="7.5" font-weight="700">📋 / — তালিকা</text>
      <text x="98" y="169" text-anchor="middle" fill="#94a3b8" font-size="6">search-v-model+trim</text>
      <text x="98" y="182" text-anchor="middle" fill="#94a3b8" font-size="6">তিন-অবস্থা: লোড/এরর/সারি</text>
      <text x="98" y="196" text-anchor="middle" fill="#94a3b8" font-size="6">v-for+:key → NoteCard</text>
      <text x="98" y="212" text-anchor="middle" fill="#a5b4fc" font-size="6">পাতা-নেভ ←/→ :disabled</text>
      <text x="98" y="228" text-anchor="middle" fill="#64748b" font-size="6.5">🗑 → DeleteConfirm-মোডাল</text>
      <text x="98" y="243" text-anchor="middle" fill="#64748b" font-size="6.5">→ detail-নামে-RouterLink</text>
      <rect x="197" y="134" width="166" height="118" rx="10" fill="rgba(66,184,131,0.07)" stroke="#6366f1" stroke-width="1.3"/>
      <text x="280" y="154" text-anchor="middle" fill="#a5b4fc" font-size="7.5" font-weight="700">📄 /notes/:id — বিস্তারিত</text>
      <text x="280" y="169" text-anchor="middle" fill="#94a3b8" font-size="6">নিজ-ডেটা: get(id)</text>
      <text x="280" y="182" text-anchor="middle" fill="#94a3b8" font-size="6">watch(params.id)→রিফেচ</text>
      <text x="280" y="196" text-anchor="middle" fill="#94a3b8" font-size="6">গভীর-লিংক-যোগ্য</text>
      <text x="280" y="212" text-anchor="middle" fill="#a5b4fc" font-size="6">✎ → edit-রুট</text>
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
  </div>`,
  senior: {
    title: "Starter-2 Card (CRUD)",
    body: `<p><strong>স্লাইস</strong>: features/notes/{types,services,composables,views,components}। <strong>স্রোত</strong>: ভিউ→useNotesList (watch[search,page]+immediate)→store.load→service.list(apiClient)। <strong>মুছা</strong>: useNoteDelete=useMutationAction+onSuccess:removeLocal; নিশ্চিত-মোডাল। <strong>রুট</strong>: / · /notes/:id(\\d+) (নিজ-get+watch-params) · /edit · /new · catch-all। <strong>ফর্ম</strong>: দরজা ১৬-ছাঁচ (saving-তালা, ফিল্ড-খাঁচা, dirty-সাবধান)। <strong>ব্যায়াম</strong>: অপ্টিমিস্টিক-মুছা+rollback; MSW+৩-টেস্ট। <strong>ফাঁদ</strong>: ফিচার-স্লাইস বানিয়ে ভেতরে পুরনো "components/-সব" ঢুকিয়ে ফেলা — স্লাইসের সীমানা মানাই পুরো অনুশীলনের সার; আর সার্ভিস-স্তর বাদ দিয়ে ভিউ থেকে fetch।</p>`
  }
});

doors.push({
  num: 24,
  icon: "🏢",
  color: "#22d3ee",
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
  <div class="dialogue">নুরুল হুদা দুই-স্তরের-চশমা ঠিক করে জিজ্ঞেস করলেন, "বলো — খসড়া-চোখ আর স্থায়ী-চোখ কেন আলাদা?" তুমি বললে, "এক-চোখেই..." হুদা থামালেন: "এক-চোখে দেখলে প্রিভিউ নিজেকে-ই সম্পাদনা করে — কাচের-দোষ কাচে ঢাকা। ফেজ-মেশিন মানে চোখের-দেয়াল: idle-এ দুই-ই বন্ধ; এডিটে খসড়া-খোলা, স্থায়ী-বন্ধ; প্রিভিউতে দুই-ই শুধু-দেখা (সিলমোহর-ছাপা ইনপুট)। কনফার্ম-বাটন কেবল প্রিভিউ-দেয়ালে — idle থেকে সরাসরি কালি-দরজা নেই। আর রোল-পাহারা দুই-স্তরে: রুটে-ঢোকা এক, বাটন-চাপা দুই — ডিপ-লিংকে রুট আটকায়, ভেতরে বাটন।"</div>
<div class="dialogue en">Nurul Huda adjusted his two-layer spectacles: "Why separate the draft-eye from the permanent-eye?" You said: "With one eye..." He stopped you: "One-eyed, the preview edits itself — the glass's flaw hidden in the glass. The phase-machine is a wall of eyes: idle — both shut; edit — draft open, permanent shut; preview — both look-only (seal-stamped inputs). The confirm-button lives only on the preview-wall — no ink-door directly from idle. And role-guards on two tiers: entering the route is one, pressing the button another — deep-links stop at the route, buttons inside."</div>
  <div class="compare"><div class="cmp-card cmp-bad"><div class="cmp-label">❌ ফেজ-উপেক্ষা</div>এডিট-মোড সবসময়-খোলা, কনফার্ম ছাড়াই সাবমিট — ভুল-ক্লিকে রাত-ভর মেরামত।</div><div class="cmp-card cmp-good"><div class="cmp-label">✅ ফেজ-বাঁধা দপতর</div>idle→edit→preview→confirm — ধ্বংসাত্মক-দরজা কেবল প্রিভিউ থেকে; রোল-গার্ড রুট+বাটন দুই-স্তরে।</div></div>
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
  <ul class="checklist"><li>বহু-সেকশন ফর্ম বানাও — ফেজ-মেশিন সহ; প্রিভিউতে ফিল্ড-সিল (নিষ্ক্রিয়-ইনপুট)</li><li>রোল-৪০৩-টেস্ট: সাধারণ-ইউজার রুটে গেলে প্রত্যাখ্যান — E2E-তে ধরো</li><li>ফেজ-ক্রম-টেস্ট: idle থেকে সরাসরি confirm-যাওয়ার চেষ্টা → শূন্য-কল</li></ul>
  <div class="callout tip"><span class="co-icon">📚</span><div><strong>আরও পড়া:</strong> Book 6 (Arena of Trials) ফর্ম-সাক্ষাৎ, আর Book 46 (Copper Fortress) রোল-ভিত্তিক অনুমতির নিরাপত্তা-নকশা — ফর্ম-ভারী দপতরের দুই রক্ষক।</div></div>
  <div class="verse">তৃতীয়-রাকাত — নকশা-একই, দায়-বাড়ে: প্রথম-একাকে-শেখা, দ্বিতীয়য়-গঠন, তৃতীয়য়-হুকুম। নুরুল-হুদার-দ্বিস্তর-চশমা সেই-দায়ের-প্রতীক: এক-চোখ-খসড়ায় (প্রিভিউ), এক-চোখ-স্থায়ীতে (কমিট) — দুই-ই-একসাথে-খোলা, কোনোটা-বন্ধ-নয়। "হে-ঈমানদারগণ, তোমরা-দৃঢ়ভাবে-স্থির-থাকো-ন্যায়ের-ওপর, আল্লাহর-সাক্ষী-হিসেবে" (৪:১৩৫) — বড়-লেখার-সাক্ষী-দুই-চোখের: এক-দেখা, এক-স্বীকৃতি। যে-দপতরে-এক-চোখেই-সব-লেখা-হয়, সেখানে-ভুল-লেখাও-এক-চোখের-ই মুখ-চেয়ে-থাকে।</div>
  <div class="callout warn"><span class="co-icon">⚠️</span><div><strong>দপতর-ফাঁদ:</strong> (১) সফল-প্রয়োগের-পরে-নোঙর-সিঙ্ক-না-করা — dirty সত্য-থেকে-যায়, প্রস্থান-সাবধান-প্রশ্ন-আটকে-থাকে। (২) কনফার্ম-বাটন সবসময়-দেখানো — ফেজ-ঘড়ির-পাহারা-থাকলেও দেয়াল-পাহারা (v-if) বাদ-দিও-না; দুই-স্তর। (৩) ব্যতিক্রম-সারির-ভেতরের-যাচাই এক-জায়গায়-না-করে-সাবমিটে-জমিয়ে — সারি-যোগার-সময়েই-সিল, শেষে-নয়।</div></div>
  <div class="secret-box">🏢 ফর্ম-ভারী-অ্যাডমিন: নোঙর+dirty (আফসার), চক-কালি-সাবমিট (নাজির), রোল-ফটক (বাবর) — বহু-অংশ-ফর্মও দুই-অন্ধতা-মুক্ত। / Anchor, preview-clock, role-gate — three artisans, one safe office.</div>
  <div class="studio">
    <div class="studio-title">🧵 কারিগরের কার্যশালা — Try in Your IDE</div>
    <div class="studio-note">দরজা ২৪-এর ফর্ম-দপতর: অধ্যায়ের তিন-টেস্ট-বীজ বাঁধো — রোল-ফটক (canEnter-ইউনিয়ন), চক-কালি-ক্রম (দরজা ১৭-এর usePreviewConfirmFlow পুনঃব্যবহার — নকশা-পুনরাবৃত্তি!), কালি-পাহারার শূন্য-কল-প্রমাণ (MSW-গণনা) + বোনাস: ফিল্ড-সিল-৪০০ আর নোঙর-dirty। প্রয়োজন: দরজা ১৭-এর src/composables/usePreviewConfirmFlow.ts আর দরজা ১৯-এর @-উপনাম তোমার-প্রজেক্টে-আছে। / Door 24's office: bind the chapter's three test-seeds — role-gate, chalk-ink sequence reusing Door 17's composable (pattern repetition!), ink-guard zero-call proof, plus field-seal-400 and anchor-dirty pins.</div>
    <div class="studio-file"><div class="studio-file-head"><span>src/tests/msw-billing.ts</span><button class="copy-btn" onclick="copyStudio(this)">📋 কপি</button></div><pre><code>import { setupServer } from 'msw/node'
import { http, HttpResponse } from 'msw'

// হ্যান্ডলার-বই: এক-এন্ডপয়েন্ট-দুই-ডাক (dry_run-চিহ্নে ভিন্ন)
export const applyCalls = { dry: 0, ink: 0 }        // গণনা-ঘর (msw-runbook-ছায়া)
export function resetCalls() { applyCalls.dry = 0; applyCalls.ink = 0 }

export const billingHandlers = [
  http.post('*/api/billing/cycle/apply/', async ({ request }) =&gt; {
    const body = (await request.json()) as { dry_run?: boolean; floor?: number }
    if (typeof body.floor !== 'number' || body.floor &lt; 0) {
      return HttpResponse.json(
        { floor: ['সংখ্যা দাও — ঋণাত্মক নয়'] }, { status: 400 })   // ফিল্ড-সিল
    }
    if (body.dry_run) {                              // চক-পর্ব
      applyCalls.dry++
      return HttpResponse.json({ dry_run: true, affected: [
        { client: 'করিম-স্টোর', now: 500, next: body.floor },
        { client: 'রহিম-ট্রেডার্স', now: 800, next: body.floor },
      ] })
    }
    applyCalls.ink++                                 // কালি-পর্ব
    return HttpResponse.json({ dry_run: false, affected: [
      { client: 'করিম-স্টোর', now: 500, next: body.floor },
    ] })
  }),
]
</code></pre></div>
    <div class="studio-file"><div class="studio-file-head"><span>src/features/billing/guard.ts + composables/useCycleForm.ts</span><button class="copy-btn" onclick="copyStudio(this)">📋 কপি</button></div><pre><code>// ── guard.ts — দরজা ১৪-এর রোল-ইউনিয়ন-বিচারের খাটো-রূপ ──
export function canEnter(allowed: string[], userRoles: string[]): boolean {
  if (allowed.includes('*')) return true
  return userRoles.some(r =&gt; allowed.includes(r))
}

// ── composables/useCycleForm.ts — অধ্যায়ের ফাইল-২ (নোঙর-নীতি) ──
import { reactive, computed, ref } from 'vue'

export function useCycleForm&lt;T extends object&gt;(seed: T) {
  const form = reactive(structuredClone(seed)) as T
  const anchor = structuredClone(seed)          // নোঙর — dirty-র-মানদণ্ড
  const dirty = computed(() =&gt;
    JSON.stringify(form) !== JSON.stringify(anchor))
  const fieldErrors = ref&lt;Record&lt;string, string[]&gt;&gt;({})
  function resetAll() {
    Object.assign(form, structuredClone(anchor))
    fieldErrors.value = {}
  }
  return { form, dirty, fieldErrors, resetAll }
}
</code></pre></div>
    <div class="studio-file"><div class="studio-file-head"><span>src/features/billing/cycle.test.ts</span><button class="copy-btn" onclick="copyStudio(this)">📋 কপি</button></div><pre><code>import { describe, it, expect, beforeAll, afterEach, afterAll } from 'vitest'
import { setupServer } from 'msw/node'
import { billingHandlers, applyCalls, resetCalls } from '../../tests/msw-billing'
import { canEnter } from '../guard'
import { useCycleForm } from '../composables/useCycleForm'
import { usePreviewConfirmFlow } from '@/composables/usePreviewConfirmFlow'   // দরজা ১৭

const server = setupServer(...billingHandlers)
beforeAll(() =&gt; server.listen())
afterEach(() =&gt; { server.resetHandlers(); resetCalls() })
afterAll(() =&gt; server.close())

interface Row { client: string; now: number; next: number }

// সার্ভিস-ছায়া: এক-এন্ডপয়েন্ট, দুই-ডাক (অধ্যায়ের ফাইল-১)
async function apply(p: { floor: number }, dryRun: boolean) {
  const res = await fetch('/api/billing/cycle/apply/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ ...p, dry_run: dryRun }),
  })
  const data = await res.json()
  if (!res.ok) throw new Error(data.floor ? data.floor[0] : 'প্রয়োগ ব্যর্থ')
  return data as { dry_run: boolean; affected: Row[] }
}

function makeFlow() {
  return usePreviewConfirmFlow&lt;{ floor: number }, { dry_run: boolean; affected: Row[] }, Row&gt;({
    fetch: apply,
    rows: (r) =&gt; r.affected,
  })
}

describe('তৃতীয়-কাপড় · ফর্ম-ভারী-দপতর', () =&gt; {
  it('① রোল-ফটক: ইউনিয়নে-নেই → প্রবেশ-নয়', () =&gt; {
    expect(canEnter(['admin'], ['viewer'])).toBe(false)          // ৪০৩-পথ
    expect(canEnter(['admin'], ['admin', 'viewer'])).toBe(true)  // ইউনিয়ন-মিল
  })

  it('② চক-কালি-ক্রম: preview→সারি, confirm→কালি', async () =&gt; {
    const flow = makeFlow()
    await flow.preview({ floor: 600 })
    expect(flow.phase.value).toBe('preview')
    expect(flow.rows.value).toHaveLength(2)      // প্রতি-ক্লায়েন্ট-প্রভাব
    expect(applyCalls.dry).toBe(1)
    await flow.confirm({ floor: 600 })
    expect(flow.phase.value).toBe('done')
    expect(applyCalls.ink).toBe(1)
  })

  it('③ কালি-পাহারা: idle থেকে-সরাসরি confirm → শূন্য-কল', async () =&gt; {
    const flow = makeFlow()
    await flow.confirm({ floor: 600 })           // অন্ধ-কালি-চেষ্টা
    expect(flow.phase.value).toBe('idle')        // ঘড়ি-নড়েইনি (আচরণ-দাবি)
    expect(flow.rows.value).toHaveLength(0)
    expect(applyCalls.dry + applyCalls.ink).toBe(0)   // গণনা-পিন: শূন্য
  })

  it('④ ফিল্ড-সিল: 400+floor-বার্তা → এরর-প্রবাহ', async () =&gt; {
    const flow = makeFlow()
    await flow.preview({ floor: -5 })            // ঋণাত্মক-মেঝে → সার্ভার-৪০০
    expect(flow.phase.value).toBe('error')
    expect(flow.error.value).toContain('সংখ্যা')
  })

  it('⑤ নোঙর: ছোঁয়ায় dirty, resetAll-এ ফেরত', () =&gt; {
    const seed = { period: 'monthly', floor: 500, exceptions: [] }
    const { form, dirty, resetAll } = useCycleForm(seed)
    expect(dirty.value).toBe(false)
    form.floor = 600
    expect(dirty.value).toBe(true)
    resetAll()
    expect(dirty.value).toBe(false)              // খসড়া-ফেরত
  })
})
</code></pre></div>
    <div class="studio-note">পরীক্ষা: (১) npx vitest run — পাঁচ-টেস্ট সবুজ। (২) **দুই-স্তর-পাহারা-প্রমাণ:** টেস্ট-③-এ ঘড়ি-না-নড়া (phase='idle') আচরণ-দাবি, গণনা-শূন্য গৌণ-পিন — mswjs.io-র best-practice: অনুরোধ-গণনা-দাবি একা-ভঙ্গুর; আচরণ-আগে, গণনা-পরে। (৩) **ভাঙো:** দরজা ১৭-এর কালি-পাহারা (phase!=='preview'-র early-return) তুলে-দাও → টেস্ট-③ লাল — পাহারার-মূল্য নিজের-চোখে। (৪) আসল-প্রজেক্টে: রুটে meta.allowedRoles+গার্ড-চেইন (দরজা ১৪), প্রিভিউতে সিলমোহর-ইনপুট, সফলে নোঙর-পুনঃসিঙ্ক (onSuccess-এ Object.assign)। Context7-নোট: mswjs.io — হ্যান্ডলারের-ভেতরে-গণনা/লগ (runbook-প্যাটার্ন) সমর্থিত; avoid-request-assertions-নীতি মেনে আচরণ-দাবি-প্রধান। / Tests: five green; test 3 proves the guard behavior-first with the zero-count as secondary pin; remove Door 17's ink-guard early-return and watch it cry.</div>
  </div>
  <div class="diagram">
    <div class="diag-title">Starter 3 — Form-Heavy Admin: Three Artisans at One Table</div>
    <svg viewBox="0 0 560 320" xmlns="http://www.w3.org/2000/svg">
      <defs><marker id="arrowZ24" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto"><path d="M0,0 L0,6 L9,3 z" fill="#6ee7b7"/></marker></defs>
      <rect x="15" y="14" width="530" height="58" rx="10" fill="rgba(52,211,153,0.07)" stroke="#22d3ee" stroke-width="1.4"/>
      <text x="280" y="34" text-anchor="middle" fill="#6ee7b7" font-size="8.5" font-weight="700">🏢 /admin/billing-cycle — meta.allowedRoles=['admin'] (দরজা ১৪-ফটক)</text>
      <text x="280" y="51" text-anchor="middle" fill="#94a3b8" font-size="7">বহু-অংশ-ফর্ম: PeriodSection + FloorSection + ExceptionsTable — প্রতিটি v-model (defineModel-দরজা ৬)</text>
      <rect x="15" y="88" width="165" height="104" rx="10" fill="rgba(66,184,131,0.08)" stroke="#6366f1" stroke-width="1.4"/>
      <text x="97" y="108" text-anchor="middle" fill="#a5b4fc" font-size="7.5" font-weight="700">📝 আফসার: ফর্ম-নোঙর</text>
      <text x="97" y="123" text-anchor="middle" fill="#94a3b8" font-size="6">form-reactive + anchor-ক্লোন</text>
      <text x="97" y="136" text-anchor="middle" fill="#94a3b8" font-size="6">dirty-কম্পিউটেড (JSON-তুলনা)</text>
      <text x="97" y="150" text-anchor="middle" fill="#a5b4fc" font-size="6">resetAll — এক-ক্লিকে-খসড়া-ফেরত</text>
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
  </div>`,
  senior: {
    title: "Starter-3 Card (Form-Admin)",
    body: `<p><strong>ফর্ম</strong>: useCycleForm — reactive(structuredClone(seed))+anchor; dirty=JSON-তুলনা; fieldErrors; resetAll; beforeRouteLeave(dirty→confirm)। <strong>সাবমিট</strong>: useCycleSubmit=usePreviewConfirmFlow(cycleService.apply(p,dry), rows=r.affected, successMessage:fn, onSuccess:নোঙর-সিঙ্ক)। <strong>ফটক</strong>: meta.allowedRoles=['admin']। <strong>বাটন-নিয়ম</strong>: প্রিভিউ (idle/preview, :disabled=!dirty) · কনফার্ম (শুধু preview) · রিসেট (dirty)। <strong>টেস্ট</strong>: রোল-৪০৩ · ফেজ-ক্রম+idle-confirm→শূন্য-কল · ফিল্ড-সিল। <strong>ফাঁদ</strong>: প্রিভিউ-ফেজে এডিট-মোড খুলে দেওয়া (ফেজ-মেশিন নষ্ট); আর রোল-গার্ড শুধু রুটে রেখে বাটন খোলা — UI-অনুমতি দুই স্তরে: রুট + কন্ট্রোল।</p>`
  }
});
