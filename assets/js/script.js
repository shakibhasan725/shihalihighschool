const sliderContainer = document.querySelector(".slider-container");
const images = document.querySelectorAll(".slider-container img");

let currentIndex = 0;

function slideNext() {
    currentIndex = (currentIndex + 1) % images.length;
    updateSlider();
}

function slidePrev() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateSlider();
}

function updateSlider() {
    const offset = -currentIndex * 100;
    sliderContainer.style.transform = `translateX(${offset}%)`;
}

document.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft") {
        slidePrev();
    } else if (event.key === "ArrowRight") {
        slideNext();
    }
});

setInterval(slideNext, 4000); // Auto slide every 5 seconds

// Initial slide
updateSlider();
