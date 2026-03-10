const isMobile = window.innerWidth < 640;
document.querySelectorAll(".animate-on-scroll").forEach(el => {
  if (isMobile) el.classList.add("slide-top");
  else el.classList.add("slide-left");
});