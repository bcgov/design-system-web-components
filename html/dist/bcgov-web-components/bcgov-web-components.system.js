System.register(["./index-c3f6e6c9.system.js","./app-globals-497eb362.system.js"],(function(e,t){"use strict";var r,n,o,a,s,i,c,m,u,l;return{setters:[function(e){r=e.B;n=e.c;o=e.p;a=e.w;s=e.H;i=e.d;c=e.N;m=e.a;u=e.b},function(e){l=e.g}],execute:function(){var e=function(e){return"__sc_import_"+e.replace(/\s|-/g,"_")};var f=function(){if(r.isDev&&!r.isTesting){n("Running in development mode.")}if(r.cssVarShim){o.$cssShim$=a.__cssshim}if(r.cloneNodeFix){v(s.prototype)}if(r.profile&&!performance.mark){performance.mark=performance.measure=function(){};performance.getEntriesByName=function(){return[]}}var e=r.scriptDataOpts||r.safari10||r.dynamicImportShim?Array.from(i.querySelectorAll("script")).find((function(e){return new RegExp("/"+c+"(\\.esm)?\\.js($|\\?|#)").test(e.src)||e.getAttribute("data-stencil-namespace")===c})):null;var u=t.meta.url;var l=r.scriptDataOpts?e["data-opts"]||{}:{};if(r.safari10&&"onbeforeload"in e&&!history.scrollRestoration){return{then:function(){}}}if(!r.safari10&&u!==""){l.resourcesUrl=new URL(".",u).href}else if(r.dynamicImportShim||r.safari10){l.resourcesUrl=new URL(".",new URL(e.getAttribute("data-resources-url")||e.src,a.location.href)).href;if(r.dynamicImportShim){d(l.resourcesUrl,e)}if(r.dynamicImportShim&&!a.customElements){return t.import("./dom-4f345490.system.js").then((function(){return l}))}}return m(l)};var d=function(t,r){var n=e(c);try{a[n]=new Function("w","return import(w);//"+Math.random())}catch(s){var o=new Map;a[n]=function(e){var s=new URL(e,t).href;var c=o.get(s);if(!c){var m=i.createElement("script");m.type="module";m.crossOrigin=r.crossOrigin;m.src=URL.createObjectURL(new Blob(["import * as m from '"+s+"'; window."+n+".m = m;"],{type:"application/javascript"}));c=new Promise((function(e){m.onload=function(){e(a[n].m);m.remove()}}));o.set(s,c);i.head.appendChild(m)}return c}}};var v=function(e){var t=e.cloneNode;e.cloneNode=function(e){if(this.nodeName==="TEMPLATE"){return t.call(this,e)}var r=t.call(this,false);var n=this.childNodes;if(e){for(var o=0;o<n.length;o++){if(n[o].nodeType!==2){r.appendChild(n[o].cloneNode(true))}}}return r}};f().then((function(e){l();return u([["bcgov-beta.system",[[0,"bcgov-beta",{content:[1],label:[1],stateContent:[32]}]]],["bcgov-breadcrumb.system",[[4,"bcgov-breadcrumb"]]],["bcgov-button.system",[[4,"bcgov-button",{link:[1],targetHidden:[1,"target-hidden"],eventHandler:[16],buttonStyle:[1,"button-style"],target:[1],dataTarget:[1,"data-target"],breakpoint:[32]},[[0,"click","onClick"]]]]],["bcgov-callout.system",[[4,"bcgov-callout"]]],["bcgov-carousel.system",[[1,"bcgov-carousel"]]],["bcgov-footer.system",[[4,"bcgov-footer",{logo:[1]}]]],["bcgov-form.system",[[4,"bcgov-form"]]],["bcgov-header.system",[[4,"bcgov-header",{href:[1],logo:[1]}]]],["bcgov-menu.system",[[4,"bcgov-menu",{alignment:[1],primary:[1],sidebar:[1],menuId:[1,"menu-id"],instructions:[1],href:[1],name:[1],breakpoint:[2],hamburger:[4],active:[4],allowHover:[4,"allow-hover"],menuTimeOut:[2,"menu-time-out"],isSubmenu:[32],clone:[32],allTags:[32],bodyTag:[32],menuTimeOutState:[32]},[[1,"mouseenter","onMouseEnter"],[1,"mouseleave","onMouseLeave"],[0,"click","onClick"],[0,"keydown","onKeyDown"]]]]],["bcgov-search.system",[[4,"bcgov-search",{breakpoint:[2]},[[0,"keypress","onKeyPress"]]]]]],e)}))}}}));