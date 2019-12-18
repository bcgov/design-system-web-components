import { r as registerInstance, h, H as Host } from './core-7721131c.js';
var BcgovFooter = /** @class */ (function () {
    function BcgovFooter(hostRef) {
        registerInstance(this, hostRef);
        /** Alignment of menu */
        this.alignment = "left";
    }
    BcgovFooter.prototype.render = function () {
        var classes = "bcgov-footer" + " align-" + this.alignment;
        var props = { role: "footer", class: classes };
        return (h(Host, Object.assign({}, props), h("slot", null)));
    };
    return BcgovFooter;
}());
export { BcgovFooter as bcgov_footer };
