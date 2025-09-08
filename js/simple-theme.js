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
    const button = document.createElement('button');
    button.className = 'theme-toggle';
    button.innerHTML = '🌙';
    button.addEventListener('click', toggleTheme);
    
    const header = document.querySelector('header') || document.body;
    header.appendChild(button);
    
    updateToggleIcon(document.documentElement.getAttribute('data-theme'));
  }

  function updateToggleIcon(theme) {
    const button = document.querySelector('.theme-toggle');
    if (button) {
      button.innerHTML = theme === 'dark' ? '☀️' : '🌙';
    }
  }

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initTheme);
  } else {
    initTheme();
  }
})();