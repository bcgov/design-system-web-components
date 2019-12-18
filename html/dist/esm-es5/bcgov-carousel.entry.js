import { r as registerInstance, h, H as Host } from './core-7721131c.js';
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