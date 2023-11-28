export function showLoader() {
  document.addEventListener("DOMContentLoaded", () => {
    const loader = document.querySelector(".loader");
    setTimeout(() => loader.style.display = 'none', 200);
  });
};