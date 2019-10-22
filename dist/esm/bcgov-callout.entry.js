import { r as registerInstance, h, H as Host } from './core-5dc11fcc.js';

const BcgovCallout = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h(Host, null, h("slot", null)));
    }
    static get style() { return ".sc-bcgov-callout-h{display:block;padding:25px;border-left:10px solid var(--bcgov-blue-background);margin:16px 0;background-color:#f2f2f2}"; }
};

export { BcgovCallout as bcgov_callout };
