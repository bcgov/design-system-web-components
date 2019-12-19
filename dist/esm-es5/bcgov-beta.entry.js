import { r as registerInstance, h, g as getElement, H as Host } from './core-10536731.js';
var BcgovBeta = /** @class */ (function () {
    function BcgovBeta(hostRef) {
        registerInstance(this, hostRef);
        this.content = "This Application is currently in Beta Phase";
        this.label = "Beta";
    }
    BcgovBeta.prototype.componentWillLoad = function () {
        this.content = this.el.textContent || this.content;
        this.el.innerHTML = this.label;
    };
    BcgovBeta.prototype.render = function () {
        return (h(Host, { class: "bcgov-beta", "aria-label": this.content, "aria-role": "alert", tabindex: "0" }));
    };
    Object.defineProperty(BcgovBeta.prototype, "el", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    return BcgovBeta;
}());
export { BcgovBeta as bcgov_beta };