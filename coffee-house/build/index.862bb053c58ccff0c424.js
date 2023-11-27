/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scripts/sliderApp.js":
/*!**********************************!*\
  !*** ./src/scripts/sliderApp.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   showImage: () => (/* binding */ showImage)
/* harmony export */ });
/* harmony import */ var _assets_img_slider_coffee_slider_1_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../assets/img/slider/coffee-slider-1.png */ "./src/assets/img/slider/coffee-slider-1.png");
/* harmony import */ var _assets_img_slider_coffee_slider_2_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../assets/img/slider/coffee-slider-2.png */ "./src/assets/img/slider/coffee-slider-2.png");
/* harmony import */ var _assets_img_slider_coffee_slider_3_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../assets/img/slider/coffee-slider-3.png */ "./src/assets/img/slider/coffee-slider-3.png");




// const coffee = [
//   {
//     name: "S’mores Frappuccino",
//     description: "This new drink takes an espresso and mixes it with brown sugar and cinnamon before being topped with oat milk.",
//     price: 5.50,
//     image: slide1
//   },
//   {
//     name: "Caramel Macchiato",
//     description: "Fragrant and unique classic espresso with rich caramel-peanut syrup, with cream under whipped thick foam.",
//     price: 5.00,
//     image: slide2
//   },
//   {
//     name: "Ice coffee",
//     description: "A popular summer drink that tones and invigorates. Prepared from coffee, milk and ice.",
//     price: 4.50,
//     image: slide3
//   }
// ]

const slider = document.querySelector('.slider__content');
const showImage = data => {
  const coffee = data.favorite;
  console.log(coffee[0]);
  coffee[0].image = _assets_img_slider_coffee_slider_1_png__WEBPACK_IMPORTED_MODULE_0__;
  coffee[1].image = _assets_img_slider_coffee_slider_2_png__WEBPACK_IMPORTED_MODULE_1__;
  coffee[2].image = _assets_img_slider_coffee_slider_3_png__WEBPACK_IMPORTED_MODULE_2__;
  const div = document.createElement('div');
  const img = document.createElement('img');
  div.classList.add('slider__item');
  div.innerHTML = `
    <img class="slider__item-img" src="${coffee[0].image}" alt="${coffee[0].name}">
    <h3 class="slider__item-title">${coffee[0].name}</h3>
    <p class="slider__item-subtitle">${coffee[0].description}</p>
    <p class="slider__item-price">${new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    currencyDisplay: 'narrowSymbol'
  }).format(coffee[0].price)}</p>
  `;
  slider.appendChild(div);

  // data.favorite.forEach(coffee => {
  //   const div = document.createElement('div')
  //   const img = document.createElement('img')

  //   div.classList.add('slider__item')

  //   div.innerHTML = `
  //     <img class="slider__item-img" src="${coffee.image}" alt="${coffee.name}">
  //     <h3 class="slider__item-title">${coffee.name}</h3>
  //     <p class="slider__item-subtitle">${coffee.description}</p>
  //     <p class="slider__item-price">${new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', currencyDisplay: 'narrowSymbol' }).format(coffee.price)}</p>
  //   `

  //   slider.appendChild(div)
  // })
};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style/main.scss":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style/main.scss ***!
  \**********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./../assets/fonts/Inter-Medium.ttf */ "./src/assets/fonts/Inter-Medium.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./../assets/img/img-hero.png */ "./src/assets/img/img-hero.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */
/* Document
   ========================================================================== */
/**
 * 1. Correct the line height in all browsers.
 * 2. Prevent adjustments of font size after orientation changes in iOS.
 */
html {
  line-height: 1.15; /* 1 */
  -webkit-text-size-adjust: 100%; /* 2 */
}

/* Sections
   ========================================================================== */
/**
 * Remove the margin in all browsers.
 */
body {
  margin: 0;
}

/**
 * Render the \`main\` element consistently in IE.
 */
main {
  display: block;
}

/**
 * Correct the font size and margin on \`h1\` elements within \`section\` and
 * \`article\` contexts in Chrome, Firefox, and Safari.
 */
h1 {
  font-size: 2em;
  margin: 0.67em 0;
}

/* Grouping content
   ========================================================================== */
/**
 * 1. Add the correct box sizing in Firefox.
 * 2. Show the overflow in Edge and IE.
 */
hr {
  box-sizing: content-box; /* 1 */
  height: 0; /* 1 */
  overflow: visible; /* 2 */
}

/**
 * 1. Correct the inheritance and scaling of font size in all browsers.
 * 2. Correct the odd \`em\` font sizing in all browsers.
 */
pre {
  font-family: monospace, monospace; /* 1 */
  font-size: 1em; /* 2 */
}

/* Text-level semantics
   ========================================================================== */
/**
 * Remove the gray background on active links in IE 10.
 */
a {
  background-color: transparent;
}

/**
 * 1. Remove the bottom border in Chrome 57-
 * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.
 */
abbr[title] {
  border-bottom: none; /* 1 */
  text-decoration: underline; /* 2 */
  text-decoration: underline dotted; /* 2 */
}

/**
 * Add the correct font weight in Chrome, Edge, and Safari.
 */
b,
strong {
  font-weight: bolder;
}

/**
 * 1. Correct the inheritance and scaling of font size in all browsers.
 * 2. Correct the odd \`em\` font sizing in all browsers.
 */
code,
kbd,
samp {
  font-family: monospace, monospace; /* 1 */
  font-size: 1em; /* 2 */
}

/**
 * Add the correct font size in all browsers.
 */
small {
  font-size: 80%;
}

/**
 * Prevent \`sub\` and \`sup\` elements from affecting the line height in
 * all browsers.
 */
sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}

sub {
  bottom: -0.25em;
}

sup {
  top: -0.5em;
}

/* Embedded content
   ========================================================================== */
/**
 * Remove the border on images inside links in IE 10.
 */
img {
  border-style: none;
}

/* Forms
   ========================================================================== */
/**
 * 1. Change the font styles in all browsers.
 * 2. Remove the margin in Firefox and Safari.
 */
button,
input,
optgroup,
select,
textarea {
  font-family: inherit; /* 1 */
  font-size: 100%; /* 1 */
  line-height: 1.15; /* 1 */
  margin: 0; /* 2 */
}

/**
 * Show the overflow in IE.
 * 1. Show the overflow in Edge.
 */
button,
input { /* 1 */
  overflow: visible;
}

/**
 * Remove the inheritance of text transform in Edge, Firefox, and IE.
 * 1. Remove the inheritance of text transform in Firefox.
 */
button,
select { /* 1 */
  text-transform: none;
}

/**
 * Correct the inability to style clickable types in iOS and Safari.
 */
button,
[type=button],
[type=reset],
[type=submit] {
  -webkit-appearance: button;
}

/**
 * Remove the inner border and padding in Firefox.
 */
button::-moz-focus-inner,
[type=button]::-moz-focus-inner,
[type=reset]::-moz-focus-inner,
[type=submit]::-moz-focus-inner {
  border-style: none;
  padding: 0;
}

/**
 * Restore the focus styles unset by the previous rule.
 */
button:-moz-focusring,
[type=button]:-moz-focusring,
[type=reset]:-moz-focusring,
[type=submit]:-moz-focusring {
  outline: 1px dotted ButtonText;
}

/**
 * Correct the padding in Firefox.
 */
fieldset {
  padding: 0.35em 0.75em 0.625em;
}

/**
 * 1. Correct the text wrapping in Edge and IE.
 * 2. Correct the color inheritance from \`fieldset\` elements in IE.
 * 3. Remove the padding so developers are not caught out when they zero out
 *    \`fieldset\` elements in all browsers.
 */
legend {
  box-sizing: border-box; /* 1 */
  color: inherit; /* 2 */
  display: table; /* 1 */
  max-width: 100%; /* 1 */
  padding: 0; /* 3 */
  white-space: normal; /* 1 */
}

/**
 * Add the correct vertical alignment in Chrome, Firefox, and Opera.
 */
progress {
  vertical-align: baseline;
}

/**
 * Remove the default vertical scrollbar in IE 10+.
 */
textarea {
  overflow: auto;
}

/**
 * 1. Add the correct box sizing in IE 10.
 * 2. Remove the padding in IE 10.
 */
[type=checkbox],
[type=radio] {
  box-sizing: border-box; /* 1 */
  padding: 0; /* 2 */
}

/**
 * Correct the cursor style of increment and decrement buttons in Chrome.
 */
[type=number]::-webkit-inner-spin-button,
[type=number]::-webkit-outer-spin-button {
  height: auto;
}

/**
 * 1. Correct the odd appearance in Chrome and Safari.
 * 2. Correct the outline style in Safari.
 */
[type=search] {
  -webkit-appearance: textfield; /* 1 */
  outline-offset: -2px; /* 2 */
}

/**
 * Remove the inner padding in Chrome and Safari on macOS.
 */
[type=search]::-webkit-search-decoration {
  -webkit-appearance: none;
}

/**
 * 1. Correct the inability to style clickable types in iOS and Safari.
 * 2. Change font properties to \`inherit\` in Safari.
 */
::-webkit-file-upload-button {
  -webkit-appearance: button; /* 1 */
  font: inherit; /* 2 */
}

/* Interactive
   ========================================================================== */
/*
 * Add the correct display in Edge, IE 10+, and Firefox.
 */
details {
  display: block;
}

/*
 * Add the correct display in all browsers.
 */
summary {
  display: list-item;
}

/* Misc
   ========================================================================== */
/**
 * Add the correct display in IE 10+.
 */
template {
  display: none;
}

/**
 * Add the correct display in IE 10.
 */
[hidden] {
  display: none;
}

@font-face {
  font-family: "inter";
  src: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
}
body {
  font-family: "inter";
}

*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body._lock {
  overflow: hidden;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}

a {
  text-decoration: none;
}

li {
  margin: 0;
  padding: 0;
  list-style: none;
}

body {
  color: #403F3D;
  background: #E1D4C9;
}

.container__home {
  max-width: 1440px;
  padding-left: 40px;
  padding-right: 40px;
  width: 100%;
  margin: 0 auto 40px auto;
  overflow: hidden;
  position: relative;
}
@media screen and (max-width: 380px) {
  .container__home {
    padding-left: 16px;
    padding-right: 16px;
  }
}

.container__menu {
  max-width: 1440px;
  padding-left: 40px;
  padding-right: 40px;
  width: 100%;
  margin: 0 auto 40px auto;
  overflow: hidden;
  position: relative;
}
@media screen and (max-width: 380px) {
  .container__menu {
    padding-left: 16px;
    padding-right: 16px;
  }
}

.logo {
  width: 100px;
  height: 60px;
}

.enjoy .enjoy__button {
  width: 12.5rem;
  height: 4rem;
}
.enjoy .enjoy__button button {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: #E1D4C9;
  border: 0;
  border-radius: 6.25rem;
  cursor: pointer;
}
.enjoy .enjoy__button button span {
  color: #403F3D;
  transform: translateX(29%);
  transition: all 0.5s ease;
}
@media screen and (max-width: 768px) {
  .enjoy .enjoy__button button span {
    transform: translateX(0);
  }
}
.enjoy .enjoy__button button svg {
  opacity: 0;
  margin-left: 8px;
  animation: btn-opacity-0 0.3s ease;
}
@media screen and (max-width: 768px) {
  .enjoy .enjoy__button button svg {
    opacity: 1;
  }
}

@media (hover: hover) {
  .enjoy__button:hover button span {
    transform: translateX(0%);
    transition: all 0.5s ease;
  }
  .enjoy__button:hover button svg {
    animation: btn-opacity-1 0.3s ease forwards;
  }
}
@keyframes btn-opacity-1 {
  0% {
    opacity: 0%;
  }
  50% {
    opacity: 50%;
  }
  100% {
    opacity: 100%;
  }
}
@keyframes btn-opacity-0 {
  0% {
    opacity: 100%;
  }
  50% {
    opacity: 50%;
  }
  100% {
    opacity: 0%;
  }
}
.favorite .favorite__content-slider .slider-btn {
  cursor: pointer;
  transition: all 0.3s ease;
}
.favorite .favorite__content-slider .slider-btn svg {
  transition: all 0.3s ease;
}
.favorite .favorite__content-slider .slider-btn svg path {
  transition: all 0.3s ease;
}

@media (hover: hover) {
  .slider-btn:hover svg {
    fill: #665F55;
  }
  .slider-btn:hover svg path {
    stroke: #E1D4C9;
  }
  .slider__btn-right:hover {
    transform: translateY(-5%);
  }
  .slider__btn-left:hover {
    transform: translateY(5%);
  }
}
.slider__btn-right:active {
  transform: translateY(0);
}

.slider__btn-left:active {
  transform: translateY(0);
}

.mobile-app .mobile-app__description-buttons {
  display: flex;
}
.mobile-app .mobile-app__description-buttons .apple__download-btn {
  margin-right: 20px;
}
.mobile-app .mobile-app__description-buttons .apple__download-btn .mobile-app__btn svg {
  margin-right: 8px;
}
.mobile-app .mobile-app__description-buttons .button {
  cursor: pointer;
  background: #E1D4C9;
  border: 1px solid #665F55;
  border-radius: 100px;
  width: 200px;
  transition: all 0.5s ease;
}
.mobile-app .mobile-app__description-buttons .button .mobile-app__btn {
  display: flex;
  align-items: center;
}
.mobile-app .mobile-app__description-buttons .button .mobile-app__btn svg {
  margin-left: 20px;
}
.mobile-app .mobile-app__description-buttons .button .mobile-app__btn svg path {
  transition: all 0.5s ease;
}
.mobile-app .mobile-app__description-buttons .button .mobile-app__btn .mobile-app__btn-text {
  margin: 12px 0 12px 8px;
}
.mobile-app .mobile-app__description-buttons .button .mobile-app__btn .mobile-app__btn-text p {
  font-size: 10px;
  font-weight: 600;
  line-height: 140%;
  color: #403F3D;
  text-align: start;
  letter-spacing: -0.005rem;
  transition: all 0.5s ease;
}
.mobile-app .mobile-app__description-buttons .button .mobile-app__btn .mobile-app__btn-text p:last-child {
  font-size: 16px;
  font-weight: 600;
  line-height: 150%;
  color: #403F3D;
  transition: all 0.5s ease;
}

