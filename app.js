document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('section');

    // Smooth scrolling to sections
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const target = document.querySelector(this.getAttribute('href'));
            target.scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Lazy load images
    const lazyLoad = target => {
        const io = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    const src = img.getAttribute('data-src');
                    img.setAttribute('src', src);
                    observer.disconnect();
                }
            });
        });

        io.observe(target);
    };

    const images = document.querySelectorAll('img[data-src]');
    images.forEach(lazyLoad);

    // Modal for Sign In
    const signInModal = document.querySelector('.btn.btn-red-sm');
    const modal = document.querySelector('.modal');
    const closeButton = document.querySelector('.close');

    signInModal.addEventListener('click', function () {
        modal.style.display = 'block';
    });

    closeButton.addEventListener('click', function () {
        modal.style.display = 'none';
    });

    // Carousel for Featured Content
    let slideIndex = 0;

    function showSlides() {
        const slides = document.querySelectorAll('.carousel-slide');
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = 'none';
        }
        slideIndex++;
        if (slideIndex > slides.length) {
            slideIndex = 1;
        }
        slides[slideIndex - 1].style.display = 'block';
        setTimeout(showSlides, 2000); // Change slide every 2 seconds
    }

    showSlides();

    // Dynamic Content Loading
    window.addEventListener('scroll', function () {
        if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
            // Load more content here
            console.log('Loading more content...');
        }
    });
});
