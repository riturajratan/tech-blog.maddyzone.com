// =====================================================
// ENHANCED THEME AND INTERACTIONS JAVASCRIPT
// =====================================================

(function() {
  'use strict';

  // =====================================================
  // THEME MANAGEMENT
  // =====================================================
  
  const ThemeManager = {
    init() {
      this.theme = localStorage.getItem('theme') || 'light';
      this.applyTheme(this.theme);
      this.bindThemeToggle();
      this.detectSystemPreference();
    },

    applyTheme(theme) {
      document.documentElement.setAttribute('data-theme', theme);
      localStorage.setItem('theme', theme);
      this.updateThemeToggleIcon(theme);
    },

    bindThemeToggle() {
      const toggleBtn = document.querySelector('.theme-toggle');
      if (toggleBtn) {
        toggleBtn.addEventListener('click', () => {
          const currentTheme = document.documentElement.getAttribute('data-theme');
          const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
          this.applyTheme(newTheme);
        });
      }
    },

    updateThemeToggleIcon(theme) {
      const toggleBtn = document.querySelector('.theme-toggle');
      if (toggleBtn) {
        toggleBtn.innerHTML = theme === 'dark' 
          ? '<svg width="20" height="20" fill="currentColor" viewBox="0 0 20 20"><path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"></path></svg>'
          : '<svg width="20" height="20" fill="currentColor" viewBox="0 0 20 20"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path></svg>';
      }
    },

    detectSystemPreference() {
      if (!localStorage.getItem('theme') && window.matchMedia) {
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        this.applyTheme(prefersDark ? 'dark' : 'light');
      }
    }
  };

  // =====================================================
  // CODE BLOCK ENHANCEMENTS
  // =====================================================
  
  const CodeBlockEnhancer = {
    init() {
      this.addCopyButtons();
      this.addLanguageLabels();
      this.wrapCodeBlocks();
    },

    wrapCodeBlocks() {
      document.querySelectorAll('pre').forEach(pre => {
        if (!pre.parentElement.classList.contains('code-block-wrapper')) {
          const wrapper = document.createElement('div');
          wrapper.className = 'code-block-wrapper';
          pre.parentNode.insertBefore(wrapper, pre);
          wrapper.appendChild(pre);
        }
      });
    },

    addCopyButtons() {
      document.querySelectorAll('pre').forEach(pre => {
        if (pre.querySelector('.copy-code-button')) return;

        const button = document.createElement('button');
        button.className = 'copy-code-button';
        button.innerHTML = '<svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M13 0H6a2 2 0 0 0-2 2 2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2 2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm0 13V4a2 2 0 0 0-2-2H5a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1zM3 4a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4z"/></svg> Copy';
        
        button.addEventListener('click', () => {
          const code = pre.textContent || '';
          navigator.clipboard.writeText(code).then(() => {
            button.innerHTML = '<svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/></svg> Copied!';
            button.classList.add('copied');
            
            setTimeout(() => {
              button.innerHTML = '<svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M13 0H6a2 2 0 0 0-2 2 2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2 2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm0 13V4a2 2 0 0 0-2-2H5a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1zM3 4a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4z"/></svg> Copy';
              button.classList.remove('copied');
            }, 2000);
          });
        });

        pre.style.position = 'relative';
        pre.appendChild(button);
      });
    },

    addLanguageLabels() {
      document.querySelectorAll('pre').forEach(pre => {
        if (pre.querySelector('.code-block-header')) return;

        const codeElement = pre.querySelector('code');
        if (codeElement) {
          const className = codeElement.className;
          const codeContent = codeElement.textContent || '';
          let language = 'Code';
          let icon = '📄';
          
          // Enhanced language detection
          if (className.includes('language-javascript') || className.includes('js') || 
              codeContent.includes('const ') || codeContent.includes('function') ||
              codeContent.includes('async') || codeContent.includes('=>') ||
              codeContent.includes('parseResume') || codeContent.includes('await')) {
            language = 'JavaScript';
            icon = '🟨';
          } else if (className.includes('language-html') || codeContent.includes('<html') || 
                     codeContent.includes('<!DOCTYPE') || codeContent.includes('<div')) {
            language = 'HTML';
            icon = '🌐';
          } else if (className.includes('language-css') || (codeContent.includes('{') && 
                     codeContent.includes(':') && codeContent.includes(';'))) {
            language = 'CSS';
            icon = '🎨';
          } else if (className.includes('language-python') || codeContent.includes('def ') ||
                     codeContent.includes('import ')) {
            language = 'Python';
            icon = '🐍';
          } else if (className.includes('language-json') || (codeContent.trim().startsWith('{') &&
                     codeContent.includes('"') && codeContent.includes(':'))) {
            language = 'JSON';
            icon = '📋';
          } else if (className.includes('language-bash') || className.includes('language-shell') ||
                     codeContent.includes('$ ') || codeContent.includes('npm ') || codeContent.includes('git ')) {
            language = 'Bash';
            icon = '⚡';
          } else if (className.includes('language-typescript') || codeContent.includes('interface ') ||
                     codeContent.includes(': string') || codeContent.includes(': number')) {
            language = 'TypeScript';
            icon = '🔷';
          } else if (className.includes('language-php') || codeContent.includes('<?php')) {
            language = 'PHP';
            icon = '🐘';
          } else if (className.includes('language-sql') || codeContent.includes('SELECT ') ||
                     codeContent.includes('INSERT ')) {
            language = 'SQL';
            icon = '🗄️';
          }

          // Create enhanced header
          const headerContainer = document.createElement('div');
          headerContainer.className = 'code-block-header';
          
          const languageLabel = document.createElement('span');
          languageLabel.className = 'language-label';
          languageLabel.innerHTML = `${icon} ${language}`;
          
          headerContainer.appendChild(languageLabel);
          
          // Insert at the beginning of the pre element
          pre.insertBefore(headerContainer, pre.firstChild);
          
          // Set data attributes for styling
          pre.setAttribute('data-language', language.toLowerCase());
          pre.classList.add('enhanced-code-block');
        }
      });
    }
  };

  // =====================================================
  // MOBILE NAVIGATION
  // =====================================================
  
  const MobileNav = {
    init() {
      this.createMobileToggle();
      this.bindMobileToggle();
    },

    createMobileToggle() {
      const nav = document.querySelector('.site-nav');
      if (!nav || document.querySelector('.mobile-menu-toggle')) return;

      const toggle = document.createElement('button');
      toggle.className = 'mobile-menu-toggle';
      toggle.setAttribute('aria-label', 'Toggle mobile menu');
      toggle.innerHTML = '<span></span><span></span><span></span>';
      
      nav.appendChild(toggle);
    },

    bindMobileToggle() {
      const toggle = document.querySelector('.mobile-menu-toggle');
      const menu = document.querySelector('.nav-menu');
      
      if (toggle && menu) {
        toggle.addEventListener('click', () => {
          menu.classList.toggle('active');
          toggle.classList.toggle('active');
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
          if (!nav.contains(e.target)) {
            menu.classList.remove('active');
            toggle.classList.remove('active');
          }
        });
      }
    }
  };

  // =====================================================
  // BACK TO TOP BUTTON
  // =====================================================
  
  const BackToTop = {
    init() {
      this.createButton();
      this.bindScroll();
      this.bindClick();
    },

    createButton() {
      if (document.querySelector('.back-to-top')) return;

      const button = document.createElement('button');
      button.className = 'back-to-top';
      button.setAttribute('aria-label', 'Back to top');
      button.innerHTML = '<svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M7 14l5-5 5 5z"/></svg>';
      
      document.body.appendChild(button);
    },

    bindScroll() {
      const button = document.querySelector('.back-to-top');
      if (!button) return;

      let scrollTimer;
      window.addEventListener('scroll', () => {
        clearTimeout(scrollTimer);
        scrollTimer = setTimeout(() => {
          if (window.pageYOffset > 300) {
            button.classList.add('visible');
          } else {
            button.classList.remove('visible');
          }
        }, 100);
      });
    },

    bindClick() {
      const button = document.querySelector('.back-to-top');
      if (!button) return;

      button.addEventListener('click', () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      });
    }
  };

  // =====================================================
  // READING PROGRESS BAR
  // =====================================================
  
  const ReadingProgress = {
    init() {
      if (!document.querySelector('.post-content')) return;
      
      this.createProgressBar();
      this.updateProgress();
    },

    createProgressBar() {
      if (document.querySelector('.reading-progress')) return;

      const progress = document.createElement('div');
      progress.className = 'reading-progress';
      progress.innerHTML = '<div class="reading-progress-bar"></div>';
      
      document.body.appendChild(progress);
    },

    updateProgress() {
      const bar = document.querySelector('.reading-progress-bar');
      if (!bar) return;

      window.addEventListener('scroll', () => {
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const progress = (scrollTop / (documentHeight - windowHeight)) * 100;
        
        bar.style.width = `${Math.min(progress, 100)}%`;
      });
    }
  };

  // =====================================================
  // SMOOTH SCROLL
  // =====================================================
  
  const SmoothScroll = {
    init() {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', (e) => {
          e.preventDefault();
          const target = document.querySelector(anchor.getAttribute('href'));
          
          if (target) {
            const offset = 80; // Account for fixed header
            const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - offset;
            
            window.scrollTo({
              top: targetPosition,
              behavior: 'smooth'
            });
          }
        });
      });
    }
  };

  // =====================================================
  // LAZY LOAD IMAGES
  // =====================================================
  
  const LazyLoad = {
    init() {
      if ('IntersectionObserver' in window) {
        const images = document.querySelectorAll('img[data-src]');
        const imageObserver = new IntersectionObserver((entries, observer) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              const img = entry.target;
              img.src = img.dataset.src;
              img.removeAttribute('data-src');
              imageObserver.unobserve(img);
            }
          });
        });

        images.forEach(img => imageObserver.observe(img));
      }
    }
  };

  // =====================================================
  // ANIMATE ON SCROLL
  // =====================================================
  
  const AnimateOnScroll = {
    init() {
      if ('IntersectionObserver' in window) {
        const elements = document.querySelectorAll('.card, .post-content h2, .post-content h3');
        
        const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('animate-fadeIn');
              observer.unobserve(entry.target);
            }
          });
        }, {
          threshold: 0.1,
          rootMargin: '0px 0px -50px 0px'
        });

        elements.forEach(el => observer.observe(el));
      }
    }
  };

  // =====================================================
  // SEARCH FUNCTIONALITY
  // =====================================================
  
  const Search = {
    init() {
      this.setupSearch();
    },

    setupSearch() {
      // Wait for SimpleJekyllSearch to be available
      if (typeof SimpleJekyllSearch !== 'undefined') {
        this.initializeSearch();
      } else {
        // Retry after a short delay
        setTimeout(() => this.setupSearch(), 200);
      }
    },

    initializeSearch() {
      // Initialize search for the main search input (if it exists)
      const mainSearchInput = document.getElementById('search-input');
      const mainResultsContainer = document.getElementById('results-container');
      
      if (mainSearchInput && mainResultsContainer) {
        SimpleJekyllSearch({
          searchInput: mainSearchInput,
          resultsContainer: mainResultsContainer,
          json: '/posts.json',
          searchResultTemplate: '<li><a href="{url}" title="{desc}">{title}</a></li>',
          noResultsText: 'No results found',
          limit: 10,
          fuzzy: false,
          exclude: ['Welcome']
        });
      }

      // Set up header search to sync with main search
      const headerSearchInput = document.getElementById('search-input-header');
      const headerResultsContainer = document.getElementById('search-results');
      
      if (headerSearchInput) {
        // Initialize separate search for header
        if (headerResultsContainer) {
          SimpleJekyllSearch({
            searchInput: headerSearchInput,
            resultsContainer: headerResultsContainer,
            json: '/posts.json',
            searchResultTemplate: `
              <div class="search-result-item">
                <a href="{url}" class="search-result-link">
                  <div class="search-result-title">{title}</div>
                  <div class="search-result-excerpt">{excerpt}</div>
                </a>
              </div>
            `,
            noResultsText: '<div class="search-result-item">No results found</div>',
            limit: 8,
            fuzzy: false,
            exclude: ['Welcome']
          });
        }

        // Add focus/blur handlers for header search
        headerSearchInput.addEventListener('focus', () => {
          if (headerResultsContainer) {
            headerResultsContainer.style.display = 'block';
          }
        });

        headerSearchInput.addEventListener('blur', (e) => {
          // Delay hiding to allow clicking on results
          setTimeout(() => {
            if (headerResultsContainer) {
              headerResultsContainer.style.display = 'none';
            }
          }, 200);
        });

        // Show results when typing
        headerSearchInput.addEventListener('input', (e) => {
          if (headerResultsContainer) {
            if (e.target.value.trim()) {
              headerResultsContainer.style.display = 'block';
            } else {
              headerResultsContainer.style.display = 'none';
            }
          }
        });
      }

      // Sync both search inputs
      this.syncSearchInputs();
    },

    syncSearchInputs() {
      const mainSearchInput = document.getElementById('search-input');
      const headerSearchInput = document.getElementById('search-input-header');

      if (mainSearchInput && headerSearchInput) {
        mainSearchInput.addEventListener('input', (e) => {
          headerSearchInput.value = e.target.value;
        });

        headerSearchInput.addEventListener('input', (e) => {
          mainSearchInput.value = e.target.value;
        });
      }
    }
  };

  // =====================================================
  // UTILITY FUNCTIONS
  // =====================================================
  
  function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }

  // =====================================================
  // SHARE BUTTONS
  // =====================================================
  
  const ShareButtons = {
    init() {
      this.createShareButtons();
    },

    createShareButtons() {
      const shareContainer = document.querySelector('.share-buttons');
      if (!shareContainer) return;

      const url = encodeURIComponent(window.location.href);
      const title = encodeURIComponent(document.title);

      const buttons = [
        {
          name: 'Twitter',
          url: `https://twitter.com/intent/tweet?url=${url}&text=${title}`,
          icon: '<svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>'
        },
        {
          name: 'LinkedIn',
          url: `https://www.linkedin.com/sharing/share-offsite/?url=${url}`,
          icon: '<svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>'
        },
        {
          name: 'Copy Link',
          url: '#',
          icon: '<svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/></svg>',
          action: () => {
            navigator.clipboard.writeText(window.location.href);
            alert('Link copied to clipboard!');
          }
        }
      ];

      buttons.forEach(button => {
        const link = document.createElement('a');
        link.className = 'share-button';
        link.href = button.url;
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
        link.setAttribute('aria-label', `Share on ${button.name}`);
        link.innerHTML = button.icon;

        if (button.action) {
          link.addEventListener('click', (e) => {
            e.preventDefault();
            button.action();
          });
        }

        shareContainer.appendChild(link);
      });
    }
  };

  // =====================================================
  // INITIALIZE EVERYTHING
  // =====================================================
  
  document.addEventListener('DOMContentLoaded', () => {
    ThemeManager.init();
    CodeBlockEnhancer.init();
    MobileNav.init();
    BackToTop.init();
    ReadingProgress.init();
    SmoothScroll.init();
    LazyLoad.init();
    AnimateOnScroll.init();
    Search.init();
    ShareButtons.init();
  });

  // Also handle immediate theme application to prevent flash
  if (localStorage.getItem('theme') === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
  }
})();