import { r as registerInstance, h, H as Host } from './core-1d11420d.js';

const BcgovSearch = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h(Host, null, h("button", null, h("slot", null))));
    }
};

export { BcgovSearch as bcgov_search };