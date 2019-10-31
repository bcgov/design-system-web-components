import { h, Host } from "@stencil/core";
import { library, icon } from "@fortawesome/fontawesome-svg-core";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
export class BcgovButton {
    constructor() {
        /** The action of the button. */
        this.link = "button";
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
        if ("search" === this.el.getAttribute("button-style")) {
            library.add(faSearch);
            const buttonElement = this.el.querySelector("button");
            buttonElement.innerHTML = icon(faSearch).html[0];
        }
    }
    componentWillLoad() {
        if (null !== this.target) {
            this.breakpoint = this.getParentBreakpoint();
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
                    button.setAttribute("aria-expanded", element.classList.contains("in") ? "false" : "true");
                }
                if (element.classList.contains("in")) {
                    element.classList.remove("in");
                }
                else {
                    element.classList.add("in");
                }
            }
        }
    }
    render() {
        const btnStyle = `${this.buttonStyle} bcgov-button`;
        if (["hamburger", "search"].includes(this.buttonStyle)) {
            return (h(Host, { target: this.target },
                h("button", { class: btnStyle, "aria-expanded": "false" },
                    h("div", null),
                    h("slot", null))));
        }
        else {
            if ("button" === this.link) {
                return (h("button", { class: btnStyle },
                    h("slot", null)));
            }
            else {
                return (h("a", { class: btnStyle, href: this.link, role: "button" },
                    h("slot", null)));
            }
        }
    }
    static get is() { return "bcgov-button"; }
    static get properties() { return {
        "link": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "The action of the button."
            },
            "attribute": "link",
            "reflect": false,
            "defaultValue": "\"button\""
        },
        "eventHandler": {
            "type": "unknown",
            "mutable": false,
            "complexType": {
                "original": "Function",
                "resolved": "Function",
                "references": {
                    "Function": {
                        "location": "global"
                    }
                }
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "Add a callback to handle events"
            },
            "defaultValue": "this.eventHandlerFunction"
        },
        "buttonStyle": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "\"primary\" | \"secondary\" | \"dark\" | \"hamburger\" | \"search\"",
                "resolved": "\"dark\" | \"hamburger\" | \"primary\" | \"search\" | \"secondary\"",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "Style of button"
            },
            "attribute": "button-style",
            "reflect": false,
            "defaultValue": "\"primary\""
        },
        "target": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "Target, only used on hamburger and search"
            },
            "attribute": "target",
            "reflect": false,
            "defaultValue": "null"
        }
    }; }
    static get states() { return {
        "breakpoint": {}
    }; }
    static get elementRef() { return "el"; }
    static get listeners() { return [{
            "name": "click",
            "method": "onClick",
            "target": undefined,
            "capture": false,
            "passive": false
        }]; }
}
