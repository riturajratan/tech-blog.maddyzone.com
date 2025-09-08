/**
 * Modern Theme and Interaction Handler for Tech Blog
 */

class ModernTheme {
  constructor() {
    this.init();
  }

  init() {
    this.setupTheme();
    this.setupMobileMenu();
    this.setupBackToTop();
    this.setupReadingProgress();
    this.setupCopyCodeButtons();
    this.setupShareButtons();
    this.setupSmoothScrolling();
    this.setupAnimations();
  }

  // Theme Management
  setupTheme() {
    this.currentTheme = this.getStoredTheme() || this.getSystemTheme();
    this.applyTheme(this.currentTheme);
    this.createThemeToggle();
  }

  getStoredTheme() {
    return localStorage.getItem('theme');
  }

  getSystemTheme() {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    this.currentTheme = theme;
    localStorage.setItem('theme', theme);
    
    // Update theme toggle icon
    this.updateThemeToggleIcon();
  }

  toggleTheme() {
    const newTheme = this.currentTheme === 'light' ? 'dark' : 'light';
    this.applyTheme(newTheme);
  }

  createThemeToggle() {
    const themeToggle = document.createElement('button');
    themeToggle.className = 'theme-toggle';
    themeToggle.setAttribute('aria-label', 'Toggle theme');
    themeToggle.innerHTML = this.getThemeIcon();
    
    themeToggle.addEventListener('click', () => this.toggleTheme());
    
    // Add to navigation actions
    const navActions = document.querySelector('.modern-nav__actions') || 
                      document.querySelector('.modern-nav') ||
                      document.querySelector('nav');
    
    if (navActions) {
      navActions.appendChild(themeToggle);
    }
    
    this.themeToggle = themeToggle;
  }

  updateThemeToggleIcon() {
    if (this.themeToggle) {
      this.themeToggle.innerHTML = this.getThemeIcon();
    }
  }

  getThemeIcon() {
    const lightIcon = `
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
              d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>`;
    
    const darkIcon = `
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
              d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
      </svg>`;
    
    return this.currentTheme === 'light' ? darkIcon : lightIcon;
  }

  // Mobile Menu
  setupMobileMenu() {
    this.createMobileMenuButton();
    this.createMobileMenu();
  }

  createMobileMenuButton() {
    const button = document.createElement('button');
    button.className = 'mobile-menu-button';
    button.setAttribute('aria-label', 'Toggle mobile menu');
    button.innerHTML = `
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
      </svg>`;
    
    button.addEventListener('click', () => this.toggleMobileMenu());
    
    const header = document.querySelector('.modern-header__container') || 
                   document.querySelector('header .wrapper');
    if (header) {
      header.appendChild(button);
    }
    
    this.mobileMenuButton = button;
  }

  createMobileMenu() {
    const menu = document.createElement('div');
    menu.className = 'mobile-menu';
    
    const nav = document.querySelector('nav ul');
    if (nav) {
      const mobileNav = nav.cloneNode(true);
      mobileNav.className = 'mobile-menu__list';
      
      // Update link classes
      const links = mobileNav.querySelectorAll('a');
      links.forEach(link => {
        link.className = 'mobile-menu__link';
        link.addEventListener('click', () => this.closeMobileMenu());
      });
      
      menu.appendChild(mobileNav);
    }
    
    const header = document.querySelector('.modern-header') || 
                   document.querySelector('header');
    if (header) {
      header.appendChild(menu);
    }
    
    this.mobileMenu = menu;
  }

  toggleMobileMenu() {
    this.mobileMenu.classList.toggle('mobile-menu--active');
    
    // Update button icon
    const isOpen = this.mobileMenu.classList.contains('mobile-menu--active');
    this.mobileMenuButton.innerHTML = isOpen ? `
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
      </svg>` : `
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
      </svg>`;
  }

  closeMobileMenu() {
    this.mobileMenu.classList.remove('mobile-menu--active');
    this.mobileMenuButton.innerHTML = `
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
      </svg>`;
  }

