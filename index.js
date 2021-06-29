const slides = document.getElementsByClassName("carousel-item");
let slide = 0;

const totalSlides = slides.length;
const buttonPrev = document.getElementById("#carousel-button-prev");
const buttonNext = document.getElementById("#carousel-button-next");

buttonPrev.addEventListener("click", moveToPrevSlide);

buttonNext.addEventListener("click", moveToNextSlide);

function moveToNextSlide() {}

function moveToPrevSlide() {}
