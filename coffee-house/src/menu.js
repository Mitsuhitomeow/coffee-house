import './menu.html'
import './style/main.scss'
import { fetchData } from './scripts/menuGetData'
import { showLoader } from './scripts/loaderScreen';
import { btnBurgerMenu } from './scripts/burger/burgerMenuApp';
import { checkScreenWidth } from './scripts/checkScreenWidth';

showLoader();
btnBurgerMenu();
fetchData();
checkScreenWidth();
