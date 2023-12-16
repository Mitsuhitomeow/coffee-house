export const modalTotalCount = (data) => {
  const MODAL = document.querySelector('.modal');
  const BTN_CLOSE = document.querySelector('.close-btn');
  const BTN_SIZE = document.querySelectorAll('.btn-size');
  const BTN_ADD = document.querySelectorAll('.btn-add');
  const TOTAL_COUNT = document.querySelector('.total__count');
  const SIZE_LETTER = document.querySelectorAll('.size-letter');

  console.log()
  let totalCount = +data.price;
  let current = 0;
  let storage = 0;

  const increaseSize = (index) => {
    let letterSize = SIZE_LETTER[index].textContent.toLowerCase();
    current = +data.sizes[letterSize]['add-price'];
    totalCount = totalCount + current - storage;;
    storage = current;

    TOTAL_COUNT.textContent = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', currencyDisplay: 'narrowSymbol' }).format(totalCount);
  };

  const increaseAdd = (index) => {
    current = +data.additives[index]['add-price'];
    totalCount = true ? totalCount + current : totalCount - current;

    TOTAL_COUNT.textContent = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', currencyDisplay: 'narrowSymbol' }).format(totalCount);
  };

  const decreaseAdd = (index) => {
    current = +data.additives[index]['add-price'];
    totalCount = true ? totalCount - current : totalCount + current;

    TOTAL_COUNT.textContent = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', currencyDisplay: 'narrowSymbol' }).format(totalCount);
  };

  MODAL.addEventListener('click', (event) => {
    const MODAL_CONTAINER = document.querySelector('.modal__container');
    const CLOSE_MODAL = event.composedPath().includes(MODAL_CONTAINER);

    if (!CLOSE_MODAL) {
      MODAL.classList.remove('modal__open');
      document.body.classList.remove('_lock');
    };
  });

  BTN_CLOSE.addEventListener('click', () => {
    MODAL.classList.remove('modal__open');
    document.body.classList.remove('_lock');
  });

  BTN_SIZE.forEach((button, index) => {
    button.addEventListener('click', () => {

      BTN_SIZE.forEach(btn => btn.classList.remove('btn-active'));

      button.classList.add('btn-active');
      increaseSize(index);
    });
  });

  BTN_ADD.forEach((button, index) => {
    button.addEventListener('click', () => {
      const isButtonActive = button.classList.contains('btn-active')

      isButtonActive ? decreaseAdd(index) : increaseAdd(index);
      button.classList.toggle('btn-active');
    });
  });
};