document.addEventListener('DOMContentLoaded', () => {
  const animateEls = document.querySelectorAll('.animate-in');

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.05, rootMargin: '0px 0px -30px 0px' }
  );

  animateEls.forEach((el) => observer.observe(el));

  // Scroll spy for nav
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav__link[href^="#"]');

  function updateActiveNav() {
    const scrollY = window.scrollY + 120;

    let currentId = '';
    sections.forEach((section) => {
      if (section.offsetTop <= scrollY) {
        currentId = section.id;
      }
    });

    navLinks.forEach((link) => {
      link.classList.toggle('active', link.getAttribute('href') === `#${currentId}`);
    });
  }

  window.addEventListener('scroll', updateActiveNav, { passive: true });
  updateActiveNav();

  // Mobile nav toggle
  const mobileToggle = document.querySelector('.nav__mobile-toggle');
  const navLinksContainer = document.querySelector('.nav__links');

  if (mobileToggle && navLinksContainer) {
    mobileToggle.addEventListener('click', () => {
      const isOpen = navLinksContainer.classList.toggle('open');
      mobileToggle.setAttribute('aria-expanded', String(isOpen));
    });

    navLinksContainer.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        navLinksContainer.classList.remove('open');
        mobileToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }
});
