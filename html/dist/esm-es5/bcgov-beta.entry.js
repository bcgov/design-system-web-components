import { r as registerInstance, h, g as getElement, H as Host } from './core-07a37eb8.js';
var BcgovBeta = /** @class */ (function () {
    function class_1(hostRef) {
        registerInstance(this, hostRef);
        this.content = "This Application is currently in Beta Phase";
        this.label = "Beta";
    }
    class_1.prototype.componentWillLoad = function () {
        this.content = this.el.textContent || this.content;
        this.el.innerHTML = this.label;
    };
    class_1.prototype.render = function () {
        return (h(Host, { class: "bcgov-beta", "aria-label": this.content, "aria-role": "alert", tabindex: "0" }));
    };
    Object.defineProperty(class_1.prototype, "el", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    return class_1;
}());
export { BcgovBeta as bcgov_beta };
