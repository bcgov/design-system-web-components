System.register(["./index-c3f6e6c9.system.js","./utils-1b1f3259.system.js"],(function(e){"use strict";var t,r,n,o,a,i;return{setters:[function(e){t=e.r;r=e.f;n=e.h;o=e.e;a=e.g},function(e){i=e.f}],execute:function(){var l=e("bcgov_header",function(){function e(e){t(this,e);this.href="https://www2.gov.bc.ca/gov/content/home";this.logo="gov_bc_logo.svg"}e.prototype.componentWillLoad=function(){};e.prototype.componentDidRender=function(){var e=this;[].forEach.call(this.el.querySelectorAll("div[aria]"),(function(e){e.classList.add("access")}));var t=this.el.querySelectorAll("img");var r=document.createElement("div");var n;r.classList.add("banner");[].forEach.call(t,(function(t){if(undefined!==e.href&&""!==e.href){if(undefined===n){n=document.createElement("a");n.classList.add("branding-logo");n.setAttribute("aria-label","branding logo");n.setAttribute("href",e.href);r.appendChild(n)}n.appendChild(t.cloneNode(true))}else{r.appendChild(t.cloneNode(true))}t.parentNode.replaceChild(r,t)}));[].forEach.call(this.el.querySelectorAll("div[aria]"),(function(e){[].forEach.call(e.querySelectorAll("a"),(function(e){e.setAttribute("aria","");i(e)}))}))};e.prototype.getImage=function(){if(""===this.logo){return""}else{var e=r("./assets/"+this.logo);var t=n("img",{class:"header-logo",src:e,alt:"Logo"});if(""!==this.href){t=n("a",{class:"branding-logo",href:this.href,"aria-label":"branding logo"},t)}return""}};e.prototype.render=function(){return n(o,{className:"bcgov-header"},n("header",null,this.getImage(),n("slot",null)))};Object.defineProperty(e,"assetsDirs",{get:function(){return["../../assets"]},enumerable:false,configurable:true});Object.defineProperty(e.prototype,"el",{get:function(){return a(this)},enumerable:false,configurable:true});return e}())}}}));