@media (hover: hover) {
  .mobile-app .button:hover {
    background: #665F55;
    transition: all 0.5s ease;
  }
  .mobile-app .button:hover .mobile-app__btn svg path {
    fill: #E1D4C9;
    transition: all 0.5s ease;
  }
  .mobile-app .button:hover .mobile-app__btn .mobile-app__btn-text p {
    color: #E1D4C9;
    transition: all 0.5s ease;
  }
  .mobile-app .button:hover .mobile-app__btn .mobile-app__btn-text p:last-child {
    color: #E1D4C9;
    transition: all 0.5s ease;
  }
}
.footer .footer__content .footer__content-left .footer__content-web .footer__web-twitter {
  margin-right: 12px;
}
.footer .footer__content .footer__content-left .footer__content-web .footer__web-twitter svg {
  transition: all 0.5s ease;
}
.footer .footer__content .footer__content-left .footer__content-web .footer__web-twitter svg path {
  transition: all 0.1s ease;
}
.footer .footer__content .footer__content-left .footer__content-web .footer__web-instagram {
  margin-right: 12px;
}
.footer .footer__content .footer__content-left .footer__content-web .footer__web-instagram svg {
  transition: all 0.5s ease;
}
.footer .footer__content .footer__content-left .footer__content-web .footer__web-instagram svg path {
  transition: all 0.1s ease;
}
.footer .footer__content .footer__content-left .footer__content-web .footer__web-facebook svg {
  transition: all 0.5s ease;
}
.footer .footer__content .footer__content-left .footer__content-web .footer__web-facebook svg path {
  transition: all 0.1s ease;
}

@media (hover: hover) {
  .footer .footer__content .footer__content-left .footer__content-web .footer__web-twitter a:hover svg {
    fill: #E1D4C9;
  }
  .footer .footer__content .footer__content-left .footer__content-web .footer__web-twitter a:hover path {
    stroke: #403F3D;
  }
  .footer .footer__content .footer__content-left .footer__content-web .footer__web-instagram:hover svg {
    fill: #E1D4C9;
  }
  .footer .footer__content .footer__content-left .footer__content-web .footer__web-instagram:hover path {
    stroke: #403F3D;
  }
  .footer .footer__content .footer__content-left .footer__content-web .footer__web-facebook:hover svg {
    fill: #E1D4C9;
  }
  .footer .footer__content .footer__content-left .footer__content-web .footer__web-facebook:hover path {
    stroke: #403F3D;
  }
}
.footer .footer__content .footer__content-right .footer__contacts-content .footer-link {
  margin-bottom: 20px;
  letter-spacing: 0.005rem;
}
.footer .footer__content .footer__content-right .footer__contacts-content .footer-link a {
  font-size: 16px;
  font-weight: 600;
  line-height: 150%;
  color: #E1D4C9;
  position: relative;
}
.footer .footer__content .footer__content-right .footer__contacts-content .footer-link a svg {
  margin-right: 8px;
}
@media screen and (max-width: 1124px) {
  .footer .footer__content .footer__content-right .footer__contacts-content .footer-link a svg {
    margin-right: 4px;
  }
}
@media screen and (max-width: 1124px) {
  .footer .footer__content .footer__content-right .footer__contacts-content .footer-link {
    margin-bottom: 18px;
  }
}
.footer .footer__content .footer__content-right .footer__contacts-content .footer-link a:before {
  content: "";
  width: 100%;
  height: 2px;
  background-color: #E1D4C9;
  position: absolute;
  left: 0;
  bottom: -4px;
  transform: scaleX(0);
  transition: transform 0.5s ease;
}
.footer .footer__content .footer__content-right .footer__contacts-content .footer-link p {
  font-size: 16px;
  font-weight: 600;
  line-height: 150%;
  color: #E1D4C9;
}
.footer .footer__content .footer__content-right .footer__contacts-content .footer__contacts-time {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}
.footer .footer__content .footer__content-right .footer__contacts-content .footer__contacts-time svg {
  margin-right: 8px;
}

@media (hover: hover) {
  .footer .footer__content .footer__content-right .footer__contacts-content .footer-link:hover a:before {
    transform: scaleX(1.1);
    transition: transform 0.5s ease;
  }
}
.menu .menu__content .menu__content-filter {
  display: flex;
  justify-content: center;
}
.menu .menu__content .menu__content-filter .filter__btn {
  display: flex;
  align-items: center;
  border: solid 1px #C1B6AD;
  border-radius: 100px;
  padding: 8px;
  margin: 40px 8px 40px 8px;
  transition: all 0.5s ease;
}
.menu .menu__content .menu__content-filter .filter__btn svg {
  margin-right: 8px;
}
.menu .menu__content .menu__content-filter .filter__btn svg rect {
  transition: all 0.5s ease;
}
.menu .menu__content .menu__content-filter .filter__btn p {
  font-size: 16px;
  font-weight: 600;
  line-height: 150%;
  color: #403F3D;
  margin-right: 8px;
  transition: all 0.5s ease;
}
.menu .menu__content .menu__content-filter .filter__btn-active {
  background: #665F55;
}
.menu .menu__content .menu__content-filter .filter__btn-active svg rect {
  fill: #E1D4C9;
}
.menu .menu__content .menu__content-filter .filter__btn-active p {
  color: #E1D4C9;
}

@media (hover: hover) {
  .menu .menu__content .menu__content-filter .filter__btn:hover {
    background: #665F55;
    cursor: pointer;
  }
  .menu .menu__content .menu__content-filter .filter__btn:hover svg rect {
    fill: #E1D4C9;
  }
  .menu .menu__content .menu__content-filter .filter__btn:hover p {
    color: #E1D4C9;
  }
}
.menu .menu__content-menu {
  display: grid;
  grid-template-columns: repeat(4, 310px);
  column-gap: 2.96%;
}
.menu .menu__content-menu .menu__card {
  min-height: 100%;
  max-width: 310px;
  border: 1px solid #C1B6AD;
  border-radius: 40px;
  cursor: pointer;
  position: relative;
}
.menu .menu__content-menu .menu__card .menu__card-image {
  position: relative;
  overflow: hidden;
  width: 310px;
  height: 310px;
  border-radius: 40px;
  object-fit: cover;
}
.menu .menu__content-menu .menu__card .menu__card-image img {
  position: absolute;
  max-width: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(1.1);
  transition: transform 0.4s ease;
}
.menu .menu__content-menu .menu__card .menu__card-description {
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  margin-left: 20px;
  margin-right: 20px;
  margin-bottom: 51px;
}
.menu .menu__content-menu .menu__card .menu__card-title {
  margin-bottom: 10px;
}
.menu .menu__content-menu .menu__card .menu__card-title h3 {
  font-size: 24px;
  font-weight: 600;
  line-height: 125%;
  color: #403F3D;
}
.menu .menu__content-menu .menu__card .menu__card-subtitle {
  margin-bottom: 10px;
}
.menu .menu__content-menu .menu__card .menu__card-subtitle p {
  font-size: 16px;
  font-weight: 400;
  line-height: 150%;
  color: #403F3D;
  letter-spacing: -0.01rem;
}
.menu .menu__content-menu .menu__card .menu__card-price {
  position: absolute;
  bottom: 20px;
}
.menu .menu__content-menu .menu__card .menu__card-price p {
  font-size: 24px;
  font-weight: 600;
  line-height: 125%;
  color: #403F3D;
}
@media screen and (max-width: 1425px) {
  .menu .menu__content-menu {
    justify-content: center;
    grid-template-columns: repeat(3, 310px);
    grid-auto-rows: minmax(545px, auto);
    column-gap: 5.8%;
  }
}
@media screen and (max-width: 1050px) {
  .menu .menu__content-menu {
    grid-template-columns: repeat(2, 310px);
  }
}

@media (hover: hover) {
  .menu .menu__content-menu .menu__card:hover img {
    transform: translate(-50%, -50%) scale(1);
  }
}
.header .header__burger-btn {
  display: none;
  width: 44px;
  height: 44px;
  border: 1px solid #403F3D;
  border-radius: 50%;
  position: relative;
  margin-top: 8px;
}
.header .header__burger-btn span {
  width: 16px;
  height: 1.5px;
  left: 13px;
  top: 21px;
  position: absolute;
  background: #403F3D;
}
.header .header__burger-btn span:first-child {
  transform: translateY(-4px);
}
.header .header__burger-btn span:last-child {
  transform: translateY(4px);
}
@media (hover: hover) {
  .header .header__burger-btn:hover {
    cursor: pointer;
  }
}
@media screen and (max-width: 768px) {
  .header .header__burger-btn {
    display: block;
  }
  .header .header__nav {
    position: absolute;
    right: -380px;
    top: 0;
    width: 380px;
    background: #E1D4C9;
    height: 1000%;
    margin: 0;
  }
  .header .header__nav ul {
    display: block;
  }
  .header .header__menu-link {
    position: absolute;
    right: -380px;
    top: 6.6rem;
    width: 380px;
  }
}

.menu .menu__content-refresh {
  display: flex;
  justify-content: center;
  display: none;
}
.menu .menu__content-refresh button {
  background: #E1D4C9;
  padding: 17px 16px 14px 18px;
  border-radius: 50%;
  border: 1px solid #403F3D;
}
@media screen and (max-width: 1425px) {
  .menu .menu__content-refresh {
    display: flex;
  }
}

header {
  display: flex;
  justify-content: space-between;
  margin: 20px 0;
  height: 60px;
}
header nav {
  flex-basis: 39.5%;
  margin: 15px;
}
@media screen and (max-width: 1050px) {
  header nav {
    flex-basis: 52.5%;
  }
}
header ul {
  display: flex;
  justify-content: space-evenly;
  list-style: none;
}
header .link {
  font-size: 16px;
  font-weight: 600;
  line-height: 150%;
  color: #403F3D;
  text-decoration: none;
  position: relative;
  transition: 0.3s ease;
}
header .link:before {
  content: "";
  width: 100%;
  height: 2px;
  background-color: #403F3D;
  position: absolute;
  left: 0;
  bottom: -4px;
  transform: scaleX(0);
  transition: transform 0.5s ease;
}
header #link-active {
  cursor: default;
}
@media screen and (max-width: 768px) {
  header #link-active:before {
    transform: scaleX(0);
  }
}
header .header__menu-link {
  margin: 15px 0;
}
header .header__menu-link img {
  margin-left: 0.28rem;
}

@media (hover: hover) {
  header .link:hover:before {
    transform: scaleX(1.1);
    transition: transform 0.5s ease;
  }
}
.enjoy {
  border-radius: 2.5rem;
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
  background-position: center;
  background-size: cover;
  width: 100%;
  height: 40.25rem;
}
.enjoy .enjoy__content {
  width: 33.125rem;
  height: 27.75rem;
  padding-top: 6.25rem;
  margin-left: 6.25rem;
}
.enjoy .enjoy__content .enjoy__content-title {
  font-size: 72px;
  font-weight: 600;
  line-height: 105%;
  color: #E1D4C9;
  letter-spacing: 0.0375rem;
  margin-bottom: 2.5rem;
}
.enjoy .enjoy__content .enjoy__content-title span {
  font-style: italic;
  color: #B0907A;
}
.enjoy .enjoy__content p {
  font-size: 16px;
  font-weight: 400;
  line-height: 150%;
  color: #E1D4C9;
  letter-spacing: -0.0051rem;
  margin-bottom: 2.5rem;
}
@media screen and (max-width: 768px) {
  .enjoy .enjoy__content {
    margin-left: 3.7rem;
  }
}

