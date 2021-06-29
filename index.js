const slides = document.getElementsByClassName("carousel-item");
let slidePosition = 0;
const totalSlides = slides.length;

// document
//   .getElementById("carousel-button-prev")
//   .addEventListener("click", moveToPrevSlide);

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
  if (slidePosition === totalSlides - 1) {
    slidePosition = 0;
  } else {
    slidePosition++;
  }

  //   slidePosition === totalSlides - 1 ? (slidePosition = 0) : slidePosition++;
  slides[slidePosition].classList.add(
    "carousel-item-visible"
  ); /*make current slide visible*/
}

// function moveToPrevSlide() {
//   hideAllSlides();
//   slidePosition === 0 ? (slidePosition = totalSlides - 1) : slidePosition--;
//   slides[slidePosition].classList.add("carousel-item-visible");
// }
