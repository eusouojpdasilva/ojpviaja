const phone = "5561981784728"; // WhatsApp comercial confirmado no cérebro em 05/11/2026.
const messages = {diagnostico:"#diagnóstico de vendas\nOlá, vi o site O JP Viaja e quero meu diagnóstico gratuito.",geral:"#diagnóstico de vendas\nOlá, conheci O JP Viaja pelo site e gostaria de conversar.",assessoria:"#diagnóstico de vendas\nOlá, vi a Assessoria Mensal no site e quero saber se faz sentido para mim.",estrutura:"#diagnóstico de vendas\nOlá, vi a Estrutura Reservas no site e quero entender como fica na prática.",consultoria:"#diagnóstico de vendas\nOlá, vi a Consultoria Efeito Reservas no site e quero saber mais.",roteiros:"Olá, vi o Roteiros Infinitos no site e quero saber mais.",hangar:"Olá, vi o Hangar no site e gostaria de entrar na lista de espera."};
document.querySelectorAll('[data-wa]').forEach(a=>{a.href='https://wa.me/'+phone+'?text='+encodeURIComponent(messages[a.dataset.wa]);a.target='_blank';a.rel='noopener noreferrer';});

// A página continua legível se estas melhorias não forem suportadas.
(() => {
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
  const progress = document.querySelector('.reading-progress span');
  const art = document.querySelector('.hero-art');
  let ticking = false;
  function updateScroll() {
    const max = document.documentElement.scrollHeight - innerHeight;
    if (progress) progress.style.transform = `scaleX(${max > 0 ? Math.min(1, Math.max(0, scrollY / max)) : 0})`;
    if (art && !reduced.matches) {
      const rect = art.getBoundingClientRect();
      const amount = Math.max(-1, Math.min(1, (innerHeight / 2 - (rect.top + rect.height / 2)) / innerHeight));
      art.style.setProperty('--orbit-turn', `${amount * 9}deg`);
      art.style.setProperty('--art-shift', `${amount * -12}px`);
    }
    ticking = false;
  }
  addEventListener('scroll', () => { if (!ticking) { ticking = true; requestAnimationFrame(updateScroll); } }, {passive:true});
  addEventListener('resize', updateScroll, {passive:true});
  updateScroll();
  if (reduced.matches || !('IntersectionObserver' in window) || !Element.prototype.animate) return;
  document.documentElement.classList.add('motion-ready');
  const groups = document.querySelectorAll('.hero .eyebrow, .hero h1, .hero-copy, .hero .actions, .hero .audience, .hero-art, .section-head, .pain-grid article, .closing, .solution, .self-grid article, .steps li, .tags, .number-grid > div, .about-grid > div, .cta-inner > *');
  const reveal = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const siblings = el.parentElement ? [...el.parentElement.children] : [];
      const delay = Math.min(siblings.indexOf(el), 3) * 75;
      el.animate([{opacity:0, transform:'translateY(22px)'},{opacity:1, transform:'translateY(0)'}], {duration:650, delay, easing:'cubic-bezier(.22,1,.36,1)', fill:'backwards'});
      observer.unobserve(el);
    });
  }, {threshold:0.12, rootMargin:'0px 0px -35px 0px'});
  groups.forEach(el => reveal.observe(el));
  const stepObserver = new IntersectionObserver(entries => entries.forEach(entry => entry.target.classList.toggle('is-current', entry.isIntersecting)), {threshold:0.55});
  document.querySelectorAll('.steps li').forEach(el => stepObserver.observe(el));
})();

const tickerButton = document.querySelector('.ticker-toggle');
if (tickerButton) tickerButton.addEventListener('click', () => {
  const paused = tickerButton.parentElement.classList.toggle('is-paused');
  tickerButton.setAttribute('aria-pressed', String(paused));
  tickerButton.setAttribute('aria-label', paused ? 'Retomar movimento da faixa' : 'Pausar movimento da faixa');
  tickerButton.textContent = paused ? '▶' : 'Ⅱ';
});

