import { h, Host, getAssetPath } from "@stencil/core";
import { filterATags } from "../utils/utils";
export class BcgovHeader {
    constructor() {
        /** link for logo */
        this.href = "https://www2.gov.bc.ca/gov/content/home";
        this.logo = "gov_bc_logo.svg";
    }
    componentWillLoad() { }
    componentDidRender() {
        const self = this;
        [].forEach.call(this.el.querySelectorAll("*[aria]"), function (element) {
            element.classList.add("access");
        });
        [].forEach.call(this.el.querySelectorAll("img"), function (element) {
            const divTag = document.createElement("div");
            divTag.classList.add("banner");
            if (undefined !== self.href && "" !== self.href) {
                const atag = document.createElement("a");
                atag.classList.add("branding-logo");
                atag.setAttribute("aria-label", "branding logo");
                atag.setAttribute("href", self.href);
                atag.appendChild(element.cloneNode(true));
                divTag.appendChild(atag);
            }
            else {
                divTag.appendChild(element.cloneNode(true));
            }
            element.replaceWith(divTag);
        });
        [].forEach.call(this.el.querySelectorAll("*[aria] a"), function (element) {
            element.setAttribute("aria", "");
            filterATags(element);
        });
    }
    getImage() {
        if ("" === this.logo) {
            return "";
        }
        else {
            let image = getAssetPath(`../../assets/${this.logo}`);
            let markup = h("img", { class: "header-logo", src: image, alt: "Logo" });
            if ("" !== this.href) {
                markup = (h("a", { class: "branding-logo", href: this.href, "aria-label": "branding logo" }, markup));
            }
            return h("div", { class: "banner" }, markup);
        }
    }
    render() {
        return (h(Host, { class: "bcgov-header" },
            h("header", null,
                this.getImage(),
                h("slot", null))));
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
                "original": "| \"\"\n    | \"gov_bc_logo.svg\"\n    | \"gov_bc_logo_white.png\"\n    | \"gov_bc_logo_grey.jpg\"",
                "resolved": "\"\" | \"gov_bc_logo.svg\" | \"gov_bc_logo_grey.jpg\" | \"gov_bc_logo_white.png\"",
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
    static get elementRef() { return "el"; }
}
