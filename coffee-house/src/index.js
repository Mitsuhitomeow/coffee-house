import './index.html';
import './style/main.scss';
import url from './scripts/database/products.json'
import { showImage } from './scripts/sliderApp';
import { showLoader } from './scripts/loaderScreen';
import { downloadAppStore } from './scripts/downloadAppStore';
import { downloadGooglePlay } from './scripts/downloadGooglePlay';

showLoader()

async function fetchData() {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error('ошибка при загрузке')
    }

    const data = await response.json()

    showImage(data)

  } catch (error) {
    console.error('failed 404', error.message)
    throw error
  }
}

fetchData()

downloadAppStore()
downloadGooglePlay()