
const reveals = document.querySelectorAll(".membership-card, .membership-title");

window.addEventListener("scroll", () => {
  reveals.forEach((el) => {
    const windowHeight = window.innerHeight;
    const elementTop = el.getBoundingClientRect().top;
    const revealPoint = 100;

    if (elementTop < windowHeight - revealPoint) {
      el.classList.add("active");
      el.classList.add("reveal");
    }
  });
});





document.querySelectorAll(".membership-card").forEach(card => {
  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / 15) * -1;
    const rotateY = (x - centerX) / 15;

    card.style.transform = 
      `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.07)`;
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "rotateX(0) rotateY(0) scale(1)";
  });
});

