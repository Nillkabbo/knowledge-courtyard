// ════════════════════════════════════════
// DSA BAZAAR — GAME ENGINE
// ════════════════════════════════════════

let state = { xp:0, currentDoor:null, completedDoors:[], prologueSeen:false };
const XP_PER_DOOR = 100;
const SAVE_KEY = 'dsaBazaar_v1';
const MAX_XP = 800;
const RANKS = [
  {min:0,   name:'শিক্ষানবিশ',  icon:'🧒'},
  {min:100, name:'শিক্ষার্থী',   icon:'📖'},
  {min:200, name:'কারিগর',      icon:'🔨'},
  {min:300, name:'দক্ষ কর্মী',   icon:'⚙️'},
  {min:400, name:'বিশেষজ্ঞ',     icon:'🎯'},
  {min:500, name:'শিল্পী',       icon:'🎨'},
  {min:600, name:'উস্তাদ',       icon:'🧙'},
  {min:700, name:'মাস্টার',      icon:'👑'}
];

function saveState(){
  try{localStorage.setItem(SAVE_KEY,JSON.stringify({xp:state.xp,completedDoors:state.completedDoors,prologueSeen:state.prologueSeen}))}catch(e){}
}
function loadState(){
  try{
    const r=localStorage.getItem(SAVE_KEY);
    if(!r)return;
    const s=JSON.parse(r);
    state.xp=s.xp||0;
    state.completedDoors=s.completedDoors||[];
    state.prologueSeen=s.prologueSeen||false;
  }catch(e){}
}
function confirmReset(){if(confirm('সব অগ্রগতি মুছে ফেলবে? / Reset all progress?'))resetGame()}
function resetGame(){try{localStorage.removeItem(SAVE_KEY)}catch(e){}location.reload()}

// ── PARTICLES ──
const canvas=document.getElementById('particles');
const ctx=canvas.getContext('2d');
let particles=[],W,H;
function resizeCanvas(){W=canvas.width=window.innerWidth;H=canvas.height=window.innerHeight}
resizeCanvas();window.addEventListener('resize',resizeCanvas);
const prefersReducedMotion=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
class Particle{
  constructor(){this.reset();this.y=Math.random()*H}
  reset(){this.x=Math.random()*W;this.y=H+10;this.size=Math.random()*2+0.5;this.speedY=Math.random()*0.4+0.15;this.speedX=(Math.random()-0.5)*0.2;this.opacity=Math.random()*0.5+0.15;this.hue=40+Math.random()*20;this.twinkle=Math.random()*Math.PI*2}
  update(){this.y-=this.speedY;this.x+=this.speedX;this.twinkle+=0.03;if(this.y<-10)this.reset()}
  draw(){const f=Math.sin(this.twinkle)*0.3+0.7;ctx.beginPath();ctx.arc(this.x,this.y,this.size,0,Math.PI*2);ctx.fillStyle=`hsla(${this.hue},70%,60%,${this.opacity*f})`;ctx.shadowBlur=6;ctx.shadowColor=`hsla(${this.hue},70%,60%,${this.opacity*0.4})`;ctx.fill()}
}
for(let i=0;i<60;i++)particles.push(new Particle());
function animateParticles(){
  ctx.clearRect(0,0,W,H);
  if(!prefersReducedMotion){particles.forEach(p=>{p.update();p.draw()})}
  else{particles.forEach(p=>{p.draw()})}
  requestAnimationFrame(animateParticles)
}
animateParticles();

// ── SOUND ──
let audioCtx=null,soundMuted=false;
function getAudio(){if(!audioCtx){try{audioCtx=new(window.AudioContext||window.webkitAudioContext)()}catch(e){}}if(audioCtx&&audioCtx.state==='suspended'){audioCtx.resume().catch(()=>{})}return audioCtx}
function playTone(freq,duration,type='sine',vol=0.1){
  if(soundMuted)return;
  const ac=getAudio();if(!ac)return;
  const osc=ac.createOscillator();const gain=ac.createGain();
  osc.type=type;osc.frequency.value=freq;
  gain.gain.setValueAtTime(0,ac.currentTime);
  gain.gain.linearRampToValueAtTime(vol,ac.currentTime+0.02);
  gain.gain.exponentialRampToValueAtTime(0.001,ac.currentTime+duration);
  osc.connect(gain);gain.connect(ac.destination);osc.start();osc.stop(ac.currentTime+duration);
}
function toggleMute(){soundMuted=!soundMuted;document.getElementById('mute-btn').textContent=soundMuted?'🔇':'🔊'}
function sndClick(){playTone(440,0.1,'sine',0.06)}
function sndDoor(){playTone(196,0.25,'sine',0.06);setTimeout(()=>playTone(294,0.3,'sine',0.07),100)}
function sndXP(){playTone(523,0.1,'triangle',0.08);setTimeout(()=>playTone(659,0.1,'triangle',0.08),80);setTimeout(()=>playTone(784,0.2,'triangle',0.08),160)}
function sndComplete(){[523,659,784,1047].forEach((n,i)=>setTimeout(()=>playTone(n,0.4,'triangle',0.08),i*140))}
function sndStart(){playTone(330,0.15,'sine',0.07);setTimeout(()=>playTone(440,0.2,'sine',0.08),100)}

