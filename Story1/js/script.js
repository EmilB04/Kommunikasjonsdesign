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

// Video play overlay functionality
const videoContainers = document.querySelectorAll('.video-container');
videoContainers.forEach(container => {
    const video = container.querySelector('video');
    const playOverlay = container.querySelector('.play-overlay');
    
    if (video && playOverlay) {
        // Hide overlay when video plays
        video.addEventListener('play', () => {
            playOverlay.style.display = 'none';
        });
        
        // Show overlay when video pauses or ends
        video.addEventListener('pause', () => {
            playOverlay.style.display = 'flex';
        });
        
        video.addEventListener('ended', () => {
            playOverlay.style.display = 'flex';
        });
        
        // Click overlay to play video
        playOverlay.addEventListener('click', () => {
            video.play();
        });
    }
});
