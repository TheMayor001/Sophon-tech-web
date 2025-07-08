document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.querySelector('.menu-toggle');
  const navMenu = document.getElementById('nav-menu');
  const navLinks = navMenu?.querySelectorAll('a') || [];
  const sections = document.querySelectorAll("section[id]");

  // Toggle mobile menu
  menuToggle?.addEventListener('click', () => {
    navMenu?.classList.toggle('show');
  });

  // Close menu on link click
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navMenu?.classList.remove('show');
    });
  });

  // Highlight active link on scroll
  window.addEventListener('scroll', () => {
    let current = "";

    sections.forEach(section => {
      const sectionTop = section.offsetTop - 120;
      const sectionHeight = section.offsetHeight;
      if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach(link => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("active");
      }
    });
  });
});
