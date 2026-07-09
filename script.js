document.addEventListener('DOMContentLoaded', () => {

  /* 1. Theme toggle */
  const themeToggle = document.getElementById('themeToggle');
  const body = document.body;
  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  if (prefersDark) body.setAttribute('data-theme', 'dark');

  themeToggle.addEventListener('click', () => {
    const next = body.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    body.setAttribute('data-theme', next);
  });

  /* 2. Animated snapshot counters */
  const counters = document.querySelectorAll('[data-count]');
  const animateCounter = (el) => {
    const target = parseInt(el.getAttribute('data-count'), 10);
    const suffix = el.getAttribute('data-suffix') || '';
    const duration = 1300;
    const start = performance.now();
    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.round(eased * target) + suffix;
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  };
  const heroObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        counters.forEach(animateCounter);
        heroObserver.disconnect();
      }
    });
  }, { threshold: 0.3 });
  const heroSection = document.getElementById('hero');
  if (heroSection) heroObserver.observe(heroSection);

  /* 3. Scroll-reveal sections */
  const revealTargets = document.querySelectorAll('.section');
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -60px 0px' });
  revealTargets.forEach(el => revealObserver.observe(el));

  /* 4. Highlight active nav tab on scroll */
  const navLinks = document.querySelectorAll('.topnav a');
  const navMap = new Map();
  navLinks.forEach(link => navMap.set(link.getAttribute('data-target'), link));
  const navObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      const link = navMap.get(entry.target.id);
      if (!link) return;
      if (entry.isIntersecting) {
        navLinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
      }
    });
  }, { threshold: 0.5, rootMargin: '-20% 0px -50% 0px' });
  revealTargets.forEach(el => { if (navMap.has(el.id)) navObserver.observe(el); });

  /* 5. Back to top */
  const scrollTopBtn = document.getElementById('scrollTopBtn');
  scrollTopBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

  /* 6. Recruiter fields toggle */
  const recruiterCheck = document.getElementById('recruiterCheck');
  const recruiterFields = document.getElementById('recruiterFields');
  if (recruiterCheck && recruiterFields) {
    recruiterCheck.addEventListener('change', () => {
      recruiterFields.hidden = !recruiterCheck.checked;
    });
  }

  /* 7. Contact form -> Formspree (submits via fetch so the page never leaves) */
  const contactForm = document.getElementById('contactForm');
  const formStatus = document.getElementById('formStatus');
  if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const submitBtn = document.getElementById('sendEmailBtn');
      const formData = new FormData(contactForm);

      if (contactForm.action.includes('YOUR_FORM_ID')) {
        formStatus.textContent = 'Form is not connected yet — set your Formspree endpoint in index.html.';
        formStatus.className = 'form-status error';
        return;
      }

      submitBtn.disabled = true;
      formStatus.textContent = 'Sending…';
      formStatus.className = 'form-status';

      try {
        const response = await fetch(contactForm.action, {
          method: 'POST',
          body: formData,
          headers: { 'Accept': 'application/json' }
        });
        if (response.ok) {
          formStatus.textContent = 'Message sent — thanks for reaching out! I\'ll reply by email soon.';
          formStatus.className = 'form-status success';
          contactForm.reset();
          if (recruiterFields) recruiterFields.hidden = true;
        } else {
          formStatus.textContent = 'Something went wrong sending that. Please try again or email directly.';
          formStatus.className = 'form-status error';
        }
      } catch (err) {
        formStatus.textContent = 'Network error — please try again or email directly.';
        formStatus.className = 'form-status error';
      } finally {
        submitBtn.disabled = false;
      }
    });
  }
});