// ── SCREENS ──
function showScreen(id){
  document.querySelectorAll('.screen').forEach(s=>s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  window.scrollTo(0,0);
}
function startGame(){
  sndStart();loadState();
  if(!state.prologueSeen){showScreen('prologue-screen')}
  else{renderMap();showScreen('map-screen')}
}
function startMap(){
  state.prologueSeen=true;saveState();renderMap();showScreen('map-screen');
  preloadPython(); // Start loading Python in background
}

// ── MAP ──
function renderMap(){
  const grid=document.getElementById('doors-grid');
  grid.innerHTML='';
  let nextIdx=-1;
  doors.forEach((door,idx)=>{
    const prevDone=state.completedDoors.includes(idx-1);
    const selfDone=state.completedDoors.includes(idx);
    const unlocked=idx===0||prevDone||selfDone;
    if(unlocked&&!selfDone&&nextIdx===-1)nextIdx=idx;
    const card=document.createElement('div');
    card.className=`door-card ${selfDone?'completed':''} ${!unlocked?'locked':''}`;
    if(unlocked){
      card.tabIndex=0;
      card.setAttribute('role','button');
      card.setAttribute('aria-label',`${door.name} — ${door.subtitle}`);
      card.onclick=()=>openDoor(idx);
      card.onkeydown=e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();openDoor(idx)}};
    } else {
      card.setAttribute('aria-label',`${door.name} — লক করা। আগের দরজা সম্পন্ন করো।`);
    }
    card.innerHTML=`
      <div class="door-num">দোকান ${door.num}</div>
      <div class="door-icon">${door.icon}</div>
      <div class="door-title">${door.name}</div>
      <div class="door-subtitle">${door.subtitle}</div>
      <div class="door-tech">${door.tech}</div>
      ${!unlocked?'<div class="door-lock-hint">🔒 আগের দোকান সম্পন্ন করো</div>':''}
    `;
    grid.appendChild(card);
  });
  if(nextIdx>=0){const cards=grid.querySelectorAll('.door-card');if(cards[nextIdx])cards[nextIdx].classList.add('next-door')}
  updateHUD();
}
function updateHUD(){
  const pct=Math.min(100,(state.xp/MAX_XP)*100);
  document.getElementById('hud-xp-fill').style.width=pct+'%';
  document.getElementById('hud-xp-text').textContent=`${state.xp} / ${MAX_XP} XP`;
  let rank=RANKS[0];
  for(let i=RANKS.length-1;i>=0;i--){if(state.xp>=RANKS[i].min){rank=RANKS[i];break}}
  document.getElementById('hud-rank-icon').textContent=rank.icon;
  document.getElementById('hud-rank-name').textContent=rank.name;
  document.getElementById('hud-level').textContent=`স্তর ${Math.min(8,Math.floor(state.xp/100)+1)}`;
}

// ── CHEAT MODAL ──
function openCheatModal(){
  const completed=doors.filter((_,i)=>state.completedDoors.includes(i));
  const grid=document.getElementById('cheat-modal-grid');
  const empty=document.getElementById('cheat-modal-empty');
  if(completed.length===0){grid.innerHTML='';empty.textContent='এখনো কোনো দোকান সম্পন্ন হয়নি।'}
  else{
    empty.textContent='';
    grid.innerHTML=completed.map(d=>`
      <div class="cheat-card">
        <div class="icon">${d.icon}</div>
        <div class="name">${d.name}</div>
        <div class="tech">${d.tech}</div>
        <div class="secret">${d.secret}</div>
      </div>`).join('');
  }
  document.getElementById('cheat-modal').style.display='block';
}

