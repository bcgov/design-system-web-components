'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const core = require('./core-5a7012d7.js');

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
        return (core.h(core.Host, { class: "bcgov-beta", "aria-label": this.content, "aria-role": "alert", tabindex: "0" }));
    }
    get el() { return core.getElement(this); }
};

exports.bcgov_beta = BcgovBeta;
