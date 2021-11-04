window.addEventListener('scroll', function () {
  const navbar = document.querySelector('.header');
  navbar.classList.toggle('abajo', window.scrollY > 0);
})


const navToggle = document.querySelector(".nav-toggle")
const navMenu = document.querySelector(".nav-menu")

navToggle.addEventListener("click", function () {
  navMenu.classList.toggle("nav-menu_visible")

  // if (navMenu.classList.contains("nav-menu_visible")) {
  //   navToggle.setAttribute("aria-label", "cerrar menu")
  // } else {
  //   navToggle.setAttribute("aria-label", "abrir menu")
  // }
})