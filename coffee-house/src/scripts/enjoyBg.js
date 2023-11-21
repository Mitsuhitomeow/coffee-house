import backgroundImg from './../assets/img/img-hero.png'

const enjoyBackgroundImage = () => {
  const enjoy = document.querySelector('.enjoy');
  enjoy.style.backgroundImage = `url(${backgroundImg})`
}

export default enjoyBackgroundImage