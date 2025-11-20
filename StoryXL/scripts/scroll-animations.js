/**
 * Apple-inspired Scroll Animations
 * Handles reveal animations and smooth scroll effects
 */

// Intersection Observer for scroll reveal animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe all sections
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        observer.observe(section);
    });
    
    // Add smooth scroll behavior
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Add parallax effect to header on scroll (stops at max height)
    const header = document.getElementsByTagName('header')[0];
    if (header) {
        const maxScroll = 800; // Maximum scroll distance before stopping (in pixels)
        
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            
            // Stop the effect after reaching maxScroll
            if (scrolled <= maxScroll) {
                const rate = scrolled * 0.6;
                header.style.transform = `translate3d(0, ${rate}px, 0)`;
            } 
        });
    }
});
