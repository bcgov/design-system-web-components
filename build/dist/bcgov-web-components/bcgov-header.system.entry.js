System.register(["./p-f6a648fd.system.js","./p-5a5ee679.system.js"],(function(e){"use strict";var t,r,n,i,a;return{setters:[function(e){t=e.r;r=e.h;n=e.H;i=e.g},function(e){a=e.m}],execute:function(){var o=e("bcgov_header",function(){function e(e){t(this,e)}e.prototype.componentWillLoad=function(){this.aTags=this.el.querySelectorAll("a[aria]");this.imgTags=this.el.querySelectorAll("img");this.headlineTags=this.el.querySelectorAll("div")};e.prototype.componentDidRender=function(){var e=[{current:this.aTags,container:this.el.querySelector(".access")},{current:this.imgTags,container:this.el.querySelector(".branding-logo")},{current:this.headlineTags,container:this.el.querySelector(".hl")}];e.map((function(e){[].forEach.call(e["current"],(function(t){a(t,e["container"])}))}))};e.prototype.render=function(){return r(n,null,r("header",{class:"bcgov-header"},r("div",{class:"banner"},r("a",{class:"branding-logo",href:"","aria-label":"branding logo"}),r("div",{class:"hl"}),r("div",{class:"access"}))))};Object.defineProperty(e.prototype,"el",{get:function(){return i(this)},enumerable:true,configurable:true});return e}())}}}));