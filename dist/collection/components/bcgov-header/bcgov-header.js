import { h, Host, getAssetPath } from "@stencil/core";
import { filterATags } from "../utils/utils";
export class BcgovHeader {
    /** link for logo */
    href = "https://www2.gov.bc.ca/gov/content/home";
    /** Logo options -- might not work... */
    logo = "gov_bc_logo.svg";
    el;
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
        return (h(Host, { key: 'cff0733445fd23d6e5141cc16b3b25827ea5ff78', className: "bcgov-header" }, h("header", { key: 'd4d2815f80ebf873564defb352f8eb5cbfa91ecb' }, this.getImage(), h("slot", { key: 'b710c68c07992ced4f082f15ad702d6510074c9d' }))));
    }
    static get is() { return "bcgov-header"; }
    static get assetsDirs() { return ["../../assets"]; }
    static get properties() {
        return {
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
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "href",
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
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "logo",
                "defaultValue": "\"gov_bc_logo.svg\""
            }
        };
    }
    static get elementRef() { return "el"; }
}
