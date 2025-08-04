document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent default anchor click behavior

        const targetId = this.getAttribute('href'); // Get the href attribute (e.g., "#about")
        const targetElement = document.querySelector(targetId); // Find the element

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - document.querySelector('header').offsetHeight, // Adjust for fixed header height
                behavior: 'smooth' // Smooth scroll effect
            });
        }
    });
});

// Optional: Basic form submission feedback (client-side only)
document.querySelector('.contact-form')?.addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent actual form submission

    alert('Thank you for your message! We will get back to you shortly.');
    this.reset(); // Clear the form
});