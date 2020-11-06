import { h, Host } from "@stencil/core";
import { library, icon } from "@fortawesome/fontawesome-svg-core";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
export class BcgovButton {
    constructor() {
        /** The action of the button. */
        this.link = "button";
        /** default state of button if applicable */
        this.targetHidden = "false";
        /** Add a callback to handle events */
        this.eventHandler = this.eventHandlerFunction;
        /** Style of button */
        this.buttonStyle = "primary";
        /** A tag target */
        this.target = null;
        /** Target, only used on hamburger and search */
        this.dataTarget = null;
        this.breakpoint = 700;
    }
    eventHandlerFunction() { }
    componentDidRender() {
        this.eventHandler(this.el);
        const buttonStyle = this.el.getAttribute("button-style");
        if ("search" === buttonStyle || "search-inline" === buttonStyle) {
            library.add(faSearch);
            const buttonElement = this.el.querySelector("button");
            const faIcon = icon(faSearch).html[0];
            buttonElement.innerHTML = `<span class="bcgov-svg-icon">${faIcon}</span><span class="bcgov-button-text">${buttonElement.innerHTML}</span>`;
        }
        else if ("search-inline-close") {
            const buttonElement = this.el.querySelector("button");
            buttonElement.innerHTML = `<span class="bcgov-button-text">${buttonElement.innerHTML}</span>`;
        }
    }
    componentWillLoad() {
        if (null !== this.dataTarget) {
            const self = this;
            this.breakpoint = this.getParentBreakpoint();
            this.el.setAttribute("data-breakpoint", `${this.breakpoint}`);
            const element = document.getElementById(this.dataTarget);
            if (null !== element) {
                if ("false" === this.targetHidden) {
                    element.classList.add("target-hidden");
                }
                window.addEventListener("click", function (event) {
                    const clickElement = event.srcElement;
                    const button = self.el.querySelector("button");
                    if (null === clickElement.closest("bcgov-menu")) {
                        if (clickElement.parentElement !== self.el) {
                            if ("true" === button.getAttribute("aria-expanded", true)) {
                                //self.onClick();
                            }
                        }
                    }
                });
            }
            this.isDesktop();
            window.addEventListener("resize", function () {
                self.isDesktop();
            });
        }
    }
    getParentBreakpoint() {
        let value = "0";
        if (null !== this.dataTarget) {
            const element = document.getElementById(this.dataTarget);
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
    onClick(event) {
        if (null !== this.dataTarget) {
            const element = document.getElementById(this.dataTarget);
            const button = this.el.querySelector("button");
            if (null !== element) {
                if (undefined !== button && button.hasAttribute("aria-expanded")) {
                    button.setAttribute("aria-expanded", "true" === element.getAttribute("aria-expanded") ? "false" : "true");
                }
                if (element.classList.contains("target-hidden")) {
                    element.classList.remove("target-hidden");
                }
                else {
                    element.classList.add("target-hidden");
                }
            }
        }
        if ('search-inline-close' === this.buttonStyle) {
            const element = this.el.closest('bcgov-search');
            if (element.classList.contains("target-hidden")) {
                element.classList.remove("target-hidden");
            }
            else {
                element.classList.add("target-hidden");
            }
            event.preventDefault();
            return false;
        }
    }
    render() {
        let btnStyle = `${this.buttonStyle}`;
        if (this.el.hasAttribute("active")) {
            btnStyle = `${btnStyle} active`;
        }
        if (this.el.hasAttribute("disable") || this.el.hasAttribute("disabled")) {
            btnStyle = `${btnStyle} disabled`;
        }
        let props = {
            class: btnStyle,
        };
        if (["hamburger", "search"].includes(this.buttonStyle)) {
            props["aria-expanded"] = this.targetHidden;
            return (h(Host, { "data-target": this.dataTarget, class: "bcgov-button" },
                h("button", Object.assign({}, props),
                    h("div", null),
                    h("span", { class: "bcgov-button-text" },
                        h("slot", null)))));
        }
        else {
            if ("button" === this.link) {
                if ("search-inline" == this.buttonStyle) {
                    props["type"] = "submit";
                }
                return (h(Host, { class: "bcgov-button" },
                    h("button", Object.assign({}, props),
                        h("slot", null))));
            }
            else {
                props["href"] = this.link;
                props["target"] = this.target;
                props["role"] = "button";
                return (h(Host, { class: "bcgov-button" },
                    h("a", Object.assign({}, props),
                        h("slot", null))));
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
        "targetHidden": {
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
            "attribute": "target-hidden",
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
                "original": "| \"primary\"\n    | \"secondary\"\n    | \"dark\"\n    | \"hamburger\"\n    | \"search\"\n    | \"search-inline\" \n    | \"search-inline-close\"",
                "resolved": "\"dark\" | \"hamburger\" | \"primary\" | \"search\" | \"search-inline\" | \"search-inline-close\" | \"secondary\"",
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
                "original": "\"_self\" | \"_blank\" | \"_parent\" | \"_top\" | null",
                "resolved": "\"_blank\" | \"_parent\" | \"_self\" | \"_top\"",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "A tag target"
            },
            "attribute": "target",
            "reflect": false,
            "defaultValue": "null"
        },
        "dataTarget": {
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
            "attribute": "data-target",
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
