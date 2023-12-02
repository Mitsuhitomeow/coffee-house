import url from './database/products.json';
import { filterMenuApp } from './filterProducts/btnsFilter';

export async function fetchData() {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error('ошибка при загрузке');
    }

    const data = await response.json()
    filterMenuApp(data)
    window.addEventListener('resize', filterMenuApp(data));

  } catch (error) {
    console.error('failed 404', error.message);
    throw error;
  }
}