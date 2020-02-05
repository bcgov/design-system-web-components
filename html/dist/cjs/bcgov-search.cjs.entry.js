'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const core = require('./core-5a7012d7.js');

const BcgovSearch = class {
    constructor(hostRef) {
        core.registerInstance(this, hostRef);
    }
    render() {
        return (core.h(core.Host, null, core.h("div", { class: "search-container" }, core.h("slot", null))));
    }
    get el() { return core.getElement(this); }
};

exports.bcgov_search = BcgovSearch;
