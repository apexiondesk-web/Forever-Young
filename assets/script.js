(() => {
  const body = document.body;
  const header = document.querySelector('.site-header');
  const menuBtn = document.getElementById('menuBtn');
  const mobileNav = document.getElementById('mobileNav');

  const onScroll = () => header?.classList.toggle('scrolled', window.scrollY > 8);
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  if (menuBtn && mobileNav) {
    menuBtn.addEventListener('click', () => {
      const isOpen = mobileNav.classList.toggle('open');
      body.classList.toggle('menu-open', isOpen);
      menuBtn.setAttribute('aria-expanded', String(isOpen));
      menuBtn.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
    });

    mobileNav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
      mobileNav.classList.remove('open');
      body.classList.remove('menu-open');
      menuBtn.setAttribute('aria-expanded', 'false');
      menuBtn.setAttribute('aria-label', 'Open menu');
    }));
  }

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -6% 0px' });

  document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

  document.querySelectorAll('.faq-item').forEach(item => {
    const button = item.querySelector('.faq-q');
    button?.addEventListener('click', () => {
      const open = item.classList.toggle('open');
      button.setAttribute('aria-expanded', String(open));
    });
  });

  const reviewCards = [...document.querySelectorAll('.review-card')];
  const reviewCurrent = document.getElementById('reviewCurrent');
  let reviewIndex = 0;

  const showReview = index => {
    if (!reviewCards.length) return;
    reviewIndex = (index + reviewCards.length) % reviewCards.length;
    reviewCards.forEach((card, i) => card.classList.toggle('active', i === reviewIndex));
    if (reviewCurrent) reviewCurrent.textContent = String(reviewIndex + 1).padStart(2, '0');
  };

  document.getElementById('reviewPrev')?.addEventListener('click', () => showReview(reviewIndex - 1));
  document.getElementById('reviewNext')?.addEventListener('click', () => showReview(reviewIndex + 1));

  const reviewTrack = document.getElementById('reviewTrack');
  let touchX = 0;
  reviewTrack?.addEventListener('touchstart', e => { touchX = e.changedTouches[0].clientX; }, { passive: true });
  reviewTrack?.addEventListener('touchend', e => {
    const diff = e.changedTouches[0].clientX - touchX;
    if (Math.abs(diff) > 45) showReview(reviewIndex + (diff < 0 ? 1 : -1));
  }, { passive: true });

  const parallax = document.querySelector('[data-parallax] img');
  if (parallax && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    let ticking = false;
    const renderParallax = () => {
      const hero = document.querySelector('.hero');
      if (!hero) return;
      const rect = hero.getBoundingClientRect();
      const progress = Math.min(1, Math.max(0, -rect.top / Math.max(1, rect.height)));
      parallax.style.transform = `translate3d(0, ${progress * 28}px, 0) scale(1.02)`;
      ticking = false;
    };
    window.addEventListener('scroll', () => {
      if (!ticking) {
        requestAnimationFrame(renderParallax);
        ticking = true;
      }
    }, { passive: true });
  }
})();
