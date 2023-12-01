import coffee1 from './../../assets/img/coffee-1.png';
import coffee2 from './../../assets/img/coffee-2.png';
import coffee3 from './../../assets/img/coffee-3.png';
import coffee4 from './../../assets/img/coffee-4.png';
import coffee5 from './../../assets/img/coffee-5.png';
import coffee6 from './../../assets/img/coffee-6.png';
import coffee7 from './../../assets/img/coffee-7.png';
import coffee8 from './../../assets/img/coffee-8.png';
import { createRefreshButton } from '../btn/showRefresh';
import { generateCards } from './itemCards';

const arrCoffee = [
  coffee1,
  coffee2,
  coffee3,
  coffee4,
  coffee5,
  coffee6,
  coffee7,
  coffee8,
];

export const coffeeShowCards = (data) => {

  const cardItem = data.products;
  const card = document.querySelector('.menu__content-menu');
  const coffeeCards = cardItem.filter(coffee => coffee.category === 'coffee');
  const SCREEN_WIDTH = window.innerWidth;

  card.innerHTML = '';

  let count = 0;
  for (let i = 0; i < Math.min(arrCoffee.length); i += 1) {
    coffeeCards[i].image = arrCoffee[i]
    count++
  };



  const maxVisibleCards =
  SCREEN_WIDTH <= 1425 && SCREEN_WIDTH >= 1050
  ? 6
  : SCREEN_WIDTH < 1050
  ? 4
  : coffeeCards.length;

  const visibleCards = coffeeCards.slice(0, maxVisibleCards);

  visibleCards.forEach(element => generateCards(element));

  createRefreshButton(count)
}