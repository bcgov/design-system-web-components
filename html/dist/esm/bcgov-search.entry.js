import { r as registerInstance, h, H as Host, g as getElement } from './core-413b4b4d.js';
import { l as library, f as faSearch, i as icon } from './index.es-c1255c77.js';

const BcgovSearch = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    componentDidRender() {
        const submitElement = this.el.querySelector('input[type="submit"');
        library.add(faSearch);
        submitElement.setAttribute("value", icon(faSearch).html[0]);
    }
    render() {
        return (h(Host, null, h("div", { class: "search-container" }, h("slot", { name: "form" }))));
    }
    get el() { return getElement(this); }
};

export { BcgovSearch as bcgov_search };
