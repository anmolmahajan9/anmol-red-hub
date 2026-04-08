document.addEventListener('DOMContentLoaded', () => {
    // Add loaded class slightly delayed to ensure fonts and layout render first
    // This provides a buttery smooth fade-in effect on load
    setTimeout(() => {
        document.body.classList.add('loaded');
    }, 100);
});
