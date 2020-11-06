'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const core = require('./core-5a7012d7.js');

const BcgovSearch = class {
    constructor(hostRef) {
        core.registerInstance(this, hostRef);
        /** A number that represents mobile search breakpoint in px; */
        this.breakpoint = 0;
    }
    componentWillLoad() {
        const self = this;
        self.isSearchMobile();
        window.addEventListener("resize", function () {
            self.isSearchMobile();
        });
    }
    isSearchMobile() {
        if (window.innerWidth >= this.breakpoint) {
            if (!this.el.classList.contains("is-search-desktop")) {
                this.el.classList.add("is-search-desktop");
            }
        }
        else {
            this.el.classList.remove("is-search-desktop");
        }
    }
    onKeyPress(event) {
        if (event.which === 10 || event.which === 13) {
            event.target.closest('form').submit();
        }
    }
    render() {
        return (core.h(core.Host, { class: "bcgov-search" }, core.h("div", { class: "search-container" }, core.h("slot", null))));
    }
    get el() { return core.getElement(this); }
};

exports.bcgov_search = BcgovSearch;
