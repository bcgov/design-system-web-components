System.register(["./core-a729c5d8.system.js","./utils-d9577161.system.js"],(function(e){"use strict";var t,n,r,o,s;return{setters:[function(e){t=e.r;n=e.h;r=e.H;o=e.g},function(e){s=e.f}],execute:function(){var l=e("bcgov_header",function(){function e(e){t(this,e);this.href="https://www2.gov.bc.ca/gov/content/home"}e.prototype.componentDidRender=function(){[].forEach.call(this.el.querySelectorAll('a[slot="hidden-link"]'),(function(e){s(e)}))};e.prototype.render=function(){return n(r,null,n("header",{class:"bcgov-header"},n("div",{class:"banner"},n("a",{class:"branding-logo",href:this.href,"aria-label":"branding logo"},n("slot",{name:"logo"})),n("div",{class:"hl"},n("slot",{name:"headline"})),n("div",{class:"access"},n("slot",{name:"hidden-link"})))),n("slot",null))};Object.defineProperty(e.prototype,"el",{get:function(){return o(this)},enumerable:true,configurable:true});return e}())}}}));