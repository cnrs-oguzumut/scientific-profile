/**
 * UI Enhancements: Back to top button and scroll effects
 */

document.addEventListener('DOMContentLoaded', () => {
    initBackToTopButton();
    initSmoothScrolling();
    initMobileOptimizations();
});

/**
 * Initialize the back to top button
 */
function initBackToTopButton() {
    const backToTopButton = document.getElementById('backToTop');

    if (!backToTopButton) return;

    // Show/hide button based on scroll position
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            backToTopButton.classList.add('visible');
        } else {
            backToTopButton.classList.remove('visible');
        }
    });

    // Scroll to top when clicked
    backToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

/**
 * Initialize smooth scrolling for in-page navigation
 */
function initSmoothScrolling() {
    // Smooth scroll for all anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

/**
 * Add scroll-based animations (optional enhancement)
 */
function initScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    // Observe all cards and sections
    document.querySelectorAll('.p-4, .p-6').forEach(el => {
        observer.observe(el);
    });
}

/**
 * Mobile-specific optimizations
 */
function initMobileOptimizations() {
    // Detect if user is on mobile
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

    if (isMobile) {
        // Prevent zoom on double-tap for buttons
        document.querySelectorAll('button, .tab-button').forEach(button => {
            button.addEventListener('touchstart', function(e) {
                // Prevent double-tap zoom on buttons
                const now = Date.now();
                const lastTap = this.getAttribute('data-last-tap') || 0;

                if (now - lastTap < 300) {
                    e.preventDefault();
                }

                this.setAttribute('data-last-tap', now);
            });
        });

        // Add touch feedback for interactive elements
        document.querySelectorAll('a, button').forEach(el => {
            el.addEventListener('touchstart', function() {
                this.style.opacity = '0.7';
            });

            el.addEventListener('touchend', function() {
                setTimeout(() => {
                    this.style.opacity = '1';
                }, 150);
            });
        });

        // Optimize scroll performance on mobile
        let scrollTimeout;
        window.addEventListener('scroll', function() {
            document.body.classList.add('is-scrolling');

            clearTimeout(scrollTimeout);
            scrollTimeout = setTimeout(function() {
                document.body.classList.remove('is-scrolling');
            }, 100);
        }, { passive: true });

        // Add orientation change handler
        window.addEventListener('orientationchange', function() {
            // Refresh layout after orientation change
            setTimeout(() => {
                window.scrollTo(0, window.scrollY + 1);
                window.scrollTo(0, window.scrollY - 1);
            }, 100);
        });
    }

    // Improve touch scrolling on iOS
    if (/iPad|iPhone|iPod/.test(navigator.userAgent)) {
        document.body.style.webkitOverflowScrolling = 'touch';
    }

    // Add safe area support for notched devices
    if (CSS.supports('padding-top: env(safe-area-inset-top)')) {
        document.documentElement.style.setProperty('--safe-area-top', 'env(safe-area-inset-top)');
        document.documentElement.style.setProperty('--safe-area-bottom', 'env(safe-area-inset-bottom)');
    }
}
