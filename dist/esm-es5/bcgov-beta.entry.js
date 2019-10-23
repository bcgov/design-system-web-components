import { r as registerInstance, h, g as getElement, H as Host } from './core-5dc11fcc.js';
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
        return h(Host, { "aria-label": this.content, "aria-role": "alert", tabindex: "0" });
    };
    Object.defineProperty(BcgovBeta.prototype, "el", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BcgovBeta, "style", {
        get: function () { return ".sc-bcgov-beta-h{color:var(--bcgov-yellow-primary);position:relative;top:-5px;text-transform:uppercase;font-weight:200;margin-left:8px;font-size:.95rem}"; },
        enumerable: true,
        configurable: true
    });
    return BcgovBeta;
}());
export { BcgovBeta as bcgov_beta };
