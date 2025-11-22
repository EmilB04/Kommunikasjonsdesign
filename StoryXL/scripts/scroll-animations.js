/**
 * Scroll animations + visible section navigation dots
 */

document.addEventListener('DOMContentLoaded', () => {
    // ===== Reveal Animation =====
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
    };

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    const sections = document.querySelectorAll('section');
    sections.forEach((section) => revealObserver.observe(section));

    // ===== Smooth Anchor Scroll =====
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const href = this.getAttribute('href');
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        });
    });

    // ===== Header Parallax Effect =====
    const header = document.querySelector('header');
    if (header) {
        const maxScroll = 800;
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            if (scrolled <= maxScroll) {
                const rate = scrolled * 0.6;
                header.style.transform = `translate3d(0, ${rate}px, 0)`;
            }
        });
    }

    // ===== Navigation Dots =====
    const dots = document.querySelectorAll('#scroll-nav li');
    const sectionRefs = Array.from(dots).map(dot => {
        const id = dot.dataset.section;
        return id === 'header' ? document.getElementById('header') : document.getElementById(id);
    }).filter(section => section !== null);

    // Click on dot → Scroll to heading (h1 or h2) within the section
    dots.forEach(dot => {
        dot.addEventListener('click', () => {
            const id = dot.dataset.section;

            // If it's the header (first dot), scroll to top
            if (id === 'header') {
                window.scrollTo({ top: 0, behavior: 'smooth' });
                return;
            }

            // Otherwise, scroll to the section's heading
            const target = document.getElementById(id);
            if (target) {
                const heading = target.querySelector('h1') || target.querySelector('h2');
                const scrollTarget = heading || target;
                scrollTarget.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    // Update active dot based on scroll position (detecting at header/section level)
    function updateActiveDot() {
        const scrollPosition = window.scrollY + 150; // Offset for detection

        let activeSection = null;

        // Find which section is currently active based on scroll position
        for (let i = 0; i < sectionRefs.length; i++) {
            const section = sectionRefs[i];
            const sectionTop = section.offsetTop;

            // Check if we're at or past this section
            if (scrollPosition >= sectionTop - 100) {
                activeSection = section;
            } else {
                // Stop checking once we find a section we haven't reached yet
                break;
            }
        }

        // Update active class on dots
        if (activeSection) {
            const activeSectionId = activeSection.id;
            dots.forEach((dot) => {
                if (dot.dataset.section === activeSectionId) {
                    dot.classList.add('active');
                } else {
                    dot.classList.remove('active');
                }
            });
        }
    }

    // Update on scroll
    let scrollTimeout;
    window.addEventListener('scroll', () => {
        if (scrollTimeout) {
            window.cancelAnimationFrame(scrollTimeout);
        }
        scrollTimeout = window.requestAnimationFrame(updateActiveDot);
    });

    // Initial update
    updateActiveDot();

    // ===== Scroll To Top Button =====
    const scrollButton = document.createElement('button');
    scrollButton.id = 'scrollToTopBtn';
    scrollButton.innerHTML = '<i class="fas fa-arrow-up"></i>';
    scrollButton.setAttribute('aria-label', 'Scroll to top');
    document.body.appendChild(scrollButton);

    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 1000) {
            scrollButton.classList.add('visible');
        } else {
            scrollButton.classList.remove('visible');
        }
    });

    scrollButton.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});

// ===== AI TIMELINE ACTIVATION =====
document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('#ai-timeline .timeline-slide');

    const slideObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        },
        { threshold: 0.4 }
    );

    slides.forEach((slide) => slideObserver.observe(slide));
});