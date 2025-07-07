const backToTopBtn = document.getElementById('back-to-top');
const nav = document.getElementById('nav-menu');

function toggleMenu() {
  nav.classList.toggle('show');
}

window.addEventListener('scroll', () => {
  if (window.scrollY > 200) {
    backToTopBtn.style.display = 'block';
  } else {
    backToTopBtn.style.display = 'none';
  }
});
backToTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
