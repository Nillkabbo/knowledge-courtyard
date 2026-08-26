// ════════════════════════════════════════
// Book 26 · Reading/Thinking/Writing — Engine
// ════════════════════════════════════════
let state = { xp:0, currentDoor:null, completedDoors:[], prologueSeen:false };
const FONT_KEY = 'mw_font_scale';
let fontScale = 100; try { fontScale = parseInt(localStorage.getItem(FONT_KEY) || '100', 10) || 100; } catch(e) {}
const XP_PER_DOOR = 100;
const SAVE_KEY = 'mirrorWeaver_v1';
const MAX_XP = 2700;
const RANKS = [
  {min:0,    name:'নতুন তাঁতি',        icon:'🧵'},
  {min:100,  name:'সচেতন বোনাকার',    icon:'🪡'},
  {min:200,  name:'সুতো-জানকার',      icon:'🧶'},
  {min:300,  name:'নকশা-আঁকিয়ে',      icon:'📐'},
  {min:400,  name:'আয়না-গাঁথক',      icon:'🪞'},
  {min:500,  name:'রং-মিস্ত্রি',       icon:'🎨'},
  {min:600,  name:'জ্যামিতি-কারিগর',  icon:'🏛️'},
  {min:800,  name:'তাঁত-উস্তাদ',      icon:'🌆'},
  {min:1000, name:'প্রতিক্রিয়া-সাধক', icon:'⚡'},
  {min:1300, name:'কম্পোনেন্ট-কারিগর',icon:'🧩'},
  {min:1600, name:'স্থপতি-বোনাকার',   icon:'🏰'},
  {min:2000, name:'তাঁত-মালিক',       icon:'👑'},
  {min:2400, name:'জ্ঞানের অধিকারী',  icon:'🌟'},
  {min:2700, name:'আয়না-ওস্তাদ',     icon:'🌙'}
];
function saveState(){try{localStorage.setItem(SAVE_KEY,JSON.stringify({xp:state.xp,completedDoors:state.completedDoors,prologueSeen:state.prologueSeen}))}catch(e){}}
function loadState(){try{const r=localStorage.getItem(SAVE_KEY);if(!r)return;const s=JSON.parse(r);state.xp=s.xp||0;state.completedDoors=s.completedDoors||[];state.prologueSeen=s.prologueSeen||false}catch(e){}}
function confirmReset(){if(confirm('সব অগ্রগতি মুছে ফেলবে? / Reset?'))resetGame()}
function resetGame(){try{localStorage.removeItem(SAVE_KEY)}catch(e){}location.reload()}
// Particles
const canvas=document.getElementById('particles'),ctx=canvas.getContext('2d');
let W,H,particles=[];
function resizeCanvas(){W=canvas.width=window.innerWidth;H=canvas.height=window.innerHeight}
resizeCanvas();window.addEventListener('resize',resizeCanvas);
const prefersReducedMotion=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
class Particle{constructor(){this.reset();this.y=Math.random()*H}reset(){this.x=Math.random()*W;this.y=H+10;this.size=Math.random()*2+.5;this.speedY=Math.random()*.35+.12;this.speedX=(Math.random()-.5)*.15;this.opacity=Math.random()*.45+.12;this.hue=145+Math.random()*20;this.twinkle=Math.random()*6.28}update(){this.y-=this.speedY;this.x+=this.speedX;this.twinkle+=.025;if(this.y<-10)this.reset()}draw(){const f=Math.sin(this.twinkle)*.3+.7;ctx.beginPath();ctx.arc(this.x,this.y,this.size,0,6.28);ctx.fillStyle=`hsla(${this.hue},65%,58%,${this.opacity*f})`;ctx.shadowBlur=5;ctx.shadowColor=`hsla(${this.hue},65%,58%,${this.opacity*.4})`;ctx.fill()}}
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
const SECTIONS=[
[1,3,'০ · ভিত্তি','Foundation — the oath, the alphabet, the breath','#7ee0b0'],
[4,9,'I · কম্পোনেন্ট-কারুকাজ','Component Craft — props to composables','#42b883'],
[10,12,'II · অবস্থার ঘর','Houses of State — store, spring, arcade','#818cf8'],
[13,15,'III · পথ ও দরজা','Paths & Gates — router, guards, API','#fbbf24'],
[16,18,'IV · ফর্ম-ও-UX কারুকাজ','Form & UX Craft — manuscript to bell-street','#f87171'],
[19,21,'V · যন্ত্রপাতি-ঘর','The Tooling Hall — setup, testing, charter','#a5b4fc'],
[22,27,'VI · স্টার্টার-কারখানা ও সমাপ্তি','Starter Factory & Finale — five looms, one mirror','#34d399']];
function renderMap(){const grid=document.getElementById('doors-grid');grid.innerHTML='';let nextIdx=-1;doors.forEach((door,idx)=>{const sec=SECTIONS.find(s=>door.num>=s[0]&&door.num<=s[1]);if(sec&&door.num===sec[0]){const h=document.createElement('div');h.className='map-section-label';h.style.cssText=`grid-column:1/-1;margin:1.1rem 0 .3rem;padding:.55rem .9rem;border-left:3px solid ${sec[4]};background:rgba(148,163,184,.06);border-radius:0 10px 10px 0;font-size:.78rem;letter-spacing:.04em;color:${sec[4]};font-weight:700`;const secDone=doors.filter((d,i)=>d.num>=sec[0]&&d.num<=sec[1]&&state.completedDoors.includes(i)).length;const secTotal=sec[1]-sec[0]+1;h.innerHTML=`${sec[2]} <span style="font-weight:400;opacity:.75">· ${sec[3]}</span><span style="float:right;opacity:.85">${secDone}/${secTotal}${secDone===secTotal?' ✓':''}</span>`;grid.appendChild(h)}const prevDone=state.completedDoors.includes(idx-1);const selfDone=state.completedDoors.includes(idx);const unlocked=idx===0||prevDone||selfDone;if(unlocked&&!selfDone&&nextIdx===-1)nextIdx=idx;const card=document.createElement('div');card.className=`door-card ${selfDone?'completed':''} ${!unlocked?'locked':''}`;if(unlocked){card.tabIndex=0;card.setAttribute('role','button');card.setAttribute('aria-label',`${door.name} — ${door.subtitle}`);card.onclick=()=>openDoor(idx);card.onkeydown=e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();openDoor(idx)}}}else{card.setAttribute('aria-label',`${door.name} — locked`)}card.innerHTML=`<div class="door-num">স্থান ${door.num}</div><div class="door-icon">${door.icon}</div><div class="door-title">${door.name}</div><div class="door-subtitle">${door.subtitle}</div><div class="door-tech">${door.tech}</div>${!unlocked?'<div class="door-lock-hint">🔒 আগের স্থান সম্পন্ন করো</div>':''}`;grid.appendChild(card)});if(nextIdx>=0){const cards=grid.querySelectorAll('.door-card');if(cards[nextIdx])cards[nextIdx].classList.add('next-door')}updateHUD()}
function updateHUD(){const pct=Math.min(100,(state.xp/MAX_XP)*100);document.getElementById('hud-xp-fill').style.width=pct+'%';document.getElementById('hud-xp-text').textContent=`${state.xp} / ${MAX_XP} XP`;let rank=RANKS[0];for(let i=RANKS.length-1;i>=0;i--){if(state.xp>=RANKS[i].min){rank=RANKS[i];break}}document.getElementById('hud-rank-icon').textContent=rank.icon;document.getElementById('hud-rank-name').textContent=rank.name;document.getElementById('hud-level').textContent=`স্তর ${Math.min(13,Math.floor(state.xp/100)+1)}`}
// Cheat Modal
function openCheatModal(){const completed=doors.filter((_,i)=>state.completedDoors.includes(i));const grid=document.getElementById('cheat-modal-grid');const empty=document.getElementById('cheat-modal-empty');if(completed.length===0){grid.innerHTML='';empty.textContent='এখনো কোনো স্থান সম্পন্ন হয়নি।'}else{empty.textContent='';grid.innerHTML=completed.map(d=>`<div class="cheat-card"><div class="icon">${d.icon}</div><div class="name">${d.name}</div><div class="tech">${d.tech}</div><div class="secret">${d.secret}</div></div>`).join('')}document.getElementById('cheat-modal').style.display='block'}
// Door/Story
function openDoor(idx){if(idx===0||state.completedDoors.includes(idx-1)||state.completedDoors.includes(idx)){sndDoor();state.currentDoor=idx;renderStory(idx);showScreen('story-screen')}}
function renderStory(idx){const door=doors[idx];const isLast=idx===doors.length-1;const done=state.completedDoors.includes(idx);const rc=door.recall;const tn=document.getElementById('topbar-num'),tm=document.getElementById('topbar-name');if(tn)tn.textContent=`দরজা ${door.num} / ${doors.length}`;if(tm)tm.textContent=door.name;const rf=document.getElementById('read-progress-fill');if(rf)rf.style.width='0%';const recallHTML=`<div class="recall-box"><div class="recall-title">🧠 স্মরণ চ্যালেঞ্জ — Recall Challenge</div><div class="recall-q">${rc.q}</div><div class="recall-q en">${rc.qen}</div><button class="recall-toggle" onclick="revealRecall(this)">উত্তর দেখো → Reveal</button><div class="recall-a">${rc.a}<br><em style="font-size:.78rem;opacity:.7">${rc.aen}</em></div></div>`;const insightHTML=door.senior?`<div class="senior-insight"><div class="label">🎓 সিনিয়র ইনসাইট — Senior Insight</div><div class="title">${door.senior.title}</div>${door.senior.body}</div>`:'';const nextHTML=(isLast||!done)?'':`<button class="continue-btn ghost" onclick="navDoor(1)">পরের দরজা (${doors[idx+1].name}) →</button>`;document.getElementById('story-container').innerHTML=`<div class="story-progress">স্থান ${door.num} / ${doors.length}${done?' — ✅ সম্পূর্ণ':''}</div><div class="story-door-banner"><div class="story-door-icon">${door.icon}</div><h2 class="story-door-name" style="color:${door.color}">${door.name}</h2><div style="font-size:.78rem;font-weight:600;padding:.18rem .7rem;border-radius:12px;display:inline-block;background:${door.color}22;color:${door.color}">${door.tech}</div></div><div class="story-text">${door.story}</div>${insightHTML}${!done?recallHTML:''}<div class="continue-area">${!done?`<button class="continue-btn" onclick="completeDoor(${idx})">${isLast?'👑 যাত্রা সমাপ্ত করো':'✦ পরবর্তী স্থানে যাও'}</button>`:`<button class="continue-btn" onclick="goToMap()">← নগরীর মানচিত্রে ফিরে যাও</button>`}</div>${nextHTML}`;applyFontScale()}
function highlightCode(){const blocks=document.querySelectorAll('.code-block');blocks.forEach(block=>{const text=block.textContent;if(!block.querySelector('code')){const pre=document.createElement('pre');const code=document.createElement('code');code.className='language-python';code.textContent=text;pre.appendChild(code);block.innerHTML='';block.appendChild(pre)}if(window.Prism)Prism.highlightAllUnder(block)})}
function revealRecall(btn){btn.nextElementSibling.style.display='block';btn.style.display='none'}
function navDoor(dir){const cur=state.currentDoor;if(cur===null)return;const t=cur+dir;if(t<0||t>=doors.length)return;const unlocked=t===0||state.completedDoors.includes(t-1)||state.completedDoors.includes(t);if(!unlocked)return;state.currentDoor=t;renderStory(t);showScreen('story-screen');window.scrollTo({top:0})}
function fontStep(d){fontScale=Math.max(80,Math.min(140,fontScale+d*10));try{localStorage.setItem(FONT_KEY,String(fontScale))}catch(e){}applyFontScale()}
function applyFontScale(){document.documentElement.style.setProperty('--font-scale',(fontScale/100).toFixed(2));const l=document.getElementById('font-label');if(l)l.textContent=fontScale+'%'}
document.addEventListener('scroll',()=>{const rf=document.getElementById('read-progress-fill');if(!rf||!document.getElementById('story-screen').classList.contains('active'))return;const h=document.documentElement;const max=h.scrollHeight-h.clientHeight;rf.style.width=(max>0?Math.min(100,(h.scrollTop/max)*100):0)+'%'},{passive:true});
document.addEventListener('keydown',e=>{if(e.key==='Escape'){if(document.getElementById('cheat-modal').style.display==='block')document.getElementById('cheat-modal').style.display='none';else if(document.getElementById('story-screen').classList.contains('active'))goToMap()}else if(document.getElementById('story-screen').classList.contains('active')&&!e.target.closest('input,textarea')){if(e.key==='ArrowRight')navDoor(1);else if(e.key==='ArrowLeft')navDoor(-1)}});
window.addEventListener('DOMContentLoaded',()=>{applyFontScale()});
applyFontScale();
function completeDoor(idx){if(!state.completedDoors.includes(idx)){state.completedDoors.push(idx);state.xp+=XP_PER_DOOR;saveState();sndXP();showXPPopup();setTimeout(()=>{if(state.completedDoors.length===doors.length){renderCheatSheet();sndComplete();showScreen('complete-screen')}else{renderMap();showScreen('map-screen')}updateHUD()},2000)}}
function showXPPopup(){const p=document.getElementById('xp-popup');document.getElementById('xp-amount').textContent=`+${XP_PER_DOOR} XP`;p.classList.add('show');setTimeout(()=>p.classList.remove('show'),1800)}
function goToMap(){renderMap();showScreen('map-screen')}
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
