document.addEventListener('headerAndFooterLoaded', function () {
  (function () {
    const ctaButton = document.querySelector('.cta-button');
    const formModal = document.getElementById('form-modal');
    const closeModal = document.querySelector('.close');
    const form = document.querySelector('.quote-form-pop-up');
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

    if (ctaButton) {
      ctaButton.addEventListener('click', (e) => {
        e.preventDefault();
        formModal.style.display = 'block';
      });
    }

    if (closeModal) {
      closeModal.addEventListener('click', () => {
        formModal.style.display = 'none';
      });
    }

    window.addEventListener('click', (event) => {
      if (event.target === formModal) {
        formModal.style.display = 'none';
      }
    });

    if (form) {
      form.addEventListener('submit', (e) => {
        e.preventDefault(); // prevent default form submission behavior

        formModal.style.display = 'none';
        showThankYouModal();
      });
    }
  })();
});
