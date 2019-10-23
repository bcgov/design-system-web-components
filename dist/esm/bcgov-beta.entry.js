import { r as registerInstance, h, g as getElement, H as Host } from './core-5dc11fcc.js';

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
    static get style() { return ".sc-bcgov-beta-h{color:var(--bcgov-yellow-primary);position:relative;top:-5px;text-transform:uppercase;font-weight:200;margin-left:8px;font-size:.95rem}"; }
};

export { BcgovBeta as bcgov_beta };
