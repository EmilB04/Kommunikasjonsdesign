// Back to top button functionality (copied/adapted from Story1/js/script.js)
document.addEventListener('DOMContentLoaded', () => {
    const backToTopButton = document.getElementById('backToTop');
    if (!backToTopButton) return;

    // Show/hide button based on scroll position
    // The button may have inline `display:none` in the HTML; toggle display directly so it becomes visible.
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 400) {
            backToTopButton.style.display = 'block';
            backToTopButton.classList.add('show');
        } else {
            backToTopButton.style.display = 'none';
            backToTopButton.classList.remove('show');
        }
    });

    // Smooth scroll to top when clicked
    backToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});
