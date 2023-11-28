export function downloadGooglePlay() {
  document.querySelector('.google__download-btn').addEventListener('click', function() {
    window.open('https://play.google.com/store/games?hl=ru&gl=US', '_blank');
  });
};