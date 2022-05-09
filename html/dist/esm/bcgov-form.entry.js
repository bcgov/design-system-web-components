import { r as registerInstance, h, H as Host } from './index-cfce1eb0.js';

const BcgovForm = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h(Host, { className: "bcgov-form" }, h("slot", null)));
  }
};

export { BcgovForm as bcgov_form };
