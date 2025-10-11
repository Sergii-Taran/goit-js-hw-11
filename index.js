import{a as f,S as m,i}from"./assets/vendor-D8hBcPQM.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const g="https://pixabay.com/api/",h="47040317-0d9018ce78b59a4267667365b";function y(n){const o={key:h,q:n,image_type:"photo",orientation:"horizontal",safesearch:"true"};return f.get(g,{params:o}).then(t=>t.data).catch(t=>{throw console.error("Error fetching images:",t),t})}const l=document.querySelector(".gallery"),u=document.querySelector(".loader");let L=new m(".gallery a",{captionsData:"alt",captionsDelay:250});function b(n){const o=n.map(({webformatURL:t,largeImageURL:a,tags:e,likes:r,views:s,comments:p,downloads:d})=>`
      <li class="gallery-item">
        <a href="${a}">
          <img src="${t}" alt="${e}" loading="lazy" />
        </a>
        <div class="info">
          <p><span>${r}</span>Likes</p>
          <p><span>${s}</span>Views</p>
          <p><span>${p}</span>Comments</p>
          <p><span>${d}</span>Downloads</p>
        </div>
      </li>`).join("");l.insertAdjacentHTML("beforeend",o),L.refresh()}function S(){l.innerHTML=""}function q(){u.classList.remove("hidden")}function P(){u.classList.add("hidden")}const c=document.querySelector(".form"),v=c.querySelector('input[name="search-text"]');document.querySelector(".gallery");c.addEventListener("submit",n=>{n.preventDefault();const o=n.target.elements["search-text"].value.trim();if(!o){i.warning({message:"Please enter a search term!",position:"topRight"});return}S(),q(),y(o).then(t=>{if(t.hits.length===0){i.info({message:"Sorry, there are no images matching your search query. Please try again.",position:"topRight"});return}b(t.hits)}).catch(t=>{i.error({message:"Error fetching images. Please try again later.",position:"topRight"}),console.error(t)}).finally(()=>{P(),c.reset(),v.focus()})});
//# sourceMappingURL=index.js.map
