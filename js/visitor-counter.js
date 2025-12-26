// Global Visitor Counter
(function() {
    'use strict';

    // Configuration
    const NAMESPACE = 'cnrs-oguzumut-scientific-profile';
    const KEY = 'page_visits';
    const API_URL = `https://api.countapi.xyz/hit/${NAMESPACE}/${KEY}`;
    const FALLBACK_API_URL = 'https://api.counterapi.dev/v1/cnrs-oguzumut-profile/visits/up';

    const VISITED_KEY = 'hasVisitedToday';
    const LAST_VISIT_KEY = 'lastVisitDate';

    function initVisitorCounter() {
        const today = new Date().toDateString();
        const lastVisit = localStorage.getItem(LAST_VISIT_KEY);
        const hasVisitedToday = localStorage.getItem(VISITED_KEY) === 'true' && lastVisit === today;

        if (hasVisitedToday) {
            // Just fetch the count without incrementing
            fetchCount();
        } else {
            // Increment the global counter
            incrementAndFetchCount(today);
        }
    }

    function incrementAndFetchCount(today) {
        // Try primary API first
        fetch(API_URL)
            .then(response => {
                if (!response.ok) throw new Error('Primary API failed');
                return response.json();
            })
            .then(data => {
                updateVisitorDisplay(data.value);
                markVisitedToday(today);
            })
            .catch(error => {
                console.log('Primary API failed, trying fallback...');
                // Try fallback API
                fetch(FALLBACK_API_URL, { method: 'POST' })
                    .then(response => {
                        if (!response.ok) throw new Error('Fallback API failed');
                        return response.json();
                    })
                    .then(data => {
                        const count = data.count || data.value || 0;
                        updateVisitorDisplay(count);
                        markVisitedToday(today);
                    })
                    .catch(fallbackError => {
                        console.error('All APIs failed:', fallbackError);
                        // Use localStorage as last resort
                        useLocalStorageFallback();
                    });
            });
    }

    function fetchCount() {
        // Just get the count without incrementing
        const GET_URL = `https://api.countapi.xyz/get/${NAMESPACE}/${KEY}`;

        fetch(GET_URL)
            .then(response => {
                if (!response.ok) throw new Error('Failed to fetch count');
                return response.json();
            })
            .then(data => {
                updateVisitorDisplay(data.value);
            })
            .catch(error => {
                console.error('Failed to fetch count:', error);
                // Show cached count or fallback
                useLocalStorageFallback();
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
