import { r as registerInstance, h, H as Host, g as getElement } from './core-5dc11fcc.js';
import { m as moveElement } from './utils-b5944213.js';

const BcgovHeader = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    componentWillLoad() {
        this.aTags = this.el.querySelectorAll("a[aria]");
        this.imgTags = this.el.querySelectorAll("img");
        this.headlineTags = this.el.querySelectorAll("div");
    }
    componentDidRender() {
        const elements = [
            {
                current: this.aTags,
                container: this.el.querySelector(".access")
            },
            {
                current: this.imgTags,
                container: this.el.querySelector(".branding-logo")
            },
            {
                current: this.headlineTags,
                container: this.el.querySelector(".hl")
            }
        ];
        elements.map(item => {
            [].forEach.call(item["current"], function (element) {
                moveElement(element, item["container"]);
            });
        });
    }
    render() {
        return (h(Host, null, h("header", { class: "bcgov-header" }, h("div", { class: "banner" }, h("a", { class: "branding-logo", href: "", "aria-label": "branding logo" }), h("div", { class: "hl" }), h("div", { class: "access" })))));
    }
    get el() { return getElement(this); }
};

export { BcgovHeader as bcgov_header };
