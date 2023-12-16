import tea1 from "./../../assets/img/tea-1.png";
import tea2 from "./../../assets/img/tea-2.png";
import tea3 from "./../../assets/img/tea-3.png";
import tea4 from "./../../assets/img/tea-4.png";
import { createRefreshButton, btnShowMoreCards } from '../btn/showRefresh';
import { generateCards } from './itemCards';

const SCREEN_WIDTH = window.innerWidth;
const card = document.querySelector('.menu__content-menu');
const arrTea = [
  tea1,
  tea2,
  tea3,
  tea4
]

export function teaShowCards(data) {

  const cardItem = data.products;
  const teaCards = cardItem.filter(tea => tea.category === 'tea');

  card.innerHTML = '';

  let count = 0;

  for (let i = 0; i < arrTea.length; i += 1) {
    teaCards[i].image = arrTea[i];
    count += 1
  };

  const maxVisibleCards =
    SCREEN_WIDTH <= 1425 && SCREEN_WIDTH >= 1050
      ? 6
      : SCREEN_WIDTH < 1050
        ? 4
        : teaCards.length;

  const visibleCards = teaCards.slice(0, maxVisibleCards);
  visibleCards.forEach(element => generateCards(element));

  createRefreshButton(count)
  btnShowMoreCards(card, teaCards)
}