import { r as registerInstance, h, H as Host } from './index-d7bc6b18.js';
var BcgovCarousel = /** @class */ (function () {
    function BcgovCarousel(hostRef) {
        registerInstance(this, hostRef);
    }
    BcgovCarousel.prototype.render = function () {
        return (h(Host, { class: "bcgov-carousel" }, h("slot", null)));
    };
    return BcgovCarousel;
}());
export { BcgovCarousel as bcgov_carousel };
