import { r as registerInstance, c as getAssetPath, h, H as Host, g as getElement } from './core-d4bdadec.js';
import { f as filterATags } from './utils-923a28b7.js';

const BcgovHeader = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
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
        return (h(Host, null, h("header", { class: "bcgov-header" }, h("div", { class: "banner" }, h("a", { class: "branding-logo", href: this.href, "aria-label": "branding logo" }, this.hasLogoSlot ? h("slot", { name: "logo" }) : this.getImage()), h("div", { class: "hl" }, h("slot", { name: "headline" })), h("div", { class: "access" }, h("slot", { name: "hidden-link" })))), h("slot", null)));
    }
    static get assetsDirs() { return ["../../assets"]; }
    get el() { return getElement(this); }
};

export { BcgovHeader as bcgov_header };
