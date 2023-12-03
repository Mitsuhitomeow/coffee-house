import { modalTotalCount } from "./modalFunctions";

const MODAL = document.querySelector('.modal');

export const clickShowModal = (data, card) => {

  card.addEventListener('click', () => {
    MODAL.classList.add('modal__open');
    document.body.classList.add('_lock');
    MODAL.innerHTML = `
          <div class="modal__container">
          <div class="image__container-scale">
            <div class="modal__container-img">
              <img src="${data.image}" alt="${data.name}">
            </div>
          </div>
          <div class="modal__container-content">
            <div class="modal__content-title">
              <h2>${data.name}</h2>
            </div>
            <div class="modal__content-subtitle">
              <p>${data.description}</p>
            </div>
            <div class="modal__content-size">
              <h3>Size</h3>
              <div class="modal__size-buttons">
                <button class="modal__size-btn btn-size btn-active">
                  <div class="sizes">
                    <p class="size-letter">S</p>
                  </div>
                  <p class="sizes-ml">${data.sizes.s.size}</p>
                </button>
                <button class="modal__size-btn btn-size">
                  <div class="sizes">
                    <p class="size-letter">M</p>
                  </div>
                  <p class="sizes-ml">${data.sizes.m.size}</p>
                </button>
                <button class="modal__size-btn btn-size">
                  <div class="sizes">
                    <p class="size-letter">L</p>
                  </div>
                  <p class="sizes-ml">${data.sizes.l.size}</p>
                </button>
              </div>
            </div>
            <div class="modal__content-additives">
              <h3>Additives</h3>
              <div class="modal__additives-buttons">
                <button class="modal__size-btn btn-add">
                  <div class="sizes">
                    <p>1</p>
                  </div>
                  <p class="sizes-ml">${data.additives[0].name}</p>
                </button>
                <button class="modal__size-btn btn-add">
                  <div class="sizes">
                    <p>2</p>
                  </div>
                  <p class="sizes-ml">${data.additives[1].name}</p>
                </button>
                <button class="modal__size-btn btn-add">
                  <div class="sizes">
                    <p>3</p>
                  </div>
                  <p class="sizes-ml">${data.additives[2].name}</p>
                </button>
              </div>
            </div>
            <div class="modal__content-total">
              <div class="modal__total-title">
                <h2>Total</h2>
              </div>
              <div class="modal__total-price">
                <h2 class="total__count">${new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', currencyDisplay: 'narrowSymbol' }).format(data.price)}</h2>
              </div>
            </div>
            <hr>
            <div class="modal__content-alert">
              <div class="modal__alert-img">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_268_12877)">
                    <path d="M8 7.66663V11" stroke="#403F3D" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M8 5.00667L8.00667 4.99926" stroke="#403F3D" stroke-linecap="round" stroke-linejoin="round" />
                    <path
                      d="M7.99967 14.6667C11.6816 14.6667 14.6663 11.6819 14.6663 8.00004C14.6663 4.31814 11.6816 1.33337 7.99967 1.33337C4.31778 1.33337 1.33301 4.31814 1.33301 8.00004C1.33301 11.6819 4.31778 14.6667 7.99967 14.6667Z"
                      stroke="#403F3D" stroke-linecap="round" stroke-linejoin="round" />
                  </g>
                  <defs>
                    <clipPath id="clip0_268_12877">
                      <rect width="16" height="16" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div class="modal__alert-text">
                <p>The cost is not final. Download our mobile app to see the final price and place your order. Earn loyalty
                  points and enjoy your favorite coffee with up to 20% discount.</p>
              </div>
            </div>
            <div class="modal__content-close">
              <button class="close-btn">
                <p>Close</p>
              </button>
            </div>
          </div>
        </div>
      `
    modalTotalCount(data);
  });
};
