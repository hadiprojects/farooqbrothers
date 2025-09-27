// Smooth scroll for CTA buttons
document.querySelectorAll(".cta").forEach(btn => {
  btn.addEventListener("click", () => {
    const targetId = btn.getAttribute("data-scroll");
    document.getElementById(targetId).scrollIntoView({ behavior: "smooth" });
  });
});

// Mobile menu toggle
const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("nav ul");

menuToggle.addEventListener("click", () => {
  nav.classList.toggle("active");
});
