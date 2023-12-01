(()=>{"use strict";var e={91:e=>{e.exports=function(e,t){return t||(t={}),e?(e=String(e.__esModule?e.default:e),t.hash&&(e+=t.hash),t.maybeNeedQuotes&&/[\t\n\f\r "'=<>`]/.test(e)?'"'.concat(e,'"'):e):e}},447:(e,t,n)=>{e.exports=n.p+"assets/icon/coffee-cup.svg"},247:(e,t,n)=>{e.exports=n.p+"assets/icon/logo.svg"}},t={};function n(s){var r=t[s];if(void 0!==r)return r.exports;var c=t[s]={exports:{}};return e[s](c,c.exports,n),c.exports}n.m=e,n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var s in t)n.o(t,s)&&!n.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var s=t.getElementsByTagName("script");if(s.length)for(var r=s.length-1;r>-1&&!e;)e=s[r--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),n.b=document.baseURI||self.location.href,(()=>{var e=n(91),t=n.n(e),s=new URL(n(447),n.b),r=new URL(n(247),n.b);t()(s),t()(r);const c=n.p+"scripts/products.json",o=n.p+"assets/img/coffee-1.png",i=n.p+"assets/img/coffee-2.png",a=n.p+"assets/img/coffee-3.png",l=n.p+"assets/img/coffee-4.png",d=n.p+"assets/img/coffee-5.png",u=n.p+"assets/img/coffee-6.png",p=n.p+"assets/img/coffee-7.png",m=n.p+"assets/img/coffee-8.png",g=document.querySelector(".menu__content-menu");function f(e){const t=document.createElement("div");t.classList.add(".menu__card"),t.style="margin-bottom: 40px",t.innerHTML=`\n      <div class="menu__card">\n        <div class="card__content">\n          <div class="menu__card-image">\n            <img src="${e.image}" alt="${e.name}">\n          </div>\n          <div class="menu__card-description">\n            <div class="menu__title-subtitle">\n              <div class="menu__card-title">\n                <h3>${e.name}</h3>\n              </div>\n              <div class="menu__card-subtitle">\n                <p>${e.description}</p>\n              </div>\n            </div>\n            <div class="menu__card-price">\n              <p>${new Intl.NumberFormat("en-US",{style:"currency",currency:"USD",currencyDisplay:"narrowSymbol"}).format(e.price)}</p>\n            </div>\n          </div>\n        </div>\n      </div>\n    `,g.appendChild(t)}const _=document.querySelector(".menu__content-refresh"),h=document.querySelector(".menu__refresh-btn"),v=e=>{!function(){const t=window.innerWidth;_.style.display=e>4&&t<=1425?"flex":"none"}()},y=(e,t)=>{h.addEventListener("click",(()=>{e.innerHTML="",t.forEach((e=>f(e))),document.querySelector(".menu__content-refresh").style.display="none"}))},b=[o,i,a,l,d,u,p,m],w=[n.p+"assets/img/dessert-1.png",n.p+"assets/img/dessert-2.png",n.p+"assets/img/dessert-3.png",n.p+"assets/img/dessert-4.png",n.p+"assets/img/dessert-5.png",n.p+"assets/img/dessert-6.png",n.p+"assets/img/dessert-7.png",n.p+"assets/img/dessert-8.png"],L=n.p+"assets/img/tea-1.png",S=n.p+"assets/img/tea-2.png",E=n.p+"assets/img/tea-3.png",q=n.p+"assets/img/tea-4.png",M=window.innerWidth,x=document.querySelector(".menu__content-menu"),T=[L,S,E,q],k=document.querySelectorAll(".filter__btn"),$={Coffee:e=>{const t=e.products,n=document.querySelector(".menu__content-menu"),s=t.filter((e=>"coffee"===e.category)),r=window.innerWidth;n.innerHTML="";let c=0;for(let e=0;e<Math.min(b.length);e+=1)s[e].image=b[e],c++;const o=r<=1425&&r>=1050?6:r<1050?4:s.length;s.slice(0,o).forEach((e=>f(e))),v(c),y(n,s)},Tea:function(e){const t=e.products.filter((e=>"tea"===e.category));x.innerHTML="";let n=0;for(let e=0;e<Math.min(T.length);e+=1)t[e].image=T[e],n+=e;const s=M<=1425&&M>=1050?6:M<1050?4:t.length;t.slice(0,s).forEach((e=>f(e))),v(n),y(x,t)},Dessert:function(e){const t=e.products,n=document.querySelector(".menu__content-menu"),s=t.filter((e=>"dessert"===e.category)),r=window.innerWidth;n.innerHTML="";let c=0;for(let e=0;e<Math.min(w.length);e+=1)s[e].image=w[e],c++;const o=r<=1425&&r>=1050?6:r<1050?4:s.length;s.slice(0,o).forEach((e=>f(e))),v(c),y(n,s)}},j=(e,t)=>{const n=e.textContent.trim(),s=$[n];s&&s(t)};async function H(){try{const t=await fetch(c);if(!t.ok)throw new Error("ошибка при загрузке");e=await t.json(),k.forEach((t=>{t.classList.contains("filter__btn-active")&&j(t,e),t.addEventListener("click",(()=>{k.forEach((e=>e.classList.remove("filter__btn-active"))),t.classList.add("filter__btn-active"),j(t,e)}))}))}catch(e){throw console.error("failed 404",e.message),e}var e}const U=document.querySelector(".header__burger-btn"),C=document.querySelector(".header__nav"),D=document.querySelector(".header__menu-link"),O=document.querySelectorAll("li");function W(){const e=U.classList.toggle("burger-active");C.classList.toggle("open",e),D.classList.toggle("open",e),document.body.classList.toggle("_lock",e)}document.addEventListener("DOMContentLoaded",(()=>{const e=document.querySelector(".loader");setTimeout((()=>e.style.display="none"),300)})),U.addEventListener("click",W),D.addEventListener("click",W),O.forEach((e=>e.addEventListener("click",W))),H(),window.addEventListener("resize",H)})()})();
//# sourceMappingURL=menu.09e3300b122edba9e387.js.map