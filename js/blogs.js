
const body = document.body;
const themeToggle = document.getElementById("themeToggle");

// ================= LOAD SAVED THEME =================
window.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme === "dark") {
    body.classList.add("dark");
    themeToggle.textContent = "☀️";
  } else {
    body.classList.add("light");
    themeToggle.textContent = "🌙";
  }

  revealOnScroll();
});

// ================= TOGGLE THEME =================
themeToggle.addEventListener("click", () => {

  if (body.classList.contains("dark")) {
    body.classList.remove("dark");
    body.classList.add("light");
    themeToggle.textContent = "🌙";
    localStorage.setItem("theme", "light");
  } else {
    body.classList.remove("light");
    body.classList.add("dark");
    themeToggle.textContent = "☀️";
    localStorage.setItem("theme", "dark");
  }

});

// ================= SCROLL REVEAL =================
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

// ================= MODAL =================
const readMoreBtns = document.querySelectorAll(".read-more-btn");
const modal = document.getElementById("modal");
const modalText = document.getElementById("modal-text");
const closeBtn = document.querySelector(".close-btn");

const blogContents = [
  "Latest Hair Trends 2026: From sleek bobs to bold balayage, discover the hairstyles that will dominate this year.",
  "Top Skincare Tips: Maintain radiant skin with expert routines and professional treatments.",
  "Relaxation Techniques: Reduce stress with massage, aromatherapy, and spa rituals."
];

readMoreBtns.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    modalText.innerHTML = blogContents[index];
    modal.style.display = "flex";
  });
});

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});