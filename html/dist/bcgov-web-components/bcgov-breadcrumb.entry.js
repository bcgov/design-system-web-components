import{r,h as t,H as a,g as e}from"./core-d2dd311f.js";import{b as s}from"./utils-923a28b7.js";const o=class{constructor(t){r(this,t)}componentWillLoad(){[].forEach.call(this.el.querySelectorAll("a, span"),(function(r){s(r)}))}render(){return t(a,{"aria-label":"Breadcrumb",role:"nav",class:"bcgov-breadcrumb"},t("ol",{itemscope:!0,itemtype:"http://schema.org/BreadcrumbList"},t("slot",null)),t("slot",{name:"breadcrumb-extra"}))}get el(){return e(this)}};export{o as bcgov_breadcrumb};