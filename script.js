document.addEventListener('DOMContentLoaded', () => {
    // 1. Initial Page Fade-in
    setTimeout(() => {
        document.body.classList.add('loaded');
    }, 100);

    // 2. Scroll Reveal: Intersection Observer
    const revealOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // stop observing once it's visible? usually better for performance
                revealObserver.unobserve(entry.target); 
            }
        });
    }, revealOptions);

    const revealElements = document.querySelectorAll('.reveal, .reveal-stagger');
    revealElements.forEach(el => revealObserver.observe(el));

});
