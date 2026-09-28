(() => {
  const menuBtn = document.getElementById('menuBtn');
  const mobileNav = document.getElementById('mobileNav');

  if (menuBtn && mobileNav) {
    menuBtn.addEventListener('click', () => {
      const open = mobileNav.classList.toggle('open');
      menuBtn.setAttribute('aria-expanded', String(open));
      menuBtn.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    });
    mobileNav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
      mobileNav.classList.remove('open');
      menuBtn.setAttribute('aria-expanded', 'false');
    }));
  }

  document.querySelectorAll('.faq-item').forEach(item => {
    const btn = item.querySelector('.faq-q');
    btn.addEventListener('click', () => {
      const isOpen = item.classList.toggle('open');
      btn.setAttribute('aria-expanded', String(isOpen));
    });
  });

  const cards = [...document.querySelectorAll('.review-card')];
  const dotsWrap = document.getElementById('reviewDots');
  let active = 0;

  function showReview(index) {
    active = (index + cards.length) % cards.length;
    cards.forEach((card, i) => card.classList.toggle('active', i === active));
    [...dotsWrap.children].forEach((dot, i) => dot.classList.toggle('active', i === active));
  }

  cards.forEach((_, i) => {
    const dot = document.createElement('button');
    dot.className = 'review-dot' + (i === 0 ? ' active' : '');
    dot.setAttribute('aria-label', `Show review ${i + 1}`);
    dot.addEventListener('click', () => showReview(i));
    dotsWrap.appendChild(dot);
  });

  document.getElementById('reviewPrev')?.addEventListener('click', () => showReview(active - 1));
  document.getElementById('reviewNext')?.addEventListener('click', () => showReview(active + 1));

  let touchStart = 0;
  const track = document.getElementById('reviewTrack');
  track?.addEventListener('touchstart', e => touchStart = e.changedTouches[0].clientX, {passive:true});
  track?.addEventListener('touchend', e => {
    const diff = e.changedTouches[0].clientX - touchStart;
    if (Math.abs(diff) > 45) showReview(active + (diff < 0 ? 1 : -1));
  }, {passive:true});
})();
