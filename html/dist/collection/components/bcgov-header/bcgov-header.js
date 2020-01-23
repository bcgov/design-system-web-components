import { h, Host, getAssetPath } from "@stencil/core";
import { filterATags } from "../utils/utils";
export class BcgovHeader {
    constructor() {
        /** link for logo */
        this.href = "https://www2.gov.bc.ca/gov/content/home";
        this.logo = "gov_bc_logo.svg";
    }
    componentWillLoad() {
        this.hasLogoSlot = !!this.el.querySelector('[slot="logo"]');
    }
    componentDidRender() {
        [].forEach.call(this.el.querySelectorAll('a[slot="hidden-link"]'), function (element) {
            filterATags(element);
        });
    }
    getImage() {
        if ("" === this.logo) {
            return "";
        }
        else {
            let image = getAssetPath(`../../assets/${this.logo}`);
            return h("img", { src: image, alt: "Logo" });
        }
    }
    render() {
        return (h(Host, null,
            h("header", { class: "bcgov-header" },
                h("div", { class: "banner" },
                    h("a", { class: "branding-logo", href: this.href, "aria-label": "branding logo" }, this.hasLogoSlot ? h("slot", { name: "logo" }) : this.getImage()),
                    h("div", { class: "hl" },
                        h("slot", { name: "headline" })),
                    h("div", { class: "access" },
                        h("slot", { name: "hidden-link" })))),
            h("slot", null)));
    }
    static get is() { return "bcgov-header"; }
    static get assetsDirs() { return ["../../assets"]; }
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
        },
        "logo": {
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
                "text": ""
            },
            "attribute": "logo",
            "reflect": false,
            "defaultValue": "\"gov_bc_logo.svg\""
        }
    }; }
    static get states() { return {
        "hasLogoSlot": {}
    }; }
    static get elementRef() { return "el"; }
}
