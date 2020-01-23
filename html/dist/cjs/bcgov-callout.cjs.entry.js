'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const core = require('./core-eae88e05.js');

const BcgovCallout = class {
    constructor(hostRef) {
        core.registerInstance(this, hostRef);
    }
    render() {
        return (core.h(core.Host, { class: "bcgov-callout" }, core.h("slot", null)));
    }
};

exports.bcgov_callout = BcgovCallout;
