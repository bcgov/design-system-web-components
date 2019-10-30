'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const core = require('./core-822b4972.js');

const BcgovSearch = class {
    constructor(hostRef) {
        core.registerInstance(this, hostRef);
    }
    render() {
        return (core.h(core.Host, null, core.h("button", null, core.h("slot", null))));
    }
};

exports.bcgov_search = BcgovSearch;
