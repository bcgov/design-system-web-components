import { r as registerInstance, h, H as Host, g as getElement } from './core-06b3e689.js';
import { a as menuElement } from './utils-fda4c146.js';
var BcgovMenu = /** @class */ (function () {
    function BcgovMenu(hostRef) {
        registerInstance(this, hostRef);
        this.alignment = "left";
        this.menuId = "menu";
        this.isSubmenu = false;
        this.showSubmenu = function (target, expanded) {
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
    BcgovMenu.prototype.getInstructions = function () {
        return (this.instructions ||
            "Use arrow keys to navigate between menuitems,\n    spacebar to expand submenus, \n    escape key to close submenus, \n    enter to activate menuitems.");
    };
    BcgovMenu.prototype.componentWillLoad = function () {
        this.isSubmenu = "UL" === this.el.parentElement.nodeName;
        [].forEach.call(this.el.querySelectorAll("a"), function (element) {
            menuElement(element);
        });
    };
    BcgovMenu.prototype.componentDidRender = function () { };
    BcgovMenu.prototype.onMouseEnter = function (ev) {
        var element = ev.target;
        this.showSubmenu(element, true);
    };
    BcgovMenu.prototype.onMouseLeave = function (ev) {
        var element = ev.target;
        this.showSubmenu(element, false);
    };
    BcgovMenu.prototype.render = function () {
        var alignment = "align-" + this.alignment;
        var instructionID = "bcgov-instructions-" + this.menuId;
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
    };
    Object.defineProperty(BcgovMenu.prototype, "el", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    return BcgovMenu;
}());
export { BcgovMenu as bcgov_menu };