.favorite .favorite__content {
  text-align: center;
}
.favorite .favorite__content h2 {
  font-size: 60px;
  font-weight: 600;
  line-height: 125%;
  color: #403F3D;
  margin-top: 100px;
  margin-bottom: 40px;
}
.favorite .favorite__content h2 span {
  font-style: italic;
  color: #B0907A;
}
.favorite .favorite__content .favorite__content-slider {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.favorite .favorite__content .favorite__content-slider .slider__btn-left {
  rotate: 180deg;
}
.favorite .favorite__content .favorite__content-slider .slider-btn {
  margin-left: 4px;
  margin-right: 4px;
}
.favorite .favorite__content .favorite__content-slider .slider__item img {
  max-width: 480px;
  margin-bottom: 19px;
}
.favorite .favorite__content .favorite__content-slider .slider__item h3 {
  font-size: 24px;
  font-weight: 600;
  line-height: 125%;
  color: #403F3D;
  margin-bottom: 15px;
}
.favorite .favorite__content .favorite__content-slider .slider__item p.slider__item-subtitle {
  font-size: 16px;
  font-weight: 400;
  line-height: 150%;
  max-width: 480px;
  margin-bottom: 15px;
}
.favorite .favorite__content .favorite__content-slider .slider__item p.slider__item-price {
  font-size: 24px;
  font-weight: 600;
  line-height: 125%;
}
.favorite .favorite__content .favorite__control-panel {
  display: flex;
  justify-content: center;
  margin-top: 40px;
}
.favorite .favorite__content .favorite__control-panel .panel__control {
  width: 40px;
  height: 4px;
  margin-left: 6px;
  margin-right: 6px;
  background: #C1B6AD;
}
.favorite .favorite__content .favorite__control-panel .panel__control.active {
  background: #665F55;
}

.about {
  margin-top: 100px;
}
.about .about__content-title {
  letter-spacing: 0.015rem;
}
.about .about__content-title h2 {
  font-size: 60px;
  font-weight: 600;
  line-height: 125%;
  color: #403F3D;
}
.about .about__content-title h2 span {
  font-style: italic;
  color: #B0907A;
}
.about .about__content-images {
  display: flex;
}
.about .about__content-images .content__images-left {
  margin-right: 20px;
}
.about .about__content-images .content__images-right {
  margin-left: 20px;
}
.about .about__content-images .images-scales {
  position: relative;
  overflow: hidden;
  width: 660px;
  border-radius: 20px;
  object-fit: cover;
  margin-top: 40px;
}
.about .about__content-images .images__scales-first {
  height: 590px;
}
.about .about__content-images .images__scales-second {
  height: 430px;
}
@media screen and (max-width: 1435px) {
  .about .about__content-images .images__scales-second {
    display: none;
  }
}
.about .about__content-images .about-images {
  position: absolute;
  max-width: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(1.1);
  transition: transform 0.4s ease;
}
@media screen and (max-width: 1435px) {
  .about .about__content-images {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .about .about__content-images .images__scales-second {
    display: none;
  }
  .about .about__content-images .content__images-left {
    margin-right: 0px;
  }
  .about .about__content-images .content__images-right {
    margin-left: 0px;
  }
  .about .about__content-images .images__scales-first {
    width: 688px;
    height: 590px;
  }
  .about .about__content-images .about-images {
    transform: translate(-50%, -50%) scale(1.06);
  }
}

@media (hover: hover) {
  .images-scales:hover .about-images {
    transform: translate(-50%, -50%) scale(1);
    transition: transform 0.4s ease;
  }
}
.mobile-app {
  margin-top: 98px;
  margin-bottom: 98px;
}
.mobile-app .mobile-app__content {
  display: flex;
  justify-content: space-between;
}
.mobile-app .mobile-app__content .mobile-app__content-description {
  max-width: 630px;
  margin-top: 144px;
}
.mobile-app .mobile-app__content .mobile-app__content-description .mobile-app__description-title {
  text-align: start;
  letter-spacing: 0.02rem;
}
.mobile-app .mobile-app__content .mobile-app__content-description .mobile-app__description-title h2 {
  font-size: 60px;
  font-weight: 600;
  line-height: 125%;
  color: #403F3D;
}
.mobile-app .mobile-app__content .mobile-app__content-description .mobile-app__description-title h2 span {
  font-style: italic;
  color: #B0907A;
}
.mobile-app .mobile-app__content .mobile-app__content-description .mobile-app__description-subtitle p {
  font-size: 16px;
  font-weight: 400;
  line-height: 150%;
  color: #403F3D;
  margin-top: 40px;
  margin-bottom: 40px;
  letter-spacing: -0.005rem;
}
@media screen and (max-width: 1140px) {
  .mobile-app .mobile-app__content {
    align-items: center;
    flex-direction: column;
  }
  .mobile-app .mobile-app__content .mobile-app__content-description {
    margin-top: 100px;
  }
}
@media screen and (max-width: 1140px) and (max-width: 850px) {
  .mobile-app .mobile-app__content .mobile-app__content-description {
    margin-right: 8%;
    margin-bottom: 14.5%;
  }
}
@media screen and (max-width: 1140px) {
  .mobile-app .mobile-app__content .mobile-app__content-description h2 {
    width: 108%;
  }
  .mobile-app .mobile-app__content .mobile-app__content-description p {
    width: 108%;
  }
}
@media screen and (max-width: 1140px) {
  .mobile-app {
    margin-top: 0;
  }
}

.footer {
  background: #665F55;
  border-radius: 40px;
}
.footer .footer__content {
  display: flex;
  align-items: center;
  padding: 100px;
}
.footer .footer__content .footer__content-left {
  max-width: 530px;
  width: 100%;
  margin-right: 100px;
}
.footer .footer__content .footer__content-left .footer__content-title {
  margin-bottom: 40px;
}
.footer .footer__content .footer__content-left .footer__content-title h2 {
  font-size: 60px;
  font-weight: 600;
  line-height: 125%;
  color: #E1D4C9;
  letter-spacing: 0.02rem;
}
.footer .footer__content .footer__content-left .footer__content-title h2 span {
  font-style: italic;
  color: #B0907A;
}
.footer .footer__content .footer__content-left .footer__content-web {
  display: flex;
}
.footer .footer__content .footer__content-right {
  min-width: 265px;
}
.footer .footer__content .footer__content-right .footer__contacts-title {
  margin-bottom: 40px;
}
.footer .footer__content .footer__content-right .footer__contacts-title h3 {
  font-size: 24px;
  font-weight: 600;
  line-height: 125%;
  color: #E1D4C9;
}
@media screen and (max-width: 1140px) {
  .footer .footer__content .footer__content-left {
    margin-right: 10%;
  }
}
@media screen and (max-width: 1140px) and (max-width: 1124px) {
  .footer .footer__content {
    padding: 100px 60px 96px 60px;
    flex-direction: column;
    align-items: start;
  }
  .footer .footer__content .footer__content-left {
    margin-bottom: 97px;
    margin-right: 0;
  }
  .footer .footer__content .footer__content-right .footer__contacts-title {
    margin-bottom: 37px;
  }
}

.menu {
  margin-bottom: 60px;
}
@media screen and (max-width: 1425px) {
  .menu {
    margin-bottom: 100px;
  }
}
.menu .menu__content .menu__content-title {
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
}
.menu .menu__content .menu__content-title h1 {
  font-size: 60px;
  font-weight: 600;
  line-height: 125%;
  color: #403F3D;
}
.menu .menu__content .menu__content-title h1 span {
  font-style: italic;
  color: #B0907A;
}`, "",{"version":3,"sources":["webpack://./node_modules/normalize.css/normalize.css","webpack://./src/style/main.scss","webpack://./src/style/base/_fonts.scss","webpack://./src/style/base/_start-style.scss","webpack://./src/style/abstracts/_variables.scss","webpack://./src/style/components/_logo.scss","webpack://./src/style/components/_btn-enjoy.scss","webpack://./src/style/components/_btns-favorite.scss","webpack://./src/style/components/_btns-app.scss","webpack://./src/style/components/_btns-footer-web.scss","webpack://./src/style/components/_links-footer.scss","webpack://./src/style/components/_btns-filter.scss","webpack://./src/style/components/_menu-cards.scss","webpack://./src/style/components/_btn-burger.scss","webpack://./src/style/components/_btn-refresh.scss","webpack://./src/style/layout/_header.scss","webpack://./src/style/layout/_enjoy.scss","webpack://./src/style/layout/_favorite.scss","webpack://./src/style/layout/_about.scss","webpack://./src/style/layout/_mobile-app.scss","webpack://./src/style/layout/_footer.scss","webpack://./src/style/layout/_menu.scss"],"names":[],"mappings":"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","sourcesContent":["/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n\n/* Document\n   ========================================================================== */\n\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\n\nhtml {\n  line-height: 1.15; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/* Sections\n   ========================================================================== */\n\n/**\n * Remove the margin in all browsers.\n */\n\nbody {\n  margin: 0;\n}\n\n/**\n * Render the `main` element consistently in IE.\n */\n\nmain {\n  display: block;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\n\nhr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\npre {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * Remove the gray background on active links in IE 10.\n */\n\na {\n  background-color: transparent;\n}\n\n/**\n * 1. Remove the bottom border in Chrome 57-\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\n\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  text-decoration: underline dotted; /* 2 */\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n * Add the correct font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Remove the border on images inside links in IE 10.\n */\n\nimg {\n  border-style: none;\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * 1. Change the font styles in all browsers.\n * 2. Remove the margin in Firefox and Safari.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\n\nbutton,\ninput { /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\n\nbutton,\nselect { /* 1 */\n  text-transform: none;\n}\n\n/**\n * Correct the inability to style clickable types in iOS and Safari.\n */\n\nbutton,\n[type=\"button\"],\n[type=\"reset\"],\n[type=\"submit\"] {\n  -webkit-appearance: button;\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\n\nbutton::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\n\nbutton:-moz-focusring,\n[type=\"button\"]:-moz-focusring,\n[type=\"reset\"]:-moz-focusring,\n[type=\"submit\"]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Correct the padding in Firefox.\n */\n\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\n\nlegend {\n  box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\n\nprogress {\n  vertical-align: baseline;\n}\n\n/**\n * Remove the default vertical scrollbar in IE 10+.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10.\n * 2. Remove the padding in IE 10.\n */\n\n[type=\"checkbox\"],\n[type=\"radio\"] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n\n[type=\"search\"] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n * Remove the inner padding in Chrome and Safari on macOS.\n */\n\n[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/* Interactive\n   ========================================================================== */\n\n/*\n * Add the correct display in Edge, IE 10+, and Firefox.\n */\n\ndetails {\n  display: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\n\nsummary {\n  display: list-item;\n}\n\n/* Misc\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 10+.\n */\n\ntemplate {\n  display: none;\n}\n\n/**\n * Add the correct display in IE 10.\n */\n\n[hidden] {\n  display: none;\n}\n","/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n/* Document\n   ========================================================================== */\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\nhtml {\n  line-height: 1.15; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/* Sections\n   ========================================================================== */\n/**\n * Remove the margin in all browsers.\n */\nbody {\n  margin: 0;\n}\n\n/**\n * Render the `main` element consistently in IE.\n */\nmain {\n  display: block;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n   ========================================================================== */\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\nhr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\npre {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/* Text-level semantics\n   ========================================================================== */\n/**\n * Remove the gray background on active links in IE 10.\n */\na {\n  background-color: transparent;\n}\n\n/**\n * 1. Remove the bottom border in Chrome 57-\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  text-decoration: underline dotted; /* 2 */\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n * Add the correct font size in all browsers.\n */\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n/**\n * Remove the border on images inside links in IE 10.\n */\nimg {\n  border-style: none;\n}\n\n/* Forms\n   ========================================================================== */\n/**\n * 1. Change the font styles in all browsers.\n * 2. Remove the margin in Firefox and Safari.\n */\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\nbutton,\ninput { /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\nbutton,\nselect { /* 1 */\n  text-transform: none;\n}\n\n/**\n * Correct the inability to style clickable types in iOS and Safari.\n */\nbutton,\n[type=button],\n[type=reset],\n[type=submit] {\n  -webkit-appearance: button;\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\nbutton::-moz-focus-inner,\n[type=button]::-moz-focus-inner,\n[type=reset]::-moz-focus-inner,\n[type=submit]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\nbutton:-moz-focusring,\n[type=button]:-moz-focusring,\n[type=reset]:-moz-focusring,\n[type=submit]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Correct the padding in Firefox.\n */\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\nlegend {\n  box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\nprogress {\n  vertical-align: baseline;\n}\n\n/**\n * Remove the default vertical scrollbar in IE 10+.\n */\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10.\n * 2. Remove the padding in IE 10.\n */\n[type=checkbox],\n[type=radio] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n[type=number]::-webkit-inner-spin-button,\n[type=number]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n[type=search] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n * Remove the inner padding in Chrome and Safari on macOS.\n */\n[type=search]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/* Interactive\n   ========================================================================== */\n/*\n * Add the correct display in Edge, IE 10+, and Firefox.\n */\ndetails {\n  display: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\nsummary {\n  display: list-item;\n}\n\n/* Misc\n   ========================================================================== */\n/**\n * Add the correct display in IE 10+.\n */\ntemplate {\n  display: none;\n}\n\n/**\n * Add the correct display in IE 10.\n */\n[hidden] {\n  display: none;\n}\n\n@font-face {\n  font-family: \"inter\";\n  src: url(./../assets/fonts/Inter-Medium.ttf);\n}\nbody {\n  font-family: \"inter\";\n}\n\n*,\n*::before,\n*::after {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nhtml {\n  scroll-behavior: smooth;\n}\n\nbody._lock {\n  overflow: hidden;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n\na {\n  text-decoration: none;\n}\n\nli {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n}\n\nbody {\n  color: #403F3D;\n  background: #E1D4C9;\n}\n\n.container__home {\n  max-width: 1440px;\n  padding-left: 40px;\n  padding-right: 40px;\n  width: 100%;\n  margin: 0 auto 40px auto;\n  overflow: hidden;\n  position: relative;\n}\n@media screen and (max-width: 380px) {\n  .container__home {\n    padding-left: 16px;\n    padding-right: 16px;\n  }\n}\n\n.container__menu {\n  max-width: 1440px;\n  padding-left: 40px;\n  padding-right: 40px;\n  width: 100%;\n  margin: 0 auto 40px auto;\n  overflow: hidden;\n  position: relative;\n}\n@media screen and (max-width: 380px) {\n  .container__menu {\n    padding-left: 16px;\n    padding-right: 16px;\n  }\n}\n\n.logo {\n  width: 100px;\n  height: 60px;\n}\n\n.enjoy .enjoy__button {\n  width: 12.5rem;\n  height: 4rem;\n}\n.enjoy .enjoy__button button {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n  background: #E1D4C9;\n  border: 0;\n  border-radius: 6.25rem;\n  cursor: pointer;\n}\n.enjoy .enjoy__button button span {\n  color: #403F3D;\n  transform: translateX(29%);\n  transition: all 0.5s ease;\n}\n@media screen and (max-width: 768px) {\n  .enjoy .enjoy__button button span {\n    transform: translateX(0);\n  }\n}\n.enjoy .enjoy__button button svg {\n  opacity: 0;\n  margin-left: 8px;\n  animation: btn-opacity-0 0.3s ease;\n}\n@media screen and (max-width: 768px) {\n  .enjoy .enjoy__button button svg {\n    opacity: 1;\n  }\n}\n\n@media (hover: hover) {\n  .enjoy__button:hover button span {\n    transform: translateX(0%);\n    transition: all 0.5s ease;\n  }\n  .enjoy__button:hover button svg {\n    animation: btn-opacity-1 0.3s ease forwards;\n  }\n}\n@keyframes btn-opacity-1 {\n  0% {\n    opacity: 0%;\n  }\n  50% {\n    opacity: 50%;\n  }\n  100% {\n    opacity: 100%;\n  }\n}\n@keyframes btn-opacity-0 {\n  0% {\n    opacity: 100%;\n  }\n  50% {\n    opacity: 50%;\n  }\n  100% {\n    opacity: 0%;\n  }\n}\n.favorite .favorite__content-slider .slider-btn {\n  cursor: pointer;\n  transition: all 0.3s ease;\n}\n.favorite .favorite__content-slider .slider-btn svg {\n  transition: all 0.3s ease;\n}\n.favorite .favorite__content-slider .slider-btn svg path {\n  transition: all 0.3s ease;\n}\n\n@media (hover: hover) {\n  .slider-btn:hover svg {\n    fill: #665F55;\n  }\n  .slider-btn:hover svg path {\n    stroke: #E1D4C9;\n  }\n  .slider__btn-right:hover {\n    transform: translateY(-5%);\n  }\n  .slider__btn-left:hover {\n    transform: translateY(5%);\n  }\n}\n.slider__btn-right:active {\n  transform: translateY(0);\n}\n\n.slider__btn-left:active {\n  transform: translateY(0);\n}\n\n.mobile-app .mobile-app__description-buttons {\n  display: flex;\n}\n.mobile-app .mobile-app__description-buttons .apple__download-btn {\n  margin-right: 20px;\n}\n.mobile-app .mobile-app__description-buttons .apple__download-btn .mobile-app__btn svg {\n  margin-right: 8px;\n}\n.mobile-app .mobile-app__description-buttons .button {\n  cursor: pointer;\n  background: #E1D4C9;\n  border: 1px solid #665F55;\n  border-radius: 100px;\n  width: 200px;\n  transition: all 0.5s ease;\n}\n.mobile-app .mobile-app__description-buttons .button .mobile-app__btn {\n  display: flex;\n  align-items: center;\n}\n.mobile-app .mobile-app__description-buttons .button .mobile-app__btn svg {\n  margin-left: 20px;\n}\n.mobile-app .mobile-app__description-buttons .button .mobile-app__btn svg path {\n  transition: all 0.5s ease;\n}\n.mobile-app .mobile-app__description-buttons .button .mobile-app__btn .mobile-app__btn-text {\n  margin: 12px 0 12px 8px;\n}\n.mobile-app .mobile-app__description-buttons .button .mobile-app__btn .mobile-app__btn-text p {\n  font-size: 10px;\n  font-weight: 600;\n  line-height: 140%;\n  color: #403F3D;\n  text-align: start;\n  letter-spacing: -0.005rem;\n  transition: all 0.5s ease;\n}\n.mobile-app .mobile-app__description-buttons .button .mobile-app__btn .mobile-app__btn-text p:last-child {\n  font-size: 16px;\n  font-weight: 600;\n  line-height: 150%;\n  color: #403F3D;\n  transition: all 0.5s ease;\n}\n\n@media (hover: hover) {\n  .mobile-app .button:hover {\n    background: #665F55;\n    transition: all 0.5s ease;\n  }\n  .mobile-app .button:hover .mobile-app__btn svg path {\n    fill: #E1D4C9;\n    transition: all 0.5s ease;\n  }\n  .mobile-app .button:hover .mobile-app__btn .mobile-app__btn-text p {\n    color: #E1D4C9;\n    transition: all 0.5s ease;\n  }\n  .mobile-app .button:hover .mobile-app__btn .mobile-app__btn-text p:last-child {\n    color: #E1D4C9;\n    transition: all 0.5s ease;\n  }\n}\n.footer .footer__content .footer__content-left .footer__content-web .footer__web-twitter {\n  margin-right: 12px;\n}\n.footer .footer__content .footer__content-left .footer__content-web .footer__web-twitter svg {\n  transition: all 0.5s ease;\n}\n.footer .footer__content .footer__content-left .footer__content-web .footer__web-twitter svg path {\n  transition: all 0.1s ease;\n}\n.footer .footer__content .footer__content-left .footer__content-web .footer__web-instagram {\n  margin-right: 12px;\n}\n.footer .footer__content .footer__content-left .footer__content-web .footer__web-instagram svg {\n  transition: all 0.5s ease;\n}\n.footer .footer__content .footer__content-left .footer__content-web .footer__web-instagram svg path {\n  transition: all 0.1s ease;\n}\n.footer .footer__content .footer__content-left .footer__content-web .footer__web-facebook svg {\n  transition: all 0.5s ease;\n}\n.footer .footer__content .footer__content-left .footer__content-web .footer__web-facebook svg path {\n  transition: all 0.1s ease;\n}\n\n@media (hover: hover) {\n  .footer .footer__content .footer__content-left .footer__content-web .footer__web-twitter a:hover svg {\n    fill: #E1D4C9;\n  }\n  .footer .footer__content .footer__content-left .footer__content-web .footer__web-twitter a:hover path {\n    stroke: #403F3D;\n  }\n  .footer .footer__content .footer__content-left .footer__content-web .footer__web-instagram:hover svg {\n    fill: #E1D4C9;\n  }\n  .footer .footer__content .footer__content-left .footer__content-web .footer__web-instagram:hover path {\n    stroke: #403F3D;\n  }\n  .footer .footer__content .footer__content-left .footer__content-web .footer__web-facebook:hover svg {\n    fill: #E1D4C9;\n  }\n  .footer .footer__content .footer__content-left .footer__content-web .footer__web-facebook:hover path {\n    stroke: #403F3D;\n  }\n}\n.footer .footer__content .footer__content-right .footer__contacts-content .footer-link {\n  margin-bottom: 20px;\n  letter-spacing: 0.005rem;\n}\n.footer .footer__content .footer__content-right .footer__contacts-content .footer-link a {\n  font-size: 16px;\n  font-weight: 600;\n  line-height: 150%;\n  color: #E1D4C9;\n  position: relative;\n}\n.footer .footer__content .footer__content-right .footer__contacts-content .footer-link a svg {\n  margin-right: 8px;\n}\n@media screen and (max-width: 1124px) {\n  .footer .footer__content .footer__content-right .footer__contacts-content .footer-link a svg {\n    margin-right: 4px;\n  }\n}\n@media screen and (max-width: 1124px) {\n  .footer .footer__content .footer__content-right .footer__contacts-content .footer-link {\n    margin-bottom: 18px;\n  }\n}\n.footer .footer__content .footer__content-right .footer__contacts-content .footer-link a:before {\n  content: \"\";\n  width: 100%;\n  height: 2px;\n  background-color: #E1D4C9;\n  position: absolute;\n  left: 0;\n  bottom: -4px;\n  transform: scaleX(0);\n  transition: transform 0.5s ease;\n}\n.footer .footer__content .footer__content-right .footer__contacts-content .footer-link p {\n  font-size: 16px;\n  font-weight: 600;\n  line-height: 150%;\n  color: #E1D4C9;\n}\n.footer .footer__content .footer__content-right .footer__contacts-content .footer__contacts-time {\n  display: flex;\n  align-items: center;\n  margin-bottom: 10px;\n}\n.footer .footer__content .footer__content-right .footer__contacts-content .footer__contacts-time svg {\n  margin-right: 8px;\n}\n\n@media (hover: hover) {\n  .footer .footer__content .footer__content-right .footer__contacts-content .footer-link:hover a:before {\n    transform: scaleX(1.1);\n    transition: transform 0.5s ease;\n  }\n}\n.menu .menu__content .menu__content-filter {\n  display: flex;\n  justify-content: center;\n}\n.menu .menu__content .menu__content-filter .filter__btn {\n  display: flex;\n  align-items: center;\n  border: solid 1px #C1B6AD;\n  border-radius: 100px;\n  padding: 8px;\n  margin: 40px 8px 40px 8px;\n  transition: all 0.5s ease;\n}\n.menu .menu__content .menu__content-filter .filter__btn svg {\n  margin-right: 8px;\n}\n.menu .menu__content .menu__content-filter .filter__btn svg rect {\n  transition: all 0.5s ease;\n}\n.menu .menu__content .menu__content-filter .filter__btn p {\n  font-size: 16px;\n  font-weight: 600;\n  line-height: 150%;\n  color: #403F3D;\n  margin-right: 8px;\n  transition: all 0.5s ease;\n}\n.menu .menu__content .menu__content-filter .filter__btn-active {\n  background: #665F55;\n}\n.menu .menu__content .menu__content-filter .filter__btn-active svg rect {\n  fill: #E1D4C9;\n}\n.menu .menu__content .menu__content-filter .filter__btn-active p {\n  color: #E1D4C9;\n}\n\n@media (hover: hover) {\n  .menu .menu__content .menu__content-filter .filter__btn:hover {\n    background: #665F55;\n    cursor: pointer;\n  }\n  .menu .menu__content .menu__content-filter .filter__btn:hover svg rect {\n    fill: #E1D4C9;\n  }\n  .menu .menu__content .menu__content-filter .filter__btn:hover p {\n    color: #E1D4C9;\n  }\n}\n.menu .menu__content-menu {\n  display: grid;\n  grid-template-columns: repeat(4, 310px);\n  column-gap: 2.96%;\n}\n.menu .menu__content-menu .menu__card {\n  min-height: 100%;\n  max-width: 310px;\n  border: 1px solid #C1B6AD;\n  border-radius: 40px;\n  cursor: pointer;\n  position: relative;\n}\n.menu .menu__content-menu .menu__card .menu__card-image {\n  position: relative;\n  overflow: hidden;\n  width: 310px;\n  height: 310px;\n  border-radius: 40px;\n  object-fit: cover;\n}\n.menu .menu__content-menu .menu__card .menu__card-image img {\n  position: absolute;\n  max-width: 100%;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%) scale(1.1);\n  transition: transform 0.4s ease;\n}\n.menu .menu__content-menu .menu__card .menu__card-description {\n  display: flex;\n  flex-direction: column;\n  margin-top: 20px;\n  margin-left: 20px;\n  margin-right: 20px;\n  margin-bottom: 51px;\n}\n.menu .menu__content-menu .menu__card .menu__card-title {\n  margin-bottom: 10px;\n}\n.menu .menu__content-menu .menu__card .menu__card-title h3 {\n  font-size: 24px;\n  font-weight: 600;\n  line-height: 125%;\n  color: #403F3D;\n}\n.menu .menu__content-menu .menu__card .menu__card-subtitle {\n  margin-bottom: 10px;\n}\n.menu .menu__content-menu .menu__card .menu__card-subtitle p {\n  font-size: 16px;\n  font-weight: 400;\n  line-height: 150%;\n  color: #403F3D;\n  letter-spacing: -0.01rem;\n}\n.menu .menu__content-menu .menu__card .menu__card-price {\n  position: absolute;\n  bottom: 20px;\n}\n.menu .menu__content-menu .menu__card .menu__card-price p {\n  font-size: 24px;\n  font-weight: 600;\n  line-height: 125%;\n  color: #403F3D;\n}\n@media screen and (max-width: 1425px) {\n  .menu .menu__content-menu {\n    justify-content: center;\n    grid-template-columns: repeat(3, 310px);\n    grid-auto-rows: minmax(545px, auto);\n    column-gap: 5.8%;\n  }\n}\n@media screen and (max-width: 1050px) {\n  .menu .menu__content-menu {\n    grid-template-columns: repeat(2, 310px);\n  }\n}\n\n@media (hover: hover) {\n  .menu .menu__content-menu .menu__card:hover img {\n    transform: translate(-50%, -50%) scale(1);\n  }\n}\n.header .header__burger-btn {\n  display: none;\n  width: 44px;\n  height: 44px;\n  border: 1px solid #403F3D;\n  border-radius: 50%;\n  position: relative;\n  margin-top: 8px;\n}\n.header .header__burger-btn span {\n  width: 16px;\n  height: 1.5px;\n  left: 13px;\n  top: 21px;\n  position: absolute;\n  background: #403F3D;\n}\n.header .header__burger-btn span:first-child {\n  transform: translateY(-4px);\n}\n.header .header__burger-btn span:last-child {\n  transform: translateY(4px);\n}\n@media (hover: hover) {\n  .header .header__burger-btn:hover {\n    cursor: pointer;\n  }\n}\n@media screen and (max-width: 768px) {\n  .header .header__burger-btn {\n    display: block;\n  }\n  .header .header__nav {\n    position: absolute;\n    right: -380px;\n    top: 0;\n    width: 380px;\n    background: #E1D4C9;\n    height: 1000%;\n    margin: 0;\n  }\n  .header .header__nav ul {\n    display: block;\n  }\n  .header .header__menu-link {\n    position: absolute;\n    right: -380px;\n    top: 6.6rem;\n    width: 380px;\n  }\n}\n\n.menu .menu__content-refresh {\n  display: flex;\n  justify-content: center;\n  display: none;\n}\n.menu .menu__content-refresh button {\n  background: #E1D4C9;\n  padding: 17px 16px 14px 18px;\n  border-radius: 50%;\n  border: 1px solid #403F3D;\n}\n@media screen and (max-width: 1425px) {\n  .menu .menu__content-refresh {\n    display: flex;\n  }\n}\n\nheader {\n  display: flex;\n  justify-content: space-between;\n  margin: 20px 0;\n  height: 60px;\n}\nheader nav {\n  flex-basis: 39.5%;\n  margin: 15px;\n}\n@media screen and (max-width: 1050px) {\n  header nav {\n    flex-basis: 52.5%;\n  }\n}\nheader ul {\n  display: flex;\n  justify-content: space-evenly;\n  list-style: none;\n}\nheader .link {\n  font-size: 16px;\n  font-weight: 600;\n  line-height: 150%;\n  color: #403F3D;\n  text-decoration: none;\n  position: relative;\n  transition: 0.3s ease;\n}\nheader .link:before {\n  content: \"\";\n  width: 100%;\n  height: 2px;\n  background-color: #403F3D;\n  position: absolute;\n  left: 0;\n  bottom: -4px;\n  transform: scaleX(0);\n  transition: transform 0.5s ease;\n}\nheader #link-active {\n  cursor: default;\n}\n@media screen and (max-width: 768px) {\n  header #link-active:before {\n    transform: scaleX(0);\n  }\n}\nheader .header__menu-link {\n  margin: 15px 0;\n}\nheader .header__menu-link img {\n  margin-left: 0.28rem;\n}\n\n@media (hover: hover) {\n  header .link:hover:before {\n    transform: scaleX(1.1);\n    transition: transform 0.5s ease;\n  }\n}\n.enjoy {\n  border-radius: 2.5rem;\n  background-image: url(./../assets/img/img-hero.png);\n  background-position: center;\n  background-size: cover;\n  width: 100%;\n  height: 40.25rem;\n}\n.enjoy .enjoy__content {\n  width: 33.125rem;\n  height: 27.75rem;\n  padding-top: 6.25rem;\n  margin-left: 6.25rem;\n}\n.enjoy .enjoy__content .enjoy__content-title {\n  font-size: 72px;\n  font-weight: 600;\n  line-height: 105%;\n  color: #E1D4C9;\n  letter-spacing: 0.0375rem;\n  margin-bottom: 2.5rem;\n}\n.enjoy .enjoy__content .enjoy__content-title span {\n  font-style: italic;\n  color: #B0907A;\n}\n.enjoy .enjoy__content p {\n  font-size: 16px;\n  font-weight: 400;\n  line-height: 150%;\n  color: #E1D4C9;\n  letter-spacing: -0.0051rem;\n  margin-bottom: 2.5rem;\n}\n@media screen and (max-width: 768px) {\n  .enjoy .enjoy__content {\n    margin-left: 3.7rem;\n  }\n}\n\n.favorite .favorite__content {\n  text-align: center;\n}\n.favorite .favorite__content h2 {\n  font-size: 60px;\n  font-weight: 600;\n  line-height: 125%;\n  color: #403F3D;\n  margin-top: 100px;\n  margin-bottom: 40px;\n}\n.favorite .favorite__content h2 span {\n  font-style: italic;\n  color: #B0907A;\n}\n.favorite .favorite__content .favorite__content-slider {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.favorite .favorite__content .favorite__content-slider .slider__btn-left {\n  rotate: 180deg;\n}\n.favorite .favorite__content .favorite__content-slider .slider-btn {\n  margin-left: 4px;\n  margin-right: 4px;\n}\n.favorite .favorite__content .favorite__content-slider .slider__item img {\n  max-width: 480px;\n  margin-bottom: 19px;\n}\n.favorite .favorite__content .favorite__content-slider .slider__item h3 {\n  font-size: 24px;\n  font-weight: 600;\n  line-height: 125%;\n  color: #403F3D;\n  margin-bottom: 15px;\n}\n.favorite .favorite__content .favorite__content-slider .slider__item p.slider__item-subtitle {\n  font-size: 16px;\n  font-weight: 400;\n  line-height: 150%;\n  max-width: 480px;\n  margin-bottom: 15px;\n}\n.favorite .favorite__content .favorite__content-slider .slider__item p.slider__item-price {\n  font-size: 24px;\n  font-weight: 600;\n  line-height: 125%;\n}\n.favorite .favorite__content .favorite__control-panel {\n  display: flex;\n  justify-content: center;\n  margin-top: 40px;\n}\n.favorite .favorite__content .favorite__control-panel .panel__control {\n  width: 40px;\n  height: 4px;\n  margin-left: 6px;\n  margin-right: 6px;\n  background: #C1B6AD;\n}\n.favorite .favorite__content .favorite__control-panel .panel__control.active {\n  background: #665F55;\n}\n\n.about {\n  margin-top: 100px;\n}\n.about .about__content-title {\n  letter-spacing: 0.015rem;\n}\n.about .about__content-title h2 {\n  font-size: 60px;\n  font-weight: 600;\n  line-height: 125%;\n  color: #403F3D;\n}\n.about .about__content-title h2 span {\n  font-style: italic;\n  color: #B0907A;\n}\n.about .about__content-images {\n  display: flex;\n}\n.about .about__content-images .content__images-left {\n  margin-right: 20px;\n}\n.about .about__content-images .content__images-right {\n  margin-left: 20px;\n}\n.about .about__content-images .images-scales {\n  position: relative;\n  overflow: hidden;\n  width: 660px;\n  border-radius: 20px;\n  object-fit: cover;\n  margin-top: 40px;\n}\n.about .about__content-images .images__scales-first {\n  height: 590px;\n}\n.about .about__content-images .images__scales-second {\n  height: 430px;\n}\n@media screen and (max-width: 1435px) {\n  .about .about__content-images .images__scales-second {\n    display: none;\n  }\n}\n.about .about__content-images .about-images {\n  position: absolute;\n  max-width: 100%;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%) scale(1.1);\n  transition: transform 0.4s ease;\n}\n@media screen and (max-width: 1435px) {\n  .about .about__content-images {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n  }\n  .about .about__content-images .images__scales-second {\n    display: none;\n  }\n  .about .about__content-images .content__images-left {\n    margin-right: 0px;\n  }\n  .about .about__content-images .content__images-right {\n    margin-left: 0px;\n  }\n  .about .about__content-images .images__scales-first {\n    width: 688px;\n    height: 590px;\n  }\n  .about .about__content-images .about-images {\n    transform: translate(-50%, -50%) scale(1.06);\n  }\n}\n\n@media (hover: hover) {\n  .images-scales:hover .about-images {\n    transform: translate(-50%, -50%) scale(1);\n    transition: transform 0.4s ease;\n  }\n}\n.mobile-app {\n  margin-top: 98px;\n  margin-bottom: 98px;\n}\n.mobile-app .mobile-app__content {\n  display: flex;\n  justify-content: space-between;\n}\n.mobile-app .mobile-app__content .mobile-app__content-description {\n  max-width: 630px;\n  margin-top: 144px;\n}\n.mobile-app .mobile-app__content .mobile-app__content-description .mobile-app__description-title {\n  text-align: start;\n  letter-spacing: 0.02rem;\n}\n.mobile-app .mobile-app__content .mobile-app__content-description .mobile-app__description-title h2 {\n  font-size: 60px;\n  font-weight: 600;\n  line-height: 125%;\n  color: #403F3D;\n}\n.mobile-app .mobile-app__content .mobile-app__content-description .mobile-app__description-title h2 span {\n  font-style: italic;\n  color: #B0907A;\n}\n.mobile-app .mobile-app__content .mobile-app__content-description .mobile-app__description-subtitle p {\n  font-size: 16px;\n  font-weight: 400;\n  line-height: 150%;\n  color: #403F3D;\n  margin-top: 40px;\n  margin-bottom: 40px;\n  letter-spacing: -0.005rem;\n}\n@media screen and (max-width: 1140px) {\n  .mobile-app .mobile-app__content {\n    align-items: center;\n    flex-direction: column;\n  }\n  .mobile-app .mobile-app__content .mobile-app__content-description {\n    margin-top: 100px;\n  }\n}\n@media screen and (max-width: 1140px) and (max-width: 850px) {\n  .mobile-app .mobile-app__content .mobile-app__content-description {\n    margin-right: 8%;\n    margin-bottom: 14.5%;\n  }\n}\n@media screen and (max-width: 1140px) {\n  .mobile-app .mobile-app__content .mobile-app__content-description h2 {\n    width: 108%;\n  }\n  .mobile-app .mobile-app__content .mobile-app__content-description p {\n    width: 108%;\n  }\n}\n@media screen and (max-width: 1140px) {\n  .mobile-app {\n    margin-top: 0;\n  }\n}\n\n.footer {\n  background: #665F55;\n  border-radius: 40px;\n}\n.footer .footer__content {\n  display: flex;\n  align-items: center;\n  padding: 100px;\n}\n.footer .footer__content .footer__content-left {\n  max-width: 530px;\n  width: 100%;\n  margin-right: 100px;\n}\n.footer .footer__content .footer__content-left .footer__content-title {\n  margin-bottom: 40px;\n}\n.footer .footer__content .footer__content-left .footer__content-title h2 {\n  font-size: 60px;\n  font-weight: 600;\n  line-height: 125%;\n  color: #E1D4C9;\n  letter-spacing: 0.02rem;\n}\n.footer .footer__content .footer__content-left .footer__content-title h2 span {\n  font-style: italic;\n  color: #B0907A;\n}\n.footer .footer__content .footer__content-left .footer__content-web {\n  display: flex;\n}\n.footer .footer__content .footer__content-right {\n  min-width: 265px;\n}\n.footer .footer__content .footer__content-right .footer__contacts-title {\n  margin-bottom: 40px;\n}\n.footer .footer__content .footer__content-right .footer__contacts-title h3 {\n  font-size: 24px;\n  font-weight: 600;\n  line-height: 125%;\n  color: #E1D4C9;\n}\n@media screen and (max-width: 1140px) {\n  .footer .footer__content .footer__content-left {\n    margin-right: 10%;\n  }\n}\n@media screen and (max-width: 1140px) and (max-width: 1124px) {\n  .footer .footer__content {\n    padding: 100px 60px 96px 60px;\n    flex-direction: column;\n    align-items: start;\n  }\n  .footer .footer__content .footer__content-left {\n    margin-bottom: 97px;\n    margin-right: 0;\n  }\n  .footer .footer__content .footer__content-right .footer__contacts-title {\n    margin-bottom: 37px;\n  }\n}\n\n.menu {\n  margin-bottom: 60px;\n}\n@media screen and (max-width: 1425px) {\n  .menu {\n    margin-bottom: 100px;\n  }\n}\n.menu .menu__content .menu__content-title {\n  text-align: center;\n  max-width: 800px;\n  margin: 0 auto;\n}\n.menu .menu__content .menu__content-title h1 {\n  font-size: 60px;\n  font-weight: 600;\n  line-height: 125%;\n  color: #403F3D;\n}\n.menu .menu__content .menu__content-title h1 span {\n  font-style: italic;\n  color: #B0907A;\n}","@font-face {\n  font-family: 'inter';\n  src: url(./../assets/fonts/Inter-Medium.ttf);\n}\n\nbody {\n  font-family: 'inter';\n}","*,\n*::before,\n*::after {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nhtml {\n  scroll-behavior: smooth;\n}\n\nbody._lock {\n  overflow: hidden;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n\na {\n  text-decoration: none;\n}\n\nli {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n}\n\nbody {\n  color: $text-dark;\n  background: $background-body;\n}\n\n.container__home {\n  max-width: 1440px;\n  padding-left: 40px;\n  padding-right: 40px;\n  width: 100%;\n  margin: 0 auto 40px auto;\n  overflow: hidden;\n  position: relative;\n\n  @media screen and (max-width: 380px) {\n    padding-left: 16px;\n    padding-right: 16px;\n  }\n}\n\n.container__menu {\n  max-width: 1440px;\n  padding-left: 40px;\n  padding-right: 40px;\n  width: 100%;\n  margin: 0 auto 40px auto;\n  overflow: hidden;\n  position: relative;\n\n  @media screen and (max-width: 380px) {\n    padding-left: 16px;\n    padding-right: 16px;\n  }\n}","// text color:\n$text-dark: #403F3D;\n$text-light: #E1D4C9;\n$text-accent: #B0907A;\n\n// background color:\n$background-body: #E1D4C9;\n$background-container: #665F55;\n$background-backdrop: #403F3DCC;\n\n// border color:\n$border-light: #C1B6AD;\n$border-dark: #665F55;\n\n// mixins\n// heading [mobile]\n@mixin heading-mobile-1 {\n  font-size: 42px;\n  font-weight: 600;\n  line-height: 115%;\n}\n\n@mixin heading-mobile-1-accent {\n  font-style: italic;\n}\n\n@mixin heading-mobile-2 {\n  font-size: 42px;\n  font-weight: 600;\n  line-height: 115%;\n}\n\n@mixin heading-mobile-2-accent {\n  font-style: italic;\n}\n\n// heading\n@mixin heading-1 {\n  font-size: 72px;\n  font-weight: 600;\n  line-height: 105%;\n}\n\n@mixin heading-1-accent {\n  font-style: italic;\n}\n\n@mixin heading-2 {\n  font-size: 60px;\n  font-weight: 600;\n  line-height: 125%;\n}\n\n@mixin heading-2-accent {\n  font-style: italic;\n}\n\n@mixin heading-3 {\n  font-size: 24px;\n  font-weight: 600;\n  line-height: 125%;\n}\n\n// body\n@mixin body-medium {\n  font-size: 16px;\n  font-weight: 400;\n  line-height: 150%;\n}\n\n@mixin body-caption {\n  font-size: 10px;\n  font-weight: 600;\n  line-height: 140%;\n}\n\n// action\n@mixin link-button {\n  font-size: 16px;\n  font-weight: 600;\n  line-height: 150%;\n}\n\n@mixin burger-link {\n  font-size: 32px;\n  font-weight: 600;\n  line-height: 125%;\n}",".logo {\n  width: 100px;\n  height: 60px;\n}",".enjoy {\n\n\n  .enjoy__button {\n    width: 12.5rem;\n    height: 4rem;\n\n    button {\n      display: flex;\n      justify-content: center;\n      align-items: center;\n\n      width: 100%;\n      height: 100%;\n\n      background: $background-body;\n      border: 0;\n      border-radius: 6.25rem;\n\n      cursor: pointer;\n\n      span {\n        color: $text-dark;\n        transform: translateX(29%);\n        transition: all .5s ease;\n\n        @media screen and (max-width:768px) {\n        transform: translateX(0);\n        }\n      }\n\n      svg {\n        opacity: 0;\n        margin-left: 8px;\n        animation: btn-opacity-0 .3s ease;\n\n        @media screen and (max-width:768px) {\n          opacity: 1;\n        }\n      }\n    }\n\n\n  }\n}\n\n@media (hover:hover) {\n  .enjoy__button:hover {\n    button {\n      span {\n        transform: translateX(0%);\n        transition: all .5s ease;\n      }\n\n      svg {\n        animation: btn-opacity-1 .3s ease forwards;\n      }\n    }\n  }\n}\n\n@keyframes btn-opacity-1 {\n  0% {\n    opacity: 0%;\n  }\n\n  50% {\n    opacity: 50%;\n  }\n\n  100% {\n    opacity: 100%;\n  }\n}\n\n@keyframes btn-opacity-0 {\n  0% {\n    opacity: 100%;\n  }\n\n  50% {\n    opacity: 50%;\n  }\n\n  100% {\n    opacity: 0%;\n  }\n}",".favorite {\n\n  .favorite__content-slider {\n\n    .slider-btn {\n      cursor: pointer;\n      transition: all .3s ease;\n\n      svg {\n        transition: all .3s ease;\n\n        path {\n          transition: all .3s ease;\n        }\n      }\n    }\n  }\n}\n\n@media (hover:hover) {\n\n  .slider-btn:hover {\n\n    svg {\n      fill: $background-container;\n\n      path {\n        stroke: $text-light;\n      }\n    }\n  }\n\n  .slider__btn-right:hover {\n\n    transform: translateY(-5%);\n  }\n\n  .slider__btn-left:hover {\n\n    transform: translateY(5%);\n  }\n}\n\n.slider__btn-right:active {\n\n  transform: translateY(0);\n}\n\n.slider__btn-left:active {\n\n  transform: translateY(0);\n}",".mobile-app {\n\n  .mobile-app__description-buttons {\n    display: flex;\n\n    .apple__download-btn {\n      margin-right: 20px;\n\n      .mobile-app__btn {\n\n        svg {\n          margin-right: 8px;\n        }\n      }\n    }\n\n    .button {\n\n      cursor: pointer;\n      background: $background-body;\n      border: 1px solid $border-dark;\n      border-radius: 100px;\n      width: 200px;\n      transition: all .5s ease;\n\n      .mobile-app__btn {\n        display: flex;\n        align-items: center;\n\n        svg {\n          margin-left: 20px;\n\n          path {\n            transition: all .5s ease;\n          }\n        }\n\n        .mobile-app__btn-text {\n\n          margin: 12px 0 12px 8px;\n\n          p {\n            @include body-caption;\n            color: $text-dark;\n            text-align: start;\n            letter-spacing: -0.005rem;\n            transition: all .5s ease;\n          }\n\n          p:last-child {\n            @include link-button;\n            color: $text-dark;\n            transition: all .5s ease;\n          }\n        }\n      }\n    }\n\n  }\n}\n\n@media (hover:hover) {\n  .mobile-app {\n\n    .button:hover {\n      background: $background-container;\n      transition: all .5s ease;\n\n      .mobile-app__btn {\n\n        svg {\n\n          path {\n            fill: $text-light;\n            transition: all .5s ease;\n          }\n        }\n\n        .mobile-app__btn-text {\n\n          p {\n            color: $text-light;\n            transition: all .5s ease;\n          }\n\n          p:last-child {\n            color: $text-light;\n            transition: all .5s ease;\n          }\n        }\n      }\n    }\n  }\n}",".footer {\r\n  .footer__content {\r\n    .footer__content-left {\r\n      .footer__content-web {\r\n        .footer__web-twitter {\r\n          margin-right: 12px;\r\n\r\n          svg {\r\n            transition: all .5s ease;\r\n\r\n            path {\r\n              transition: all .1s ease;\r\n            }\r\n          }\r\n        }\r\n\r\n        .footer__web-instagram {\r\n          margin-right: 12px;\r\n\r\n          svg {\r\n            transition: all .5s ease;\r\n\r\n            path {\r\n              transition: all .1s ease;\r\n            }\r\n          }\r\n        }\r\n\r\n        .footer__web-facebook {\r\n          svg {\r\n            transition: all .5s ease;\r\n\r\n            path {\r\n              transition: all .1s ease;\r\n            }\r\n          }\r\n        }\r\n      }\r\n    }\r\n  }\r\n}\r\n\r\n@media (hover:hover) {\r\n  .footer {\r\n    .footer__content {\r\n      .footer__content-left {\r\n        .footer__content-web {\r\n          .footer__web-twitter {\r\n\r\n            a:hover {\r\n              svg {\r\n                fill: $background-body;\r\n              }\r\n\r\n              path {\r\n                stroke: $text-dark;\r\n              }\r\n            }\r\n          }\r\n\r\n          .footer__web-instagram:hover {\r\n            svg {\r\n              fill: $background-body;\r\n            }\r\n\r\n            path {\r\n              stroke: $text-dark;\r\n            }\r\n          }\r\n\r\n\r\n\r\n          .footer__web-facebook:hover {\r\n            svg {\r\n              fill: $background-body;\r\n            }\r\n\r\n            path {\r\n              stroke: $text-dark;\r\n            }\r\n          }\r\n        }\r\n      }\r\n    }\r\n  }\r\n}",".footer {\r\n\r\n  .footer__content {\r\n\r\n    .footer__content-right {\r\n\r\n      .footer__contacts-content {\r\n\r\n        .footer-link {\r\n          margin-bottom: 20px;\r\n          letter-spacing: 0.005rem;\r\n\r\n          a {\r\n            @include link-button;\r\n            color: $text-light;\r\n            position: relative;\r\n\r\n            svg {\r\n              margin-right: 8px;\r\n\r\n              @media screen and (max-width:1124px) {\r\n                margin-right: 4px;\r\n              }\r\n            }\r\n          }\r\n\r\n          @media screen and (max-width:1124px) {\r\n            margin-bottom: 18px;\r\n          }\r\n\r\n          a:before {\r\n            content: '';\r\n            width: 100%;\r\n            height: 2px;\r\n            background-color: $text-light;\r\n            position: absolute;\r\n            left: 0;\r\n            bottom: -4px;\r\n            transform: scaleX(0);\r\n            transition: transform .5s ease;\r\n          }\r\n\r\n          p {\r\n            @include link-button;\r\n            color: $text-light;\r\n          }\r\n        }\r\n\r\n        .footer__contacts-time {\r\n          display: flex;\r\n          align-items: center;\r\n          margin-bottom: 10px;\r\n\r\n          svg {\r\n            margin-right: 8px;\r\n          }\r\n        }\r\n      }\r\n    }\r\n  }\r\n}\r\n\r\n@media (hover:hover) {\r\n  .footer {\r\n\r\n    .footer__content {\r\n\r\n      .footer__content-right {\r\n\r\n        .footer__contacts-content {\r\n\r\n          .footer-link:hover {\r\n\r\n            a:before {\r\n              transform: scaleX(1.1);\r\n              transition: transform .5s ease;\r\n            }\r\n          }\r\n        }\r\n      }\r\n    }\r\n  }\r\n}",".menu {\r\n  .menu__content {\r\n\r\n    .menu__content-filter {\r\n      display: flex;\r\n      justify-content: center;\r\n\r\n      .filter__btn {\r\n        display: flex;\r\n        align-items: center;\r\n        border: solid 1px $border-light;\r\n        border-radius: 100px;\r\n        padding: 8px;\r\n        margin: 40px 8px 40px 8px;\r\n        transition: all .5s ease;\r\n\r\n        svg {\r\n          margin-right: 8px;\r\n\r\n          rect {\r\n            transition: all .5s ease;\r\n          }\r\n        }\r\n\r\n        p {\r\n          @include link-button;\r\n          color: $text-dark;\r\n          margin-right: 8px;\r\n          transition: all .5s ease;\r\n        }\r\n      }\r\n\r\n      .filter__btn-active {\r\n        background: $background-container;\r\n\r\n        svg {\r\n          rect {\r\n            fill: $background-body;\r\n          }\r\n        }\r\n\r\n        p {\r\n          color: $text-light;\r\n        }\r\n      }\r\n    }\r\n  }\r\n}\r\n\r\n@media (hover:hover) {\r\n  .menu {\r\n    .menu__content {\r\n      .menu__content-filter {\r\n\r\n        .filter__btn:hover {\r\n          background: $background-container;\r\n          cursor: pointer;\r\n\r\n          svg {\r\n            rect {\r\n              fill: $background-body;\r\n            }\r\n          }\r\n\r\n          p {\r\n            color: $text-light;\r\n          }\r\n        }\r\n      }\r\n    }\r\n  }\r\n}",".menu {\r\n  .menu__content-menu {\r\n    display: grid;\r\n    grid-template-columns: repeat(4, 310px);\r\n    column-gap: 2.96%;\r\n\r\n    .menu__card {\r\n      // display: flex;\r\n      // flex-direction: column;\r\n\r\n      min-height: 100%;\r\n      max-width: 310px;\r\n      border: 1px solid $border-light;\r\n      border-radius: 40px;\r\n      cursor: pointer;\r\n      position: relative;\r\n\r\n      .menu__card-image {\r\n        position: relative;\r\n        overflow: hidden;\r\n        width: 310px;\r\n        height: 310px;\r\n        border-radius: 40px;\r\n        object-fit: cover;\r\n\r\n        img {\r\n          position: absolute;\r\n          max-width: 100%;\r\n          top: 50%;\r\n          left: 50%;\r\n          transform: translate(-50%, -50%) scale(1.1);\r\n          transition: transform .4s ease;\r\n        }\r\n      }\r\n\r\n      .menu__card-description {\r\n        display: flex;\r\n        flex-direction: column;\r\n        margin-top: 20px;\r\n        margin-left: 20px;\r\n        margin-right: 20px;\r\n        margin-bottom: 51px;\r\n      }\r\n\r\n      .menu__card-title {\r\n        margin-bottom: 10px;\r\n\r\n        h3 {\r\n          @include heading-3;\r\n          color: $text-dark;\r\n        }\r\n      }\r\n\r\n      .menu__card-subtitle {\r\n        margin-bottom: 10px;\r\n\r\n        p {\r\n          @include body-medium;\r\n          color: $text-dark;\r\n          letter-spacing: -0.01rem;\r\n        }\r\n      }\r\n\r\n      .menu__card-price {\r\n        position: absolute;\r\n        bottom: 20px;\r\n\r\n        p {\r\n          @include heading-3;\r\n          color: $text-dark;\r\n        }\r\n      }\r\n    }\r\n\r\n    @media screen and (max-width:1425px) {\r\n      justify-content: center;\r\n      grid-template-columns: repeat(3, 310px);\r\n      grid-auto-rows: minmax(545px, auto);\r\n      column-gap: 5.8%;\r\n    }\r\n\r\n    @media screen and (max-width:1050px) {\r\n\r\n      grid-template-columns: repeat(2, 310px);\r\n    }\r\n  }\r\n}\r\n\r\n@media (hover:hover) {\r\n  .menu {\r\n    .menu__content-menu {\r\n      .menu__card:hover {\r\n\r\n        img {\r\n          transform: translate(-50%, -50%) scale(1);\r\n        }\r\n      }\r\n    }\r\n  }\r\n}",".header {\r\n  .header__burger-btn {\r\n    display: none;\r\n    width: 44px;\r\n    height: 44px;\r\n    border: 1px solid $text-dark;\r\n    border-radius: 50%;\r\n    position: relative;\r\n    margin-top: 8px;\r\n\r\n    span {\r\n      width: 16px;\r\n      height: 1.5px;\r\n      left: 13px;\r\n      top: 21px;\r\n      position: absolute;\r\n      background: $text-dark;\r\n\r\n      &:first-child {\r\n        transform: translateY(-4px);\r\n      }\r\n\r\n      &:last-child {\r\n        transform: translateY(4px);\r\n      }\r\n    }\r\n  }\r\n\r\n  @media (hover:hover) {\r\n    .header__burger-btn:hover {\r\n      cursor: pointer;\r\n    }\r\n  }\r\n\r\n  @media screen and (max-width: 768px) {\r\n    .header__burger-btn {\r\n      display: block;\r\n    }\r\n\r\n    .header__nav {\r\n      position: absolute;\r\n      right: -380px;\r\n      top: 0;\r\n      width: 380px;\r\n      background: $background-body;\r\n      height: 1000%;\r\n      margin: 0;\r\n\r\n      ul {\r\n        display: block;\r\n      }\r\n    }\r\n\r\n    .header__menu-link {\r\n      position: absolute;\r\n      right: -380px;\r\n      top: 6.6rem;\r\n      width: 380px;\r\n    }\r\n  }\r\n}",".menu {\r\n  .menu__content-refresh {\r\n    display: flex;\r\n    justify-content: center;\r\n    display: none;\r\n\r\n\r\n    button {\r\n      background: $background-body;\r\n      padding: 17px 16px 14px 18px;\r\n      border-radius: 50%;\r\n      border: 1px solid $text-dark;\r\n    }\r\n\r\n    @media screen and (max-width:1425px) {\r\n      display: flex;\r\n    }\r\n  }\r\n}","header {\n  display: flex;\n  justify-content: space-between;\n\n  margin: 20px 0;\n  height: 60px;\n\n  nav {\n    flex-basis: 39.5%;\n    margin: 15px;\n\n    @media screen and (max-width: 1050px) {\n      flex-basis: 52.5%;\n    }\n  }\n\n  ul {\n    display: flex;\n    justify-content: space-evenly;\n\n    list-style: none;\n  }\n\n  .link {\n    @include link-button;\n    color: $text-dark;\n    text-decoration: none;\n\n    position: relative;\n    transition: 0.3s ease;\n  }\n\n  .link:before {\n    content: '';\n    width: 100%;\n    height: 2px;\n    background-color: $text-dark;\n    position: absolute;\n    left: 0;\n    bottom: -4px;\n    transform: scaleX(0);\n    transition: transform .5s ease;\n  }\n\n  #link-active {\n    cursor: default;\n  }\n\n  #link-active:before {\n    @media screen and (max-width: 768px) {\n      transform: scaleX(0);\n    }\n  }\n\n  .header__menu-link {\n    margin: 15px 0;\n\n    img {\n      margin-left: 0.28rem;\n    }\n  }\n}\n\n\n@media (hover:hover) {\n\n  header {\n    .link:hover:before {\n      transform: scaleX(1.1);\n      transition: transform .5s ease;\n    }\n  }\n}",".enjoy {\n  border-radius: 2.5rem;\n  background-image: url(./../assets/img/img-hero.png);\n  background-position: center;\n  background-size: cover;\n\n  width: 100%;\n  height: 40.25rem;\n\n  .enjoy__content {\n    width: 33.125rem;\n    height: 27.75rem;\n\n    padding-top: 6.25rem;\n    margin-left: 6.25rem;\n\n    .enjoy__content-title {\n      @include heading-1;\n      color: $text-light;\n      letter-spacing: 0.0375rem;\n      margin-bottom: 2.5rem;\n\n      span {\n        @include heading-1-accent;\n        color: $text-accent\n      }\n    }\n\n    p {\n      @include body-medium;\n      color: $text-light;\n      letter-spacing: -0.0051rem;\n      margin-bottom: 2.5rem;\n    }\n\n    @media screen and (max-width:768px) {\n      margin-left: 3.7rem;\n    }\n  }\n}",".favorite {\r\n\r\n  .favorite__content {\r\n    text-align: center;\r\n\r\n    h2 {\r\n      @include heading-2;\r\n      color: $text-dark;\r\n\r\n      margin-top: 100px;\r\n      margin-bottom: 40px;\r\n\r\n      span {\r\n        @include heading-2-accent;\r\n        color: $text-accent;\r\n      }\r\n    }\r\n\r\n    .favorite__content-slider {\r\n      display: flex;\r\n      justify-content: space-between;\r\n      align-items: center;\r\n\r\n      .slider__btn-left {\r\n        rotate: 180deg;\r\n      }\r\n\r\n      .slider-btn {\r\n        margin-left: 4px;\r\n        margin-right: 4px;\r\n      }\r\n\r\n      .slider__item {\r\n\r\n        img {\r\n          max-width: 480px;\r\n          margin-bottom: 19px\r\n        }\r\n\r\n        h3 {\r\n          @include heading-3;\r\n          color: $text-dark;\r\n\r\n          margin-bottom: 15px;\r\n        }\r\n\r\n        p.slider__item-subtitle {\r\n          @include body-medium;\r\n\r\n          max-width: 480px;\r\n          margin-bottom: 15px;\r\n        }\r\n\r\n        p.slider__item-price {\r\n          @include heading-3;\r\n        }\r\n      }\r\n    }\r\n\r\n    .favorite__control-panel {\r\n      display: flex;\r\n      justify-content: center;\r\n      margin-top: 40px;\r\n\r\n      .panel__control {\r\n        width: 40px;\r\n        height: 4px;\r\n        margin-left: 6px;\r\n        margin-right: 6px;\r\n\r\n        background: $border-light;\r\n      }\r\n\r\n      .panel__control.active {\r\n        background: $border-dark;\r\n      }\r\n    }\r\n  }\r\n}",".about {\r\n  margin-top: 100px;\r\n\r\n  .about__content-title {\r\n    letter-spacing: 0.015rem;\r\n\r\n    h2 {\r\n      @include heading-2;\r\n      color: $text-dark;\r\n\r\n      span {\r\n        @include heading-2-accent;\r\n        color: $text-accent;\r\n      }\r\n    }\r\n  }\r\n\r\n  .about__content-images {\r\n    display: flex;\r\n\r\n    .content__images-left {\r\n      margin-right: 20px;\r\n    }\r\n\r\n    .content__images-right {\r\n      margin-left: 20px;\r\n    }\r\n\r\n    .images-scales {\r\n      position: relative;\r\n      overflow: hidden;\r\n      width: 660px;\r\n      // width: 100%;\r\n      border-radius: 20px;\r\n      object-fit: cover;\r\n      margin-top: 40px;\r\n\r\n    }\r\n\r\n    .images__scales-first {\r\n      height: 590px;\r\n    }\r\n\r\n    .images__scales-second {\r\n      height: 430px;\r\n\r\n      @media screen and (max-width:1435px) {\r\n        display: none;\r\n      }\r\n    }\r\n\r\n    .about-images {\r\n      position: absolute;\r\n      max-width: 100%;\r\n      top: 50%;\r\n      left: 50%;\r\n      transform: translate(-50%, -50%) scale(1.1);\r\n      transition: transform .4s ease;\r\n    }\r\n\r\n    @media screen and (max-width:1435px) {\r\n      display: flex;\r\n      flex-direction: column;\r\n      align-items: center;\r\n\r\n      .images__scales-second {\r\n        display: none;\r\n      }\r\n\r\n      .content__images-left {\r\n        margin-right: 0px;\r\n      }\r\n\r\n      .content__images-right {\r\n        margin-left: 0px;\r\n      }\r\n\r\n      .images__scales-first {\r\n        width: 688px;\r\n        height: 590px;\r\n      }\r\n\r\n      .about-images {\r\n        transform: translate(-50%, -50%) scale(1.06);\r\n\r\n      }\r\n    }\r\n  }\r\n}\r\n\r\n@media (hover:hover) {\r\n  .images-scales:hover {\r\n    .about-images {\r\n      transform: translate(-50%, -50%) scale(1);\r\n      transition: transform .4s ease;\r\n\r\n    }\r\n  }\r\n}",".mobile-app {\r\n  margin-top: 98px;\r\n  margin-bottom: 98px;\r\n\r\n  .mobile-app__content {\r\n    display: flex;\r\n    justify-content: space-between;\r\n\r\n    .mobile-app__content-description {\r\n      max-width: 630px;\r\n      margin-top: 144px;\r\n\r\n      .mobile-app__description-title {\r\n        text-align: start;\r\n        letter-spacing: 0.02rem;\r\n\r\n        h2 {\r\n          @include heading-2;\r\n          color: $text-dark;\r\n\r\n          span {\r\n            @include heading-2-accent;\r\n            color: $text-accent;\r\n          }\r\n        }\r\n      }\r\n\r\n      .mobile-app__description-subtitle {\r\n\r\n        p {\r\n          @include body-medium;\r\n          color: $text-dark;\r\n          margin-top: 40px;\r\n          margin-bottom: 40px;\r\n          letter-spacing: -0.005rem;\r\n        }\r\n      }\r\n    }\r\n\r\n    @media screen and (max-width:1140px) {\r\n      align-items: center;\r\n      flex-direction: column;\r\n\r\n      .mobile-app__content-description {\r\n        margin-top: 100px;\r\n\r\n        @media screen and (max-width:850px) {\r\n        margin-right: 8%;\r\n        margin-bottom: 14.5%;\r\n        }\r\n\r\n        h2 {\r\n          width: 108%;\r\n        }\r\n\r\n        p {\r\n          width: 108%;\r\n        }\r\n      }\r\n    }\r\n  }\r\n\r\n  @media screen and (max-width:1140px) {\r\n    margin-top: 0;\r\n  }\r\n}",".footer {\r\n  background: $background-container;\r\n  border-radius: 40px;\r\n\r\n  .footer__content {\r\n    display: flex;\r\n    align-items: center;\r\n    padding: 100px;\r\n\r\n    .footer__content-left {\r\n      max-width: 530px;\r\n      width: 100%;\r\n      margin-right: 100px;\r\n\r\n      .footer__content-title {\r\n        margin-bottom: 40px;\r\n\r\n        h2 {\r\n          @include heading-2;\r\n          color: $text-light;\r\n          letter-spacing: 0.02rem;\r\n\r\n          span {\r\n            @include heading-2-accent;\r\n            color: $text-accent;\r\n          }\r\n        }\r\n      }\r\n\r\n      .footer__content-web {\r\n        display: flex;\r\n      }\r\n    }\r\n\r\n    .footer__content-right {\r\n      min-width: 265px;\r\n\r\n      .footer__contacts-title {\r\n        margin-bottom: 40px;\r\n\r\n        h3 {\r\n          @include heading-3;\r\n          color: $text-light;\r\n        }\r\n      }\r\n    }\r\n\r\n    @media screen and (max-width:1140px) {\r\n      .footer__content-left {\r\n        margin-right: 10%;\r\n      }\r\n\r\n      @media screen and (max-width:1124px) {\r\n        padding: 100px 60px 96px 60px;\r\n        flex-direction: column;\r\n        align-items: start;\r\n\r\n        .footer__content-left {\r\n          margin-bottom: 97px;\r\n          margin-right: 0;\r\n        }\r\n\r\n        .footer__content-right {\r\n          .footer__contacts-title {\r\n            margin-bottom: 37px;\r\n          }\r\n        }\r\n      }\r\n    }\r\n  }\r\n}",".menu {\r\n  margin-bottom: 60px;\r\n\r\n  @media screen and (max-width:1425px) {\r\n    margin-bottom: 100px;\r\n  }\r\n\r\n  .menu__content {\r\n    .menu__content-title {\r\n      text-align: center;\r\n      max-width: 800px;\r\n      margin: 0 auto;\r\n\r\n      h1 {\r\n        @include heading-2;\r\n        color: $text-dark;\r\n\r\n        span {\r\n          @include heading-2-accent;\r\n          color: $text-accent;\r\n        }\r\n      }\r\n    }\r\n  }\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/index.html":
/*!************************!*\
  !*** ./src/index.html ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/html-loader/dist/runtime/getUrl.js */ "./node_modules/html-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/icon/coffee-cup.svg */ "./src/assets/icon/coffee-cup.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/icon/logo.svg */ "./src/assets/icon/logo.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/img/about-1.png */ "./src/assets/img/about-1.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/img/about-2.png */ "./src/assets/img/about-2.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/img/about-3.png */ "./src/assets/img/about-3.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/img/about-4.png */ "./src/assets/img/about-4.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_6___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/img/mobile-screens.png */ "./src/assets/img/mobile-screens.png"), __webpack_require__.b);
// Module
var ___HTML_LOADER_REPLACEMENT_0___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_0___);
var ___HTML_LOADER_REPLACEMENT_1___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_1___);
var ___HTML_LOADER_REPLACEMENT_2___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_2___);
var ___HTML_LOADER_REPLACEMENT_3___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_3___);
var ___HTML_LOADER_REPLACEMENT_4___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_4___);
var ___HTML_LOADER_REPLACEMENT_5___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_5___);
var ___HTML_LOADER_REPLACEMENT_6___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_6___);
var code = "<!DOCTYPE html>\n<html lang=\"en\">\n\n<head>\n  <meta charset=\"UTF-8\">\n  <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <link rel=\"icon\" href=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\">\n  <title>Coffee | Home</title>\n</head>\n\n<body>\n  <div class=\"container__home\">\n    <header class=\"header\">\n      <div class=\"header__logo-svg logo\">\n        <img src=\"" + ___HTML_LOADER_REPLACEMENT_1___ + "\" alt=\"\">\n      </div>\n      <nav class=\"header__nav\">\n        <ul>\n          <li><a href=\"#favorite\" class=\"nav-link link\">Favorite coffee</a></li>\n          <li><a href=\"#about\" class=\"nav-link link\">About</a></li>\n          <li><a href=\"#app\" class=\"nav-link link\">Mobile app</a></li>\n          <li><a href=\"#contacts\" class=\"nav-link link\">Contact us</a></li>\n        </ul>\n      </nav>\n      <div class=\"header__menu-link\">\n        <a href=\"menu.html\" class=\"menu__link-text link\">\n          <span>Menu</span>\n          <img src=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\" alt=\"\">\n        </a>\n      </div>\n      <div class=\"header__burger-btn\">\n        <span></span><span></span>\n      </div>\n    </header>\n    <main class=\"main\">\n      <section id=\"enjoy\" class=\"enjoy\">\n        <div class=\"enjoy__content\">\n          <h1 class=\"enjoy__content-title\">\n            <span>Enjoy</span> premium coffee at our charming cafe\n          </h1>\n          <p class=\"enjoy__content-subtitle\">\n            With its inviting atmosphere and delicious coffee options, the Coffee House\n            Resource is a popular destination for coffee lovers and those seeking a warm and inviting space to enjoy\n            their favorite beverage.\n          </p>\n          <div class=\"enjoy__button\">\n            <button onclick=\"window.location.href = 'menu.html';\" class=\"enjoy__button-btn\">\n              <span>Menu</span>\n              <svg class=\"enjoy__button-svg\" width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" fill=\"none\"\n                xmlns=\"http://www.w3.org/2000/svg\">\n                <path\n                  d=\"M14.166 9.76667V11.6667C14.166 14.8883 11.5543 17.5 8.33268 17.5C5.11102 17.5 2.49935 14.8883 2.49935 11.6667V9.76667C2.49935 9.4353 2.76798 9.16667 3.09935 9.16667H13.566C13.8974 9.16667 14.166 9.4353 14.166 9.76667Z\"\n                  stroke=\"#403F3D\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n                <path\n                  d=\"M9.99935 7.49996C9.99935 6.66663 10.5946 5.83329 11.7851 5.83329V5.83329C13.1 5.83329 14.166 4.7673 14.166 3.45234V2.91663\"\n                  stroke=\"#403F3D\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n                <path\n                  d=\"M6.66732 7.5V7.08333C6.66732 5.70262 7.78661 4.58333 9.16732 4.58333V4.58333C10.0878 4.58333 10.834 3.83714 10.834 2.91667V2.5\"\n                  stroke=\"#403F3D\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n                <path\n                  d=\"M13.334 9.16663H15.4173C16.5679 9.16663 17.5007 10.0994 17.5007 11.25C17.5007 12.4006 16.5679 13.3333 15.4173 13.3333H14.1673\"\n                  stroke=\"#403F3D\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n              </svg>\n            </button>\n          </div>\n        </div>\n      </section>\n      <section id=\"favorite\" class=\"favorite\">\n        <div class=\"favorite__content\">\n          <div class=\"favorite__content-title\">\n            <h2>Choose your <span>favorite</span> coffee</h2>\n          </div>\n          <div class=\"favorite__content-slider\">\n            <div class=\"slider__btn-left slider-btn\">\n              <svg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" fill=\"#E1D4C9\" xmlns=\"http://www.w3.org/2000/svg\">\n                <rect x=\"0.5\" y=\"0.5\" width=\"59\" height=\"59\" rx=\"29.5\" stroke=\"#665F55\" />\n                <path d=\"M24 30H36.5M36.5 30L30.5 24M36.5 30L30.5 36\" stroke=\"#403F3D\" stroke-linecap=\"round\"\n                  stroke-linejoin=\"round\" />\n              </svg>\n            </div>\n            <div class=\"slider__content\"></div>\n            <div class=\"slider__btn-right slider-btn\">\n              <svg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" fill=\"#E1D4C9\" xmlns=\"http://www.w3.org/2000/svg\">\n                <rect x=\"0.5\" y=\"0.5\" width=\"59\" height=\"59\" rx=\"29.5\" stroke=\"#665F55\" />\n                <path d=\"M24 30H36.5M36.5 30L30.5 24M36.5 30L30.5 36\" stroke=\"#403F3D\" stroke-linecap=\"round\"\n                  stroke-linejoin=\"round\" />\n              </svg>\n            </div>\n          </div>\n          <div class=\"favorite__control-panel\">\n            <div class=\"panel__control active\"></div>\n            <div class=\"panel__control\"></div>\n            <div class=\"panel__control\"></div>\n          </div>\n        </div>\n      </section>\n      <section id=\"about\" class=\"about\">\n        <div class=\"about__content\">\n          <div class=\"about__content-title\">\n            <h2>Resource is <span>the perfect and cozy place</span> where you can enjoy a variety of hot beverages,\n              relax, catch up\n              with friends, or get some work done.</h2>\n          </div>\n          <div class=\"about__content-images\">\n            <div class=\"content__images-left\">\n              <div class=\"images__scales-first images-scales\">\n                <img class=\"first__image-size about-images\" src=\"" + ___HTML_LOADER_REPLACEMENT_2___ + "\" alt=\"\">\n              </div>\n              <div class=\"images__scales-second images-scales\">\n                <img class=\"second__image-size about-images\" src=\"" + ___HTML_LOADER_REPLACEMENT_3___ + "\" alt=\"\">\n              </div>\n            </div>\n            <div class=\"content__images-right\">\n              <div class=\"images__scales-second images-scales\">\n                <img class=\"second__image-size about-images\" src=\"" + ___HTML_LOADER_REPLACEMENT_4___ + "\" alt=\"\">\n              </div>\n              <div class=\"images__scales-first images-scales\">\n                <img class=\"first__image-size about-images\" src=\"" + ___HTML_LOADER_REPLACEMENT_5___ + "\" alt=\"\">\n              </div>\n            </div>\n          </div>\n        </div>\n      </section>\n      <section id=\"app\" class=\"mobile-app\">\n        <div class=\"mobile-app__content\">\n          <div class=\"mobile-app__content-description\">\n            <div class=\"mobile-app__description-title\">\n              <h2><span>Download</span> our apps to start ordering</h2>\n            </div>\n            <div class=\"mobile-app__description-subtitle\">\n              <p>Download the Resource app today and experience the comfort of ordering your favorite coffee from\n                wherever you are</p>\n            </div>\n            <div class=\"mobile-app__description-buttons\">\n              <div class=\"apple__download-btn\">\n                <div class=\"button\">\n                  <div class=\"apple__app-btn mobile-app__btn\">\n                    <svg width=\"28\" height=\"33\" viewBox=\"0 0 28 33\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                      <path\n                        d=\"M22.7073 17.6307C22.6704 13.6324 26.065 11.6872 26.2203 11.5966C24.2977 8.86366 21.3178 8.49026 20.2707 8.46048C17.7679 8.20369 15.3403 9.92062 14.0654 9.92062C12.765 9.92062 10.8017 8.48529 8.68579 8.52747C5.96293 8.56841 3.41566 10.1055 2.0186 12.4923C-0.864579 17.359 1.28572 24.5108 4.04802 28.4446C5.42981 30.3712 7.04444 32.5223 9.15784 32.4466C11.2254 32.3635 11.9978 31.1614 14.4929 31.1614C16.9651 31.1614 17.6903 32.4466 19.8457 32.3983C22.0647 32.3635 23.4618 30.463 24.7952 28.519C26.392 26.3108 27.0333 24.1362 27.0588 24.0245C27.0066 24.0071 22.7493 22.4229 22.7073 17.6307Z\"\n                        fill=\"#403F3D\" />\n                      <path\n                        d=\"M18.6357 5.87268C19.7477 4.51675 20.5086 2.67205 20.2974 0.800049C18.6879 0.86952 16.675 1.88554 15.5159 3.21169C14.4903 4.38029 13.5742 6.29571 13.8109 8.097C15.6189 8.2285 17.4753 7.20752 18.6357 5.87268Z\"\n                        fill=\"#403F3D\" />\n                    </svg>\n                    <div class=\"mobile-app__btn-text\">\n                      <p>Available on the</p>\n                      <p>App Store</p>\n                    </div>\n                  </div>\n                </div>\n              </div>\n              <div class=\"google__download-btn\">\n                <div class=\"button\">\n                  <div class=\"google__app-btn mobile-app__btn\">\n                    <svg width=\"36\" height=\"36\" viewBox=\"0 0 36 36\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                      <path\n                        d=\"M3.7558 3.20297C3.39335 3.57289 3.18359 4.14884 3.18359 4.89471V31.4994C3.18359 32.2453 3.39335 32.8212 3.7558 33.1911L3.84525 33.2723L19.1359 18.37V18.0181L3.84525 3.11575L3.7558 3.20297Z\"\n                        fill=\"#403F3D\" />\n                      <path\n                        d=\"M26.0776 23.34L20.9863 18.37V18.0181L26.0837 13.0482L26.1979 13.1128L32.2345 16.4617C33.9573 17.4121 33.9573 18.976 32.2345 19.9324L26.1979 23.2753L26.0776 23.34Z\"\n                        fill=\"#403F3D\" />\n                      <path\n                        d=\"M25.2733 24.2007L20.0617 19.1195L4.68164 34.1166C5.25384 34.7031 6.18695 34.7737 7.24807 34.1873L25.2733 24.2007Z\"\n                        fill=\"#403F3D\" />\n                      <path\n                        d=\"M25.2733 12.1876L7.24807 2.20103C6.18695 1.62058 5.25384 1.69125 4.68164 2.27772L20.0617 17.2688L25.2733 12.1876Z\"\n                        fill=\"#403F3D\" />\n                    </svg>\n                    <div class=\"mobile-app__btn-text\">\n                      <p>Available on</p>\n                      <p>Google Play</p>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"mobile-app__content-image\">\n            <img src=\"" + ___HTML_LOADER_REPLACEMENT_6___ + "\" alt=\"\">\n          </div>\n        </div>\n      </section>\n    </main>\n    <footer id=\"contacts\" class=\"footer\">\n      <div class=\"footer__content\">\n        <div class=\"footer__content-left\">\n          <div class=\"footer__content-title\">\n            <h2>Sip, Savor, Smile. <span>It’s coffee time!</span></h2>\n          </div>\n          <div class=\"footer__content-web\">\n            <div class=\"footer__web-twitter\">\n              <a target=\"_blank\" href=\"https://twitter.com/?lang=ru\">\n                <svg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" fill=\"#665F55\" xmlns=\"http://www.w3.org/2000/svg\">\n                  <rect x=\"0.5\" y=\"0.5\" width=\"59\" height=\"59\" rx=\"29.5\" stroke=\"#C1B6AD\" />\n                  <path\n                    d=\"M41 21.0101C41 21.0101 38.9821 22.2022 37.86 22.5401C37.2577 21.8476 36.4573 21.3567 35.567 21.134C34.6767 20.9112 33.7395 20.9673 32.8821 21.2945C32.0247 21.6218 31.2884 22.2045 30.773 22.9638C30.2575 23.7231 29.9877 24.6224 30 25.5401V26.5401C28.2426 26.5856 26.5013 26.1959 24.931 25.4055C23.3607 24.6151 22.0103 23.4487 21 22.0101C21 22.0101 17 31.0101 26 35.0101C23.9405 36.408 21.4872 37.109 19 37.0101C28 42.0101 39 37.0101 39 25.5101C38.9991 25.2315 38.9723 24.9537 38.92 24.6801C39.9406 23.6735 41 21.0101 41 21.0101Z\"\n                    stroke=\"#E1D4C9\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n                </svg>\n              </a>\n            </div>\n            <div class=\"footer__web-instagram\">\n              <a target=\"_blank\" href=\"https://www.instagram.com/\">\n                <svg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" fill=\"#665F55\" xmlns=\"http://www.w3.org/2000/svg\">\n                  <rect x=\"0.5\" y=\"0.5\" width=\"59\" height=\"59\" rx=\"29.5\" stroke=\"#C1B6AD\" />\n                  <path\n                    d=\"M21 34V26C21 23.2386 23.2386 21 26 21H34C36.7614 21 39 23.2386 39 26V34C39 36.7614 36.7614 39 34 39H26C23.2386 39 21 36.7614 21 34Z\"\n                    stroke=\"#E1D4C9\" />\n                  <path d=\"M35.5 24.51L35.51 24.4989\" stroke=\"#E1D4C9\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n                  <path\n                    d=\"M30 34C32.2091 34 34 32.2091 34 30C34 27.7909 32.2091 26 30 26C27.7909 26 26 27.7909 26 30C26 32.2091 27.7909 34 30 34Z\"\n                    stroke=\"#E1D4C9\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n                </svg>\n              </a>\n            </div>\n            <div class=\"footer__web-facebook\">\n              <a target=\"_blank\" href=\"https://www.facebook.com/Meta/\">\n                <svg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" fill=\"#665F55\" xmlns=\"http://www.w3.org/2000/svg\">\n                  <rect x=\"0.5\" y=\"0.5\" width=\"59\" height=\"59\" rx=\"29.5\" stroke=\"#C1B6AD\" />\n                  <path\n                    d=\"M35 20H32C30.6739 20 29.4021 20.5268 28.4645 21.4645C27.5268 22.4021 27 23.6739 27 25V28H24V32H27V40H31V32H34L35 28H31V25C31 24.7348 31.1054 24.4804 31.2929 24.2929C31.4804 24.1054 31.7348 24 32 24H35V20Z\"\n                    stroke=\"#E1D4C9\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n                </svg>\n              </a>\n            </div>\n          </div>\n        </div>\n        <div class=\"footer__content-right\">\n          <div class=\"footer__contacts-title\">\n            <h3>Contact us</h3>\n          </div>\n          <div class=\"footer__contacts-content\">\n            <div class=\"footer__contacts-geo footer-link\">\n              <a target=\"_blank\"\n                href=\"https://yandex.by/maps/123323/santiago-metropolitan-region/house/eU4GaAJlT0YGWEJ3YH9vcnRjZg9f/?ll=-70.555715%2C-33.380578&z=19.28\">\n                <svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                  <path\n                    d=\"M16.6663 8.33329C16.6663 12.0152 9.99967 18.3333 9.99967 18.3333C9.99967 18.3333 3.33301 12.0152 3.33301 8.33329C3.33301 4.65139 6.31778 1.66663 9.99967 1.66663C13.6816 1.66663 16.6663 4.65139 16.6663 8.33329Z\"\n                    stroke=\"#E1D4C9\" stroke-width=\"1.5\" />\n                  <path\n                    d=\"M10.0003 9.16667C10.4606 9.16667 10.8337 8.79357 10.8337 8.33333C10.8337 7.8731 10.4606 7.5 10.0003 7.5C9.54009 7.5 9.16699 7.8731 9.16699 8.33333C9.16699 8.79357 9.54009 9.16667 10.0003 9.16667Z\"\n                    fill=\"#E1D4C9\" stroke=\"#E1D4C9\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n                </svg>\n                8558 Green Rd., LA\n              </a>\n            </div>\n            <div class=\"footer__contacts-phone footer-link\">\n              <a href=\"tel:+16035550123\">\n                <svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                  <path\n                    d=\"M15.0984 12.2516L11.6665 12.9166C9.34845 11.7531 7.91654 10.4166 7.08321 8.33329L7.72483 4.89154L6.51197 1.66663L3.72946 1.66663C2.60191 1.66663 1.71466 2.59958 1.90108 3.71161C2.29888 6.08454 3.37231 10.0391 6.24987 12.9166C9.27338 15.9401 13.5661 17.3318 16.1378 17.9288C17.299 18.1983 18.3332 17.2908 18.3332 16.0988L18.3332 13.4843L15.0984 12.2516Z\"\n                    stroke=\"#E1D4C9\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n                </svg>\n                +1 (603) 555-0123\n              </a>\n            </div>\n            <div class=\"footer__contacts-time footer-link\">\n              <svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                <g clip-path=\"url(#clip0_217_1736)\">\n                  <path d=\"M10 5L10 10L15 10\" stroke=\"#E1D4C9\" stroke-width=\"1.5\" stroke-linecap=\"round\"\n                    stroke-linejoin=\"round\" />\n                  <path\n                    d=\"M10.0003 18.3333C14.6027 18.3333 18.3337 14.6023 18.3337 9.99996C18.3337 5.39759 14.6027 1.66663 10.0003 1.66663C5.39795 1.66663 1.66699 5.39759 1.66699 9.99996C1.66699 14.6023 5.39795 18.3333 10.0003 18.3333Z\"\n                    stroke=\"#E1D4C9\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n                </g>\n                <defs>\n                  <clipPath id=\"clip0_217_1736\">\n                    <rect width=\"20\" height=\"20\" fill=\"white\" />\n                  </clipPath>\n                </defs>\n              </svg>\n              <p>Mon-Sat: 9:00 AM – 23:00 PM</p>\n            </div>\n          </div>\n        </div>\n      </div>\n    </footer>\n  </div>\n</body>\n\n</html>";
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./node_modules/html-loader/dist/runtime/getUrl.js":
/*!*********************************************************!*\
  !*** ./node_modules/html-loader/dist/runtime/getUrl.js ***!
  \*********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  }

  if (!url) {
    return url;
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = String(url.__esModule ? url.default : url);

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  }

  if (options.maybeNeedQuotes && /[\t\n\f\r "'=<>`]/.test(url)) {
    return "\"".concat(url, "\"");
  }

  return url;
};

