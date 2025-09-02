(async () => {
  try {
    const container = document.getElementById('site-footer');
    if (!container) return;
    const resp = await fetch('/partials/footer.html');
    if (!resp.ok) {
      console.warn('footer not found:', resp.status);
      return;
    }
    container.innerHTML = await resp.text();
    const yearEl = container.querySelector('#year');
    if (yearEl) yearEl.textContent = new Date().getFullYear();
  } catch (err) {
    console.warn('Error loading footer:', err);
  }
})();