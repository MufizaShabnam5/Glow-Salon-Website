const body = document.body;
const themeToggle = document.getElementById("themeToggle");
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

body.classList.add("dark");


themeToggle.addEventListener("click", () => {
  body.classList.toggle("dark");
  body.classList.toggle("light");

  themeToggle.textContent =
    body.classList.contains("dark") ? "🌙" : "☀️";
});


hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navLinks.classList.toggle("active");
});


document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
    hamburger.classList.remove("active");
  });
});



window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  navbar.classList.toggle("shrink", window.scrollY > 50);
});




const progressBar = document.createElement("div");
progressBar.classList.add("scroll-progress");
document.body.appendChild(progressBar);


window.addEventListener("scroll", () => {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const scrollPercent = (scrollTop / docHeight) * 100;
  progressBar.style.width = scrollPercent + "%";
});







const canvas = document.getElementById('testimonial-glow-connections');
const ctx = canvas.getContext('2d');

function resizeCanvas() {
  canvas.width = canvas.offsetWidth;
  canvas.height = canvas.offsetHeight;
}
window.addEventListener('resize', resizeCanvas);
resizeCanvas();

const dots = [];
const cards = document.querySelectorAll('.testimonial-card');

function updateDots(){
  dots.length=0;
  const containerRect = canvas.getBoundingClientRect();
  cards.forEach((card, i) => {
    const rect = card.getBoundingClientRect();
    const x = rect.left + rect.width/2 - containerRect.left;
    const y = rect.top + rect.height/2 - containerRect.top;
    dots.push({x,y,offset: Math.random()*100});
  });
}

updateDots();
window.addEventListener('resize', updateDots);

function animate(){
  ctx.clearRect(0,0,canvas.width,canvas.height);
  ctx.lineWidth = 2;
  ctx.strokeStyle = '#ff00cc';
  ctx.shadowBlur = 10;
  ctx.shadowColor = '#ff00cc';
  if(document.body.classList.contains('dark')){
    ctx.strokeStyle = '#00ffff';
    ctx.shadowColor = '#00ffff';
  }
  
  
  for(let i=0;i<dots.length-1;i++){
    const dotA = dots[i];
    const dotB = dots[i+1];
    const cpX = (dotA.x + dotB.x)/2;
    const cpY = dotA.y - 50 * ((i%2)*2-1); 
    ctx.beginPath();
    ctx.moveTo(dotA.x,dotA.y + Math.sin(Date.now()/500 + dotA.offset)*10);
    ctx.quadraticCurveTo(cpX, cpY, dotB.x, dotB.y + Math.sin(Date.now()/500 + dotB.offset)*10);
    ctx.stroke();
  }

 
  dots.forEach(dot=>{
    const yOffset = Math.sin(Date.now()/500 + dot.offset)*10;
    ctx.beginPath();
    ctx.arc(dot.x, dot.y + yOffset,5,0,Math.PI*2);
    ctx.fillStyle = document.body.classList.contains('dark') ? '#00ffff' : '#ff00cc';
    ctx.fill();
  });

  requestAnimationFrame(animate);
}
animate();











document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".glow-testimonials .card");
  const cardsContainer = document.querySelector(".glow-testimonials .cards");

  
  function revealCards() {
    const windowHeight = window.innerHeight;
    cards.forEach(card => {
      const top = card.getBoundingClientRect().top;
      if (top < windowHeight - 100) {
        card.classList.add("active");
      }
    });
  }

  window.addEventListener("scroll", revealCards);
  revealCards();

  
  if (cardsContainer) cardsContainer.classList.add("pulse-line");
});




document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".glow-gallery .gallery-card");

  function revealCards() {
    const windowHeight = window.innerHeight;
    cards.forEach(card => {
      const top = card.getBoundingClientRect().top;
      if(top < windowHeight - 100){
        card.classList.add("active");
      }
    });
  }

  window.addEventListener("scroll", revealCards);
  revealCards();
});














/*document.addEventListener("DOMContentLoaded", function() {

  const cards = document.querySelectorAll(".gallery-card");

  const observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){
        entry.target.classList.add("show");
      }
    });
  }, { threshold: 0.25 });

  cards.forEach(card => observer.observe(card));

});*/



document.addEventListener("DOMContentLoaded", function() {
  const cards = document.querySelectorAll(".gallery-card");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        
        entry.target.classList.add("show");
      } else {
        
        entry.target.classList.remove("show");
      }
    });
  }, { threshold: 0.25 });

  cards.forEach(card => observer.observe(card));
});