/***/ }),

/***/ "./src/style/main.scss":
/*!*****************************!*\
  !*** ./src/style/main.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./main.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style/main.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/assets/fonts/Inter-Medium.ttf":
/*!*******************************************!*\
  !*** ./src/assets/fonts/Inter-Medium.ttf ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/fonts/Inter-Medium.ttf";

/***/ }),

/***/ "./src/assets/icon/coffee-cup.svg":
/*!****************************************!*\
  !*** ./src/assets/icon/coffee-cup.svg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/icon/coffee-cup.svg";

/***/ }),

/***/ "./src/assets/icon/logo.svg":
/*!**********************************!*\
  !*** ./src/assets/icon/logo.svg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/icon/logo.svg";

/***/ }),

/***/ "./src/assets/img/about-1.png":
/*!************************************!*\
  !*** ./src/assets/img/about-1.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/img/about-1.png";

/***/ }),

/***/ "./src/assets/img/about-2.png":
/*!************************************!*\
  !*** ./src/assets/img/about-2.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/img/about-2.png";

/***/ }),

/***/ "./src/assets/img/about-3.png":
/*!************************************!*\
  !*** ./src/assets/img/about-3.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/img/about-3.png";

/***/ }),

/***/ "./src/assets/img/about-4.png":
/*!************************************!*\
  !*** ./src/assets/img/about-4.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/img/about-4.png";

/***/ }),

