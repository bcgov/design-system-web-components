import{r,h as s,H as t,g as a}from"./core-5419bd1c.js";import{b as e}from"./utils-923a28b7.js";const o=class{constructor(s){r(this,s)}componentWillLoad(){[].forEach.call(this.el.querySelectorAll("a, span"),(function(r){e(r)}))}render(){return s(t,{"aria-label":"Breadcrumb",role:"nav",class:"bcgov-breadcrumb"},s("ol",{itemscope:!0,itemtype:"http://schema.org/BreadcrumbList"},s("slot",null)))}get el(){return a(this)}};export{o as bcgov_breadcrumb};