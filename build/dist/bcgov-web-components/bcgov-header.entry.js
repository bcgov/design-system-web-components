import{r as s,h as r,H as i,g as t}from"./p-044d57d0.js";import{m as a}from"./p-d67e7413.js";const n=class{constructor(r){s(this,r)}componentWillLoad(){this.aTags=this.el.querySelectorAll("a[aria]"),this.imgTags=this.el.querySelectorAll("img"),this.headlineTags=this.el.querySelectorAll("div")}componentDidRender(){[{current:this.aTags,container:this.el.querySelector(".access")},{current:this.imgTags,container:this.el.querySelector(".branding-logo")},{current:this.headlineTags,container:this.el.querySelector(".hl")}].map(s=>{[].forEach.call(s.current,(function(r){a(r,s.container)}))})}render(){return r(i,null,r("header",{class:"bcgov-header"},r("div",{class:"banner"},r("a",{class:"branding-logo",href:"","aria-label":"branding logo"}),r("div",{class:"hl"}),r("div",{class:"access"}))))}get el(){return t(this)}};export{n as bcgov_header};