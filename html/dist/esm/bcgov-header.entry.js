import { r as registerInstance, c as getAssetPath, h, H as Host, g as getElement } from './core-d4bdadec.js';
import { f as filterATags } from './utils-923a28b7.js';

const BcgovHeader = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
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
            let image = getAssetPath(`./dist/vendor/${this.logo}`);
            let markup = h("img", { class: "header-logo", src: image, alt: "Logo" });
            if ("" !== this.href) {
                markup = (h("a", { class: "branding-logo", href: this.href, "aria-label": "branding logo" }, markup));
            }
            return h("div", { class: "banner" }, markup);
        }
    }
    render() {
        return (h(Host, { class: "bcgov-header" }, h("header", null, this.getImage(), h("slot", null))));
    }
    static get assetsDirs() { return ["../../assets"]; }
    get el() { return getElement(this); }
};

export { BcgovHeader as bcgov_header };
