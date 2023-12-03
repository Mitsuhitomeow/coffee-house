const BTN_BURGER = document.querySelector('.header__burger-btn');
const NAV_MENU = document.querySelector('.header__nav');
const MENU_LINK = document.querySelector('.header__menu-link');
const LINK = document.querySelectorAll('li');

export const btnBurgerMenu = () => {

  BTN_BURGER.addEventListener('click', () => {
    NAV_MENU.classList.toggle('open');
    MENU_LINK.classList.toggle('open')
    document.body.classList.toggle('_lock');
  })

  MENU_LINK.addEventListener('click', () => {
    document.body.classList.remove('_lock');
    NAV_MENU.classList.remove('open');
    MENU_LINK.classList.remove('open');
  })

  LINK.forEach(link => link.addEventListener('click', () => {
    document.body.classList.remove('_lock');
    NAV_MENU.classList.remove('open');
    MENU_LINK.classList.remove('open');
  }));
}