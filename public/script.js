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

    // 3. Spotlight Cursor Tracking
    const appLinks = document.querySelectorAll('.app-link');
    appLinks.forEach(link => {
        link.addEventListener('mousemove', (e) => {
            const rect = link.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            link.style.setProperty('--mouse-x', `${x}px`);
            link.style.setProperty('--mouse-y', `${y}px`);
        });
    });

    // 4. Magnetic Links
    const magneticLinks = document.querySelectorAll('.social-links a');
    magneticLinks.forEach(link => {
        link.addEventListener('mousemove', (e) => {
            const rect = link.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;
            
            // Calculate distance from center
            const x = e.clientX - centerX;
            const y = e.clientY - centerY;
            
            // Move link text towards the cursor using a 0.4 attraction factor
            link.style.transform = `translate(${x * 0.4}px, ${y * 0.4}px)`;
        });
        
        link.addEventListener('mouseleave', () => {
            // Snap back to origin
            link.style.transform = `translate(0px, 0px)`;
        });
    });

});
