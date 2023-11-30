import { coffeeShowCards } from "./coffeeCards";
import { desertShowCards } from "./desertCards";
import { teaShowCards } from "./teaCards";

const BTN_FILTER = document.querySelectorAll('.filter__btn');

const filters = {
  'Coffee': coffeeShowCards,
  'Tea': teaShowCards,
  'Dessert': desertShowCards
};

const filterProducts = (product, data) => {
  const activeFilter = product.textContent.trim();
  const showCards = filters[activeFilter];
  if (showCards) {
    showCards(data);
  };
};

export const filterMenuApp = (data) => {

  BTN_FILTER.forEach(product => {
    if (product.classList.contains('filter__btn-active')) {
      filterProducts(product, data);
    };

    product.addEventListener('click', () => {
      BTN_FILTER.forEach(selector => selector.classList.remove('filter__btn-active'))
      product.classList.add('filter__btn-active');
      filterProducts(product, data);
    })
  })
}