const slides = document.getElementsByClassName("carousel-item");
let slidePosition = 0;
const totalSlides = slides.length;

document
  .getElementById("carousel-button-prev")
  .addEventListener("click", moveToPrevSlide);

document
  .getElementById("carousel-button-next")
  .addEventListener("click", moveToNextSlide);

function moveToNextSlide() {
  slidePosition === totalSlides - 1 ? (slidePosition = 0) : slidePosition++;
  slides[slidePosition].classList.add(
    "carousel-item-visible"
  ); /*make current slide visible*/
}

function moveToPrevSlide() {}
