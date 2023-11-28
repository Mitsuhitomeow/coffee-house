export function downloadAppStore() {
  document.querySelector('.apple__download-btn').addEventListener('click', function() {
    window.open('https://www.apple.com/app-store/', '_blank');
  });
};