// ── DOOR / STORY ──
function openDoor(idx){
  if(idx===0||state.completedDoors.includes(idx-1)||state.completedDoors.includes(idx)){
    sndDoor();state.currentDoor=idx;renderStory(idx);showScreen('story-screen');
  }
}
function renderStory(idx){
  const door=doors[idx];
  const isLast=idx===doors.length-1;
  const done=state.completedDoors.includes(idx);
  const rc=door.recall;
  const recallHTML=`
    <div class="recall-box">
      <div class="recall-title">🧠 স্মরণ চ্যালেঞ্জ — Recall Challenge</div>
      <div class="recall-q">${rc.q}</div>
      <div class="recall-q en">${rc.qen}</div>
      <button class="recall-toggle" onclick="revealRecall(this)">উত্তর দেখো → Reveal</button>
      <div class="recall-a">${rc.a}<br><em style="font-size:.8rem;opacity:.7">${rc.aen}</em></div>
    </div>`;

  // Build Python playground HTML
  const ex=door.exercise;
  const playgroundHTML = ex ? `
    <div class="playground">
      <div class="playground-head">
        <div class="playground-label">🐍 পাইthon কোড ল্যাব — Code Lab</div>
        <div class="playground-hint">${ex.hint}</div>
      </div>
      <textarea class="code-editor" id="editor-${idx}" spellcheck="false">${ex.starterCode}</textarea>
      <div style="margin-top:.6rem">
        <button class="run-btn" onclick="runPythonCode('editor-${idx}','output-${idx}')">▶ চালাও Run</button>
        <button class="reset-btn" onclick="resetCode('editor-${idx}', ${JSON.stringify(ex.starterCode)})">↺ রিসেট</button>
      </div>
      <div class="code-output" id="output-${idx}">আউটপুট এখানে দেখাবে... Output will appear here...</div>
      <div class="py-status">⏳ প্রস্তুত হওয়া পর্যন্ত অপেক্ষা করুন...</div>
    </div>` : '';

  // Senior lesson HTML
  const seniorHTML = door.senior ? `
    <div class="senior-lesson">
      <div class="label">🎓 সিনিয়র লেসন — Senior Code Lesson</div>
      <div class="title">${door.senior.title}</div>
      ${door.senior.body}
    </div>` : '';

  document.getElementById('story-container').innerHTML=`
    <div class="story-progress">দোকান ${door.num} / ${doors.length}${done?' — ✅ সম্পন্ন':''}</div>
    <div class="story-door-banner">
      <div class="story-door-icon">${door.icon}</div>
      <h2 class="story-door-name" style="color:${door.color}">${door.name}</h2>
      <div style="font-size:.82rem;font-weight:600;padding:.2rem .8rem;border-radius:12px;display:inline-block;background:${door.color}22;color:${door.color}">${door.tech}</div>
    </div>
    <div class="story-text">${door.story}</div>
    ${seniorHTML}
    ${playgroundHTML}
    ${!done?recallHTML:''}
    <div class="continue-area">
      ${!done
        ?`<button class="continue-btn" onclick="completeDoor(${idx})">${isLast?'👑 যাত্রা সম্পন্ন করো':'✦ পরবর্তী দোকানে যাও'}</button>`
        :`<button class="continue-btn" onclick="goToMap()">← বাজারে ফিরে যাও</button>`}
    </div>`;
}
function revealRecall(btn){btn.nextElementSibling.style.display='block';btn.style.display='none'}
function completeDoor(idx){
  if(!state.completedDoors.includes(idx)){
    state.completedDoors.push(idx);state.xp+=XP_PER_DOOR;saveState();sndXP();showXPPopup();
    setTimeout(()=>{
      if(state.completedDoors.length===doors.length){
        renderCheatSheet();sndComplete();showScreen('complete-screen');
      }else{renderMap();showScreen('map-screen')}
      updateHUD();
    },2000);
  }
}
function showXPPopup(){
  const p=document.getElementById('xp-popup');
  document.getElementById('xp-amount').textContent=`+${XP_PER_DOOR} XP`;
  p.classList.add('show');setTimeout(()=>p.classList.remove('show'),1800);
}
function goToMap(){sndClick();renderMap();showScreen('map-screen')}
function renderCheatSheet(){
  document.getElementById('cheat-grid-end').innerHTML=doors.map(d=>`
    <div class="cheat-card">
      <div class="icon">${d.icon}</div>
      <div class="name">${d.name}</div>
      <div class="tech">${d.tech}</div>
      <div class="secret">${d.secret}</div>
    </div>`).join('');
}
document.addEventListener('keydown',e=>{
  if(e.key==='Escape'){
    if(document.getElementById('cheat-modal').style.display==='block')document.getElementById('cheat-modal').style.display='none';
    else if(document.getElementById('story-screen').classList.contains('active'))goToMap();
  }
});
