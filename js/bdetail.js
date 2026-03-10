// Select all floating images and text blocks
const parallaxImages = document.querySelectorAll(
  '.haircare-images img, .skincare-images img, .wellness-images img'
);

const revealElements = document.querySelectorAll(
  '.haircare-text, .skincare-text, .wellness-text, .haircare-images img, .skincare-images img, .wellness-images img'
);

// ================= Scroll-triggered reveal animations =================
const observerOptions = { threshold: 0.1 };

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active'); // triggers your CSS reveal animations
      // Optional: keep observing for parallax only if needed
      // observer.unobserve(entry.target);
    }
  });
}, observerOptions);

revealElements.forEach(el => observer.observe(el));

// ================= Parallax effect for floating images =================
window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;

  parallaxImages.forEach((img, index) => {
    // Different speeds per image for layered depth
    const speed = 0.2 + index * 0.1; // e.g., 0.2, 0.3, 0.4
    img.style.transform = `translateY(${scrollY * speed}px)`;
  });
});

// ================= Responsive adjustment for iPhone SE / small screens =================
function adjustParallaxForMobile() {
  const screenWidth = window.innerWidth;

  parallaxImages.forEach((img, index) => {
    if (screenWidth < 640) {
      // Reduce movement for small screens
      const speed = 0.1 + index * 0.05;
      img.style.transform = `translateY(${window.scrollY * speed}px)`;
    }
  });
}

window.addEventListener('resize', adjustParallaxForMobile);
window.addEventListener('scroll', adjustParallaxForMobile);