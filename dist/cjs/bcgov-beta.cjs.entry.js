'use strict';

var index = require('./index-B8yp6nTe.js');

const BcgovBeta = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    content = "This Application is currently in Beta Phase";
    label = "Beta";
    stateContent = "";
    get el() { return index.getElement(this); }
    componentWillLoad() {
        this.stateContent = this.el.textContent || this.content;
        this.el.innerHTML = this.label;
    }
    render() {
        return (index.h(index.Host, { key: '24addbdeca5d4d1c24980254e5a26ad22ab01592', class: "bcgov-beta", "aria-label": this.stateContent, role: "alert", tabindex: "0" }));
    }
};

exports.bcgov_beta = BcgovBeta;
