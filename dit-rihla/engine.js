// ════════════════════════════════════════
// Book 57 · ষাট ক্রেডিটের রিহলা (DIT Rihla) — Engine
// ════════════════════════════════════════
let state = { xp:0, currentDoor:null, completedDoors:[], prologueSeen:false };
const XP_PER_DOOR = 100;
const SAVE_KEY = 'ditRihla_v2';
const MAX_XP = 2300;
const RANKS = [
  {min:0,   name:'মুসাফির',            icon:'🎒'},
  {min:100, name:'সফরনামা-লেখক',      icon:'📜'},
  {min:200, name:'কাফেলার সঙ্গী',      icon:'🐪'},
  {min:300, name:'দিকনির্ণেতা',        icon:'🧭'},
  {min:400, name:'পথ-চেনা পথিক',      icon:'🗺️'},
  {min:500, name:'সরাই-রক্ষক',         icon:'🏕️'},
  {min:600, name:'তথ্য-বিশ্লেষক',       icon:'🔬'},
  {min:700, name:'নিরাপত্তা-কারিগর',   icon:'🛡️'},
  {min:900, name:'প্রকল্প-সংগঠক',      icon:'⚙️'},
  {min:1100,name:'গবেষণা-নকশাকার',     icon:'📊'},
  {min:1350,name:'প্রস্তাবনা-লেখক',    icon:'✍️'},
  {min:1600,name:'গবেষণাপত্র-স্রষ্টা',  icon:'🎓'},
  {min:1800,name:'মজলিস-পার',         icon:'🏛️'},
  {min:2000,name:'পাঁচ-বছরের রাহি',    icon:'📅'},
  {min:2150,name:'রিহলা-সম্পূর্ণ',     icon:'🌍'},
  {min:2300,name:'ডক্টর-ই-তথ্যপ্রযুক্তি', icon:'👑'}
];
// দরজা-নম্বর → ক্রেডিট (কোর্স-দরজা ছাড়া বাকি সব 0): মোট ৬০
const DOOR_CREDITS = {2:3,3:3,4:3,5:3,6:3,7:3,8:3,9:3,10:3,11:3,13:3,14:3,15:3,16:3,17:6,18:12};
const TOTAL_CREDITS = 60;
function saveState(){try{localStorage.setItem(SAVE_KEY,JSON.stringify({xp:state.xp,completedDoors:state.completedDoors,prologueSeen:state.prologueSeen,plannerDone:state.plannerDone||[]}))}catch(e){}}
function loadState(){try{const r=localStorage.getItem(SAVE_KEY);if(!r)return;const s=JSON.parse(r);state.xp=s.xp||0;state.completedDoors=s.completedDoors||[];state.prologueSeen=s.prologueSeen||false;state.plannerDone=s.plannerDone||[]}catch(e){}}
function confirmReset(){if(confirm('সব অগ্রগতি মুছে ফেলবে? / Reset?'))resetGame()}
function resetGame(){try{localStorage.removeItem(SAVE_KEY)}catch(e){}location.reload()}
// Particles
const canvas=document.getElementById('particles'),ctx=canvas.getContext('2d');
let W,H,particles=[];
function resizeCanvas(){W=canvas.width=window.innerWidth;H=canvas.height=window.innerHeight}
resizeCanvas();window.addEventListener('resize',resizeCanvas);
const prefersReducedMotion=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
class Particle{constructor(){this.reset();this.y=Math.random()*H}reset(){this.x=Math.random()*W;this.y=H+10;this.size=Math.random()*2+.5;this.speedY=Math.random()*.35+.12;this.speedX=(Math.random()-.5)*.15;this.opacity=Math.random()*.45+.12;this.hue=180+Math.random()*25;this.twinkle=Math.random()*6.28}update(){this.y-=this.speedY;this.x+=this.speedX;this.twinkle+=.025;if(this.y<-10)this.reset()}draw(){const f=Math.sin(this.twinkle)*.3+.7;ctx.beginPath();ctx.arc(this.x,this.y,this.size,0,6.28);ctx.fillStyle=`hsla(${this.hue},65%,58%,${this.opacity*f})`;ctx.shadowBlur=5;ctx.shadowColor=`hsla(${this.hue},65%,58%,${this.opacity*.4})`;ctx.fill()}}
for(let i=0;i<55;i++)particles.push(new Particle());
(function animateParticles(){ctx.clearRect(0,0,W,H);if(!prefersReducedMotion)particles.forEach(p=>{p.update();p.draw()});else particles.forEach(p=>p.draw());requestAnimationFrame(animateParticles)})();
// Sound
let audioCtx=null,soundMuted=false;
function getAudio(){if(!audioCtx){try{audioCtx=new(window.AudioContext||window.webkitAudioContext)()}catch(e){}}if(audioCtx&&audioCtx.state==='suspended'){audioCtx.resume().catch(()=>{})}return audioCtx}
function playTone(freq,duration,type='sine',vol=0.09){if(soundMuted)return;const ac=getAudio();if(!ac)return;const osc=ac.createOscillator(),gain=ac.createGain();osc.type=type;osc.frequency.value=freq;gain.gain.setValueAtTime(0,ac.currentTime);gain.gain.linearRampToValueAtTime(vol,ac.currentTime+.02);gain.gain.exponentialRampToValueAtTime(.001,ac.currentTime+duration);osc.connect(gain);gain.connect(ac.destination);osc.start();osc.stop(ac.currentTime+duration)}
function toggleMute(){soundMuted=!soundMuted;document.getElementById('mute-btn').textContent=soundMuted?'🔇':'🔊'}
function sndDoor(){playTone(196,.22,'sine',.05);setTimeout(()=>playTone(294,.28,'sine',.06),90)}
function sndXP(){playTone(523,.1,'triangle',.07);setTimeout(()=>playTone(659,.1,'triangle',.07),70);setTimeout(()=>playTone(784,.18,'triangle',.07),140)}
function sndComplete(){[523,659,784,1047].forEach((n,i)=>setTimeout(()=>playTone(n,.35,'triangle',.07),i*120))}
function sndStart(){playTone(330,.13,'sine',.06);setTimeout(()=>playTone(440,.18,'sine',.07),90)}
// Screens
function showScreen(id){document.querySelectorAll('.screen').forEach(s=>s.classList.remove('active'));document.getElementById(id).classList.add('active');window.scrollTo(0,0)}
function startGame(){sndStart();loadState();if(!state.prologueSeen){showScreen('prologue-screen')}else{renderMap();showScreen('map-screen')}}
function startMap(){state.prologueSeen=true;saveState();renderMap();showScreen('map-screen')}
// Map
function renderMap(){const grid=document.getElementById('doors-grid');grid.innerHTML='';let nextIdx=-1;doors.forEach((door,idx)=>{const prevDone=state.completedDoors.includes(idx-1);const selfDone=state.completedDoors.includes(idx);const unlocked=idx===0||prevDone||selfDone;if(unlocked&&!selfDone&&nextIdx===-1)nextIdx=idx;const card=document.createElement('div');card.className=`door-card ${selfDone?'completed':''} ${!unlocked?'locked':''}`;if(unlocked){card.tabIndex=0;card.setAttribute('role','button');card.setAttribute('aria-label',`${door.name} — ${door.subtitle}`);card.onclick=()=>openDoor(idx);card.onkeydown=e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();openDoor(idx)}}}else{card.setAttribute('aria-label',`${door.name} — locked`)}card.innerHTML=`<div class="door-num">স্থান ${door.num}</div><div class="door-icon">${door.icon}</div><div class="door-title">${door.name}</div><div class="door-subtitle">${door.subtitle}</div><div class="door-tech">${door.tech}</div>${!unlocked?'<div class="door-lock-hint">🔒 আগের স্থান সম্পন্ন করো</div>':''}`;grid.appendChild(card)});if(nextIdx>=0){const cards=grid.querySelectorAll('.door-card');if(cards[nextIdx])cards[nextIdx].classList.add('next-door')}updateHUD()}
function updateHUD(){const pct=Math.min(100,(state.xp/MAX_XP)*100);document.getElementById('hud-xp-fill').style.width=pct+'%';document.getElementById('hud-xp-text').textContent=`${state.xp} / ${MAX_XP} XP`;let rank=RANKS[0];for(let i=RANKS.length-1;i>=0;i--){if(state.xp>=RANKS[i].min){rank=RANKS[i];break}}document.getElementById('hud-rank-icon').textContent=rank.icon;document.getElementById('hud-rank-name').textContent=rank.name;document.getElementById('hud-level').textContent=`স্তর ${Math.min(23,Math.floor(state.xp/100)+1)}`;const cr=document.getElementById('hud-credits');if(cr){const done=(state.completedDoors||[]).reduce((s,d)=>s+(DOOR_CREDITS[d+1]||0),0);cr.textContent=`🎓 ${done} / ${TOTAL_CREDITS} ক্রেডিট`}}
// Cheat Modal
function openCheatModal(){const completed=doors.filter((_,i)=>state.completedDoors.includes(i));const grid=document.getElementById('cheat-modal-grid');const empty=document.getElementById('cheat-modal-empty');if(completed.length===0){grid.innerHTML='';empty.textContent='এখনো কোনো স্থান সম্পন্ন হয়নি।'}else{empty.textContent='';grid.innerHTML=completed.map(d=>`<div class="cheat-card"><div class="icon">${d.icon}</div><div class="name">${d.name}</div><div class="tech">${d.tech}</div><div class="secret">${d.secret}</div></div>`).join('')}document.getElementById('cheat-modal').style.display='block'}
// Door/Story
function openDoor(idx){if(idx===0||state.completedDoors.includes(idx-1)||state.completedDoors.includes(idx)){sndDoor();state.currentDoor=idx;renderStory(idx);showScreen('story-screen')}}
function renderStory(idx){const door=doors[idx];const isLast=idx===doors.length-1;const done=state.completedDoors.includes(idx);const rc=door.recall;const recallHTML=`<div class="recall-box"><div class="recall-title">🧠 স্মরণ চ্যালেঞ্জ — Recall Challenge</div><div class="recall-q">${rc.q}</div><div class="recall-q en">${rc.qen}</div><button class="recall-toggle" onclick="revealRecall(this)">উত্তর দেখো → Reveal</button><div class="recall-a">${rc.a}<br><em style="font-size:.78rem;opacity:.7">${rc.aen}</em></div></div>`;const insightHTML=door.senior?`<div class="senior-insight"><div class="label">🎓 সিনিয়র ইনসাইট — Senior Insight</div><div class="title">${door.senior.title}</div>${door.senior.body}</div>`:'';document.getElementById('story-container').innerHTML=`<div class="story-progress">স্থান ${door.num} / ${doors.length}${done?' — ✅ সম্পন্ন':''}</div><div class="story-door-banner"><div class="story-door-icon">${door.icon}</div><h2 class="story-door-name" style="color:${door.color}">${door.name}</h2><div style="font-size:.78rem;font-weight:600;padding:.18rem .7rem;border-radius:12px;display:inline-block;background:${door.color}22;color:${door.color}">${door.tech}</div></div><div class="story-text">${door.story}</div>${insightHTML}${!done?recallHTML:''}<div class="continue-area">${!done?`<button class="continue-btn" onclick="completeDoor(${idx})">${isLast?'👑 যাত্রা সম্পন্ন করো':'✦ পরবর্তী স্থানে যাও'}</button>`:`<button class="continue-btn" onclick="goToMap()">← নগরীর মানচিত্রে ফিরে যাও</button>`}</div>`}
function highlightCode(){const blocks=document.querySelectorAll('.code-block');blocks.forEach(block=>{const text=block.textContent;if(!block.querySelector('code')){const pre=document.createElement('pre');const code=document.createElement('code');code.className='language-python';code.textContent=text;pre.appendChild(code);block.innerHTML='';block.appendChild(pre)}if(window.Prism)Prism.highlightAllUnder(block)})}
function revealRecall(btn){btn.nextElementSibling.style.display='block';btn.style.display='none'}
function completeDoor(idx){if(!state.completedDoors.includes(idx)){state.completedDoors.push(idx);state.xp+=XP_PER_DOOR;saveState();sndXP();showXPPopup();setTimeout(()=>{if(state.completedDoors.length===doors.length){renderCheatSheet();sndComplete();showScreen('complete-screen')}else{renderMap();showScreen('map-screen')}updateHUD()},2000)}}
function showXPPopup(){const p=document.getElementById('xp-popup');document.getElementById('xp-amount').textContent=`+${XP_PER_DOOR} XP`;p.classList.add('show');setTimeout(()=>p.classList.remove('show'),1800)}
function goToMap(){renderMap();showScreen('map-screen')}
// ── দিনপঞ্জি (Planner): ২০২৬→২০৩১ সেমিস্টার-মানচিত্র ──
const PLANNER=[
 {t:'Fall 2026', bn:'শরৎ ২০২৬', courses:[{d:2,c:'IS 5203 Network Mgmt',cr:3},{d:3,c:'IS 5403 Cybersecurity',cr:3}], note:'রিহলার প্রথম কাফেলা — দুই কোর্স, ছন্দ বাঁচাও', ms:['Advisor-সাক্ষাৎ + প্রথম residency পরিকল্পনা','সপ্তাহে ৩ রাত + শনি-ব্লক ছন্দ স্থির করা']},
 {t:'Spring 2027', bn:'বসন্ত ২০২৭', courses:[{d:4,c:'IS 5213 Data Science',cr:3},{d:5,c:'BAN 5013 Analytics Tools',cr:3}], note:'ডেটার জোড়া-দরজা — LedgerPilot-ডেটা প্র্যাকটিসে চালাও', ms:['F-1 enrollment-নিয়ম পুনরায় পড়া (full-time hybrid-শর্ত)','গ্রীষ্মে হালকা কোর্স/বিশ্রাম সিদ্ধান্ত']},
 {t:'Fall 2027', bn:'শরৎ ২০২৭', courses:[{d:6,c:'DIT 7043 IT Mgmt',cr:3},{d:7,c:'DIT 7053 Procurement',cr:3}], note:'ম্যানেজমেন্ট-বছরের শুরু — Ipractus-সিদ্ধান্তের সেতু', ms:['কোর-পর্বের অর্ধেক পথ — checkpoint সাবমিট']},
 {t:'Spring 2028', bn:'বসন্ত ২০২৮', courses:[{d:8,c:'DIT 7063 Project Mgmt',cr:3},{d:9,c:'DIT 7073 Innovation',cr:3}], note:'I-20 শেষ-বছরের শুরু — স্ট্যাটাস-প্রশ্ন advisor-নোটে লিখিত রাখো', ms:['OPT/CPT-বিকল্প আলোচনা (D/S-গ্র্যান্ডফাদারিং নথিভুক্ত)']},
 {t:'Fall 2028', bn:'শরৎ ২০২৮', courses:[{d:10,c:'DIT 7083 Python',cr:3},{d:11,c:'RSH 7093 Statistics',cr:3}], note:'কোর-পর্বের সমাপ্তি — ২৭ ক্রেডিট পূর্ণ!', ms:['কোর-GPA যাচাই; রিসার্চ-ক্ষেত্রের বীজ-নোট জমানো']},
 {t:'Spring 2029', bn:'বসন্ত ২০২৯', courses:[{d:13,c:'RSH 8003 Quantitative',cr:3},{d:14,c:'RSH 8013 Qualitative',cr:3}], note:'মিনার ও চায়ের দোকান — দুই চোখে দেখা', ms:['সম্ভাব্য committee-চেয়ার তালিকা (২-৩ নাম)']},
 {t:'Fall 2029', bn:'শরৎ ২০২৯', courses:[{d:15,c:'RSH 8023 Research Design',cr:3},{d:16,c:'RSH 8033 Adv Methodology',cr:3}], note:'নকশা ও তাঁত — artifact প্রস্তাবনার খসড়া বানাও', ms:['গবেষণা-পরিকল্পনা ডকুমেন্ট সম্পূর্ণ; IRB-প্রক্রিয়া শেখা']},
 {t:'Spring 2030', bn:'বসন্ত ২০৩০', courses:[{d:17,c:'DIT 9006 Proposal (6cr)',cr:6}], note:'কারিগরখানা — চুক্তিপত্র লেখার বছর (১টি ভারী কোর্স + কাজ)', ms:['কমিটি গঠিত; proposal defense পাস; IRB-আবেদন']},
 {t:'Fall 2030', bn:'শরৎ ২০৩০', courses:[{d:18,c:'DIT 9016 Applied Research I (6cr)',cr:6}], note:'সাক্ষ্যগ্রন্থ খণ্ড-১ — ডেটা-সংগ্রহ ও লেখা শুরু', ms:['মেথড-অধ্যায় খসড়া; ৩০০ শব্দ/দিন ছন্দ']},
 {t:'Spring 2031', bn:'বসন্ত ২০৩১', courses:[{d:18,c:'DIT 9026 Applied Research II (6cr)',cr:6}], note:'মজলিসের বছর — চূড়ান্ত লেখা, সামনে-করা, ডক্টর-হওয়া 🎓', ms:['ফাইনাল defense; সংশোধন; জমা — রিহলা সম্পূর্ণ!']}
];
function renderPlanner(){
  const host=document.getElementById('planner-grid');if(!host)return;
  host.innerHTML=PLANNER.map((p,i)=>{
    const doneAll=p.courses.every(c=>state.completedDoors.includes(c.d-1));
    const rows=p.courses.map(c=>{
      const done=state.completedDoors.includes(c.d-1);
      return `<tr><td class="pl-c"><label class="pl-chk"><input type="checkbox" ${done?'checked':''} disabled> ${c.d}. ${c.c}</label></td><td class="pl-cr">${c.cr}cr</td></tr>`}).join('');
    const msHtml=p.ms.map(m=>{
      const key='ms-'+i+'-'+PLANNER[i].ms.indexOf(m);
      const done=(state.plannerDone||[]).includes(key);
      return `<label class="pl-ms"><input type="checkbox" ${done?'checked':''} onchange="togglePlannerItem('${key}')"> ${m}</label>`}).join('');
    return `<div class="pl-card ${doneAll?'done':''}"><div class="pl-head"><span class="pl-term">${p.t}</span><span class="pl-term-bn">${p.bn}</span></div><table class="pl-table">${rows}</table><div class="pl-note">${p.note}</div><div class="pl-ms-wrap">${msHtml}</div></div>`}).join('');
  updateHUD();
}
function togglePlannerItem(key){if(!state.plannerDone)state.plannerDone=[];const i=state.plannerDone.indexOf(key);if(i>=0)state.plannerDone.splice(i,1);else state.plannerDone.push(key);saveState()}
function goToPlanner(){renderPlanner();showScreen('planner-screen')}
function renderCheatSheet(){document.getElementById('cheat-grid-end').innerHTML=doors.map(d=>`<div class="cheat-card"><div class="icon">${d.icon}</div><div class="name">${d.name}</div><div class="tech">${d.tech}</div><div class="secret">${d.secret}</div></div>`).join('')}
document.addEventListener('keydown',e=>{if(e.key==='Escape'){if(document.getElementById('cheat-modal').style.display==='block')document.getElementById('cheat-modal').style.display='none';else if(document.getElementById('story-screen').classList.contains('active'))goToMap()}});
//
// // DEEP-LINK HOOK (search) allows ./index.html?door=N to open a chapter directly.
;(function(){
  function boot(){
    try{
      var m=/(?:\?|&)door=(\d+)/.exec(location.search);
      if(!m)return;
      var t=Math.max(0,Math.min(doors.length-1,parseInt(m[1],10)-1));
      // Bypass the prologue gate and unlock the chain up to the target door.
      state.prologueSeen=true;
      for(var i=0;i<t;i++){ if(state.completedDoors.indexOf(i)===-1) state.completedDoors.push(i); }
      saveState&&saveState();
      if(typeof startGame==='function') startGame();
      openDoor(t);
    }catch(e){ /* fail silently — reader lands on the welcome screen */ }
  }
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',boot);
  else boot();
})();
