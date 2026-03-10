document.body.classList.add("light");

const themeToggle=document.getElementById("themeToggle");
const body=document.body;

themeToggle.addEventListener("click",()=>{
body.classList.toggle("dark");
body.classList.toggle("light");
localStorage.setItem("theme",body.classList.contains("dark")?"dark":"light");
});

if(localStorage.getItem("theme")){
body.classList.remove("light","dark");
body.classList.add(localStorage.getItem("theme"));
}

/* Mobile Sidebar */






/* ===================== */
/* PREMIUM GRAPH SECTION */
/* ===================== */

function createCharts() {

  const isDark = document.body.classList.contains("dark");

  const primaryColor = isDark ? "#AFCBFF" : "#E91E63";
  const gradientColor = isDark
    ? "rgba(39, 76, 119, 0.4)"
    : "rgba(233, 30, 99, 0.3)";

  /* Revenue Line Chart */
  const ctx1 = document.getElementById("revenueChart");
  if (ctx1) {
    new Chart(ctx1, {
      type: "line",
      data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
        datasets: [{
          label: "Revenue",
          data: [4000, 6500, 5000, 8000, 7500, 9000],
          borderColor: primaryColor,
          backgroundColor: gradientColor,
          fill: true,
          tension: 0.4,
          pointRadius: 5,
          pointBackgroundColor: primaryColor
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: { display: false }
        },
        scales: {
          x: { ticks: { color: primaryColor } },
          y: { ticks: { color: primaryColor } }
        }
      }
    });
  }/*

  /* Appointments Bar Chart */
  const ctx2 = document.getElementById("appointmentChart");
  if (ctx2) {
    new Chart(ctx2, {
      type: "bar",
      data: {
        labels: ["Facial", "Hair", "Nails", "Makeup", "Spa"],
        datasets: [{
          label: "Bookings",
          data: [32, 45, 28, 20, 38],
          backgroundColor: primaryColor,
          borderRadius: 10
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: { display: false }
        },
        scales: {
          x: { ticks: { color: primaryColor } },
          y: { ticks: { color: primaryColor } }
        }
      }
    });
  }
}

/* Run Charts After Page Load */
window.addEventListener("load", createCharts);





/* ===== MOBILE SIDEBAR FIX (iPhone Working) ===== */

document.addEventListener("DOMContentLoaded", function () {

  const hamburger = document.getElementById("hamburger");
  const sidebar = document.getElementById("sidebar");
  const overlay = document.getElementById("overlay");
  const closeBtn = document.getElementById("closeBtn");

  if (!hamburger || !sidebar || !overlay || !closeBtn) {
    console.log("Sidebar elements missing");
    return;
  }

  function openSidebar() {
    sidebar.classList.add("active");
    overlay.classList.add("active");
    document.body.style.overflow = "hidden";
  }

  function closeSidebar() {
    sidebar.classList.remove("active");
    overlay.classList.remove("active");
    document.body.style.overflow = "";
  }

  hamburger.addEventListener("click", function (e) {
    e.stopPropagation();
    if (window.innerWidth <= 639) {
      openSidebar();
    }
  });

  closeBtn.addEventListener("click", closeSidebar);
  overlay.addEventListener("click", closeSidebar);

});


const hamburger=document.getElementById("hamburger");
const sidebar=document.getElementById("sidebar");
const overlay=document.getElementById("overlay");
const closeBtn=document.getElementById("closeBtn");

hamburger.addEventListener("click",()=>{
if(window.innerWidth<640){
sidebar.classList.add("active");
overlay.classList.add("active");
}
});

closeBtn.addEventListener("click",()=>{
sidebar.classList.remove("active");
overlay.classList.remove("active");
});

overlay.addEventListener("click",()=>{
sidebar.classList.remove("active");
overlay.classList.remove("active");
});