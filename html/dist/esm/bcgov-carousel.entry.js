import { r as registerInstance, h, H as Host } from './core-d4bdadec.js';

const BcgovCarousel = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h(Host, { class: "bcgov-carousel" }, h("slot", null)));
    }
};

export { BcgovCarousel as bcgov_carousel };