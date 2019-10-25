import { r as registerInstance, h, H as Host } from './core-6fb69b7f.js';

const BcgovCallout = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h(Host, null, h("slot", null)));
    }
};

export { BcgovCallout as bcgov_callout };
