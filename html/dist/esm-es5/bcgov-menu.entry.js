import { r as registerInstance, h, H as Host, g as getElement } from './core-413b4b4d.js';
import { m as menuElement, a as findAncestor, k as keys } from './utils-923a28b7.js';
var BcgovMenu = /** @class */ (function () {
    function BcgovMenu(hostRef) {
        var _this = this;
        registerInstance(this, hostRef);
        /** Alignment of menu */
        this.alignment = "left";
        /** Menu id used for instructions
         * TODO: this might need more consideration
         */
        this.menuId = "menu";
        /** Aria Instructions */
        this.instructions = "Use arrow keys to navigate between menuitems,\n  spacebar to expand submenus, escape key to close submenus, enter to activate menuitems.";
        /** A number that represents mobile menu breakpoint in px; */
        this.breakpoint = 0;
        /**  Automatically adds hamburger. */
        this.hamburger = true;
        this.isSubmenu = false;
        this.showSubmenu = function (target, expanded) {
            if (!_this.isSubmenu) {
                return;
            }
            if (expanded) {
                target.classList.add("expanded");
            }
            else {
                target.classList.remove("expanded");
            }
            target.setAttribute("aria-expanded", expanded ? "true" : "false");
            target.setAttribute("tabindex", expanded ? "-1" : "0");
            target.setAttribute("aria-selected", expanded ? "true" : "false");
            var submenu = target.querySelector("ul");
            if (null !== submenu) {
                submenu.setAttribute("aria-hidden", expanded ? "false" : "true");
                if (expanded) {
                    var firstFocus = target.querySelector("ul > li:first-child");
                    firstFocus.setAttribute("tabindex", "0");
                    firstFocus.focus();
                }
                else {
                    _this.el.focus();
                }
            }
        };
    }
    BcgovMenu.prototype.componentWillLoad = function () {
        this.isSubmenu = "UL" === this.el.parentElement.nodeName;
        [].forEach.call(this.el.querySelectorAll("a"), function (element) {
            menuElement(element);
        });
        var self = this;
        if (!this.isSubmenu) {
            this.isDesktop();
            window.addEventListener("resize", function () {
                self.isDesktop();
            });
        }
    };
    /**
     * This sets up inital attributes for sub menus
     */
    BcgovMenu.prototype.componentDidRender = function () {
        if (this.isSubmenu) {
            this.el.setAttribute("aria-haspopup", true);
            this.el.setAttribute("aria-expanded", false);
            this.el.setAttribute("aria-selected", false);
            this.el.setAttribute("tabindex", 0);
        }
        else {
            var firstChild = this.el.querySelector("ul > *:first-child");
            if (null !== firstChild) {
                firstChild.setAttribute("tabindex", 0);
            }
        }
    };
    BcgovMenu.prototype.isDesktop = function () {
        var isdesktop = false;
        if (!this.isSubmenu) {
            if (window.innerWidth >= this.breakpoint) {
                if (!this.el.classList.contains("is-desktop")) {
                    this.el.classList.add("is-desktop");
                }
                isdesktop = true;
            }
            else {
                this.el.classList.remove("is-desktop");
            }
        }
        else {
            var parent = findAncestor(this.el, "bcgov-menu");
            if (null !== parent && parent.getAttribute("breakpoint")) {
                var bp = parseInt(parent.getAttribute("breakpoint"));
                isdesktop = window.innerWidth >= bp;
            }
        }
        return isdesktop;
    };
    BcgovMenu.prototype.onMouseEnter = function (ev) {
        //console.log(this.isDesktop(), ev, this.isSubmenu);
        if (this.isDesktop()) {
            var element = ev.target;
            this.showSubmenu(element, true);
        }
    };
    BcgovMenu.prototype.onMouseLeave = function (event) {
        if (this.isDesktop()) {
            var element = event.target;
            this.showSubmenu(element, false);
        }
    };
    BcgovMenu.prototype.onClick = function (event) {
        if (!this.isDesktop()) {
            var element = event.target;
            console.log(element);
            var parent = findAncestor(element, "bcgov-menu");
            this.showSubmenu(parent, !parent.classList.contains("expanded"));
        }
    };
    BcgovMenu.prototype.onKeyDown = function (event) {
        var current = event.srcElement;
        if (!this.isSubmenu || true) {
            switch (event.keyCode) {
                case keys.enter:
                    current.querySelector("a").click();
                case keys.space:
                    event.preventDefault();
                    event.stopPropagation();
                    this.showSubmenu(this.el, true);
                    break;
                case keys.esc:
                    event.preventDefault();
                    event.stopPropagation();
                    this.showSubmenu(this.el, false);
                    break;
                case keys.right:
                    event.preventDefault();
                    this.focusChange(current, "next");
                    break;
                case keys.left:
                    event.preventDefault();
                    this.focusChange(current, "prev");
                    break;
                case keys.up:
                    event.preventDefault();
                    this.focusChange(current, "up");
                    break;
                case keys.down:
                    event.preventDefault();
                    this.focusChange(current, "down");
                    break;
            }
        }
    };
    BcgovMenu.prototype.focusChange = function (current, direction) {
        if (direction === void 0) { direction = "next"; }
        if (this.isSubmenu) {
            return;
        }
        var element;
        if ("next" === direction || "down" === direction) {
            element = current.nextElementSibling;
        }
        else if ("prev" == direction || "up" === direction) {
            element = current.previousElementSibling;
        }
        var insideSub = null !== findAncestor(current, 'ul[role="menu"]');
        var checkAllowed = (insideSub && ("up" === direction || "down" === direction)) ||
            (!insideSub && ("prev" === direction || "next" === direction));
        if (!checkAllowed) {
            return;
        }
        if (null != element &&
            ("LI" === current.nodeName || "BCGOV-MENU" === current.nodeName)) {
            current.setAttribute("tabindex", "-1");
            element.setAttribute("tabindex", "0");
            element.focus();
        }
    };
    BcgovMenu.prototype.render = function () {
        var alignment = "align-" + this.alignment;
        var instructionID = "bcgov-instructions-" + this.menuId;
        if (this.isSubmenu) {
            return (h(Host, { role: "menuitem", class: "expandable", "aria-label": this.name }, h("div", { class: "" }, h("a", { href: this.href, tabindex: "-1" }, this.name)), h("ul", { role: "menu", "aria-hidden": "true" }, h("slot", null))));
        }
        else {
            var props = { role: "menubar", tabindex: "0", class: alignment };
            if (undefined !== this.primary) {
                props["aria-labelledby"] = instructionID;
            }
            return (h(Host, null, h("ul", Object.assign({}, props), h("slot", null)), undefined !== this.primary && (h("div", { class: "sr-only", "aria-hidden": "true", id: instructionID }, this.instructions))));
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
