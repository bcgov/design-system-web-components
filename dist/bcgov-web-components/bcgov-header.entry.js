import{r as s,h as e,H as a,g as o}from"./core-5419bd1c.js";import{f as n}from"./utils-923a28b7.js";const l=class{constructor(e){s(this,e),this.href="https://www2.gov.bc.ca/gov/content/home"}componentDidRender(){[].forEach.call(this.el.querySelectorAll('a[slot="hidden-link"]'),(function(s){n(s)}))}render(){return e(a,null,e("header",{class:"bcgov-header"},e("div",{class:"banner"},e("a",{class:"branding-logo",href:this.href,"aria-label":"branding logo"},e("slot",{name:"logo"})),e("div",{class:"hl"},e("slot",{name:"headline"})),e("div",{class:"access"},e("slot",{name:"hidden-link"})))),e("slot",null))}get el(){return o(this)}};export{l as bcgov_header};