const e="bcgov-web-components";let t,n,l,o=0,s=!1,r=!1,c=!1,i=!1;const a="undefined"!=typeof window?window:{},f=a.document||{head:{}},u={t:0,l:"",jmp:e=>e(),raf:e=>requestAnimationFrame(e),ael:(e,t,n,l)=>e.addEventListener(t,n,l),rel:(e,t,n,l)=>e.removeEventListener(t,n,l)},m=(()=>!!f.head.attachShadow)(),p=new WeakMap,$=e=>p.get(e),d=(e,t)=>p.set(t.o=e,t),w=(e,t)=>t in e,b=e=>console.error(e),h=new Map,y=[],_=[],g=[],v=(e,t)=>n=>{e.push(n),s||(s=!0,t&&4&u.t?R(k):u.raf(k))},j=(e,t)=>{let n=0,l=0;for(;n<e.length&&(l=performance.now())<t;)try{e[n++](l)}catch(o){b(o)}n===e.length?e.length=0:0!==n&&e.splice(0,n)},k=()=>{o++,(e=>{for(let n=0;n<e.length;n++)try{e[n](performance.now())}catch(t){b(t)}e.length=0})(y);const e=2==(6&u.t)?performance.now()+10*Math.ceil(o*(1/22)):1/0;j(_,e),j(g,e),_.length>0&&(g.push(..._),_.length=0),(s=y.length+_.length+g.length>0)?u.raf(k):o=0},R=e=>Promise.resolve().then(e),M=v(_,!0),O={},U=e=>"object"==(e=typeof e)||"function"===e,L=()=>a.CSS&&a.CSS.supports&&a.CSS.supports("color","var(--c)")?Promise.resolve():__sc_import_bcgov_web_components("./css-shim-978387b1-1e75855f.js").then(()=>{u.s=a.__stencil_cssshim}),x=async()=>{u.s=a.__stencil_cssshim;const t=new RegExp(`/${e}(\\.esm)?\\.js($|\\?|#)`),n=Array.from(f.querySelectorAll("script")).find(n=>t.test(n.src)||n.getAttribute("data-stencil-namespace")===e),l=n["data-opts"];{const e=new URL(".",new URL(n.getAttribute("data-resources-url")||n.src,a.location.href));return P(e.href),window.customElements||await __sc_import_bcgov_web_components("./dom-76cc7c7d-0a082895.js"),Object.assign(Object.assign({},l),{resourcesUrl:e.href})}},P=t=>{const n=(e=>`__sc_import_${e.replace(/\s|-/g,"_")}`)(e);try{a[n]=new Function("w",`return import(w);//${Math.random()}`)}catch(l){const e=new Map;a[n]=l=>{const o=new URL(l,t).href;let s=e.get(o);if(!s){const t=f.createElement("script");t.type="module",t.src=URL.createObjectURL(new Blob([`import * as m from '${o}'; window.${n}.m = m;`],{type:"application/javascript"})),s=new Promise(e=>{t.onload=()=>{e(a[n].m),t.remove()}}),e.set(o,s),f.head.appendChild(t)}return s}}},T="http://www.w3.org/1999/xlink",A=(e,t,...n)=>{let l=null,o=null,s=null,r=!1,c=!1,i=[];const a=t=>{for(let n=0;n<t.length;n++)l=t[n],Array.isArray(l)?a(l):null!=l&&"boolean"!=typeof l&&((r="function"!=typeof e&&!U(l))&&(l=String(l)),r&&c?i[i.length-1].i+=l:i.push(r?E(null,l):l),c=r)};if(a(n),t){t.key&&(o=t.key),t.name&&(s=t.name);{const e=t.className||t.class;e&&(t.class="object"!=typeof e?e:Object.keys(e).filter(t=>e[t]).join(" "))}}const f=E(e,null);return f.u=t,i.length>0&&(f.p=i),f.$=o,f.h=s,f},E=(e,t)=>({t:0,_:e,i:t,g:null,p:null,u:null,$:null,h:null}),F={},C=(e,t,n,l,o,s)=>{if(n===l)return;let r=w(e,t),c=t.toLowerCase();if("class"===t){const t=e.classList,o=N(n),s=N(l);t.remove(...o.filter(e=>e&&!s.includes(e))),t.add(...s.filter(e=>e&&!o.includes(e)))}else if("style"===t){for(const t in n)l&&null!=l[t]||(t.includes("-")?e.style.removeProperty(t):e.style[t]="");for(const t in l)n&&l[t]===n[t]||(t.includes("-")?e.style.setProperty(t,l[t]):e.style[t]=l[t])}else if("key"===t);else if("ref"===t)l&&l(e);else if(r||"o"!==t[0]||"n"!==t[1]){const a=U(l);if((r||a&&null!==l)&&!o)try{if(e.tagName.includes("-"))e[t]=l;else{let o=null==l?"":l;"list"===t?r=!1:null!=n&&e[t]==o||(e[t]=o)}}catch(i){}let f=!1;c!==(c=c.replace(/^xlink\:?/,""))&&(t=c,f=!0),null==l||!1===l?f?e.removeAttributeNS(T,t):e.removeAttribute(t):(!r||4&s||o)&&!a&&(l=!0===l?"":l,f?e.setAttributeNS(T,t,l):e.setAttribute(t,l))}else t="-"===t[2]?t.slice(3):w(a,c)?c.slice(2):c[2]+t.slice(3),n&&u.rel(e,t,n,!1),l&&u.ael(e,t,l,!1)},H=/\s/,N=e=>e?e.split(H):[],S=(e,t,n,l)=>{const o=11===t.g.nodeType&&t.g.host?t.g.host:t.g,s=e&&e.u||O,r=t.u||O;for(l in s)l in r||C(o,l,s[l],void 0,n,t.t);for(l in r)C(o,l,s[l],r[l],n,t.t)},W=(e,o,s,c)=>{let a,u,m,p=o.p[s],$=0;if(r||(i=!0,"slot"===p._&&(t&&c.classList.add(t+"-s"),p.t|=p.p?2:1)),null!==p.i)a=p.g=f.createTextNode(p.i);else if(1&p.t)a=p.g=f.createTextNode("");else if(a=p.g=f.createElement(2&p.t?"slot-fb":p._),S(null,p,!1),(e=>null!=e)(t)&&a["s-si"]!==t&&a.classList.add(a["s-si"]=t),p.p)for($=0;$<p.p.length;++$)(u=W(e,p,$,a))&&a.appendChild(u);return a["s-hn"]=l,3&p.t&&(a["s-sr"]=!0,a["s-cr"]=n,a["s-sn"]=p.h||"",(m=e&&e.p&&e.p[s])&&m._===p._&&e.g&&q(e.g,!1)),a},q=(e,t)=>{u.t|=1;const n=e.childNodes;for(let o=n.length-1;o>=0;o--){const e=n[o];e["s-hn"]!==l&&e["s-ol"]&&(G(e).insertBefore(e,z(e)),e["s-ol"].remove(),e["s-ol"]=void 0,i=!0),t&&q(e,t)}u.t&=-2},B=(e,t,n,o,s,r)=>{let c,i=e["s-cr"]&&e["s-cr"].parentNode||e;for(i.shadowRoot&&i.tagName===l&&(i=i.shadowRoot);s<=r;++s)o[s]&&(c=W(null,n,s,e))&&(o[s].g=c,i.insertBefore(c,z(t)))},D=(e,t,n,l,o)=>{for(;t<=n;++t)(l=e[t])&&(o=l.g,X(l),c=!0,o["s-ol"]?o["s-ol"].remove():q(o,!0),o.remove())},V=(e,t)=>e._===t._&&("slot"===e._?e.h===t.h:e.$===t.$),z=e=>e&&e["s-ol"]||e,G=e=>(e["s-ol"]?e["s-ol"]:e).parentNode,I=(e,t)=>{const n=t.g=e.g,l=e.p,o=t.p;let s;null===t.i?("slot"===t._||S(e,t,!1),null!==l&&null!==o?((e,t,n,l)=>{let o,s,r=0,c=0,i=0,a=0,f=t.length-1,u=t[0],m=t[f],p=l.length-1,$=l[0],d=l[p];for(;r<=f&&c<=p;)if(null==u)u=t[++r];else if(null==m)m=t[--f];else if(null==$)$=l[++c];else if(null==d)d=l[--p];else if(V(u,$))I(u,$),u=t[++r],$=l[++c];else if(V(m,d))I(m,d),m=t[--f],d=l[--p];else if(V(u,d))"slot"!==u._&&"slot"!==d._||q(u.g.parentNode,!1),I(u,d),e.insertBefore(u.g,m.g.nextSibling),u=t[++r],d=l[--p];else if(V(m,$))"slot"!==u._&&"slot"!==d._||q(m.g.parentNode,!1),I(m,$),e.insertBefore(m.g,u.g),m=t[--f],$=l[++c];else{for(i=-1,a=r;a<=f;++a)if(t[a]&&null!==t[a].$&&t[a].$===$.$){i=a;break}i>=0?((s=t[i])._!==$._?o=W(t&&t[c],n,i,e):(I(s,$),t[i]=void 0,o=s.g),$=l[++c]):(o=W(t&&t[c],n,c,e),$=l[++c]),o&&G(u.g).insertBefore(o,z(u.g))}r>f?B(e,null==l[p+1]?null:l[p+1].g,n,l,c,p):c>p&&D(t,r,f)})(n,l,t,o):null!==o?(null!==e.i&&(n.textContent=""),B(n,null,t,o,0,o.length-1)):null!==l&&D(l,0,l.length-1)):(s=n["s-cr"])?s.parentNode.textContent=t.i:e.i!==t.i&&(n.data=t.i)},J=e=>{let t,n,l,o,s,r,c=e.childNodes;for(n=0,l=c.length;n<l;n++)if(1===(t=c[n]).nodeType){if(t["s-sr"])for(s=t["s-sn"],t.hidden=!1,o=0;o<l;o++)if(c[o]["s-hn"]!==t["s-hn"])if(r=c[o].nodeType,""!==s){if(1===r&&s===c[o].getAttribute("slot")){t.hidden=!0;break}}else if(1===r||3===r&&""!==c[o].textContent.trim()){t.hidden=!0;break}J(t)}},K=[],Q=e=>{let t,n,l,o,s=e.childNodes,r=s.length,i=0,a=0,f=0;for(r=s.length;i<r;i++){if((t=s[i])["s-sr"]&&(n=t["s-cr"]))for(o=t["s-sn"],a=(l=n.parentNode.childNodes).length-1;a>=0;a--)(n=l[a])["s-cn"]||n["s-nr"]||n["s-hn"]===t["s-hn"]||((3===(f=n.nodeType)||8===f)&&""===o||1===f&&null===n.getAttribute("slot")&&""===o||1===f&&n.getAttribute("slot")===o)&&(K.some(e=>e.v===n)||(c=!0,n["s-sn"]=o,K.push({j:t,v:n})));1===t.nodeType&&Q(t)}},X=e=>{e.u&&e.u.ref&&e.u.ref(null),e.p&&e.p.forEach(X)},Y=(e,t)=>{t&&!e.k&&t["s-p"].push(new Promise(t=>e.k=t))},Z=(e,t,n,l)=>{if(t.t|=16,4&t.t)return void(t.t|=512);const o=t.o,s=()=>ee(e,t,n,o);let r;return Y(t,t.R),l&&(t.t|=256,t.M&&(t.M.forEach(([e,t])=>oe(o,e,t)),t.M=null),r=oe(o,"componentWillLoad")),se(r,()=>M(s))},ee=(e,o,s,a)=>{const p=e["s-rc"];((e,o,s,a)=>{l=e.tagName;const p=o.O||E(null,null),$=(e=>e&&e._===F)(a)?a:A(null,null,a);if($._=null,$.t|=4,o.O=$,$.g=p.g=e.shadowRoot||e,t=e["s-sc"],n=e["s-cr"],r=m&&0!=(1&s.t),c=!1,I(p,$),i){Q($.g);for(let e=0;e<K.length;e++){const t=K[e];if(!t.v["s-ol"]){const e=f.createTextNode("");e["s-nr"]=t.v,t.v.parentNode.insertBefore(t.v["s-ol"]=e,t.v)}}u.t|=1;for(let e=0;e<K.length;e++){const t=K[e],n=t.j.parentNode;let l=t.j.nextSibling,o=t.v["s-ol"];for(;o=o.previousSibling;){let e=o["s-nr"];if(e&&e["s-sn"]===t.v["s-sn"]&&n===e.parentNode&&(!(e=e.nextSibling)||!e["s-nr"])){l=e;break}}(!l&&n!==t.v.parentNode||t.v.nextSibling!==l)&&t.v!==l&&n.insertBefore(t.v,l)}u.t&=-2}c&&J($.g),K.length=0})(e,o,s,te(a)),o.t&=-17,o.t|=2,p&&(p.forEach(e=>e()),e["s-rc"]=void 0);{const t=e["s-p"],n=()=>ne(e,o,s);0===t.length?n():(Promise.all(t).then(n),o.t|=4,t.length=0)}},te=e=>{try{e=e.render()}catch(t){b(t)}return e},ne=(e,t,n)=>{const l=t.R;oe(t.o,"componentDidRender"),64&t.t||(t.t|=64,e.classList.add("hydrated"),t.U(e),l||le()),t.k&&(t.k(),t.k=void 0),512&t.t&&R(()=>Z(e,t,n,!1)),t.t&=-517},le=()=>{f.documentElement.classList.add("hydrated"),u.t|=2},oe=(e,t,n)=>{if(e&&e[t])try{return e[t](n)}catch(l){b(l)}},se=(e,t)=>e&&e.then?e.then(t):t(),re=(e,t,n)=>{if(t.L){const l=Object.entries(t.L),o=e.prototype;if(l.forEach(([e,[l]])=>{(31&l||2&n&&32&l)&&Object.defineProperty(o,e,{get(){return((e,t)=>$(e).P.get(t))(this,e)},set(n){((e,t,n,l)=>{const o=$(this),s=o.T,r=o.P.get(t),c=o.t,i=o.o;(n=((e,t)=>null==e||U(e)?e:4&t?"false"!==e&&(""===e||!!e):2&t?parseFloat(e):1&t?String(e):e)(n,l.L[t][0]))===r||8&c&&void 0!==r||(o.P.set(t,n),i&&2==(18&c)&&Z(s,o,l,!1))})(0,e,n,t)},configurable:!0,enumerable:!0})}),1&n){const t=new Map;o.attributeChangedCallback=function(e,n,l){u.jmp(()=>{const n=t.get(e);this[n]=(null!==l||"boolean"!=typeof this[n])&&l})},e.observedAttributes=l.filter(([e,t])=>15&t[0]).map(([e,n])=>{const l=n[1]||e;return t.set(l,e),l})}}return e},ce=e=>{const t=e["s-cr"]=f.createComment("");t["s-cn"]=!0,e.insertBefore(t,e.firstChild)},ie=(e,t={})=>{const n=[],l=t.exclude||[],o=f.head,s=a.customElements,r=o.querySelector("meta[charset]"),c=f.createElement("style"),i=[];let d,w=!0;Object.assign(u,t),u.l=new URL(t.resourcesUrl||"./",f.baseURI).href,t.syncQueue&&(u.t|=4),e.forEach(e=>e[1].forEach(t=>{const o={t:t[0],A:t[1],L:t[2],F:t[3]};o.L=t[2],o.F=t[3],!m&&1&o.t&&(o.t|=8);const r=o.A,c=class extends HTMLElement{constructor(e){super(e),(e=>{const t={t:0,T:e,P:new Map};t.C=new Promise(e=>t.U=e),e["s-p"]=[],e["s-rc"]=[],p.set(e,t)})(e=this),1&o.t&&(m?e.attachShadow({mode:"open"}):"shadowRoot"in e||(e.shadowRoot=e))}connectedCallback(){d&&(clearTimeout(d),d=null),w?i.push(this):u.jmp(()=>((e,t)=>{if(0==(1&u.t)){const n=()=>{},l=$(e);if(t.F&&(l.H=((e,t,n)=>{t.M=t.M||[];const l=n.map(([n,l,o])=>{const s=e,r=((e,t)=>n=>{256&e.t?e.o[t](n):e.M.push([t,n])})(t,o),c=(e=>({passive:0!=(1&e),capture:0!=(2&e)}))(n);return u.ael(s,l,r,c),()=>u.rel(s,l,r,c)});return()=>l.forEach(e=>e())})(e,l,t.F)),!(1&l.t)){let n;l.t|=1,n||(4&t.t||8&t.t)&&ce(e);{let t=e;for(;t=t.parentNode||t.host;)if(t["s-p"]){Y(l,l.R=t);break}}t.L&&Object.entries(t.L).forEach(([t,[n]])=>{if(31&n&&e.hasOwnProperty(t)){const n=e[t];delete e[t],e[t]=n}}),R(()=>(async(e,t,n,l,o)=>{if(0==(32&t.t)){t.t|=32;{if((o=(e=>{const t=e.A.replace(/-/g,"_"),n=e.N,l=h.get(n);return l?l[t]:__sc_import_bcgov_web_components(`./${n}.entry.js`).then(e=>(h.set(n,e),e[t]),b)})(n)).then){const e=()=>{};o=await o,e()}o.isProxied||(re(o,n,2),o.isProxied=!0);const e=()=>{};t.t|=8;try{new o(t)}catch(c){b(c)}t.t&=-9,e()}}const s=t.R,r=()=>Z(e,t,n,!0);s&&s["s-rc"]?s["s-rc"].push(r):r()})(e,l,t))}n()}})(this,o))}disconnectedCallback(){u.jmp(()=>(()=>{if(0==(1&u.t)){const e=$(this);e.H&&(e.H(),e.H=void 0)}})())}forceUpdate(){((e,t)=>{{const n=$(e);n.T.isConnected&&2==(18&n.t)&&Z(e,n,t,!1)}})(this,o)}componentOnReady(){return $(this).C}};o.N=e[0],l.includes(r)||s.get(r)||(n.push(r),s.define(r,re(c,o,1)))})),c.innerHTML=n+"{visibility:hidden}.hydrated{visibility:inherit}",c.setAttribute("data-styles",""),o.insertBefore(c,r?r.nextSibling:o.firstChild),w=!1,i.length>0?i.forEach(e=>e.connectedCallback()):u.jmp(()=>d=setTimeout(le,30,"timeout"))},ae=e=>$(e).T;export{F as H,L as a,ie as b,ae as g,A as h,x as p,d as r};