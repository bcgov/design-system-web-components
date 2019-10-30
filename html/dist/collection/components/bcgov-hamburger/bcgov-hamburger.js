import { Host, h } from "@stencil/core";
export class BcgovHamburger {
    constructor() {
        /** The target */
        this.target = null;
        /** Breakpoint */
        this.breakpoint = null;
    }
    onClick(event) {
        const element = event.target;
        let parent = element;
        let count = 0;
        do {
            if (null === parent) {
                break;
            }
            parent = parent.parentElement;
            ++count;
        } while (null !== parent && null === parent.getAttribute("target") && count < 3);
        if (undefined !== parent && parent.getAttribute("target")) {
            const menuElement = document.getElementById(parent.getAttribute("target"));
            if (undefined !== menuElement) {
                if (menuElement.classList.contains("in")) {
                    menuElement.classList.remove("in");
                }
                else {
                    menuElement.classList.add("in");
                }
            }
        }
        else {
            console.error("Couldn't find menu for hamburger, Check to make sure id's match");
        }
    }
    componentWillLoad() {
        const parent = this.el.parentElement;
        this.target = this.target || ("BCGOV-MENU" === parent.nodeName && parent.getAttribute("id"));
        this.breakpoint = this.breakpoint || this.getParentBreakpoint();
        this.isDesktop();
        const self = this;
        window.addEventListener("resize", function () {
            self.isDesktop();
        });
    }
    getParentBreakpoint() {
        let value = "0";
        const element = document.getElementById(this.target);
        if (null !== element) {
            value = element.getAttribute("breakpoint");
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
    render() {
        return (h(Host, { target: this.target },
            h("button", { class: "bcgov-navbar-toggle", "aria-expanded": "false" },
                h("div", null),
                h("slot", null))));
    }
    static get is() { return "bcgov-hamburger"; }
    static get properties() { return {
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
                "text": "The target"
            },
            "attribute": "target",
            "reflect": false,
            "defaultValue": "null"
        },
        "breakpoint": {
            "type": "number",
            "mutable": false,
            "complexType": {
                "original": "number",
                "resolved": "number",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "Breakpoint"
            },
            "attribute": "breakpoint",
            "reflect": false,
            "defaultValue": "null"
        }
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