  // Back to Top Button
  setupBackToTop() {
    const button = document.createElement('button');
    button.className = 'back-to-top';
    button.setAttribute('aria-label', 'Back to top');
    button.innerHTML = `
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
      </svg>`;
    
    button.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    
    document.body.appendChild(button);
    this.backToTopButton = button;
    
    // Show/hide based on scroll position
    let ticking = false;
    window.addEventListener('scroll', () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
          if (scrollTop > 300) {
            this.backToTopButton.classList.add('back-to-top--visible');
          } else {
            this.backToTopButton.classList.remove('back-to-top--visible');
          }
          ticking = false;
        });
        ticking = true;
      }
    });
  }

  // Reading Progress Bar
  setupReadingProgress() {
    const progressContainer = document.createElement('div');
    progressContainer.className = 'reading-progress';
    
    const progressBar = document.createElement('div');
    progressBar.className = 'reading-progress__bar';
    
    progressContainer.appendChild(progressBar);
    document.body.appendChild(progressContainer);
    
    this.progressBar = progressBar;
    
    // Update progress on scroll
    let ticking = false;
    window.addEventListener('scroll', () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          this.updateReadingProgress();
          ticking = false;
        });
        ticking = true;
      }
    });
  }

  updateReadingProgress() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = (scrollTop / scrollHeight) * 100;
    
    this.progressBar.style.width = `${Math.min(progress, 100)}%`;
  }

  // Copy Code Buttons
  setupCopyCodeButtons() {
    const codeBlocks = document.querySelectorAll('pre code, .highlight pre');
    
    codeBlocks.forEach((block, index) => {
      const button = document.createElement('button');
      button.className = 'copy-code-button';
      button.textContent = 'Copy';
      button.setAttribute('data-code-index', index);
      
      button.addEventListener('click', () => this.copyCode(block, button));
      
      const container = block.closest('.highlight') || block.parentNode;
      if (container) {
        container.style.position = 'relative';
        container.appendChild(button);
      }
    });
  }

  async copyCode(codeBlock, button) {
    const code = codeBlock.textContent;
    
    try {
      await navigator.clipboard.writeText(code);
      button.textContent = 'Copied!';
      button.style.background = 'var(--success)';
      
      setTimeout(() => {
        button.textContent = 'Copy';
        button.style.background = '';
      }, 2000);
    } catch (err) {
      console.error('Failed to copy code:', err);
      button.textContent = 'Error';
      
      setTimeout(() => {
        button.textContent = 'Copy';
      }, 2000);
    }
  }

  // Share Buttons
  setupShareButtons() {
    const shareContainer = document.querySelector('.share-buttons') || this.createShareContainer();
    
    if (!shareContainer) return;
    
    const url = encodeURIComponent(window.location.href);
    const title = encodeURIComponent(document.title);
    
    const shareButtons = [
      {
        name: 'Twitter',
        url: `https://twitter.com/intent/tweet?url=${url}&text=${title}`,
        class: 'share-button--twitter',
        icon: `<svg fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>`
      },
      {
        name: 'Facebook',
        url: `https://www.facebook.com/sharer/sharer.php?u=${url}`,
        class: 'share-button--facebook',
        icon: `<svg fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>`
      },
      {
        name: 'LinkedIn',
        url: `https://www.linkedin.com/sharing/share-offsite/?url=${url}`,
        class: 'share-button--linkedin',
        icon: `<svg fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>`
      },
      {
        name: 'Copy',
        url: '#',
        class: 'share-button--copy',
        icon: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"/></svg>`
      }
    ];
    
    shareButtons.forEach(button => {
      const link = document.createElement('a');
      link.href = button.url;
      link.className = `share-button ${button.class}`;
      link.setAttribute('aria-label', `Share on ${button.name}`);
      link.innerHTML = button.icon;
      
      if (button.name === 'Copy') {
        link.addEventListener('click', (e) => {
          e.preventDefault();
          this.copyUrl(link);
        });
      } else {
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
      }
      
      shareContainer.appendChild(link);
    });
  }

  createShareContainer() {
    const container = document.createElement('div');
    container.className = 'share-buttons';
    
    const postContent = document.querySelector('.post-single__content') ||
                       document.querySelector('article') ||
                       document.querySelector('main');
    
    if (postContent) {
      postContent.appendChild(container);
      return container;
    }
    
    return null;
  }

  async copyUrl(button) {
    try {
      await navigator.clipboard.writeText(window.location.href);
      const originalContent = button.innerHTML;
      button.innerHTML = `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>`;
      
      setTimeout(() => {
        button.innerHTML = originalContent;
      }, 2000);
    } catch (err) {
      console.error('Failed to copy URL:', err);
    }
  }

  // Smooth Scrolling
  setupSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(anchor.getAttribute('href'));
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });
  }

  // Animations
  setupAnimations() {
    this.setupIntersectionObserver();
    this.addFadeInAnimations();
  }

  setupIntersectionObserver() {
    if (!window.IntersectionObserver) return;
    
    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in');
          this.observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });
  }

  addFadeInAnimations() {
    const elements = document.querySelectorAll('.modern-card, .post-single, h1, h2, h3');
    elements.forEach(el => {
      if (this.observer) {
        this.observer.observe(el);
      } else {
        el.classList.add('fade-in');
      }
    });
  }

  // Reading Time Calculation
  calculateReadingTime(text) {
    const wordsPerMinute = 200;
    const words = text.trim().split(/\s+/).length;
    const minutes = Math.ceil(words / wordsPerMinute);
    return minutes;
  }

  // Add reading time to cards
  addReadingTimes() {
    document.querySelectorAll('.modern-card, .post-single').forEach(card => {
      const content = card.querySelector('.modern-card__excerpt, .post-single__content');
      if (content) {
        const readingTime = this.calculateReadingTime(content.textContent);
        const readingTimeEl = document.createElement('span');
        readingTimeEl.className = 'modern-card__reading-time';
        readingTimeEl.innerHTML = `
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" style="width: 1rem; height: 1rem;">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          ${readingTime} min read
        `;
        
        const metaEl = card.querySelector('.modern-card__meta, .post__meta');
        if (metaEl) {
          metaEl.appendChild(readingTimeEl);
        }
      }
    });
  }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  window.modernTheme = new ModernTheme();
  
  // Add reading times after content is loaded
  setTimeout(() => {
    window.modernTheme.addReadingTimes();
  }, 100);
});

// Handle system theme changes
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
  if (!localStorage.getItem('theme')) {
    window.modernTheme.applyTheme(e.matches ? 'dark' : 'light');
  }
});

// Prevent flash of unstyled content
document.documentElement.style.visibility = 'visible';