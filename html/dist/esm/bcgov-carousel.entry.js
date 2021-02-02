import { r as registerInstance, h, H as Host } from './index-d7bc6b18.js';

const BcgovCarousel = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h(Host, { class: "bcgov-carousel" }, h("slot", null)));
    }
};

export { BcgovCarousel as bcgov_carousel };
