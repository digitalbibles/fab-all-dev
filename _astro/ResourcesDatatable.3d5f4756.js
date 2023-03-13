import{S as h,i as v,s as x,e as _,c as y,b as k,d as b,j as G,g as u,k as j,m as p,p as C,r as D,u as N,v as S}from"./index.a336dc1c.js";import{G as V,d as m,c as f,e as g,a as o}from"./l10n.module.76241590.js";function q(l){let n,a,d;return a=new V({props:{columns:l[2],data:l[1],sort:!0,search:!0,pagination:{enabled:!0,limit:10},language:{ar:m,cn:f,en:{},es:g}[l[0]]}}),{c(){n=_("div"),y(a.$$.fragment),this.h()},l(e){n=k(e,"DIV",{class:!0});var t=b(n);G(a.$$.fragment,t),t.forEach(u),this.h()},h(){j(n,"class","flex flex-row")},m(e,t){p(e,n,t),C(a,n,null),d=!0},p(e,[t]){const i={};t&4&&(i.columns=e[2]),t&2&&(i.data=e[1]),t&1&&(i.language={ar:m,cn:f,en:{},es:g}[e[0]]),a.$set(i)},i(e){d||(D(a.$$.fragment,e),d=!0)},o(e){N(a.$$.fragment,e),d=!1},d(e){e&&u(n),S(a)}}}function E(l,n,a){let d,e,{t={}}=n,{data:i}=n,{locale:c}=n;return l.$$set=r=>{"t"in r&&a(3,t=r.t),"data"in r&&a(4,i=r.data),"locale"in r&&a(0,c=r.locale)},l.$$.update=()=>{l.$$.dirty&9&&a(2,d=[{id:"tt",name:t?.name??"Name",formatter:(r,s)=>o(`<a class="hover:underline" href="${s.cells[6].data}">
				<div class="font-medium text-gray-900 dark:text-stone-200">${s.cells[0].data}</div>
				<div class="text-gray-500 dark:text-stone-300">${s.cells[1].data??""}
				</div>
			</a>`)},{id:"tv",name:"Vernacular Name",hidden:!0},{id:"ln",name:t?.language??"Language",formatter:(r,s)=>o(`<a class="hover:underline" href="/${c}/languages/${s.cells[3].data}"><div class="font-medium text-gray-900 dark:text-stone-200">${s.cells[2].data}</div><div class="text-gray-500 dark:text-stone-300">${s.cells[3].data??""}</div></a>`)},{id:"iso",name:"iso",hidden:!0},{id:"cn",name:t?.country??"Country",formatter:(r,s)=>o(`
	  <a class="hover:underline flex flex-row items-center" href="/countries/${s.cells[5].data}">
		  <svg class="h-5 w-5 drop-shadow-md inline-block mr-1">
			  <use href="/images/flags.svg#${s.cells[5].data}" xlink:href="#${s.cells[5].data}"></use>
		  </svg>
		  <div class="text-gray-900 dark:text-stone-200">${s.cells[4].data}</div>
	  </a>
	`)},{id:"ci",name:"ci",hidden:!0},{id:"url",name:"url",hidden:!0}]),l.$$.dirty&16&&a(1,e=i)},[c,e,d,t,i]}class R extends h{constructor(n){super(),v(this,n,E,q,x,{t:3,data:4,locale:0})}}export{R as default};
