// Wait until the DOM content is fully loaded
document.addEventListener("DOMContentLoaded", () => {
    // Define all sections and menu links
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-menu a");
  
    // Function to highlight the active link
    function highlightNav() {
      let scrollY = window.scrollY;
  
      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 100; // Offset for better accuracy
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute("id");
  
        // Check if current scroll position is within the section
        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
          navLinks.forEach((link) => {
            link.classList.remove("active"); // Remove active class from all links
            if (link.getAttribute("href").includes(sectionId)) {
              link.classList.add("active"); // Add active class to current section's link
            }
          });
        }
      });
    }
  
    // Attach the function to the window scroll event
    window.addEventListener("scroll", highlightNav);
  });
  


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent the default anchor behavior
        
        // Get the target section
        const target = document.querySelector(this.getAttribute('href'));

        // Scroll smoothly to the target section
        target.scrollIntoView({
            behavior: 'smooth', // Smooth scrolling behavior
            block: 'start',     // Align to the top of the section
            inline: 'nearest'   // Align horizontally if necessary
        });
    });
});