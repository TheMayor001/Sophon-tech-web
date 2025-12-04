// Minimal JS: responsive nav, sticky header effects, back-to-top
document.addEventListener("DOMContentLoaded", function () {
  const nav = document.getElementById("primary-nav");
  const toggle = document.getElementById("nav-toggle");
  const header = document.getElementById("site-header");
  const back = document.getElementById("back-to-top");

  // Mobile nav toggle
  toggle.addEventListener("click", () => {
    const expanded = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", expanded ? "true" : "false");
    if (expanded) {
      nav.style.display = "flex";
      nav.style.flexDirection = "column";
      nav.style.gap = "12px";
      nav.style.position = "absolute";
      nav.style.right = "16px";
      nav.style.top = "64px";
      nav.style.background = "white";
      nav.style.padding = "12px";
      nav.style.borderRadius = "8px";
      nav.style.boxShadow = "0 10px 30px rgba(2,6,23,0.08)";
    } else {
      nav.style.display = "";
      nav.style.position = "";
      nav.style.top = "";
      nav.style.right = "";
      nav.style.background = "";
      nav.style.padding = "";
      nav.style.boxShadow = "";
      nav.style.flexDirection = "";
      nav.style.gap = "";
    }
  });

  // Close mobile nav on click outside or on link click
  document.addEventListener("click", (e) => {
    if (
      !nav.contains(e.target) &&
      !toggle.contains(e.target) &&
      nav.classList.contains("open")
    ) {
      nav.classList.remove("open");
      nav.style.display = "";
    }
  });

  // Sticky header background change on scroll
  const headerObserver = () => {
    if (window.scrollY > 40) {
      header.classList.add("scrolled");
      header.style.background =
        "linear-gradient(180deg, rgba(255,255,255,0.95), rgba(255,255,255,0.9))";
      header.style.boxShadow = "0 8px 24px rgba(2,6,23,0.06)";
    } else {
      header.classList.remove("scrolled");
      header.style.background = "";
      header.style.boxShadow = "";
    }

    // Back to top visibility
    if (window.scrollY > 400) {
      back.style.display = "flex";
    } else {
      back.style.display = "none";
    }
  };

  window.addEventListener("scroll", headerObserver);
  headerObserver();

  // Smooth anchor scrolling for internal links
  document.querySelectorAll('a[href^="#"]').forEach((a) => {
    a.addEventListener("click", (e) => {
      const target = document.querySelector(a.getAttribute("href"));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
        // close mobile nav after navigating
        if (nav.classList.contains("open")) {
          nav.classList.remove("open");
          nav.style.display = "";
        }
      }
    });
  });

  // Back to top action
  back.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // Accessibility: close nav with Escape
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && nav.classList.contains("open")) {
      nav.classList.remove("open");
      nav.style.display = "";
    }
  });
});
// --- ACTIVE SECTION TRACKER ---
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll("#primary-nav a[href^='#']");

function activateMenu() {
  let scrollPos = window.scrollY + window.innerHeight / 3;

  sections.forEach((section) => {
    const top = section.offsetTop;
    const height = section.offsetHeight;
    const id = section.getAttribute("id");

    if (scrollPos >= top - 50 && scrollPos < top + height - 50) {
      navLinks.forEach((link) => link.classList.remove("active"));
      const activeLink = document.querySelector(
        `#primary-nav a[href="#${id}"]`
      );
      if (activeLink) activeLink.classList.add("active");
    }
  });
}

window.addEventListener("scroll", activateMenu);
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("quoteForm");
  const status = document.getElementById("form-status");
  
  if (!form) return;

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const formData = new FormData(form);

    const response = await fetch(form.action, {
      method: form.method,
      body: formData,
      headers: { Accept: "application/json" }
    });

    if (response.ok) {
      status.textContent = "Thank you! We’ll contact you shortly.";
      status.style.display = "block";
      status.style.color = "green";
      form.reset();
    } else {
      status.textContent = "Something went wrong. Please try again.";
      status.style.display = "block";
      status.style.color = "red";
    }
  });
});
