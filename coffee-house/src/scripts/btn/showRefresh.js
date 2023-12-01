import { generateCards } from "../filterProducts/itemCards";

const BLOCK_BTN_REFRESH = document.querySelector('.menu__content-refresh')
const BTN_REFRESH = document.querySelector('.menu__refresh-btn')

export const createRefreshButton = (count) => {

  function startShow() {
    const SCREEN_WIDTH = window.innerWidth;

    count > 4 && SCREEN_WIDTH <= 1425
      ? BLOCK_BTN_REFRESH.style.display = 'flex'
      : BLOCK_BTN_REFRESH.style.display = 'none';
  }

startShow()
};

export const btnShowMoreCards = (card, arrCards) => {
  BTN_REFRESH.addEventListener('click', () => {
    card.innerHTML = ''
    arrCards.forEach(element => generateCards(element));
    document.querySelector('.menu__content-refresh').style.display = 'none';
  })
}