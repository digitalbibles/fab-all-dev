function j(e,t){if(e===t)return 0;const s=Array.from({length:e.length+1},(n,a)=>a);for(let n=1;n<=t.length;n++){let a=s[0];s[0]=n;for(let i=1;i<=e.length;i++){const m=s[i];s[i]=Math.min(s[i]+1,s[i-1]+1,a+(e[i-1]!==t[n-1])),a=m}}return s[e.length]}function z(e,t,s){const n=e.toLowerCase(),m=Math.max(.5,.9-(n.length>10?.15:n.length*.05));return t.reduce((l,c)=>{let $=0,v=0;return s.forEach(b=>{if(c[b]){const w=c[b].toString().toLowerCase(),y=j(n,w)/Math.max(n.length,w.length);y<=m&&($+=y,v++)}}),v>0&&l.push({item:c,score:$/v}),l},[]).sort((l,c)=>l.score-c.score)}let f="",u=[],r=[],g=[],L=[],o={};const I=document.getElementById("search-input"),d=I?.dataset?.scope;async function E(){try{const e=document.documentElement.lang||"en",t=await fetch(`/i18n/${e}.json`);t.ok&&(o=await t.json())}catch(e){console.error("Failed to load translations for search:",e)}}async function M(){const s=(await(await fetch("/site.json")).json()).data;L=Object.keys(s),L.forEach(n=>{s[n].forEach(a=>{a.type=n,g.push(a)})})}Promise.all([M(),E()]);document.addEventListener("DOMContentLoaded",T);document.addEventListener("astro:after-swap",T);window.addEventListener("locale-changed",()=>{E()});function T(){const e=document.getElementById("search-input");e&&e.addEventListener("input",t=>{f=t.target.value,B()})}function B(){if(!(!g||g.length===0)){if(!f.trim()){R();return}u=z(f,g,["tv","tt","ta","id"]),r=u.reduce((e,t)=>{const s=t.item.type;return e[s]=e[s]||[],e[s].push(t),e},{}),u.length>0,k()}}function R(){const e=document.getElementById("search-results-wrapper");e.innerHTML=""}const p=(e,t)=>e.item[t]??"",h=(e,t,s,n,a="",i="")=>`
    <li class="search-result-item">
      <button
        onclick="
          event.preventDefault();
          dropdownVisible = false;
          query = '';
          document.getElementById('search-input').value = '';
          setTimeout(() => { window.location.href = '${n}'; }, 25);
        "
        class="search-result-btn"
      >
        <div class="search-result-icon">
          ${a?`<div>${a}</div>`:s==="all"&&(e.item.ci||t==="countries")?`
                <svg class="search-result-flag">
                  <use href="/images/flags.svg#${e.item.id}" xlink:href="#${e.item.id}" />
                </svg>
                `:""}
        </div>
        <div class="search-result-body">
          <h4 class="search-result-title">${p(e,"tt")}</h4>
          ${e.item.tt!==e.item.tv&&e.item.tv?`<p class="search-result-subtitle">${p(e,"tv")}</p>`:""}
        </div>
        ${i?`
              <small class="search-result-id">
                ${p(e,"id")||i}
              </small>`:""}
      </button>
    </li>
  `;function k(){const e=document.getElementById("search-results-wrapper");if(e.innerHTML="",u.length===0)return;const t=`
      <div class="search-dropdown">
        <div class="search-dropdown-bg" aria-hidden="true"></div>

        <div class="search-results-grid">
          ${r.languages?`
                <nav class="search-nav-section">
                  <div class="search-section-inner">
                    <div>
                      <h3 class="search-section-heading">
                        ${o.languages||"Languages"}
                      </h3>
                      <ul id="search_languages" class="search-languages-list">
                        ${r.languages.slice(0,10).map(s=>h(s,"languages",d,`/languages/${s.item.id}`)).join("")}
                      </ul>
                    </div>
                  </div>
                </nav>`:""}

          ${r.bibles?`
                <div class="search-bibles-section">
                  <div class="search-bibles-inner">
                    <div>
                      <h3 class="search-section-heading">
                        ${o.bibles||"Bibles"}
                      </h3>
                      <ul id="search_bibles" class="search-bibles-list">
                        ${r.bibles.slice(0,5).map(s=>h(s,"bibles",d,`/bibles/${s.item.id}`)).join("")}
                      </ul>
                    </div>
                  </div>
                </div>`:""}
        </div>

        ${r.countries||r.organizations?`
              <div class="search-secondary-row">
                ${r.countries?`
                      <div>
                        <h3 class="search-section-heading">
                          ${o.countries||"Countries"}
                        </h3>
                        <ul class="search-countries-list">
                          ${r.countries.slice(0,2).map(s=>h(s,"countries",d,`/countries/${s.item.id}`)).join("")}
                        </ul>
                      </div>`:""}

                ${r.organizations?`
                      <div>
                        <h3 class="search-section-heading">
                          ${o.organizations||"Organizations"}
                        </h3>
                        <ul class="search-orgs-list">
                          ${r.organizations.slice(0,2).map(s=>h(s,"organizations",d,`/organizations/${s.item.id}`)).join("")}
                        </ul>
                      </div>`:""}
              </div>`:""}
      </div>`;e.insertAdjacentHTML("beforeend",t)}document.addEventListener("click",e=>{const t=document.getElementById("search-results-wrapper");t.contains(e.target)||(t.innerHTML="")});
