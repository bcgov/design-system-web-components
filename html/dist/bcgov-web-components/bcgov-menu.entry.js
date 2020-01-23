import{r as e,h as s,H as t,g as i}from"./core-d2dd311f.js";import{m as n,a,k as o}from"./utils-923a28b7.js";const r=class{constructor(s){e(this,s),this.alignment="left",this.menuId="menu",this.instructions="Use arrow keys to navigate between menuitems,\n  spacebar to expand submenus, escape key to close submenus, enter to activate menuitems.",this.breakpoint=0,this.hamburger=!0,this.isSubmenu=!1,this.showSubmenu=(e,s)=>{if(!this.isSubmenu)return;s?e.classList.add("expanded"):e.classList.remove("expanded"),e.setAttribute("aria-expanded",s?"true":"false"),e.setAttribute("tabindex",s?"-1":"0"),e.setAttribute("aria-selected",s?"true":"false");const t=e.querySelector("ul");if(null!==t)if(t.setAttribute("aria-hidden",s?"false":"true"),s){const s=e.querySelector("ul > li:first-child");s.setAttribute("tabindex","0"),s.focus()}else this.el.focus()}}componentWillLoad(){this.isSubmenu="UL"===this.el.parentElement.nodeName,[].forEach.call(this.el.querySelectorAll("a"),(function(e){n(e)}));const e=this;this.isSubmenu||(this.isDesktop(),window.addEventListener("resize",(function(){e.isDesktop()})))}componentDidRender(){if(this.isSubmenu)this.el.setAttribute("aria-haspopup",!0),this.el.setAttribute("aria-expanded",!1),this.el.setAttribute("aria-selected",!1),this.el.setAttribute("tabindex",0);else{const e=this.el.querySelector("ul > *:first-child");null!==e&&e.setAttribute("tabindex",0)}}isDesktop(){let e=!1;if(this.isSubmenu){let s=a(this.el,"bcgov-menu");if(null!==s&&s.getAttribute("breakpoint")){const t=parseInt(s.getAttribute("breakpoint"));e=window.innerWidth>=t}}else window.innerWidth>=this.breakpoint?(this.el.classList.contains("is-desktop")||this.el.classList.add("is-desktop"),e=!0):this.el.classList.remove("is-desktop");return e}onMouseEnter(e){this.isDesktop()&&this.showSubmenu(e.target,!0)}onMouseLeave(e){this.isDesktop()&&this.showSubmenu(e.target,!1)}onClick(e){if(!this.isDesktop()){const s=e.target;console.log(s);const t=a(s,"bcgov-menu");this.showSubmenu(t,!t.classList.contains("expanded"))}}onKeyDown(e){const s=e.srcElement;switch(e.keyCode){case o.enter:s.querySelector("a").click();case o.space:e.preventDefault(),e.stopPropagation(),this.showSubmenu(this.el,!0);break;case o.esc:e.preventDefault(),e.stopPropagation(),this.showSubmenu(this.el,!1);break;case o.right:e.preventDefault(),this.focusChange(s,"next");break;case o.left:e.preventDefault(),this.focusChange(s,"prev");break;case o.up:e.preventDefault(),this.focusChange(s,"up");break;case o.down:e.preventDefault(),this.focusChange(s,"down")}}focusChange(e,s="next"){if(this.isSubmenu)return;let t;"next"===s||"down"===s?t=e.nextElementSibling:"prev"!=s&&"up"!==s||(t=e.previousElementSibling);const i=null!==a(e,'ul[role="menu"]');(i&&("up"===s||"down"===s)||!i&&("prev"===s||"next"===s))&&(null==t||"LI"!==e.nodeName&&"BCGOV-MENU"!==e.nodeName||(e.setAttribute("tabindex","-1"),t.setAttribute("tabindex","0"),t.focus()))}render(){const e="align-"+this.alignment,i="bcgov-instructions-"+this.menuId;if(this.isSubmenu)return s(t,{role:"menuitem",class:"expandable","aria-label":this.name},s("div",{class:""},s("a",{href:this.href,tabindex:"-1"},this.name)),s("ul",{role:"menu","aria-hidden":"true"},s("slot",null)));{const n={role:"menubar",tabindex:"0",class:e};return void 0!==this.primary&&(n["aria-labelledby"]=i),void 0!==this.sidebar&&(n.class+=" sidebar-menu"),s(t,null,s("ul",Object.assign({},n),s("slot",null)),void 0!==this.primary&&s("div",{class:"sr-only","aria-hidden":"true",id:i},this.instructions))}}get el(){return i(this)}};export{r as bcgov_menu};