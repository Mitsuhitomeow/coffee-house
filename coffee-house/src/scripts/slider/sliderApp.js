import slide1 from './../../assets/img/slider/coffee-slider-1.png';
import slide2 from './../../assets/img/slider/coffee-slider-2.png';
import slide3 from './../../assets/img/slider/coffee-slider-3.png';
import { createCards } from './sliderCards';
import { controlPanel } from './sliderControlsPanel';
import { swiperLeft, swiperRight } from './sliderFunctions';
import { touchEvents } from './sliderTouchEvent';

const BTN_LEFT = document.querySelector('.slider__btn-left');
const BTN_RIGHT = document.querySelector('.slider__btn-right');
const TIME_SWIPE = document.querySelectorAll('.load');
const SLIDE = document.querySelectorAll('.slider__content');

export const sliderApp = (data) => {
  const coffee = data.favorite;

  coffee[0].image = slide1;
  coffee[1].image = slide2;
  coffee[2].image = slide3;

  controlPanel(data);
  createCards(data);

  BTN_LEFT.addEventListener('click', () => swiperLeft(data));
  BTN_RIGHT.addEventListener('click', () => swiperRight(data));

  SLIDE.forEach(slide => {
    slide.addEventListener('mouseover', () => setAnimationPlayState("paused"));
    slide.addEventListener('mouseout', () => setAnimationPlayState("running"));
  });

  TIME_SWIPE.forEach(element => element.addEventListener('animationend', () => swiperRight(data)));

  SLIDE.forEach((slide) => touchEvents(slide, data));

  function setAnimationPlayState(state) {
    TIME_SWIPE.forEach(element => element.style.animationPlayState = state);
  }
};