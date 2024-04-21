const menuToggle = document.querySelector(".menu-toogle input");
const nav = document.querySelector("nav ul");

menuToggle.addEventListener("click", mobileMenu);

function mobileMenu() {
  nav.classList.toggle("slide");
  menuToggle.classList.toggle("slide");
}