const BTN_REFRESH = document.querySelector('.menu__content-refresh')

export function createRefreshButton(count) {

  function startShow() {
    const SCREEN_WIDTH = window.innerWidth;

    count > 4 && SCREEN_WIDTH <= 1425
      ? BTN_REFRESH.style.display = 'flex'
      : BTN_REFRESH.style.display = 'none';
  }

  startShow()
};