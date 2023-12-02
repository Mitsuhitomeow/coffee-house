import dessert1 from "./../../assets/img/dessert-1.png";
import dessert2 from "./../../assets/img/dessert-2.png";
import dessert3 from "./../../assets/img/dessert-3.png";
import dessert4 from "./../../assets/img/dessert-4.png";
import dessert5 from "./../../assets/img/dessert-5.png";
import dessert6 from "./../../assets/img/dessert-6.png";
import dessert7 from "./../../assets/img/dessert-7.png";
import dessert8 from "./../../assets/img/dessert-8.png";
import { createRefreshButton, btnShowMoreCards } from '../btn/showRefresh';
import { generateCards } from "./itemCards";


const arrDesert = [
  dessert1,
  dessert2,
  dessert3,
  dessert4,
  dessert5,
  dessert6,
  dessert7,
  dessert8,
]

export function desertShowCards(data) {

  const cardItem = data.products;
  const card = document.querySelector('.menu__content-menu');
  const dessertCards = cardItem.filter(dessert => dessert.category === 'dessert');
  const SCREEN_WIDTH = window.innerWidth;

  card.innerHTML = '';

  let count = 0;
  for (let i = 0; i < Math.min(arrDesert.length); i += 1) {
    dessertCards[i].image = arrDesert[i]
    count += 1;
  };

  const maxVisibleCards =
    SCREEN_WIDTH <= 1425 && SCREEN_WIDTH >= 1050
      ? 6
      : SCREEN_WIDTH < 1050
        ? 4
        : dessertCards.length;

  const visibleCards = dessertCards.slice(0, maxVisibleCards);

  visibleCards.forEach(element => generateCards(element));

  createRefreshButton(count)
  btnShowMoreCards(card, dessertCards)
}
