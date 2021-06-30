const slides = document.getElementsByClassName("carousel-item");
let slidePosition = 0;
const totalSlides = slides.length;
const slider = document.getElementById("range-slider");
const output = document.getElementById("image-value");

const slideInterval = setInterval(moveToNextSlide, 4000);

outputValueVisibilityToggle();

document
  .getElementById("carousel-button-prev")
  .addEventListener("click", moveToPrevSlide);

document
  .getElementById("carousel-button-next")
  .addEventListener("click", moveToNextSlide);

function hideAllSlides() {
  for (let slide of slides) {
    slide.classList.remove("carousel-item-visible");
    slide.classList.add("carousel-item-hidden");
  }
}

function moveToNextSlide() {
  hideAllSlides();
  slidePosition === totalSlides - 1
    ? ((slidePosition = 0), (slider.value = 1))
    : (slidePosition++, slider.value++);
  outputValueVisibilityToggle();
}

function moveToPrevSlide() {
  hideAllSlides();
  slidePosition === 0
    ? ((slidePosition = totalSlides - 1), (slider.value = totalSlides))
    : (slidePosition--, slider.value--);
  outputValueVisibilityToggle();
}

function outputValueVisibilityToggle() {
  output.textContent = slider.value;
  slides[slidePosition].classList.add("carousel-item-visible");
}
