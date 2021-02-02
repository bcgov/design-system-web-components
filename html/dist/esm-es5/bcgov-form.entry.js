import { r as registerInstance, h, H as Host } from './index-d7bc6b18.js';
var BcgovForm = /** @class */ (function () {
    function BcgovForm(hostRef) {
        registerInstance(this, hostRef);
    }
    BcgovForm.prototype.render = function () {
        return (h(Host, { className: "bcgov-form" }, h("slot", null)));
    };
    return BcgovForm;
}());
export { BcgovForm as bcgov_form };
