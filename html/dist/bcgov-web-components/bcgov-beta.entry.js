import { r as registerInstance, h, e as Host, g as getElement } from './index-268dcccf.js';

let BcgovBeta = class {
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
