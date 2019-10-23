'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const core = require('./core-06604fdb.js');

const BcgovBeta = class {
    constructor(hostRef) {
        core.registerInstance(this, hostRef);
        this.content = "This Application is currently in Beta Phase";
        this.label = "Beta";
    }
    componentWillLoad() {
        this.content = this.el.textContent || this.content;
        this.el.innerHTML = this.label;
    }
    render() {
        return core.h(core.Host, { "aria-label": this.content, "aria-role": "alert", tabindex: "0" });
    }
    get el() { return core.getElement(this); }
    static get style() { return ".sc-bcgov-beta-h{color:var(--bcgov-yellow-primary);position:relative;top:-5px;text-transform:uppercase;font-weight:200;margin-left:8px;font-size:.95rem}"; }
};

exports.bcgov_beta = BcgovBeta;
