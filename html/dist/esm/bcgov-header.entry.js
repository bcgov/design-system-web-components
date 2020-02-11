import { r as registerInstance, c as getAssetPath, h, H as Host, g as getElement } from './core-07a37eb8.js';
import { f as filterATags } from './utils-6bcf279c.js';

const BcgovHeader = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
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
        return (h(Host, { class: "bcgov-header" }, h("header", null, this.getImage(), h("slot", null))));
    }
    static get assetsDirs() { return ["../../assets"]; }
    get el() { return getElement(this); }
};

export { BcgovHeader as bcgov_header };
