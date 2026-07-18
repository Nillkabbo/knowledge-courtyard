#!/usr/bin/env python3
"""
patch-engines-deeplink.py — append a `?door=N` deep-link hook to every book engine.

The courtyard search bar (in the root index.html) needs to link readers directly
to a specific chapter: ./<book>/index.html?door=5  → opens that book at door 5.

Each book engine exposes:
  - `doors`        global array (from doors-*.js loaded before engine.js)
  - `state`        {completedDoors:[...], prologueSeen:bool, ...}
  - `startGame()`  boots past the welcome screen
  - `openDoor(i)`  opens door at index i — but ONLY if (i-1) is complete or i==0

The hook below, when ?door=N is present:
  1. marks prologue seen + marks doors 0..(N-2) complete (so door N-1 unlocks)
  2. calls startGame() to render the map
  3. calls openDoor(N-1) to jump straight to the chapter

Idempotent: if the hook marker is already present, the file is left untouched.
Runs at DOMContentLoaded so all engine functions + doors array are defined.

Usage:  python3 scripts/patch-engines-deeplink.py
"""
import os, re, glob

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
MARKER = '// DEEP-LINK HOOK (search)'

HOOK = r'''
// ''' + MARKER + r''' allows ./index.html?door=N to open a chapter directly.
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
'''

patched, skipped = 0, 0
for eng in sorted(glob.glob(os.path.join(ROOT, '*', 'engine.js'))):
    # skip the math stub for now (it has a different structure)
    folder = os.path.basename(os.path.dirname(eng))
    src = open(eng, encoding='utf-8').read()
    if MARKER in src:
        skipped += 1
        continue
    # Ensure the engine actually exposes the symbols we depend on.
    if not all(s in src for s in ('function openDoor', 'function startGame', 'function renderStory')):
        print(f"  ⚠️  skip {folder}/engine.js — missing required functions")
        skipped += 1
        continue
    # Strip trailing whitespace/newlines, then append.
    src = src.rstrip() + '\n' + HOOK.lstrip('\n')
    open(eng, 'w', encoding='utf-8').write(src)
    patched += 1
    print(f"  ✓ patched {folder}/engine.js")

print(f"\nDone: {patched} patched, {skipped} skipped (already patched or ineligible)")
