document.addEventListener('headerAndFooterLoaded', function () {
  (function () {
    const mainContent = document.querySelector('main');

// Hamburger Menu start
const hamburgerMenu = document.querySelector('.hamburger-menu');
const mobileNav = document.querySelector('.nav-mobile');

hamburgerMenu.addEventListener('click', () => {
  // Toggle the mobile navigation and overlay
  mobileNav.classList.toggle('active');
  document.body.classList.toggle('overlay-active');
});

mobileNav.addEventListener('click', (event) => {
  // Close the mobile navigation when a link is clicked
  if (event.target.tagName === 'A') {
    mobileNav.classList.remove('active');
    document.body.classList.remove('overlay-active');
  }
});
// Hamburger END
  })();
});