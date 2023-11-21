import './menu.html'
import './style/main.scss'

import url from './scripts/database/products.json'

async function fetchData() {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error('ошибка при загрузке')
    }

    const data = await response.json()
    console.log(data)
  } catch (error) {
    console.error('failed 404', error.message)
    throw error
  }
}

fetchData()