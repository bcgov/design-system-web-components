import { h, Host } from "@stencil/core";
import { library, icon } from "@fortawesome/fontawesome-svg-core";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
export class BcgovButton {
    constructor() {
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
            this.el.setAttribute("data-breakpoint", `${this.breakpoint}`);
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
            return (h(Host, { target: this.target },
                h("button", { class: btnStyle, "aria-expanded": this.active },
                    h("div", null),
                    h("slot", null))));
        }
        else {
            if ("button" === this.link) {
                const props = {};
                if ("search-inline" == this.buttonStyle) {
                    props["type"] = "submit";
                }
                return (h("button", Object.assign({ class: btnStyle }, props),
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
        "active": {
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
                "text": "default state of button if applicable"
            },
            "attribute": "active",
            "reflect": false,
            "defaultValue": "\"false\""
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
                "original": "| \"primary\"\n    | \"secondary\"\n    | \"dark\"\n    | \"hamburger\"\n    | \"search\"\n    | \"search-inline\"",
                "resolved": "\"dark\" | \"hamburger\" | \"primary\" | \"search\" | \"search-inline\" | \"secondary\"",
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
