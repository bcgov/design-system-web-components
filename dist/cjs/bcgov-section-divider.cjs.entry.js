'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const core = require('./core-06604fdb.js');

const BcgovSectionDivider = class {
    constructor(hostRef) {
        core.registerInstance(this, hostRef);
        this.inlineStyles = { height: this.thickness, margin: this.margins };
    }
    componentDidLoad() {
        this.inlineStyles = { height: this.thickness, margin: this.margins };
    }
    render() {
        return core.h("div", { class: "divider", style: this.inlineStyles });
    }
    static get style() { return ".sc-bcgov-section-divider-h{width:100%}.sc-bcgov-section-divider-h .divider.sc-bcgov-section-divider{background-color:hsla(0,0%,60.4%,.33);height:1px;width:100%;margin:3rem 0}"; }
};

exports.bcgov_section_divider = BcgovSectionDivider;
