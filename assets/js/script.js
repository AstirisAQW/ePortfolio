// Wait until the DOM content is fully loaded
document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".nav-menu a");

  function highlightNav() {
    let scrollY = window.scrollY;

    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 100;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute("id");

      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        navLinks.forEach((link) => {
          link.classList.remove("active");
          if (link.getAttribute("href").includes(sectionId)) {
            link.classList.add("active");
          }
        });
      }
    });
  }

  // Throttle scroll event
  let lastThrottle = 0;
  window.addEventListener("scroll", () => {
    const now = Date.now();
    if (now - lastThrottle >= 100) {
      highlightNav();
      lastThrottle = now;
    }
  });
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const target = document.querySelector(this.getAttribute('href'));

        target.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
            inline: 'nearest'
        });
    });
});

document.addEventListener("DOMContentLoaded", () => {
  const burgerMenu = document.querySelector(".burger-menu");
  const navMenu = document.querySelector(".nav-menu");

  burgerMenu.addEventListener("click", () => {
      navMenu.classList.toggle("active");
  });

  // Close the menu when a link is clicked
  document.querySelectorAll(".nav-menu a").forEach(link => {
      link.addEventListener("click", () => {
          navMenu.classList.remove("active");
      });
  });
});

