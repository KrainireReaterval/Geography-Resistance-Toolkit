function toggleIssue(id) {
  const item = document.getElementById(id);
  const body = document.getElementById(id + '-body');
  const btn = item.querySelector('.issue-trigger');
  const isOpen = item.classList.contains('open');

  document.querySelectorAll('.issue-item').forEach(el => {
    el.classList.remove('open');
    const b = el.querySelector('.issue-body');
    if (b) b.style.maxHeight = null;
    const trigger = el.querySelector('.issue-trigger');
    if (trigger) trigger.setAttribute('aria-expanded', 'false');
  });

  if (!isOpen) {
    item.classList.add('open');
    body.style.maxHeight = body.scrollHeight + 40 + 'px';
    btn.setAttribute('aria-expanded', 'true');
  }
}

const fadeObserver = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        fadeObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
);

document.querySelectorAll('.fade-in').forEach(el => fadeObserver.observe(el));
