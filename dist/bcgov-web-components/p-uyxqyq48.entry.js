import{r as e,h as s,H as t,g as n}from"./p-253721a6.js";import{a}from"./p-116b5c14.js";const i=class{constructor(s){e(this,s),this.alignment="left",this.menuId="menu",this.isSubmenu=!1,this.showSubmenu=(e,s)=>{s?e.classList.add("expanded"):e.classList.remove("expanded"),e.setAttribute("aria-expanded",s?"true":"false"),e.setAttribute("tabindex",s?"-1":"0")}}getInstructions(){return this.instructions||"Use arrow keys to navigate between menuitems,\n    spacebar to expand submenus, \n    escape key to close submenus, \n    enter to activate menuitems."}componentWillLoad(){this.isSubmenu="UL"===this.el.parentElement.nodeName,[].forEach.call(this.el.querySelectorAll("a"),(function(e){a(e)}))}componentDidRender(){}onMouseEnter(e){this.showSubmenu(e.target,!0)}onMouseLeave(e){this.showSubmenu(e.target,!1)}render(){const e="align-"+this.alignment,n="bcgov-instructions-"+this.menuId;return this.isSubmenu?s(t,{role:"menuitem",class:"expandable"},s("a",{href:this.href},this.name),s("ul",{role:"menu"},s("slot",null))):void 0!==this.instructions?s(t,null,s("ul",{role:"menubar",class:e,"aria-labelledby":n},s("slot",null)),s("div",{class:"sr-only","aria-hidden":"true",id:n},this.instructions)):s(t,null,s("ul",{role:"menubar",class:e},s("slot",null)))}get el(){return n(this)}static get style(){return".sc-bcgov-menu-h{padding:0 10%;color:#fff;color:var(--bcgov-white);display:-webkit-box;display:-moz-box;display:-ms-flexbox;display:-webkit-flex;display:flex}.expandable.sc-bcgov-menu-h{display:list-item;padding:0}.primary.sc-bcgov-menu-h, [primary].sc-bcgov-menu-h{background-color:#38598a;background-color:var(--bcgov-blue-background)}.sc-bcgov-menu-h a.sc-bcgov-menu, .sc-bcgov-menu-h a.sc-bcgov-menu:active, .sc-bcgov-menu-h a.sc-bcgov-menu:focus, .sc-bcgov-menu-h a.sc-bcgov-menu:hover, .sc-bcgov-menu-h a.sc-bcgov-menu:visited{color:#fff;color:var(--bcgov-white)!important;padding:10px;display:-ms-flexbox;display:flex}.sc-bcgov-menu-h ul.sc-bcgov-menu{list-style:none;display:-webkit-box;display:-moz-box;display:-ms-flexbox;display:-webkit-flex;display:flex;position:relative;margin:0;padding:0}.sc-bcgov-menu-h ul.align-right.sc-bcgov-menu{-ms-flex-pack:end;justify-content:flex-end}.sc-bcgov-menu-h ul.align-right.sc-bcgov-menu > li.sc-bcgov-menu:last-child a.sc-bcgov-menu{padding-right:0}.sc-bcgov-menu-h ul.align-left.sc-bcgov-menu{-ms-flex-pack:start;justify-content:flex-start}.sc-bcgov-menu-h ul.align-left.sc-bcgov-menu > li.sc-bcgov-menu:first-child a.sc-bcgov-menu{padding-left:0}.sc-bcgov-menu-h ul.align-center.sc-bcgov-menu{-ms-flex-pack:center;justify-content:center}.sc-bcgov-menu-h ul.sc-bcgov-menu -shadowcsshost, .sc-bcgov-menu-h ul.sc-bcgov-menu li.sc-bcgov-menu{position:relative;cursor:pointer;-webkit-transition:background-color .2s ease-in-out;transition:background-color .2s ease-in-out}.sc-bcgov-menu-h ul.sc-bcgov-menu .expanded.sc-bcgov-menu, .sc-bcgov-menu-h ul.sc-bcgov-menu .sc-bcgov-menu:focus, .sc-bcgov-menu-h ul.sc-bcgov-menu .sc-bcgov-menu:hover, .sc-bcgov-menu-h ul.sc-bcgov-menu li.expanded.sc-bcgov-menu, .sc-bcgov-menu-h ul.sc-bcgov-menu li.sc-bcgov-menu:focus, .sc-bcgov-menu-h ul.sc-bcgov-menu li.sc-bcgov-menu:hover{background-color:#1a5a96;background-color:var(--bcgov-blue-links)}.sc-bcgov-menu-h ul.sc-bcgov-menu .expandable.sc-bcgov-menu > a.sc-bcgov-menu, .sc-bcgov-menu-h ul.sc-bcgov-menu .expanded.sc-bcgov-menu > ul.sc-bcgov-menu, .sc-bcgov-menu-h ul.sc-bcgov-menu li.expandable.sc-bcgov-menu > a.sc-bcgov-menu, .sc-bcgov-menu-h ul.sc-bcgov-menu li.expanded.sc-bcgov-menu > ul.sc-bcgov-menu{display:-webkit-box;display:-moz-box;display:-ms-flexbox;display:-webkit-flex;display:flex}.sc-bcgov-menu-h ul.sc-bcgov-menu .expandable.sc-bcgov-menu > a.sc-bcgov-menu, .sc-bcgov-menu-h ul.sc-bcgov-menu li.expandable.sc-bcgov-menu > a.sc-bcgov-menu{-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-align:center;align-items:center}.sc-bcgov-menu-h ul.sc-bcgov-menu .expandable.sc-bcgov-menu > a.sc-bcgov-menu:after, .sc-bcgov-menu-h ul.sc-bcgov-menu li.expandable.sc-bcgov-menu > a.sc-bcgov-menu:after{content:\"\";display:block;width:5px;height:5px;margin-top:-1px;margin-left:5px;border-bottom:2px solid #fff;border-right:2px solid #fff;-webkit-transform:rotate(45deg);transform:rotate(45deg)}.sc-bcgov-menu-h ul.sc-bcgov-menu -shadowcsshost ul.sc-bcgov-menu, .sc-bcgov-menu-h ul.sc-bcgov-menu li.sc-bcgov-menu ul.sc-bcgov-menu{display:none;-ms-flex-direction:column;flex-direction:column;position:absolute;width:200px;height:auto;background-color:var(--bcgov-blue-links)}.sc-bcgov-menu-h ul.sc-bcgov-menu -shadowcsshost ul.sc-bcgov-menu li.sc-bcgov-menu, .sc-bcgov-menu-h ul.sc-bcgov-menu li.sc-bcgov-menu ul.sc-bcgov-menu li.sc-bcgov-menu{-webkit-box-shadow:inset -1px -1px 0 rgba(0,0,0,.25),inset 1px 1px 0 hsla(0,0%,100%,.25);-moz-box-shadow:inset -1px -1px 0 rgba(0,0,0,.25),inset 1px 1px 0 hsla(0,0%,100%,.25);box-shadow:inset -1px -1px 0 rgba(0,0,0,.25),inset 1px 1px 0 hsla(0,0%,100%,.25)}.sc-bcgov-menu-h ul.sc-bcgov-menu -shadowcsshost ul.sc-bcgov-menu li.expanded.sc-bcgov-menu, .sc-bcgov-menu-h ul.sc-bcgov-menu -shadowcsshost ul.sc-bcgov-menu li.sc-bcgov-menu:focus, .sc-bcgov-menu-h ul.sc-bcgov-menu -shadowcsshost ul.sc-bcgov-menu li.sc-bcgov-menu:hover, .sc-bcgov-menu-h ul.sc-bcgov-menu li.sc-bcgov-menu ul.sc-bcgov-menu li.expanded.sc-bcgov-menu, .sc-bcgov-menu-h ul.sc-bcgov-menu li.sc-bcgov-menu ul.sc-bcgov-menu li.sc-bcgov-menu:focus, .sc-bcgov-menu-h ul.sc-bcgov-menu li.sc-bcgov-menu ul.sc-bcgov-menu li.sc-bcgov-menu:hover{background-color:var(--bcgov-blue-links)}.sc-bcgov-menu-h ul.sc-bcgov-menu -shadowcsshost ul.sc-bcgov-menu li.expandable.sc-bcgov-menu > a.sc-bcgov-menu, .sc-bcgov-menu-h ul.sc-bcgov-menu li.sc-bcgov-menu ul.sc-bcgov-menu li.expandable.sc-bcgov-menu > a.sc-bcgov-menu{-webkit-box-sizing:border-box;box-sizing:border-box;width:100%;-ms-flex-pack:justify;justify-content:space-between}.sc-bcgov-menu-h ul.sc-bcgov-menu -shadowcsshost ul.sc-bcgov-menu li.expandable.sc-bcgov-menu > a.sc-bcgov-menu:after, .sc-bcgov-menu-h ul.sc-bcgov-menu li.sc-bcgov-menu ul.sc-bcgov-menu li.expandable.sc-bcgov-menu > a.sc-bcgov-menu:after{margin-top:1px;-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}.sc-bcgov-menu-h ul.sc-bcgov-menu -shadowcsshost ul.sc-bcgov-menu li.sc-bcgov-menu ul.sc-bcgov-menu, .sc-bcgov-menu-h ul.sc-bcgov-menu li.sc-bcgov-menu ul.sc-bcgov-menu li.sc-bcgov-menu ul.sc-bcgov-menu{position:absolute;left:100%;top:0}"}};export{i as bcgov_menu};