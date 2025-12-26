/**
 * Tab navigation functionality
 * Handles switching between different content sections
 */

document.addEventListener('DOMContentLoaded', () => {
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');

    /**
     * Display the selected tab and hide others
     * @param {string} selectedId - The ID of the tab button that was clicked
     */
    function showTab(selectedId) {
        // Hide all content sections
        tabContents.forEach(content => {
            content.classList.add('hidden');
        });

        // Reset all button styles
        tabButtons.forEach(button => {
            button.classList.remove('bg-blue-500', 'text-white');
            button.classList.add('bg-gray-200', 'text-gray-800');
            button.setAttribute('aria-selected', 'false');
        });

        // Extract the content ID from button ID (e.g., 'tab-research' -> 'content-research')
        const contentId = `content-${selectedId.split('-')[1]}`;
        const selectedContent = document.getElementById(contentId);
        const selectedButton = document.getElementById(selectedId);

        // Show selected content
        if (selectedContent) {
            selectedContent.classList.remove('hidden');
        }

        // Update selected button style
        if (selectedButton) {
            selectedButton.classList.remove('bg-gray-200', 'text-gray-800');
            selectedButton.classList.add('bg-blue-500', 'text-white');
            selectedButton.setAttribute('aria-selected', 'true');
        }
    }

    // Add click event listeners to all tab buttons
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            showTab(button.id);
        });
    });

    // Show the default tab (Research) on page load
    showTab('tab-research');
});
