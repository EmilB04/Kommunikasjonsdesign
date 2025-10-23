// Scroll to Top Button Functionality

// Create and add the button to the page
const scrollButton = document.createElement('button');
scrollButton.id = 'scrollToTopBtn';
scrollButton.innerHTML = '<i class="fas fa-arrow-up"></i>';
scrollButton.setAttribute('aria-label', 'Scroll to top');
document.body.appendChild(scrollButton);

// Show/hide button based on scroll position
window.addEventListener('scroll', () => {
    if (window.pageYOffset > 2800) {
        scrollButton.classList.add('visible');
    } else {
        scrollButton.classList.remove('visible');
    }
});

// Scroll to top when button is clicked
scrollButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
