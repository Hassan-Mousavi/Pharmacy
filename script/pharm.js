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
  if (curSlide === maxSlides - 5) {
    curSlide = 0;
  } else {
    curSlide++;
  }
  goToSlide(curSlide);
};
const prevSlide = function () {
  if (curSlide === 0) {
    curSlide = maxSlides - 5;
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

// new Slider
const slides_1 = document.querySelectorAll(".slide_1");
slides_1.forEach((s, i) => (s.style.transform = `translateX(${100 * i}%)`));
const btnRight_1 = document.querySelector(".slider_btn--right");
const btnLeft_1 = document.querySelector(".slider_btn--left");
const maxSlides_1 = slides_1.length;
const goToSlide_1 = function (slide) {
  slides_1.forEach(
    (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
  );
};
// next slide new
const nextSlide_1 = function () {
  if (curSlide === maxSlides_1 - 5) {
    curSlide = 0;
  } else {
    curSlide++;
  }
  goToSlide_1(curSlide);
};
const prevSlide_1 = function () {
  if (curSlide === 0) {
    curSlide = maxSlides_1 - 5;
  } else {
    curSlide--;
  }
  goToSlide_1(curSlide);
};
// clear codeing
const init_1 = function () {
  goToSlide_1(0);
};
// EventHandlers new
btnRight_1.addEventListener("click", nextSlide_1);
btnLeft_1.addEventListener("click", prevSlide_1);
