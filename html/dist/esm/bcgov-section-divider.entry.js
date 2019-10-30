import { r as registerInstance, h } from './core-f0efafd8.js';

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
};

export { BcgovSectionDivider as bcgov_section_divider };
