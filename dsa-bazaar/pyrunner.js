// ════════════════════════════════════════
// PYTHON RUNNER — Pyodide Integration
// Runs real Python in the browser via WASM
// ════════════════════════════════════════

let pyodide = null;
let pyLoading = false;
let pyReady = false;

// Load Pyodide from CDN
async function initPython() {
  if (pyReady) return pyodide;
  if (pyLoading) {
    // Wait for ongoing load
    while (pyLoading) { await new Promise(r => setTimeout(r, 200)); }
    return pyodide;
  }
  pyLoading = true;
  updatePyStatus('loading', 'পাইথন লোড হচ্ছে... Loading Python engine...');

  try {
    // Load the Pyodide script
    if (!window.loadPyodide) {
      await new Promise((resolve, reject) => {
        const s = document.createElement('script');
        s.src = 'https://cdn.jsdelivr.net/pyodide/v0.27.2/full/pyodide.js';
        s.onload = resolve;
        s.onerror = () => reject(new Error('Failed to load Pyodide CDN'));
        document.head.appendChild(s);
      });
    }
    pyodide = await window.loadPyodide();
    pyReady = true;
    pyLoading = false;
    updatePyStatus('ready', '✅ পাইথন প্রস্তুত! Python ready!');
    return pyodide;
  } catch (e) {
    pyLoading = false;
    updatePyStatus('error', '❌ পাইথন লোড ব্যর্থ: ' + e.message);
    return null;
  }
}

function updatePyStatus(status, msg) {
  document.querySelectorAll('.py-status').forEach(el => {
    el.className = 'py-status ' + status;
    el.textContent = msg;
  });
}

// Run Python code and capture output
async function runPythonCode(editorId, outputId) {
  const editor = document.getElementById(editorId);
  const output = document.getElementById(outputId);
  const runBtn = output.parentElement.querySelector('.run-btn');

  if (!editor || !output) return;

  const code = editor.value;
  if (!code.trim()) {
    output.className = 'code-output error';
    output.textContent = '⚠️ কোড লিখুন... Please write some code first.';
    return;
  }

  // Ensure Pyodide is loaded
  if (!pyReady) {
    runBtn.disabled = true;
    runBtn.textContent = '⏳ লোড হচ্ছে...';
    output.className = 'code-output';
    output.textContent = 'পাইথন ইঞ্জিন লোড হচ্ছে... প্রথমবার ~10 সেকেন্ড লাগতে পারে।\nLoading Python engine... first time takes ~10 seconds.';
    await initPython();
    runBtn.disabled = false;
    runBtn.innerHTML = '▶ চালাও Run';
    if (!pyReady) {
      output.className = 'code-output error';
      output.textContent = '❌ পাইথন লোড করা যায়নি। ইন্টারনেট সংযোগ দেখুন।\nPython failed to load. Check internet connection.';
      return;
    }
  }

  runBtn.disabled = true;
  runBtn.textContent = '⏳ চলছে...';

  let stdout = '';
  let stderr = '';

  try {
    // Capture stdout/stderr
    pyodide.setStdout({ batched: (s) => stdout += s + '\n' });
    pyodide.setStderr({ batched: (s) => stderr += s + '\n' });

    // Run the code
    await pyodide.runPythonAsync(code);

    output.className = 'code-output success';
    output.textContent = stdout || '(কোনো আউটপুট নেই — print() ব্যবহার করুন / No output — use print())';
  } catch (e) {
    output.className = 'code-output error';
    // Clean up Pyodide traceback for readability
    let errMsg = e.message || String(e);
    // Remove internal Pyodide noise
    errMsg = errMsg.split('\n').filter(l =>
      !l.includes('pyodide') && !l.includes('PythonError')
    ).join('\n').trim() || errMsg;
    output.textContent = stdout + '\n❌ ' + errMsg;
  } finally {
    runBtn.disabled = false;
    runBtn.innerHTML = '▶ চালাও Run';
  }
}

// Reset code editor to original
function resetCode(editorId, originalCode) {
  const editor = document.getElementById(editorId);
  if (editor) editor.value = originalCode;
}

// Check if Pyodide is needed (preload on first door open)
function preloadPython() {
  if (!pyReady && !pyLoading) {
    initPython(); // Fire and forget — loads in background
  }
}
