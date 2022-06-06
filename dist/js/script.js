// Navbar fixed
window.onscroll = function () {
  const header = document.querySelector('header');
  const fixNav = header.offsetTop;

  if (window.pageYOffset > fixNav) {
    header.classList.add('navbar-fixed');
  } else {
    header.classList.remove('navbar-fixed');
  }
};

// Hamburger
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', function () {
  hamburger.classList.toggle('hamburger-active');
  navMenu.classList.toggle('hidden');
});

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2000,
  delay: 200,
  // reset: true,
});

sr.reveal('.profile, .desc-skills,.desc-portfolio,.desc-clients, .desc-contact', {});
sr.reveal('.desc-hero', {
  delay: 400,
});
sr.reveal('.desc-about', {
  delay: 800,
});
sr.reveal('.icons, .client', { interval: 200 });
sr.reveal('.card, .skills, .form-contact', { interval: 200 });
