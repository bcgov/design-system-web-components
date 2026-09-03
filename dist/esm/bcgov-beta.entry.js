import { r as registerInstance, a as getElement, h, H as Host } from './index-DQ-lwiDk.js';

const BcgovBeta = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    content = "This Application is currently in Beta Phase";
    label = "Beta";
    stateContent = "";
    get el() { return getElement(this); }
    componentWillLoad() {
        this.stateContent = this.el.textContent || this.content;
        this.el.innerHTML = this.label;
    }
    render() {
        return (h(Host, { key: '24addbdeca5d4d1c24980254e5a26ad22ab01592', class: "bcgov-beta", "aria-label": this.stateContent, role: "alert", tabindex: "0" }));
    }
};

export { BcgovBeta as bcgov_beta };
