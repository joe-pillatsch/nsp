/* Nashville Sound Panels — page behavior (vanilla JS) */
(function () {
  'use strict';

  // -- Reveal on scroll ------------------------------------------
  // Default: every [data-reveal] is fully visible. On load we mark
  // any element currently BELOW the viewport with .pre-reveal so it
  // animates in as you scroll. Anything already on screen stays put.
  const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const reveals = document.querySelectorAll('[data-reveal]');

  if (!reduceMotion && 'IntersectionObserver' in window) {
    reveals.forEach((el) => {
      const r = el.getBoundingClientRect();
      if (r.top > window.innerHeight * 0.85) el.classList.add('pre-reveal');
    });
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.remove('pre-reveal');
          io.unobserve(e.target);
        }
      });
    }, { rootMargin: '0px 0px -10% 0px', threshold: 0.01 });
    document.querySelectorAll('.pre-reveal').forEach((el) => io.observe(el));
  }

  // -- Gallery controls (cinematic layout only) ------------------
  document.querySelectorAll('.gallery').forEach((gallery) => {
    const strip = gallery.querySelector('[data-strip]');
    const bar = gallery.querySelector('.gallery-progress .bar');
    const prev = gallery.querySelector('[data-dir="prev"]');
    const next = gallery.querySelector('[data-dir="next"]');
    if (!strip) return;

    const updateProgress = () => {
      const max = strip.scrollWidth - strip.clientWidth;
      if (max <= 0) {
        if (bar) { bar.style.width = '100%'; bar.style.left = '0'; }
        return;
      }
      const pct = strip.scrollLeft / max;
      const figs = strip.querySelectorAll('figure').length;
      const segW = Math.max(15, 100 / Math.max(figs, 1));
      const leftPct = pct * (100 - segW);
      if (bar) {
        bar.style.width = segW + '%';
        bar.style.left = leftPct + '%';
      }
    };

    const scrollBy = (dir) => {
      const first = strip.querySelector('figure');
      if (!first) return;
      const step = first.getBoundingClientRect().width + 24; /* gap */
      strip.scrollBy({ left: dir * step, behavior: 'smooth' });
    };

    strip.addEventListener('scroll', () => requestAnimationFrame(updateProgress), { passive: true });
    if (prev) prev.addEventListener('click', () => scrollBy(-1));
    if (next) next.addEventListener('click', () => scrollBy(1));

    // initial
    requestAnimationFrame(updateProgress);
    window.addEventListener('resize', () => requestAnimationFrame(updateProgress));
  });

  // -- Scroll cue (splash) → letter ------------------------------
  const scrollCue = document.querySelector('.scroll-cue');
  if (scrollCue) {
    scrollCue.style.cursor = 'pointer';
    scrollCue.addEventListener('click', () => {
      const letter = document.querySelector('.letter');
      if (letter) window.scrollTo({ top: letter.offsetTop - 20, behavior: 'smooth' });
    });
  }
})();
