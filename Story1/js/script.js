// Back to top button functionality
const backToTopButton = document.getElementById("backToTop");

// Show/hide button based on scroll position
window.addEventListener("scroll", () => {
    if (window.pageYOffset > 400) {
        backToTopButton.classList.add("show");
    } else {
        backToTopButton.classList.remove("show");
    }
});

// Smooth scroll to top when clicked
backToTopButton.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
});

// Scroll indicator animation
const scrollIndicator = document.querySelector(".scroll-indicator");
if (scrollIndicator) {
    window.addEventListener("scroll", () => {
        if (window.pageYOffset > 200) {
            scrollIndicator.style.opacity = "0";
        } else {
            scrollIndicator.style.opacity = "1";
        }
    });
}
