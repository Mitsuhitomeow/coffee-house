import './menu.html'
import './style/main.scss'
import { fetchData } from './scripts/menuGetData'
import { showLoader } from './scripts/loaderScreen';
import { btnBurgerMenu } from './scripts/burger/burgerMenuApp';

showLoader();
btnBurgerMenu();
fetchData();


window.addEventListener('resize', fetchData);

// if (document.querySelector('.menu__content-refresh').style.display === 'none') {
//   window.removeEventListener('resize', fetchData);
