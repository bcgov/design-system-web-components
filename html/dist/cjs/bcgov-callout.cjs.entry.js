'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const core = require('./core-6e75ac3d.js');

const BcgovCallout = class {
    constructor(hostRef) {
        core.registerInstance(this, hostRef);
    }
    render() {
        return (core.h(core.Host, null, core.h("slot", null)));
    }
};

exports.bcgov_callout = BcgovCallout;
