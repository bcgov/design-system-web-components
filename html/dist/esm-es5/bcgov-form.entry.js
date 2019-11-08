import { r as registerInstance, h, H as Host } from './core-1d11420d.js';
var BcgovForm = /** @class */ (function () {
    function BcgovForm(hostRef) {
        registerInstance(this, hostRef);
    }
    BcgovForm.prototype.render = function () {
        return (h(Host, null, h("div", null, "This is a form component"), h("slot", null)));
    };
    return BcgovForm;
}());
export { BcgovForm as bcgov_form };
