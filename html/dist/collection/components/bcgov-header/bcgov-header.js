import { h, Host } from "@stencil/core";
import { filterATags } from "../utils/utils";
export class BcgovHeader {
    constructor() {
        /** link for logo */
        this.href = "https://www2.gov.bc.ca/gov/content/home";
    }
    componentDidRender() {
        [].forEach.call(this.el.querySelectorAll('a[slot="hidden-link"]'), function (element) {
            filterATags(element);
        });
    }
    render() {
        return (h(Host, null,
            h("header", { class: "bcgov-header" },
                h("div", { class: "banner" },
                    h("a", { class: "branding-logo", href: this.href, "aria-label": "branding logo" },
                        h("slot", { name: "logo" })),
                    h("div", { class: "hl" },
                        h("slot", { name: "headline" })),
                    h("div", { class: "access" },
                        h("slot", { name: "hidden-link" })))),
            h("slot", null)));
    }
    static get is() { return "bcgov-header"; }
    static get properties() { return {
        "href": {
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
                "text": "link for logo"
            },
            "attribute": "href",
            "reflect": false,
            "defaultValue": "\"https://www2.gov.bc.ca/gov/content/home\""
        }
    }; }
    static get elementRef() { return "el"; }
}
