import { r as registerInstance, h } from './core-5dc11fcc.js';

const BcgovSectionDivider = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.inlineStyles = { height: this.thickness, margin: this.margins };
    }
    componentDidLoad() {
        this.inlineStyles = { height: this.thickness, margin: this.margins };
    }
    render() {
        return h("div", { class: "divider", style: this.inlineStyles });
    }
    static get style() { return ".sc-bcgov-section-divider-h{width:100%}.sc-bcgov-section-divider-h .divider.sc-bcgov-section-divider{background-color:hsla(0,0%,60.4%,.33);height:1px;width:100%;margin:3rem 0}"; }
};

export { BcgovSectionDivider as bcgov_section_divider };
