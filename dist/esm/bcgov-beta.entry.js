import { r as registerInstance, h, g as getElement, H as Host } from './core-7721131c.js';

const BcgovBeta = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.content = "This Application is currently in Beta Phase";
        this.label = "Beta";
    }
    componentWillLoad() {
        this.content = this.el.textContent || this.content;
        this.el.innerHTML = this.label;
    }
    render() {
        return h(Host, { "aria-label": this.content, "aria-role": "alert", tabindex: "0" });
    }
    get el() { return getElement(this); }
};

export { BcgovBeta as bcgov_beta };
