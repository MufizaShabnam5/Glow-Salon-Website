document.addEventListener("DOMContentLoaded", function () {

   
    const reveals = document.querySelectorAll(
        ".reveal-up, .reveal-down, .reveal-left, .reveal-right"
    );

    function revealOnScroll() {
        reveals.forEach(el => {
            const windowHeight = window.innerHeight;
            const elementTop = el.getBoundingClientRect().top;

            if (elementTop < windowHeight - 100) {
                el.classList.add("reveal-active");
            }
        });
    }

    window.addEventListener("scroll", revealOnScroll);
    window.addEventListener("load", revealOnScroll);
    revealOnScroll();

   
    const hamburger = document.getElementById("hamburger");
    const navLinks = document.getElementById("navLinks");
    const themeToggle = document.getElementById("themeToggle");

    if (hamburger && navLinks) {
        hamburger.addEventListener("click", function () {
            navLinks.classList.toggle("active");
            hamburger.textContent =
                navLinks.classList.contains("active") ? "✖" : "☰";
        });

        document.querySelectorAll(".nav-links a").forEach(link => {
            link.addEventListener("click", () => {
                navLinks.classList.remove("active");
                hamburger.textContent = "☰";
            });
        });
    }

    
    if (themeToggle) {
        themeToggle.addEventListener("click", function () {
            document.body.classList.toggle("dark");
            themeToggle.textContent =
                document.body.classList.contains("dark") ? "☀" : "🌙";
        });
    }

});