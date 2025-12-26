// Global Visitor Counter using hits.sh
(function() {
    'use strict';

    // Configuration - Using hits.sh (simple, reliable, free service)
    const COUNTER_URL = 'https://hits.sh/cnrs-oguzumut.github.io/scientific-profile.svg';
    const COUNT_API_URL = 'https://hits.sh/cnrs-oguzumut.github.io/scientific-profile/count.json';

    const VISITED_KEY = 'hasVisitedToday';
    const LAST_VISIT_KEY = 'lastVisitDate';

    function initVisitorCounter() {
        const today = new Date().toDateString();
        const lastVisit = localStorage.getItem(LAST_VISIT_KEY);
        const hasVisitedToday = localStorage.getItem(VISITED_KEY) === 'true' && lastVisit === today;

        // Always fetch and display the count
        // If not visited today, the fetch itself will increment the counter
        fetchAndIncrementCount(today, hasVisitedToday);
    }

    function fetchAndIncrementCount(today, hasVisited) {
        // Fetch the counter (this will auto-increment on first visit)
        fetch(COUNT_API_URL, {
            method: 'GET',
            cache: 'no-store'
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                const count = data.total || data.count || 0;
                console.log('Global visitor count:', count);
                updateVisitorDisplay(count);

                if (!hasVisited) {
                    markVisitedToday(today);
                }
            })
            .catch(error => {
                console.error('Failed to fetch counter:', error);
                // Try alternative method: load the SVG badge
                tryImageCounter(today, hasVisited);
            });
    }

    function tryImageCounter(today, hasVisited) {
        // Create a hidden image that loads the counter
        // This will increment the count automatically
        const img = new Image();
        img.style.display = 'none';

        img.onload = function() {
            // Successfully loaded - mark as visited
            if (!hasVisited) {
                markVisitedToday(today);
            }
            // Try to fetch count again after a brief delay
            setTimeout(() => {
                fetchCountOnly();
            }, 1000);
        };

        img.onerror = function() {
            console.error('Image counter failed, using localStorage fallback');
            useLocalStorageFallback();
        };

        // Add cache buster to ensure fresh count
        img.src = COUNTER_URL + '?nocache=' + Date.now();
        document.body.appendChild(img);

        // Clean up after loading
        setTimeout(() => {
            if (img.parentNode) {
                img.parentNode.removeChild(img);
            }
        }, 5000);
    }

    function fetchCountOnly() {
        fetch(COUNT_API_URL, {
            method: 'GET',
            cache: 'no-store'
        })
            .then(response => response.json())
            .then(data => {
                const count = data.total || data.count || 0;
                updateVisitorDisplay(count);
            })
            .catch(error => {
                console.error('Failed to fetch count:', error);
                const cached = localStorage.getItem('cachedVisitorCount');
                if (cached) {
                    updateVisitorDisplay(parseInt(cached));
                } else {
                    useLocalStorageFallback();
                }
            });
    }

    function markVisitedToday(today) {
        localStorage.setItem(VISITED_KEY, 'true');
        localStorage.setItem(LAST_VISIT_KEY, today);
    }

    function useLocalStorageFallback() {
        let count = parseInt(localStorage.getItem('fallbackVisitorCount')) || 0;
        const lastVisit = localStorage.getItem(LAST_VISIT_KEY);
        const today = new Date().toDateString();

        if (lastVisit !== today) {
            count++;
            localStorage.setItem('fallbackVisitorCount', count);
            markVisitedToday(today);
        }

        updateVisitorDisplay(count);
    }

    function updateVisitorDisplay(count) {
        const counterElement = document.getElementById('visitorCount');
        if (counterElement) {
            // Store in localStorage for caching
            localStorage.setItem('cachedVisitorCount', count);
            // Animate the number
            animateValue(counterElement, 0, count, 1000);
        }
    }

    function animateValue(element, start, end, duration) {
        const range = end - start;
        const increment = range / (duration / 16); // 60 FPS
        let current = start;

        const timer = setInterval(() => {
            current += increment;
            if ((increment > 0 && current >= end) || (increment < 0 && current <= end)) {
                current = end;
                clearInterval(timer);
            }
            element.textContent = Math.floor(current).toLocaleString();
        }, 16);
    }

    // Initialize on page load
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initVisitorCounter);
    } else {
        initVisitorCounter();
    }
})();
