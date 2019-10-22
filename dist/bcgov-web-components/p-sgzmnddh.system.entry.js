System.register(["./p-05d9e8bc.system.js","./p-a56d38ba.system.js"],(function(e){"use strict";var t,n,s,u,i;return{setters:[function(e){t=e.r;n=e.h;s=e.H;u=e.g},function(e){i=e.a}],execute:function(){var r=e("bcgov_menu",function(){function e(e){t(this,e);this.alignment="left";this.menuId="menu";this.isSubmenu=false;this.showSubmenu=function(e,t){if(t){e.classList.add("expanded")}else{e.classList.remove("expanded")}e.setAttribute("aria-expanded",t?"true":"false");e.setAttribute("tabindex",t?"-1":"0")}}e.prototype.getInstructions=function(){return this.instructions||"Use arrow keys to navigate between menuitems,\n    spacebar to expand submenus, \n    escape key to close submenus, \n    enter to activate menuitems."};e.prototype.componentWillLoad=function(){this.isSubmenu="UL"===this.el.parentElement.nodeName;[].forEach.call(this.el.querySelectorAll("a"),(function(e){i(e)}))};e.prototype.componentDidRender=function(){};e.prototype.onMouseEnter=function(e){var t=e.target;this.showSubmenu(t,true)};e.prototype.onMouseLeave=function(e){var t=e.target;this.showSubmenu(t,false)};e.prototype.render=function(){var e="align-"+this.alignment;var t="bcgov-instructions-"+this.menuId;if(this.isSubmenu){return n(s,{role:"menuitem",class:"expandable"},n("a",{href:this.href},this.name),n("ul",{role:"menu"},n("slot",null)))}else{if(undefined!==this.instructions){return n(s,null,n("ul",{role:"menubar",class:e,"aria-labelledby":t},n("slot",null)),n("div",{class:"sr-only","aria-hidden":"true",id:t},this.instructions))}else{return n(s,null,n("ul",{role:"menubar",class:e},n("slot",null)))}}};Object.defineProperty(e.prototype,"el",{get:function(){return u(this)},enumerable:true,configurable:true});return e}())}}}));