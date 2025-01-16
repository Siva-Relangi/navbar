document.addEventListener('DOMContentLoaded', () => {
  const navbar = document.querySelector('.navbar');
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  const buttons = document.querySelector('.buttons');

  // Shrink navbar on scroll
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('shrink');
    } else {
      navbar.classList.remove('shrink');
    }
  });

  // Toggle navigation menu on mobile
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    buttons.classList.toggle('active');
  });
});
