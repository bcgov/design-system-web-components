'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const core = require('./core-6e75ac3d.js');
const index_es = require('./index.es-cff197eb.js');

const BcgovSearch = class {
    constructor(hostRef) {
        core.registerInstance(this, hostRef);
    }
    componentDidRender() {
        const submitElement = this.el.querySelector('input[type="submit"');
        index_es.library.add(index_es.faSearch);
        submitElement.setAttribute("value", index_es.icon(index_es.faSearch).html[0]);
    }
    render() {
        return (core.h(core.Host, null, core.h("div", { class: "search-container" }, core.h("slot", { name: "form" }))));
    }
    get el() { return core.getElement(this); }
};

exports.bcgov_search = BcgovSearch;
