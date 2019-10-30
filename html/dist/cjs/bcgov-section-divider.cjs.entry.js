'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const core = require('./core-49a26586.js');

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
};

exports.bcgov_section_divider = BcgovSectionDivider;
