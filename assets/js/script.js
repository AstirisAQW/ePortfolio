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