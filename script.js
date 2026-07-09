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
  if (scrollTopBtn) {
    scrollTopBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  }

  /* 6. Recruiter Interface Field Toggling Logic */
  const recruiterToggle = document.getElementById('recruiterToggle');
  const recruiterFields = document.getElementById('recruiterFields');
  const recruiterCompany = document.getElementById('recruiterCompany');
  const opportunityType = document.getElementById('opportunityType');

  if (recruiterToggle && recruiterFields) {
    recruiterToggle.addEventListener('change', () => {
      if (recruiterToggle.checked) {
        recruiterFields.classList.add('expanded');
      } else {
        recruiterFields.classList.remove('expanded');
        // Clear internal selections on close
        if (recruiterCompany) recruiterCompany.value = '';
        if (opportunityType) opportunityType.selectedIndex = 0;
      }
    });
  }

  /* 7. Advanced Contact Form Submission Handler (Formspree Integration) */
  const contactForm = document.getElementById('contactForm');
  const formStatus = document.getElementById('formStatus');
  const sendBtn = document.getElementById('sendEmailBtn');

  if (contactForm) {
    contactForm.addEventListener('submit', async (event) => {
      event.preventDefault(); // Stop native post redirect reload
      
      const formData = new FormData(contactForm);
      
      // Update Button state to pending
      if (sendBtn) {
        sendBtn.disabled = true;
        sendBtn.textContent = 'Sending Message...';
      }
      
      if (formStatus) {
        formStatus.className = 'form-status-msg';
        formStatus.style.display = 'none';
      }

      try {
        const response = await fetch(contactForm.action, {
          method: contactForm.method,
          body: formData,
          headers: {
            'Accept': 'application/json'
          }
        });

        if (response.ok) {
          // Success Path execution
          contactForm.reset();
          if (recruiterFields) recruiterFields.classList.remove('expanded');
          
          if (formStatus) {
            formStatus.textContent = 'Thank you! Your message has been sent successfully.';
            formStatus.classList.add('success');
          }
        } else {
          // Failure Path data mapping response
          const responseData = await response.json();
          if (formStatus) {
            formStatus.textContent = responseData.errors 
              ? responseData.errors.map(err => err.message).join(', ') 
              : 'Oops! There was a problem submitting your form. Please try again.';
            formStatus.classList.add('error');
          }
        }
      } catch (error) {
        // Network connection error fallback
        if (formStatus) {
          formStatus.textContent = 'Network connection failed. Please check your internet line and retry.';
          formStatus.classList.add('error');
        }
      } finally {
        // Restore controls functionality state
        if (sendBtn) {
          sendBtn.disabled = false;
          sendBtn.textContent = 'Send Message';
        }
      }
    });
  }
});
