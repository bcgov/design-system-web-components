'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const core = require('./core-85ceac9a.js');

const BcgovCarousel = class {
    constructor(hostRef) {
        core.registerInstance(this, hostRef);
    }
    render() {
        return (core.h(core.Host, { class: "bcgov-carousel" }, core.h("slot", null)));
    }
};

exports.bcgov_carousel = BcgovCarousel;
