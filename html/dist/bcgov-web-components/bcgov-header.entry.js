import{r as s,c as t,h as a,H as o,g as e}from"./p-100c0da1.js";import{f as i}from"./p-129bfbdc.js";const r=class{constructor(t){s(this,t),this.href="https://www2.gov.bc.ca/gov/content/home",this.logo="gov_bc_logo.svg"}componentWillLoad(){}componentDidRender(){const s=this;[].forEach.call(this.el.querySelectorAll("div[aria]"),function(s){s.classList.add("access")});let t,a=this.el.querySelectorAll("img"),o=document.createElement("div");o.classList.add("banner"),[].forEach.call(a,function(a){void 0!==s.href&&""!==s.href?(void 0===t&&((t=document.createElement("a")).classList.add("branding-logo"),t.setAttribute("aria-label","branding logo"),t.setAttribute("href",s.href),o.appendChild(t)),t.appendChild(a.cloneNode(!0))):o.appendChild(a.cloneNode(!0)),a.parentNode.replaceChild(o,a)}),[].forEach.call(this.el.querySelectorAll("div[aria]"),function(s){[].forEach.call(s.querySelectorAll("a"),function(s){s.setAttribute("aria",""),i(s)})})}getImage(){if(""===this.logo)return"";{let s=t(`./assets/${this.logo}`),o=a("img",{class:"header-logo",src:s,alt:"Logo"});return""!==this.href&&(o=a("a",{class:"branding-logo",href:this.href,"aria-label":"branding logo"},o)),""}}render(){return a(o,{class:"bcgov-header"},a("header",null,this.getImage(),a("slot",null)))}static get assetsDirs(){return["../../assets"]}get el(){return e(this)}};export{r as bcgov_header};