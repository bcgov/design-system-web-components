import{r as e,h as s,H as t,g as n}from"./p-9ae496aa.js";import{a}from"./p-2fcc5d83.js";const i=class{constructor(s){e(this,s),this.alignment="left",this.menuId="menu",this.isSubmenu=!1,this.showSubmenu=(e,s)=>{s?e.classList.add("expanded"):e.classList.remove("expanded"),e.setAttribute("aria-expanded",s?"true":"false"),e.setAttribute("tabindex",s?"-1":"0")}}getInstructions(){return this.instructions||"Use arrow keys to navigate between menuitems,\n    spacebar to expand submenus, \n    escape key to close submenus, \n    enter to activate menuitems."}componentWillLoad(){this.isSubmenu="UL"===this.el.parentElement.nodeName,[].forEach.call(this.el.querySelectorAll("a"),(function(e){a(e)}))}componentDidRender(){}onMouseEnter(e){this.showSubmenu(e.target,!0)}onMouseLeave(e){this.showSubmenu(e.target,!1)}render(){const e="align-"+this.alignment,n="bcgov-instructions-"+this.menuId;return this.isSubmenu?s(t,{role:"menuitem",class:"expandable"},s("a",{href:this.href},this.name),s("ul",{role:"menu"},s("slot",null))):void 0!==this.instructions?s(t,null,s("ul",{role:"menubar",class:e,"aria-labelledby":n},s("slot",null)),s("div",{class:"sr-only","aria-hidden":"true",id:n},this.instructions)):s(t,null,s("ul",{role:"menubar",class:e},s("slot",null)))}get el(){return n(this)}};export{i as bcgov_menu};