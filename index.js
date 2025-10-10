import{a as d,S as f,i}from"./assets/vendor-BNibzuFn.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const m="https://pixabay.com/api/",y="47040317-0d9018ce78b59a4267667365b";async function g(s){const r={key:y,q:s,image_type:"photo",orientation:"horizontal",safesearch:"true"};return(await d.get(m,{params:r})).data}const c=document.querySelector(".gallery"),l=document.querySelector(".loader");let h=new f(".gallery a",{captionsData:"alt",captionsDelay:250});function L(s){const r=s.map(({webformatURL:o,largeImageURL:n,tags:e,likes:t,views:a,comments:p,downloads:u})=>`
      <li class="gallery-item">
        <a href="${n}">
          <img src="${o}" alt="${e}" loading="lazy" />
        </a>
        <div class="info">
          <p><span>${t}</span>Likes</p>
          <p><span>${a}</span>Views</p>
          <p><span>${p}</span>Comments</p>
          <p><span>${u}</span>Downloads</p>
        </div>
      </li>`).join("");c.insertAdjacentHTML("beforeend",r),h.refresh()}function b(){c.innerHTML=""}function w(){l.classList.remove("hidden")}function P(){l.classList.add("hidden")}const S=document.querySelector(".form");S.addEventListener("submit",async s=>{s.preventDefault();const r=s.target.elements["search-text"].value.trim();if(!r){i.warning({message:"Please enter a search term!",position:"topRight"});return}b(),w();try{const o=await g(r);if(o.hits.length===0){i.info({message:"Sorry, there are no images matching your search query. Please try again.",position:"topRight"});return}L(o.hits)}catch(o){i.error({message:"Error fetching images. Please try again later.",position:"topRight"}),console.error(o)}finally{P()}});
//# sourceMappingURL=index.js.map
