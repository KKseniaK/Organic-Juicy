const menuIcon = document.querySelector('.menu-icon');
const header = document.querySelector('header');


menuIcon.addEventListener('click', () => {
  menuIcon.classList.toggle('menu-icon--active');

  header.classList.toggle('header--mobile');
});

// sliderArrows
const sliderArrows = document.querySelector('.slider-arrows');
const slidesArrows = document.querySelectorAll('.slider-arrows__item');
const prev = sliderArrows.querySelector('.slider-arrows__nav-arrow-left');
const next = sliderArrows.querySelector('.slider-arrows__nav-arrow-right');

let slideIndex = 0

prev.addEventListener('click', () => {showSlideArrows(-1)});
next.addEventListener('click', () => {showSlideArrows(+1)});

function showSlideArrows(n) {
  slideIndex += n;

  if (slideIndex < 0) {
    slideIndex = slidesArrows.length - 1;
  };

  if (slideIndex > slidesArrows.length - 1) {
    slideIndex = 0;
  };

  slidesArrows.forEach(item => item.style.display = "none");
  slidesArrows[slideIndex].style.display = "block";
};
showSlideArrows(0);

// sliderDots
const sliderDots = document.querySelector('.slider-dots');
const slidesDots = document.querySelectorAll('.slider-dots__item');
const wrapperDots = sliderDots.querySelector('.slider-dots__nav');

const dots = [];

for (let i = 0; i < slidesDots.length; i++) {
  const dot = document.createElement('button');
  dot.dataset.slideTo = i;

  dot.classList.add('slider-dots__nav-item');
  if (i == 0) {dot.classList.add('slider-dots__nav-item--active')};

  if (i != 0) {slidesDots[i].style.display = "none"};

  dot.addEventListener('click', showSlideDots);

  wrapperDots.append(dot);
  dots.push(dot);
};

function showSlideDots(event) {
  const slideTo = event.target.dataset.slideTo;

  slidesDots.forEach(item => item.style.display = 'none');
  slidesDots[slideTo].style.display = "block";

  dots.forEach(dot => dot.classList.remove('slider-dots__nav-item--active'));
  event.target.classList.add('slider-dots__nav-item--active');
};