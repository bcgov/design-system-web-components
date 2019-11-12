var __extends=this&&this.__extends||function(){var e=function(r,t){e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,r){e.__proto__=r}||function(e,r){for(var t in r)if(r.hasOwnProperty(t))e[t]=r[t]};return e(r,t)};return function(r,t){e(r,t);function n(){this.constructor=r}r.prototype=t===null?Object.create(t):(n.prototype=t.prototype,new n)}}();var __awaiter=this&&this.__awaiter||function(e,r,t,n){function a(e){return e instanceof t?e:new t((function(r){r(e)}))}return new(t||(t=Promise))((function(t,i){function s(e){try{o(n.next(e))}catch(r){i(r)}}function l(e){try{o(n["throw"](e))}catch(r){i(r)}}function o(e){e.done?t(e.value):a(e.value).then(s,l)}o((n=n.apply(e,r||[])).next())}))};var __generator=this&&this.__generator||function(e,r){var t={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},n,a,i,s;return s={next:l(0),throw:l(1),return:l(2)},typeof Symbol==="function"&&(s[Symbol.iterator]=function(){return this}),s;function l(e){return function(r){return o([e,r])}}function o(s){if(n)throw new TypeError("Generator is already executing.");while(t)try{if(n=1,a&&(i=s[0]&2?a["return"]:s[0]?a["throw"]||((i=a["return"])&&i.call(a),0):a.next)&&!(i=i.call(a,s[1])).done)return i;if(a=0,i)s=[s[0]&2,i.value];switch(s[0]){case 0:case 1:i=s;break;case 4:t.label++;return{value:s[1],done:false};case 5:t.label++;a=s[1];s=[0];continue;case 7:s=t.ops.pop();t.trys.pop();continue;default:if(!(i=t.trys,i=i.length>0&&i[i.length-1])&&(s[0]===6||s[0]===2)){t=0;continue}if(s[0]===3&&(!i||s[1]>i[0]&&s[1]<i[3])){t.label=s[1];break}if(s[0]===6&&t.label<i[1]){t.label=i[1];i=s;break}if(i&&t.label<i[2]){t.label=i[2];t.ops.push(s);break}if(i[2])t.ops.pop();t.trys.pop();continue}s=r.call(e,t)}catch(l){s=[6,l];a=0}finally{n=i=0}if(s[0]&5)throw s[1];return{value:s[0]?s[1]:void 0,done:true}}};System.register([],(function(e,r){"use strict";return{execute:function(){var t=this;var n={allRenderFn:true,cmpDidLoad:true,cmpShouldUpdate:false,cmpDidUnload:false,cmpDidUpdate:false,cmpDidRender:true,cmpWillLoad:true,cmpWillUpdate:false,cmpWillRender:false,connectedCallback:false,disconnectedCallback:false,element:false,event:false,hasRenderFn:true,lifecycle:true,asyncLoading:true,hostListener:true,hostListenerTargetWindow:false,hostListenerTargetDocument:false,hostListenerTargetBody:false,hostListenerTargetParent:false,hostListenerTarget:false,member:true,method:false,mode:false,noVdomRender:false,observeAttribute:true,prop:true,propBoolean:true,propNumber:true,propString:true,propMutable:false,reflect:false,scoped:false,shadowDom:false,slot:true,slotRelocation:true,state:true,style:false,svg:false,updatable:true,vdomAttribute:true,vdomXlink:true,vdomClass:true,vdomFunctional:false,vdomKey:true,vdomListener:true,vdomRef:true,vdomRender:true,vdomStyle:true,vdomText:true,watchCallback:false,taskQueue:true,lazyLoad:true,hydrateServerSide:false,cssVarShim:true,initializeNextTick:true,hydrateClientSide:false,isDebug:false,isDev:false,devTools:false,lifecycleDOMEvents:false,profile:false,hotModuleReplacement:false,constructableCSS:true,cssAnnotations:true};var a="bcgov-web-components";var i=0;var s=false;var l;var o;var f;var u=false;var $=false;var c=false;var v=false;var d=window;var m=document;var h={$flags$:0,$resourcesUrl$:"",jmp:function(e){return e()},raf:function(e){return requestAnimationFrame(e)},ael:function(e,r,t,n){return e.addEventListener(r,t,n)},rel:function(e,r,t,n){return e.removeEventListener(r,t,n)}};var p=false;var g=function(){var e=false;try{m.addEventListener("e",null,Object.defineProperty({},"passive",{get:function(){e=true}}))}catch(r){}return e}();var y=new WeakMap;var b=function(e){return y.get(e)};var w=e("r",(function(e,r){return y.set(r.$lazyInstance$=e,r)}));var R=function(e){var r={$flags$:0,$hostElement$:e,$instanceValues$:new Map};{r.$onReadyPromise$=new Promise((function(e){return r.$onReadyResolve$=e}));e["s-p"]=[];e["s-rc"]=[]}return y.set(e,r)};var _=function(e,r){return r in e};var L=function(e){return console.error(e)};var S=new Map;var x=function(e,t,n){var a=e.$tagName$.replace(/-/g,"_");var i=e.$lazyBundleIds$;var s=S.get(i);if(s){return s[a]}return r.import("./"+i+".entry.js"+"").then((function(e){{S.set(i,e)}return e[a]}),L)};var N=[];var k=[];var T=[];var C=function(e,r){return function(t){e.push(t);if(!s){s=true;if(r&&h.$flags$&4){U(A)}else{h.raf(A)}}}};var j=function(e){for(var r=0;r<e.length;r++){try{e[r](performance.now())}catch(t){L(t)}}e.length=0};var E=function(e,r){var t=0;var n=0;while(t<e.length&&(n=performance.now())<r){try{e[t++](n)}catch(a){L(a)}}if(t===e.length){e.length=0}else if(t!==0){e.splice(0,t)}};var A=function(){i++;j(N);var e=(h.$flags$&6)===2?performance.now()+10*Math.ceil(i*(1/22)):Infinity;E(k,e);E(T,e);if(k.length>0){T.push.apply(T,k);k.length=0}if(s=N.length+k.length+T.length>0){h.raf(A)}else{i=0}};var U=function(e){return Promise.resolve().then(e)};var P=C(k,true);var O={};var B=function(e){e=typeof e;return e==="object"||e==="function"};var D=function(e){return"__sc_import_"+e.replace(/\s|-/g,"_")};var M=function(e,r){if(r===void 0){r=""}{return function(){return}}};var I=function(e,r){{return function(){return}}};var q=e("a",(function(){if(!(d.CSS&&d.CSS.supports&&d.CSS.supports("color","var(--c)"))){return r.import("./css-shim-978387b1-45911f05.system.js").then((function(){h.$cssShim$=d.__stencil_cssshim;if(h.$cssShim$){return h.$cssShim$.initShim()}}))}return Promise.resolve()}));var z=e("p",(function(){return __awaiter(t,void 0,void 0,(function(){var e,t,n,i,s;return __generator(this,(function(l){switch(l.label){case 0:{h.$cssShim$=d.__stencil_cssshim}e=r.meta.url;t=new RegExp("/"+a+"(\\.esm)?\\.js($|\\?|#)");n=Array.from(m.querySelectorAll("script")).find((function(e){return t.test(e.src)||e.getAttribute("data-stencil-namespace")===a}));i=n["data-opts"];if(!(e!==""))return[3,1];return[2,Object.assign(Object.assign({},i),{resourcesUrl:new URL(".",e).href})];case 1:s=new URL(".",new URL(n.getAttribute("data-resources-url")||n.src,d.location.href));F(s.href);if(!!window.customElements)return[3,3];return[4,r.import("./dom-96781eef-c3e269f7.system.js")];case 2:l.sent();l.label=3;case 3:return[2,Object.assign(Object.assign({},i),{resourcesUrl:s.href})]}}))}))}));var F=function(e){var r=D(a);try{d[r]=new Function("w","return import(w);//"+Math.random())}catch(n){var t=new Map;d[r]=function(n){var a=new URL(n,e).href;var i=t.get(a);if(!i){var s=m.createElement("script");s.type="module";s.src=URL.createObjectURL(new Blob(["import * as m from '"+a+"'; window."+r+".m = m;"],{type:"application/javascript"}));i=new Promise((function(e){s.onload=function(){e(d[r].m);s.remove()}}));t.set(a,i);m.head.appendChild(s)}return i}}};var V=function(e,r){if(e!=null&&!B(e)){if(r&4){return e==="false"?false:e===""||!!e}if(r&2){return parseFloat(e)}if(r&1){return String(e)}return e}return e};var W="hydrated";var H="http://www.w3.org/1999/xlink";var Q=e("h",(function(e,r){var t=[];for(var n=2;n<arguments.length;n++){t[n-2]=arguments[n]}var a=null;var i=null;var s=null;var l=false;var o=false;var f=[];var u=function(r){for(var t=0;t<r.length;t++){a=r[t];if(Array.isArray(a)){u(a)}else if(a!=null&&typeof a!=="boolean"){if(l=typeof e!=="function"&&!B(a)){a=String(a)}if(l&&o){f[f.length-1].$text$+=a}else{f.push(l?G(null,a):a)}o=l}}};u(t);if(r){if(r.key){i=r.key}if(r.name){s=r.name}{var $=r.className||r.class;if($){r.class=typeof $!=="object"?$:Object.keys($).filter((function(e){return $[e]})).join(" ")}}}var c=G(e,null);c.$attrs$=r;if(f.length>0){c.$children$=f}{c.$key$=i}{c.$name$=s}return c}));var G=function(e,r){var t={$flags$:0,$tag$:e,$text$:r,$elm$:null,$children$:null};{t.$attrs$=null}{t.$key$=null}{t.$name$=null}return t};var K=e("H",{});var X=function(e){return e&&e.$tag$===K};var J=function(e,r,t,n,a,i){if(t===n){return}var s=_(e,r);var l=r.toLowerCase();if(r==="class"){var o=e.classList;var f=Z(t);var u=Z(n);o.remove.apply(o,f.filter((function(e){return e&&!u.includes(e)})));o.add.apply(o,u.filter((function(e){return e&&!f.includes(e)})))}else if(r==="style"){{for(var $ in t){if(!n||n[$]==null){if($.includes("-")){e.style.removeProperty($)}else{e.style[$]=""}}}}for(var $ in n){if(!t||n[$]!==t[$]){if($.includes("-")){e.style.setProperty($,n[$])}else{e.style[$]=n[$]}}}}else if(r==="key");else if(r==="ref"){if(n){n(e)}}else if(!s&&r[0]==="o"&&r[1]==="n"){if(r[2]==="-"){r=r.slice(3)}else if(_(d,l)){r=l.slice(2)}else{r=l[2]+r.slice(3)}if(t){h.rel(e,r,t,false)}if(n){h.ael(e,r,n,false)}}else{var c=B(n);if((s||c&&n!==null)&&!a){try{if(!e.tagName.includes("-")){var v=n==null?"":n;if(r==="list"){s=false}else if(t==null||e[r]!=v){e[r]=v}}else{e[r]=n}}catch(p){}}var m=false;{if(l!==(l=l.replace(/^xlink\:?/,""))){r=l;m=true}}if(n==null||n===false){if(m){e.removeAttributeNS(H,r)}else{e.removeAttribute(r)}}else if((!s||i&4||a)&&!c){n=n===true?"":n;if(m){e.setAttributeNS(H,r,n)}else{e.setAttribute(r,n)}}}};var Y=/\s/;var Z=function(e){return!e?[]:e.split(Y)};var ee=function(e,r,t,n){var a=r.$elm$.nodeType===11&&r.$elm$.host?r.$elm$.host:r.$elm$;var i=e&&e.$attrs$||O;var s=r.$attrs$||O;{for(n in i){if(!(n in s)){J(a,n,i[n],undefined,t,r.$flags$)}}}for(n in s){J(a,n,i[n],s[n],t,r.$flags$)}};var re=function(e,r,t,n){var a=r.$children$[t];var i=0;var s;var $;var d;if(!u){c=true;if(a.$tag$==="slot"){if(l){n.classList.add(l+"-s")}a.$flags$|=a.$children$?2:1}}if(a.$text$!==null){s=a.$elm$=m.createTextNode(a.$text$)}else if(a.$flags$&1){s=a.$elm$=m.createTextNode("")}else{s=a.$elm$=m.createElement(a.$flags$&2?"slot-fb":a.$tag$);{ee(null,a,v)}if(a.$children$){for(i=0;i<a.$children$.length;++i){$=re(e,a,i,s);if($){s.appendChild($)}}}}{s["s-hn"]=f;if(a.$flags$&(2|1)){s["s-sr"]=true;s["s-cr"]=o;s["s-sn"]=a.$name$||"";d=e&&e.$children$&&e.$children$[t];if(d&&d.$tag$===a.$tag$&&e.$elm$){te(e.$elm$,false)}}}return s};var te=function(e,r){h.$flags$|=1;var t=e.childNodes;for(var n=t.length-1;n>=0;n--){var a=t[n];if(a["s-hn"]!==f&&a["s-ol"]){oe(a).insertBefore(a,le(a));a["s-ol"].remove();a["s-ol"]=undefined;c=true}if(r){te(a,r)}}h.$flags$&=~1};var ne=function(e,r,t,n,a,i){var s=e["s-cr"]&&e["s-cr"].parentNode||e;var l;for(;a<=i;++a){if(n[a]){l=re(null,t,a,e);if(l){n[a].$elm$=l;s.insertBefore(l,le(r))}}}};var ae=function(e,r,t,n,a){for(;r<=t;++r){if(n=e[r]){a=n.$elm$;ve(n);{$=true;if(a["s-ol"]){a["s-ol"].remove()}else{te(a,true)}}a.remove()}}};var ie=function(e,r,t,n){var a=0;var i=0;var s=0;var l=0;var o=r.length-1;var f=r[0];var u=r[o];var $=n.length-1;var c=n[0];var v=n[$];var d;var m;while(a<=o&&i<=$){if(f==null){f=r[++a]}else if(u==null){u=r[--o]}else if(c==null){c=n[++i]}else if(v==null){v=n[--$]}else if(se(f,c)){fe(f,c);f=r[++a];c=n[++i]}else if(se(u,v)){fe(u,v);u=r[--o];v=n[--$]}else if(se(f,v)){if(f.$tag$==="slot"||v.$tag$==="slot"){te(f.$elm$.parentNode,false)}fe(f,v);e.insertBefore(f.$elm$,u.$elm$.nextSibling);f=r[++a];v=n[--$]}else if(se(u,c)){if(f.$tag$==="slot"||v.$tag$==="slot"){te(u.$elm$.parentNode,false)}fe(u,c);e.insertBefore(u.$elm$,f.$elm$);u=r[--o];c=n[++i]}else{s=-1;{for(l=a;l<=o;++l){if(r[l]&&r[l].$key$!==null&&r[l].$key$===c.$key$){s=l;break}}}if(s>=0){m=r[s];if(m.$tag$!==c.$tag$){d=re(r&&r[i],t,s,e)}else{fe(m,c);r[s]=undefined;d=m.$elm$}c=n[++i]}else{d=re(r&&r[i],t,i,e);c=n[++i]}if(d){{oe(f.$elm$).insertBefore(d,le(f.$elm$))}}}}if(a>o){ne(e,n[$+1]==null?null:n[$+1].$elm$,t,n,i,$)}else if(i>$){ae(r,a,o)}};var se=function(e,r){if(e.$tag$===r.$tag$){if(e.$tag$==="slot"){return e.$name$===r.$name$}{return e.$key$===r.$key$}}return false};var le=function(e){return e&&e["s-ol"]||e};var oe=function(e){return(e["s-ol"]?e["s-ol"]:e).parentNode};var fe=function(e,r){var t=r.$elm$=e.$elm$;var n=e.$children$;var a=r.$children$;var i;if(r.$text$===null){{if(r.$tag$==="slot");else{ee(e,r,v)}}if(n!==null&&a!==null){ie(t,n,r,a)}else if(a!==null){if(e.$text$!==null){t.textContent=""}ne(t,null,r,a,0,a.length-1)}else if(n!==null){ae(n,0,n.length-1)}}else if(i=t["s-cr"]){i.parentNode.textContent=r.$text$}else if(e.$text$!==r.$text$){t.data=r.$text$}};var ue=function(e){var r=e.childNodes;var t;var n;var a;var i;var s;var l;for(n=0,a=r.length;n<a;n++){t=r[n];if(t.nodeType===1){if(t["s-sr"]){s=t["s-sn"];t.hidden=false;for(i=0;i<a;i++){if(r[i]["s-hn"]!==t["s-hn"]){l=r[i].nodeType;if(s!==""){if(l===1&&s===r[i].getAttribute("slot")){t.hidden=true;break}}else{if(l===1||l===3&&r[i].textContent.trim()!==""){t.hidden=true;break}}}}}ue(t)}}};var $e=[];var ce=function(e){var r=e.childNodes;var t=r.length;var n=0;var a=0;var i=0;var s;var l;var o;var f;for(t=r.length;n<t;n++){s=r[n];if(s["s-sr"]&&(l=s["s-cr"])){o=l.parentNode.childNodes;f=s["s-sn"];for(a=o.length-1;a>=0;a--){l=o[a];if(!l["s-cn"]&&!l["s-nr"]&&l["s-hn"]!==s["s-hn"]){i=l.nodeType;if((i===3||i===8)&&f===""||i===1&&l.getAttribute("slot")===null&&f===""||i===1&&l.getAttribute("slot")===f){if(!$e.some((function(e){return e.$nodeToRelocate$===l}))){$=true;l["s-sn"]=f;$e.push({$slotRefNode$:s,$nodeToRelocate$:l})}}}}}if(s.nodeType===1){ce(s)}}};var ve=function(e){{e.$attrs$&&e.$attrs$.ref&&e.$attrs$.ref(null);e.$children$&&e.$children$.forEach(ve)}};var de=function(e,r,t,n){f=e.tagName;var a=r.$vnode$||G(null,null);var i=X(n)?n:Q(null,null,n);i.$tag$=null;i.$flags$|=4;r.$vnode$=i;i.$elm$=a.$elm$=e;{o=e["s-cr"];u=p;c=$=false}fe(a,i);{if(c){ce(i.$elm$);for(var s=0;s<$e.length;s++){var l=$e[s];if(!l.$nodeToRelocate$["s-ol"]){var v=m.createTextNode("");v["s-nr"]=l.$nodeToRelocate$;l.$nodeToRelocate$.parentNode.insertBefore(l.$nodeToRelocate$["s-ol"]=v,l.$nodeToRelocate$)}}h.$flags$|=1;for(var s=0;s<$e.length;s++){var l=$e[s];var d=l.$slotRefNode$.parentNode;var g=l.$slotRefNode$.nextSibling;var v=l.$nodeToRelocate$["s-ol"];while(v=v.previousSibling){var y=v["s-nr"];if(y&&y["s-sn"]===l.$nodeToRelocate$["s-sn"]&&d===y.parentNode){y=y.nextSibling;if(!y||!y["s-nr"]){g=y;break}}}if(!g&&d!==l.$nodeToRelocate$.parentNode||l.$nodeToRelocate$.nextSibling!==g){if(l.$nodeToRelocate$!==g){d.insertBefore(l.$nodeToRelocate$,g)}}}h.$flags$&=~1}if($){ue(i.$elm$)}$e.length=0}};var me=function(e,r){if(r&&!e.$onRenderResolve$){r["s-p"].push(new Promise((function(r){return e.$onRenderResolve$=r})))}};var he=function(e,r,t,n){{r.$flags$|=16}if(r.$flags$&4){r.$flags$|=512;return}var a=M("scheduleUpdate",t.$tagName$);var i=r.$ancestorComponent$;var s=r.$lazyInstance$;var l=function(){return pe(e,r,t,s)};me(r,i);var o;if(n){{r.$flags$|=256;if(r.$queuedListeners$){r.$queuedListeners$.forEach((function(e){var r=e[0],t=e[1];return we(s,r,t)}));r.$queuedListeners$=null}}{o=we(s,"componentWillLoad")}}a();return Re(o,(function(){return P(l)}))};var pe=function(e,r,t,n,a){var i=M("update",t.$tagName$);var s=e["s-rc"];var l=M("render",t.$tagName$);{{try{de(e,r,t,n.render())}catch(u){L(u)}}}if(h.$cssShim$){h.$cssShim$.updateHost(e)}{r.$flags$&=~16}{r.$flags$|=2}if(s){s.forEach((function(e){return e()}));e["s-rc"]=undefined}l();i();{var o=e["s-p"];var f=function(){return ge(e,r,t)};if(o.length===0){f()}else{Promise.all(o).then(f);r.$flags$|=4;o.length=0}}};var ge=function(e,r,t){var n=M("postUpdate",t.$tagName$);var a=r.$lazyInstance$;var i=r.$ancestorComponent$;{we(a,"componentDidRender")}if(!(r.$flags$&64)){r.$flags$|=64;{e.classList.add(W)}{we(a,"componentDidLoad")}n();{r.$onReadyResolve$(e);if(!i){be()}}}else{n()}{if(r.$onRenderResolve$){r.$onRenderResolve$();r.$onRenderResolve$=undefined}if(r.$flags$&512){U((function(){return he(e,r,t,false)}))}r.$flags$&=~(4|512)}};var ye=function(e,r){{var t=b(e);if((t.$flags$&(2|16))===2){he(e,t,r,false)}}};var be=function(e){{m.documentElement.classList.add(W)}{h.$flags$|=2}};var we=function(e,r,t){if(e&&e[r]){try{return e[r](t)}catch(n){L(n)}}return undefined};var Re=function(e,r){return e&&e.then?e.then(r):r()};var _e=function(e,r){return b(e).$instanceValues$.get(r)};var Le=function(e,r,t,n){var a=b(e);var i=a.$hostElement$;var s=a.$instanceValues$.get(r);var l=a.$flags$;var o=a.$lazyInstance$;t=V(t,n.$members$[r][0]);if(t!==s&&(!(l&8)||s===undefined)){a.$instanceValues$.set(r,t);if(o){if((l&(2|16))===2){he(i,a,n,false)}}}};var Se=function(e,r,t){if(r.$members$){var n=Object.entries(r.$members$);var a=e.prototype;n.forEach((function(e){var n=e[0],i=e[1][0];if(i&31||t&2&&i&32){Object.defineProperty(a,n,{get:function(){return _e(this,n)},set:function(e){Le(this,n,e,r)},configurable:true,enumerable:true})}}));if(t&1){var i=new Map;a.attributeChangedCallback=function(e,r,t){var n=this;h.jmp((function(){var r=i.get(e);n[r]=t===null&&typeof n[r]==="boolean"?false:t}))};e.observedAttributes=n.filter((function(e){var r=e[0],t=e[1];return t[0]&15})).map((function(e){var r=e[0],t=e[1];var n=t[1]||r;i.set(n,r);return n}))}}return e};var xe=function(e,r,t){r.$queuedListeners$=r.$queuedListeners$||[];var n=t.map((function(t){var n=t[0],a=t[1],i=t[2];var s=e;var l=Ne(r,i);var o=ke(n);h.ael(s,a,l,o);return function(){return h.rel(s,a,l,o)}}));return function(){return n.forEach((function(e){return e()}))}};var Ne=function(e,r){return function(t){{if(e.$flags$&256){e.$lazyInstance$[r](t)}else{e.$queuedListeners$.push([r,t])}}}};var ke=function(e){return g?{passive:(e&1)!==0,capture:(e&2)!==0}:(e&2)!==0};var Te=function(e,r,n,a,i){return __awaiter(t,void 0,void 0,(function(){var t,a,s,l;return __generator(this,(function(o){switch(o.label){case 0:if(!((r.$flags$&32)===0))return[3,3];r.$flags$|=32;i=x(n);if(!i.then)return[3,2];t=I();return[4,i];case 1:i=o.sent();t();o.label=2;case 2:if(!i.isProxied){Se(i,n,2);i.isProxied=true}a=M("createInstance",n.$tagName$);{r.$flags$|=8}try{new i(r)}catch(f){L(f)}{r.$flags$&=~8}a();o.label=3;case 3:s=r.$ancestorComponent$;l=function(){return he(e,r,n,true)};if(s&&s["s-rc"]){s["s-rc"].push(l)}else{l()}return[2]}}))}))};var Ce=function(e,r){if((h.$flags$&1)===0){var t=M("connectedCallback",r.$tagName$);var a=b(e);if(r.$listeners$){a.$rmListeners$=xe(e,a,r.$listeners$)}if(!(a.$flags$&1)){a.$flags$|=1;var i=void 0;if(!i){if(r.$flags$&4||n.shadowDom){je(e)}}{var s=e;while(s=s.parentNode||s.host){if(s["s-p"]){me(a,a.$ancestorComponent$=s);break}}}if(r.$members$){Object.entries(r.$members$).forEach((function(r){var t=r[0],n=r[1][0];if(n&31&&e.hasOwnProperty(t)){var a=e[t];delete e[t];e[t]=a}}))}{U((function(){return Te(e,a,r)}))}}t()}};var je=function(e){var r="";var t=e["s-cr"]=m.createComment(r);t["s-cn"]=true;e.insertBefore(t,e.firstChild)};var Ee=function(e){if((h.$flags$&1)===0){var r=b(e);{if(r.$rmListeners$){r.$rmListeners$();r.$rmListeners$=undefined}}if(h.$cssShim$){h.$cssShim$.removeHost(e)}}};var Ae=e("b",(function(e,r){if(r===void 0){r={}}var t=M();var n=[];var a=r.exclude||[];var i=m.head;var s=d.customElements;var l=i.querySelector("meta[charset]");var o=m.createElement("style");var f=[];var u;var $=true;Object.assign(h,r);h.$resourcesUrl$=new URL(r.resourcesUrl||"./",m.baseURI).href;if(r.syncQueue){h.$flags$|=4}e.forEach((function(e){return e[1].forEach((function(r){var t={$flags$:r[0],$tagName$:r[1],$members$:r[2],$listeners$:r[3]};{t.$members$=r[2]}{t.$listeners$=r[3]}var i=t.$tagName$;var l=function(e){__extends(r,e);function r(r){var t=e.call(this,r)||this;r=t;R(r);return t}r.prototype.connectedCallback=function(){var e=this;if(u){clearTimeout(u);u=null}if($){f.push(this)}else{h.jmp((function(){return Ce(e,t)}))}};r.prototype.disconnectedCallback=function(){var e=this;h.jmp((function(){return Ee(e)}))};r.prototype["s-hmr"]=function(e){};r.prototype.forceUpdate=function(){ye(this,t)};r.prototype.componentOnReady=function(){return b(this).$onReadyPromise$};return r}(HTMLElement);t.$lazyBundleIds$=e[0];if(!a.includes(i)&&!s.get(i)){n.push(i);s.define(i,Se(l,t,1))}}))}));o.innerHTML=n+"{visibility:hidden}.hydrated{visibility:inherit}";o.setAttribute("data-styles","");i.insertBefore(o,l?l.nextSibling:i.firstChild);$=false;if(f.length>0){f.forEach((function(e){return e.connectedCallback()}))}else{h.jmp((function(){return u=setTimeout(be,30,"timeout")}))}t()}));var Ue=e("g",(function(e){return b(e).$hostElement$}))}}}));