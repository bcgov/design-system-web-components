System.register(["./p-4bd492bd.system.js","./p-bbdcbdeb.system.js"],function(e){"use strict";var t,r,n,o,a,i;return{setters:[function(e){t=e.r;r=e.c;n=e.h;o=e.H;a=e.g},function(e){i=e.f}],execute:function(){var s=e("bcgov_header",function(){function e(e){t(this,e);this.href="https://www2.gov.bc.ca/gov/content/home";this.logo="gov_bc_logo.svg"}e.prototype.componentWillLoad=function(){};e.prototype.componentDidRender=function(){var e=this;[].forEach.call(this.el.querySelectorAll("*[aria]"),function(e){e.classList.add("access")});[].forEach.call(this.el.querySelectorAll("img"),function(t){var r=document.createElement("div");r.classList.add("banner");if(undefined!==e.href&&""!==e.href){var n=document.createElement("a");n.classList.add("branding-logo");n.setAttribute("aria-label","branding logo");n.setAttribute("href",e.href);n.appendChild(t.cloneNode(true));r.appendChild(n)}else{r.appendChild(t.cloneNode(true))}t.parentNode.replaceChild(r,t)});[].forEach.call(this.el.querySelectorAll("*[aria] a"),function(e){e.setAttribute("aria","");i(e)})};e.prototype.getImage=function(){if(""===this.logo){return""}else{var e=r("./assets/"+this.logo);var t=n("img",{class:"header-logo",src:e,alt:"Logo"});if(""!==this.href){t=n("a",{class:"branding-logo",href:this.href,"aria-label":"branding logo"},t)}return n("div",{class:"banner"},t)}};e.prototype.render=function(){return n(o,{class:"bcgov-header"},n("header",null,this.getImage(),n("slot",null)))};Object.defineProperty(e,"assetsDirs",{get:function(){return["../../assets"]},enumerable:true,configurable:true});Object.defineProperty(e.prototype,"el",{get:function(){return a(this)},enumerable:true,configurable:true});return e}())}}});