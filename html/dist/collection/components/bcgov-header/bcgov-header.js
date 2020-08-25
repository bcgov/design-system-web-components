import { h, Host, getAssetPath } from "@stencil/core";
import { filterATags } from "../utils/utils";
export class BcgovHeader {
    constructor() {
        /** link for logo */
        this.href = "https://www2.gov.bc.ca/gov/content/home";
        /** Logo options -- might not work... */
        this.logo = "gov_bc_logo.svg";
    }
    componentWillLoad() { }
    componentDidRender() {
        const self = this;
        [].forEach.call(this.el.querySelectorAll("div[aria]"), function (element) {
            element.classList.add("access");
        });
        let $img = this.el.querySelectorAll("img");
        let divTag = document.createElement("div");
        let atag;
        divTag.classList.add("banner");
        [].forEach.call($img, function (element) {
            if (undefined !== self.href && "" !== self.href) {
                console.log(element);
                if (undefined === atag) {
                    atag = document.createElement("a");
                    atag.classList.add("branding-logo");
                    atag.setAttribute("aria-label", "branding logo");
                    atag.setAttribute("href", self.href);
                    divTag.appendChild(atag);
                }
                atag.appendChild(element.cloneNode(true));
            }
            else {
                divTag.appendChild(element.cloneNode(true));
            }
            //element.replaceWith(divTag);
            element.parentNode.replaceChild(divTag, element);
        });
        [].forEach.call(this.el.querySelectorAll("div[aria]"), function (element) {
            [].forEach.call(element.querySelectorAll("a"), function (element) {
                element.setAttribute("aria", "");
                filterATags(element);
            });
        });
    }
    getImage() {
        if ("" === this.logo) {
            return "";
        }
        else {
            let image = getAssetPath(`./assets/${this.logo}`);
            let markup = h("img", { class: "header-logo", src: image, alt: "Logo" });
            if ("" !== this.href) {
                markup = (h("a", { class: "branding-logo", href: this.href, "aria-label": "branding logo" }, markup));
            }
            return "";
            //return <div class="banner">{markup}</div>;
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
                "text": "Logo options -- might not work..."
            },
            "attribute": "logo",
            "reflect": false,
            "defaultValue": "\"gov_bc_logo.svg\""
        }
    }; }
    static get elementRef() { return "el"; }
}
