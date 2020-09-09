System.register(["./p-4bd492bd.system.js","./p-4262af10.system.js"],function(e){"use strict";var t,i,s,n,r,a,u;return{setters:[function(e){t=e.r;i=e.h;s=e.H;n=e.g},function(e){r=e.m;a=e.a;u=e.k}],execute:function(){var o=e("bcgov_menu",function(){function e(e){var i=this;t(this,e);this.alignment="left";this.menuId="menu";this.instructions="Use arrow keys to navigate between menuitems,\n  spacebar to expand submenus, escape key to close submenus, enter to activate menuitems.";this.breakpoint=0;this.hamburger=true;this.active=false;this.isSubmenu=false;this.showSubmenu=function(e,t){if(!i.isSubmenu){return}if(t){e.classList.add("expanded")}else{e.classList.remove("expanded")}e.setAttribute("aria-expanded",t?"true":"false");e.setAttribute("tabindex",t?"-1":"0");e.setAttribute("aria-selected",t?"true":"false");var s=e.querySelector("ul");if(null!==s){s.setAttribute("aria-hidden",t?"false":"true");if(t){var n=e.querySelector("ul > li:first-child");n.setAttribute("tabindex","-1");n.focus()}else{i.el.focus()}}}}e.prototype.componentWillLoad=function(){this.isSubmenu="UL"===this.el.parentElement.nodeName;[].forEach.call(this.el.querySelectorAll("a"),function(e){r(e)});var e=this;this.bodyTag=document.getElementsByTagName("BODY")[0];if(!this.isSubmenu){this.isDesktop();window.addEventListener("resize",function(){e.isDesktop()});if(undefined!==this.primary){window.addEventListener("click",function(t){var i=t.srcElement;if(null===i.closest("bcgov-menu")&&!e.isDesktop()){console.log("close menu")}})}}};e.prototype.componentDidRender=function(){if(this.isSubmenu){this.el.setAttribute("aria-haspopup",true);this.el.setAttribute("aria-expanded",false);this.el.setAttribute("aria-selected",false);this.el.setAttribute("tabindex",-1)}else{var e=this.el.querySelector("ul > *:first-child");if(null!==e){e.setAttribute("tabindex",0)}}};e.prototype.isDesktop=function(){var e=false;if(!this.isSubmenu){if(window.innerWidth>=this.breakpoint){if(!this.el.classList.contains("is-desktop")){this.el.classList.add("is-desktop")}if(undefined!==this.primary){if(!this.bodyTag.classList.contains("bcgov-menu-primary-is-desktop")){this.bodyTag.classList.add("bcgov-menu-primary-is-desktop")}}e=true}else{this.el.classList.remove("is-desktop");if(undefined!==this.primary){this.bodyTag.classList.remove("bcgov-menu-primary-is-desktop")}}}else{var t=a(this.el,"bcgov-menu");if(null!==t&&t.getAttribute("breakpoint")){var i=parseInt(t.getAttribute("breakpoint"));e=window.innerWidth>=i}}return e};e.prototype.onMouseEnter=function(e){if(this.isDesktop()){var t=e.target;t.focus();this.showSubmenu(t,true)}};e.prototype.onMouseLeave=function(e){if(this.isDesktop()){var t=e.target;this.showSubmenu(t,false);if(!this.isSubmenu){[].forEach.call(this.el.querySelectorAll("ul > *"),function(e){e.setAttribute("tabindex",-1);e.blur()})}}};e.prototype.onClick=function(e){console.log("click event");if(!this.isDesktop()){var t=e.target;var i=a(t,"bcgov-menu");this.showSubmenu(i,!i.classList.contains("expanded"))}};e.prototype.onKeyDown=function(e){var t=e.srcElement;if(!this.isSubmenu||true){switch(e.keyCode){case u.enter:t.querySelector("a").click();case u.space:e.preventDefault();e.stopPropagation();this.showSubmenu(this.el,true);break;case u.esc:e.preventDefault();e.stopPropagation();this.showSubmenu(this.el,false);break;case u.right:e.preventDefault();this.focusChange(t,"next");break;case u.left:e.preventDefault();this.focusChange(t,"prev");break;case u.up:e.preventDefault();this.focusChange(t,"up");break;case u.down:e.preventDefault();this.focusChange(t,"down");break}}};e.prototype.focusChange=function(e,t){if(t===void 0){t="next"}var i;if(e===this.el.querySelector("ul")){i=e.querySelector("li:first-child");i=this.isDesktop()?i.nextElementSibling:i;e=i}else{if("next"===t||"down"===t){i=e.nextElementSibling}else if("prev"==t||"up"===t){i=e.previousElementSibling}}var s=null!==a(e,'ul[role="menu"]');var n=s&&("up"===t||"down"===t)||!s&&("prev"===t||"next"===t);if(!n){return}if(null!=i&&("LI"===e.nodeName||"BCGOV-MENU"===e.nodeName)){e.setAttribute("tabindex","-1");i.setAttribute("tabindex","0");i.focus()}};e.prototype.render=function(){var e="align-"+this.alignment;var t="bcgov-instructions-"+this.menuId;var n="expandable";if(this.isSubmenu){if(undefined!==this.active&&this.active){n+=" active"}return i(s,{role:"menuitem",class:n,"aria-label":this.name},i("div",null,i("a",{href:this.href,tabindex:"-1"},this.name),i("span",null),i("slot",{name:"submenu-link"})),i("ul",{role:"menu","aria-hidden":"true"},i("slot",null)))}else{var r={role:"menubar",tabindex:"0",class:e};if(undefined!==this.primary){r["aria-labelledby"]=t}if(undefined!==this.sidebar){r["class"]+=" sidebar-menu"}return i(s,null,i("ul",Object.assign({},r),undefined!==this.primary&&i("li",{role:"menuitem",class:"bcgov-primary-menu-close2",tabindex:"-1","aria-hidden":"true","aria-labelId":"close-menu-mobile"},i("a",{href:"#","aria-label":"Close Mobile Menu",id:"close-menu-mobile"},"x")),i("slot",null)),undefined!==this.primary&&i("div",{class:"sr-only","aria-hidden":"true",id:t},this.instructions))}};Object.defineProperty(e.prototype,"el",{get:function(){return n(this)},enumerable:true,configurable:true});return e}())}}});