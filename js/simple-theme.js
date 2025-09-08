// Simple Theme Toggle for GitHub Pages
(function() {
  'use strict';
  
  // Theme management
  function initTheme() {
    const theme = localStorage.getItem('theme') || 'light';
    applyTheme(theme);
    createThemeToggle();
  }

  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }

  function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    applyTheme(newTheme);
    updateToggleIcon(newTheme);
  }

  function createThemeToggle() {
    // Check if toggle button already exists in HTML
    let button = document.querySelector('.theme-toggle');
    if (!button) {
      button = document.createElement('button');
      button.className = 'theme-toggle';
      button.title = 'Toggle dark/light theme';
      button.onclick = toggleTheme;
      const body = document.body;
      body.appendChild(button);
    } else {
      // If button exists, ensure it has the click handler
      button.onclick = toggleTheme;
    }
    
    updateToggleIcon(document.documentElement.getAttribute('data-theme'));
  }

  function updateToggleIcon(theme) {
    const button = document.querySelector('.theme-toggle');
    if (button) {
      button.innerHTML = theme === 'dark' ? '☀️' : '🌙';
      button.title = theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme';
    }
  }

  // Make toggleTheme globally available
  window.toggleTheme = toggleTheme;

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initTheme);
  } else {
    initTheme();
  }
})();