/***/ "./src/assets/img/img-hero.png":
/*!*************************************!*\
  !*** ./src/assets/img/img-hero.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/img/img-hero.png";

/***/ }),

/***/ "./src/assets/img/mobile-screens.png":
/*!*******************************************!*\
  !*** ./src/assets/img/mobile-screens.png ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/img/mobile-screens.png";

/***/ }),

/***/ "./src/assets/img/slider/coffee-slider-1.png":
/*!***************************************************!*\
  !*** ./src/assets/img/slider/coffee-slider-1.png ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/img/coffee-slider-1.png";

/***/ }),

/***/ "./src/assets/img/slider/coffee-slider-2.png":
/*!***************************************************!*\
  !*** ./src/assets/img/slider/coffee-slider-2.png ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/img/coffee-slider-2.png";

/***/ }),

/***/ "./src/assets/img/slider/coffee-slider-3.png":
/*!***************************************************!*\
  !*** ./src/assets/img/slider/coffee-slider-3.png ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/img/coffee-slider-3.png";

/***/ }),

/***/ "./src/scripts/database/products.json":
/*!********************************************!*\
  !*** ./src/scripts/database/products.json ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "scripts/products.json";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.html */ "./src/index.html");
/* harmony import */ var _style_main_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style/main.scss */ "./src/style/main.scss");
/* harmony import */ var _scripts_database_products_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scripts/database/products.json */ "./src/scripts/database/products.json");
/* harmony import */ var _scripts_sliderApp__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scripts/sliderApp */ "./src/scripts/sliderApp.js");




async function fetchData() {
  try {
    const response = await fetch(_scripts_database_products_json__WEBPACK_IMPORTED_MODULE_2__);
    if (!response.ok) {
      throw new Error('ошибка при загрузке');
    }
    const data = await response.json();
    (0,_scripts_sliderApp__WEBPACK_IMPORTED_MODULE_3__.showImage)(data);
  } catch (error) {
    console.error('failed 404', error.message);
    throw error;
  }
}
fetchData();
})();

/******/ })()
;
//# sourceMappingURL=index.862bb053c58ccff0c424.js.map