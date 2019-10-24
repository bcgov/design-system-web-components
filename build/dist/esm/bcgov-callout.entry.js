import { r as registerInstance, h, H as Host } from './core-5b448c27.js';

const BcgovCallout = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h(Host, null, h("slot", null)));
    }
};

export { BcgovCallout as bcgov_callout };
