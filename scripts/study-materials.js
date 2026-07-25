// ═══════════════════════════════════════════════════════════════
// Study Materials Panel — injected into every book's completion screen
// Links to NotebookLM notebook (interactive Q&A, audio, studio)
// + local study artifacts (guide, quiz, flashcards, mind map)
// ═══════════════════════════════════════════════════════════════

(function() {
  'use strict';

  // Detect this book's folder name from URL
  var pathParts = window.location.pathname.split('/');
  var bookFolder = pathParts[pathParts.length - 2] || '';

  // Load notebook links mapping
  var notebookUrl = null;
  // We'll fetch the JSON synchronously (small file)
  try {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', '../scripts/notebook-links.json', false);
    xhr.send();
    if (xhr.status === 200) {
      var links = JSON.parse(xhr.responseText);
      notebookUrl = links[bookFolder];
    }
  } catch(e) {}

  // Wait for page to fully load
  window.addEventListener('load', function() {
    // Find the completion screen
    const completeScreen = 
      document.getElementById('complete-screen') || 
      document.getElementById('completion-screen') ||
      document.querySelector('[id*="complete"]');
    
    if (!completeScreen) return;

    // Create study materials section
    const studyHTML = `
      <div class="study-materials-section" style="
        margin-top: 2rem;
        padding: 1.5rem;
        background: rgba(212, 175, 55, 0.08);
        border: 1px solid rgba(212, 175, 55, 0.3);
        border-radius: 12px;
        max-width: 600px;
        margin-left: auto;
        margin-right: auto;
        text-align: center;
      ">
        <h3 style="
          color: var(--ink, #d4af37);
          font-family: 'Cinzel', serif;
          font-size: 1.2rem;
          margin-bottom: 1rem;
          letter-spacing: 1px;
        ">📚 Study Materials</h3>
        <p style="
          color: var(--ink-dim, #8b7e5a);
          font-size: 0.85rem;
          margin-bottom: 1.2rem;
          line-height: 1.5;
        ">
          AI-generated study guides, quizzes, flashcards, and mind maps<br>
          from NotebookLM — verified against Wikipedia sources
        </p>
        <div class="study-links" style="
          display: flex;
          flex-wrap: wrap;
          gap: 0.8rem;
          justify-content: center;
        ">
          <a href="study/study-guide.md" target="_blank" class="study-btn" style="
            display: inline-flex;
            align-items: center;
            gap: 0.5rem;
            padding: 0.6rem 1.2rem;
            background: rgba(212, 175, 55, 0.15);
            border: 1px solid rgba(212, 175, 55, 0.4);
            border-radius: 8px;
            color: var(--ink, #d4af37);
            text-decoration: none;
            font-size: 0.9rem;
            transition: all 0.3s ease;
          " onmouseover="this.style.background='rgba(212,175,55,0.3)'" onmouseout="this.style.background='rgba(212,175,55,0.15)'">
            📖 Study Guide
          </a>
          <a href="study/quiz.json" target="_blank" class="study-btn" style="
            display: inline-flex;
            align-items: center;
            gap: 0.5rem;
            padding: 0.6rem 1.2rem;
            background: rgba(212, 175, 55, 0.15);
            border: 1px solid rgba(212, 175, 55, 0.4);
            border-radius: 8px;
            color: var(--ink, #d4af37);
            text-decoration: none;
            font-size: 0.9rem;
            transition: all 0.3s ease;
          " onmouseover="this.style.background='rgba(212,175,55,0.3)'" onmouseout="this.style.background='rgba(212,175,55,0.15)'">
            ❓ Quiz
          </a>
          <a href="study/flashcards.json" target="_blank" class="study-btn" style="
            display: inline-flex;
            align-items: center;
            gap: 0.5rem;
            padding: 0.6rem 1.2rem;
            background: rgba(212, 175, 55, 0.15);
            border: 1px solid rgba(212, 175, 55, 0.4);
            border-radius: 8px;
            color: var(--ink, #d4af37);
            text-decoration: none;
            font-size: 0.9rem;
            transition: all 0.3s ease;
          " onmouseover="this.style.background='rgba(212,175,55,0.3)'" onmouseout="this.style.background='rgba(212,175,55,0.15)'">
            🃏 Flashcards
          </a>
          <a href="study/mind-map.json" target="_blank" class="study-btn" style="
            display: inline-flex;
            align-items: center;
            gap: 0.5rem;
            padding: 0.6rem 1.2rem;
            background: rgba(212, 175, 55, 0.15);
            border: 1px solid rgba(212, 175, 55, 0.4);
            border-radius: 8px;
            color: var(--ink, #d4af37);
            text-decoration: none;
            font-size: 0.9rem;
            transition: all 0.3s ease;
          " onmouseover="this.style.background='rgba(212,175,55,0.3)'" onmouseout="this.style.background='rgba(212,175,55,0.15)'">
            🧠 Mind Map
          </a>
        </div>
        <div id="podcast-link-container" style="margin-top: 0.8rem;"></div>
      </div>
    `;

    // Insert before the "play again" button or at the end
    const playAgainBtn = completeScreen.querySelector('[onclick*="resetGame"]');
    const cheatSection = completeScreen.querySelector('.cheat-section-end');
    
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = studyHTML;
    const studySection = tempDiv.firstElementChild;

    if (playAgainBtn && playAgainBtn.parentNode) {
      playAgainBtn.parentNode.insertBefore(studySection, playAgainBtn);
    } else if (cheatSection) {
      cheatSection.parentNode.insertBefore(studySection, cheatSection);
    } else {
      completeScreen.appendChild(studySection);
    }

    // Add NotebookLM link (replaces podcast)
    const container = document.getElementById('podcast-link-container');
    if (container && notebookUrl) {
      container.innerHTML = `
        <a href="${notebookUrl}" target="_blank" style="
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.6rem 1.2rem;
          background: rgba(34, 139, 34, 0.15);
          border: 1px solid rgba(34, 139, 34, 0.4);
          border-radius: 8px;
          color: #6b8e23;
          text-decoration: none;
          font-size: 0.9rem;
          transition: all 0.3s ease;
          margin-top: 0.5rem;
        " onmouseover="this.style.background='rgba(34,139,34,0.3)'" onmouseout="this.style.background='rgba(34,139,34,0.15)'">
          🔬 NotebookLM — Ask Questions, Audio Overview & More
        </a>
      `;
    }
  });
})();
