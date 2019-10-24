'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const core = require('./core-5f64101f.js');
const utils = require('./utils-c7a9e4d4.js');

const BcgovMenu = class {
    constructor(hostRef) {
        core.registerInstance(this, hostRef);
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
            utils.menuElement(element);
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
            return (core.h(core.Host, { role: "menuitem", class: "expandable" }, core.h("a", { href: this.href }, this.name), core.h("ul", { role: "menu" }, core.h("slot", null))));
        }
        else {
            if (undefined !== this.instructions) {
                return (core.h(core.Host, null, core.h("ul", { role: "menubar", class: alignment, "aria-labelledby": instructionID }, core.h("slot", null)), core.h("div", { class: "sr-only", "aria-hidden": "true", id: instructionID }, this.instructions)));
            }
            else {
                return (core.h(core.Host, null, core.h("ul", { role: "menubar", class: alignment }, core.h("slot", null))));
            }
        }
    }
    get el() { return core.getElement(this); }
};

exports.bcgov_menu = BcgovMenu;
