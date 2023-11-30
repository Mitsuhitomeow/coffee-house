const BTN_BURGER = document.querySelector('.header__burger-btn');
const NAV_MENU = document.querySelector('.header__nav');
const MENU_LINK = document.querySelector('.header__menu-link');
const LINK = document.querySelectorAll('li');

function toggleBurger() {
  const isOpen = BTN_BURGER.classList.toggle('burger-active');

  NAV_MENU.classList.toggle('open', isOpen);
  MENU_LINK.classList.toggle('open', isOpen);
  document.body.classList.toggle('_lock', isOpen)
}

export const btnBurgerMenu = () => {
  BTN_BURGER.addEventListener('click', toggleBurger)
  MENU_LINK.addEventListener('click', toggleBurger)
  LINK.forEach(link => link.addEventListener('click', toggleBurger));
}