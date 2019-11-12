import { r as registerInstance, h, H as Host } from './core-413b4b4d.js';

const BcgovForm = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h(Host, null, h("div", null, "This is a form component"), h("slot", null)));
    }
};

export { BcgovForm as bcgov_form };
