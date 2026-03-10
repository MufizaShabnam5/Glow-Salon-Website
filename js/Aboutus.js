const body = document.body;
const themeToggle = document.getElementById("themeToggle");

// Load saved theme
window.onload = function () {
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme === "dark") {
    body.classList.add("dark");
    body.classList.remove("light");
    themeToggle.textContent = "☀️";
  } else {
    body.classList.add("light");
    body.classList.remove("dark");
    themeToggle.textContent = "🌙";
  }

  revealOnScroll();
};

// Toggle theme
themeToggle.addEventListener("click", () => {
  body.classList.toggle("dark");
  body.classList.toggle("light");

  if (body.classList.contains("dark")) {
    themeToggle.textContent = "☀️";
    localStorage.setItem("theme", "dark");
  } else {
    themeToggle.textContent = "🌙";
    localStorage.setItem("theme", "light");
  }
});

// Scroll Reveal
function revealOnScroll() {
  const reveals = document.querySelectorAll(
    ".reveal-left, .reveal-right, .reveal-bottom, .reveal-all"
  );

  const windowHeight = window.innerHeight;

  reveals.forEach((el) => {
    const elementTop = el.getBoundingClientRect().top;
    if (elementTop < windowHeight - 100) {
      el.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);




const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
}, { threshold: 0.2 });

document.querySelectorAll('.fade-left, .fade-right, .fade-top, .fade-bottom')
.forEach(el => observer.observe(el));
