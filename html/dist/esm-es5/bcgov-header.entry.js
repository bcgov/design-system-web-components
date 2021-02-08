import{r as registerInstance,c as getAssetPath,h,H as Host,g as getElement}from"./index-e8a35f72.js";import{f as filterATags}from"./utils-9a052f8d.js";var BcgovHeader=function(){function e(e){registerInstance(this,e);this.href="https://www2.gov.bc.ca/gov/content/home";this.logo="gov_bc_logo.svg"}e.prototype.componentWillLoad=function(){};e.prototype.componentDidRender=function(){var e=this;[].forEach.call(this.el.querySelectorAll("div[aria]"),(function(e){e.classList.add("access")}));var t=this.el.querySelectorAll("img");var r=document.createElement("div");var a;r.classList.add("banner");[].forEach.call(t,(function(t){if(undefined!==e.href&&""!==e.href){if(undefined===a){a=document.createElement("a");a.classList.add("branding-logo");a.setAttribute("aria-label","branding logo");a.setAttribute("href",e.href);r.appendChild(a)}a.appendChild(t.cloneNode(true))}else{r.appendChild(t.cloneNode(true))}t.parentNode.replaceChild(r,t)}));[].forEach.call(this.el.querySelectorAll("div[aria]"),(function(e){[].forEach.call(e.querySelectorAll("a"),(function(e){e.setAttribute("aria","");filterATags(e)}))}))};e.prototype.getImage=function(){if(""===this.logo){return""}else{var e=getAssetPath("./assets/"+this.logo);var t=h("img",{class:"header-logo",src:e,alt:"Logo"});if(""!==this.href){t=h("a",{class:"branding-logo",href:this.href,"aria-label":"branding logo"},t)}return""}};e.prototype.render=function(){return h(Host,{className:"bcgov-header"},h("header",null,this.getImage(),h("slot",null)))};Object.defineProperty(e,"assetsDirs",{get:function(){return["../../assets"]},enumerable:false,configurable:true});Object.defineProperty(e.prototype,"el",{get:function(){return getElement(this)},enumerable:false,configurable:true});return e}();export{BcgovHeader as bcgov_header};