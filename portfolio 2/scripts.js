let currentIndex = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-item');
    const totalSlides = slides.length;

    if (index >= totalSlides) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = totalSlides - 1;
    } else {
        currentIndex = index;
    }

    const newTransformValue = translateX(-${currentIndex * 100}%);
    document.querySelector('.carousel-inner').style.transform = newTransformValue;
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

function prevSlide() {
    showSlide(currentIndex - 1);
}

setInterval(nextSlide, 3000);  // Change slide every 3 seconds

// Optional: Pause auto-play on mouse hover
document.querySelector('.carousel').addEventListener('mouseover', () => {
    clearInterval(autoPlay);
});

document.querySelector('.carousel').addEventListener('mouseout', () => {
    autoPlay = setInterval(nextSlide, 3000);
});

let autoPlay = setInterval(nextSlide, 3000);