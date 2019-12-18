'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const core = require('./core-377f239a.js');

const BcgovFooter = class {
    constructor(hostRef) {
        core.registerInstance(this, hostRef);
        /** Alignment of menu */
        this.alignment = "left";
    }
    render() {
        const classes = "bcgov-footer" + " align-" + this.alignment;
        const props = { role: "footer", class: classes };
        return (core.h(core.Host, Object.assign({}, props), core.h("slot", null)));
    }
};

exports.bcgov_footer = BcgovFooter;
