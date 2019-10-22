'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const core = require('./core-06604fdb.js');

const BcgovCallout = class {
    constructor(hostRef) {
        core.registerInstance(this, hostRef);
    }
    render() {
        return (core.h(core.Host, null, core.h("slot", null)));
    }
    static get style() { return ".sc-bcgov-callout-h{display:block;padding:25px;border-left:10px solid var(--bcgov-blue-background);margin:16px 0;background-color:#f2f2f2}"; }
};

exports.bcgov_callout = BcgovCallout;
