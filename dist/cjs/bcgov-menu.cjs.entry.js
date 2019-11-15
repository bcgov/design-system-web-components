'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const core = require('./core-377f239a.js');
const utils = require('./utils-872e15ed.js');

const BcgovMenu = class {
    constructor(hostRef) {
        core.registerInstance(this, hostRef);
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
            utils.menuElement(element);
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
            let parent = utils.findAncestor(this.el, "bcgov-menu");
            if (null !== parent && parent.getAttribute("breakpoint")) {
                const bp = parseInt(parent.getAttribute("breakpoint"));
                isdesktop = window.innerWidth >= bp;
            }
        }
        return isdesktop;
    }
    onMouseEnter(ev) {
        //console.log(this.isDesktop(), ev, this.isSubmenu);
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
            console.log(element);
            const parent = utils.findAncestor(element, "bcgov-menu");
            this.showSubmenu(parent, !parent.classList.contains("expanded"));
        }
    }
    onKeyDown(event) {
        const current = event.srcElement;
        if (!this.isSubmenu || true) {
            switch (event.keyCode) {
                case utils.keys.enter:
                    current.querySelector("a").click();
                case utils.keys.space:
                    event.preventDefault();
                    event.stopPropagation();
                    this.showSubmenu(this.el, true);
                    break;
                case utils.keys.esc:
                    event.preventDefault();
                    event.stopPropagation();
                    this.showSubmenu(this.el, false);
                    break;
                case utils.keys.right:
                    event.preventDefault();
                    this.focusChange(current, "next");
                    break;
                case utils.keys.left:
                    event.preventDefault();
                    this.focusChange(current, "prev");
                    break;
                case utils.keys.up:
                    event.preventDefault();
                    this.focusChange(current, "up");
                    break;
                case utils.keys.down:
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
        const insideSub = null !== utils.findAncestor(current, 'ul[role="menu"]');
        const checkAllowed = (insideSub && ("up" === direction || "down" === direction)) ||
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
    }
    render() {
        const alignment = "align-" + this.alignment;
        const instructionID = "bcgov-instructions-" + this.menuId;
        if (this.isSubmenu) {
            return (core.h(core.Host, { role: "menuitem", class: "expandable", "aria-label": this.name }, core.h("div", { class: "" }, core.h("a", { href: this.href, tabindex: "-1" }, this.name)), core.h("ul", { role: "menu", "aria-hidden": "true" }, core.h("slot", null))));
        }
        else {
            const props = { role: "menubar", tabindex: "0", class: alignment };
            if (undefined !== this.primary) {
                props["aria-labelledby"] = instructionID;
            }
            return (core.h(core.Host, null, core.h("ul", Object.assign({}, props), core.h("slot", null)), undefined !== this.primary && (core.h("div", { class: "sr-only", "aria-hidden": "true", id: instructionID }, this.instructions))));
        }
    }
    get el() { return core.getElement(this); }
};

exports.bcgov_menu = BcgovMenu;
