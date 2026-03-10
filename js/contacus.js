const body = document.body;
const themeToggle = document.getElementById("themeToggle");


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