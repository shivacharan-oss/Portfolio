const menuButton = document.querySelector('.menu');
const nav = document.querySelector('#nav');
menuButton.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
});
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.setAttribute('aria-label', 'Open navigation');
}));
document.querySelector('#copy-email').addEventListener('click', async () => {
  const feedback = document.querySelector('#feedback');
  try {
    await navigator.clipboard.writeText('bshivacharan63@gmail.com');
    feedback.textContent = 'Email address copied.';
  } catch {
    feedback.textContent = 'Email: bshivacharan63@gmail.com';
  }
});
