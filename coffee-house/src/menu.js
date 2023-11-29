import './menu.html'
import './style/main.scss'
import { fetchData } from './scripts/menuGetData'
import { showLoader } from './scripts/loaderScreen';

showLoader();

fetchData();

window.addEventListener('resize', () => {
  fetchData();
})