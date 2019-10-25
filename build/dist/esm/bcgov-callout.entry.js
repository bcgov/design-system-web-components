import { r as registerInstance, h, H as Host } from './core-06b3e689.js';

const BcgovCallout = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h(Host, null, h("slot", null)));
    }
};

export { BcgovCallout as bcgov_callout };
