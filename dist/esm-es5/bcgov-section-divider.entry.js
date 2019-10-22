import { r as registerInstance, h } from './core-5dc11fcc.js';
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
    Object.defineProperty(BcgovSectionDivider, "style", {
        get: function () { return ".sc-bcgov-section-divider-h{width:100%}.sc-bcgov-section-divider-h .divider.sc-bcgov-section-divider{background-color:hsla(0,0%,60.4%,.33);height:1px;width:100%;margin:3rem 0}"; },
        enumerable: true,
        configurable: true
    });
    return BcgovSectionDivider;
}());
export { BcgovSectionDivider as bcgov_section_divider };
