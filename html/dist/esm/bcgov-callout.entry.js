import { r as registerInstance, h, H as Host } from './index-cfce1eb0.js';

const BcgovCallout = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h(Host, { class: "bcgov-callout" }, h("slot", null)));
  }
};

export { BcgovCallout as bcgov_callout };
