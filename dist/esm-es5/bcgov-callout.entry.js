import { r as registerInstance, h, H as Host } from './core-10536731.js';
var BcgovCallout = /** @class */ (function () {
    function BcgovCallout(hostRef) {
        registerInstance(this, hostRef);
    }
    BcgovCallout.prototype.render = function () {
        return (h(Host, { class: "bcgov-callout" }, h("slot", null)));
    };
    return BcgovCallout;
}());
export { BcgovCallout as bcgov_callout };