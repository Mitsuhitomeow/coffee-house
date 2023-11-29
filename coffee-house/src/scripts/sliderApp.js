import slide1 from './../assets/img/slider/coffee-slider-1.png';
import slide2 from './../assets/img/slider/coffee-slider-2.png';
import slide3 from './../assets/img/slider/coffee-slider-3.png';
import { createCards } from './sliderCards';
import { controlPanel } from './sliderControlsPanel';



export const showImage = (data) => {

  const coffee = data.favorite;
  const SLIDER_CONTAINER = document.querySelector('.slider__content');
  const BTN_LEFT = document.querySelector('.slider__btn-left');
  const BTN_RIGHT = document.querySelector('.slider__btn-right');
  const TIME_SWIPE = document.querySelectorAll('.load');
  const SLIDE = document.querySelectorAll('.slider__content');

  coffee[0].image = slide1;
  coffee[1].image = slide2;
  coffee[2].image = slide3;

  controlPanel(data);
  createCards(data);

  BTN_LEFT.addEventListener('click', swiperLeft);
  BTN_RIGHT.addEventListener('click', swiperRight);
  TIME_SWIPE.forEach(element => element.addEventListener('animationend', swiperRight));
  SLIDE.forEach(slide => {

    let startX, startY;

    slide.addEventListener('mousedown', moveStart);
    slide.addEventListener('touchstart', moveStart);

    function moveStart(event) {

      startX = (event.type === 'touchstart') ? event.touches[0].clientX : event.clientX;
      startY = (event.type === 'touchstart') ? event.touches[0].clientY : event.clientY;

      document.addEventListener('mousemove', slideMove);
      document.addEventListener('touchmove', slideMove);
      document.addEventListener('mouseup', moveEnd);
      document.addEventListener('touchend', moveEnd);
    }

    function moveEnd(event) {
      let endX = (event.type === 'touchend') ? event.changedTouches[0].clientX : event.clientX;
      let endY = (event.type === 'touchend') ? event.changedTouches[0].clientY : event.clientY;

      let deltaX = endX - startX;
      let deltaY = endY - startY;

      if (Math.abs(deltaX) > Math.abs(deltaY)) {

        if (deltaX > 0) {
          swiperLeft();
        };

        if (deltaX < 0) {
          swiperRight();
        };
      };

      document.removeEventListener('mousemove', slideMove);
      document.removeEventListener('touchmove', slideMove);
      document.removeEventListener('mouseup', moveEnd);
      document.removeEventListener('touchend', moveEnd);
    };

    function slideMove(event) {
      event.preventDefault();
    }
  });

  function swiperLeft() {
    const firstItem = coffee.pop();
    coffee.unshift(firstItem);

    SLIDER_CONTAINER.innerHTML = "";

    createCards(data);
    controlPanel(data);

    const SLIDER_ITEM = document.querySelectorAll('.slider__item');
    SLIDER_ITEM.forEach(element => {
      element.classList.remove('animate__right');
      element.classList.remove('animate__left');
      element.classList.add('animate__left');
    });
  };

  function swiperRight(){
    const firstItem = coffee.shift();
    coffee.push(firstItem);

    SLIDER_CONTAINER.innerHTML = "";

    createCards(data);
    controlPanel(data);

    const SLIDER_ITEM = document.querySelectorAll('.slider__item');
    SLIDER_ITEM.forEach(element => {
      element.classList.remove('animate__left');
      element.classList.remove('animate__right');
      element.classList.add('animate__right');
    });
  }
};