export const downloadAppStore = () => {
  const APPLE_BTN = document.querySelector('.apple__download-btn')

  if (APPLE_BTN) {
    APPLE_BTN.addEventListener('click', (event) => {
      event.preventDefault()

      const url = 'https://www.apple.com/app-store/';
      openLink(url);
    });
  }
};

export const downloadGooglePlay = () => {
  const GOOGLE_BTN = document.querySelector('.google__download-btn')

  if (GOOGLE_BTN) {
    GOOGLE_BTN.addEventListener('click', (event) => {
      event.preventDefault()

      const url = 'https://play.google.com/store/games?hl=ru&gl=US';
      openLink(url)
    })
  };
};

function openLink(url) {
  window.open(url, '_blank', 'noopener noreferrer')
}