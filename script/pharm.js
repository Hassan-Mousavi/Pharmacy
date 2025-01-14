// slider
const slides = document.querySelectorAll(".slide");
slides.forEach((s, i) => (s.style.transform = `translateX(${100 * i}%)`));
const btnRight = document.querySelector(".slider__btn--right");
const btnLeft = document.querySelector(".slider__btn--left");
let curSlide = 0;
const maxSlides = slides.length;
const goToSlide = function (slide) {
  slides.forEach(
    (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
  );
};

// next slide
const nextSlide = function () {
  if (curSlide === maxSlides - 6) {
    curSlide = 0;
  } else {
    curSlide++;
  }
  goToSlide(curSlide);
};
const prevSlide = function () {
  if (curSlide === 0) {
    curSlide = maxSlides - 6;
  } else {
    curSlide--;
  }
  goToSlide(curSlide);
};
// clear codeing
const init = function () {
  goToSlide(0);
};

// EventHandlers
btnRight.addEventListener("click", nextSlide);
btnLeft.addEventListener("click", prevSlide);

document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowLeft") prevSlide();
  e.key === "ArrowRight" && nextSlide();
});
