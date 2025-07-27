// script.js

document.addEventListener('DOMContentLoaded', () => {
  // === Create Mobile Nav Toggle ===
  const navbar = document.querySelector('.navbar');
  const navLinks = document.querySelector('.nav-links');

  if (navbar && navLinks) {
    const toggleBtn = document.createElement('button');
    toggleBtn.classList.add('nav-toggle');
    toggleBtn.setAttribute('aria-label', 'Toggle navigation');
    toggleBtn.innerText = '☰';
    navbar.prepend(toggleBtn);

    toggleBtn.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });
  }

  // === Smooth Scrolling for Internal Links ===
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // === Contact Form Validation ===
  const contactForm = document.querySelector('.contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      const name = contactForm.querySelector('input[type="text"]');
      const email = contactForm.querySelector('input[type="email"]');
      const message = contactForm.querySelector('textarea');

      if (!name.value.trim() || !email.value.trim() || !message.value.trim()) {
        alert('Please fill in all fields!');
        e.preventDefault();
      }
    });
  }

  // === Scroll-to-Top Button ===
  const scrollBtn = document.createElement('button');
  scrollBtn.innerText = '↑';
  scrollBtn.classList.add('scroll-top');
  scrollBtn.setAttribute('aria-label', 'Scroll to top');
  scrollBtn.style.display = 'none';
  document.body.appendChild(scrollBtn);

  window.addEventListener('scroll', () => {
    scrollBtn.style.display = window.scrollY > 300 ? 'block' : 'none';
  });

  scrollBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});
