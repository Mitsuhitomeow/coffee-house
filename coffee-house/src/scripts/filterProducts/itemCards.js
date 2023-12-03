import { clickShowModal, showModal } from "./showModal";

const card = document.querySelector('.menu__content-menu');
export const generateCards = (data) => {

  const menuCard = document.createElement('div');
  menuCard.classList.add('.menu__card');
  menuCard.style = 'margin-bottom: 40px';

  menuCard.innerHTML = `
      <div class="menu__card">
        <div class="card__content">
          <div class="menu__card-image">
            <img src="${data.image}" alt="${data.name}">
          </div>
          <div class="menu__card-description">
            <div class="menu__title-subtitle">
              <div class="menu__card-title">
                <h3>${data.name}</h3>
              </div>
              <div class="menu__card-subtitle">
                <p>${data.description}</p>
              </div>
            </div>
            <div class="menu__card-price">
              <p>${new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', currencyDisplay: 'narrowSymbol' }).format(data.price)}</p>
            </div>
          </div>
        </div>
      </div>
    `

    clickShowModal(data, menuCard);

  card.appendChild(menuCard);
};

