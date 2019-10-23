import { r as registerInstance, h, H as Host } from './core-5dc11fcc.js';
var BcgovFooter = /** @class */ (function () {
    function BcgovFooter(hostRef) {
        registerInstance(this, hostRef);
    }
    BcgovFooter.prototype.render = function () {
        return (h(Host, null, h("slot", null)));
    };
    Object.defineProperty(BcgovFooter, "style", {
        get: function () { return ".sc-bcgov-footer-h{background-color:var(--bcgov-blue-primary);border-top:2px solid var(--bcgov-yellow-primary);color:var(--bcgov-white);min-height:50px;padding:0 15px;display:-webkit-box;display:-moz-box;display:-ms-flexbox;display:-webkit-flex;display:flex}.sc-bcgov-footer-h a.sc-bcgov-footer, .sc-bcgov-footer-h a.sc-bcgov-footer:active, .sc-bcgov-footer-h a.sc-bcgov-footer:focus, .sc-bcgov-footer-h a.sc-bcgov-footer:visited{color:var(--bcgov-white)!important}.sc-bcgov-footer-h a.sc-bcgov-footer{color:#fff}"; },
        enumerable: true,
        configurable: true
    });
    return BcgovFooter;
}());
export { BcgovFooter as bcgov_footer };
