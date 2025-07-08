document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.querySelector('.menu-toggle');
  const navMenu = document.getElementById('nav-menu');

  // Toggle mobile menu on icon click
  menuToggle?.addEventListener('click', () => {
    navMenu?.classList.toggle('show');
  });

  // Close menu when any nav link is clicked
  const navLinks = navMenu?.querySelectorAll('a') || [];
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('show');
    });
  });
});
