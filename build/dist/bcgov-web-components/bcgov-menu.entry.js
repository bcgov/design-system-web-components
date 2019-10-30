import { r as registerInstance, h, H as Host, c as getElement } from './core-63451120.js';
import { m as menuElement, a as findAncestor, k as keys } from './utils-6e4e801f.js';

const BcgovMenu = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        /** Alignment of menu */
        this.alignment = "left";
        /** Menu id used for instructions
         * TODO: this might need more consideration
         */
        this.menuId = "menu";
        /** Aria Instructions */
        this.instructions = `Use arrow keys to navigate between menuitems,
  spacebar to expand submenus, escape key to close submenus, enter to activate menuitems.`;
        /** A number that represents mobile menu breakpoint in px; */
        this.breakpoint = 0;
        /**  Automatically adds hamburger. */
        this.hamburger = true;
        this.isSubmenu = false;
        this.showSubmenu = (target, expanded) => {
            if (!this.isSubmenu) {
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
            const submenu = target.querySelector("ul");
            if (null !== submenu) {
                submenu.setAttribute("aria-hidden", expanded ? "false" : "true");
                if (expanded) {
                    const firstFocus = target.querySelector("ul > li:first-child");
                    firstFocus.setAttribute("tabindex", "0");
                    firstFocus.focus();
                }
                else {
                    this.el.focus();
                }
            }
        };
    }
    componentWillLoad() {
        this.isSubmenu = "UL" === this.el.parentElement.nodeName;
        [].forEach.call(this.el.querySelectorAll("a"), function (element) {
            menuElement(element);
        });
        const self = this;
        if (!this.isSubmenu) {
            this.isDesktop();
            window.addEventListener("resize", function () {
                self.isDesktop();
            });
        }
    }
    /**
     * This sets up inital attributes for sub menus
     */
    componentDidRender() {
        if (this.isSubmenu) {
            this.el.setAttribute("aria-haspopup", true);
            this.el.setAttribute("aria-expanded", false);
            this.el.setAttribute("aria-selected", false);
            this.el.setAttribute("tabindex", 0);
        }
        else {
            const firstChild = this.el.querySelector("ul > *:first-child");
            if (null !== firstChild) {
                firstChild.setAttribute("tabindex", 0);
            }
        }
    }
    isDesktop() {
        let isdesktop = false;
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
            let parent = findAncestor(this.el, "bcgov-menu");
            if (null !== parent && parent.getAttribute("breakpoint")) {
                const bp = parseInt(parent.getAttribute("breakpoint"));
                isdesktop = window.innerWidth >= bp;
            }
        }
        return isdesktop;
    }
    onMouseEnter(ev) {
        if (this.isDesktop()) {
            const element = ev.target;
            this.showSubmenu(element, true);
        }
    }
    onMouseLeave(event) {
        if (this.isDesktop()) {
            const element = event.target;
            this.showSubmenu(element, false);
        }
    }
    onClick(event) {
        if (!this.isDesktop()) {
            const element = event.target;
            const parent = element.parentElement;
            this.showSubmenu(parent, !parent.classList.contains("expanded"));
        }
    }
    onKeyDown(event) {
        const current = event.srcElement;
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
    }
    focusChange(current, direction = "next") {
        if (this.isSubmenu) {
            return;
        }
        let element;
        if ("next" === direction || "down" === direction) {
            element = current.nextElementSibling;
        }
        else if ("prev" == direction || "up" === direction) {
            element = current.previousElementSibling;
        }
        const insideSub = null !== findAncestor(current, 'ul[role="menu"]');
        const checkAllowed = (insideSub && ("up" === direction || "down" === direction)) ||
            (!insideSub && ("prev" === direction || "next" === direction));
        if (!checkAllowed) {
            return;
        }
        if (null != element && ("LI" === current.nodeName || "BCGOV-MENU" === current.nodeName)) {
            current.setAttribute("tabindex", "-1");
            element.setAttribute("tabindex", "0");
            element.focus();
        }
    }
    render() {
        const alignment = "align-" + this.alignment;
        const instructionID = "bcgov-instructions-" + this.menuId;
        if (this.isSubmenu) {
            return (h(Host, { role: "menuitem", class: "expandable", "aria-label": this.name }, h("a", { href: this.href, tabindex: "-1" }, this.name), h("ul", { role: "menu", "aria-hidden": "true" }, h("slot", null))));
        }
        else {
            if (undefined !== this.primary) {
                return (h(Host, null, h("ul", { role: "menubar", tabindex: "0", class: alignment, "aria-labelledby": instructionID }, h("slot", null)), h("div", { class: "sr-only", "aria-hidden": "true", id: instructionID }, this.instructions)));
            }
            else {
                return (h(Host, null, h("ul", { role: "menubar", class: alignment }, h("slot", null))));
            }
        }
    }
    get el() { return getElement(this); }
};

export { BcgovMenu as bcgov_menu };
