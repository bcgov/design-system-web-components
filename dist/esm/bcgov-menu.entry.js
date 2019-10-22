import { r as registerInstance, h, H as Host, g as getElement } from './core-5dc11fcc.js';
import { a as menuElement } from './utils-b5944213.js';

const BcgovMenu = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.alignment = "left";
        this.menuId = "menu";
        this.isSubmenu = false;
        this.showSubmenu = (target, expanded) => {
            if (expanded) {
                target.classList.add("expanded");
            }
            else {
                target.classList.remove("expanded");
            }
            target.setAttribute("aria-expanded", expanded ? "true" : "false");
            target.setAttribute("tabindex", expanded ? "-1" : "0");
        };
    }
    getInstructions() {
        return (this.instructions ||
            `Use arrow keys to navigate between menuitems,
    spacebar to expand submenus, 
    escape key to close submenus, 
    enter to activate menuitems.`);
    }
    componentWillLoad() {
        this.isSubmenu = "UL" === this.el.parentElement.nodeName;
        [].forEach.call(this.el.querySelectorAll("a"), function (element) {
            menuElement(element);
        });
    }
    componentDidRender() { }
    onMouseEnter(ev) {
        const element = ev.target;
        this.showSubmenu(element, true);
    }
    onMouseLeave(ev) {
        const element = ev.target;
        this.showSubmenu(element, false);
    }
    render() {
        const alignment = "align-" + this.alignment;
        const instructionID = "bcgov-instructions-" + this.menuId;
        if (this.isSubmenu) {
            return (h(Host, { role: "menuitem", class: "expandable" }, h("a", { href: this.href }, this.name), h("ul", { role: "menu" }, h("slot", null))));
        }
        else {
            if (undefined !== this.instructions) {
                return (h(Host, null, h("ul", { role: "menubar", class: alignment, "aria-labelledby": instructionID }, h("slot", null)), h("div", { class: "sr-only", "aria-hidden": "true", id: instructionID }, this.instructions)));
            }
            else {
                return (h(Host, null, h("ul", { role: "menubar", class: alignment }, h("slot", null))));
            }
        }
    }
    get el() { return getElement(this); }
};

export { BcgovMenu as bcgov_menu };
