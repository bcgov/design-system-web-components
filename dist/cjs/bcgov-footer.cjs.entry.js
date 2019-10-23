'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const core = require('./core-06604fdb.js');

const BcgovFooter = class {
    constructor(hostRef) {
        core.registerInstance(this, hostRef);
    }
    render() {
        return (core.h(core.Host, null, core.h("slot", null)));
    }
    static get style() { return ".sc-bcgov-footer-h{background-color:var(--bcgov-blue-primary);border-top:2px solid var(--bcgov-yellow-primary);color:var(--bcgov-white);min-height:50px;padding:0 15px;display:-webkit-box;display:-moz-box;display:-ms-flexbox;display:-webkit-flex;display:flex}.sc-bcgov-footer-h a.sc-bcgov-footer, .sc-bcgov-footer-h a.sc-bcgov-footer:active, .sc-bcgov-footer-h a.sc-bcgov-footer:focus, .sc-bcgov-footer-h a.sc-bcgov-footer:visited{color:var(--bcgov-white)!important}.sc-bcgov-footer-h a.sc-bcgov-footer{color:#fff}"; }
};

exports.bcgov_footer = BcgovFooter;
