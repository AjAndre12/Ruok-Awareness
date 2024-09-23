document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for nav links and buttons
    const links = document.querySelectorAll('nav ul li a, .btn');

    links.forEach(link => {
        link.addEventListener('click', function(e) {
            if (this.getAttribute('href').startsWith("#")) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));

                // Scroll animation with smooth behavior
                window.scrollTo({
                    top: target.offsetTop - 20, // Adjusts a little bit above the section
                    behavior: 'smooth' // Enables smooth scrolling animation
                });
            }
        });
    });

    // Bounce effect on "Learn More" button
    const learnMoreBtn = document.querySelector('.btn');

    learnMoreBtn.addEventListener('click', function() {
        this.classList.add('bounce');
        setTimeout(() => {
            this.classList.remove('bounce');
        }, 500); // Duration of the bounce effect
    });
});
