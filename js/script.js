document.addEventListener('headerAndFooterLoaded', function () {
  (function () {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const links = document.querySelectorAll('.nav-links li');
    const overlay = document.querySelector('.overlay');
    const ctaButton = document.querySelector('.cta-button');
    const formModal = document.getElementById('form-modal');
    const closeModal = document.querySelector('.close');
    const form = document.querySelector('.quote-form-pop-up');
    const mainContent = document.querySelector('main');
    const thankYouModal = document.getElementById('thank-you-modal');
    
    let overlayActive = false;
    
    function toggleMenu() {
      hamburger.classList.toggle('active');
      navLinks.classList.toggle('nav-active');
      overlay.classList.toggle('active');
      overlayActive = !overlayActive;
      
      if (overlayActive) {
        document.addEventListener('click', outsideClickListener);
      } else {
        document.removeEventListener('click', outsideClickListener);
      }
      
      links.forEach((link, index) => {
        if (link.style.animation) {
          link.style.animation = '';
        } else {
          link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
        }
      });
    }

    function outsideClickListener(event) {
      if (!navLinks.contains(event.target) && event.target !== hamburger) {
        toggleMenu();
      }
    }

    hamburger.addEventListener('click', toggleMenu);

    overlay.addEventListener('click', (event) => {
      if (!navLinks.contains(event.target)) {
        toggleMenu();
      }
    });

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

    window.addEventListener('click', (event) => {
      if (event.target === thankYouModal) {
        thankYouModal.style.display = 'none';
      }
    });

    hamburger.addEventListener('click', () => {
      mainContent.classList.toggle('blurry-background');
      navLinks.classList.toggle('bigger-font');
      overlayActive = !overlayActive;
    });

    window.addEventListener('resize', () => {
      if (window.innerWidth > 700 && !overlayActive) {
        mainContent.classList.remove('blurry-background');
        navLinks.classList.remove('bigger-font');
      }
    });

    function showThankYouModal(formToSubmit) {
  thankYouModal.style.display = 'block';
  const closeModal = thankYouModal.querySelector('.close');
  closeModal.onclick = () => {
    thankYouModal.style.display = 'none';
  };
  // Submit the form after showing the thank you modal
  formToSubmit.submit();
}

if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault(); // prevent default form submission behavior

    formModal.style.display = 'none';
    showThankYouModal(form);
  });
}

const otherForms = document.querySelectorAll('.show-thank-you');
otherForms.forEach((otherForm) => {
  otherForm.addEventListener('submit', (e) => {
    e.preventDefault(); // prevent default form submission behavior
    showThankYouModal(otherForm);
  });
});

  })();
});
