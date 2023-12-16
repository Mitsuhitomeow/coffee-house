import { fetchData } from "./menuGetData";

export const checkScreenWidth = () => {
  let previousWindowWidth = window.innerWidth;

  const checkResize = () => {
    const windowWidth = window.innerWidth;

    if (
      (previousWindowWidth >= 1426 && windowWidth <= 1424) ||
      (previousWindowWidth <= 1424 && windowWidth >= 1426) ||
      (previousWindowWidth >= 1051 && windowWidth <= 1049) ||
      (previousWindowWidth <= 1049 && windowWidth >= 1051)
    ) {
      fetchData();
    }

    previousWindowWidth = windowWidth;
  }

  window.addEventListener('resize', checkResize);
  window.addEventListener('load', fetchData);
}