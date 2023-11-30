(()=>{"use strict";var e={91:e=>{e.exports=function(e,t){return t||(t={}),e?(e=String(e.__esModule?e.default:e),t.hash&&(e+=t.hash),t.maybeNeedQuotes&&/[\t\n\f\r "'=<>`]/.test(e)?'"'.concat(e,'"'):e):e}},447:(e,t,n)=>{e.exports=n.p+"assets/icon/coffee-cup.svg"},247:(e,t,n)=>{e.exports=n.p+"assets/icon/logo.svg"},126:(e,t,n)=>{e.exports=n.p+"assets/icon/refresh.svg"}},t={};function n(r){var s=t[r];if(void 0!==s)return s.exports;var o=t[r]={exports:{}};return e[r](o,o.exports,n),o.exports}n.m=e,n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");if(r.length)for(var s=r.length-1;s>-1&&!e;)e=r[s--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),n.b=document.baseURI||self.location.href,(()=>{var e=n(91),t=n.n(e),r=new URL(n(447),n.b),s=new URL(n(247),n.b),o=new URL(n(126),n.b);t()(r),t()(s);t()(o);const c=[n.p+"assets/img/coffee-1.png",n.p+"assets/img/coffee-2.png",n.p+"assets/img/coffee-3.png",n.p+"assets/img/coffee-4.png",n.p+"assets/img/coffee-5.png",n.p+"assets/img/coffee-6.png",n.p+"assets/img/coffee-7.png",n.p+"assets/img/coffee-8.png"],i=n.p+"scripts/products.json";async function a(){try{const e=await fetch(i);if(!e.ok)throw new Error("ошибка при загрузке");!function(e){const t=e.products,n=document.querySelector(".menu__content-menu"),r=t.filter((e=>"coffee"===e.category)),s=window.innerWidth;n.innerHTML="";for(let e=0;e<Math.min(c.length);e+=1)r[e].image=c[e];const o=s<=1425&&s>=1050?6:s<1050?4:r.length;r.slice(0,o).forEach((e=>{const t=document.createElement("div");t.classList.add(".menu__card"),t.style="margin-bottom: 40px",t.innerHTML=`\n        <div class="menu__card">\n          <div class="card__content">\n            <div class="menu__card-image">\n              <img src="${e.image}" alt="${e.name}">\n            </div>\n            <div class="menu__card-description">\n              <div class="menu__title-subtitle">\n                <div class="menu__card-title">\n                  <h3>${e.name}</h3>\n                </div>\n                <div class="menu__card-subtitle">\n                  <p>${e.description}</p>\n                </div>\n              </div>\n              <div class="menu__card-price">\n                <p>${new Intl.NumberFormat("en-US",{style:"currency",currency:"USD",currencyDisplay:"narrowSymbol"}).format(e.price)}</p>\n              </div>\n            </div>\n          </div>\n        </div>\n      `,n.appendChild(t)}))}(await e.json())}catch(e){throw console.error("failed 404",e.message),e}}const d=document.querySelector(".header__burger-btn"),l=document.querySelector(".header__nav"),u=document.querySelector(".header__menu-link"),p=document.querySelectorAll("li");function m(){const e=d.classList.toggle("burger-active");l.classList.toggle("open",e),u.classList.toggle("open",e),document.body.classList.toggle("_lock",e)}document.addEventListener("DOMContentLoaded",(()=>{const e=document.querySelector(".loader");setTimeout((()=>e.style.display="none"),300)})),a(),d.addEventListener("click",m),u.addEventListener("click",m),p.forEach((e=>e.addEventListener("click",m))),window.addEventListener("resize",(()=>{a()}))})()})();
//# sourceMappingURL=menu.f859aa0127889e17b9db.js.map