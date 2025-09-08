(async () => {
  try {
    const container = document.getElementById('site-header');
    if (!container) return;
    const resp = await fetch('./partials/header.html');
    if (!resp.ok) return console.warn('header not found:', resp.status);
    container.innerHTML = await resp.text();

    // mobile toggle
    const nav = container.querySelector('#navbar');
    const toggle = container.querySelector('.navbar-toggle');
    const menu = container.querySelector('.navbar-menu');
    if (toggle && nav) {
      toggle.addEventListener('click', () => {
        const open = nav.classList.toggle('open');
        toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
        document.body.style.overflow = open ? 'hidden' : '';
      });
      // close when clicking a link
      menu.querySelectorAll('a').forEach((a) => {
        a.addEventListener('click', () => {
          if (nav.classList.contains('open')) {
            nav.classList.remove('open');
            toggle.setAttribute('aria-expanded', 'false');
            document.body.style.overflow = '';
          }
        });
      });
    }

    // mark active link by pathname (includes menu links and icon links)
    const path = location.pathname.replace(/\/$/, '') || './index.html';
    const anchors = container.querySelectorAll('a[href]');
    anchors.forEach((a) => {
      const href = a.getAttribute('href');
      if (!href) return;
      // resolve href to absolute pathname to compare reliably
      const resolver = document.createElement('a');
      resolver.href = href;
      const hrefPath = resolver.pathname.replace(/\/$/, '') || './index.html';
      if (hrefPath === path || (path === '/index.html' && hrefPath === './')) {
        a.classList.add('active');
      } else {
        a.classList.remove('active');
      }
    });
  } catch (err) {
    console.warn('Error loading header:', err);
  }
})();
