import { r as registerInstance, h, H as Host, g as getElement } from './core-07a37eb8.js';
import { m as menuElement, a as findAncestor, k as keys } from './utils-129bfbdc.js';
var BcgovMenu = /** @class */ (function () {
    function class_1(hostRef) {
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
        /** Automatically adds hamburger. */
        this.hamburger = true;
        this.active = false;
        /** Adds hover to submenues */
        this.allowHover = false;
        /** Changes timeout for submenu */
        this.menuTimeOut = 500;
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
            var submenu = target.querySelector("ul");
            if (null !== submenu) {
                submenu.setAttribute("aria-hidden", expanded ? "false" : "true");
                if (expanded) {
                    var firstFocus = target.querySelector("ul > li:first-child");
                    firstFocus.setAttribute("tabindex", "0");
                    //firstFocus.focus();
                }
            }
        };
    }
    class_1.prototype.componentWillLoad = function () {
        this.isSubmenu = "UL" === this.el.parentElement.nodeName;
        [].forEach.call(this.el.querySelectorAll("a"), function (element) {
            menuElement(element);
        });
        var self = this;
        this.bodyTag = document.getElementsByTagName("BODY")[0];
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
    class_1.prototype.componentDidRender = function () {
        if (this.isSubmenu) {
            this.el.setAttribute("aria-haspopup", true);
            this.el.setAttribute("aria-expanded", false);
            this.el.setAttribute("tabindex", -1);
            var primaryMenu = this.el.closest("bcgov-menu[primary]");
            if (null !== primaryMenu) {
                this.allowHover =
                    this.allowHover || primaryMenu.hasAttribute("allow-hover");
                this.menuTimeOut = primaryMenu.hasAttribute("menu-time-out")
                    ? primaryMenu.getAttribute("menu-time-out")
                    : this.menuTimeOut;
            }
        }
        else {
            var firstChild = this.el.querySelector("ul > *:first-child");
            if (null !== firstChild) {
                firstChild.setAttribute("tabindex", 0);
            }
        }
    };
    class_1.prototype.isDesktop = function () {
        var isdesktop = false;
        if (!this.isSubmenu) {
            if (window.innerWidth >= this.breakpoint) {
                if (!this.el.classList.contains("is-desktop")) {
                    this.el.classList.add("is-desktop");
                }
                if (undefined !== this.primary) {
                    if (!this.bodyTag.classList.contains("bcgov-menu-primary-is-desktop")) {
                        this.bodyTag.classList.add("bcgov-menu-primary-is-desktop");
                    }
                }
                isdesktop = true;
            }
            else {
                this.el.classList.remove("is-desktop");
                if (undefined !== this.primary) {
                    this.bodyTag.classList.remove("bcgov-menu-primary-is-desktop");
                }
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
    class_1.prototype.onMouseEnter = function (ev) {
        if (this.isDesktop() && this.allowHover) {
            var element = ev.target;
            //element.focus();
            this.showSubmenu(element, true);
        }
    };
    class_1.prototype.onMouseLeave = function (event) {
        if (this.isDesktop() && this.allowHover) {
            var element_1 = event.target;
            var self_1 = this;
            clearTimeout(this.menuTimeOutState);
            this.menuTimeOutState = setTimeout(function () {
                self_1.showSubmenu(element_1, false);
            }, self_1.menuTimeOut);
            if (!this.isSubmenu) {
                [].forEach.call(this.el.querySelectorAll("ul > *"), function (element) {
                    element.setAttribute("tabindex", -1);
                    element.blur();
                });
            }
        }
    };
    class_1.prototype.onClick = function (event) {
        var element = event.target;
        var parent = findAncestor(element, "bcgov-menu");
        if (null === element.closest(".bcgov-primary-menu-close")) {
            this.showSubmenu(parent, !parent.classList.contains("expanded"));
        }
        if ("close-menu-mobile" === element.parentElement.getAttribute("id")) {
            parent.classList.add("target-hidden");
        }
    };
    class_1.prototype.onKeyDown = function (event) {
        var current = event.srcElement;
        if (!this.isSubmenu || true) {
            switch (event.keyCode) {
                case keys.enter:
                    current.querySelector("a").click();
                case keys.space:
                    event.preventDefault();
                    event.stopPropagation();
                    this.showSubmenu(this.el, true);
                    var firstFocus = this.el.querySelector("ul > li:first-child");
                    firstFocus.focus();
                    break;
                case keys.esc:
                    event.preventDefault();
                    event.stopPropagation();
                    this.showSubmenu(this.el, false);
                    this.el.focus();
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
    class_1.prototype.focusChange = function (current, direction) {
        if (direction === void 0) { direction = "next"; }
        var element;
        if (current === this.el.querySelector("ul")) {
            element = current.querySelector("li:first-child");
            element = this.isDesktop() ? element.nextElementSibling : element;
            current = element;
        }
        else {
            if ("next" === direction || "down" === direction) {
                element = current.nextElementSibling;
            }
            else if ("prev" == direction || "up" === direction) {
                element = current.previousElementSibling;
            }
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
    class_1.prototype.render = function () {
        var alignment = "align-" + this.alignment;
        var instructionID = "bcgov-instructions-" + this.menuId;
        var hostClass = "expandable";
        if (this.isSubmenu) {
            if (undefined !== this.active && this.active) {
                hostClass += " active";
            }
            return (h(Host, { role: "menuitem", class: hostClass, "aria-label": this.name }, h("div", null, h("a", { href: this.href, tabindex: "-1" }, this.name), h("span", null), h("slot", { name: "submenu-link" })), h("ul", { role: "menu", "aria-hidden": "true" }, h("slot", null))));
        }
        else {
            var props = { role: "menubar", tabindex: "0", class: alignment };
            if (undefined !== this.primary) {
                props["aria-labelledby"] = instructionID;
            }
            if (undefined !== this.sidebar) {
                props["class"] += " sidebar-menu";
            }
            return (h(Host, null, h("ul", Object.assign({}, props), undefined !== this.primary && (h("li", { role: "menuitem", class: "bcgov-primary-menu-close", tabindex: "-1", "aria-hidden": "true", "aria-labelId": "close-menu-mobile" }, h("a", { href: "#", "aria-label": "Close Mobile Menu", id: "close-menu-mobile" }, h("span", null, "x")))), h("slot", null)), undefined !== this.primary && (h("div", { class: "sr-only", "aria-hidden": "true", id: instructionID }, this.instructions))));
        }
    };
    Object.defineProperty(class_1.prototype, "el", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    return class_1;
}());
export { BcgovMenu as bcgov_menu };
