System.register(["./core-626cc845.system.js","./utils-d9577161.system.js"],(function(e){"use strict";var t,r,n,o,c;return{setters:[function(e){t=e.r;r=e.h;n=e.H;o=e.g},function(e){c=e.b}],execute:function(){var u=e("bcgov_breadcrumb",function(){function e(e){t(this,e)}e.prototype.componentWillLoad=function(){[].forEach.call(this.el.querySelectorAll("a, span"),(function(e){c(e)}))};e.prototype.render=function(){return r(n,{"aria-label":"Breadcrumb",role:"nav",class:"bcgov-breadcrumb"},r("ol",{itemscope:true,itemtype:"http://schema.org/BreadcrumbList"},r("slot",null)),r("slot",{name:"breadcrumb-extra"}))};Object.defineProperty(e.prototype,"el",{get:function(){return o(this)},enumerable:true,configurable:true});return e}())}}}));