import { r as registerInstance, h, H as Host } from './core-5dc11fcc.js';
var BcgovCallout = /** @class */ (function () {
    function BcgovCallout(hostRef) {
        registerInstance(this, hostRef);
    }
    BcgovCallout.prototype.render = function () {
        return (h(Host, null, h("slot", null)));
    };
    Object.defineProperty(BcgovCallout, "style", {
        get: function () { return ".sc-bcgov-callout-h{display:block;padding:25px;border-left:10px solid var(--bcgov-blue-background);margin:16px 0;background-color:#f2f2f2}"; },
        enumerable: true,
        configurable: true
    });
    return BcgovCallout;
}());
export { BcgovCallout as bcgov_callout };
