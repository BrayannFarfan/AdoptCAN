window.addEventListener('scroll', function () {
  const navbar = document.querySelector('.header');
  navbar.classList.toggle('abajo', window.scrollY > 0);
})


