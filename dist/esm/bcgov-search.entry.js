import { r as registerInstance, h, H as Host, g as getElement } from './core-10536731.js';

const BcgovSearch = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h(Host, null, h("div", { class: "search-container" }, h("slot", null))));
    }
    get el() { return getElement(this); }
};

export { BcgovSearch as bcgov_search };