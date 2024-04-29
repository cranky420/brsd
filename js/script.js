// scripts.js

document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.getElementById('toggle-mode');
    const stylesheet = document.getElementById('stylesheet');
    
    toggleButton.addEventListener('click', function() {
        // Toggle between light and dark mode
        if (stylesheet.getAttribute('href') === 'css/style.css') {
            stylesheet.setAttribute('href', 'css/style-dark.css');
        } else {
            stylesheet.setAttribute('href', 'css/style.css');
        }
    });
});
