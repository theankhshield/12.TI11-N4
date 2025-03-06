document.addEventListener("DOMContentLoaded", function () {
    // Carousel functionality
    const carousels_container = document.querySelectorAll('.carousel-container');
    carousels_container.forEach(carousels_container => {
        const carousel = carousels_container.querySelector('.carousel');
        const prevButton = carousels_container.querySelector('.prev');
        const nextButton = carousels_container.querySelector('.next');
        let currentIndex = 0;

        function updateCarousel() {
            const cardWidth = carousel.querySelector('.card').offsetWidth;
            const newTransform = -currentIndex * (cardWidth + 20); // Adjust for margin
            carousel.style.transform = `translateX(${newTransform}px)`;
        }

        prevButton.addEventListener('click', () => {
            if (currentIndex > 0) {
                currentIndex--;
                updateCarousel();
            }
        });

        nextButton.addEventListener('click', () => {
            const cardWidth = carousel.querySelector('.card').offsetWidth;
            const cardCount = Math.floor(carousel.offsetWidth / cardWidth);
            if (currentIndex < carousel.children.length - cardCount) {
                currentIndex++;
                updateCarousel();
            }
        });
    });
});