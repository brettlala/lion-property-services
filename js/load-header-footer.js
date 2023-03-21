function loadHeaderAndFooter() {
  const headerElement = document.querySelector('#header-placeholder');
  const footerElement = document.querySelector('#footer-placeholder');

  Promise.all([
    fetch('header.html').then((response) => response.text()),
    fetch('footer.html').then((response) => response.text()),
  ]).then(([headerHTML, footerHTML]) => {
    headerElement.innerHTML = headerHTML;
    footerElement.innerHTML = footerHTML;

    // Dispatch a custom event to signal that the header and footer are loaded
    const event = new Event('headerAndFooterLoaded');
    document.dispatchEvent(event);
  });
}

loadHeaderAndFooter();
