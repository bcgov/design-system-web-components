import { r as registerInstance, h, g as getElement, H as Host } from './index-cfce1eb0.js';

const BcgovBeta = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.content = "This Application is currently in Beta Phase";
    this.label = "Beta";
    this.stateContent = "";
  }
  componentWillLoad() {
    this.stateContent = this.el.textContent || this.content;
    this.el.innerHTML = this.label;
  }
  render() {
    return (h(Host, { class: "bcgov-beta", "aria-label": this.stateContent, role: "alert", tabindex: "0" }));
  }
  get el() { return getElement(this); }
};

export { BcgovBeta as bcgov_beta };
