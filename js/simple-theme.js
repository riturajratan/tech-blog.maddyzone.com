// Simple Theme Toggle for GitHub Pages
(function() {
  'use strict';
  
  // Theme management
  function initTheme() {
    const theme = localStorage.getItem('theme') || 'light';
    console.log('Initializing theme:', theme); // Debug log
    applyTheme(theme);
    createThemeToggle();
  }

  function applyTheme(theme) {
    console.log('Applying theme:', theme); // Debug log
    document.documentElement.setAttribute('data-theme', theme);
    document.body.setAttribute('data-theme', theme); // Also set on body
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

  // Header scroll behavior
  function initHeaderScroll() {
    const header = document.querySelector('.site-header');
    let lastScrollY = window.scrollY;

    if (header) {
      window.addEventListener('scroll', () => {
        const currentScrollY = window.scrollY;
        
        // Add scrolled class when scrolling down
        if (currentScrollY > 50) {
          header.classList.add('scrolled');
        } else {
          header.classList.remove('scrolled');
        }

        lastScrollY = currentScrollY;
      });
    }
  }

  // Make functions globally available
  window.toggleTheme = toggleTheme;

  // Initialize everything when DOM is ready
  function initAll() {
    initTheme();
    initHeaderScroll();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAll);
  } else {
    initAll();
  }
})();