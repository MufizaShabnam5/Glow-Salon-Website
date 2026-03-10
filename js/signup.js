
// ================= Toggle Forms =================
const loginForm = document.querySelector('.login-form');
const signupForm = document.querySelector('.signup-form');
const showSignup = document.getElementById('showSignup');
const showLogin = document.getElementById('showLogin');
const directions = ['slide-left','slide-right','slide-top','slide-bottom'];
let directionIndex = 0;

function switchForm(fromForm, toForm){
  const dir = directions[directionIndex];
  fromForm.classList.remove('active');
  fromForm.classList.add(dir);
  setTimeout(()=>{
    fromForm.classList.remove(...directions);
    toForm.classList.add('active');
  },300);
  directionIndex = (directionIndex+1)%directions.length;
}

showSignup.addEventListener('click',()=>switchForm(loginForm,signupForm));
showLogin.addEventListener('click',()=>switchForm(signupForm,loginForm));

// ================= Password Toggle =================
document.querySelectorAll('.toggle-password').forEach(btn=>{
  btn.addEventListener('click',()=>{
    const input = btn.previousElementSibling;
    input.type = input.type==='password'?'text':'password';
  });
});

// ================= 3D Tilt Effect =================
const card = document.querySelector('.auth-container');
card.addEventListener('mousemove', e=>{
  const rect = card.getBoundingClientRect();
  const x = e.clientX - rect.left - rect.width/2;
  const y = e.clientY - rect.top - rect.height/2;
  card.style.transform = `rotateY(${x/25}deg) rotateX(${-y/25}deg)`;
});
card.addEventListener('mouseleave',()=>{card.style.transform='rotateY(0deg) rotateX(0deg)';});

// ================= PARTICLE BACKGROUND =================
const canvas = document.getElementById('particle-canvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const particles = [];
for(let i=0;i<80;i++){
  particles.push({
    x:Math.random()*canvas.width,
    y:Math.random()*canvas.height,
    r:Math.random()*2+1,
    dx:(Math.random()-0.5)/1.5,
    dy:(Math.random()-0.5)/1.5
  });
}
function animateParticles(){
  ctx.clearRect(0,0,canvas.width,canvas.height);
  particles.forEach(p=>{
    p.x+=p.dx;
    p.y+=p.dy;
    if(p.x>canvas.width)p.x=0;
    if(p.x<0)p.x=canvas.width;
    if(p.y>canvas.height)p.y=0;
    if(p.y<0)p.y=canvas.height;
    ctx.beginPath();
    ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
    ctx.fillStyle='rgba(255,255,255,0.3)';
    ctx.fill();
  });
  requestAnimationFrame(animateParticles);
}
animateParticles();

// ================= Dark/Light Toggle (Optional) =================
document.addEventListener('keydown',e=>{
  if(e.key==='d') document.body.classList.toggle('dark-mode');
});