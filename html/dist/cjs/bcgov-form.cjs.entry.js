'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const core = require('./core-630b4e33.js');

const BcgovForm = class {
    constructor(hostRef) {
        core.registerInstance(this, hostRef);
    }
    render() {
        return (core.h(core.Host, null, core.h("div", null, "This is a form component"), core.h("slot", null)));
    }
};

exports.bcgov_form = BcgovForm;
