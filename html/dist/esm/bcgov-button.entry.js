import { r as registerInstance, h, H as Host, g as getElement } from './core-413b4b4d.js';
import { l as library, f as faSearch, i as icon } from './index.es-c1255c77.js';

const BcgovButton = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        /** The action of the button. */
        this.link = "button";
        /** default state of button if applicable */
        this.active = "false";
        /** Add a callback to handle events */
        this.eventHandler = this.eventHandlerFunction;
        /** Style of button */
        this.buttonStyle = "primary";
        /** Target, only used on hamburger and search */
        this.target = null;
        this.breakpoint = 700;
    }
    eventHandlerFunction() { }
    componentDidRender() {
        this.eventHandler(this.el);
        const buttonStyle = this.el.getAttribute("button-style");
        if ("search" === buttonStyle || "search-inline" === buttonStyle) {
            library.add(faSearch);
            const buttonElement = this.el.querySelector("button");
            buttonElement.innerHTML = icon(faSearch).html[0];
        }
    }
    componentWillLoad() {
        if (null !== this.target) {
            this.breakpoint = this.getParentBreakpoint();
            const element = document.getElementById(this.target);
            if (null !== element) {
                if ("false" === this.active) {
                    element.classList.add("target-hidden");
                }
            }
            this.isDesktop();
            const self = this;
            window.addEventListener("resize", function () {
                self.isDesktop();
            });
        }
    }
    getParentBreakpoint() {
        let value = "0";
        if (null !== this.target) {
            const element = document.getElementById(this.target);
            if (null !== element && element.hasAttribute("breakpoint")) {
                value = element.getAttribute("breakpoint");
            }
        }
        return parseInt(value);
    }
    isDesktop() {
        let isdesktop = false;
        if (window.innerWidth >= this.breakpoint) {
            this.el.classList.add("is-desktop");
        }
        else {
            this.el.classList.remove("is-desktop");
        }
        return isdesktop;
    }
    onClick() {
        if (null !== this.target) {
            const element = document.getElementById(this.target);
            const button = this.el.querySelector("button");
            if (null !== element) {
                if (undefined !== button && button.hasAttribute("aria-expanded")) {
                    button.setAttribute("aria-expanded", element.classList.contains("target-hidden") ? "true" : "false");
                }
                if (element.classList.contains("target-hidden")) {
                    element.classList.remove("target-hidden");
                }
                else {
                    element.classList.add("target-hidden");
                }
            }
        }
    }
    render() {
        const btnStyle = `${this.buttonStyle} bcgov-button`;
        if (["hamburger", "search"].includes(this.buttonStyle)) {
            return (h(Host, { target: this.target }, h("button", { class: btnStyle, "aria-expanded": this.active }, h("div", null), h("slot", null))));
        }
        else {
            if ("button" === this.link) {
                const props = {};
                if ("search-inline" == this.buttonStyle) {
                    props["type"] = "submit";
                }
                return (h("button", Object.assign({ class: btnStyle }, props), h("slot", null)));
            }
            else {
                return (h("a", { class: btnStyle, href: this.link, role: "button" }, h("slot", null)));
            }
        }
    }
    get el() { return getElement(this); }
};

export { BcgovButton as bcgov_button };
