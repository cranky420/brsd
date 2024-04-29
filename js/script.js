// scripts.js

document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.getElementById('dark-mode');
    const stylesheet = document.getElementById('stylesheet');
    const toggleContainer = document.getElementById('toggle-container');
    
    // Position toggle button at top right corner
    toggleContainer.style.position = 'fixed';
    toggleContainer.style.top = '10px';
    toggleContainer.style.right = '10px';
    
    toggleButton.addEventListener('click', function() {
        // Toggle between light and dark mode
        if (stylesheet.getAttribute('href') === 'css/style.css') {
            stylesheet.setAttribute('href', 'css/style-dark.css');
        } else {
            stylesheet.setAttribute('href', 'css/style.css');
        }
    });
});
