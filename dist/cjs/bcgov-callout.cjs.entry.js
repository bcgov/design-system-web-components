'use strict';

var index = require('./index-rECYbytW.js');

const BcgovCallout = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: '24e0f71b28f4ffc6ebdd5dcb7d1ba0b5ffed3771', class: "bcgov-callout" }, index.h("slot", { key: '58c17fe1325bdc4d31f5aa11e9f7df0d3d6f69d9' })));
    }
};

exports.bcgov_callout = BcgovCallout;
