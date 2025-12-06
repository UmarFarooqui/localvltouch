// =========================================
// LocalVLTouch Landing Page JavaScript v2
// =========================================

document.addEventListener('DOMContentLoaded', function() {
    
    // =========================================
    // Theme Toggle (Dark/Light Mode)
    // =========================================
    const themeToggle = document.getElementById('theme-toggle');
    const html = document.documentElement;
    
    // Check for saved theme preference or default to light
    const savedTheme = localStorage.getItem('theme') || 'light';
    html.setAttribute('data-theme', savedTheme);
    
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            const currentTheme = html.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            
            html.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
        });
    }
    
    // =========================================
    // Smooth Scroll for Navigation Links
    // =========================================
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            if (href === '#') return;
            
            const target = document.querySelector(href);
            
            if (target) {
                e.preventDefault();
                
                const navHeight = document.querySelector('.nav').offsetHeight;
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                const navLinksContainer = document.querySelector('.nav-links');
                if (navLinksContainer.classList.contains('mobile-open')) {
                    navLinksContainer.classList.remove('mobile-open');
                    navLinksContainer.removeAttribute('style');
                }
            }
        });
    });
    
    // =========================================
    // Mobile Menu Toggle
    // =========================================
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinksContainer = document.querySelector('.nav-links');
    
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenuBtn.classList.toggle('active');
            navLinksContainer.classList.toggle('mobile-open');
            
            if (navLinksContainer.classList.contains('mobile-open')) {
                const isDark = html.getAttribute('data-theme') === 'dark';
                navLinksContainer.style.display = 'flex';
                navLinksContainer.style.flexDirection = 'column';
                navLinksContainer.style.position = 'absolute';
                navLinksContainer.style.top = '72px';
                navLinksContainer.style.left = '0';
                navLinksContainer.style.right = '0';
                navLinksContainer.style.background = isDark ? 'rgba(10, 10, 26, 0.98)' : 'rgba(245, 245, 247, 0.98)';
                navLinksContainer.style.padding = '1.5rem';
                navLinksContainer.style.gap = '1rem';
                navLinksContainer.style.borderBottom = '1px solid var(--color-border)';
                navLinksContainer.style.backdropFilter = 'blur(20px)';
            } else {
                navLinksContainer.removeAttribute('style');
            }
        });
    }
    
    // =========================================
    // Form Submission Handler
    // =========================================
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            // Check if using Formspree (has actual form ID)
            const formAction = contactForm.getAttribute('action');
            
            if (formAction.includes('YOUR_FORM_ID')) {
                // Demo mode - prevent actual submission
                e.preventDefault();
                
                const formData = new FormData(contactForm);
                const data = Object.fromEntries(formData);
                
                console.log('Form submitted (demo mode):', data);
                
                // Show success message
                showFormSuccess();
            }
            // If Formspree is configured, let the form submit normally
        });
    }
    
    function showFormSuccess() {
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        
        submitBtn.textContent = 'Message Sent!';
        submitBtn.style.background = '#10b981';
        submitBtn.disabled = true;
        
        // Reset after 3 seconds
        setTimeout(() => {
            submitBtn.textContent = originalText;
            submitBtn.style.background = '';
            submitBtn.disabled = false;
            contactForm.reset();
        }, 3000);
    }
    
    // =========================================
    // Intersection Observer for Animations
    // =========================================
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe elements for scroll animations
    const animatedElements = document.querySelectorAll(
        '.section-header, .problem-card, .platform-component, .diff-card, .app-card, .size-item'
    );
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
    
    // Add staggered delays
    const staggerGroups = [
        '.problem-grid .problem-card',
        '.diff-grid .diff-card',
        '.apps-grid .app-card',
        '.sizes-showcase .size-item'
    ];
    
    staggerGroups.forEach(selector => {
        const items = document.querySelectorAll(selector);
        items.forEach((item, index) => {
            item.style.transitionDelay = `${index * 0.1}s`;
        });
    });
    
    // =========================================
    // Video Caption Animation Sync
    // =========================================
    const assistantVideo = document.querySelector('.assistant-video');
    const assistantUI = document.querySelector('.assistant-ui');
    
    if (assistantVideo && assistantUI) {
        // Reset animations when video loops
        assistantVideo.addEventListener('ended', () => {
            // Video will loop automatically, reset caption animations
            restartCaptionAnimations();
        });
        
        // Also handle timeupdate for seamless looping
        assistantVideo.addEventListener('timeupdate', () => {
            // Reset animations slightly before video ends for seamless loop
            if (assistantVideo.duration - assistantVideo.currentTime < 0.1) {
                restartCaptionAnimations();
            }
        });
    }
    
    function restartCaptionAnimations() {
        const captions = document.querySelectorAll('.caption, .check-item, .check-icon');
        
        // Remove animations
        captions.forEach(el => {
            el.style.animation = 'none';
            el.offsetHeight; // Trigger reflow
        });
        
        // Re-add animations after a brief delay
        setTimeout(() => {
            captions.forEach(el => {
                el.style.animation = '';
            });
        }, 50);
    }
    
});

// =========================================
// Utility Functions
// =========================================

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
