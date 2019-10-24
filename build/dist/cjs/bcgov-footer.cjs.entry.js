'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const core = require('./core-5f64101f.js');

const BcgovFooter = class {
    constructor(hostRef) {
        core.registerInstance(this, hostRef);
    }
    render() {
        return (core.h(core.Host, null, core.h("slot", null)));
    }
};

exports.bcgov_footer = BcgovFooter;
