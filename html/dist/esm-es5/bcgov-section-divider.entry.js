import { r as registerInstance, h } from './core-1d11420d.js';
var BcgovSectionDivider = /** @class */ (function () {
    function BcgovSectionDivider(hostRef) {
        registerInstance(this, hostRef);
        this.inlineStyles = { height: this.thickness, margin: this.margins };
    }
    BcgovSectionDivider.prototype.componentDidLoad = function () {
        this.inlineStyles = { height: this.thickness, margin: this.margins };
    };
    BcgovSectionDivider.prototype.render = function () {
        return h("div", { class: "divider", style: this.inlineStyles });
    };
    return BcgovSectionDivider;
}());
export { BcgovSectionDivider as bcgov_section_divider };
