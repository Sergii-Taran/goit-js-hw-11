import{a as m,S as g,i as a}from"./assets/vendor-D8hBcPQM.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const h="https://pixabay.com/api/",y="47040317-0d9018ce78b59a4267667365b";function L(n){const r={key:y,q:n,image_type:"photo",orientation:"horizontal",safesearch:"true"};return m.get(h,{params:r}).then(o=>o.data)}const u=document.querySelector(".gallery"),p=document.querySelector(".loader");let b=new g(".gallery a",{captionsData:"alt",captionsDelay:250});function S(n){const r=n.map(({webformatURL:o,largeImageURL:i,tags:e,likes:t,views:s,comments:f,downloads:d})=>`
      <li class="gallery-item">
        <a href="${i}">
          <img src="${o}" alt="${e}" loading="lazy" />
        </a>
        <div class="info">
          <p><span>${t}</span>Likes</p>
          <p><span>${s}</span>Views</p>
          <p><span>${f}</span>Comments</p>
          <p><span>${d}</span>Downloads</p>
        </div>
      </li>`).join("");u.insertAdjacentHTML("beforeend",r),b.refresh()}function q(){u.innerHTML=""}function v(){p.classList.remove("hidden")}function P(){p.classList.add("hidden")}const c=document.querySelector(".form"),l=c.querySelector('input[name="search-text"]');c.addEventListener("submit",$);function $(n){n.preventDefault();const r=l.value.trim();if(!r){a.warning({message:"Please enter a search term!",position:"topRight"});return}q(),v(),L(r).then(o=>{if(o.hits.length===0){a.info({message:"Sorry, there are no images matching your search query. Please try again.",position:"topRight"});return}S(o.hits),a.success({message:"Image found on request.",position:"topRight"})}).catch(()=>{a.error({message:"Error fetching images. Please try again later.",position:"topRight"})}).finally(()=>{P(),c.reset(),l.focus()})}
//# sourceMappingURL=index.js.map
