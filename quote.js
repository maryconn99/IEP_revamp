// script.js
document.addEventListener('DOMContentLoaded', function() {
    console.log('JavaScript is linked and running!');
    // Add JS code here
    const toggleButton = document.getElementById('toggleButton');
    const sidebar = document.querySelector('.sidebar');
    const content = document.querySelector('.content');

    toggleButton.addEventListener('click', function() {
        sidebar.classList.toggle('active');
        content.classList.toggle('active');
    });
});
